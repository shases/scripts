const e=document.getElementById("nombreTextarea"),t=document.getElementById("avatarTextarea"),n=document.getElementById("usuarioTextarea"),sourceCode=document.getElementById("sourceCodeTextarea"),a=document.getElementById("applyButton"),buttonsContainer=document.getElementById("buttonsContainer"),copyButton=document.getElementById("copyButton"),resetButton=document.getElementById("resetButton"),l=document.getElementById("outputTextarea");a.addEventListener("click",()=>{let o=sourceCode.value.trim().split("\n"),r=e.value,c=n.value,s=t.value;if(s=s.replace("h120","s360-rw-v1-c-e30"),o.length>0){let d=[];o.forEach(o=>{let c=o.match(/<img[^>]+class="post-thumbnail"[^>]+src=["'](https?:\/\/[^"']+)["'][^>]*>/);if(c){let s=c[1].replace("img.hotleak.vip","www.shases.com"),i=s;d.push(`<a class="imgRA" href="${i.trim()}" data-fancybox="gallery" rel="nofollow"><img class="lazy" data-src="${s.trim()}" src='data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=' alt="Pack porno de ${r.trim()}" height="300" width="300"/></a>`)
}});let i=`${r} onlyfans, ${r} pack, ${r} porn, ${r} xxx, ${r} only fans, pack ${r}
<div class="hidden"><img loading="lazy" height="360" width="360" alt="Pack porno de ${r}" src="${s}"/>@${c}${"<!--"+"more"+"-->"}</div>

${d.join("\n")}`;l.value=i,buttonsContainer.classList.remove("hidden")}}),copyButton.addEventListener("click",()=>{l.select(),document.execCommand("copy")}),resetButton.addEventListener("click",()=>{location.reload()});
