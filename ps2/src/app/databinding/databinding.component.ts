import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aa-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent  {

 stringInterpolation = "This is the string interpolation method!";
 numberInterpolation = 3;

 onClicked(value: string){
  alert(value);
 }
}
