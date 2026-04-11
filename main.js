// ============================================================
// 상태 및 번역 데이터
// ============================================================
let state = {
  subscribed: false,
  lang: 'ko'
};

const i18n = {
  ko: {
    subscribe: '구독',
    subscribed: '구독 중',
    report: '제보하기',
    lang: 'English',
    all: '전체',
    trend: '시장동향',
    policy: '정책',
    sale: '분양·청약',
    rebuild: '재개발·재건축',
    invest: '투자분석',
    overseas: '해외부동산',
    column: '칼럼',
    search: '기사 검색',
    ranking: '가장 많이 본 기사',
    newsletter_title: '매일 아침 부동산 브리핑',
    newsletter_desc: '주요 시황과 정책을 한 통의 메일로 받아보세요.',
    newsletter_placeholder: '이메일 주소',
    newsletter_btn: '구독 신청',
    newsletter_done: '구독 신청이 완료되었습니다.',
    report_title: '부동산 인사이트 제보하기',
    report_desc: '여러분의 소중한 제보가 더 정확한 뉴스를 만듭니다.',
    report_lbl_title: '제보 제목',
    report_lbl_content: '제보 내용',
    report_lbl_email: '연락처 (이메일)',
    report_placeholder_title: '예: 구역 내 재개발 추진 현황 제보',
    report_placeholder_content: '구체적인 내용을 적어주세요. 기사화 시 개별 연락드립니다.',
    report_btn: '제보 완료',
    report_success: '제보가 성공적으로 접수되었습니다.',
    notice: '<span class="badge">[중요]</span> 2026년 하반기 수도권 공공분양 사전청약 일정이 공고되었습니다. (비구독자 전용 공지)',
    empty: '검색 결과가 없습니다.'
  },
  en: {
    subscribe: 'Subscribe',
    subscribed: 'Subscribed',
    report: 'Report',
    lang: '한국어',
    all: 'All',
    trend: 'Trends',
    policy: 'Policy',
    sale: 'Presale',
    rebuild: 'Redevelopment',
    invest: 'Analysis',
    overseas: 'Global',
    column: 'Column',
    search: 'Search Articles',
    ranking: 'Most Read',
    newsletter_title: 'Daily Briefing',
    newsletter_desc: 'Get key market updates in your inbox.',
    newsletter_placeholder: 'Email address',
    newsletter_btn: 'Sign Up',
    newsletter_done: 'Subscription complete.',
    report_title: 'Report to RE Insight',
    report_desc: 'Your tips help us create more accurate news.',
    report_lbl_title: 'Report Title',
    report_lbl_content: 'Content',
    report_lbl_email: 'Contact (Email)',
    report_placeholder_title: 'e.g., Report on local redevelopment status',
    report_placeholder_content: 'Please provide details. We will contact you for follow-ups.',
    report_btn: 'Submit',
    report_success: 'Your report has been received.',
    notice: '<span class="badge">[URGENT]</span> 2H 2026 Public Presale schedule announced. (Non-subscribers only)',
    empty: 'No results found.'
  }
};

