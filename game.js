const locations = [
  {
    id: "clock",
    name: "시계탑",
    icon: "🕰️",
    clue: "3",
    x: 8,
    y: 18,
    line: "시계탑의 숫자판이 어긋났어요. 일정하게 움직이는 수를 찾으세요.",
  },
  {
    id: "market",
    name: "시장 골목",
    icon: "🧺",
    clue: "1",
    x: 36,
    y: 12,
    line: "시장에는 가격표 단서가 많아요. 수량과 가격의 관계를 보세요.",
  },
  {
    id: "library",
    name: "도서관",
    icon: "📚",
    clue: "4",
    x: 66,
    y: 22,
    line: "도서관의 책장 번호가 규칙대로 놓여 있어요.",
  },
  {
    id: "station",
    name: "정거장",
    icon: "🚉",
    clue: "1",
    x: 18,
    y: 60,
    line: "정거장 시간표와 좌석표에서 관계식을 찾아봅시다.",
  },
  {
    id: "lab",
    name: "연구소",
    icon: "🧪",
    clue: "5",
    x: 52,
    y: 64,
    line: "연구소 단서는 조금 더 까다롭습니다. 두 단계 규칙도 확인하세요.",
  },
  {
    id: "vault",
    name: "금고실",
    icon: "🔐",
    clue: "9",
    x: 78,
    y: 56,
    line: "마지막 장소입니다. 여기까지 모은 규칙을 모두 사용해요.",
  },
];

