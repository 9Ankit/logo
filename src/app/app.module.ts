import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { appDeclarations, appBootstrap, appProviders, appEntryComponents } from './config/declarations';
import { appImportModules } from './config/import-modules';
import { AgmCoreModule } from '@agm/core';
import { LayoutModule } from '@angular/cdk/layout';
// import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
// import { dataService } from '../../services/data.service';
import { MatTableModule } from '@angular/material';


@NgModule({
  declarations: [...appDeclarations],
  imports: [...appImportModules,
    LayoutModule,
    // HttpModule,
    HttpClientModule,
    MatTableModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCSTnVwijjv0CFRA4MEeS-H6PAQc87LEoU',
      libraries: ['places']
    })
  ],
  providers: [...appProviders],
  entryComponents: [...appEntryComponents],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [...appBootstrap]
})
export class AppModule { }
