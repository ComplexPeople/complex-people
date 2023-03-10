import {Component, OnInit} from '@angular/core';
import {AccountService} from "../../services/account.service";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  constructor(private accountService: AccountService) {
  }

  ngOnInit() {
    this.accountService.logout();
  }

}
