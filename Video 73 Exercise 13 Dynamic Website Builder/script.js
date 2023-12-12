function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    // finish this fumction
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    document.body.style.fontFamily = "sans-serif";

    let container = document.querySelector(".container");
    let card = document.createElement('div');

    card.setAttribute("class", "card");
    container.append(card);
    // thumbnail div
    let image = document.createElement("div");
    image.className = "thumbnail";
    image.setAttribute("style", "position: relative");
    // img tag
    let img = document.createElement('img');
    img.setAttribute("src", thumbnail);
    img.setAttribute("width", "190");
    img.style.borderRadius = "10px";
    image.append(img);
    
    // time duration
    let td = document.createElement('div');
    td.style.backgroundColor = "black";
    td.style.height = "16px";
    td.style.width = "40px";
    td.style.color = "white";
    td.style.fontSize = "12px";
    td.style.textAlign = "center";
    td.style.borderRadius = "5px";
    td.style.position = "absolute";
    td.style.bottom = "10px";
    td.style.right = "7px";
    td.innerText = duration;

    card.append(image);
    image.append(td);
    let text = document.createElement('div');
    text.className = "text";
    image.after(text);

    // title
    let head = document.createElement('h1');
    head.innerText = title;
    head.setAttribute("style", `
        font-size: 1.5rem; 
        margin: 4px 0px; 
        font-family: sans-serif;
    `);

    // heading
    let tText = document.createElement('div');
    tText.append(head);
    text.append(tText);
    

    // channel name
    let chanName = document.createElement('span');
    chanName.innerText = cName + " • ";
    // views
    let vcount = document.createElement('span');
    vcount.innerText = getViews(views) + " • ";
    // months old
    let old = document.createElement('span');
    old.innerText = monthsOld + " months ago";
    
    // sub text
    let sText = document.createElement('div');
    text.append(sText);
    sText.append(chanName);
    sText.append(vcount);
    sText.append(old);

    // card.insertAdjacentElement("beforeend",text);
    container.setAttribute("style", "display: flex; flex-direction: column; gap: 15px; margin: 20px 10px")
    card.setAttribute("style", "display: flex; gap: 10px")
    text.setAttribute("style", `
    display: flex;
    flex-direction: column;
    gap: 0.5rem
    `)
    sText.setAttribute("style", `
    font-size: 13px;
    opacity: 0.6;
    `)
}

function getViews(views) {
    if(views >= 1000000000)
    return views/1000000000 + "B";
    else if(views >= 1000000)
    return views/1000000 + "M";
    else
    return views/1000 + "K";
}

createCard("Introduction to Frontend | Sigma Web Dev video #1", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw");
createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 8670000, 8, "21:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw");
createCard("Introduction to Database | Sigma Web Dev video #3", "CodeWithHarry", 5600000000, 9, "33:52", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw");

