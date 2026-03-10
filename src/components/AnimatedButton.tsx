"use client";

import React from "react";
import styles from "./AnimatedButton.module.css";

interface AnimatedButtonProps {
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({ onClick, className, style }) => {
  return (
    <button className={`${styles.button} ${className || ''}`} onClick={onClick} style={style}>
      <div className={styles.bg}></div>
      <svg
        className={styles.splash}
        width="342"
        height="208"
        viewBox="0 0 342 208"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M48.5 102.3C48.5 102.3 36.2 92.5 24.8 98.7C13.4 104.9 3 98.7 3 98.7"
          strokeWidth="3"
          strokeLinecap="round"
        ></path>
        <path
          d="M290.5 102.3C290.5 102.3 302.8 92.5 314.2 98.7C325.6 104.9 339 96.2 339 96.2"
          strokeWidth="3"
          strokeLinecap="round"
        ></path>
        <path
          d="M278.5 68.2C278.5 68.2 284.3 54.1 298.7 52.8C313.1 51.5 315.5 42.3 315.5 42.3"
          strokeOpacity="0.4"
          strokeWidth="3"
          strokeLinecap="round"
        ></path>
        <path
          d="M278.5 141.7C278.5 141.7 284.3 155.8 298.7 157.1C313.1 158.4 315.5 167.6 315.5 167.6"
          strokeOpacity="0.4"
          strokeWidth="3"
          strokeLinecap="round"
        ></path>
        <path
          d="M225.3 60.8C225.3 60.8 221.5 45.2 231.2 35.6C240.9 26 239.8 19.5 239.8 19.5"
          strokeWidth="3"
          strokeLinecap="round"
        ></path>
        <path
          d="M225.3 153.2C225.3 153.2 221.5 168.8 231.2 178.4C240.9 188 239.8 194.5 239.8 194.5"
          strokeWidth="3"
          strokeLinecap="round"
        ></path>
      </svg>

      <div className={styles.wrap}>
        <svg
          className={styles.path}
          width="221"
          height="42"
          viewBox="0 0 221 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M182.674 2H203C211.837 2 219 9.16344 219 18V24C219 32.8366 211.837 40 203 40H18C9.16345 40 2 32.8366 2 24V18C2 9.16344 9.16344 2 18 2H47.8855"
            strokeWidth="3"
            strokeLinecap="round"
          ></path>
        </svg>

        <div className={styles.outline}></div>
        <div className={styles.content}>
          <span className={`${styles.char} ${styles['state-1']}`}>
            <span style={{ "--i": 1 } as React.CSSProperties} data-label="S">S</span>
            <span style={{ "--i": 2 } as React.CSSProperties} data-label="i">i</span>
            <span style={{ "--i": 3 } as React.CSSProperties} data-label="g">g</span>
            <span style={{ "--i": 4 } as React.CSSProperties} data-label="n">n</span>
            <span style={{ "--i": 5 } as React.CSSProperties} data-label="U">U</span>
            <span style={{ "--i": 6 } as React.CSSProperties} data-label="p">p</span>
          </span>

          <div className={styles.icon}>
            <div></div>
          </div>

          <span className={`${styles.char} ${styles['state-2']}`}>
            <span style={{ "--i": 1 } as React.CSSProperties} data-label="R">R</span>
            <span style={{ "--i": 2 } as React.CSSProperties} data-label="e">e</span>
            <span style={{ "--i": 3 } as React.CSSProperties} data-label="g">g</span>
            <span style={{ "--i": 4 } as React.CSSProperties} data-label="i">i</span>
            <span style={{ "--i": 5 } as React.CSSProperties} data-label="s">s</span>
            <span style={{ "--i": 6 } as React.CSSProperties} data-label="t">t</span>
            <span style={{ "--i": 7 } as React.CSSProperties} data-label="e">e</span>
            <span style={{ "--i": 8 } as React.CSSProperties} data-label="r">r</span>
          </span>
        </div>
      </div>
    </button>
  );
};
