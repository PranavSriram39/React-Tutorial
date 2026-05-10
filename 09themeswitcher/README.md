# 🌗 React Theme Switcher

A modern React application built using **React.js**, **Context API**, **Hooks**, **Vite**, and **Tailwind CSS**.  
This project helped me understand how to implement **global theme management** and build a complete **Light/Dark Mode switcher** using React Context API.

It was one of the most important projects in my React learning journey because it introduced me to:
- 🌍 Global state management
- 🎨 Dynamic theming
- ⚛️ Context API architecture
- 🌙 Dark mode implementation
- 💾 Theme persistence concepts

---

# 🚀 Project Overview

The Theme Switcher application allows users to:

- 🌞 Switch between Light Mode and Dark Mode
- 🌙 Apply themes globally across the application
- ⚡ Experience instant UI updates
- 🧠 Understand Context API in real-world use cases
- 🎨 Dynamically change application styling

This project simulates how modern applications like:
- YouTube
- Instagram
- Twitter/X
- GitHub

implement dark mode functionality.

---

# 📸 Features

✅ Light/Dark Theme Toggle  
✅ Global Theme Management  
✅ Context API Implementation  
✅ Dynamic UI Updates  
✅ Tailwind CSS Styling  
✅ Responsive Design  
✅ Reusable Components  
✅ Beginner-Friendly Architecture  

---

# 🧠 What I Learned

---

# ✅ 1. React Context API

Learned how React Context API helps share global data across components.

### Problem Before Context API

```text
Parent → Child → Grandchild → Great Grandchild
```

Passing props manually through every component becomes difficult.

This problem is called:

> ❌ Prop Drilling

---

### Solution Using Context API

```text
Theme Provider
        ↓
All Components Access Theme Directly
```

### Understanding Gained

- Context provides global data access
- Eliminates unnecessary prop passing
- Makes large applications cleaner

React officially recommends Context for passing deeply shared data like themes. :contentReference[oaicite:0]{index=0}

---

# ✅ 2. createContext()

Learned how to create a global theme context.

### Example

```jsx
const ThemeContext = createContext()
```

### Purpose

| Function | Use |
|----------|-----|
| `createContext()` | Creates shared global context |

This context stores:
- Current theme
- Theme toggle function

---

# ✅ 3. Theme Provider

Learned how providers make data available throughout the application.

### Example

```jsx
<ThemeContext.Provider value={{ themeMode, darkTheme, lightTheme }}>
```

### What I Understood

- Providers wrap the application
- Shared values become accessible globally
- Components can consume theme data directly

---

# ✅ 4. useContext Hook

Learned how components consume global theme data.

### Example

```jsx
const { themeMode, darkTheme, lightTheme } = useContext(ThemeContext)
```

### Skills Gained

- Accessing global state
- Reading shared values
- Triggering global updates

React documentation explains that `useContext()` automatically reads the nearest provider value. :contentReference[oaicite:1]{index=1}

---

# ✅ 5. Dynamic Theme Switching

Learned how applications switch between themes dynamically.

### Example

```jsx
themeMode === "dark"
```

### What Happens

```text
User Clicks Toggle
        ↓
Theme State Changes
        ↓
Context Updates
        ↓
All Components Re-render
        ↓
New Theme Applied
```

This project helped me deeply understand:
- Reactive UI updates
- State-driven styling
- Real-world frontend architecture

---

# ✅ 6. useState Hook

Used `useState` for storing current theme.

### Example

```jsx
const [themeMode, setThemeMode] = useState("light")
```

### Understanding

| State | Purpose |
|------|----------|
| `themeMode` | Stores current theme |
| `setThemeMode` | Updates theme |

---

# ✅ 7. Theme Toggle Functions

Learned how functions can update global state.

### Example

```jsx
const darkTheme = () => {
  setThemeMode("dark")
}

const lightTheme = () => {
  setThemeMode("light")
}
```

### Concepts Practiced
- State updates
- Function handling
- Dynamic rendering

