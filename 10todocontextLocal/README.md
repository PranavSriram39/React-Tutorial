# 📝 React Todo App with Context API & Local Storage

A modern and interactive Todo Application built using **React.js**, **Context API**, **Hooks**, **Vite**, and **Tailwind CSS**.  
This project helped me understand how real-world React applications manage **global state**, **persistent storage**, and **CRUD operations** efficiently.

It was one of the most important projects in my React learning journey because it combined:
- ⚛️ React Hooks
- 🌍 Context API
- 💾 Local Storage
- 🧠 Global State Management
- ✏️ CRUD Operations
- 🎨 Dynamic UI Rendering

---

# 🚀 Project Overview

The Todo Application allows users to:

- ➕ Add Todos
- ✏️ Edit Existing Todos
- ✅ Mark Todos as Completed
- ❌ Delete Todos
- 💾 Save Todos in Local Storage
- 🔄 Persist Data After Page Refresh
- ⚡ Experience Instant UI Updates

This project simulates how modern productivity applications manage tasks dynamically.

---

# 📸 Features

✅ Add Todos  
✅ Edit Todos  
✅ Delete Todos  
✅ Mark Todos as Complete  
✅ Persistent Local Storage  
✅ Context API State Management  
✅ Real-time UI Updates  
✅ Responsive Design  
✅ Tailwind CSS Styling  

---

# 🧠 What I Learned

---

# ✅ 1. React Context API

Learned how Context API helps share global state across multiple components without prop drilling.

### Before Context API

```text
Parent → Child → Grandchild → Great Grandchild
```

Props had to be passed manually through every component.

This problem is called:

> ❌ Prop Drilling

---

### Solution Using Context API

```text
Todo Provider
        ↓
All Components Access Todos Directly
```

### Understanding Gained

- Shared state becomes globally accessible
- Components communicate more efficiently
- Application structure becomes cleaner

Context API is commonly used in React applications for lightweight global state management. :contentReference[oaicite:0]{index=0}

---

# ✅ 2. createContext()

Learned how to create a global Todo context.

### Example

```jsx
const TodoContext = createContext()
```

### Purpose

| Function | Use |
|----------|-----|
| `createContext()` | Creates global shared state |

---

# ✅ 3. Context Provider

Learned how providers make data available throughout the application.

### Example

```jsx
<TodoProvider>
  <App />
</TodoProvider>
```

### What I Understood

- Providers wrap components
- Shared data becomes accessible globally
- Centralized state management becomes easier

---

# ✅ 4. useContext Hook

Learned how components access global state directly.

### Example

```jsx
const { todos, addTodo } = useContext(TodoContext)
```

### Skills Gained

- Accessing shared state
- Using global functions
- Simplifying component communication

---

# ✅ 5. useState Hook

Used `useState` to manage todos dynamically.

### Example

```jsx
const [todos, setTodos] = useState([])
```

### Understanding

| State | Purpose |
|------|----------|
| `todos` | Stores all todo items |
| `setTodos` | Updates todo list |

---

# ✅ 6. CRUD Operations

This project introduced me to complete CRUD functionality.

| Operation | Meaning |
|-----------|----------|
| Create | Add Todo |
| Read | Display Todos |
| Update | Edit Todo |
| Delete | Remove Todo |

### Example

```jsx
addTodo(todo)
updateTodo(id, updatedTodo)
deleteTodo(id)
```

### Skills Improved

- Array manipulation
- Dynamic rendering
- State updates
- Real-world application logic

---

# ✅ 7. Local Storage

One of the biggest concepts I learned from this project.

### What is Local Storage?

Local Storage allows applications to save data inside the browser even after refresh.

### Example

```jsx
localStorage.setItem("todos", JSON.stringify(todos))
```

### Retrieving Data

```jsx
JSON.parse(localStorage.getItem("todos"))
```

### Understanding Gained

- Browser-based persistent storage
- JSON serialization/deserialization
- Data persistence after refresh

Local Storage is commonly used in React Todo applications to persist tasks between sessions. :contentReference[oaicite:1]{index=1}

