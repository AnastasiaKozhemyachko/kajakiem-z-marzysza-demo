const routeCopy={"sukow-papiernia-kuby-mlyny":{about:"To najkr\xF3tsza z naszych propozycji, dlatego dobrze sprawdza si\u0119, gdy sp\u0142yw ma by\u0107 tylko jednym z punkt\xF3w planu dnia.",hero:{img:"k4",alt:"Rz\u0105d kolorowych kajak\xF3w na trawie przed drewnian\u0105 wiat\u0105"}},"marzysz-morawica":{intro:"Sp\u0142yw, kt\xF3ry zaczyna si\u0119 u nas \u2013 w Marzyszu.",about:"Trasa zaczyna si\u0119 przy naszej bazie. Szczeg\xF3\u0142y organizacyjne ustalamy przy rezerwacji.",hero:{img:"k0",alt:"Kajaki ustawione na trawie przy wiacie w s\u0142oneczny dzie\u0144"}},"morawica-wolica":{about:"Odcinek na p\xF3\u0142 dnia. Warto zabra\u0107 ze sob\u0105 co\u015B do jedzenia i zaplanowa\u0107 przerwy.",hero:{img:"k7",alt:"Zielone kajaki przed drewnian\u0105 wiat\u0105"}},"morawica-tokarnia":{about:"Najd\u0142u\u017Cszy z proponowanych odcink\xF3w \u2013 dla grup, kt\xF3re chc\u0105 sp\u0119dzi\u0107 nad rzek\u0105 wi\u0119ksz\u0105 cz\u0119\u015B\u0107 dnia. Dobrze wyruszy\u0107 odpowiednio wcze\u015Bnie.",hero:{img:"k6",alt:"Rz\u0105d ciemnozielonych kajak\xF3w z czerwonymi wios\u0142ami na trawie"}},"tokarnia-stare-kotlice":{about:"Ca\u0142odzienna wyprawa \u2013 dla tych, kt\xF3rzy lubi\u0105 d\u0142u\u017Csze sp\u0142ywy i wol\u0105 si\u0119 nie spieszy\u0107.",hero:{img:"k1",alt:"Kajaki ustawione na trawie w\u015Br\xF3d drzew"}}},photoPool=["k0","k1","k3","k4","k6","k7","k8","k9","k10"],galleryAlt={k0:"Kajaki w rz\u0119dzie na trawie, w tle wiata i zaplecze bazy",k1:"Kajaki ustawione na trawie pod drzewami",k3:"\u017B\xF3\u0142to-zielone kajaki przed drewnian\u0105 wiat\u0105",k4:"Rz\u0105d kajak\xF3w na trawie wzd\u0142u\u017C drewnianej wiaty",k6:"Ciemnozielone kajaki z czerwonymi wios\u0142ami",k7:"Dwa kajaki z wios\u0142ami przed wiat\u0105",k8:"Kajaki na trawie w s\u0142o\u0144cu",k9:"Dzi\xF3b zielonego kajaka na trawie",k10:"Kajaki z siedziskami i czerwonymi wios\u0142ami"};(()=>{const s=document.querySelector("[data-route]"),e=s&&routes.find(a=>a.slug===s.dataset.route);if(!e)return;const r=routeCopy[e.slug],o=a=>parseFloat(a.distance.replace(",",".")),g=routes.filter(a=>a!==e).sort((a,i)=>Math.abs(o(a)-o(e))-Math.abs(o(i)-o(e))).slice(0,3),x=(a="size-4")=>`<svg class="${a}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`;document.title=`Trasa ${e.name} \u2014 Sp\u0142ywy kajakowe \u2014 Kajakiem do Sauny`,s.innerHTML=`
  <section class="torn-bottom relative isolate overflow-hidden" aria-labelledby="route-title">
    <img src="assets/img/kayaks/${r.hero.img}.jpg" width="1400" height="788" fetchpriority="high" decoding="async" alt="${r.hero.alt}" class="absolute inset-0 -z-20 size-full object-cover">
    <div class="from-neutral/85 via-neutral/60 to-neutral/25 absolute inset-0 -z-10 bg-linear-to-r"></div>
    <div class="hero-inner">
      <p class="mb-2 text-sm tracking-widest uppercase opacity-90">Trasa sp\u0142ywu kajakowego</p>
      <h1 id="route-title" class="font-serif text-3xl font-semibold sm:text-5xl">${e.name}</h1>
      <p class="mt-3 max-w-xl text-lg">${r.intro??e.summary}</p>
      <dl class="route-facts">
        ${[["Start",e.from],["Meta",e.to],["Dystans",e.distance],["Czas",e.duration]].map(([a,i])=>`
        <div><dt>${a}</dt><dd>${i}</dd></div>`).join("")}
      </dl>
    </div>
  </section>

  <nav class="crumbs" aria-label="Breadcrumb">
    <ol><li><a href="index.html">Strona g\u0142\xF3wna</a></li><li><a href="splywy-kajakowe.html">Sp\u0142ywy kajakowe</a></li><li aria-current="page">${e.name}</li></ol>
  </nav>

  <div class="mx-auto max-w-site space-y-12 px-4 py-10 sm:px-6 lg:px-8">
    <section aria-labelledby="galeria-title">
      <h2 id="galeria-title" class="section-title mb-1">Galeria</h2>
      <p class="text-secondary mb-4 text-sm">Zdj\u0119cia ze sp\u0142yw\xF3w kajakowych</p>
      <ul data-route-gallery role="list"></ul>
    </section>

    <section aria-labelledby="o-trasie-title" data-route-map>
      <h2 id="o-trasie-title" class="section-title mb-3">O trasie</h2>
      <p class="text-secondary mb-6 max-w-3xl text-lg">${r.about}</p>
      <h3 class="sr-only">Przebieg trasy</h3>
      <div data-route-map-box></div>
    </section>
  </div>

  <section id="cennik" class="bg-accent/60 scroll-mt-24 py-12" aria-labelledby="cennik-title">
    <div class="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
      <h2 id="cennik-title" class="section-title mb-6">Cennik</h2>
      <ul class="grid gap-4 sm:grid-cols-3" role="list">${kayakPricingCards()}</ul>
    </div>
  </section>

  <div class="mx-auto max-w-site space-y-12 px-4 py-10 sm:px-6 lg:px-8">
    <section aria-labelledby="inne-title">
      <div class="mb-4 flex flex-wrap items-baseline justify-between gap-2">
        <h2 id="inne-title" class="section-title">Inne trasy</h2>
        <a href="splywy-kajakowe.html#trasy" class="link-more">Wszystkie trasy sp\u0142yw\xF3w</a>
      </div>
      <ul class="grid gap-3 md:grid-cols-3" role="list">
        ${g.map(a=>`
        <li><a href="${routePageUrl(a)}" class="surface hover:bg-accent/50 flex h-full items-center gap-3 p-3 transition-colors">
          <img src="${a.image}" width="640" height="400" loading="lazy" decoding="async" alt="" class="aspect-[4/3] w-24 shrink-0 rounded-field object-cover">
          <span class="min-w-0"><span class="text-primary block font-serif text-lg leading-snug font-semibold">${a.name}</span><span class="text-secondary block text-sm">${a.distance} \xB7 ${a.duration}</span></span>
        </a></li>`).join("")}
      </ul>
    </section>

    ${actionsSection("kayak",!0)}
  </div>`;const c=photoPool.filter(a=>a!==r.hero.img),m=routes.indexOf(e)%c.length,h=[...c.slice(m),...c.slice(0,m)];initGallery(s.querySelector("[data-route-gallery]"),h.map(a=>({src:`assets/img/kayaks/${a}.jpg`,width:1400,height:788,alt:galleryAlt[a]})));const t=routeGeometry[e.slug],n=s.querySelector("[data-route-map-box]"),w=a=>a&&Number.isFinite(a.lat)&&Number.isFinite(a.lng),z=!!t&&(!!t.geojson||Array.isArray(t.track)&&t.track.length>=2),y=a=>`https://www.google.com/maps/dir/?api=1&destination=${a.lat},${a.lng}`;if(!t||!w(t.start)||!w(t.finish)){n.innerHTML=`
    <div class="surface bg-accent/50 p-5">
      <p class="text-primary font-serif text-lg font-semibold">Mapa tej trasy jest w przygotowaniu</p>
      <p class="text-secondary mt-1 text-sm">Nie mamy jeszcze potwierdzonego przebiegu ani miejsc startu i mety, dlatego nie pokazujemy linii na mapie. Szczeg\xF3\u0142y ustalamy przy rezerwacji \u2014 <a href="kontakt.html" class="link link-primary">skontaktuj si\u0119 z nami</a>.</p>
    </div>`;return}const f=t.verified===!0?"Trasa sp\u0142ywu":"Orientacyjna trasa",k=a=>`<svg width="14" height="14" aria-hidden="true" class="shrink-0"><circle cx="7" cy="7" r="5.5" fill="${a?"#1f4d3f":"#fff"}" stroke="#1f4d3f" stroke-width="2"/></svg>`;n.innerHTML=`
    <div class="surface overflow-hidden" data-map-frame>
      <div class="relative h-72 w-full sm:h-96 lg:h-[32rem]" data-map-wrap>
        <div data-map-canvas class="bg-accent h-full w-full" role="region" aria-label="Interaktywna mapa trasy ${e.name}"></div>
        <div data-map-status class="bg-accent/90 absolute inset-0 z-10 flex items-center justify-center p-6 text-center" role="status"><p class="text-secondary">\u0141adowanie mapy\u2026</p></div>
      </div>
    </div>
    <ul class="text-primary mt-3 flex flex-wrap items-center gap-x-5 gap-y-1 text-sm font-medium" role="list">
      ${z?`<li class="flex items-center gap-2"><svg width="36" height="12" aria-hidden="true" class="shrink-0"><line x1="3" y1="6" x2="33" y2="6" stroke="#fff" stroke-width="10" stroke-linecap="round"/><line x1="3" y1="6" x2="33" y2="6" stroke="#D9480F" stroke-width="5" stroke-linecap="round"/></svg>${f}</li>`:""}
      <li class="flex items-center gap-1.5">${k(!1)}Start: ${t.start.name}</li>
      <li class="flex items-center gap-1.5">${k(!0)}Meta: ${t.finish.name}</li>
    </ul>`;const d=()=>{n.innerHTML=`
    <div class="surface bg-accent/50 p-5">
      <p class="text-primary font-serif text-lg font-semibold">Mapa chwilowo niedost\u0119pna</p>
      <p class="text-secondary mt-1 text-sm">Spr\xF3buj od\u015Bwie\u017Cy\u0107 stron\u0119 za chwil\u0119. Dojazd mo\u017Cesz sprawdzi\u0107 w Google Maps:
        <a href="${y(t.start)}" target="_blank" rel="noopener noreferrer" class="link link-primary">start: ${t.start.name}<span class="sr-only"> (otwiera si\u0119 w nowej karcie)</span></a>,
        <a href="${y(t.finish)}" target="_blank" rel="noopener noreferrer" class="link link-primary">meta: ${t.finish.name}<span class="sr-only"> (otwiera si\u0119 w nowej karcie)</span></a>.</p>
    </div>`,document.documentElement.classList.remove("overflow-hidden")};if(location.protocol==="file:"){console.warn("Map skipped on file://; serve the site over HTTP (e.g. npm run serve)."),d();return}const u=a=>new Promise((i,p)=>{const l=document.createElement("script");l.src=a,l.onload=i,l.onerror=()=>p(new Error(`Failed to load ${a}`)),document.head.append(l)}),b=async()=>{try{const a=document.createElement("link");a.rel="stylesheet",a.href="assets/vendor/maplibre/maplibre-gl.css",document.head.append(a),await u("assets/vendor/maplibre/maplibre-gl.js"),await u("js/route-map.js"),initRouteMap({box:n,geometry:t,onFail:d})}catch(a){console.warn(a),d()}};new IntersectionObserver((a,i)=>{a.some(p=>p.isIntersecting)&&(i.disconnect(),b())},{rootMargin:"300px"}).observe(n)})();
