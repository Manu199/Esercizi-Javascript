import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';

export function isWeekend(date) {
    const weekdayName = dayjs(date).format('dddd'); // e.g., "Saturday"

    if (weekdayName.toLowerCase() === 'saturday' || weekdayName.toLowerCase() === 'sunday') {
        console.log(true);
    } else {
        console.log(false);
    }

    console.log(weekdayName);
}
