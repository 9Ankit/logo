/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { HttpClient } from '@angular/common/http';
import { dataService } from '../../services/data/data.service';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { customer } from '../../classes/apiDATA';


@Component({
    selector: 'bh-r3',
    templateUrl: './r3.template.html'
})

export class r3Component extends NBaseComponent implements OnInit {
    mm: ModelMethods;
    selectedName: any;
    selectedName2: any;
    size;
    Policy: customer[];

    dataSource;
    dispalyedColumns: string[] = ['name', 'policies'];

    dataSource2: MatTableDataSource<any[]>;
    displayedColumns2 = ['coverage'];

    constructor(private bdms: NDataModelService, private obj: HttpClient, private toggle: dataService, public breakpointObserver: BreakpointObserver, private router: Router) {
        super();
        this.mm = new ModelMethods(bdms);
    }

    ngOnInit() {
        this.getCar()
    }

    allcar;

    getCar() {
        // var url = "http://34.73.45.188:4500/api/getPolicy?type=policynumber";

        this.toggle.policynumber().subscribe(
            (response: any) => {
                //this.allcar = response as string[];
                this.dataSource = response.data;
                //  this.dataSource = new MatTableDataSource(data);
                // this.dataSource2 = response.data;
                console.log("res:" + this.dataSource)
                // console.log("res:" + this.dataSource2)
            });
    }

    showdata;
    getdata(column) {
        //    this.showdata = this.dataSource[index].policies[index2].coverage;
        // console.log(this.showdata);
        console.log(JSON.stringify([column]));
    //    this.showdata =  this.dataSource2.push(JSON.stringify([column]))
    let inPArray = [column]
    this.dataSource2 = new MatTableDataSource(inPArray);
    // this.dataSource2.push(JSON.stringify([column]))
    console.log("type :" + column.coverage.type);
    console.log(column.number);
    //    console.log(this.showdata);
    }


    details: any[] = [
        { "ID": "9307245089898", "Policy": "D8C602792", "Cell": "082-316-7777", "Work": "011-710-0042", "Email": "gua8@gmail.com" }
    ];

    
}