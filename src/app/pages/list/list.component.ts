import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinct, distinctUntilChanged, filter, take } from 'rxjs';
import { QuestionListModel } from 'src/app/interfaces/question-list.model';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public questionsList: QuestionListModel[];
  public searchInput: FormControl = new FormControl();
  public limit = 10;
  public offset = 0;

  constructor(
    private readonly listService: ListService,
  ) {
    this.questionsList = [];
    this.getQuestionsList();
  }

  ngOnInit(): void {
    this.searchInput.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
    ).subscribe((value: string) => {
      this.getQuestionsList(value);
    });
  }

  private getQuestionsList(filterValue?: string): void {
    this.listService.getList(this.limit, this.offset, filterValue).subscribe((response: QuestionListModel[]) => {
      this.questionsList = response;
    });
  }


  public treatDate(d: string): Date {
    const date = new Date(d);

    return date;
  }


  public onTableDataScroll(event: Event) {
    let table = event.target as HTMLTableElement;
    if (table.scrollHeight - table.scrollTop === table.clientHeight) {
      this.offset = this.offset + this.limit;
      this.getQuestionsList();
    }
}
}
