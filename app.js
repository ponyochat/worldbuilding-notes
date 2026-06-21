const STORAGE_KEY = "worldbuilding-note-v1";

const defaultData = {
  overview: {
    worldName: "N.E.B 국제특무청",
    genre: "여성향, 공식 국제 범죄 대응 기관, 다국적 능력자",
    confirmedSettings:
      "정식 명칭: N.E.B 국제특무청\n영문 약자: N.E.B = Nexus Enforcement Bureau\n통칭: 네브\n성격: 특정 국가에 속하지 않은 공식 국제 특수범죄 대응 기관\n담당 사건: 초능력 범죄, 국제 범죄, 괴이한 사건, 상류층 범죄\n구성원: 초능력자와 비능력자가 함께 범죄와 싸운다.\n내부 대분류: 시그마, 델타, 세타\n시그마: 최상위 전략 부서. 사건 배정, 작전 승인, 전체 지휘를 맡는다.\n델타: 현장 작전 부서. 추적, 체포, 진압, 구출을 맡는다.\n세타: 분석과 이상 사건 조사 부서. 정보, 연구, 정신계나 괴이 사건 해석을 맡는다.\n초반에는 너무 많은 캐릭터를 등장시키지 않는다.",
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
      id: "org-sigma",
      name: "시그마",
      parentId: "org-main",
      description: "N.E.B 내부 최상위 전략 부서. 사건 배정, 작전 승인, 전체 지휘를 맡는다."
    },
    {
      id: "org-delta",
      name: "델타",
      parentId: "org-main",
      description: "현장 작전 부서. 추적, 체포, 진압, 구출 같은 직접 작전을 맡는다."
    },
    {
      id: "org-theta",
      name: "세타",
      parentId: "org-main",
      description: "분석과 이상 사건 조사 부서. 정보, 연구, 정신계나 괴이 사건 해석을 맡는다."
    }
  ],
  characters: [
    {
      id: "char-leader",
      name: "팀장 캐릭터",
      nation: "미정",
      age: "미정",
      affiliation: "소수 정예 팀",
      role: "팀장",
      powerStatus: "미정",
      power: "아직 정하지 않음",
      personality: "책임감 있고 차분한 타입으로 둘지 고민 중.",
      speech: "어른스럽고 침착한 말투.",
      appearance: "미정",
      relationship: "아직 특정 인물과의 관계는 정하지 않음.",
      secret: "미정",
      pending: "이름, 국적, 능력 여부",
      tags: "팀장, 초반등장"
    },
    {
      id: "char-field",
      name: "현장 요원 캐릭터",
      nation: "미정",
      age: "미정",
      affiliation: "소수 정예 팀",
      role: "현장 요원",
      powerStatus: "미정",
      power: "아직 정하지 않음",
      personality: "날카롭거나 장난기 있는 타입 후보.",
      speech: "미정",
      appearance: "미정",
      relationship: "아직 특정 인물과의 관계는 정하지 않음.",
      secret: "미정",
      pending: "능력자 또는 비능력자 중 선택",
      tags: "현장요원, 초반등장"
    },
    {
      id: "char-support",
      name: "분석 담당 캐릭터",
      nation: "미정",
      age: "미정",
      affiliation: "소수 정예 팀",
      role: "분석/지원 담당",
      powerStatus: "비능력자 후보",
      power: "없거나, 아주 특수한 보조 능력 후보.",
      personality: "머리 좋고 섬세한 타입 후보.",
      speech: "차분하고 정확한 말투.",
      appearance: "미정",
      relationship: "아직 특정 인물과의 관계는 정하지 않음.",
      secret: "미정",
      pending: "의료 담당인지 기술 담당인지 정하기",
      tags: "분석, 지원, 초반등장"
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

  ["org-main", "org-sigma", "org-delta", "org-theta"].forEach((id) => {
    if (!organization.some((org) => org.id === id)) {
      organization.push(clone(defaultsById[id]));
    }
  });

  const main = organization.find((org) => org.id === "org-main");
  if (main && main.name === "공식 국제 범죄 대응 기관") {
    main.name = defaultsById["org-main"].name;
    main.description = defaultsById["org-main"].description;
  }

  data.organization = organization.filter(
    (org) => org.id !== "org-team" && org.name !== "주인공이 만나는 소수 정예 팀" && org.name !== "델타 소수 정예팀"
  );
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
    personality: "",
    speech: "",
    appearance: "",
    relationship: "",
    secret: "",
    pending: "",
    tags: ""
  });
  characterDialog.showModal();
});

document.querySelector("#closeCharacterDialog").addEventListener("click", () => characterDialog.close());
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
        <p class="meta-text">${escapeHtml(character.personality || "성격 미정")}</p>
        <div class="tag-row">${renderTags(character.tags)}</div>
      </button>
    `;
    card.querySelector("button").addEventListener("click", () => {
      fillCharacterForm(character);
      characterDialog.showModal();
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
  setValue("#characterPersonality", character.personality);
  setValue("#characterSpeech", character.speech);
  setValue("#characterAppearance", character.appearance);
  setValue("#characterRelationship", character.relationship);
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
    personality: getValue("#characterPersonality"),
    speech: getValue("#characterSpeech"),
    appearance: getValue("#characterAppearance"),
    relationship: getValue("#characterRelationship"),
    secret: getValue("#characterSecret"),
    pending: getValue("#characterPending"),
    tags: getValue("#characterTags")
  };

  const index = state.characters.findIndex((item) => item.id === id);
  if (index >= 0) state.characters[index] = character;
  else state.characters.push(character);

  characterDialog.close();
  renderCharacters();
  persist();
});

document.querySelector("#deleteCharacterButton").addEventListener("click", () => {
  const id = document.querySelector("#characterId").value;
  if (!id) {
    characterDialog.close();
    return;
  }
  if (!confirm("이 캐릭터를 삭제할까?")) return;
  state.characters = state.characters.filter((character) => character.id !== id);
  characterDialog.close();
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
  caseDialog.showModal();
});

document.querySelector("#closeCaseDialog").addEventListener("click", () => caseDialog.close());

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
      caseDialog.showModal();
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

  caseDialog.close();
  renderCases();
  persist();
});

document.querySelector("#deleteCaseButton").addEventListener("click", () => {
  const id = document.querySelector("#caseId").value;
  if (!id) {
    caseDialog.close();
    return;
  }
  if (!confirm("이 사건을 삭제할까?")) return;
  state.cases = state.cases.filter((item) => item.id !== id);
  caseDialog.close();
  renderCases();
  persist();
});

function renderTags(tags) {
  return String(tags || "")
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean)
    .map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`)
    .join("");
}

function setValue(selector, value) {
  document.querySelector(selector).value = value || "";
}

function getValue(selector) {
  return document.querySelector(selector).value.trim();
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
