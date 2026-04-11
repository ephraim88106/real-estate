// ============================================================
// 부동산인사이트 — 기사 데이터
// 새 기사를 추가하려면 articles 배열 맨 앞에 객체 하나 추가하세요.
// ============================================================
const articles = [
  {
    id: 1,
    category: '시장동향',
    title: '서울 아파트값 6주 연속 상승…강남·송파 주도',
    summary: '한국부동산원 조사 결과 서울 아파트 매매가격이 6주 연속 오르며 회복세를 이어가고 있다. 강남구와 송파구가 상승세를 주도했다.',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80',
    author: '김지훈 기자',
    date: '2026-04-11',
    body: [
      '한국부동산원이 11일 발표한 주간 아파트 가격 동향에 따르면 4월 둘째 주 서울 아파트 매매가격은 전주 대비 0.08% 상승하며 6주 연속 오름세를 이어갔다.',
      '자치구별로는 송파구(0.21%)와 강남구(0.18%)가 상승을 견인했으며, 서초구(0.14%)와 성동구(0.12%)가 뒤를 이었다. 강북권에서는 마포·용산·성동 이른바 마용성 지역의 거래가 늘면서 가격 회복세가 두드러졌다.',
      '전문가들은 금리 인하 기대감과 신생아 특례대출 등 정책금융 효과가 맞물리며 매수 심리가 회복되고 있다고 분석했다. 다만 거래량 자체는 아직 평년 수준에 미치지 못해 본격적인 상승장으로 단정짓기는 이르다는 의견도 적지 않다.',
      '부동산R114 관계자는 "고금리 부담이 완화되면서 대기 수요가 점진적으로 시장에 진입하는 모습"이라며 "다만 지역별·단지별 양극화는 더욱 심화될 가능성이 크다"고 말했다.'
    ]
  },
  {
    id: 2,
    category: '정책',
    title: '정부, 청년 주거지원 확대…월세 세액공제 한도 상향',
    summary: '국토교통부가 청년층 주거 안정을 위해 월세 세액공제 한도를 연 100만 원에서 150만 원으로 확대하는 방안을 발표했다.',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80',
    author: '박서연 기자',
    date: '2026-04-10',
    body: [
      '국토교통부는 10일 청년·서민 주거 안정 종합대책을 발표하고, 월세 세액공제 한도를 현행 연 100만 원에서 150만 원으로 상향한다고 밝혔다.',
      '대상은 총급여 7000만 원 이하 무주택 근로자이며, 공제율도 17%에서 20%로 확대된다. 정부는 이번 조치로 약 70만 가구가 혜택을 받을 것으로 추산했다.',
      '아울러 청년 전용 버팀목 전세자금 대출의 보증금 한도를 수도권 기준 3억 원에서 4억 원으로 늘리고, 금리는 기존보다 0.3%p 인하한다.',
      '국토부 관계자는 "고물가·고금리로 어려움을 겪는 청년층의 주거비 부담을 실질적으로 완화하는 데 초점을 맞췄다"며 "관련 법령 개정을 거쳐 올 하반기부터 시행할 계획"이라고 설명했다.'
    ]
  },
  {
    id: 3,
    category: '분양',
    title: '동탄 트램 역세권 신규 분양…1순위 청약 경쟁률 27대 1',
    summary: '경기 화성 동탄2신도시에서 분양한 ‘동탄레이크파크자연앤e편한세상’이 1순위 청약에서 평균 27대 1의 경쟁률을 기록했다.',
    image: 'https://images.unsplash.com/photo-1448630360428-65456885c650?w=1200&q=80',
    author: '이도윤 기자',
    date: '2026-04-09',
    body: [
      '대림산업이 시공하는 동탄레이크파크자연앤e편한세상이 1순위 청약 결과 평균 27.4대 1의 경쟁률을 기록하며 흥행에 성공했다.',
      '총 612가구 모집에 1만 6770명이 몰렸으며, 전용 84㎡ A타입은 최고 51대 1의 경쟁률을 보였다. 동탄 트램 개통을 앞두고 역세권 입지에 대한 관심이 반영됐다는 평가다.',
      '단지는 동탄호수공원과 인접해 있으며, GTX-A 동탄역까지 차량으로 10분 거리다. 분양가는 3.3㎡당 평균 2150만 원으로 책정됐다.',
      '부동산 전문가는 "수도권 광역교통망이 확충되면서 동탄권 분양시장이 다시 활기를 띠고 있다"고 분석했다.'
    ]
  },
  {
    id: 4,
    category: '재개발',
    title: '여의도 시범아파트 재건축, 50층으로 확정',
    summary: '서울 영등포구 여의도 시범아파트 재건축 정비계획안이 통과됐다. 최고 50층, 2300가구 규모의 매머드급 단지로 탈바꿈한다.',
    image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=1200&q=80',
    author: '정민호 기자',
    date: '2026-04-08',
    body: [
      '서울시 도시계획위원회는 8일 영등포구 여의도동 시범아파트 재건축 정비계획안을 수정 가결했다. 이로써 1971년 준공된 여의도 시범아파트는 53년 만에 새 단지로 거듭나게 됐다.',
      '계획안에 따르면 기존 1584가구는 최고 50층, 12개 동, 총 2300가구 규모의 신축 단지로 재건축된다. 용적률은 400% 이하, 건폐율은 50% 이하로 적용된다.',
      '여의도 일대 노후 아파트 단지의 재건축이 본격화되면서 한강 조망권을 갖춘 프리미엄 단지가 잇따라 들어설 전망이다.',
      '한 정비업계 관계자는 "여의도는 금융·업무 중심지로서의 입지가 탁월해 향후 강남에 버금가는 주거지로 부상할 가능성이 높다"고 평가했다.'
    ]
  },
  {
    id: 5,
    category: '해외',
    title: '美 기준금리 0.25%p 인하…부동산 시장 반등 신호?',
    summary: '미국 연방준비제도가 기준금리를 0.25%p 인하하면서 글로벌 부동산 시장에 훈풍이 불고 있다. 국내 시장에도 영향이 예상된다.',
    image: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=1200&q=80',
    author: '한지원 특파원',
    date: '2026-04-07',
    body: [
      '미국 연방준비제도(Fed)가 9일(현지시간) 연방공개시장위원회(FOMC) 정례회의에서 기준금리를 5.00%에서 4.75%로 0.25%포인트 인하했다.',
      '이번 결정은 시장 예상에 부합하는 수준으로, 인플레이션이 완화되고 노동 시장이 둔화되는 가운데 내려졌다. 연준은 연내 추가 인하 가능성을 시사했다.',
      '미국 부동산 시장은 즉각 반응했다. 30년 만기 모기지 금리가 6.4%대로 하락하면서 주택 수요가 회복될 조짐을 보이고 있다.',
      '국내 부동산 업계도 한국은행의 후행 인하를 기대하는 분위기다. 한 시중은행 PB 센터 관계자는 "미국 금리 인하가 본격화되면 국내 주담대 금리도 추가 하락할 여지가 있다"고 말했다.'
    ]
  },
  {
    id: 6,
    category: '시장동향',
    title: '오피스텔 거래량 2년 만에 최대…수익형 부동산 부활',
    summary: '1분기 전국 오피스텔 거래량이 1만 4500건으로 집계되며 2024년 1분기 이후 최대치를 기록했다. 임대 수익률 상승이 주요 원인으로 꼽힌다.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80',
    author: '최예린 기자',
    date: '2026-04-06',
    body: [
      '국토교통부 실거래가 공개시스템에 따르면 올해 1분기 전국 오피스텔 매매 거래량은 1만 4523건으로, 전년 동기 대비 38% 증가했다.',
      '특히 서울 마포·강서·영등포 등 직주근접 입지의 소형 오피스텔 거래가 활발했다. 강서구 마곡지구는 분기 거래량이 전년 대비 두 배 가까이 늘었다.',
      '임대 수익률 회복도 거래 증가를 견인했다. 한국부동산원에 따르면 서울 오피스텔 평균 임대수익률은 4.8%로 2년 전(4.1%)보다 0.7%p 상승했다.',
      '전문가들은 "아파트 규제가 지속되면서 상대적으로 진입 장벽이 낮은 오피스텔로 투자 수요가 이동하고 있다"고 분석했다.'
    ]
  },
  {
    id: 7,
    category: '칼럼',
    title: '[칼럼] 인구 감소 시대, 부동산 투자의 새로운 패러다임',
    summary: '인구 절벽 시대에 접어든 한국. 더 이상 ‘사두면 오른다’는 공식은 통하지 않는다. 미래 부동산 투자는 어떻게 달라져야 하는가.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80',
    author: '윤상철 논설위원',
    date: '2026-04-05',
    body: [
      '대한민국은 본격적인 인구 감소 사회에 진입했다. 2024년 통계청 발표에 따르면 합계출산율은 0.72명으로 OECD 최저치를 또 한 번 경신했다.',
      '이러한 변화는 부동산 시장의 근간을 흔든다. 과거 30년간 한국 부동산 시장을 이끌어온 ‘인구 증가 + 경제성장 + 도시화’의 삼박자는 더 이상 작동하지 않는다.',
      '앞으로의 부동산 투자는 ‘입지의 양극화’를 받아들이는 데서 출발해야 한다. 일자리, 교통, 교육, 의료 등 핵심 인프라가 집중된 거점 도시와 그렇지 않은 지역의 격차는 더욱 벌어질 것이다.',
      '결국 부동산은 더 이상 ‘평균’으로 말할 수 없는 자산이 됐다. 지역과 단지, 심지어 동·호수까지 따져 옥석을 가리는 안목이 그 어느 때보다 중요해졌다.'
    ]
  },
  {
    id: 8,
    category: '정책',
    title: 'DSR 규제 강화 1개월…주담대 신청 18% 감소',
    summary: '스트레스 DSR 2단계 시행 이후 한 달간 시중은행 주택담보대출 신청 건수가 18% 감소한 것으로 나타났다.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80',
    author: '오현우 기자',
    date: '2026-04-04',
    body: [
      '금융위원회가 발표한 자료에 따르면 스트레스 DSR 2단계 시행 이후 한 달간(3월) 5대 시중은행의 주택담보대출 신청 건수는 4만 2300건으로 집계됐다. 이는 시행 직전 한 달(5만 1500건) 대비 17.9% 감소한 수치다.',
      '스트레스 DSR이란 변동금리 대출 차주에게 향후 금리 인상 가능성을 반영해 추가 가산금리를 적용하는 제도다. 2단계 시행으로 가산금리가 0.75%p로 확대됐다.',
      '금융권 관계자는 "DSR 규제 강화로 대출 한도가 줄어들면서 매수 심리가 위축된 측면이 있다"며 "다만 장기적으로는 가계부채 건전성 개선에 기여할 것"이라고 말했다.'
    ]
  },
  {
    id: 9,
    category: '분양',
    title: '인천 검단신도시 마지막 분양 단지 등장…3.3㎡당 1850만 원',
    summary: '인천 검단신도시의 마지막 민간 분양 단지가 다음 달 분양에 나선다. 3.3㎡당 평균 분양가는 1850만 원 수준으로 책정될 예정이다.',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80',
    author: '강민서 기자',
    date: '2026-04-03',
    body: [
      '인천 서구 검단신도시 AB13블록에 들어서는 ‘검단파크자이르네’가 다음 달 일반분양에 나선다. 총 1188가구 규모의 대단지로, 검단신도시 내 마지막 민간 분양 물량이라는 점에서 관심이 쏠리고 있다.',
      '분양가는 3.3㎡당 평균 1850만 원 수준으로 검토되고 있다. 인근 시세 대비 합리적인 가격이라는 평가가 나온다.',
      '단지는 인천지하철 1호선 검단신도시역(가칭) 도보권에 위치해 있으며, 2026년 말 개통 예정이다.',
      '부동산 업계 관계자는 "검단신도시 인프라가 성숙기에 접어든 만큼 마지막 분양 단지에 대한 관심이 높을 것"이라고 전망했다.'
    ]
  }
];