const missions = [
  {
    id: "clock-1",
    locationId: "clock",
    type: "숫자 규칙",
    title: "멈춘 분침",
    story: "분침이 5분씩 움직이다가 마지막 칸에서 멈췄습니다.",
    view: "numbers",
    data: [5, 10, 15, 20, null],
    answer: "25",
    hints: ["앞의 수와 뒤의 수 차이를 보세요.", "5씩 커지고 있어요.", "20보다 5 큰 수입니다."],
    rule: "5씩 커지는 규칙",
  },
  {
    id: "clock-2",
    locationId: "clock",
    type: "숫자 규칙",
    title: "거꾸로 도는 초침",
    story: "초침이 같은 간격으로 거꾸로 움직입니다.",
    view: "numbers",
    data: [48, 42, 36, 30, null],
    answer: "24",
    hints: ["수가 점점 작아집니다.", "6씩 작아져요.", "30보다 6 작은 수입니다."],
    rule: "6씩 작아지는 규칙",
  },
  {
    id: "clock-3",
    locationId: "clock",
    type: "표와 관계",
    title: "종소리 횟수",
    story: "시계탑은 1시간마다 종을 2번씩 더 칩니다. 6시간에는 몇 번 칠까요?",
    view: "table",
    headers: ["시간", "1", "2", "3", "6"],
    rows: [["종소리", "2", "4", "6", "?"]],
    answer: "12",
    hints: ["시간이 1 늘면 종소리가 2 늘어요.", "시간에 2를 곱합니다.", "6 x 2를 계산하세요."],
    rule: "종소리 = 시간 x 2",
  },
  {
    id: "clock-4",
    locationId: "clock",
    type: "도형 규칙",
    title: "시계 장식",
    story: "시계 장식의 별이 3개씩 늘어납니다.",
    view: "shapes",
    shape: "★",
    data: [2, 5, 8, null],
    answer: "11",
    hints: ["도형 개수의 차이를 보세요.", "3개씩 늘어납니다.", "8보다 3 큰 수입니다."],
    rule: "별이 3개씩 늘어나는 규칙",
  },
  {
    id: "market-1",
    locationId: "market",
    type: "생활 속 관계",
    title: "사과 상자",
    story: "사과 한 상자에는 4개가 들어 있습니다. 7상자에는 몇 개일까요?",
    view: "table",
    headers: ["상자", "1", "2", "3", "7"],
    rows: [["사과", "4", "8", "12", "?"]],
    answer: "28",
    hints: ["상자 수와 사과 수가 함께 늘어요.", "상자 수에 4를 곱합니다.", "7 x 4입니다."],
    rule: "사과 수 = 상자 수 x 4",
  },
  {
    id: "market-2",
    locationId: "market",
    type: "관계식",
    title: "떡꼬치 가격",
    story: "떡꼬치 1개는 700원입니다. 8개 가격은 얼마일까요?",
    view: "table",
    headers: ["개수", "1", "2", "4", "8"],
    rows: [["가격", "700", "1400", "2800", "?"]],
    answer: "5600",
    hints: ["개수가 2배가 되면 가격도 2배입니다.", "개수에 700을 곱합니다.", "8 x 700입니다."],
    rule: "가격 = 개수 x 700",
  },
  {
    id: "market-3",
    locationId: "market",
    type: "숫자 규칙",
    title: "할인 쿠폰 번호",
    story: "쿠폰 번호가 일정한 규칙으로 커집니다.",
    view: "numbers",
    data: [12, 16, 20, 24, null],
    answer: "28",
    hints: ["차이가 모두 같습니다.", "4씩 커집니다.", "24보다 4 큰 수입니다."],
    rule: "4씩 커지는 규칙",
  },
  {
    id: "market-4",
    locationId: "market",
    type: "문장 단서",
    title: "채소 가게 묶음",
    story: "오이는 한 묶음에 3개입니다. 9묶음이면 오이는 모두 몇 개일까요?",
    view: "riddle",
    lines: ["한 묶음 = 3개", "9묶음 = ?개"],
    answer: "27",
    hints: ["묶음 수가 1 늘 때마다 3개 늘어요.", "9에 3을 곱합니다.", "9 x 3 = 27"],
    rule: "전체 개수 = 묶음 수 x 3",
  },
  {
    id: "library-1",
    locationId: "library",
    type: "숫자 규칙",
    title: "책장 번호",
    story: "책장 번호가 11씩 커지고 있습니다.",
    view: "numbers",
    data: [14, 25, 36, 47, null],
    answer: "58",
    hints: ["앞뒤 차이를 계산하세요.", "11씩 커집니다.", "47보다 11 큰 수입니다."],
    rule: "11씩 커지는 규칙",
  },
  {
    id: "library-2",
    locationId: "library",
    type: "표와 관계",
    title: "책 묶음 정리",
    story: "한 칸에 책 6권씩 꽂습니다. 9칸에는 몇 권을 꽂을까요?",
    view: "table",
    headers: ["칸", "1", "2", "5", "9"],
    rows: [["책", "6", "12", "30", "?"]],
    answer: "54",
    hints: ["칸 수에 6을 곱합니다.", "5칸은 30권이었어요.", "9 x 6입니다."],
    rule: "책 수 = 칸 수 x 6",
  },
  {
    id: "library-3",
    locationId: "library",
    type: "도형 규칙",
    title: "책갈피 문양",
    story: "책갈피의 삼각형이 4개씩 늘어납니다.",
    view: "shapes",
    shape: "▲",
    data: [1, 5, 9, null],
    answer: "13",
    hints: ["1에서 5, 5에서 9로 갈 때 얼마나 늘었나요?", "4개씩 늘어납니다.", "9보다 4 큰 수입니다."],
    rule: "삼각형이 4개씩 늘어나는 규칙",
  },
  {
    id: "library-4",
    locationId: "library",
    type: "문장 단서",
    title: "대출 카드",
    story: "하루에 8권씩 대출되었습니다. 5일 동안 대출된 책은 모두 몇 권일까요?",
    view: "riddle",
    lines: ["1일 = 8권", "5일 = ?권"],
    answer: "40",
    hints: ["같은 수가 여러 번 더해지는 상황입니다.", "5번 8을 더합니다.", "5 x 8입니다."],
    rule: "전체 권수 = 하루 권수 x 일수",
  },
  {
    id: "station-1",
    locationId: "station",
    type: "숫자 규칙",
    title: "출발 시각",
    story: "열차가 같은 간격으로 출발합니다.",
    view: "numbers",
    data: [15, 30, 45, 60, null],
    answer: "75",
    hints: ["몇 분 간격인지 보세요.", "15씩 커집니다.", "60보다 15 큰 수입니다."],
    rule: "15씩 커지는 규칙",
  },
  {
    id: "station-2",
    locationId: "station",
    type: "관계식",
    title: "좌석 줄",
    story: "한 줄에 좌석이 5개입니다. 12줄이면 좌석은 모두 몇 개일까요?",
    view: "table",
    headers: ["줄", "1", "2", "6", "12"],
    rows: [["좌석", "5", "10", "30", "?"]],
    answer: "60",
    hints: ["줄 수에 5를 곱합니다.", "6줄은 30석입니다.", "12 x 5입니다."],
    rule: "좌석 수 = 줄 수 x 5",
  },
  {
    id: "station-3",
    locationId: "station",
    type: "숫자 규칙",
    title: "플랫폼 번호",
    story: "플랫폼 번호가 두 배씩 커집니다.",
    view: "numbers",
    data: [3, 6, 12, 24, null],
    answer: "48",
    hints: ["더하기가 아니라 곱하기 규칙입니다.", "앞의 수에 2를 곱합니다.", "24 x 2입니다."],
    rule: "2배씩 커지는 규칙",
  },
  {
    id: "station-4",
    locationId: "station",
    type: "문장 단서",
    title: "승차권 묶음",
    story: "승차권 1묶음은 10장입니다. 13묶음은 몇 장일까요?",
    view: "riddle",
    lines: ["1묶음 = 10장", "13묶음 = ?장"],
    answer: "130",
    hints: ["10씩 늘어납니다.", "묶음 수에 10을 곱합니다.", "13 x 10입니다."],
    rule: "승차권 수 = 묶음 수 x 10",
  },
  {
    id: "lab-1",
    locationId: "lab",
    type: "숫자 규칙",
    title: "시약 번호",
    story: "연구소의 시약 번호는 7씩 커집니다.",
    view: "numbers",
    data: [9, 16, 23, 30, null],
    answer: "37",
    hints: ["차이가 모두 같습니다.", "7씩 커집니다.", "30보다 7 큰 수입니다."],
    rule: "7씩 커지는 규칙",
  },
  {
    id: "lab-2",
    locationId: "lab",
    type: "두 단계 규칙",
    title: "실험 기록",
    story: "수에 3을 곱해 다음 값을 만들었습니다.",
    view: "numbers",
    data: [1, 3, 9, 27, null],
    answer: "81",
    hints: ["더하기보다 곱하기를 생각하세요.", "앞의 수에 3을 곱합니다.", "27 x 3입니다."],
    rule: "3배씩 커지는 규칙",
  },
  {
    id: "lab-3",
    locationId: "lab",
    type: "표와 관계",
    title: "비커 눈금",
    story: "비커 1개에는 물이 250mL 들어갑니다. 6개는 몇 mL일까요?",
    view: "table",
    headers: ["비커", "1", "2", "4", "6"],
    rows: [["물(mL)", "250", "500", "1000", "?"]],
    answer: "1500",
    hints: ["비커 수에 250을 곱합니다.", "4개는 1000mL입니다.", "6 x 250입니다."],
    rule: "물의 양 = 비커 수 x 250",
  },
  {
    id: "lab-4",
    locationId: "lab",
    type: "도형 규칙",
    title: "분자 모형",
    story: "원 모양 분자가 5개씩 늘어납니다.",
    view: "shapes",
    shape: "●",
    data: [4, 9, 14, null],
    answer: "19",
    hints: ["4에서 9, 9에서 14의 차이를 보세요.", "5개씩 늘어납니다.", "14보다 5 큰 수입니다."],
    rule: "분자가 5개씩 늘어나는 규칙",
  },
  {
    id: "vault-1",
    locationId: "vault",
    type: "숫자 규칙",
    title: "금고 계단",
    story: "금고 앞 계단 번호가 일정하게 작아집니다.",
    view: "numbers",
    data: [100, 90, 80, 70, null],
    answer: "60",
    hints: ["수가 줄어드는 규칙입니다.", "10씩 작아집니다.", "70보다 10 작은 수입니다."],
    rule: "10씩 작아지는 규칙",
  },
  {
    id: "vault-2",
    locationId: "vault",
    type: "관계식",
    title: "열쇠 무게",
    story: "열쇠 1개의 무게는 120g입니다. 9개의 무게는 몇 g일까요?",
    view: "table",
    headers: ["열쇠", "1", "3", "6", "9"],
    rows: [["무게(g)", "120", "360", "720", "?"]],
    answer: "1080",
    hints: ["열쇠 수에 120을 곱합니다.", "6개는 720g입니다.", "9 x 120입니다."],
    rule: "무게 = 열쇠 수 x 120",
  },
  {
    id: "vault-3",
    locationId: "vault",
    type: "도형 규칙",
    title: "문양 잠금장치",
    story: "잠금장치의 다이아몬드가 6개씩 늘어납니다.",
    view: "shapes",
    shape: "◆",
    data: [3, 9, 15, null],
    answer: "21",
    hints: ["도형 개수의 차이를 보세요.", "6개씩 늘어납니다.", "15보다 6 큰 수입니다."],
    rule: "다이아몬드가 6개씩 늘어나는 규칙",
  },
  {
    id: "vault-4",
    locationId: "vault",
    type: "문장 단서",
    title: "마지막 봉인",
    story: "봉인 하나를 풀려면 별 4개가 필요합니다. 봉인 11개를 풀려면 별은 몇 개 필요할까요?",
    view: "riddle",
    lines: ["봉인 1개 = 별 4개", "봉인 11개 = 별 ?개"],
    answer: "44",
    hints: ["봉인 수에 4를 곱합니다.", "10개면 40개가 필요합니다.", "11 x 4입니다."],
    rule: "필요한 별 = 봉인 수 x 4",
  },
];

