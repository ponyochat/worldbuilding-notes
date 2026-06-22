const STORAGE_KEY = "worldbuilding-note-v1";

const defaultData = {
  overview: {
    worldName: "N.E.B 국제특무청",
    genre: "여성향, 공식 국제 범죄 대응 기관, 다국적 능력자",
    confirmedSettings:
      "정식 명칭: N.E.B 국제특무청\n영문 약자: N.E.B = Nexus Enforcement Bureau\n통칭: 네브\n성격: 특정 국가에 속하지 않은 공식 국제 특수범죄 대응 기관\n담당 사건: 초능력 범죄, 국제 범죄, 괴이한 사건, 상류층 범죄\n구성원: 초능력자와 비능력자가 함께 범죄와 싸운다.\n최고 의사결정 기구: 상임이사회\n내부 대분류: 시그마, 델타, 세타, 이오타\n시그마: 최상위 전략 부서. 사건 배정, 작전 승인, 전체 지휘를 맡는다.\n델타: 현장 작전 부서. 추적, 체포, 진압, 구출을 맡는다.\n세타: 분석과 이상 사건 조사 부서. 정보, 연구, 정신계나 괴이 사건 해석을 맡는다.\n이오타: 종합 지원 부서. 의료, 회복 관리, 장비 보급, 차량 관리, 시설 운영, 현장 파견 지원을 맡는다.\n초반에는 너무 많은 캐릭터를 등장시키지 않는다.",
    pendingSettings:
      "세부 팀 이름\n초능력 규칙\n첫 사건 유형\n주요 범죄 조직",
    freeNotes:
      "아이디어를 여기에 편하게 적어둬.\n\n예:\n- 공식적이고 멋진 분위기\n- 국제기구 + 엘리트 수사기관 느낌\n- 초반 캐릭터는 3명 정도"
  },
  background: {
    headquarters:
      "N.E.B 워싱턴 본청\n\n위치:\n미국 워싱턴 D.C. 외곽, 포토맥 강 인근의 독립 보안 구역.\n\n겉모습:\n낮고 넓은 회색빛 복합 건물. 겉으로는 국제 행정기관이나 연구소처럼 보인다. 화려하진 않지만, 가까이 갈수록 아무나 들어갈 수 없는 기관이라는 압박감이 느껴진다.\n\n상징적 구조물:\n건물 중앙에는 검은 유리 타워인 블랙 코어 타워가 있다. 밖에서 보면 장식적인 중심 구조물처럼 보이지만, 실제로는 상임이사회가 사용하는 최고 보안 구역이다. N.E.B의 최종 의사결정과 비공개 회의가 이곳에서 이루어진다.\n\n층별 구조:\n\n1층-2층: 공식 출입 / 공동 행정 구역\n방문객 접수, 보안 검색, 국제 협력 창구, 공식 회의실이 있다. 시그마, 델타, 세타 모두 외부 기관과 만날 때 이용한다.\n\n3층-4층: 공동 업무 구역\n공용 회의실, 자료 열람실, 보고서 작성실, 휴게 라운지가 있다. 부서가 섞여 일하는 곳이라 정보가 오가고, 캐릭터끼리 마주치기 좋은 층이다.\n\n5층-6층: 세타 전용 구역\n정보 분석실, 사건 기록실, 능력자 데이터 분석실, 이상 사건 조사실이 있다. 조용하고 연구소 같은 분위기다.\n\n7층-8층: 델타 전용 구역\n작전 브리핑룸, 장비실, 무기 관리실, 대기실, 훈련 구역이 있다. 현장 요원들이 가장 자주 오가는 층이다.\n\n9층-10층: 시그마 전용 구역\n작전 승인실, 상황 통제실, 국제 공조 회의실, 지휘관 회의실이 있다. 권한이 높은 부서라 출입 절차가 가장 까다롭다.\n\n11층-12층: 공동 고위 회의 구역\n대형 작전 회의실, 국제 합동 브리핑룸, 비공개 협상실이 있다. 큰 사건이 터지면 시그마, 델타, 세타가 모두 이곳에 모인다.\n\n옥상 구역: 공동 제한 구역\n헬리패드, 통신 장비, 비상 대피 구역이 있다. 허가받은 인원만 쓸 수 있다.\n\n지하 1층: 공동 식당 / 휴게 구역\n직원 식당, 카페테리아, 작은 라운지가 있다. 부서 상관없이 모두 이용한다.\n\n지하 2층: 공동 의료 / 회복 구역\n응급 처치실, 회복실, 능력자 검사실이 있다. 전 부서 공용 의료 구역이다.\n\n지하 3층: 공동 차고 / 출동 구역\n공용 차량 차고, 장비 적재 구역, 비상 출입 통로가 있다. N.E.B 소속 부서들이 함께 이용한다.\n\n이오타 관리 구역:\n이오타는 지하 1층부터 지하 3층까지의 공동 지원 구역과 본청 전체 시설 운영을 관리한다. 의료, 회복 관리, 장비 보급, 차량 관리, 시설 운영, 현장 파견 지원을 맡으며, 전투 부서는 아니지만 작전 전후의 준비와 회복을 책임진다."
  },
  organization: [
    {
      id: "org-main",
      name: "N.E.B 국제특무청",
      parentId: "",
      description: "Nexus Enforcement Bureau. 전 세계 특수 범죄를 다루는 공식 국제 기관."
    },
    {
      id: "org-board",
      name: "상임이사회",
      parentId: "org-main",
      description: "N.E.B의 최고 의사결정 기구. 예산, 권한, 국제 협정, 최상위 작전 승인권을 가진다."
    },
    {
      id: "org-sigma",
      name: "시그마",
      parentId: "org-board",
      description: "N.E.B 내부 최상위 전략 부서. 사건 배정, 작전 승인, 전체 지휘를 맡는다."
    },
    {
      id: "org-delta",
      name: "델타",
      parentId: "org-board",
      description: "현장 작전 부서. 추적, 체포, 진압, 구출 같은 직접 작전을 맡는다."
    },
    {
      id: "org-theta",
      name: "세타",
      parentId: "org-board",
      description: "분석과 이상 사건 조사 부서. 정보, 연구, 정신계나 괴이 사건 해석을 맡는다."
    },
    {
      id: "org-iota",
      name: "이오타",
      parentId: "org-board",
      description: "N.E.B 본청의 종합 지원 부서. 의료, 회복 관리, 장비 보급, 차량 관리, 시설 운영, 현장 파견 지원을 맡는다."
    }
  ],
  characters: [
    {
      id: "char-leon-walker",
      name: "레온 워커",
      nation: "미국",
      age: "31세",
      affiliation: "N.E.B 델타",
      role: "팀장 / 현장 지휘관",
      powerStatus: "능력자",
      power: "바람을 다루는 능력. 거창하게 폭풍을 일으키기보다,\n전장의 흐름을 미세하게 비트는 쪽에 특화되어 있다.\n\n· 적의 발밑·중심을 흔들어 균형을 무너뜨린다.\n· 연기, 먼지, 최루·독가스를 흩어내 시야를 확보한다.\n· 팀원의 낙하를 받쳐 충격을 완화하거나,\n　자신의 이동 속도를 순간적으로 가속한다.\n· 총격전 중 탄도 주변 기류를 정리해 사격 흐름을 보조한다.\n\n화려한 광역기보다 \"딱 필요한 순간에, 딱 필요한 만큼\"을\n정확히 꽂아넣는 운용이 그의 스타일이다.\n그래서 바깥에서 보면 능력을 쓰는지조차 모를 때가 많다 —\n그냥 운 좋게 적이 비틀거리고, 운 좋게 바람이 연기를 걷어낸 것처럼 보인다.\n\n[ 콜사인의 유래 — 스콜 (Squall) ]\n갑자기 몰아치는 국지성 강풍이라는 뜻. 바람 능력자라서 붙은 것 같지만,\n진짜 이유는 전투 스타일이다. 평소엔 느긋하게 늘어져 있다가,\n작전에 균열이 생기는 순간 한 박자 만에 전장을 통째로 뒤집어놓는다.\n조용하다가, 갑자기 몰아친다.",
      callsign: "[콜사인의 유래 — 스콜 (Squall) ]\n갑자기 몰아치는 국지성 강풍이라는 뜻. 바람 능력자라서 붙은 것 같지만,\n진짜 이유는 전투 스타일이다. 평소엔 느긋하게 늘어져 있다가,\n작전에 균열이 생기는 순간 한 박자 만에 전장을 통째로 뒤집어놓는다.\n조용하다가, 갑자기 몰아친다.",
      personality: "겉은 나른하고 장난기 많은 사람. 농담을 툭툭 던지고,\n긴장된 자리에서도 분위기를 가볍게 푼다.\n그런데 그 가벼움은 계산된 가면에 가깝다.\n\n· 판단력이 날카롭다. 늘어진 표정 뒤에서 상황을 빠르게 읽고 있다.\n　가벼워 보이는 건, 그래야 남들이 긴장을 풀기 때문이다.\n\n· 위기에서 침착하다. 불리할수록 오히려 말투가 더 느려진다.\n　본인이 흔들리지 않아야 팀이 흔들리지 않는다는 걸 안다.\n\n· 사람을 몰아붙이지 않는다. 명령으로 끌고 가기보다,\n　자연스럽게 움직이게 만든다. 바람이 방향을 바꾸듯, 티 안 나게 판을 정리한다.\n\n· 화를 잘 안 낸다. 대신 진짜 화나면 말수가 줄어든다.\n　농담이 사라지고 입을 닫는 순간이 가장 위험한 신호다. 팀원들은 그걸 안다.\n\n· 책임감이 무겁지만, 절대 티 내지 않는다.\n　무게는 혼자 지고, 겉으론 다 별것 아닌 척한다.\n\n· 자기 몸을 위험에 넣는 걸 너무 쉽게 넘긴다.\n　\"내가 들어가는 게 빠르잖아\"라며 가장 위험한 자리를 자기가 맡는다.\n　본인은 합리적 판단이라고 하지만 —\n　사실은 다시는 누구도 잃고 싶지 않은 마음이 그렇게 나오는 거다.\n\n  ※ 핵심 모순 : 팀을 가장 아끼는 사람이, 정작 자기 목숨은 제일 가볍게 다룬다.",
      speech: "\"바람은 막는 게 아니야. 흐르게 두는 거지. 사람도 마찬가지고.\"\n\n별도의 특이 말투는 없다.\n평소엔 느슨하고 장난스럽게, 현장에선 짧고 정확하게.\n톤의 낙차가 이 캐릭터의 맛이다.\n\n[ 평소 — 긴장 풀어주는 모드 ]\n· \"벌써 긴장했어? 아직 시작도 안 했는데.\"\n· \"커피나 한 잔 하고 가자. 어차피 적은 안 도망가.\"\n· \"오늘 바람 방향 보니까… 비 오겠는데. 우산 챙겨.\"\n\n[ 현장 — 눈빛 가라앉은 모드 ]\n· \"셋. 둘. ……들어가.\"\n· \"왼쪽 무너졌어. 흐름 내가 잡을 테니까 너넨 직진.\"\n· \"내가 먼저 들어간다. 토 달지 말고.\"\n\n[ 진짜 화났을 때 — 말수 줄어듦 ]\n· \"…….\"\n· \"끝나고 얘기해.\"",
      appearance: "192cm. 크고, 늘씬하지만 힘이 실린 근육질.\n넓은 어깨와 긴 팔다리 덕에 전술복을 입어도 실루엣이 깔끔하게 떨어진다.\n\n· 머리 — 자연스러운 흑발. 살짝 긴 머리가 흐트러진, 나른한 분위기.\n· 눈   — 블루 눈동자. 끝이 살짝 내려간 눈매라 평소엔 졸린 듯 웃고 있다.\n　　　　 하지만 현장에 들어가는 순간 눈빛이 차갑게 가라앉아\n　　　　 전혀 다른 사람처럼 보인다.\n· 얼굴 — 선이 뚜렷하고 남성적이다. 높은 콧대, 선명한 턱선, 얇게 웃는 입매.\n　　　　 웃을 땐 장난스럽지만, 표정이 사라지면 꽤 위압감이 있다.\n· 피부 — 건강한 밝은 톤. 왼쪽 눈썹 근처에 아주 옅은 흉터 하나.\n· 복장 — 보통 검은 전술복 위에 검은 재킷.\n\n한마디로, 가만히 있어도 시선이 가는데 본인은 그걸 전혀 신경 안 쓰는 타입.\n그 무심함이 오히려 분위기를 만든다.",
      background: "미군 특수부대 출신. 국제 인질 구출 작전 중 능력자 범죄 조직과 충돌했고,\n그 작전에서 팀 대부분을 잃었다. 살아 돌아온 건 손에 꼽을 정도였다.\n\n그날 이후 그는 하나를 확신했다.\n국가 단위의 군대로는 특수범죄를 막을 수 없다.\n규정, 절차, 승인 — 그 사이에 사람이 죽는다.\n그래서 군복을 벗고 N.E.B에 합류했다.\n\n이 과거는 지금의 레온을 거의 전부 설명한다.\n\n· 형식적인 회의를 못 견디는 이유   → 그 절차들이 동료를 못 살렸으니까.\n· 가장 위험한 자리를 자기가 맡는 이유 → 다시는 누굴 먼저 보내고 싶지 않으니까.\n· 밀폐된 공간을 싫어하는 이유       → 작전 당시의 무언가가 거기 묶여 있다. (떡밥)\n· 늘 나른하게 웃는 이유             → 무게를 들키지 않으려고.",
      likes: "진한 블랙커피 (설탕도 우유도 없이)\n맥주 — 작전 끝나고 한 캔\n바람 부는 곳 — 옥상, 트인 곳, 창문 연 차 안.\n능력 때문이기도 하지만, 트인 공간에 있어야 마음이 놓인다.",
      dislikes: "무의미한 희생 — 가장 깊은 지점. 막을 수 있던 죽음을 절대 못 넘긴다.\n과하게 형식적인 회의\n밀폐된 공간 — 본능적으로 출구를 먼저 찾는다.",
      hobbiesTalents: "[ 취미 ]\n· 총기 정비 — 손이 심심할 때, 생각 정리할 때.\n· 오래된 락 음악 듣기\n· 야간 드라이브 — 창문 다 내리고, 혼자.\n· 바람 잘 드는 옥상에 멍하니 있기\n· 카드 섞기, 동전 굴리기 같은 손장난\n\n[ 특기 ]\n· 현장 지휘 — 누구도 못 따라오는 영역.\n· 날씨 맞히기 — 바람을 읽으니까. 농담처럼 던지는데 거의 틀리지 않는다.\n· 팀원 버릇 파악 — 누가 긴장하면 어디를 만지는지,\n　누가 무리하기 직전엔 어떤 표정인지 다 안다. 그래서 사고가 나기 전에 막는다.",
      habits: "· 생각할 때 손목 부분을 만진다. (무의식적 동작 — 과거와 연결 가능한 떡밥)\n· 불리한 상황일수록 말투가 더 느긋해진다. (위기의 바로미터)\n· 바람 방향을 확인하듯 고개를 살짝 기울인다.\n· 농담이 끊기고 입을 다물면 — 진짜 화났거나, 진짜 위험하다는 뜻.",
      extra: "평소엔 졸린 듯 웃는 나른한 바람잡이.\n하지만 작전에 금이 가는 순간, 한 박자 만에 전장을 뒤집는 돌풍이 된다.\n팀을 가장 아끼면서도 자기 목숨만은 가볍게 다루는, 잃어본 자의 리더."
    },
    {
      id: "char-gerard-winters",
      name: "제라드 윈터스",
      nation: "영국",
      age: "31세",
      affiliation: "N.E.B 델타",
      role: "방어 / 지원 요원",
      powerStatus: "능력자",
      power: "공기를 압축해 방어와 공격을 동시에 운용하는 능력.\n공격형 능력자들 사이에서, 팀을 '살려서 돌려보내는' 방향에 특화된 드문 타입이다.\n\n· 총격·파편·충격을 막아내는 투명한 공기 방벽 생성.\n· 압축한 공기를 공기탄처럼 쏘아 적을 밀어내거나 제압.\n· 방벽의 크기와 각도를 순간순간 조절해 팀의 동선과 엄폐를 만든다.\n\n화력으로 적을 부수기보다, 아군이 죽지 않을 '공간'을 만드는 능력.\n그래서 그가 서 있는 위치 자체가 곧 팀의 안전선이 된다.\n\n[ 콜사인의 유래 — 다즐링 (Darjeeling) ]\n제라드가 늘 진한 홍차를 끼고 사는 데서 시작된 장난스러운 별명.\n가벼운 농담에서 붙었지만, 묘하게 잘 어울려서 그대로 굳었다.\n거칠고 살벌한 작전 현장에서 '다즐링'이라는 호칭이 주는\n따뜻한 온도 차가, 사실 제라드라는 사람 자체와 닮았다.",
      callsign: "[콜사인의 유래 — 다즐링 (Darjeeling) ]\n제라드가 늘 진한 홍차를 끼고 사는 데서 시작된 장난스러운 별명.\n가벼운 농담에서 붙었지만, 묘하게 잘 어울려서 그대로 굳었다.\n거칠고 살벌한 작전 현장에서 '다즐링'이라는 호칭이 주는\n따뜻한 온도 차가, 사실 제라드라는 사람 자체와 닮았다.",
      personality: "델타에서 가장 따뜻한 사람처럼 보이지만, 동시에 팀을 가장 단단하게 붙잡는 요원.\n다정함과 단호함이 한 사람 안에 모순 없이 공존한다.\n\n· 다정하고 섬세하다. 팀원들의 컨디션과 표정 변화를 세심하게 살핀다.\n　누가 무너지기 직전인지, 누가 말 못 하고 삼키고 있는지 먼저 알아챈다.\n\n· 기댈 곳이 되어준다. 필요한 순간엔 말없이 곁을 내주고, 기대게 한다.\n　그에게 약한 모습을 보이는 게 부끄럽지 않게 만드는 사람이다.\n\n· 그러나 무조건 받아주는 타입은 아니다.\n　무리하거나, 선을 넘거나, 자기 몸을 함부로 던지는 행동에는 단호하다.\n　부드럽게 말하지만 물러서지 않는다. 그 단단함이 오히려 더 무겁다.\n\n· 감정에 휩쓸리지 않는다. 현장이 흔들릴수록 더 차분해진다.\n　그가 평정을 유지하는 것 자체가 팀의 심리적 방벽이 된다.\n\n  ※ 핵심 모순 : 모두를 붙잡아주는 사람인데, 정작 그를 붙잡아주는 사람은 없다.\n  　 다 받아주면서, 자기 무게는 혼자 짊어진다. 약한 모습을 잘 보이지 않는다.",
      speech: "\"끝내는 것보다 중요한 게 있어. 다 같이 살아 돌아오는 거.\"",
      appearance: "191cm. 단단하고 균형 잡힌 근육질. 큰 키와 반듯한 자세 덕에\n가만히 서 있기만 해도 신뢰감이 풍긴다.\n\n· 머리 — 애쉬 브라운 계열. 늘 깔끔하게 정돈되어 있다.\n· 눈   — 회색빛이 도는 푸른색. 눈매가 부드러워 첫인상이 차갑지 않다.\n　　　　 다만 집중할 때는 눈빛이 단단하게 가라앉는다.\n· 얼굴 — 깔끔하고 단정한 선. 높은 콧대, 차분한 입매, 부드러운 눈매.\n　　　　 화려하게 눈에 띄는 미남이라기보다,\n　　　　 볼수록 안정감과 깊이가 느껴지는 얼굴이다.\n· 피부 — 밝은 톤. 표정 변화가 섬세하다.\n· 습관 — 상대의 말을 들을 때 시선을 피하지 않고 차분히 바라본다.\n· 복장 — 전술복을 언제나 단정하게 갖춰 입는다.\n\n한마디로, 요란하지 않은데 사람을 안심시키는 인상.\n처음 보는 사람도 그의 앞에서는 이상하게 긴장이 풀린다.",
      background: "재난 대응 부대 출신. 대형 테러 사건에서 구조 임무를 맡았다.\n그러나 지휘 실패로 많은 민간인을 눈앞에서 잃는 현장을 겪었다.\n\n그 아수라장 속에서, 그는 공기 방벽 능력으로 일부 생존자들을 끝까지 지켜냈다.\n구하지 못한 사람과, 구해낸 사람. 그 둘 사이에서 그는 하나를 배웠다.\n\n　사건을 '끝내는 것'만큼, 사람을 '살아 돌아오게 하는 것'이 중요하다.\n\n이 믿음을 안고 N.E.B에 합류했다.\n이 과거는 지금의 제라드를 거의 전부 설명한다.\n\n· 팀원을 세심히 살피는 이유      → 놓친 사람을 또 만들고 싶지 않으니까.\n· 자기 몸 던지는 행동에 단호한 이유 → 살리는 게 목적이지, 희생이 목적이 아니니까.\n· 늘 단정하고 차분한 이유         → 자기가 무너지면 지킬 수 있는 게 없으니까.\n· 아픈 사람을 못 견디는 이유      → 그날의 현장이 거기 묶여 있다. (떡밥)",
      likes: "진한 홍차 — 콜사인의 유래이자, 그를 가장 잘 보여주는 디테일.\n비 오는 날 — 차분히 가라앉는 분위기를 좋아한다.\n독서 — 혼자 조용히 채워지는 시간.",
      dislikes: "단맛 — 의외의 취향. 홍차도 진하게, 설탕 없이.\n아픈 사람 — 단순한 호불호가 아니라, 과거와 닿아 있는 깊은 지점.",
      hobbiesTalents: "[ 취미 ]\n· 서점 구경 — 목적 없이 책 사이를 천천히 걷는 걸 좋아한다.\n\n[ 특기 ]\n· 요리 — 의외의 솜씨. 팀원들을 챙기는 그의 방식이기도 하다.\n　말로 위로하는 대신, 따뜻한 한 끼를 내미는 사람.",
      habits: "· 아침마다 조깅 후 홍차 한 잔을 마시는 루틴이 있다.\n　이 루틴이 흐트러질 때 = 그가 어딘가 무너지고 있다는 신호. (연출 포인트)\n· 상대의 말을 들을 때 시선을 피하지 않고 차분히 바라본다.\n· 집중하면 부드럽던 눈빛이 단단하게 가라앉는다.",
      extra: "거친 현장 한가운데서 가장 따뜻한 온도를 지닌 사람.\n하지만 그 다정함은 무르지 않다 — 누구도 자기를 함부로 버리지 못하게 막는,\n'살려서 돌려보내는' 일에 모든 걸 건 단단한 방패다.\n모두의 기댈 곳이면서, 정작 자신은 혼자 무게를 짊어지는 사람."
    },
    {
      id: "char-support",
      name: "테오 플린",
      nation: "미국",
      age: "26세",
      affiliation: "N.E.B 델타",
      role: "돌격 요원",
      powerStatus: "능력자",
      power: "불꽃을 몸 주변에 두르고 빠르게 돌진하는 능력.\n델타의 '뚫는' 역할 — 막힌 곳을 강제로 여는 창끝이다.\n\n· 순간적인 폭발력과 돌파력. 장애물·적 방어선을 정면으로 부순다.\n· 불꽃 추진을 이용한 고속 이동. 거리를 단숨에 좁힌다.\n· 정교한 운용보다 압도적인 한 방. '멈춰서 막는' 제라드의 정반대편.\n\n제라드가 방벽을 세우면, 테오는 그 벽을 부수는 쪽이다.\n화력과 속도가 곧 무기지만, 그만큼 한번 튀어나가면 멈추기 어렵다.\n\n[ 콜사인의 유래 — 럭키 (Lucky) ]\n장비를 잃어버리고 보고서를 빼먹고도, 실전에선 말도 안 되게 살아남고 이긴다.\n그래서 붙은 별명. 팀원들은 반쯤 놀리는 의미로 부른다.\n본인은 한사코 \"실력인데요?\"라고 우긴다.\n…그런데 그 우김에는 본인도 모르는 이유가 있다.",
      callsign: "[콜사인의 유래 — 럭키 (Lucky) ]\n장비를 잃어버리고 보고서를 빼먹고도, 실전에선 말도 안 되게 살아남고 이긴다.\n그래서 붙은 별명. 팀원들은 반쯤 놀리는 의미로 부른다.\n본인은 한사코 \"실력인데요?\"라고 우긴다.\n…그런데 그 우김에는 본인도 모르는 이유가 있다.",
      personality: "밝고 에너지가 넘친다. 긴장된 상황에서도 농담을 던져 분위기를 푼다.\n델타의 막내답게 팀원들에게 금방 다가가고, 친해지는 속도가 빠르다.\n\n· 겁이 없고 자신감이 넘친다. 가끔 앞뒤 계산 없이 먼저 튀어나간다.\n· 살짝 덤벙거린다. 장비를 흘리고, 서류를 빼먹는다. 본인은 늘 \"어? 어디 갔지\" 한다.\n· 막내라 팀의 분위기 메이커. 무거운 공기를 가장 먼저 깨는 사람이다.",
      speech: "\"거봐, 됐잖아? 이게 실력이지 운이 아니라니까.\"",
      appearance: "187cm. 탄탄하고 민첩한 근육질. 전체적으로 가볍고 빠르게 움직이는 인상.\n\n· 머리 — 밝은 갈색. 햇빛 받으면 붉은빛이 돈다.\n　　　　 늘 살짝 흐트러져 있어 정돈보다 생동감이 먼저 느껴진다.\n· 눈   — 금색 눈동자. 장난스럽게 반짝인다.\n　　　　 웃을 때 사람을 금방 끌어당기는 힘이 있다.\n· 얼굴 — 선명하고 시원한 인상. 소년 같은 활기와 남성적인 날카로움이 공존.\n　　　　 가만히 있어도 에너지가 넘쳐, 조용한 방에서도 가장 먼저 눈에 띈다.\n· 복장 — 전술복을 헐렁하게 걸친 느낌. 작은 물건을 엉뚱한 주머니에 넣고 찾는 일이 잦다.\n\n한마디로, 들어오는 순간 공간의 온도가 한 단계 올라가는 타입.",
      background: "능력자 훈련 프로그램에서 가장 어린 나이에 실전 등급을 받은 인재.\n\n기록상으로는 문제아였다.\n훈련 태도 불량, 보고서 누락, 장비 분실 — 지적은 끊이지 않았다.\n하지만 실전 모의전에서는 늘 압도적인 성적을 냈다.\n규율로는 낙제, 전장에서는 천재. 그 간극이 곧 테오라는 사람이다.\n\n한 국제 합동 훈련에서 N.E.B 델타가 그의 돌파 능력과 전투 감각을 눈여겨봤고,\n정식 선발 절차를 거쳐 델타에 합류했다.\n베테랑들 사이에 던져진 가장 어린 돌격수 — 그게 지금의 자리다.",
      likes: "매운 감자칩\n탄산음료\n액션 영화\n축구 경기\n불꽃놀이",
      dislikes: "개 — 의외의 약점. 겁 없는 돌격수가 개 앞에선 슬며시 뒤로 뺀다.\n잔소리\n가만히 대기하는 시간\n복잡한 서류 작업\n쓴 커피",
      hobbiesTalents: "[ 취미 ]\n· 액션 게임\n· 축구\n· 운동화 모으기\n\n[ 특기 ]\n· 근접 돌파\n· 순간 판단\n· 불꽃 추진을 이용한 고속 이동",
      habits: "· 흥분하면 말이 빨라진다.\n· 불꽃을 손끝에 작게 튕기며 논다. 심심할 때, 긴장될 때 무의식적으로.\n· 작은 물건을 엉뚱한 주머니에 넣고 한참 찾는다.",
      extra: ""
    },
    {
      id: "char-delta-mechanic",
      name: "렌 하르트",
      nation: "독일",
      age: "29세",
      affiliation: "N.E.B 델타",
      role: "기계 / 폭발물 전문가",
      powerStatus: "능력자",
      power: "기계 장치의 구조를 감각적으로 읽어내고, 손을 대거나 가까운 거리에서 조작하는 능력.\n\n· 잠금장치, 드론, 차량, 폭발 장치, 보안 장비 — 물리 장비 전반에 강하다.\n· 시스템 전체를 원격으로 해킹하는 타입은 아니다. 대신 '현장에 실재하는 장비'와\n　폭발물 처리에서는 델타에서 따라올 사람이 없다.\n· 장치의 구조가 그에게는 '보인다'. 어디를 끊고, 어디를 살려야 하는지를 감각으로 안다.\n\n전장을 부수는 능력이 아니라, 전장에 깔린 위험을 해제하는 능력.\n테오가 문을 부수고 들어간다면, 렌은 그 문에 뭐가 걸려 있는지 먼저 읽는 쪽이다.\n\n[ 콜사인의 유래 — 로미오 (Romeo) ]\n무전 알파벳의 R. 원래는 폭발물 처리 기록에 R 표시가 자주 붙던 데서 시작됐다.\nRemote, Rig, Release — 원격 장치와 폭발 장비를 다루는 임무가 많았기 때문.\n무전에서 R을 읽는 단어가 'Romeo'라 그대로 콜사인이 됐다.\n본인은 이 유래를 별로 설명해주지 않는다.",
      callsign: "[콜사인의 유래 — 로미오 (Romeo) ]\n무전 알파벳의 R. 원래는 폭발물 처리 기록에 R 표시가 자주 붙던 데서 시작됐다.\nRemote, Rig, Release — 원격 장치와 폭발 장비를 다루는 임무가 많았기 때문.\n무전에서 R을 읽는 단어가 'Romeo'라 그대로 콜사인이 됐다.\n본인은 이 유래를 별로 설명해주지 않는다.",
      personality: "냉정하고 말수가 적다. 필요한 말만 하고, 감정 표현이 거의 없다.\n\n· 작전 중 실수나 즉흥 행동을 싫어한다. 변수는 곧 위험이라 여긴다.\n· 판단이 빠르다. 위험한 장치를 다룰 때도 손이 흔들리지 않는다.\n· 다가가기 어려워 보이지만, 차가운 게 아니라 '말이 없는' 것에 가깝다.\n　한번 신뢰하면 묵묵히, 끝까지 등을 맡길 수 있는 사람.\n\n  ※ 핵심 모순 :\n  　 세상의 모든 기계를 읽어내는 사람이, 정작 가장 중요한 한 사람은 못 구했다.\n  　 그래서 즉흥과 불확실을 견디지 못한다 —\n  　 변수란, 동생을 앗아간 그 혼돈과 같은 얼굴을 하고 있으니까.\n  　 그가 통제에 집착하는 건 차가워서가 아니라, 다시는 늦고 싶지 않아서다.",
      speech: "\"움직이지 마. ……여기, 선 하나 잘못 건드리면 다 끝나니까.\"",
      appearance: "193cm. 마른 근육질, 긴 팔다리. 움직임이 조용하고 절제되어 있다.\n\n· 머리 — 플래티넘 블론드의 긴 머리. 평소엔 목 뒤에서 느슨하게 묶는다.\n· 눈   — 선명한 녹색. 차분하고 날카로운 시선.\n　　　　 말없이 바라보기만 해도 상대에게 긴장감을 준다.\n· 귀   — 오른쪽 귀에 작은 검은색 이어커프. 장식처럼 보이지만,\n　　　　 실제로는 통신 장비와 연결된 개인 장비다.\n· 손   — 손가락이 길고 손끝이 예민하다. 폭발물 해체·장비 조작 시 거의 흔들리지 않는다.\n· 얼굴 — 날카롭고 깨끗한 선. 높은 콧대, 얇은 입술, 감정이 잘 드러나지 않는 표정.\n　　　　 쉽게 다가가기 어려워 보인다.\n· 복장 — 전술복은 늘 완벽하게 정리되어 있다.\n　　　　 주머니엔 직접 개조한 작은 도구들을 넣고 다닌다.\n\n한마디로, 소리 없이 들어와 소리 없이 모든 걸 파악하는 사람.\n존재감이 약해서가 아니라, 너무 조용해서 오히려 신경 쓰이는 타입.",
      background: "독일 특수 기술부대 출신.\n\n과거 한 테러 사건에서 여동생을 잃었다.\n현장에는 복잡한 폭발 장치와 원격 제어 장비가 설치되어 있었다.\n렌은 그 장치의 구조를 전부 읽어냈다. 어디를 끊어야 하는지도 알았다.\n— 다만, 도착이 너무 늦었다.\n\n구조는 완벽하게 읽었는데, 정작 사람은 구하지 못했다.\n그 모순이 렌이라는 사람을 통째로 다시 만들었다.\n\n이후 같은 방식의 사건을 막기 위해 기계 장치와 폭발물에 집착하게 되었고,\nN.E.B에 합류했다.\n\n· 즉흥 행동을 못 견디는 이유   → 그날의 현장이 통제 불능이었으니까.\n· 손이 절대 안 떨리는 이유     → 한 번의 떨림이 누군가의 끝이 될 수 있으니까.\n· 말이 없는 이유               → 늦지 않으려면, 떠들 시간에 읽어야 하니까.",
      likes: "차가운 맥주 — 조용한 바에서 혼자, 천천히.\n작고 귀여운 것 — 차가운 외피와 가장 안 어울리는, 유일한 틈.\n본인은 절대 인정 안 하지만 시선이 먼저 간다.",
      dislikes: "먼지 — 결벽에 가까운 정돈. 어수선한 환경에서 집중이 흐트러진다.\n시끄러운 것 — 소음은 곧 신호를 가리는 방해다.",
      hobbiesTalents: "[ 취미 ]\n· 시계 분해와 조립 — 가장 작은 구조를 손끝으로 다스리는 시간.\n· 금속 퍼즐\n· 조용한 바에서 맥주 마시기\n\n[ 특기 ]\n· 청소 — 의외의 특기이자, 통제 욕구의 다른 얼굴.\n　모든 것이 제자리에 있어야 마음이 놓인다.",
      habits: "· 생각할 때 이어커프를 손끝으로 만진다.\n· 누군가 큰 소리로 말하면 눈썹이 살짝 찌푸려진다.",
      extra: ""
    },
    {
          "id": "char-doctor-sloan",
          "name": "닥터 슬론",
          "nation": "미국",
          "age": "30세",
          "affiliation": "N.E.B 이오타 의료지원팀",
          "role": "의무실 상주",
          "powerStatus": "비능력자",
          "power": "능력 없음. 비능력자.",
          "callsign": "콜사인 없음. 비전투 인력이라 콜사인 대신 '닥터'로 불린다.",
          "personality": "N.E.B 이오타 의료지원팀 소속으로, 의무실에 상주한다.\n\n· 작전에서 돌아온 요원들의 부상 처치와 회복 관리를 맡는다.\n· 출동 전 컨디션 점검, 복귀 가능 여부 판정도 그의 영역.\n　— 즉, \"이 상태로 또 나가도 되는지\"를 결정하는 사람이다.\n· 능력자 부상이 얽힌 특수 외상(에너지 잔재·능력 후유증 등)에도 대응한다.\n\n직접 싸우진 않지만, 무리하게 굴린 몸을 매번 도로 꿰매는 자리.\n현장의 끝에서 요원들을 받아내는, 보이지 않는 마지막 방어선.\n\n차분하고, 현실적이고, 침착하다. 어떤 상황에서도 목소리가 흔들리지 않는다.\n\n· 호들갑이 없다. 피를 보든 위급하든 손과 말이 일정하다.\n· 직설적이다. 예후를 미화하지 않는다. 나쁜 소식도 담담하게, 정확하게 전한다.\n· 환자를 어르고 달래기보다, 사실을 들이민다.\n　\"안 죽어요. 대신 두 주는 쉬어야 해요.\" 식의 건조한 화법.\n· 자기 몸 함부로 굴리는 환자를 제일 못 견딘다. 잔소리는 하지만 결국 끝까지 챙긴다.\n\n  ※ 침착함의 이면 :\n  　 그의 차분함은 타고난 게 아니라, 너무 많이 봐서 생긴 거다.\n  　 감정을 앞세우면 손이 떨리고, 손이 떨리면 사람이 죽는다.\n  　 그래서 먼저 가라앉히는 법을 익혔다 — 그 침착함은 실력이자, 거리두기이자, 갑옷이다.",
          "speech": "\"또 다쳐서 왔네요. ……앉으세요. 설교는 꿰매면서 할게요.\"\n\n· 차분하고 건조하다. 톤을 높이지 않는다.\n· 군더더기 없이 핵심부터. 의학적 사실을 돌리지 않고 그대로 말한다.\n· 은근히 시니컬한 유머. (\"살았네요. 축하해요. 다음엔 운 없을 수도 있고요.\")\n· 환자가 증상을 숨기거나 둘러대면, 한 박자 쉬고 정확히 짚어낸다.",
          "appearance": "189cm. 차분하고 깔끔한 인상.\n\n· 머리 — 단정한 다크 브라운. 가볍게 넘긴 스타일.\n· 눈   — 갈색. 시선이 조용하고 날카롭다.\n· 얼굴 — 곧은 콧대와 단정한 이목구비. 화려하기보다 신뢰감 있는 미남.\n· 분위기 — 늘 어딘가 피곤한 듯한데, 그게 오히려 색기처럼 보인다.\n· 복장 — 흰색 가운을 즐겨 입는다.\n· 손이 깨끗하고 움직임이 정확하다. 처치할 때 시선이 환자에게 고정된다.",
          "background": "응급/전장 의료 출신.\n민간 응급실 또는 분쟁지역 의료 현장에서 수많은 외상을 다뤘고,\n구한 사람만큼 잃은 사람도 봤다.\n\n그 경험이 그를 '이상'이 아니라 '현실'을 보는 의사로 만들었다.\n모두를 살릴 수 있다는 환상은 일찍 버렸다.\n대신, 눈앞의 한 사람을 확실하게 살리는 데 집중한다.\n\n이후 능력자 사건의 특수 외상이 늘면서 N.E.B 이오타에 합류했다.\n\n· 침착한 이유       → 흔들리면 사람이 죽는 걸 봐 왔으니까.\n· 현실적인 이유     → 다 못 구한다는 걸 이미 알고, 그래도 한 명은 구하려고.",
          "likes": "진한 커피\n조용한 시간",
          "dislikes": "증상을 숨기는 환자\n처치 끝나기도 전에 현장으로 튀어나가려는 사람",
          "hobbiesTalents": "[ 특기 ]\n· 외상 처치 / 빠른 트리아지 — 한눈에 부상 경중을 가린다.\n· 능력 후유증 대응 — 일반 의료로 안 잡히는 케이스를 다룬다.\n\n[ 취미 ]\n· 커피 내리기 (까다롭다)\n· 의학 저널·다큐 보기 — 쉬면서도 결국 일 근처를 맴돈다.",
          "habits": "· 대화 중 상대의 안색·자세를 무의식적으로 '스캔'한다. (직업병)\n· 설명할 때 펜이나 펜라이트를 손에서 굴린다.\n· \"괜찮아요\"라는 말을 안 믿는다. 늘 한 번 더 확인한다.",
          "extra": "무리해서 망가진 몸들을 매번 도로 꿰매는, 이오타의 차분한 의무관.\n능력은 없지만 흔들림 없는 손과 현실적인 눈으로 마지막 방어선을 지킨다.\n그 침착함은 타고난 게 아니라 너무 많이 봐서 생긴 것 — 실력이자, 갑옷이다."
    },
    {
          "id": "char-martin-holloway",
          "name": "마틴 홀로웨이",
          "nation": "미국",
          "age": "35세",
          "affiliation": "N.E.B 시그마",
          "role": "국장",
          "powerStatus": "능력자",
          "power": "상대의 정신에 명령을 각인해, 거부하기 어렵게 만드는 정신계 능력.\n\n· 한 마디로 '거스를 수 없는 명령'을 새기는 힘. 위력은 위험할 만큼 강하다.\n· 그런데 마틴은 이 능력을 거의 쓰지 않는다.\n　숨기는 게 아니라 — 쓸 필요가 없어서 안 쓰는 쪽에 가깝다.\n· 능력 대신 판단, 정보, 심리전, 그리고 대화만으로 상황을 정리하는 경우가 대부분이다.\n\n  ※ 여기서 마틴의 본질이 드러난다.\n  　 누구든 복종시킬 수 있는 사람이, 굳이 그러지 않는다.\n  　 강요한 복종보다, 스스로 따르게 만든 신뢰가 더 강하다는 걸 알기 때문이다.\n  　 — 그래서 그가 능력을 꺼내는 순간이 있다면, 그건 이미 모든 카드가\n  　 　 무너진 진짜 마지막이라는 뜻이다.",
          "callsign": "콜사인 없음. 시그마 요원들은 그를 '국장님'이라 부른다.",
          "personality": "고위험 사건의 작전 승인과 전략 지휘를 맡는 자리.\n\n· 델타·세타·이오타가 개별적으로 처리하기 어려운 사건을 '시그마 명의'로 재분류한다.\n· 투입 인원, 작전 목표, 체포/사살 기준, 외부 기관과의 협력 범위를 결정한다.\n· 평소엔 본청에서 전체 작전을 조율하지만, 사건 규모가 커지거나\n　현장 판단이 엇갈리면 직접 현장 지휘에 나선다.\n\n즉, 칼을 휘두르는 사람이 아니라 '어떤 칼을, 어디에, 어디까지' 쓸지를 정하는 사람.\n그의 결재 한 줄이 누군가의 생사와 작전의 향방을 가른다.\n\n뛰어난 두뇌와 지휘력을 지닌 인물. 직접 싸우기보다, 상황을 읽고 사람을 움직이는 데 능하다.\n\n· 항상 예의 바르고 사근사근하다. 누구에게나 존댓말을 쓴다.\n· 잘 웃고, 목소리를 높이는 일이 없다. 그런데 속을 알 수 없어 쉽게 가까워지기 어렵다.\n　부드러운 태도 뒤에 무슨 생각을 숨기고 있는지 도무지 읽히지 않는 타입.\n· 업무 판단은 놀라울 만큼 정확하다. 사람의 동기와 다음 수를 먼저 본다.\n· 시그마 안에서 그의 명령은 절대적이다.\n　— 단, 그건 능력 때문이 아니라 마틴을 향한 신뢰와 충성심 때문이다.\n\n  ※ 의외의 빈틈 :\n  　 큰 판단은 완벽한데, 사소한 일엔 은근히 덜렁댄다.\n  　 서류나 개인 물건을 두고 오고, 일정을 착각한다.\n  　 그래서 곁의 비서실장(에드리언)이 늘 챙겨준다.\n  　 이 빈틈이, 읽히지 않는 그를 유일하게 '사람'처럼 보이게 한다.\n\n  ※ 직접 현장에 나설 때 (서늘 모드) :\n  　 사근사근함은 그대로다. 오히려 더 조용하고 더 정중해진다. 톤은 끝까지 일정 — 안 높여서 더 무섭다.\n  　 입은 웃는데 눈에서만 웃음기가 빠진다.\n  　 말수가 줄고 문장이 짧아진다. 핵심만 건드린다.\n  　 평소의 덜렁댐이 일절 사라진다 = 위험 신호.\n  　 능력을 안 써도, 안 써서 더 두렵다 (쓸 수 있다는 걸 모두가 아니까).",
          "speech": "\"명령까지는… 굳이요. 부탁이면 충분하잖아요.\"\n\n· 누구에게나 존댓말. 부드럽고 정중하다.\n· 목소리를 높이지 않는다. 화가 났을 때조차 톤이 일정해서 오히려 더 서늘하다.\n· 부탁하듯 지시한다. \"~해주실래요?\" \"~부탁드려도 될까요?\"\n　그런데 그 부탁이 사실상 명령처럼 작동한다.\n· 웃으며 말하지만, 정작 핵심은 비워둔다. 상대가 스스로 채우게 만든다.",
          "appearance": "188cm. 마른 근육형 체형에 자세가 곧다.\n\n· 머리 — 짙은 밤색에 은빛이 살짝 섞임. 오른쪽 앞머리 한 가닥이 자주 이마로 떨어진다.\n· 눈   — 옅은 회갈색. 웃을 땐 부드럽지만, 오래 보면 차갑다.\n· 점   — 왼쪽 입가 아래에 작은 점.\n· 손   — 길고 마른 손가락. 지시를 내릴 때 손끝으로 책상이나 서류를 가볍게 두드린다.\n· 복장 — 주로 짙은 회색 정장, 검은 긴 코트, 어두운 와인색 넥타이.\n\n한마디로, 부드럽게 웃고 있는데 시선을 오래 두면 등이 서늘해지는 사람.",
          "background": "공식 기록상으로는 — 젊은 나이에 시그마 국장 자리에 오른 보기 드문 경력.\n그 외의 개인사는, 본청 안에서도 아는 사람이 거의 없다.\n\n그가 왜 그 강력한 능력을 봉인하다시피 안 쓰는지,\n무엇이 그를 '강요'가 아닌 '신뢰'를 택하는 사람으로 만들었는지 —\n마틴 본인은 결코 먼저 입에 올리지 않는다.\n\n  ※ 떡밥 (로플에서 풀어갈 여지) :\n  　· 한때 능력을 '썼던' 사건이 있었고, 그 결과가 그를 바꿔놓았을 가능성.\n  　· 복종시킨 누군가를 잃었거나, 복종이 부른 끔찍한 결과를 본 적이 있을 가능성.\n  　· 그래서 지금은 '스스로 따르는 사람'만 곁에 두려 한다는 해석.\n  　(아직 확정 아님. 방향을 정해 채워 넣을 수 있는 빈칸으로 남겨둠.)",
          "likes": "튀김우동\n녹차\n과자",
          "dislikes": "에드리언(비서실장)의 잔소리",
          "hobbiesTalents": "[ 특기 ]\n· 전략 지휘 — 판을 통째로 읽고 짠다.\n· 사람 읽기 — 동기, 약점, 다음 수를 먼저 본다.\n· 심리전 / 협상 — 능력 없이 말과 정보만으로 상황을 정리한다.\n· 정보 분석 — 흩어진 조각에서 그림을 먼저 본다.\n\n[ 취미 ]\n· 조용히 차 마시는 시간 (녹차 한 잔, 과자 한 조각)\n　→ 그가 유일하게 경계를 푸는 순간에 가깝다.",
          "habits": "· 지시를 내릴 때 손끝으로 책상이나 서류를 가볍게 두드린다.\n· 오른쪽 앞머리 한 가닥이 자주 이마로 흘러내린다.\n· 큰 판단은 정확한데, 사소한 일엔 덜렁댄다(물건·일정을 빠뜨림).\n· 웃는 낯으로 핵심을 비워두고, 상대가 먼저 말하게 둔다.",
          "extra": "누구든 복종시킬 수 있는 능력을 가졌지만, 굳이 신뢰를 택한 시그마의 국장.\n판단·정보·심리전·대화만으로 판을 정리하고, 능력은 진짜 마지막에만 꺼낸다.\n부드럽게 웃지만 속을 읽을 수 없고, 큰 판단은 완벽한데 사소한 건 덜렁대는 —\n서늘함과 다정함, 완벽과 빈틈이 한 사람 안에 공존하는 인물.\n\n· 마틴은 시그마 국장으로, 델타(레온·제라드·테오·렌)를 포함한 현장 팀들의 '위'에 있다.\n· 델타가 직접 처리하기 어려운 사건을 시그마로 재분류해 작전을 승인·지휘한다.\n· 현장의 레온(델타 팀장)에게 명령을 내리는 라인. 두 사람의 톤(느긋함 vs 부드러운 압박)이\n　대비되어, 지휘 계통 위에서 흥미로운 긴장을 만든다.\n· 비서실장 에드리언과는 '챙기는 사람-챙김받는 사람'의 고정된 케미가 있다.\n(필요 없으면 빼도 되는 보너스 메모)"
    },
    {
          "id": "char-adrian-vale",
          "name": "에드리언 베일",
          "nation": "미국",
          "age": "32세",
          "affiliation": "N.E.B 시그마",
          "role": "비서실장",
          "powerStatus": "비능력자",
          "power": "",
          "callsign": "",
          "personality": "마틴의 비서실장이자, 시그마 작전 조율의 핵심.\n\n· 마틴의 명령을 '실행 계획'으로 정리해 델타·세타에 전달한다.\n· 작전 중엔 통신망으로 현장 상황을 실시간 파악하고,\n　변수에 맞춰 지시를 조정해 각 부서에 내린다.\n· 협상이나 외부 기관 대응이 필요하면, 마틴을 대신해 실무 협상을 맡는다.\n\n능력자는 아니지만, 뛰어난 두뇌와 냉정한 판단력으로\n시그마의 작전이 흐트러지지 않게 잡아주는 사람.\n마틴이 '무엇을' 정하면, 에드리언이 '어떻게'를 만든다.\n\n냉정하고 차가운 천재형 인물. 감정 표현이 적다.\n\n· 말투가 날카롭고, 독설을 자주 한다.\n　상대가 누구든 비효율적이거나 무능하다고 판단하면 망설임 없이 지적한다.\n· 일 처리는 빈틈이 없다. 그가 짠 계획엔 변수 대비까지 들어 있다.\n· 겉으로는 무정해 보이지만 — 마틴에게만은 은근히 마음이 약하다.\n\n  ※ 마틴과의 관계 (핵심) :\n  　 마틴에게 절대적으로 충성한다. 그의 명령과 판단을 누구보다 정확히 이해한다.\n  　 다만 마틴이 사소한 실수를 하거나 허술한 모습을 보이면\n  　 차갑게 잔소리를 퍼붓는다. — 그러면서도 결국 전부 챙겨준다.\n  　 서류, 일정, 끼니까지. 모두에게 가차없는 천재의 유일한 빈틈이,\n  　 하필 자기가 모시는 사람이다.",
          "speech": "\"또 두고 오셨네요. ……제가 없으면 어쩌시려고요, 국장님.\"\n\n· 기본은 정중한 존댓말. 그런데 내용이 날카롭고 군더더기가 없다.\n· 무능·비효율 앞에서는 가차없이 독설. 돌려 말하지 않는다.\n· 마틴에게는 잔소리 톤이 된다 — 차갑게 쏘아붙이는데, 결국 챙기는 말.\n　(\"그러게 제가 뭐랬어요.\" / \"이번 한 번만이에요. 다음엔 모릅니다.\" …라며 또 챙긴다.)",
          "appearance": "깔끔하게 뒤로 넘긴 금발, 선명한 파란 눈을 가진 미남.\n전체적으로 차갑고 단정한 인상이 강하다.\n\n· 얼굴 — 날카로운 선. 표정 변화가 적어 쉽게 다가가기 어렵다.\n· 복장 — 늘 흐트러짐 없는 정장. 작은 구김이나 어긋난 넥타이도 그냥 넘기지 않는다.\n　자기 자신에게도, 곁의 마틴에게도 마찬가지다. (마틴 넥타이를 직접 고쳐주는 일이 잦다)\n\n한마디로, 빈틈을 못 견디는 사람. 그 결벽이 일에서도 외모에서도 드러난다.",
          "background": "원래 N.E.B 외부 협력기관의 정보 분석관이었다.\n\n능력자는 아니었지만, 사건 자료를 읽는 속도와 판단력이 압도적이었다.\n그 능력 덕에 여러 고위험 사건에 자문으로 투입됐다.\n\n그러던 한 비공개 작전에서 — 상부의 잘못된 판단으로 희생될 뻔했다.\n그때 작전 지휘를 통째로 뒤집어 그를 살려낸 사람이 마틴 홀로웨이였다.\n\n이후 에드리언은 마틴의 판단을 절대적으로 신뢰하게 되었고,\n시그마로 들어와 그의 비서실장이 되었다.\n\n· 무능·비효율을 못 견디는 이유 → 그게 한때 자기 목숨을 앗아갈 뻔했으니까.\n· 마틴에게 절대 충성하는 이유   → 상부가 버린 자기를, 마틴은 살려냈으니까.\n· 빈틈을 못 견디는 이유         → 빈틈 하나가 사람을 죽인다는 걸 직접 겪었으니까.",
          "likes": "마틴 보살피기\n와인\n샐러드",
          "dislikes": "마틴이 실수하는 것\n기름진 음식",
          "hobbiesTalents": "[ 특기 ]\n· 정보 분석 — 자료를 읽는 속도와 정확도가 압도적. 원래 그의 본업.\n· 작전 조율 — 명령을 실행 계획으로 번역하고, 변수에 맞춰 실시간 조정.\n· 실무 협상 — 마틴을 대신해 외부 기관을 상대한다. 냉정하게, 빈틈 없이.\n\n[ 취미 ]\n· 와인 한 잔 (조용히, 혼자)\n· 정리·정돈 — 흐트러진 걸 제자리에 두는 것 자체가 그에게는 휴식이다.",
          "habits": "· 자기 넥타이는 물론, 마틴의 어긋난 넥타이도 그냥 못 지나친다.\n· 마틴이 뭔가 빠뜨릴 때마다 한숨을 짧게 쉰 뒤, 말없이 챙긴다.\n· 잔소리는 차갑게 시작했다가, 끝은 결국 챙기는 말로 맺는다.",
          "extra": "모두에게 가차없는 시그마의 차가운 천재. 비능력자지만 두뇌와 판단력으로 작전을 지탱한다.\n한때 상부에 버려질 뻔한 자신을 마틴이 살려낸 뒤, 그에게 절대적으로 충성한다.\n누구에게도 곁을 안 주는 독설가지만 — 유일한 빈틈은, 하필 자기가 모시는 사람이다.\n\n· 마틴: 겉은 부드러운데 속이 서늘하다. 큰 판단은 완벽한데 사소한 건 덜렁댄다.\n· 에드리언: 겉은 차가운데 (마틴한테만) 속이 무르다. 사소한 것까지 빈틈없이 챙긴다.\n정확히 반대로 짜인 한 쌍. 마틴의 빈틈을 에드리언이 메우고,\n에드리언의 차가움을 마틴이 풀어준다. 둘이 붙으면 케미가 산다.\n(필요 없으면 빼도 되는 보너스 메모)"
    },
    {
          "id": "char-marcus-black",
          "name": "마커스 블랙",
          "nation": "",
          "age": "30세",
          "affiliation": "N.E.B 시그마",
          "role": "보좌관 / 전투담당",
          "powerStatus": "능력자",
          "power": "자신의 근육·뼈·피부의 밀도를 순간적으로 끌어올리는 능력.\n\n· 공격 시 — 주먹에 충격이 무겁게 실린다. 너클과 함께 쓰면\n　짧은 한 방만으로 콘크리트를 금가게 만든다.\n· 방어 시 — 몸이 강철처럼 단단해진다. 총격·타격을 몸으로 받아낸다.\n· 속도가 아니라 무게와 압박감으로 상대를 무너뜨리는 근접전 특화.\n\n화려한 기술이 아니라, '버티고 부순다'. 마틴 앞을 가로막는 벽이자,\n마틴의 명령이 떨어지면 가장 먼저 튀어나가는 주먹.\n\n[ 콜사인의 유래 — 나이트 (Knight) ]\n마틴의 명령을 말없이 따르고, 현장에서 그를 지키는 모습에서 붙은 콜네임.\n시그마 안에서 그는 '마틴의 검이자 방패' 같은 존재로 여겨진다.",
          "callsign": "나이트 (Knight) — 기사",
          "personality": "과묵하고 감정 표현이 적다. 필요한 말만 짧게 하고, 대부분을 행동으로 처리한다.\n\n· 마틴의 명령에는 절대적으로 따른다.\n　명령이 떨어지기 전까지는 움직이지 않지만,\n　한 번 움직이면 망설임 없이 상대를 제압한다.\n· 말수는 적어도 주변을 세심하게 살핀다.\n　마틴이나 시그마 요원이 위험해지기 '전에' 먼저 반응한다.\n· 직접 제압이 필요한 상황엔 가장 먼저 투입되는 사람.\n\n  ※ 의외의 면 :\n  　 파괴적인 능력과 위압적인 덩치를 가졌지만, 작은 화분을 기른다.\n  　 부수는 손으로 작은 생명을 돌본다 — 한 번도 자신이 받아본 적 없는\n  　 보살핌을, 말 없는 방식으로 흉내 내듯이.\n  　 이 조용한 다정함이, 무기였던 그를 '사람'으로 보이게 한다.",
          "speech": "\"……뒤는 제가 맡습니다. 가십시오.\"\n\n· 짧고 낮게. 한 문장도 길게 끌지 않는다.\n· 감정을 싣지 않지만, 무례하진 않다. 그냥 말이 적을 뿐이다.\n· 마틴에게는 \"예.\" \"알겠습니다.\" 같은 짧은 응답이 대부분.\n· 정말 중요한 말일수록 더 짧아진다. (\"……가십시오.\" 한 마디에 전부 담는다.)",
          "appearance": "194cm. 덩치 큰 근육질. 넓은 어깨, 두꺼운 팔, 단단한 목선 —\n가만히 서 있기만 해도 위압감이 있다.\n\n· 머리 — 짧게 자른 흑발.\n· 눈   — 깊은 검은색. 표정 변화가 거의 없어 무뚝뚝해 보인다.\n　　　　 다만 시선은 늘 차분하게 주변을 살핀다.\n\n한마디로, 말없이 서 있는데 공간의 무게를 바꾸는 사람.\n큰 덩치와 고요함이 합쳐져 묘한 안정감을 준다.",
          "background": "과거, 범죄 조직이 운영하던 불법 격투장에서 싸우던 능력자였다.\n\n아이언 펄스와 타고난 격투 실력 때문에,\n그는 오랫동안 조직의 '무기'처럼 이용당했다.\n사람이 아니라, 이기기 위한 도구로.\n\nN.E.B 작전 중, 마틴 홀로웨이는 그를 다르게 봤다.\n체포 대상이 아니라 — 구출 대상으로 판단했다.\n마틴은 작전 목표를 바꿔 그를 격투장에서 빼냈다.\n\n이후 마커스는 시그마에 들어와 마틴의 보좌관이 되었고,\n자신을 처음으로 '사람'으로 봐준 마틴에게 절대적인 충성을 바치게 되었다.\n\n· 명령 전까지 안 움직이는 이유 → 도구로 휘둘리던 시간을 두 번 살지 않으려고.\n　　이번엔 자기가 '선택해서' 따르는 거다.\n· 주변을 먼저 살피는 이유       → 지켜주는 사람이 없던 자신이, 이젠 지키는 쪽이니까.\n· 작은 화분을 기르는 이유       → 부수는 것밖에 몰랐던 손으로, 살리는 걸 배우는 중이라서.",
          "likes": "작은 화분\n산책",
          "dislikes": "도박",
          "hobbiesTalents": "[ 취미 ]\n· 화분 기르기 — 큰 손으로 조심스럽게. 의외로 잘 키운다.\n\n[ 특기 ]\n· 권투\n· 격투기 — 기술과 경험이 능력 못지않다. 능력 없이도 강하다.",
          "habits": "· 말없이 마틴과 위험 사이에 자기 몸을 끼워 넣는다. 거의 무의식적으로.\n· 대화 중에도 시선이 늘 출입구·주변을 한 번씩 훑는다.",
          "extra": "무게와 압박으로 부수는, 시그마의 검이자 방패. 과묵하고 명령에 절대 충실한 전투담당.\n한때 격투장의 '무기'로 이용당하다, 마틴이 사람으로 봐주고 빼낸 뒤 그의 기사가 되었다.\n부수는 손으로 작은 화분을 기르는 — 위압감 속에 조용한 다정함을 숨긴 남자.\n\n· 마틴(국장): 명령하고 판을 짠다.\n· 에드리언(비서실장): 명령을 계획으로 번역한다. 머리.\n· 마커스(전투담당): 명령을 몸으로 실행한다. 검이자 방패.\n세 사람의 공통점 — 모두 마틴이 '구해서' 곁에 둔 사람들이다.\n(에드리언은 버려질 뻔한 걸, 마커스는 격투장에서) 마틴이 능력(복종)이 아니라\n신뢰로 사람을 얻는다는 걸 가장 잘 보여주는 구조.\n에드리언(말)과 마커스(몸)는 정반대지만, 마틴을 챙긴다는 점에선 같다.\n(필요 없으면 빼도 되는 보너스 메모)"
    },
    {
          "id": "char-lily",
          "name": "릴리",
          "nation": "영국",
          "age": "19세",
          "affiliation": "N.E.B 시그마",
          "role": "이상대응관 / 막내 요원",
          "powerStatus": "능력자",
          "power": "몸 안에 정체를 알 수 없는 사역마를 품고 있으며, 필요할 때 그 존재를 해방해 싸운다.\n\n· 평소엔 사역마의 힘을 억누르고 있어 겁 많고 소심한 모습.\n· 해방하면 성숙한 여성의 모습으로 변하고, 성격까지 완전히 달라진다.\n· 해방 상태에선 사역마의 검은 그림자가 살아 움직이며 —\n　공격, 방어막, 구조물, 심지어 '능력의 잔재'까지 물어뜯어 삼킨다.\n· 먹어치운 힘은 잠시 그녀의 신체 능력과 재생력으로 전환된다.\n　→ 싸울수록 더 강해지는, 괴물 같은 전투 방식.\n\n  ※ '먹는다'는 게 핵심. 막을수록, 칠수록, 그녀는 그걸 삼켜 더 커진다.\n  　 정면으로 힘을 쏟아붓는 적일수록 오히려 그녀를 살찌운다.\n\n[ 사역마 ]\n인간의 형체가 거의 없는 거대한 검은 괴물.\n여러 개의 눈, 갈라진 입, 뼈처럼 마른 긴 팔.\n몸은 그림자와 진흙이 뒤섞인 듯 일렁인다.\n해방 시 발밑에 그 본체가 희미하게 따라붙는다.",
          "callsign": "릴리스 (Lilith)",
          "personality": "[ 평소 (억눌린 상태) ]\n· 얌전하고 겁이 많고 소심하다. 사람 많은 곳을 어려워한다.\n· 말을 걸면 당황하거나 눈을 피한다. 사회성이 부족해 팀에 녹아드는 데 시간이 걸린다.\n· 현장 경험이 부족해 보이지만 — 괴이하거나 설명하기 어려운 사건에 투입되는 전문 인력.\n\n[ 해방 (사역마를 풀었을 때) ]\n· 성격이 180도 바뀐다. 자신감이 넘치고 도발적이다.\n· 전투를 두려워하지 않는다. 상대를 내려다보는 여유가 있고, 위험 속에서도 웃는다.\n· 평소의 위축된 기색은 흔적도 없이 사라진다.\n\n  ※ 두 얼굴은 다른 사람이 아니다 :\n  　 억눌린 소녀는 '망가진 뒤의 그녀'이고,\n  　 해방된 여성은 '두려움을 벗은 그녀'다. 같은 상처의 양면.\n  　 그래서 해방 상태의 그 여유와 도발은, 평소엔 못 내는 목소리이기도 하다.\n\n  ※ 마틴과의 관계 (핵심) :\n  　 마틴을 절대적으로 신뢰한다. 그의 명령 없이는 사역마를 함부로 해방하지 않는다.\n  　 — 이건 단순한 복종이 아니다. 동의 없이 실험당하던 아이에게,\n  　 　 '언제 풀지를 내가, 믿는 사람의 말로만 정한다'는 건 통제권 그 자체다.\n  　 마틴의 명령은 그녀에겐 족쇄가 아니라, 처음으로 쥐어본 안전장치에 가깝다.",
          "speech": "[ 평소 ] 작고 더듬거린다. 말끝을 흐리고, 사과를 입에 달고 산다.\n　　　　 (\"어… 저, 그게….\" / \"죄송해요, 제가….\" / \"괜…괜찮아요.\")\n[ 해방 ] 낮고 여유롭다. 느릿하게 끌며 상대를 도발한다.\n　　　　 (\"그게 다야?\" / \"……도망치지 그랬어.\" / \"더 줘 봐. 아직 배고프거든.\")\n　　　　 같은 사람인데 목소리의 온도와 속도가 완전히 다르다.",
          "appearance": "[ 평소 모습 ]\n· 156cm 정도로 작고 체구가 가늘어 쉽게 위축돼 보인다. 어깨를 자주 움츠린다.\n· 연한 금발에 가까운 밝은 머리, 어깨 아래까지. 앞머리가 눈가를 살짝 가린다.\n· 흐린 회색빛 눈. 겁먹은 듯 자주 흔들린다.\n· 단정하지만 눈에 안 띄는 옷차림. 긴 소매·큰 가디건으로 몸을 숨기려는 인상.\n\n[ 해방 후 모습 ]\n· 20대 중후반의 성숙한 여성으로 변한다. 키가 커지고 체형이 길고 우아해진다.\n· 머리카락이 허리까지 내려오는 밝은 금발로 길어진다. 눈은 깊은 붉은색.\n· 표정은 여유롭고 도발적. 시선만으로 상대를 압박한다.\n· 검은 그림자가 드레스처럼 몸을 감싸고, 발밑엔 사역마 본체가 희미하게 따라붙는다.\n· 아름답지만 인간 같지 않은, 위험한 분위기.",
          "background": "몸 안의 사역마 때문에, 어린 시절부터 가족에게조차 두려움의 대상이었다.\n사역마가 한 번 폭주한 뒤 — 그녀는 '보호'라는 이름으로 연구기관에 넘겨졌다.\n\n그곳에서 그녀는 사람으로 대우받지 못했다.\n사역마를 꺼내기 위한 실험이 반복됐고, 실패할 때마다 몸과 정신만 망가졌다.\n결국 그녀는 스스로를 '괴물'이라 믿게 되었다.\n\nN.E.B가 연구기관을 급습했을 때, 현장의 사람들은 그녀를\n'제거해야 할 위험물'로 분류했다.\n하지만 마틴 홀로웨이만은 그 결정을 거부하고, 그녀를 직접 데리고 나왔다.\n\n그날 이후, 그녀에게 마틴은 목숨을 맡길 수 있는 유일한 사람이 되었다.\n시그마에 들어온 뒤에도, 마틴의 명령 없이는 사역마를 해방하지 않는다.\n\n· 큰 소리·갑작스러운 접촉을 못 견디는 이유 → 실험실의 기억이 거기 묶여 있다.\n· '괴물'이라는 말에 무너지는 이유          → 평생 그렇게 불려 왔고, 한때 믿어버렸으니까.\n· 마틴 명령에만 해방하는 이유              → 통제권을 처음으로 자기가 쥐었으니까.",
          "likes": "따뜻한 담요\n작은 인형\n달콤한 밀크티",
          "dislikes": "큰 소리\n갑작스러운 접촉\n사역마를 '괴물'이라 부르는 말",
          "hobbiesTalents": "[ 취미 ]\n· 작은 인형 모으기 — 조용히 늘어가는, 그녀만의 안전한 세계.\n· 그림 그리기 — 말로 못 하는 걸 종이에 풀어놓는 통로.\n\n[ 특기 ]\n· 괴이한 기척 감지 — 일반 능력자 사건을 넘는 '이상'을 먼저 느낀다. 이상대응관의 핵심.\n· 사역마 해방 — 그녀만이 할 수 있는, 가장 강력하고 가장 위험한 카드.",
          "habits": "[ 평소 ]\n· 긴장하면 가디건 소매 끝을 손으로 잡아당겨 손등을 덮는다.\n· 어깨를 움츠리고, 시선을 오래 마주치지 못한다.\n· 불안하면 작은 인형이나 옷자락을 만지작거린다.\n[ 해방 ]\n· 고개를 비스듬히 기울이고 상대를 위에서 내려다본다.\n· 위험할수록 더 느긋하게, 더 짙게 웃는다.",
          "extra": "평소엔 소매 끝으로 손등을 덮는 겁 많은 막내, 해방하면 적의 힘마저 삼키는 괴물.\n연구기관에서 '괴물'이라 불리며 망가졌다가, 마틴이 사람으로 데리고 나온 소녀.\n두 얼굴은 다른 존재가 아니라 — 망가진 그녀와, 두려움을 벗은 그녀.\n마틴의 명령에만 자신을 푸는 건, 처음으로 쥐어본 통제권이자 안전장치다.\n\n· 마틴이 '구해서' 곁에 둔 사람 중 하나. (에드리언·마커스와 같은 결)\n　그가 능력(복종)이 아니라 신뢰로 사람을 얻는다는 걸 가장 극단적으로 보여주는 케이스.\n· 가장 위험한 능력을 가졌는데, 그 방아쇠를 마틴에게 맡겨둔 막내.\n　— 마틴 입장에선 가장 강력한 카드이자, 가장 조심히 다뤄야 할 사람.\n· 마커스(말없이 지키는 방패)와는 의외로 통하는 데가 있다. 둘 다 말이 적고, 둘 다 한때 '무기' 취급을 받았으니까.\n(필요 없으면 빼도 되는 보너스 메모)"
    }
  ],
  cases: [
    {
      id: "case-first",
      title: "첫 사건 후보",
      location: "미정",
      crime: "초능력 범죄 또는 국제 범죄 후보.",
      characters: "초반 3인 팀",
      userRole: "아직 정하지 않음.",
      status: "미정",
      hooks: "이 사건이 N.E.B 전체 설정과 어떻게 이어지는지 정하기."
    }
  ]
};

