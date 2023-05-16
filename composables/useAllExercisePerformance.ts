import { ECBasicOption } from "echarts/types/dist/shared";
import { type } from "os";
// import { useDark } from "@vueuse/core";

export default async function (user: string): Promise<ExerciseData[]> {
  const response = await fetch("/api/all-exercise-performance/");
  return response.json();
}