const finalAnswer = locations.map((location) => location.clue).join("");

const state = {
  selectedLocationId: locations[0].id,
  stars: 0,
  attemptsLeft: 3,
  hintIndex: 0,
  solved: new Set(),
  collectedClues: new Set(),
  finalMode: false,
  finalSolved: false,
};

const stageLabel = document.querySelector("#stageLabel");
const starsLabel = document.querySelector("#starsLabel");
const codeLabel = document.querySelector("#codeLabel");
const mapStatus = document.querySelector("#mapStatus");
const routeLabel = document.querySelector("#routeLabel");
const worldMap = document.querySelector("#worldMap");
const clueBoard = document.querySelector("#clueBoard");
const clueCount = document.querySelector("#clueCount");
const detectiveLine = document.querySelector("#detectiveLine");
const locationBadge = document.querySelector("#locationBadge");
const typeBadge = document.querySelector("#typeBadge");
const attemptBadge = document.querySelector("#attemptBadge");
const missionMeta = document.querySelector("#missionMeta");
const missionTitle = document.querySelector("#missionTitle");
const missionStory = document.querySelector("#missionStory");
const problemArea = document.querySelector("#problemArea");
const answerForm = document.querySelector("#answerForm");
const answerInput = document.querySelector("#answerInput");
const submitButton = document.querySelector("#submitButton");
const hintButton = document.querySelector("#hintButton");
const nextButton = document.querySelector("#nextButton");
const restartButton = document.querySelector("#restartButton");
const feedback = document.querySelector("#feedback");
const hintText = document.querySelector("#hintText");

