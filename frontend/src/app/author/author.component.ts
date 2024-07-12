import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  constructor(private auth :AuthService,
    private act:ActivatedRoute,
     private articleService:ArticleService){}
    id:any;
    author:any;
    articles:any;

    ngOnInit(): void {
      //getId
      this.id=this.act.snapshot.paramMap.get('id');
      console.log('id : ',this.id);
      //getAuthor
      this.auth.getById(this.id)
          .subscribe((res)=>{
            this.author=res;
            console.log('author : ',this.author);
            
         
          });
          //getArticleByIdauthor
          this.articleService.getArticleByIdAuthor(this.id)
          .subscribe (res=>
            {
              this.articles=res;
              console.log('articles  by author: ',this.articles);
            },err=>{
              console.log(err);
            }
          )
      
  }



}


