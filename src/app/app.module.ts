import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";

import { HomeModule } from './home/home.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavbarModule } from './navbar/navbar.module';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { ProdListModule } from './prod-list/prod-list.module';
import { FoodDetailModule } from './products/food-details/food-detail.module';
import { OtherProductDetailModule } from './products/other-product-details/other-product-detail.module';
import { FoodProductListModule } from './food-product-list/food-product-list.module';
import { ProfileModule } from './profile/profile.module';
import { OrderListModule } from './order-list/order-list.module';
import { RatingListModule } from './rating-list/rating-list.module';
import { FavouritesModule } from './favourites/favourites.module';
import { SaleModule } from './sale/sale.module';



@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,

    HomeModule,
    NavbarModule,
    LoginModule,
    RegisterModule,
    ProdListModule,
    FoodDetailModule,
    OtherProductDetailModule,
    FoodProductListModule,
    ProfileModule,
    OrderListModule,
    FavouritesModule,
    RatingListModule,
    SaleModule,
    
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
