const catalogFaq=[{question:"Co zabra\u0107 na sp\u0142yw?",answer:"Wygodny str\xF3j i obuwie, kt\xF3re mog\u0105 zamokn\u0105\u0107, rzeczy na zmian\u0119, nakrycie g\u0142owy, krem z filtrem i wod\u0119 do picia. Na d\u0142u\u017Csze trasy przyda si\u0119 te\u017C co\u015B do jedzenia, a telefon i dokumenty warto zabezpieczy\u0107 przed wod\u0105."},{question:"Jak przygotowa\u0107 si\u0119 do pierwszego sp\u0142ywu?",answer:"Na pocz\u0105tek dobrze wybra\u0107 kr\xF3tszy odcinek i zostawi\u0107 sobie zapas czasu na przerwy. Sprawd\u017A prognoz\u0119 pogody i dopasuj tras\u0119 do tempa ca\u0142ej grupy. Je\u015Bli nie wiesz, kt\xF3r\u0105 wybra\u0107, zapytaj nas."},{question:"Jak wygl\u0105da transport?",answer:"Kwestie transportu ustalamy indywidualnie podczas rezerwacji \u2013 zapytaj o nie, wybieraj\u0105c tras\u0119."},{question:"Czy mo\u017Cna zorganizowa\u0107 d\u0142u\u017Cszy lub kilkudniowy sp\u0142yw?",answer:"Zapytaj o to przy kontakcie. Wsp\xF3lnie om\xF3wimy, co da si\u0119 zaplanowa\u0107."}];(()=>{const i='<svg class="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',e=(a,n)=>`<div><dt>${a}</dt><dd>${n}</dd></div>`,s=document.querySelector("[data-catalog-routes]");s&&(s.innerHTML=routes.map(a=>`
      <li class="dest-card">
        <a href="${routePageUrl(a)}" aria-label="Zobacz tras\u0119: ${a.name}" class="card-link">
        <div class="relative">
          <img src="${a.image}" width="640" height="400" loading="lazy" decoding="async" alt="${a.alt}" class="dest-card-media">
          <dl class="route-glance">${e("Dystans",a.distance)}${e("Czas",a.duration)}</dl>
        </div>
        <div class="dest-card-body">
          <h3 class="text-primary font-serif text-xl leading-snug font-semibold">${a.name}</h3>
          <p class="text-secondary text-sm">${a.summary}</p>
          <span class="btn btn-primary btn-sm mt-auto self-start rounded-full" aria-hidden="true">Zobacz tras\u0119 ${i}</span>
        </div>
        </a>
      </li>`).join(""));const t=document.querySelector("[data-catalog-pricing]");t&&(t.innerHTML=kayakPricingCards());const o=document.querySelector("[data-catalog-faq]");o&&(o.innerHTML=catalogFaq.map(a=>`
      <details class="collapse collapse-plus border-b border-base-300 rounded-none">
        <summary class="collapse-title min-h-0 py-3 font-medium">${a.question}</summary>
        <div class="collapse-content text-secondary"><p>${a.answer}</p></div>
      </details>`).join(""))})();
