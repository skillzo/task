# 📝 Task Manager

A simple **Task Manager** application built with **React, Redux Toolkit, Redux Persist**, and **Tailwind CSS**, featuring **dark mode** and **state persistence**.

## 🚀 Features

✅ **Add, Update, and Delete Tasks**  
✅ **Task Status Management** (`todo`, `in-progress`, `done`)  
✅ **Dark Mode Toggle** (Persisted with `localStorage`)  
✅ **State Persistence** using **Redux Persist**  
✅ **React Hot Toast for Notifications**  
✅ **Fully Responsive UI**

## 🛠 Tech Stack

- **Frontend:** React, Redux Toolkit, Tailwind CSS
- **State Management:** Redux Toolkit + Redux Persist
- **Notifications:** React Hot Toast
- **Persistence:** LocalStorage (via Redux Persist)

## 📦 Installation

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/skillzo/task.git
cd task
```

### 2️⃣ Install Dependencies

```sh
npm install
# or
yarn install
```

### 3️⃣ Run the App

```sh
npm run dev
```

Now, open **`http://localhost:5173/`** in your browser.

## 📂 Folder Structure

```
📦 task-manager-redux
├── 📂 src
│   ├── 📂 components        # Reusable UI components
│   ├── 📂 redux             # Contains initial static data
│   ├── 📂 redux             # Redux slices & store
│   │   ├── themeSlice.ts    # Handles light/dark mode
│   │   ├── taskSlice.ts     # Manages task state
│   │   ├── modalSlice.ts     # Manages modal state
│   ├── 📂 types             # TypeScript type definitions
│   ├── App.tsx              # Main React component
│   ├── index.tsx            # Entry point
├── tailwind.config.js       # Tailwind CSS config
├── README.md                # Project Documentation
```

## 🎨 Dark Mode Setup

1. **Enable `darkMode: "class"`** in `tailwind.config.js`
2. **Redux slice manages light/dark mode**
3. **`localStorage` persists theme**

**Theme Toggle Button (`ThemeToggle.tsx`):**

## ✅ Testing with Jest

To run the unit tests:

npm test
