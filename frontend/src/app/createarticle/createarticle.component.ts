import { Component } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createarticle',
  templateUrl: './createarticle.component.html',
  styleUrls: ['./createarticle.component.css']
})
export class CreatearticleComponent {
constructor(private data:ArticleService,
  private auth:AuthService,
  private router:Router){}
article:any ={
  title:'',
  content:'',
  tags:[],
  description:''
}





tag : any = '';
image:any;
select(e:any){
  this.image=e.target.files[0];
}
create(){
  const fd = new FormData();
  fd.append('title',this.article.title);
  fd.append('content',this.article.content);
  fd.append('tags',this.article.tags.toString());
  fd.append('description',this.article.description);
  fd.append('image',this.image);
  fd.append('idAuthor',this.auth.getDataFromToken()._id);

  this.data.create(fd)
      .subscribe(res=>{
        this.router.navigate(['/home']);
        console.log("succesfully created");
      },err=>{
        console.log(err); 
      })
}

}
