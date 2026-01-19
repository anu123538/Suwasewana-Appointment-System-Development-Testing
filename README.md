This is a professional, complete **README.md** file for your GitHub portfolio. I have integrated your specific Test Cases, Bug Report, and Playwright code into a clean English format that will impress any recruiter or interviewer.

---

# 🩺 Suwasewana Healthcare - QA Automation & Manual Testing Project

This repository showcases a comprehensive Quality Assurance (QA) suite for the **Suwasewana Appointment Booking Platform**. It includes automated end-to-end tests, performance testing insights, and professional manual testing documentation.

## 🚀 Project Overview

* 
**Target Application:** [Suwasewana Web App](https://suwasewana-vgqa.vercel.app/).


* **Objective:** To ensure a bug-free user journey from registration to appointment confirmation.
* 
**Key Features Tested:** User Authentication, Doctor Selection, Slot Booking, and Appointment Cancellation.



---

## 🛠 Tech Stack

* **Automation:** Playwright (Node.js), Selenium.
* **Performance:** Apache JMeter.
* **Language:** JavaScript / Java.
* 
**Documentation:** Manual Test Cases & Professional Bug Reporting.



---

## 📑 Manual Testing Documentation

### 1. Test Cases Summary

I designed and executed functional test cases covering the entire booking flow.

| TC ID | Test Scenario | Expected Result | Status |
| --- | --- | --- | --- |
| **01** | User Registration | Account created and user logged in successfully.

 | ✅ PASS 

 |
| **02** | Doctor Selection | Doctor's profile page should load correctly.

 | ✅ PASS 

 |
| **03** | Slot Selection | Date and Time slots should be highlighted and selected.

 | ✅ PASS 

 |
| **04** | Confirm Booking | Appointment should be confirmed in the system.

 | ✅ PASS 

 |
| **05** | View Records | Booking record should be visible in 'My Appointments'.

 | ✅ PASS 

 |
| **06** | Cancellation | Status must update to 'Cancelled' upon clicking cancel.

 | ✅ PASS 

 |

### 2. Bug Report (Defect Tracking)

During cross-browser testing, a high-severity issue was identified on Microsoft Edge.

* 
**Bug ID:** BUG-001 


* 
**Title:** Web application elements are unresponsive on Microsoft Edge.


* **Severity:** High | **Priority:** Medium.


* 
**Environment:** Browser: Edge v125.0, OS: Windows 11.


* 
**Actual Result:** System displays "Request failed with status code 401" and buttons are unresponsive.


* 
**Expected Result:** Users should be able to book appointments as successfully as on Chrome.



---

## 🤖 Playwright Automation output

<img width="677" height="203" alt="Screenshot 2026-01-19 182835" src="https://github.com/user-attachments/assets/cb5ac6cb-d435-4886-b3a8-21f995e03dea" />


## 📈 Performance Testing (JMeter)

* **Scenario:** Simulated 100+ concurrent users booking appointments.
* **Goal:** To identify server response times and threshold limits for the Suwasewana API.

---

## ⚙️ Installation & Execution

1. **Clone the Repo:** `git clone <your-repo-url>`
2. **Install Dependencies:** `npm install`
3. **Run Tests:** `npx playwright test --headed`
4. **View Report:** `npx playwright show-report`

---

**Author:** Anuththra
**Role:** QA Automation Engineer (Intern)

---

