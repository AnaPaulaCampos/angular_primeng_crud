import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { CrudlivrosRoutingModule } from './crudlivros-routing.module';
import { CrudlivrosComponent } from './crudlivros.component';


import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {ToastModule} from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import {ProgressBarModule} from 'primeng/progressbar';
import {FileUploadModule} from 'primeng/fileupload';
import {ToolbarModule} from 'primeng/toolbar';
import {RatingModule} from 'primeng/rating';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputNumberModule} from 'primeng/inputnumber';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CrudlivrosService } from './crudlivros.service';











@NgModule({
  declarations: [
    CrudlivrosComponent,
  ],
  imports: [

    CommonModule,
    CrudlivrosRoutingModule,
    HttpClientModule,

    TableModule,
    CalendarModule,
		SliderModule,
    DialogModule,
    ButtonModule,
    MultiSelectModule,
    ContextMenuModule,
    DropdownModule,
    ToastModule,
    InputTextModule,
    ProgressBarModule,
    FileUploadModule,
    ToolbarModule,
    RatingModule,
    RadioButtonModule,
    FormsModule,
    InputNumberModule,
    ConfirmDialogModule,

    ConfirmDialogModule,
    InputTextareaModule

  ],
  providers: [CrudlivrosService, MessageService, ConfirmationService]

})
export class CrudlivrosModule { }
