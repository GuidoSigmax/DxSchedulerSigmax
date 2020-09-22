import { NgModule, Component } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { DxSchedulerModule, DxTemplateModule } from "devextreme-angular";
import { Service, Employee } from "./app.service";
import ArrayStore from "devextreme/data/array_store";
import DataSource from "devextreme/data/data_source";

@Component({
  selector: "demo-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [Service]
})
export class AppComponent {
  dataSource: any;
  currentDate: Date = new Date("2020-09-22T08:00:06+02:00");
  resourcesDataSource: Employee[];
  schedulerViewsConfiguration: any[] = ["timelineDay"];
  view: any;
  cellDuration: number = 15;
  resources: any[] = [];

  constructor(service: Service) {
    this.dataSource = new DataSource({
      store: new ArrayStore({
        data: service.getAppointments(),
        key: "key"
      }),
      paginate: false
    });

    this.resources = [
      {
        allowMultiple: false,
        dataSource: service.getEmployees(),
        valueExpr: "userID",
        displayExpr: "text",
        fieldExpr: "userID"
      }
    ];
  }

  public onContentReady(e: any): void {
    e.component.scrollToTime(8, 0);
  }
}

@NgModule({
  imports: [BrowserModule, DxSchedulerModule, DxTemplateModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
