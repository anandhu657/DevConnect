import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { AngularFireModule } from '@angular/fire/compat';
import { ToastrModule } from 'ngx-toastr';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';

import { HambergerMenuDirective } from './shared/directives/hamberger-menu.directive';
import { FilterMenuDirective } from './shared/directives/filter-menu.directive';
import { DateToMinutesPipe } from './shared/pipes/date-to-minutes.pipe';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/user/navbar/navbar.component';
import { QuestionsComponent } from './components/user/questions/questions.component';
import { QuestionContainerComponent } from './components/user/questions/question-container/question-container.component';
import { BlogsComponent } from './components/user/blogs/blogs.component';
import { BlogContainerComponent } from './components/user/blogs/blog-container/blog-container.component';
import { HomeComponent } from './components/user/home/home.component';
import { AskQuestionComponent } from './components/user/ask-question/ask-question.component';
import { PostBlogComponent } from './components/user/post-blog/post-blog.component';
import { ChatComponent } from './components/user/chat/chat.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { AuthButtonComponent } from './components/user/auth-button/auth-button.component';
import { UserAuthComponent } from './components/user/user-auth/user-auth.component';
import { environment } from '../environments/environment';
import { ShareModalComponent } from './components/user/share-modal/share-modal.component';
import { QuestionDetailsComponent } from './components/user/question-details/question-details.component';
import { AnswerComponent } from './components/user/question-details/answer/answer.component';
import { QuestionRightSidebarComponent } from './components/user/question-details/question-right-sidebar/question-right-sidebar.component';
import { ReportReasonComponent } from './components/user/report-reason/report-reason.component';
import { BlogDetailsComponent } from './components/user/blog-details/blog-details.component';
import { BlogRightSidebarComponent } from './components/user/blog-details/blog-right-sidebar/blog-right-sidebar.component';
import { HttpInterceptorInterceptor } from './interceptor/http-interceptor.interceptor';
import { AdminlayoutComponent } from './components/admin/adminlayout/adminlayout.component';
import { AdminloginComponent } from './components/admin/adminlogin/adminlogin.component';
import { BlogReportDetailsComponent } from './components/admin/blog-report-details/blog-report-details.component';
import { BlogReportsComponent } from './components/admin/blog-reports/blog-reports.component';
import { ConformationDialogComponent } from './components/admin/conformation-dialog/conformation-dialog.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { QuestionReportDetailsComponent } from './components/admin/question-report-details/question-report-details.component';
import { QuestionReportsComponent } from './components/admin/question-reports/question-reports.component';
import { UserReportDetailsComponent } from './components/admin/user-report-details/user-report-details.component';
import { UserReportsComponent } from './components/admin/user-reports/user-reports.component';
import { MessagesComponent } from './components/user/chat/messages/messages.component';
import { MessageContainerComponent } from './components/user/chat/message-container/message-container.component';
import { DropDownDirective } from './shared/directives/drop-down.directive';
import { NotificationComponent } from './components/notification/notification.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HambergerMenuDirective,
    FilterMenuDirective,
    QuestionsComponent,
    QuestionContainerComponent,
    BlogsComponent,
    BlogContainerComponent,
    HomeComponent,
    AskQuestionComponent,
    PostBlogComponent,
    ChatComponent,
    ProfileComponent,
    AuthButtonComponent,
    UserAuthComponent,
    DateToMinutesPipe,
    ShareModalComponent,
    QuestionDetailsComponent,
    AnswerComponent,
    QuestionRightSidebarComponent,
    ReportReasonComponent,
    BlogDetailsComponent,
    BlogRightSidebarComponent,
    AdminlayoutComponent,
    AdminloginComponent,
    BlogReportDetailsComponent,
    BlogReportsComponent,
    ConformationDialogComponent,
    DashboardComponent,
    QuestionReportDetailsComponent,
    QuestionReportsComponent,
    UserReportDetailsComponent,
    UserReportsComponent,
    MessagesComponent,
    MessageContainerComponent,
    DropDownDirective,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    QuillModule.forRoot(),
    FontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
    ShareButtonsModule,
    ShareIconsModule,
    ToastrModule.forRoot(),
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    MatIconModule,
    MatChipsModule,
    MatMenuModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatTableModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
