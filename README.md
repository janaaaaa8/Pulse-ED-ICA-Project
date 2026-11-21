PulseEd - Enhance Academic Health

Project Deliverable 1

Team Leaders: Marwan Ragaie, Salma Amr

1. App Idea

Concept and Purpose:

PulseEd is a proactive academic health and early-warning platform that evaluates post-midterm student grades against clear risk boundaries to detect failing trajectories early, alert faculty, and assign mandatory TA office hours until recovery targets are met.

The Real Problem:

Grade drop-offs often surface after midterms or finals when recovery is already too late, and manual grade tracking wastes valuable faculty time.

Target Users:

Course Professors: Auditing overall class health and managing interventions.

Teaching Assistants (TAs): Leading mandatory office-hour recovery sessions.

At-Risk Students: Receiving structured guidance and recovery tracking.

Core System Modules and Features

1. Weighted Grade Calculator

Computes real-time post-midterm course standing.

2. Tiered Risk Classifier

Categorizes students into Safe, Warning, and Critical Risk zones.

3. Automated Alert Dispatcher

Sends and logs instant SMS and email alerts for flagged students.

4. Required Final Score Estimator

Calculates the minimum passing score a student needs on the final exam.

5. TA Office-Hour Assigner

Books mandatory weekly TA sessions with TA capacity checks.

6. Weekly Recovery Simulator

Tracks weekly academic progress until the student's risk indicator clears.


2. User Stories and Acceptance Criteria

User Story 01: View Student Records

As a professor, I want to view enrolled students with their grades, so that I can monitor performance.

Acceptance Criteria:

1. Course Roster: Lists students enrolled in the assigned course.

2. Record Fields: Displays student name, ID, midterm grade, assignments, and current standing.

3. Drill-Down: Allows selecting any student for an individual record view.

4. Empty State: Displays "No students enrolled in this course." when the roster is empty.


User Story 02: Update Student Grades

As a professor, I want to enter and update student grades, so that records stay accurate.

Acceptance Criteria:

1. Grade Entry: Enables editing grades for individual enrolled students.

2. Auto-Sync: Updates the student's record immediately upon valid submission.

3. Range Check: Rejects grades below zero or above the maximum allowed score.

4. Empty Guard: Blocks blank inputs with a clear validation warning.


User Story 03: Post-Midterm Failing Risk Indicators

As a professor, I want post-midterm failing risk indicators, so that I can identify who needs support.

Acceptance Criteria:

1. Auto-Audit: Evaluates student performance automatically from post-midterm grades.

2. Visual Flag: Highlights failing candidates with a clear warning badge.

3. Clean Safe List: Safe students appear cleanly without a warning badge.

4. Data Guard: Prompts for additional grades if existing data is insufficient.


User Story 04: SMS Alerts for Failing-Risk Students

As a professor, I want SMS alerts for failing-risk
