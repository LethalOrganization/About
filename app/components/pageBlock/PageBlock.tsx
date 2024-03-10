import { ReactNode } from "react";
import styles from './PageBlock.module.css';

export enum Orientation {
  HORIZONTAL, VERTICAL
}

type PageBlockProps = {
  children: React.ReactNode,
  className: string | undefined,
}

export default function PageBlock({children, className}: PageBlockProps): ReactNode {
  return <div className={`${styles.pageBlock} ${(className) ? className : ""}`}>
    {children}
  </div>
}