---

# ✅ 8. useEffect Hook

Learned how side effects work in React.

### Example

```jsx
useEffect(() => {
  document.querySelector('html').classList.remove("light", "dark")
  document.querySelector('html').classList.add(themeMode)
}, [themeMode])
```

### Understanding Gained

- React executes effects after rendering
- Effects react to dependency changes
- Perfect for theme updates

This project improved my understanding of:
- Dependency arrays
- DOM side effects
- Real-world Hook usage

---

# ✅ 9. Tailwind CSS Dark Mode

Learned how Tailwind supports dark mode styling.

### Example

```jsx
className="bg-white dark:bg-gray-900"
```

### Tailwind Concepts Learned

| Class | Purpose |
|------|---------|
| `dark:` | Dark mode styling |
| `bg-white` | Light background |
| `dark:bg-gray-900` | Dark background |
| `text-black` | Light mode text |
| `dark:text-white` | Dark mode text |

---

# ✅ 10. Global State Management

This project introduced me to the idea of:

# 🌍 Application-Wide State

Examples:
- Theme mode
- Logged-in user
- Shopping cart
- Language settings

This became my foundation before learning:
- Redux
- Zustand
- Advanced state management libraries

---

# ✅ 11. Component Re-rendering

Learned that whenever global context changes:

```text
Context Changes
       ↓
Subscribed Components Re-render
       ↓
Updated UI Appears
```

This helped me understand how React updates applications efficiently.

Community discussions also commonly recommend Context API for managing themes globally in React apps. :contentReference[oaicite:2]{index=2}

---

# 📂 Project Structure

```bash
09themeswitcher/
│
├── src/
│   ├── context/
│   │   └── theme.js
│   │
│   ├── components/
│   │   ├── ThemeBtn.jsx
│   │   └── Card.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── tailwind.config.js
├── vite.config.js
├── package.json
└── README.md
```

---

# 🛠️ Technologies Used

| Technology | Purpose |
|------------|----------|
| React.js | Frontend Library |
| Context API | Global State Management |
| JavaScript | Logic |
| Tailwind CSS | Styling |
| JSX | UI Structure |
| Vite | Development Environment |

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

## 3️⃣ Start Development Server

```bash
npm run dev
```

---

# 🎯 Features

✅ Theme Switching  
✅ Dark/Light Mode  
✅ Context API  
✅ Global State Sharing  
✅ Tailwind Dark Mode  
✅ Responsive Design  
✅ Reusable Components  
✅ Dynamic UI Rendering  

---

# 📈 Skills Gained

✔ React Context API  
✔ createContext()  
✔ useContext Hook  
✔ useState Hook  
✔ useEffect Hook  
✔ Global State Management  
✔ Dynamic Theming  
✔ Tailwind Dark Mode  
✔ Component Re-rendering  
✔ React Architecture  

---

# 💡 Key Takeaways

> Context API makes it easy to manage global application state like themes.

> React applications become highly interactive when state controls the UI dynamically.

This project helped me deeply understand:
- Global state flow
- Theme architecture
- Hook-based development
- Dynamic styling
- Real-world React patterns

---

# 🔥 Future Improvements

- Add localStorage persistence 💾
- Add system theme detection 🌗
- Add multiple custom themes 🎨
- Add animated transitions
- Add Redux integration
- Add theme configuration panel

Modern React theme switchers often combine Context API with localStorage for persistent dark mode experiences. :contentReference[oaicite:3]{index=3}

---

# 🌟 Why This Project is Important

This project combines multiple important React concepts:

## ⚛️ React Concepts
- Context API
- Hooks
- State Management
- Component Communication
- Dynamic Rendering

## 🎨 Frontend Concepts
- Dark Mode
- Responsive UI
- Dynamic Styling
- Theme Architecture

It is one of the best beginner-to-intermediate React projects for understanding how professional frontend applications handle themes globally.

---

# 👨‍💻 Author

## Pranav Sriram

Learning React.js step by step 🚀
