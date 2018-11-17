(function(exports) {

function renderHeadlines(allArticles) {
  var html = "<ul>";
  allArticles.forEach(function(article) {
    html += `<li><div class="headline" id='${article.id}'>${article.webTitle}</li>`
  })
  return html + "</ul>"
}

exports.renderHeadlines = renderHeadlines

})(this)
