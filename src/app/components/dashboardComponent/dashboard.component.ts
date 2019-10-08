import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { dataService } from '../../services/data/data.service';
import { FormBuilder, FormControl, FormGroup, Validators, FormsModule, NgForm, FormArray } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserModule } from '@angular/platform-browser';
// import { Router } from '@angular/router';
import { Router } from '@angular/router';

@Component({
    selector: 'bh-dashboard',
    templateUrl: './dashboard.template.html'
})

export class dashboardComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;
    radioBTN;
    radioBTNIndex;
    public selectedRadioBTN = '';

    icon: string;
    showicon: string[] = ['schedule', 'accessibility_new', 'comment', 'description', 'featured_play_list', 'class', 'search', 'folder_special', 'network_check',
        'local_laundry_service', 'supervised_user_circle', 'timeline', 'mms'];

    constructor(private bdms: NDataModelService, private toggle: dataService, private router: Router) {
        super();
        this.mm = new ModelMethods(bdms);

        this.radioBTN = this.toggle.radioBTN;
        this.radioBTNIndex = this.toggle.radioBTNIndex;
    }

    clickedICON(icon) {
        // console.log("icon " + icon);
        if (icon === 6) {
            this.router.navigateByUrl('/dashboard/search');
        } else if (icon === 7) {
            this.router.navigateByUrl('/dashboard/details2');
        } else if (icon === 8) {
            this.router.navigateByUrl('/dashboard/details');
        }

    }

    ngOnInit() {
        this.toggle.visible = true;
    }
}