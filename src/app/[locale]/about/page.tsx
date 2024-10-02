"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { TabsTransitionPanel } from "@/components/MyPanel";
import ProfessionCards from "@/components/ProffescionCards";

export default function About() {
  const t = useTranslations("About");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center gap-12 min-h-[calc(100vh-100px)] py-12"
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full max-w-4xl flex flex-col md:flex-row items-center justify-center gap-12"
      >
        <Image
          src="/me.jpeg"
          alt={t("profileAlt")}
          width={400}
          height={400}
          className="rounded-full shadow-lg object-cover size-[250px]"
        />
        <div className="w-full md:w-2/3">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            {t("title")}
          </h1>
          <TabsTransitionPanel />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="w-full max-w-4xl"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          {t("myProfessions")}
        </h2>
        <ProfessionCards />
      </motion.div>
    </motion.div>
  );
}
