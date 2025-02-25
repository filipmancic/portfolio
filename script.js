let mouseCursor=document.querySelector(".cursor");
window.addEventListener("mousemove", cursor);
window.addEventListener("wheel", cursor);
var list = document.querySelectorAll("h1, h2, h3, p, span, li, a, label, input, img");

function cursor(e){
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}

list.forEach(link => {
    link.addEventListener("mouseleave", () =>{
        mouseCursor.classList.remove("link-grow");
    });
    link.addEventListener("mouseover", () => {
        mouseCursor.classList.add("link-grow");
    })
})

document.onclick = () => applyCursorRippleEffect(event); 

function applyCursorRippleEffect(e) {
   const ripple = document.createElement("div");

   ripple.className = "ripple";
   document.body.appendChild(ripple);

  ripple.style.left = `${e.clientX}px`;
  ripple.style.top = `${e.clientY}px`; 

   ripple.style.animation = "ripple-effect .4s  linear";
   ripple.onanimationend = () => document.body.removeChild(ripple);

}

const deviceType = () => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        $(".cursor").css("display", "none");
    }
    else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
        $(".cursor").css("display", "none");
    }
};

window.addEventListener("load", deviceType);