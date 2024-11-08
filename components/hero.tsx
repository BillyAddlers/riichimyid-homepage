import { motion } from "framer-motion";
import { Typography } from "@material-tailwind/react";
import { FC, useEffect, useState } from "react";
import {
  useTypewriter,
  TypewriterProps,
  Cursor,
} from "react-simple-typewriter";

export const typewriterConfig: TypewriterProps = {
  words: ["こんにちは"],
  typeSpeed: 100,
  deleteSpeed: 50,
  delaySpeed: 800,
};

export const HeroComponent: FC = () => {
  const [isShrunk, setIsShrunk] = useState(false);
  const [text] = useTypewriter(typewriterConfig);

  useEffect(() => {
    const timer = setTimeout(() => setIsShrunk(true), 1000); // Adjust delay as needed
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    fullScreen: {
      height: "75vh",
      transition: { duration: 1, ease: "easeInOut" },
    },
    shrunk: {
      height: "fit-content",
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      initial="fullScreen"
      animate={isShrunk ? "shrunk" : "fullScreen"}
      variants={containerVariants}
      className="flex items-center justify-center"
    >
      <div className="grid grid-rows-[20px_1fr_20px] mt-32 my-16 items-center justify-items-center min-h-fit">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <Typography className="text-6xl font-semibold">
            {text} <Cursor cursorColor="purple" cursorStyle="/" />
          </Typography>
        </main>
      </div>
    </motion.div>
  );
};
