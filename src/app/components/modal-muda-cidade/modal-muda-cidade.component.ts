import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
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

  constructor(
    private hgBrasil: HgbrasilService,
    public dialogRef: MatDialogRef<ModalMudaCidadeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  ngOnInit(): void {
  }

  fechaModal(){
    this.dialogRef.close();
  }

  buscar(){
    console.log('pesquisar')
    this.hgBrasil.getWoeid(this.cidade.value).then(data => {
      console.log(data)
    }
    ).catch(err => {
      console.log(err)
    }
    );
  }

}
