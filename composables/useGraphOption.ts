import { number } from "echarts/core";
import { ECBasicOption, ZRColor } from "echarts/types/dist/shared";

const toArray: Data["toArray"] = (d: Data[]) =>
  d.map((el: Data) => [el.date, el.value]);

function toDate(date: number | string, isMobile: boolean = false): string {
  const newDate = new Date(date).toISOString().split("T")[0];
  return isMobile ? newDate.slice(2) : newDate;
}

const differencesInMonth = (first: Date, second: Date) => {
  let months = (second.getFullYear() - first.getFullYear()) * 12;
  months -= first.getMonth();
  months += second.getMonth();
  return months <= 0 ? -months : months;
};

function getStrikesPerMonth(strikes: StrikeRecordData[]): number[] {
  let maxDifferenceInMonths = differencesInMonth(
    new Date(),
    new Date(strikes[0].strikeDate)
  );

  let strikesPerMonth: Array<number> = new Array(
    maxDifferenceInMonths + 1
  ).fill(0);
  strikes.forEach((strike) => {
    let date = new Date(strike.strikeDate);
    let differenceInMonths = differencesInMonth(new Date(), date);
    strikesPerMonth[maxDifferenceInMonths - differenceInMonths]++;
  });

  return strikesPerMonth;
}

export function useExerciseGraphOptions(
  exerciseData: ExerciseData[],
  backgroundColor: Ref<string | undefined>,
  isMobile: Ref<boolean>
): Array<RichOption> {
  const options = new Array<RichOption>();
  for (const exercise of exerciseData)
    if (exercise.measurements.length > 1)
      options.push({
        key: exercise.id,
        graph: {
          backgroundColor: computed(() => backgroundColor.value),
          tooltip: {
            trigger: "axis",
            formatter: computed(() => (params: { data: any[] }[]) => {
              return `${toDate(
                parseFloat(params[0].data[0]),
                isMobile.value
              )}\n ${params[0].data[1]} kg`;
            }),
          },
          title: {
            text: exercise.desc,
            left: "center",
          },
          xAxis: {
            min: exercise.measurements[0].date,
            axisLabel: {
              formatter: computed(
                () => (data: any) => toDate(data, isMobile.value)
              ),
              align: "center",
            },
          },
          yAxis: {
            axisTick: {
              length: 6,
              lineStyle: {
                type: "dashed",
                // ...
              },
            },
            min: exercise.measurements.reduce((prev, curr) =>
              prev.value < curr.value ? prev : curr
            ).value,
            axisLabel: { formatter: "{value} kg" },
          },
          series: [
            {
              type: "line",
              smooth: true,
              data: toArray(exercise.measurements),
            },
          ],
        },
      });
  return options;
}

export function useStrikeGraphOption(
  strikeRecords: StrikeRecordData[],
  backgroundColor: Ref<string | undefined>,
  isMobile: Ref<boolean>
): ECBasicOption {
  const begin = new Date(strikeRecords[0].strikeDate);
  //   setDateToEndOfMonth(begin);
  const strikeMonthsData: Array<string> = [];
  let now = new Date();
  let currentMonth = begin;
  let strikesPerMonth: Array<number> = getStrikesPerMonth(strikeRecords);
  while (currentMonth < now) {
    strikeMonthsData.push(
      currentMonth.getMonth() + 1 + "-" + (currentMonth.getFullYear() % 100)
    );
    currentMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + 1
    );
  }
  const option: ECBasicOption = {
    backgroundColor: computed(() => backgroundColor.value) as
      | ZRColor
      | undefined,
    tooltip: {
      trigger: "axis",
      formatter: (params: { data: any[] }[]) => {
        return `${params[0].data} strikes`;
      },
    },
    title: {
      text: "Strikes per month",
      left: "center",
    },
    xAxis: {
      type: "category",
      data: strikeMonthsData,
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: strikesPerMonth,
        type: "bar",
      },
    ],
  };
  return option;
}
