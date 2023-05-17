import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Player} from "../models/player";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor(private _http:HttpClient) { }

  getAllPlayers():Observable<Player>{
    return this._http.get<Player>('http://localhost:3000/players');
  }

  deletePlayerById(id:number){
    return this._http.delete(`http://localhost:3000/players/${id}`)
  }
}
