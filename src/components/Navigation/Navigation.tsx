"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { Link } from "@/i18n/routing";
import LangSwitcher from "./LangSwitcher";
import { Github, Menu, X } from "lucide-react";

const navItems = [
  { href: "/", labelKey: "nav.home" },
  { href: "/about", labelKey: "nav.about" },
  { href: "/projects", labelKey: "nav.projects" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations("Common");
  const truePath = pathname.slice(0, 1) + pathname.slice(4);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navRef]);

  return (
    <nav className="container mx-auto px-4 py-6" ref={navRef}>
      <div className="flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/"
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-400 to-blue-400"
          >
            {t("title")}
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex space-x-4 items-center"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative px-2 py-1 ${
                truePath === item.href
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {t(item.labelKey)}
              {truePath === item.href && (
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
                  layoutId="underline"
                />
              )}
            </Link>
          ))}
          <LangSwitcher />
          <div className=" relative">
            <Link
              target="_blank"
              href={"https://github.com/Bahaidahar"}
              className="p-2 hover:opacity-70"
            >
              <Github size={24} />
            </Link>
          </div>
        </motion.div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-1">
          <LangSwitcher />
          <div className=" relative">
            <Link
              target="_blank"
              href={"https://github.com/Bahaidahar"}
              className="p-2 hover:opacity-70"
            >
              <Github size={24} />
            </Link>
          </div>
          <div className="relative">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block py-2 ${
                  truePath === item.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {t(item.labelKey)}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
