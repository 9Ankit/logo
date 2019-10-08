/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { FormBuilder, FormControl, FormGroup, Validators, FormsModule, NgForm, FormArray } from '@angular/forms';
import { dataService } from '../../services/data/data.service';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { customer } from '../../classes/apiDATA';
import { HttpClient } from '@angular/common/http';


import { DataSource } from '@angular/cdk/table';
// import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Component({
    selector: 'bh-rough',
    templateUrl: './rough.template.html'
})

export class roughComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;
    isExtendedRow;
    dataSource;


    constructor(private bdms: NDataModelService, private toggle: dataService, private obj: HttpClient, public breakpointObserver: BreakpointObserver,
        private router: Router) {
        super();
        this.mm = new ModelMethods(bdms);

    }
    ngOnInit() {
        this.getdata();
        this.isExtendedRow = (index, item) => item.extend;
    }

    otherArray = [];
    getdata() {
        this.toggle.policynumber().subscribe(
            (response: any) => {
                const apiData = response.data;
                console.log(apiData);
                apiData.forEach(ele => {
                    console.log(ele);
                    this.otherArray.push({ 'name': ele.name, 'extend': true })
                    console.log(this.otherArray);
                    ele.policies.forEach(policy => {
                        console.log(policy);
                        this.otherArray.push(policy)
                        console.log(this.otherArray)
                    })
                })
                this.dataSource = this.otherArray;
            });
    }

    selectedHero;
onSelect(item): void {
  this.selectedHero = item;
  console.log(item);
//   console.log(this.selectedHero);
}
}
