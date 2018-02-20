import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';




class Data extends Component {


  constructor(props){
    super(props)
    this.state = {
      posts: [],
    };
  }

componentDidMount(){

  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => {
      let postz = data.map((post) => {
        return(
          <div key= {post.id}>
             <p>{post.userId}</p>
             <p>{post.title}</p>
             <p>{post.body}</p>
          </div>

        )
      })

        this.setState({posts: postz});
        console.log("state post", this.state.posts);
        console.log("state", this.state);
        this.something(postz);

        for(let i = 0; i < postz.length; i ++){
        console.log('hi2' + postz);
      }
  })

}
something(posts){

  for(let i = 0; i < posts.length; i ++)
  console.log('hi' + posts[i]);
}


  render() {

    return(

<div className="data">
 {this.state.posts}

</div>


    );
  }
}

export default Data;
