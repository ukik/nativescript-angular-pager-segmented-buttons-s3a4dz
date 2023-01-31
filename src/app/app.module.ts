import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from '@nativescript/angular';
import { LetModule } from '@rx-angular/template/let';
import { PagerModule } from '@nativescript-community/ui-pager/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsComponent } from './item/items.component';
import { ItemDetailComponent } from './item/item-detail.component';
import { ColorTransitionPipe } from './item/color-transition.pipe';

@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, AppRoutingModule, LetModule, PagerModule],
  declarations: [
    AppComponent,
    ItemsComponent,
    ItemDetailComponent,
    ColorTransitionPipe,
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
