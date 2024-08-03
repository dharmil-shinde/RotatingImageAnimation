import React from "react";
import style from "./page.module.css";
const page = () => {
  return (
    <div className={style.container}>
      <div className={style.cube}>
        <div className={style.front}></div>
        <div className={style.back}></div>
        <div className={style.top}></div>
        <div className={style.bottom}></div>
        <div className={style.left}></div>
        <div className={style.right}></div>
      </div>
    </div>
  );
};

export default page;
