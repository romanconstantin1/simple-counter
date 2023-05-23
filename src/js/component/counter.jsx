import React from "react";
import { Card } from "./card.jsx";

export const Counter = (props) => {
  return (

        <ul className="list-inline text-center">
            <li className="list-inline-item"><Card unit={Math.floor(props.timer /100000) %100000} /></li>
            <li className="list-inline-item"><Card unit={Math.floor(props.timer /10000) %10000} /></li>
            <li className="list-inline-item"><Card unit={Math.floor(props.timer /1000) %1000} /></li>
            <li className="list-inline-item"><Card unit={Math.floor(props.timer /100) %100} /></li>
            <li className="list-inline-item"><Card unit={Math.floor(props.timer /10) %10} /></li>
            <li className="list-inline-item"><Card unit={Math.floor(props.timer % 10)} /></li>
        </ul>
  );
};