// ============================================================
// 렌더링
// ============================================================
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

const formatDate = (iso) => {
  const d = new Date(iso);
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`;
};

let activeCategory = 'all';
let searchQuery = '';

function filteredArticles() {
  return articles.filter(a => {
    const matchCategory = activeCategory === 'all' || a.category === activeCategory;
    const q = searchQuery.trim().toLowerCase();
    const matchSearch = !q
      || a.title.toLowerCase().includes(q)
      || a.summary.toLowerCase().includes(q)
      || a.category.toLowerCase().includes(q);
    return matchCategory && matchSearch;
  });
}

function renderHero() {
  const list = filteredArticles();
  const hero = $('#hero');
  if (list.length === 0) { hero.innerHTML = ''; return; }
  const [main, ...rest] = list;
  const sideArticles = rest.slice(0, 3);

  hero.innerHTML = `
    <article class="hero-main" data-id="${main.id}">
      <div class="thumb"><img src="${main.image}" alt="${main.title}" loading="lazy" /></div>
      <p class="category">${main.category}</p>
      <h2>${main.title}</h2>
      <p>${main.summary}</p>
      <p class="meta">${main.author} · ${formatDate(main.date)}</p>
    </article>
    <div class="hero-side">
      ${sideArticles.map(a => `
        <article data-id="${a.id}">
          <p class="category">${a.category}</p>
          <h3>${a.title}</h3>
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

  if (list.length === 0) {
    grid.innerHTML = '<p class="empty-state" style="grid-column: 1/-1;">표시할 추가 기사가 없습니다.</p>';
    return;
  }

  grid.innerHTML = list.map(a => `
    <article class="news-card" data-id="${a.id}">
      <div class="thumb"><img src="${a.image}" alt="${a.title}" loading="lazy" /></div>
      <p class="category">${a.category}</p>
      <h3>${a.title}</h3>
      <p class="summary">${a.summary}</p>
      <p class="meta">${a.author} · ${formatDate(a.date)}</p>
    </article>
  `).join('');

  grid.querySelectorAll('.news-card').forEach(el => {
    el.addEventListener('click', () => openArticle(Number(el.dataset.id)));
  });
}

function renderRanking() {
  const top = [...articles].slice(0, 5);
  $('#ranking-list').innerHTML = top.map(a => `
    <li data-id="${a.id}"><span class="rank-title">${a.title}</span></li>
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
  $('#article-content').innerHTML = `
    <p class="category">${a.category}</p>
    <h1>${a.title}</h1>
    <p class="meta">${a.author} · ${formatDate(a.date)} · 조회수 ${(Math.random() * 9000 + 1000 | 0).toLocaleString()}</p>
    <div class="thumb"><img src="${a.image}" alt="${a.title}" /></div>
    <p class="lead">${a.summary}</p>
    <div class="body">
      ${a.body.map(p => `<p>${p}</p>`).join('')}
    </div>
  `;
  const modal = $('#article-modal');
  if (typeof modal.showModal === 'function') modal.showModal();
  else modal.setAttribute('open', '');
}

$('#modal-close').addEventListener('click', () => $('#article-modal').close());
$('#article-modal').addEventListener('click', (e) => {
  if (e.target.id === 'article-modal') $('#article-modal').close();
});

// ============================================================
// 카테고리 / 검색 / 뉴스레터
// ============================================================
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
const today = new Date();
const days = ['일', '월', '화', '수', '목', '금', '토'];
$('#current-date').textContent =
  `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일 ${days[today.getDay()]}요일`;

// 초기 렌더
renderHero();
renderGrid();
renderRanking();
