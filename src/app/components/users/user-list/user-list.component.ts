import {Component, OnInit} from '@angular/core';
import {Iuser} from "../../../iuser";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  pageTitle: string = "User List";
  imageSize: number = 100;
  showImage: boolean = false;
  showMenu: boolean = true;
  textColorR: number = 255;
  textColorG: number = 255;
  textColorB: number = 255;
  searchInput: string = '';
  users: Iuser[] = [
    {
      name: "Bui Thanh Tung",
      email: "buithanhtung100496@gmail.com",
      age: 25,
      address: "Ha Noi",
      image: "https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
    },
    {
      name: "Nguyen Dac Chien",
      email: "nguyendacchien@gmail.com",
      age: 20,
      address: "Phu Tho",
      image: "https://cdn.iconscout.com/icon/free/png-512/boy-avatar-4-1129037.png"
    },
    {
      name: "Tran Ngoc Anh",
      email: "tranngocanh@gmail.com",
      age: 22,
      address: "Ha Noi",
      image: "https://cdn.iconscout.com/icon/free/png-256/avatar-373-456325.png"
    },
    {
      name: "Dư Thanh Hoang",
      email: "duthanhhoang@gmail.com",
      age: 18,
      address: "Ha Nam",
    }]

  constructor() {
  }

  ngOnInit(): void {
  }

  searchUser(event: any) {
    let keyword = event.target.value;
    console.log(keyword);

  }

  deleteUser(index: number) {
    if (confirm('Are you sure?')) {
      this.users.splice(index,1);
    }
  }
  showHideImage() {
    this.showImage = !this.showImage;
  }

  showHideMenu() {
    this.showMenu = !this.showMenu;
  }

  changeImageSize(value: any) {
    this.imageSize = value;
  }

  getColor() {
    let color = `rgb(${this.textColorR}, ${this.textColorG}, ${this.textColorB})`;
    // console.log(color);
    return color;
  }

  // changeTextColorR(colorR: any) {
  //   this.textColorR = colorR;
  // }
  //
  // changeTextColorG(colorG: any) {
  //   this.textColorG = colorG;
  // }
  //
  // changeTextColorB(colorB: any) {
  //   this.textColorB = colorB;
  // }


}
