//https://stackoverflow.com/questions/53541335/fire-event-when-arriving-in-page-with-anchor

// If person arrived from clicking on specific section of a page, then click button for them.
// Only runs once (when page is loaded)
var hash = window.location.hash;
console.log(hash);
if (hash != ""){
    var arr = hash.split('#')
    var id = arr[1];
    var anchor_tag = document.getElementById(id);
    anchor_tag.click();
}

// Might be useful for when link is on same page?
// https://stackoverflow.com/questions/19299220/is-there-an-event-that-fires-when-a-browser-scrolls-to-a-named-anchor