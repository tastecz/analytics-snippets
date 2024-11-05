function getJson(e){if(!e||!Array.isArray(e)||0===e.length)return;let t={};for(let r in e)
{let s=e[r][0],n=e[r][1];"email"===s||"phone_number"===s?t[s]=n:(t.address||(t.address={}),
t.address[s]=n)}return JSON.stringify(t)}window.__taste=function(e,t,r,s){switch(e)
{case"session_storage":if("set"===t)try{window.sessionStorage.setItem(r,s)}catch(e){}
else{if(!(t="get"))return;try{return window.sessionStorage.getItem(r)}catch(e){}}break;
case"user_data":try{let e=[];for(let s in t){let n=t[s][0],a=t[s][1],o=r?`form${r} `:"";
o+=`input[${a}]`;let i=document.querySelector(o);if(i&&i.value&&""!==i.value)
if("phone_number"===n||"postal_code"===n){let t=i.value;t=t.replace(/\s+/g,""),e.push([n,t])}
else e.push([n,i.value])}return getJson(e)}catch(e){}}};