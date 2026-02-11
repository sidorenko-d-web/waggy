import type { PropsWithChildren } from "react";
import styles from "./Button.module.scss";
import clsx from "clsx";

export function Button({
  children,
  onClick,
  variant,
}: PropsWithChildren<{
  onClick?: (arg: any) => void;
  variant?: "light" | "dark";
}>) {
  return (
    <button
      className={clsx(styles.button, variant === "dark" && styles.dark)}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
