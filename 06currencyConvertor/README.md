# 💱 React Currency Converter

A modern and interactive Currency Converter application built using **React.js**, **Vite**, and **Tailwind CSS**.  
This project helped me understand advanced React concepts like **custom hooks**, **API fetching**, **state management**, **controlled components**, and **dynamic currency conversion**.

---

# 🚀 Project Overview

The Currency Converter application allows users to:

- 💱 Convert one currency into another
- 🌍 Select different international currencies
- 🔄 Swap currencies instantly
- ⚡ Fetch live exchange rates using APIs
- 📊 Perform real-time conversion calculations
- 🎨 Experience a modern responsive UI

This project gave me hands-on experience with real-world React application development.

---

# 📸 Features

✅ Live Currency Conversion  
✅ Real-time Exchange Rates  
✅ Currency Swap Functionality  
✅ Dynamic Dropdown Options  
✅ Custom React Hooks  
✅ Controlled Inputs  
✅ Responsive UI  
✅ Tailwind CSS Styling  

---

# 🧠 What I Learned

---

# ✅ 1. React useState Hook

Learned how to manage application data dynamically using React state.

### Example

```jsx
const [amount, setAmount] = useState(0)
const [from, setFrom] = useState("usd")
const [to, setTo] = useState("inr")
const [convertedAmount, setConvertedAmount] = useState(0)
```

### Understanding

| State | Purpose |
|------|----------|
| `amount` | User entered amount |
| `from` | Source currency |
| `to` | Target currency |
| `convertedAmount` | Final converted value |

### Skills Gained
- Managing multiple states
- Dynamic UI rendering
- Controlled inputs

---

# ✅ 2. Custom React Hooks

Learned how to create reusable logic using custom hooks.

### Example

```jsx
useCurrencyInfo(from)
```

### What I Understood
- Custom hooks help reuse logic
- Hooks improve code organization
- API logic can stay separate from UI logic

This project introduced me to:
- Hook abstraction
- Cleaner React architecture
- Reusable functionality

---

# ✅ 3. API Fetching

Learned how to fetch live currency data from an external API.

### Example

```jsx
const response = await fetch(url)
const data = await response.json()
```

### Concepts Learned
- Async/Await
- API requests
- JSON handling
- Dynamic data rendering

Currency converter apps commonly use exchange-rate APIs to fetch live conversion data dynamically. ([exchangerate.host](https://exchangerate.host/?utm_source=chatgpt.com))

---

# ✅ 4. useEffect Hook

Learned how React performs side effects using `useEffect`.

### Example

```jsx
useEffect(() => {
  fetchCurrencyData()
}, [from])
```

### Understanding
- Runs automatically after rendering
- Executes when dependencies change
- Useful for API calls

This project improved my understanding of:
- Dependency arrays
- Side-effect handling
- React lifecycle behavior

---

# ✅ 5. Controlled Components

Learned how React controls form inputs using state.

### Example

```jsx
<input
  type="number"
  value={amount}
  onChange={(e) => setAmount(e.target.value)}
/>
```

### Concepts Practiced
- Input synchronization
- Form handling
- Real-time updates

---

# ✅ 6. Props in React

Learned how to pass dynamic data between components.

### Example

```jsx
<InputBox
  label="From"
  amount={amount}
  currencyOptions={options}
/>
```

### Understanding
- Parent-to-child communication
- Reusable components
- Dynamic UI rendering

---

# ✅ 7. Currency Swap Logic

Learned how application state can be swapped dynamically.

### Example

```jsx
setFrom(to)
setTo(from)
```

### Skills Improved
- State manipulation
- UI synchronization
- Interactive logic handling

---

# ✅ 8. Dynamic Dropdown Rendering

Learned how to render options dynamically using arrays.

### Example

```jsx
Object.keys(currencyInfo).map((currency) => (
  <option key={currency}>
    {currency}
  </option>
))
```

### Concepts Practiced
- Array mapping
- Dynamic rendering
- React keys

---

# ✅ 9. Tailwind CSS Styling

Learned how Tailwind helps build modern UI rapidly.

### Example

```jsx
className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5"
```

### Tailwind Concepts Used

| Class | Purpose |
|------|---------|
| `max-w-md` | Maximum width |
| `rounded-lg` | Rounded corners |
| `p-5` | Padding |
| `shadow-md` | Shadow effect |
| `flex` | Flexbox layout |

---

# ✅ 10. React Application Flow

This project helped me understand complete React data flow.

```text
User Inputs Amount
          ↓
State Updates
          ↓
API Data Used
          ↓
Conversion Logic Runs
          ↓
UI Updates Automatically
```

This was one of the biggest practical learnings from this project.

---

# 📂 Project Structure

```bash
06currencyConvertor/
│
├── src/
│   ├── components/
│   │   └── InputBox.jsx
│   │
│   ├── hooks/
│   │   └── useCurrencyInfo.js
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
| JavaScript | Logic |
| Tailwind CSS | Styling |
| JSX | UI Structure |
| Vite | Development Environment |
| Currency API | Live Exchange Rates |

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

# 📈 Skills Gained

✔ React Hooks  
✔ useState  
✔ useEffect  
✔ Custom Hooks  
✔ API Fetching  
✔ Controlled Components  
✔ Dynamic Rendering  
✔ Props Handling  
✔ Tailwind CSS  
✔ Responsive Design  
✔ React Component Architecture  

---

# 💡 Key Takeaways

> React applications become powerful when APIs, state management, and reusable components work together.

This project helped me deeply understand:
- Real-world React workflows
- Dynamic data handling
- API integration
- Component communication
- Hook-based architecture

---

# 🔥 Future Improvements

- Add currency flags 🌍
- Add conversion history
- Add dark/light mode 🌙
- Add loading spinner
- Add error handling
- Add favorite currencies
- Add chart visualization for exchange rates

Many modern currency converter apps also include charts, historical trends, and offline caching for better user experience. ([wise.com](https://wise.com/in/currency-converter/?utm_source=chatgpt.com))

---

# 🌟 Why This Project is Important

This project combines multiple important frontend concepts:

### ⚛️ React Concepts
- Hooks
- State Management
- Props
- API Fetching
- Controlled Inputs
- Custom Hooks

### 🎨 Frontend Concepts
- Responsive Design
- Dynamic UI
- Form Handling
- Live Data Rendering

It is one of the best beginner-to-intermediate React projects for understanding real-world application development.

---

# 👨‍💻 Author

## Pranav Sriram

Learning React.js step by step 🚀
