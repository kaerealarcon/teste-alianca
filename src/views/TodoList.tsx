import { useState } from "react"
import { Box, ButtonForm, DateTitle, Display, DisplayForTabs, SubTitle, Title } from "../style/style"
import { formatDate } from "../utils/utils"
import { TodoItem } from "./TodoItem/TodoItem"
import Tabs from "../components/Tabs/Tabs"

import Plus from "../assets/plus-square.svg"
import TodoForm from "./TodoForm/TodoForm"
import { useTodoContext } from "../contexts/TodoContext"

export default function TodoList(): JSX.Element {

    const [activeForm, setActiveForm] = useState<Boolean>(false)

    const { addTask } = useTodoContext()
    const { tasks } = useTodoContext()

    const [newTask, setNewTask] = useState<Task>({
        id: "",
        description: "",
        dueDate: new Date(),
        priority: "LOW",
        status: "OPEN",
    })

    const open = tasks.filter(task => task.status === "OPEN")
    const closed = tasks.filter(task => task.status === "CLOSED")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        addTask(newTask)
        setNewTask({
            id: "",
            description: "",
            dueDate: new Date(),
            priority: "LOW",
            status: "OPEN",
        })
        setActiveForm(false)
    }

    return(
        <DisplayForTabs >
            <Display $content="space-between">
                <Display $gap="2rem" $align="end">
                    <Title>
                        To Do List
                    </Title>
                    <SubTitle>
                        by Ana Lívia Lins
                    </SubTitle>
                </Display>

                { activeForm ?
                    <Display>
                        <ButtonForm onClick={() => setActiveForm(false)}>
                            Cancelar
                        </ButtonForm>
                        <ButtonForm type="submit" onClick={handleSubmit}>
                            Criar Tarefa
                        </ButtonForm>   
                    </Display>
                    :

                    <ButtonForm onClick={() => setActiveForm(true)}>
                        <img src={Plus}/>
                        Nova Tarefa
                    </ButtonForm>
                }
            </Display>

            {activeForm && <TodoForm newTask={newTask} setNewTask={setNewTask}/>}

            <Tabs tabs={["Abertas", "Finalizadas"]}>
                <Box>
                    <DateTitle>{formatDate(new Date())}</DateTitle>
                    <Display $gap="1rem" >
                        {
                            open.map((task: Task) => {
                                return <TodoItem task={task} taskId={task.id} />
                            })
                        }
                        
                    </Display>
                </Box>

                <Box>
                    <DateTitle>{formatDate(new Date())}</DateTitle>
                    <Display $gap="1rem" >
                        {
                            closed.map((task: Task) => {
                                return <TodoItem task={task} taskId={task.id}/>
                            })
                        }
                        
                    </Display>
                </Box>
            </Tabs>

        </DisplayForTabs>
    )
}