import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'phonePipe' })
export class PhonePipe implements PipeTransform {
    transform(rawNum:any) {
        let newStr = "(";
        if (rawNum && rawNum!='undefined' && rawNum!='Invalid date') {
            rawNum = rawNum.split('-').join('')
            if (rawNum.substring(0, 2) === '+1') {
                rawNum = rawNum.substring(2)
            }
            for (let i = 0; i < Math.floor(rawNum.length); i++) {
                if (i === 3) {
                    newStr = newStr + ') '
                }
                if (i === 6) {
                    newStr = newStr + '-'
                }
                newStr = newStr + rawNum[i]
            }

            return newStr;
        }
        else {
            return '';
        }
    }
}