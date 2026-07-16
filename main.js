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
    empty: '검색 결과가 없습니다.',
    nl_cta_title: '매일 아침, 부동산 시장을 한눈에',
    nl_cta_desc: '부동산인사이트가 엄선한 핵심 뉴스와 시장 분석을 매일 아침 이메일로 받아보세요. 무료 구독.',
    nl_cta_placeholder: '이메일 주소를 입력하세요',
    nl_cta_btn: '무료 구독',
    nl_cta_done: '구독 신청이 완료되었습니다. 감사합니다!'
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
    empty: 'No results found.',
    nl_cta_title: 'Your morning real estate briefing',
    nl_cta_desc: 'Get curated news and market analysis from RE Insight delivered to your inbox every morning. Free.',
    nl_cta_placeholder: 'Enter your email address',
    nl_cta_btn: 'Subscribe Free',
    nl_cta_done: 'Subscription complete. Thank you!'
  }
};

const articles = [
  {
    id: 196,
    url: 'article_20260715_2_overseas_v2.html',
    category: '해외',
    title: '도쿄 집값 1년 새 21% 폭등…일본이 한국 외국인 토허제를 배우는 이유',
    summary: '도쿄 아파트 평균가가 1년 새 21% 급등했다. 엔저와 외국인 매수세에 놀란 일본 정부가 한국의 외국인 토지거래허가제를 벤치마킹하고 있다. 해외 부동산 투자에 시사하는 바를 분석한다.',
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1200&q=80',
    author: '부동산인사이트 편집팀',
    date: '2026-07-15',
    title_en: 'Tokyo Home Prices Surge 21% in a Year — Why Japan Is Benchmarking Korea\'s Foreign Land Transaction Permit System',
    summary_en: 'Tokyo apartment prices jumped 21% in one year. Alarmed by yen weakness and a surge in foreign buying, Japan is studying Korea\'s foreign land transaction permit system. An analysis of the implications for overseas real estate investors.'
  },
  {
    id: 195,
    url: 'article_20260715_1_investment_v2.html',
    category: '투자분석',
    title: '경매 낙찰가율 101.7% 돌파…스트레스 DSR 3단계 시대, 진짜 투자 기회는 어디에 있나',
    summary: '서울 아파트 경매 낙찰가율이 3개월 연속 100%를 넘어섰다. 스트레스 DSR 3단계가 시행된 현실에서 부동산 투자의 옥석을 가리는 전략을 분석한다.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80',
    author: '부동산인사이트 편집팀',
    date: '2026-07-15',
    title_en: 'Auction Closing Rate Breaks 101.7% — Where Are the Real Investment Opportunities in the Stress DSR Phase 3 Era?',
    summary_en: 'Seoul apartment auction closing rates have exceeded 100% for three consecutive months. With Stress DSR Phase 3 now in effect, an in-depth analysis of strategies to separate winners from losers in today\'s real estate investment landscape.'
  },
  {
    id: 194,
    url: 'article_20260714_2_재개발재건축_v2.html',
    category: '재개발',
    title: '은마아파트 23년 만의 재건축 인가 — 서울 정비사업 속도전이 바꿀 강남의 미래',
    summary: '서울시가 부시장급 공정 컨트롤타워를 세우고 31만 호 착공에 나섰다. 은마·잠실5단지 인가를 기폭제로 압구정까지 이어지는 강남 재건축 도미노를 분석한다.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80',
    author: '부동산인사이트 편집팀',
    date: '2026-07-14',
    title_en: 'Eunma Apartments Gets Reconstruction Approval After 23 Years — How Seoul\'s Redevelopment Race Will Reshape Gangnam',
    summary_en: 'Seoul City established a vice-mayor-level project management control tower and launched 310,000 units for construction. Analyzing the Gangnam reconstruction domino effect from Eunma and Jamsil 5-danji approvals toward Apgujeong.'
  },
  {
    id: 193,
    url: 'article_20260714_1_분양청약_v2.html',
    category: '분양',
    title: '서울 아파트 분양가 3.3㎡당 6,355만원 시대 — 지금 청약해야 하나, 버텨야 하나',
    summary: '2026년 7월 서울 신규 분양가가 역대 최고치를 돌파했다. 3년 만에 66% 폭등한 분양가 속에서 실수요자가 선택해야 할 청약 전략을 심층 분석한다.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80',
    author: '부동산인사이트 편집팀',
    date: '2026-07-14',
    title_en: 'Seoul Apartment Presale Price Hits 63.55 Million Won per 3.3㎡ — Subscribe Now or Wait It Out?',
    summary_en: 'Seoul\'s new apartment presale price broke an all-time high in July 2026. A deep analysis of subscription strategies for end-users amid a 66% price surge in just three years.'
  },
  {
    id: 192,
    url: 'article_20260713_2_policy_v2.html',
    category: '정책',
    title: '동탄·기흥·구리 \'3중 규제\' 해부 — 갭투자 차단인가, 시장 왜곡인가?',
    summary: '동탄·기흥·구리에 투기과열지구·조정대상지역·토지거래허가구역이 동시 발효됐다. 이재명 정부 출범 이후 가장 강력한 규제 패키지, 그 실효성을 냉정하게 해부한다.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80',
    author: '부동산인사이트 정책분석팀',
    date: '2026-07-13',
    title_en: 'Dissecting Dongtan·Giheung·Guri\'s Triple Regulation — Gap Investment Crackdown or Market Distortion?',
    summary_en: 'Speculative overheating zone, adjustment-target area, and land transaction permit zone all took effect simultaneously. A cold-eyed assessment of the Lee Jae-myung government\'s strongest regulation package to date.'
  },
  {
    id: 191,
    url: 'article_20260713_1_market_v2.html',
    category: '시장동향',
    title: '강남을 넘어선 성북·구로의 반란 — 서울 아파트 상승축이 바뀌고 있다',
    summary: '서울 아파트 7월 1주 0.30% 상승 속, 성북구(0.51%)·구로구(0.50%)가 강남을 앞질렀다. 강남 중심의 공식이 무너지고 비강남권이 새로운 상승축으로 부상하는 구조적 변화를 짚는다.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80',
    author: '부동산인사이트 편집팀',
    date: '2026-07-13',
    title_en: 'Seongbuk and Guro Overtake Gangnam — Seoul\'s Apartment Rally Axis Is Shifting',
    summary_en: 'Seoul apartments rose 0.30% in the first week of July. Seongbuk-gu (0.51%) and Guro-gu (0.50%) led the way, overtaking Gangnam. A structural analysis of non-Gangnam districts emerging as Seoul\'s new growth axis.'
  },
  {
    id: 190,
    url: 'article_20260712_2_column_v2.html',
    category: '칼럼',
    title: '집값 오른다는데 나는 왜 못 사나 — 2026년 7월, 실수요자의 진짜 딜레마',
    summary: '서울 아파트가 0.30% 또 올랐다. \'지금 사야 하나, 기다려야 하나.\' 매번 반복되는 이 질문에 전문가들은 어떤 답을 내놓는가. 2026년 하반기 시장 본질을 해부한다.',
    image: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=1200&q=80',
    author: '부동산인사이트 편집팀',
    date: '2026-07-12',
    title_en: 'Why Can\'t I Buy Despite Rising Home Prices — The Real Dilemma for End-Users in July 2026',
    summary_en: 'Seoul apartments rose another 0.30%. \'Should I buy now or wait?\' This question repeats endlessly. What answers do experts offer? A deep dive into the true nature of the H2 2026 market.'
  },
  {
    id: 189,
    url: 'article_20260712_1_overseas_v2.html',
    category: '해외',
    title: '엔화 약세의 끝이 보인다 — 지금이 일본 부동산 \'마지막 기회\'인가',
    summary: '엔화 약세와 오사카 IR 개발 호재가 겹친 2026년, 한국인 투자자들이 일본 부동산에 몰리고 있다. 진짜 기회인지, 아니면 위험한 착각인지 냉정하게 따져본다.',
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1200&q=80',
    author: '부동산인사이트 편집팀',
    date: '2026-07-12',
    title_en: 'The End of Yen Weakness Is in Sight — Is This the \'Last Chance\' for Japanese Real Estate?',
    summary_en: 'With yen weakness overlapping Osaka IR development tailwinds in 2026, Korean investors are flocking to Japanese real estate. Is it a real opportunity, or a dangerous illusion? A cold-eyed assessment.'
  },
  {
    id: 188,
    url: 'article_20260710_2_subscription_v2.html',
    category: '분양',
    title: '7월 수도권 3.2만 가구 쏟아진다…\'반세권\' 단지 로또 vs 지방 미달의 대격차',
    summary: '2026년 7월 전국 3.7만 가구가 분양된다. 수도권은 반도체 클러스터 인근 \'반세권\' 단지가 청약 시장을 달구는 반면, 지방은 미달이 현실화되고 있다. 지금 어디에 청약해야 하는가.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-07-10',
    title_en: '32,000 Units Flood Seoul Metro in July… \'Semiconductor Belt\' Lottery vs. Provincial Shortfall: The Great Divide',
    summary_en: 'A total of 37,000 units go on presale nationwide in July 2026. While \'semiconductor belt\' apartments near chip clusters are heating up metro subscription markets, provincial shortfalls are becoming reality. Where should you apply now?'
  },
  {
    id: 187,
    url: 'article_20260710_1_policy_v2.html',
    category: '정책',
    title: '동탄·기흥·구리 3중 규제 폭탄, 그리고 7월 말 세제개편안의 충격 예고',
    summary: '동탄·기흥·구리가 투기과열지구·조정대상지역으로 지정된 데 이어 7월 말 보유세·거래세 동시 개편안이 예고됐다. 반도체머니가 만들어낸 집값 버블, 정부의 칼날은 어디까지 닿을 것인가.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-07-10',
    title_en: 'Dongtan·Giheung·Guri Triple Regulation Bomb, and the Coming Shock of Late-July Tax Reform',
    summary_en: 'Following the designation of Dongtan, Giheung, and Guri as speculative overheating and adjustment-target zones, a simultaneous overhaul of property and transaction taxes has been announced for late July. How far will the government\'s blade reach into the housing bubble inflated by semiconductor money?'
  },
  {
    id: 186,
    url: 'article_20260709_2_market_v2.html',
    category: '시장동향',
    title: '매매가 전세 추월·주간 0.30% 상승… 7월에도 식지 않는 서울 아파트 열기',
    summary: '5월 서울 아파트 매매 거래가 4년 만에 전세를 앞질렀다. 규제에도 불구하고 수도권 전역으로 번지는 오름세와 양극화 심화의 현장을 지역별로 짚는다.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-07-09',
    title_en: 'Sale Price Overtakes Jeonse, Weekly +0.30%… Seoul Apartment Heat Refuses to Cool in July',
    summary_en: 'Seoul apartment sales transactions surpassed jeonse deals for the first time in four years in May. A region-by-region analysis of the rising tide spreading across the Seoul metro area and deepening polarization despite regulations.'
  },
  {
    id: 185,
    url: 'article_20260709_1_column_v2.html',
    category: '칼럼',
    title: '규제가 집값을 올린다? — 동탄·구리·기흥 사태가 드러낸 한국 부동산의 역설',
    summary: '7월 1일 규제지역 지정 이후에도 동탄 아파트는 주간 1.29% 올랐다. 정부 규제가 오히려 시장을 자극하는 구조적 아이러니를 해부한다.',
    image: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-07-09',
    title_en: 'Do Regulations Drive Up Home Prices? The Paradox Revealed by the Dongtan, Guri, and Giheung Situations',
    summary_en: 'Dongtan apartments rose 1.29% week-on-week even after being designated a regulated zone on July 1. An anatomy of the structural irony where government regulations actually stimulate the market.'
  },
  {
    id: 184,
    url: 'article_20260708_2_overseas_v2.html',
    category: '해외',
    title: '국내 규제 피해 어디로? 2026 한국인 해외 부동산 투자 완전 가이드 — 일본·동남아·미국, 지금 사도 될까',
    summary: '한국인 일본 부동산 투자 3년 만에 3배 급증, 동남아 러브콜 봇물 — 국내 규제 탈출구의 실체와 함정을 해부한다.',
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-07-08',
    title_en: 'Where to Go to Escape Domestic Regulations? Complete Guide to Korean Overseas Real Estate Investment in 2026 — Japan, Southeast Asia, U.S.',
    summary_en: 'Korean investment in Japanese real estate tripled in three years, Southeast Asian markets beckoning — a deep dive into the reality and pitfalls of overseas escape routes from domestic regulations.'
  },
  {
    id: 183,
    url: 'article_20260708_1_investment_v2.html',
    category: '투자분석',
    title: '규제의 벽 앞에서 살아남는 법: 2026 하반기 부동산 투자 생존 전략 완전 해부',
    summary: '경매 낙찰가율 100% 돌파, 갭투자 전면 금지 이후 새 국면에 진입한 한국 부동산 투자 지형도를 분석한다.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-07-08',
    title_en: 'How to Survive the Regulatory Wall: A Complete Breakdown of H2 2026 Real Estate Investment Survival Strategies',
    summary_en: 'Auction closing rate surpasses 100%, gap investing fully banned — analyzing Korea\'s real estate investment landscape after entering a new phase.'
  },
  {
    id: 182,
    url: 'article_20260706_2_policy_v2.html',
    category: '정책',
    title: '스트레스 DSR 3단계 + 보유세 강화 — 이재명 정부의 부동산 이중 처방, 시장을 잡을 수 있는가',
    summary: '스트레스 DSR 3단계 전면 시행으로 연소득 1억 기준 대출한도 1억원 이상 축소, 규제지역 LTV 40% + 가액별 한도까지 더해진 이중 처방. 이재명 정부는 OECD 권고를 따라 보유세 강화 세제개편도 준비 중이지만 서울 6월 매매가는 0.57% 상승하며 규제 효과가 제한적임을 보여주고 있다.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-07-06',
    title_en: 'Stress DSR Phase 3 + Property Tax Hike — Can the Lee Jae-myung Government\'s Real Estate Double Prescription Tame the Market?',
    summary_en: 'Stress DSR Phase 3 slashes loan limits by over 100 million won for those earning 100M annually, compounded by LTV caps and amount-based ceilings in regulated zones. Despite preparations for property tax reform following OECD recommendations, Seoul\'s June apartment prices still rose 0.57%, revealing the limits of demand-side suppression.'
  },
  {
    id: 181,
    url: 'article_20260706_1_market_v2.html',
    category: '시장동향',
    title: '재건축 분양가 27억 시대 — 서울 아파트 7월 상승 가속의 진짜 원인',
    summary: '7월 1주 서울 매매가 +0.21%, 수도권 +0.22% 상승 지속. 6월 월간 전국 변동률 0.57%로 4·5·6월 연속 오름폭 확대. 서울 올해 입주물량 7,000가구로 10년 만에 최저치, 노량진 뉴타운 84㎡ 최고 분양가 27억원, 매매수급지수 108.3 — 구조적 상승 압력 3중 분석.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-07-06',
    title_en: 'The Era of 2.7 Billion Won Presale Prices — The Real Reasons Behind Seoul\'s Accelerating July Rally',
    summary_en: 'Seoul apartment prices rose 0.21% in the first week of July, with the metro area up 0.22%. Monthly nationwide change hit 0.57% in June, expanding for three straight months. Seoul\'s 2026 move-in supply hits a 10-year low at 7,000 units, Noryangjin New Town 84㎡ tops 2.7 billion won, and the supply-demand index reaches 108.3 — a three-pronged structural analysis.'
  },
  {
    id: 180,
    url: 'article_20260705_2_column_v2.html',
    category: '칼럼',
    title: '집값 양극화, 이제는 \'구조\'다 — 수도권과 지방이 다른 나라가 된 이유',
    summary: '서울 강남은 신고가, 지방은 역전세 공포. 2025년 서울 집값 11.26% 상승, 지방 12개 광역시도 하락이라는 숫자가 보여주는 현실은 단순하다. 한국 부동산은 더 이상 전국 단일 시장이 아니다. 이 양극화가 정책 실패가 아닌 구조적 전환임을 직시해야 한다.',
    image: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-07-05',
    title_en: 'Home Price Polarization Is Now \'Structural\' — Why the Metro and Regions Have Become Different Countries',
    summary_en: 'Gangnam hits record highs while regional markets face reverse-jeonse panic. Seoul\'s 11.26% rise in 2025 against declines in 12 out of 17 regions tells a simple story: Korean real estate is no longer one national market. This polarization is not a policy failure — it is a structural shift that demands clear-eyed recognition.'
  },
  {
    id: 179,
    url: 'article_20260705_1_overseas_v2.html',
    category: '해외',
    title: '엔화 약세 마지막 기회? 2026년 일본 부동산 투자 완전 해부',
    summary: '100엔당 150원대 중반, 여전히 열려 있는 엔저의 창. BOJ 금리 인상 기조 속 2026년이 엔화 약세를 활용한 해외 부동산 투자의 \'마지막 창\'이 될 수 있다는 분석이 힘을 얻고 있다. 도쿄 수익률·환율 리스크·세금 문제를 한 번에 해부한다.',
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-07-05',
    title_en: 'The Last Window of Yen Weakness? A Complete Breakdown of Japan Real Estate Investment in 2026',
    summary_en: 'At 150-something won per 100 yen, the weak-yen window remains open — but not for long. With the BOJ on a gradual rate-hike path, analysts say 2026 may be the last chance to leverage yen weakness for overseas real estate. Tokyo yields, currency risk, and tax traps — all dissected in one place.'
  },
  {
    id: 178,
    url: 'article_20260704_2_investment_v2.html',
    category: '투자분석',
    title: '분양가 역대 최고인데 왜 사람들은 청약 포기 안 할까 — 2026년 하반기 부동산 투자 생존전략',
    summary: '서울 민간아파트 평균 분양가 3.3㎡당 5,838만원 역대 최고치, 경매 낙찰가율 상승, GTX 다핵 구조 전환. 2026년 하반기 부동산 시장은 양극화가 심화되는 가운데서도 선택적 상승장이 펼쳐진다. 전략적 투자 인사이트를 정리한다.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80',
    author: '부동산인사이트 투자분석팀',
    date: '2026-07-04',
    title_en: 'Record-High Presale Prices — Yet Why Won\'t People Give Up on Subscriptions? 2026 H2 Real Estate Investment Survival Strategy',
    summary_en: 'Seoul private apartment average presale price hits a record 5,838 won per 3.3㎡, auction bid rates rise, and GTX reshapes the metro into a multi-core structure. The H2 2026 real estate market sees deepening polarization alongside a selective rally — strategic investment insights compiled.'
  },
  {
    id: 177,
    url: 'article_20260704_1_redevelopment_v2.html',
    category: '재개발',
    title: '분당 선도지구 사업시행자 확정! 재건축 도미노 시작됐다 — 당신 단지는 몇 번째?',
    summary: '분당 신도시 선도지구 3개 결합구역 사업시행자 지정 고시 완료. 재건축진단 규제 완화부터 2차 선도지구 12,000세대 경쟁까지, 2026년 7월 정비사업 핵심 이슈를 심층 분석한다.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80',
    author: '부동산인사이트 재개발·재건축 분석팀',
    date: '2026-07-04',
    title_en: 'Bundang Pioneer District Developer Confirmed! The Redevelopment Domino Has Started — Which Complex Is Next?',
    summary_en: 'Seongnam City completes designation of project implementers for three combined zones in the Bundang pilot district. From relaxed redevelopment diagnostic regulations to competition for 12,000 units in the second pioneer district — a deep dive into the July 2026 urban renewal landscape.'
  },
  {
    id: 176,
    url: 'article_20260703_2_subscription_v2.html',
    category: '분양',
    title: '7월 청약 대전(大戰): 수도권 3만 가구 쏟아지는데, \'반세권\'에 올인해도 될까?',
    summary: '2026년 7월 수도권 분양 물량이 3만2000가구를 넘어섰다. 반도체 산업단지 배후 \'반세권\'이 핵심으로 떠올랐지만, 10대 건설사 브랜드 쏠림과 비수기 거래 절벽이라는 복병도 공존한다. 청약 전략을 총정리한다.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-07-03',
    title_en: 'July Subscription War: With 30,000 Units Flooding the Metro Area, Should You Go All-In on \'Semiconductor Belt\' Apartments?',
    summary_en: 'Metro-area presale supply for July 2026 has topped 32,000 units. The \'semiconductor belt\' has emerged as the key theme — but brand concentration among top-10 builders and a summer transaction freeze lurk as risks. A complete breakdown of subscription strategies.'
  },
  {
    id: 175,
    url: 'article_20260703_1_policy_v2.html',
    category: '정책',
    title: '6.30 부동산 대책 완전 해부: 동탄·기흥·구리 3중 규제, 시장은 어디로 가나',
    summary: '6월 30일 정부가 전격 발표한 동탄·기흥·구리 투기과열지구 지정의 배경과 실제 효과를 냉정하게 분석한다. 갭투자 차단과 대출 축소, 토지거래허가구역 3중 규제의 실질적 의미를 짚는다.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-07-03',
    title_en: 'Full Anatomy of the 6.30 Real Estate Measures: Triple Regulation in Dongtan, Giheung & Guri — Where Does the Market Go From Here?',
    summary_en: 'A cold-eyed analysis of the government\'s surprise June 30 designation of Dongtan, Giheung, and Guri as speculative overheating districts — the background, real effects, gap-investment crackdown, loan cuts, and what the triple layer of land-transaction restrictions actually means.'
  },
  {
    id: 174,
    url: 'article_20260702_2_market_v2.html',
    category: '시장동향',
    title: '서울 아파트 72주 연속 상승 — \'이 상승\'의 끝은 어디인가?',
    summary: '6월 마지막 주 서울 매매가격지수 0.27% 상승, 전세 12년 8개월 만 최고 상승폭 — 동탄 규제지역 재지정·전세 최고 상승·공급절벽 3중고 속 시장 흐름을 총정리한다.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80',
    author: '부동산인사이트 편집팀',
    date: '2026-07-02',
    title_en: 'Seoul Apartments Rise for 72 Consecutive Weeks — Where Does This Rally End?',
    summary_en: 'Seoul\'s apartment price index rose 0.27% in the final week of June, with jeonse hitting its highest gain in 12 years and 8 months. A comprehensive market roundup amid the triple headwinds of Dongtan\'s re-regulated zone status, surging jeonse, and a supply cliff.'
  },
  {
    id: 173,
    url: 'article_20260702_1_column_v2.html',
    category: '칼럼',
    title: '72주의 침묵 — 멈추지 않는 집값, 이제 우리는 무엇을 직시해야 하나',
    summary: '숫자에 마비가 온다. 서울 아파트값 72주 연속 상승이 이제는 뉴스가 아닌 배경이 되어버렸다. 공급 절벽·동탄 규제 재지정·정책 실패의 타임라인 — 이 시장은 정상인가, 아니면 우리가 \'정상\'에 익숙해진 것인가.',
    image: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=1200&q=80',
    author: '부동산인사이트 편집위원',
    date: '2026-07-02',
    title_en: '72 Weeks of Silence — Unrelenting Home Prices: What Must We Now Confront?',
    summary_en: 'Seoul apartment prices have risen for 72 consecutive weeks — once a headline, now wallpaper. A supply cliff, Dongtan\'s re-designation as a regulated zone, and a policy timeline of failure — is this market normal, or have we simply grown accustomed to what is not?'
  },
  {
    id: 172,
    url: 'article_20260701_2_overseas_v2.html',
    category: '해외',
    title: '엔저 끝물인가 황금기인가 — 2026 한국인의 일본·미국 부동산 진출 완전 해부',
    summary: '엔화 약세와 미국 모기지 금리 하락이 겹치는 2026년, 도쿄 원룸 5% 수익률 vs. 미국 선별적 회복 — 어디에 베팅할 것인가. 한국인의 해외 부동산 투자 전략을 심층 분석한다.',
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-07-01',
    title_en: 'Is the Weak Yen Fading or a Golden Age? — A Complete Breakdown of Korean Investment in Japan and U.S. Real Estate in 2026',
    summary_en: 'With yen weakness and falling U.S. mortgage rates converging in 2026, Tokyo studio yields hit 5% while the U.S. shows selective recovery — where should you bet? An in-depth analysis of overseas real estate investment strategies for Korean investors.'
  },
  {
    id: 171,
    url: 'article_20260701_1_investment_v2.html',
    category: '투자분석',
    title: '서울 경매 낙찰가율 100% 재돌파… 2026 하반기 부동산 투자, 지금이 기회인가 함정인가',
    summary: '2026년 5월 서울 아파트 경매 낙찰가율이 100%를 재돌파했다. 경매 시장 과열 신호 속 옥석 가리기 전략 완전 해부 — 진짜 수익률은 어디서 나오나.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-07-01',
    title_en: 'Seoul Auction Win-Rate Retops 100% — Is H2 2026 Real Estate Investment an Opportunity or a Trap?',
    summary_en: 'Seoul apartment auction winning-bid rates pierced 100% again in May 2026. A full breakdown of how to separate winners from losers amid overheating auction signals — where does real yield actually come from?'
  },
  {
    id: 170,
    url: 'article_20260629_2_policy_v2.html',
    category: '정책',
    title: '규제로는 집값 못 잡는다… 이재명 정부 부동산 정책 1년의 민낯',
    summary: '보유세 강화 본격화, 공급 절벽, 대출 규제의 삼각 딜레마 — 정책은 어디로 가고 있는가. 이재명 정부 출범 1년, 규제 일변도 부동산 정책의 성과와 한계를 냉정하게 해부한다.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-06-29',
    title_en: 'Regulations Can\'t Tame Home Prices — The Naked Truth of the Lee Government\'s One Year of Real Estate Policy',
    summary_en: 'The triple dilemma of accelerating property-tax hikes, a supply cliff, and lending restrictions — where is policy headed? A cold-eyed dissection of the successes and limits of the Lee Jae-myung administration\'s regulation-first approach after one year.'
  },
  {
    id: 169,
    url: 'article_20260629_1_market_v2.html',
    category: '시장동향',
    title: '서울 아파트값 1년 만에 15% 폭등… 강남을 넘어 강북·외곽까지 불길 번진다',
    summary: '규제에도 꺾이지 않는 상승세, 소형 아파트 쏠림 현상과 지역 확산이 말해주는 진짜 시장의 속내. 강남을 넘어 강북·외곽까지 번지는 상승 불길의 구조적 원인을 분석한다.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80',
    author: '부동산인사이트 편집팀',
    date: '2026-06-29',
    title_en: 'Seoul Apartment Prices Explode 15% in a Year — The Fire Spreads from Gangnam to Gangbuk and the Outskirts',
    summary_en: 'An unstoppable rally despite regulations, a rush into small units, and geographic spread — what the market is really saying. Analyzing the structural causes behind price gains that are now spreading beyond Gangnam to Gangbuk and the city\'s outskirts.'
  },
  {
    id: 168,
    url: 'article_20260628_1_해외부동산_v2.html',
    category: '해외',
    title: '도쿄 vs 미국, 2026년 한국인의 최적 해외 부동산 투자지는 어디인가?',
    summary: '엔저 기회와 달러 자산의 안정성 사이에서 선택의 기로에 선 한국인 투자자들. 도쿄 소형 임대 수익형과 미국 멀티패밀리 자산의 핵심 변수를 정면 비교하고, 환율 리스크·수익률·투자자 유형별 최적 전략을 제시한다.',
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-06-28',
    title_en: 'Tokyo vs. the U.S.: Where Should Koreans Invest in Overseas Real Estate in 2026?',
    summary_en: 'Korean investors stand at a crossroads between weak-yen opportunities and the stability of dollar assets. A head-to-head comparison of Tokyo small-unit rental yields and U.S. multifamily assets — currency risk, returns, and the optimal strategy by investor type.'
  },
  {
    id: 167,
    url: 'article_20260628_2_칼럼_v2.html',
    category: '칼럼',
    title: '지방선거 끝났다, 이재명 정부의 부동산 강공이 이제 시작된다',
    summary: '6·3 지방선거 완승 이후 이재명 정부가 "불로소득 공화국 탈출"을 선언했다. 2028년 총선까지 2년, 보유세 강화·세제 개편·투기 차단 패키지의 실체와 68주 연속 상승 중인 서울 집값에 미칠 충격을 분석한다.',
    image: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=1200&q=80',
    author: '부동산인사이트 편집위원',
    date: '2026-06-28',
    title_en: 'Local Elections Are Over — The Lee Government\'s Real Estate Crackdown Is Now Beginning',
    summary_en: 'After a landslide win in the June 3 local elections, the Lee Jae-myung government declared its mission to escape the "unearned-income republic." With two years until the 2028 general election, an analysis of the coming tax-hike, zoning, and anti-speculation package — and the shock it will deliver to Seoul\'s 68-week price rally.'
  },
  {
    id: 166,
    url: 'article_20260627_2_investment_v2.html',
    category: '투자분석',
    title: '금리 인하 시대의 부동산 투자, 지금 \'영끌\'해도 될까? 2026 하반기 옥석 가리기 전략',
    summary: '2026년 하반기 금리 인하 기대감이 부동산 투자 심리를 자극하고 있다. 다주택자 세제 변화, 경매 시장 양극화, 입지별 수익률 격차 — 지금 어디에 투자해야 하는가.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-06-27',
    title_en: 'Real Estate Investment in the Rate-Cut Era — Should You Go All-In Now? H2 2026 Separating the Wheat from the Chaff',
    summary_en: 'Rate-cut expectations in H2 2026 are stimulating real estate investment sentiment. Multi-home tax changes, auction market polarization, and location-based yield gaps — where should you invest right now?'
  },
  {
    id: 165,
    url: 'article_20260627_1_renewal_v2.html',
    category: '재개발',
    title: '서울 정비사업 8만5천호 착공 선언… 통합재건축이 게임 체인저가 될 수 있을까?',
    summary: '서울시 85개 구역 신속착공 발표와 통합재건축 부상 — 공사비 폭등·사업성 악화로 멈춰 선 정비사업, 이제 어떻게 돌파할 것인가.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-06-27',
    title_en: 'Seoul Declares 85,000-Unit Fast-Track Construction — Can Integrated Reconstruction Be the Game Changer?',
    summary_en: 'Seoul announces fast-track starts for 85 redevelopment zones as integrated reconstruction rises — how will stalled projects break through amid soaring construction costs and worsening feasibility?'
  },
  {
    id: 164,
    url: 'article_20260626_1_policy_v2.html',
    category: '정책',
    title: '이재명 정부 부동산 규제 완전 해부 — 대출 6-4-2 원칙, 토허제 확대, 양도세 중과… 지금 집 사도 되는가?',
    summary: '이재명 정부가 내놓은 6·27 대출 규제, 토지거래허가구역 확대, 양도세 중과 부활까지. 2026년 6월 기준 부동산 규제 전면 해부와 실수요자 대응 전략.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-06-26',
    title_en: 'Full Anatomy of the Lee Government\'s Real Estate Regulations — The 6-4-2 Loan Rule, Expanded Transaction Permits, and Reinstated Capital-Gains Tax: Should You Buy Now?',
    summary_en: 'From the 6·27 loan restrictions and expanded land-transaction permit zones to the reinstatement of capital-gains surcharges — a complete dissection of Korea\'s real estate regulations as of June 2026 and practical response strategies for end-users.'
  },
  {
    id: 163,
    url: 'article_20260626_2_subscription_v2.html',
    category: '분양',
    title: '3기 신도시 6월 청약 폭탄 — 고양창릉·남양주왕숙 5,600가구, 당첨만 되면 3억 번다?',
    summary: '2026년 6월 고양창릉·남양주왕숙 공공분양 5,600가구 청약 일정·자격·전략 완전 정리. 분양가 시세 차익 얼마나 될까? 당첨 확률 높이는 실전 전략.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-06-26',
    title_en: 'June Subscription Bomb in the 3rd-Generation New Towns — 5,600 Units in Goyang Changneung & Namyangju Wangsuk: Win and Pocket ₩300M?',
    summary_en: 'A complete guide to the June 2026 public pre-sale of 5,600 units across Goyang Changneung and Namyangju Wangsuk: schedule, eligibility, and strategy. How large is the price-to-market-value gap, and what are the real tactics to boost your odds?'
  },
  {
    id: 162,
    url: 'article_20260625_1_column_v2.html',
    category: '칼럼',
    title: '7월 세제 폭탄이 온다 — 이재명 정부의 \'불로소득 공화국\' 탈출 선언, 진짜인가?',
    summary: '이재명 정부가 7월 세제 개편을 통해 종합부동산세 강화와 양도세 장특공제 축소를 예고했다. 실거주 중심 패러다임 전환의 의미와 시장 충격을 심층 분석한다.',
    image: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=1200&q=80',
    author: '부동산인사이트 편집위원',
    date: '2026-06-25',
    title_en: 'The July Tax Bomb Is Coming — Is the Lee Government\'s Declaration to Escape the \'Unearned Income Republic\' for Real?',
    summary_en: 'The Lee Jae-myung government has signaled a July tax overhaul tightening the comprehensive real estate tax and cutting the long-term holding deduction. An in-depth analysis of the shift toward a residency-first paradigm and the market shock to follow.'
  },
  {
    id: 161,
    url: 'article_20260625_2_market_v2.html',
    category: '시장동향',
    title: '강남은 오르고, 지방은 가라앉는다 — 2026 상반기 서울·수도권 부동산 시장 총결산',
    summary: '개포동 40억 신고가, 목동·여의도 재건축 기대 폭등, 전월세의 월세 전환 가속… 2026년 상반기 한국 부동산 시장의 선별적 강세와 양극화의 실체를 파헤친다.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80',
    author: '부동산인사이트 시장팀',
    date: '2026-06-25',
    title_en: 'Gangnam Rises, Provinces Sink — A Full Recap of the Seoul and Metro Area Real Estate Market in H1 2026',
    summary_en: 'Gaepo-dong hits a record KRW 4 billion, Mokdong and Yeouido surge on reconstruction expectations, and jeonse-to-monthly rent conversion accelerates. Uncovering the reality of selective strength and polarization in Korea\'s H1 2026 real estate market.'
  },
  {
    id: 160,
    url: 'article_20260624_2_overseas_v2.html',
    category: '해외',
    title: '엔화 약세 끝물인가, 기회의 마지막 창인가 — 한국인의 도쿄 부동산 투자 실전 분석 2026',
    summary: '엔화 약세와 외국인 수요 급증으로 도쿄 주택 가격이 8~10% 상승하며 임대 수익률 2~7%를 기록 중이다. 엔화가 반등하기 전 마지막 매수 기회인지, 아니면 뒤늦은 진입인지 — 2026년 현재 도쿄 부동산의 냉정한 실전 분석.',
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-06-24',
    title_en: 'Is the Weak Yen Fading or Is This the Last Window of Opportunity? — A Practical 2026 Analysis of Tokyo Real Estate for Korean Investors',
    summary_en: 'Tokyo home prices have risen 8–10% on yen weakness and surging foreign demand, with rental yields hitting 2–7%. Is this the last buying window before the yen rebounds, or a belated entry? A clear-eyed 2026 field analysis of Tokyo real estate.'
  },
  {
    id: 159,
    url: 'article_20260624_1_investment_v2.html',
    category: '투자분석',
    title: '토허제 사각지대, 경매가 뚫었다 — 낙찰가율 110% 시대의 부동산 투자 생존 전략',
    summary: '서울 15억 이하 아파트 낙찰가율이 104~112%로 고착화되며 경매 시장이 토허제 사각지대로 떠올랐다. 갭투자 수요가 몰리는 이 시장의 구조적 원인과 실전 투자 생존 전략을 해부한다.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-06-24',
    title_en: 'Auctions Pierce the Blind Spot of Transaction Restrictions — Survival Strategies for the 110% Winning-Bid-Rate Era',
    summary_en: 'Seoul apartments under KRW 1.5B are seeing winning bid rates locked in at 104–112%, making auctions a blind spot for transaction restrictions. Dissecting the structural causes behind this gap-investment rush and the real survival strategies for today\'s market.'
  },
  {
    id: 158,
    url: 'article_20260623_2_재건축안전진단_v2.html',
    category: '재개발',
    title: '30년 아파트, 이제 안전진단 없이 재건축 착수 가능…판도가 바뀐다',
    summary: '1994년 도입 이후 30년간 \'재건축의 문지기\'였던 안전진단이 전면 개편됐다. 착수 요건에서 사업 인가 전 요건으로 위치가 바뀌면서 전국 수십만 세대의 노후 아파트에 새 바람이 불어오고 있다. 기회인가, 함정인가.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-06-23',
    title_en: '30-Year-Old Apartments Can Now Begin Reconstruction Without Safety Inspection — The Rules Have Changed',
    summary_en: 'The safety inspection system that served as the \'gatekeeper of reconstruction\' for 30 years since 1994 has been overhauled. As it shifts from a startup requirement to a pre-approval condition, a new wave of opportunity is sweeping hundreds of thousands of aging apartments nationwide. Opportunity or trap?'
  },
  {
    id: 157,
    url: 'article_20260623_1_청약양극화_v2.html',
    category: '분양',
    title: '서울 153:1 vs 지방 줄미달…청약 시장의 \'두 얼굴\'이 말하는 것',
    summary: '분양가 상한제라는 단 하나의 변수가 만들어낸 극단적 양극화. 서울은 청약 전쟁터가 됐고 지방은 미달의 늪에 빠졌다. 이 구조는 왜 생겼고, 실수요자는 어떻게 대응해야 하는가.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-06-23',
    title_en: 'Seoul 153:1 vs Provincial Shortfalls — What the \'Two Faces\' of the Subscription Market Are Telling Us',
    summary_en: 'A single variable — the presale price cap — has created extreme polarization. Seoul has become a subscription battleground while the provinces sink into a pool of undersubscription. Why did this structure emerge, and how should end-users respond?'
  },
  {
    id: 156,
    url: 'article_20260622_2_policy_v2.html',
    category: '정책',
    title: '"보유세가 낮다" 이재명 대통령의 선전포고 — 7월 부동산 세제 개편, 집주인이 알아야 할 모든 것',
    summary: '이재명 정부가 7월 종합부동산세 인상과 양도세 장특공제 축소를 예고했다. 역대 가장 강도 높은 부동산 세제 개편이 될 수 있다는 이 대책, 구체적으로 무엇이 어떻게 바뀌고 시장에 어떤 파장을 일으킬까.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-06-22',
    title_en: '"Holding Taxes Are Too Low" — President Lee\'s Declaration of War: Everything Homeowners Must Know About the July Real Estate Tax Overhaul',
    summary_en: 'The Lee Jae-myung government has signaled a July hike to comprehensive real estate tax and a cut to the long-term holding deduction. What exactly changes and what market shockwaves will follow from what could be the most aggressive property-tax reform in history?'
  },
  {
    id: 155,
    url: 'article_20260622_1_market_v2.html',
    category: '시장동향',
    title: '강남 하락 vs 강북 질주 — 서울 아파트 시장, 두 개의 속도로 달린다',
    summary: '2026년 6월, 서울 아파트 시장은 강남 3구와 강북 외곽 사이에서 전례 없는 양극화 신호를 보내고 있다. 전세가율, 매매 변동률, 거래량 데이터로 시장의 이중 구조를 해부한다.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-06-22',
    title_en: 'Gangnam Falls, Gangbuk Surges — Seoul\'s Apartment Market Runs at Two Speeds',
    summary_en: 'In June 2026, Seoul\'s apartment market is sending unprecedented polarization signals between the Gangnam 3 districts and the outer Gangbuk areas. Dissecting the market\'s dual structure through jeonse ratios, price-change rates, and transaction volume data.'
  },
  {
    id: 154,
    url: 'article_20260621_2_column_v2.html',
    category: '칼럼',
    title: '상반기를 모르면 하반기가 안 보인다 — 양도세 폭탄·공급 절벽·전세난의 교차점',
    summary: '2026년 상반기 한국 부동산 시장을 뒤흔든 핵심 5대 이슈를 해부하고, 하반기 시장을 좌우할 세제·전세·금리 변수를 심층 분석한다.',
    image: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-06-21',
    title_en: 'Blind to H1, Blind to H2 — At the Crossroads of Capital-Gains Bombs, Supply Cliffs, and a Jeonse Crisis',
    summary_en: 'A dissection of the five key issues that shook Korea\'s real estate market in the first half of 2026, with an in-depth analysis of the tax, jeonse, and interest-rate variables that will define the second half.'
  },
  {
    id: 153,
    url: 'article_20260621_1_overseas_v2.html',
    category: '해외',
    title: '달러·엔·동(VND)의 삼각 전쟁 — 2026년 한국인 해외 부동산 투자 지도를 다시 그린다',
    summary: '미국 모기지 금리 하락, 엔저 지속, 베트남 토지법 개정이 맞물린 2026년. 한국인 해외 부동산 투자자가 반드시 알아야 할 3개국 시장 분석과 전략을 제시한다.',
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-06-21',
    title_en: 'The Dollar-Yen-Dong Triangle War — Redrawing the 2026 Map of Korean Overseas Real Estate Investment',
    summary_en: 'US mortgage rate cuts, a third year of yen weakness, and a sweeping revision of Vietnam\'s land law — 2026 is a pivotal year. A three-country market analysis and strategy guide every Korean overseas investor must read.'
  },
  {
    id: 152,
    url: 'article_20260620_2_투자분석_v2.html',
    category: '투자분석',
    title: '지방선거 후 부동산 지도 뒤집힌다? 지금 \'경매\'로 돈 버는 사람들의 진짜 전략',
    summary: '낙찰가율 100% 돌파 후 냉각, 토허제 완화 기대, 다주택자 양도세 유예 연장 논란까지 — 2026년 하반기 부동산 투자의 핵심 변수를 해부한다.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-06-20',
    title_en: 'Property Map Flips After Local Elections? The Real Strategy Behind Those Making Money in Auctions Right Now',
    summary_en: 'After auction win-rates topped 100% and then cooled, with hopes for eased transaction permits and controversy over multi-home capital-gains tax deferral extension — dissecting the key variables for second-half 2026 real estate investment.'
  },
  {
    id: 151,
    url: 'article_20260620_1_재건축_v2.html',
    category: '재개발',
    title: '안전진단 사실상 폐지, 목동·은마·잠실까지 뒤흔들다 — 2026 재건축 대격변의 진짜 의미',
    summary: '재건축진단 제도 전면 개편·선도지구 확대·통합심의 도입… 30년 묵은 규제의 벽이 허물어지고 있다. 기대와 현실 사이, 어디에 기회가 있는가?',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-06-20',
    title_en: 'Safety Diagnosis Effectively Abolished — Shaking Up Mokdong, Eunma, Jamsil and Beyond: The Real Meaning of the 2026 Reconstruction Upheaval',
    summary_en: 'A sweeping overhaul of the reconstruction-diagnosis system, expanded pilot districts, and integrated review introduced — the 30-year wall of regulation is crumbling. Where does the opportunity lie between expectation and reality?'
  },
  {
    id: 150,
    url: 'article_20260619_2_subscription_v2.html',
    category: '분양',
    title: '서울 153대1 vs 지방 줄줄이 미달 — 청약 양극화의 민낯, 2026 하반기 분양 지도',
    summary: '지난달 서울 1순위 경쟁률이 전국 평균의 24배를 넘어선 반면, 비수도권 8개 단지는 모두 1순위 마감에 실패했다. \'청약 로또\'가 서울만의 특권이 된 분양시장의 냉전 구조를 분석한다.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-06-19',
    title_en: 'Seoul 153-to-1 vs Provincial Undersubscription — The Bare Face of Subscription Polarization and the H2 2026 Pre-Sale Map',
    summary_en: 'Last month Seoul\'s first-priority competition ratio topped 24 times the national average, while all eight non-capital-region complexes failed to fill first-priority quotas. An analysis of a pre-sale market where the \'subscription lottery\' has become a Seoul-only privilege.'
  },
  {
    id: 149,
    url: 'article_20260619_1_policy_v2.html',
    category: '정책',
    title: '종부세 인상·DSR 3단계·다주택 대출 봉쇄 — 7월 세제 개편이 쏘아 올린 부동산 판도 변화',
    summary: '취임 1년 만에 "보유세가 너무 낮다"고 선언한 이재명 정부. 7월 종합부동산세 인상과 스트레스 DSR 전국 확대가 동시에 닥치며 다주택자와 갭투자자는 더 이상 물러설 곳이 없다.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-06-19',
    title_en: 'Higher Property Tax, Stress DSR Phase 3, and a Multi-Home Loan Lockdown — How July\'s Tax Overhaul Reshapes the Property Landscape',
    summary_en: 'A year into its term, the Lee Jae-myung administration declared that "holding taxes are too low." With July\'s comprehensive property-tax hike and a nationwide expansion of Stress DSR landing at once, multi-home owners and gap investors have nowhere left to retreat.'
  },
  {
    id: 148,
    url: 'article_20260618_2_market_v2.html',
    category: '시장동향',
    title: '"될 곳만 된다" — 2026년 6월 서울 아파트 선별적 상승장의 해부',
    summary: '매매·전세 동반 상승 속에서도 강남·재건축 기대 지역 중심으로 양극화가 심화됐다. 지역별 데이터로 \'선별 상승장\'의 실체를 분석한다.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-06-18',
    title_en: '"Only the Chosen Rise" — Dissecting Seoul\'s Selective Apartment Rally of June 2026',
    summary_en: 'Even as both sale and jeonse prices climbed, polarization deepened around Gangnam and reconstruction-expectant districts. A data-driven look at the reality of a selective rally.'
  },
  {
    id: 147,
    url: 'article_20260618_1_column_v2.html',
    category: '칼럼',
    title: '금리 내려도 대출은 막힌다 — 스트레스 DSR 3단계의 역설',
    summary: '2026년 7월 스트레스 DSR 3단계 시행을 앞두고, 금리 인하 기대와 대출규제 강화가 충돌하는 시장의 실상을 심층 분석한다.',
    image: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-06-18',
    title_en: 'Rates Fall, Yet Loans Stay Shut — The Paradox of Stress DSR Phase 3',
    summary_en: 'Ahead of the July 2026 rollout of Stress DSR Phase 3, an in-depth analysis of a market where hopes for rate cuts collide with tightening lending rules.'
  },
  {
    id: 146,
    url: 'article_20260617_2_overseas_v2.html',
    category: '해외',
    title: '57조 원의 교훈 — 한국인 해외 부동산 투자, 미국·일본·베트남에서 살아남는 법',
    summary: '국내 금융권 해외 부동산 대체투자 잔액 57조 원, 일부에서 기한이익상실(EOD) 발생. 글로벌 시장의 기회와 함정을 냉철하게 해부한다.',
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-06-17',
    title_en: 'A 57-Trillion-Won Lesson — How Koreans Can Survive Overseas Property Investment in the US, Japan and Vietnam',
    summary_en: 'With domestic financial firms holding 57 trillion won in overseas real estate, and some facing events of default, a cool-headed dissection of global market opportunities and traps.'
  },
  {
    id: 145,
    url: 'article_20260617_1_investment_v2.html',
    category: '투자분석',
    title: '갭투자의 황혼, 그리고 새로운 투자 공식 — 2026년 부동산 투자 생존 전략',
    summary: '경매 낙찰가율 108% 피크 후 냉각, 토허제 강화, 증빙 의무화… 규제의 파도 속에서 살아남는 투자 전략을 분석한다.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-06-17',
    title_en: 'The Twilight of Gap Investing and a New Formula — A 2026 Real Estate Investment Survival Strategy',
    summary_en: 'After auction win-rates peaked at 108% before cooling, with tighter permit zones and mandatory documentation, an analysis of strategies to survive the wave of regulation.'
  },
  {
    id: 144,
    url: 'article_20260616_2_재건축_v2.html',
    category: '재개발',
    title: '목동 재건축은 \'지금\'이 골든타임 — 10년 기다림이 가속 페달 밟은 이유',
    summary: '14개 단지 전원 정비구역 지정 완료, 절반 이상 신탁 방식 전환, 이주 시점은 2027~2029년. 서울 서남권 최대 정비사업의 속도가 달라졌다.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-06-16',
    title_en: 'Mokdong Reconstruction Is in Its Golden Hour \'Now\' — Why a Decade-Long Wait Has Hit the Accelerator',
    summary_en: 'All 14 complexes designated as redevelopment zones, more than half converted to the trust method, and relocation set for 2027–2029. The pace of southwestern Seoul\'s largest redevelopment project has changed.'
  },
  {
    id: 143,
    url: 'article_20260616_1_청약_v2.html',
    category: '분양',
    title: '3기 신도시 로또청약의 민낯 — 당신은 정말 당첨될 수 있나?',
    summary: '고양 창릉 S2·S3·S4블록 3,387가구 본청약 임박. 분양가상한제가 만들어낸 \'반값 아파트\'의 기회와 함정을 전면 해부한다.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-06-16',
    title_en: 'The Naked Truth of the Third-Phase New Town \'Lottery\' Subscription — Can You Really Win?',
    summary_en: 'With the main subscription for 3,387 units in Goyang Changneung blocks S2, S3 and S4 imminent, a full dissection of the opportunities and traps of the \'half-price apartments\' created by the price-cap system.'
  },
  {
    id: 142,
    url: 'article_20260614_2_column_v2.html',
    category: '칼럼',
    title: '"집이 없으면 더 비싸게 사야 한다" — 서울 공급절벽이 만든 15억 시대의 역설',
    summary: '수요를 억눌러도 공급이 없으면 가격은 버틴다. 공급절벽이 만든 15억 시대의 역설을 짚으며, 2026년 하반기 서울 부동산 시장이 보내는 신호를 냉정하게 해석한다.',
    image: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-06-14',
    title_en: '"No Home Means Paying Even More" — The Paradox of the 1.5-Billion-Won Era Born of Seoul\'s Supply Cliff',
    summary_en: 'Suppress demand all you like — without supply, prices hold. Reading the paradox of the 1.5-billion-won era created by the supply cliff, a clear-eyed interpretation of the signals Seoul\'s housing market is sending in the second half of 2026.'
  },
  {
    id: 141,
    url: 'article_20260614_1_overseas_v2.html',
    category: '해외',
    title: '달러·엔화 자산으로 분산하라 — 2026년 미·일 부동산 투자, 지금이 마지막 기회인가?',
    summary: '금리 인하 사이클 진입과 엔화 반등 신호 사이에서, 한국인 투자자가 놓쳐서는 안 될 미국·일본 부동산 시장의 핵심 변수를 해부한다. 달러·엔화 자산 분산 전략을 제시한다.',
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-06-14',
    title_en: 'Diversify into Dollar and Yen Assets — Is Now the Last Chance for 2026 U.S. and Japan Real Estate?',
    summary_en: 'Between the start of a rate-cutting cycle and signs of a yen rebound, a dissection of the key variables in the U.S. and Japanese property markets that Korean investors cannot afford to miss — with a strategy for diversifying into dollar- and yen-denominated assets.'
  },
  {
    id: 140,
    url: 'article_20260613_2_investment_v2.html',
    category: '투자분석',
    title: '경매 냉각·양도세 일몰 이후 — 2026 하반기 부동산 투자 생존 전략',
    summary: '1월 정점을 찍은 서울 경매 낙찰가율이 하락세로 전환됐다. 양도세 중과 배제 일몰 충격이 더해지는 지금, 어떤 자산을 사고 어떤 자산을 팔아야 하는가. 하반기 옥석 가리기 전략을 제시한다.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-06-13',
    title_en: 'After the Auction Chill and the Capital-Gains Tax Sunset — A 2026 Second-Half Real Estate Investment Survival Strategy',
    summary_en: 'Seoul\'s auction winning-bid ratio, which peaked in January, has turned downward. With the sunset of the heavy capital-gains tax exemption adding to the shock, which assets should you buy and which should you sell? A strategy for separating the wheat from the chaff in the second half.'
  },
  {
    id: 139,
    url: 'article_20260613_1_redevelopment_v2.html',
    category: '재개발',
    title: '"지금이 진입 타이밍?" — 77조 정비사업 시대, 속도전의 명과 암을 해부한다',
    summary: '이재명 정부 출범 후 첫 지방선거가 강남·강북을 가릴 것 없이 \'정비사업 속도\'를 1호 공약으로 만들었다. 그러나 공공·민간의 방향이 어긋난 채 달리는 지금, 어디서 기회를 찾아야 하는가.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-06-13',
    title_en: 'Is Now the Time to Get In? Dissecting the Light and Shadow of the Speed War in the 77-Trillion-Won Redevelopment Era',
    summary_en: 'The first local elections after the Lee Jae-myung administration took office made "redevelopment speed" the No. 1 pledge across both Gangnam and Gangbuk. But with public and private sectors racing in misaligned directions, where should one look for opportunity?'
  },
  {
    id: 138,
    url: 'article_20260611_2_시장동향_v2.html',
    category: '시장동향',
    title: '서울만 오른다: 2026년 6월 부동산 양극화 쇼크 완전분석',
    summary: '2026년 6월 서울 아파트 시세·거래량 최신 동향과 수도권-지방 양극화 심화의 구조적 원인을 짚는다. 거래는 줄었는데 서울 호가는 왜 안 내려오는지, 실수요자 대응 전략까지 분석한다.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-06-11',
    title_en: 'Only Seoul Rises: A Complete Analysis of the June 2026 Real Estate Polarization Shock',
    summary_en: 'The latest June 2026 trends in Seoul apartment prices and transaction volumes, and the structural causes of deepening capital-region versus provincial polarization. Why Seoul asking prices stay high even as deals dry up — plus strategies for real demand buyers.'
  },
  {
    id: 137,
    url: 'article_20260611_1_칼럼_v2.html',
    category: '칼럼',
    title: '규제의 역설: 10·15 대책 8개월, 집값은 왜 안 잡히나',
    summary: '10·15 부동산 대책 시행 8개월을 맞아 토지거래허가구역과 스트레스 DSR 3단계가 만들어낸 시장 왜곡의 실체를 심층 분석한다. 규제 3종 세트가 오히려 양극화를 키운 역설의 메커니즘을 해부한다.',
    image: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-06-11',
    title_en: 'The Paradox of Regulation: Eight Months After the Oct. 15 Measures, Why Won\'t Prices Cool?',
    summary_en: 'Eight months into the Oct. 15 property measures, an in-depth look at the market distortions created by land-transaction permit zones and the third phase of stress DSR — dissecting the paradox by which a trio of regulations widened polarization instead.'
  },
  {
    id: 136,
    url: 'article_20260610_2_overseas_v2.html',
    category: '해외',
    title: '미국·일본·동남아 중 어디가 진짜 기회인가—2026년 한국인 해외 부동산 투자 완전 가이드',
    summary: '국내 규제 강화로 해외로 눈 돌리는 한국인 투자자들이 늘고 있다. 미국 모기지 금리 하락, 일본 엔화 약세 지속, 동남아 신흥 시장 급성장… 지금 어디를 봐야 하는지 지역별 냉정한 분석을 제시한다.',
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-06-10',
    title_en: 'Where Is the Real Opportunity — the U.S., Japan, or Southeast Asia? The Complete 2026 Guide to Overseas Real Estate for Korean Investors',
    summary_en: 'As tighter domestic regulation pushes more Korean investors abroad, falling U.S. mortgage rates, a persistently weak yen, and surging Southeast Asian emerging markets all beckon. A clear-eyed, region-by-region analysis of where to look now.'
  },
  {
    id: 135,
    url: 'article_20260610_1_investment_v2.html',
    category: '투자분석',
    title: '갭투자 막혔다, 이제 진짜 고수들은 여기에 몰린다—2026년 부동산 투자 생존 전략 완전 해부',
    summary: '서울 전역 토지거래허가구역 지정, 대출 규제 강화, 경매 낙찰가율 하락… 판이 완전히 바뀌었다. 규제의 파고 속에서 합리적 수익을 추구하는 2026년 부동산 투자 전략을 낱낱이 분석한다.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-06-10',
    title_en: 'Gap Investing Is Dead — Here\'s Where the Real Pros Are Moving: A Full Breakdown of 2026 Real Estate Survival Strategy',
    summary_en: 'Citywide land transaction permit zones, tighter lending rules, falling auction winning-bid ratios — the game has completely changed. A thorough analysis of 2026 real estate strategies for pursuing rational returns amid the regulatory storm.'
  },
  {
    id: 134,
    url: 'article_20260609_2_재개발재건축_v2.html',
    category: '재개발',
    title: '80조 정비사업 시장, 이주비 대출 규제에 \'올스톱\' 위기—공급 절벽의 뇌관이 터진다',
    summary: '2026년 서울 정비사업 80조원 시장이 이주비 대출 규제로 91%가 이주 차질. 재건축·재개발 올스톱 위기의 원인과 파장, 정책 해법을 심층 분석한다.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-06-09',
    title_en: 'An 80-Trillion-Won Redevelopment Market on the Brink as Relocation Loan Curbs Bite — The Supply-Cliff Detonator',
    summary_en: 'Relocation loan restrictions have stalled 91% of Seoul\'s 80-trillion-won redevelopment market. An in-depth analysis of the causes and fallout of the reconstruction shutdown crisis and the policy fixes on the table.'
  },
  {
    id: 133,
    url: 'article_20260609_1_분양청약_v2.html',
    category: '분양',
    title: '서울 전용 84㎡ 평균 분양가 21억 돌파—\'20억 청약 시대\', 당신은 준비됐나?',
    summary: '2026년 6월 분양전망지수 69.4로 급락, 서울 전용84㎡ 평균 분양가 21억 돌파. 공공분양 2.9만호 확대와 고분양가의 충돌 속 실수요자 전략을 분석한다.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-06-09',
    title_en: 'Seoul\'s Average 84㎡ Presale Price Tops 2.1 Billion Won — Are You Ready for the "2-Billion-Won Subscription Era"?',
    summary_en: 'June 2026\'s presale outlook index plunged to 69.4 as Seoul\'s average 84㎡ presale price topped 2.1 billion won. An analysis of end-user strategy amid the clash between a 29,000-unit public presale expansion and soaring prices.'
  },
  {
    id: 132,
    url: 'article_20260608_2_policy_v2.html',
    category: '정책',
    title: '7월 스트레스DSR 3단계 폭탄 시작…"내 대출 한도 수천만 원 사라진다"',
    summary: '2026년 7월 1일, 전 금융권 가계대출에 스트레스 금리 100% 적용이 시작된다. 연봉 1억 원 차주도 최대 4,800만 원이 줄어드는 이 규제, 집 살 계획이 있다면 지금 당장 대출 전략을 재점검해야 한다.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80',
    author: '부동산인사이트 정책팀',
    date: '2026-06-08',
    title_en: 'July\'s Stress DSR Phase 3 Bomb Begins — "Tens of Millions Wiped From My Loan Limit"',
    summary_en: 'On July 1, 2026, a full 100% stress rate kicks in on household lending across all financial sectors. Even a borrower earning 100 million won loses up to 48 million won in capacity — if you plan to buy a home, reassess your loan strategy now.'
  },
  {
    id: 131,
    url: 'article_20260608_1_market_v2.html',
    category: '시장동향',
    title: '거래절벽 속 69주 연속 상승…서울 집값의 역설, 언제까지 계속되나',
    summary: '다주택자 양도세 중과 부활로 거래량이 57% 폭락했지만, 오히려 집값은 상승세를 이어가고 있다. 공급 부족과 매물 잠김이 만들어낸 이 기이한 역설의 실체를 파헤친다.',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-06-08',
    title_en: 'A Transaction Cliff Yet 69 Straight Weeks of Gains — How Long Can Seoul\'s Housing Paradox Last?',
    summary_en: 'The return of the multi-home capital gains tax surcharge sent transaction volume plunging 57%, yet home prices keep climbing. A deep dive into the strange paradox created by supply shortages and listing lock-up.'
  },
  {
    id: 130,
    url: 'article_20260607_2_column_v2.html',
    category: '칼럼',
    title: '양도세 중과 부활 이후 시장은 어디로 가나—매물 잠김 vs. 급매 쏟아짐, 둘 중 하나가 틀렸다',
    summary: '2026년 5월 다주택자 양도세 중과 유예 종료 이후 한국 부동산 시장의 구조적 변화를 심층 해설한다. 매물 잠김과 급매 출회라는 상반된 전망 중 어느 쪽이 현실이 될지 분석한다.',
    image: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-06-07',
    title_en: 'Where Does the Market Go After the Capital Gains Tax Surcharge Returns? — Lock-up vs. Fire Sale, One of Them Is Wrong',
    summary_en: 'An in-depth analysis of the structural shift in Korea\'s real estate market after the multi-home capital gains tax surcharge grace period ended in May 2026 — examining which of the two opposing scenarios, listing lock-up or a wave of distressed sales, will become reality.'
  },
  {
    id: 129,
    url: 'article_20260607_1_overseas_v2.html',
    category: '해외',
    title: '엔저의 끝? 아직 늦지 않았다—2026년 한국인 해외 부동산 투자, 지금이 마지막 기회인 이유',
    summary: '2026년 하반기, 미국·일본·동남아 부동산 시장 최신 동향과 한국인 투자자를 위한 실전 전략을 심층 분석한다.',
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-06-07',
    title_en: 'The End of the Weak Yen? Not Too Late Yet — Why 2026 Is the Last Chance for Koreans Investing in Overseas Real Estate',
    summary_en: 'An in-depth analysis of the latest trends in the U.S., Japanese, and Southeast Asian real estate markets in H2 2026, with practical strategies for Korean investors.'
  },
  {
    id: 128,
    url: 'article_20260606_2_투자전략_v2.html',
    category: '투자분석',
    title: '3중 규제의 덫, 어디서 살아남나—2026 하반기 부동산 투자 생존 전략',
    summary: '양도세 중과 재시행·LTV 상한 붕괴·토지거래허가구역 확대. 이재명 정부 3중 규제 속에서 실수요자와 투자자가 살아남는 방법을 구체적으로 분석한다.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-06-06',
    title_en: 'The Trap of Triple Regulation — A 2026 H2 Real Estate Investment Survival Strategy',
    summary_en: 'Capital gains tax surcharge reinstatement, LTV cap collapse, land transaction permit zone expansion. A concrete analysis of how end-users and investors can survive the Lee Jae-myung administration\'s triple regulation.'
  },
  {
    id: 127,
    url: 'article_20260606_1_재건축이주비_v2.html',
    category: '재개발',
    title: '이주비 대출 \'제로\' 폭탄—서울 재건축 39곳·3만1천 가구 사업 올스톱 위기',
    summary: '이재명 정부의 이주비 대출 규제로 서울 정비사업 90%가 사업 지연 위기에 빠졌다. 다주택자 LTV 0% 룰이 공약 이행과 공급 확대를 동시에 좌초시키는 역설을 심층 분석한다.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-06-06',
    title_en: 'Relocation Loan "Zero" Bomb — 39 Seoul Reconstruction Sites, 31,000 Households Face Shutdown',
    summary_en: 'The Lee Jae-myung administration\'s relocation loan restrictions push 90% of Seoul redevelopment projects toward delay. An in-depth analysis of the paradox where the multi-home LTV 0% rule derails both pledge fulfillment and supply expansion.'
  },
  {
    id: 126,
    url: 'article_20260604_2_market_v2.html',
    category: '시장동향',
    title: '강남은 식고 강북은 뜬다—서울 아파트 \'두 개의 시장\' 완전 분석',
    summary: '주간 0.25% 상승, 동대문·성동·강북이 견인… 공시가 폭탄 맞은 강남 3구는 숨 고르기. 수도권 양극화가 심화되는 이 순간, 어디에 기회가 있나.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-06-04',
    title_en: 'Gangnam Cools, Gangbuk Rises — A Complete Analysis of Seoul Apartments\' Two Markets',
    summary_en: 'Weekly 0.25% rise led by Dongdaemun, Seongdong, and Gangbuk. Gangnam 3 districts pause under assessed value shock. Where are the opportunities as metropolitan polarization deepens?'
  },
  {
    id: 125,
    url: 'article_20260604_1_column_v2.html',
    category: '칼럼',
    title: '입주 반토막, 전세 대란 카운트다운—공급 절벽이 부른 재앙, 지금 당장 피난처를 찾아라',
    summary: '서울 입주물량 48% 급감, 전세매물 26% 증발… 규제는 쏟아지는데 집은 없다. 공급 절벽의 구조적 원인과 실수요자가 취해야 할 선택을 짚는다.',
    image: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-06-04',
    title_en: 'Move-ins Halved, Jeonse Crisis Countdown — The Catastrophe of Supply Cliff, Find Shelter Now',
    summary_en: 'Seoul move-in supply plunges 48%, jeonse listings vanish by 26%. Regulations pile up but homes are gone. Analyzing the structural causes of supply cliff and the choices end-users must make.'
  },
  {
    id: 124,
    url: 'article_20260603_2_overseas_v2.html',
    category: '해외',
    title: '엔저와 신법령이 열어준 창 — 지금 일본·베트남 부동산에 투자해야 하는 진짜 이유',
    summary: '도쿄 8~10% 상승률, 엔화 약세, 베트남 토지법 개정… 한국 부동산 규제 피로가 낳은 해외 투자 분산의 논리와 리스크를 분석한다.',
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-06-03',
    title_en: 'The Window Opened by Weak Yen and New Laws — The Real Reasons to Invest in Japan and Vietnam Real Estate Now',
    summary_en: 'Tokyo 8-10% price gains, yen weakness, Vietnam land law reform — analyzing the logic and risks of overseas investment diversification driven by Korean regulatory fatigue.'
  },
  {
    id: 123,
    url: 'article_20260603_1_investment_v2.html',
    category: '투자분석',
    title: '경매 법정이 뜨겁다 — 토지거래허가제가 만든 역설, 투자자들은 왜 법원으로 향하는가',
    summary: '규제의 빈틈에서 피어난 경매 열풍, 낙찰가율 107%의 의미와 지금 이 시점 투자자가 알아야 할 진실을 분석한다.',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-06-03',
    title_en: 'Auction Courts Are Heating Up — The Paradox Created by Land Transaction Permits, Why Investors Head to Court',
    summary_en: 'The auction boom born from regulatory gaps — analyzing the meaning of 107% winning bid rates and what investors need to know right now.'
  },
  {
    id: 122,
    url: 'article_20260602_2_재개발재건축_v2.html',
    category: '재개발',
    title: '6.3 지방선거 후 재건축·재개발은 어디로 가나 — 세 후보 공약 해부',
    summary: '서울시장 선거 이후 정비사업 판도가 바뀐다. 정원오·오세훈·김정철 세 후보의 재건축·재개발 공약을 해부하고, 조합원과 실수요자가 알아야 할 시사점을 분석한다.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-06-02',
    title_en: 'Where Will Redevelopment Go After the June 3 Local Elections — Dissecting Three Candidates\' Pledges',
    summary_en: 'The redevelopment landscape shifts after the Seoul mayoral election. Analyzing the reconstruction and redevelopment pledges of three candidates and their implications for union members and end-users.'
  },
  {
    id: 121,
    url: 'article_20260602_1_분양청약_v2.html',
    category: '분양',
    title: '로또청약의 민낯: 분양가 상한제가 만든 기회와 불평등',
    summary: '2026년 서울 핵심지 분양 열풍의 이면을 짚는다. 135대 1, 360대 1을 기록한 청약 경쟁의 구조적 원인과 실수요자의 현실적 대응 전략.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-06-02',
    title_en: 'The True Face of Lottery Subscriptions: Opportunity and Inequality Created by Price Cap Policy',
    summary_en: 'Examining the flip side of the 2026 Seoul presale frenzy. Analyzing the structural causes behind 135:1 and 360:1 competition ratios and realistic strategies for end-users.'
  },
  {
    id: 120,
    url: 'article_20260601_2_policy_v2.html',
    category: '정책',
    title: '대출 한도 또 줄었다…스트레스 DSR 3단계 완전 해부, 내 집 마련 전략은?',
    summary: '스트레스 DSR 3단계 시행으로 대출 한도가 약 1억 2,000만 원 줄었다. 연소득 1억 원 기준 주담대 한도 변화, 전세대출 DSR 포함, 지역별 차등 적용 등 규제의 실체를 해부하고 실수요자·투자자를 위한 대응 전략을 제시한다.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-06-01',
    title_en: 'Loan Limits Shrink Again — Full Breakdown of Stress DSR Phase 3 and Home-Buying Strategies',
    summary_en: 'Stress DSR Phase 3 cuts mortgage limits by approximately 120 million won. Analyzing the real impact on loan caps, jeonse loan inclusion, regional differentiation, and presenting response strategies for end-users and investors.'
  },
  {
    id: 119,
    url: 'article_20260601_1_market_v2.html',
    category: '시장동향',
    title: '서울 아파트 19년 만에 최대 폭 상승 후 급반전…이 침묵이 더 무섭다',
    summary: '5월 2주 서울 아파트 0.28% 상승, 성북·종로 역대 최고 기록 후 넷째 주 0.25%로 둔화. 전세 거래량 10년 만에 최저인 6,000건대로 추락. 매물 실종과 지역별 양극화 속 하반기 시장 전망을 분석한다.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-06-01',
    title_en: 'Seoul Apartments Surge Most in 19 Years Then Reverse — This Silence Is More Frightening',
    summary_en: 'Seoul apartments rose 0.28% in May week 2, with Seongbuk and Jongno hitting all-time highs, before slowing to 0.25%. Jeonse transactions plunge to 6,000-level, lowest in a decade. Analyzing market outlook amid vanishing listings and regional polarization.'
  },
  {
    id: 118,
    url: 'article_20260531_2_column_v2.html',
    category: '칼럼',
    title: '다주택자 \'버티기\' 선언 이후, 서울 집값은 이제 어디로 가는가',
    summary: '양도세 중과 재적용·공급 절벽·전세 급등... 5월 시장의 불편한 진실을 해부한다. 다주택자 매도 회피와 전세 전환 확산 속에서 서울 부동산 시장의 구조적 리스크를 분석한다.',
    image: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-05-31',
    title_en: 'After Multi-Home Owners Declare "Hold" — Where Do Seoul Home Prices Go Now?',
    summary_en: 'Capital gains tax surcharge reinstatement, supply cliff, jeonse surge — dissecting the uncomfortable truths of the May market. Analyzing structural risks in Seoul real estate amid multi-home owner sell avoidance and jeonse conversion spread.'
  },
  {
    id: 117,
    url: 'article_20260531_1_overseas_v2.html',
    category: '해외',
    title: '엔저·달러·동화... 한국인 해외 부동산 투자, 2026년 지금 어느 나라가 정답인가?',
    summary: '미국·일본·베트남 3국 비교 분석 — 환율·수익률·리스크, 숫자로 따져본다. 엔저 시대의 일본, 금리 인하 기대의 미국, 성장세의 베트남 중 최적의 투자처를 데이터로 분석한다.',
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-05-31',
    title_en: 'Weak Yen, Dollar, Dong... Korean Overseas Real Estate Investment — Which Country Is the Answer in 2026?',
    summary_en: 'Comparative analysis of USA, Japan, and Vietnam — examining exchange rates, yields, and risks by the numbers. Data-driven analysis of optimal investment destinations among weak-yen Japan, rate-cut-expected USA, and growing Vietnam.'
  },
  {
    id: 116,
    url: 'article_20260530_2_투자분석_v2.html',
    category: '투자분석',
    title: '양도세 중과 유예 종료의 충격파: 지금 집 팔면 얼마나 손해인가?',
    summary: '2년간 유지됐던 다주택자 양도세 중과 유예가 종료되며 2주택 이상 보유자에게 20~30%p 중과세율이 적용되기 시작했다. 세금 폭탄 시나리오가 현실이 된 지금, 매도 타이밍과 절세 전략을 데이터 기반으로 분석한다.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80',
    author: '부동산인사이트 분석팀',
    date: '2026-05-30',
    title_en: 'Shockwave of Capital Gains Tax Surcharge Reinstatement: How Much Do You Lose Selling Now?',
    summary_en: 'The 2-year multi-home capital gains tax surcharge deferral has ended, applying 20-30%p surcharges on multi-home sellers in regulated areas. With the tax bomb scenario now reality, we analyze optimal selling timing and tax-saving strategies with data.'
  },
  {
    id: 115,
    url: 'article_20260530_1_재개발재건축_v2.html',
    category: '재개발',
    title: '80조 정비사업 전쟁 시작: 1기 신도시 선도지구, 당신이 모르는 숨겨진 리스크',
    summary: '2026년 정비사업 시장 규모가 80조 원을 넘볼 전망이다. 1기 신도시 선도지구 사업이 실행 단계에 돌입했으나, 공사비 폭등·재개발-재건축 형평성 문제·사업 지연 리스크 등 숨겨진 위험 요인을 데이터와 정책 분석으로 해부한다.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-05-30',
    title_en: '80 Trillion KRW Redevelopment War Begins: Hidden Risks of 1st-Gen New Town Pilot Districts',
    summary_en: 'The 2026 redevelopment market is projected to exceed 80 trillion KRW. While 1st-generation new town pilot districts enter execution phase, we dissect hidden risks including soaring construction costs, redevelopment equity issues, and project delay risks.'
  },
  {
    id: 114,
    url: 'article_20260529_2_apt_sale_v2.html',
    category: '분양',
    title: '"당첨되면 5억 차익"…3기 신도시 본청약 폭발, 2026 로또 청약 전쟁 총정리',
    summary: '3기 신도시 본청약 열기가 최고조에 달한 2026년, 고양창릉 410:1·남양주왕숙 109:1 경쟁률에 이어 서울 강남권 로또 분양이 줄줄이 대기 중입니다. 청약 전략과 시장 구조를 분석합니다.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-05-29',
    title_en: '"5 Billion KRW Profit If You Win" — 3rd New Town Main Subscription Explodes, 2026 Lottery Subscription War Summary',
    summary_en: 'In 2026, the 3rd new town main subscription frenzy peaks with Goyang Changneung at 410:1 and Namyangju Wangsuk at 109:1 competition ratios, while Gangnam-area lottery presales line up. Analyzing subscription strategies and market structure.'
  },
  {
    id: 113,
    url: 'article_20260529_1_policy_v2.html',
    category: '정책',
    title: '토허제 실거주 유예 전면 확대, 오늘부터 시행…"세입자 낀 집, 이제 살 수 있다"',
    summary: '2026년 5월 29일부터 토지거래허가구역 실거주 의무 유예 대상이 세입자 있는 주택 전체로 확대됩니다. 규제의 실효성과 시장 영향, 실수요자 전략을 분석합니다.',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-05-29',
    title_en: 'Land Transaction Permit Zone Residency Deferral Fully Expanded, Effective Today — "Now You Can Buy Homes With Tenants"',
    summary_en: 'Starting May 29, 2026, the residency obligation deferral in land transaction permit zones expands to all homes with existing tenants. Analyzing regulatory effectiveness, market impact, and strategies for end-users.'
  },
  {
    id: 112,
    url: 'article_20260528_2_market_v2.html',
    category: '시장동향',
    title: '서울 아파트 66주 연속 상승·전세 10년 6개월 만에 최고… 이 상승장, 언제까지 이어지나',
    summary: '서울 아파트 매매가격이 66주 연속 상승하고, 전세 주간 상승률이 10년 6개월 만에 최고치를 기록했다. 매매·전세 수급지수 모두 2021년 이후 5년 최고, 강남3구 반등과 25개 자치구 동반 상승 속에서 상승장의 지속 가능성을 분석한다.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-05-28',
    title_en: 'Seoul Apartments Rise 66 Consecutive Weeks, Jeonse Hits 10.5-Year High — How Long Will This Rally Last?',
    summary_en: 'Seoul apartment prices mark 66 consecutive weeks of gains while weekly jeonse growth hits its highest in 10.5 years. With supply-demand indices at 5-year highs and all 25 districts rising together, we analyze the sustainability of this rally.'
  },
  {
    id: 111,
    url: 'article_20260528_1_column_v2.html',
    category: '칼럼',
    title: '다주택자 양도세 중과 부활, 시장은 응답했는가 — 이재명 정부 2년 차 부동산 정책 냉정 진단',
    summary: '2026년 5월 다주택자 양도세 중과 유예가 종료됐다. 서울 집값 66주 연속 상승과 전문가 74%의 추가 상승 전망 속에서, 세금 강화만으로 공급 부족을 해소할 수 있는지 냉정하게 진단한다.',
    image: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-05-28',
    title_en: 'Multi-Home Capital Gains Tax Surcharge Returns — Has the Market Responded? A Cold Diagnosis of Year-2 Real Estate Policy',
    summary_en: 'The multi-home capital gains tax surcharge deferral ended in May 2026. With Seoul prices rising 66 consecutive weeks and 74% of experts forecasting further gains, we critically assess whether tax tightening alone can solve the supply shortage.'
  },
  {
    id: 110,
    url: 'article_20260527_2_해외부동산_v2.html',
    category: '해외',
    title: '엔저 끝물인가 황금기인가 — 2026 일본 부동산 투자 완전 분석',
    summary: '엔화 약세가 이어지는 2026년, 한국인의 일본 부동산 투자가 급증하고 있다. 도쿄·오사카 수익률 분석부터 환율 리스크, 세금 구조까지 한국인이 꼭 알아야 할 핵심 정보를 정리했다.',
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-05-27',
    title_en: 'End of Weak Yen or Golden Era? — Complete Analysis of 2026 Japan Real Estate Investment',
    summary_en: 'As yen weakness continues in 2026, Korean investment in Japanese real estate is surging. From Tokyo and Osaka yield analysis to currency risk and tax structures — essential information for Korean investors.'
  },
  {
    id: 109,
    url: 'article_20260527_1_투자분석_v2.html',
    category: '투자분석',
    title: '갭투자 막히자 경매로 몰린다 — 2026 부동산 투자 생존 전략',
    summary: '토지거래허가구역 전면 확대로 갭투자가 봉쇄된 2026년, 경매 낙찰가율 반등과 수익형 부동산으로 투자 전략이 재편되고 있다. 실전 투자자를 위한 심층 분석.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-05-27',
    title_en: 'Gap Investment Blocked, Investors Flock to Auctions — 2026 Real Estate Investment Survival Strategy',
    summary_en: 'With gap investment blocked by expanded land transaction permit zones in 2026, investment strategies are shifting toward auction bid rate rebounds and income-generating properties. An in-depth analysis for practical investors.'
  },
  {
    id: 108,
    url: 'article_20260526_2_재개발재건축_v2.html',
    category: '재개발',
    title: '공사비 10조 압구정 대격전… \'자금력\'이 브랜드 넘어선 재건축 新패러다임',
    summary: '압구정 재건축 3·4·5구역 시공사 선정 총회가 잇달아 열린다. 삼성물산·현대건설·GS건설 등 대형 3사 중심의 재건축 수주 구도 변화와 입찰보증금 2000억 요구의 의미를 심층 분석한다.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-05-26',
    title_en: 'Apgujeong\'s 10 Trillion KRW Construction Battle — The New Reconstruction Paradigm Where Capital Trumps Brand',
    summary_en: 'Apgujeong reconstruction zones 3, 4, and 5 hold successive contractor selection meetings. Analyzing the shifting dynamics among Samsung C&T, Hyundai E&C, and GS E&C, and what the 200 billion KRW bid deposit demand means.'
  },
  {
    id: 107,
    url: 'article_20260526_1_분양청약_v2.html',
    category: '분양',
    title: '5월 수도권 1.4만 가구 쏟아진다… 분양가상한제 활용한 \'전략 청약\'이 답',
    summary: '2026년 5월 수도권 분양 물량이 1만4330가구로 급증했다. 분양가상한제 단지·무순위 청약·추첨제 전략으로 가점 낮은 실수요자도 당첨 기회를 잡는 방법을 심층 분석한다.',
    image: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-05-26',
    title_en: '14,000 Units Flood Seoul Metro in May — Strategic Subscription Using Price Cap System Is the Answer',
    summary_en: 'Seoul metropolitan presale volume surges to 14,330 units in May 2026. An in-depth analysis of how low-score end-users can win through price-capped complexes, non-ranked subscriptions, and lottery strategies.'
  },
  {
    id: 106,
    url: 'article_20260525_2_policy_v2.html',
    category: '정책',
    title: '토허제 유예·DSR 3%·주담대 한도 축소… 2026년 5월 부동산 정책 3대 충돌',
    summary: '시장 안정과 실수요자 보호 사이에서 갈팡질팡하는 정부 — 토허제 유예 확대, 스트레스 DSR 3% 강화, 고가 주택 대출 한도 축소를 동시에 시행한 정책의 의도와 시장 영향을 해부한다.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-05-25',
    title_en: 'Land Transaction Permit Deferral, DSR 3%, Mortgage Limit Cut — Three Policy Collisions in May 2026',
    summary_en: 'Dissecting the government\'s simultaneous easing and tightening — expanded land transaction permit deferral, strengthened stress DSR at 3%, and slashed high-value mortgage limits.'
  },
  {
    id: 105,
    url: 'article_20260525_1_market_v2.html',
    category: '시장동향',
    title: '서울 아파트 전 자치구 동반 상승… \'선별장\'에서 \'전면전\'으로 전환됐나',
    summary: '3개월 만의 최대 주간 상승폭 0.31%, 성북·종로는 역대 최고 기록. 25개 구 전부 플러스를 기록한 시장의 구조적 전환 신호를 분석한다.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-05-25',
    title_en: 'All 25 Seoul Districts Rise Together — Has the Market Shifted from Selective to All-Out?',
    summary_en: 'Largest weekly gain in 3 months at 0.31%, with Seongbuk and Jongno posting all-time highs. Analyzing the structural shift signal as all 25 districts turn positive.'
  },
  {
    id: 104,
    url: 'article_20260524_2_column_v2.html',
    category: '칼럼',
    title: '집값이 다시 오르는데 왜 아무것도 못 사나? — 2026년 한국 부동산 시장의 세 가지 딜레마',
    summary: '규제·공급·세금이 얽힌 구조적 모순 — 정책의 의도와 시장의 반응 사이에서 무엇을 읽어야 하는가',
    image: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-05-24',
    title_en: 'Why Can\'t Anyone Buy Even as Prices Rise Again? — Three Dilemmas of Korea\'s 2026 Real Estate Market',
    summary_en: 'Structural contradictions entangling regulation, supply, and taxes — what to read between policy intent and market response.'
  },
  {
    id: 103,
    url: 'article_20260524_1_overseas_v2.html',
    category: '해외',
    title: '엔저 일본 vs 금리 인하 미국 vs 성장하는 동남아 — 2026년 해외 부동산 투자의 황금 삼각지대',
    summary: '한국 투자자들이 눈을 돌리는 세 가지 시장 — 진입 전 반드시 알아야 할 리스크와 기회',
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-05-24',
    title_en: 'Weak-Yen Japan vs Rate-Cut USA vs Growing Southeast Asia — The Golden Triangle of 2026 Overseas Real Estate Investment',
    summary_en: 'Three markets Korean investors are turning to — risks and opportunities you must know before entry.'
  },
  {
    id: 102,
    url: 'article_20260523_2_투자분석_v2.html',
    category: '투자분석',
    title: '공급 절벽 + 경매 낙찰가율 반등 — 지금 서울 아파트, 사야 할까 더 기다려야 할까',
    summary: '2026년 수도권 입주물량 30% 급감, 서울 경매 낙찰가율 100% 재돌파. 금리 인하 기대와 대출 규제의 벽이 팽팽히 맞서는 지금, 냉철한 숫자로 투자 타이밍을 짚는다.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-05-23',
    title_en: 'Supply Cliff + Auction Bid Rate Rebound — Should You Buy Seoul Apartments Now or Wait?',
    summary_en: '2026 metropolitan area move-in volume drops 30%, Seoul auction winning bid rate breaks 100% again. Analyzing investment timing with cold numbers amid the tug-of-war between rate cut expectations and loan regulation barriers.'
  },
  {
    id: 101,
    url: 'article_20260523_1_재개발재건축_v2.html',
    category: '재개발',
    title: '압구정·한남·신반포 동시다발 착공 — 서울 정비사업 역대급 \'빅뱅\'의 서막이 열렸다',
    summary: '5월 한 달 공사비 합산 10조 원 넘는 사업들이 시공사 선정 총회를 줄줄이 개최. 20년 표류 끝에 본궤도에 오른 서울 핵심 정비사업의 현주소와 투자자가 반드시 알아야 할 리스크를 짚는다.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-05-23',
    title_en: 'Apgujeong, Hannam, Sinbanpo Simultaneous Groundbreaking — The Curtain Rises on Seoul\'s Biggest-Ever Redevelopment Big Bang',
    summary_en: 'Projects totaling over 10 trillion KRW in construction costs hold contractor selection meetings throughout May. Examining the current state of Seoul\'s core redevelopment projects back on track after 20 years and the risks investors must know.'
  },
  {
    id: 100,
    url: 'article_20260522_2_분양청약_v2.html',
    category: '분양',
    title: '5월 수도권 1.4만 가구 쏟아진다 — 써밋더힐 27억, 장위 1913세대 분양가의 진실',
    summary: '2026년 5월 수도권 분양 예정 가구 수 14,330가구, 전년 동기 대비 76% 증가. 써밋더힐·장위푸르지오 등 핵심 단지 분양가와 청약 전략을 분석한다.',
    image: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-05-22',
    title_en: '14,000 Units Flood the Seoul Metro in May — The Truth Behind Summit The Hill\'s 2.7B KRW and Jangwi\'s 1,913-Unit Presale Prices',
    summary_en: '14,330 units scheduled for presale in the Seoul metropolitan area in May 2026, a 76% increase year-over-year. Analyzing presale prices and subscription strategies for key complexes including Summit The Hill and Jangwi Prugio.'
  },
  {
    id: 99,
    url: 'article_20260522_1_정책_v2.html',
    category: '정책',
    title: '양도세 폭탄 터지고, 갭투자 문 살짝 열렸다 — 2026년 5월 부동산 정책의 두 얼굴',
    summary: '다주택자 양도세 중과 유예 종료와 토지거래허가 실거주의무 유예가 동시에 시행되며 시장에 이중 충격을 주고 있다. DSR 규제 강화 속 정책의 모순과 시사점을 분석한다.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-05-22',
    title_en: 'Capital Gains Tax Bomb Drops While Gap Investment Door Cracks Open — The Two Faces of May 2026 Real Estate Policy',
    summary_en: 'The end of capital gains tax reprieve for multi-homeowners and the suspension of land transaction permit residency requirements hit the market simultaneously. Analyzing the contradictions and implications of policy amid tightened DSR regulations.'
  },
  {
    id: 98,
    url: 'article_20260521_2_market_v2.html',
    category: '시장동향',
    title: '"지금 사야 하나?" — 2026년 5월 서울·수도권 아파트 시세 완전 분석',
    summary: '서울 아파트 매매가 주간 0.28% 급등, 성북·서대문 역대 최고 상승. 지금 시장을 움직이는 4가지 힘과 하반기 전망을 데이터로 분석한다.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80',
    author: '부동산인사이트 시장동향 분석 팀',
    date: '2026-05-21',
    title_en: '"Should I Buy Now?" — A Complete Analysis of May 2026 Seoul & Metropolitan Apartment Market Prices',
    summary_en: 'Seoul apartment prices surge 0.28% weekly, with Seongbuk and Seodaemun posting record gains. A data-driven analysis of the four forces driving the market and the outlook for the second half.'
  },
  {
    id: 97,
    url: 'article_20260521_1_column_v2.html',
    category: '칼럼',
    title: '공급이 틀렸다 — 정책의 실패가 만든 2026년 집값 역설',
    summary: '2026년 5월, 서울 집값이 다시 뛰고 있다. 공급 절벽과 정책 공백이 어떻게 지금의 시장을 만들었는지 심층 해설한다.',
    image: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=1200&q=80',
    author: '부동산인사이트 칼럼 팀',
    date: '2026-05-21',
    title_en: 'The Supply Was Wrong — The 2026 Housing Price Paradox Created by Policy Failure',
    summary_en: 'In May 2026, Seoul home prices are rising again. An in-depth analysis of how the supply cliff and policy vacuum created today\'s market.'
  },
  {
    id: 96,
    url: 'article_20260520_2_overseas_v2.html',
    category: '해외',
    title: '미국·일본·베트남, 어디서 살아야 돈이 되나? — 2026 한국인 해외부동산 투자 완전 분석',
    summary: '달러 자산, 엔화 메리트, 동남아 성장 기대감까지. 2026년 한국인 해외부동산 투자 3대 시장을 전략적으로 비교 분석한다.',
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1200&q=80',
    author: '부동산인사이트 해외부동산 분석 팀',
    date: '2026-05-20',
    title_en: 'USA, Japan, Vietnam — Where Should You Buy to Make Money? A Complete 2026 Analysis of Korean Overseas Real Estate Investment',
    summary_en: 'Dollar assets, yen advantages, and Southeast Asian growth potential. A strategic comparative analysis of the three major markets for Korean overseas real estate investment in 2026.'
  },
  {
    id: 95,
    url: 'article_20260520_1_investment_v2.html',
    category: '투자분석',
    title: '경매 낙찰가율 108% 돌파, 지금이 진짜 기회인가? — 2026 부동산 투자 옥석 가리기',
    summary: '서울 아파트 경매 낙찰가율이 4년 만에 최고치를 기록하며 투자 수요가 급증하고 있다. DSR 규제와 갭투자 제한 속에서 살아남는 투자 전략을 심층 분석한다.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80',
    author: '부동산인사이트 투자분석 팀',
    date: '2026-05-20',
    title_en: 'Auction Winning Bid Rate Breaks 108% — Is This the Real Opportunity? Separating Wheat from Chaff in 2026 Real Estate Investment',
    summary_en: 'Seoul apartment auction winning bid rates hit a 4-year high as investment demand surges. An in-depth analysis of survival strategies amid DSR regulations and gap investment restrictions.'
  },
  {
    id: 94,
    url: 'article_20260519_2_재개발재건축_v2.html',
    category: '재개발',
    title: '재건축 패스트트랙 시대 — 안전진단 벽 허물자 서울이 들썩인다',
    summary: '30년 노후 아파트, 이제 안전진단 없이 재건축 착수 가능. 서울시 85개 구역 착공 로드맵 공개와 500억 이주비 융자 지원의 의미, 투자자·실수요자 시사점을 분석한다.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80',
    author: '부동산인사이트 재개발·재건축 분석 팀',
    date: '2026-05-19',
    title_en: 'The Reconstruction Fast-Track Era — Seoul Stirs as Safety Inspection Barriers Fall',
    summary_en: 'Apartments over 30 years old can now start reconstruction without safety inspections. Analyzing the implications of Seoul\'s 85-district construction roadmap and 50 billion KRW relocation loan support for investors and end-users.'
  },
  {
    id: 93,
    url: 'article_20260519_1_분양청약_v2.html',
    category: '분양',
    title: '"국평 30억 시대" 개막 — 분양가 폭주, 실수요자는 어디로 가야 하나',
    summary: '서울 비분상제 단지 84㎡가 30억 코앞까지 치솟았다. 분양가 폭등의 배경, 분상제 vs 비분상제 양극화, 그리고 실수요자의 냉정한 청약 전략을 짚는다.',
    image: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=1200&q=80',
    author: '부동산인사이트 분양·청약 분석 팀',
    date: '2026-05-19',
    title_en: 'The "3 Billion KRW National Standard" Era Begins — Where Should End-Users Go Amid Soaring Presale Prices?',
    summary_en: 'Seoul non-price-capped 84㎡ units are nearing 3 billion KRW. Analyzing the background of presale price surges, the polarization between price-capped and non-capped complexes, and rational subscription strategies for end-users.'
  },
  {
    id: 92,
    url: 'article_20260518_2_policy_v2.html',
    category: '정책',
    title: '다주택자 양도세 중과 유예 종료 — 집값을 잡을까, 되레 불을 지를까',
    summary: '4년간 지속된 양도소득세 중과 유예가 5월 9일 종료됐다. 정부는 시장 안정을 기대하지만, 현장에서는 오히려 매물 잠김과 가격 상승이 나타나고 있다. 정책의 설계와 현실의 간극을 날카롭게 짚는다.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80',
    author: '부동산인사이트 정책팀',
    date: '2026-05-18',
    title_en: 'End of Capital Gains Tax Reprieve for Multi-Homeowners — Will It Tame Prices or Fan the Flames?',
    summary_en: 'The four-year capital gains tax reprieve for multi-homeowners ended on May 9. While the government expects market stabilization, the reality shows locked listings and rising prices. A sharp analysis of the gap between policy design and market reality.'
  },
  {
    id: 91,
    url: 'article_20260518_1_market_v2.html',
    category: '시장동향',
    title: '서울 아파트값, 15주 만에 최대 상승폭 — "공급 쇼크 + 매물 잠김 + 매수 심리 반등" 삼중 충격',
    summary: '양도세 중과 유예 종료 직후 급매물이 빠르게 소화된 뒤 서울 집값이 다시 가파르게 달리기 시작했다. 25개 자치구 전체가 동반 상승하는 이례적 신호와 그 구조적 원인을 해부한다.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80',
    author: '부동산인사이트 편집팀',
    date: '2026-05-18',
    title_en: 'Seoul Apartment Prices Post Largest Weekly Gain in 15 Weeks — Triple Shock of Supply Crisis, Locked Listings, and Buyer Sentiment Rebound',
    summary_en: 'After the end of the capital gains tax reprieve, fire-sale listings were quickly absorbed and Seoul home prices resumed steep climbs. Analyzing the unprecedented signal of all 25 districts rising simultaneously and its structural causes.'
  },
  {
    id: 90,
    url: 'article_20260517_2_column_v2.html',
    category: '칼럼',
    title: '양도세 폭탄 터진 날, 서울 집값은 왜 올랐나 — 매물 잠김 시대의 역설',
    summary: '다주택자 양도세 중과 부활 직후 서울 아파트 매물이 6.8% 급감하며 오히려 집값이 상승했다. 세금 정책의 역설과 매물 잠김 시대의 투자 시사점을 분석한다.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-05-17',
    title_en: 'The Day the Capital Gains Tax Bomb Dropped, Why Did Seoul Home Prices Rise — The Paradox of the Locked-Listing Era',
    summary_en: 'After the reinstatement of heavy capital gains tax on multi-homeowners, Seoul apartment listings dropped 6.8% and prices paradoxically rose. Analyzing the tax policy paradox and investment implications of the locked-listing era.'
  },
  {
    id: 89,
    url: 'article_20260517_1_overseas_v2.html',
    category: '해외',
    title: '엔저 황금기가 저문다 — 2026년 해외 부동산 투자, 지금이 마지막 기회인가',
    summary: '일본 BOJ 금리 인상으로 엔저 수혜가 마무리 국면에 접어든다. 일본·미국·베트남 3대 시장의 기회와 리스크를 비교 분석하며, 한국 투자자를 위한 글로벌 투자 판단 기준을 제시한다.',
    image: 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-05-17',
    title_en: 'The Weak-Yen Golden Age Fades — Is 2026 the Last Chance for Overseas Real Estate Investment?',
    summary_en: 'With BOJ rate hikes ending the weak-yen advantage, we compare opportunities and risks across Japan, US, and Vietnam markets, presenting a global investment framework for Korean investors.'
  },
  {
    id: 88,
    url: 'article_20260516_2_투자분석_v2.html',
    category: '투자분석',
    title: '감정가 9억이 16억에 낙찰… 경매가 \'규제 우회로\'가 된 2026년, 지금 뛰어들어도 되는가',
    summary: '2026년 서울 아파트 경매 낙찰가율이 107%를 넘었다가 3월에 100% 아래로 꺾였다. 경매 갭투자 열풍과 옥석 가리기 심화의 교차점에서 투자 전략을 점검한다.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-05-16',
    title_en: 'Appraised at 900M KRW, Sold at 1.6B — Auctions Became a \'Regulatory Bypass\' in 2026, Is It Safe to Jump In Now?',
    summary_en: 'Seoul apartment auction sale-to-appraisal ratios exceeded 107% before dropping below 100% in March 2026. Examining investment strategies at the crossroads of auction gap-investment fever and intensifying quality screening.'
  },
  {
    id: 87,
    url: 'article_20260516_1_재개발재건축_v2.html',
    category: '재개발',
    title: '서울 재건축·재개발 \'8만 5천호 신속착공\' 선언 — 정비사업 80조 시대가 열린다',
    summary: '서울시가 85개 구역, 8만 5천호 신속착공 계획을 공식 선언했다. 6종 패키지 제도와 함께 80조원 규모의 정비사업 시장이 본격화된다.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-05-16',
    title_en: 'Seoul Declares \'85,000-Unit Fast-Track Construction\' for Reconstruction & Redevelopment — The 80 Trillion KRW Redevelopment Era Begins',
    summary_en: 'Seoul officially announced a fast-track construction plan for 85 districts and 85,000 units. The 80 trillion KRW redevelopment market is set to take off with a six-type package system.'
  },
  {
    id: 86,
    url: 'article_20260515_2_분양청약_v2.html',
    category: '분양',
    title: '5월 수도권 1만4330가구 분양 대전쟁 — 장위·흑석·검단, 어디를 잡아야 하나',
    summary: '5월 수도권 분양 1만4330가구, 전년 동월 대비 58% 증가. 서울 장위·흑석 재개발과 인천 검단 대단지까지, 고분양가 vs. 실수요 단지의 전략 분리가 필요한 분양 대전의 현장을 분석한다.',
    image: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-05-15',
    title_en: 'May Capital Region 14,330-Unit Presale Battle — Jangwi, Heukseok, Geomdan: Where Should You Aim?',
    summary_en: 'May capital region presale reaches 14,330 units, up 58% year-over-year. From Seoul\'s Jangwi and Heukseok redevelopment to Incheon Geomdan mega-complex — analyzing the presale battlefield where high-price vs. end-user strategy separation is essential.'
  },
  {
    id: 85,
    url: 'article_20260515_1_정책_v2.html',
    category: '정책',
    title: '토허제 실거주 유예 확대, 시장 활성화인가 규제 후퇴인가 — 이재명 정부 부동산 정책 해부',
    summary: '토허구역 실거주 유예 대상이 \'세입자 있는 모든 주택\'으로 확대됐다. 매물 출회 기대와 강남권 가격 자극 리스크가 공존하는 이번 조치의 실효성과 한계를 정밀 분석한다.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-05-15',
    title_en: 'Transaction Permit Zone Residency Deferral Expansion — Market Activation or Regulatory Retreat? Dissecting the Lee Administration\'s Real Estate Policy',
    summary_en: 'The residency deferral for transaction permit zones has been expanded to all homes with tenants. A precise analysis of the effectiveness and limitations of this measure where expectations of increased listings and Gangnam price stimulation risks coexist.'
  },
  {
    id: 84,
    url: 'article_20260514_2_market_v2.html',
    category: '시장동향',
    title: '서울 아파트 매물 \'썰물\'… 양도세 중과 쇼크가 만든 이중시장의 민낯',
    summary: '양도세 중과 재개 나흘, 서울 아파트 매물 5,000건 증발. 강동·성북·강서 중심 매물 회수 본격화. 지역별 수급 불균형과 거래 동결이 동시에 진행 중인 서울 주택시장의 현주소를 데이터로 분석한다.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-05-14',
    title_en: 'Seoul Apartment Listings Drain Away — The Bare Face of the Dual Market Created by Capital Gains Tax Surcharge Shock',
    summary_en: 'Four days after the capital gains tax surcharge reinstatement, 5,000 Seoul apartment listings vanished. Analyzing the current state of Seoul\'s housing market where regional supply-demand imbalance and transaction freezes are happening simultaneously.'
  },
  {
    id: 83,
    url: 'article_20260514_1_column_v2.html',
    category: '칼럼',
    title: '세금으로 집값 못 잡는다 — 양도세 중과 부활이 드러낸 한국 부동산의 구조적 딜레마',
    summary: '다주택자 양도세 중과가 재개된 지 불과 나흘 만에 서울 아파트 매물 5,000건이 사라졌다. 정부의 세금 정책이 시장을 통제하기보다 오히려 \'이중 잠금\' 구조를 고착화하고 있다는 분석을 심층 해설한다.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-05-14',
    title_en: 'Taxes Can\'t Tame Housing Prices — The Structural Dilemma of Korean Real Estate Revealed by Capital Gains Tax Surcharge Revival',
    summary_en: 'Just four days after the multi-home owner capital gains tax surcharge was reinstated, 5,000 Seoul apartment listings disappeared. An in-depth analysis of how the government\'s tax policy is solidifying a \'double lock\' structure rather than controlling the market.'
  },
  {
    id: 82,
    url: 'article_20260513_2_해외부동산_v2.html',
    category: '해외',
    title: '강남 아파트 1채로 도쿄 3채 산다? — 엔저·미국금리가 바꾼 해외 부동산 판도',
    summary: '국내 규제와 세금 부담에 지친 한국인 투자자들이 일본·미국·동남아로 눈을 돌리고 있다. 2026년 해외 부동산 투자, 기회는 어디에 있고 함정은 무엇인가?',
    image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-05-13',
    title_en: 'Buy 3 Tokyo Apartments with 1 Gangnam Apartment? — How the Weak Yen and US Interest Rates Reshaped Global Real Estate',
    summary_en: 'Korean investors weary of domestic regulations and tax burdens are turning to Japan, the US, and Southeast Asia. Where are the opportunities and pitfalls in 2026 overseas real estate investment?'
  },
  {
    id: 81,
    url: 'article_20260513_1_투자분석_v2.html',
    category: '투자분석',
    title: '경매로 몰리는 \'스마트 머니\'… 갭투자 규제 뚫은 새 투자법의 명암',
    summary: '양도세 중과 유예 종료, 토허제 겹규제 속에서도 서울 경매 낙찰률 5개월 만에 반등. 규제의 빈틈을 파고드는 경매 투자, 지금 들어가도 안전한가?',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-05-13',
    title_en: 'Smart Money Flocking to Auctions — The Light and Shadow of New Investment Methods Bypassing Gap Investment Regulations',
    summary_en: 'Seoul auction success rates rebound after 5 months despite capital gains tax surcharge reinstatement and overlapping regulations. Is it safe to enter auction investing now?'
  },
  {
    id: 80,
    url: 'article_20260512_2_redevelopment_v2.html',
    category: '재개발',
    title: '1기 신도시 재건축 \'폭풍 전야\' — 분당·평촌의 기회와 당신이 모르는 함정',
    summary: '분당·평촌 선도지구 구역지정 승인, 세운4구역 높이 규제 논란, 양도세 유예 종료. 2026년 정비사업 판도를 뒤흔드는 세 가지 변수를 해부한다.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-05-12',
    title_en: 'First-Gen New Town Reconstruction \'Calm Before the Storm\' — Opportunities in Bundang & Pyeongchon and the Pitfalls You Don\'t Know',
    summary_en: 'Bundang and Pyeongchon pilot district zoning approved, Sewoon 4 district height regulation controversy, capital gains tax exemption ends. Dissecting three variables shaking the 2026 redevelopment landscape.'
  },
  {
    id: 79,
    url: 'article_20260512_1_chungyak_v2.html',
    category: '분양',
    title: '"시세보다 2억 싸다"는데 왜 당첨이 안 될까 — 청약 양극화의 민낯과 생존 전략',
    summary: 'LH 공공분양 263대 1, 추첨제 아파트 6,710대 1. 청약 시장은 지금 두 개의 세계로 쪼개지고 있다.',
    image: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-05-12',
    title_en: '"2 Billion KRW Cheaper Than Market" But Why Can\'t You Win? — The Bare Face of Subscription Polarization and Survival Strategies',
    summary_en: 'LH public housing 263:1, lottery apartments 6,710:1. The subscription market is now splitting into two worlds.'
  },
  {
    id: 78,
    url: 'article_20260511_2_policy_v2.html',
    category: '정책',
    title: '스트레스 DSR 3단계 전면 도입 — 당신의 대출 한도, 지금 당장 얼마나 줄었나?',
    summary: '다주택자 양도세 중과 재개·스트레스 DSR 3단계·조정대상지역 규제 삼중 압박 속 내 집 마련 전략을 정밀 분석한다.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80',
    author: '부동산인사이트 편집팀',
    date: '2026-05-11',
    title_en: 'Stress DSR Phase 3 Fully Implemented — How Much Has Your Loan Limit Actually Shrunk?',
    summary_en: 'A precise analysis of home-buying strategies amid the triple squeeze of capital gains tax surcharge reinstatement, Stress DSR Phase 3, and speculation-cooling zone regulations.'
  },
  {
    id: 77,
    url: 'article_20260511_1_market_v2.html',
    category: '시장동향',
    title: '막차 탄 다주택자, 급매물이 쏟아진다 — 양도세 중과 유예 종료 후 서울 부동산 대격변',
    summary: '5월 9일 다주택자 양도세 중과 유예가 끝났다. 급매물 출회, 강남권 가격 방어, 하반기 매물 잠김 시나리오까지 — 서울 부동산 시장의 대전환을 분석한다.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80',
    author: '부동산인사이트 편집팀',
    date: '2026-05-11',
    title_en: 'Multi-Home Owners Rush to Sell as Fire Sales Pour In — Seoul Real Estate Upheaval After Capital Gains Tax Surcharge Exemption Ends',
    summary_en: 'The multi-home owner capital gains tax surcharge exemption ended on May 9. Analyzing the great transformation of Seoul\'s real estate market — from fire sale listings to Gangnam price defense to the second-half supply freeze scenario.'
  },
  {
    id: 76,
    url: 'article_20260510_2_column_v2.html',
    category: '칼럼',
    title: '전세 6.8억 시대, 공급 절벽이 낳은 서울 부동산의 역설 — 지금 사야 하는가, 기다려야 하는가',
    summary: '2026년 5월, 서울 전셋값 역대 최고 경신… \'집이 없어서 오르는\' 시장에서 실수요자의 생존 전략을 분석한다.',
    image: 'https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?w=1200&q=80',
    author: '부동산인사이트 편집장 칼럼',
    date: '2026-05-10',
    title_en: 'The Jeonse 680M KRW Era: The Paradox of Seoul Real Estate Born from the Supply Cliff — Buy Now or Wait?',
    summary_en: 'In May 2026, Seoul jeonse prices hit all-time highs. Analyzing survival strategies for end-users in a market that rises because there are no homes.'
  },
  {
    id: 75,
    url: 'article_20260510_1_overseas_v2.html',
    category: '해외',
    title: '미국은 조정, 일본은 금리 인상… 2026년 한국인의 해외 부동산 투자지도 완전 해부',
    summary: '6%대 모기지 금리와 플로리다 폭락, 도쿄 초강세… 지금 어디에 돈을 넣어야 하는가? 미국·일본·동남아 3대 시장을 완전 해부한다.',
    image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1200&q=80',
    author: '부동산인사이트 해외투자팀',
    date: '2026-05-10',
    title_en: 'The US Corrects, Japan Raises Rates… A Complete Dissection of Korean Overseas Real Estate Investment Map in 2026',
    summary_en: 'With 6% mortgage rates and Florida\'s crash alongside Tokyo\'s super-strength — where should you invest now? A complete dissection of the US, Japan, and Southeast Asian markets.'
  },
  {
    id: 74,
    url: 'article_20260509_2_투자분석_v2.html',
    category: '투자분석',
    title: '양도세 중과 D-Day… 지금 부동산 경매에 뛰어들어야 할까?',
    summary: '2026년 5월 9일 양도세 중과 유예가 종료됐다. 낙찰가율이 꺾이고 갭투자가 사라진 지금, 경매 시장의 판도가 바뀌고 있다. 실수요자에게는 기회일까, 함정일까.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80',
    author: '부동산인사이트 편집국',
    date: '2026-05-09',
    title_en: 'Capital Gains Tax Surcharge D-Day… Should You Jump Into Real Estate Auctions Now?',
    summary_en: 'The capital gains tax surcharge exemption ended on May 9, 2026. With successful bid rates declining and gap investments disappearing, the auction market landscape is shifting. Is this an opportunity or a trap for end-users?'
  },
  {
    id: 73,
    url: 'article_20260509_1_재개발재건축_v2.html',
    category: '재개발',
    title: '서울 8만5천 호 재건축 착공 선언… 정비사업 대전(大戰)의 서막인가',
    summary: '서울시가 3년간 85개 구역, 8만5천 호 재건축·재개발 조기 착공을 공식 선언했다. 양도세 중과 유예 종료와 맞물린 이 시점, 정비사업 시장의 판도가 바뀌고 있다.',
    image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=1200&q=80',
    author: '부동산인사이트 편집국',
    date: '2026-05-09',
    title_en: 'Seoul Declares 85,000-Unit Reconstruction Groundbreaking… Is This the Prelude to a Redevelopment War?',
    summary_en: 'Seoul officially declared early groundbreaking for 85 zones and 85,000 reconstruction and redevelopment units over 3 years. At this juncture coinciding with the end of the capital gains tax surcharge exemption, the redevelopment market landscape is changing.'
  },
  {
    id: 72,
    url: 'article_20260508_2_분양청약_v2.html',
    category: '분양',
    title: '5월 수도권 1만4천 가구 쏟아진다…용산 로또 줍줍까지, 지금이 청약 황금기인가',
    summary: '5월 수도권 분양 1만4,330가구가 쏟아진다. 용산 호반써밋 에이디션 84㎡ 최고 524:1 경쟁률을 기록하며 청약 열기가 뜨겁다. 고분양가 시대, 실수요자와 투자자 모두에게 필요한 청약 전략을 완전 분석한다.',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80',
    author: '부동산인사이트 편집국',
    date: '2026-05-08',
    title_en: '14,000 Units Flood the Metropolitan Area in May — From Yongsan Lotto Picks to the Golden Age of Subscriptions',
    summary_en: '14,330 presale units hit the metropolitan area in May. With Yongsan Hoban Summit Edition 84㎡ recording a 524:1 competition ratio, subscription fever runs high. A complete analysis of subscription strategies for both end-users and investors in the era of high presale prices.'
  },
  {
    id: 71,
    url: 'article_20260508_1_정책_v2.html',
    category: '정책',
    title: '양도세 중과 유예 D-1: 다주택자의 마지막 탈출구가 닫힌다',
    summary: '2026년 5월 9일 양도세 중과 유예가 공식 종료된다. 2주택 +20%p, 3주택 +30%p 중과가 재가동되면서 다주택자의 세금 부담이 급격히 늘어난다. 마지막 탈출구가 닫히기 전, 시장의 변화와 대응 전략을 분석한다.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80',
    author: '부동산인사이트 편집국',
    date: '2026-05-08',
    title_en: 'Capital Gains Tax Surcharge Exemption D-1: The Last Exit for Multi-Home Owners Is Closing',
    summary_en: 'The capital gains tax surcharge exemption officially ends on May 9, 2026. With surcharges of +20%p for 2 homes and +30%p for 3+ homes reactivating, tax burdens for multi-home owners surge dramatically. Analyzing market changes and response strategies before the last exit closes.'
  },
  {
    id: 70,
    url: 'article_20260507_2_시장동향_v2.html',
    category: '시장동향',
    title: '서울 전세 6.8억 돌파, 25개 자치구 전역 상승 — 공급 절벽이 불 지핀 전세 대란의 실체',
    summary: '2026년 5월 서울 아파트 평균 전세값이 역대 최고치를 돌파했다. 강남·강북 구분 없이 전 자치구에서 동반 상승하는 배경과 수도권 매매 시장의 흐름을 데이터로 분석한다.',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-05-07',
    title_en: 'Seoul Jeonse Breaks 680M KRW, All 25 Districts Rising — The Reality of the Supply Cliff-Fueled Jeonse Crisis',
    summary_en: 'In May 2026, average Seoul apartment jeonse prices hit an all-time high. With simultaneous rises across all districts regardless of Gangnam or Gangbuk, we analyze the background and metropolitan housing market trends with data.'
  },
  {
    id: 69,
    url: 'article_20260507_1_칼럼_v2.html',
    category: '칼럼',
    title: '공급 절벽이 바꾸는 부동산 판 — 2026년 5월, 지금 시장에서 무엇을 읽어야 하는가',
    summary: '공급은 3분의 1 줄고, 전세값은 역대 최고, 금리는 되레 올랐다. 이 세 가지 악재가 동시에 맞물린 지금, 시장의 속살을 해부한다.',
    image: 'https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-05-07',
    title_en: 'The Supply Cliff Is Changing the Real Estate Game — May 2026, What to Read in the Market Now',
    summary_en: 'Supply cut by a third, jeonse prices at all-time highs, and interest rates rising instead. With these three headwinds converging, we dissect the market\'s inner workings.'
  },
  {
    id: 68,
    url: 'article_20260506_2_overseas_v2.html',
    category: '해외',
    title: '미국도 일본도 다 오른다…한국인이 해외 부동산에 눈 돌리는 진짜 이유',
    summary: '국내 규제와 세제 부담이 한계에 달하면서 해외 부동산으로 눈을 돌리는 한국 투자자들이 늘고 있다. 미국·일본·동남아 시장의 현황과 진짜 기회, 그리고 반드시 알아야 할 리스크까지 낱낱이 살펴본다.',
    image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-05-06',
    title_en: 'The US, Japan — Everything\'s Rising… The Real Reason Koreans Are Turning to Overseas Real Estate',
    summary_en: 'As domestic regulations and tax burdens reach their limits, more Korean investors are turning to overseas real estate. A thorough look at the US, Japan, and Southeast Asian markets — real opportunities and risks you must know.'
  },
  {
    id: 67,
    url: 'article_20260506_1_investment_v2.html',
    category: '투자분석',
    title: '갭투자는 죽었나? 2026년 부동산 투자 생존 전략의 모든 것',
    summary: '고강도 규제와 금리 불확실성이 공존하는 지금, 부동산 시장의 \'옥석 가리기\'는 더욱 치열해졌다. 수익률 지형이 바뀐 2026년, 살아남는 투자자의 전략은 무엇이 다른가.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-05-06',
    title_en: 'Is Gap Investment Dead? Everything About Surviving Real Estate Investment Strategies in 2026',
    summary_en: 'With intense regulations and interest rate uncertainty coexisting, the real estate market\'s separation of wheat from chaff has intensified. What makes surviving investors\' strategies different in 2026\'s changed yield landscape?'
  },
  {
    id: 66,
    url: 'article_20260505_2_redevelop_v2.html',
    category: '재개발',
    title: '압여목성 시대의 서막 — 토허구역 연장과 시공사 선정, 서울 재건축의 뜨거운 봄',
    summary: '압구정·여의도·목동·성수 4대 재건축 선도지구의 시공사 선정, 토지거래허가구역 연장, 80조 정비사업 시장의 실체를 분석합니다.',
    image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=1200&q=80',
    author: '부동산인사이트 정비사업 취재팀',
    date: '2026-05-05',
    title_en: 'Dawn of the AYMS Era — Land Transaction Zone Extensions and Constructor Selection in Seoul\'s Hot Reconstruction Spring',
    summary_en: 'Analyzing constructor selection for the four major reconstruction pilot districts — Apgujeong, Yeouido, Mokdong, and Seongsu — along with land transaction permit zone extensions and the reality of the 80 trillion KRW redevelopment market.'
  },
  {
    id: 65,
    url: 'article_20260505_1_cheongak_v2.html',
    category: '분양',
    title: '고분양가도 못 막는다 — 5월 수도권 분양 빅매치 완전 해부',
    summary: '써밋 더힐·장위 푸르지오 마크원·공공분양까지, 5월 수도권 분양 시장을 완전 분석합니다. 고분양가 시대 청약 전략과 실수요자 시사점까지.',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80',
    author: '부동산인사이트 분양·청약 취재팀',
    date: '2026-05-05',
    title_en: 'High Presale Prices Can\'t Stop Them — Complete Dissection of May\'s Metropolitan Area Presale Big Match',
    summary_en: 'From Summit The Hill to Jangwi Prugio Mark One to public presale, a complete analysis of May\'s metropolitan presale market. Subscription strategies and implications for real-demand buyers in the era of high presale prices.'
  },
  {
    id: 64,
    url: 'article_20260501_2_subscription_v2.html',
    category: '분양',
    title: '5월 청약 대전 개막! 1.1만 가구 쏟아지는데…서울 입주 절벽 \'57% 급감\'의 진짜 의미',
    summary: '2분기 수도권 공공분양 1만 1,514가구 쏟아진다. 5월 성남 낙생·고덕국제·화성동탄2 등 알짜 단지 줄줄이 등장. 서울 입주물량은 57% 급감. 청약자에게 가장 중요한 건 무엇인가.',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80',
    author: '부동산인사이트 분양·청약 취재팀',
    date: '2026-05-01',
    title_en: 'May Subscription Battle Begins! 11,000 Units Flooding In While Seoul Move-in Supply Plunges 57%',
    summary_en: 'Over 11,514 public presale units hit the metropolitan area in Q2. Prime complexes including Seongnam Naksaeng, Godeok International, and Hwaseong Dongtan 2 line up in May. Seoul move-in supply drops 57%. What matters most for applicants.'
  },
  {
    id: 63,
    url: 'article_20260501_1_taxregulation_v2.html',
    category: '정책',
    title: 'D-9 양도세 중과 부활 카운트다운…25억 주담대 2억 시대, 다주택자 매물폭탄 터지나?',
    summary: '2026년 5월 9일 다주택자 양도세 중과배제 종료, 25억 초과 주택 주담대 2억 한도, 1주택자 전세대출 DSR 산입까지. 정책 규제 3종 세트가 시장을 어떻게 흔들고 있는지 심층 분석한다.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80',
    author: '부동산인사이트 정책 취재팀',
    date: '2026-05-01',
    title_en: 'D-9 Capital Gains Tax Surcharge Countdown — With 2.5B KRW Mortgage Cap at 200M, Will Multi-Home Owners Trigger a Listing Bomb?',
    summary_en: 'The multi-home owner capital gains tax surcharge exemption ends May 9, 2026. Combined with the 200M mortgage cap for homes over 2.5B KRW and jeonse loan DSR inclusion for single-home owners, this triple regulatory package is shaking the market.'
  },
  {
    id: 62,
    url: 'article_20260430_2_market_v2.html',
    category: '시장동향',
    title: '강남은 신고가, 강북은 거래절벽... 4월 서울 아파트 시장의 \'두 개의 그래프\'',
    summary: '강남·용산·성동 핵심 지역은 분기 누적 상승률 2%를 넘기며 신고가가 쏟아지는 반면, 강북 외곽과 노원·도봉에서는 거래량이 절반으로 꺾였다. 같은 서울이지만 두 개의 시장이 동시에 진행되는 4월 시장을 데이터로 해부한다.',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80',
    author: '부동산인사이트 시장동향 취재팀',
    date: '2026-04-30',
    title_en: 'Gangnam Hits Record Highs While Gangbuk Faces Transaction Cliff — Seoul\'s April Apartment Market in Two Graphs',
    summary_en: 'Core areas like Gangnam, Yongsan, and Seongdong exceed 2% quarterly cumulative gains with record-high transactions, while Gangbuk outskirts and Nowon-Dobong see volumes halved. A data-driven dissection of two simultaneous markets within Seoul.'
  },
  {
    id: 61,
    url: 'article_20260430_1_column_v2.html',
    category: '칼럼',
    title: '금리·세금·공급 삼중 압박... 2026년 봄, 부동산 시장은 정말 위기인가',
    summary: '주담대 금리 상단 7% 돌파, 5월 9일 양도세 중과 유예 종료, 입주물량 28% 급감. 세 변수가 동시에 시장을 시험하지만, 단순히 \'위기\'로 묶기엔 시장의 결이 지나치게 갈라져 있다. 구조적 재편의 통과의례인가.',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=1200&q=80',
    author: '부동산인사이트 논설위원',
    date: '2026-04-30',
    title_en: 'Interest Rates, Taxes, Supply — Triple Pressure: Is Korea\'s Spring 2026 Real Estate Market Truly in Crisis?',
    summary_en: 'Mortgage rates breach 7%, the capital gains tax surcharge exemption expires May 9, and move-in supply drops 28%. Three variables test the market simultaneously, but the fractures run too deep for a simple crisis label. Is this a structural transition rite of passage?'
  },
  {
    id: 60,
    url: 'article_20260429_2_overseas_v2.html',
    category: '해외',
    title: '"강남 한 채 팔면 도쿄 두 채" 엔저·달러강세에 한국 자본이 떠나기 시작했다',
    summary: '2026년 도쿄 도심 5구 주거자산은 외국인 수요로 견조한 상승, 하노이는 회복기 진입. 다주택 규제로 출구 막힌 한국 투자자들의 해외 부동산 러시를 분석합니다.',
    image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1200&q=80',
    author: '부동산인사이트 해외부동산 데스크',
    date: '2026-04-29',
    title_en: '"Sell One Gangnam Apartment, Buy Two in Tokyo" — Korean Capital Begins to Flee Amid Weak Yen and Strong Dollar',
    summary_en: 'Tokyo\'s central 5-ward residential assets rise steadily on foreign demand, while Hanoi enters recovery. Analyzing the overseas real estate rush by Korean investors blocked by multi-home regulations.'
  },
  {
    id: 59,
    url: 'article_20260429_1_investment_v2.html',
    category: '투자분석',
    title: '"이젠 진짜 도망갈 길이 없다" 4·17 만기연장 금지가 강남 경매를 무너뜨렸다',
    summary: '2026년 4월 17일 다주택자 주담대 만기연장 금지 시행 이후 강남 낙찰가율 6.1%p 급락. 갭투자 시대의 종언과 실수요 중심 경매 시장 재편을 분석합니다.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80',
    author: '부동산인사이트 투자분석 데스크',
    date: '2026-04-29',
    title_en: '"No Way Out Now" — The 4.17 Mortgage Extension Ban Crushed Gangnam Auctions',
    summary_en: 'After the multi-home owner mortgage extension ban took effect on April 17, 2026, Gangnam auction winning rates plunged 6.1%p. Analyzing the end of the gap investment era and the market\'s shift to real-demand-driven auctions.'
  },
  {
    id: 58,
    url: 'article_20260428_2_redevelopment_v2.html',
    category: '재개발',
    title: '분당 양지마을 첫 깃발…1기 신도시 80조 재건축 시장 \'대격돌\' 시작됐다',
    summary: '분당이 1기 신도시 첫 특별정비구역을 잡으며 질주하고, 일산은 일정이 1년 밀리면서 격차가 벌어진다. 12조 미래도시펀드와 80조 정비사업 시장을 둘러싼 시공사 수주전, 그리고 분담금이 만들 진짜 승자의 조건을 분석했다.',
    image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=1200&q=80',
    author: '부동산인사이트 정비사업 데스크',
    date: '2026-04-28',
    title_en: 'Bundang Yangji Village Raises the First Flag — The 80 Trillion KRW 1st Gen New City Reconstruction \'Clash\' Begins',
    summary_en: 'Bundang races ahead as the first special redevelopment zone in 1st gen new cities, while Ilsan\'s schedule slips by a year. Analyzing the contractor bidding wars around the 12 trillion Future City Fund and 80 trillion redevelopment market, and the real conditions for winners determined by contribution assessments.'
  },
  {
    id: 57,
    url: 'article_20260428_1_subscription_v2.html',
    category: '분양',
    title: '4월 분양 폭탄 4만7천 가구…아크로 드 서초 6,710대 1, \'청약 광풍\'의 진실',
    summary: '물량은 3월 대비 1.8배 폭증, 그러나 가점 100만 명이 동시에 몰리는 \'추첨제 광풍\'은 강남에 집중된다. 6월 지방선거 전 행정 일정을 노린 4·7월 공급 집중과 분양가 양극화의 구조를 데이터로 풀었다.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
    author: '부동산인사이트 분양·청약 데스크',
    date: '2026-04-28',
    title_en: 'April Presale Bomb: 47,000 Units — Acro de Seocho 6,710:1, The Truth Behind the \'Subscription Frenzy\'',
    summary_en: 'Supply surges 1.8x vs March, but the lottery frenzy concentrating on Gangnam. Data-driven analysis of the April-July supply concentration timed before the June local elections and the polarization of presale prices.'
  },
  {
    id: 56,
    url: 'article_20260427_2_policy_v2.html',
    category: '정책',
    title: 'D-12, 다주택자 \'매도 시계\' 째깍째깍…양도세 중과 유예 5월 9일 종료, 무엇이 달라지나',
    summary: '5월 9일 다주택자 양도세 중과 유예가 종료된다. 4월 17일자 만기연장 금지까지 겹쳐 매물 압력이 임계점에 도달했다. 2주택 +20%p, 3주택 +30%p 중과 부활이 시장에 던지는 3가지 질문.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80',
    author: '부동산인사이트 편집국',
    date: '2026-04-27',
    title_en: 'D-12: Multi-Home Owner Countdown — Capital Gains Tax Surcharge Returns May 9, What Changes?',
    summary_en: 'The multi-home owner capital gains tax exemption expires May 9. Combined with the April 17 mortgage extension ban, selling pressure reaches a tipping point. Three questions the +20~30%p surcharge revival poses to the market.'
  },
  {
    id: 55,
    url: 'article_20260427_1_market_v2.html',
    category: '시장동향',
    title: '송파 9주 만에 \'V자\' 반등…강북 외곽까지 번진 갭 매우기, 시장은 진짜 돌아선 걸까',
    summary: '4월 3주 서울 아파트 0.15% 상승, 9주 연속 하락하던 송파가 반등하고 강서·관악·성북 외곽이 0.3% 가까이 뛰었다. 갭 매우기인가, 추세 전환인가. 데이터로 풀어본 시장 체온의 진짜 의미.',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80',
    author: '부동산인사이트 편집국',
    date: '2026-04-27',
    title_en: 'Songpa\'s V-Shaped Rebound After 9 Weeks — Gap Filling Spreads to Northern Seoul, Is the Market Really Turning?',
    summary_en: 'Seoul apartments rise 0.15% in the third week of April. Songpa rebounds after 9 weeks of decline, outer districts like Gangseo and Gwanak jump nearly 0.3%. Gap filling or trend reversal? A data-driven analysis.'
  },
  {
    id: 54,
    url: 'article_20260426_2_column_v2.html',
    category: '칼럼',
    title: '서울 입주물량 \'반토막\' 시대, 누가 살아남나 — 2026 부동산 옥석가리기',
    summary: '2026년 서울 입주물량 1.6만 가구, 한 해 전 대비 -48%. 6개 자치구는 신규 입주가 단 한 채도 없다. 입주 가뭄이 만든 \'한정판 시장\'에서 강남 3구·한강벨트는 다시 뛰는데, 지방은 60%가 하락을 점친다.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80',
    author: '부동산인사이트 칼럼 데스크',
    date: '2026-04-26',
    title_en: 'Seoul Move-in Supply Cut in Half — Who Survives in the 2026 Real Estate Sorting',
    summary_en: 'Seoul move-in supply at 16,000 units in 2026, down 48% YoY. Six districts have zero new move-ins. In the limited market created by supply drought, Gangnam 3 and Han River belt surge while 60% of regional markets face decline.'
  },
  {
    id: 53,
    url: 'article_20260426_1_overseas_v2.html',
    category: '해외',
    title: '美 모기지 6%대 안착, 한국 자산가 \'미국 직구\' 골든타임 왔나 — 2026 해외부동산 양극화 시대',
    summary: '3년 반 만에 5%대를 두드린 미국 모기지 금리, \'바이어 마켓\'으로 돌아선 美 주택시장. 마이애미·피닉스에서는 1년 새 17% 폭락 사례가 속출. 한국 자산가에게 지금 미국 부동산은 기회의 창인가, 뒤늦은 폭탄돌리기인가.',
    image: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=1200&q=80',
    author: '부동산인사이트 해외부동산 데스크',
    date: '2026-04-26',
    title_en: 'US Mortgage Settles at 6% — Golden Time for Korean Investors to Buy American Real Estate?',
    summary_en: 'US mortgage rates hitting 5% range for the first time in 3.5 years as the housing market shifts to a buyer\'s market. Miami and Phoenix see 17% crashes. Is US real estate a window of opportunity or a late-stage hot potato for Korean investors?'
  },
  {
    id: 52,
    url: 'article_20260425_2_investment_v2.html',
    category: '투자분석',
    title: '경매 낙찰가율 90.2%, 갭투자는 사라졌다…4월 17일 이후 시장이 보여준 진짜 신호',
    summary: '다주택자 만기연장 금지가 시작된 4월 17일 이후, 수도권 경매 낙찰가율은 90.2%로 떨어지고 인천은 80.2%까지 무너졌다. 경매·갭투자 시장의 진짜 변화와 옥석 가리기 전략을 분석한다.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80',
    author: '부동산인사이트 편집국',
    date: '2026-04-25',
    title_en: 'Auction Winning Rate at 90.2%, Gap Investment Is Dead — The Real Signal the Market Showed After April 17',
    summary_en: 'After the multi-home owner mortgage extension ban took effect on April 17, the Seoul metro auction winning rate dropped to 90.2% and Incheon collapsed to 80.2%. Analyzing the real changes in the auction and gap investment market and strategies for separating wheat from chaff.'
  },
  {
    id: 51,
    url: 'article_20260425_1_redevelopment_v2.html',
    category: '재개발',
    title: '1기 신도시 재건축, 4월 21일부터 가속 페달…분담금 산정도 문턱 낮춰진다',
    summary: '노후계획도시 특별법 시행령 개정으로 분당·일산·평촌·산본·중동 1기 신도시 재정비 속도가 빨라진다. 분담금 산정 절차 간소화와 재건축진단 규제 완화의 의미를 짚는다.',
    image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=1200&q=80',
    author: '부동산인사이트 편집국',
    date: '2026-04-25',
    title_en: '1st Gen New City Reconstruction Hits the Gas from April 21 — Contribution Assessments Get Easier Too',
    summary_en: 'Amendments to the Aging Planned City Special Act enforcement decree accelerate redevelopment in Bundang, Ilsan, Pyeongchon, Sanbon, and Jungdong. Examining the significance of simplified contribution assessments and relaxed reconstruction diagnostic regulations.'
  },
  {
    id: 50,
    url: 'article_20260424_2_subscription_v2.html',
    category: '분양',
    title: '아크로드서초 6,710대 1의 이면 — 4월 4만 7천 가구 쏟아진 분양 대란, 청약의 공식이 바뀌었다',
    summary: '4월 한 달 전국 47,062가구 공급, 서울은 재개발·재건축 중심 3천 가구, 추첨제 경쟁률은 최고 6,710대 1. 공급 폭주 속 \'상급지 집중 수요\'가 만든 새로운 청약 방정식.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
    author: '부동산인사이트 편집국',
    date: '2026-04-24',
    title_en: 'Behind Acro de Seocho\'s 6,710:1 — 47,000 Units Flood April\'s Presale Market, Rewriting the Subscription Formula',
    summary_en: '47,062 units supplied nationwide in April, with Seoul focused on 3,000 redevelopment units and lottery competition peaking at 6,710:1. The new subscription equation created by demand concentration in premium areas amid supply overflow.'
  },
  {
    id: 49,
    url: 'article_20260424_1_policy_v2.html',
    category: '정책',
    title: '4·17 만기연장 금지 시행 — 다주택자 1만 2,000가구, \'매물 폭탄의 서곡\'인가 \'역풍의 시작\'인가',
    summary: '4월 17일부터 수도권·규제지역 2주택 이상 보유자와 임대사업자의 주담대 만기연장이 원칙 금지된다. 총 4.1조 원, 1만 7천 가구 규모의 \'만기 절벽\'이 시장에 던진 세 가지 질문.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80',
    author: '부동산인사이트 편집국',
    date: '2026-04-24',
    title_en: '4.17 Mortgage Extension Ban Takes Effect — 12,000 Multi-Home Owner Units: Prelude to a Listing Bomb or Start of Blowback?',
    summary_en: 'Starting April 17, mortgage extensions are banned for owners of 2+ homes in the Seoul metro and regulated areas. Three questions posed by the 4.1 trillion KRW, 17,000-unit "maturity cliff."'
  },
  {
    id: 48,
    url: 'article_20260423_2_market_v2.html',
    category: '시장동향',
    title: '입주전망지수 69.3, 15개월 만의 최저치 — \'공급 절벽\' 경고등이 켜졌다',
    summary: '2026년 4월 전국 아파트 입주전망지수가 69.3으로 떨어지며 15개월 만에 70선이 붕괴됐다. 전월 대비 25.1p 급락, 입주 예정 물량은 전년 대비 28% 감소. 공급 절벽이 시장에 남길 흔적을 데이터로 해부한다.',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80',
    author: '부동산인사이트 데이터팀',
    date: '2026-04-23',
    title_en: 'Housing Supply Outlook Index Hits 69.3, Lowest in 15 Months — The Supply Cliff Warning Light Is On',
    summary_en: 'The nationwide apartment move-in outlook index plunged to 69.3 in April 2026, breaking below 70 for the first time in 15 months. A 25.1-point drop from the previous month, with scheduled supply down 28% YoY. Dissecting the supply cliff\'s impact with data.'
  },
  {
    id: 47,
    url: 'article_20260423_1_column_v2.html',
    category: '칼럼',
    title: '강남은 멈추고 강북은 뛴다, 서울 \'두 개의 시장\' 시대가 던지는 6가지 질문',
    summary: '2026년 4월, 강남권은 숨 고르기에 들어가고 강북·외곽은 가파르게 상승하는 \'두 개의 시장\' 현상이 고착화되고 있다. 단순한 풍선효과를 넘어 공시가격·대출규제·공급 구조가 만들어낸 구조적 분절의 의미를 해부한다.',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-04-23',
    title_en: 'Gangnam Stalls, Gangbuk Surges — 6 Questions Posed by Seoul\'s "Two Markets" Era',
    summary_en: 'In April 2026, Gangnam cools while Gangbuk and outer areas surge. Beyond simple balloon effects, dissecting the structural fragmentation created by assessed values, lending rules, and supply dynamics.'
  },
  {
    id: 46,
    url: 'article_20260422_2_overseas_v2.html',
    category: '해외',
    title: '도쿄 신축 아파트 40%가 외국인 손에…엔저 끝물 속 한국인의 도쿄 쇼핑은 언제까지 유효한가',
    summary: '도쿄 평균 주거 가격 9,140만 엔, 전년 대비 10.7% 급등. 2025년 일본 매매의 27%가 외국인 매수. BOJ가 금리를 올리고 엔이 되돌림을 시작한 지금, 한국인의 \'도쿄 쇼핑\'은 아직 기회일까, 이미 정점일까.',
    image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1200&q=80',
    author: '부동산인사이트 편집국',
    date: '2026-04-22',
    title_en: 'Tokyo New Apartments: 40% Go to Foreigners — How Long Will Korean Shopping in Tokyo Remain Valid as the Weak Yen Fades?',
    summary_en: 'Tokyo average residential price hits 91.4M yen, up 10.7% YoY. 27% of 2025 Japanese transactions were foreign buyers. With BOJ raising rates and the yen rebounding, is Korean "Tokyo shopping" still opportunity or already the peak?'
  },
  {
    id: 45,
    url: 'article_20260422_1_investment_v2.html',
    category: '투자분석',
    title: '갭투자 시대 사망 선고? 4·17 만기 연장 금지로 뒤흔들린 수도권 경매판…현금흐름 없는 투자는 살 수 없다',
    summary: '수도권 아파트 경매 낙찰률 38.1%까지 주저앉았다. 4월 17일 다주택자 주담대 만기 연장 금지가 불러올 강제 매도 파동. 옥석이 아니라 생존을 가리는 시장이 열렸다.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80',
    author: '부동산인사이트 편집국',
    date: '2026-04-22',
    title_en: 'Death Sentence for Gap Investment? The 4.17 Loan Extension Ban Shakes Up the Seoul Metro Auction Market — No Cash Flow, No Survival',
    summary_en: 'Seoul metro apartment auction winning rate drops to 38.1%. The multi-home owner mortgage extension ban starting April 17 triggers a forced-sale wave. This market now tests survival, not selection.'
  },
  {
    id: 44,
    url: 'article_20260421_2_pilotdistrict_v2.html',
    category: '재개발',
    title: '80조 시장 문 열렸다…1기 신도시 \'선도지구\' 시공사 쟁탈전, 누가 웃고 누가 우나',
    summary: '분당·일산·평촌·산본·중동 3만5,897호. 2026년 시공사 선정이 본격화되며 도시정비사업 시장은 80조 규모로 팽창했다. 그러나 같은 타이틀 아래, 분당은 질주하고 일산은 정체한다. 양극화를 가른 변수는 브랜드가 아니라 사업성이다.',
    image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=1200&q=80',
    author: '부동산인사이트 편집국',
    date: '2026-04-21',
    title_en: 'The 80 Trillion KRW Market Opens — 1st Gen New City Pilot District Contractor Battle: Who Wins, Who Loses?',
    summary_en: 'Bundang, Ilsan, Pyeongchon, Sanbon, Jungdong — 35,897 units. As contractor selection ramps up in 2026, the urban redevelopment market has ballooned to 80 trillion KRW. But under the same title, Bundang races ahead while Ilsan stalls.'
  },
  {
    id: 43,
    url: 'article_20260421_1_acrodeseocho_v2.html',
    category: '분양',
    title: '17억 로또 \'아크로 드 서초\' 1099대1 폭발…상한제의 역설이 만든 서울 청약 新역사',
    summary: '30가구에 3만3천명. 생애최초 특공 1897대1. 서울 민간분양 역대 최고 경쟁률을 갈아치운 아크로 드 서초는 단일 단지의 이벤트가 아니다. 분양가 상한제가 \'로또 청약\'을 제도화한 구조, 그리고 상급지로 수요가 몰리는 수급 왜곡의 결정판이다.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
    author: '부동산인사이트 편집국',
    date: '2026-04-21',
    title_en: '1.7B KRW Lottery: Acro de Seocho Explodes at 1099:1 — The Paradox of Price Caps Rewrites Seoul Subscription History',
    summary_en: '33,000 applicants for 30 units. First-time buyer special at 1897:1. Acro de Seocho shattered Seoul\'s all-time private presale record. This is not a single-complex event — it is the culmination of price cap policy institutionalizing "lottery subscriptions."'
  },
  {
    id: 42,
    url: 'article_20260420_2_policy_v2.html',
    category: '정책',
    title: '10.15 대책 6개월, 집값은 잡혔나…주담대 가중치·DSR 3단계 \'초강수\'의 성적표',
    summary: '서울 전역 토지거래허가구역, 2년 실거주 의무, 스트레스 금리 3%로 두 배 상향, 주담대 위험가중치 20% 조기 시행까지 — 2026년 4월 현재, 정부 \'3차 대책\'의 실효는 어디까지 왔나. 숫자와 현장을 교차 검증한다.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80',
    author: '부동산인사이트 편집국',
    date: '2026-04-20',
    title_en: 'Six Months After the 10.15 Measures: Have Home Prices Been Tamed? The Scorecard of Mortgage Weight Hikes and DSR Stage 3',
    summary_en: 'Seoul-wide land transaction permits, 2-year residency mandates, stress rate doubled to 3%, and early mortgage risk weight hikes — as of April 2026, how far have the government\'s third-round measures actually worked?'
  },
  {
    id: 41,
    url: 'article_20260420_1_market_v2.html',
    category: '시장동향',
    title: '거래는 60% 뚝 끊겼는데 신고가는 터진다…2026년 봄 서울 부동산의 기막힌 역설',
    summary: '강남 국평 26억 시대, 마용성 신고가 행진 vs 노도강 \'비명\'. 4주 연속 오름폭은 둔화, 그러나 핵심지는 폭주 — \'거래 절벽 속 가격 급등\'이 만들어낸 2026년 4월 서울의 두 얼굴을 정밀 해부한다.',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80',
    author: '부동산인사이트 편집국',
    date: '2026-04-20',
    title_en: 'Transactions Down 60% Yet Record Highs Keep Coming — The Stunning Paradox of Seoul Real Estate in Spring 2026',
    summary_en: 'Gangnam national-size flats hit 2.6B KRW, Mayongseong sets new highs while Nodogang cries out. Four straight weeks of slowing gains, yet core areas are surging — dissecting the two faces of Seoul in April 2026.'
  },
  {
    id: 40,
    url: 'article_20260419_2_column_v2.html',
    category: '칼럼',
    title: '"서울만 오른다"는 말의 진짜 의미 — 2026 공급 절벽과 \'신축 20억 vs 구축 14억\'의 비대칭 시장',
    summary: '2026년 서울 아파트 입주물량은 1만 6,412가구, 10년 만에 최저. 전문가 10인 전원이 "서울은 오른다"고 답했다. 그 문장에는 이미 구축과 외곽이 지워져 있었다.',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80',
    author: '부동산인사이트 편집국',
    date: '2026-04-19',
    title_en: 'What "Only Seoul Goes Up" Really Means — The 2026 Supply Cliff and the Asymmetric Market of New 2B vs Old 1.4B KRW',
    summary_en: 'Seoul apartment supply in 2026 hits a 10-year low at 16,412 units. All 10 experts surveyed said "Seoul will rise." But that sentence had already erased old stock and the outskirts.'
  },
  {
    id: 39,
    url: 'article_20260419_1_overseas_v2.html',
    category: '해외',
    title: '"강남 한 채 팔아 도쿄 세 채"…한국 큰손 일본 부동산 쇼핑이 멈추지 않는 이유',
    summary: '엔저·금리차·외국인 무규제 3박자… 도쿄 23구 거래의 30% 이상이 외국인. 그러나 일본은행이 금리 인상에 시동을 거는 2026년, "지금이 막차냐 함정이냐"의 분수령에 섰다.',
    image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1200&q=80',
    author: '부동산인사이트 편집국',
    date: '2026-04-19',
    title_en: '"Sell One Gangnam Apartment, Buy Three in Tokyo": Why Korean Big Money Won\'t Stop Shopping for Japanese Real Estate',
    summary_en: 'Weak yen, rate gap, and zero foreign restrictions — over 30% of Tokyo 23-ward transactions are by foreigners. But as the BOJ signals rate hikes in 2026, the question is: last chance or trap?'
  },
  {
    id: 38,
    url: 'article_20260418_2_investment.html',
    category: '투자분석',
    title: '4월 17일, 갭투자의 시대가 조용히 끝났다 – 낙찰가율 92%의 역설과 \'옥석 가리기\'가 시작되는 경매장',
    summary: '다주택자 수도권 주담대 만기 연장 금지. 한 문장으로 요약된 이 정책이 경매장·갭투자·세컨드하우스 시장의 판을 바꾸고 있다. 낙찰가율은 이미 1월 125%에서 3월 92%로 고꾸라졌고, 투자자들은 "수익률"이 아니라 "잔금 마련"을 먼저 묻기 시작했다.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80',
    author: '부동산인사이트 편집국',
    date: '2026-04-18',
    title_en: 'April 17: The Era of Gap Investment Quietly Ended — The Paradox of 92% Winning Bid Rate and the Start of Separating Wheat from Chaff',
    summary_en: 'The ban on mortgage extension for multi-home owners in the Seoul metro area. This single policy is reshaping the auction, gap investment, and second home markets. Winning bid rates have already plunged from 125% in January to 92% in March.'
  },
  {
    id: 37,
    url: 'article_20260418_1_redevelopment.html',
    category: '재개발',
    title: '"80조 수주 전쟁"의 서막 – 강남·여의도·분당, 2026년 정비사업 지도를 뒤흔드는 자는 누구인가',
    summary: '압구정 6개 구역·여의도 대교·삼부·시범·진주, 그리고 분당 선도지구 2차전. 대형 건설사는 지금 숨을 죽이고 있지만, 조합의 칼자루는 그 어느 때보다 날카롭다.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80',
    author: '부동산인사이트 편집국',
    date: '2026-04-18',
    title_en: 'Prelude to the "80 Trillion KRW Contract War" — Who Will Reshape the 2026 Redevelopment Map of Gangnam, Yeouido, and Bundang?',
    summary_en: 'Six Apgujeong zones, Yeouido\'s Daegyo, Sambu, Sibeom, and Jinju, plus Bundang\'s second-round lead district battle. Major builders hold their breath as unions wield sharper negotiating power than ever.'
  },
  {
    id: 36,
    url: 'article_20260417_2_presale.html',
    category: '분양',
    title: '"서초보다 비싼 노량진"…4월 4.7만가구 폭발, 2030 청약 대혼란의 서막',
    summary: '평당 8,000만 원 시대, 분상제 역설이 만든 기이한 청약 지도 — 장위·흑석·노량진 3개 대단지를 동시에 열어보다. 2030세대 실수요자가 반드시 물어야 할 세 가지 질문.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
    author: '부동산인사이트 편집국',
    date: '2026-04-17',
    title_en: '"Noryangjin More Expensive Than Seocho": 47,000 Units Flood April, Prelude to 2030 Subscription Chaos',
    summary_en: 'The era of 80M KRW per pyeong — the paradox of the price cap system creates a bizarre subscription map. A simultaneous deep-dive into three landmark complexes in Jangwi, Heukseok, and Noryangjin.'
  },
  {
    id: 35,
    url: 'article_20260417_1_policy.html',
    category: '정책',
    title: '오늘부터 수도권 다주택자 \'대출 시한폭탄\' 터진다…2.7조원 매물 시장에 쏟아지나',
    summary: '4월 17일 시행 \'주담대 만기연장 원칙 금지\'의 실체와 파급력 — 이재명 정부 부동산 규제의 분기점을 읽는다. 2조 7,000억 원 만기 도래 물량의 행방은.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80',
    author: '부동산인사이트 편집국',
    date: '2026-04-17',
    title_en: 'Multi-Home Owner "Loan Time Bomb" Detonates Today: Will 2.7 Trillion KRW in Properties Flood the Market?',
    summary_en: 'The reality and ripple effects of the mortgage extension ban effective April 17 — reading the inflection point of the Lee Jae-myung administration\'s real estate regulations.'
  },
  {
    id: 34,
    url: 'article_20260416_1_column.html',
    category: '칼럼',
    title: '입주 28% 감소·양도세 데드라인·금리 불안… 세 개의 시한폭탄이 동시에 터진다',
    summary: '2026년 봄, 한국 부동산 시장은 공급 절벽·양도세 중과 유예 종료·금리 불안이라는 세 개의 시한폭탄이 동시에 째깍거리는 교차로에 서 있다. 단순 상승·하락이 아닌 시장 구조와 양극화의 가속을 정밀 해부한다.',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-04-16',
    title_en: "Three Time Bombs Tick Together: Supply Cliff, Capital Gains Tax Deadline, and Rate Uncertainty",
    summary_en: "In the spring of 2026, Korean real estate stands at a crossroads where a supply cliff, the expiry of the multi-home capital gains tax exemption, and lingering rate uncertainty all detonate at once. A structural read beyond simple up-or-down narratives."
  },
  {
    id: 33,
    url: 'article_20260416_2_market.html',
    category: '시장동향',
    title: '강남도 무너졌다 — 양도세 폭탄 피하려는 다주택자 급매, 서울 집값 7개월 만에 하락 전환',
    summary: '5월 9일 양도세 중과 유예 데드라인이 다가오자 강남 3구마저 약세로 돌아섰다. 서울 실거래가격지수 전월 대비 −0.59%, 강남구 −0.39%. 급매 출회의 진짜 의미와 이 흐름이 언제까지 이어질지 숫자 뒤 시장 구조를 해부한다.',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-04-16',
    title_en: "Even Gangnam Cracks: Multi-Home Owner Fire Sales Push Seoul Prices Down for the First Time in Seven Months",
    summary_en: "As the May 9 capital gains tax deadline nears, even the Gangnam Three Districts have turned weak. Seoul's actual transaction price index fell 0.59% MoM and Gangnam-gu 0.39% — a structural look at what the fire-sale wave really means and how long it will last."
  },
  {
    id: 32,
    url: 'article_20260415_4_overseas.html',
    category: '해외',
    title: '엔저 끝물·미국 금리 6%·동남아 급부상…2026년 해외 부동산 투자의 新지도를 그려라',
    summary: '일본은 금리 인상 카드를 꺼내들었고, 미국은 여전히 6%대 모기지 금리가 시장을 짓누른다. 그러나 동남아는 새로운 기회의 땅으로 부상하고 있다. 국내 부동산 규제가 강화될수록 해외 자산 분산 수요는 커진다. 2026년 지금, 어느 나라의 어떤 자산에 주목해야 하는가.',
    image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-04-15',
    title_en: 'End of Weak Yen, US Rates at 6%, SE Asia Rising: Draw the New 2026 Overseas Real Estate Investment Map',
    summary_en: "Japan plays the rate hike card while 6% mortgages still weigh on the US market. Meanwhile, Southeast Asia emerges as a new land of opportunity. As domestic regulations tighten, the demand for global diversification grows."
  },
  {
    id: 31,
    url: 'article_20260415_3_investment.html',
    category: '투자분석',
    title: "경매 낙찰률 38% 추락·다주택자 대출 막힌다…지금이 부동산 경매 '옥석가리기' 진입 타이밍인가?",
    summary: '수도권 아파트 경매 낙찰률이 2주 연속 하락하며 38.1%까지 떨어졌다. 4월 17일 다주택자 주담대 만기 연장 금지가 시행되면 경매 물량은 더 늘어날 전망이다. 규제와 물량 증가가 교차하는 이 시점에서, 투자자는 어떤 전략을 취해야 하는가.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-04-15',
    title_en: "Auction Sale Rate Plunges to 38% & Multi-Home Owner Loans Blocked: Is Now the Time to Enter the Real Estate Auction Market?",
    summary_en: "Seoul metro apartment auction winning rate falls for two consecutive weeks to 38.1%. With the multi-home owner mortgage extension ban starting April 17, auction volume is expected to increase further."
  },
  {
    id: 30,
    url: 'article_20260415_1_investment.html',
    category: '투자분석',
    title: '경매 낙찰가율 38% 폭락, 지금이 진짜 매수 타이밍인가?',
    summary: '수도권 아파트 경매 낙찰률 38.1%, 낙찰가율 90% 붕괴. 4월 17일 다주택자 주담대 만기연장 금지 시행을 앞두고 진공 상태에 빠진 시장에서 옥석을 가리는 냉정한 투자 분석.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-04-15',
    title_en: 'Auction Sale Rate Plunges 38% — Is Now the Real Buying Moment?',
    summary_en: "Seoul metro apartment auction winning rate falls to 38.1% and sale price ratio breaks below 90%. With the multi-home owner mortgage extension ban starting April 17, a sober investment analysis for separating opportunity from risk."
  },
  {
    id: 29,
    url: 'article_20260415_2_overseas.html',
    category: '해외',
    title: '관세 전쟁이 뒤흔드는 글로벌 부동산 지형도 — 한국인 투자자의 선택은?',
    summary: '트럼프 고율 관세가 키우는 글로벌 불확실성 속, 미국 주택 재고 급증·일본 엔저 기회·베트남·태국 외국인 규제 변화까지. 2026년 해외 부동산 투자의 새 지형도를 나라별로 냉정히 분석한다.',
    image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1200&q=80',
    author: '부동산인사이트 해외투자팀',
    date: '2026-04-15',
    title_en: 'Tariff Wars Reshape the Global Real Estate Map — What Should Korean Investors Choose?',
    summary_en: "Trump's steep tariffs ratchet up global uncertainty while US housing inventory surges, Japan's weak yen opens a window, and Vietnam and Thailand tighten foreign rules. A country-by-country look at the new 2026 overseas investment landscape."
  },
  {
    id: 28,
    url: 'article_20260414_5_redevelopment.html',
    category: '재개발',
    title: "압구정5구역 '도촬 파문' 충격 — 80조 서울 정비사업 수주전 대혼돈",
    summary: "DL이앤씨 볼펜형 카메라 입찰 도촬 의혹, 현대건설 고소장 제출. 목동6단지 유찰·반포 시공사 전쟁까지, 80조 원 서울 정비사업 수주전이 격랑 속으로 빠져들고 있다.",
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80',
    author: '부동산인사이트 편집팀',
    date: '2026-04-14',
    title_en: "Apgujeong District 5 'Hidden Camera' Scandal — 80 Trillion KRW Seoul Redevelopment War in Chaos",
    summary_en: "DL E&C accused of using a pen camera to photograph sealed bids, Hyundai E&C files a criminal complaint. From Mokdong 6 failing to attract bids to the Banpo contractor wars, Seoul's 80-trillion-won redevelopment market has entered turmoil."
  },
  {
    id: 27,
    url: 'article_20260414_1_cheongnyak.html',
    category: '분양',
    title: '봄 성수기 분양 대폭발 — 오티에르 반포 710대1, 4월 물량 3월의 7배',
    summary: '4월 전국 4.7만 가구 쏟아지며 3월 대비 7.3배. 오티에르 반포 청약 경쟁률 평균 710대1, 최고 1,180대1 기록. 강남 과열과 지방 미분양이 교차하는 양극화 시장을 진단한다.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
    author: '부동산인사이트 편집팀',
    date: '2026-04-14',
    title_en: 'Spring Presale Explosion — Hautere Banpo 710:1, April Supply Seven Times March',
    summary_en: 'April brings 47,000 units nationwide — 7.3× March. Hautere Banpo sees an average 710:1 subscription rate, peaking at 1,180:1. A diagnosis of the polarized market where Gangnam overheats while regional unsold stock piles up.'
  },
  {
    id: 26,
    url: 'article_20260414_4_column.html',
    category: '칼럼',
    title: '우리는 왜 부동산 앞에서 이성을 잃는가',
    summary: '공포와 탐욕 사이에서 반복되는 한국 부동산 심리의 해부. 공급 절벽과 양극화가 교차하는 2026년, 개인의 판단이 얼마나 군중심리에 휩쓸리는지 냉정하게 짚는다.',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=1200&q=80',
    author: '부동산인사이트 편집장 칼럼',
    date: '2026-04-14',
    title_en: 'Why We Lose Reason in Front of Real Estate',
    summary_en: 'Dissecting the Korean housing psyche that swings between fear and greed. In a 2026 defined by a supply cliff and polarization, how much of your judgment is truly your own?'
  },
  {
    id: 25,
    url: 'article_20260414_3_overseas.html',
    category: '해외',
    title: '관세 전쟁과 엔저의 교차로 — 한국인 해외 부동산 투자의 지금',
    summary: '트럼프 2기 관세가 미국 건설 원가를 끌어올리고, 엔화 약세가 일본 투자 창을 연다. 6.3% 모기지와 도쿄 5구 매력도를 대비해 두 시장의 기회와 리스크를 냉정히 분석한다.',
    image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1200&q=80',
    author: '부동산인사이트 해외투자팀',
    date: '2026-04-14',
    title_en: 'At the Crossroads of Tariff Wars and a Weak Yen — Korean Overseas Real Estate Investment Today',
    summary_en: 'Trump\'s second-term tariffs lift US construction costs while a weak yen opens a window into Japan. A sober comparison of opportunities and risks in both markets, from 6.3% mortgages to central Tokyo.'
  },
  {
    id: 24,
    url: 'article_20260414_2_redevelopment.html',
    category: '재개발',
    title: '신통기획과 강남 재건축의 두 얼굴 — 속도와 갈등의 딜레마',
    summary: '올림픽훼밀리타운 6,787가구 확정, 반포·압구정 시공사 전쟁까지. 신통기획 확산과 강남권 초대형 수주전이 동시에 드러내는 서울 정비사업의 현재와 미래를 진단한다.',
    image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-04-14',
    title_en: 'Two Faces of Shintonggihwek and Gangnam Reconstruction — The Dilemma of Speed and Conflict',
    summary_en: 'Olympic Family Town confirmed at 6,787 units, and contractor wars in Banpo and Apgujeong. Diagnosing the present and future of Seoul redevelopment through the simultaneous spread of the Shintonggihwek program and mega-scale Gangnam bidding battles.'
  },
  {
    id: 23,
    url: 'article_20260414_1_subscription.html',
    category: '분양',
    title: '3기 신도시 본청약의 역설 — 기회인가, 신기루인가',
    summary: '고양창릉 A4 410:1 경쟁률, 남양주왕숙2·인천계양 대규모 공급 개시. 분양가 상한제 20% 할인 효과와 본청약 흥행 이면의 실수요자 리스크를 냉정하게 분석한다.',
    image: 'https://images.unsplash.com/photo-1448630360428-65456885c650?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-04-14',
    title_en: 'The Paradox of 3rd-Gen New City Main Subscriptions — Opportunity or Mirage?',
    summary_en: 'Goyang Changneung A4 draws a 410:1 competition rate as Namyangju Wangsuk 2 and Incheon Gyeyang open large-scale supplies. A sober analysis of the 20% price cap discount and the real-buyer risks behind the subscription frenzy.'
  },
  {
    id: 22,
    url: 'article_20260413_4b_policy.html',
    category: '정책',
    title: '스트레스 DSR 3단계 전면 시행, 대출 한도 충격과 부동산 시장 재편',
    summary: '2026년 4월 스트레스 DSR 3단계 전면 시행으로 대출 한도 10~15% 감소. 25억 초과 주택 주담대 2억 원 제한, 실수요자 배제 우려와 비은행권 풍선 효과를 분석한다.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80',
    author: '부동산인사이트 정책팀',
    date: '2026-04-13',
    title_en: 'Stress DSR Stage 3 Full Implementation: Loan Limit Shock and Market Restructuring',
    summary_en: 'With Stress DSR Stage 3 fully implemented in April 2026, loan limits drop 10-15%. Analysis of the 200M KRW cap on 2.5B+ homes and concerns over real buyer exclusion.'
  },
  {
    id: 21,
    url: 'article_20260413_3b_market.html',
    category: '시장동향',
    title: '서울 아파트 하락 재개, 공급 쇼크와 양극화의 교차점에 서다',
    summary: '4월 둘째 주 서울 아파트 매매가 0.03% 하락, 전세는 0.09% 상승. 공급 확대·금융 규제·관망 심리의 삼중 압박 속 매매-전세 역행 구조를 진단한다.',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-04-13',
    title_en: 'Seoul Apartment Decline Resumes: At the Crossroads of Supply Shock and Polarization',
    summary_en: 'Seoul apartment prices fall 0.03% in the second week of April while jeonse rises 0.09%. Diagnosing the triple pressure of supply expansion, financial regulation, and wait-and-see sentiment.'
  },
  {
    id: 20,
    url: 'article_20260413_4_policy.html',
    category: '정책',
    title: '스트레스 DSR 3단계 전면 시행 — 대출 규제의 완성인가, 과도한 억압인가',
    summary: '2026년 4월, 수도권 주담대 스트레스 금리 3% 적용·다주택자 만기 연장 금지 동시 시행. 한도 최대 15% 감소, 시장에 실질적으로 어떤 충격을 주는가.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-04-13',
    title_en: 'Stress DSR Stage 3 Full Implementation — Completion or Overreach of Lending Regulations?',
    summary_en: 'April 2026: 3% stress rate on Seoul metro mortgages and multi-home owner extension ban take effect simultaneously. What real impact does this have on the market?'
  },
  {
    id: 19,
    url: 'article_20260413_3_market.html',
    category: '시장동향',
    title: '서울 아파트, 강남발 하락세가 수도권 전역으로 번지고 있다',
    summary: '4월 둘째 주 서울 –0.03% 하락 전환, 강남 3구 고가 단지 매수세 실종. 반면 전세는 연속 상승세 지속, 매매·전세 디커플링이 심화되고 있다.',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-04-13',
    title_en: 'Seoul Apartments: Gangnam-Led Decline Spreading Across the Metro Area',
    summary_en: 'Seoul turns negative at -0.03% in the second week of April as Gangnam high-end demand evaporates. Meanwhile, jeonse keeps rising — the buy-rent decoupling deepens.'
  },
  {
    id: 18,
    url: 'article_20260413_2_policy.html',
    category: '정책',
    title: '4월 17일, 다주택자 대출 만기연장 불허 시행 — 2026년 봄 대출 규제의 전모',
    summary: '수도권·규제지역 다주택자의 아파트 담보대출 만기연장이 원칙적으로 금지된다. DSR 스트레스 금리 3% 적용까지, 2026년 봄 대출 규제의 전모를 분석한다.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-04-13',
    title_en: 'Multi-Home Owners Loan Extension Ban Takes Effect April 17',
    summary_en: 'Mortgage extension for multi-home owners in regulated areas is effectively banned. A full analysis of the spring 2026 lending regulations including DSR stress rate of 3%.'
  },
  {
    id: 17,
    url: 'article_20260413_1_market.html',
    category: '시장동향',
    title: '비규제지역 거래 폭증, 풍선효과의 귀환 — 10.15 대책이 만든 양극화 시장',
    summary: '규제지역 거래가 35% 급감하는 동안, 비규제지역은 20% 이상 증가했다. 수도권 내 이중 시장의 현실과 실수요자가 읽어야 할 신호.',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-04-13',
    title_en: 'Unregulated Area Transactions Surge: The Return of the Balloon Effect',
    summary_en: 'While regulated area transactions dropped 35%, unregulated areas saw a 20%+ increase. The reality of the dual market in the Seoul metro area.'
  },
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
  $('#topbar-subscribe-email').placeholder = t.newsletter_placeholder;
  $('#topbar-subscribe-btn').textContent = t.subscribe;
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

  // Newsletter CTA
  $('#nl-cta-title').textContent = t.nl_cta_title;
  $('#nl-cta-desc').textContent = t.nl_cta_desc;
  $('#nl-cta-email').placeholder = t.nl_cta_placeholder;
  $('#nl-cta-btn').textContent = t.nl_cta_btn;
  $('#nl-cta-note').textContent = t.nl_cta_done;

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
const SUBSCRIBE_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSeCzoyfzDvustiDdaqUIKnPdtS_2kajmRkadPogcUdOylkUWQ/viewform?usp=publish-editor';

$('#topbar-subscribe-form').addEventListener('submit', (e) => {
  e.preventDefault();
  window.open(SUBSCRIBE_URL, '_blank');
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

$('#newsletter-form').addEventListener('submit', (e) => {
  e.preventDefault();
  window.open(SUBSCRIBE_URL, '_blank');
});

$('#nl-cta-form').addEventListener('submit', (e) => {
  e.preventDefault();
  window.open(SUBSCRIBE_URL, '_blank');
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
