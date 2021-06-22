import React from "react";
import "./ChartBar.css";
import NueCard from "../UI/NueCard";

function ChartBar(props) {
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <NueCard className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </NueCard>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
}

export default ChartBar;
