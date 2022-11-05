import { ECBasicOption } from "echarts/types/dist/shared";
import { THEME_KEY } from "vue-echarts";
// import { useDark } from "@vueuse/core";

function toDate(date: number): string {
  return new Date(date).toISOString().split("T")[0];
}
interface ExerciseData {
  id: string;
  desc: string;
  data: [[string, string]];
}
export default async function (user: string) {
  // const isDark = useDark();
  // const theme = computed(()=> isDark? "dark": "light");
  // console.log(theme);
  provide(THEME_KEY, "dark");

  const { pending, data: exerciseData } = await useLazyFetch<ExerciseData[]>(
    "/api/all-exercise-performance/"
  );
  const options = ref<{ key: string; graph: ECBasicOption }[]>([]);
  watch(pending, (newPending) => {
    console.log(newPending);
  });
  for (const exercise of exerciseData.value) {
    const formattedExerciseData = exercise.data.map((el) => [
      new Date(el[0]).getTime(),
      el[1],
    ]);
    if (formattedExerciseData.length > 1)
      options.value.push({
        key: exercise.id,
        graph: {
          tooltip: {
            trigger: "axis",
            axisPointer: { type: "cross" },
            formatter: (params) =>
              `${toDate(params[0].data[0])}\n ${params[0].data[1]} kg`,
          },
          title: {
            text: exercise.desc,
            left: "center",
          },
          xAxis: {
            min: formattedExerciseData[0][0],
            axisLabel: { formatter: toDate, align: "center" },
          },
          yAxis: {
            min: formattedExerciseData[0][1],
            axisLabel: { formatter: "{value} kg" },
          },
          series: [
            {
              type: "line",
              smooth: true,
              data: formattedExerciseData,
            },
          ],
        },
      });
  }
  return { options, pending };
}
