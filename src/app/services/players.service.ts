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

  getPlayerById(id:number){
    return this._http.get<Player>(`http://localhost:3000/players/${id}`)
  }

  deletePlayerById(id:number){
    return this._http.delete<Player>(`http://localhost:3000/players/${id}`)
  }

  addPlayer(data:Player){
    return this._http.post('http://localhost:3000/players',data);
  }

  updatePlayer(id:number, data:Player):Observable<any>{
    return this._http.put(`http://localhost:3000/players/${id}`,data);
  }


}
