import {Component, OnInit, ViewChild} from '@angular/core';
import {Player} from "../../models/player";
import {MatTableDataSource} from "@angular/material/table";
import {PlayersService} from "../../services/players.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-table.players',
  templateUrl: './table.players.component.html',
  styleUrls: ['./table.players.component.css']
})
export class TablePlayersComponent implements OnInit{

  listPlayers:Player[]=[];
  displayedColumns: string[] = [
    "id", "name", "lastName", "dorsal", "club", "country",
    "birthdate", "sex", "actions",
  ];
  dataSource !: MatTableDataSource<Player>;

  constructor(private _playerService: PlayersService,
              private _snakbar:MatSnackBar) {
  }

  ngOnInit(): void {
    this.loadPlayers();
  }

  loadPlayers(){
    this._playerService.getAllPlayers().subscribe({
      next:(val:any)=>{
        this.listPlayers = val;

        this.dataSource = new MatTableDataSource<any>(this.listPlayers);

        setTimeout(() => {
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }, 0);
      }
    });

  }

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteUser(id:number){
    this._playerService.deletePlayerById(id).subscribe(()=>{

      this._snakbar.open('Player deleted successfully','',{
        duration: 1500,
      })
      this.loadPlayers();
    },
      (error) => {
        console.error('Error deleting player:', error);
      }
    );
  }



}
