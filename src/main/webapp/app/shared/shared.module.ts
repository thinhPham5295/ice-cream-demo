import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IceCreamSharedCommonModule, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [IceCreamSharedCommonModule],
  declarations: [HasAnyAuthorityDirective],
  exports: [IceCreamSharedCommonModule, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IceCreamSharedModule {
  static forRoot() {
    return {
      ngModule: IceCreamSharedModule
    };
  }
}
