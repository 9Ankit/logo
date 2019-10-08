import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { dataService } from '../../services/data/data.service';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { cal } from '../../classes/mathCal';


@Component({
  selector: 'bh-details',
  templateUrl: './details.template.html'
})

export class detailsComponent extends NBaseComponent implements OnInit {
  mm: ModelMethods;
  title;
  selectedName: any;
  // policies;
  isExtendedRow;
  
  constructor(private bdms: NDataModelService, private toggle: dataService, public breakpointObserver: BreakpointObserver, private router: Router) {
    super();
    this.mm = new ModelMethods(bdms);
  }
  selectedIndex = 1
  public highlightRoww(i) {
    // this.selectedName = element.type;
    // console.log("i : " + i);
    // console.log("i : " + i.value);
    this.selectedIndex = i
  }

  nginit(name) {
  }
  dataSource1;
  dispalyedColumns1: string[] = ['type', 'number', 'logo', 'icon'];

  dataSource2: MatTableDataSource<any[]>;
  displayedColumns2 = ['type', 'name', 'value', 'basicExcess', 'premium'];

  displayedColumns4: string[] = ['id'];
  dataSource4;

  ngOnInit() { 
    // this.isExtendedRow = (index, item) => { if(item.extend) {return true} else {return false}};
    this.isExtendedRow = (index, item) => item.extend;
    this.getCustomer();
    this.cDetails();
    this.calculation();
    this.toggle.visible = true;
    this.breakpointObserver
      .observe(['(min-width: 500px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
        } else {
          this.toggle.visible = false;
        }
      });
  }

  ViewMore() {
    this.router.navigateByUrl('/dashboard/details2');
  }

  cal;
  extraRow: any[] = ['vehicle', 'brokerFee', 'totalAmount'];
  calculation() {
    for (let i = 0; i < this.extraRow.length; i++) {
      console.log(this.extraRow[i]);
    //   let entry = new cal;
      // entry.type = entry;
      //   console.log(entry);
    }
  }

  cDetails() {
    // this.dataSource4 = this.toggle.arraydata;
    // JSON.stringify([this.dataSource4]);
    this.dataSource4 = new MatTableDataSource([this.toggle.arraydata]);
  }

  createdArray = [];
  getCustomer() {
    this.toggle.policynumber().subscribe(
      (response: any) => {
        this.dataSource1 = response.data;
        const api = response.data;
        api.forEach(ele => {
          // console.log(ele);
          this.createdArray.push({ "someName": ele.name, "extend": true })
          // console.log(this.createdArray);
          ele.policies.forEach(element => {
            this.createdArray.push(element)
            console.log(element);
          })
        })
        this.dataSource1 = new MatTableDataSource(this.createdArray);
      });
  }

  getdata(column, i) {
    // console.log(JSON.stringify([column]));
    let inPArray = [column.coverage]
    inPArray.forEach(ele => {
    })
    this.dataSource2 = new MatTableDataSource(inPArray);
    // console.log(this.createdArray);
  }
}
