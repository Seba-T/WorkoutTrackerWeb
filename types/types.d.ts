interface ExerciseData {
  id: string;
  desc: string;
  measurements: Data[];
}

interface Data {
  date: string;
  value: string;
  toArray(d: Data[]): [number, number][];
}
