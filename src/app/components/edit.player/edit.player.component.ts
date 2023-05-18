import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {PlayersService} from "../../services/players.service";

@Component({
  selector: 'app-edit.player',
  templateUrl: './edit.player.component.html',
  styleUrls: ['./edit.player.component.css']
})
export class EditPlayerComponent implements OnInit{

  playerId:number=0;
  constructor(private _formB:FormBuilder,
              private _router:Router,
              private _routerAct:ActivatedRoute,
              private _palyerService:PlayersService,) {

    this._routerAct.params.subscribe(param =>{
      this.playerId = param['id'];
    })

    this.form = this._formB.group({
      name:'',
      lastName:'',
      dorsal:'',
      club:'',
      country:'',
      birthdate:'',
      sex:'',
    })

  }

  form:FormGroup;

  ngOnInit(): void {
    this._palyerService.getPlayerById(this.playerId).subscribe({
      next:(val:any) => {
        console.log(val);
        this.form = this._formB.group(val);
      }
    })
  }

  aditPlayer(){
    this._palyerService.updatePlayer(this.playerId,this.form.value).subscribe({
      next:(val:any)=>{
        alert("Player addited successfully");
        this._router.navigate(['/']);
      },
      error:(err:any)=>{
        console.log(err);
      }
    })
  }



}
