import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/BottomMenu.scss";
import menuList from "../Utils/Data/MenuData";

const BottomMenu = () => {
    const [selected, setSelected] = useState(0);

    return (
        <div className="navigation">
            <ul>
                {menuList.map((val, index) => {
                    return (
                        <li
                            key={index}
                            onClick={() => setSelected(index)}
                            className={`${index === selected ? "active" : ""}`}
                        >
                            <div className="icon"><Link to={"/"}>{val.icon}</Link></div>
                            <div className="name">{val.name}</div>
                        </li>
                    );
                })}
                <div className="menu-bg" />
            </ul>
        </div>
    );
};

export default BottomMenu;
