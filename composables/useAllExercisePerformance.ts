import { ECBasicOption } from "echarts/types/dist/shared";
import { type } from "os";
// import { useDark } from "@vueuse/core";

export async function useAllExercisePerformance(
  user: string
): Promise<ExerciseData[]> {
  const response = await fetch("/api/all-exercise-performance/");
  return response.json();
}

export async function useStrikeRecord(): Promise<StrikeRecordData[]> {
  const response = await fetch("/api/strike-record/");
  return response.json();
}