let state = loadState();
let activeOrgId = state.organization[0]?.id || "";

const sections = document.querySelectorAll(".page-section");
const navItems = document.querySelectorAll(".nav-item");
const saveState = document.querySelector("#saveState");

const fields = {
  worldName: document.querySelector("#worldName"),
  genre: document.querySelector("#genre"),
  confirmedSettings: document.querySelector("#confirmedSettings"),
  pendingSettings: document.querySelector("#pendingSettings"),
  freeNotes: document.querySelector("#freeNotes")
};

const backgroundField = document.querySelector("#backgroundHeadquarters");

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return clone(defaultData);

  try {
    return migrateState({ ...clone(defaultData), ...JSON.parse(saved) });
  } catch {
    return clone(defaultData);
  }
}

function migrateState(data) {
  data.background = { ...clone(defaultData.background), ...(data.background || {}) };

  if (data.overview?.pendingSettings === "팀 이름\n유저의 입장\n초능력 규칙\n첫 사건") {
    data.overview.pendingSettings = defaultData.overview.pendingSettings;
  }

  const organization = Array.isArray(data.organization) ? data.organization : [];
  const defaultsById = Object.fromEntries(defaultData.organization.map((org) => [org.id, org]));

  ["org-main", "org-board", "org-sigma", "org-delta", "org-theta", "org-iota"].forEach((id) => {
    if (!organization.some((org) => org.id === id)) {
      organization.push(clone(defaultsById[id]));
    }
  });

  const main = organization.find((org) => org.id === "org-main");
  if (main && main.name === "공식 국제 범죄 대응 기관") {
    main.name = defaultsById["org-main"].name;
    main.description = defaultsById["org-main"].description;
  }

  ["org-sigma", "org-delta", "org-theta", "org-iota"].forEach((id) => {
    const org = organization.find((item) => item.id === id);
    if (org) {
      org.parentId = "org-board";
      if (defaultsById[id]) {
        org.name = defaultsById[id].name;
        org.description = defaultsById[id].description;
      }
    }
  });

  data.organization = organization.filter((org) => org.id !== "org-team");

  const characters = Array.isArray(data.characters) ? data.characters : [];
  const leonDefault = clone(defaultData.characters.find((character) => character.id === "char-leon-walker"));
  const gerardDefault = clone(defaultData.characters.find((character) => character.id === "char-gerard-winters"));
  const luckyDefault = clone(defaultData.characters.find((character) => character.id === "char-support"));
  const mechanicDefault = clone(defaultData.characters.find((character) => character.id === "char-delta-mechanic"));
  const doctorSloanDefault = clone(defaultData.characters.find((character) => character.id === "char-doctor-sloan"));
  const martinHollowayDefault = clone(defaultData.characters.find((character) => character.id === "char-martin-holloway"));
  const adrianValeDefault = clone(defaultData.characters.find((character) => character.id === "char-adrian-vale"));
  const marcusBlackDefault = clone(defaultData.characters.find((character) => character.id === "char-marcus-black"));
  const lilyDefault = clone(defaultData.characters.find((character) => character.id === "char-lily"));
  const oldLeaderIndex = characters.findIndex((character) => character.id === "char-leader");
  const oldFieldIndex = characters.findIndex((character) => character.id === "char-field");
  const leonIndex = characters.findIndex((character) => character.id === "char-leon-walker");
  const gerardIndex = characters.findIndex((character) => character.id === "char-gerard-winters");
  const luckyIndex = characters.findIndex((character) => character.id === "char-support");
  const mechanicIndex = characters.findIndex((character) => character.id === "char-delta-mechanic");
  const doctorSloanIndex = characters.findIndex((character) => character.id === "char-doctor-sloan");
  const martinHollowayIndex = characters.findIndex((character) => character.id === "char-martin-holloway");
  const adrianValeIndex = characters.findIndex((character) => character.id === "char-adrian-vale");
  const marcusBlackIndex = characters.findIndex((character) => character.id === "char-marcus-black");
  const lilyIndex = characters.findIndex((character) => character.id === "char-lily");

  if (leonIndex === -1) {
    if (oldLeaderIndex >= 0) characters[oldLeaderIndex] = leonDefault;
    else characters.unshift(leonDefault);
  } else {
    characters[leonIndex].power = leonDefault.power;
    characters[leonIndex].callsign = leonDefault.callsign;
    characters[leonIndex].personality = leonDefault.personality;
    characters[leonIndex].appearance = leonDefault.appearance;
    characters[leonIndex].background = leonDefault.background;
    characters[leonIndex].likes = leonDefault.likes;
    characters[leonIndex].dislikes = leonDefault.dislikes;
    characters[leonIndex].hobbiesTalents = leonDefault.hobbiesTalents;
    characters[leonIndex].habits = leonDefault.habits;
    characters[leonIndex].extra = leonDefault.extra;
  }

  if (gerardIndex === -1) {
    if (oldFieldIndex >= 0) characters[oldFieldIndex] = gerardDefault;
    else characters.push(gerardDefault);
  } else {
    characters[gerardIndex].power = gerardDefault.power;
    characters[gerardIndex].callsign = gerardDefault.callsign;
    characters[gerardIndex].personality = gerardDefault.personality;
    characters[gerardIndex].appearance = gerardDefault.appearance;
    characters[gerardIndex].background = gerardDefault.background;
    characters[gerardIndex].likes = gerardDefault.likes;
    characters[gerardIndex].dislikes = gerardDefault.dislikes;
    characters[gerardIndex].hobbiesTalents = gerardDefault.hobbiesTalents;
    characters[gerardIndex].habits = gerardDefault.habits;
    characters[gerardIndex].extra = gerardDefault.extra;
  }

  if (luckyIndex === -1) {
    characters.push(luckyDefault);
  } else {
    characters[luckyIndex] = luckyDefault;
  }

  if (mechanicIndex === -1) {
    characters.push(mechanicDefault);
  } else {
    characters[mechanicIndex] = mechanicDefault;
  }

  if (doctorSloanIndex === -1) {
    characters.push(doctorSloanDefault);
  } else {
    characters[doctorSloanIndex] = doctorSloanDefault;
  }

  if (martinHollowayIndex === -1) {
    characters.push(martinHollowayDefault);
  } else {
    characters[martinHollowayIndex] = martinHollowayDefault;
  }

  if (adrianValeIndex === -1) {
    characters.push(adrianValeDefault);
  } else {
    characters[adrianValeIndex] = adrianValeDefault;
  }

  if (marcusBlackIndex === -1) {
    characters.push(marcusBlackDefault);
  } else {
    characters[marcusBlackIndex] = marcusBlackDefault;
  }

  if (lilyIndex === -1) {
    characters.push(lilyDefault);
  } else {
    characters[lilyIndex] = lilyDefault;
  }

  data.characters = characters.filter((character) => character.id !== "char-leader" && character.id !== "char-field");
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  return data;
}

