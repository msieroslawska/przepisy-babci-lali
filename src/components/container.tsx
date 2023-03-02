import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
}

const Container: React.FC<ContainerProps> = ({ children, as = "div" }) => {
  const Tag = as;

  return (
    <Tag
      style={{
        maxWidth: "var(--size-max-width)",
        margin: "0 auto",
        padding: "var(--space-2xl) var(--size-gutter)",
      }}
    >
      {children}
    </Tag>
  );
};

export default Container;