function getLocation(locationId) {
  return locations.find((location) => location.id === locationId);
}

function getLocationMissions(locationId) {
  return missions.filter((mission) => mission.locationId === locationId);
}

function isLocationComplete(locationId) {
  return getLocationMissions(locationId).every((mission) => state.solved.has(mission.id));
}

function isLocationUnlocked(locationId) {
  const index = locations.findIndex((location) => location.id === locationId);
  if (index === 0) return true;
  return isLocationComplete(locations[index - 1].id);
}

function getCurrentMission() {
  return getLocationMissions(state.selectedLocationId).find((mission) => !state.solved.has(mission.id));
}

function getSolvedCount() {
  return state.solved.size;
}

function hpText() {
  return `HP ${"♥".repeat(state.attemptsLeft)}${"♡".repeat(3 - state.attemptsLeft)}`;
}

function renderGame() {
  const solvedCount = getSolvedCount();
  stageLabel.textContent = `${solvedCount} / ${missions.length}`;
  starsLabel.textContent = `${state.stars}개`;
  codeLabel.textContent = locations.map((location) => (state.collectedClues.has(location.id) ? location.clue : "-")).join("");
  clueCount.textContent = `${state.collectedClues.size} / ${locations.length}`;
  routeLabel.textContent = locations.map((location) => location.name).join(" → ");

  renderMap();
  renderClues();

  if (state.finalSolved) {
    renderSolvedFinal();
    return;
  }

  if (state.finalMode || solvedCount === missions.length) {
    state.finalMode = true;
    renderFinalMission();
    return;
  }

  const mission = getCurrentMission();
  if (!mission) {
    renderLocationComplete();
    return;
  }

  renderMission(mission);
}

