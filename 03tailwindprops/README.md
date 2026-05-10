# 🎨 React Tailwind Props Project

A modern React project built using **React.js**, **Vite**, and **Tailwind CSS**.  
This project helped me understand how to create reusable UI components, pass dynamic data using props, and style applications efficiently using Tailwind utility classes.

---

# 🚀 Project Overview

This project demonstrates:

- ⚛️ React Functional Components
- 🎯 Passing data using Props
- 🎨 Tailwind CSS styling
- ♻️ Reusable UI Components
- ⚡ Fast development using Vite

The main feature of this project is a reusable **Card Component** that receives dynamic data through props.

---

# 🧠 What I Learned

---

# ✅ 1. Tailwind CSS Basics

Learned how to style React applications using utility classes instead of writing traditional CSS.

### Example

```jsx
<div className="h-[400px] w-[300px] rounded-md">
```

### Tailwind Benefits
- Faster styling
- Utility-first approach
- Responsive design support
- Cleaner workflow
- No need to write large CSS files

---

# ✅ 2. Installing Tailwind CSS in React

Learned how to configure Tailwind with Vite and React.

### Installed Packages

```bash
npm install -D tailwindcss postcss autoprefixer
```

### Tailwind Initialization

```bash
npx tailwindcss init -p
```

---

# ✅ 3. Tailwind Configuration

Learned how Tailwind scans project files for utility classes.

### Example

```js
content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
]
```

---

# ✅ 4. Using Tailwind Directives

Learned how Tailwind styles are injected into the project.

### Example

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

# ✅ 5. React Props

Learned how to pass data from parent components to child components using props.

### Example

```jsx
<Card username="Pranav" btnText="Visit Profile" />
```

---

# ✅ 6. Destructuring Props

Learned how to directly access prop values inside components.

### Example

```jsx
function Card({ username, btnText }) {
```

---

# ✅ 7. Default Props

Learned how to assign default values when props are not passed.

### Example

```jsx
btnText = "visit me"
```

---

# ✅ 8. Reusable Components

Understood how one component can be reused multiple times with different data.

### Example

```jsx
<Card username="Pranav" />
<Card username="React Developer" />
```

---

# ✅ 9. Responsive UI Design

Learned how Tailwind utility classes help build responsive and modern interfaces quickly.

### Example Classes

| Class | Purpose |
|------|---------|
| `rounded-md` | Rounded corners |
| `text-white` | White text |
| `bg-gradient-to-t` | Gradient background |
| `object-cover` | Image fit |
| `absolute` | Absolute positioning |

---

# ✅ 10. Component-Based Architecture

Learned how React applications are divided into reusable independent components.

### Benefits
- Cleaner code
- Easy maintenance
- Better scalability
- Improved readability

---

# 📂 Project Structure

```bash
03tailwindprops/
│
├── src/
│   ├── components/
│   │   └── Card.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

---

# 🛠️ Technologies Used

| Technology | Purpose |
|------------|----------|
| React.js | Frontend Library |
| Vite | Build Tool |
| Tailwind CSS | Styling |
| JavaScript | Logic |
| JSX | UI Structure |

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

✅ Reusable Card Components  
✅ Dynamic Props  
✅ Tailwind Styling  
✅ Responsive Design  
✅ Gradient Overlay UI  
✅ Modern Card Layout  
✅ Clean Component Structure  

---

# 📈 Skills Gained

✔ Tailwind CSS Setup  
✔ Utility-First Styling  
✔ React Props  
✔ Reusable Components  
✔ JSX Design Patterns  
✔ Vite Configuration  
✔ Component Architecture  
✔ Dynamic UI Rendering  

---

# 💡 Key Takeaways

> Props make React components dynamic and reusable.

> Tailwind CSS makes frontend development faster and cleaner.

This project helped me understand how professional React applications are structured and styled.

---

# 🔥 Future Improvements

- Add responsive mobile design
- Add hover animations
- Add multiple card layouts
- Add dark/light mode
- Fetch card data dynamically
- Use Tailwind responsive breakpoints

---

# 🌟 What Makes This Project Important?

This project combines two major frontend concepts:

### ⚛️ React Concepts
- Props
- Components
- Reusability

### 🎨 Tailwind Concepts
- Utility classes
- Responsive styling
- Fast UI development

Together, they form the foundation for building modern frontend applications.

---

# 👨‍💻 Author

## Pranav Sriram

Learning React.js and Tailwind CSS step by step 🚀
