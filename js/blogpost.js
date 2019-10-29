
var converter = new showdown.Converter();

window.onload = function () { 
  var issueID = Number(location.search.substr(1));

  loadPost(issueID);

}

function loadPost(id) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.github.com/repos/briangarland/blog/issues/" + id, true);
  xhr.send();
  xhr.onload = function() {
    var data = JSON.parse(this.responseText);

    document.title = data.title;
    
    var title = document.getElementById("title");
    var author = document.getElementById("author");
    var posttime = document.getElementById("posttime");
    var article = document.getElementById("article");

    title.innerText = data.title;

    author.innerText = data.user.login;
    author.setAttribute("href", data.user.html_url);

    posttime.innerText = new Date(data.created_at).toLocaleDateString();

    article.innerHTML = converter.makeHtml(data.body);

    loadComments(id)
  }
}

function loadComments(id) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.github.com/repos/briangarland/blog/issues/" + id + "/comments", true);
  xhr.send();
  xhr.onload = function() {
    var data = JSON.parse(this.responseText);

    var comments = document.getElementById("comments");

    var outhtml = '';

    outhtml += '<h2 class="mb-3">Comments</h2>';
    
    for (var i = 0; i < data.length; i++) {
      outhtml += 
      `<div class="card mb-2">
        <p class="card-header"><a href="` + data[i].user.html_url + `">` + data[i].user.login + `</a> at ` + new Date(data[i].created_at).toLocaleDateString() + `</p>
        <div class="card-body">
          <p class="card-text">` + converter.makeHtml(data[i].body) + `</p>
        </div>
      </div>`
    }

    outhtml += '<br><p><a href="https://github.com/briangarland/blog/issues/' + id + '">Leave a comment (on GitHub)</a></p>'

    comments.innerHTML = outhtml;
  }
}