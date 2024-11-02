import { useEffect, useState } from "react";

import {
  IconButton,
  Typography,
  Collapse,
  Navbar,
} from "@material-tailwind/react";

import {
  Archive,
  Menu,
  MultiplePages,
  ProfileCircle,
  SelectFace3d,
  Xmark,
} from "iconoir-react";

const LINKS = [
  {
    icon: MultiplePages,
    title: "Project",
    href: "#",
  },
  {
    icon: ProfileCircle,
    title: "Journey",
    href: "#",
  },
  {
    icon: SelectFace3d,
    title: "Used",
    href: "#",
  },
  {
    icon: Archive,
    title: "Docs",
    href: "#",
  },
];

function NavList() {
  return (
    <ul className="mt-4 flex flex-col gap-x-3 gap-y-1.5 lg:mt-0 lg:flex-row lg:items-center">
      {LINKS.map(({ icon: Icon, title, href }) => (
        <li key={title}>
          <Typography
            as="a"
            href={href}
            type="small"
            className="flex items-center gap-x-2 p-1 text-white hover:text-white"
          >
            <Icon className="h-4 w-4" />

            {title}
          </Typography>
        </li>
      ))}
    </ul>
  );
}

export function NavbarComponent() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",

      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  return (
    <Navbar className="mx-auto w-full max-w-screen-xl bg-black dark:bg-surface-dark">
      <div className="flex items-center text-white">
        <Typography
          as="a"
          href="#"
          type="small"
          className="ml-2 mr-2 block py-1 font-semibold"
        >
          Sabily Rusyda / Riichi Rusdiana
        </Typography>

        <hr className="ml-1 mr-1.5 hidden h-5 w-px border-l border-t-0 border-surface/25 lg:block dark:border-surface" />

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
      </div>

      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
