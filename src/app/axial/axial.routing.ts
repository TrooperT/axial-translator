import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as Components from '@ax/axial/components';

const axialRoutes: Routes = [
  { path: '', component: Components.SearchComponent },
  { path: 'related/:glyph', component: Components.RelatedComponent },
  { path: 'translate', component: Components.TranslatorComponent },
  { path: 'print', component: Components.PrintableComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(axialRoutes)
  ],
  exports: [RouterModule]
})
export class AxialRoutingModule { }
