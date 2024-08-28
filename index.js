import{S as m,a as p,i as c}from"./assets/vendor-NWtv_cg6.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();let d;function f(i){const o=document.querySelector("ul");let n="";i.forEach(r=>{n+=`
        <li id='parent-li'>
            <a href="${r.largeImageURL}"  class="lightbox">
                <img src="${r.webformatURL}" alt="${r.tags}" data-large-image="${r.largeImageURL}" width="360">
                <ul id="inner-ul">
                    <li id="inner-li">
                        <div id="name">Likes</div>
                        <div id="count">${r.likes}</div>
                    </li>
                    <li id="inner-li">
                        <div id="name">Views</div>
                        <div id="count">${r.views}</div>
                    </li>
                    <li id="inner-li">
                        <div id="name">Comments</div>
                        <div id="count">${r.comments}</div>
                    </li>
                    <li id="inner-li">
                        <div id="name">Downloads</div>
                        <div id="count">${r.downloads}</div>
                    </li>
                </ul>
            </a>
        </li>
        `}),o.insertAdjacentHTML("beforeend",n),d?d.refresh():d=new m(".lightbox",{captionsData:"alt",captionDelay:250})}let s=1,a="";async function u(i){i!==a&&(a=i,s=1);let o=15;const r=`https://pixabay.com/api/?${new URLSearchParams({key:"45503418-8e4034a5d9b1169325787ad22",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:o,page:s})}`;try{document.querySelector("span").style.display="block";const t=(await p.get(r)).data;if(document.querySelector("span").style.display="none",t.hits.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",color:"#ff0000",position:"topRight"});return}else f(t.hits);o*s>=t.totalHits?(document.querySelector("#load-more-button").style.display="none",c.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):document.querySelector("#load-more-button").style.display="block",s++}catch(e){console.error("Error:",e)}}document.addEventListener("DOMContentLoaded",i=>{document.querySelector("#load-more-button").addEventListener("click",()=>{u(a)})});document.getElementById("form").addEventListener("submit",function(i){i.preventDefault();var o=i.target.elements.input.value;document.getElementById("main-ul").innerHTML="",document.getElementById("load-more-button").style.display="none",o.trim()===""?c.warning({message:"Please enter a search query.",position:"topRight"}):u(o),i.target.reset()});
//# sourceMappingURL=index.js.map
