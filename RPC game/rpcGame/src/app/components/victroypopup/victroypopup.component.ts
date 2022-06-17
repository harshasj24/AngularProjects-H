import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-victroypopup',
  templateUrl: './victroypopup.component.html',
  styleUrls: ['./victroypopup.component.css'],
})
export class VictroypopupComponent implements OnInit {
  @Input() dataFromParent: any;
  constructor(private router: Router) {}
  @Output() restartGame = new EventEmitter<any>();

  restart(isCalled: boolean) {
    this.restartGame.emit(isCalled);
    // this.router.navigate(['vsComputer']);
    this.router.navigate([this.router.url]);
    window.location.reload();
  }
  bakTOMainMenu() {
    // this.router.navigate(['vsComputer']);

    this.router.navigate(['mainMenu']);
  }
  ngOnInit(): void {}
}
