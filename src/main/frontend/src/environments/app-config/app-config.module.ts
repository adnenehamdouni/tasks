import { NgModule, InjectionToken } from '@angular/core';
import {environment} from "../environment";

export let APP_CONFIG = new InjectionToken<AppConfig>('app.config');

export class AppConfig {
  baseUrl: string;
  TASKS_LIST: string;
  TASKS_ADD: string;
}

export const APP_DI_CONFIG: AppConfig = {
  baseUrl: environment.apiEndpoint,

  /****** TASKS ******/
  TASKS_LIST: environment.apiEndpoint + "/tasks",
  TASKS_ADD: environment.apiEndpoint + "/tasks/save"
};

@NgModule({
  providers: [{
    provide: APP_CONFIG,
    useValue: APP_DI_CONFIG
  }]
})
export class AppConfigModule { }
