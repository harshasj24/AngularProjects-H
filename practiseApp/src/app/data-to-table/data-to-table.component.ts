import { Component, OnInit } from '@angular/core';
import { DataServiceService } from './data-service.service';

@Component({
  selector: 'app-data-to-table',
  templateUrl: './data-to-table.component.html',
  styleUrls: ['./data-to-table.component.css'],
})
export class DataToTableComponent implements OnInit {
  constructor(private ser: DataServiceService) {}
  datas: any = [];
  // addDataToTable(formData: any) {
  //   let isDataPresent = this.datas.filter((val: any) => {
  //     val.id === formData.value.id;
  //   }).length;
  //   if (isDataPresent !== 0) return alert('id already there!!!');
  //   this.ser.setData(formData.value);
  //   this.datas = this.ser.getData();
  //   console.log(formData.value);
  // }
  // editDataInTable(editForm: any) {
  //   this.ser.updateData(editForm.value);

  //   console.log(editForm.value);
  // }

  seachVal: any;
  cpySerchVal = [...this.datas];
  filter() {
    console.log(this.seachVal);

    if (!this.seachVal) {
      this.datas = this.cpySerchVal;
    } else {
      this.datas = this.datas.filter((val: any) => {
        return val.name.toLowerCase().includes(this.seachVal.toLowerCase());
      });
    }
  }
  ngOnInit(): void {
    this.ser.getData().subscribe((val) => {
      this.datas = val;
      this.cpySerchVal = [...this.datas];
    });
  }
}
