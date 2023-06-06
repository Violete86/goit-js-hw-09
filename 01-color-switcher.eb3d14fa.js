let t;const e=document.querySelector("[data-start]"),o=document.querySelector("[data-stop]");e.style.cssText+=`
      padding: 25px 50px;
      position: absolute;
      top: 50vh;
      left: 50vw;
      transform: translate(-105%, -50%);
      text-transform: uppercase;
  `,o.setAttribute("disabled",""),o.style.cssText+=`
      padding: 25px 50px;
      position: absolute;
      top: 50vh;
      left: 50vw;
      transform: translate(5%, -50%);
      text-transform: uppercase;
  `,e.addEventListener("click",function(){console.log("background color change interval settled to 1000ms"),e.setAttribute("disabled",""),o.removeAttribute("disabled"),t=setInterval(()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`;let t=new Date;console.log(`color changed to -> ${document.body.style.backgroundColor} at ${t.toLocaleTimeString()}`)},1e3)}),o.addEventListener("click",function(){console.log("background color change interval is cleared"),o.setAttribute("disabled",""),e.removeAttribute("disabled"),clearInterval(t)});
//# sourceMappingURL=01-color-switcher.eb3d14fa.js.map
