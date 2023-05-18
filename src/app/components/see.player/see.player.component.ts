import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PlayersService} from "../../services/players.service";
import {Player} from "../../models/player";

@Component({
  selector: 'app-see.player',
  templateUrl: './see.player.component.html',
  styleUrls: ['./see.player.component.css']
})
export class SeePlayerComponent implements OnInit{

  playerId:number=0;
  player !:Player;
  constructor(private _route:ActivatedRoute,
              private _servicePlayer:PlayersService) {
    this._route.params.subscribe(param =>{
      this.playerId = param['id'];
    })
  }

  ngOnInit(): void {
    this.getPlayer();
  }

  getPlayer(){
    this._servicePlayer.getPlayerById(this.playerId).subscribe({
      next:(val:Player)=>{
        this.player = val;
      },
      error:(err:any)=>{
        console.log(err);
      }
    })
  }

}
