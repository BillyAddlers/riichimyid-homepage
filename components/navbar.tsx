import { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IconButton, Typography, Navbar } from "@material-tailwind/react";
import {
  Book,
  Github,
  Menu,
  MultiplePages,
  SelectFace3d,
  Xmark,
} from "iconoir-react";
import { ThemeSwitchComponent } from "@/components/switch";

const LINKS = [
  { icon: MultiplePages, title: "Project", href: "#" },
  { icon: SelectFace3d, title: "Uses", href: "#" },
  { icon: Book, title: "Post", href: "" },
  {
    icon: Github,
    title: "Source",
    href: "https://github.com/BillyAddlers/riichimyid-homepage",
  },
];

const NavList: FC = () => {
  return (
    <ul className="mt-4 flex flex-col gap-x-3 gap-y-1.5 lg:mt-0 lg:flex-row lg:items-center">
      {LINKS.map(({ icon: Icon, title, href }) => (
        <li key={title}>
          <Typography
            as="a"
            href={href}
            type="small"
            className="flex items-center gap-x-2 p-1 text-black dark:text-white"
          >
            <Icon className="h-4 w-4" />
            {title}
          </Typography>
        </li>
      ))}
    </ul>
  );
};

export const NavbarComponent: FC = () => {
  const [openNav, setOpenNav] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsNavbarVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const navbarVariants = {
    hidden: { y: "-100%", opacity: 0 },
    visible: { y: "0%", opacity: 1 },
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) setOpenNav(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate={isNavbarVisible ? "visible" : "hidden"}
      variants={navbarVariants}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <Navbar className="sticky top-0 mt-5 z-50 mx-auto w-full max-w-screen-xl bg-surface-light dark:bg-surface-dark">
        <div className="flex items-center text-black dark:text-white">
          <Typography
            as="a"
            href="#"
            type="small"
            className="ml-2 mr-2 block py-1 font-bold"
          >
            Sabily Rusyda / Riichi Rusdiana
          </Typography>
          <hr className="ml-1 mr-1.5 hidden h-5 w-px border-l border-t-0 border-surface-dark lg:block dark:border-surface-light" />
          <div className="hidden lg:block">
            <NavList />
          </div>
          <IconButton
            size="sm"
            color="secondary"
            onClick={() => setOpenNav(!openNav)}
            className="ml-auto grid lg:hidden"
          >
            {openNav ? (
              <Xmark className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </IconButton>

          <ThemeSwitchComponent className="hidden lg:ml-auto lg:inline-block" />
        </div>

        {/* A mobile-focused dropdown animation for Navbar */}
        <motion.div
          initial="hidden"
          animate={openNav ? "visible" : "hidden"}
          variants={{
            hidden: { height: 0, opacity: 0 },
            visible: { height: "auto", opacity: 1 },
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <NavList />
          <ThemeSwitchComponent className="mt-4" />
        </motion.div>
      </Navbar>
    </motion.div>
  );
};
