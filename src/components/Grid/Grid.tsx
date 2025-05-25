import type { FC, ReactNode } from "react";
import styles from "./Grid.module.css";

interface GridProps {
  children: ReactNode;
}

export const Grid: FC<GridProps> = ({ children }) => {
  return <ul className={styles.grid}>{children}</ul>;
};

interface GridItemProps {
  children: ReactNode;
}

export const GridItem: FC<GridItemProps> = ({ children }) => {
  return <li className={styles.gridItem}>{children}</li>;
};
