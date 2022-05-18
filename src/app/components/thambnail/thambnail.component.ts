import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-thambnail',
  templateUrl: './thambnail.component.html',
  styleUrls: ['./thambnail.component.css']
})
export class ThambnailComponent implements OnInit {


  @Output()
  public imageClicked = new EventEmitter<string>();

  @Input()
  public imgSrc!: string;
  

  public emitEvent(){
    this.imageClicked.emit(this.imgSrc);
  }



  constructor() { }

  ngOnInit(): void {
  }

}
