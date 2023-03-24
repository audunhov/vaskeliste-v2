export const CLEANERS = ["Audun", "Joakim", "Joachim", "Camila", "Sindre"]


export function getCleanersFromWeek(weekNumber: number) {
    const startIndex = weekNumber % CLEANERS.length
    
    const cleaners = []
    for(let i = 0; cleaners.length < 3; i += 2) {
        cleaners.push(CLEANERS[(startIndex + i) % CLEANERS.length])
    }

    return cleaners;

}