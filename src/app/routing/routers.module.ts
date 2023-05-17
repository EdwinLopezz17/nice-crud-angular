import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {TablePlayersComponent} from "../components/table.players/table.players.component";


const routes: Routes = [
  {path: '', component:TablePlayersComponent},


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
