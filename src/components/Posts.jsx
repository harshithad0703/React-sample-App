import React, { useState, useEffect } from "react";
import Contentstack from 'contentstack';

<script src="https://cdn.jsdelivr.net/npm/contentstack@latest/dist/web/contentstack.min.js"></script>

const API_KEY = process.env.REACT_APP_API_KEY;
const DELIVERY_TOKEN = process.env.REACT_APP_DELIVERY_TOKEN
const CONTENT_TYPE = process.env.REACT_APP_CONTENT_TYPE
console.log(API_KEY)
function PostsCards() {

  const [posts, setPosts] = useState([])

  const Stack = Contentstack.Stack({ "api_key": API_KEY, "delivery_token": DELIVERY_TOKEN, "environment": "hd-prod" });
  const Query = Stack.ContentType(CONTENT_TYPE).Query();

  const getContent = async () => {
    Query
      .where("title")
      .includeCount()
      .toJSON()
      .find()
      .then(function success(result) {
        setPosts(result)

      },
        function error(err) {
        });
  }
  useEffect(() => {
    getContent();
  })

  return (
    <div id="blog">
      <h2 className="headings">BLOG</h2>
      <div className="row">
        {posts[0] && posts[0].map((post) => {
          return (
            <div className="box" key={post.uid}>
              <h5 className="title">{post.title}</h5>
              <img className="image" src={post.food_image[0].url} alt="post" /><br></br>
              <p className="description">{post.description}</p><br></br>
              <div className="info">
                <h4 className="address_link"><a href={post.address_link.href}>{post.address_link.title}</a></h4><br></br>
                <h4 className="place">- {post.address}</h4>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}
export default PostsCards;