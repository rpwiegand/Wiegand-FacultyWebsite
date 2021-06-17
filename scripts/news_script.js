
// Append each news item to the list
function AppendData(data, itemLimit) {
    // Get the div container from the web page 
    // where these news items will go
    var mainContainer = document.getElementById("news-container");
    mainContainer.innerHTML = "<b>News:</b><hr>"

    // Start the unordered list container
    var ulContainer = document.createElement("ul");
    ulContainer.setAttribute("id", "news-list");
    mainContainer.appendChild(ulContainer);

    // Build a new dictionary of texts, then sort them by date
    var news = [];
    for (var i=0; i<data.length; i++) {
        var newsDate = new Date(data[i].date);
        var newsText = data[i].text;
        news.push( {date: newsDate, text: newsText} );
        newsIdx++;
    }
    const sortedNews = news.sort((a, b) => b.date - a.date);

    var newsIdx = 0;
    while ( (newsIdx < sortedNews.length) && (newsIdx < itemLimit) ) {
        var li = document.createElement("li");
        li.setAttribute("class", "news-item");

        var newsDate = new Date(sortedNews[newsIdx].date);
        var newsText = sortedNews[newsIdx].text;
        li.innerHTML = "<i>[" + newsDate.toDateString() + "]</i> &nbsp;" + newsText;

        ulContainer.appendChild(li);

        newsIdx++;        
    }
/*     var newsIdx = 0;
    while ( (newsIdx < data.length) && (newsIdx < itemLimit) ) {
        // Create the list item HTML container
        var li = document.createElement("li");
        li.setAttribute("class", "news-item");

        var newsDate = new Date(data[newsIdx].date);
        var newsText = data[newsIdx].text;
        li.innerHTML = "<i>[" + newsDate.toDateString() + "]</i> &nbsp;" + newsText;

        ulContainer.appendChild(li);

        newsIdx++;
    } */
}

function GetNewsJSON(itemLimit) {
    fetch('https://raw.githubusercontent.com/rpwiegand/Wiegand-FacultyWebsite/master/scripts/news.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        AppendData(data, itemLimit);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });
}