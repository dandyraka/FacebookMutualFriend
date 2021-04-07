async function main() {
    let min = prompt("Kriteria Mutual (minimal)");
    let match = 0;
    let delay = 100;

    let friends = document.getElementsByClassName("notice ellipsis");

    for (let i = 0; i < friends.length; i++) {
        let text = friends[i].innerHTML;
        let hapus_html = text.replace(/(<([^>]+)>)/ig, "");
        let jm = hapus_html.replace(",", "").match(/\d+/);
        let jum_mutual = text && jm !== null ? jm[0] : 0;

        if (parseInt(jum_mutual) < parseInt(min)) {
            await new Promise(function(resolve) {
                setTimeout(function() {
                    let button = document.querySelectorAll("._54k8._52jg._56bs._26vk._3cqr._8yzo._8yo0._56bt")[i];
                    button.setAttribute("style", "background-color: red");
                    match++;
                    console.log("Mutual : " + jum_mutual + " | Button changed");
                    resolve();
                }, delay);
            });
        }
    }
    console.log("DONE");
    alert(`Ada ${match} teman tidak memenuhi kriteria`);
}

let interval = setInterval(async function() {
    let more = document.getElementsByClassName("seeMoreFriends");
    console.log("Scrolling...");

    if (more.length == 1) {
        setTimeout(function() {
            window.scrollTo(0, document.body.scrollHeight);
        }, 500);
    } else {
        clearInterval(interval);
        await main();
    }
}, 1000);
