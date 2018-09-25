let url = "https://newsapi.org/v2/top-headlines?sources=hacker-news&apiKey=318296a0f878443d825825022ba415cb";

fetch(url)
.then(r => {
    return r.json();
})

.then(data => {
    let articles = data.articles;
    let headlines = document.createElement("ul");
    let body = document.querySelector("body");
    body.appendChild(headlines);
    articles.map(sources => {
        let newsArticle = document.createElement("li");
        newsArticle.innerHTML = 
        '<a href="' + articles.href + '">' + articles.title + "</a>";
        headlines.appendChild(newsArticle);
    });
})
.catch(err => {
    console.log(`An error occurred: ${err}`);
});