import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductComponent } from './product/product.component';


const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'product', component: ProductComponent },
  { path: 'sidebar', component: SidebarComponent},
  { path: '',redirectTo: '/homepage',pathMatch: 'full' ,}
  // { path: '**', component: ErrorPageComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
