// ===== Scene 1 elements =====
const envelope = document.getElementById("envelope");
const seal = document.getElementById("seal");
const hint = document.getElementById("hint");
const primaryBtn = document.getElementById("primaryBtn");

const line2 = document.querySelector(".line-2");
const line3 = document.querySelector(".line-3");

// ===== Music =====
const musicToggle = document.querySelector(".music-toggle");
const musicState = document.querySelector(".music-state");
const bgm = document.getElementById("bgm");

let opened = false;
let musicOn = false;

// ===== Scenes =====
const scene1 = document.getElementById("scene1");
const scene2 = document.getElementById("scene2");
const scene3 = document.getElementById("scene3");
const scene4 = document.getElementById("scene4");
const scene5 = document.getElementById("scene5");
const scene6 = document.getElementById("scene6");

const backToScene2 = document.getElementById("backToScene2");
const toScene3 = document.getElementById("toScene3");
const toScene4 = document.getElementById("toScene4");
const backToScene3 = document.getElementById("backToScene3");
const specialToScene5 = document.getElementById("specialToScene5");
const backToScene4 = document.getElementById("backToScene4");
const toScene6 = document.getElementById("toScene6");
const backToScene5 = document.getElementById("backToScene5");

// ===== Scene 2 =====
const polaroidTable = document.getElementById("polaroidTable");
const scene2Footer = document.getElementById("scene2Footer");

// ===== Scene 3 countdown =====
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
let countdownInterval = null;

// ===== Scene 3 reveals =====
const reveal1 = document.querySelector(".reveal-1");
const reveal2 = document.querySelector(".reveal-2");
const reveal3 = document.querySelector(".reveal-3");
const reveal4 = document.querySelectorAll(".reveal-4");

// ===== Scene 2 overlay =====
const overlay = document.getElementById("overlay");
const overlayClose = document.getElementById("overlayClose");
const overlayTitle = document.getElementById("overlayTitle");
const overlayText = document.getElementById("overlayText");
const overlayPhoto = document.getElementById("overlayPhoto");

// ===== Scene 4 =====
const futurePoints = document.querySelectorAll(".future-point");
const futureAnimLayer = document.getElementById("futureAnimLayer");
const futureModal = document.getElementById("futureModal");
const futureClose = document.getElementById("futureClose");
const futureModalIcon = document.getElementById("futureModalIcon");
const futureModalTitle = document.getElementById("futureModalTitle");
const futureModalText = document.getElementById("futureModalText");
const scene4Special = document.getElementById("scene4Special");
const whatMomentBtn = document.getElementById("whatMomentBtn");
const specialOverlay = document.getElementById("specialOverlay");
const specialClose = document.getElementById("specialClose");
const specialTyped = document.getElementById("specialTyped");
const specialFinal = document.getElementById("specialFinal");

// ===== Scene 5 =====
const dreamStars = document.querySelectorAll(".dream-star");
const dreamModal = document.getElementById("dreamModal");
const dreamClose = document.getElementById("dreamClose");
const dreamModalIcon = document.getElementById("dreamModalIcon");
const dreamModalTitle = document.getElementById("dreamModalTitle");
const dreamModalText = document.getElementById("dreamModalText");

// ===== Scene 6 =====
const quizStartCard = document.getElementById("quizStartCard");
const quizQuestionCard = document.getElementById("quizQuestionCard");
const quizResultCard = document.getElementById("quizResultCard");
const startQuizBtn = document.getElementById("startQuizBtn");
const quizProgress = document.getElementById("quizProgress");
const quizQuestionText = document.getElementById("quizQuestionText");
const quizOptions = document.getElementById("quizOptions");
const quizFeedback = document.getElementById("quizFeedback");
const quizResultTitle = document.getElementById("quizResultTitle");
const quizResultScore = document.getElementById("quizResultScore");
const quizResultText = document.getElementById("quizResultText");

const openedSet = new Set();
const SHOW_FOOTER_AFTER = 5;
const futureOpened = new Set();

let specialTypingInterval = null;
let currentQuestionIndex = 0;
let quizScore = 0;
let quizLocked = false;

