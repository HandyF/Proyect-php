import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent implements OnInit {

  listaCurso: string[]= ['Java','TypeScript','Php','C++','C#','Sql','JavaScript','NoSql'];
 
   habilitar: boolean = true;

  constructor() { }

   ngOnInit() {
  }

  setHabilitar(): void {

    this.habilitar = ( this.habilitar == true)? false: true;
  }

}
