/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit, Output, EventEmitter } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { dataService } from '../../services/data/data.service';
import { MatTableDataSource } from '@angular/material';
import { HttpClient } from '@angular/common/http';

 export interface PeriodicElement {
  name: string;
  id: string;
  icon: string;
  premium: string;
  icon2: string;
  icon3: string;
  icon4: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Life', id: "DS787SD1", icon: 'spellcheck', icon2: 'favorite', icon3: 'done_outline', icon4: 'list_alt', premium: 'R 165.62' },
  { name: 'Motor', id: "DS787SD3", icon: 'spellcheck', icon2: 'directions_car', icon3: 'done_outline', icon4: 'list_alt', premium: 'R 1696.32' }
];

export interface PeriodicElement2 {
  name: string;
  id: string;
  icon: string;
  premium: string;
  icon2: string;
  icon3: string;
  icon4: string;
}

const ELEMENT_DATA2: PeriodicElement2[] = [
  { name: 'Lite', id: "DS787SD1", icon: 'spellcheck', icon2: 'favorite', icon3: 'done_outline', icon4: 'list_alt', premium: 'R 165.62' },
  { name: 'Motor', id: "DS787SD3", icon: 'spellcheck', icon2: 'directions_car', icon3: 'done_outline', icon4: 'list_alt', premium: 'R 1696.32' }
];



//////////////////////////////////////////////////////////////////

export interface PeriodicElement3 {
  name: string;
  item: string;
  value: string;
  premium: string;
  excess: string;
}

const ELEMENT_DATA3: PeriodicElement3[] = [
  { name: 'Vehicle', item: "2017 AUDI A4", value: 'Retail Value', excess: 'R 24,000.00', premium: 'R 65.72' },
  { name: 'Total Vehicle SASRIA', item: "", value: '', excess: '', premium: 'R 2.00' },
  { name: 'Broker Fee', item: '', value: '', excess: '', premium: 'R 100.00' },
  { name: 'Total Monthly Payment', item: '', value: '', excess: '', premium: 'R 956.92' }
];

export interface PeriodicElement4 {
  name: string;
  id: string;
  icon: string;
  premium: string;
  icon2: string;
  icon3: string;
  icon4: string;
}

const ELEMENT_DATA4: PeriodicElement4[] = [
  { name: 'Cancelled', id: "DS787SD4", icon: 'sports_volleyball', icon2: 'voicemail', icon3: 'close', icon4: 'list_alt', premium: 'R 65.72' },
  { name: 'Cancelied', id: "DS787SD5", icon: 'fingerprint', icon2: 'airplanemode_active', icon3: 'close', icon4: 'list_alt', premium: 'R 14.92' }
];



@Component({
    selector: 'bh-r2',
    templateUrl: './r2.template.html'
})

export class r2Component extends NBaseComponent implements OnInit {
    mm: ModelMethods;
       title;
  liteShow: boolean = false;
  motorShow: boolean = true;
  notselected: boolean = false;
  selectedName: any;
  selectedName2: any;
  size;   


    constructor(private bdms: NDataModelService, private obj: HttpClient, private toggle: dataService, ) {
        super();
        this.mm = new ModelMethods(bdms);
    }

      displayedColumns: string[] = ['name', 'id', 'icon', 'icon2', 'icon3', 'icon4', 'premium'];
  dataSource = ELEMENT_DATA;

  displayedColumns2: string[] = ['name', 'id', 'icon', 'icon2', 'icon3', 'icon4', 'premium'];
  dataSource2 = ELEMENT_DATA2;

  displayedColumns3: string[] = ['name', 'item', 'value', 'excess', 'premium'];
  dataSource3 = ELEMENT_DATA3;

  displayedColumns4: string[] = ['name', 'id', 'icon', 'icon2', 'icon3', 'icon4', 'premium'];
  dataSource4 = ELEMENT_DATA4;

    dataSource11;
    dispalyedColumns11: string[] = ['type', 'number', 'logo', 'icon'];

    dataSource22: MatTableDataSource<any[]>;
    displayedColumns22 = ['type', 'name', 'value', 'basicExcess', 'premium'];

        openTabs(name) {
     for (let y = 0; y < this.displayedColumns.length; y++) {
           this.size =  this.displayedColumns[y].length;
        }
        console.log("Size : " + this.size);
        // this.toggle.radioBTN[i].checked = true;
    console.log("name :" + name);
    if (name === 'Life') {
      // this.title = "Lite" +( " : Selected");
      this.liteShow = true;
      this.motorShow = false;
      this.notselected = false;
    }
    else if (name === 'Home') {
      this.title = "Home" + (" : Selected");
      this.liteShow = false;
      this.motorShow = false;
      this.notselected = true;
    }
    else if (name === 'Motor') {
      // this.title = "Motor"
      this.liteShow = false;
      this.motorShow = true;
      this.notselected = false;
    }
    else if (name === 'Cancelled') {
      this.title = "Cancelled" + (" : Selected");
      this.liteShow = false;
      this.motorShow = false;
      this.notselected = true;
    }
    else if (name === 'Cancelied') {
      this.title = (" Selected : ") + "Cancelled";
      this.liteShow = false;
      this.motorShow = false;
      this.notselected = true;
    }
  }
  // open table onclick ends here

 //    onclick change color starts
  public highlightRow(element) {
    this.selectedName = element.name
  }
  public highlightRow2(element) {
    this.selectedName2 = element.name
  }
   
      nginit(name) {
    switch (name){
      
      case 'Motor':
        return 'rgb(252, 136, 20)';
    } return false
    }


    ngOnInit() {
        this.getCar();
    }

    createdArray = [];
    getCar() {
        this.toggle.policynumber().subscribe(
            (response: any) => {
                this.dataSource11 = response.data;
                const api = response.data;
                // console.log(api);
                 api.forEach(ele => {
                    // console.log(ele)
                    ele.policies.forEach(element => {
                        this.createdArray.push(element)
                        // console.log(this.createdArray)
                    })
                })
                this.dataSource11 = new MatTableDataSource(this.createdArray);
            });
    }


    showdata;
    getdata(column, i) {
        // console.log(JSON.stringify([column]));
        let inPArray = [column]
        this.dataSource22 = new MatTableDataSource(inPArray);
        console.log("type :" + this.createdArray);
        console.log(this.createdArray);
    }

}