const futureContent = {
  airport: {
    icon: "✈️",
    title: "Airport",
    text: `I keep imagining the moment you walk out of the airport.<br><br>
The moment where I finally see you in real life instead of through a screen.<br><br>
And honestly… I don’t even know what I’ll say first.<br><br>
I think I’ll probably just smile like an idiot and hug you.`
  },
  walk: {
    icon: "👣",
    title: "First walk",
    text: `I imagine us walking somewhere without really caring where we're going.<br><br>
Maybe it's quiet.<br><br>
Maybe it's busy.<br><br>
But the thing that will matter most is simple —<br><br>
I'll finally be walking beside you.`
  },
  around: {
    icon: "📍",
    title: "Showing you around",
    text: `I imagine showing you the places around me.<br><br>
The streets I walk through all the time,
the little spots that are normal parts of my day.<br><br>
Except this time they won’t feel normal anymore —<br><br>
because you’ll be there with me.`
  },
  food: {
    icon: "🍽️",
    title: "Getting food",
    text: `I think about us getting food together for the first time.<br><br>
Sitting across from each other,
talking the same way we always do.<br><br>
Except this time there won’t be a screen between us.`
  },
  photo: {
    icon: "📸",
    title: "First photo",
    text: `At some point I know I’ll want a picture with you.<br><br>
Not because it needs to be perfect,<br><br>
but because it will be the first photo of something we waited so long for.`
  },
  quiet: {
    icon: "🌙",
    title: "Quiet moment",
    text: `And I think about the quiet moments too.<br><br>
When we’re just sitting next to each other,
not really doing anything special.<br><br>
Just realizing the distance is finally gone.`
  }
};

const specialMessage = [
  "The moment where the distance between us finally disappears.",
  "",
  "And it stops feeling like we're waiting for a future…",
  "",
  "because suddenly we're already inside it."
];

const dreamContent = {
  engagement: {
    icon: "💍",
    title: "Our engagement",
    text: `Sometimes I imagine the day I ask you to spend the rest of your life with me.<br><br>
Not because it has to be some perfect movie moment,<br><br>
but because I like the idea of promising my future to you.`
  },
  wedding: {
    icon: "🤍",
    title: "Our wedding day",
    text: `I imagine seeing you on our wedding day<br><br>
and thinking that somehow, after everything,<br><br>
I still ended up with the girl I used to miss through a screen.`
  },
  home: {
    icon: "🏡",
    title: "Our home",
    text: `I think about a place that feels like ours.<br><br>
Not because of walls or furniture,<br><br>
but because you’d be there.<br><br>
I think that’s what home would really mean to me.`
  },
  travels: {
    icon: "🌍",
    title: "Our travels",
    text: `I imagine us going places together,<br><br>
taking pictures, getting lost somewhere,<br><br>
laughing about little things only we would remember.`
  },
  old: {
    icon: "🌙",
    title: "Growing old with you",
    text: `And sometimes my mind goes all the way to the end of life,<br><br>
and I imagine us older,<br><br>
still teasing each other,<br><br>
still laughing,<br><br>
still choosing each other after everything.`
  }
};

const quizQuestions = [
  {
    question: "when did we meet?",
    options: ["17 october", "18 october", "16 october", "19 october"],
    answer: 0,
    feedbackCorrect: "yep 😌",
    feedbackWrong: "nahhh 😭"
  },
  {
    question: "when did we get together?",
    options: ["18 october", "19 october", "20 october", "21 october"],
    answer: 1,
    feedbackCorrect: "you better know this one 💛",
    feedbackWrong: "wronggg 😭"
  },
  {
    question: "what is my favorite color?",
    options: ["green", "purple", "red", "orange"],
    answer: 2,
    feedbackCorrect: "obviously 😌",
    feedbackWrong: "crazy answer bro 😭"
  },
  {
    question: "what was our first holiday/festival together?",
    options: ["thanksgiving", "halloween", "christmas", "new years"],
    answer: 1,
    feedbackCorrect: "yesss 🎃",
    feedbackWrong: "nopeee"
  },
  {
    question: "what do I usually do when u feel low?",
    options: ["ignore you", "paragraphs to make u feel better", "turn u on", "make u feel worse"],
    answer: 1,
    feedbackCorrect: "always 🫶",
    feedbackWrong: "that’s not me 😭"
  },
  {
    question: "what is the name of the instrument I play?",
    options: ["congo", "violin", "Tabla", "guitar"],
    answer: 2,
    feedbackCorrect: "my tabla ofc 😌",
    feedbackWrong: "brooo"
  },
  {
    question: "what religion am I?",
    options: ["hinduism", "sikhism", "buddhism", "judaism"],
    answer: 1,
    feedbackCorrect: "good girl 😌",
    feedbackWrong: "wronggg"
  },
  {
    question: "what do I do best?",
    options: ["ragebait you", "hurt you", "win the elections", "run businesses"],
    answer: 0,
    feedbackCorrect: "LMFAOO yes 😭",
    feedbackWrong: "be serious 😭"
  },
  {
    question: "what is one thing about you that I like the most?",
    options: ["your glasses", "your blue eyes", "airpods in your ears", "you drinking red bull"],
    answer: 1,
    feedbackCorrect: "your blue eyes >>>",
    feedbackWrong: "nopeee"
  },
  {
    question: "what nickname did u give me?",
    options: ["bigdaddy", "babyboy", "pengAuin", "sweetheart"],
    answer: 2,
    feedbackCorrect: "pengAuin forever 😌",
    feedbackWrong: "you made that up 😭"
  }
];

