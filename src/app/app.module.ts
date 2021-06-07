import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { ShellComponent } from './shell/shell.component';
import { LoginComponent } from './login/login.component';

import { UserService } from 'src/services/user.service';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  /*
  { path: ':gamertag', redirectTo: 'clips/:gamertag', pathMatch: 'full' },
  { path: 'clips/:gamertag', component: ClipsComponent },
  { path:'screenshots/:gamertag', component: ScreenshotsComponent }
  */
];

@NgModule({
  declarations: [
    ShellComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,

    RouterModule.forRoot(routes)
  ],
  providers: [
    UserService
  ],
  bootstrap: [ ShellComponent ]
})
export class AppModule { }
