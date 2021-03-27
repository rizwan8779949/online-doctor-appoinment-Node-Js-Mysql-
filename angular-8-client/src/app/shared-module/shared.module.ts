import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiService } from './Services/api/api.service';
import { LoginService } from './Services/login/login.service';
import { UtilsService } from './Services/utils/utils.service';
import { HttpInterceptorService } from './Services/Interceptor/http-interceptor.service';
import { AppGoogleApiDirective } from './Directive/app-google-api.directive';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import {
  MatFormFieldControl,
  MatFormFieldModule,
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { DatePickerService } from './Services/datepicker/date-picker.service';
import { HeaderPartComponent } from './Components/header-part/header-part.component';
import {
  MatCommonModule,
  MatNativeDateModule,
  MatOptionModule,
} from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FooterComponent } from './Components/footer/footer.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SnackBarService } from './Services/snackBar/snack-bar.service';
import { LogoutModalComponent } from './Components/logout-modal/logout-modal.component';
import { MatSelectModule } from '@angular/material/select';
import { DoctorService } from './Services/doctor/doctor.service';
@NgModule({
  declarations: [HeaderPartComponent, FooterComponent, LogoutModalComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    MatCommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatOptionModule,
    MatSelectModule,
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    HeaderPartComponent,
    MatCommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FooterComponent,
    MatTooltipModule,
    MatSnackBarModule,
    MatOptionModule,
    MatSelectModule,
  ],
  providers: [
    ApiService,
    LoginService,
    UtilsService,
    DatePickerService,
    SnackBarService,
    DoctorService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
    },
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'fill' },
    },
  ],
  entryComponents: [LogoutModalComponent],
})
export class SharedModule {}
