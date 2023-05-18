import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {PlayersService} from "../../services/players.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add.user',
  templateUrl: './add.user.component.html',
  styleUrls: ['./add.user.component.css']
})
export class AddUserComponent implements OnInit{

  constructor(private _formB:FormBuilder,
              private _router:Router,
              private _palyerService:PlayersService,) {
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
  }

  addPlayer(){
    console.log(this.form);
    this._palyerService.addPlayer(this.form.value).subscribe({
      next:(val:any)=>{
        alert("Player added successfully");
        this._router.navigate(['/']);
      },
      error:(err:any)=>{
        console.log(err);
      }
    })
  }

}
