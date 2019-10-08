import { Component, OnInit, ViewChild, ElementRef } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { AgmCoreModule } from '@agm/core';
import { MapsAPILoader, MouseEvent } from '@agm/core';
import { Router } from '@angular/router';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { dataService } from '../../services/data/data.service';
import { MatTableDataSource } from '@angular/material';
import { customer } from '../../classes/apiDATA';

export interface PeriodicElement {
    name: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    { name: 'Maps' },
    { name: 'Personal Details' },
    { name: 'Address Details' },
    { name: 'Home Content' },
    { name: 'Buildings' },
    { name: 'Vehicles' }
];

@Component({
    selector: 'bh-details2',
    templateUrl: './details2.template.html',
})

export class details2Component extends NBaseComponent implements OnInit {
    mm: ModelMethods;
    markers: any[] = []
    // public selectedName: any;
    title;
    public name: string;
    titleShow: boolean = false;
    Map: boolean = true;
    car: boolean = false;
    policyNo: boolean = false;
    searchElementRef: ElementRef;

    displayedColumns: string[] = ['name'];
    dataSource = ELEMENT_DATA;

    displayedColumns2: string[] = ['phone', 'landline', 'email'];
    dataSource2;

    displayedColumns3: string[] = ['street', 'area', 'city', 'state', 'country', 'pincode'];
    dataSource3;

    displayedColumns4: string[] = ['id'];
    dataSource4;

    constructor(private bdms: NDataModelService, private toggle: dataService, private router: Router, private mapsAPILoader: MapsAPILoader,
        private obj: HttpClient) {
        super();
        this.mm = new ModelMethods(bdms);
    }

    ngOnInit() {
        this.cDetails();
    }

    selectedName = 0;
    public highlightRow(i) {
        this.selectedName = i;
    }

    cDetails() {
        this.dataSource4 = this.toggle.arraydata;
        console.log(this.toggle.arraydata);
        // console.log(this.markers);
        this.toggle.arraydata.policies[0].coverage.location.length;
        for (let i = 0; i < this.toggle.arraydata.policies[0].coverage.location.length; i++) {
            this.markers.push({
                'lat': this.toggle.arraydata.policies[0].coverage.location[i].lat,
                'long': this.toggle.arraydata.policies[0].coverage.location[i].long

            });
            // console.log(this.markers)
        }
        JSON.stringify([this.dataSource4]);
        this.dataSource4 = new MatTableDataSource([this.toggle.arraydata]);
    }
    openTabs(namee) {
        if (namee === 'Maps') {
            this.titleShow = false;
            this.Map = true;
            this.car = false;
            this.policyNo = false;
        }
        else if (namee === 'Personal Details') {
            this.dataSource2 = this.toggle.arraydata;
            JSON.stringify([this.dataSource2]);
            this.dataSource2 = new MatTableDataSource([this.toggle.arraydata]);
            this.titleShow = false;
            this.Map = false;
            this.car = true;
            this.policyNo = false;
        }
        else if (namee === 'Address Details') {
            this.dataSource3 = this.toggle.arraydata;
            JSON.stringify([this.dataSource3]);
            this.dataSource3 = new MatTableDataSource([this.toggle.arraydata]);
            this.title = "Address Details"
            this.titleShow = false;
            this.Map = false;
            this.car = false;
            this.policyNo = true;
        }
        else if (namee === 'Home content') {
            this.title = "Home content"
        }
        else if (namee === 'Buildings') {
            this.title = "Buildings"
        }
        else if (namee === 'Vehicles') {
            this.title = "Vehicles"
        }
    }

    backButton() {
        this.router.navigateByUrl('/dashboard/details');
    }
}