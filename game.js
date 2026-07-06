const missions = [
  {
    type: "숫자 규칙",
    title: "사라진 숫자 순서",
    story: "앞의 수와 뒤의 수를 비교해서 빈칸에 들어갈 수를 찾아보세요.",
    view: "numbers",
    data: [3, 6, 9, 12, null],
    answer: "15",
    hints: ["수가 일정하게 커지고 있어요.", "앞의 수보다 3씩 커집니다.", "12보다 3 큰 수를 쓰면 됩니다."],
    rule: "3씩 커지는 규칙",
  },
  {
    type: "숫자 규칙",
    title: "두 배로 커지는 문",
    story: "숫자 문을 열려면 다음 수를 맞혀야 합니다.",
    view: "numbers",
    data: [2, 4, 8, 16, null],
    answer: "32",
    hints: ["더하기보다 곱하기 규칙을 생각해 보세요.", "앞의 수에 2를 곱합니다.", "16의 2배는 32입니다."],
    rule: "2배씩 커지는 규칙",
  },
  {
    type: "도형 규칙",
    title: "별 공장의 주문",
    story: "별이 몇 개씩 늘어나는지 살펴보고 마지막 칸의 별 개수를 쓰세요.",
    view: "shapes",
    shape: "★",
    data: [1, 3, 5, null],
    answer: "7",
    hints: ["별의 개수가 일정하게 늘어납니다.", "1개, 3개, 5개처럼 2개씩 늘어요.", "5보다 2 큰 수를 쓰면 됩니다."],
    rule: "별이 2개씩 늘어나는 규칙",
  },
  {
    type: "표와 관계",
    title: "사과 상자 계산",
    story: "사과 한 상자에는 사과가 4개씩 들어 있습니다. 5상자에는 사과가 몇 개일까요?",
    view: "table",
    headers: ["상자 수", "1", "2", "3", "4", "5"],
    rows: [["사과 수", "4", "8", "12", "16", "?"]],
    answer: "20",
    hints: ["상자 수가 1 늘면 사과는 4개 늘어요.", "사과 수는 상자 수에 4를 곱한 값입니다.", "5 x 4를 계산해 보세요."],
    rule: "사과 수 = 상자 수 x 4",
  },
  {
    type: "관계식",
    title: "간식 가게의 가격표",
    story: "간식 한 개의 가격은 700원입니다. 간식 6개의 가격을 구하세요.",
    view: "table",
    headers: ["간식 수", "1", "2", "3", "4", "6"],
    rows: [["가격", "700", "1400", "2100", "2800", "?"]],
    answer: "4200",
    hints: ["간식이 1개 늘 때마다 700원씩 늘어요.", "가격은 간식 수에 700을 곱한 값입니다.", "6 x 700을 계산해 보세요."],
    rule: "가격 = 간식 수 x 700",
  },
  {
    type: "생활 속 관계",
    title: "의자 다리의 비밀",
    story: "의자 1개에는 다리가 4개 있습니다. 의자 8개의 다리는 모두 몇 개일까요?",
    view: "table",
    headers: ["의자 수", "1", "2", "3", "8"],
    rows: [["다리 수", "4", "8", "12", "?"]],
    answer: "32",
    hints: ["의자가 1개 늘면 다리가 4개 늘어요.", "다리 수는 의자 수에 4를 곱합니다.", "8 x 4를 계산해 보세요."],
    rule: "다리 수 = 의자 수 x 4",
  },
  {
    type: "숫자 규칙",
    title: "아래로 걷는 계단",
    story: "이번에는 수가 작아집니다. 빈칸에 들어갈 수를 찾으세요.",
    view: "numbers",
    data: [50, 45, 40, 35, null],
    answer: "30",
    hints: ["수가 일정하게 작아지고 있어요.", "앞의 수보다 5씩 작아집니다.", "35보다 5 작은 수를 쓰면 됩니다."],
    rule: "5씩 작아지는 규칙",
  },
  {
    type: "표와 관계",
    title: "리본 자르기",
    story: "상자 1개를 꾸미려면 리본 3m가 필요합니다. 상자 9개에는 리본이 몇 m 필요할까요?",
    view: "table",
    headers: ["상자 수", "1", "2", "3", "9"],
    rows: [["리본 길이(m)", "3", "6", "9", "?"]],
    answer: "27",
    hints: ["상자 수가 1 늘면 리본은 3m 늘어요.", "리본 길이는 상자 수에 3을 곱합니다.", "9 x 3을 계산해 보세요."],
    rule: "리본 길이 = 상자 수 x 3",
  },
  {
    type: "도형 규칙",
    title: "삼각형 행렬",
    story: "삼각형이 줄마다 3개씩 늘어납니다. 마지막 칸의 삼각형 개수를 쓰세요.",
    view: "shapes",
    shape: "▲",
    data: [2, 5, 8, null],
    answer: "11",
    hints: ["도형 개수가 일정하게 늘어납니다.", "2, 5, 8은 3씩 커집니다.", "8보다 3 큰 수를 쓰면 됩니다."],
    rule: "도형이 3개씩 늘어나는 규칙",
  },
  {
    type: "관계식",
    title: "마지막 암호",
    story: "입장권 1장의 가격은 2500원입니다. 입장권 4장의 가격을 구하면 마지막 문이 열립니다.",
    view: "table",
    headers: ["입장권 수", "1", "2", "3", "4"],
    rows: [["가격", "2500", "5000", "7500", "?"]],
    answer: "10000",
    hints: ["입장권 수와 가격은 함께 늘어납니다.", "가격은 입장권 수에 2500을 곱합니다.", "4 x 2500을 계산해 보세요."],
    rule: "가격 = 입장권 수 x 2500",
  },
];

