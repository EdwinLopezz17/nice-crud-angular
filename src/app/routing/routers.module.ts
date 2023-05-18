import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {TablePlayersComponent} from "../components/table.players/table.players.component";
import {AddUserComponent} from "../components/add.user/add.user.component";


const routes: Routes = [

  {path: '', component:TablePlayersComponent},
  {path:'addplayer', component: AddUserComponent}


];
@NgModule({
  declarations: [

  ],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports:[
    RouterModule
  ]
})
export class RoutersModule { }
