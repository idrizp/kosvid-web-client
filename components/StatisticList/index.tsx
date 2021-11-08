import React from "react";
import { Statistic } from "../../utils/api_utils";
import StatisticViewer from "../StatisticViewer";
import style from "./StatisticList.module.css";

export type StatisticsListProps = {
  statistics: Statistic[];
};

const StatisticsList = (props: StatisticsListProps) => {
  return (
    <div className={style.listContainer}>
      {props.statistics.map((statistic) => (
        <>
          <StatisticViewer statistic={statistic} key={statistic.date} />
        </>
      ))}
    </div>
  );
};

export default StatisticsList;
