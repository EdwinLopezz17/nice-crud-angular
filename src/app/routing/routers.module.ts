import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {TablePlayersComponent} from "../components/table.players/table.players.component";
import {AddUserComponent} from "../components/add.user/add.user.component";
import {SeePlayerComponent} from "../components/see.player/see.player.component";
import {EditPlayerComponent} from "../components/edit.player/edit.player.component";


const routes: Routes = [

  {path: '', component:TablePlayersComponent},
  {path: 'addplayer', component: AddUserComponent},
  {path: 'seeplayer/:id', component:SeePlayerComponent},
  {path: 'editplayer/:id', component:EditPlayerComponent},


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
