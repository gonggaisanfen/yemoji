import React, { useMemo, useState } from "react";

export default function App() {
  const [raw, setRaw] = useState("(⁎⁍̴̛ᴗ⁍̴̛⁎)\nᗜ𖥦ᗜ, ^ ̳ᴗ  ̫ ᴗ ̳^, (ฅ•.•ฅ)");
  const list = useMemo(() => {
    return Array.from(
      new Set(
        raw
          .split(/[\n,;]/)     // 支持换行/逗号/分号分隔
          .map(s => s.trim())
          .filter(Boolean)
      )
    );
  }, [raw]);

  const handleCopy = async (s) => {
    try {
      await navigator.clipboard.writeText(s);
      // 轻提示：不依赖外部库
      const el = document.createElement("div");
      el.textContent = "Copied!";
      el.className = "fixed bottom-4 left-1/2 -translate-x-1/2 bg-black text-white text-sm px-3 py-1 rounded";
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 800);
    } catch {
      alert("Copy failed. Please check clipboard permission.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-semibold">Yemoji — Click to Copy</h1>

      <textarea
        className="w-full h-28 p-3 border rounded outline-none focus:ring"
        placeholder="粘贴颜文字，换行/逗号/分号分隔"
        value={raw}
        onChange={(e) => setRaw(e.target.value)}
      />

      <div className="text-sm text-gray-600">
        {`Total: ${list.length}`} • Click any item to copy
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {list.map((s, i) => (
          <button
            key={i}
            onClick={() => handleCopy(s)}
            className="px-3 py-2 rounded border bg-white hover:bg-gray-50 active:scale-[0.99] transition text-left break-all"
            title="Click to copy"
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}
