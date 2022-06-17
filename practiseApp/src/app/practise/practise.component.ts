import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { Observable, takeWhile, map, tap } from 'rxjs';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-practise',
  templateUrl: './practise.component.html',
  styleUrls: ['./practise.component.css'],
})
export class PractiseComponent implements OnInit, AfterViewInit {
  date = new Date();
  what: any = ' ';
  with: any = ' ';
  data: any;
  name = 'jungleee';
  @ViewChild('div')
  ele: ElementRef;
  obser: Observable<any>;
  constructor(private api: ApiService, private eleRef: ElementRef) {}
  arrObser: Observable<any>;
  arr = [
    { btnName: 'home', className: 'btn btn-primary active' },
    { btnName: 'about', className: 'btn btn-primary mx-5' },
    { btnName: 'contact', className: 'btn btn-primary' },
  ];
  ar = [1, 3, 4, 5, 67, 89, 0, 8, 9];
  a = 'i have lost you and i have nting left';

  handleClick(e: any) {
    let ele = this.eleRef.nativeElement.querySelectorAll('.active');
    ele[0].classList.remove('active');
    e.target.className += ' active';
    this.date = e.target.value;
    console.log(this.date);
  }
  cliked() {
    // let b = this.a.split(' ').map((v: any) => {
    //   return (v = 'harsha');
    // });
    console.log();
  }
  my$: Observable<any> = of({ id: 12, name: 'harsha' });
  ngOnInit(): void {
    console.log(this.ele, 'p');

    this.api
      .usergata()
      .pipe(
        tap((headers: any) => {
          console.log(headers, 'inside pipe and tap');
        })
      )
      .subscribe((val: any) => {
        this.data = val;
        console.log(val, 'pppp');
      });
    this.obser = new Observable((observer) => {
      observer.next(['Hello i am observable']);
    });
    this.ar.splice(3, 0, 90);
    console.log(this.ar);

    this.arrObser = of(this.arr, this.date);
    this.my$.subscribe((v) => console.log(v, 'obsArr'));

    console.log(this.a.charCodeAt(3));
  }
  ngAfterViewInit(): void {
    console.log((this.ele.nativeElement.style.background = 'red'));
  }
}