function persist() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  saveState.textContent = `자동 저장됨 ${new Date().toLocaleTimeString("ko-KR", {
    hour: "2-digit",
    minute: "2-digit"
  })}`;
  renderCounts();
}

function makeId(prefix) {
  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function switchSection(sectionId) {
  sections.forEach((section) => {
    section.classList.toggle("active", section.id === sectionId);
  });
  navItems.forEach((item) => {
    item.classList.toggle("active", item.dataset.section === sectionId);
  });
}

navItems.forEach((item) => {
  item.addEventListener("click", () => switchSection(item.dataset.section));
});

Object.entries(fields).forEach(([key, element]) => {
  element.value = state.overview[key] || "";
  element.addEventListener("input", () => {
    state.overview[key] = element.value;
    persist();
  });
});

if (backgroundField) {
  backgroundField.value = state.background.headquarters || "";
  backgroundField.addEventListener("input", () => {
    state.background.headquarters = backgroundField.value;
    persist();
  });
}

document.querySelectorAll(".page-save-button").forEach((button) => {
  button.addEventListener("click", () => saveSection(button.dataset.saveSection));
});

document.querySelector("#resetDataButton").addEventListener("click", () => {
  if (!confirm("지금 저장된 내용을 지우고 초기 예시로 되돌릴까?")) return;
  state = clone(defaultData);
  activeOrgId = state.organization[0]?.id || "";
  Object.entries(fields).forEach(([key, element]) => {
    element.value = state.overview[key] || "";
  });
  if (backgroundField) backgroundField.value = state.background.headquarters || "";
  renderAll();
  persist();
});

function renderCounts() {
  document.querySelector("#characterCount").textContent = state.characters.length;
  document.querySelector("#organizationCount").textContent = state.organization.length;
  document.querySelector("#caseCount").textContent = state.cases.length;
}

function renderOrganization() {
  const tree = document.querySelector("#orgTree");
  const parentSelect = document.querySelector("#orgParent");
  tree.innerHTML = "";
  parentSelect.innerHTML = `<option value="">상위 부서 없음</option>`;

  state.organization.forEach((org) => {
    if (org.id !== activeOrgId) {
      const option = document.createElement("option");
      option.value = org.id;
      option.textContent = org.name;
      parentSelect.append(option);
    }
  });

  const roots = state.organization.filter((org) => !org.parentId);
  if (!roots.length) {
    tree.innerHTML = `<div class="empty-state">아직 조직이 없어. 부서를 추가해줘.</div>`;
  } else {
    roots.forEach((org) => tree.append(createOrgNode(org, 0)));
  }

  fillOrgForm();
}

function createOrgNode(org, level) {
  const wrapper = document.createElement("div");
  wrapper.className = level > 0 ? "org-child" : "";

  const node = document.createElement("div");
  node.className = "org-node";
  node.innerHTML = `
    <button type="button">
      <strong>${escapeHtml(org.name)}</strong>
      <p>${escapeHtml(org.description || "설명 없음")}</p>
    </button>
  `;
  node.querySelector("button").addEventListener("click", () => {
    activeOrgId = org.id;
    fillOrgForm();
  });
  wrapper.append(node);

  state.organization
    .filter((child) => child.parentId === org.id)
    .forEach((child) => wrapper.append(createOrgNode(child, level + 1)));

  return wrapper;
}

function fillOrgForm() {
  const selected = state.organization.find((org) => org.id === activeOrgId) || state.organization[0];
  if (!selected) return;

  activeOrgId = selected.id;
  document.querySelector("#orgId").value = selected.id;
  document.querySelector("#orgName").value = selected.name;
  document.querySelector("#orgParent").value = selected.parentId || "";
  document.querySelector("#orgDescription").value = selected.description || "";
}

document.querySelector("#addOrgButton").addEventListener("click", () => {
  const org = {
    id: makeId("org"),
    name: "새 부서",
    parentId: activeOrgId || "",
    description: "역할을 적어줘."
  };
  state.organization.push(org);
  activeOrgId = org.id;
  renderOrganization();
  persist();
});

document.querySelector("#orgForm").addEventListener("submit", (event) => {
  event.preventDefault();
  saveOrgForm();
});

function saveOrgForm() {
  const org = state.organization.find((item) => item.id === document.querySelector("#orgId").value);
  if (!org) return;

  org.name = document.querySelector("#orgName").value.trim() || "이름 없음";
  org.parentId = document.querySelector("#orgParent").value;
  org.description = document.querySelector("#orgDescription").value.trim();
  renderOrganization();
  persist();
}

document.querySelector("#deleteOrgButton").addEventListener("click", () => {
  if (state.organization.length <= 1) {
    alert("조직은 최소 1개는 있어야 해.");
    return;
  }
  if (!confirm("이 부서를 삭제할까? 하위 부서는 상위 부서가 없어져.")) return;

  const deletedId = activeOrgId;
  state.organization = state.organization
    .filter((org) => org.id !== deletedId)
    .map((org) => (org.parentId === deletedId ? { ...org, parentId: "" } : org));
  activeOrgId = state.organization[0]?.id || "";
  renderOrganization();
  persist();
});

const characterDialog = document.querySelector("#characterDialog");
const characterForm = document.querySelector("#characterForm");

document.querySelector("#addCharacterButton").addEventListener("click", () => {
  fillCharacterForm({
    id: "",
    name: "",
    nation: "",
    age: "",
    affiliation: "",
    role: "",
    powerStatus: "",
    power: "",
    callsign: "",
    personality: "",
    speech: "",
    appearance: "",
    background: "",
    likes: "",
    dislikes: "",
    hobbiesTalents: "",
    habits: "",
    extra: ""
  });
  openModal(characterDialog);
});

document.querySelector("#closeCharacterDialog").addEventListener("click", () => closeModal(characterDialog));
document.querySelector("#characterSearch").addEventListener("input", renderCharacters);

function renderCharacters() {
  const grid = document.querySelector("#characterGrid");
  const query = document.querySelector("#characterSearch").value.trim().toLowerCase();
  const characters = state.characters.filter((character) =>
    [character.name, character.nation, character.role]
      .join(" ")
      .toLowerCase()
      .includes(query)
  );

  grid.innerHTML = "";
  if (!characters.length) {
    grid.innerHTML = `<div class="empty-state">조건에 맞는 캐릭터가 없어.</div>`;
    return;
  }

  characters.forEach((character) => {
    const card = document.createElement("article");
    card.className = "character-card";
    card.innerHTML = `
      <button type="button">
        <h3>${escapeHtml(character.name || "이름 없음")}</h3>
        <p class="meta-text">${escapeHtml(character.role || "직책 미정")} · ${escapeHtml(character.powerStatus || "능력 여부 미정")}</p>
        <p class="meta-text">${escapeHtml(firstLine(character.callsign) || "콜사인 미정")}</p>
        <p class="meta-text">${escapeHtml(character.personality || "성격 미정")}</p>
      </button>
    `;
    card.querySelector("button").addEventListener("click", () => {
      fillCharacterForm(character);
      openModal(characterDialog);
    });
    grid.append(card);
  });
}

function fillCharacterForm(character) {
  setValue("#characterId", character.id);
  setValue("#characterName", character.name);
  setValue("#characterNation", character.nation);
  setValue("#characterAge", character.age);
  setValue("#characterAffiliation", character.affiliation);
  setValue("#characterRole", character.role);
  setValue("#characterPowerStatus", character.powerStatus);
  setValue("#characterPower", character.power);
  setValue("#characterCallsign", character.callsign);
  setValue("#characterPersonality", character.personality);
  setValue("#characterSpeech", character.speech);
  setValue("#characterAppearance", character.appearance);
  setValue("#characterBackground", character.background);
  setValue("#characterLikes", character.likes);
  setValue("#characterDislikes", character.dislikes);
  setValue("#characterHobbiesTalents", character.hobbiesTalents);
  setValue("#characterHabits", character.habits);
  setValue("#characterExtra", character.extra);
}

characterForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const id = document.querySelector("#characterId").value || makeId("char");
  const character = {
    id,
    name: getValue("#characterName") || "이름 없음",
    nation: getValue("#characterNation"),
    age: getValue("#characterAge"),
    affiliation: getValue("#characterAffiliation"),
    role: getValue("#characterRole"),
    powerStatus: getValue("#characterPowerStatus"),
    power: getValue("#characterPower"),
    callsign: getValue("#characterCallsign"),
    personality: getValue("#characterPersonality"),
    speech: getValue("#characterSpeech"),
    appearance: getValue("#characterAppearance"),
    background: getValue("#characterBackground"),
    likes: getValue("#characterLikes"),
    dislikes: getValue("#characterDislikes"),
    hobbiesTalents: getValue("#characterHobbiesTalents"),
    habits: getValue("#characterHabits"),
    extra: getValue("#characterExtra")
  };

  const index = state.characters.findIndex((item) => item.id === id);
  if (index >= 0) state.characters[index] = character;
  else state.characters.push(character);

  closeModal(characterDialog);
  renderCharacters();
  persist();
});

