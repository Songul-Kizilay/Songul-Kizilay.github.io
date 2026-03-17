(() => {
  const script = document.currentScript;
  const lang = script && script.dataset.lang === "tr" ? "tr" : "en";
  const t = {
    en: {
      boot: [
        "Songul Ozugurler - Security Researcher",
        "I break web applications for fun.",
        "Web app security, bug bounty, and red team operations."
      ],
      prompt: "songul@sec:~$",
      helpTitle: "Core commands:",
      core: "[core]",
      fun: "[fun]",
      ops: "[ops]",
      game: "[game]",
      hints: "[hints]",
      coreItems: "about  writeups  blog  tools  contact",
      coreItems2: "stats  history  achievements  search <term>",
      funItems: "sudo  hack  matrix  flag  self-destruct",
      opsItems: "recon  scan <target>  nmap localhost",
      gameItems: "start  help-ctf  leaderboard",
      hintItems: "rm -rf /  passwords  coffee  aliens  404  debug",
      hintItems2: "developer  bruteforce login  sudo hire songul",
      hintItems3: "ls  pwd  cd /admin  cat /notes.txt",
      helpNote: "More exist. Type around.",
      notFound: "Command not found.",
      tryHelp: "Try: help",
      ctfHelp: "That command will not help you hack this lab.",
      scoreEmpty: "No scores yet.",
      scoreSaved: "Score submitted.",
      matrix1: "Wake up Neo...",
      matrix2: "The Matrix has you.",
      about: [
        "Operator profile: web application security, bug bounty, and offensive research.",
        "More detail on /about.html."
      ],
      skills: [
        "Web Application Security",
        "Bug Bounty Validation",
        "Red Team Operations",
        "Burp Suite / Python / Bash"
      ],
      github: [
        "Selected public notes are visible.",
        "Core workflows and private project code stay off-site.",
        "Detailed access can be shared on request."
      ],
      contact: [
        "songulkizilay46@gmail.com",
        "linkedin.com/in/songulozugurler",
        "medium.com/@songulkizilay"
      ],
      stats: [
        "writeups: 95+",
        "focus: web app security / red team research",
        "labs: PortSwigger / HTB / private workflows"
      ],
      now: [
        "Current focus:",
        "- Web application attack paths",
        "- Practical tooling",
        "- Repeatable offensive notes"
      ],
      sudo: ["Nice try.", "But you are not root here."],
      rm: ["Permission denied.", "This system is protected by Songul Security(TM)."],
      passwords: ["admin: admin123", "root: toor", "developer: password", "", "Just kidding. Use a password manager."],
      flag: ["HTB{songul_security_lab}", "Opening decoy image..."],
      selfDestruct: ["Self destruct sequence initiated...", "", "5", "4", "3", "2", "1", "", "System survived.", "Nice try."],
      hack: ["Initializing cyber attack...", "[####......] 40%", "[########..] 80%", "[##########] 100%"],
      hackEnd: ["Target hacked.", "Just kidding. I hack legally."],
      coffee: ["Brewing coffee...", "", "Fuel for bug hunting."],
      aliens: ["Scanning galaxy for vulnerabilities...", "", "No aliens found.", "But plenty of XSS."],
      sudoHire: ["Access granted.", "", "Welcome to the team.", "Recruiter bait :)"],
      scanDone: "Scan complete.",
      recon: ["Gathering intelligence...", "Subdomains found: 12", "Open ports: 4", "Interesting endpoints: /admin /api /debug", "Recon complete."],
      brute: ["Trying passwords...", "admin123", "password", "letmein", "123456", "", "Success.", "Developers still reuse passwords."],
      sleep: ["Security researchers do not sleep.", "They wait for scans to finish."],
      bug: ["Searching for bugs...", "", "Bug found.", "It is called developer logic."],
      e404: ["Error 404", "", "Sleep not found.", "Coffee required."],
      debug: ["Problem located.", "", "Between keyboard and chair."],
      developer: ["Developer detected.", "Security level decreased."],
      nmap: ["PORT     STATE SERVICE", "22/tcp   open  ssh", "80/tcp   open  http", "443/tcp  open  https", "", "Host looks secure."],
      start: ["Initializing Songul Security Lab...", "Level 1: Recon", "Hint: recon"],
      helpCtf: ["Available actions:", "- recon", "- scan admin.songul.lab", "- bruteforce login", "- inject <script>alert(1)</script>", "- login ' OR 1=1 --", "- exploit", "- submit-score <name>", "- leaderboard", "- exit"],
      reconGame: ["Scanning target...", "Subdomains found:", "- dev.songul.lab", "- admin.songul.lab", "FLAG{recon_complete}"],
      reconNext: "Level 2: scan admin.songul.lab",
      scanGame: ["Scanning admin panel...", "Open port: 80", "Login page detected."],
      scanNext: "Level 3 unlocked: bruteforce login",
      bruteGame: ["Trying credentials...", "admin:admin   x", "admin:password   x", "admin:admin123   ok", "Access granted."],
      bruteNext: "Level 4: inject <script>alert(1)</script>",
      injectUsage: "Usage: inject <payload>",
      injectBlocked: "Payload blocked.",
      injectFail: "Sanitization bypass failed.",
      injectNext: "Level 5: login ' OR 1=1 --",
      loginFail: "Login failed.",
      loginAnim: ["Bypassing authentication...", "Dumping database...", "Escalating privileges..."],
      loginDone: ["FLAG{sqli_pwned}", "All levels completed."],
      scoreLine: "Score: ",
      submitHint: "Type submit-score <name> to enter the leaderboard.",
      exploitAnim: ["Uploading shell...", "Connecting...", "Root access granted"],
      exploitFail: "You are not there yet.",
      exploitDone: "FLAG{root_access}",
      finalScore: "Final score: ",
      finishLab: "Finish the lab first.",
      exitLab: "You left the challenge.",
      matches: "Matches: ",
      leaderboardTitle: "Leaderboard",
      searchUsage: "Usage: search <keyword>",
      historyTitle: "Recent command history",
      historyEmpty: "No command history yet.",
      achievementsTitle: "Unlocked achievements",
      achievementsEmpty: "No achievements unlocked yet.",
      achievementsOpen: "Achievement screen opened.",
      achievementsSummary: "Unlocked badges: ",
      achievementsHint: "Click a badge to copy the label.",
      badgePanel: "Badge panel",
      badgeCount: "badges unlocked",
      badgeLocked: "locked",
      fsMissing: "No such file or directory.",
      fsUsageCd: "Usage: cd <path>",
      fsUsageCat: "Usage: cat <file>",
      modalLabel: "Case study",
      achievements: {
        firstCommand: "booted terminal",
        recon: "mapped the surface",
        xss: "xss operator",
        sqli: "database whisperer",
        root: "root-ish",
        matrix: "entered the matrix",
        filesystem: "dug through fake files"
      }
    },
    tr: {
      boot: [
        "Songul Ozugurler - Siber Guvenlik Arastirmacisi",
        "Web uygulamalarini zorlamayi seviyorum.",
        "Web uygulama guvenligi, bug bounty ve red team operasyonlari."
      ],
      prompt: "songul@sec:~$",
      helpTitle: "Temel komutlar:",
      core: "[cekirdek]",
      fun: "[eglence]",
      ops: "[operasyon]",
      game: "[oyun]",
      hints: "[ipuclari]",
      coreItems: "about  writeups  blog  tools  contact",
      coreItems2: "stats  history  achievements  search <kelime>",
      funItems: "sudo  hack  matrix  flag  self-destruct",
      opsItems: "recon  scan <hedef>  nmap localhost",
      gameItems: "start  help-ctf  leaderboard",
      hintItems: "rm -rf /  passwords  coffee  aliens  404  debug",
      hintItems2: "developer  bruteforce login  sudo hire songul",
      hintItems3: "ls  pwd  cd /admin  cat /notes.txt",
      helpNote: "Daha fazlasi var. Kurcala.",
      notFound: "Komut bulunamadi.",
      tryHelp: "Dene: help",
      ctfHelp: "Bu komut labi gecmene yardim etmez.",
      scoreEmpty: "Henuz skor yok.",
      scoreSaved: "Skor kaydedildi.",
      matrix1: "Uyan Neo...",
      matrix2: "Matrix seni buldu.",
      about: [
        "Operator profili: web uygulama guvenligi, bug bounty ve ofansif arastirma.",
        "Detaylar: /tr/about.html"
      ],
      skills: [
        "Web Uygulama Guvenligi",
        "Bug Bounty Dogrulama",
        "Red Team Operasyonlari",
        "Burp Suite / Python / Bash"
      ],
      github: [
        "Bu sitede secili public notlar gorunur.",
        "Ana workflow'lar ve ozel proje kodlari burada acik degil.",
        "Detayli erisim talep uzerine paylasilabilir."
      ],
      contact: [
        "songulkizilay46@gmail.com",
        "linkedin.com/in/songulozugurler",
        "medium.com/@songulkizilay"
      ],
      stats: [
        "writeup: 95+",
        "odak: web uygulama guvenligi / red team arastirmasi",
        "lablar: PortSwigger / HTB / ozel workflow"
      ],
      now: [
        "Su an odak:",
        "- Web uygulama saldiri patikalari",
        "- Pratik tooling",
        "- Tekrarlanabilir ofansif notlar"
      ],
      sudo: ["Guzel deneme.", "Ama burada root degilsin."],
      rm: ["Izin reddedildi.", "Bu sistem Songul Security(TM) tarafindan korunuyor."],
      passwords: ["admin: admin123", "root: toor", "developer: password", "", "Saka. Bir sifre yoneticisi kullan."],
      flag: ["HTB{songul_security_lab}", "Komik gorsel aciliyor..."],
      selfDestruct: ["Self destruct sequence baslatiliyor...", "", "5", "4", "3", "2", "1", "", "Sistem hayatta kaldi.", "Guzel deneme."],
      hack: ["Siber saldiri modulleri baslatiliyor...", "[####......] 40%", "[########..] 80%", "[##########] 100%"],
      hackEnd: ["Hedef ele gecirildi.", "Saka. Yasal hack yapiyorum."],
      coffee: ["Kahve demleniyor...", "", "Bug avinin yakiti hazir."],
      aliens: ["Galakside zafiyet taraniyor...", "", "Alien bulunamadi.", "Ama bolca XSS var."],
      sudoHire: ["Erisim verildi.", "", "Takima hos geldin.", "Recruiter bait :)"],
      scanDone: "Tarama tamamlandi.",
      recon: ["Istihbarat toplaniyor...", "Subdomain bulundu: 12", "Acik port: 4", "Ilginc endpointler: /admin /api /debug", "Recon tamamlandi."],
      brute: ["Sifreler deneniyor...", "admin123", "password", "letmein", "123456", "", "Basarili.", "Developerlar hala ayni sifreleri kullaniyor."],
      sleep: ["Guvenlik arastirmacilari uyumaz.", "Tarama bitene kadar bekler."],
      bug: ["Bug araniyor...", "", "Bug bulundu.", "Adi developer logic."],
      e404: ["Hata 404", "", "Uyku bulunamadi.", "Kahve gerekli."],
      debug: ["Problem bulundu.", "", "Klavye ile sandalye arasinda."],
      developer: ["Developer tespit edildi.", "Guvenlik seviyesi dustu."],
      nmap: ["PORT     STATE SERVICE", "22/tcp   open  ssh", "80/tcp   open  http", "443/tcp  open  https", "", "Host guvenli gorunuyor."],
      start: ["Songul Security Lab baslatiliyor...", "Seviye 1: Recon", "Ipuclari: recon"],
      helpCtf: ["Mevcut aksiyonlar:", "- recon", "- scan admin.songul.lab", "- bruteforce login", "- inject <script>alert(1)</script>", "- login ' OR 1=1 --", "- exploit", "- submit-score <isim>", "- leaderboard", "- exit"],
      reconGame: ["Hedef taraniyor...", "Subdomain bulundu:", "- dev.songul.lab", "- admin.songul.lab", "FLAG{recon_complete}"],
      reconNext: "Seviye 2: scan admin.songul.lab",
      scanGame: ["Admin panel taraniyor...", "Acik port: 80", "Login sayfasi bulundu."],
      scanNext: "Seviye 3 acildi: bruteforce login",
      bruteGame: ["Kredansiyeller deneniyor...", "admin:admin   x", "admin:password   x", "admin:admin123   ok", "Erisim verildi."],
      bruteNext: "Seviye 4: inject <script>alert(1)</script>",
      injectUsage: "Kullanim: inject <payload>",
      injectBlocked: "Payload engellendi.",
      injectFail: "Sanitization bypass basarisiz.",
      injectNext: "Seviye 5: login ' OR 1=1 --",
      loginFail: "Giris basarisiz.",
      loginAnim: ["Kimlik dogrulama atlatiliyor...", "Veritabani dump ediliyor...", "Yetki yukseltiliyor..."],
      loginDone: ["FLAG{sqli_pwned}", "Tum seviyeler tamamlandi."],
      scoreLine: "Skor: ",
      submitHint: "Lider tabloya girmek icin submit-score <isim> yaz.",
      exploitAnim: ["Shell yukleniyor...", "Baglanti kuruluyor...", "Root erisimi verildi"],
      exploitFail: "Henuz orada degilsin.",
      exploitDone: "FLAG{root_access}",
      finalScore: "Final skor: ",
      finishLab: "Once labi bitir.",
      exitLab: "Oyundan cikildi.",
      matches: "Eslesenler: ",
      leaderboardTitle: "Lider Tablosu",
      searchUsage: "Kullanim: search <kelime>",
      historyTitle: "Son komutlar",
      historyEmpty: "Henuz komut gecmisi yok.",
      achievementsTitle: "Acilan rozetler",
      achievementsEmpty: "Henuz rozet acilmadi.",
      achievementsOpen: "Rozet ekrani acildi.",
      achievementsSummary: "Acilan rozet sayisi: ",
      achievementsHint: "Rozet etiketini kopyalamak icin tikla.",
      badgePanel: "Rozet paneli",
      badgeCount: "rozet acildi",
      badgeLocked: "kilitli",
      fsMissing: "Dosya ya da dizin bulunamadi.",
      fsUsageCd: "Kullanim: cd <yol>",
      fsUsageCat: "Kullanim: cat <dosya>",
      modalLabel: "Vaka calismasi",
      achievements: {
        firstCommand: "terminal baslatildi",
        recon: "saldiri yuzeyi haritalandi",
        xss: "xss operatoru",
        sqli: "veritabani fisildayici",
        root: "yari root",
        matrix: "matrixe girildi",
        filesystem: "sahte dosya sistemi kazildi"
      }
    }
  }[lang];
  const paths = lang === "tr"
    ? { about: "about.html", blog: "blog.html", lang: "../index.html", flag: "../flag.html", matrix: "../matrix.html", leaderboard: "songul-terminal-leaderboard-tr" }
    : { about: "about.html", blog: "blog.html", lang: "tr/index.html", flag: "flag.html", matrix: "matrix.html", leaderboard: "songul-terminal-leaderboard" };

  const typewriter = document.getElementById("typewriter") || document.getElementById("tw0");
  const terminalBox = document.querySelector(".terminal-box") || document.querySelector(".o6");
  const menuToggle = document.getElementById("menu-toggle") || document.getElementById("m0");
  const navLinks = document.getElementById("nav-links") || document.getElementById("n0");
  const output = document.getElementById("terminal-output") || document.getElementById("o0");
  const form = document.getElementById("terminal-form");
  const input = document.getElementById("terminal-input");
  const vulnApp = document.getElementById("vuln-app");
  const items = document.querySelectorAll(".reveal");
  const spySections = document.querySelectorAll("section[id]");
  const spyLinks = document.querySelectorAll(".nav-links a[href^=\"#\"]");
  const track = document.getElementById("project-track");
  const dots = document.querySelectorAll(".carousel-dot");
  const prev = document.getElementById("carousel-prev");
  const next = document.getElementById("carousel-next");
  const commandButtons = document.querySelectorAll(".terminal-action");
  const commands = Object.create(null);
  const exactCommands = Object.create(null);
  const history = [];
  let historyIndex = -1;
  let currentSlide = 0;
  let matrixTimer = 0;
  let game = { active: false, level: 0, score: 0, flags: [] };
  let leaderboard = loadLeaderboard();
  const achievementKey = paths.leaderboard + "-achievements";
  const historyPanel = null;
  const achievementDock = null;
  let achievements = loadAchievements();
  let cwd = "/";
  const fileSystem = {
    "/": ["admin", "dev", "notes.txt", "targets.txt"],
    "/admin": ["users.db", "config.txt", "audit.log"],
    "/dev": ["debug.log", "payloads.md", "todo.txt"],
    "/loot": ["flag.txt", "report-draft.md"]
  };
  const fileContents = {
    "/notes.txt": lang === "tr" ? "Recon once gelir. Sonra exploit gelir." : "Recon first. Exploit second.",
    "/targets.txt": "admin.songul.lab\ndev.songul.lab\napi.songul.lab",
    "/admin/config.txt": "auth=enforced\n2fa=optional\nmode=legacy",
    "/admin/audit.log": "2026-03-17 suspicious request seen from 127.0.0.1",
    "/admin/users.db": "admin:********\nanalyst:********\nservice:********",
    "/dev/debug.log": "X-Debug: true\nX-Powered-By: legacy-app",
    "/dev/payloads.md": "<script>alert(1)</script>\n' OR 1=1 --",
    "/dev/todo.txt": lang === "tr" ? "girdi dogrulamasi\naudit loglarini kontrol et" : "validate input\nreview audit logs",
    "/loot/flag.txt": "FLAG{filesystem_runner}",
    "/loot/report-draft.md": lang === "tr" ? "Etki: yuksek\nVektor: auth bypass" : "Impact: high\nVector: auth bypass"
  };

  function loadLeaderboard() {
    try { return JSON.parse(localStorage.getItem(paths.leaderboard) || "[]"); } catch (error) { return []; }
  }
  function loadAchievements() {
    try { return JSON.parse(localStorage.getItem(achievementKey) || "[]"); } catch (error) { return []; }
  }
  function saveLeaderboard() { localStorage.setItem(paths.leaderboard, JSON.stringify(leaderboard)); }
  function saveAchievements() { localStorage.setItem(achievementKey, JSON.stringify(achievements)); }
  function resetGame() { game = { active: false, level: 0, score: 0, flags: [] }; }
  function mountHistoryPanel() { return null; }
  function mountAchievementDock() { return null; }
  function renderHistoryPanel() {
    if (!historyPanel) return;
    const items = history.slice(-6);
    historyPanel.innerHTML = "";
    const title = document.createElement("div");
    title.className = "terminal-history-title";
    title.textContent = t.historyTitle;
    historyPanel.appendChild(title);
    if (!items.length) {
      const empty = document.createElement("div");
      empty.className = "terminal-history-empty";
      empty.textContent = t.historyEmpty;
      historyPanel.appendChild(empty);
      return;
    }
    const list = document.createElement("div");
    list.className = "terminal-history-list";
    items.slice().reverse().forEach(command => {
      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = "terminal-history-chip";
      chip.textContent = command;
      chip.addEventListener("click", () => {
        input.value = command;
        input.focus();
      });
      list.appendChild(chip);
    });
    historyPanel.appendChild(list);
  }
  function renderAchievementDock() {
    if (!achievementDock) return;
    const labels = achievements.map(key => t.achievements[key]).filter(Boolean);
    achievementDock.innerHTML = "";
    const meta = document.createElement("span");
    meta.className = "terminal-achievement-meta";
    meta.textContent = t.badgePanel;
    achievementDock.appendChild(meta);
    const count = document.createElement("strong");
    count.className = "terminal-achievement-count";
    count.textContent = labels.length + " " + t.badgeCount;
    achievementDock.appendChild(count);
    const list = document.createElement("span");
    list.className = "terminal-achievement-list";
    const shown = labels.length ? labels.slice(0, 4) : [t.badgeLocked];
    shown.forEach(label => {
      const chip = document.createElement("span");
      chip.className = "terminal-achievement-chip";
      chip.textContent = label;
      list.appendChild(chip);
    });
    achievementDock.appendChild(list);
  }
  function openAchievementModal() {
    let modal = document.getElementById("achievement-modal");
    if (!modal) return;
    const body = modal.querySelector(".achievement-modal-body");
    const hint = modal.querySelector(".achievement-modal-hint");
    body.innerHTML = "";
    if (!achievements.length) {
      const empty = document.createElement("div");
      empty.className = "achievement-empty";
      empty.textContent = t.achievementsEmpty;
      body.appendChild(empty);
    } else {
      achievements.forEach(key => {
        const label = t.achievements[key] || key;
        const card = document.createElement("button");
        card.type = "button";
        card.className = "achievement-card";
        card.innerHTML = '<span class="achievement-kicker">badge</span><strong>' + label + '</strong><small>' + key + '</small>';
        card.addEventListener("click", async () => {
          try { await navigator.clipboard.writeText(label); } catch (error) {}
        });
        body.appendChild(card);
      });
    }
    hint.textContent = t.achievementsHint;
    modal.classList.add("open");
  }
  function unlockAchievement(name, silent) {
    if (!name || achievements.includes(name)) return;
    achievements.push(name);
    saveAchievements();
    renderAchievementDock();
    const label = t.achievements[name];
    if (label && !silent) printLine("+ " + label, "out");
  }
  function normalizePath(path) {
    if (!path || path === ".") return cwd;
    let base = path.startsWith("/") ? [] : cwd.split("/").filter(Boolean);
    path.split("/").forEach(part => {
      if (!part || part === ".") return;
      if (part === "..") base.pop();
      else base.push(part);
    });
    return "/" + base.join("/");
  }
  function getDirectoryEntries(path) {
    return fileSystem[path] || null;
  }
  function getFileContent(path) {
    return Object.prototype.hasOwnProperty.call(fileContents, path) ? fileContents[path] : null;
  }
  function printLine(text, extraClass) {
    const line = document.createElement("div");
    line.className = "terminal-line" + (extraClass ? " " + extraClass : "");
    line.textContent = text;
    output.appendChild(line);
    output.scrollTop = output.scrollHeight;
    return line;
  }
  function sleep(ms) { return new Promise(resolve => window.setTimeout(resolve, ms)); }
  async function typeEffect(text, speed) {
    const line = document.createElement("div");
    line.className = "terminal-line out";
    output.appendChild(line);
    for (let i = 0; i < text.length; i++) {
      line.textContent += text[i];
      output.scrollTop = output.scrollHeight;
      await sleep(speed || 18);
    }
  }
  async function slowPrintLines(lines, delay) {
    for (const line of lines) {
      printLine(line, "out");
      await sleep(delay || 250);
    }
  }
  async function exploitAnimation(lines) {
    for (const line of lines) {
      await typeEffect(line, 16);
      await sleep(220);
    }
  }
  function registerCommand(name, handler) { commands[name] = handler; }
  function registerExactCommand(name, handler) { exactCommands[name] = handler; }
  function performAction(action) {
    if (!action) return;
    window.setTimeout(() => {
      if (action.type === "hash") {
        const section = document.querySelector(action.target);
        if (window.location.hash === action.target && section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
        window.location.hash = action.target;
      } else if (action.type === "same-tab" || action.type === "mailto") {
        window.location.href = action.target;
      } else if (action.type === "new-tab") {
        window.open(action.target, "_blank", "noopener");
      }
    }, 180);
  }
  function enableMatrixMode() {
    document.body.classList.add("matrix-mode");
    window.clearTimeout(matrixTimer);
    matrixTimer = window.setTimeout(() => document.body.classList.remove("matrix-mode"), 6500);
  }
  function glitchPage() {
    document.body.classList.add("hacked");
    window.setTimeout(() => document.body.classList.remove("hacked"), 1400);
  }
  function findMatches(raw) { return Object.keys(commands).concat(Object.keys(exactCommands)).filter(name => name.indexOf(raw) === 0).sort(); }
  function resolveCommand(raw) {
    const normalized = raw.trim().toLowerCase();
    if (exactCommands[normalized]) return { handler: exactCommands[normalized], args: [] };
    const parts = normalized.split(/\\s+/);
    const cmd = parts.shift();
    if (!commands[cmd]) return null;
    return { handler: commands[cmd], args: parts };
  }
  async function bootSequence() {
    typewriter.textContent = "";
    for (let i = 0; i < t.boot.length; i++) {
      if (i) typewriter.textContent += "\\n";
      for (const char of t.boot[i]) {
        typewriter.textContent += char;
        await sleep(typewriter.textContent.length < 2 ? 140 : 22);
      }
      await sleep(110);
    }
  }
  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
    navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => navLinks.classList.remove("open")));
  }
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach(item => obs.observe(item));
  const spy = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      spyLinks.forEach(link => link.classList.toggle("active", link.getAttribute("href") === "#" + entry.target.id));
    });
  }, { rootMargin: "-35% 0px -45% 0px", threshold: 0.01 });
  spySections.forEach(section => spy.observe(section));
  function setSlide(index) {
    currentSlide = (index + dots.length) % dots.length;
    track.style.transform = "translateX(-" + (currentSlide * 100) + "%)";
    dots.forEach((dot, dotIndex) => dot.classList.toggle("active", dotIndex === currentSlide));
  }
  if (prev && next && track && dots.length) {
    prev.addEventListener("click", () => setSlide(currentSlide - 1));
    next.addEventListener("click", () => setSlide(currentSlide + 1));
    dots.forEach(dot => dot.addEventListener("click", () => setSlide(Number(dot.dataset.slide))));
  }
  function mountLandingEnhancements() {
    if (document.getElementById("terminal-engine-extra-style")) return;
    const style = document.createElement("style");
    style.id = "terminal-engine-extra-style";
    style.textContent = ".terminal-history-panel{margin-top:1rem;padding-top:.95rem;border-top:1px solid rgba(0,255,136,.12)}.terminal-history-title{font-family:var(--mono);font-size:.67rem;letter-spacing:.1em;text-transform:uppercase;color:var(--green);margin-bottom:.6rem}.terminal-history-empty{font-family:var(--mono);font-size:.73rem;color:var(--text-dim)}.terminal-history-list{display:flex;flex-wrap:wrap;gap:.5rem}.terminal-history-chip{border:1px solid rgba(0,255,136,.12);background:rgba(255,255,255,.025);color:var(--text-dim);border-radius:999px;padding:.32rem .7rem;font-family:var(--mono);font-size:.67rem;cursor:pointer;transition:border-color .2s,color .2s,transform .2s}.terminal-history-chip:hover{border-color:var(--green);color:var(--green);transform:translateY(-1px)}.terminal-achievement-dock{display:flex;align-items:center;justify-content:space-between;gap:.9rem;width:100%;margin-top:1rem;padding:.95rem 1rem;border:1px solid rgba(0,255,136,.12);border-radius:14px;background:linear-gradient(180deg,rgba(16,22,24,.9),rgba(10,14,15,.97));color:var(--text);text-align:left;cursor:pointer;transition:border-color .2s,transform .2s,box-shadow .2s}.terminal-achievement-dock:hover{border-color:rgba(0,255,136,.32);transform:translateY(-1px);box-shadow:0 14px 34px rgba(0,255,136,.07)}.terminal-achievement-meta{display:block;font-family:var(--mono);font-size:.64rem;letter-spacing:.12em;text-transform:uppercase;color:var(--green)}.terminal-achievement-count{display:block;font-family:var(--mono);font-size:.84rem;color:#fff;margin-top:.28rem}.terminal-achievement-list{display:flex;flex-wrap:wrap;justify-content:flex-end;gap:.45rem}.terminal-achievement-chip{display:inline-flex;align-items:center;gap:.32rem;padding:.32rem .64rem;border:1px solid rgba(0,255,136,.12);border-radius:999px;background:rgba(255,255,255,.025);font-family:var(--mono);font-size:.64rem;color:var(--text-dim)}.achievement-modal{position:fixed;inset:0;display:none;align-items:center;justify-content:center;background:radial-gradient(circle at top,rgba(0,255,136,.08),transparent 35%),rgba(6,10,11,.78);backdrop-filter:blur(12px);z-index:1250;padding:1.2rem}.achievement-modal.open{display:flex}.achievement-dialog{width:min(780px,100%);background:linear-gradient(180deg,rgba(15,20,22,.98),rgba(10,14,15,.99));border:1px solid rgba(0,255,136,.16);border-radius:18px;padding:1.55rem;box-shadow:0 28px 80px rgba(0,0,0,.45)}.achievement-head{display:flex;align-items:flex-start;justify-content:space-between;gap:1rem;margin-bottom:1rem}.achievement-head h3{font-family:var(--mono);font-size:1rem;color:#fff;line-height:1.5}.achievement-kicker,.achievement-head span,.achievement-card .achievement-kicker{display:block;font-family:var(--mono);font-size:.63rem;letter-spacing:.12em;text-transform:uppercase;color:var(--green);margin-bottom:.42rem}.achievement-close{border:1px solid rgba(0,255,136,.12);background:rgba(255,255,255,.02);color:var(--text-dim);width:2.3rem;height:2.3rem;border-radius:10px;cursor:pointer;transition:border-color .2s,color .2s,transform .2s}.achievement-close:hover{border-color:var(--green);color:var(--green);transform:translateY(-1px)}.achievement-modal-body{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:.85rem;margin-top:1rem}.achievement-card{border:1px solid rgba(0,255,136,.12);border-radius:14px;padding:1rem;background:rgba(255,255,255,.02);text-align:left;color:inherit;cursor:pointer;transition:border-color .2s,transform .2s,box-shadow .2s}.achievement-card:hover{border-color:rgba(0,255,136,.32);transform:translateY(-1px);box-shadow:0 14px 34px rgba(0,255,136,.07)}.achievement-card strong{display:block;font-family:var(--mono);font-size:.82rem;color:#fff;line-height:1.5}.achievement-card small{display:block;margin-top:.45rem;font-family:var(--mono);font-size:.66rem;color:var(--text-dim)}.achievement-empty{padding:1rem;border:1px dashed rgba(0,255,136,.12);border-radius:14px;color:var(--text-dim);font-family:var(--mono);font-size:.75rem}.achievement-modal-hint{margin-top:1rem;color:var(--text-dim);font-size:.78rem;line-height:1.7}.proof-strip{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:.95rem;margin:2.2rem auto 0;max-width:980px}.proof-strip-item{padding:1rem 1.05rem;text-align:left;background:linear-gradient(180deg,rgba(15,20,22,.92),rgba(10,14,15,.96));border:1px solid rgba(0,255,136,.12);border-radius:12px;box-shadow:0 18px 36px rgba(0,0,0,.16)}.proof-strip-item span{display:block;font-family:var(--mono);font-size:.64rem;letter-spacing:.12em;text-transform:uppercase;color:var(--green);margin-bottom:.42rem}.proof-strip-item strong{display:block;font-family:var(--mono);font-size:.86rem;color:#fff;margin-bottom:.32rem;line-height:1.45}.proof-strip-item p{font-size:.77rem;color:var(--text-dim);line-height:1.7}.research-log{max-width:1100px;margin:1rem auto 0;padding:0 1.5rem;border:none;background:transparent}.research-log-inner{display:grid;grid-template-columns:1.12fr .88fr;gap:1rem}.research-log-card{background:linear-gradient(180deg,rgba(15,20,22,.96),rgba(10,14,15,.98));border:1px solid rgba(0,255,136,.12);border-radius:14px;padding:1.3rem 1.4rem;box-shadow:0 20px 42px rgba(0,0,0,.16)}.research-log-card h3{font-family:var(--mono);font-size:.84rem;letter-spacing:.12em;text-transform:uppercase;color:var(--green);margin-bottom:.8rem}.research-log-card p{font-size:.84rem;color:var(--text-dim);line-height:1.88}.research-log-list{display:flex;flex-wrap:wrap;gap:.6rem}.research-log-chip{font-family:var(--mono);font-size:.66rem;color:var(--text);border:1px solid rgba(0,255,136,.12);border-radius:999px;padding:.36rem .74rem;background:rgba(255,255,255,.025)}.case-study-modal{position:fixed;inset:0;display:none;align-items:center;justify-content:center;background:radial-gradient(circle at top,rgba(0,255,136,.08),transparent 35%),rgba(6,10,11,.78);backdrop-filter:blur(12px);z-index:1200;padding:1.2rem}.case-study-modal.open{display:flex}.case-study-dialog{width:min(720px,100%);background:linear-gradient(180deg,rgba(15,20,22,.98),rgba(10,14,15,.99));border:1px solid rgba(0,255,136,.16);border-radius:16px;padding:1.5rem 1.55rem;box-shadow:0 28px 80px rgba(0,0,0,.45)}.case-study-head{display:flex;align-items:flex-start;justify-content:space-between;gap:1rem;margin-bottom:1rem}.case-study-head h3{font-family:var(--mono);font-size:1rem;color:#fff;line-height:1.5}.case-study-kicker{font-family:var(--mono);font-size:.66rem;letter-spacing:.12em;text-transform:uppercase;color:var(--green);margin-bottom:.48rem}.case-study-close{border:1px solid rgba(0,255,136,.12);background:rgba(255,255,255,.02);color:var(--text-dim);width:2.3rem;height:2.3rem;border-radius:10px;cursor:pointer;transition:border-color .2s,color .2s,transform .2s}.case-study-close:hover{border-color:var(--green);color:var(--green);transform:translateY(-1px)}.case-study-body p{font-size:.84rem;color:var(--text-dim);line-height:1.86;margin-bottom:1rem}.case-study-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:.85rem;margin-top:.8rem}.case-study-grid div{border:1px solid rgba(0,255,136,.12);border-radius:12px;padding:.9rem;background:rgba(255,255,255,.02)}.case-study-grid span{display:block;font-family:var(--mono);font-size:.63rem;color:var(--green);letter-spacing:.11em;text-transform:uppercase;margin-bottom:.34rem}.case-study-grid strong{display:block;font-size:.79rem;color:#fff;line-height:1.68}.tool-card[data-case-study],.repo-card[data-case-study]{cursor:pointer;transition:border-color .2s,transform .2s,box-shadow .2s}.tool-card[data-case-study]:hover,.repo-card[data-case-study]:hover{box-shadow:0 14px 34px rgba(0,255,136,.08)}@media(max-width:840px){.proof-strip,.research-log-inner,.case-study-grid,.achievement-modal-body{grid-template-columns:1fr}.terminal-achievement-dock{align-items:flex-start;flex-direction:column}.terminal-achievement-list{justify-content:flex-start}}";
    document.head.appendChild(style);
    if (!document.getElementById("case-study-modal")) {
      const modal = document.createElement("div");
      modal.id = "case-study-modal";
      modal.className = "case-study-modal";
      modal.innerHTML = '<div class="case-study-dialog"><div class="case-study-head"><div><div class="case-study-kicker">' + t.modalLabel + '</div><h3 id="case-study-title"></h3></div><button class="case-study-close" type="button" aria-label="Close">×</button></div><div class="case-study-body"><p id="case-study-summary"></p><div class="case-study-grid"><div><span>' + (lang === "tr" ? "Problem" : "Problem") + '</span><strong id="case-study-problem"></strong></div><div><span>' + (lang === "tr" ? "Yontem" : "Approach") + '</span><strong id="case-study-approach"></strong></div><div><span>' + (lang === "tr" ? "Cikti" : "Outcome") + '</span><strong id="case-study-outcome"></strong></div></div></div></div>';
      document.body.appendChild(modal);
      modal.addEventListener("click", event => {
        if (event.target === modal || event.target.classList.contains("case-study-close")) modal.classList.remove("open");
      });
      window.addEventListener("keydown", event => {
        if (event.key === "Escape") modal.classList.remove("open");
      });
    }
    if (!document.getElementById("achievement-modal")) {
      const modal = document.createElement("div");
      modal.id = "achievement-modal";
      modal.className = "achievement-modal";
      modal.innerHTML = '<div class="achievement-dialog"><div class="achievement-head"><div><span>' + t.badgePanel + '</span><h3>' + t.achievementsTitle + '</h3></div><button class="achievement-close" type="button" aria-label="Close">×</button></div><div class="achievement-modal-body"></div><p class="achievement-modal-hint"></p></div>';
      document.body.appendChild(modal);
      modal.addEventListener("click", event => {
        if (event.target === modal || event.target.classList.contains("achievement-close")) modal.classList.remove("open");
      });
      window.addEventListener("keydown", event => {
        if (event.key === "Escape") modal.classList.remove("open");
      });
    }
    const caseStudies = {
      "Bug Bounty Recon Workflow": {
        kicker: lang === "tr" ? "Saldiri yuzeyi" : "Attack surface",
        summary: lang === "tr" ? "Subfinder, httpx ve nuclei tarzinda bir akisi elle dogrulama ile birlestiren pratik bir kesit." : "A practical slice of how recon pipelines narrow noisy targets into manual validation candidates.",
        problem: lang === "tr" ? "Dagilan saldiri yuzeyini hizli daraltmak" : "Collapse noisy surface area fast",
        approach: "subdomain -> fingerprint -> prioritize -> validate",
        outcome: lang === "tr" ? "Tekrarlanabilir recon ritmi" : "Repeatable recon rhythm"
      },
      "unionhunter": {
        kicker: "SQLi",
        summary: lang === "tr" ? "UNION tabanli SQL injection asamalarini hizlandiran hafif bir yardimci akisi." : "A lightweight helper flow for quicker UNION-based SQLi setup during manual work.",
        problem: lang === "tr" ? "Kolon testini elle yavaslatan tekrarlar" : "Repetitive column testing",
        approach: lang === "tr" ? "Hedefli otomasyon + manuel dogrulama" : "Targeted automation + manual verification",
        outcome: lang === "tr" ? "Daha hizli exploit hazirligi" : "Faster exploit preparation"
      },
      "Detection And Research Notes": {
        kicker: lang === "tr" ? "Operasyon notlari" : "Operations notes",
        summary: lang === "tr" ? "Alertleri yalitilmis olaylar olarak degil, saldiri davranisinin izi olarak okuyan notlar." : "Notes that read alerts as traces of attacker behavior, not isolated dashboard events.",
        problem: lang === "tr" ? "Sinyal ile etki arasini baglamak" : "Link signal to attacker impact",
        approach: lang === "tr" ? "Telemetry + context + scenario" : "Telemetry + context + scenario",
        outcome: lang === "tr" ? "Daha net analyst handoff" : "Cleaner analyst handoff"
      }
    };
    document.querySelectorAll("#tools .tool-card").forEach(card => {
      const title = card.querySelector("h3");
      const data = title ? caseStudies[title.textContent.trim()] : null;
      if (!data || card.dataset.caseStudyReady) return;
      card.dataset.caseStudy = title.textContent.trim();
      card.dataset.caseStudyReady = "1";
      card.addEventListener("click", () => {
        const modal = document.getElementById("case-study-modal");
        document.getElementById("case-study-title").textContent = title.textContent.trim();
        document.getElementById("case-study-summary").textContent = data.summary;
        document.getElementById("case-study-problem").textContent = data.problem;
        document.getElementById("case-study-approach").textContent = data.approach;
        document.getElementById("case-study-outcome").textContent = data.outcome;
        modal.querySelector(".case-study-kicker").textContent = data.kicker;
        modal.classList.add("open");
      });
    });
  }

  registerCommand("help", async () => {
    await slowPrintLines([t.helpTitle, "", t.core, t.coreItems, t.coreItems2, "", t.fun, t.funItems, "", t.ops, t.opsItems, "", t.game, t.gameItems, "", t.hints, t.hintItems, t.hintItems2, t.hintItems3, "", t.helpNote], 55);
  });
  registerCommand("about", async () => { await slowPrintLines(t.about, 70); performAction({ type: "same-tab", target: paths.about }); });
  registerCommand("skills", async () => { await slowPrintLines(t.skills, 60); });
  registerCommand("projects", async () => { printLine(lang === "tr" ? "Projeler bolumu aciliyor..." : "Opening projects section...", "out"); performAction({ type: "hash", target: "#tools" }); });
  registerCommand("writeups", async args => performAction({ type: args[0] === "latest" ? "same-tab" : "hash", target: args[0] === "latest" ? paths.blog : "#writeups" }));
  registerCommand("blog", async args => performAction({ type: "same-tab", target: args.length ? paths.blog + "?q=" + encodeURIComponent(args.join(" ")) : paths.blog }));
  registerCommand("tools", async () => performAction({ type: "hash", target: "#tools" }));
  registerCommand("experience", async () => performAction({ type: "same-tab", target: paths.about + "#experience" }));
  registerCommand("certs", async () => performAction({ type: "same-tab", target: paths.about + "#certifications" }));
  registerCommand("github", async () => slowPrintLines(t.github, 65));
  registerCommand("medium", async () => performAction({ type: "new-tab", target: "https://medium.com/@songulkizilay" }));
  registerCommand("linkedin", async () => performAction({ type: "new-tab", target: "https://www.linkedin.com/in/songulozugurler/" }));
  registerCommand("lang", async () => performAction({ type: "same-tab", target: paths.lang }));
  registerCommand("cv", async () => performAction({ type: "same-tab", target: paths.about }));
  registerCommand("contact", async () => slowPrintLines(t.contact, 60));
  registerCommand("clear", async () => { output.innerHTML = ""; });
  registerCommand("stats", async () => slowPrintLines(t.stats, 60));
  registerCommand("now", async () => slowPrintLines(t.now, 60));
  registerCommand("history", async () => {
    if (!history.length) { printLine(t.historyEmpty, "out"); return; }
    printLine(t.historyTitle, "out");
    history.slice(-8).forEach((entry, index) => printLine((index + 1) + ". " + entry, "out"));
  });
  registerCommand("achievements", async () => {
    printLine(t.achievementsSummary + achievements.length, "out");
    printLine(t.achievementsOpen, "out");
    openAchievementModal();
  });
  registerCommand("search", async args => {
    if (!args.length) { printLine(t.searchUsage, "out"); return; }
    performAction({ type: "same-tab", target: paths.blog + "?q=" + encodeURIComponent(args.join(" ")) });
  });
  registerExactCommand("sudo", async () => slowPrintLines(t.sudo, 70));
  registerExactCommand("rm -rf /", async () => slowPrintLines(t.rm, 70));
  registerCommand("passwords", async () => slowPrintLines(t.passwords, 65));
  registerCommand("flag", async () => { await slowPrintLines(t.flag, 70); performAction({ type: "same-tab", target: paths.flag }); });
  registerCommand("self-destruct", async () => slowPrintLines(t.selfDestruct, 220));
  registerCommand("hack", async () => { await exploitAnimation(t.hack); printLine(t.hackEnd[0], "out"); printLine(t.hackEnd[1], "out"); });
  registerCommand("motivation", async () => {
    const quotes = lang === "tr"
      ? ["Her bug bir firsattir.", "Bir bug fixle, iki bug uret.", "Guvenlik bir zihniyettir.", "Hicbir seye guvenme. Her seyi dogrula."]
      : ["Every bug is an opportunity.", "Fix one bug, create two more.", "Security is a mindset.", "Trust nothing. Validate everything."];
    printLine(quotes[Math.floor(Math.random() * quotes.length)], "out");
  });
  registerCommand("coffee", async () => slowPrintLines(t.coffee, 80));
  registerCommand("matrix", async () => {
    await slowPrintLines([t.matrix1, t.matrix2], 80);
    unlockAchievement("matrix");
    enableMatrixMode();
    performAction({ type: "same-tab", target: paths.matrix });
  });
  registerCommand("aliens", async () => slowPrintLines(t.aliens, 70));
  registerExactCommand("sudo hire songul", async () => slowPrintLines(t.sudoHire, 70));
  registerCommand("scan", async args => {
    const target = args.join(" ") || "localhost";
    if (game.active && game.level === 2 && target === "admin.songul.lab") {
      await exploitAnimation(t.scanGame);
      game.level = 3;
      printLine(t.scanNext, "out");
      return;
    }
    await slowPrintLines(["Scanning " + target + "...", "[..........] 0%", "[##........] 20%", "[####......] 40%", "[######....] 60%", "[########..] 80%", "[##########] 100%", "", t.scanDone], 110);
  });
  registerCommand("recon", async () => {
    if (game.active && game.level === 1) {
      await slowPrintLines(t.reconGame, 90);
      unlockAchievement("recon");
      game.flags.push("recon");
      game.score += 100;
      game.level = 2;
      printLine(t.reconNext, "out");
      return;
    }
    await slowPrintLines(t.recon, 70);
  });
  registerExactCommand("bruteforce login", async () => {
    if (game.active && game.level === 3) {
      await slowPrintLines(t.bruteGame, 90);
      game.level = 4;
      printLine(t.bruteNext, "out");
      return;
    }
    await slowPrintLines(t.brute, 80);
  });
  registerCommand("sleep", async () => slowPrintLines(t.sleep, 70));
  registerCommand("bug", async () => slowPrintLines(t.bug, 70));
  registerCommand("404", async () => slowPrintLines(t.e404, 70));
  registerCommand("debug", async () => slowPrintLines(t.debug, 70));
  registerCommand("developer", async () => slowPrintLines(t.developer, 70));
  registerExactCommand("nmap localhost", async () => slowPrintLines(t.nmap, 70));
  registerCommand("pwd", async () => printLine(cwd, "out"));
  registerCommand("ls", async args => {
    const target = normalizePath(args[0] || cwd);
    const entries = getDirectoryEntries(target);
    if (!entries) { printLine(t.fsMissing, "out"); return; }
    unlockAchievement("filesystem");
    entries.forEach(entry => printLine(entry, "out"));
  });
  registerCommand("cd", async args => {
    if (!args.length) { printLine(t.fsUsageCd, "out"); return; }
    const target = normalizePath(args[0]);
    if (!getDirectoryEntries(target)) { printLine(t.fsMissing, "out"); return; }
    unlockAchievement("filesystem");
    cwd = target;
    printLine(cwd, "out");
  });
  registerCommand("cat", async args => {
    if (!args.length) { printLine(t.fsUsageCat, "out"); return; }
    const filePath = normalizePath(args[0]);
    const content = getFileContent(filePath);
    if (!content) { printLine(t.fsMissing, "out"); return; }
    unlockAchievement("filesystem");
    content.split("\n").forEach(line => printLine(line, "out"));
  });
  registerCommand("start", async () => { resetGame(); game.active = true; game.level = 1; await slowPrintLines(t.start, 80); });
  registerCommand("ctf", commands.start);
  registerCommand("help-ctf", async () => slowPrintLines(t.helpCtf, 60));
  registerCommand("inject", async args => {
    if (!game.active || game.level !== 4) { printLine(t.injectBlocked, "out"); return; }
    const payload = args.join(" ");
    if (!payload) { printLine(t.injectUsage, "out"); return; }
    vulnApp.textContent = payload;
    if (payload.indexOf("<script>") !== -1 || payload.indexOf("onerror=") !== -1) {
      window.alert(lang === "tr" ? "XSS calisti" : "XSS executed");
      printLine("FLAG{xss_master}", "out");
      unlockAchievement("xss");
      game.flags.push("xss");
      game.score += 200;
      game.level = 5;
      printLine(t.injectNext, "out");
    } else {
      printLine(t.injectFail, "out");
    }
  });
  registerCommand("login", async args => {
    if (!game.active || game.level !== 5) { printLine(t.loginFail, "out"); return; }
    const payload = args.join(" ");
    if (payload.indexOf("' or 1=1") === -1) { printLine(t.loginFail, "out"); return; }
    glitchPage();
    await exploitAnimation(t.loginAnim);
    printLine(t.loginDone[0], "out");
    printLine(t.loginDone[1], "out");
    unlockAchievement("sqli");
    game.flags.push("sqli");
    game.score += 300;
    game.level = 6;
    printLine(t.scoreLine + game.score, "out");
    printLine(t.submitHint, "out");
  });
  registerCommand("exploit", async () => {
    if (!game.active || game.level < 6) { printLine(t.exploitFail, "out"); return; }
    glitchPage();
    await exploitAnimation(t.exploitAnim);
    printLine(t.exploitDone, "out");
    unlockAchievement("root");
    game.score += 500;
    game.level = 7;
    printLine(t.finalScore + game.score, "out");
  });
  registerCommand("submit-score", async args => {
    if (!game.active || game.level < 6) { printLine(t.finishLab, "out"); return; }
    const name = args[0] || "anon";
    leaderboard.push({ name, score: game.score });
    leaderboard.sort((a, b) => b.score - a.score);
    leaderboard = leaderboard.slice(0, 10);
    saveLeaderboard();
    printLine(t.scoreSaved, "out");
  });
  registerCommand("leaderboard", async () => {
    if (!leaderboard.length) { printLine(t.scoreEmpty, "out"); return; }
    printLine(t.leaderboardTitle, "out");
    leaderboard.forEach((entry, index) => printLine((index + 1) + ". " + entry.name + " - " + entry.score, "out"));
  });
  registerCommand("exit", async () => { resetGame(); printLine(t.exitLab, "out"); });

  async function runCommand(rawValue) {
    const raw = rawValue.trim();
    if (!raw) return;
    history.push(raw);
    historyIndex = history.length;
    renderHistoryPanel();
    unlockAchievement("firstCommand", true);
    printLine(t.prompt + " " + raw);
    const resolved = resolveCommand(raw);
    if (!resolved) {
      printLine(game.active ? t.ctfHelp : t.notFound, "out");
      if (!game.active) printLine(t.tryHelp, "out");
      return;
    }
    await resolved.handler(resolved.args, raw);
  }
  if (form && input && output) {
    form.addEventListener("submit", event => {
      event.preventDefault();
      const value = input.value;
      input.value = "";
      runCommand(value);
    });
    input.addEventListener("keydown", event => {
      if (event.key === "ArrowUp") {
        event.preventDefault();
        if (!history.length) return;
        historyIndex = Math.max(0, historyIndex - 1);
        input.value = history[historyIndex] || "";
        return;
      }
      if (event.key === "ArrowDown") {
        event.preventDefault();
        if (!history.length) return;
        historyIndex = Math.min(history.length, historyIndex + 1);
        input.value = history[historyIndex] || "";
        return;
      }
      if (event.key === "Tab") {
        event.preventDefault();
        const raw = input.value.trim().toLowerCase();
        if (!raw) return;
        const matches = findMatches(raw);
        if (matches.length === 1) input.value = matches[0];
        else if (matches.length > 1) printLine(t.matches + matches.join(", "), "out");
      }
    });
  }
  mountLandingEnhancements();
  document.querySelectorAll(".terminal-action").forEach(button => button.addEventListener("click", () => runCommand(button.dataset.command)));
  renderHistoryPanel();
  renderAchievementDock();
  bootSequence();
})();

