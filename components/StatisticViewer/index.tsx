import React from "react";
import style from "./StatisticViewer.module.css";
import { getStatisticDisplayNumber, Statistic } from "../../utils/api_utils";

export type StatisticViewerProps = {
  statistic: Statistic;
};

const StatisticViewer = (props: StatisticViewerProps) => {
  return (
    <div className={style.statisticContainer}>
      <div>
        <h2>{props.statistic.date}</h2>
      </div>
      <div>
        <p>💀 Deaths: {getStatisticDisplayNumber(props.statistic.deaths)}</p>
        <p>
          🦠 Infected: {getStatisticDisplayNumber(props.statistic.confirmed)}
        </p>
        <p>
          💉 Vaccinated:{" "}
          {getStatisticDisplayNumber(props.statistic.vaccinations)}
        </p>
      </div>
    </div>
  );
};

export default StatisticViewer;