document.querySelector("#deleteCharacterButton").addEventListener("click", () => {
  const id = document.querySelector("#characterId").value;
  if (!id) {
    closeModal(characterDialog);
    return;
  }
  if (!confirm("이 캐릭터를 삭제할까?")) return;
  state.characters = state.characters.filter((character) => character.id !== id);
  closeModal(characterDialog);
  renderCharacters();
  persist();
});

const caseDialog = document.querySelector("#caseDialog");
const caseForm = document.querySelector("#caseForm");

document.querySelector("#addCaseButton").addEventListener("click", () => {
  fillCaseForm({
    id: "",
    title: "",
    location: "",
    crime: "",
    characters: "",
    userRole: "",
    status: "",
    hooks: ""
  });
  openModal(caseDialog);
});

document.querySelector("#closeCaseDialog").addEventListener("click", () => closeModal(caseDialog));

function renderCases() {
  const list = document.querySelector("#caseList");
  list.innerHTML = "";

  if (!state.cases.length) {
    list.innerHTML = `<div class="empty-state">아직 사건 기록이 없어.</div>`;
    return;
  }

  state.cases.forEach((item) => {
    const card = document.createElement("article");
    card.className = "case-card";
    card.innerHTML = `
      <button type="button">
        <h3>${escapeHtml(item.title || "사건명 없음")}</h3>
        <p class="meta-text">${escapeHtml(item.location || "장소 미정")} · ${escapeHtml(item.status || "상태 미정")}</p>
        <p class="meta-text">${escapeHtml(item.crime || "관련 범죄 미정")}</p>
      </button>
    `;
    card.querySelector("button").addEventListener("click", () => {
      fillCaseForm(item);
      openModal(caseDialog);
    });
    list.append(card);
  });
}

