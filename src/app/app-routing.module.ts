import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CatFoodComponent } from './products/cat/cat-food/cat-food.component';
import { CatOtherProductComponent } from './products/cat/cat-other-product/cat-other-product.component';
import { DogFoodComponent } from './products/dog/dog-food/dog-food.component';
import { DogOtherProductComponent } from './products/dog/dog-other-product/dog-other-product.component';
import { RegisterComponent } from './register/register.component';
import { ProdListComponent } from './prod-list/prod-list.component';
import { AddProductComponent } from './prod-list/add-product/add-product.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "dog-food", component: DogFoodComponent},
  {path: "dog-product", component: DogOtherProductComponent},
  {path: "cat-food", component: CatFoodComponent},
  {path: "cat-product", component: CatOtherProductComponent},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "cart", component: CartComponent},
  {path: "prod-list", component: ProdListComponent},
  {path: "add-product", component: AddProductComponent},
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
