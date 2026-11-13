const $=e=>document.querySelector(e),render=(e,t,o)=>{document.querySelectorAll(e).forEach(a=>{a.innerHTML=t.map(o).join("")})};document.querySelectorAll("[data-site-footer]").forEach(e=>{e.innerHTML=`
    <div class="mx-auto max-w-site px-4 py-6 sm:px-6 lg:px-8">
      <div class="grid gap-6 sm:grid-cols-2 sm:gap-8">
        <div>
          <p class="text-primary font-serif text-lg font-semibold">Kajakiem do Sauny</p>
          <p class="mt-2 text-sm text-base-content/80">Sp\u0142ywy kajakowe, sauna i noclegi w Marzyszu.</p>
          <p class="mt-1 text-sm text-base-content/80">Marzysz Drugi 35</p>
          ${contact.facebookUrl?`<a href="${contact.facebookUrl}" target="_blank" rel="noopener noreferrer" class="mt-2 inline-block text-sm text-primary underline underline-offset-4 hover:no-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">Facebook<span class="sr-only"> (otwiera si\u0119 w nowej karcie)</span></a>`:""}
        </div>
        <nav aria-label="Nawigacja w stopce">
          <p class="text-primary font-semibold">Odkryj</p>
          <ul class="mt-2 grid gap-2 text-sm sm:grid-cols-2" role="list">
            <li><a class="text-base-content hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary" href="splywy-kajakowe.html">Sp\u0142ywy kajakowe</a></li>
            <li><a class="text-base-content hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary" href="sauna.html">Sauna</a></li>
            <li><a class="text-base-content hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary" href="noclegi.html">Noclegi</a></li>
            <li><a class="text-base-content hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary" href="kontakt.html">Kontakt</a></li>
          </ul>
        </nav>
      </div>
      <div class="border-base-content/15 mt-5 flex flex-col gap-1 border-t pt-4 text-xs text-base-content/70 sm:flex-row sm:justify-between sm:gap-4">
        <p>\xA9 <span data-year>2026</span> Kajakiem do Sauny</p>
        <p>Projekt i realizacja: <a href="https://www.linkedin.com/in/anastasiyakazhemiachka/" class="hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">Anastasiya Kazhemiachka</a></p>
      </div>
    </div>`});const icon={distance:'<path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.5"/>',flag:'<path d="M5 21V4M5 4h11l-2 4 2 4H5"/>',map:'<path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2ZM9 4v14M15 6v14"/>',chevron:'<path d="m9 6 6 6-6 6"/>',check:'<path d="m5 12.5 4.5 4.5L19 7"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',phone:'<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>',star:'<path d="m12 2.5 2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9Z" fill="currentColor"/>',external:'<path d="M7 17 17 7M8 7h9v9"/>',reviews:'<path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>'},svg=(e,t="size-4")=>`<svg class="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${e}</svg>`,actionsSection=(e,t=!1)=>{const o=serviceActions[e],a=locations[e],r=contact.phones[a.phone],m=[{book:!0,cta:"Zadzwo\u0144 i zarezerwuj",title:"Rezerwacja",sub:r.number,paths:icon.phone,text:t&&o.bookDetail?o.bookDetail:o.book,href:`tel:${r.tel}`,label:`Zadzwo\u0144 i zarezerwuj: ${r.number} (${r.label})`},{cta:"Wyznacz tras\u0119",title:"Dojazd",sub:"Mapy Google",paths:icon.distance,external:!0,text:o.directions,href:a.directionsUrl,label:`Wyznacz tras\u0119 do: ${a.name}, Mapy Google`},{cta:"Zobacz opinie",title:"Opinie Google",sub:"Wizyt\xF3wka Google",paths:icon.reviews,external:!0,text:`Przeczytaj opinie go\u015Bci. Otwiera wizyt\xF3wk\u0119 \u201E${a.name}\u201D w Google.`,href:a.url,label:`Zobacz opinie: wizyt\xF3wka ${a.name} w Google`}],l=i=>`
        <li class="${i.book?"bg-primary text-primary-content":""}">
          <a href="${i.href}"${i.external?' target="_blank" rel="noopener noreferrer"':""} aria-label="${i.label}${i.external?" (otwiera si\u0119 w nowej karcie)":""}" class="group flex min-h-16 items-center gap-3 px-4 py-3 transition-colors md:h-full md:flex-col md:items-start md:gap-3 md:p-5 lg:p-6 ${i.book?"hover:bg-primary/90":"hover:bg-accent/60"} focus-visible:outline-primary focus-visible:outline-2 focus-visible:-outline-offset-4">
            <span class="${i.book?"bg-base-100 text-primary":"bg-accent text-primary"} grid size-10 shrink-0 place-items-center rounded-full md:size-12">${svg(i.paths,"size-5 md:size-6")}</span>
            <span class="min-w-0 flex-1 md:flex-none">
              <span class="block font-semibold md:hidden">${i.cta}</span>
              <span class="block text-sm opacity-80 md:hidden">${i.sub}</span>
              <span class="${i.book?"":"text-primary"} hidden font-serif text-xl font-semibold md:block">${i.title}</span>
              <span class="${i.book?"opacity-90":"text-secondary"} mt-1 hidden text-sm md:block">${i.text}</span>
            </span>
            ${svg(i.external?icon.external:icon.arrow,"size-5 shrink-0 opacity-70 md:hidden")}
            <span class="${i.book?"border-base-100 bg-base-100 text-primary":"border-primary text-primary group-hover:bg-primary group-hover:text-primary-content"} mt-auto hidden min-h-11 items-center justify-center gap-2 rounded-full border px-4 text-sm font-semibold transition-colors md:inline-flex lg:px-5">${i.cta}${svg(i.external?icon.external:icon.arrow,"size-4 md:max-lg:hidden")}</span>
          </a>
        </li>`;return`
  <section id="rezerwacja" class="scroll-mt-24" aria-labelledby="rez-title">
    <h2 id="rez-title" class="sr-only">${o.heading}</h2>
    <div class="surface overflow-hidden">
      <ul class="divide-base-300 grid divide-y md:grid-cols-3 md:divide-x md:divide-y-0" role="list">${m.map(l).join("")}
      </ul>
    </div>
  </section>`};document.querySelectorAll("[data-actions]").forEach(e=>{e.innerHTML=actionsSection(e.dataset.actions)});const locationIcon={kayak:'<path d="M2.5 14c4.5-4 14.5-4 19 0-4.5 4-14.5 4-19 0Z"/><path d="m7 5 10 14"/>',sauna:'<path d="M12 3c1 3.5 5 5.5 5 10a5 5 0 0 1-10 0c0-2 1-3 2-4 .3 1.2 1 2 2 2.3C10.5 8.5 11 5.5 12 3Z"/>',stay:'<path d="m3 11 9-7 9 7M5 10v10h14V10M10 20v-5h4v5"/>'},routeItem=e=>`
  <li class="border-b border-base-300 last:border-0">
    <a href="${routePageUrl(e)}" class="flex items-center justify-between gap-3 py-2 hover:underline">
      <span class="text-sm font-medium">${e.name}</span>
      <span class="text-secondary shrink-0 text-xs">${e.distance} \xB7 ${e.duration}</span>
    </a>
  </li>`,kayakPricingCards=()=>kayakPricing.items.map(e=>`
      <li class="surface flex flex-col items-center gap-1 px-5 py-6 text-center">
        <h3 class="text-secondary text-sm font-semibold tracking-wide uppercase">${e.name}</h3>
        <p class="text-primary font-serif text-4xl font-semibold">${e.price}</p>
      </li>`).join(""),pricingHTML=()=>`
  <div class="grid gap-4 sm:grid-cols-3">
    ${kayakPricing.items.map(e=>`
    <article class="surface flex items-baseline justify-between gap-3 p-5 sm:block">
      <h3 class="text-sm font-semibold tracking-wide uppercase">${e.name}</h3>
      <p class="text-primary font-serif text-3xl font-semibold sm:mt-2">${e.price}</p>
    </article>`).join("")}
  </div>
  <p class="badge badge-primary badge-soft mt-4 h-auto py-1.5 text-start whitespace-normal">${kayakPricing.note}</p>
  <p class="text-secondary mt-2 max-w-3xl text-sm">${kayakPricing.details}</p>`;render("[data-pricing]",[0],pricingHTML),render("[data-routes]",routes,e=>`
  <article class="surface group relative flex flex-col overflow-hidden transition-shadow hover:shadow-lg">
    <img src="${e.image}" width="640" height="400" loading="lazy" decoding="async" alt="${e.alt}" class="aspect-[2/1] w-full object-cover">
    <div class="flex flex-1 flex-col gap-2 p-4">
      <h3 class="font-serif text-lg leading-snug font-semibold">${e.name}</h3>
      <p class="text-secondary text-sm">Start: ${e.from} \xB7 Meta: ${e.to}</p>
      <p class="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-medium">
        <span class="flex items-center gap-1.5">${svg(icon.distance)}${e.distance}</span>
        <span class="flex items-center gap-1.5">${svg(icon.clock)}${e.duration}</span>
      </p>
      <a href="${routePageUrl(e)}" aria-label="Zobacz tras\u0119: ${e.name}" class="btn btn-primary btn-sm mt-2 rounded-full">Zobacz tras\u0119 ${svg(icon.arrow,"size-3.5")}</a>
    </div>
  </article>`);const homeIcon='<path d="m3 11 9-7 9 7M5 10v10h14V10M10 20v-5h4v5"/>',houseVisual=(e,t)=>e.hero?`<img src="${e.hero.src}" width="${e.hero.width}" height="${e.hero.height}" loading="lazy" decoding="async" alt="${e.hero.alt}" class="${t} object-cover" style="object-position:${e.hero.position||"50% 50%"}">`:`<div class="${t} from-accent to-primary/30 grid place-items-center bg-linear-to-br text-primary" role="img" aria-label="${e.name}">${svg(homeIcon,"size-16 opacity-70")}</div>`,houseCard=e=>`
  <article class="dest-card">
    <a href="${e.url}" aria-label="Zobacz szczeg\xF3\u0142y: ${e.name}" class="card-link">
    ${houseVisual(e,"dest-card-media")}
    <div class="dest-card-body">
      <h3 class="text-primary font-serif text-xl leading-snug font-semibold">${e.name}</h3>
      <p class="text-secondary text-sm">${e.summary}</p>
      ${e.capacity?`<dl class="border-base-300 flex gap-8 border-t pt-3 text-sm"><div><dt class="text-secondary text-xs tracking-wide uppercase">Liczba go\u015Bci</dt><dd class="text-primary mt-0.5 font-semibold">${e.capacity}</dd></div></dl>`:""}
      <span class="btn btn-primary btn-sm mt-auto self-start rounded-full" aria-hidden="true">Zobacz szczeg\xF3\u0142y ${svg(icon.arrow,"size-3.5")}</span>
    </div>
    </a>
  </article>`;render("[data-houses]",houses,houseCard);const houseRoot=$("[data-house]"),h=houseRoot&&houses.find(e=>e.id===houseRoot.dataset.house);if(h){const e=houses.find(l=>l!==h),t=l=>`<ul class="space-y-1">${l.map(i=>`<li class="flex gap-2">${svg(icon.chevron,"mt-0.5 size-4 shrink-0 text-primary")}${i}</li>`).join("")}</ul>`,o=h.checkIn||h.checkOut?`Zameldowanie: ${h.checkIn??"do uzgodnienia"}<br>Wymeldowanie: ${h.checkOut??"do uzgodnienia"}`:null,a=[["Liczba go\u015Bci",h.capacity],["Zameldowanie i wymeldowanie",o],["Udogodnienia",h.amenities?.length&&t(h.amenities)],["Wyposa\u017Cenie",h.equipment?.length&&t(h.equipment)],["Warunki pobytu",h.conditions?.length&&t(h.conditions)]].filter(([,l])=>l),r=h.hero,m=[{href:e.url,title:e.name,text:"Nocleg w Marzyszu",image:e.hero?.src},{href:"sauna.html",title:"Sauna",text:"Sauna sucha, \u0142a\u017Ania parowa i balia",image:"assets/img/photos/sauna-card.jpg"},{href:"splywy-kajakowe.html",title:"Sp\u0142ywy kajakowe",text:"Pi\u0119\u0107 tras po Czarnej Nidzie",image:"assets/img/photos/kayaking.jpg"}];houseRoot.innerHTML=`
  <section class="torn-bottom ${r?"":"bg-primary"} relative isolate overflow-hidden">
    ${r?`<img src="${r.src}" width="${r.width}" height="${r.height}" fetchpriority="high" decoding="async" alt="${r.alt}" class="absolute inset-0 -z-20 size-full object-cover" style="object-position:${r.position||"50% 50%"}">
    <div class="from-neutral/80 via-neutral/50 to-neutral/10 absolute inset-0 -z-10 bg-linear-to-r"></div>`:'<div class="from-primary to-neutral/70 absolute inset-0 -z-10 bg-linear-to-br"></div>'}
    <div class="hero-inner">
      <p class="mb-2 text-sm tracking-widest uppercase opacity-90">Marzysz \xB7 Noclegi</p>
      <h1 class="font-serif text-4xl font-semibold sm:text-5xl lg:text-6xl">${h.name}</h1>
      <p class="mt-4 max-w-xl text-lg">${h.summary}</p>
    </div>
  </section>

  <nav class="crumbs" aria-label="Breadcrumb">
    <ol><li><a href="index.html">Strona g\u0142\xF3wna</a></li><li><a href="noclegi.html">Noclegi</a></li><li aria-current="page">${h.name}</li></ol>
  </nav>

  <div class="mx-auto max-w-site space-y-14 px-4 py-12 sm:px-6 lg:px-8">
    ${h.photos.length?`<section aria-labelledby="galeria-title">
      <h2 id="galeria-title" class="section-title mb-4">Galeria</h2>
      <ul data-house-gallery role="list"></ul>
    </section>`:""}

    <section aria-labelledby="o-title">
      <h2 id="o-title" class="section-title mb-3">O domku</h2>
      <div class="text-secondary max-w-3xl space-y-3">${h.about.map(l=>`<p>${l}</p>`).join("")}</div>
      ${a.length?`<dl class="surface divide-base-300 mt-6 grid max-w-3xl divide-y sm:grid-cols-2 sm:divide-y-0 [&>div]:border-base-300 sm:[&>div]:border-b">${a.map(([l,i])=>`
        <div class="p-5"><dt class="text-secondary text-xs tracking-wide uppercase">${l}</dt><dd class="mt-1 text-sm">${i}</dd></div>`).join("")}
      </dl>`:""}
    </section>

    ${h.price?`<section aria-labelledby="cena-title" class="surface max-w-xl p-6 sm:p-8">
      <h2 id="cena-title" class="section-title">Cena i dost\u0119pno\u015B\u0107</h2>
      <p class="mt-3 font-serif text-2xl font-semibold">${h.price}</p>
      <p class="text-secondary mt-2 text-sm">Dost\u0119pno\u015B\u0107 potwierdzimy podczas rozmowy \u2013 podaj planowany termin i liczb\u0119 go\u015Bci.</p>
    </section>`:""}

    ${actionsSection("stay",!0)}

    <section aria-labelledby="inne-title">
      <div class="mb-4 flex flex-wrap items-baseline justify-between gap-2">
        <h2 id="inne-title" class="section-title">Zobacz tak\u017Ce</h2>
        <a href="noclegi.html" class="link-more">Wszystkie noclegi</a>
      </div>
      <ul class="grid gap-3 md:grid-cols-3" role="list">
        ${m.map(l=>`
        <li><a href="${l.href}" class="surface hover:bg-accent/50 flex h-full items-center gap-3 p-3 transition-colors">
          ${l.image?`<img src="${l.image}" width="640" height="480" loading="lazy" decoding="async" alt="" class="aspect-[4/3] w-24 shrink-0 rounded-field object-cover">`:""}
          <span class="min-w-0"><span class="text-primary block font-serif text-lg leading-snug font-semibold">${l.title}</span><span class="text-secondary block text-sm">${l.text}</span></span>
        </a></li>`).join("")}
      </ul>
    </section>
  </div>
`,initGallery(houseRoot.querySelector("[data-house-gallery]"),h.photos)}const contactRoot=$("[data-contact]");if(contactRoot){const e='<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>',t='<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',o='<path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.5"/>',a='<path d="m3 11 18-8-8 18-2-8-8-2Z"/>',r='<path d="M7 17 17 7M8 7h9v9"/>',m='<path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.3H8v3h2.5V21Z" fill="currentColor" stroke="none"/>',l="(otwiera si\u0119 w nowej karcie)",i=contact.address.lines[0],y=Object.entries(locations).map(([x,c])=>{const b=contact.phones[c.phone];return`
    <article class="surface grid overflow-hidden sm:grid-cols-[2fr_3fr] lg:grid-cols-[38fr_62fr]" aria-labelledby="svc-${x}">
      <div class="relative h-33 sm:h-auto sm:min-h-60 lg:min-h-56">
        <img src="${c.image.src}" width="${c.image.width}" height="${c.image.height}" alt="${c.image.alt}" loading="lazy" decoding="async" class="absolute inset-0 size-full object-cover object-(position:--pos-sm) sm:object-(position:--pos)" style="--pos:${c.image.position};--pos-sm:${c.image.positionSm??c.image.position}">
      </div>
      <div class="flex flex-col gap-3 px-5 pt-4 pb-2 sm:justify-center sm:gap-4 sm:px-7 sm:py-6 lg:px-9 lg:py-7">
        <div class="min-w-0">
          <h3 id="svc-${x}" class="text-primary font-serif text-2xl leading-tight font-semibold sm:text-3xl">${c.service}</h3>
          <p class="text-secondary mt-1 text-sm">${c.name}</p>
          <p class="mt-2 flex items-center gap-1.5 text-sm"><span class="text-primary">${svg(o,"size-4 shrink-0")}</span>${i}</p>
        </div>
        <div class="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-3 sm:gap-y-2">
          <a href="tel:${b.tel}" aria-label="Zadzwo\u0144: ${b.number} (${c.service})" class="btn btn-primary h-auto min-h-14 flex-col gap-0 rounded-full px-3 py-2 font-normal normal-case sm:flex-1 sm:basis-44">
            <span class="text-xs opacity-90">Zadzwo\u0144</span><span class="text-lg font-semibold">${b.number}</span>
          </a>
          <a href="${c.directionsUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-primary min-h-12 rounded-full sm:min-h-15.5 sm:flex-1 sm:basis-44">${svg(a)}Wyznacz tras\u0119<span class="sr-only"> do: ${c.name} ${l}</span></a>
          <a href="${c.url}" target="_blank" rel="noopener noreferrer" class="link-more inline-flex min-h-11 items-center gap-1.5 self-center sm:min-h-10 sm:basis-full sm:self-auto">Zobacz opinie w Google${svg(r,"size-3.5")}<span class="sr-only">: ${c.name} ${l}</span></a>
        </div>
      </div>
    </article>`}).join(""),g=contact.facebookUrl?`<li class="flex items-center gap-3"><span class="text-primary">${svg(m,"size-5")}</span><a href="${contact.facebookUrl}" target="_blank" rel="noopener noreferrer" class="link-more inline-flex min-h-11 items-center text-base">Facebook<span class="sr-only"> ${l}</span></a></li>`:"";contactRoot.innerHTML=`
    <section id="mapa" class="scroll-mt-24" aria-labelledby="uslugi-title">
      <h2 id="uslugi-title" class="sr-only">Kontakt wed\u0142ug us\u0142ugi</h2>
      <div class="grid gap-4">${y}</div>
    </section>
    <section aria-labelledby="inne-title" class="surface mt-4 p-4 sm:p-5 lg:flex lg:items-center lg:justify-between lg:gap-6">
      <h2 id="inne-title" class="text-primary font-serif text-xl font-semibold">Pozosta\u0142e dane kontaktowe</h2>
      <ul class="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:gap-x-8 lg:mt-0" role="list">
        <li class="flex items-center gap-3"><span class="text-primary">${svg(t,"size-5")}</span><a href="mailto:${contact.email}" class="link-more inline-flex min-h-11 items-center text-base break-all">${contact.email}</a></li>
        ${g}
      </ul>
    </section>`}document.querySelectorAll("[data-facebook-link]").forEach(e=>{social.facebookPageUrl&&(e.href=social.facebookPageUrl,e.target="_blank",e.rel="noopener noreferrer",e.removeAttribute("aria-disabled"))}),document.querySelectorAll("[data-facebook-cta]").forEach(e=>{e.hidden=!social.facebookPageUrl}),document.querySelectorAll("[data-facebook-fallback]").forEach(e=>{e.hidden=!!social.facebookPageUrl}),document.querySelectorAll("[data-facebook-embed]").forEach(e=>{if(!social.facebookEventsPostUrl)return;const t=`https://www.facebook.com/plugins/post.php?href=${encodeURIComponent(social.facebookEventsPostUrl)}&width=500&show_text=true`;e.innerHTML=`<iframe src="${t}" title="Wydarzenia \u2014 post z Facebooka" width="500" height="560" loading="lazy" class="mx-auto max-w-full border-0" allow="encrypted-media"></iframe>`,e.classList.remove("border-dashed","bg-accent/50")}),document.querySelectorAll("[data-sauna-price]").forEach(e=>{const t=saunaPrices[e.dataset.saunaPrice];t?.from?e.textContent=`od ${t.from} z\u0142`:e.parentElement.hidden=!0}),document.querySelectorAll("[data-faq]").forEach(e=>{e.innerHTML=faq[e.dataset.faq].map(t=>`
  <details class="collapse collapse-plus border-b border-base-300 rounded-none">
    <summary class="collapse-title min-h-0 py-3 text-sm font-medium">${t.question}</summary>
    <div class="collapse-content text-secondary text-sm">
      ${t.verified?"":'<span class="badge badge-warning badge-soft badge-sm mb-1">Do weryfikacji</span>'}
      <p>${t.answer}</p>
    </div>
  </details>`).join("")});const googleReviewCard=e=>{const t=locations[e.service];return`
    <li><figure class="surface flex h-full flex-col gap-2.5 p-4">
      <p class="flex items-center gap-2 text-xs">
        <span class="bg-accent text-primary inline-flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1 font-semibold">${svg(locationIcon[t.icon],"size-3.5")}${t.service}</span>
      </p>
      <div class="flex items-center gap-2.5">
        <span class="bg-accent text-primary hidden size-9 shrink-0 place-items-center rounded-full text-sm font-semibold sm:grid" aria-hidden="true">${e.name[0].toUpperCase()}</span>
        <div class="flex min-w-0 flex-1 items-center justify-between gap-2 sm:block">
          <figcaption class="truncate text-sm font-semibold">${e.name}</figcaption>
          <p class="flex shrink-0 text-amber-500" role="img" aria-label="Ocena: ${e.rating} na 5">${Array.from({length:e.rating},()=>svg(icon.star,"size-3.5")).join("")}</p>
        </div>
      </div>
      <blockquote class="text-secondary text-sm">${e.text}${e.excerpt?"&nbsp;\u2026":""}</blockquote>
      <a href="${t.url}" target="_blank" rel="noopener noreferrer" aria-label="Zobacz w Google: ${t.name} (otwiera si\u0119 w nowej karcie)" class="link-more mt-auto -mb-2 inline-flex min-h-11 items-center gap-1 self-start">Zobacz w Google ${svg(icon.arrow,"size-3.5")}</a>
    </figure></li>`};render("[data-google-review-cards]",google.reviews,googleReviewCard);const season=seasons[config.featuredSeason],heroCta=$("[data-hero-cta]");heroCta&&season&&(heroCta.href=season.heroCta.href,heroCta.querySelector("[data-label]").textContent=season.heroCta.label);const highlight=$("[data-seasonal]");if(highlight&&season){const e=config.featuredSeason==="winter"?`<p class="text-secondary my-3 text-sm">Programy i terminy seans\xF3w publikujemy na Facebooku.</p>
       <a href="sauna.html#wydarzenia" class="btn btn-primary btn-sm rounded-full">Zobacz wydarzenia ${svg(icon.arrow,"size-3.5")}</a>`:`<p class="badge badge-warning badge-soft badge-sm my-2">${season.listNote}</p><ul>${routes.slice(0,3).map(routeItem).join("")}</ul>`,t=season.image;highlight.innerHTML=`
    <div class="mx-auto grid max-w-site lg:grid-cols-[1.6fr_1fr]">
      <div class="torn-bottom relative isolate flex min-h-[24rem] items-center overflow-hidden px-4 py-14 sm:px-8">
        <img src="${t.src}" width="${t.width}" height="${t.height}" loading="lazy" decoding="async" alt="${t.alt}" class="absolute inset-0 -z-20 size-full object-cover" style="object-position:${t.position}">
        <div class="absolute inset-0 -z-10 bg-neutral/60"></div>
        <div class="max-w-lg text-white">
          <p class="mb-2 text-sm tracking-widest uppercase opacity-90">${season.label}</p>
          <h2 class="font-serif text-3xl font-semibold sm:text-4xl">${season.title}</h2>
          <p class="mt-4">${season.text}</p>
          <a href="${season.cta.href}" class="btn mt-6 rounded-full border-base-100 bg-base-100 text-primary">${season.cta.label} ${svg(icon.arrow)}</a>
        </div>
      </div>
      <aside class="surface m-4 p-5 sm:p-6 lg:my-4 lg:mr-0" aria-labelledby="seasonal-list-title">
        <h3 id="seasonal-list-title" class="section-title">${season.listTitle}</h3>
        ${e}
      </aside>
    </div>`}document.querySelectorAll("[data-carousel]").forEach(e=>{const t=e.querySelector("[data-carousel-track]"),o=e.querySelector("[data-carousel-dots]"),a=[...t.children];if(a.length<2)return;const r=matchMedia("(prefers-reduced-motion: reduce)"),m=e.querySelectorAll("[data-carousel-step]"),l=e.querySelector("[data-carousel-count]"),i=e.hasAttribute("data-carousel-visible-focus"),y=a.map((n,d)=>{const s=document.createElement("button");return s.type="button",s.className="grid size-11 place-items-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-[-6px] focus-visible:outline-primary",s.setAttribute("aria-label",`${o.dataset.label} ${d+1} z ${a.length}`),s.innerHTML='<span class="bg-primary/25 block h-2.5 w-2.5 rounded-full transition-all"></span>',s.addEventListener("click",()=>c(d)),o.append(s),s}),g=()=>parseFloat(getComputedStyle(t).scrollPaddingLeft)||0,x=()=>{if(t.scrollLeft+t.clientWidth>=t.scrollWidth-1)return a.length-1;const n=t.getBoundingClientRect().left+g();return a.reduce((d,s,p)=>Math.abs(s.getBoundingClientRect().left-n)<Math.abs(a[d].getBoundingClientRect().left-n)?p:d,0)},c=n=>{const s=a[Math.max(0,Math.min(a.length-1,n))].getBoundingClientRect().left-t.getBoundingClientRect().left-g();t.scrollBy({left:s,behavior:r.matches?"auto":"smooth"})},b=()=>{const n=t.getBoundingClientRect();return a.map((d,s)=>[s,d.getBoundingClientRect()]).filter(([,d])=>d.left>=n.left-1&&d.right<=n.right+1).map(([d])=>d)},w=n=>{const d=a[1].getBoundingClientRect().left-a[0].getBoundingClientRect().left;t.scrollBy({left:n*d,behavior:r.matches?"auto":"smooth"})},v=()=>{const n=t.scrollWidth>t.clientWidth+1;if(n?t.setAttribute("tabindex","0"):t.removeAttribute("tabindex"),l||i){const s=b();l&&s.length&&(l.textContent=s.length>1?`${s[0]+1}\u2013${s[s.length-1]+1} z ${a.length}`:`${s[0]+1} z ${a.length}`),i&&a.forEach((p,u)=>p.querySelectorAll("a[href], button").forEach(f=>{!n||s.includes(u)?f.removeAttribute("tabindex"):f.setAttribute("tabindex","-1")}))}m.forEach(s=>{const p=Number(s.dataset.carouselStep)<0?t.scrollLeft<=1:t.scrollLeft+t.clientWidth>=t.scrollWidth-1;s.setAttribute("aria-disabled",String(p)),s.classList.toggle("opacity-40",p)});const d=x();y.forEach((s,p)=>{const u=p===d;u?s.setAttribute("aria-current","true"):s.removeAttribute("aria-current");const f=s.firstElementChild;f.classList.toggle("bg-primary",u),f.classList.toggle("bg-primary/25",!u),f.classList.toggle("w-6",u),f.classList.toggle("w-2.5",!u)})};t.addEventListener("scroll",v,{passive:!0}),m.forEach(n=>n.addEventListener("click",()=>{n.getAttribute("aria-disabled")!=="true"&&w(Number(n.dataset.carouselStep))})),t.addEventListener("keydown",n=>{n.target!==t||!["ArrowLeft","ArrowRight","Home","End"].includes(n.key)||(n.preventDefault(),n.key==="Home"?c(0):n.key==="End"?c(a.length-1):w(n.key==="ArrowRight"?1:-1))}),new ResizeObserver(v).observe(t),v()}),document.querySelectorAll("[data-rituals]").forEach(e=>{const t=matchMedia("(min-width: 40rem)"),o=()=>{e.open=t.matches};o(),t.addEventListener("change",o)}),document.addEventListener("click",e=>{e.target.closest('a[aria-disabled="true"]')&&e.preventDefault()}),(()=>{const e=document.body.dataset.phonePrimary==="kayak"?"kayak":"main",t={primary:e,secondary:e==="kayak"?"main":"kayak"};document.querySelectorAll("[data-phone]").forEach(o=>{const a=contact.phones[t[o.dataset.phone]??o.dataset.phone];o.href=`tel:${a.tel}`;const r=o.querySelector("[data-phone-text]");r&&(r.textContent="label"in o.dataset?`${a.number} \xB7 ${a.label}`:a.number),o.setAttribute("aria-label",`Zadzwo\u0144: ${a.number} (${a.label})`)})})(),document.querySelectorAll("[data-year]").forEach(e=>{e.textContent=new Date().getFullYear()});
