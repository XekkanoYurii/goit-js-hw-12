import{S as l,a as d,i as s}from"./assets/vendor-NWtv_cg6.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();function c(o){const i=document.querySelector("ul");let n="";i.insertAdjacentHTML("beforeend",n),o.forEach(r=>{n+=`
        <li id='parent-li'>
            <a href="${r.largeImageURL}">
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
    `}),i.insertAdjacentHTML("beforeend",n),new l("li a",{captionsData:"alt",captionDelay:250})}async function u(o){const i=document.querySelector("#loader");i.style.display="block";const r=`https://pixabay.com/api/?${new URLSearchParams({key:"45503418-8e4034a5d9b1169325787ad22",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;try{const t=(await d.get(r)).data;t.hits.length===0?s.error({message:"Sorry, there are no images matching your search query. Please try again!",color:"#ff0000",position:"topRight"}):c(t.hits)}catch(e){console.error("Error:",e),s.error({message:"Something went wrong. Please try again later.",color:"#ff0000",position:"topRight"})}finally{i.style.display="none"}}document.getElementById("form").addEventListener("submit",function(o){o.preventDefault();let i=o.target.elements.input.value;document.getElementById("main-ul").innerHTML="",i.trim()===""?alert("Please enter a search query."):u(i),o.target.reset()});
//# sourceMappingURL=index.js.map
