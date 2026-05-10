# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# 🚀 React Counter App

A simple and interactive Counter Application built using **React.js**.  
This project helped me understand the fundamentals of **React Hooks**, **State Management**, and **Event Handling**.

---

# 📌 Project Overview

The Counter App allows users to:

- ➕ Increase the counter value
- ➖ Decrease the counter value
- 🔄 Reset the counter
- ⚡ Experience real-time UI updates using React state

This project was created as part of my React learning journey.

---

# 🧠 What I Learned

## ✅ React Functional Components
Learned how to build UI using reusable functional components.

### Example

```jsx
function App() {
  return <h1>Counter App</h1>
}
```

---

## ✅ useState Hook

Learned how React stores and updates dynamic data using the `useState` Hook.

### Example

```jsx
const [count, setCount] = useState(0)
```

### Understanding
- `count` → current state value
- `setCount` → updates the state
- `0` → initial state value

---

## ✅ State Management

Understood how:
- React manages component state
- Updating state automatically updates the UI
- State should never be modified directly

### Example

```jsx
setCount(count + 1)
```

---

## ✅ Event Handling

Learned how to handle user interactions like button clicks.

### Example

```jsx
<button onClick={increment}>Increase</button>
```

---

## ✅ Dynamic UI Rendering

Learned that React automatically re-renders components whenever state changes.

### Example

```jsx
<h1>{count}</h1>
```

---

## ✅ JSX (JavaScript XML)

Learned how to write HTML inside JavaScript using JSX.

### Example

```jsx
return (
  <div>
    <h1>Counter App</h1>
  </div>
)
```

---

## ✅ React Application Flow

Understanding gained:

```text
User Action
   ↓
Event Triggered
   ↓
State Updated
   ↓
React Re-renders UI
   ↓
Updated Data Displayed
```

---

# 🛠️ Technologies Used

| Technology | Purpose |
|------------|----------|
| React.js | Frontend Library |
| JavaScript | Logic |
| JSX | UI Structure |
| Vite | Build Tool |
| HTML/CSS | Styling |

---

# 📂 Project Structure

```bash
src/
│
├── App.jsx
├── main.jsx
├── index.css
└── components/
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone <repository-url>
```

---

## 2️⃣ Install Dependencies

```bash
npm install
```

---

## 3️⃣ Run Development Server

```bash
npm run dev
```

---

# 🎯 Features

- Real-time counter updates
- Simple and clean UI
- Beginner-friendly React project
- Fast development using Vite
- Interactive user experience

---

# 📈 Skills Gained

✔ React Basics  
✔ useState Hook  
✔ Event Handling  
✔ JSX Syntax  
✔ Component Rendering  
✔ State-driven UI  
✔ React Project Structure  

---

# 🔥 Future Improvements

- Add dark mode 🌙
- Add custom increment value
- Store counter in local storage
- Add animations
- Convert into reusable component
- Add Tailwind CSS styling

---

# 💡 Key Takeaway

> React applications become powerful because the UI automatically updates whenever the state changes.

This project helped me understand the core foundation of React development.

---

# 👨‍💻 Author

## Pranav Sriram

Learning React.js step by step 🚀
