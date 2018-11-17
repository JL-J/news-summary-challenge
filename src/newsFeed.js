(function(exports) {

function NewsFeed() {
    this.results = []
    this.url = "https://content.guardianapis.com/search?api-key="+GUARDIAN_KEY
  }

  NewsFeed.prototype.getNews = function() {
    fetch(this.url).then(response => {
      return response.json();
    }).then(data => {
      this.results = (data.response.results);
      // why does this work? 
    });
  }

  exports.NewsFeed = NewsFeed;

})(this)
