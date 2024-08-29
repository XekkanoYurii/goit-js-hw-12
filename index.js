import{S as p,a as f,i as u}from"./assets/vendor-NWtv_cg6.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const d of t.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();let c;function h(o){const r=document.querySelector("ul");let n="";o.forEach(i=>{n+=`
        <li id='parent-li'>
            <a href="${i.largeImageURL}"  class="lightbox">
                <img src="${i.webformatURL}" alt="${i.tags}" data-large-image="${i.largeImageURL}" width="360">
                <ul id="inner-ul">
                    <li id="inner-li">
                        <div id="name">Likes</div>
                        <div id="count">${i.likes}</div>
                    </li>
                    <li id="inner-li">
                        <div id="name">Views</div>
                        <div id="count">${i.views}</div>
                    </li>
                    <li id="inner-li">
                        <div id="name">Comments</div>
                        <div id="count">${i.comments}</div>
                    </li>
                    <li id="inner-li">
                        <div id="name">Downloads</div>
                        <div id="count">${i.downloads}</div>
                    </li>
                </ul>
            </a>
        </li>
        `}),r.insertAdjacentHTML("beforeend",n),c?c.refresh():c=new p(".lightbox",{captionsData:"alt",captionDelay:250})}let s=1,a="";const l=document.querySelector(".loader");l.classList.add("hidden");async function m(o){o!==a&&(a=o,s=1);let r=15;const i=`https://pixabay.com/api/?${new URLSearchParams({key:"45503418-8e4034a5d9b1169325787ad22",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:r,page:s})}`;try{l.classList.remove("hidden"),document.querySelector("span").style.display="block";const t=(await f.get(i)).data;if(document.querySelector("span").style.display="none",t.hits.length===0){u.error({message:"Sorry, there are no images matching your search query. Please try again!",color:"#FF0000",position:"topRight"});return}else h(t.hits);r*s>=t.totalHits?(document.querySelector("#load-more-button").style.display="none",u.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):(document.querySelector("#load-more-button").style.display="block",l.classList.add("hidden")),s++,y()}catch(e){l.classList.add("hidden"),console.error("Error:",e)}}document.addEventListener("DOMContentLoaded",o=>{document.querySelector("#load-more-button").addEventListener("click",()=>{m(a)})});function y(){const o=document.querySelector("#parent-li");if(o){const r=o.getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}}document.getElementById("form").addEventListener("submit",function(o){o.preventDefault();var r=o.target.elements.input.value;document.getElementById("main-ul").innerHTML="",document.getElementById("load-more-button").style.display="none",r.trim()===""?u.warning({message:"Please enter a search query.",position:"topRight"}):m(r),o.target.reset()});
//# sourceMappingURL=index.js.map
