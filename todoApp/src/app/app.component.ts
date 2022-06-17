import { Component } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { AfterViewInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { OnInit } from '@angular/core';
import { ApiService } from './core';
import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddTaskDialog } from './shared';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit, OnInit {
  constructor(
    private breakpointO: BreakpointObserver,
    private changes: ChangeDetectorRef,
    private apiS: ApiService,
    private ele: ElementRef,
    public dialog: MatDialog
  ) {}
  mtValue: any = 100;
  @ViewChild('inp')
  inputFileld: ElementRef;
  marginTop = this.mtValue + 'px';
  title = 'todoApp';
  isMobile: Boolean = true;
  sideNavIcons = [
    {
      iconName: 'dashboard',
      routerLink: '/dashbord',
      routerlinkActive: '',
    },
    {
      iconName: 'stars',
      routerLink: '/important',
      routerlinkActive: '',
    },
    {
      iconName: 'alarm',
      routerLink: '/hello',
      routerlinkActive: '',
    },
  ];

  
  ngAfterViewInit(): void {
    this.breakpointO.observe(['(max-width:750px)']).subscribe((o) => {
      if (o.matches) {
        this.isMobile = false;
      } else {
        this.isMobile = true;
      }
    });
    this.changes.detectChanges();
    let arr = [1, 2, 3];
    console.log(this.inputFileld.nativeElement.value);
  }

  ngOnInit(): void {}
}
