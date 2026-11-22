(function () {
  "use strict";

  const STUDENTS_DB = {
    "20250482": {
      id: "20250482",
      name: "Student A (Mary Pertem)",
      shortName: "Student A",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&q=80",
      department: "Business Informatics",
      semester: "Semester 3 (Fall 2026)",
      riskLevel: "MEDIUM",
      advisor: "Dr. Reham H.",
      alertStatus: "Pending Follow-up",
      attendance: 75,
      attendanceDelta: "-5% below target",
      midtermScore: 65,
      midtermClassAvg: "Class average: 68%",
      quizAvg: 70,
      quizNote: "5 quizzes completed",
      assignmentAvg: 80,
      assignmentNote: "10 submissions recorded",
      currentStatusText: "Medium Risk - Early Support Recommended",
      taSchedule: "Scheduled for Nov 24, TA Iman",
      advisorMeetingStatus: "Pending scheduling",
      studyPlanStatus: "Assigned",
      courses: [
        { code: "BINF 301", name: "Data Structures", prev: "72%", curr: "65%", risk: "MEDIUM", att: "75%", assign: "78%", trend: "Stable" },
        { code: "FINA 201", name: "Financial Accounting", prev: "68%", curr: "55%", risk: "HIGH", att: "62%", assign: "65%", trend: "Declining" },
        { code: "BSIN 302", name: "Database Systems", prev: "76%", curr: "72%", risk: "LOW", att: "88%", assign: "82%", trend: "Good" }
      ],
      gradeBreakdown: {
        courseLabel: "BNF 301 (Data Structures)",
        midtermPct: 65,
        thresholdPct: 70,
        riskLabel: "Medium Risk",
        components: [
          { title: "Midterm Examination", weight: "Weighted 35% of total grade", value: 65, display: "65/100 (65%)", status: "Below class median (68%)", statusType: "amber", barColor: "#f59e0b" },
          { title: "Quizzes (Avg of 5)", weight: "Weighted 15%", value: 70, display: "70/100 (70%)", status: "Meeting baseline", statusType: "blue", barColor: "#4f46e5" },
          { title: "Programming Labs & Assignments", weight: "Weighted 25%", value: 78, display: "78/100 (78%)", status: "Consistent", statusType: "green", barColor: "#16a34a" },
          { title: "Class Participation & LMS Activity", weight: "Weighted 10%", value: 52, display: "52/100 (52%)", status: "Low active engagement", statusType: "amber", barColor: "#f59e0b" },
          { title: "Attendance Rate", weight: "Weighted 15%", value: 75, display: "75%", status: "Warning (minimum required: 80%)", statusType: "amber", barColor: "#f59e0b" }
        ],
        summary: "Student scored 65% on the midterm (falling below the 70% threshold). While programming lab submissions are steady (78%), quiz scores and attendance (75%) combined with low participation explain the overall Medium Risk classification.",
        defaultComment: "Student A (Mary Pertem) achieved 65% on the BNF 301 midterm, which is slightly below the class average of 68%. The grade is primarily affected by failing scores on Quizzes 3 and 4, coupled with a 75% attendance rate (5% below target). While lab work remains satisfactory at 78%, attendance and quiz preparation require immediate intervention. Recommend mandatory TA office hours 2 hrs/week to review data structure fundamentals before the final exam and an advisor check-in next week.",
        comments: [
          {
            author: "Dr. Reham H.",
            avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80",
            time: "Oct 28, 2026 · 11:20 AM",
            text: "Grade: 65% Midterm Review. Student was contacted regarding midterm grade boundary drop. Noted difficulties with binary search trees and heap algorithms. Assigned to TA Iman for remedial session on Nov 4."
          },
          {
            author: "Dr. Reham H.",
            avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80",
            time: "Oct 15, 2026 · 09:14 AM",
            text: "Attendance warning: Attendance dropped to 75%. Automated early warning alert dispatched via SMS."
          }
        ]
      }
    },
    "9006771": {
      id: "9006771",
      name: "Mary Pertem",
      shortName: "Mary Pertem",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&q=80",
      department: "Business Informatics",
      semester: "Semester 3 (Fall 2026)",
      riskLevel: "HIGH",
      advisor: "Dr. Reham H.",
      alertStatus: "SMS Sent · Urgent",
      attendance: 68,
      attendanceDelta: "-7% below target",
      midtermScore: 42,
      midtermClassAvg: "Class average: 68%",
      quizAvg: 54,
      quizNote: "5 quizzes completed",
      assignmentAvg: 74,
      assignmentNote: "10 submissions recorded",
      currentStatusText: "High Risk - Mandatory TA Office Hours Assigned",
      taSchedule: "Scheduled for Nov 23, TA Iman",
      advisorMeetingStatus: "Requested within 48 hrs",
      studyPlanStatus: "Intensive Recovery Plan",
      courses: [
        { code: "BINF 301", name: "Java OOP / Data Structures", prev: "64%", curr: "42%", risk: "HIGH", att: "68%", assign: "74%", trend: "Declining" },
        { code: "FINA 201", name: "Financial Accounting", prev: "66%", curr: "61%", risk: "MEDIUM", att: "74%", assign: "76%", trend: "Stable" },
        { code: "BSIN 302", name: "Database Systems", prev: "75%", curr: "71%", risk: "LOW", att: "85%", assign: "80%", trend: "Good" }
      ],
      gradeBreakdown: {
        courseLabel: "BINF 301 / Java OOP",
        midtermPct: 42,
        thresholdPct: 70,
        riskLabel: "High Risk",
        components: [
          { title: "Midterm Examination", weight: "Weighted 35% of total grade", value: 42, display: "42/100 (42%)", status: "Below class median (68%)", statusType: "amber", barColor: "#ef4444" },
          { title: "Quizzes (Avg of 5)", weight: "Weighted 15%", value: 54, display: "54/100 (54%)", status: "Needs quiz coaching", statusType: "amber", barColor: "#f59e0b" },
          { title: "Programming Labs & Assignments", weight: "Weighted 25%", value: 74, display: "74/100 (74%)", status: "Consistent", statusType: "green", barColor: "#16a34a" },
          { title: "Class Participation & LMS Activity", weight: "Weighted 10%", value: 58, display: "58/100 (58%)", status: "Low active engagement", statusType: "amber", barColor: "#f59e0b" },
          { title: "Attendance Rate", weight: "Weighted 15%", value: 68, display: "68%", status: "Warning (minimum required: 80%)", statusType: "amber", barColor: "#ef4444" }
        ],
        summary: "Mary Pertem recorded a 42% midterm score and 68% attendance in BINF 301 / Java OOP. Immediate mandatory TA office hours and advisor review have been triggered.",
        defaultComment: "Mary Pertem triggered a High Risk alert due to a 42% midterm exam result and low attendance. Mandatory TA office hours are assigned starting this week.",
        comments: [
          {
            author: "Dr. Reham H.",
            avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80",
            time: "Nov 18, 2026 · 02:15 PM",
            text: "High risk intervention initiated. Mandatory TA office hours and SMS notification dispatched."
          }
        ]
      }
    },
    "2002839": {
      id: "2002839",
      name: "Macila Handan",
      shortName: "Macila Handan",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=160&q=80",
      department: "Business Informatics",
      semester: "Semester 3 (Fall 2026)",
      riskLevel: "MEDIUM",
      advisor: "Dr. Reham H.",
      alertStatus: "Advisor Consultation Scheduled",
      attendance: 72,
      attendanceDelta: "-3% below target",
      midtermScore: 48,
      midtermClassAvg: "Class average: 68%",
      quizAvg: 66,
      quizNote: "5 quizzes completed",
      assignmentAvg: 77,
      assignmentNote: "10 submissions recorded",
      currentStatusText: "Medium Risk - Consecutive Missed Labs",
      taSchedule: "Scheduled for Nov 25, TA Iman",
      advisorMeetingStatus: "Scheduled Nov 26",
      studyPlanStatus: "Assigned",
      courses: [
        { code: "BINF 301", name: "Java OOP / Data Structures", prev: "69%", curr: "48%", risk: "MEDIUM", att: "72%", assign: "77%", trend: "Declining" },
        { code: "FINA 201", name: "Financial Accounting", prev: "71%", curr: "68%", risk: "LOW", att: "81%", assign: "79%", trend: "Good" }
      ],
      gradeBreakdown: {
        courseLabel: "BINF 301 / Java OOP",
        midtermPct: 48,
        thresholdPct: 70,
        riskLabel: "Medium Risk",
        components: [
          { title: "Midterm Examination", weight: "Weighted 35% of total grade", value: 48, display: "48/100 (48%)", status: "Below class median (68%)", statusType: "amber", barColor: "#f59e0b" },
          { title: "Quizzes (Avg of 5)", weight: "Weighted 15%", value: 66, display: "66/100 (66%)", status: "Meeting baseline", statusType: "blue", barColor: "#4f46e5" },
          { title: "Programming Labs & Assignments", weight: "Weighted 25%", value: 77, display: "77/100 (77%)", status: "Consistent", statusType: "green", barColor: "#16a34a" },
          { title: "Class Participation & LMS Activity", weight: "Weighted 10%", value: 60, display: "60/100 (60%)", status: "Low active engagement", statusType: "amber", barColor: "#f59e0b" },
          { title: "Attendance Rate", weight: "Weighted 15%", value: 72, display: "72%", status: "Warning (minimum required: 80%)", statusType: "amber", barColor: "#f59e0b" }
        ],
        summary: "Macila Handan experienced consecutive missed labs and a 48% midterm score; advisor consultation is scheduled.",
        defaultComment: "Macila Handan should complete missed lab make-ups with TA Iman before the upcoming lab assessment.",
        comments: [
          {
            author: "Dr. Reham H.",
            avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80",
            time: "Nov 15, 2026 · 10:05 AM",
            text: "Advisor consultation scheduled following consecutive missed lab trigger."
          }
        ]
      }
    },
    "3006822": {
      id: "3006822",
      name: "Larry Sehan",
      shortName: "Larry Sehan",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80",
      department: "Business Informatics",
      semester: "Semester 3 (Fall 2026)",
      riskLevel: "MEDIUM",
      advisor: "Dr. Reham H.",
      alertStatus: "TA Follow-up Pending",
      attendance: 71,
      attendanceDelta: "-4% below target",
      midtermScore: 38,
      midtermClassAvg: "Class average: 68%",
      quizAvg: 61,
      quizNote: "5 quizzes completed",
      assignmentAvg: 73,
      assignmentNote: "10 submissions recorded",
      currentStatusText: "Medium Risk - Midterm Critical Fail Follow-up",
      taSchedule: "Pending TA Iman slot",
      advisorMeetingStatus: "Pending scheduling",
      studyPlanStatus: "Assigned",
      courses: [
        { code: "BINF 301", name: "Java OOP / Data Structures", prev: "62%", curr: "38%", risk: "MEDIUM", att: "71%", assign: "73%", trend: "Declining" },
        { code: "BSIN 302", name: "Database Systems", prev: "70%", curr: "67%", risk: "LOW", att: "80%", assign: "78%", trend: "Stable" }
      ],
      gradeBreakdown: {
        courseLabel: "BINF 301 / Java OOP",
        midtermPct: 38,
        thresholdPct: 70,
        riskLabel: "Medium Risk",
        components: [
          { title: "Midterm Examination", weight: "Weighted 35% of total grade", value: 38, display: "38/100 (38%)", status: "Below class median (68%)", statusType: "amber", barColor: "#f59e0b" },
          { title: "Quizzes (Avg of 5)", weight: "Weighted 15%", value: 61, display: "61/100 (61%)", status: "Meeting baseline", statusType: "blue", barColor: "#4f46e5" },
          { title: "Programming Labs & Assignments", weight: "Weighted 25%", value: 73, display: "73/100 (73%)", status: "Consistent", statusType: "green", barColor: "#16a34a" },
          { title: "Class Participation & LMS Activity", weight: "Weighted 10%", value: 55, display: "55/100 (55%)", status: "Low active engagement", statusType: "amber", barColor: "#f59e0b" },
          { title: "Attendance Rate", weight: "Weighted 15%", value: 71, display: "71%", status: "Warning (minimum required: 80%)", statusType: "amber", barColor: "#f59e0b" }
        ],
        summary: "Larry Sehan scored 38% on the midterm and has a pending TA follow-up session.",
        defaultComment: "Larry Sehan requires structured review of recursion, loops, and object-oriented inheritance with TA Iman.",
        comments: [
          {
            author: "Dr. Reham H.",
            avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80",
            time: "Nov 12, 2026 · 01:40 PM",
            text: "TA follow-up queued after midterm score fell below threshold."
          }
        ]
      }
    }
  };

  const QUEUE_ROWS = [
    {
      studentId: "9006771",
      name: "Mary Pertem",
      idLabel: "ID 9006771",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80",
      course: "BINF 301 / Java OOP",
      risk: "HIGH",
      midterm: "42% (Quiz/Midterm Drop)",
      trigger: "Fail Risk Boundary / Low Attendance",
      action: "Mandatory Office Hours with TA",
      status: "SMS Sent",
      statusClass: "status-sms"
    },
    {
      studentId: "2002839",
      name: "Macila Handan",
      idLabel: "ID 2002839",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&q=80",
      course: "BINF 301 / Java OOP",
      risk: "MEDIUM",
      midterm: "48%",
      trigger: "Consecutive Missed Labs",
      action: "Advisor Consultation",
      status: "Scheduled",
      statusClass: "status-scheduled"
    },
    {
      studentId: "3006822",
      name: "Larry Sehan",
      idLabel: "ID 3006822",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
      course: "BINF 301 / Java OOP",
      risk: "MEDIUM",
      midterm: "38%",
      trigger: "Midterm Critical Fail",
      action: "TA Follow-up Pending",
      status: "In Progress",
      statusClass: "status-progress"
    }
  ];

  const MIDTERM_COURSES = [
    { key: "BINF 301", label: "BINF 301\n(Data Structures)", high: 84, med: 90, low: 13 },
    { key: "Java OOP", label: "Java OOP", high: 68, med: 42, low: 27 },
    { key: "Microeconomics", label: "Microeconomics", high: 36, med: 28, low: 23 },
    { key: "Business Process Modeling", label: "Business Process\nModeling", high: 43, med: 29, low: 17 },
    { key: "Managerial Accounting", label: "Managerial Accounting", high: 35, med: 16, low: 10 }
  ];

  const EWS_BUCKETS = [
    { label: "< 50", high: 15, med: 18, low: 12 },
    { label: "25-49", high: 28, med: 21, low: 10 },
    { label: "50-64", high: 38, med: 25, low: 14 },
    { label: "75-89", high: 21, med: 18, low: 12 },
    { label: "> 100", high: 10, med: 15, low: 11 }
  ];

  const state = {
    currentView: "login",
    selectedStudentId: "20250482",
    courseFilter: "ALL",
    riskQueueFilter: "ALL",
    smsCount: 14,
    sim: {
      studentId: "20250482",
      attendance: 75,
      midterm: 65,
      course: "BNF 301: Data Structures & Algorithms",
      semester: "Semester 3 (Fall 2026)"
    }
  };

  function showToast(msg) {
    const el = document.getElementById("toast-banner");
    el.textContent = msg;
    el.classList.remove("hidden");
    clearTimeout(showToast._timer);
    showToast._timer = setTimeout(() => {
      el.classList.add("hidden");
    }, 3200);
  }

  function openModal(title, bodyHtml, onConfirm) {
    const backdrop = document.getElementById("modal-backdrop");
    document.getElementById("modal-title").textContent = title;
    document.getElementById("modal-body").innerHTML = bodyHtml;
    backdrop.classList.remove("hidden");

    const confirmBtn = document.getElementById("modal-confirm-btn");
    const cloned = confirmBtn.cloneNode(true);
    confirmBtn.parentNode.replaceChild(cloned, confirmBtn);

    cloned.addEventListener("click", () => {
      if (typeof onConfirm === "function") onConfirm();
      closeModal();
    });
  }

  function closeModal() {
    document.getElementById("modal-backdrop").classList.add("hidden");
  }

  function setActiveView(viewName) {
    state.currentView = viewName;

    const viewLogin = document.getElementById("view-login");
    const workspace = document.getElementById("workspace-shell");
    const subnavDefault = document.getElementById("subnav-tabs-default");
    const subnavCalc = document.getElementById("subnav-tabs-calculator");
    const exportLabel = document.getElementById("export-btn-label");

    if (viewName === "login") {
      viewLogin.classList.add("active");
      workspace.classList.add("hidden");
      return;
    }

    viewLogin.classList.remove("active");
    workspace.classList.remove("hidden");

    document.querySelectorAll(".workspace-view").forEach((v) => v.classList.remove("active"));

    const pageTitle = document.getElementById("topbar-page-title");
    const pageSub = document.getElementById("topbar-page-subtitle");

    if (viewName === "dashboard" || viewName === "institutional") {
      document.getElementById("view-dashboard").classList.add("active");
      subnavDefault.classList.remove("hidden");
      subnavCalc.classList.add("hidden");
      exportLabel.textContent = "Export Report";
      pageTitle.textContent = viewName === "institutional" ? "Institutional View" : "Main Dashboard";
      pageSub.textContent = "Student Academic Health & Warning Simulator";
      syncDefaultTabs(viewName);
    } else if (viewName === "profile") {
      document.getElementById("view-profile").classList.add("active");
      subnavDefault.classList.remove("hidden");
      subnavCalc.classList.add("hidden");
      exportLabel.textContent = "Export Profile Report";
      pageTitle.textContent = "Student Profile";
      pageSub.textContent = "Student Academic Health & Warning Simulator";
      syncDefaultTabs("profile");
      renderStudentProfile(state.selectedStudentId);
    } else if (viewName === "calculator" || viewName === "explainable-ai" || viewName === "interventions") {
      document.getElementById("view-calculator").classList.add("active");
      subnavDefault.classList.add("hidden");
      subnavCalc.classList.remove("hidden");
      exportLabel.textContent = "Export Report";
      pageTitle.textContent = "Academic Risk Prediction Calculator";
      pageSub.textContent = "Student Academic Health & Warning Simulator";
      syncCalcTabs(viewName);
      renderRiskCalculator();
    } else if (viewName === "grade-comments") {
      document.getElementById("view-grade-comments").classList.add("active");
      subnavDefault.classList.remove("hidden");
      subnavCalc.classList.add("hidden");
      exportLabel.textContent = "Export Report";
      pageTitle.textContent = "Student Profile";
      pageSub.textContent = "Student Academic Health & Warning Simulator";
      syncDefaultTabs("profile");
      renderGradeComments(state.selectedStudentId);
    }
  }

  function syncDefaultTabs(activeKey) {
    document.querySelectorAll("#subnav-tabs-default .subnav-tab").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.targetView === activeKey);
    });
  }

  function syncCalcTabs(activeKey) {
    document.querySelectorAll("#subnav-tabs-calculator .subnav-tab").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.targetView === activeKey);
    });
  }

  function renderMidtermChart() {
    const container = document.getElementById("midterm-bars-container");
    container.innerHTML = "";

    const visibleCourses = MIDTERM_COURSES.filter((c) => {
      if (state.courseFilter === "ALL") return true;
      return c.key === state.courseFilter;
    });

    container.style.gridTemplateColumns = `repeat(${visibleCourses.length}, minmax(0, 1fr))`;

    visibleCourses.forEach((course) => {
      const col = document.createElement("div");
      col.className = "course-col";

      const triplet = document.createElement("div");
      triplet.className = "bar-triplet";

      const hPx = Math.max(10, Math.round((course.high / 95) * 145));
      const mPx = Math.max(8, Math.round((course.med / 95) * 145));
      const lPx = Math.max(6, Math.round((course.low / 95) * 145));

      triplet.innerHTML = `
        <div class="bar-item high" style="height:${hPx}px" title="High Risk: ${course.high}"></div>
        <div class="bar-item med" style="height:${mPx}px" title="Medium Risk: ${course.med}"></div>
        <div class="bar-item low" style="height:${lPx}px" title="Low Risk: ${course.low}"></div>
      `;

      const lbl = document.createElement("div");
      lbl.className = "course-x-label";
      lbl.innerHTML = course.label.replace("\n", "<br>");

      col.appendChild(triplet);
      col.appendChild(lbl);

      col.addEventListener("mouseenter", () => {
        document.getElementById("tt-high").textContent = course.high;
        document.getElementById("tt-med").textContent = course.med;
        document.getElementById("tt-low").textContent = course.low;
      });

      container.appendChild(col);
    });
  }

  function renderEwsChart() {
    const container = document.getElementById("ews-bars-container");
    container.innerHTML = "";

    EWS_BUCKETS.forEach((b) => {
      const col = document.createElement("div");
      col.className = "course-col";

      const triplet = document.createElement("div");
      triplet.className = "bar-triplet";

      const hPx = Math.max(10, Math.round((b.high / 42) * 138));
      const mPx = Math.max(8, Math.round((b.med / 42) * 138));
      const lPx = Math.max(6, Math.round((b.low / 42) * 138));

      triplet.innerHTML = `
        <div class="bar-item high" style="height:${hPx}px"></div>
        <div class="bar-item med" style="height:${mPx}px"></div>
        <div class="bar-item low" style="height:${lPx}px"></div>
      `;

      const lbl = document.createElement("div");
      lbl.className = "course-x-label";
      lbl.textContent = b.label;

      col.appendChild(triplet);
      col.appendChild(lbl);
      container.appendChild(col);
    });
  }

  function renderQueueTable() {
    const tbody = document.getElementById("queue-table-body");
    tbody.innerHTML = "";

    const rows = QUEUE_ROWS.filter((r) => {
      if (state.riskQueueFilter === "ALL") return true;
      return r.risk === state.riskQueueFilter;
    });

    rows.forEach((row) => {
      const tr = document.createElement("tr");
      const badgeClass = row.risk === "HIGH" ? "badge-high" : "badge-medium";
      const badgeText = row.risk === "HIGH" ? "HIGH RISK" : "MEDIUM RISK";

      tr.innerHTML = `
        <td>
          <div class="student-cell-flex">
            <img src="${row.avatar}" alt="${row.name}" class="avatar-sm" />
            <div>
              <div class="student-cell-name">${row.name}</div>
              <div class="student-cell-id">${row.idLabel}</div>
            </div>
          </div>
        </td>
        <td>${row.course}</td>
        <td><span class="badge-pill ${badgeClass}">${badgeText}</span></td>
        <td>${row.midterm}</td>
        <td>${row.trigger}</td>
        <td>${row.action}</td>
        <td><span class="status-pill ${row.statusClass}">${row.status}</span></td>
        <td><button type="button" class="view-outline-btn" data-open-student="${row.studentId}">View</button></td>
      `;

      tr.querySelector("[data-open-student]").addEventListener("click", () => {
        state.selectedStudentId = row.studentId;
        setActiveView("profile");
      });

      tbody.appendChild(tr);
    });
  }

  function renderStudentProfile(studentId) {
    const s = STUDENTS_DB[studentId] || STUDENTS_DB["20250482"];
    state.selectedStudentId = s.id;

    document.getElementById("student-lookup-input").value = s.id;
    document.getElementById("caption-student-id").textContent = s.id;
    document.getElementById("profile-avatar").src = s.avatar;
    document.getElementById("profile-student-name").textContent = s.name;
    document.getElementById("profile-student-meta").textContent =
      `ID: ${s.id} · Department: ${s.department} · Current Semester: ${s.semester}`;

    const badge = document.getElementById("profile-risk-badge");
    badge.className = "badge-pill " + (s.riskLevel === "HIGH" ? "badge-high" : "badge-medium");
    badge.textContent = s.riskLevel === "HIGH" ? "HIGH RISK" : "MEDIUM RISK";

    document.getElementById("profile-advisor-name").textContent = s.advisor;
    document.getElementById("profile-alert-state").textContent = s.alertStatus;

    document.getElementById("metric-attendance").textContent = `${s.attendance}%`;
    document.getElementById("metric-attendance-note").textContent = `↗ ${s.attendanceDelta}`;
    document.getElementById("metric-midterm").textContent = `${s.midtermScore}%`;
    document.getElementById("metric-midterm-note").textContent = s.midtermClassAvg;
    document.getElementById("metric-quiz").textContent = `${s.quizAvg}%`;
    document.getElementById("metric-quiz-note").textContent = s.quizNote;
    document.getElementById("metric-assignment").textContent = `${s.assignmentAvg}%`;
    document.getElementById("metric-assignment-note").textContent = s.assignmentNote;

    document.getElementById("profile-current-status-text").textContent = s.currentStatusText;
    document.getElementById("step-ta-detail").textContent = s.taSchedule;
    document.getElementById("step-advisor-detail").textContent = s.advisorMeetingStatus;
    document.getElementById("step-plan-detail").textContent = s.studyPlanStatus;

    const tbody = document.getElementById("profile-courses-body");
    tbody.innerHTML = "";

    s.courses.forEach((c) => {
      const tr = document.createElement("tr");
      const rBadge =
        c.risk === "HIGH"
          ? '<span class="badge-pill badge-high">HIGH RISK</span>'
          : c.risk === "MEDIUM"
          ? '<span class="badge-pill badge-medium">MEDIUM RISK</span>'
          : '<span class="badge-pill badge-low">LOW RISK</span>';

      tr.innerHTML = `
        <td>
          <div class="comp-title">${c.code}</div>
          <div class="comp-sub">${c.name}</div>
        </td>
        <td>${c.prev}</td>
        <td><strong>${c.curr}</strong></td>
        <td>${rBadge}</td>
        <td>${c.att}</td>
        <td>${c.assign}</td>
        <td>${c.trend}</td>
        <td><button type="button" class="view-outline-btn open-grade-detail">View Details</button></td>
      `;

      tr.querySelector(".open-grade-detail").addEventListener("click", () => {
        setActiveView("grade-comments");
      });

      tbody.appendChild(tr);
    });
  }

  function computeRiskModel(attendance, midterm) {
    const raw = (100 - midterm) * 0.72 + (100 - attendance) * 0.68 + 20.4;
    const rate = Math.max(8.5, Math.min(96.8, Number(raw.toFixed(1))));

    let tier = "LOW";
    if (rate >= 65) tier = "HIGH";
    else if (rate >= 40) tier = "MEDIUM";

    const midtermContrib = Number(((100 - midterm) * 1.09).toFixed(1));
    const attContrib = Number(((100 - attendance) * 0.98).toFixed(1));
    const quizContrib = 11.1;
    const lmsContrib = 4.6;
    const prereqContrib = -3.5;

    return {
      rate,
      tier,
      factors: [
        { label: `Midterm Score (${midterm}/100)`, value: midtermContrib, widthPct: Math.min(92, Math.max(10, midtermContrib * 2.1)), kind: "pos-high" },
        { label: `Attendance Rate (${attendance}%)`, value: attContrib, widthPct: Math.min(82, Math.max(10, attContrib * 2.2)), kind: "pos-med" },
        { label: "Quiz & Assignment Average (62%)", value: quizContrib, widthPct: 38, kind: "pos-med" },
        { label: "LMS Platform Activity (Low)", value: lmsContrib, widthPct: 22, kind: "pos-med" },
        { label: "Prerequisite Grades (Good)", value: prereqContrib, widthPct: 16, kind: "neg-low" }
      ]
    };
  }

  function renderRiskCalculator() {
    const att = Number(document.getElementById("sim-attendance-slider").value);
    const mid = Number(document.getElementById("sim-midterm-slider").value);
    const studentSelect = document.getElementById("sim-student-select");
    const studentId = studentSelect.value;
    const studentObj = STUDENTS_DB[studentId] || STUDENTS_DB["20250482"];
    const courseText = document.getElementById("sim-course-select").value;
    const shortCourse = courseText.split(":")[0];

    document.getElementById("sim-attendance-pill").textContent = `${att}%`;
    document.getElementById("sim-midterm-pill").textContent = `${mid} / 100`;

    const model = computeRiskModel(att, mid);

    const banner = document.getElementById("calc-alert-banner");
    const alertText = document.getElementById("calc-alert-text");
    banner.className = "calc-alert-banner " + model.tier.toLowerCase();

    if (model.tier === "HIGH") {
      alertText.innerHTML = "<strong>High Academic Risk Identified:</strong> Proactive intervention strongly recommended for this performance profile.";
    } else if (model.tier === "MEDIUM") {
      alertText.innerHTML = "<strong>Medium Academic Risk Identified:</strong> Targeted TA office hours and progress check-in recommended.";
    } else {
      alertText.innerHTML = "<strong>Low Academic Risk Identified:</strong> Student performance is currently within healthy thresholds.";
    }

    document.getElementById("calc-student-title").textContent = `Student ID: ${studentObj.id} · ${studentObj.shortName}`;
    document.getElementById("calc-course-sub").textContent = `${shortCourse} / ${studentObj.department}`;

    const rateEl = document.getElementById("calc-risk-rate-val");
    rateEl.textContent = `${model.rate}%`;
    rateEl.className = "calc-rate-big " + (model.tier === "HIGH" ? "danger-text" : "");

    const badge = document.getElementById("calc-risk-badge");
    badge.className =
      "badge-pill " +
      (model.tier === "HIGH" ? "badge-high" : model.tier === "MEDIUM" ? "badge-medium" : "badge-low");
    badge.textContent = model.tier === "HIGH" ? "⚠ HIGH RISK" : model.tier === "MEDIUM" ? "MEDIUM RISK" : "LOW RISK";

    document.getElementById("calc-fail-prob-sub").textContent = `${model.rate}% Probability of Failing Course`;
    document.getElementById("calc-class-title").textContent =
      model.tier === "HIGH"
        ? "HIGH RISK (Action Triggered)"
        : model.tier === "MEDIUM"
        ? "MEDIUM RISK (Monitoring)"
        : "LOW RISK (On Track)";
    document.getElementById("calc-threshold-sub").textContent =
      model.tier === "HIGH" ? "Falls below critical course threshold" : "Within monitored cohort parameters";

    document.getElementById("calc-rec-title").textContent =
      model.tier === "HIGH"
        ? "Mandatory TA Office Hours & Advisor Follow-up"
        : "Bi-weekly TA Check-in & Quiz Review";

    document.getElementById("xai-subtitle").textContent =
      `SHAP feature contribution to calculated risk rate (${model.rate}% ${model.tier === "HIGH" ? "High" : model.tier === "MEDIUM" ? "Medium" : "Low"} Risk)`;

    const xaiList = document.getElementById("xai-rows-container");
    xaiList.innerHTML = "";

    model.factors.forEach((f) => {
      const row = document.createElement("div");
      row.className = "xai-row";
      const signPrefix = f.value > 0 ? `+${f.value}%` : `${f.value}%`;
      const colorStyle =
        f.value > 20 ? "color:#dc2626" : f.value > 0 ? "color:#d97706" : "color:#16a34a";

      row.innerHTML = `
        <div class="xai-factor-label">${f.label}</div>
        <div class="xai-bar-track-area">
          <div class="xai-bar-fill ${f.kind}" style="width:${f.widthPct}%"></div>
          <span class="xai-contrib-text" style="${colorStyle}">${signPrefix} Risk ${f.value < 0 ? "Reduction" : "Contribution"}</span>
        </div>
      `;
      xaiList.appendChild(row);
    });

    document.getElementById("xai-summary-caption").textContent =
      `Primary risk drivers: Midterm score (${mid}/100) and attendance (${att}%) weighted against course thresholds.`;

    const intBody = document.getElementById("calc-interventions-body");
    intBody.innerHTML = `
      <tr>
        <td><strong>Mandatory TA Office Hours</strong></td>
        <td><span class="badge-pill badge-medium">Pending</span></td>
        <td>Midterm Score ${mid} / Attendance ${att}%</td>
        <td>TA Iman</td>
        <td><button type="button" class="view-outline-btn sim-action-btn" data-action="Schedule Session">Schedule Session</button></td>
      </tr>
      <tr>
        <td><strong>Academic Advisor Consultation</strong></td>
        <td><span class="badge-pill badge-low">Assigned</span></td>
        <td>Risk Rate ${model.rate}% (${model.tier === "HIGH" ? "High" : "Active"})</td>
        <td>Dr. Reham H.</td>
        <td><button type="button" class="view-outline-btn sim-action-btn" data-action="Contact Student">Contact Student</button></td>
      </tr>
      <tr>
        <td><strong>Send SMS Alert &amp; Notice</strong></td>
        <td><span class="status-pill status-progress">Draft Ready</span></td>
        <td>Early Warning Triggered</td>
        <td>Automated System</td>
        <td><button type="button" class="primary-indigo-btn sim-action-btn" data-action="Send SMS Alert" style="height:28px;font-size:0.72rem;padding:0 10px;">Send SMS Alert</button></td>
      </tr>
    `;

    intBody.querySelectorAll(".sim-action-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (btn.dataset.action === "Send SMS Alert") {
          state.smsCount += 1;
          document.getElementById("sms-dispatched-count").textContent = `${state.smsCount} today`;
        }
        showToast(`${btn.dataset.action} completed for ${studentObj.shortName}`);
      });
    });
  }

  function renderGradeComments(studentId) {
    const s = STUDENTS_DB[studentId] || STUDENTS_DB["20250482"];
    const gb = s.gradeBreakdown;

    document.getElementById("grade-student-name").textContent = s.name;
    document.getElementById("grade-student-meta").textContent =
      `ID: ${s.id} · Department: ${s.department} · Current Semester: ${s.semester}`;

    const badge = document.getElementById("grade-risk-badge");
    badge.className = "badge-pill " + (s.riskLevel === "HIGH" ? "badge-high" : "badge-medium");
    badge.textContent = s.riskLevel === "HIGH" ? "HIGH RISK" : "MEDIUM RISK";

    document.getElementById("grade-breakdown-sub").textContent =
      `Current Midterm Score: ${gb.midtermPct}% · Target Threshold: ${gb.thresholdPct}% · Risk Level: ${gb.riskLabel}`;

    const tbody = document.getElementById("grade-components-body");
    tbody.innerHTML = "";

    gb.components.forEach((comp) => {
      const tr = document.createElement("tr");
      const statusCls =
        comp.statusType === "amber"
          ? "status-warn-amber"
          : comp.statusType === "green"
          ? "status-ok-green"
          : "status-ok-blue";

      tr.innerHTML = `
        <td>
          <div class="comp-title">${comp.title}</div>
          <div class="comp-sub">${comp.weight}</div>
        </td>
        <td>
          <div class="progress-inline-wrap">
            <span><strong>${comp.display}</strong></span>
            <div class="mini-progress-track">
              <div class="mini-progress-fill" style="width:${Math.min(100, comp.value)}%;background:${comp.barColor}"></div>
            </div>
          </div>
        </td>
        <td><span class="${statusCls}">${comp.status}</span></td>
      `;
      tbody.appendChild(tr);
    });

    document.getElementById("grade-analysis-text").textContent = gb.summary;

    const textarea = document.getElementById("doctor-comment-textarea");
    textarea.value = gb.defaultComment;
    updateCommentCounter();

    renderCommentsFeed(gb.comments);
  }

  function renderCommentsFeed(comments) {
    const feed = document.getElementById("recent-comments-list");
    feed.innerHTML = "";

    comments.forEach((c) => {
      const entry = document.createElement("div");
      entry.className = "comment-entry";
      entry.innerHTML = `
        <img src="${c.avatar}" alt="${c.author}" class="avatar-sm" />
        <div>
          <div class="comment-entry-top">
            <span class="comment-author">${c.author}</span>
            <span class="comment-time">${c.time}</span>
          </div>
          <p class="comment-text">${c.text}</p>
        </div>
      `;
      feed.appendChild(entry);
    });
  }

  function updateCommentCounter() {
    const len = document.getElementById("doctor-comment-textarea").value.length;
    document.getElementById("comment-char-count").textContent = `${len} / 1000 characters`;
  }

  function bindEvents() {
    document.getElementById("toggle-password-btn").addEventListener("click", () => {
      const input = document.getElementById("doctor-password");
      const label = document.getElementById("toggle-password-text");
      const isPass = input.type === "password";
      input.type = isPass ? "text" : "password";
      label.textContent = isPass ? "Hide" : "Show";
    });

    document.getElementById("doctor-login-form").addEventListener("submit", (e) => {
      e.preventDefault();
      showToast("Signed in as Dr. Reham H. — PulseEd SAT Dashboard");
      setActiveView("dashboard");
    });

    document.getElementById("btn-faculty-portal").addEventListener("click", () => {
      showToast("Opening Faculty & Staff Portal preview");
      setActiveView("dashboard");
    });

    document.getElementById("btn-help-support").addEventListener("click", () => {
      openModal(
        "PulseEd Doctor Portal Help & Support",
        "<p>Use your university credentials to sign in and monitor at-risk cohorts, simulate midterm/attendance risk scores, and assign TA office hours.</p>",
        null
      );
    });

    document.getElementById("btn-forgot-password").addEventListener("click", () => {
      openModal(
        "Reset Doctor Credentials",
        "<p>A credential recovery link will be dispatched to your registered university faculty email address.</p>",
        () => showToast("Recovery instructions sent to university email")
      );
    });

    document.querySelectorAll(".footer-link-item").forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        openModal("Policy & Compliance Information", `<p>${link.dataset.info}</p>`, null);
      });
    });

    document.getElementById("topbar-brand-home").addEventListener("click", () => {
      setActiveView("login");
    });

    document.querySelectorAll(".subnav-tab").forEach((tab) => {
      tab.addEventListener("click", () => {
        const target = tab.dataset.targetView;
        setActiveView(target);
      });
    });

    document.querySelectorAll("#course-module-filter .mini-pill").forEach((pill) => {
      pill.addEventListener("click", () => {
        document.querySelectorAll("#course-module-filter .mini-pill").forEach((p) => p.classList.remove("active"));
        pill.classList.add("active");
        state.courseFilter = pill.dataset.course;
        renderMidtermChart();
      });
    });

    document.querySelectorAll(".chip-filter").forEach((chip) => {
      chip.addEventListener("click", () => {
        document.querySelectorAll(".chip-filter").forEach((c) => c.classList.remove("active"));
        chip.classList.add("active");
        state.riskQueueFilter = chip.dataset.riskFilter;
        renderQueueTable();
      });
    });

    document.getElementById("btn-export-report").addEventListener("click", () => {
      showToast("Exporting PulseEd report (CSV / Summary)...");
    });

    const searchInput = document.getElementById("global-student-search");
    const searchDropdown = document.getElementById("global-search-results");

    searchInput.addEventListener("input", () => {
      const q = searchInput.value.trim().toLowerCase();
      if (!q) {
        searchDropdown.classList.add("hidden");
        return;
      }
      const matches = Object.values(STUDENTS_DB).filter(
        (s) => s.name.toLowerCase().includes(q) || s.id.toLowerCase().includes(q) || s.department.toLowerCase().includes(q)
      );
      searchDropdown.innerHTML = "";
      if (matches.length === 0) {
        searchDropdown.innerHTML = '<div class="search-result-item">No matching students</div>';
      } else {
        matches.forEach((m) => {
          const item = document.createElement("button");
          item.type = "button";
          item.className = "search-result-item";
          item.innerHTML = `<span><strong>${m.name}</strong> (${m.id})</span><span>${m.riskLevel}</span>`;
          item.addEventListener("click", () => {
            state.selectedStudentId = m.id;
            searchDropdown.classList.add("hidden");
            searchInput.value = "";
            setActiveView("profile");
          });
          searchDropdown.appendChild(item);
        });
      }
      searchDropdown.classList.remove("hidden");
    });

    document.addEventListener("click", (e) => {
      if (!e.target.closest(".topbar-center")) {
        searchDropdown.classList.add("hidden");
      }
    });

    document.getElementById("student-lookup-form").addEventListener("submit", (e) => {
      e.preventDefault();
      const raw = document.getElementById("student-lookup-input").value.trim();
      const matched =
        STUDENTS_DB[raw] ||
        Object.values(STUDENTS_DB).find((s) => s.name.toLowerCase().includes(raw.toLowerCase()));
      if (matched) {
        renderStudentProfile(matched.id);
        showToast(`Loaded profile for ${matched.name}`);
      } else {
        showToast("Student ID not found. Showing Student A (20250482).");
        renderStudentProfile("20250482");
      }
    });

    document.getElementById("btn-view-risk-prediction").addEventListener("click", () => {
      document.getElementById("sim-student-select").value = STUDENTS_DB[state.selectedStudentId]
        ? state.selectedStudentId
        : "20250482";
      setActiveView("calculator");
    });

    document.getElementById("btn-schedule-advisor").addEventListener("click", () => {
      showToast("Advisor meeting invitation scheduled");
    });

    document.getElementById("btn-assign-ta").addEventListener("click", () => {
      showToast("TA Iman assigned to student recovery log");
    });

    document.getElementById("btn-send-sms").addEventListener("click", () => {
      state.smsCount += 1;
      document.getElementById("sms-dispatched-count").textContent = `${state.smsCount} today`;
      showToast("SMS early warning notification dispatched");
    });

    document.getElementById("sim-attendance-slider").addEventListener("input", renderRiskCalculator);
    document.getElementById("sim-midterm-slider").addEventListener("input", renderRiskCalculator);
    document.getElementById("sim-student-select").addEventListener("change", renderRiskCalculator);
    document.getElementById("sim-course-select").addEventListener("change", renderRiskCalculator);
    document.getElementById("sim-semester-select").addEventListener("change", renderRiskCalculator);

    document.getElementById("btn-calculate-risk").addEventListener("click", () => {
      renderRiskCalculator();
      showToast("Risk prediction rate recalculated");
    });

    document.getElementById("btn-reset-sim").addEventListener("click", () => {
      document.getElementById("sim-student-select").value = "20250482";
      document.getElementById("sim-attendance-slider").value = 75;
      document.getElementById("sim-midterm-slider").value = 65;
      document.getElementById("sim-course-select").value = "BNF 301: Data Structures & Algorithms";
      document.getElementById("sim-semester-select").value = "Semester 3 (Fall 2026)";
      renderRiskCalculator();
      showToast("Simulation parameters reset to baseline");
    });

    document.getElementById("btn-back-to-profile-link").addEventListener("click", () => setActiveView("profile"));
    document.getElementById("btn-back-profile-overview").addEventListener("click", () => setActiveView("profile"));

    document.getElementById("doctor-comment-textarea").addEventListener("input", updateCommentCounter);

    document.querySelectorAll(".rte-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const ta = document.getElementById("doctor-comment-textarea");
        const fmt = btn.dataset.fmt;
        if (fmt === "bold") ta.value += " **Important**";
        else if (fmt === "italic") ta.value += " *Note*";
        else if (fmt === "bullet") ta.value += "\n• Follow-up action item";
        else if (fmt === "number") ta.value += "\n1. Next review step";
        else if (fmt === "link") ta.value += " [Course Syllabus Ref]";
        else if (fmt === "attach") ta.value += " [Attached: Midterm Rubric]";
        updateCommentCounter();
      });
    });

    document.getElementById("btn-cancel-comment").addEventListener("click", () => {
      const s = STUDENTS_DB[state.selectedStudentId] || STUDENTS_DB["20250482"];
      document.getElementById("doctor-comment-textarea").value = s.gradeBreakdown.defaultComment;
      updateCommentCounter();
      showToast("Draft reverted");
    });

    document.getElementById("doctor-comment-form").addEventListener("submit", (e) => {
      e.preventDefault();
      const ta = document.getElementById("doctor-comment-textarea");
      const text = ta.value.trim();
      if (!text) return;

      const s = STUDENTS_DB[state.selectedStudentId] || STUDENTS_DB["20250482"];
      const tag = document.getElementById("comment-tag-select").value;
      const shared = document.getElementById("share-student-ta-toggle").checked;

      s.gradeBreakdown.comments.unshift({
        author: "Dr. Reham H.",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80",
        time: `Just now · ${tag}`,
        text: text + (shared ? " (Shared with Student & TA)" : "")
      });

      renderCommentsFeed(s.gradeBreakdown.comments);
      showToast("Comment posted and TA notified");
    });

    document.getElementById("modal-close-btn").addEventListener("click", closeModal);
    document.getElementById("modal-cancel-btn").addEventListener("click", closeModal);
    document.getElementById("modal-backdrop").addEventListener("click", (e) => {
      if (e.target.id === "modal-backdrop") closeModal();
    });
  }

  function init() {
    renderMidtermChart();
    renderEwsChart();
    renderQueueTable();
    renderStudentProfile(state.selectedStudentId);
    renderRiskCalculator();
    renderGradeComments(state.selectedStudentId);
    bindEvents();
    setActiveView("login");
  }

  document.addEventListener("DOMContentLoaded", init);
})();