const state = {
  current: 0,
  stars: 0,
  attemptsLeft: 3,
  hintIndex: 0,
  solved: Array(missions.length).fill(false),
};

const stageLabel = document.querySelector("#stageLabel");
const starsLabel = document.querySelector("#starsLabel");
const typeBadge = document.querySelector("#typeBadge");
const attemptBadge = document.querySelector("#attemptBadge");
const missionTitle = document.querySelector("#missionTitle");
const missionStory = document.querySelector("#missionStory");
const problemArea = document.querySelector("#problemArea");
const answerForm = document.querySelector("#answerForm");
const answerInput = document.querySelector("#answerInput");
const hintButton = document.querySelector("#hintButton");
const nextButton = document.querySelector("#nextButton");
const feedback = document.querySelector("#feedback");
const hintText = document.querySelector("#hintText");
const notebook = document.querySelector("#notebook");

function renderMission() {
  const mission = missions[state.current];
  state.attemptsLeft = 3;
  state.hintIndex = 0;

  stageLabel.textContent = `${state.current + 1} / ${missions.length}`;
  starsLabel.textContent = `별 ${state.stars}개`;
  typeBadge.textContent = mission.type;
  attemptBadge.textContent = "기회 3번";
  missionTitle.textContent = mission.title;
  missionStory.textContent = mission.story;
  answerInput.value = "";
  answerInput.disabled = false;
  hintButton.disabled = false;
  nextButton.disabled = true;
  feedback.textContent = "";
  feedback.className = "feedback";
  hintText.textContent = "";

  problemArea.innerHTML = "";
  if (mission.view === "numbers") renderNumbers(mission.data);
  if (mission.view === "shapes") renderShapes(mission);
  if (mission.view === "table") renderTable(mission);

  renderNotebook();
  answerInput.focus();
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
    group.className = count === null ? "shape-group tile blank" : "shape-group";
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

function renderNotebook() {
  notebook.innerHTML = "";
  missions.forEach((mission, index) => {
    const note = document.createElement("div");
    note.className = state.solved[index] ? "note done" : "note";
    note.textContent = state.solved[index] ? "해결" : `${index + 1}번`;
    note.title = mission.rule;
    notebook.appendChild(note);
  });
}

function normalize(value) {
  return value.trim().replaceAll(",", "");
}

function checkAnswer(event) {
  event.preventDefault();
  const mission = missions[state.current];
  const userAnswer = normalize(answerInput.value);

  if (!userAnswer) {
    showFeedback("정답을 입력해 주세요.", "bad");
    return;
  }

  if (userAnswer === mission.answer) {
    const earned = Math.max(1, state.attemptsLeft);
    state.stars += earned;
    state.solved[state.current] = true;
    starsLabel.textContent = `별 ${state.stars}개`;
    showFeedback(`정답입니다! ${mission.rule}을 찾아냈어요. 별 ${earned}개 획득!`, "good");
    answerInput.disabled = true;
    hintButton.disabled = true;
    nextButton.disabled = false;
    renderNotebook();
    return;
  }

  state.attemptsLeft -= 1;
  attemptBadge.textContent = `기회 ${state.attemptsLeft}번`;

  if (state.attemptsLeft <= 0) {
    showFeedback(`아쉬워요. 정답은 ${mission.answer}입니다. 규칙은 '${mission.rule}'이에요.`, "bad");
    answerInput.disabled = true;
    hintButton.disabled = true;
    nextButton.disabled = false;
    return;
  }

  showFeedback("다시 생각해 봐요. 규칙을 먼저 말로 설명해 보면 좋아요.", "bad");
}

function showFeedback(message, tone) {
  feedback.textContent = message;
  feedback.className = `feedback ${tone}`;
}

function showHint() {
  const mission = missions[state.current];
  const hint = mission.hints[Math.min(state.hintIndex, mission.hints.length - 1)];
  hintText.textContent = `힌트: ${hint}`;
  state.hintIndex += 1;
}

function goNext() {
  if (state.current === missions.length - 1) {
    const perfect = missions.length * 3;
    problemArea.innerHTML = `<div class="number-row"><span class="tile">완료</span><span class="tile">${state.stars}/${perfect}</span></div>`;
    missionTitle.textContent = "사건 해결!";
    missionStory.textContent = "모든 규칙 단서를 찾아냈습니다. 탐정 수첩을 보며 다시 연습해 보세요.";
    answerInput.disabled = true;
    hintButton.disabled = true;
    nextButton.disabled = true;
    feedback.textContent = "규칙 탐정단 인증서를 획득!";
    feedback.className = "feedback good";
    return;
  }

  state.current += 1;
  renderMission();
}

answerForm.addEventListener("submit", checkAnswer);
hintButton.addEventListener("click", showHint);
nextButton.addEventListener("click", goNext);

renderMission();
