let products = JSON.parse(localStorage.getItem("jc_products") || "null") || PRODUCTS;
const state={cat:"All",q:"",sort:"featured"};
const $=id=>document.getElementById(id);
const money=n=>"₹"+Number(n||0).toLocaleString("en-IN");
const wa=t=>`https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(t)}`;
function esc(s){return String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]))}

function init(){
  document.title=STORE_CONFIG.storeName+" | Sarees & Jewellery";
  $("phone").textContent=STORE_CONFIG.whatsappNumber.replace(/^91/,"+91 ");
  $("location").textContent=STORE_CONFIG.location;
  $("year").textContent=new Date().getFullYear();
  const general=wa(`Hello ${STORE_CONFIG.storeName}, I want to know more about your collection.`);
  ["navWA","heroWA","offerWA","footWA"].forEach(id=>$(id).href=general);
  buildCats(); render();
}
function buildCats(){
  const cats=["All",...new Set(products.map(p=>p.category))];
  $("cats").innerHTML=cats.map(c=>`<button class="cat ${c===state.cat?"active":""}" data-cat="${esc(c)}">${esc(c)}</button>`).join("");
  document.querySelectorAll(".cat").forEach(b=>b.onclick=()=>{state.cat=b.dataset.cat;buildCats();render()});
}
function render(){
  let list=products.filter(p=>(state.cat==="All"||p.category===state.cat)&&(!state.q||[p.name,p.category,p.description,...(p.details||[])].join(" ").toLowerCase().includes(state.q)));
  if(state.sort==="low")list.sort((a,b)=>a.price-b.price);
  if(state.sort==="high")list.sort((a,b)=>b.price-a.price);
  if(state.sort==="az")list.sort((a,b)=>a.name.localeCompare(b.name));
  if(state.sort==="featured")list.sort((a,b)=>Number(b.featured)-Number(a.featured));
  $("empty").hidden=list.length>0;
  $("grid").innerHTML=list.map(p=>`<article class="card" data-id="${p.id}">
    <div class="photo"><img src="${esc(p.image)}" alt="${esc(p.name)}" onerror="this.style.display='none';this.nextElementSibling.style.display='grid'"><div class="missing">Product photo<br><small>${esc(p.image)}</small></div>${p.badge?`<span class="badge">${esc(p.badge)}</span>`:""}</div>
    <div class="body"><p>${esc(p.category)}</p><h3>${esc(p.name)}</h3><div class="price"><b>${money(p.price)}</b>${p.oldPrice?`<del>${money(p.oldPrice)}</del>`:""}</div><span>View details →</span></div>
  </article>`).join("");
  document.querySelectorAll(".card").forEach(c=>c.onclick=()=>open(+c.dataset.id));
}
function open(id){
  const p=products.find(x=>x.id===id);if(!p)return;
  $("mImg").src=p.image;$("mImg").alt=p.name;$("mCat").textContent=p.category;$("mName").textContent=p.name;
  $("mPrice").textContent=money(p.price);$("mOld").textContent=p.oldPrice?money(p.oldPrice):"";
  $("mDesc").textContent=p.description||"";
  $("mDetails").innerHTML=(p.details||[]).map(x=>`<span>✓ ${esc(x)}</span>`).join("");
  $("mWA").href=wa(`Hello ${STORE_CONFIG.storeName}, I am interested in:\n\n${p.name}\nPrice: ${money(p.price)}\n\nPlease share availability and ordering details.`);
  $("modal").classList.add("open");
}
document.querySelectorAll("[data-close]").forEach(x=>x.onclick=()=> $("modal").classList.remove("open"));
$("search").oninput=e=>{state.q=e.target.value.toLowerCase();render()};
$("sort").onchange=e=>{state.sort=e.target.value;render()};
init();
