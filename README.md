# 📚 Book-vibe | Personal Library Manager

A modern, persistent web application designed for book lovers to organize their reading journey. Built with **React 19** and styled with **Tailwind CSS v4**, this app allows users to curate a personal bookshelf, track reading progress, and visualize data in real-time.

---

## 🚀 Features

* **Dual-List Management**: Seamlessly manage a **Reading List** and a **Wishlist** with intuitive UI toggles.
* **Data Persistence**: Integrated **localStorage** logic to ensure your lists are saved across browser sessions.
* **Visual Analytics**: Dynamic **Recharts** integration to visualize page counts and reading progress.
* **Interactive Feedback**: Real-time notifications powered by **React-Toastify** for every action (Add, Remove, Sort).
* **Modern UI**: Clean, responsive interface built with **daisyUI v5** and **Tailwind CSS v4**.

---

## 🛠️ Tech Stack

* **Framework**: React 19
* **Styling**: Tailwind CSS v4 & daisyUI v5
* **Charts**: Recharts (Responsive Bar & Pie Charts)
* **Notifications**: React-Toastify
* **Persistence**: Browser LocalStorage API
* **Deployment**: Vercel

---

## 📖 Key Logic Implementations

### State & Storage Synchronization
The app uses a "Lazy Initializer" and `useEffect` to keep the UI in sync with the browser's storage:
```javascript
// Initializing state from storage
const [readingList, setReadingList] = useState(() => {
  const saved = localStorage.getItem('reading-list');
  return saved ? JSON.parse(saved) : [];
});

// Automatic synchronization
useEffect(() => {
  localStorage.setItem('reading-list', JSON.stringify(readingList));
}, [readingList]);