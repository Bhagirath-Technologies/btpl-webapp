import React from "react";

function PortfolioList({id, title, active, setSelected }) {
  return (
    <li className={active ? "PortfolioList active_item" : "PortfolioList"} onClick={()=> setSelected(id)}>
      {title}
    </li>
  );
}

export default PortfolioList;
