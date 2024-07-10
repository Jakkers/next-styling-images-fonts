"use client";

import { motion } from "framer-motion";

export default function Ani() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <h1>Hello world!</h1>
      </motion.div>
    </>
  );
}
