import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsRoutingModule } from './clients-routing.module';
import { LandingComponent } from './landing/landing.component';
import { DetailsComponent } from './details/details.component';
import { OverviewComponent } from './overview/overview.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { IntegrationDetailsComponent } from './integration-details/integration-details.component';
import { AppraisersComponent } from './appraisers/appraisers.component';
import { PaymentsComponent } from './payments/payments.component';
import { ClientsEmployeeComponent } from './clients-employee/clients-employee.component';
import { SharedModule } from '../shared/shared.module';
import { ListComponent } from './list/list.component';
import { ClientCalendarComponent } from './client-calendar/client-calendar.component';
import { EditAppraisersComponent } from './appraisers/edit-appraisers/edit-appraisers.component';
import { EditPaymentsComponent } from './payments/edit-payments/edit-payments.component';
import { AddFormComponent } from './clients-employee/add-form/add-form.component';
import { ProductManagementComponent } from './product-management/product-management.component';
import { EditProductsComponent } from './product-management/edit-products/edit-products.component';
import { GeneralInstructionsComponent } from './general-instructions/general-instructions.component';
import { UpdateInstructionsComponent } from './general-instructions/update-instructions/update-instructions.component';
import { NotesRemainderComponent } from './notes-remainder/notes-remainder.component';
import { AddNotesRemindersComponent } from './notes-remainder/add-notes-reminders/add-notes-reminders.component';
import { ManageNotificationsComponent } from './manage-notifications/manage-notifications.component';
import { EditNotificationsComponent } from './manage-notifications/edit-notifications/edit-notifications.component';
import { CreateClientComponent } from './create-client/create-client.component';


@NgModule({
  declarations: [
    LandingComponent,
    DetailsComponent,
    OverviewComponent,
    ClientDetailsComponent,
    IntegrationDetailsComponent,
    AppraisersComponent,
    PaymentsComponent,
    ClientsEmployeeComponent,
    ListComponent,
    ClientCalendarComponent,
    EditAppraisersComponent,
    EditPaymentsComponent,
    AddFormComponent,
    ProductManagementComponent,
    EditProductsComponent,
    GeneralInstructionsComponent,
    UpdateInstructionsComponent,
    NotesRemainderComponent,
    AddNotesRemindersComponent,
    ManageNotificationsComponent,
    EditNotificationsComponent,
    CreateClientComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ClientsRoutingModule
  ]
})
export class ClientsModule { }
