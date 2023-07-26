import { Component, Input } from '@angular/core';
import { QuestionService } from 'src/app/services/question.service';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-question-right-sidebar',
  templateUrl: './question-right-sidebar.component.html',
  styleUrls: ['./question-right-sidebar.component.css']
})
export class QuestionRightSidebarComponent {
  @Input() tags!: [
    {
      name: string,
      _id: string
    }
  ]
  realatedQuestion!: [{
    title: string,
    _id: string
  }]

  realatedBlog!: [{
    title: string,
    _id: string
  }]

  constructor(
    private _blogService: BlogService,
    private _questionService: QuestionService
  ) { }

  ngOnInit() {
    this._blogService.getTagRelatedBlog(this.tags).subscribe((blogs: any) => {
      this.realatedBlog = blogs
    })
    this._questionService.getTagRelatedQuestion(this.tags).subscribe((questions: any) => {
      this.realatedQuestion = questions
    })
  }
}
