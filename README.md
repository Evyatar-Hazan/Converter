# Universal Data Converter

A unified, privacy-first web application for seamless data conversion between **JSON**, **CSV**, and **XML** formats. Designed for developers, data analysts, and privacy-conscious users, all tools process data 100% locally in the browser.

## 🚀 Key Features

- **Four Essential Tools**:
  - **JSON to CSV**: Transform structured JSON arrays into clean CSV files.
  - **CSV to JSON**: Parse CSV headers and rows into JSON objects.
  - **JSON to XML**: Convert nested JSON data into well-formed XML.
  - **XML to JSON**: Translate XML elements and attributes into structured JSON.
- **Privacy First**: No data ever leaves your computer. All processing happens in your browser's memory.
- **Modern UI/UX**: Clean, responsive design built with a focus on usability and speed.
- **Instant Downloads**: Save your conversion results directly as files with a single click.
- **Automatic Persistence**: Utilizes `localStorage` to save your last input, so you don't lose progress on page refresh.
- **No Dependencies**: Lightweight and fast, built using vanilla HTML5, CSS3, and modern JavaScript (ES6+).

## 🗂️ Project Structure

```text
Converter/
├── index.html            # Main dashboard and hub for all tools
├── css/
│   └── styles.css        # Centralized design system and responsive styles
├── js/                   # Core conversion logic and utilities
│   ├── analytics.js      # Minimalist GA4 integration
│   ├── csv-to-json.js    # CSV parsing engine
│   ├── json-to-csv.js    # JSON transformation logic
│   ├── json-to-xml.js    # XML generation engine
│   ├── xml-to-json.js    # XML parsing and mapping
│   └── downloader.js     # Universal file download handler
├── tools/                # Standalone tool pages
│   ├── csv-to-json.html
│   ├── json-to-csv.html
│   ├── json-to-xml.html
│   └── xml-to-json.html
└── README.md             # Project documentation
```

## 🧑‍💻 How to Use

1. **Launch the Hub**: Simply open `index.html` in any modern web browser.
2. **Select a Tool**: Choose the conversion path you need from the main dashboard.
3. **Input Data**: Paste your source data into the input field.
4. **Convert & Review**: Click the "Convert" button to see the results instantly.
5. **Download**: Use the "Download" button to save the result to your local machine.

## 📈 Technical Details

- **Responsive Design**: Fully optimized for mobile, tablet, and desktop viewing.
- **SEO Optimized**: Includes proper meta tags, Open Graph support, and semantic HTML for better visibility.
- **Performance**: Zero external requests for core functionality ensures near-instant load times and high performance.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

*Built with a focus on privacy, speed, and simplicity.*
# Converter
