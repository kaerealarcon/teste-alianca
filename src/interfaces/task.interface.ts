interface Task {
    id: string
    description: string
    status: "OPEN" | "CLOSED"
    dueDate: Date
    priority: "HIGH" | "MEDIUM" | "LOW"
}