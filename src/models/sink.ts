// Sink = way to spend time; corresponds to a button on this view
export type Sink = {
  name: string;
  colorHex: string;
  children?: Sink[]; // premature optimization. Ignore this for now
};
