# K6-Performance-Test

## Introduction
This repository contains **performance and load testing scripts** using **K6** for APIs and web applications.  
The tests simulate real-world traffic, measure response times, and help identify potential bottlenecks in your system.

<img width="500" height="500" alt="Performance Test Diagram" src="https://github.com/user-attachments/assets/93a9ede4-a6e9-43df-8957-9b8cfdb78866" />

---

## Technologies & Tools Used
- **K6** – Open-source load testing tool  
- **Node.js** – For managing dependencies and running scripts  
- **k6-html-reporter** – To generate HTML reports from K6 JSON output  
- **Git & GitHub** – Version control and repository management  

---

## Prerequisites
Before running the tests, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or above)  
- [K6](https://k6.io/docs/getting-started/installation/)  
- npm (comes with Node.js)  

Optional but recommended:
- A code editor like [VS Code](https://code.visualstudio.com/)

---

## Project Structure
```

K6-PROJECT/
├── config/           # Configuration files (e.g., environment variables, base URLs)
├── data/             # Test data payloads
├── node\_modules/     # Node.js dependencies
├── report/           # Generated HTML reports
├── utils/            # Utility scripts
├── tasks.json        # Task configuration
├── package.json      # Node.js project metadata and scripts
├── results.json      # K6 test results
├── summary.json      # Summary of test results
└── user-test.js      # Example API test script

````

---

## How to Run This Project

1. **Clone the repository:**
```bash
git clone https://github.com/your-username/K6-performance-test.git
cd K6-PROJECT
````

2. **Install dependencies:**

```bash
npm install
```

3. **Run a K6 test script** (example: `user-test.js`):

```bash
k6 run --out json=results.json user-test.js
```

---

## How to Generate HTML Report

After running the K6 test and generating the JSON output:

1. **Install `k6-html-reporter` globally (if not installed):**

```bash
npm install -g k6-html-reporter
```

2. **Generate the HTML report from JSON:**

```bash
npx k6-html-reporter --input results.json --output report/report.html
```

3. **Open the report** in your browser:

```bash
# macOS
open report/report.html

# Windows
start report\report.html
```

---

### Optional: Single Command to Run Test & Generate Report

```bash
k6 run --out json=results.json user-test.js && npx k6-html-reporter --input results.json --output report/report.html
```

---

## Notes

* Update the paths in commands if you change the folder structure.
* You can create additional K6 scripts in the root or in a `scripts/` folder and follow the same workflow.
* Keep `results.json` and `summary.json` updated for each test run to maintain historical performance data.

---
