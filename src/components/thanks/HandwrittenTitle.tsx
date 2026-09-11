"use client";

import { motion } from "framer-motion";

type HandwrittenTitleProps = {
  text?: string;
  subtitle?: string;
};

export default function HandwrittenTitle({
  text = "Danke, Renke",
  subtitle = "Für Geduld, Humor und eine richtig schöne gemeinsame Zeit.",
}: HandwrittenTitleProps) {
  return (
    <div className="relative mx-auto max-w-4xl text-center">
      <motion.svg
        viewBox="0 0 900 220"
        className="mx-auto w-full max-w-4xl"
        initial="hidden"
        animate="visible"
        aria-label={text}
      >
        <motion.path
          d="M95 125
             C145 70 190 70 225 125
             C250 160 285 145 302 112
             C319 78 350 77 369 110
             C387 143 418 145 438 115
             C457 84 485 84 503 116
             C520 146 548 146 566 118
             C585 88 615 85 632 118
             C650 151 682 148 699 118
             C718 84 753 82 784 120"
          fill="none"
          stroke="#f2d6ae"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={{
            hidden: { pathLength: 0, opacity: 0 },
            visible: {
              pathLength: 1,
              opacity: 1,
              transition: {
                duration: 2.4,
                ease: "easeInOut",
              },
            },
          }}
        />

        <motion.text
          x="450"
          y="120"
          textAnchor="middle"
          fill="#f3ddbd"
          fontSize="76"
          fontFamily="cursive"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1.2 }}
        >
          {text}
        </motion.text>

        <motion.path
          d="M310 155 C395 174 505 174 590 155"
          fill="none"
          stroke="#c99366"
          strokeWidth="2.5"
          strokeLinecap="round"
          variants={{
            hidden: { pathLength: 0 },
            visible: {
              pathLength: 1,
              transition: {
                delay: 1.8,
                duration: 1.4,
              },
            },
          }}
        />
      </motion.svg>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.1, duration: 0.8 }}
        className="mx-auto -mt-4 max-w-2xl font-[cursive] text-xl text-[#cbb193] sm:text-2xl"
      >
        {subtitle}
      </motion.p>
    </div>
  );
}
