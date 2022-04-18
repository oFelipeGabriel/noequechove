import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import CityWoeid from 'src/app/models/cityWoeid.model';
import { HgbrasilService } from 'src/app/services/hgbrasil.service';

export interface DialogData {
  cidade: string;
}
@Component({
  selector: 'app-modal-muda-cidade',
  templateUrl: './modal-muda-cidade.component.html',
  styleUrls: ['./modal-muda-cidade.component.scss']
})
export class ModalMudaCidadeComponent implements OnInit {
  cidade: FormControl = new FormControl();
  result?: CityWoeid;

  status: string = 'inicial';
  STATUS = {
    SUCCESS: 'success',
    ERROR: 'error',
    LOADING: 'loading'
  }

  constructor(
    private hgBrasil: HgbrasilService,
    public dialogRef: MatDialogRef<ModalMudaCidadeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  ngOnInit(): void {
  }

  fechaModal(){
    this.dialogRef.close({data: this.result});
    this.result = undefined;
  }

  buscar(){
    this.hgBrasil.getWoeid(this.cidade.value).then(data => {
      if(data.error){
        this.status = this.STATUS.ERROR;
      }
      this.result = new CityWoeid(data);
    }
    ).catch(err => {
      console.log(err)
    }
    );
  }

}
