import { jsPDF } from 'jspdf';

export default function saveResumeWrapperAsPDF() {
  // Get the element to save
  const element = document.querySelector('.resume-wrapper');

  // Create a new HTML document
  const htmlContent =
    '<!DOCTYPE html><html><head><style>' +
    getStyles() +
    '</style></head><body>' +
    element.outerHTML +
    '</body></html>';

  // Initialize jsPDF
  const doc = new jsPDF();

  // Add element content to PDF
  doc.html(htmlContent, {
    callback: function () {
      // Save PDF
      doc.save('CV.pdf');
    },
  });
}

// Function to get all CSS styles from the current page
function getStyles() {
  let styles = '';
  const sheets = document.styleSheets;
  for (let i = 0; i < sheets.length; i++) {
    const rules = sheets[i].cssRules;
    if (rules) {
      for (let j = 0; j < rules.length; j++) {
        styles += rules[j].cssText;
      }
    }
  }
  return styles;
}
