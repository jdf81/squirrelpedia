// Squirrelpedia App Logic

const ICONS = {
  life: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>',
  climate: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10a6 6 0 0 0-12 0c-2.5.5-4 2-4 4.5 0 2.5 2 4.5 5 4.5h11c2.5 0 4-2 4-4.5 0-2-1-3.5-4-4.5z"/></svg>',
  food: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3c-3 0-5 3-5 7 0 5 2 11 5 11s5-6 5-11c0-4-2-7-5-7z"/><path d="M12 3v18"/></svg>',
  alive: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h4l2-7 4 14 2-7h6"/></svg>',
  friendly: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9.5" x2="9.01" y2="9.5"/><line x1="15" y1="9.5" x2="15.01" y2="9.5"/></svg>',
};

const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));

const continents = Object.keys(SQUIRRELS);
let currentTab = continents[0];
let allSquirrels = [];

// Flatten squirrels for search
continents.forEach((c) => {
  SQUIRRELS[c].species.forEach((sp) => {
    allSquirrels.push({ ...sp, continent: c });
  });
});

// ===== Build tabs =====
function buildTabs() {
  const tabs = $("#tabs");
  tabs.innerHTML = continents
    .map(
      (c, i) => `
    <button class="tab" role="tab" aria-selected="${i === 0 ? "true" : "false"}" data-continent="${c}">
      ${SQUIRRELS[c].icon} ${c}
      <span class="count">${SQUIRRELS[c].species.length}</span>
    </button>
  `
    )
    .join("");
  tabs.addEventListener("click", (e) => {
    const btn = e.target.closest(".tab");
    if (!btn) return;
    selectTab(btn.dataset.continent);
  });
}

