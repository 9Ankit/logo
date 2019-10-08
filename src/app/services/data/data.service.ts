import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { customer } from '../../classes/apiDATA';

// export interface emp {
//      id : number;
//     username: string;
//     name: string;
// }


@Injectable()


export class dataService {
    checked: boolean;
    radioBTN = [
        { 'test': 'Email', 'checked': false },
        { 'test': 'Home Tel', 'checked': false },
        { 'test': 'ID Nr', 'checked': false },
        { 'test': 'Mobile Nr', 'checked': false },
        { 'test': 'Policy Nr', 'checked': false },
        { 'test': 'Work', 'checked': false },
    ];
    visible: boolean;
    dataDetails = [];
    arraydata = [] ;
    radioBTNIndex: any;

    constructor(private http: HttpClient) {
        this.visible = false;
    }
    
    
    loadData() {
        // const url = "http://34.73.45.188:4500/api/getPolicy?type=id"; 
        return this.http.get( "http://34.73.45.188:4500/api/getPolicy?type=id");
    }
    
    policynumber(){
        return this.http.get("http://34.73.45.188:4500/api/getPolicy?type=policynumber");
    }

    EmailId() {
        return this.http.get("http://34.73.45.188:4500/api/getPolicy?type=email")
    }
    phone() {
        return this.http.get("http://34.73.45.188:4500/api/getPolicy?type=phone")
    }

    
    hide() {
        this.visible = false;
    }
    show() {
        this.visible = true;
    }
}