// ===== Helper: switch backgrounds =====
function setBodyBg(scene) {
  document.body.classList.remove("bg-scene2", "bg-scene3", "bg-scene4", "bg-scene5", "bg-scene6");
  if (scene === 2) document.body.classList.add("bg-scene2");
  if (scene === 3) document.body.classList.add("bg-scene3");
  if (scene === 4) document.body.classList.add("bg-scene4");
  if (scene === 5) document.body.classList.add("bg-scene5");
  if (scene === 6) document.body.classList.add("bg-scene6");
}

// ===== Scene 1 =====
function openEnvelope() {
  if (opened) return;
  opened = true;

  envelope.classList.add("open");
  if (hint) hint.textContent = "";

  if (line2) {
    setTimeout(() => {
      line2.style.animation = "fadeUp 1.8s ease forwards";
    }, 900);
  }

  if (line3) {
    setTimeout(() => {
      line3.style.animation = "fadeUp 1.8s ease forwards";
    }, 1600);
  }

  setTimeout(() => {
    primaryBtn.hidden = false;
    requestAnimationFrame(() => primaryBtn.classList.add("show"));
  }, 2200);
}

seal.addEventListener("click", openEnvelope);

envelope.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") openEnvelope();
});

primaryBtn.addEventListener("click", () => {
  scene1.classList.add("fade-out");

  setTimeout(() => {
    scene1.classList.remove("active", "fade-out");
    scene2.classList.add("active");
    setBodyBg(2);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, 720);
});

// ===== Scene 2 =====
function showOverlay(title, text, img, id) {
  overlayTitle.textContent = title || "A memory";
  overlayText.innerHTML = text || "";
  overlayPhoto.style.backgroundImage = img ? `url('${img}')` : "";

  overlay.classList.add("show");
  overlay.setAttribute("aria-hidden", "false");

  if (id) openedSet.add(id);

  if (openedSet.size >= SHOW_FOOTER_AFTER) {
    scene2Footer.classList.add("show");
    requestAnimationFrame(() => toScene3.classList.add("show"));
  }
}

function hideOverlay() {
  overlay.classList.remove("show");
  overlay.setAttribute("aria-hidden", "true");
}

polaroidTable.addEventListener("click", (e) => {
  const btn = e.target.closest(".polaroid");
  if (!btn) return;

  const title = btn.getAttribute("data-title");
  const text = btn.getAttribute("data-text");
  const img = btn.getAttribute("data-img");
  const id = btn.getAttribute("data-id");

  showOverlay(title, text, img, id);
});

overlayClose.addEventListener("click", hideOverlay);
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) hideOverlay();
});

