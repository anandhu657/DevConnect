import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionsComponent } from './components/user/questions/questions.component';
import { BlogsComponent } from './components/user/blogs/blogs.component';
import { HomeComponent } from './components/user/home/home.component';
import { AskQuestionComponent } from './components/user/ask-question/ask-question.component';
import { PostBlogComponent } from './components/user/post-blog/post-blog.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { UserAuthComponent } from './components/user/user-auth/user-auth.component';
import { AccessGuard } from './shared/guards/access.guard';
import { AdminAccessGuard } from './shared/guards/admin-access.guard';
import { AdminAuthGuard } from './shared/guards/admin-auth.guard';
import { AuthGuard } from './shared/guards/auth.guard';
import { NavbarComponent } from './components/user/navbar/navbar.component';
import { QuestionDetailsComponent } from './components/user/question-details/question-details.component';
import { BlogDetailsComponent } from './components/user/blog-details/blog-details.component';
import { AdminlayoutComponent } from './components/admin/adminlayout/adminlayout.component';
import { AdminloginComponent } from './components/admin/adminlogin/adminlogin.component';
import { BlogReportDetailsComponent } from './components/admin/blog-report-details/blog-report-details.component';
import { BlogReportsComponent } from './components/admin/blog-reports/blog-reports.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { QuestionReportDetailsComponent } from './components/admin/question-report-details/question-report-details.component';
import { QuestionReportsComponent } from './components/admin/question-reports/question-reports.component';
import { UserReportDetailsComponent } from './components/admin/user-report-details/user-report-details.component';
import { UserReportsComponent } from './components/admin/user-reports/user-reports.component';
import { ChatComponent } from './components/user/chat/chat.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: "login", component: UserAuthComponent, canActivate: [AuthGuard]
  },
  {
    path: '',
    component: NavbarComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
        canActivate: [AccessGuard]
      },
      {
        path: 'questions',
        component: QuestionsComponent,
        canActivate: [AccessGuard]
      },
      {
        path: 'question/:id',
        component: QuestionDetailsComponent,
        canActivate: [AccessGuard]
      },
      {
        path: 'blogs',
        component: BlogsComponent,
        canActivate: [AccessGuard]
      },
      {
        path: 'blogs/:id',
        component: BlogDetailsComponent,
        canActivate: [AccessGuard]
      },
      {
        path: 'blog/post',
        component: PostBlogComponent,
        canActivate: [AccessGuard]
      },
      {
        path: 'message',
        component: ChatComponent,
        canActivate: [AccessGuard]
      },
      // {
      //   path: 'notification',
      //   component: NotificationsComponent,
      //   canActivate: [AccessGuard]
      // },
      {
        path: 'ask-question',
        component: AskQuestionComponent,
        canActivate: [AccessGuard]
      },
      // {
      //   path: 'profile/:user',
      //   component: ProfileComponent,
      //   canActivate: [AccessGuard],
      //   children: [
      //     {
      //       path: 'editProfile',
      //       component: EditProfileComponent
      //     }
      //   ]
      // },
    ]
  },
  {
    path: 'adminlogin',
    component: AdminloginComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'admin',
    component: AdminlayoutComponent,
    canActivate:[AdminAccessGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AdminAccessGuard]
      },
      {
        path: 'report/user',
        component: UserReportsComponent,
        canActivate: [AdminAccessGuard]
      },
      {
        path: 'report/user/:id',
        component: UserReportDetailsComponent,
        canActivate: [AdminAccessGuard]
      },
      {
        path: 'report/question',
        component: QuestionReportsComponent,
        canActivate: [AdminAccessGuard]
      },
      {
        path: 'report/question/:id',
        component: QuestionReportDetailsComponent,
        canActivate: [AdminAccessGuard]
      },
      {
        path: 'report/blog',
        component: BlogReportsComponent,
        canActivate: [AdminAccessGuard]
      },
      {
        path: 'report/blog/:id',
        component: BlogReportDetailsComponent,
        canActivate: [AdminAccessGuard]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
