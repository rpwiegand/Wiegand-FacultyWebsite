/** 
 *   Author:  R. Paul Wiegand
 *   Created: 6/17/2021
 * 
 *   This is a very simple script to display news items on a web page.  It reads
 *   a simple JSON file that is a list of items containing two fields (a date and
 *   some text), then it displays the most recent X of these, where X is a parameter
 *   of the GetNewsJSON() function.
 * 
 *   It assumes the existence of a div container with the ID "news-container" in your
 *   HTML and places the list in that container.  All you should need in your HTML (other
 *   than loading this script somewhere) is:
 
    <div id="news-container">
        <script>GetNewsJSON(8);</script>
    </div>

 **/


/**
 *  This function takes a JSON object and an item limit
 *  an modifies the current HTML document to add the 
 *  appropriate items as a list to the document in 
 *  sorted order.
 **/
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
    }
    var sortedNews = news; //news.sort((a, b) => b.date - a.date);

    // Create the list items for just a subset
    var newsIdx = 0;
    while ( (newsIdx < sortedNews.length) && (newsIdx < itemLimit) ) {
        // Create the LI container 
        var li = document.createElement("li");
        li.setAttribute("class", "news-item");

        // Populate the container with the date and the text
        var newsDate = new Date(sortedNews[newsIdx].date);
        var newsText = sortedNews[newsIdx].text;
        li.innerHTML = "<i>[" + newsDate.toDateString() + "]</i> &nbsp;" + newsText;

        // Append the LI to the UL and increment the counter
        ulContainer.appendChild(li);
        newsIdx++;        
    }
}


/**
*  The main function called to get the news list.  This 
*  loads the news.json file right off of GitHub.  So all
*  I ever have to do is edit that JSON then push, and my
*  site should be able to immediately pick up the changes.
**/
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