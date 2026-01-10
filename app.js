// ================= FIREBASE IMPORTS =================
console.log("🔥 JS FILE LOADED");

import { db, auth } from "./firebase.js";

import {
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  updateDoc,
  serverTimestamp,
  query,
  orderBy
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

// ================= AUTH STATE MANAGEMENT =================
let currentUser = null;
let currentUserRole = null;

// Listen for auth state changes
onAuthStateChanged(auth, async (user) => {
  if (user) {
    window.currentUser = user;
    // Get user role from Firestore
    const userDoc = await getDoc(doc(db, "users", user.uid));
    if (userDoc.exists()) {
      currentUserRole = userDoc.data().role;
      window.currentUser = user;
      window.currentUserRole = currentUserRole;
      window.isLoggedIn = true;
      window.loggedInUserRole = currentUserRole;
      
      // Update nav button
      const navBtn = document.getElementById('nav-auth-btn');
      if (navBtn) {
        navBtn.innerText = "Logout";
        navBtn.onclick = () => handleLogout();
      }
      
      console.log("User logged in:", user.email, "Role:", currentUserRole);
    }
  } else {
    window.currentUser = user;
    window.currentUserRole = currentUserRole;

    window.isLoggedIn = false;
    window.loggedInUserRole = null;
    
    const navBtn = document.getElementById('nav-auth-btn');
    if (navBtn) {
      navBtn.innerText = "Login";
      navBtn.onclick = () => navigate('auth');
    }
  }
});

// ================= SIGNUP FUNCTION =================
window.handleSignup = async function(username, password, role, fullName = "") {
  try {
    if (!username || !password) {
      alert("Please fill all fields");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    // Create email from username
    const email = username.toLowerCase().replace(/\s/g, '') + "@urbanresolve.app";
    
    // Create user in Firebase Auth
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Store user data in Firestore
    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      username: username,
      email: email,
      role: role,
      fullName: fullName || username,
      createdAt: serverTimestamp()
    });

    alert(`Account created successfully! You are now logged in as ${role}.`);
    
    // Navigate based on role
    if (role === 'authority') {
      navigate('authority-dashboard');
    } else {
      navigate('citizen-dashboard');
    }

  } catch (error) {
    console.error("Signup error:", error);
    if (error.code === 'auth/email-already-in-use') {
      alert("Username already exists. Please choose a different username or try logging in.");
    } else {
      alert("Signup error: " + error.message);
    }
  }
};

// ================= LOGIN FUNCTION =================
window.handleLogin = async function(username, password, role) {
    try {
        const email = username.toLowerCase().replace(/\s/g, '') + "@urbanresolve.app";
        const userCredential = await signInWithEmailAndPassword(auth, email, password);

        const userDoc = await getDoc(doc(db, "users", userCredential.user.uid));
        if (!userDoc.exists()) throw new Error("User data not found in Firestore");
        const userData = userDoc.data();

        if (userData.role !== role) {
            await signOut(auth);
            alert(`This account is registered as ${userData.role}, not ${role}.`);
            return;
        }

        alert(`Welcome back, ${userData.fullName}!`);

        // Wait a tick for auth state to update
        await waitForAuth();

if (window.loggedInUserRole === 'authority') {
  navigate('authority-dashboard');
} else {
  navigate('citizen-dashboard');
}


    } catch (error) {
        console.error("Login error:", error);
        alert(error.message);
    }
};



// ================= LOGOUT FUNCTION =================
window.handleLogout = async function() {
  try {
    await signOut(auth);
    alert("Logged out successfully");
    navigate('citizen-dashboard');
  } catch (error) {
    console.error("Logout error:", error);
    alert("Logout error: " + error.message);
  }
};

// ================= REPORT ISSUE =================
window.submitIssue = async function () {
  try {
    const issueId = "UR-" + Math.floor(100000 + Math.random() * 900000);
    
    const issueCategory = document.getElementById("issueCat").value;
    const finalCategory = issueCategory === "Other" 
      ? document.getElementById("otherCatInput").value 
      : issueCategory;

    const description = document.getElementById("issueDesc").value;
    const location = document.getElementById("coords").value;

    if (!description || !location) {
      alert("Please fill description and select location on map");
      return;
    }

    // Prepare reporter info
    let reportedBy = "Anonymous";
    let reportedByUid = null;
    let reportedByEmail = null;

    // Only fetch user info if currentUser exists
    if (window.currentUser && window.currentUser.uid) {
      const userDoc = await getDoc(doc(db, "users", window.currentUser.uid));
      if (userDoc.exists()) {
        reportedBy = userDoc.data().fullName;
        reportedByUid = window.currentUser.uid;
        reportedByEmail = window.currentUser.email;
      }
    }

    // Save issue
    await setDoc(doc(db, "issues", issueId), {
      issueId: issueId,
      type: finalCategory,
      description: description,
      location: location,
      priority: "Medium",
      status: "Submitted",
      pendingDays: 0,
      reportedBy: reportedBy,
      reportedByUid: reportedByUid,
      reportedByEmail: reportedByEmail,
      createdAt: serverTimestamp()
    });

    alert("Issue submitted successfully! Issue ID: " + issueId);
    navigate("track");
    
  } catch (e) {
    console.error("Error submitting issue:", e);
    alert("Error submitting issue: " + e.message);
  }
};


