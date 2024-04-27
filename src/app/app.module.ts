import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CaesarCipherComponent } from './caesar-cipher/caesar-cipher.component';
import { MonoalphabeticCipherComponent } from './monoalphabetic-cipher/monoalphabetic-cipher.component';
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule } from '@angular/forms'; //

const routes: Routes = [
  { path: 'main-page', component: MainPageComponent },
  { path: 'caesar-cipher', component: CaesarCipherComponent },
  { path: 'monoalphabetic-cipher', component: MonoalphabeticCipherComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    CaesarCipherComponent,
    MonoalphabeticCipherComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule 
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
