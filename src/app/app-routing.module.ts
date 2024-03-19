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
import { FoodDetailComponent } from './products/food-details/food-detail.component';
import { OtherProductDetailComponent } from './products/other-product-details/other-product-detail.component';
import { FoodProductListComponent } from './food-product-list/food-product-list.component';
import { AddFoodProductComponent } from './food-product-list/add-food-product/add-food-product.component';
import { OrderComponent } from './order/order.component';
import { SuccessfulOrderComponent } from './successful-order/successful-order.component';
import { EditProductComponent } from './prod-list/edit-product/edit-product/edit-product.component';
import { EditFoodProductComponent } from './food-product-list/edit-food-product/edit-food-product.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "dog-food", component: DogFoodComponent},
  {path: "dog-product", component: DogOtherProductComponent},
  {path: "cat-food", component: CatFoodComponent},
  {path: "cat-product", component: CatOtherProductComponent},
  {path: "dog-food/:id", component: FoodDetailComponent},
  {path: "cat-food/:id", component: FoodDetailComponent},
  {path: "dog-product/:id", component: OtherProductDetailComponent},
  {path: "cat-product/:id", component: OtherProductDetailComponent},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "cart", component: CartComponent},
  {path: "order", component: OrderComponent},
  {path: "successfulOrder", component: SuccessfulOrderComponent},
  {path: "prod-list", component: ProdListComponent},
  {path: "edit-product/:id", component: EditProductComponent},
  {path: "edit-food-product/:id", component: EditFoodProductComponent},
  {path: "edit-product/:id", component: EditProductComponent},
  {path: "add-product", component: AddProductComponent},
  {path: "food-prod-list", component: FoodProductListComponent},
  {path: "add-food-product", component: AddFoodProductComponent},
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
