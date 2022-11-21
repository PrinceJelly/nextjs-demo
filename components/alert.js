import styles from "./alert.module.css";
import cn from "classnames";
import { useState, useEffect } from "react";
export default function Alert() {
  const [buttonClicked, buttonClick] = useState(true);

  const handleButton = () => {
    buttonClick(!buttonClicked);
  };

  let btnClass = cn({
    getBtn: true,
    [styles.success]: buttonClicked,
    [styles.error]: !buttonClicked,
  });
  useEffect(() => {
    const timer = setTimeout(() => {
      buttonClick(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, [buttonClicked]);
  return (
    <button className={btnClass} onClick={handleButton}>
      {buttonClicked ? "Click me!" : "Clicked"}
    </button>
  );
}

//learning scss & how to use classNames with changable styles
