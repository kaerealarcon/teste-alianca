import TodoList from './views/TodoList'
import { TodoProvider } from "./contexts/TodoContext"

function App() {

  return (
    <TodoProvider>
        <TodoList/>
    </TodoProvider>

  )
}

export default App
