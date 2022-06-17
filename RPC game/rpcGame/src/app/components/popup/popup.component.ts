import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
})
export class PopupComponent implements OnInit {
  constructor() {}

  @Output() dataToParent = new EventEmitter<any>();
  msg: any = '';
  sendDatatoParent(value: any) {
    this.dataToParent.emit(value);
  }
  ngOnInit(): void {
    setTimeout(() => {
      document.getElementById('you')?.classList.add('scaleUp');
      document.getElementById('computer')?.classList.add('scaleUp');
    }, 1000);
    setTimeout(() => {
      this.msg = 'Press Any key to start';
    }, 1500);
  }
}
