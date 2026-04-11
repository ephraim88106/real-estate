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
      <p>스트레스 DSR(Debt Service Ratio) 3단계는 금융당국이 가계부채 증가세를 억제하기 위해 단계적으로 시행해온 대출 규제의 완성형입니다. 1단계에서 주택담보대출에 스트레스 금리를 가산하기 시작한 데 이어, 2단계에서는 신용대출까지 적용 범위를 넓혔고, 이번 3단계에서는 모든 가계대출 상품에 전면 적용되는 것이 핵심입니다.</p>
      <p>한국은행과 금융위원회에 따르면, GDP 대비 가계부채 비율은 여전히 OECD 국가 중 최상위권을 유지하고 있습니다. 금리 인상 사이클이 일단락된 이후에도 가계대출 잔액이 줄어들지 않고 오히려 수도권 중심의 주택 거래 활성화로 다시 증가세로 돌아서자, 정부는 보다 강력한 수요 억제책을 꺼내든 것입니다.</p>
      
      <div class="pull-quote">
        <p>"스트레스 DSR 3단계는 단순한 대출 한도 축소가 아닙니다. 차주의 상환 능력을 미래의 금리 변동성까지 고려하여 검증하는, 대출 시스템의 질적 진화를 의미합니다."</p>
        <cite>— 금융위원회 보도자료 (2025.12)</cite>
      </div>

      <h2>실수요자 영향 분석: 수도권 아파트 시장의 냉각</h2>
      <p>스트레스 DSR의 핵심은 '가산 금리'의 실질적 적용입니다. 실제 대출 금리에 1.5%포인트의 스트레스 금리를 더한 금리로 DSR을 계산하기 때문에, 명목 대출 한도가 크게 줄어듭니다. 예를 들어 연소득 7,000만 원의 차주가 연 4.0%로 주택담보대출을 받을 경우, 기존 DSR 기준으로는 약 5.2억 원이 가능했던 대출이 스트레스 금리 적용 시 3.9억 원 수준으로 약 25% 가량 줄어드는 것으로 나타났습니다.</p>
      <p>특히 9억 원 이상의 중고가 아파트가 밀집한 서울 및 수도권 선호 지역에서 타격이 큽니다. 대출 한도 감소는 매수 대기자들의 자금 조달 계획에 차질을 빚게 하며, 이는 곧 거래량 감소로 이어지고 있습니다. KB부동산 시세 데이터에 따르면, 제도 시행 예고 직후 서울 아파트 거래량은 전월 대비 15.4% 감소하며 즉각적인 반응을 보였습니다.</p>

      <h2>금융사별 대응과 시장 전망</h2>
      <p>시중은행들은 정부 가이드라인에 맞춰 대출 심사를 더욱 강화하고 있습니다. 일부 은행은 자체적인 가산 금리를 추가로 적용하거나, 총량 관리를 위해 신규 대출 금리를 인상하는 움직임도 보이고 있습니다. 이는 대출 수요를 제2금융권으로 밀어내는 '풍선 효과'를 유발할 수 있으나, 이번 3단계 규제가 비은행권까지 포괄하고 있어 과거와 같은 규제 회피는 쉽지 않을 전망입니다.</p>
      <p>전문가들은 향후 6개월간 부동산 시장이 '거래 절벽' 속의 보합세를 유지할 것으로 보고 있습니다. 매수 심리가 위축된 상황에서 금리 인하 기대감만이 시장을 지탱하고 있으나, 실질적인 대출 문턱이 높아진 만큼 단기간 내의 급등은 어려울 것이라는 분석이 지배적입니다.</p>

      <div class="source-info" style="font-size: 0.8rem; color: #888; border-top: 1px solid #eee; margin-top: 40px; padding-top: 20px;">
        <strong>참고 및 출처:</strong><br>
        • 금융위원회 가계부채 관리대책 (2025)<br>
        • 한국은행 금융안정보고서 (2026.03)<br>
        • KB부동산 데이터허브 주간 시황 자료<br>
        • 부동산R114 시장 분석 리포트
      </div>
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
      <p>Stress DSR (Debt Service Ratio) Stage 3 is the culmination of phased lending regulations designed to curb household debt growth. Following Stage 1 for mortgage loans and Stage 2 for credit loans, Stage 3 now applies to all household lending products.</p>
      
      <div class="pull-quote">
        <p>"Stress DSR Stage 3 is not just about reducing limits; it's about verifying borrowers' repayment capacity against future interest rate volatility."</p>
        <cite>— Financial Services Commission Press Release</cite>
      </div>

      <h2>Market Impact: Cooling in the Metropolitan Area</h2>
      <p>The core of Stress DSR is the practical application of an "add-on rate." By calculating DSR using an interest rate increased by 1.5 percentage points, nominal loan limits are significantly reduced. For a borrower with an annual income of 70 million KRW, a mortgage previously capped at 520 million KRW could drop to 390 million KRW—a 25% reduction.</p>
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
        <div class="data-box-title">📊 강남 재건축 주요 지표</div>
        <div class="data-grid">
          <div class="data-item">
            <span class="num">35년+</span>
            <div class="label">현대아파트 평균 연령</div>
          </div>
          <div class="data-item">
            <span class="num">3.3만㎡</span>
            <div class="label">압구정 추진 면적</div>
          </div>
          <div class="data-item">
            <span class="num">50억+</span>
            <div class="label">현대 84㎡ 호가</div>
          </div>
        </div>
      </div>

      <h2>왜 압구정·대치인가: 입지의 불변 가치</h2>
      <p>부동산 시장에서 '입지'는 모든 가치의 출발점입니다. 압구정동과 대치동은 한국 부동산 역사에서 이 명제를 가장 극명하게 증명해온 지역입니다. 한강변, 강남 핵심 업무지구 접근성, 대치학원가라는 삼위일체 조건은 수십 년이 지나도 바뀌지 않는 구조적 수요를 만들어냅니다.</p>
      <p>압구정 현대아파트 단지는 1976~1988년에 걸쳐 준공된 노후 아파트입니다. 재건축 연한(30년)을 한참 넘겼음에도 재건축이 더디게 진행된 것은 사업성과 규제가 번갈아가며 발목을 잡았기 때문입니다. 그러나 지금 이 단지들은 다시 가장 뜨거운 재건축 시장의 중심에 서 있습니다.</p>

      <h2>현재 진행 상황: 어디까지 왔나</h2>
      <p>압구정 재건축은 구역별로 진행 속도가 다릅니다. 압구정 3구역(현대 7·8·11차)은 정비구역 지정 및 조합설립인가 단계에 있으며, 시공사 선정을 앞두고 있습니다. 반면 나머지 구역들은 주민 간 이해관계 충돌과 서울시의 종상향 기준 적용 문제로 여전히 초기 단계에 머물러 있습니다.</p>
      <p>대치동의 경우, 은마아파트가 핵심입니다. 49층 재건축 계획이 서울시와 오랫동안 협의 중이며, 최근 층수 조정 및 기부채납 비율을 두고 사업 조건이 좁혀지고 있다는 신호가 포착됩니다. 은마아파트는 4,424가구라는 대규모 단지 특성상 재건축 이후 공급 효과도 상당합니다.</p>

      <div class="pull-quote">
        <p>"압구정 재건축은 단지 아파트를 새로 짓는 것이 아닙니다. 서울 도심 한복판에 새로운 최고급 주거 클러스터를 창조하는 도시 재편 사업입니다."</p>
        <cite>— 서울시 도시재생 연구원</cite>
      </div>

      <h2>가격의 역설: 규제가 강할수록 오른다?</h2>
      <p>흥미롭게도 압구정 재건축 아파트 가격은 규제가 강화될수록 오르는 '역설적 현상'을 보입니다. 2023년 이후 각종 대출 규제와 재건축 초과이익 환수제가 재차 강화됐음에도, 압구정 현대아파트 시세는 꾸준히 상승 추세를 유지했습니다.</p>

      <table class="comparison-table">
        <thead>
          <tr>
            <th>단지명</th>
            <th>준공년도</th>
            <th>규모(가구)</th>
            <th>재건축 단계</th>
            <th>전용 84㎡ 호가</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="highlight">압구정 현대 3구역</td>
            <td>1982~84</td>
            <td>약 1,400</td>
            <td>조합설립인가</td>
            <td>약 55억~65억</td>
          </tr>
          <tr>
            <td class="highlight">대치 은마아파트</td>
            <td>1979</td>
            <td>4,424</td>
            <td>사업시행인가 추진</td>
            <td>약 28억~34억</td>
          </tr>
          <tr>
            <td>대치 쌍용 1차</td>
            <td>1988</td>
            <td>990</td>
            <td>정비구역 지정</td>
            <td>약 25억~30억</td>
          </tr>
        </tbody>
      </table>

      <h2>재건축 초과이익 환수제의 딜레마</h2>
      <p>재건축 사업의 가장 큰 변수는 '재건축 초과이익 환수제'입니다. 재건축으로 발생하는 이익 중 일정 부분을 국가가 환수하는 이 제도는 조합원들의 사업 의지를 꺾는 강력한 억제 요인입니다. 압구정처럼 지가가 높은 지역일수록 환수 금액이 천문학적 수준에 달하기 때문입니다.</p>

      <h2>리스크 요인: 과도한 기대에 대한 경계</h2>
      <p>물론 장밋빛 전망만 있는 것은 아닙니다. 첫째는 사업 기간 리스크입니다. 재건축은 이주, 철거, 착공, 준공까지 통상 10~15년이 걸립니다. 둘째는 금리 환경입니다. 공사비 급등과 금융비용 증가로 재건축 사업의 추가 분담금이 크게 늘었습니다.</p>

      <h2>투자 관점에서의 결론</h2>
      <p>압구정·대치 재건축은 '언젠가는 오른다'는 명제가 거의 공리(公理)에 가까운 시장입니다. 그러나 그 '언젠가'가 5년 후인지 15년 후인지는 아무도 모릅니다. 투자 관점에서는 대기 기간 동안의 기회비용, 추가 분담금, 취득세·보유세 부담을 면밀히 계산해야 합니다.</p>

      <div class="source-info" style="font-size: 0.8rem; color: #888; border-top: 1px solid #eee; margin-top: 40px; padding-top: 20px;">
        <strong>참고 및 출처:</strong><br>
        • 서울시 신속통합기획 가이드라인 (2025)<br>
        • 국토교통부 실거래가 공개시스템<br>
        • 한국부동산원 주간 아파트 가격동향
      </div>
    `,
    bodyHtml_en: `
      <div class="data-box">
        <div class="data-box-title">📊 Key Rebuilding Metrics in Gangnam</div>
        <div class="data-grid">
          <div class="data-item">
            <span class="num">35Y+</span>
            <div class="label">Avg Bldg Age</div>
          </div>
          <div class="data-item">
            <span class="num">33k㎡</span>
            <div class="label">Project Area</div>
          </div>
          <div class="data-item">
            <span class="num">5B+ KRW</span>
            <div class="label">Asking Price (84㎡)</div>
          </div>
        </div>
      </div>
      <h2>Icons of Gangnam Rebuilding</h2>
      <p>In the real estate market, 'location' is the starting point of all value. Apgujeong and Daechi have proven this throughout history.</p>
      
      <div class="pull-quote">
        <p>"Apgujeong rebuilding is not just about new apartments; it is a city reorganization project creating a new luxury residential cluster."</p>
        <cite>— Seoul Urban Regeneration Researcher</cite>
      </div>

      <h2>Conclusion from Investment Perspective</h2>
      <p>Apgujeong and Daechi rebuilding is a market where the proposition "it will rise eventually" is almost an axiom. However, no one knows if that "eventually" is in 5 or 15 years.</p>
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
          <div class="data-item">
            <span class="num">2030년</span>
            <div class="label">첫 입주 목표 시기</div>
          </div>
        </div>
      </div>

      <h2>노후계획도시 특별법과 선도지구의 의미</h2>
      <p>분당, 일산 등 1기 신도시는 조성된 지 30년을 넘기며 기반시설 노후화 문제에 직면했습니다. 정부는 '노후계획도시 정비 및 지원에 관한 특별법'을 통해 용적률 상향, 안전진단 면제 등의 파격적인 인센티브를 제공하며 정비사업의 물꼬를 텄습니다.</p>
      
      <div class="city-comparison">
        <div class="city-card bundang">
          <h4>🔵 분당 (성남시): '제2의 강남'으로의 도약</h4>
          <ul>
            <li>판교 IT 밸리 배후 주거 수요의 결합</li>
            <li>신분당선·GTX-A 등 최강의 교통망</li>
            <li>특별법 적용 시 용적률 최대 450% 기대</li>
          </ul>
        </div>
        <div class="city-card ilsan">
          <h4>🟠 일산 (고양시): '쾌적한 자족도시'로의 변신</h4>
          <ul>
            <li>GTX-A 전면 개통에 따른 강남 접근성 혁명</li>
            <li>방송영상밸리·일산테크노밸리 등 자족 기능 강화</li>
          </ul>
        </div>
      </div>

      <div class="source-info" style="font-size: 0.8rem; color: #888; border-top: 1px solid #eee; margin-top: 40px; padding-top: 20px;">
        <strong>참고 및 출처:</strong><br>
        • 국토교통부 노후계획도시 정비 기본방침 (2025)<br>
        • 성남시/고양시 노후계획도시 정비 기본계획안
      </div>
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
    title_en: 'Seoul Apartment Prices Rise for 6th Week Led by Gangnam',
    summary_en: 'According to REB data, Seoul apartment prices have risen for six consecutive weeks, with Gangnam and Songpa leading the recovery trend.',
    bodyHtml: `
      <div class="data-box">
        <div class="data-box-title">📊 주간 아파트 가격 동향 (서울)</div>
        <div class="data-grid">
          <div class="data-item">
            <span class="num">+0.08%</span>
            <div class="label">서울 평균 상승률</div>
          </div>
          <div class="data-item">
            <span class="num">+0.21%</span>
            <div class="label">송파구 변동률</div>
          </div>
          <div class="data-item">
            <span class="num">+0.18%</span>
            <div class="label">강남구 변동률</div>
          </div>
        </div>
      </div>

      <h2>강남 4구와 마용성의 동반 상승</h2>
      <p>한국부동산원이 발표한 '주간 아파트 가격 동향'에 따르면, 4월 둘째 주 서울 아파트 매매가격은 지난주 대비 0.08% 오르며 6주 연속 상승세를 기록했습니다. 특히 송파구(0.21%)와 강남구(0.18%) 등 상급지 아파트가 상승세를 견인하고 있습니다.</p>
      <p>강북권에서도 마포(0.15%), 용산(0.14%), 성동(0.12%) 등 이른바 '마용성' 지역의 주요 단지들이 신고가를 경신하며 회복세를 굳히는 모양새입니다. 이는 금리 인하 기대감과 함께 '신생아 특례대출' 등 정책 금융 상품이 시장에 투입되면서 실수요자들의 매수 심리가 회복된 결과로 풀이됩니다.</p>

      <div class="pull-quote">
        <p>"급매물 소진 이후 매수 대기자들이 추격 매수에 나서면서 서울 주요 지역의 가격 지지선이 견고해지고 있습니다. 다만 지역별 양극화는 더욱 뚜렷해질 전망입니다."</p>
        <cite>— KB부동산 수석전문위원 인터뷰</cite>
      </div>

      <h2>거래량 증가와 매수심리 회복</h2>
      <p>서울시 부동산정보광장에 따르면, 지난달 서울 아파트 거래량은 4,000건을 넘어서며 2년 만에 최대치를 기록했습니다. 거래량이 가격 상승의 선행 지표라는 점을 감안할 때, 당분간 서울 시장의 우상향 흐름은 지속될 가능성이 높습니다. 매수우위지수 역시 50선을 돌파하며 매도자보다는 매수자들의 문의가 늘어나는 추세입니다.</p>

      <div class="source-info" style="font-size: 0.8rem; color: #888; border-top: 1px solid #eee; margin-top: 40px; padding-top: 20px;">
        <strong>참고 및 출처:</strong><br>
        • 한국부동산원(REB) 주간 아파트 가격동향 (2026.04)<br>
        • 국토교통부 실거래가 시스템 및 서울시 부동산정보광장 통계<br>
        • KB부동산 데이터허브 시장 동향 리포트
      </div>
    `,
    bodyHtml_en: `
      <div class="data-box">
        <div class="data-box-title">📊 Weekly Seoul Apt Price Trends</div>
        <div class="data-grid">
          <div class="data-item">
            <span class="num">+0.08%</span>
            <div class="label">Seoul Avg Increase</div>
          </div>
          <div class="data-item">
            <span class="num">+0.21%</span>
            <div class="label">Songpa District</div>
          </div>
          <div class="data-item">
            <span class="num">+0.18%</span>
            <div class="label">Gangnam District</div>
          </div>
        </div>
      </div>

      <h2>Recovery in Core Districts</h2>
      <p>Seoul\'s apartment market continues its upward trajectory for the 6th consecutive week. According to the Korea Real Estate Board (REB), price increases are most prominent in high-end districts such as Songpa (+0.21%) and Gangnam (+0.18%).</p>
      <p>The "Ma-Yong-Seong" area (Mapo, Yongsan, Seongdong) is also showing strong recovery, with major complexes reaching new yearly highs. Experts attribute this to growing anticipation of interest rate cuts and the infusion of government-backed policy loans like the "Special Loan for Newborns."</p>

      <div class="pull-quote">
        <p>"Buyers are becoming more proactive as bottom-tier prices consolidate in core Seoul areas. However, we expect to see further divergence between regions."</p>
        <cite>— Senior Analyst at KB Real Estate</cite>
      </div>

      <h2>Rising Volume and Market Sentiment</h2>
      <p>Trading volume in Seoul surpassed 4,000 units last month, reaching a two-year high. As volume often leads price movement, the current upward trend is likely to persist in the short term. The Market Buy-Sell Index has also crossed the 50-point mark, indicating increased interest from prospective buyers.</p>
    `
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
// 기사 모달 및 네비게이션
// ============================================================
function openArticle(id, pushState = true) {
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

  if (pushState) {
    history.pushState({ articleId: id }, title, `?article=${id}`);
  }

  $('#article-modal').showModal();
}

function closeArticle(popState = true) {
  $('#article-modal').close();
  if (popState && history.state && history.state.articleId) {
    history.back();
  }
}

$('#modal-close').addEventListener('click', () => closeArticle());

window.addEventListener('popstate', (e) => {
  if (e.state && e.state.articleId) {
    openArticle(e.state.articleId, false);
  } else {
    $('#article-modal').close();
  }
});

// 초기 URL 파라미터 체크
const urlParams = new URLSearchParams(window.location.search);
const articleId = urlParams.get('article');
if (articleId) {
  setTimeout(() => openArticle(Number(articleId), false), 100);
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
  } else {
    console.log("Firestore not initialized. Data not saved: ", reportData);
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
  } else {
    console.log("Firestore not initialized. Subscriber not saved: ", email);
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
