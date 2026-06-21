const STORAGE_KEY = "worldbuilding-note-v1";
const CLOUD_SETTINGS_KEY = "worldbuilding-note-cloud-v1";
const CLOUD_TOKEN_KEY = "worldbuilding-note-github-token-v1";

const defaultData = {
  overview: {
    worldName: "미정",
    genre: "여성향, 공식 국제 범죄 대응 기관, 다국적 능력자",
    confirmedSettings:
      "특정 국가에 속하지 않은 공식 국제 기관이 있다.\n초능력자와 비능력자가 함께 범죄와 싸운다.\n처음에는 너무 많은 캐릭터를 등장시키지 않는다.",
    pendingSettings:
      "기관 이름\n팀 이름\n유저의 입장\n초능력 규칙\n첫 사건",
    freeNotes:
      "아이디어를 여기에 편하게 적어둬.\n\n예:\n- 공식적이고 멋진 분위기\n- 국제기구 + 엘리트 수사기관 느낌\n- 초반 캐릭터는 3명 정도"
  },
  organization: [
    {
      id: "org-main",
      name: "공식 국제 범죄 대응 기관",
      parentId: "",
      description: "전 세계 특수 범죄를 다루는 상위 기관. 이름은 아직 미정."
    },
    {
      id: "org-team",
      name: "주인공이 만나는 소수 정예 팀",
      parentId: "org-main",
      description: "초반 이야기가 시작되는 팀. 팀장, 현장 요원, 분석 담당 정도만 먼저 등장."
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
      relationship: "유저를 평가하거나 보호하는 위치.",
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
      relationship: "첫 사건에서 유저와 같이 움직일 수 있음.",
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
      relationship: "유저의 상태나 능력을 분석하는 역할.",
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
      userRole: "보호 대상, 목격자, 신입 중 선택.",
      status: "미정",
      hooks: "유저가 왜 중요해지는지 정하기."
    }
  ]
};

let state = loadState();
let cloudSettings = loadCloudSettings();
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

const cloudFields = {
  token: document.querySelector("#githubToken"),
  owner: document.querySelector("#githubOwner"),
  repo: document.querySelector("#githubRepo"),
  path: document.querySelector("#githubPath")
};

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return clone(defaultData);

  try {
    return { ...clone(defaultData), ...JSON.parse(saved) };
  } catch {
    return clone(defaultData);
  }
}

function loadCloudSettings() {
  const saved = localStorage.getItem(CLOUD_SETTINGS_KEY);
  const fallback = {
    owner: "ponyochat",
    repo: "worldbuilding-notes",
    path: "world-data.json"
  };

  if (!saved) return fallback;

  try {
    return { ...fallback, ...JSON.parse(saved) };
  } catch {
    return fallback;
  }
}

function persist() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  saveState.textContent = `자동 저장됨 ${new Date().toLocaleTimeString("ko-KR", {
    hour: "2-digit",
    minute: "2-digit"
  })}`;
  renderCounts();
}

function persistCloudSettings() {
  cloudSettings.owner = cloudFields.owner.value.trim() || "ponyochat";
  cloudSettings.repo = cloudFields.repo.value.trim() || "worldbuilding-notes";
  cloudSettings.path = cloudFields.path.value.trim() || "world-data.json";
  localStorage.setItem(CLOUD_SETTINGS_KEY, JSON.stringify(cloudSettings));

  const token = cloudFields.token.value.trim();
  if (token) localStorage.setItem(CLOUD_TOKEN_KEY, token);

  setCloudStatus("연결 정보를 저장했어.");
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

cloudFields.owner.value = cloudSettings.owner;
cloudFields.repo.value = cloudSettings.repo;
cloudFields.path.value = cloudSettings.path;
cloudFields.token.value = localStorage.getItem(CLOUD_TOKEN_KEY) || "";

document.querySelector("#saveCloudSettingsButton").addEventListener("click", persistCloudSettings);
document.querySelector("#uploadCloudButton").addEventListener("click", uploadToCloud);
document.querySelector("#downloadCloudButton").addEventListener("click", downloadFromCloud);

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
  const org = state.organization.find((item) => item.id === document.querySelector("#orgId").value);
  if (!org) return;

  org.name = document.querySelector("#orgName").value.trim() || "이름 없음";
  org.parentId = document.querySelector("#orgParent").value;
  org.description = document.querySelector("#orgDescription").value.trim();
  renderOrganization();
  persist();
});

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

