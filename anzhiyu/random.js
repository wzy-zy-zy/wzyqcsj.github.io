var posts=["2025/06/11/hello-world/","2025/05/28/我的博客/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };