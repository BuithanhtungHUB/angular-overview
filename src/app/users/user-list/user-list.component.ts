import {Component, OnInit} from '@angular/core';
import {Iuser} from "../../iuser";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  imageSize: number = 150;
  textColor: string = "#000000";
  textColorR: number = 0;
  textColorG: number = 0;
  textColorB: number = 0;
  users: Iuser[] = [{
    name: "tung",
    age: 25,
    address: "Ha Noi",
    image: "https://cdn.iconscout.com/icon/free/png-512/boy-avatar-4-1129037.png"

  },
    {
      name: "chien",
      age: 20,
      address: "Ha Nam",
      image: "https://cdn.iconscout.com/icon/free/png-256/avatar-373-456325.png"
    }]

  constructor() {
  }

  ngOnInit(): void {
  }

  changeImageSize(value: any) {
    this.imageSize = value;
  }

  changeTextColorR(colorR: any) {
    this.textColorR = colorR;
  }

  changeTextColorG(colorG: any) {
    this.textColorG = colorG;
  }

  changeTextColorB(colorB: any) {
    this.textColorB = colorB;
  }

  getColor() {
    let color = `rgb(${this.textColorR}, ${this.textColorG}, ${this.textColorB})`;
    console.log(color);
    return color;
  }

  // changeTextColor(colorR:any, colorG:any, colorB:any){
  //   this.textColorR = colorR;
  //   this.textColorG = colorG;
  //   this.textColorB = colorB;
  // }

}
