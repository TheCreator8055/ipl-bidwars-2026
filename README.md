# 🏏 IPL BidWars 2026 – Auction Simulator

A web-based IPL Auction Simulator built for a college tech event to simulate real-time player bidding, team budgets, foreign player limits, and team rankings.

Designed to mimic the intensity and rules of an IPL auction in a simple, interactive web interface. Built in one week under real event pressure. No frameworks, just logic.

---

## ✨ Highlights

- Real-time auction dashboard  
- Live team purse tracking  
- Enforces IPL-style rules automatically  
- Visual team ranking with medal highlights 🥇🥈🥉  
- Export final auction results as PDF  
- Data persists even after page refresh  
- Keyboard shortcuts for faster bidding  
- Clean UI with animated team cards and logos  

---

## 🚀 Features

- 👨‍💼 **Admin Dashboard**
  - Centralized control for bidding  
  - Quick player entry  
  - Team selection dropdown  
  - One-click undo  

- 💰 **Budget & Rules Engine**
  - Max 15 players per team  
  - Max 6 foreign players per team  
  - Prevents overspending  
  - Blocks duplicate player purchases  
  - Validates ratings (1–10 only)  

- 📊 **Live Analytics**
  - Total players sold  
  - Remaining players  
  - Total amount spent  
  - Remaining purse across all teams  
  - Team-wise rating score  

- 🧠 **Smart UX**
  - Keyboard auto-focus for fast input  
  - Color-coded foreign & Indian players  
  - Locked teams when limits reached  
  - Visual rank glow for top 3 teams  

- 📄 **Export**
  - Generate printable PDF report  
  - Team-wise player lists  
  - Final team ratings  
  - Remaining purse summary  

---

## 🛠 Tech Stack

- HTML5  
- CSS3  
- Vanilla JavaScript  
- Browser LocalStorage  

No frameworks. No libraries. Just raw logic and DOM work.

---

## 📂 Project Structure

```text
ipl-bidwars-2026/
├── index.html
├── favicon.ico
├── ipl.css
├── ipl.js
├── logos/
├── README.md
└── LICENSE
```
---
#How to Run Locally
git clone https://github.com/TheCreator8055/ipl-bidwars-2026.git
cd ipl-bidwars-2026
open index.html
