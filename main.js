// ============================================================
// 부동산인사이트 — 기사 데이터
// 새 기사를 추가하려면 articles 배열 맨 앞에 객체 하나 추가하세요.
// ============================================================
const articles = [
  {
    id: 10,
    category: '정책',
    title: '스트레스 DSR 3단계, 대출 시장의 지각변동이 시작된다',
    summary: '가계부채 총량 관리의 마지막 카드가 전면 시행됐다. 스트레스 DSR 3단계는 단순한 대출 규제가 아니다 — 수요 구조 자체를 바꾸는 부동산 시장의 패러다임 전환점이다.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80',
    author: '부동산인사이트 편집부',
    date: '2026-04-12',
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
          <div class="data-item">
            <span class="num">8,000만</span>
            <div class="label">3.3㎡당 평균가</div>
          </div>
        </div>
      </div>

      <h2>강남 재건축의 상징: 압구정 현대와 대치 은마</h2>
      <p>부동산 시장에서 '입지'는 모든 가치의 출발점입니다. 압구정동과 대치동은 한국 부동산 역사에서 이 명제를 가장 극명하게 증명해온 지역이다. 특히 서울시의 '신속통합기획' 도입 이후, 압구정 현대아파트 단지들은 과거의 지지부진했던 흐름을 깨고 가속도를 내고 있습니다.</p>
      <p>압구정 3구역은 최근 시공사 선정 과정에서 국내 주요 건설사들의 치열한 각축장이 되고 있습니다. 한강변 조망권을 극대화한 설계와 커뮤니티 시설의 고급화는 단순한 아파트 재건축을 넘어 '한국판 맨해튼'을 조성하려는 야심찬 계획으로 평가받습니다. 대치 은마아파트 역시 최근 49층 설계안이 통과되면서 수십 년간의 숙원 사업이 본궤도에 올랐습니다.</p>

      <table class="comparison-table">
        <thead>
          <tr>
            <th>단지명</th>
            <th>준공년도</th>
            <th>재건축 단계</th>
            <th>최근 실거래가(84㎡)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="highlight">압구정 현대 3구역</td>
            <td>1982~84</td>
            <td>조합설립인가</td>
            <td>약 58억 (2026.03)</td>
          </tr>
          <tr>
            <td class="highlight">대치 은마아파트</td>
            <td>1979</td>
            <td>사업시행인가 준비</td>
            <td>약 31억 (2026.02)</td>
          </tr>
          <tr>
            <td class="highlight">반포 래미안 원베일리</td>
            <td>2023</td>
            <td>신축 완료</td>
            <td>약 45억 (비교군)</td>
          </tr>
        </tbody>
      </table>

      <div class="pull-quote">
        <p>"압구정 재건축은 단순한 주거지 공급이 아닙니다. 서울의 도시 경쟁력을 결정짓는 한강변 랜드마크 경쟁의 정점에 있습니다."</p>
        <cite>— 서울시 도시계획위원회 자문위원 인터뷰</cite>
      </div>

      <h2>리스크 요인: 분담금과 재초환의 압박</h2>
      <p>장밋빛 전망에도 불구하고 현실적인 장애물은 여전합니다. 첫째는 공사비 급등입니다. 원자재 가격과 인건비 상승으로 인해 조합원 1인당 추가 분담금이 수억 원에서 많게는 십수억 원에 달할 것으로 예상됩니다. 이는 고령의 조합원들이 사업 진행에 반대하는 주요 원인이 되고 있습니다.</p>
      <p>둘째는 '재건축 초과이익 환수제(재초환)'입니다. 정부가 부과 기준을 일부 완화했음에도 불구하고, 지가가 급등한 강남 지역의 경우 환수 금액이 여전히 상당한 수준입니다. 이는 최종 수익성에 큰 변수로 작용하며 매수 심리를 억제하는 요인이 됩니다.</p>

      <h2>향후 시장 전망</h2>
      <p>압구정·대치 지역은 대출 규제의 영향력이 상대적으로 적은 현금 자산가들의 시장입니다. 따라서 스트레스 DSR 등의 규제보다는 재건축 사업의 진행 속도와 정부의 정비사업 완화 기조에 더 민감하게 반응할 것으로 보입니다. 중장기적으로는 한강변 초고층 아파트들이 속속 들어서며 강남 내에서도 입지의 양극화가 더욱 심화될 것으로 전망됩니다.</p>

      <div class="source-info" style="font-size: 0.8rem; color: #888; border-top: 1px solid #eee; margin-top: 40px; padding-top: 20px;">
        <strong>참고 및 출처:</strong><br>
        • 서울시 신속통합기획 가이드라인 (2025)<br>
        • 국토교통부 실거래가 공개시스템<br>
        • 정비사업 정보몽땅 (클린업시스템) 통계<br>
        • 한국부동산원 주간 아파트 가격동향
      </div>
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
      <p>분당, 일산, 평촌, 산본, 중동으로 구성된 1기 신도시는 조성된 지 30년을 넘기며 기반시설 노후화 문제에 직면했습니다. 정부는 '노후계획도시 정비 및 지원에 관한 특별법'을 통해 용적률 상향, 안전진단 면제 등의 파격적인 인센티브를 제공하며 정비사업의 물꼬를 텄습니다.</p>
      <p>선도지구는 이러한 거대 프로젝트의 첫 단추입니다. 선정된 단지들은 정부의 집중적인 행정 지원을 받아 가장 먼저 재건축을 완료하게 됩니다. 이는 단순한 아파트 신축을 넘어 도시 전체의 기능을 재편하는 '콤팩트 시티' 조성의 일환으로 추진되고 있습니다.</p>

      <div class="city-comparison">
        <div class="city-card bundang">
          <h4>🔵 분당 (성남시): '제2의 강남'으로의 도약</h4>
          <ul>
            <li>판교 IT 밸리 배후 주거 수요의 결합</li>
            <li>신분당선·GTX-A 등 최강의 교통망</li>
            <li>평균 15억 원대의 높은 시세로 사업성 확보</li>
            <li>특별법 적용 시 용적률 최대 450% 기대</li>
          </ul>
        </div>
        <div class="city-card ilsan">
          <h4>🟠 일산 (고양시): '쾌적한 자족도시'로의 변신</h4>
          <ul>
            <li>GTX-A 전면 개통에 따른 강남 접근성 혁명</li>
            <li>방송영상밸리·일산테크노밸리 등 자족 기능 강화</li>
            <li>상대적으로 낮은 용적률로 쾌적한 주거환경 유지</li>
            <li>합리적인 투자 금액으로 실수요 유입 기대</li>
          </ul>
        </div>
      </div>

      <h2>사업성의 핵심 변수: 공사비와 기부채납</h2>
      <p>성남시와 고양시가 발표한 기본계획안에 따르면, 용적률 상향의 대가로 상당 부분의 '공공기여(기부채납)'가 요구됩니다. 공공기여 비율에 따라 조합원의 추가 분담금이 크게 달라지기 때문에, 향후 주민 동의 과정에서 갈등 요소가 될 가능성이 큽니다.</p>
      <p>또한 대규모 이주 수요 관리도 숙제입니다. 5개 신도시 합산 약 30만 가구에 달하는 물량이 순차적으로 이주해야 하는데, 이 과정에서 인근 전세 시장의 불안을 초래할 수 있다는 우려가 제기됩니다. 국토교통부는 지자체와 협력하여 이주 단지를 선제적으로 확보하겠다는 계획이지만, 현장에서는 보다 구체적인 대책을 요구하고 있습니다.</p>

      <div class="pull-quote">
        <p>"1기 신도시 재정비는 한국 도시 계획의 패러다임을 바꾸는 실험입니다. 사업성 위주의 재건축을 넘어 지속 가능한 도시 재생의 모델이 되어야 합니다."</p>
        <cite>— 국토연구원 주택금융 연구위원</cite>
      </div>

      <h2>투자자를 위한 최종 조언</h2>
      <p>현재 1기 신도시 시장은 선도지구 발표 이후 기대감이 선반영되어 호가가 다소 높게 형성되어 있습니다. 실질적인 수익성을 따지기 위해서는 향후 발표될 구체적인 분담금 규모와 이주 일정을 꼼꼼히 살펴봐야 합니다. 특히 분당은 자산 가치 보전 측면에서, 일산은 주거 환경 개선과 가성비 측면에서 접근하는 전략이 유효합니다.</p>

      <div class="source-info" style="font-size: 0.8rem; color: #888; border-top: 1px solid #eee; margin-top: 40px; padding-top: 20px;">
        <strong>참고 및 출처:</strong><br>
        • 국토교통부 노후계획도시 정비 기본방침 (2025)<br>
        • 성남시/고양시 노후계획도시 정비 기본계획안<br>
        • 경기연구원 1기 신도시 재건축 수요 분석 보고서<br>
        • GTX-A/C 노선 추진 현황 및 개통 일정표
      </div>
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
  
  const content = a.bodyHtml || a.body.map(p => `<p>${p}</p>`).join('');

  $('#article-content').innerHTML = `
    <p class="category">${a.category}</p>
    <h1>${a.title}</h1>
    <p class="meta">${a.author} · ${formatDate(a.date)} · 조회수 ${(Math.random() * 9000 + 1000 | 0).toLocaleString()}</p>
    <div class="thumb"><img src="${a.image}" alt="${a.title}" /></div>
    <p class="lead">${a.summary}</p>
    <div class="article-body-content">
      ${content}
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
