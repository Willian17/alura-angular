import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { IPhoto } from "../../shared/interfaces/IPhoto";
import { PhotoService } from "../photo/photo.service";

@Injectable({
    providedIn: "root"
})
export class PhotoListResolver implements Resolve<Observable<IPhoto[]>> {
    constructor(private service: PhotoService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPhoto[]> {
        const { username } = route.params;
        return this.service.listFromUser(username);
    }
}