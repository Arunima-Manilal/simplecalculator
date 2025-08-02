const daysContainer = document.getElementById("calendar-days");
const monthYear = document.getElementById("month-year");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let date = new Date();

function renderCalendar() {
  const year = date.getFullYear();
  const month = date.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  monthYear.textContent = `${monthNames[month]} ${year}`;
  daysContainer.innerHTML = "";

  // Blank days before the first day
  for (let i = 0; i < firstDay; i++) {
    const blank = document.createElement("div");
    daysContainer.appendChild(blank);
  }

  // Fill the days
  for (let i = 1; i <= lastDate; i++) {
    const day = document.createElement("div");
    day.textContent = i;
    daysContainer.appendChild(day);
  }
}

prevBtn.addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

nextBtn.addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();

