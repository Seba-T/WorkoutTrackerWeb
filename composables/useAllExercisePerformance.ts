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


  const { pending, data: exercise_data } = await useLazyFetch<ExerciseData[]>(
    "/api/all-exercise-performance/"
  );
  const options = ref([]);
  for (const exercise of exercise_data.value) {
    const formatted_exercise_data = exercise.data.map((el) => [
      new Date(el[0]).getTime(),
      el[1],
    ]);
    if (formatted_exercise_data.length > 1)
      options.value.push({
        key: exercise.id,
        graph: {
          title: {
            text: exercise.desc,
            left: "center",
          },
          xAxis: {
            min: formatted_exercise_data[0][0],
            axisLabel: { formatter: toDate, align: "center" },
          },
          yAxis: {
            min: formatted_exercise_data[0][1],
          },
          series: [
            {
              type: "line",
              smooth: true,
              data: formatted_exercise_data,
            },
          ],
        },
      });
  }
  return { options, pending };
}
