export interface Statistic {
  date: string;
  vaccinations: number;
  deaths: number;
  confirmed: number;
  totalVaccinations: number;
  totalConfirmed: number;
  totalDeaths: number;
}

export const getStatisticDisplayNumber = (displayNumber: number): string => {
  return displayNumber === -1 ? "No data." : `${displayNumber}`;
};

export const getDailyStatistics = async (): Promise<Statistic[]> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/api/daily`);
  const data: Statistic = (await response.json()) as Statistic;
  return [data];
};

export const getWeeklyStatistics = async (): Promise<Statistic[]> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_HOST}/api/weekly`
  );
  const data: Statistic[] = (await response.json()) as Statistic[];
  return data;
};

export const getMonthlyStatistics = async (): Promise<Statistic[]> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_HOST}/api/monthly`
  );
  const data: Statistic[] = (await response.json()) as Statistic[];
  return data;
};
