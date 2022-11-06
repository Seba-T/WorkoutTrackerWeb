import { ECBasicOption } from "echarts/types/dist/shared";
import { type } from "os";
// import { useDark } from "@vueuse/core";

export default async function (user: string) {
  const { data: exerciseData, pending } = await useLazyFetch<ExerciseData[]>(
    "/api/all-exercise-performance/"
  );
  const options = ref<RichOption[]>([]);
  watch(exerciseData, (newExData) => {
    if (newExData !== null) options.value.push(...useGraphOption(newExData));
  });
  return { options, pending };
}
