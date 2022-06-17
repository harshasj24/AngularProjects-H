import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core';

@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.css'],
})
export class AllTasksComponent implements OnInit {
  constructor(private api: ApiService) {}
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
