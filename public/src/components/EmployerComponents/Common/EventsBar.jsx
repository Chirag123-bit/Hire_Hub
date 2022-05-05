import React from "react";
import { motion, AnimatePresence } from "framer-motion";

function EventsBar({ isOpen }) {
  return (
    <motion.div
      className="eventsBar"
      animate={{
        width: isOpen ? "200px" : "300px",
        transition: { duration: 0.5, type: "spring", damping: 10 },
      }}
    >
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nisi
        nostrum suscipit, ea pariatur porro excepturi distinctio mollitia
        molestias provident laborum rem debitis ipsa doloribus tempore quam
        alias impedit delectus?
      </p>
    </motion.div>
  );
}

export default EventsBar;
