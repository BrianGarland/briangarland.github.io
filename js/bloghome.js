
var converter = new showdown.Converter();

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

    outhtml += `</ br>`

    outhtml += '<ul>';
    
    for (var i = 0; i < data.length; i++) {
    
      if (data[i].user.login === "BrianGarland") {
        outhtml += 
        `<li><a href="blogpost.html?` + data[i].number + `">` + data[i].title +`</a>`

        for (var y = 0; y < data[i].labels.length; y++) {
          outhtml += ` <span class="badge badge-secondary" style="background-color: #` + data[i].labels[y].color + `;">` + data[i].labels[y].name + `</span>`
        }

        outhtml += `</li>`;
      }
    }

    outhtml += '</ul>';

    posts.innerHTML = outhtml;
  }
}