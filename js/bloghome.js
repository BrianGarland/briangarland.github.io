
window.onload = function () { 
  var issueID = Number(location.search.substr(1));

  loadIssues(issueID);
}

function loadIssues(id) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.github.com/repos/briangarland/blog/issues", true);
  xhr.send();
  xhr.onload = function() {
    var data = JSON.parse(this.responseText);

    var posts = document.getElementById("posts");

    var outhtml = '';
    
    for (var i = 0; i < data.length; i++) {
    
      if (data[i].user.login === "BrianGarland") {
      
        outhtml += '<div class="post-preview">';
        outhtml += '<a href="post.html?' + data[i].number + '">';
        outhtml += '<h2 class="post-title">' + data[i].title +'</h2>';
        outhtml += '<h3 class="post-subtitle">' + data[i].body.split(' ').slice(0,30).join(' ') +'</h3>';
		outhtml += '</a>';
		var ts = new Date(data[i].created_at);
		outhtml += '<p class="post-meta">Posted on ' + ts.toDateString() + '</p>';
        outhtml += '</div><hr>';
        
      }
    }
    
    posts.innerHTML = outhtml;
  }
}