function renderMap() {
  worldMap.innerHTML = "";

  locations.slice(0, -1).forEach((location, index) => {
    const next = locations[index + 1];
    const path = document.createElement("span");
    const startX = location.x + 7;
    const startY = location.y + 9;
    const endX = next.x + 7;
    const endY = next.y + 9;
    const dx = endX - startX;
    const dy = endY - startY;
    const length = Math.sqrt(dx * dx + dy * dy);
    path.className = "map-path";
    path.style.left = `${startX}%`;
    path.style.top = `${startY}%`;
    path.style.width = `${length}%`;
    path.style.transform = `rotate(${Math.atan2(dy, dx)}rad)`;
    worldMap.appendChild(path);
  });

  locations.forEach((location) => {
    const locationNumber = locations.findIndex((item) => item.id === location.id) + 1;
    const missionsInLocation = getLocationMissions(location.id);
    const solvedInLocation = missionsInLocation.filter((mission) => state.solved.has(mission.id)).length;
    const unlocked = isLocationUnlocked(location.id);
    const complete = isLocationComplete(location.id);
    const node = document.createElement("button");
    node.type = "button";
    node.className = [
      "map-node",
      location.id === state.selectedLocationId ? "active" : "",
      complete ? "done" : "",
    ]
      .filter(Boolean)
      .join(" ");
    node.disabled = !unlocked;
    node.style.left = `${location.x}%`;
    node.style.top = `${location.y}%`;
    node.innerHTML = `
      <span class="node-index">${String(locationNumber).padStart(2, "0")}</span>
      <span class="icon" aria-hidden="true">${location.icon}</span>
      <strong>${location.name}</strong>
      <span class="node-meta">${unlocked ? `${solvedInLocation}/${missionsInLocation.length} 퀘스트` : "잠김"}</span>
    `;
    node.addEventListener("click", () => selectLocation(location.id));
    worldMap.appendChild(node);
  });

  const currentLocation = getLocation(state.selectedLocationId);
  mapStatus.textContent = state.finalMode ? "보스 금고전" : `${currentLocation.name} 입장 중`;
}

function renderClues() {
  clueBoard.innerHTML = "";
  locations.forEach((location, index) => {
    const collected = state.collectedClues.has(location.id);
    const chip = document.createElement("div");
    chip.className = collected ? "clue-chip done" : "clue-chip";
    chip.innerHTML = `
      <span class="digit">${collected ? location.clue : "?"}</span>
      <span>${index + 1}. ${location.name}</span>
      <span>${collected ? "획득" : "미발견"}</span>
    `;
    clueBoard.appendChild(chip);
  });
}

function selectLocation(locationId) {
  if (!isLocationUnlocked(locationId)) return;
  state.selectedLocationId = locationId;
  state.finalMode = false;
  resetAttemptState();
  renderGame();
}

function renderMission(mission) {
  const location = getLocation(mission.locationId);
  const missionsInLocation = getLocationMissions(location.id);
  const missionIndex = missionsInLocation.findIndex((item) => item.id === mission.id) + 1;

  answerForm.classList.remove("hidden");
  hintButton.classList.remove("hidden");
  nextButton.classList.remove("hidden");
  restartButton.classList.add("hidden");
  answerInput.value = "";
  answerInput.disabled = false;
  hintButton.disabled = false;
  nextButton.disabled = true;
  submitButton.textContent = "단서 제출";
  attemptBadge.textContent = hpText();
  locationBadge.textContent = `${location.icon} ${location.name}`;
  typeBadge.textContent = mission.type;
  missionMeta.textContent = `${missionIndex}번째 퀘스트`;
  missionTitle.textContent = mission.title;
  missionStory.textContent = mission.story;
  detectiveLine.textContent = `${location.name}에 도착했습니다. NPC가 남긴 규칙 흔적을 추리해 보세요.`;
  feedback.textContent = "";
  feedback.className = "feedback";
  hintText.textContent = "";
  problemArea.className = "problem-area";
  problemArea.innerHTML = "";

  if (mission.view === "numbers") renderNumbers(mission.data);
  if (mission.view === "shapes") renderShapes(mission);
  if (mission.view === "table") renderTable(mission);
  if (mission.view === "riddle") renderRiddle(mission);

  answerInput.focus();
}

