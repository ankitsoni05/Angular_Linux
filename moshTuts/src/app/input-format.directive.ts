import { Directive,ElementRef,HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

@Input('format') Format :string = "";

@HostListener('blur') onblur()
{
  if(this.ef.nativeElement.value){
  this.ef.nativeElement.value = this.Format+'-'+this.ef.nativeElement.value;
  }
}
@HostListener('focus') onFocus()
{
  console.log("on Focus");
}
  constructor(private ef : ElementRef) {
    console.log(ef);
   }

}