// ================= TRACK ISSUE =================
window.checkStatus = async function () {
  try {
    const issueId = document.getElementById("trackID").value.toUpperCase().trim();
    
    if (!issueId) {
      alert("Please enter an Issue ID");
      return;
    }
    
    const snap = await getDoc(doc(db, "issues", issueId));

    if (!snap.exists()) {
      alert("Issue not found");
      return;
    }

    const d = snap.data();
    document.getElementById("statusResult").classList.remove("hidden");
    document.getElementById("statusResult").innerHTML = `
      <b>ID:</b> ${d.issueId}<br>
      <b>Type:</b> ${d.type}<br>
      <b>Status:</b> ${d.status}<br>
      <b>Priority:</b> ${d.priority}<br>
      <b>Reported By:</b> ${d.reportedBy || 'Anonymous'}<br>
      <b>Location:</b> ${d.location}<br>
      <b>Description:</b> ${d.description}
    `;
  } catch (e) {
    console.error("Error fetching issue:", e);
    alert("Error fetching issue: " + e.message);
  }
};

// ================= LOAD ALL ISSUES FOR AUTHORITY =================
window.loadAllIssues = async function() {
  try {
    const issuesSnapshot = await getDocs(query(collection(db, "issues"), orderBy("createdAt", "desc")));
    
    const container = document.getElementById("all-issues-container");
    
    if (issuesSnapshot.empty) {
      container.innerHTML = `
        <div class="text-center py-12">
          <p class="text-slate-400 font-bold text-xl">No issues reported yet</p>
        </div>`;
      return;
    }

    let html = '<div class="space-y-4">';
    
    issuesSnapshot.forEach((doc) => {
      const issue = doc.data();
      const statusColor = {
        'Submitted': 'bg-blue-100 text-blue-800',
        'In Progress': 'bg-yellow-100 text-yellow-800',
        'Completed': 'bg-green-100 text-green-800',
        'Rejected': 'bg-red-100 text-red-800'
      }[issue.status] || 'bg-gray-100 text-gray-800';

      html += `
        <div class="bg-white p-6 border-2 border-slate-800 rounded-xl shadow-[4px_4px_0px_0px_rgba(30,41,59,1)]">
          <div class="flex justify-between items-start mb-4">
            <div>
              <h3 class="font-black text-xl text-slate-800">${issue.issueId}</h3>
              <p class="text-sm text-slate-500 font-bold">${issue.type}</p>
            </div>
            <span class="px-4 py-2 rounded-lg font-bold ${statusColor}">${issue.status}</span>
          </div>
          <p class="text-slate-700 mb-3">${issue.description}</p>
          <div class="grid grid-cols-2 gap-3 text-sm">
            <div><b>Reported By:</b> ${issue.reportedBy || 'Anonymous'}</div>
            <div><b>Priority:</b> ${issue.priority}</div>
            <div><b>Location:</b> ${issue.location}</div>
          </div>
          <button onclick="viewIssueDetail('${issue.issueId}')" class="mt-4 w-full bg-slate-800 text-white py-3 rounded-lg font-bold hover:bg-slate-700">
            UPDATE STATUS
          </button>
        </div>
      `;
    });
    
    html += '</div>';
    container.innerHTML = html;
    
  } catch (error) {
    console.error("Error loading issues:", error);
    alert("Error loading issues: " + error.message);
  }
};

