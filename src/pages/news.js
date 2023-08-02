import React from "react";
import style from "../styles/test.module.scss";

const news = () => {
  return (
    <div className="text-5xl">
      News
      <p className={style.test}>テスト</p>
    </div>
  );
};

export default news;
