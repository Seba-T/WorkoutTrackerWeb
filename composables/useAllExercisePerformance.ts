import { ECBasicOption } from "echarts/types/dist/shared";
import { type } from "os";
// import { useDark } from "@vueuse/core";

export default function (user: string) {
  const { data: exerciseData, pending } = useLazyFetch<ExerciseData[]>(
    "/api/all-exercise-performance/"
  );
  return { exerciseData, pending };
}
