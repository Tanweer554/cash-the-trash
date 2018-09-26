import { Directive,ElementRef,Renderer,HostListener,Input} from '@angular/core';

@Directive({
  selector: '[appCDir]'
})
export class CDirDirective {

  constructor( private er:ElementRef, private render:Renderer) {
     // er.nativeElement.style.color="red";
      //er.nativeElement.style.background="blue";
   }
    @Input('appCDir') mycolor:string;
 
    @Input() defaultcolor:string;

    /*@HostListener ('mouseenter') onMouseEnter(){
      this.shade("yellow");
    };
    @HostListener ('mouseleave') onMouseLeave(){
      this.shade("green");
    }*/
   @HostListener ('mouseenter') onMouseEnter(){
     this.shade(this.mycolor || this.defaultcolor);
   };
   @HostListener ('mouseleave') onMouseLeave(){
    this.shade(null);
  }
    private shade(color:string){
      this.er.nativeElement.style.background=color;

    }
  }