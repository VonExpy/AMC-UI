import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({ selector: '[accordion]' })
export class AccordionDirective {
    constructor(private el: ElementRef) { }

    @HostListener('click', ['$event']) onClick($event: any) {
        console.info($event);

        this.el.nativeElement.classList.toggle('is-open');

        var content = this.el.nativeElement.nextElementSibling;
        if (content.style.maxHeight) {
            // accordion is currently open, so close it
            content.style.maxHeight = null;
        } else {
            // accordion is currently closed, so open it
            content.style.maxHeight = content.scrollHeight + "px";

        }
    }
}
