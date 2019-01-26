import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  newPost = {
    title: "",
    body: ""
  }
  edit = false;

  myPosts: any[] = [];
  constructor(private postService : PostService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts(){
    this.postService._getPosts()
    .subscribe((res: any[]) => { this.myPosts = res });
  }

  addPost(f) {
    if (f.valid){
      this.postService.createPost(this.newPost)
      .subscribe(res => {
        this.myPosts.unshift(this.newPost)
        this.newPost = {
          title: "",
          body: ""
        }
      });
    }else{
      Swal({
        title: 'Form Error',
        text: 'please check your form',
        type: 'warning'
      })
    }
  }

  editPost(post){
    this.newPost = post;
    this.edit = true;
  }

  updatePost(){
    this.postService.putPost(this.newPost)
    .subscribe(
      res => {
        this.edit = false;
        this.newPost = {
          title: "",
          body: ""
        }
      },
      err => console.error(err)
      )
  }

  removePost(i, id){
    this.postService.deletePost(id)
    .subscribe(
      res => {
        this.edit = false;
        this.myPosts.splice(i, 1)
      },
      err => console.error(err)
      )
  }

  log(title){
    console.log(title);
  }

}
