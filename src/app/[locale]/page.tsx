"use client";

import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Home");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-[calc(100vh-100px)]"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-4xl md:text-6xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-br from-purple-400 to-blue-400"
      >
        {t("title")}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-xl md:text-2xl text-center mb-8 max-w-2xl"
      >
        {t("description")}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Link
          href="/projects"
          className="group inline-flex items-center px-6 py-3 rounded-full dark:hover:bg-white/20 hover:bg-black/10 transition duration-300 ease-in-out"
        >
          {t("cta")}
          <ArrowRightIcon
            className="ml-2 group-hover:translate-x-1 transition duration-300 ease-in-out"
            size={20}
          />
        </Link>
      </motion.div>
    </motion.div>
  );
}
