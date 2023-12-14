export type TTodo = {
  id: number;
  title: string;
  contents: string;
  isDone: EIsDone;
};

export enum EIsDone {
  UN_DONE,
  DONE,
}
