import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BannerComponent } from './_components/banner/banner.component';
import { ContentComponent } from './_components/content/content.component';
import { ServicesComponent } from './_components/services/services.component';
import { TestimonialComponent } from './_components/testimonial/testimonial.component';
import { ContactComponent } from './_components/contact/contact.component';
import { CtaComponent } from './_components/cta/cta.component';
import { NavigationComponent } from '../../_components/navigation/navigation.component';
import { FaqComponent } from './_components/faq/faq.component';
import { FooterComponent } from 'src/app/_components/footer/footer.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    ContentComponent,
    ServicesComponent,
    TestimonialComponent,
    ContactComponent,
    CtaComponent,
    BannerComponent,
    CommonModule,
    HomeRoutingModule,
    FooterComponent,
    FaqComponent,
    NavigationComponent,
  ],
})
export class HomeModule {}