const articles = [
  {
    id: 10,
    category: '정책',
    title: '스트레스 DSR 3단계, 대출 시장의 지각변동이 시작된다',
    summary: '가계부채 총량 관리의 마지막 카드가 전면 시행됐다. 스트레스 DSR 3단계는 단순한 대출 규제가 아니다 — 수요 구조 자체를 바꾸는 부동산 시장의 패러다임 전환점이다.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-04-12',
    title_en: 'Stress DSR Stage 3: A Paradigm Shift in Lending',
    summary_en: 'The final move for household debt management has been fully implemented. Stage 3 of Stress DSR is more than a regulation; it is a turning point for the real estate market.',
    bodyHtml: `
      <div class="data-box">
        <div class="data-box-title">📊 스트레스 DSR 3단계 핵심 수치</div>
        <div class="data-grid">
          <div class="data-item">
            <span class="num">+1.5%p</span>
            <div class="label">스트레스 금리 가산율</div>
          </div>
          <div class="data-item">
            <span class="num">40%</span>
            <div class="label">DSR 한도 (은행권)</div>
          </div>
          <div class="data-item">
            <span class="num">50%</span>
            <div class="label">DSR 한도 (비은행권)</div>
          </div>
        </div>
      </div>
      <h2>정책의 배경: 부채의 질적 개선을 위한 결단</h2>
      <p>스트레스 DSR 3단계는 금융당국이 가계부채 증가세를 억제하기 위해 단계적으로 시행해온 대출 규제의 완성형입니다.</p>
    `,
    bodyHtml_en: `
      <div class="data-box">
        <div class="data-box-title">📊 Key Metrics of Stress DSR Stage 3</div>
        <div class="data-grid">
          <div class="data-item">
            <span class="num">+1.5%p</span>
            <div class="label">Stress Interest Add-on</div>
          </div>
          <div class="data-item">
            <span class="num">40%</span>
            <div class="label">DSR Limit (Banks)</div>
          </div>
          <div class="data-item">
            <span class="num">50%</span>
            <div class="label">DSR Limit (Non-banks)</div>
          </div>
        </div>
      </div>
      <h2>Background: A Decisive Move for Debt Quality</h2>
      <p>Stress DSR Stage 3 is the culmination of phased lending regulations designed to curb household debt growth.</p>
    `
  },
  {
    id: 11,
    category: '재개발',
    title: '압구정·대치 재건축, 규제 속에서도 상승 동력은 남아 있나',
    summary: '한국 부동산 시장의 심장부, 강남구 압구정동과 대치동. 수십 년간 묵혀온 재건축 이슈가 다시 수면 위로 올라왔다. 규제와 기대 사이, 이 지역의 진짜 가치를 분석한다.',
    image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=1200&q=80',
    author: '부동산인사이트 시장분석팀',
    date: '2026-04-12',
    title_en: 'Apgujeong & Daechi: Rebuilding Momentum Under Regulation',
    summary_en: 'Apgujeong and Daechi, the heart of the Korean real estate market. Decades-old rebuilding issues have resurfaced. We analyze the true value of these areas.',
    bodyHtml: `
      <div class="data-box">
        <div class="data-box-title">📊 강남 핵심 재건축 구역 지표</div>
        <div class="data-grid">
          <div class="data-item">
            <span class="num">3구역</span>
            <div class="label">압구정 최대 속도</div>
          </div>
          <div class="data-item">
            <span class="num">50층+</span>
            <div class="label">목표 층수 상향</div>
          </div>
        </div>
      </div>
      <h2>강남 재건축의 상징</h2>
      <p>부동산 시장에서 \'입지\'는 모든 가치의 출발점입니다. 압구정동과 대치동은 한국 부동산 역사에서 이 명제를 가장 극명하게 증명해온 지역입니다.</p>
    `,
    bodyHtml_en: `
      <div class="data-box">
        <div class="data-box-title">📊 Key Rebuilding Metrics in Gangnam</div>
        <div class="data-grid">
          <div class="data-item">
            <span class="num">Area 3</span>
            <div class="label">Fastest Progress</div>
          </div>
          <div class="data-item">
            <span class="num">50F+</span>
            <div class="label">Target Floors</div>
          </div>
        </div>
      </div>
      <h2>Icons of Gangnam Rebuilding</h2>
      <p>In the real estate market, \'location\' is the starting point of all value. Apgujeong and Daechi have proven this throughout history.</p>
    `
  },
  {
    id: 12,
    category: '투자분석',
    title: '1기 신도시 선도지구 선정 이후: 분당과 일산의 엇갈린 운명',
    summary: '30년이 넘은 노후 신도시의 대규모 재정비가 시작됐다. 선도지구 선정을 계기로 분당과 일산은 각자의 길을 걷기 시작했다. 수요, 입지, 사업성의 세 변수로 두 도시의 미래를 전망한다.',
    image: 'https://images.unsplash.com/photo-1448630360428-65456885c650?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-04-12',
    title_en: '1st Gen New Cities: Differing Fates for Bundang and Ilsan',
    summary_en: 'Massive refurbishment of 30-year-old new cities has begun. Bundang and Ilsan are taking different paths following the selection of lead districts.',
    bodyHtml: `
      <div class="data-box">
        <div class="data-box-title">📊 1기 신도시 재정비 기본계획 요약</div>
        <div class="data-grid">
          <div class="data-item">
            <span class="num">350%</span>
            <div class="label">평균 목표 용적률</div>
          </div>
          <div class="data-item">
            <span class="num">2.6만</span>
            <div class="label">선도지구 총 가구수</div>
          </div>
        </div>
      </div>
      <h2>노후계획도시 특별법</h2>
      <p>분당, 일산 등 1기 신도시는 조성된 지 30년을 넘기며 기반시설 노후화 문제에 직면했습니다.</p>
    `,
    bodyHtml_en: `
      <div class="data-box">
        <div class="data-box-title">📊 1st Gen New City Refurbishment Plan</div>
        <div class="data-grid">
          <div class="data-item">
            <span class="num">350%</span>
            <div class="label">Avg Target FAR</div>
          </div>
          <div class="data-item">
            <span class="num">26k</span>
            <div class="label">Lead District Units</div>
          </div>
        </div>
      </div>
      <h2>Special Act for Old Planned Cities</h2>
      <p>First-generation new cities like Bundang and Ilsan face aging infrastructure issues after 30 years.</p>
    `
  },
  {
    id: 1,
    category: '시장동향',
    title: '서울 아파트값 6주 연속 상승…강남·송파 주도',
    summary: '한국부동산원 조사 결과 서울 아파트 매매가격이 6주 연속 오르며 회복세를 이어가고 있다. 강남구와 송파구가 상승세를 주도했다.',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80',
    author: '김지훈 기자',
    date: '2026-04-11',
    title_en: 'Seoul Apartment Prices Rise for 6th Week',
    summary_en: 'Led by Gangnam and Songpa, Seoul apartment prices continue to recover for the sixth consecutive week.',
    body: ['Seoul apartment prices rose by 0.08% this week.']
  }
];

