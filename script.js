const programs=[
["U13-U14","Pas + İlk Kontrol","Pas kalitesi, ilk kontrol, topsuz hareket ve karar verme.","Isınma 10 dk → pas tekniği 20 dk → 5v5/6v6 oyun 25 dk → soğuma 10 dk."],
["U11-U12","Top Sürme + 1v1","Top hakimiyeti, yön değiştirme ve bire bir hücum.","Dinamik ısınma → top sürme → 1v1 koridorları → 3v3 oyun."],
["U15-U16","Hücumda Genişlik","Kanat kullanımı, destek açıları ve hücum geçişleri.","Isınma → pozisyonel pas → kanat kombinasyonları → 7v7/8v8."],
["U17-U19","Geçiş Oyunu","Top kazanma/kaybetme anında hızlı karar verme.","Rondo → geçiş oyunu → yönlü küçük alan → 8v8."],
["U9-U10","Topla Tanışma","Temel top hakimiyetini eğlenceli oyunlarla geliştirme.","Hareketli oyun → top sürme → basit pas → 2v2/3v3."],
["U13-U14","Şut + Sonlandırma","Doğru şut seçimi ve hücum sonlandırma.","Isınma → teknik şut → pas sonrası sonlandırma → 4v4 + kaleciler."]
];
function render(){let f=filter.value;cards.innerHTML=programs.filter(x=>f=="all"||x[0]==f).map(x=>`<article class="card"><span class="tag">${x[0]}</span><h3>${x[1]}</h3><p>${x[2]}</p><button onclick="this.parentElement.classList.toggle('open')">Detayları göster</button><div class="details">${x[3]}</div></article>`).join("")}filter.onchange=render;render();
function data(k){return JSON.parse(localStorage.getItem(k)||"[]")}function save(k,v){localStorage.setItem(k,JSON.stringify(v))}
function showPlayers(){players.innerHTML=data("players").map(x=>`<div class="record"><b>${x.name} (${x.age})</b> — Teknik ${x.t}, Taktik ${x.c}, Fiziksel ${x.f}, Zihinsel ${x.m}</div>`).join("")}
savePlayer.onclick=()=>{if(!pn.value.trim())return alert("Oyuncu adı yaz.");let a=data("players");a.push({name:pn.value,age:pa.value,t:pt.value,c:pc.value,f:pf.value,m:pm.value});save("players",a);showPlayers();pn.value=""};showPlayers();
function showMatches(){matches.innerHTML=data("matches").map(x=>`<div class="record"><b>${x.op} — ${x.sc}</b><p>${x.n}</p></div>`).join("")}
saveMatch.onclick=()=>{if(!op.value.trim())return alert("Rakip takımını yaz.");let a=data("matches");a.unshift({op:op.value,sc:sc.value,n:mn.value});save("matches",a);showMatches();op.value=sc.value=mn.value=""};showMatches();
function showNotes(){notes.innerHTML=data("notes").map(x=>`<div class="record"><b>${x.t}</b><p>${x.c}</p></div>`).join("")}
saveNote.onclick=()=>{if(!nt.value.trim())return alert("Başlık yaz.");let a=data("notes");a.unshift({t:nt.value,c:nc.value});save("notes",a);showNotes();nt.value=nc.value=""};showNotes();