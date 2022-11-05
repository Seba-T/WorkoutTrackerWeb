import { ECBasicOption } from "echarts/types/dist/shared";
import { THEME_KEY } from "vue-echarts";
// import { useDark } from "@vueuse/core";

function toDate(date: number): string {
  return new Date(date).toISOString().split("T")[0];
}

export default async function (user: string) {
  // const isDark = useDark();
  // const theme = computed(()=> isDark? "dark": "light");
  // console.log(theme);
  provide(THEME_KEY, "dark");

  const { pending, data: exerciseData } = await useLazyFetch<ExerciseData[]>(
    "/api/all-exercise-performance/"
  );
  let options;
  watch(pending, () => {
    options = useGraphOption(exerciseData);
  });
  return options;
}
