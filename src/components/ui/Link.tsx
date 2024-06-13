interface Props {
  href: string;
  size?: "md" | "lg";
  block?: boolean;
  style?: "outline" | "primary" | "inverted" | "muted";
  classes?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  [x: string]: any;
}

const sizes: Record<string, string> = {
  lg: "px-5 py-2.5",
  md: "px-4 py-2",
};

const styles: Record<string, string> = {
  outline: "bg-white border-2 border-black hover:bg-gray-100 text-black ",
  primary: "bg-black text-white hover:bg-gray-800  border-2 border-transparent",
  inverted: "bg-white text-black   border-2 border-transparent",
  muted: "bg-gray-100 hover:bg-gray-200   border-2 border-transparent",
};

const baseClasses =
  "rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200";

export const Link = ({
  block,
  children,
  classes,
  href,
  size = "lg",
  style = "primary",
  ...rest
}: Props) => {
  const className =
    baseClasses +
    (block ? " w-full " : " ") +
    sizes[size] +
    " " +
    styles[style];
  return (
    <a href={href} {...rest} className={className}>
      {children}
    </a>
  );
};
