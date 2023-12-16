function createCard(title, cName, views, monthsOld, duration, thumbnail) {

    let html = `<div class="card">
    <div class="image">
        <img src="${thumbnail}"
            alt="thumbnail">
        <div class="capsule">${duration}</div>    
    </div>
    <div class="text">
        <h1>${title}</h1>
        <p>${cName} • ${getViews(views)} views • ${monthsOld} months ago</p>
    </div>
</div>`


    let container = document.querySelector(".container");
    container.innerHTML = container.innerHTML + html;
    document.body.style.fontFamily = "sans-serif";
}

function getViews(views) {
    if (views >= 1000000000)
        return views / 1000000000 + "B";
    else if (views >= 1000000)
        return views / 1000000 + "M";
    else if (views >= 1000)
        return views / 1000 + "K";
    else
        return views;
}


createCard("Introduction to Frontend | Sigma Web Dev video #1", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw");


createCard("DOM API - JavaScript Tutorial for beginners", "ColorCode", 14000, 2, "42:17", "https://i.ytimg.com/vi/wbQLEXg_urE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBAG0NF1TJkUBWZ8URgIILL8PaUzQ");

createCard("Introduction to Frontend | Sigma Web Dev video #1", "Programming with Mosh", 7600000, 7, "1:09:34", "https://i.ytimg.com/vi/qz0aGYrrlhU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBdeH_BfAFaKdJmWg3bQhV9m22i7g");


