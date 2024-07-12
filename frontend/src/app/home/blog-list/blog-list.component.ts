import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
articles:any;
constructor(private articleService:ArticleService){}
  ngOnInit(): void {
this.articleService.getAll()
.subscribe(
  res=>{
    this.articles=res;
    console.log('articles are :',this.articles);
  },err=>{
    console.log(err);
  }
)


  }
}
