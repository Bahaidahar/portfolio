"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleResize = () => {
      if (window.innerWidth < 768) {
        setShowCursor(false);
      } else {
        setShowCursor(true);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("resize", handleResize);

    // Изначальная проверка при загрузке компонента
    handleResize();

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Если ширина экрана меньше 768px, не отображать кастомный курсор
  if (!showCursor) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 rounded-full bg-primary opacity-20 pointer-events-none z-50"
      animate={{ x: mousePosition.x - 12, y: mousePosition.y - 12 }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    />
  );
}
