var headline_button = document.getElementById('headline_button')
var headlines_div = document.getElementById('headlines')

const controller = new NewsFeed();
controller.getNews()

headline_button.addEventListener('click', function() {
  headlines_div.innerHTML = renderHeadlines(controller.allArticles)
})
