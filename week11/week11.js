import {makeRequest} from './authHelpers.js'

// makeRequest('login', 'POST', {
//     password: 'user1',
//     email: 'user1@email.com'
//     });


import Auth from "./auth.js";
let signin = document.querySelector("#signin")
let auth = new Auth


signin.addEventListener("click", (e)=> {
    e.preventDefault();
    auth.login(getPosts);
});

async function getPosts(){
  try {
    const data = await makeRequest(
      'posts',
      'GET',
      null,
      auth.jwtToken
    );

    console.log(data);
    var ul = document.createElement('ul');
    ul.innerHTML = '';
    for (var i = 0; i< data.length; i++) {
      var li = document.createElement('li');
      li.appendChild(document.createTextNode(data[i].title));
      ul.appendChild(li);
    }
    let posts = document.getElementById('posts');
    posts.appendChild(ul);

  } catch (error) {
    // if there were any errors display them
    //this.errors.handleError(error);

    console.log(error);
  }
}
   
