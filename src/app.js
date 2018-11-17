var headline_button = document.getElementById('headline_button')
var headlines_list = document.getElementById('headlines_list')
var article_div = document.getElementById('article')

const controller = new NewsFeed();
controller.getNews()

headline_button.addEventListener('click', function() {
  headlines_list.innerHTML = renderHeadlines(controller.allArticles)
})

headlines_list.addEventListener('click', function() {
  setTimeout(function(){
    article = (window.location.hash.split('/'))
    artlicle_id = article.slice(-1)[0]
  }, 10);
  // article_div.innerHTML = renderArticle(artlicle_id)
})
