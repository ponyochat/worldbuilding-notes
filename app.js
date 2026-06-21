const STORAGE_KEY = "worldbuilding-note-v1";

const defaultData = {
  overview: {
    worldName: "N.E.B 국제특무청",
    genre: "여성향, 공식 국제 범죄 대응 기관, 다국적 능력자",
    confirmedSettings:
      "정식 명칭: N.E.B 국제특무청\n영문 약자: N.E.B = Nexus Enforcement Bureau\n통칭: 네브\n성격: 특정 국가에 속하지 않은 공식 국제 특수범죄 대응 기관\n담당 사건: 초능력 범죄, 국제 범죄, 괴이한 사건, 상류층 범죄\n구성원: 초능력자와 비능력자가 함께 범죄와 싸운다.\n최고 의사결정 기구: 상임이사회\n내부 대분류: 시그마, 델타, 세타\n시그마: 최상위 전략 부서. 사건 배정, 작전 승인, 전체 지휘를 맡는다.\n델타: 현장 작전 부서. 추적, 체포, 진압, 구출을 맡는다.\n세타: 분석과 이상 사건 조사 부서. 정보, 연구, 정신계나 괴이 사건 해석을 맡는다.\n초반에는 너무 많은 캐릭터를 등장시키지 않는다.",
    pendingSettings:
      "세부 팀 이름\n초능력 규칙\n첫 사건 유형\n주요 범죄 조직",
    freeNotes:
      "아이디어를 여기에 편하게 적어둬.\n\n예:\n- 공식적이고 멋진 분위기\n- 국제기구 + 엘리트 수사기관 느낌\n- 초반 캐릭터는 3명 정도"
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
    }
  ],
  characters: [
    {
      id: "char-leon-walker",
      name: "레온 워커",
      nation: "미국",
      age: "31세",
      affiliation: "N.E.B 델타",
      role: "델타 현장 지휘관",
      powerStatus: "능력자",
      power: "능력명: Wind Force / 윈드 포스\n무기: 커스텀 카빈 소총\n\n바람의 힘을 다루는 능력. 적의 균형을 무너뜨리고, 연기와 먼지, 독가스를 흩어내며, 팀원의 낙하를 완화하거나 자신의 이동 속도를 순간적으로 높일 수 있다. 총격전 중 시야와 사격 흐름을 보조하는 데도 사용한다.",
      callsign:
        "콜사인: Squall / 스콜\n뜻: 갑자기 몰아치는 돌풍, 국지성 강풍.\n유래: 작전 중 위기가 생기면 느긋하게 있다가도 한순간에 전장을 뒤집는 방식 때문에 붙은 콜사인. 바람 능력자라는 점도 있지만, 진짜 이유는 “조용하다가 갑자기 몰아친다”는 전투 스타일이다.\n현장 이미지: 조용히 흐르다가 필요한 순간 전장을 휩쓸어버리는 돌풍.",
      personality:
        "나른하고 장난기가 많다.\n겉으로는 가벼워 보이지만 판단력이 뛰어나다.\n위험한 상황에서도 침착하다.\n팀원을 강하게 몰아붙이기보다 자연스럽게 움직이게 만든다.\n화를 잘 내지 않지만, 진짜 화나면 말수가 줄어든다.\n책임감이 강하지만 티 내지 않는다.\n자기 몸을 위험에 넣는 일을 별것 아닌 것처럼 넘긴다.",
      speech: "별도 말투 설정은 사용하지 않는다.",
      appearance:
        "키는 192cm로 크고, 체형은 늘씬하지만 힘이 느껴지는 근육질이다.\n넓은 어깨와 긴 팔다리 때문에 전술복을 입어도 실루엣이 깔끔하게 드러난다.\n머리는 자연스러운 흑발이다. 너무 단정하게 넘기기보다는 살짝 흐트러진 스타일이라, 항상 막 임무에서 돌아온 것 같은 나른한 분위기가 있다.\n눈은 짙은 검은색에 가깝고, 눈매는 살짝 내려간 듯 여유롭다. 평소에는 졸린 듯 웃고 있지만, 현장에서는 눈빛이 차갑게 가라앉아 전혀 다른 사람처럼 보인다.\n얼굴선은 뚜렷하고 남성적이다. 높은 콧대, 선명한 턱선, 얇게 웃는 입매가 특징이다. 가볍게 웃을 때는 장난스러운데, 표정이 사라지면 꽤 위압감이 있다.\n피부는 건강한 밝은 톤이고, 왼쪽 눈썹 근처에 아주 옅은 흉터가 있다. 흉터가 크지는 않지만 가까이 보면 눈에 띄어서, 그가 단순히 책상 앞 지휘관이 아니라 현장을 오래 뛴 사람이라는 인상을 준다.\n복장은 보통 검은 전술복에 가벼운 재킷을 걸친다. 장비를 과하게 달고 다니지 않고, 커스텀 카빈 소총 하나만 자연스럽게 멘다. 전체적으로 정돈되어 있지만 일부러 완벽하게 갖춰 입지는 않는 타입이다.",
      background:
        "미군 특수부대 출신. 국제 인질 구출 작전 중 능력자 범죄 조직과 충돌했고, 그 작전에서 팀 대부분을 잃었다. 이후 국가 단위의 군대로는 특수범죄를 막을 수 없다고 판단해 N.E.B에 합류했다.",
      likes: "진한 블랙커피\n새벽 공기\n농담을 받아치는 사람\n작전 끝난 뒤 조용한 술 한 잔",
      dislikes:
        "무의미한 희생\n책임을 아랫사람에게 떠넘기는 상관\n민간인을 방패로 쓰는 범죄자\n과하게 형식적인 회의\n밀폐된 공간",
      hobbiesTalents:
        "취미:\n총기 정비\n오래된 락 음악 듣기\n야간 드라이브\n바람 잘 드는 옥상에서 쉬기\n카드 섞기나 동전 굴리기 같은 손장난\n\n특기:\n현장 지휘\n사격\n팀원들의 버릇 파악\n바람으로 탄도와 시야를 보조하는 전투",
      habits:
        "생각할 때 총기 장갑 손목 부분을 만진다.\n불리한 상황일수록 더 느긋하게 말한다.\n바람 방향을 확인하듯 고개를 조금 기울인다.",
      secret: "현재 확정된 비밀 설정은 없다.",
      pending: "델타 합류 이후 주요 작전 기록",
      tags: "델타, 리더, 미국, 능력자, 스콜"
    },
    {
      id: "char-gerard-winters",
      name: "제라드 윈터스",
      nation: "미국",
      age: "31세",
      affiliation: "N.E.B 델타",
      role: "델타 방어/지원 요원",
      powerStatus: "능력자",
      power:
        "능력명: Air Guard / 에어 가드\n무기: HK417 전투소총\n\n공기를 압축해 방어막과 공격을 만드는 능력.\n총격, 파편, 충격을 막는 투명한 공기 방벽을 만들 수 있고, 압축한 공기를 공기탄처럼 쏘아 적을 밀어내거나 제압할 수 있다.\n레온의 Wind Force와 연계하면 바람을 더 단단한 방벽이나 공격으로 바꿀 수 있다.",
      callsign:
        "콜사인: Assam / 아삼\n뜻: 진하고 묵직한 홍차 이름.\n유래: 제라드가 늘 진한 홍차를 마시는 데서 시작된 별명. 처음엔 장난처럼 붙었지만, 현장에서 그가 있으면 팀 분위기가 가라앉고 중심이 잡힌다는 뜻까지 붙었다.\n현장 이미지: 부드럽지만 쉽게 무너지지 않는 안정감.",
      personality:
        "델타에서 가장 따뜻한 사람처럼 보이지만, 동시에 가장 단단하게 팀을 붙잡는 요원.\n다정하고 섬세한 성격이다.\n팀원들의 상태를 세심하게 살피며, 필요한 순간에는 기대게 해주는 사람이다.\n하지만 무조건 받아주기만 하는 타입은 아니고, 무리하거나 선을 넘는 행동에는 단호하다.",
      speech: "미정",
      appearance:
        "키는 191cm.\n체형은 단단하고 균형 잡힌 근육질이다.\n큰 키와 반듯한 자세 때문에, 가만히 서 있어도 신뢰감이 느껴진다.\n머리는 애쉬 브라운 계열이며, 늘 깔끔하게 정돈되어 있다. 너무 딱딱하게 넘긴 스타일은 아니고, 자연스럽지만 흐트러짐이 적다.\n눈은 회색빛이 도는 푸른색이다. 눈매는 부드러운 편이라 첫인상이 차갑지 않다. 다만 집중할 때는 눈빛이 단단하게 가라앉는다.\n얼굴선은 깔끔하고 단정하다. 높은 콧대와 차분한 입매, 부드러운 눈매가 어울려 신뢰감 있는 인상을 준다. 화려하게 눈에 띄는 미남이라기보다는, 볼수록 안정감과 깊이가 느껴지는 얼굴이다.\n피부는 밝은 톤이고, 표정 변화가 섬세한 편이다. 상대의 말을 들을 때는 시선을 피하지 않고 차분히 바라보는 습관이 있다.\n복장은 전술복도 늘 단정하게 입는다. 장갑, 탄창, 장비 위치가 항상 정리되어 있고, 현장에 나가기 전에는 자기 장비를 조용히 확인하는 편이다.",
      background:
        "재난 대응 부대 출신. 대형 테러 사건에서 구조 임무를 맡았고, 지휘 실패로 많은 민간인을 잃은 현장을 겪었다. 그때 공기 방벽 능력으로 일부 생존자들을 지켜낸 뒤, 사건을 끝내는 것만큼 사람을 살아 돌아오게 하는 일이 중요하다고 믿게 되어 N.E.B에 합류했다.",
      likes: "진한 홍차\n비 오는 날\n독서",
      dislikes: "단맛\n아픈 사람",
      hobbiesTalents: "취미:\n서점 구경\n\n특기:\n요리",
      habits: "미정",
      secret: "미정",
      pending: "능력명, 콜사인, 무기, 과거 설정",
      tags: "델타, 미국, 능력자, 방어, 지원"
    },
    {
      id: "char-support",
      name: "테오 플린",
      nation: "영국",
      age: "26세",
      affiliation: "N.E.B 델타",
      role: "델타 돌격 요원",
      powerStatus: "능력자",
      power:
        "능력명: Fire Rush / 파이어 러시\n무기: L85A3 돌격소총\n\n불꽃을 몸 주변에 두르고 빠르게 돌진하는 능력. 순간적인 폭발력과 돌파력이 강하며, 문, 장애물, 적의 방어선을 뚫는 데 특화되어 있다.",
      callsign:
        "콜사인: Lucky / 러키\n뜻: 운 좋은 사람, 행운.\n유래: 장비를 잃어버리고 보고서를 빼먹고도 실전에서는 말도 안 되게 살아남고 이겨서 붙은 콜사인. 본인은 “실력인데요?”라고 우기지만, 델타 팀원들은 반쯤 놀리는 의미로 부른다.\n현장 이미지: 불리한 상황에서도 이상하게 길을 뚫고 살아 돌아오는 돌격수.",
      personality:
        "밝고 에너지가 넘친다.\n긴장된 상황에서도 농담을 던져 분위기를 풀어준다.\n델타의 막내답게 팀원들에게 금방 다가가고, 친해지는 속도가 빠르다.\n자신감이 넘치지만 가끔 앞뒤 계산 없이 먼저 튀어나간다.\n살짝 덤벙거려서 장비를 두고 오거나 보고 순서를 헷갈리는 일이 있다.\n그래도 현장에 들어가면 겁먹지 않고 가장 먼저 길을 뚫는다.",
      speech: "미정",
      appearance:
        "키는 187cm.\n체형은 탄탄하고 민첩한 근육질이다.\n전체적으로 가볍고 빠르게 움직이는 인상이 강하다.\n머리는 밝은 갈색이고, 햇빛을 받으면 더 붉은빛이 돈다. 항상 살짝 흐트러져 있어 정돈된 느낌보다는 생동감이 먼저 느껴진다.\n눈동자는 금색이다. 표정이 워낙 밝아서 눈빛도 장난스럽게 반짝이는 편이다. 웃을 때는 사람을 금방 끌어당기는 힘이 있다.\n얼굴은 선명하고 시원한 인상이다. 소년 같은 활기와 성숙한 현장 요원의 날카로움이 같이 있다. 가만히 있어도 에너지가 넘쳐 보여서, 조용한 방 안에서도 가장 먼저 눈에 띈다.\n복장은 전술복을 입어도 어딘가 편하게 걸친 느낌이 있다. 장비는 제대로 챙기지만, 작은 물건을 다른 주머니에 넣어두고 찾는 일이 종종 있다.",
      background:
        "테오는 영국의 능력자 훈련 프로그램에서 가장 어린 나이에 실전 등급을 받은 인재였다.\n기록상으로는 훈련 태도 불량, 보고서 누락, 장비 분실 같은 문제로 자주 지적받았지만, 실전 모의전에서는 늘 압도적인 성적을 냈다.\n\n한 국제 합동 훈련에서 N.E.B 델타가 그의 돌파 능력과 전투 감각을 눈여겨봤고, 이후 정식 선발 절차를 거쳐 델타에 합류했다.",
      likes: "매운 감자칩\n탄산음료\n액션 영화\n축구 경기\n불꽃놀이",
      dislikes: "개를 무서워한다\n잔소리\n가만히 대기하는 시간\n복잡한 서류 작업\n쓴 커피",
      hobbiesTalents: "취미:\n액션 게임\n축구\n운동화 모으기\n\n특기:\n근접 돌파\n순간 판단\n불꽃 추진을 이용한 고속 이동",
      habits: "흥분하면 말이 빨라진다.\n불꽃을 손끝에 작게 튕기며 논다.",
      secret: "미정",
      pending: "비밀 설정",
      tags: "델타, 막내, 능력자, 불, 돌격, 러키"
    },
    {
      id: "char-delta-mechanic",
      name: "마틴 슈타인",
      nation: "독일",
      age: "29세",
      affiliation: "N.E.B 델타",
      role: "델타 기계/폭발물 전문가",
      powerStatus: "능력자",
      power:
        "능력명: Machine Control / 머신 컨트롤\n무기: MP7 기관단총\n\n기계 장치의 구조를 감각적으로 이해하고, 손을 대거나 가까운 거리에서 조작할 수 있는 능력. 잠금장치, 드론, 차량, 폭발 장치, 보안 장비를 다루는 데 강하다. 복잡한 시스템 전체를 마음대로 해킹하는 능력은 아니지만, 현장에 있는 물리 장비와 폭발물 처리에는 매우 뛰어나다.",
      callsign:
        "콜사인: Romeo / 로미오\n뜻: 무전 알파벳의 R.\n유래: 원래는 폭발물 처리 기록에서 R 표시가 자주 붙던 것에서 시작됐다. Remote, Rig, Release처럼 원격 장치와 폭발 장비를 다루는 임무가 많았기 때문. 그런데 무전에서 R을 읽는 단어가 Romeo라 그대로 콜사인이 됐다. 본인은 별로 설명 안 해준다.\n현장 이미지: 말없이 장치를 읽고, 위험한 스위치를 가장 마지막 순간에 멈추는 전문가.",
      personality:
        "냉정하고 말수가 적다.\n필요한 말만 하고 감정 표현이 적다.\n작전 중 실수나 즉흥 행동을 싫어한다.\n판단이 빠르고, 위험한 장치를 다룰 때도 손이 흔들리지 않는다.\n테오의 즉흥적인 행동을 가장 자주 막는 사람이다.",
      speech: "미정",
      appearance:
        "키는 193cm.\n체형은 마른 근육질이고, 팔다리가 길어 움직임이 조용하고 절제되어 있다.\n머리는 플래티넘 블론드의 긴 머리다. 평소에는 목 뒤에서 느슨하게 묶고 다닌다. 흐트러짐 없는 전술복과 달리 머리만은 조금 느슨하게 묶여 있어, 차가운 인상에 묘한 여유를 더한다.\n눈은 선명한 녹색이다. 차분하고 날카로운 시선 때문에, 말없이 바라보기만 해도 쉽게 긴장감을 준다.\n오른쪽 귀에는 작은 검은색 이어커프를 하고 있다. 장식처럼 보이지만 실제로는 통신 장비와 연결된 개인 장비다.\n손가락이 길고 손끝이 예민하다. 폭발물 해체나 장비 조작을 할 때 손 움직임이 거의 흔들리지 않는다.\n얼굴선은 날카롭고 깨끗하다. 높은 콧대와 얇은 입술, 감정이 잘 드러나지 않는 표정 때문에 쉽게 다가가기 어려워 보인다.\n전술복은 늘 완벽하게 정리되어 있다. 소매 안쪽이나 장갑 안에는 직접 개조한 작은 도구들을 숨겨둔다.",
      background:
        "독일 특수 기술부대 출신. 과거 테러 사건에서 여동생을 잃었다. 현장에는 복잡한 폭발 장치와 원격 제어 장비가 설치되어 있었고, 마틴은 장치의 구조를 읽어냈지만 도착이 너무 늦었다. 이후 같은 방식의 사건을 막기 위해 기계 장치와 폭발물에 집착하게 되었고, N.E.B에 합류했다.",
      likes: "차가운 맥주\n작고 귀여운 것",
      dislikes: "먼지\n시끄러운 것",
      hobbiesTalents: "취미:\n시계 분해와 조립\n금속 퍼즐\n조용한 바에서 맥주 마시기\n\n특기:\n청소",
      habits: "생각할 때 이어커프를 손끝으로 만진다.\n누군가 큰 소리로 말하면 눈썹이 아주 살짝 찌푸려진다.",
      secret: "미정",
      pending: "비밀 설정",
      tags: "델타, 독일, 능력자, 기계, 폭발물, 냉정"
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
  if (data.overview?.pendingSettings === "팀 이름\n유저의 입장\n초능력 규칙\n첫 사건") {
    data.overview.pendingSettings = defaultData.overview.pendingSettings;
  }

  const organization = Array.isArray(data.organization) ? data.organization : [];
  const defaultsById = Object.fromEntries(defaultData.organization.map((org) => [org.id, org]));

  ["org-main", "org-board", "org-sigma", "org-delta", "org-theta"].forEach((id) => {
    if (!organization.some((org) => org.id === id)) {
      organization.push(clone(defaultsById[id]));
    }
  });

  const main = organization.find((org) => org.id === "org-main");
  if (main && main.name === "공식 국제 범죄 대응 기관") {
    main.name = defaultsById["org-main"].name;
    main.description = defaultsById["org-main"].description;
  }

  ["org-sigma", "org-delta", "org-theta"].forEach((id) => {
    const org = organization.find((item) => item.id === id);
    if (org) org.parentId = "org-board";
  });

  data.organization = organization.filter((org) => org.id !== "org-team");

  const characters = Array.isArray(data.characters) ? data.characters : [];
  const leonDefault = clone(defaultData.characters.find((character) => character.id === "char-leon-walker"));
  const gerardDefault = clone(defaultData.characters.find((character) => character.id === "char-gerard-winters"));
  const luckyDefault = clone(defaultData.characters.find((character) => character.id === "char-support"));
  const mechanicDefault = clone(defaultData.characters.find((character) => character.id === "char-delta-mechanic"));
  const oldLeaderIndex = characters.findIndex((character) => character.id === "char-leader");
  const oldFieldIndex = characters.findIndex((character) => character.id === "char-field");
  const leonIndex = characters.findIndex((character) => character.id === "char-leon-walker");
  const gerardIndex = characters.findIndex((character) => character.id === "char-gerard-winters");
  const luckyIndex = characters.findIndex((character) => character.id === "char-support");
  const mechanicIndex = characters.findIndex((character) => character.id === "char-delta-mechanic");

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
    characters[leonIndex].secret = leonDefault.secret;
    characters[leonIndex].pending = leonDefault.pending;
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
    characters[gerardIndex].secret = gerardDefault.secret;
    characters[gerardIndex].pending = gerardDefault.pending;
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
    secret: "",
    pending: "",
    tags: ""
  });
  openModal(characterDialog);
});

document.querySelector("#closeCharacterDialog").addEventListener("click", () => closeModal(characterDialog));
document.querySelector("#characterSearch").addEventListener("input", renderCharacters);

function renderCharacters() {
  const grid = document.querySelector("#characterGrid");
  const query = document.querySelector("#characterSearch").value.trim().toLowerCase();
  const characters = state.characters.filter((character) =>
    [character.name, character.nation, character.role, character.tags]
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
        <div class="tag-row">${renderTags(character.tags)}</div>
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
  setValue("#characterSecret", character.secret);
  setValue("#characterPending", character.pending);
  setValue("#characterTags", character.tags);
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
    secret: getValue("#characterSecret"),
    pending: getValue("#characterPending"),
    tags: getValue("#characterTags")
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

function renderTags(tags) {
  return String(tags || "")
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean)
    .map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`)
    .join("");
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
