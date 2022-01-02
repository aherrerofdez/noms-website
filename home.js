let flag = true;

function loadFeed() {
    if (flag) {
        for (let i=0;i < document.querySelectorAll('[id=load-feed]').length; i++) {
            document.querySelectorAll('[id=load-feed]')[i].setAttribute("class", "column3");
        }
    }
    else {
        for (let i=0;i < document.querySelectorAll('[id=load-feed2]').length; i++) {
            document.querySelectorAll('[id=load-feed2]')[i].setAttribute("class", "column3");
        }
        document.getElementById("btn-load").setAttribute("class", "hidden");
    }
    flag = false;
}
