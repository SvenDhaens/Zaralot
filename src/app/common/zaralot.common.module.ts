import {NgModule} from '@angular/core';
import {FooterComponent} from './components/footer/footer.component';
import {NavComponent} from './components/nav/nav.component';
import {NavItemComponent} from './components/nav-item/nav-item.component';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [FooterComponent, NavComponent, NavItemComponent, HeaderComponent],
  exports: [FooterComponent, NavComponent]
})
export class ZaralotCommonModule {
}
