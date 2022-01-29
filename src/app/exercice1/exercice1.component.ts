import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-exercice1",
  templateUrl: "./exercice1.component.html",
  styleUrls: ["./exercice1.component.css"],
})
export class Exercice1Component implements OnInit {
  public sayHello: string = "Hello";
  public color: string = "green";
  public helloArr: string[] = [
    "Hello",
    "Bonjour",
    "Hola",
    "Ciao",
    "こんにちは",
  ];
  public hello: string = "hello";

  constructor() {}

  changeLanguage() {
    this.hello =
      this.helloArr[Math.floor(Math.random() * this.helloArr.length)];
  }

  ngOnInit(): void {}
}
