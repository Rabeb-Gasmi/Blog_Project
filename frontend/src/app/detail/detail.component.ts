import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit  {

  id:any;
article:any;

  constructor(
    private act:ActivatedRoute,
     private articleService:ArticleService){}
    
    ngOnInit(): void {
      //getId
      this.id=this.act.snapshot.paramMap.get('id');
      console.log('id : ',this.id);
      //getArticle
      this.articleService.getArticleById(this.id)
          .subscribe((res)=>{
            this.article=res;
            console.log('article : ',this.article);
            
          },err=>{
            console.log(err);
          }
          );
        
           
        }
      
  }






