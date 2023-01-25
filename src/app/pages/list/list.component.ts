import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { QuestionModel } from 'src/app/interfaces/question.model';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public questionsList: QuestionModel[];
  public searchInput: FormControl = new FormControl();
  public limit = 10;
  public offset = 0;

  /**
   * Creates an instance of list component.
   * @param questionsService 
   * @param router 
   */
  constructor(
    private readonly questionsService: QuestionsService,
    private readonly router: Router
  ) {
    this.questionsList = [];
    this.getQuestionsList();
  }

  /**
   * on init
   */
  ngOnInit(): void {
    this.searchInput.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
    ).subscribe((value: string) => {
      this.getQuestionsList(value);
    });
  }

  /**
   * Gets questions list
   * @param [filterValue] 
   */
  private getQuestionsList(filterValue?: string): void {
    this.questionsService.getList(this.limit, this.offset, filterValue).subscribe((response: QuestionModel[]) => {
      this.questionsList = response;
    });
  }

  /**
   * Treats date
   * @param d 
   * @returns date of date 
   */
  public treatDate(d: string): Date {
    const date = new Date(d);

    return date;
  }

  /**
   * Determines whether table data scroll on
   * @param event 
   */
  public onTableDataScroll(event: Event) {
    let table = event.target as HTMLTableElement;
    if (table.scrollHeight - table.scrollTop === table.clientHeight) {
      this.offset = this.offset + this.limit;
      this.getQuestionsList();
    }
  }

  /**
   * click navigate to details
   * @param id 
   */
  public onClickNavigateToDetails(id: number): void {
    this.router.navigate(['details/'+id]);
  }
}
