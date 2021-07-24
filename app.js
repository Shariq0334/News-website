console.log("This is my index js file");

// Grab the news container
let newsAcc = document.getElementById('main');

function getData(){
    console.log("Started getData")
    url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=acd8e76ad46f460f8b42a5d021c94893";
    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
      //  console.log(data);
        let json = data;
        let articles = json.articles;
        let newsHtml = "";
        articles.forEach(function(element, index) {
             console.log(element, index)
             let news = `<div class="">
                         <div class="card" style="width: 18rem;  ">
                         <img src="${element['urlToImage']}" class="card-img-top" alt="...">
                          <div class="card-body">
                           <h5 class="card-title"><b>Breakings News ${index}</b> <br>${element.title}</h5>
                           <p class="card-text">${element.description}</p>
                           <a target="_blank"  href="${element.url}" class="btn btn-primary">Read More</a>
                         </div>
                       </div>
                       </div>`
                       newsHtml += news;

        })
        newsAcc.innerHTML = newsHtml;
    })


}
//getData()
