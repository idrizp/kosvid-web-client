import { NextPage } from "next";
import { useEffect, useState } from "react";
import StatisticsList from "../components/StatisticList";
import style from "../styles/Home.module.css";
import {
  getDailyStatistics,
  getMonthlyStatistics,
  getWeeklyStatistics,
  Statistic,
} from "../utils/api_utils";

const Home: NextPage = () => {
  const [statistics, setStatistics] = useState<Statistic[]>([]);

  const updateStatistics = (
    updateFunction: () => Promise<Statistic[]>
  ): void => {
    updateFunction().then((result) => setStatistics(result));
  };

  useEffect(() => {
    updateStatistics(getDailyStatistics);
  }, []);

  return (
    <div>
      <form>
        <label htmlFor="duration-selector">Select a duration:</label>
        <select name="Select a duration." id="duration-selector">
          <option
            value="today"
            onClick={() => updateStatistics(getDailyStatistics)}
          >
            Today
          </option>
          <option
            value="this-week"
            onClick={() => updateStatistics(getWeeklyStatistics)}
          >
            This Week
          </option>
          <option
            value="this-week"
            onClick={() => updateStatistics(getMonthlyStatistics)}
          >
            This Month
          </option>
        </select>
      </form>
      <StatisticsList statistics={statistics} />
      <p>
        All data provided here is graciously provided by{" "}
        <a
          className="link"
          href="https://ourworldindata.com"
          target="_blank"
          rel="noreferrer"
        >
          Our World In Data.
        </a>{" "}
        That data is aggregated by the{" "}
        <a
          className="link"
          href="https://github.com/idrizp/kosvid-api"
          target="_blank"
          rel="noreferrer"
        >
          kosvid api.
        </a>
      </p>
    </div>
  );
};

export default Home;
