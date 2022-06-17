import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vscomputer',
  templateUrl: './vscomputer.component.html',
  styleUrls: ['./vscomputer.component.css'],
})
export class VscomputerComponent implements OnInit {
  constructor(private router: Router) {}
  // variables starts
  winCount: any;
  timer: any;
  flag: any = true;
  dataToChild: any;
  rpsValue: any;
  random: any;
  timmerCount: any;
  interval: any;
  rounds: any;
  scoreBord: any;
  iconsDisabled: any;
  funCall: boolean = true;
  // variabbles ends
  // RPS array for system move
  RPS: any = ['rock', 'paper', 'scissor'];
  // reciving the data from the child
  recivedData(val: any) {
    this.flag = val;
  }
  // enablig icons after 1 sec
  enableIcon() {
    setTimeout(() => {
      if (this.iconsDisabled) {
        this.iconsDisabled = !this.iconsDisabled;
        this.timer = !this.timer;
        this.timmerCount = 5;
        this.intervalTimmer();
      }
    }, 1300);
  }

  // timmer interval for 5 sec
  intervalTimmer() {
    this.interval = setInterval(() => {
      if (this.flag || this.rounds >= 5) return;
      // this.timmerCount = 5;
      if (this.timmerCount <= 0) {
        clearInterval(this.interval);
      } else {
        console.log(this.timmerCount);
        this.timmerCount--;
      }
    }, 1000);
  }

  // gamerestart
  restartReq(val: boolean) {
    // clearInterval(this.interval);
    // this.logic(val);
    this.funCall = !val;
    this.router.navigate([this.router.url]);
    // this.router.navigate(['vsComputer']);
  }

  // gamelogic function

  logic(isCalled: boolean) {
    if (!isCalled) return;
    this.winCount = 0;
    this.rounds = 0;
    this.timmerCount = 5;
    this.rpsValue = false;
    this.scoreBord = [];
    this.timer = true;
    this.iconsDisabled = false;
    // timmer
    this.intervalTimmer();
    // adding click event to icons and getting the value

    let icons = document.getElementById('icons');
    let btn = icons?.querySelectorAll('.btn');
    btn?.forEach((val: any) => {
      val.addEventListener('click', (event: any) => {
        this.rounds++;
        console.log(this.rounds);
        if (this.rounds > 5) return;
        console.log('executed');

        this.random = Math.floor(Math.random() * 3);
        this.rpsValue = val.value;
        // console.log(this.rpsValue);
        this.iconsDisabled = !this.iconsDisabled;
        this.enableIcon();
        clearInterval(this.interval);
        this.timer = false;
        if (this.rpsValue === this.RPS[this.random]) {
          this.rounds--;
        } else if (
          (this.rpsValue === 'rock' && this.RPS[this.random] === 'scissor') ||
          (this.rpsValue === 'paper' && this.RPS[this.random] === 'rock') ||
          (this.rpsValue === 'scissor' && this.RPS[this.random] === 'paper')
        ) {
          this.dataToChild = true;
          this.scoreBord.push({
            round: `Rounnd ${this.rounds}`,
            won: 'player',
          });
          this.winCount++;
        } else {
          this.dataToChild = false;
          this.scoreBord.push({
            round: `Rounnd ${this.rounds}`,
            won: 'computer',
          });
        }
        console.log(this.winCount);
      });
    });
  }

  ngOnInit(): void {
    if (!this.funCall) return;
    this.logic(true);
  }
}
