import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpResponse,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";
import { Config } from "src/app/shared/interfaces/config";
import { Task } from "../model/task.model";

@Injectable({
  providedIn: "root"
})
export class TaskService {
  //tasksUrl = "assets/config.json";

  baseUrl: string = "http://localhost:4200/api/tasks";

  constructor(private http: HttpClient) {}

  /*getTasks() {
    return this.http.get<Config>(this.tasksUrl);
  }*/

  getTasksResponse(): Observable<HttpResponse<Array<Task>>> {
    return this.http
      .get<Array<Task>>(this.baseUrl, { observe: "response" })
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred:", error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError("Something bad happened; please try again later.");
  }
}
