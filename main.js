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
    id: 16,
    url: 'article_20260412_2_column.html',
    category: '칼럼',
    title: '안개 속의 봄, 2026년 부동산 시장의 거대한 체질 변화를 직시하라',
    summary: '상승론과 하락론의 대립을 넘어 — 공급 절벽, 양극화 고착, 정책 불확실성이라는 구조적 변곡점에 선 한국 주택 시장의 냉정한 진단.',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-04-12',
    title_en: 'Spring in the Fog: Facing the Structural Shift of Korea\'s 2026 Housing Market',
    summary_en: 'Beyond the bull-bear debate — a sober diagnosis of Korea\'s housing market at a structural inflection point of supply cliff, polarization, and policy uncertainty.'
  },
  {
    id: 15,
    url: 'article_20260412_1_overseas.html',
    category: '해외',
    title: '트럼프 관세 폭풍 속 미·일 부동산, 한국인 투자자의 선택은?',
    summary: '엔화 약세와 모기지 금리 하락이 만든 기회 — 그러나 리스크는 여전히 진행형. 2026년 미국과 일본 부동산 시장의 구조적 변화를 심층 분석한다.',
    image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-04-12',
    title_en: 'US & Japan Real Estate Amid Trump Tariff Storm: What Should Korean Investors Choose?',
    summary_en: 'Opportunities from weak yen and falling mortgage rates — but risks remain. An in-depth analysis of structural changes in the US and Japan real estate markets in 2026.'
  },
  {
    id: 14,
    url: 'article5_pf_risk.html',
    category: '투자분석',
    title: '수도권 미분양 3만 세대 시대, PF 리스크의 연쇄 반응',
    summary: '미분양이 쌓이고, 시행사는 숨을 죽이고, 대출을 내준 금융기관은 긴장한다. 부동산 PF(프로젝트 파이낸싱) 위기의 도미노를 분석한다.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80',
    author: '부동산인사이트 투자분석팀',
    date: '2026-04-12',
    title_en: 'Seoul Metro Unsold Units Hit 30k: PF Risk Chain Reaction',
    summary_en: 'Unsold units are piling up, and developers are holding their breath. We analyze the domino effect of the Real Estate PF crisis.'
  },
  {
    id: 13,
    url: 'article4_public_presale.html',
    category: '분양',
    title: '[단독] 2026년 하반기 수도권 공공분양 사전청약 확정… 3기 신도시 물량 집중',
    summary: '국토교통부가 2026년 하반기 공공분양 사전청약 일정을 전격 공고했습니다. 남양주 왕숙, 하남 교산 등 3기 신도시 선호 지역의 대규모 물량이 포함됩니다.',
    image: 'https://images.unsplash.com/photo-1448630360428-65456885c650?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-04-12',
    title_en: '2H 2026 Public Presale Confirmed: Focus on 3rd Gen New Cities',
    summary_en: 'MOLIT has announced the Public Presale schedule for late 2026. Massive supply in preferred areas like Namyangju Wangsuk and Hanam Gyosan is expected.'
  },
  {
    id: 10,
    url: 'article1_stress_dsr.html',
    category: '정책',
    title: '스트레스 DSR 3단계, 대출 시장의 지각변동이 시작된다',
    summary: '가계부채 총량 관리의 마지막 카드가 전면 시행됐다. 스트레스 DSR 3단계는 단순한 대출 규제가 아니다 — 수요 구조 자체를 바꾸는 부동산 시장의 패러다임 전환점이다.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-04-12',
    title_en: 'Stress DSR Stage 3: A Paradigm Shift in Lending',
    summary_en: 'The final move for household debt management has been fully implemented. Stage 3 of Stress DSR is more than a regulation.'
  },
  {
    id: 11,
    url: 'article2_gangnam_rebuild.html',
    category: '재개발',
    title: '압구정·대치 재건축, 규제 속에서도 상승 동력은 남아 있나',
    summary: '한국 부동산 시장의 심장부, 강남구 압구정동과 대치동. 수십 년간 묵혀온 재건축 이슈가 다시 수면 위로 올라왔다. 규제와 기대 사이, 이 지역의 진짜 가치를 분석한다.',
    image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=1200&q=80',
    author: '부동산인사이트 시장분석팀',
    date: '2026-04-12',
    title_en: 'Apgujeong & Daechi: Rebuilding Momentum Under Regulation',
    summary_en: 'Apgujeong and Daechi, the heart of the Korean real estate market. Decades-old rebuilding issues have resurfaced.'
  },
  {
    id: 12,
    url: 'article3_1st_newtown.html',
    category: '투자분석',
    title: '1기 신도시 선도지구 선정 이후: 분당과 일산의 엇갈린 운명',
    summary: '30년이 넘은 노후 신도시의 대규모 재정비가 시작됐다. 선도지구 선정을 계기로 분당과 일산은 각자의 길을 걷기 시작했다.',
    image: 'https://images.unsplash.com/photo-1448630360428-65456885c650?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-04-12',
    title_en: '1st Gen New Cities: Differing Fates for Bundang and Ilsan',
    summary_en: 'Massive refurbishment of 30-year-old new cities has begun. Bundang and Ilsan are taking different paths following the selection of lead districts.'
  },
  {
    id: 1,
    url: 'article1_stress_dsr.html',
    category: '시장동향',
    title: '서울 아파트값 6주 연속 상승…강남·송파 주도',
    summary: '한국부동산원 조사 결과 서울 아파트 매매가격이 6주 연속 오르며 회복세를 이어가고 있다. 강남구와 송파구가 상승세를 주도했다.',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80',
    author: '김지훈 기자',
    date: '2026-04-11',
    title_en: 'Seoul Apartment Prices Rise for 6th Week Led by Gangnam',
    summary_en: 'According to REB data, Seoul apartment prices have risen for six consecutive weeks, with Gangnam and Songpa leading the recovery trend.'
  }
];

