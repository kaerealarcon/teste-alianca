//Styles
import { Display } from "../../style/style"
import { BoxItem, ButtonItem, DescriptionTitle, InfoText, PriorityText, StatusTitle } from "./style"

//Assets
import Calendar from "../../assets/calendar-days.svg"
import Flag from "../../assets/flag.svg"
import Trash from "../../assets/trash.svg"
import Check from "../../assets/check-circle.svg"

//Utils
import { formatDate } from "../../utils/utils"
import { useTodoContext } from "../../contexts/TodoContext"

interface TodoItemProps  {
    task: {
      description: string
      status: string
      dueDate: Date
      priority: string
    }
    taskId: string
  }

  export const TodoItem: React.FC<TodoItemProps> = ({ task, taskId }) => {
    const { completeTask, deleteTask } = useTodoContext()

    const handleCompleteClick = () => {
      completeTask(taskId)
    }
  
    const handleDeleteClick = () => {
      deleteTask(taskId)
    }
    
    return(
        <BoxItem $border={task.status}>

            { task.status === "OPEN" ?
                <Display $content="space-between">
                    <Display>
                        <StatusTitle $color={task.status}>{task.status}</StatusTitle>
                        <ButtonItem 
                            $confirm 
                            onClick={() => handleCompleteClick()}
                        >
                            <img src={Check} width={17}/> Concluir
                        </ButtonItem>
                    </Display>
                    <Display>
                        <ButtonItem 
                            onClick={() => handleDeleteClick()} // Passando o taskId como argumento
                        >
                            <img src={Trash} width={17}/> Excluir
                        </ButtonItem>
                    </Display>
                </Display>

                :

                <StatusTitle $color={task.status}>{task.status}</StatusTitle>
            }

            <Display $content="space-between">
                <DescriptionTitle>{task.description}</DescriptionTitle>

                <Display>
                
                    <Display $gap=".3rem" $align="end">
                        <img src={Flag} width={12}/>
                        <InfoText>Prioridade:</InfoText>
                        <PriorityText $color={task.priority}>{task.priority}</PriorityText>
                    </Display>

                    <Display $gap=".3rem" $align="end">
                        <img src={Calendar} width={12}/>
                        <InfoText>Data de vencimento:</InfoText>
                        <InfoText $bold>{formatDate(new Date(task.dueDate))}</InfoText>
                    </Display>

                </Display>
            </Display>
        </BoxItem>
    )
}