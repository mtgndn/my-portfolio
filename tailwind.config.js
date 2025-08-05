// tailwind.config.js
module.exports = {
  darkMode: "class", // tema geçişi için
  theme: {
    extend: {
      colors: {
        vscode: {
          background: "#1e1e1e",  // VSCode koyu arka plan
          sidebar: "#252526",
          blue: "#007acc",        // VSCode mavi vurgusu
          textLight: "#d4d4d4",
          textMuted: "#858585",
          buttonBg: "#0e639c",
          buttonHover: "#1177bb",
          border: "#3c3c3c",
        },
      },
      fontFamily: {
        mono: ["'Fira Code'", "monospace"], // VSCode monospace fontu
      },
    },
  },
  plugins: [],
};