// ============================================================
// 유틸리티 및 렌더링
// ============================================================
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

const formatDate = (iso) => {
  const d = new Date(iso);
  const lang = state.lang === 'ko';
  return lang 
    ? `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`
    : d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
};

let activeCategory = 'all';
let searchQuery = '';

function filteredArticles() {
  return articles.filter(a => {
    const matchCategory = activeCategory === 'all' || a.category === activeCategory;
    const q = searchQuery.trim().toLowerCase();
    const title = state.lang === 'ko' ? a.title : (a.title_en || a.title);
    const summary = state.lang === 'ko' ? a.summary : (a.summary_en || a.summary);
    const matchSearch = !q
      || title.toLowerCase().includes(q)
      || summary.toLowerCase().includes(q);
    return matchCategory && matchSearch;
  });
}

function updateUI() {
  const t = i18n[state.lang];
  
  // Header
  $('#link-subscribe').textContent = state.subscribed ? t.subscribed : t.subscribe;
  $('#link-report').textContent = t.report;
  $('#link-lang').textContent = t.lang;
  $('#important-notice .container').innerHTML = t.notice;
  
  if (state.subscribed) document.body.classList.add('subscribed');
  else document.body.classList.remove('subscribed');

  // Nav
  const navBtns = $$('#category-nav button');
  const catKeys = ['all', 'trend', 'policy', 'sale', 'rebuild', 'invest', 'overseas', 'column'];
  navBtns.forEach((btn, i) => {
    if (catKeys[i]) btn.textContent = t[catKeys[i]];
  });
  
  $('#search-input').placeholder = t.search;
  
  // Sidebar
  $('.ranking h3').textContent = t.ranking;
  $('.newsletter h3').textContent = t.newsletter_title;
  $('.newsletter p').textContent = t.newsletter_desc;
  $('.newsletter input').placeholder = t.newsletter_placeholder;
  $('.newsletter button').textContent = t.newsletter_btn;
  $('#newsletter-note').textContent = t.newsletter_done;
  
  // Report Modal
  $('#report-modal-title').textContent = t.report_title;
  $('#report-modal-desc').textContent = t.report_desc;
  $('#lbl-report-title').textContent = t.report_lbl_title;
  $('#lbl-report-content').textContent = t.report_lbl_content;
  $('#lbl-report-email').textContent = t.report_lbl_email;
  $('#report-title').placeholder = t.report_placeholder_title;
  $('#report-content').placeholder = t.report_placeholder_content;
  $('#report-email').placeholder = t.newsletter_placeholder;
  $('#btn-report-submit').textContent = t.report_btn;
  
  $('#empty-state').textContent = t.empty;

  renderHero();
  renderGrid();
  renderRanking();
  updateDate();
}

function renderHero() {
  const list = filteredArticles();
  const hero = $('#hero');
  if (list.length === 0) { hero.innerHTML = ''; return; }
  const [main, ...rest] = list;
  const sideArticles = rest.slice(0, 3);
  
  const getT = (a) => state.lang === 'ko' ? a.title : (a.title_en || a.title);
  const getS = (a) => state.lang === 'ko' ? a.summary : (a.summary_en || a.summary);

  hero.innerHTML = `
    <article class="hero-main" data-id="${main.id}">
      <div class="thumb"><img src="${main.image}" alt="${getT(main)}" loading="lazy" /></div>
      <p class="category">${main.category}</p>
      <h2>${getT(main)}</h2>
      <p>${getS(main)}</p>
      <p class="meta">${main.author} · ${formatDate(main.date)}</p>
    </article>
    <div class="hero-side">
      ${sideArticles.map(a => `
        <article data-id="${a.id}">
          <p class="category">${a.category}</p>
          <h3>${getT(a)}</h3>
          <p class="meta">${a.author} · ${formatDate(a.date)}</p>
        </article>
      `).join('')}
    </div>
  `;

  hero.querySelectorAll('[data-id]').forEach(el => {
    el.addEventListener('click', () => openArticle(Number(el.dataset.id)));
  });
}

