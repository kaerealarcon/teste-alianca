export const formatDate = (date: Date): string => {
    const months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]
  
    const day = date.getDate()
    const month = months[date.getMonth()]
  
    return `${day} de ${month}`
}

export const generateUniqueId = () => {
    return `${Date.now()}_${Math.random().toString(36).substring(7)}`
}