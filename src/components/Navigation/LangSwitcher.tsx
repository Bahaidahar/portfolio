import { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import { GlobeIcon } from "lucide-react";

const locales = ["en", "ru", "kz"];

const LangSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  // Function to change the language
  const changeLanguage = (locale: string) => {
    router.push(pathname.replace(/^\/[a-z]{2}/, `/${locale}`));
    setIsOpen(false);
  };

  // Close dropdown if clicked outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Button to toggle the dropdown */}
      <button className="p-2" onClick={() => setIsOpen((prev) => !prev)}>
        <GlobeIcon size={20} />
      </button>

      {/* Dropdown content */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-24 bg-card rounded-md shadow-lg">
          {locales.map((locale) => (
            <button
              key={locale}
              onClick={() => changeLanguage(locale)}
              className="block w-full text-left px-4 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            >
              {locale.toUpperCase()}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LangSwitcher;