function renderGrid() {
  const list = filteredArticles().slice(4);
  const grid = $('#news-grid');
  const empty = $('#empty-state');

  if (filteredArticles().length === 0) {
    grid.innerHTML = '';
    empty.hidden = false;
    return;
  }
  empty.hidden = true;

  const getT = (a) => state.lang === 'ko' ? a.title : (a.title_en || a.title);
  const getS = (a) => state.lang === 'ko' ? a.summary : (a.summary_en || a.summary);

  grid.innerHTML = list.map(a => `
    <article class="news-card" data-id="${a.id}">
      <div class="thumb"><img src="${a.image}" alt="${getT(a)}" loading="lazy" /></div>
      <p class="category">${a.category}</p>
      <h3>${getT(a)}</h3>
      <p class="summary">${getS(a)}</p>
      <p class="meta">${a.author} · ${formatDate(a.date)}</p>
    </article>
  `).join('');

  grid.querySelectorAll('.news-card').forEach(el => {
    el.addEventListener('click', () => openArticle(Number(el.dataset.id)));
  });
}

function renderRanking() {
  const top = [...articles].slice(0, 5);
  const getT = (a) => state.lang === 'ko' ? a.title : (a.title_en || a.title);
  $('#ranking-list').innerHTML = top.map(a => `
    <li data-id="${a.id}"><span class="rank-title">${getT(a)}</span></li>
  `).join('');
  $$('#ranking-list li').forEach(el => {
    el.addEventListener('click', () => openArticle(Number(el.dataset.id)));
  });
}

// ============================================================
// 기사 모달
// ============================================================
function openArticle(id) {
  const a = articles.find(x => x.id === id);
  if (!a) return;
  
  const title = state.lang === 'ko' ? a.title : (a.title_en || a.title);
  const summary = state.lang === 'ko' ? a.summary : (a.summary_en || a.summary);
  const body = state.lang === 'ko' 
    ? (a.bodyHtml || (a.body ? a.body.map(p => `<p>${p}</p>`).join('') : ''))
    : (a.bodyHtml_en || a.bodyHtml || (a.body ? a.body.map(p => `<p>${p}</p>`).join('') : ''));

  $('#article-content').innerHTML = `
    <p class="category">${a.category}</p>
    <h1>${title}</h1>
    <p class="meta">${a.author} · ${formatDate(a.date)} · Views ${(Math.random() * 9000 + 1000 | 0).toLocaleString()}</p>
    <div class="thumb"><img src="${a.image}" alt="${title}" /></div>
    <p class="lead">${summary}</p>
    <div class="article-body-content">
      ${body}
    </div>
  `;
  $('#article-modal').showModal();
}

$('#modal-close').addEventListener('click', () => $('#article-modal').close());

// ============================================================
// 이벤트 핸들러
// ============================================================
$('#link-subscribe').addEventListener('click', (e) => {
  e.preventDefault();
  state.subscribed = !state.subscribed;
  updateUI();
});

$('#link-lang').addEventListener('click', (e) => {
  e.preventDefault();
  state.lang = state.lang === 'ko' ? 'en' : 'ko';
  updateUI();
});

$('#link-report').addEventListener('click', (e) => {
  e.preventDefault();
  $('#report-modal').showModal();
});

$('#report-modal-close').addEventListener('click', () => $('#report-modal').close());

$('#report-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert(i18n[state.lang].report_success);
  $('#report-form').reset();
  $('#report-modal').close();
});

$$('#category-nav button').forEach(btn => {
  btn.addEventListener('click', () => {
    $$('#category-nav button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeCategory = btn.dataset.category;
    renderHero();
    renderGrid();
  });
});

$('#search-form').addEventListener('submit', (e) => {
  e.preventDefault();
  searchQuery = $('#search-input').value;
  renderHero();
  renderGrid();
});

$('#newsletter-form').addEventListener('submit', (e) => {
  e.preventDefault();
  $('#newsletter-form').reset();
  $('#newsletter-note').hidden = false;
  setTimeout(() => { $('#newsletter-note').hidden = true; }, 4000);
});

// 현재 날짜
const updateDate = () => {
  const d = new Date();
  const days = ['일', '월', '화', '수', '목', '금', '토'];
  const enDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  $('#current-date').textContent = state.lang === 'ko'
    ? `${d.getFullYear()}년 ${d.getMonth() + 1}월 ${d.getDate()}일 ${days[d.getDay()]}요일`
    : `${enDays[d.getDay()]}, ${d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}`;
};

// 초기화
updateUI();