function renderLocationComplete() {
  const location = getLocation(state.selectedLocationId);
  answerForm.classList.add("hidden");
  hintButton.classList.add("hidden");
  nextButton.classList.remove("hidden");
  nextButton.disabled = false;
  restartButton.classList.add("hidden");
  locationBadge.textContent = `${location.icon} ${location.name}`;
  typeBadge.textContent = "스테이지 클리어";
  attemptBadge.textContent = "조각 획득";
  missionMeta.textContent = "지역 클리어";
  missionTitle.textContent = `${location.name} 스테이지 클리어`;
  missionStory.textContent = "다음 지역의 문이 열렸습니다. 월드맵에서 새 장소로 이동하세요.";
  detectiveLine.textContent = `${location.name}에서 암호 조각 ${location.clue}을 획득했습니다.`;
  feedback.textContent = "새 지역이 해금되었습니다.";
  feedback.className = "feedback good";
  hintText.textContent = "";
  problemArea.className = "problem-area";
  problemArea.innerHTML = `
    <div class="final-panel">
      <div class="vault">${location.icon}</div>
      <strong>암호 조각 ${location.clue}</strong>
      <p>${location.name} 스테이지를 클리어했습니다.</p>
    </div>
  `;
}

function renderFinalMission() {
  answerForm.classList.remove("hidden");
  hintButton.classList.remove("hidden");
  nextButton.classList.add("hidden");
  restartButton.classList.add("hidden");
  answerInput.value = "";
  answerInput.disabled = false;
  hintButton.disabled = false;
  submitButton.textContent = "보스 공략";
  locationBadge.textContent = "🔐 보스 금고";
  typeBadge.textContent = "최종 보스";
  attemptBadge.textContent = hpText();
  missionMeta.textContent = "Final Stage";
  missionTitle.textContent = "모은 암호 조각을 순서대로 입력하세요";
  missionStory.textContent = "이동 지도에 적힌 조사 순서대로 암호 조각을 이어 붙이면 금고가 열립니다.";
  detectiveLine.textContent = "보스 금고는 월드맵 루트 순서로만 열립니다. 조각을 차례대로 연결하세요.";
  feedback.textContent = "";
  feedback.className = "feedback";
  hintText.textContent = "";
  problemArea.className = "problem-area";
  problemArea.innerHTML = `
    <div class="final-panel">
      <div class="vault">🔐</div>
      <strong>${codeLabel.textContent}</strong>
      <p>월드맵 루트를 따라 암호 조각을 차례대로 입력하세요.</p>
    </div>
  `;
  answerInput.focus();
}

function renderSolvedFinal() {
  answerForm.classList.add("hidden");
  hintButton.classList.add("hidden");
  nextButton.classList.add("hidden");
  restartButton.classList.remove("hidden");
  locationBadge.textContent = "엔딩 도달";
  typeBadge.textContent = "클리어";
  attemptBadge.textContent = "성공";
  missionMeta.textContent = "Clear Reward";
  missionTitle.textContent = "보스 금고 클리어!";
  missionStory.textContent = "모든 지역을 탐험하고 마지막 금고를 열었습니다.";
  detectiveLine.textContent = "완벽한 플레이입니다. 규칙 탐정단의 새 모험이 열릴지도 몰라요.";
  feedback.textContent = "퀘스트 완료 보너스 획득!";
  feedback.className = "feedback good";
  hintText.textContent = "";
  problemArea.className = "problem-area";
  problemArea.innerHTML = `
    <div class="final-panel">
      <div class="vault">🏆</div>
      <strong>최종 암호 ${finalAnswer}</strong>
      <p>완료한 퀘스트 ${getSolvedCount()}개, 획득한 배지 ${state.stars}개</p>
    </div>
  `;
}