// ================= VIEW ISSUE DETAIL FOR AUTHORITY =================
window.viewIssueDetail = async function(issueId) {
  try {
    const snap = await getDoc(doc(db, "issues", issueId));
    if (!snap.exists()) {
      alert("Issue not found");
      return;
    }

    const data = snap.data();
    const container = document.getElementById('app');
    
    container.innerHTML = `
      <div class="max-w-4xl mx-auto py-10">
        <button onclick="navigate('authority-dashboard')" class="mb-6 px-6 py-3 bg-slate-200 border-2 border-slate-800 rounded-lg font-bold hover:bg-slate-300">
          ← Back to Dashboard
        </button>
        
        <div class="bg-white border-2 border-slate-800 rounded-2xl p-8 shadow-[6px_6px_0px_0px_rgba(30,41,59,1)]">
          <h2 class="text-3xl font-black mb-6 text-slate-800">Issue Details: ${data.issueId}</h2>
          
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div class="space-y-4">
              <div class="bg-slate-50 p-4 border-2 border-slate-800 rounded-xl">
                <label class="text-xs font-black text-slate-400 uppercase">Description</label>
                <p class="font-bold text-slate-800">${data.description}</p>
              </div>
              
              <div class="grid grid-cols-2 gap-4">
                <div class="bg-slate-50 p-4 border-2 border-slate-800 rounded-xl">
                  <label class="text-xs font-black text-slate-400 uppercase">Category</label>
                  <p class="font-black text-blue-600">${data.type}</p>
                </div>
                <div class="bg-slate-50 p-4 border-2 border-slate-800 rounded-xl">
                  <label class="text-xs font-black text-slate-400 uppercase">Priority</label>
                  <p class="font-black text-red-600">${data.priority}</p>
                </div>
              </div>
              
              <div class="bg-slate-50 p-4 border-2 border-slate-800 rounded-xl">
                <label class="text-xs font-black text-slate-400 uppercase">Reported By</label>
                <p class="font-bold">${data.reportedBy || 'Anonymous'}</p>
              </div>
              
              <div class="bg-slate-50 p-4 border-2 border-slate-800 rounded-xl">
                <label class="text-xs font-black text-slate-400 uppercase">Location</label>
                <p class="font-bold">${data.location}</p>
              </div>
            </div>

            <div class="space-y-6">
              <h4 class="font-black text-slate-800 uppercase">Update Status</h4>
              
              <select id="update-status-val" class="w-full p-4 rounded-xl border-2 border-slate-800 font-bold bg-white">
                <option value="Submitted" ${data.status === 'Submitted' ? 'selected' : ''}>Submitted</option>
                <option value="In Progress" ${data.status === 'In Progress' ? 'selected' : ''}>In Progress</option>
                <option value="Completed" ${data.status === 'Completed' ? 'selected' : ''}>Completed</option>
                <option value="Rejected" ${data.status === 'Rejected' ? 'selected' : ''}>Rejected</option>
              </select>
              
              <select id="update-priority-val" class="w-full p-4 rounded-xl border-2 border-slate-800 font-bold bg-white">
                <option value="Low" ${data.priority === 'Low' ? 'selected' : ''}>Low Priority</option>
                <option value="Medium" ${data.priority === 'Medium' ? 'selected' : ''}>Medium Priority</option>
                <option value="High" ${data.priority === 'High' ? 'selected' : ''}>High Priority</option>
                <option value="Critical" ${data.priority === 'Critical' ? 'selected' : ''}>Critical Priority</option>
              </select>
              
              <textarea id="update-notes" placeholder="Add notes or comments..." class="w-full p-4 border-2 border-slate-800 rounded-xl h-32 font-bold"></textarea>
              
              <button onclick="saveIssueUpdate('${data.issueId}')" class="w-full bg-slate-800 text-white py-4 rounded-xl font-black shadow-[4px_4px_0px_0px_rgba(59,130,246,1)] hover:translate-y-1 transition-all">
                SAVE CHANGES
              </button>
            </div>
          </div>
        </div>
      </div>`;
    
    lucide.createIcons();
    
  } catch (error) {
    console.error("Error viewing issue:", error);
    alert("Error: " + error.message);
  }
};

// ================= SAVE ISSUE UPDATE =================
window.saveIssueUpdate = async function(issueId) {
  try {
    // Ensure currentUser is ready
    let attempts = 0;
    while ((!window.currentUser || !window.currentUser.email) && attempts < 10) {
      await new Promise(res => setTimeout(res, 500)); // wait 0.5s
      attempts++;
    }

    if (!window.currentUser || !window.currentUser.email) {
      alert("You must be logged in to update the issue");
      navigate('auth');
      return;
    }

    const newStatus = document.getElementById('update-status-val').value;
    const newPriority = document.getElementById('update-priority-val').value;
    const notes = document.getElementById('update-notes').value;

    await updateDoc(doc(db, "issues", issueId), {
      status: newStatus,
      priority: newPriority,
      notes: notes,
      updatedAt: serverTimestamp(),
      updatedBy: window.currentUser.email
    });

    alert(`Issue ${issueId} updated successfully!`);
    navigate('authority-dashboard');
    
  } catch (error) {
    console.error("Update error:", error);
    alert("Update failed: " + error.message);
  }
};
