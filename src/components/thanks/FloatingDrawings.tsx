"use client";

import { motion } from "framer-motion";
import {
  GarlicDrawing,
  HerbDrawing,
  OnionDrawing,
  SpoonDrawing,
} from "./DrawnDecorations";

export default function FloatingDrawings() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute left-[4%] top-[18%] text-[#d7b07c]/30"
        animate={{
          y: [0, -18, 0],
          rotate: [-7, 6, -7],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <GarlicDrawing className="h-24 w-24" />
      </motion.div>

      <motion.div
        className="absolute right-[5%] top-[15%] text-[#c87f58]/28"
        animate={{
          y: [0, 14, 0],
          rotate: [8, -6, 8],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <OnionDrawing className="h-28 w-28" />
      </motion.div>

      <motion.div
        className="absolute bottom-[8%] left-[6%] text-[#879565]/25"
        animate={{
          y: [0, -10, 0],
          rotate: [-5, 5, -5],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <HerbDrawing className="h-32 w-32" />
      </motion.div>

      <motion.div
        className="absolute bottom-[10%] right-[8%] text-[#d4ab75]/22"
        animate={{
          rotate: [9, -9, 9],
          y: [0, -7, 0],
        }}
        transition={{
          duration: 6.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <SpoonDrawing className="h-36 w-16" />
      </motion.div>
    </div>
  );
}
