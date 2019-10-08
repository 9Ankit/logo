import { Component, OnInit, Output, EventEmitter } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { dataService } from '../../services/data/data.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators, FormsModule, NgForm, FormArray } from '@angular/forms';

@Component({
    selector: 'bh-search',
    templateUrl: './search.template.html'
})

export class searchComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;
    selectedBTN;
    radioBTN;
    arraydata;
    radioForm: FormGroup;

    constructor(private bdms: NDataModelService, private toggle: dataService, public fb: FormBuilder, private router: Router, private obj: HttpClient) {
        super();
        this.mm = new ModelMethods(bdms);
        this.radioBTN = this.toggle.radioBTN;
        this.radioForm = this.fb.group({
            'radioValid': [null, Validators.required]
        });
    }

    ngOnInit() {
        this.toggle.visible = false;
    }

    onSubmit() {
        if (this.radioForm.valid) {
            this.router.navigateByUrl('/dashboard/details');
        }
    }

    radioChange(i, radio) {
        this.selectedBTN = radio.test;              //showing the selected radio button in input box 
        for (let y = 0; y < this.toggle.radioBTN.length; y++) {
            this.toggle.radioBTN[y].checked = false;
        }
        this.toggle.radioBTN[i].checked = true;
        if (this.selectedBTN === 'Policy Nr') {
            this.toggle.policynumber().subscribe(
                (response: any) => {
                    const pDetails = response.data;
                    // console.log(pDetails);
                    this.toggle.arraydata = response.data;
                });

        }
        else if (this.selectedBTN === 'Email') {
            this.toggle.EmailId().subscribe(
                (response: any) => {
                    const pDetails = response.data;
                    this.toggle.arraydata = response.data;
                    // console.log(pDetails);
                    pDetails.forEach(element => {
                        this.toggle.arraydata = (element);
                    });
                });
        }
        else if (this.selectedBTN === 'ID Nr') {
            this.toggle.loadData().subscribe(
                (response: any) => {
                    const pDetails = response.data;
                    // console.log(pDetails);
                    pDetails.forEach(element => {
                        this.toggle.arraydata = (element);
                    });
                });
        }
        else if (this.selectedBTN === 'Mobile Nr' || this.selectedBTN === 'Work' || this.selectedBTN === 'Home Tel') {
            this.toggle.phone().subscribe(
                (response: any) => {
                    const pDetails = response.data;
                    // console.log(pDetails);
                    pDetails.forEach(element => {
                        this.toggle.arraydata = (element);
                    });
                });
        }
    }
}