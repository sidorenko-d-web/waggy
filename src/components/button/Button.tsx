import type { PropsWithChildren } from "react";
import styles from "./Button.module.scss";
import clsx from "clsx";

export function Button({
  children,
  onClick,
  variant,
  className,
}: PropsWithChildren<{
  onClick?: (arg: any) => void;
  variant?: "light" | "dark";
  className?: string;
}>) {
  return (
    <button
      className={clsx(
        styles.button,
        variant === "dark" && styles.dark,
        className,
      )}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
