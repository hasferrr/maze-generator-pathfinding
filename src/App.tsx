import Button from './components/Button'
import Grid from './components/Grid'

const App = () => {
  return (
    <div className="h-screen w-screen">
      <div className="flex flex-col gap-4 h-full items-center justify-center">
        <div>Helo Maze</div>
        <Grid />
        <Button />
      </div>
    </div>
  )
}

export default App
