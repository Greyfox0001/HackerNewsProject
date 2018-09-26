let url = "https://newsapi.org/v2/top-headlines?sources=hacker-news&apiKey=318296a0f878443d825825022ba415cb";

fetch(url)
.then(r => {
    return r.json();  
})

.then(data => {
  console.log(data);
    //console.log(Object.keys(data.articles[0]));
    let headlines = document.createElement("ul");
    let body = document.querySelector("body");
    let count = document.createElement('h2');
    count.innerHTML = "Total Results: "+data.totalResults;
    body.appendChild(count);
    body.appendChild(headlines);
    data.articles.map(article => {
        let newsArticle = document.createElement("li");
        newsArticle.innerHTML = 
        '<a href="' + article.url + '" target="_blank">' + article.title +"</a>";
        headlines.appendChild(newsArticle);
        
    });
  
  
})
.catch(err => {
    console.log(`An error occurred: ${err}`);
});