import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionModel } from 'src/app/interfaces/question.model';
import { ModalShareService } from 'src/app/services/modal-share.service';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  public questionDetails!: QuestionModel;
  public paramId!: number;
  public maxVotes: number;

  constructor(
    private readonly questionsService: QuestionsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private readonly modalShareService: ModalShareService,
  ) {
    this.maxVotes = 0;
    this.activatedRoute.params.forEach(params => {
      this.paramId = params['id'];
    });
    this.getDetails();
  }

  private getDetails(): void {
    this.questionsService.getQuestion(this.paramId).subscribe((response: QuestionModel) => {
      this.questionDetails = response;
      this.questionDetails.choices.forEach((c, index) => {
        if (index === 0) {
          this.maxVotes = c.votes;
        } else if (this.maxVotes < c.votes) {
          this.maxVotes = c.votes;
        }
      });
    });
  }

  public goToListing(): void {
    this.router.navigate(['list']);
  }
  
  public treatDate(d: string): Date {
    const date = new Date(d);

    return date;
  }

  public onClickSharePage(): void {
    this.modalShareService.open();
  }
}
