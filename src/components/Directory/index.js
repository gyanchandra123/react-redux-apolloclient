import React from "react";
import ShopMen from "./../../assets/shopMens.jpg";
import ShopWomen from "./../../assets/shopWomens.jpg";
import "./style.scss";

const Directory = (props) => {
  return (
    <div className="directory">
      <div className="wrap">
        <div className="item" style={{ backgroundImage: `url(${ShopWomen})` }}>
          <a href="11" alt="aa">
            Shops Women
          </a>
        </div>

        <div className="item" style={{ backgroundImage: `url(${ShopMen})` }}>
          <a href="11" alt="aa">
            Shops Men
          </a>
        </div>
      </div>
    </div>
  );
};

export default Directory;
