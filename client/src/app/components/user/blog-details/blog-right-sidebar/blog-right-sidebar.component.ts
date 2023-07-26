import { Component, Input } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog-right-sidebar',
  templateUrl: './blog-right-sidebar.component.html',
  styleUrls: ['./blog-right-sidebar.component.css']
})
export class BlogRightSidebarComponent {
  @Input() tags!: [
    {
      name: string,
      _id: string
    }
  ]

  realatedBlog!: [{
    date: Date,
    title: string,
    _id: string
  }]


  constructor(
    private _blogService: BlogService,
  ) { }

  ngOnInit() {
    this._blogService.getTagRelatedBlog(this.tags).subscribe((blogs: any) => {
      this.realatedBlog = blogs
      console.log(this.realatedBlog);
    })
  }
}
