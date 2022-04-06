import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  loadedPosts = [{
    userId: 1,
    id: 1,
    title: 'title',
    body: 'body'
  }];
  userId = 1;
  isFetching = false;
  error = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: { title: string; content: string}) {
    // Send Http request
    console.log(postData);
    this.http
      .post(
        'https://jsonplaceholder.typicode.com/posts',
        postData
      )
      .subscribe(responseData => {
        console.log(responseData);
      })
  }

  onFetchPosts() {
    // Send Http request
    this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
  }

  private fetchPosts() {
    this.isFetching = true;
    this.http
      .get('https://jsonplaceholderx.typicode.com/posts')
      .subscribe({
        next: (posts) => {
          this.isFetching = false;
          console.log(posts);
          this.loadedPosts=<[]>posts;
        },
        error: (e) => {
          this.error=e.message;
          console.log(e);
        },
        complete: () => {
          console.log("complete");
        }
      });
  }
}