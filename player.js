// BLOGGER se ads load hona
document.addEventListener("DOMContentLoaded", function() {

    fetch("https://YOURBLOGNAME.blogspot.com/feeds/posts/default/-/ads?alt=json")
        .then(r => r.json())
        .then(data => {

            let content = data.feed.entry[0].content.$t;
            document.getElementById("ad-container").innerHTML = content;

        })
        .catch(err => {
            console.log("Ads load failed", err);
        });

});
