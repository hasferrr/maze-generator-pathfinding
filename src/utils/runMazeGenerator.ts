import { kruskal } from '../libs/algorithms/generator/kruskal'
import { prim } from '../libs/algorithms/generator/prim'
import { GridValues, MazeGeneratorName, StepListQueue } from '../types/types'

export const runMazeGenerator = (name: MazeGeneratorName, grid: GridValues[][]): StepListQueue | null => {
  if (name === 'prim') {
    return prim(grid)
  }
  if (name === 'kruskal') {
    return kruskal(grid)
  }
  return null
}
