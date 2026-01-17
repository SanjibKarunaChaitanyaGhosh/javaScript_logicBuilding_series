🎨 Random Page Color Generator
📌 Project Name

Random Page Color (Hex Code Generator)

👋 Introduction

This project is a simple and interactive Random Color Generator built using HTML, CSS, and JavaScript.
With a single button click, the webpage background changes to a random color, and the corresponding HEX color code is displayed and automatically copied to the clipboard.

This project is ideal for beginners to understand JavaScript events, DOM manipulation, and random number generation.

🎯 Project Objective

Generate random background colors

Display the generated HEX color code

Automatically copy the color code to clipboard

Improve user interaction with smooth UI transitions

⚙️ Working Details
How It Works:

A random number is generated using Math.random()

The number is converted into a HEX color code

The page background color updates instantly

The HEX code is displayed on screen

The color code is copied automatically using the Clipboard API

🧠 JavaScript Logic Highlights

Random color range: 0 – 16777215

Converted to HEX using:

randomNumber.toString(16)


Background update:

document.body.style.backgroundColor


Clipboard support using:

navigator.clipboard.writeText()

🛠️ Technologies Used

HTML5 – Structure

CSS3 – Styling & animations

JavaScript (Vanilla JS) – Color logic & events

🎨 UI Highlights

Smooth background color transition

Centered content layout

Hover effects on box and button

Clean and minimal design

📂 Project Structure
Random_Page_Color/
│
├── index.html
├── style.css
├── randColor.js
└── README.md

✅ Conclusion

This project helped me learn:

Generating random values in JavaScript

Working with HEX color codes

Handling button click events

Using Clipboard API

Enhancing UI with CSS transitions

It is a fun and useful mini-project that strengthens frontend fundamentals.


🚀 Way Forward (Future Enhancements)

Planned improvements:

Show RGB & HSL values

Add color history list

Copy confirmation toast message

Add Dark / Light mode

Convert into a React component


🙌 Acknowledgement

This project is part of my continuous learning journey in Frontend Development & JavaScript.
Suggestions and improvements are always welcome.

⭐ If you like this project, don’t forget to give it a star on GitHub!