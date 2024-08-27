import{S as m,i as c,a as f}from"./assets/vendor-NWtv_cg6.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();let d;function p(o){const t=document.querySelector("ul");let n="";t.insertAdjacentHTML("beforeend",n),o.forEach(i=>{n+=`
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
    `}),t.insertAdjacentHTML("beforeend",n),d?d.refresh():d=new m(".lightbox",{captionsData:"alt",captionDelay:250})}let a=1,s="";async function u(o){o!==s&&(s=o,a=1);let t=15;const i=`https://pixabay.com/api/?${new URLSearchParams({key:"45503418-8e4034a5d9b1169325787ad22",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:t,page:a})}`;try{document.querySelector("span.loader").style.display="block";const r=(await f.get(i)).data;r.hits.length===0?c.error({message:"Sorry, there are no images matching your search query. Please try again!",color:"#ff0000",position:"topRight"}):(p(r.hits),t*a>=r.totalHits?(document.querySelector("#load-more-button").style.display="none",c.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):document.querySelector("#load-more-button").style.display="block"),a++}catch(e){console.error("Error:",e)}finally{document.querySelector("span.loader").style.display="none"}}document.getElementById("form").addEventListener("submit",function(o){o.preventDefault();var t=o.target.elements.input.value;document.getElementById("main-ul").innerHTML="",document.getElementById("load-more-button").style.display="none",t.trim()===""?c.warning({message:"Please enter a search query.",position:"topRight"}):u(t),o.target.reset()});document.addEventListener("DOMContentLoaded",o=>{document.querySelector("#load-more-button").addEventListener("click",()=>{u(s)})});document.getElementById("form").addEventListener("submit",function(o){o.preventDefault();var t=o.target.elements.input.value;document.getElementById("main-ul").innerHTML="",document.getElementById("load-more-button").style.display="none",t.trim()===""?alert("Please enter a search query."):u(t),o.target.reset()});
//# sourceMappingURL=index.js.map
