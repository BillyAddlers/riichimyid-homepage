import { Tabs } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { FC, useEffect, useState } from "react";
import Profile from "@/app/(tabs)/tabs-pages/profile.mdx";
import Journey from "@/app/(tabs)/tabs-pages/journey.mdx";
import MdxLayout from "@/app/(tabs)/tabs-pages/layout";

export const SelectorComponent: FC = () => {
  const [isTabSelectorVisible, setIsTabSelectorVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsTabSelectorVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const selectorVariants = {
    hidden: { y: "200%", opacity: 0 },
    visible: { y: "0%", opacity: 1 },
  };

  return (
    <motion.div
      className="mx-auto max-w-screen-lg pb-10"
      initial="hidden"
      animate={isTabSelectorVisible ? "visible" : "hidden"}
      variants={selectorVariants}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      onAnimationComplete={() => setMounted(true)}
    >
      <Tabs defaultValue="profile">
        <Tabs.List className="w-full">
          <Tabs.Trigger className="w-full" value="profile">
            Profile
          </Tabs.Trigger>
          <Tabs.Trigger className="w-full" value="journey">
            Journey
          </Tabs.Trigger>
          <Tabs.Trigger className="w-full" value="skills">
            Skills
          </Tabs.Trigger>
          <Tabs.Trigger className="w-full" value="links">
            Links
          </Tabs.Trigger>
          {mounted && (
            <motion.div
              className="rounded-none border-b-2 border-primary bg-transparent shadow-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <Tabs.TriggerIndicator />
            </motion.div>
          )}
        </Tabs.List>
        <MdxLayout>
          <article>
            <Tabs.Panel value="profile">
              <Profile />
            </Tabs.Panel>
            <Tabs.Panel value="journey">
              <Journey />
            </Tabs.Panel>
            <Tabs.Panel value="skills"></Tabs.Panel>
            <Tabs.Panel value="links"></Tabs.Panel>
          </article>
        </MdxLayout>
      </Tabs>
    </motion.div>
  );
};
