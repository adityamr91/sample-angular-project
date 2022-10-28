import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SamsungComponent } from './samsung/samsung.component';
import { AppleComponent } from './apple/apple.component';
import { MiComponent } from './mi/mi.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { AuthGuardService } from './auth-guard.service';
const routes: Routes = [
  { path: 'samsung', component: SamsungComponent },
  { path: 'apple', canActivate: [AuthGuardService], component: AppleComponent  },
  { path: 'mi', component: MiComponent },
  { path: 'accessories', component: AccessoriesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
