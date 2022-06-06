import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'capitalSpace' })
export class CapitalSpacePipe implements PipeTransform {
    transform(text:string) {
        if (text) {
            return text.replace(/([A-Z]+)/g, " $1")
        }
        return null;
    }
}