import React, { useState } from 'react'

const emoticons = [
  '(⁎⁍̴̛ᴗ⁍̴̛⁎)', '(｡♥‿♥｡)', '( ͡° ᴥ ͡°)', '(づ｡◕‿‿◕｡)づ',
  '(≧◡≦)', '(✿◕‿◕)', '(｡•̀ᴗ-)✧', '(ง •̀_•́)ง', '(っ´▽｀)っ',
  '(´｡• ᵕ •｡`) ♡', '૮₍ ˶ᵔ ᵕ ᵔ˶ ₎ა', '(๑>◡<๑)'
]

export default function App() {
  const [copied, setCopied] = useState(null)

  const handleCopy = async (emo) => {
    await navigator.clipboard.writeText(emo)
    setCopied(emo)
    setTimeout(() => setCopied(null), 1000)
  }

  return (
    <div className="min-h-screen bg-pink-50 p-6">
      <h1 className="text-3xl font-bold text-center text-pink-600 mb-6">Yemoji | 颜文字点击复制</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {emoticons.map((emo, idx) => (
          <div
            key={idx}
            onClick={() => handleCopy(emo)}
            className="bg-white rounded-xl p-4 shadow hover:shadow-md cursor-pointer text-center text-xl transition"
          >
            {emo}
            {copied === emo && <div className="text-sm text-green-500 mt-2">已复制！</div>}
          </div>
        ))}
      </div>
    </div>
  )
}
