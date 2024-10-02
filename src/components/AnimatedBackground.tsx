"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Circle {
  id: number;
  x: number;
  y: number;
  size: number;
}

export default function AnimatedBackground() {
  const [circles, setCircles] = useState<Circle[]>([]);

  useEffect(() => {
    const newCircles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 30 + 10,
    }));
    setCircles(newCircles);
  }, []);

  return (
    <div
      className={`fixed inset-0 overflow-hidden transition-colors duration-500 bg-gradient-to-br from-purple-700 to-blue-900`}
    >
      {circles.map((circle) => (
        <motion.div
          key={circle.id}
          className="absolute rounded-full opacity-30"
          style={{
            background: `radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)`,
            width: `${circle.size}vmin`,
            height: `${circle.size}vmin`,
          }}
          initial={{ x: `${circle.x}vw`, y: `${circle.y}vh` }}
          animate={{
            x: [`${circle.x}vw`, `${(circle.x + 50) % 100}vw`],
            y: [`${circle.y}vh`, `${(circle.y + 50) % 100}vh`],
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        />
      ))}
      <div className="absolute inset-0 bg-black opacity-20" />
    </div>
  );
}
