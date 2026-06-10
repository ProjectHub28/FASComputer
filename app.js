// --- ACADEMIC DATABASE FOR COMPUTER SCIENCE (CLASSES 1-10) ---
// To add your Google Drive links:
// Replace the "#" in answerKeyUrl and videoUrl with your actual Google Drive URLs.
// Example: answerKeyUrl: "https://drive.google.com/open?id=your-file-id"

const ACADEMIC_DATA = {
  1: {
    className: "ALL 1-8",
    description: "Foundational computer skills, parts of a computer, and drawing basics.",
    iconColor: "var(--color-accent)",
    chapters: [
      {
        num: 1,
        title: "9-10",
        desc: "Identifying computers in daily life and understanding what machines do.",
        answerKeyUrl: "https://drive.google.com/drive/folders/1c_ZJYZLUFLUNRtpPog9AIX5ADlQGiXve?usp=drive_link", // TODO: Add Class 1 Chapter 1 Answer Key Drive Link
        videoUrl: "https://drive.google.com/drive/folders/1c_ZJYZLUFLUNRtpPog9AIX5ADlQGiXve?usp=drive_link"      // TODO: Add Class 1 Chapter 1 Video Tutorial Drive Link
      },
      {
        num: 2,
        title: "1-8",
        desc: "Introduction to Monitor, Keyboard, Mouse, CPU, and Printer.",
        answerKeyUrl: "https://drive.google.com/drive/folders/1YCxSTcHr6w5vHrxpP9esDDiDL58EWyey?usp=drive_link", // TODO: Add Class 1 Chapter 2 Answer Key Drive Link
        videoUrl: "https://drive.google.com/drive/folders/1YCxSTcHr6w5vHrxpP9esDDiDL58EWyey?usp=drive_link"      // TODO: Add Class 1 Chapter 2 Video Tutorial Drive Link
      },
      {
        num: 3,
        title: "Keys on a Keyboard",
        desc: "Learning about Alphabet keys, Number keys, Spacebar, and Enter key.",
        answerKeyUrl: "#", // TODO: Add Class 1 Chapter 3 Answer Key Drive Link
        videoUrl: "#"      // TODO: Add Class 1 Chapter 3 Video Tutorial Drive Link
      },
      {
        num: 4,
        title: "Creative Fun with MS Paint",
        desc: "Drawing, painting, and using the pencil and eraser tools in Paint.",
        answerKeyUrl: "#", // TODO: Add Class 1 Chapter 4 Answer Key Drive Link
        videoUrl: "#"      // TODO: Add Class 1 Chapter 4 Video Tutorial Drive Link
      }
    ]
  },
  2: {
    className: "Class 2",
    description: "Detailed input/output devices, typing skills, and drawing tools.",
    iconColor: "var(--color-primary)",
    chapters: [
      {
        num: 1,
        title: "Computer - A Wonderful Machine",
        desc: "Difference between humans and computers, and places where computers are used.",
        answerKeyUrl: "#", // TODO: Add Class 2 Chapter 1 Answer Key Drive Link
        videoUrl: "#"      // TODO: Add Class 2 Chapter 1 Video Tutorial Drive Link
      },
      {
        num: 2,
        title: "Computer Devices & Storage",
        desc: "Understanding Input devices, Output devices, and basic storage concepts.",
        answerKeyUrl: "#", // TODO: Add Class 2 Chapter 2 Answer Key Drive Link
        videoUrl: "#"      // TODO: Add Class 2 Chapter 2 Video Tutorial Drive Link
      },
      {
        num: 3,
        title: "More Tools in MS Paint",
        desc: "Using the Color Picker, Magnifier, Brushes, and shapes tools.",
        answerKeyUrl: "#", // TODO: Add Class 2 Chapter 3 Answer Key Drive Link
        videoUrl: "#"      // TODO: Add Class 2 Chapter 3 Video Tutorial Drive Link
      },
      {
        num: 4,
        title: "Let's Type in WordPad",
        desc: "Introduction to the WordPad window and typing simple paragraphs.",
        answerKeyUrl: "#", // TODO: Add Class 2 Chapter 4 Answer Key Drive Link
        videoUrl: "#"      // TODO: Add Class 2 Chapter 4 Video Tutorial Drive Link
      }
    ]
  },
  3: {
    className: "Class 3",
    description: "Operating systems basics, file management, and word processing.",
    iconColor: "var(--color-secondary)",
    chapters: [
      {
        num: 1,
        title: "Understanding Windows 10",
        desc: "Exploring the desktop, taskbar, start menu, and desktop icons.",
        answerKeyUrl: "#", // TODO: Add Class 3 Chapter 1 Answer Key Drive Link
        videoUrl: "#"      // TODO: Add Class 3 Chapter 1 Video Tutorial Drive Link
      },
      {
        num: 2,
        title: "Formatting in WordPad",
        desc: "Changing font styles, colors, sizes, alignment, and saving files.",
        answerKeyUrl: "#", // TODO: Add Class 3 Chapter 2 Answer Key Drive Link
        videoUrl: "#"      // TODO: Add Class 3 Chapter 2 Video Tutorial Drive Link
      },
      {
        num: 3,
        title: "Introduction to MS Word 2016",
        desc: "Understanding the word window structure and typing text documents.",
        answerKeyUrl: "#", // TODO: Add Class 3 Chapter 3 Answer Key Drive Link
        videoUrl: "#"      // TODO: Add Class 3 Chapter 3 Video Tutorial Drive Link
      },
      {
        num: 4,
        title: "Step-by-Step Programming with Scratch",
        desc: "Introduction to sprite movements, change looks, and simple block scripting.",
        answerKeyUrl: "#", // TODO: Add Class 3 Chapter 4 Answer Key Drive Link
        videoUrl: "#"      // TODO: Add Class 3 Chapter 4 Video Tutorial Drive Link
      }
    ]
  },
  4: {
    className: "Class 4",
    description: "Advanced word processing, memory storage, and slideshow creation.",
    iconColor: "var(--color-accent)",
    chapters: [
      {
        num: 1,
        title: "Memory and Storage",
        desc: "Memory and Storage",
        answerKeyUrl: "https://drive.google.com/file/d/1rZ02a_Ly5uL_maqYx2RwUamVeOQoRQ19/view?usp=drive_link", // TODO: Add Class 4 Chapter 1 Answer Key Drive Link
        videoUrl: "https://drive.google.com/file/d/1xIIwxfRj6ch9A9z4QdBqsAGzpc14jnPi/view?usp=drive_link"      // TODO: Add Class 4 Chapter 1 Video Tutorial Drive Link
      },
      {
        num: 2,
        title: "Understanding Windows 10",
        desc: "Understanding Windows 10",
        answerKeyUrl: "https://drive.google.com/file/d/1rZ02a_Ly5uL_maqYx2RwUamVeOQoRQ19/view?usp=drive_link", // TODO: Add Class 4 Chapter 2 Answer Key Drive Link
        videoUrl: "https://drive.google.com/file/d/1frESFPCkm5-GeVVFawY0_3gPKAOKIJv5/view?usp=drive_link"      // TODO: Add Class 4 Chapter 2 Video Tutorial Drive Link
      },
      {
        num: 3,
        title: "Introduction to the Internet",
        desc: "Introduction to the Internet",
        answerKeyUrl: "https://drive.google.com/file/d/1rZ02a_Ly5uL_maqYx2RwUamVeOQoRQ19/view?usp=drive_link", // TODO: Add Class 4 Chapter 3 Answer Key Drive Link
        videoUrl: "https://drive.google.com/file/d/1r4iNTtcSIo1aF7rGVZgOK7vHWbWF3Uke/view?usp=drive_link"      // TODO: Add Class 4 Chapter 3 Video Tutorial Drive Link
      },
      {
        num: 4,
        title: "Formatting in Word",
        desc: "Formatting in Word",
        answerKeyUrl: "https://drive.google.com/file/d/1rZ02a_Ly5uL_maqYx2RwUamVeOQoRQ19/view?usp=drive_link", // TODO: Add Class 4 Chapter 4 Answer Key Drive Link
        videoUrl: "https://drive.google.com/file/d/1LKDqjnJgjeaOryz6s9jLmgK4GYpiv6mZ/view?usp=drive_link"      // TODO: Add Class 4 Chapter 4 Video Tutorial Drive Link
      }
    ]
  },
  5: {
    className: "Class 5",
    description: "History of computers, file handling, presentation transitions, and Scratch loop scripts.",
    iconColor: "var(--color-primary)",
    chapters: [
      {
        num: 1,
        title: "More on Windows",
        desc: "Early counting devices (Abacus) and the five generations of computers.",
        answerKeyUrl: "https://drive.google.com/file/d/1lMws7mH2l26vCFdNq-xcgH5t9R9PajyR/view?usp=drive_link", // TODO: Add Class 5 Chapter 1 Answer Key Drive Link
        videoUrl: "https://drive.google.com/file/d/1VFQjEYayEhmp3hEj3U-o3MzAxbmLy3gi/view?usp=drive_link"      // TODO: Add Class 5 Chapter 1 Video Tutorial Drive Link
      },
      {
        num: 2,
        title: "Internet and Email",
        desc: "Using File Explorer to create, rename, copy, paste, and delete directories.",
        answerKeyUrl: "https://drive.google.com/file/d/1lMws7mH2l26vCFdNq-xcgH5t9R9PajyR/view?usp=drive_link", // TODO: Add Class 5 Chapter 2 Answer Key Drive Link
        videoUrl: "https://drive.google.com/file/d/1A7VqBEH6iqUsAXdXrw-irETNFY4JKkPn/view?usp=drive_link"      // TODO: Add Class 5 Chapter 2 Video Tutorial Drive Link
      },
      {
        num: 3,
        title: "More on Microsoft Word",
        desc: "Inserting tables, formatting borders, merging cells, and entering tabular data.",
        answerKeyUrl: "https://drive.google.com/file/d/1lMws7mH2l26vCFdNq-xcgH5t9R9PajyR/view?usp=drive_link", // TODO: Add Class 5 Chapter 3 Answer Key Drive Link
        videoUrl: "https://drive.google.com/file/d/1Kp8sTO69hoD-fLspOVzc3fzjpHPWW9Ic/view?usp=drive_link"      // TODO: Add Class 5 Chapter 3 Video Tutorial Drive Link
      },
      {
        num: 4,
        title: "Working with Slides",
        desc: "Animating texts and images in slides and setting transition duration.",
        answerKeyUrl: "https://drive.google.com/file/d/1lMws7mH2l26vCFdNq-xcgH5t9R9PajyR/view?usp=drive_link", // TODO: Add Class 5 Chapter 4 Answer Key Drive Link
        videoUrl: "https://drive.google.com/file/d/1nW1xylMh7xFYqISzhT9RR-Ospm6IWZLO/view?usp=drive_link"      // TODO: Add Class 5 Chapter 4 Video Tutorial Drive Link
      },
      {
        num: 5,
        title: "Enhancing a Presentation",
        desc: "Using Control blocks (repeat, forever) and sensing blocks to make games.",
        answerKeyUrl: "https://drive.google.com/file/d/1lMws7mH2l26vCFdNq-xcgH5t9R9PajyR/view?usp=drive_link", // TODO: Add Class 5 Chapter 5 Answer Key Drive Link
        videoUrl: "https://drive.google.com/file/d/1SNQzGPgZf8UW8hGP4dtBTSdvvxWd9YO5/view?usp=drive_link"      // TODO: Add Class 5 Chapter 5 Video Tutorial Drive Link
      }
    ]
  },
  6: {
    className: "Class 6",
    description: "Basic programming logic, spreadsheet math, web design markup, and cybersecurity.",
    iconColor: "var(--color-secondary)",
    chapters: [
      {
        num: 1,
        title: "Internet Services",
        desc: "Internet Services",
        answerKeyUrl: "https://drive.google.com/file/d/1Qq-pfeOapXc6SaWYbvUd2-2ybyvH1IG5/view?usp=drive_link", // TODO: Add Class 6 Chapter 1 Answer Key Drive Link
        videoUrl: "https://drive.google.com/file/d/1ELcGWfQ00rA6G69fDqp32dPVOfR9Ndnb/view?usp=drive_link"      // TODO: Add Class 6 Chapter 1 Video Tutorial Drive Link
      },
      {
        num: 2,
        title: " Using Mail Merge",
        desc: " Using Mail Merge",
        answerKeyUrl: "https://drive.google.com/file/d/1Qq-pfeOapXc6SaWYbvUd2-2ybyvH1IG5/view?usp=drive_link", // TODO: Add Class 6 Chapter 2 Answer Key Drive Link
        videoUrl: "https://drive.google.com/file/d/1bUgy_BXortxocMgvXbYOHrdOaWbO5FNe/view?usp=drive_link"      // TODO: Add Class 6 Chapter 2 Video Tutorial Drive Link
      },
      {
        num: 3,
        title: "More on PowerPoint",
        desc: "More on PowerPoint",
        answerKeyUrl: "https://drive.google.com/file/d/1Qq-pfeOapXc6SaWYbvUd2-2ybyvH1IG5/view?usp=drive_link", // TODO: Add Class 6 Chapter 3 Answer Key Drive Link
        videoUrl: "https://drive.google.com/file/d/1iUDPxuJG8UJcevRDgULqSD2il3uiQfdU/view?usp=drive_link"      // TODO: Add Class 6 Chapter 3 Video Tutorial Drive Link
      },
      {
        num: 4,
        title: "Introduction to Excel",
        desc: "Introduction to Excel",
        answerKeyUrl: "https://drive.google.com/file/d/1Qq-pfeOapXc6SaWYbvUd2-2ybyvH1IG5/view?usp=drive_link", // TODO: Add Class 6 Chapter 4 Answer Key Drive Link
        videoUrl: "https://drive.google.com/file/d/1DzFU5W3tTXcxtgxaBb8dXne9O8xJlTT6/view?usp=drive_link"      // TODO: Add Class 6 Chapter 4 Video Tutorial Drive Link
      }
    ]
  },
  7: {
    className: "Class 7",
    description: "Computer number systems, Excel math formulas, HTML formatting lists, and Python coding basics.",
    iconColor: "var(--color-accent)",
    chapters: [
      {
        num: 1,
        title: "Browsing Safely",
        desc: "Decimal, Binary, Octal, and Hexadecimal numbers and their conversions.",
        answerKeyUrl: "https://drive.google.com/file/d/1YxK3ecQrR0v7VdHvd56qs2m9AwdzAksv/view?usp=drive_link", // TODO: Add Class 7 Chapter 1 Answer Key Drive Link
        videoUrl: "https://drive.google.com/file/d/1JbUz0emN-0wE4XoMyQMR94LHV_VrRc76/view?usp=drive_link"      // TODO: Add Class 7 Chapter 1 Video Tutorial Drive Link
      },
      {
        num: 2,
        title: "Cloud Computing",
        desc: "Using formulas (SUM, AVERAGE, count) and rendering column, bar, and pie charts.",
        answerKeyUrl: "https://drive.google.com/file/d/1YxK3ecQrR0v7VdHvd56qs2m9AwdzAksv/view?usp=drive_link", // TODO: Add Class 7 Chapter 2 Answer Key Drive Link
        videoUrl: "https://drive.google.com/file/d/1hMVm9wxvSY2fGtwZKvmTg-BFfOfzu22H/view?usp=drive_link"      // TODO: Add Class 7 Chapter 2 Video Tutorial Drive Link
      },
      {
        num: 3,
        title: "Formulas and Functions in Excel",
        desc: "Creating ordered lists, unordered lists, description lists, and hyperlink anchors.",
        answerKeyUrl: "https://drive.google.com/file/d/1YxK3ecQrR0v7VdHvd56qs2m9AwdzAksv/view?usp=drive_link", // TODO: Add Class 7 Chapter 3 Answer Key Drive Link
        videoUrl: "https://drive.google.com/file/d/1WvLp2eB-8jaslLJVrJJPjIGiUyrwoYy5/view?usp=drive_link"      // TODO: Add Class 7 Chapter 3 Video Tutorial Drive Link
      },
      {
        num: 4,
        title: "Advanced Features of Excel",
        desc: "Interactive mode, script mode, variables, strings, and simple inputs.",
        answerKeyUrl: "https://drive.google.com/file/d/1YxK3ecQrR0v7VdHvd56qs2m9AwdzAksv/view?usp=drive_link", // TODO: Add Class 7 Chapter 4 Answer Key Drive Link
        videoUrl: "https://drive.google.com/file/d/1i_5IAMcsRWuEOsQLKjzWk-ryXWP1qTgr/view?usp=drive_link"      // TODO: Add Class 7 Chapter 4 Video Tutorial Drive Link
      }
    ]
  },
  8: {
    className: "Class 8",
    description: "Network systems, database modeling, CSS style sheets, and Python conditionals.",
    iconColor: "var(--color-primary)",
    chapters: [
      {
        num: 1,
        title: "Cyber Ethics",
        desc: "Cyber Ethics",
        answerKeyUrl: "https://drive.google.com/file/d/1C_qF0H8b71Hfhxh0gMdrcxQx5LxRm2Wm/view?usp=drive_link", // TODO: Add Class 8 Chapter 1 Answer Key Drive Link
        videoUrl: "https://drive.google.com/file/d/1TjeIiNJhUAkwOSRPRy98-vBQujFyi3Pj/view?usp=drive_link"      // TODO: Add Class 8 Chapter 1 Video Tutorial Drive Link
      },
      {
        num: 2,
        title: "Emerging Trends",
        desc: "Emerging Trends",
        answerKeyUrl: "https://drive.google.com/file/d/1C_qF0H8b71Hfhxh0gMdrcxQx5LxRm2Wm/view?usp=drive_link", // TODO: Add Class 8 Chapter 2 Answer Key Drive Link
        videoUrl: "https://drive.google.com/file/d/1o9hXfr8KEp2k7FFoQWV2YuY9vDAhIHTD/view?usp=drive_link"      // TODO: Add Class 8 Chapter 2 Video Tutorial Drive Link
      },
      {
        num: 3,
        title: "Iterative Statements in Python",
        desc: "Iterative Statements in Python",
        answerKeyUrl: "https://drive.google.com/file/d/1C_qF0H8b71Hfhxh0gMdrcxQx5LxRm2Wm/view?usp=drive_link", // TODO: Add Class 8 Chapter 3 Answer Key Drive Link
        videoUrl: "https://drive.google.com/file/d/1nN4IHAmo8d1qsWnHPmS_3eXwXqG1XxKY/view?usp=drive_link"      // TODO: Add Class 8 Chapter 3 Video Tutorial Drive Link
      },
      {
        num: 4,
        title: "More on HTML5",
        desc: "More on HTML5",
        answerKeyUrl: "https://drive.google.com/file/d/1C_qF0H8b71Hfhxh0gMdrcxQx5LxRm2Wm/view?usp=drive_link", // TODO: Add Class 8 Chapter 4 Answer Key Drive Link
        videoUrl: "https://drive.google.com/file/d/1yjoNpHdfXHjEQD0nWzNBusdOg4WsQhun/view?usp=drive_link"      // TODO: Add Class 8 Chapter 4 Video Tutorial Drive Link
      }
    ]
  },
  9: {
    className: "Class 9",
    description: "Computer hardware structure, styling design sheets, and logic loops.",
    iconColor: "var(--color-secondary)",
    chapters: [
      {
        num: 1,
        title: "Methods of Communication",
        desc: "Methods of Communication",
        answerKeyUrl: "https://drive.google.com/file/d/1e3FdlVVHS9YKiQRMlmTdy7cW6IWgP9KC/view?usp=drive_link", // TODO: Add Class 9 Chapter 1 Answer Key Drive Link
        videoUrl: "https://drive.google.com/file/d/1CZVbFtcp2mG3K-zFRQi_SEiUiM8d1I3l/view?usp=drive_link"      // TODO: Add Class 9 Chapter 1 Video Tutorial Drive Link
      },
      {
        num: 2,
        title: "Communication Cycle",
        desc: "Communication Cycle",
        answerKeyUrl: "https://drive.google.com/file/d/1e3FdlVVHS9YKiQRMlmTdy7cW6IWgP9KC/view?usp=drive_link", // TODO: Add Class 9 Chapter 2 Answer Key Drive Link
        videoUrl: "https://drive.google.com/file/d/1H2eeSUpaY-Zb0nYPEu180Yv5xFdH9pTQ/view?usp=drive_link"      // TODO: Add Class 9 Chapter 2 Video Tutorial Drive Link
      },
      {
        num: 3,
        title: "Perspectives in Communication",
        desc: "Perspectives in Communication",
        answerKeyUrl: "https://drive.google.com/file/d/1e3FdlVVHS9YKiQRMlmTdy7cW6IWgP9KC/view?usp=drive_link", // TODO: Add Class 9 Chapter 3 Answer Key Drive Link
        videoUrl: "https://drive.google.com/file/d/1vevJ2SsUgjQ-4IaIGy-hxbIhhnGPD3aX/view?usp=drive_link"      // TODO: Add Class 9 Chapter 3 Video Tutorial Drive Link
      },
      {
        num: 4,
        title: "Basic Writing Skills",
        desc: "Basic Writing Skills",
        answerKeyUrl: "https://drive.google.com/file/d/1e3FdlVVHS9YKiQRMlmTdy7cW6IWgP9KC/view?usp=drive_link", // TODO: Add Class 9 Chapter 4 Answer Key Drive Link
        videoUrl: "https://drive.google.com/file/d/1LfUn2mC7wwad_s7mkWJV585cOpgop0Bh/view?usp=drive_link"      // TODO: Add Class 9 Chapter 4 Video Tutorial Drive Link
      }
    ]
  },
  10: {
    className: "Class 10",
    description: "Advanced internet networks, data arrays, SQL queries, and cybersecurity laws.",
    iconColor: "var(--color-accent)",
    chapters: [
      {
        num: 1,
        title: "Methods of Communication",
        desc: "Methods of Communication",
        answerKeyUrl: "https://drive.google.com/file/d/163bl0Unhw5N1l_l5SA5leb_ne9_DGlII/view?usp=drive_link", // TODO: Add Class 10 Chapter 1 Answer Key Drive Link
        videoUrl: "https://drive.google.com/file/d/102_YCTpZhQs1TVL4Rq5oKh-VBKMb2Jar/view?usp=drive_link"      // TODO: Add Class 10 Chapter 1 Video Tutorial Drive Link
      },
      {
        num: 2,
        title: "Communication Cycle",
        desc: "Communication Cycle",
        answerKeyUrl: "https://drive.google.com/file/d/163bl0Unhw5N1l_l5SA5leb_ne9_DGlII/view?usp=drive_link", // TODO: Add Class 10 Chapter 2 Answer Key Drive Link
        videoUrl: "https://drive.google.com/file/d/1aLf3OlE5frz7rmEf_2yuq7L-OdQRlWJb/view?usp=drive_link"      // TODO: Add Class 10 Chapter 2 Video Tutorial Drive Link
      },
      {
        num: 3,
        title: "Communication Barriers",
        desc: "Communication Barriers",
        answerKeyUrl: "https://drive.google.com/file/d/163bl0Unhw5N1l_l5SA5leb_ne9_DGlII/view?usp=drive_link", // TODO: Add Class 10 Chapter 3 Answer Key Drive Link
        videoUrl: "https://drive.google.com/file/d/1CSY54PTzcIyYOfc1xPIJ7C1cbWuHWgxV/view?usp=drive_link"      // TODO: Add Class 10 Chapter 3 Video Tutorial Drive Link
      },
      {
        num: 4,
        title: "Effective Communication",
        desc: "Effective Communication",
        answerKeyUrl: "https://drive.google.com/file/d/163bl0Unhw5N1l_l5SA5leb_ne9_DGlII/view?usp=drive_link", // TODO: Add Class 10 Chapter 4 Answer Key Drive Link
        videoUrl: "https://drive.google.com/file/d/1VORwgRTapVhK9egdDEIybhOVVKfcJN_y/view?usp=drive_link"      // TODO: Add Class 10 Chapter 4 Video Tutorial Drive Link
      }
    ]
  }
};

