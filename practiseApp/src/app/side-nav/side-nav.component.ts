import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MediaMatcher, BreakpointObserver } from '@angular/cdk/layout';
import { ChangeDetectorRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MatDrawer, MatSidenav } from '@angular/material/sidenav';
import { AfterViewInit } from '@angular/core';
import { ElementRef } from '@angular/core';
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent implements OnInit, AfterViewInit {
  constructor(
    private brakeObserver: BreakpointObserver,
    private ele: ElementRef
  ) {}
  @ViewChild(MatSidenav)
  drawer: MatSidenav;

  bgColor: any = localStorage.getItem('bg');
  colorCodes = [
    '#512da8',
    '#303f9f',
    '#00897b',
    '#ff5722',
    '#ef5350',
    '#e91e63',
    '#26c6da',
    '#18ffff',
    '#ff9e80',
  ];
  ngOnInit(): void {
    !this.bgColor && localStorage.setItem('bg', '#e57373');
  }
  changeColor(event: any) {
    localStorage.setItem('bg', event.target.value);
    this.bgColor = localStorage.getItem('bg');
  }
  ngAfterViewInit() {
    this.brakeObserver.observe(['(max-width:800px)']).subscribe((val) => {
      if (val.matches) {
        this.drawer.mode = 'over';

        this.drawer.close();
      } else {
        this.drawer.mode = 'side';
        this.drawer.open();
      }
    });
  }
}
