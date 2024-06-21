import { Routes } from '@angular/router';
import {LayoutComponent} from "./pages/layout/layout.component";
import {HomeComponent} from "./pages/home/home.component";
import {AboutComponent} from "./pages/about/about.component";
import {BlogComponent} from "./pages/blog/blog.component";
import {CareerComponent} from "./pages/career/career.component";
import {ServiceComponent} from "./pages/service/service.component";
import {TestimonialsComponent} from "./pages/testimonials/testimonials.component";
import {PrivacyPolicyComponent} from "./pages/privacy-policy/privacy-policy.component";
import {TermsComponent} from "./pages/terms/terms.component";

export const routes: Routes = [
  {
    path:"",component:LayoutComponent,children:[
      {path:"",component:HomeComponent},
      {path:"about",component:AboutComponent},
      {path:"blog",component:BlogComponent},
      {path:"career",component:CareerComponent},
      {path:"service",component:ServiceComponent},
      {path:"testimonials",component:TestimonialsComponent},
      {path:"privacy-policy",component:PrivacyPolicyComponent },
      {path:"terms",component:TermsComponent },
      {path:"**",redirectTo:""}
    ]
  }
];
