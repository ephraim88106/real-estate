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
