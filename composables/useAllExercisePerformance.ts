import { ECBasicOption } from "echarts/types/dist/shared";
import { type } from "os";
// import { useDark } from "@vueuse/core";

export async function useAllExercisePerformance(
  user: string
): Promise<ExerciseData[]> {
  try {
    const response = await fetch(`/api/all-exercise-performance/`);
    if (!response.ok) throw new Error(response.statusText);
    return response.json();
  } catch (error) {
    throw error;
  }
}

export async function useStrikeRecord(): Promise<StrikeRecordData[]> {
  try {
    const response = await fetch(`/api/strike-record/`);
    if (!response.ok) throw new Error(response.statusText);
    return response.json();
  } catch (error) {
    throw error;
  }
}
