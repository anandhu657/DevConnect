import { Component } from '@angular/core';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { QuestionService } from 'src/app/services/question.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-ask-question',
  templateUrl: './ask-question.component.html',
  styleUrls: ['./ask-question.component.css']
})
export class AskQuestionComponent {
  editorContent!: string;
  editorOptions = {
    toolbar: [
      ['bold', 'italic', 'code'],
      ['blockquote', 'code-block'],
      [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'script': 'sub' }, { 'script': 'super' }],
      [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
      [{ 'direction': 'rtl' }],                         // text direction

      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'font': [] }],
      [{ 'align': [] }],
      ['clean'],
      ['link']
    ]
  };

  question!: FormGroup
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  tags: string[] = [];
  maxChips = 3

  constructor(
    private _questionService: QuestionService,
    private _snackbar: MatSnackBar,
    private _formbuilder: FormBuilder,
  ) {
    this.question = this._formbuilder.group({
      "title": ["", [Validators.required, this.emptyOrWhitespaceValidator]],
      "description": ["", [Validators.required, this.emptyOrWhitespaceValidator]],
    })
  }

  emptyOrWhitespaceValidator(control: FormControl) {
    if (control.value == null || control.value.trim() === '') {
      return { emptyOrWhitespace: true };
    }
    return null;
  }

  askQuestion() {
    console.log(this.question.value,"question")
    this._questionService.addQuestion(this.question.value, this.tags).subscribe((res: any) => {
      console.log(res)
      if (res.success)
        this.openSnackBar("Question added succefully", "undo")
      else
        this.openSnackBar("Something went wrong please try again", "undo")
    })
  }

  openSnackBar(message: string, action: string) {
    this._snackbar.open(message, action, { duration: 3000 })
  }

  // chips input -> tags
  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.tags.push(value.toLowerCase());
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(tag: string): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  edit(tag: string, event: MatChipEditedEvent) {
    const value = event.value.trim();

    // Remove fruit if it no longer has a name
    if (!value) {
      this.remove(tag);
      return;
    }

    
    const index = this.tags.indexOf(tag);
    if (index >= 0) {
      this.tags[index] = value;
    }
  }
}
