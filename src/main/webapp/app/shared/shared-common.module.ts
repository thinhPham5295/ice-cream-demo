import { NgModule } from '@angular/core';

import { IceCreamSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [IceCreamSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [IceCreamSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class IceCreamSharedCommonModule {}