function renderNumbers(numbers) {
  const row = document.createElement("div");
  row.className = "number-row";
  numbers.forEach((number) => {
    const tile = document.createElement("span");
    tile.className = number === null ? "tile blank" : "tile";
    tile.textContent = number === null ? "?" : number;
    row.appendChild(tile);
  });
  problemArea.appendChild(row);
}

function renderShapes(mission) {
  const row = document.createElement("div");
  row.className = "shape-row";
  const shape = mission.shape || "★";
  mission.data.forEach((count) => {
    const group = document.createElement("span");
    group.className = count === null ? "shape-group blank" : "shape-group";
    group.textContent = count === null ? "?" : shape.repeat(count);
    group.title = count === null ? "빈칸" : `${count}개`;
    row.appendChild(group);
  });
  problemArea.appendChild(row);
}

function renderTable(mission) {
  const wrap = document.createElement("div");
  wrap.className = "table-wrap";
  const table = document.createElement("table");
  const headerRow = document.createElement("tr");

  mission.headers.forEach((header) => {
    const th = document.createElement("th");
    th.textContent = header;
    headerRow.appendChild(th);
  });
  table.appendChild(headerRow);

  mission.rows.forEach((row) => {
    const tr = document.createElement("tr");
    row.forEach((cell) => {
      const td = document.createElement("td");
      td.textContent = cell;
      tr.appendChild(td);
    });
    table.appendChild(tr);
  });

  wrap.appendChild(table);
  problemArea.appendChild(wrap);
}

function renderRiddle(mission) {
  const card = document.createElement("div");
  card.className = "riddle-card";
  mission.lines.forEach((line) => {
    const item = document.createElement("span");
    item.textContent = line;
    card.appendChild(item);
  });
  problemArea.appendChild(card);
}

function normalize(value) {
  return value.trim().replaceAll(",", "").replace(/\s/g, "");
}

function checkAnswer(event) {
  event.preventDefault();
  const userAnswer = normalize(answerInput.value);

  if (!userAnswer) {
    showFeedback("추리 값을 입력해 주세요.", "bad");
    return;
  }

  if (state.finalMode) {
    checkFinalAnswer(userAnswer);
    return;
  }

  const mission = getCurrentMission();
  if (!mission) return;

  if (userAnswer === mission.answer) {
    const earned = Math.max(1, state.attemptsLeft);
    state.stars += earned;
    state.solved.add(mission.id);
    collectLocationClueIfComplete(mission.locationId);
    showFeedback(`퀘스트 성공! ${mission.rule} 스킬을 발동했어요. 배지 ${earned}개 획득!`, "good");
    detectiveLine.textContent = "좋아요. 규칙 몬스터가 약해지고 지도에 흔적이 기록됐습니다.";
    animateProblem("good-pop");
    launchSparkles();
    answerInput.disabled = true;
    hintButton.disabled = true;
    nextButton.disabled = false;
    renderMap();
    renderClues();
    stageLabel.textContent = `${getSolvedCount()} / ${missions.length}`;
    starsLabel.textContent = `${state.stars}개`;
    codeLabel.textContent = locations.map((location) => (state.collectedClues.has(location.id) ? location.clue : "-")).join("");
    clueCount.textContent = `${state.collectedClues.size} / ${locations.length}`;
    return;
  }

  state.attemptsLeft -= 1;
  attemptBadge.textContent = hpText();
  animateProblem("bad-shake");

  if (state.attemptsLeft <= 0) {
    state.solved.add(mission.id);
    collectLocationClueIfComplete(mission.locationId);
    showFeedback(`HP가 모두 소진됐습니다. 해답은 ${mission.answer}, 사용 스킬은 '${mission.rule}'입니다.`, "bad");
    detectiveLine.textContent = "스킬 설명을 확인했습니다. 다음 퀘스트로 이동할 수 있어요.";
    answerInput.disabled = true;
    hintButton.disabled = true;
    nextButton.disabled = false;
    renderMap();
    renderClues();
    stageLabel.textContent = `${getSolvedCount()} / ${missions.length}`;
    codeLabel.textContent = locations.map((location) => (state.collectedClues.has(location.id) ? location.clue : "-")).join("");
    clueCount.textContent = `${state.collectedClues.size} / ${locations.length}`;
    return;
  }

  detectiveLine.textContent = "HP가 줄었습니다. 변화량이나 곱셈 관계를 다시 살펴보세요.";
  showFeedback("공격이 빗나갔습니다. 규칙을 먼저 말로 외치고 다시 시도하세요.", "bad");
}

