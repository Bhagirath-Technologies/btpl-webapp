import React from "react";

function PortfolioList({id, title, active, setSelected }) {
  return (
    <li className={active ? "PortfolioList display-9 mb-0 mt-2 font-alt fw-normal bg_blue rounded text-white px-2 py-1 ms-3 mb-3 d-inline-block active_item" : "PortfolioList display-9 mb-0 mt-2 font-alt fw-normal bg-muted rounded text-white px-2 py-1 ms-3 mb-3 d-inline-block"} onClick={()=> setSelected(id)}>
      {title}
    </li>
  );
}

export default PortfolioList;
