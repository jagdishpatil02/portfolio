import { CommonModule } from '@angular/common';
import { ConvertDataComponent } from './convert-data.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: ConvertDataComponent,
  },
  // Add other top-level routes here
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ConvertDataModule {}
