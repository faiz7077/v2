"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { RotateCcw } from "lucide-react"
import { Mrs_Saint_Delafield } from "next/font/google"

const script = Mrs_Saint_Delafield({ subsets: ["latin"], weight: "400" })

export default function Component() {
  const [key, setKey] = useState(0)

  return (
    <div className="flex flex-col items-end gap-2 w-full">
      <div key={key} className="relative w-full max-w-xl">
        {/* handwriting reveal: wipe the name in from left to right */}
        <motion.div
          className={`${script.className} text-5xl sm:text-6xl leading-none pt-2 pb-3 text-stone-700 dark:text-stone-400 whitespace-nowrap`}
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={{ clipPath: "inset(0 0% 0 0)" }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
        >
          Faizan Shaikh
        </motion.div>
        <motion.svg viewBox="0 0 284 8" className="w-full h-2 text-stone-700 dark:text-stone-500" preserveAspectRatio="none">
          <motion.path
            d="M 2 5 C 50 5, 100 3, 282 3"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.2 }}
            transition={{
              pathLength: { duration: 1.5, ease: "easeInOut", delay: 2.5 },
              opacity: { duration: 0.5, delay: 2.5 },
            }}
          />
        </motion.svg>
      </div>
      <motion.button
        onClick={() => setKey((k) => k + 1)}
        className="text-stone-400 hover:text-stone-600 dark:hover:text-stone-300 transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3 }}
        aria-label="Replay signature"
      >
        <RotateCcw size={16} />
      </motion.button>
    </div>
  )
}
