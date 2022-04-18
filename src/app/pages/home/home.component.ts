import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import axios from 'axios';
import { ModalMudaCidadeComponent } from 'src/app/components/modal-muda-cidade/modal-muda-cidade.component';
import City from 'src/app/models/city.model';
import DayModel from 'src/app/models/day.model';
import { HgbrasilService } from 'src/app/services/hgbrasil.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isLoading: boolean = true;
  dias: any[] = []
  city: City = new City();
  nomeCidade: string = '';


  constructor(
    private hgBrasil: HgbrasilService,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.hgBrasil.buscaPrevisao().then(data => {
      if(data?.results?.forecast?.length > 0) {
        data.results.forecast.map((dia: DayModel) => {
          this.dias.push(new DayModel(dia));
        });
        this.city = new City(data.results)
      }
      this.isLoading = false
    }).catch(err => {
      this.isLoading = false
      console.log(err);
    }
    );
  }

  buscaPorWoeid(woeid: number){
    this.hgBrasil.getByWoeid(woeid).then(data => {
      console.log('buscou', data);
      this.city = new City(data.results);
      this.dias = [];
      data.results.forecast.map((dia: DayModel) => {
        this.dias.push(new DayModel(dia));
      });
    }).catch(err => {
      console.log(err);
    });
  }

  abreModal(status: boolean){
    const dialogRef = this.dialog.open(ModalMudaCidadeComponent, {
      width: '90%',
      data: {cidade: this.nomeCidade}
      });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.nomeCidade = result;
      if(result.data?.woeid) {
        this.buscaPorWoeid(result.data.woeid);
      }
    });
  }

}
