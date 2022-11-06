interface ExerciseData {
  id: string;
  desc: string;
  measurements: Data[];
}

interface Data {
  date: number;
  value: number;
  toArray(d: Data[]): [number, number][];
}

interface RichOption {
  key: string;
  graph: ECBasicOption;
}