// --- SVG Icons Definition Map ---
const ICONS = {
  classIcon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>`,
  key: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-key"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path></svg>`,
  video: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-video"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>`,
  search: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`,
  empty: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`
};

// --- DOM ELEMENTS REFERENCE ---
let activeClassId = null;
let currentSearchQuery = "";

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  initClassCards();
  setupEventListeners();
});

// Initialize Class selection grid
function initClassCards() {
  const gridContainer = document.getElementById("classes-grid");
  if (!gridContainer) return;

  gridContainer.innerHTML = ""; // Clear existing placeholder content

  Object.keys(ACADEMIC_DATA).forEach((classId) => {
    const data = ACADEMIC_DATA[classId];
    const card = document.createElement("div");
    card.classList.add("class-card");
    card.setAttribute("data-class-id", classId);
    card.setAttribute("id", `class-btn-${classId}`);

    card.innerHTML = `
      <div class="class-icon" style="color: ${data.iconColor}">
        ${ICONS.classIcon}
      </div>
      <h3>${data.className}</h3>
      <p>${data.chapters.length} Computer Chapters</p>
    `;

    card.addEventListener("click", () => selectClass(classId));
    gridContainer.appendChild(card);
  });
}

// Set up Global event listeners (e.g. search input)
function setupEventListeners() {
  const searchInput = document.getElementById("chapter-search");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearchQuery = e.target.value.toLowerCase().trim();
      renderChapters();
    });
  }
}