function checkFinalAnswer(userAnswer) {
  if (userAnswer === finalAnswer) {
    state.finalSolved = true;
    state.stars += 5;
    launchSparkles(18);
    renderGame();
    return;
  }

  state.attemptsLeft -= 1;
  attemptBadge.textContent = hpText();
  animateProblem("bad-shake");

  if (state.attemptsLeft <= 0) {
    showFeedback("보스 금고가 꿈쩍하지 않습니다. 월드맵 루트를 다시 확인하세요.", "bad");
    detectiveLine.textContent = "암호 조각은 월드맵 순서대로 이어 붙이면 됩니다.";
    answerInput.disabled = true;
    hintButton.disabled = true;
    restartButton.classList.remove("hidden");
    return;
  }

  showFeedback("금고 장치가 흔들렸지만 열리진 않았습니다. 루트 순서를 다시 보세요.", "bad");
}

function collectLocationClueIfComplete(locationId) {
  if (!isLocationComplete(locationId) || state.collectedClues.has(locationId)) return;
  state.collectedClues.add(locationId);
}

function showFeedback(message, tone) {
  feedback.textContent = message;
  feedback.className = `feedback ${tone}`;
}

function showHint() {
  if (state.finalMode) {
    hintText.textContent = "NPC 힌트: 월드맵 아래의 모험 루트대로 암호 조각을 읽으세요.";
    detectiveLine.textContent = "시계탑부터 시작해서 길을 따라가면 보스 금고가 열립니다.";
    return;
  }

  const mission = getCurrentMission();
  if (!mission) return;
  const hint = mission.hints[Math.min(state.hintIndex, mission.hints.length - 1)];
  hintText.textContent = `NPC 힌트: ${hint}`;
  detectiveLine.textContent = hint;
  state.hintIndex += 1;
}

function goNext() {
  if (state.finalSolved) return;

  if (state.finalMode) {
    renderFinalMission();
    return;
  }

  const mission = getCurrentMission();
  if (mission) {
    resetAttemptState();
    renderGame();
    return;
  }

  const selectedIndex = locations.findIndex((location) => location.id === state.selectedLocationId);
  const nextLocation = locations.slice(selectedIndex + 1).find((location) => isLocationUnlocked(location.id));

  if (nextLocation && !isLocationComplete(nextLocation.id)) {
    state.selectedLocationId = nextLocation.id;
    resetAttemptState();
    renderGame();
    return;
  }

  if (getSolvedCount() === missions.length) {
    state.finalMode = true;
    resetAttemptState();
    renderGame();
  }
}

function resetAttemptState() {
  state.attemptsLeft = 3;
  state.hintIndex = 0;
}

function animateProblem(className) {
  problemArea.classList.remove("good-pop", "bad-shake");
  void problemArea.offsetWidth;
  problemArea.classList.add(className);
}

function launchSparkles(count = 8) {
  const rect = problemArea.getBoundingClientRect();
  for (let i = 0; i < count; i += 1) {
    const spark = document.createElement("span");
    spark.className = "spark";
    spark.textContent = i % 3 === 0 ? "★" : "✦";
    spark.style.left = `${rect.left + rect.width * (0.2 + Math.random() * 0.6)}px`;
    spark.style.top = `${rect.top + rect.height * (0.25 + Math.random() * 0.4)}px`;
    spark.style.color = i % 2 === 0 ? "#f2b84b" : "#2563eb";
    document.body.appendChild(spark);
    spark.addEventListener("animationend", () => spark.remove());
  }
}

function restartGame() {
  state.selectedLocationId = locations[0].id;
  state.stars = 0;
  state.attemptsLeft = 3;
  state.hintIndex = 0;
  state.solved = new Set();
  state.collectedClues = new Set();
  state.finalMode = false;
  state.finalSolved = false;
  renderGame();
}

answerForm.addEventListener("submit", checkAnswer);
hintButton.addEventListener("click", showHint);
nextButton.addEventListener("click", goNext);
restartButton.addEventListener("click", restartGame);

renderGame();
