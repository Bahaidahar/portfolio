import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "lucide-react";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="relative">
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="p-2 hover:scale-110 transition duration-300 ease-in-out"
      >
        {theme === "dark" ? <SunIcon size={20} /> : <MoonIcon size={20} />}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
