new Promise(function(e,t){var n=setTimeout(function(){t(Error("First promise was rejected"))},3e3);document.addEventListener("click",function(t){t.preventDefault(),clearTimeout(n),e("First promise was resolved")})}).then(function(e){var t=document.createElement("div");t.classList.add("success"),t.setAttribute("data-qa","notification"),t.textContent="".concat(e),document.body.appendChild(t)}).catch(function(e){var t=document.createElement("div");t.classList.add("error"),t.setAttribute("data-qa","notification"),t.textContent="".concat(e),document.body.appendChild(t)}),new Promise(function(e){document.addEventListener("click",function(t){t.preventDefault(),e("Second promise was resolved")}),document.addEventListener("contextmenu",function(t){t.preventDefault(),e("Second promise was resolved")})}).then(function(e){var t=document.createElement("div");t.classList.add("success"),t.setAttribute("data-qa","notification"),t.textContent="".concat(e),document.body.appendChild(t)});var e=!1,t=!1;new Promise(function(n){document.addEventListener("click",function(o){o.preventDefault(),e=!0,t&&n("Third promise was resolved")}),document.addEventListener("contextmenu",function(o){o.preventDefault(),t=!0,e&&t&&n("Third promise was resolved")})}).then(function(e){var t=document.createElement("div");t.classList.add("success"),t.setAttribute("data-qa","notification"),t.textContent="".concat(e),document.body.appendChild(t)});
//# sourceMappingURL=index.9d5cb70e.js.map