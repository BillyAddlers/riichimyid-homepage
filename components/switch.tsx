import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface ThemeSwitchComponentProps {
  className?: string;
}

export const ThemeSwitchComponent = ({
  className = "",
}: ThemeSwitchComponentProps) => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="flex justify-center items-center">
        <div className="animate-spin h-8 w-8 border-4 border-gray-300 border-t-transparent rounded-full"></div>
      </div>
    );
  }

  const handleClick = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <div
      className={`switch flex text-black items-center w-24 h-10 bg-gray-300 dark:bg-gray-700 rounded-full p-1 cursor-pointer ${className}`}
      onClick={handleClick}
    >
      <motion.div
        className="toggle w-8 h-8 rounded-full bg-white flex items-center justify-center"
        layout
        initial={{ x: resolvedTheme === "dark" ? 0 : 56 }}
        animate={{ x: resolvedTheme === "dark" ? 0 : 56 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {resolvedTheme === "dark" ? <Moon size={16} /> : <Sun size={16} />}
      </motion.div>
    </div>
  );
};