---

# ✅ 8. useEffect Hook

Learned how React handles side effects using `useEffect`.

### Example

```jsx
useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos))
}, [todos])
```

### What I Understood

- `useEffect` runs after rendering
- Perfect for saving data
- Automatically updates Local Storage when todos change

Using `useEffect` to synchronize React state with localStorage is a common React pattern. :contentReference[oaicite:2]{index=2}

---

# ✅ 9. Dynamic Rendering

Learned how React dynamically updates UI using arrays and `.map()`.

### Example

```jsx
todos.map((todo) => (
  <TodoItem key={todo.id} todo={todo} />
))
```

### Concepts Practiced
- List rendering
- React keys
- Component reusability

---

# ✅ 10. Controlled Components

Learned how form inputs are controlled using state.

### Example

```jsx
<input
  value={todo}
  onChange={(e) => setTodo(e.target.value)}
/>
```

### Skills Gained
- Form handling
- Input synchronization
- Dynamic updates

---

# ✅ 11. React Application Flow

This project helped me understand complete React application architecture.

```text
User Adds Todo
        ↓
State Updates
        ↓
Context Shares Updated Data
        ↓
UI Re-renders Automatically
        ↓
Todos Saved to Local Storage
```

This was one of the most practical React learning experiences.

---

# ✅ 12. Tailwind CSS Styling

Used Tailwind CSS for modern UI design.

### Example

```jsx
className="bg-zinc-800 text-white rounded-lg p-4"
```

### Tailwind Concepts Practiced

| Class | Purpose |
|------|---------|
| `rounded-lg` | Rounded corners |
| `p-4` | Padding |
| `flex` | Flexbox layout |
| `shadow-lg` | Shadow effect |
| `bg-zinc-800` | Background color |

---

# 📂 Project Structure

```bash
10todocontextLocal/
│
├── src/
│   ├── context/
│   │   └── TodoContext.js
│   │
│   ├── components/
│   │   ├── TodoForm.jsx
│   │   ├── TodoItem.jsx
│   │   └── TodoList.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── vite.config.js
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
| Local Storage | Persistent Browser Storage |
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

✅ Todo CRUD Operations  
✅ Context API State Sharing  
✅ Persistent Local Storage  
✅ Dynamic Rendering  
✅ Responsive UI  
✅ React Hooks  
✅ Tailwind CSS Design  
✅ Real-time Updates  

---

# 📈 Skills Gained

✔ React Context API  
✔ createContext()  
✔ useContext Hook  
✔ useState Hook  
✔ useEffect Hook  
✔ CRUD Operations  
✔ Local Storage  
✔ Dynamic Rendering  
✔ Form Handling  
✔ Tailwind CSS  
✔ Component Architecture  

---

# 💡 Key Takeaways

> Context API makes global state management simple in React applications.

> Local Storage allows applications to persist data even after refreshing the browser.

This project helped me deeply understand:
- Global state sharing
- Persistent browser storage
- CRUD application logic
- Real-world React architecture
- Dynamic UI rendering

---

# 🔥 Future Improvements

- Add due dates 📅
- Add drag & drop functionality
- Add filters (All / Active / Completed)
- Add dark/light mode 🌙
- Add backend database integration
- Add authentication 🔐
- Add Redux Toolkit integration

Many React developers also combine Context API with Local Storage for lightweight persistent state management in Todo applications. :contentReference[oaicite:3]{index=3}

---

# 🌟 Why This Project is Important

This project combines multiple core React concepts into one real-world application.

## ⚛️ React Concepts
- Context API
- Hooks
- Global State Management
- Component Communication
- Dynamic Rendering

## 💾 Browser Concepts
- Local Storage
- Persistent Data
- JSON Handling

## 🎨 Frontend Concepts
- Responsive UI
- CRUD Operations
- Tailwind Styling

It acts as a strong foundation before learning:
- Redux Toolkit
- Backend Integration
- MERN Stack Development
- Authentication Systems

---

# 👨‍💻 Author

## Pranav Sriram

Learning React.js step by step 🚀
