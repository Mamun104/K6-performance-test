import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.1/index.js";


function addMetadata(data) {
  return {
    ...data,
    custom: {
      title: "Dmoney API Load Test Report",
      project: "Dmoney API",
      environment: "Software Lead QA",
      executedBy: "Mamunur Rashid",
      date: new Date().toLocaleString(),
    },
  };
}

export function handleSummary(data) {
  const enrichedData = addMetadata(data);

  return {
    "reports/result.html": htmlReport(enrichedData),
    stdout: textSummary(data, { indent: " ", enableColors: true }),
    "reports/summary.json": JSON.stringify(enrichedData, null, 2),
  };
}
