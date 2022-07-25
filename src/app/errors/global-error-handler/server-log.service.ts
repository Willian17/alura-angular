import { HttpClient } from "@angular/common/http";
import {Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { IServerLog } from "./IServerLog";

@Injectable({ providedIn: 'root'})
export class ServerLogService {

    serverLogUrl = environment.serverLogUrl;

    constructor(private http: HttpClient) {}

    log(serverLog: IServerLog) {
        return this.http.post(this.serverLogUrl + '/infra/log', serverLog);
    }

}