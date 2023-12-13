let button = document.getElementById('btn');
// We can listen to events using 

// Some types of Events are:
// mouse events
// keyboard events
// form events

// List of all mouse events
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

button.addEventListener("dblclick", () => {
    document.querySelector('.box').innerHTML = "<b>Yayy you were clicked</b> Enjoy your click!"
})

button.addEventListener("contextmenu", () => {
    alert("Don't hack us by Right Click Please!")
})

button.addEventListener("keydown", (e) => {
    console.log(e);
    console.log(e.key, e.keyCode);
})
