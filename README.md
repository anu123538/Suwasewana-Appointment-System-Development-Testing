
# 🩺 Suwasewana Healthcare - QA Automation & Manual Testing Project

This repository showcases a comprehensive Quality Assurance (QA) suite for the **Suwasewana Appointment Booking Platform**. It includes automated end-to-end tests, performance testing insights, and professional manual testing documentation.

## 🚀 Project Overview


**Target Application:** (https://suwasewana-vgqa.vercel.app/).


* **Objective:** To ensure a bug-free user journey from registration to appointment confirmation.

**Key Features Tested:** User Authentication, Doctor Selection, Slot Booking, and Appointment Cancellation.


## 🛠 Tech Stack

* **Automation:** Playwright (Node.js), Selenium.
* **Performance:** Apache JMeter.
* **Language:** JavaScript / Java.
* 
**Documentation:** Manual Test Cases & Professional Bug Reporting.

## 📑 Manual Testing Documentation

### 1. Test Cases Summary
<img width="602" height="336" alt="Screenshot 2026-01-19 185936" src="https://github.com/user-attachments/assets/68896325-0f2e-445f-a7ad-78fa347a9c90" />


### 2. Bug Report (Defect Tracking)

During cross-browser testing, a high-severity issue was identified on Microsoft Edge.

**Bug ID:** BUG-001 
**Title:** Web application elements are unresponsive on Microsoft Edge.
* **Severity:** High
* **Priority:** Medium.
**Environment:** Browser: Edge v125.0, OS: Windows 11.
**Actual Result:** System displays "Request failed with status code 401" and buttons are unresponsive.
**Expected Result:** Users should be able to book appointments as successfully as on Chrome.

## 🤖 Playwright Automation output

<img width="677" height="203" alt="Screenshot 2026-01-19 182835" src="https://github.com/user-attachments/assets/cb5ac6cb-d435-4886-b3a8-21f995e03dea" />


## 📈 Performance Testing (JMeter)

* **Scenario:** Simulated 100+ concurrent users booking appointments.
* **Goal:** To identify server response times and threshold limits for the Suwasewana API.

## ⚙️ Installation & Execution

1. **Clone the Repo:** `git clone <your-repo-url>`
2. **Install Dependencies:** `npm install`
3. **Run Tests:** `npx playwright test --headed`
4. **View Report:** `npx playwright show-report`


**Author:** Anuththra
**Role:** QA Automation Engineer (Intern)