// Selection handler for classes
function selectClass(classId) {
  // Update selection states on cards
  document.querySelectorAll(".class-card").forEach((card) => {
    card.classList.remove("active");
  });

  const selectedCard = document.getElementById(`class-btn-${classId}`);
  if (selectedCard) {
    selectedCard.classList.add("active");
  }

  activeClassId = classId;
  currentSearchQuery = ""; // Reset search for the new class
  
  const searchInput = document.getElementById("chapter-search");
  if (searchInput) searchInput.value = "";

  // Render workspace details
  renderWorkspaceHeader();
  renderChapters();

  // Scroll smoothly to materials workspace area
  const workspace = document.getElementById("materials-workspace");
  workspace.classList.add("visible");
  
  setTimeout(() => {
    workspace.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 100);
}

// Render Header details in Workspace
function renderWorkspaceHeader() {
  const badge = document.getElementById("workspace-badge");
  const title = document.getElementById("workspace-title");
  
  if (!activeClassId) return;

  const data = ACADEMIC_DATA[activeClassId];
  if (badge) badge.innerText = data.className;
  if (title) title.innerText = `Computer Science Coursework`;
}

// Render dynamic lists of chapters and buttons based on selection & search filter
function renderChapters() {
  const chaptersContainer = document.getElementById("chapters-container");
  if (!chaptersContainer || !activeClassId) return;

  const classData = ACADEMIC_DATA[activeClassId];
  const filteredChapters = classData.chapters.filter((chapter) => {
    return (
      chapter.title.toLowerCase().includes(currentSearchQuery) ||
      chapter.desc.toLowerCase().includes(currentSearchQuery) ||
      `chapter ${chapter.num}`.includes(currentSearchQuery)
    );
  });

  if (filteredChapters.length === 0) {
    chaptersContainer.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">${ICONS.empty}</div>
        <h3>No chapters found matching "${currentSearchQuery}"</h3>
        <p>Try clearing your search query or typing another keyword.</p>
      </div>
    `;
    return;
  }

  chaptersContainer.innerHTML = ""; // Clear existing

  filteredChapters.forEach((chapter, index) => {
    const item = document.createElement("div");
    item.classList.add("chapter-item");
    item.style.animation = `slide-up 0.4s ease-out ${index * 0.05}s both`;

    // Handle check if links exist or are placeholders to display appropriate warning or action
    const keyBtnClass = chapter.answerKeyUrl === "#" ? "btn-secondary" : "btn-primary";
    const keyToolTip = chapter.answerKeyUrl === "#" ? "Placeholder link (needs update in app.js)" : "Download Answer Key";
    
    const videoBtnClass = chapter.videoUrl === "#" ? "btn-secondary" : "btn-primary";
    const videoToolTip = chapter.videoUrl === "#" ? "Placeholder link (needs update in app.js)" : "Watch Video Tutorial";

    item.innerHTML = `
      <div class="chapter-info">
        <div class="chapter-num-badge">
          Ch ${chapter.num}
        </div>
        <div class="chapter-details">
          <h4 class="chapter-title">${chapter.title}</h4>
          ${chapter.desc && chapter.desc.trim() !== chapter.title.trim() ? `<p class="chapter-desc">${chapter.desc}</p>` : ''}
        </div>
      </div>
      <div class="chapter-actions">
        <a href="${chapter.answerKeyUrl}" 
           target="_blank" 
           class="btn ${keyBtnClass}" 
           title="${keyToolTip}"
           id="chapter-${chapter.num}-key-btn">
          ${ICONS.key}
          <span>Answer Key</span>
        </a>
        <a href="${chapter.videoUrl}" 
           target="_blank" 
           class="btn ${videoBtnClass}" 
           title="${videoToolTip}"
           id="chapter-${chapter.num}-video-btn">
          ${ICONS.video}
          <span>Video Lesson</span>
        </a>
      </div>
    `;

    chaptersContainer.appendChild(item);
  });
}