renderAll();

function getCloudConfig() {
  persistCloudSettings();
  const token = cloudFields.token.value.trim();
  if (!token) {
    throw new Error("GitHub 토큰을 먼저 넣어줘.");
  }

  return {
    token,
    owner: cloudSettings.owner,
    repo: cloudSettings.repo,
    path: cloudSettings.path
  };
}

function setCloudStatus(message) {
  document.querySelector("#cloudStatus").textContent = message;
}

async function uploadToCloud() {
  try {
    const config = getCloudConfig();
    setCloudStatus("GitHub에 저장하는 중이야...");

    const current = await fetchCloudFile(config);
    const content = JSON.stringify(
      {
        savedAt: new Date().toISOString(),
        appVersion: 1,
        data: state
      },
      null,
      2
    );

    const response = await fetch(githubFileUrl(config), {
      method: "PUT",
      headers: githubHeaders(config.token),
      body: JSON.stringify({
        message: "Update worldbuilding data",
        content: btoa(unescape(encodeURIComponent(content))),
        sha: current?.sha
      })
    });

    if (!response.ok) throw new Error(await githubErrorMessage(response));
    setCloudStatus("GitHub에 저장했어. 다른 PC에서 불러올 수 있어.");
  } catch (error) {
    setCloudStatus(error.message);
  }
}

async function downloadFromCloud() {
  try {
    const config = getCloudConfig();
    setCloudStatus("GitHub에서 불러오는 중이야...");

    const current = await fetchCloudFile(config);
    if (!current) {
      throw new Error("아직 GitHub에 저장된 데이터가 없어. 먼저 이 PC에서 저장해줘.");
    }

    const text = decodeURIComponent(escape(atob(current.content.replace(/\s/g, ""))));
    const parsed = JSON.parse(text);
    if (!parsed.data) throw new Error("저장 파일 모양이 맞지 않아.");

    state = parsed.data;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    Object.entries(fields).forEach(([key, element]) => {
      element.value = state.overview[key] || "";
    });
    activeOrgId = state.organization[0]?.id || "";
    renderAll();
    setCloudStatus("GitHub에서 불러왔어.");
  } catch (error) {
    setCloudStatus(error.message);
  }
}

async function fetchCloudFile(config) {
  const response = await fetch(githubFileUrl(config), {
    headers: githubHeaders(config.token)
  });

  if (response.status === 404) return null;
  if (!response.ok) throw new Error(await githubErrorMessage(response));
  return response.json();
}

function githubFileUrl(config) {
  const path = config.path
    .split("/")
    .map((part) => encodeURIComponent(part))
    .join("/");
  return `https://api.github.com/repos/${encodeURIComponent(config.owner)}/${encodeURIComponent(
    config.repo
  )}/contents/${path}`;
}

function githubHeaders(token) {
  return {
    Authorization: `Bearer ${token}`,
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28"
  };
}

async function githubErrorMessage(response) {
  try {
    const data = await response.json();
    if (response.status === 401) return "토큰이 맞지 않거나 권한이 부족해.";
    if (response.status === 403) return "GitHub 권한이 부족해. 토큰 권한을 확인해줘.";
    if (response.status === 404) return "저장소를 찾지 못했어.";
    return data.message || "GitHub 요청이 실패했어.";
  } catch {
    return "GitHub 요청이 실패했어.";
  }
}
