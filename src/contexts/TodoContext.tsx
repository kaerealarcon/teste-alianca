import { createContext, useContext, useState, ReactNode, useEffect } from "react"
import { generateUniqueId } from "../utils/utils"

interface TodoContextType {
    tasks: Task[]
    addTask: (newTask: Task) => void
    completeTask: (taskId: string) => void
    deleteTask: (taskId: string) => void
}

interface TodoProviderProps {
    children: ReactNode
}

const TodoContext = createContext<TodoContextType | undefined>(undefined)

export function useTodoContext() {
    const context = useContext(TodoContext)
    if (!context) {
        throw new Error("Use useTodoContext with a TodoProvider")
    }
    return context
}

const getSavedTasks = () => {
    const storedTasks = localStorage.getItem("todoTasks")
    return storedTasks ? JSON.parse(storedTasks) : []
}

export function TodoProvider({ children }: TodoProviderProps) {
        const [tasks, setTasks] = useState<Task[]>(getSavedTasks())

        const addTask = (newTask: Task) => {
            const updatedTasks = [...tasks, { ...newTask, id: generateUniqueId() }]
            setTasks(updatedTasks)
        }

        const completeTask = (taskId: string) => {
            setTasks((prevTasks) =>
                prevTasks.map((task) =>
                    task.id === taskId ? { ...task, status: "CLOSED" } : task
                )
            )
        }
        
        const deleteTask = (taskId: string) => {
            const updatedTasks = tasks.filter((task) => task.id !== taskId)
            setTasks(updatedTasks)
        }

        useEffect(() => {
            localStorage.setItem("todoTasks", JSON.stringify(tasks))
        }, [tasks])

        useEffect(() => {
            const savedTasks = getSavedTasks()
            setTasks(savedTasks)
        }, [])

        return (
            <TodoContext.Provider value={{ tasks, addTask, completeTask, deleteTask }}>
                {children}
            </TodoContext.Provider>
        )
}