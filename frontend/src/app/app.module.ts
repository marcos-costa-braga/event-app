// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { PostComponent } from './components/post/post.component';
import { EventComponent } from './components/event/event.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { ListEventsComponent } from './components/list-events/list-events.component';
import { ListPostsComponent } from './components/list-posts/list-posts.component';
import { AddEventComponent } from './components/add-event/add-event.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { FootBarComponent } from './components/foot-bar/foot-bar.component';
import { VoucherComponent } from './components/voucher/voucher.component';
import { SupportComponent } from './components/support/support.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ScrollingModule } from '@angular/cdk/scrolling';

// Services
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopBarComponent,
    LogInComponent,
    EventDetailsComponent,
    PostDetailsComponent,
    EventComponent,
    PostComponent,
    FootBarComponent,
    SupportComponent,
    ListUsersComponent,
    ListEventsComponent,
    ListPostsComponent,
    VoucherComponent,
    AddEventComponent,
    AddPostComponent,
    DashboardComponent,
    LoadingComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatCarouselModule.forRoot(),
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatListModule,
    MatGridListModule,
    HttpClientModule,
    MatTableModule,
    MatProgressSpinnerModule,
    ScrollingModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
