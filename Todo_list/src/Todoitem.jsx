import React from "react";
import { motion } from "framer-motion";
import "./styles/App.css";

function Todoitem({ todo }) {
  return (
    <motion.div
      className="todoss"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <p>{todo.todol}</p>
    </motion.div>
  );
}

export default Todoitem;
