import { PageNotFoundComponent } from '../not-found.component';
import { LayoutComponent } from '../layout/layout.component';
import { ImgSrcDirective } from '../directives/imgSrc.directive';
import { APP_INITIALIZER } from '@angular/core';
import { NDataSourceService } from '../n-services/n-dataSorce.service';
import { environment } from '../../environments/environment';
import { NMapComponent } from '../n-components/nMapComponent/n-map.component';
import { NLocaleResource } from '../n-services/n-localeResources.service';
import { NAuthGuardService } from 'neutrinos-seed-services';
import { ArtImgSrcDirective } from '../directives/artImgSrc.directive';

window['neutrinos'] = {
  environments: environment
}

//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-r3Component
import { r3Component } from '../components/r3Component/r3.component';
//CORE_REFERENCE_IMPORT-r2Component
import { r2Component } from '../components/r2Component/r2.component';
//CORE_REFERENCE_IMPORT-dataService
import { dataService } from '../services/data/data.service';
//CORE_REFERENCE_IMPORT-details2Component
import { details2Component } from '../components/details2Component/details2.component';
//CORE_REFERENCE_IMPORT-detailsComponent
import { detailsComponent } from '../components/detailsComponent/details.component';
//CORE_REFERENCE_IMPORT-searchComponent
import { searchComponent } from '../components/searchComponent/search.component';
//CORE_REFERENCE_IMPORT-roughComponent
import { roughComponent } from '../components/roughComponent/rough.component';
//CORE_REFERENCE_IMPORT-dashboardComponent
import { dashboardComponent } from '../components/dashboardComponent/dashboard.component';

/**
 * Reads datasource object and injects the datasource object into window object
 * Injects the imported environment object into the window object
 *
 */
export function startupServiceFactory(startupService: NDataSourceService) {
  return () => startupService.getDataSource();
}

/**
*bootstrap for @NgModule
*/
export const appBootstrap: any = [
  LayoutComponent,
];


/**
*Entry Components for @NgModule
*/
export const appEntryComponents: any = [
  //CORE_REFERENCE_PUSH_TO_ENTRY_ARRAY
];

/**
*declarations for @NgModule
*/
export const appDeclarations = [
  ImgSrcDirective,
  LayoutComponent,
  PageNotFoundComponent,
  NMapComponent,
  ArtImgSrcDirective,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-r3Component
r3Component,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-r2Component
r2Component,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-details2Component
details2Component,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-detailsComponent
detailsComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-searchComponent
searchComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-roughComponent
roughComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-dashboardComponent
dashboardComponent,

];

/**
* provider for @NgModuke
*/
export const appProviders = [
  NDataSourceService,
  NLocaleResource,
  {
    // Provider for APP_INITIALIZER
    provide: APP_INITIALIZER,
    useFactory: startupServiceFactory,
    deps: [NDataSourceService],
    multi: true
  },
  NAuthGuardService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY
//CORE_REFERENCE_PUSH_TO_PRO_ARRAY-dataService
dataService,

];

/**
* Routes available for bApp
*/

// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
export const appRoutes = [{path: 'dashboard', component: dashboardComponent,
children: [{path: 'search', component: searchComponent,
children: []},{path: 'details', component: detailsComponent,
children: []},{path: 'details2', component: details2Component}]},{path: 'r2', component: r2Component,
children: []},{path: 'rough', component: roughComponent},{path: 'r3', component: r3Component},{path: '', redirectTo: '/dashboard/search', pathMatch: 'full'},{path: '**', component: PageNotFoundComponent}]
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END
