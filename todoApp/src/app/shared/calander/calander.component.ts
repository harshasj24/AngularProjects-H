import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calander',
  templateUrl: './calander.component.html',
  styleUrls: ['./calander.component.css'],
})
export class CalanderComponent implements OnInit {
  constructor() {}

  monthpicker: boolean = false;
  // current date
  currDate = new Date();

  // checking for leap year
  isLeapYear(year: any) {
    return (
      (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) ||
      (year % 100 === 0 && year % 400 === 0)
    );
  }
  // getting feb days
  getFebDays(year: any) {
    return this.isLeapYear(year) ? 29 : 28;
  }
  // months array
  months: any = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  // weeks array
  weeks: any = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
  // current months and date
  currMonth = this.months[this.currDate.getMonth()];
  currYear = this.currDate.getFullYear();
  selectedMonth = this.currMonth;
  selectedYear = this.currYear;
  days: any = []; //days array
  eventDate = [new Date(2022, 5, 2).getDate(), new Date(2022, 5, 8).getDate()];
  first_day = new Date(2022, 6, 1);
  generateCalander(month: any, year: any) {
    this.days = [];
    // number of days of months
    let dayInMonth = [
      31,
      this.getFebDays(2022),
      31,
      30,
      31,
      30,
      31,
      31,
      30,
      31,
      30,
      31,
    ];
    let selectedDate = new Date(`${year}/${month}/1`);
    console.log(selectedDate);
    // getting first day of the month
    let firstDay = selectedDate.getDay();
    for (
      let i = 0;
      i <= dayInMonth[selectedDate.getMonth()] + firstDay - 1;
      i++
    ) {
      if (i >= firstDay) {
        this.days.push(i - firstDay + 1);
      } else {
        this.days.push('');
      }
    }
  }
  getTime() {
    setInterval(() => {
      let today = new Date();
      let hours =
        today.getHours() > 12 ? today.getHours() - 12 : today.getHours();
      let minutes = today.getMinutes();
      let seconds = today.getSeconds();
      let suffix = today.getHours() > 12 ? 'PM' : 'AM';
      let fullTime = `${hours}:${minutes}:${seconds} ${suffix}`;
      // this.time = fullTime;

      if (seconds === 59) {
        // logic after every miniute
      }
    }, 1000);
  }
  monthPicker(month: any) {
    this.selectedMonth = month;
    this.monthpicker = false;
    this.generateCalander(month, this.selectedYear);
  }
  yearPicker(year: any) {
    this.selectedYear = year;
    this.generateCalander(this.selectedMonth, year);
  }
  ngOnInit(): void {
    console.log(this.currMonth);

    this.generateCalander(this.currMonth, this.currYear);
  }
}
