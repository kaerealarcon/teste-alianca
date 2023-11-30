import { DisplayForForm, Input, Label, Select } from "./style"

export default function TodoForm({setNewTask, newTask}:any) : JSX.Element {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setNewTask({
          ...newTask,
          [name]: value,
        })
      }

    return(
        <DisplayForForm onSubmit={() => console.log("api")}>
            <Label>
                <span>Descrição</span>
                <Input
                    type="text"
                    name="description"
                    value={newTask.description}
                    onChange={handleChange}
                />
            </Label>

            <Label>
                <span>Data de vencimento</span>
                <Input
                    type="date"
                    name="dueDate"
                    value={newTask.dueDate}
                    onChange={handleChange}
                />
            </Label>

            <Label>
                <span>Prioridade</span>

                <Select name="priority" value={newTask.priority} onChange={handleChange}>
                    <option value="LOW">Low</option>
                    <option value="MEDIUM">Medium</option>
                    <option value="HIGH">High</option>
                </Select>
            </Label>
        </DisplayForForm>
    )
}