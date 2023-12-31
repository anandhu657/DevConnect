import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html'
})
export class BlogsComponent {
  blogs!: any;
  pageIndex = 0
  pageSize = 5
  totalCount = 0
  sortValue!: string
  filterValue!: string

  constructor(
    private _blogService: BlogService,
  ) { }

  ngOnInit(): void {
    this.loadBlogs()
  }

  loadBlogs() {
    this._blogService.getAllBlogs(this.pageIndex, this.pageSize, this.filterValue, this.sortValue).subscribe((res: any) => {
      console.log(res);
      if (res) {
        this.blogs = res.blogs;
        this.totalCount = res.totalPosts;
        console.log(this.blogs);
      } else {
        console.log("something went wrong in dashboard");
      }
    })
  }

  receiveFilterValue(filterValue: any) {
    this.filterValue = filterValue
    this.loadBlogs()
  }

  onPageChange(event: any) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadBlogs();
  }

  receiveSortValue(sortValue: any) {
    this.sortValue = sortValue
    this.loadBlogs()
  }
}
