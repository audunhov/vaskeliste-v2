import { getWeek } from 'date-fns';

export function getWeekNumber(date: Date) {
    return getWeek(date, {
        weekStartsOn: 1,
        firstWeekContainsDate: 4
    })
}