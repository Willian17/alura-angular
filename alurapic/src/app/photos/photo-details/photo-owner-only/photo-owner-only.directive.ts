import { Directive, ElementRef, Input, OnInit, Renderer } from "@angular/core";
import { UserService } from "src/app/core/user/user.service";
import { IPhoto } from "src/app/shared/interfaces/IPhoto";

@Directive({
    selector: '[photoOwnerOnly]'
})
export class PhotoOwnerOnlyDirective implements OnInit {

    @Input() ownedPhoto: IPhoto;

    constructor(
        private element: ElementRef<any>,
        private renderer: Renderer,
        private userService: UserService
    ) { }

    ngOnInit(): void {
        this.userService
            .getUser()
            .subscribe(user => {
                if (!user || user.id != this.ownedPhoto.userId)
                    this.renderer.setElementStyle(this.element.nativeElement, 'display', 'none');
            })
    };
}

