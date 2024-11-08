import { useTheme } from "next-themes";
import Image from "next/image";

export interface ImageSwitcherComponentProps {
  className?: string;
  alt?: string;
  darkAlt?: string;
  lightThemeSrc: string;
  darkThemeSrc: string;
  width: number;
  height: number;
}

export const ImageSwitcherComponent = ({
  className = "",
  alt = "",
  darkAlt,
  lightThemeSrc,
  darkThemeSrc,
  width,
  height,
}: ImageSwitcherComponentProps) => {
  darkAlt = darkAlt ? darkAlt : alt;

  const { resolvedTheme } = useTheme();

  return (
    <div>
      {resolvedTheme === "dark" ? (
        <Image
          className={className}
          src={darkThemeSrc}
          alt={darkAlt}
          width={width}
          height={height}
        />
      ) : (
        <Image
          className={className}
          src={lightThemeSrc}
          alt={alt}
          width={width}
          height={height}
        />
      )}
    </div>
  );
};
