import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';


/* exercise 15a */
const todaysDate = dayjs();
const futureDate = todaysDate.add(7, 'day');
console.log(todaysDate.format('MM-DD'))
console.log(futureDate.format('MM-DD'));


/* exercise 15b */
const futureMonth = todaysDate.add(1, 'month');
console.log(futureMonth.format('MM-DD'));


/* exercise 15c */
const pastMonth = todaysDate.subtract(1, 'month');
console.log(pastMonth.format('MM-DD'));


/* exercise 15d */
const weekDay = todaysDate.format('dddd');
console.log(weekDay)


function isWeekend(date) {
    const weekdayName = dayjs(date).format('dddd'); // e.g., "Saturday"

    if (weekdayName.toLowerCase() === 'saturday' || weekdayName.toLowerCase() === 'sunday') {
        console.log(true);
    } else {
        console.log(false);
    }

    console.log(weekdayName);
}

isWeekend('10-04-2025');