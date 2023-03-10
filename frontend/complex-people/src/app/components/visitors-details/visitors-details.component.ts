import {Component, Input} from '@angular/core';
import {Person} from "../../models/person.model";
import {ActivatedRoute} from "@angular/router";
import {PeopleService} from "../../services/people.service";

@Component({
  selector: 'app-visitors-details',
  templateUrl: './visitors-details.component.html',
  styleUrls: ['./visitors-details.component.css']
})
export class VisitorsDetailsComponent {

  @Input() person?: Person;

  constructor(
    private route: ActivatedRoute,
    private peopleService: PeopleService,
  ) {}


  ngOnInit(): void {
    this.getPerson();
  }

  getPerson(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.peopleService.getPerson(id)
      .subscribe(person => this.person = person);
  }

}
