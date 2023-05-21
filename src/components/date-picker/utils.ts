import dayjs, { Dayjs } from "dayjs";

export const THIS_YEAR = dayjs().year();
export const THIS_MONTH = dayjs().month() + 1;

export const generateFirstDayOfEachWeek = (day: Dayjs): Dayjs[] => {
    const dates: Dayjs[] = [day];

    for (let i = 1; i < 6; i++) {
        const date = day.clone().add(i, "week")
        dates.push(date)
    }

    return dates;
}

export const generateWeek = (day: Dayjs): Date[] => {
    const dates: Date[] = []
    for (let i = 0; i < 7; i++) {
        const date = day.clone().add(i, "day").toDate();
        dates.push(date);
    }
    return dates;
}

export const generateDecade = (day: Dayjs) => {
    const years = [day.year()];
    for (let i = 0; i < 4; i++) {
        const nextYear = day.clone().add(i + 1, "year").year()
        const lastYear = day.clone().subtract(i + 1, "year").year()
        years.splice(0, 0, lastYear)
        years.push(nextYear)
    }

    return years;
}
