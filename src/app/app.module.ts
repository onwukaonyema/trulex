import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './_components/navigation/navigation.component';
import { FooterComponent } from './_components/footer/footer.component';
import { PreloaderComponent } from './_components/preloader/preloader.component';

import { HomeModule } from './pages/home/home.module';

@NgModule({
  declarations: [AppComponent, PreloaderComponent],
  imports: [BrowserModule, HomeModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
