import { api } from '../src/app/models/api.model';
//IMPORT NEW DATAMODEL

export class NDataModel {
api: api;
//DECLARE NEW VARIABLE

constructor() {
this.api = new api();
//CREATE NEW DM INSTANCE
    }
}