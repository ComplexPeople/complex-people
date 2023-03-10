import { Component } from '@angular/core';
import {IssuesModel} from "../../models/issues_model";
import {HidecomponentService} from "../../services/hidecomponent.service";
import {IssuesService} from "../../services/issues.service";

@Component({
  selector: 'app-maintenance-form',
  templateUrl: './maintenance-form.component.html',
  styleUrls: ['./maintenance-form.component.css']
})
export class MaintenanceFormComponent {

  formHidden: boolean | undefined;
  issue$: IssuesModel;

  cancelButton() {
    this.formHidden = true;
  }

  constructor(private sharedService: HidecomponentService, private issueService: IssuesService) {
    this.issue$ = new IssuesModel("", 0, "", "", new Date(), "", "");
    this.sharedService.myMethod$.subscribe((data) => {
      this.formHidden = data;
    });
    this.sharedService.issueMethod$.subscribe(
      (data) => {
        this.issue$ = data;
      }
    )
  }

  hideUnhide() {
    this.sharedService.myMethod(true);
  }

}
