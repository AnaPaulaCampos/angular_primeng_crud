import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudlivrosComponent } from './crudlivros.component';

const routes: Routes = [{ path: '', component: CrudlivrosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudlivrosRoutingModule { }
