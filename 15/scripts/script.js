import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';


/* exercise 15a */
const monthDay = dayjs();
const futureDate = monthDay.add(7, 'day');

console.log(futureDate.format('MM-DD'));


/* exercise 15b */
const futureMonth = monthDay.add(1, 'month');
console.log(futureMonth.format('MM-DD'));
