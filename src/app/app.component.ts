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
    this.http
      .get('https://jsonplaceholder.typicode.com/posts')
      .subscribe(posts => {
        console.log(posts);
        this.loadedPosts=<[]>posts;
      })
  }
}
