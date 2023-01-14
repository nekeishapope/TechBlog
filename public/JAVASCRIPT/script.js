/*
const RSS_URL = `https://www.theverge.com/rss/index.xml`;

fetch(RSS_URL)
  .then(response => response.text())
  .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
  .then(data => {
    console.log(data);
    const items = data.querySelectorAll("item");
    let html = ``;
    items.forEach(el => {
      html += `
        <article>
          <img src="${el.getElementById("link").innerHTML}/image/large.png" alt="">
          <h2>
            <a href="${el.document.getElementById("link").innerHTML}" target="_blank" rel="noopener">
              ${el.getElementById("title").innerHTML}
            </a>
          </h2>
        </article>
      `;
    });
    document.body.insertAdjacentHTML("beforeend", html);
  });*/
function myFunc(){
  document.getElementsByClassName("software").innerHTML = "Hello NIKKI";
}
  (function() {
    // Add event listener
    document.addEventListener("mousemove", parallax);
    const elem = document.querySelector(".software");
    // Magic happens here
    function parallax(e) {
        let _w = window.innerWidth/2;
        let _h = window.innerHeight/2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
        let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
        let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
        let x = `${_depth3}, ${_depth2}, ${_depth1}`;
        console.log(x);
        elem.style.backgroundPosition = x;
    }

})();
   
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
// function redirect()
// {
// var url = "http://www.google.com";
// window.location(url);
// }