import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { ShellComponent } from './shell/shell.component';

const routes: Routes = [
  /*
  { path: ':gamertag', redirectTo: 'clips/:gamertag', pathMatch: 'full' },
  { path: 'clips/:gamertag', component: ClipsComponent },
  { path:'screenshots/:gamertag', component: ScreenshotsComponent }
  */
];

@NgModule({
  declarations: [
    ShellComponent
  ],
  imports: [
    BrowserModule,

    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [ ShellComponent ]
})
export class AppModule { }
