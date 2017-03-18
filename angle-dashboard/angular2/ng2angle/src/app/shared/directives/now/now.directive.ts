import { OnInit, OnDestroy, Directive, Input, ElementRef } from '@angular/core';

@Directive({
    selector: '[now]'
})
export class NowDirective implements OnInit, OnDestroy {

    @Input() format;
    intervalId;

    constructor(private element: ElementRef) { }

    ngOnInit() {
        this.updateTime();
        this.intervalId = setInterval(this.updateTime.bind(this), 1000);
    }

    updateTime() {
        let dt = moment().format(this.format);
        this.element.nativeElement.innerHTML = dt;
    }

    ngOnDestroy() {
        clearInterval(this.intervalId);
    }

}