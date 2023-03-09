const days = document.querySelector('.daysClass');
const today = new Date();
const pre = document.getElementById('prev');
const next = document.getElementById('next');
const display = document.getElementById('display');
const displayDate = document.getElementById('displayDate');

let month = today.getMonth();
let year = today.getFullYear();

function generateCalendar(month, year) {
  days.innerHTML = '';
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const lastDayOfMonth = new Date(year, month + 1, 0).getDate();
  console.log(firstDayOfMonth, lastDayOfMonth);

  for (let i = 0; i <= lastDayOfMonth + firstDayOfMonth; i++) {
    const day = document.createElement('div');
    if (i > firstDayOfMonth) {
      day.innerText = i - firstDayOfMonth;

      if (
        i === today.getDate() &&
        year === today.getFullYear() &&
        month == today.getMonth()
      ) {
        day.classList.add('today');
      }
    } else {
      day.innerText = '';
    }
    days.appendChild(day);
  }
  display.innerText = month + 1 + '/' + year;
}

generateCalendar(month, year);

pre.addEventListener('click', () => {
  month = month === 0 ? (month = 11) : month - 1;
  year = month === 0 ? year - 1 : year;
  generateCalendar(month, year);
});

next.addEventListener('click', () => {
  month = month === 11 ? 0 : month + 1;
  year = month == 11 ? year + 1 : year;
  generateCalendar(month, year);
});

days.addEventListener('click', (e) => {
  const isSelected = document.querySelector('selected');
  if (isSelected) {
    isSelected.classList.remove('selected');
  }
  e.target.classList.add('selected');
  displayDate.innerText = e.target.innerText;
});