// ===== Scene 3 =====
function startCountdown() {
  if (countdownInterval) clearInterval(countdownInterval);

  function updateCountdown() {
    const now = new Date();
    let targetYear = now.getFullYear();
    let target = new Date(targetYear, 7, 1, 0, 0, 0);

    if (now > target) {
      targetYear += 1;
      target = new Date(targetYear, 7, 1, 0, 0, 0);
    }

    const diff = target - now;

    if (diff <= 0) {
      daysEl.textContent = "000";
      hoursEl.textContent = "00";
      minutesEl.textContent = "00";
      secondsEl.textContent = "00";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    daysEl.textContent = String(days).padStart(3, "0");
    hoursEl.textContent = String(hours).padStart(2, "0");
    minutesEl.textContent = String(minutes).padStart(2, "0");
    secondsEl.textContent = String(seconds).padStart(2, "0");
  }

  updateCountdown();
  countdownInterval = setInterval(updateCountdown, 1000);
}

function startScene3Reveal() {
  reveal1.classList.remove("show");
  reveal2.classList.remove("show");
  reveal3.classList.remove("show");
  reveal4.forEach(el => el.classList.remove("show"));

  setTimeout(() => reveal1.classList.add("show"), 700);
  setTimeout(() => reveal2.classList.add("show"), 1700);
  setTimeout(() => reveal3.classList.add("show"), 3000);
  setTimeout(() => reveal4.forEach(el => el.classList.add("show")), 4300);
}

toScene3.addEventListener("click", () => {
  scene2.classList.add("fade-out");

  setTimeout(() => {
    scene2.classList.remove("active", "fade-out");
    scene3.classList.add("active");
    setBodyBg(3);
    window.scrollTo({ top: 0, behavior: "instant" });
    startCountdown();
    startScene3Reveal();
  }, 720);
});

backToScene2.addEventListener("click", () => {
  scene3.classList.add("fade-out");

  setTimeout(() => {
    scene3.classList.remove("active", "fade-out");
    scene2.classList.add("active");
    setBodyBg(2);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, 720);
});

toScene4.addEventListener("click", () => {
  scene3.classList.add("fade-out");

  setTimeout(() => {
    scene3.classList.remove("active", "fade-out");
    scene4.classList.add("active");
    setBodyBg(4);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, 720);
});

// ===== Scene 4 =====
function clearAnimClasses() {
  futureAnimLayer.classList.remove(
    "play-airport",
    "play-walk",
    "play-around",
    "play-food",
    "play-photo",
    "play-quiet"
  );
}

function playFutureAnimation(type) {
  clearAnimClasses();
  const classMap = {
    airport: "play-airport",
    walk: "play-walk",
    around: "play-around",
    food: "play-food",
    photo: "play-photo",
    quiet: "play-quiet"
  };
  futureAnimLayer.classList.add(classMap[type]);
  setTimeout(clearAnimClasses, 1600);
}

function openFutureModal(type) {
  const item = futureContent[type];
  if (!item) return;

  playFutureAnimation(type);

  setTimeout(() => {
    futureModalIcon.textContent = item.icon;
    futureModalTitle.textContent = item.title;
    futureModalText.innerHTML = item.text;
    futureModal.classList.add("show");
    futureModal.setAttribute("aria-hidden", "false");
  }, 700);
}

function closeFutureModal() {
  futureModal.classList.remove("show");
  futureModal.setAttribute("aria-hidden", "true");
}

futurePoints.forEach(btn => {
  btn.addEventListener("click", () => {
    const type = btn.getAttribute("data-future");
    futureOpened.add(type);
    btn.classList.add("opened");
    openFutureModal(type);

    if (futureOpened.size === 6) {
      scene4Special.classList.add("show");
    }
  });
});

futureClose.addEventListener("click", closeFutureModal);
futureModal.addEventListener("click", (e) => {
  if (e.target === futureModal) closeFutureModal();
});

function startTypingSpecial() {
  specialTyped.textContent = "";
  specialFinal.classList.remove("show");
  specialToScene5.style.visibility = "hidden";

  const fullText = specialMessage.join("\n");
  let index = 0;

  if (specialTypingInterval) clearInterval(specialTypingInterval);

  specialTypingInterval = setInterval(() => {
    specialTyped.textContent = fullText.slice(0, index);
    index += 1;

    if (index > fullText.length) {
      clearInterval(specialTypingInterval);
      setTimeout(() => {
        specialFinal.classList.add("show");
        specialToScene5.style.visibility = "visible";
      }, 500);
    }
  }, 26);
}

whatMomentBtn.addEventListener("click", () => {
  specialOverlay.classList.add("show");
  specialOverlay.setAttribute("aria-hidden", "false");
  startTypingSpecial();
});

function closeSpecialOverlay() {
  specialOverlay.classList.remove("show");
  specialOverlay.setAttribute("aria-hidden", "true");
  if (specialTypingInterval) clearInterval(specialTypingInterval);
}

specialClose.addEventListener("click", closeSpecialOverlay);
specialOverlay.addEventListener("click", (e) => {
  if (e.target === specialOverlay) closeSpecialOverlay();
});

backToScene3.addEventListener("click", () => {
  scene4.classList.add("fade-out");

  setTimeout(() => {
    scene4.classList.remove("active", "fade-out");
    scene3.classList.add("active");
    setBodyBg(3);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, 720);
});

specialToScene5.addEventListener("click", () => {
  closeSpecialOverlay();
  scene4.classList.add("fade-out");

  setTimeout(() => {
    scene4.classList.remove("active", "fade-out");
    scene5.classList.add("active");
    setBodyBg(5);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, 720);
});

// ===== Scene 5 =====
function openDreamModal(type) {
  const item = dreamContent[type];
  if (!item) return;

  dreamModalIcon.textContent = item.icon;
  dreamModalTitle.textContent = item.title;
  dreamModalText.innerHTML = item.text;
  dreamModal.classList.add("show");
  dreamModal.setAttribute("aria-hidden", "false");
}

function closeDreamModal() {
  dreamModal.classList.remove("show");
  dreamModal.setAttribute("aria-hidden", "true");
}

dreamStars.forEach(btn => {
  btn.addEventListener("click", () => {
    const type = btn.getAttribute("data-dream");
    btn.classList.add("opened");
    openDreamModal(type);
  });
});

dreamClose.addEventListener("click", closeDreamModal);
dreamModal.addEventListener("click", (e) => {
  if (e.target === dreamModal) closeDreamModal();
});

backToScene4.addEventListener("click", () => {
  scene5.classList.add("fade-out");

  setTimeout(() => {
    scene5.classList.remove("active", "fade-out");
    scene4.classList.add("active");
    setBodyBg(4);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, 720);
});

toScene6.addEventListener("click", () => {
  scene5.classList.add("fade-out");

  setTimeout(() => {
    scene5.classList.remove("active", "fade-out");
    scene6.classList.add("active");
    setBodyBg(6);
    window.scrollTo({ top: 0, behavior: "instant" });
    resetQuiz();
  }, 720);
});

// ===== Scene 6 Quiz =====
function showQuizCard(card) {
  [quizStartCard, quizQuestionCard, quizResultCard].forEach(el => el.classList.remove("active"));
  card.classList.add("active");
}

function resetQuiz() {
  currentQuestionIndex = 0;
  quizScore = 0;
  quizLocked = false;
  quizFeedback.textContent = "";
  showQuizCard(quizStartCard);
}

function renderQuestion() {
  const q = quizQuestions[currentQuestionIndex];
  quizProgress.textContent = `Question ${currentQuestionIndex + 1} / ${quizQuestions.length}`;
  quizQuestionText.textContent = q.question;
  quizFeedback.textContent = "";
  quizOptions.innerHTML = "";

  q.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.className = "quiz-option";
    btn.type = "button";
    btn.textContent = option;
    btn.addEventListener("click", () => handleAnswer(index));
    quizOptions.appendChild(btn);
  });

  showQuizCard(quizQuestionCard);
}

function handleAnswer(selectedIndex) {
  if (quizLocked) return;
  quizLocked = true;

  const q = quizQuestions[currentQuestionIndex];
  const buttons = [...quizOptions.querySelectorAll(".quiz-option")];

  buttons.forEach((btn, i) => {
    btn.classList.add("disabled");
    if (i === q.answer) btn.classList.add("correct");
    if (i === selectedIndex && i !== q.answer) btn.classList.add("wrong");
  });

  if (selectedIndex === q.answer) {
    quizScore += 1;
    quizFeedback.textContent = q.feedbackCorrect;
  } else {
    quizFeedback.textContent = q.feedbackWrong;
  }

  setTimeout(() => {
    currentQuestionIndex += 1;
    quizLocked = false;

    if (currentQuestionIndex < quizQuestions.length) {
      renderQuestion();
    } else {
      showQuizResult();
    }
  }, 1100);
}

function showQuizResult() {
  const passed = quizScore >= 7;
  quizResultScore.textContent = `${quizScore} / ${quizQuestions.length}`;

  if (passed) {
    quizResultTitle.textContent = "You know me pretty well.";
    quizResultText.textContent = "I guess I chose the right person.";
  } else {
    quizResultTitle.textContent = "You don’t know everything yet…";
    quizResultText.textContent = "but you still know my heart where it matters.";
  }

  showQuizCard(quizResultCard);
}

startQuizBtn.addEventListener("click", () => {
  renderQuestion();
});

backToScene5.addEventListener("click", () => {
  scene6.classList.add("fade-out");

  setTimeout(() => {
    scene6.classList.remove("active", "fade-out");
    scene5.classList.add("active");
    setBodyBg(5);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, 720);
});

// ===== Global ESC close =====
document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;

  if (overlay.classList.contains("show")) hideOverlay();
  if (futureModal.classList.contains("show")) closeFutureModal();
  if (specialOverlay.classList.contains("show")) closeSpecialOverlay();
  if (dreamModal.classList.contains("show")) closeDreamModal();
});

// ===== Music toggle =====
musicToggle.addEventListener("click", async () => {
  musicOn = !musicOn;
  musicToggle.setAttribute("aria-pressed", String(musicOn));
  musicState.textContent = musicOn ? "On" : "Off";

  try {
    if (!bgm) return;
    if (musicOn) await bgm.play();
    else bgm.pause();
  } catch (err) {
    console.log("Music error:", err);
  }
});