function fillCaseForm(item) {
  setValue("#caseId", item.id);
  setValue("#caseTitle", item.title);
  setValue("#caseLocation", item.location);
  setValue("#caseCrime", item.crime);
  setValue("#caseCharacters", item.characters);
  setValue("#caseUserRole", item.userRole);
  setValue("#caseStatus", item.status);
  setValue("#caseHooks", item.hooks);
}

caseForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const id = document.querySelector("#caseId").value || makeId("case");
  const item = {
    id,
    title: getValue("#caseTitle") || "사건명 없음",
    location: getValue("#caseLocation"),
    crime: getValue("#caseCrime"),
    characters: getValue("#caseCharacters"),
    userRole: getValue("#caseUserRole"),
    status: getValue("#caseStatus"),
    hooks: getValue("#caseHooks")
  };

  const index = state.cases.findIndex((caseItem) => caseItem.id === id);
  if (index >= 0) state.cases[index] = item;
  else state.cases.push(item);

  closeModal(caseDialog);
  renderCases();
  persist();
});

document.querySelector("#deleteCaseButton").addEventListener("click", () => {
  const id = document.querySelector("#caseId").value;
  if (!id) {
    closeModal(caseDialog);
    return;
  }
  if (!confirm("이 사건을 삭제할까?")) return;
  state.cases = state.cases.filter((item) => item.id !== id);
  closeModal(caseDialog);
  renderCases();
  persist();
});

function openModal(dialog) {
  try {
    if (typeof dialog.showModal === "function") {
      dialog.showModal();
    } else {
      dialog.setAttribute("open", "");
    }
  } catch {
    dialog.setAttribute("open", "");
  }

  dialog.classList.add("dialog-visible");
  dialog.scrollTop = 0;
}

function closeModal(dialog) {
  dialog.classList.remove("dialog-visible");
  if (typeof dialog.close === "function" && dialog.open) {
    dialog.close();
  } else {
    dialog.removeAttribute("open");
  }
}

function firstLine(value) {
  return String(value || "")
    .split("\n")
    .map((line) => line.trim())
    .find(Boolean) || "";
}

function setValue(selector, value) {
  const element = document.querySelector(selector);
  if (element) element.value = value || "";
}

function getValue(selector) {
  const element = document.querySelector(selector);
  return element ? element.value.trim() : "";
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderAll() {
  renderCounts();
  renderOrganization();
  renderCharacters();
  renderCases();
}

function saveSection(sectionId) {
  if (sectionId === "organization") {
    saveOrgForm();
    return;
  }

  persist();
  saveState.textContent = "저장됨";
}

renderAll();
