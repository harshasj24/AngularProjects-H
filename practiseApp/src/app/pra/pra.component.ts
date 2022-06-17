import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-pra',
  templateUrl: './pra.component.html',
  styleUrls: ['./pra.component.css'],
})
export class PraComponent implements OnInit {
  constructor(private api: ApiService) {}
  apiData: any = [];
  inpData: any;
  handleChane() {
    this.apiData = this.apiData.filter((val: any) => {
      if (this.inpData == '') {
        return val;
      } else if (val.name.toLowerCase().includes(this.inpData.toLowerCase())) {
        return val;
      }
    });
  }

  getData() {
    this.api.usergata().subscribe((val: any) => {
      this.apiData = val;
      console.log(this.apiData, 'api');
    });
  }
  ngOnInit(): void {
    this.getData();
  }
}
function inpDat(inpDat: any) {
  throw new Error('Function not implemented.');
}
