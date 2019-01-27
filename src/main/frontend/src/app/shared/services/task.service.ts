import { Injectable, Inject } from "@angular/core";
import {
  HttpClient,
  HttpResponse,
  HttpErrorResponse,
  HttpHeaders
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";
import { Task } from "../model/task.model";
import { environment } from "../../../environments/environment";
import {
  APP_CONFIG,
  AppConfig
} from "../../../environments/app-config/app-config.module";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    Authorization: "my-auth-token"
  })
};

@Injectable({
  providedIn: "root"
})
export class TaskService {
  constructor(
    private http: HttpClient,
    @Inject(APP_CONFIG) private config: AppConfig
  ) {}

  getTasks(): Observable<HttpResponse<Array<Task>>> {
    return this.http
      .get<Array<Task>>(`${this.config.baseUrl}/tasks`, { observe: "response" })
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }

  /** POST: add a new task to the database */
  saveTask(task: Task): Observable<Task> {
    console.log(
      "TaskService: saveTask => TASKS_ADD  = ",
      this.config.TASKS_ADD
    );
    return this.http
      .post<Task>(`${this.config.TASKS_ADD}`, task, httpOptions)
      .pipe(
        //catchError(this.handleError('addTask', task))
        catchError(this.handleError)
      );
  }

  /*
   *
   *
   */

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

  /*
   *
   *
   */

  getHostURL(): string {
    return environment.apiEndpoint;
  }
}
