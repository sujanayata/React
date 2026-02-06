import { useState, useEffect } from "react";

function Navbar({ cartCount }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-900 dark:bg-black text-white">
      <h1 className="text-xl font-bold">🛒 FakeStore</h1>

      <div className="flex items-center gap-4">
        <button
          onClick={() => setDark(!dark)}
          className="bg-gray-700 px-3 py-1 rounded"
        >
          🌙
        </button>
        <span>❤️ {cartCount}</span>
      </div>
    </nav>
  );
}

export default Navbar;