// ============================================================
// Firebase 초기화 (본인의 Firebase Config로 교체하세요)
// ============================================================
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Firebase 초기화 (설정이 유효한 경우에만)
let db = null;
if (firebaseConfig.apiKey !== "YOUR_API_KEY") {
  firebase.initializeApp(firebaseConfig);
  db = firebase.firestore();
}

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
      <p class="category">${state.lang === 'ko' ? main.category : main.category}</p>
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
    el.addEventListener('click', () => {
      const a = articles.find(x => x.id === Number(el.dataset.id));
      if (a && a.url) window.location.href = a.url;
    });
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
    el.addEventListener('click', () => {
      const a = articles.find(x => x.id === Number(el.dataset.id));
      if (a && a.url) window.location.href = a.url;
    });
  });
}

function renderRanking() {
  const top = [...articles].slice(0, 5);
  const getT = (a) => state.lang === 'ko' ? a.title : (a.title_en || a.title);
  $('#ranking-list').innerHTML = top.map(a => `
    <li data-id="${a.id}"><span class="rank-title">${getT(a)}</span></li>
  `).join('');
  $$('#ranking-list li').forEach(el => {
    el.addEventListener('click', () => {
      const a = articles.find(x => x.id === Number(el.dataset.id));
      if (a && a.url) window.location.href = a.url;
    });
  });
}

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

$('#report-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const reportData = {
    title: $('#report-title').value,
    content: $('#report-content').value,
    email: $('#report-email').value,
    timestamp: new Date()
  };

  if (db) {
    try {
      await db.collection('reports').add(reportData);
    } catch (error) {
      console.error("Error adding report: ", error);
    }
  }

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

$('#newsletter-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = $('#newsletter-form input').value;
  
  if (db) {
    try {
      await db.collection('subscribers').add({
        email: email,
        timestamp: new Date()
      });
    } catch (error) {
      console.error("Error adding subscriber: ", error);
    }
  }

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
