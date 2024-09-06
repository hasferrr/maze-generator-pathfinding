import { createContext, useRef, useState } from 'react'
import { createEmptyGrid, createWallGrid } from '../utils/createGrid'
import { generateClass } from '../utils/generateClass'

interface GridContextType {
  size: [number, number]
  setSize: React.Dispatch<React.SetStateAction<[number, number]>>
  gridRef: React.MutableRefObject<number[][]>
  gridDivRefs: React.MutableRefObject<HTMLDivElement[][]>
  rerender: () => void
  resetGrid: () => void
}

const GridContext = createContext<GridContextType>(null!)

export const GridContextProvider = ({ children }: { children?: React.ReactNode }) => {
  const [r, c] = [16, 32]
  const [size, setSize] = useState<[number, number]>([r, c])
  const gridRef = useRef<number[][]>(createWallGrid(r, c))
  const gridDivRefs = useRef<HTMLDivElement[][]>(createEmptyGrid(r, c))
  const setDummy = useState(0)[1]
  const rerender = () => setDummy((n) => n + 1)

  const resetGrid = () => {
    for (let i = 0; i < gridRef.current.length; i++) {
      for (let j = 0; j < gridRef.current[0].length; j++) {
        gridRef.current[i][j] = 0
        gridDivRefs.current[i][j].className = generateClass(0)
      }
    }
  }

  return (
    <GridContext.Provider value={{
      gridRef,
      gridDivRefs,
      size,
      setSize,
      rerender,
      resetGrid,
    }}>
      {children}
    </GridContext.Provider>
  )
}

export default GridContext
