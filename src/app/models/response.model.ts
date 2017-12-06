export interface Response<T> {
  code: number;
  message: string;
  data: T;
}

export interface PageableResult<T> {
  total: number;
  items: T[];
}