function selectTab(continent) {
  currentTab = continent;
  $$(".tab").forEach((t) => {
    t.setAttribute("aria-selected", t.dataset.continent === continent ? "true" : "false");
    if (t.dataset.continent === continent) {
      t.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  });
  renderContinent(continent);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ===== Render continent grid =====
function renderContinent(continent) {
  const data = SQUIRRELS[continent];
  const content = $("#content");

  if (data.species.length === 0) {
    content.innerHTML = `
      <div class="continent-header">
        <h2 class="continent-title">${continent}</h2>
        <div class="continent-meta">${data.species.length} species recorded</div>
        <p class="continent-note">${data.note}</p>
      </div>
      <div style="text-align:center; padding:60px 20px; color:var(--ink-soft); font-style:italic;">
        <div style="font-size:48px; color:var(--gold); margin-bottom:12px;">∅</div>
        No squirrels are recorded from this region.
      </div>
    `;
    return;
  }

  content.innerHTML = `
    <div class="continent-header">
      <h2 class="continent-title">${continent}</h2>
      <div class="continent-meta">${data.species.length} species recorded</div>
      <p class="continent-note">${data.note}</p>
    </div>
    <div class="grid" id="grid"></div>
  `;

  const grid = $("#grid");
  data.species.forEach((sp, i) => {
    const card = document.createElement("div");
    card.className = "card" + (sp.extinct ? " extinct" : "");
    card.style.animationDelay = (i * 0.04) + "s";
    card.innerHTML = `
      <div class="card-img">
        ${SquirrelArt.render(sp.type, sp.color)}
      </div>
      <div class="card-body">
        <div class="card-name">${sp.name}</div>
        <div class="card-sci">${sp.sci}</div>
        <div class="card-tag ${sp.extinct ? "extinct-tag" : ""}">${sp.extinct ? "Extinct" : "Extant"}</div>
      </div>
    `;
    card.addEventListener("click", () => openModal(sp, continent));
    grid.appendChild(card);
  });
}

// ===== Modal =====
function openModal(sp, continent) {
  const body = $("#modalBody");
  const friendlyLabel = FRIENDLINESS_LABELS[sp.friendly] || "Unknown";
  const meterPips = Array.from({ length: 5 }, (_, i) =>
    `<span class="meter-pip ${i < sp.friendly ? "on" : ""}"></span>`
  ).join("");

  body.innerHTML = `
    <div class="modal-hero">
      ${SquirrelArt.render(sp.type, sp.color)}
    </div>
    <div class="modal-content">
      <div class="modal-eyebrow">${continent} ${sp.extinct ? "• Extinct" : ""}</div>
      <h2 class="modal-name">${sp.name}</h2>
      <div class="modal-sci">${sp.sci}</div>
      <div class="modal-divider"></div>
      <p class="modal-flavor">${sp.flavor}</p>
      <div class="facts">
        <div class="fact">
          <div class="fact-icon">${ICONS.life}</div>
          <div class="fact-body">
            <div class="fact-label">Average Lifespan</div>
            <div class="fact-value">${sp.life}</div>
          </div>
        </div>
        <div class="fact">
          <div class="fact-icon">${ICONS.climate}</div>
          <div class="fact-body">
            <div class="fact-label">Preferred Climate</div>
            <div class="fact-value">${sp.climate}</div>
          </div>
        </div>
        <div class="fact">
          <div class="fact-icon">${ICONS.food}</div>
          <div class="fact-body">
            <div class="fact-label">Preferred Food</div>
            <div class="fact-value">${sp.food}</div>
          </div>
        </div>
        <div class="fact">
          <div class="fact-icon">${ICONS.alive}</div>
          <div class="fact-body">
            <div class="fact-label">Estimated Population</div>
            <div class="fact-value">${sp.alive}</div>
          </div>
        </div>
        <div class="fact" style="grid-column: 1 / -1; border-right: none !important;">
          <div class="fact-icon">${ICONS.friendly}</div>
          <div class="fact-body">
            <div class="fact-label">Friendliness to Humans</div>
            <div class="fact-value">
              <div class="meter">${meterPips}</div>
              <div class="meter-label">${friendlyLabel}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  $("#backdrop").classList.add("open");
  $("#modal").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  $("#backdrop").classList.remove("open");
  $("#modal").classList.remove("open");
  document.body.style.overflow = "";
}

// ===== Search =====
function openSearch() {
  $("#searchOverlay").classList.add("open");
  setTimeout(() => $("#searchInput").focus(), 200);
  renderSearchResults("");
}

function closeSearch() {
  $("#searchOverlay").classList.remove("open");
  $("#searchInput").value = "";
}

function renderSearchResults(q) {
  const query = q.trim().toLowerCase();
  let results;
  if (query === "") {
    results = allSquirrels.slice(0, 12);
  } else {
    results = allSquirrels.filter((s) =>
      s.name.toLowerCase().includes(query) ||
      s.sci.toLowerCase().includes(query) ||
      s.continent.toLowerCase().includes(query)
    );
  }
  const container = $("#searchResults");
  if (results.length === 0) {
    container.innerHTML = `<div class="search-empty">No species match "${q}".<br>Perhaps a typo, or perhaps still undiscovered.</div>`;
    return;
  }
  container.innerHTML = results
    .map(
      (s) => `
    <div class="search-result" data-idx="${allSquirrels.indexOf(s)}">
      <div class="search-result-thumb">
        ${SquirrelArt.render(s.type, s.color)}
      </div>
      <div class="search-result-info">
        <div class="search-result-name">${s.name}${s.extinct ? " †" : ""}</div>
        <div class="search-result-sci">${s.sci}</div>
        <div class="search-result-cont">${s.continent}</div>
      </div>
    </div>
  `
    )
    .join("");
  container.querySelectorAll(".search-result").forEach((el) => {
    el.addEventListener("click", () => {
      const idx = parseInt(el.dataset.idx);
      const sp = allSquirrels[idx];
      closeSearch();
      setTimeout(() => openModal(sp, sp.continent), 250);
    });
  });
}

// ===== iOS install banner =====
function maybeShowInstallBanner() {
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  const isStandalone = window.navigator.standalone === true || window.matchMedia("(display-mode: standalone)").matches;
  const dismissed = (() => { try { return sessionStorage.getItem("installDismissed"); } catch(e) { return null; } })();
  if (isIOS && !isStandalone && !dismissed) {
    setTimeout(() => $("#installBanner").classList.add("show"), 2200);
  }
}

// ===== Wire it up =====
document.addEventListener("DOMContentLoaded", () => {
  buildTabs();
  renderContinent(currentTab);

  $("#backdrop").addEventListener("click", closeModal);
  $("#closeModal").addEventListener("click", closeModal);
  $("#openSearch").addEventListener("click", openSearch);
  $("#closeSearch").addEventListener("click", closeSearch);
  $("#searchInput").addEventListener("input", (e) => renderSearchResults(e.target.value));
  $("#dismissInstall").addEventListener("click", () => {
    $("#installBanner").classList.remove("show");
    try { sessionStorage.setItem("installDismissed", "1"); } catch(e) {}
  });

  // Touch swipe-down to close modal
  let touchStart = null;
  const modal = $("#modal");
  modal.addEventListener("touchstart", (e) => {
    if (modal.scrollTop === 0) touchStart = e.touches[0].clientY;
  }, { passive: true });
  modal.addEventListener("touchmove", (e) => {
    if (touchStart === null) return;
    const dy = e.touches[0].clientY - touchStart;
    if (dy > 80) {
      closeModal();
      touchStart = null;
    }
  }, { passive: true });
  modal.addEventListener("touchend", () => { touchStart = null; });

  // Escape closes modal/search
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") { closeModal(); closeSearch(); }
  });

  maybeShowInstallBanner();
});
