"use client";
import React, { FC, ReactNode } from "react";

type TypographyProps = {
  variant?: "header" | "subheader" | "body" | "footer";
  color?: "primary-foreground" | "secondary-foreground" | "white" | "primary";
  children: ReactNode;
  className?: string;
};

const Typography: FC<TypographyProps> = ({
  variant = "body",
  color = "primary-foreground",
  children,
  className = "",
}) => {
  const textStyles = {
    header: "text-2xl font-bold",
    subheader: "text-xl font-semibold",
    body: "text-base",
    footer: "text-sm font-light",
  };

  const combinedClassName = `${textStyles[variant]} text-${color} ${className}`;

  return <p className={combinedClassName}>{children}</p>;
};

export default Typography;
