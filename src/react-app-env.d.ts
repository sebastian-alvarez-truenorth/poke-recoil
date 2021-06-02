/// <reference types="react-scripts" />

type WithChildren<T = {}> =
  T & { children?: React.ReactNode }

type Pokemon = {
  id: number
  name: string
  types?: string[]
  picture?: string
};