import { MultiplePages, SelectFace3d, Book, Github } from "iconoir-react";
import type { Iconoir } from "iconoir-react";

export interface NavbarRouteProps {
  icon: typeof Iconoir;
  title: string;
  href: string;
}

export const NavbarRoutes: Array<NavbarRouteProps> = [
  { icon: MultiplePages, title: "Project", href: "#" },
  { icon: SelectFace3d, title: "Uses", href: "#" },
  { icon: Book, title: "Post", href: "" },
  {
    icon: Github,
    title: "Source",
    href: "https://github.com/BillyAddlers/riichimyid-homepage",
  },
];
