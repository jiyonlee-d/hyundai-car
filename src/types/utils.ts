export type ExcludeId<T> = { [P in keyof T as Exclude<P, "id">]: T[P] };
