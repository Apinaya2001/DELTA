import { Routes } from '@angular/router';
import {LayoutComponent} from "./pages/layout/layout.component";
import {HomeComponent} from "./pages/home/home.component";
import {TeamComponent} from "./pages/team/team.component";
import {AboutComponent} from "./pages/about/about.component";
import {BlogComponent} from "./pages/blog/blog.component";
import {CareerComponent} from "./pages/career/career.component";
import {ServiceComponent} from "./pages/service/service.component";
import {TestimonialsComponent} from "./pages/testimonials/testimonials.component";

export const routes: Routes = [
  {
    path:"",component:LayoutComponent,children:[
      {path:"",component:HomeComponent},
      {path:"team",component:TeamComponent},
      {path:"about",component:AboutComponent},
      {path:"blog",component:BlogComponent},
      {path:"career",component:CareerComponent},
      {path:"service",component:ServiceComponent},
      {path:"testimonials",component:TestimonialsComponent},
    ]
  }
];
