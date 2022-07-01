import { Directive, ElementRef, OnInit } from "@angular/core";
import { PlatformDectorService } from "src/app/core/platform-dector/platform-dector.service";

@Directive({
    selector: '[immediateClick]'
})
export class ImmediateClickDirective implements OnInit {
    constructor(
        private element: ElementRef<any>,
        private platfromDetector: PlatformDectorService
    ) {

    }

    ngOnInit(): void {
        this.platfromDetector.isPlatformBrowser && this.element.nativeElement.click();
    }
}