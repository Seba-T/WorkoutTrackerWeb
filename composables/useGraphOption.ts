import { ECBasicOption } from "echarts/types/dist/shared";

const toArray: Data["toArray"] = (d: Data[]) =>
  d.map((el: Data) => [el.date, el.value]);

function toDate(date: number | string): string {
  return new Date(date).toISOString().split("T")[0];
}

export default function (exerciseData: ExerciseData[]) {
  const options = new Array<RichOption>();
  for (const exercise of exerciseData)
    if (exercise.measurements.length > 1)
      options.push({
        key: exercise.id,
        graph: {
          tooltip: {
            trigger: "axis",
            axisPointer: { type: "cross" },
            formatter: (params: { data: any[] }[]) => {
              return `${toDate(parseFloat(params[0].data[0]))}\n ${
                params[0].data[1]
              } kg`;
            },
          },
          title: {
            text: exercise.desc,
            left: "center",
          },
          xAxis: {
            min: exercise.measurements[0].date,
            axisLabel: { formatter: toDate, align: "center" },
          },
          yAxis: {
            min: exercise.measurements[0].value,
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
