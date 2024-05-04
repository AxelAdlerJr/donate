(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(webP.height == 2);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = support === true ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let popup = document.querySelector(".popup");
    let hiddimg = document.querySelector(".home__img--top");
    let hiddhom = document.querySelector(".home__body");
    let btncopy = document.querySelectorAll(".column__mains--item");
    if (popup) {
        setTimeout((() => {
            popupOpen();
        }), 1000);
        document.querySelector(".img__close--popup").addEventListener("click", (() => {
            popupClose();
        }));
    }
    function popupClose() {
        popup.classList.add("pop__hidden");
        hiddimg.classList.remove("none");
        hiddhom.classList.remove("none");
    }
    function popupOpen() {
        popup.classList.remove("pop__hidden");
        hiddimg.classList.add("none");
        hiddhom.classList.add("none");
    }
    if (btncopy) btncopy.forEach((btn => {
        btn.addEventListener("click", (e => {
            e.preventDefault();
            if (e.target.parentNode.className == "item__centr--img") {
                let cp = btn.querySelector(".buttom__item--text");
                let cptext = cp.textContent;
                navigator.clipboard.writeText(cp.textContent.trim()).then((() => {
                    cp.innerText = "Copied";
                    console.log(cptext.trim());
                    setTimeout((() => {
                      cp.innerText = cptext.trim();
                }), 1000);
                })).catch((() => {
                    cp.innerText = "Not copied";
                    setTimeout((() => {
                        cp.innerText = cptext.trim();
                  }), 1000);
                }));
            }
        }));
    }));
    window["FLS"] = true;
    isWebp();
})();