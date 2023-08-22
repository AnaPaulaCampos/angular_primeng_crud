import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivrosComponent } from './listar_livros/listarLivros.component';

const routes: Routes = [
  { path: 'livros', component: LivrosComponent },
  {
    path: 'crud',
    loadChildren: () =>
      import('./crudlivros/crudlivros.module').then((m) => m.CrudlivrosModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
