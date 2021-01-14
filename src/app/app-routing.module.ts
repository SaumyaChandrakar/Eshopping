import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/Shared/header/header.component';
import { NavigationComponent } from './Components/Shared/navigation/navigation.component';
import { FooterComponent } from './Components/Shared/footer/footer.component';
import { ClothingComponent } from './Components/Categories/clothing/clothing.component';
import { AccessoriesComponent } from './Components/Categories/accessories/accessories.component';
import { ElectronicsComponent } from './Components/Categories/electronics/electronics.component';
import { ShoppingCartComponent } from './Components/shopping-cart/shopping-cart.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'Home', component: HomeComponent },{path:'App',component:AppComponent},{path:'Cart',component:ShoppingCartComponent},{path:'Electronics',component:ElectronicsComponent},
  {path:'Accessories',component:AccessoriesComponent},{path:'Clothing',component:ClothingComponent},{path:'Footer',component:FooterComponent},{path:'Navigation',component:NavigationComponent}
  ,{path:'Header',component:HeaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }