import { Component, ViewChild } from '@angular/core';
import { NgxWheelComponent, TextAlignment, TextOrientation } from 'ngx-wheel'
import Swal from 'sweetalert2'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  @ViewChild(NgxWheelComponent, { static: false }) wheel;

  seed = [...Array(30).keys()]
  idToLandOn: any;
  items=[{
    fillStyle: "#DCDCDC", id: 0, textFillStyle: "white", textFontSize: "16",
  },
  {fillStyle: "#000000", id: 1, textFillStyle: "white", textFontSize: "16"},
  {fillStyle: "#000000", id: 2, textFillStyle: "white", textFontSize: "16"},
  {fillStyle: "#FF0000", id: 2, textFillStyle: "white", textFontSize: "16"},
  {fillStyle: '#000000', id: 4, textFillStyle: "white", textFontSize: "16"},
  {fillStyle: "#000000", id: 5, textFillStyle: "white", textFontSize: "16"},
  {fillStyle: "#FF0000", id: 6, textFillStyle: "white", textFontSize: "16"},
  {fillStyle: "#000000", id: 7, textFillStyle: "white", textFontSize: "16"},
  {fillStyle: "#DCDCDC", id: 8, textFillStyle: "white", textFontSize: "16"},
  {fillStyle: "#FF0000", id: 9, textFillStyle: "white", textFontSize: "16"},
  {fillStyle: "#DCDCDC", id: 10, textFillStyle: "white", textFontSize: "16"},
  {fillStyle: "#000000", id: 11, textFillStyle: "white", textFontSize: "16"},
  {fillStyle: "#000000", id: 12, textFillStyle: "white", textFontSize: "16"},
  {fillStyle: "#000000", id: 13, textFillStyle: "white", textFontSize: "16"},
  {fillStyle: "#000000", id: 14, textFillStyle: "white", textFontSize: "16"},
  {fillStyle: "#DCDCDC", id: 15, textFillStyle: "white", textFontSize: "16"},
  {fillStyle: "#000000", id: 16, textFillStyle: "white", textFontSize: "16"},
  {fillStyle: "#FF0000", id: 17, textFillStyle: "white", textFontSize: "16"},
  {fillStyle: "#000000", id: 18, textFillStyle: "white", textFontSize: "16"},
  {fillStyle: "#000000", id: 19, textFillStyle: "white", textFontSize: "16"},
  {fillStyle: "#DCDCDC", id: 20, textFillStyle: "white", textFontSize: "16"},
  {fillStyle: "#008000", id: 21, textFillStyle: "white", textFontSize: "16"},
  {fillStyle: "#000000", id: 22, textFillStyle: "white", textFontSize: "16"},
  {fillStyle: "#000000", id: 23, textFillStyle: "white", textFontSize: "16"},
  {fillStyle: "#DCDCDC", id: 24, textFillStyle: "white", textFontSize: "16"},
  {fillStyle: "#000000", id: 25, textFillStyle: "white", textFontSize: "16"},
  {fillStyle: "#FF0000", id: 26, textFillStyle: "white", textFontSize: "16"},
  {fillStyle: "#DCDCDC", id: 27, textFillStyle: "white", textFontSize: "16"},
  {fillStyle: "#000000", id: 28, textFillStyle: "white", textFontSize: "16"},
  {fillStyle: "#000000", id: 29, textFillStyle: "white", textFontSize: "16"},
  {fillStyle: "#DCDCDC", id: 30, textFillStyle: "white", textFontSize: "16"},
  {fillStyle: "#000000", id: 31, textFillStyle: "white", textFontSize: "16"},
  {fillStyle: "#000000", id: 32, textFillStyle: "white", textFontSize: "16"},
]
  textOrientation: TextOrientation = TextOrientation.HORIZONTAL
  textAlignment: TextAlignment = TextAlignment.OUTER
  
  numSpin;
  balance=100;
  betSolde:any=0
  transsection : any;
  isSpinning: boolean;
  completedSpin: boolean;
  tr:number;
  ngOnInit(){
 
    this.idToLandOn = this.seed[Math.floor(Math.random() * this.seed.length)];
    const colors = ['#FF0000', '#000000',	'#008000']

  }
  
   reset() {
    this.spin()
 
  }

getsoldebet(txt){
  this.betSolde=txt
}
  async spin() {
    this.wheel.reset()
    this.tr=this.randomInteger(1,15)
    this.wheel.idToLandOn=this.randomInteger(0,11)
    console.log(this.wheel)
    this.balance-=this.betSolde
    await new Promise((resolve)=>{
      
      this.wheel.spin()
      this.numSpin=this.wheel.idToLandOn
    console.log(this.numSpin)
    } ) 
    
  }
  reload() {
    this.wheel.reset()
  }

   randomInteger(min, max) {
  
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  after() {

    switch(this.numSpin) { 
      case 0: { 
        Swal.fire({
          text: '" مبروك ربحت"',
          icon: 'warning',
          confirmButtonText: 'OK',
        }).then((result) => {
         this.transsection= this.betSolde*0.5
         this.balance+=this.transsection;
        })
        
         break; 
      } 
      case 1: { 
        Swal.fire({
          text: '"للأسف لم تربح"',
          icon: 'warning',
          confirmButtonText: 'OK',
        }).then((result) => {
         
        })
         break; 
      } 
      case 2: { 
        Swal.fire({
          text: '" مبروك ربحت"',
          icon: 'warning',
          confirmButtonText: 'OK',
        }).then((result) => {
          this.transsection= this.betSolde*1
          this.balance+=this.transsection;
        })
         break; 
      } 
      case 3: { 
        Swal.fire({
          text: '"للأسف لم تربح"',
          icon: 'warning',
          confirmButtonText: 'OK',
        }).then((result) => {
          
        })
         break; 
      } 
      case 4: { 
        Swal.fire({
          text: '" مبروك ربحت"',
          icon: 'warning',
          confirmButtonText: 'OK',
        }).then((result) => {
          this.transsection= this.betSolde*1.5
          this.balance+=this.transsection;
        })
         break; 
      } 
      case 5: { 
        Swal.fire({
          text: '"للأسف لم تربح"',
          icon: 'warning',
          confirmButtonText: 'OK',
        }).then((result) => {
          
        })
         break; 
      } 
      case 6: { 
        Swal.fire({
          text: '" مبروك ربحت"',
          icon: 'warning',
          confirmButtonText: 'OK',
        }).then((result) => {
          this.transsection= this.betSolde*2
          this.balance+=this.transsection;
        })
         break; 
      } 
      case 7: { 
        Swal.fire({
          text: '"للأسف لم تربح"',
          icon: 'warning',
          confirmButtonText: 'OK',
        }).then((result) => {
        
        })
         break; 
      } 
      case 8: { 
        Swal.fire({
          text: '" مبروك ربحت"',
          icon: 'warning',
          confirmButtonText: 'OK',
        }).then((result) => {
          this.transsection= this.betSolde*5
          this.balance+=this.transsection;
        })
         break; 
      } 
      case 9: { 
        Swal.fire({
          text: '"للأسف لم تربح"',
          icon: 'warning',
          confirmButtonText: 'OK',
        }).then((result) => {
         
        })
         break; 
      } 
      case 10: { 
        Swal.fire({
          text: '" مبروك ربحت"',
          icon: 'warning',
          confirmButtonText: 'OK',
        }).then((result) => {
          this.transsection= this.betSolde*10
          this.balance+=this.transsection;
        })
         break; 
      } 
      case 11: { 
        Swal.fire({
          text: '"للأسف لم تربح"',
          icon: 'warning',
          confirmButtonText: 'OK',
        }).then((result) => {
        
        })
         break; 
      } 
      case 12: { 
        window.alert("12")
         break; 
      } 
      default: { 
         //statements; 
         break; 
      } 
   } 
    
  }
}
