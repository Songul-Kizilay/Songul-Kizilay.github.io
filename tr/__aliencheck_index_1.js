
(() => {
  const lines = [
    "Song\u00fcl \u00d6z\u00fcg\u00fcrler - Siber G\u00fcvenlik Ara\u015ft\u0131rmac\u0131s\u0131",
    "Web uygulamalar\u0131n\u0131 zorlamay\u0131 seviyorum.",
    "Pentest, bug bounty ve red team operasyonlar\u0131na odakl\u0131."
  ];

  const el = document.getElementById("tw0");
  let ci = 0;
  const full = lines.join("\n");

  function type() {
    if (ci >= full.length) return;
    el.textContent += full[ci++];
    setTimeout(type, ci === 1 ? 180 : 24);
  }

  setTimeout(type, 500);

  const menuToggle = document.getElementById("m0");
  const navLinks = document.getElementById("n0");
  menuToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => navLinks.classList.remove("open"));
  });

  const items = document.querySelectorAll(".v0");
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("v1");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach((item) => obs.observe(item));

  const spySections = document.querySelectorAll("section[id]");
  const spyLinks = document.querySelectorAll('.n0 a[href^="#"]');
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      spyLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === "#" + entry.target.id);
      });
    });
  }, { rootMargin: "-35% 0px -45% 0px", threshold: 0.01 });
  spySections.forEach((section) => spy.observe(section));

  const output = document.getElementById("o0");
  const form = document.getElementById("tf0");
  const input = document.getElementById("o4");

  const commandMap = {
    help: [
      "core: about skills projects writeups blog tools experience certs github medium linkedin lang cv flag contact clear sudo",
      "fun: hack rm -rf / passwords self-destruct coffee matrix aliens sudo hire songul",
      "ops: scan target.com recon bruteforce login sleep bug 404 debug developer nmap localhost"
    ],
    about: ['Operat?r profili: web uygulama g?venli?i, bug bounty ve red team oda??.', 'Detayl? profil /tr/about.html sayfas?nda.'],
    skills: ['web application security', 'red team operasyonlar?', 'ofansif do?rulama', 'bug bounty', 'burp suite', 'python / bash'],
    projects: ['Bug Bounty Recon Workflow', 'unionhunter', 'Sald?r? Yolu Notlar?'],
    writeups: ['/#writeups', "Son zafiyet writeup'lar?, HTB walkthrough'lar? ve PortSwigger lab notlar?"],
    blog: ['/tr/blog.html', 'Filtreli, aramal? t?m yaz? ar?ivi ve ara?t?rma kayd?'],
    tools: ['/#tools', 'Se?ilmi? vaka ?al??malar?, ?zel i? ak??lar? ve pratik ara?t?rma i?leri'],
    experience: ['/tr/about.html', 'Red team oda??, ?nceki operasyon ba?lam?, mentorluk ve lab deneyimi'],
    certs: ['CEH Practical', 'BGA Penetration Tester Training Program', 'CCNA: Intro to Networks', 'AWS Security Fundamentals'],
    github: ['Bu sitede proje kodlar? public de?il.', 'Vaka ?al??mas? g?r?n?m? var; detayl? eri?im istek ?zerine payla??labilir.'],
    medium: ['medium.com/@songulkizilay', 'Writeup, walkthrough ve security research yaz?lar?'],
    linkedin: ['linkedin.com/in/songulozugurler', 'Deneyim, sertifika ve profesyonel profil'],
    lang: ['/index.html -> English', '/tr/index.html -> T?rk?e'],
    cv: ['/tr/about.html', 'Deneyim, sertifikalar ve operat?r profili ?zeti'],
    flag: ['HTB{songul_security_lab}', 'Komik g?rsel a??l?yor...'],
    contact: ['songulkizilay46@gmail.com', 'medium.com/@songulkizilay', 'linkedin.com/in/songulozugurler'],
    sudo: ["Nice try.", "But you are not root here."]
  };

  const commandActions = {
    about: { type: "same-tab", target: "about.html" },
    projects: { type: "hash", target: "#tools" },
    writeups: { type: "hash", target: "#writeups" },
    blog: { type: "same-tab", target: "blog.html" },
    tools: { type: "hash", target: "#tools" },
    experience: { type: "same-tab", target: "about.html#experience" },
    certs: { type: "same-tab", target: "about.html#certifications" },
    medium: { type: "new-tab", target: "https://medium.com/@songulkizilay" },
    linkedin: { type: "new-tab", target: "https://www.linkedin.com/in/songulozugurler/" },
    lang: { type: "same-tab", target: "../index.html" },
    cv: { type: "same-tab", target: "about.html" },
    flag: { type: "same-tab", target: "../flag.html" },
    contact: { type: "mailto", target: "mailto:songulkizilay46@gmail.com" },
    aliens: { type: "same-tab", target: "../aliens.html" }
  };

  function pushLine(text, extraClass) {
    const line = document.createElement("div");
    line.className = "terminal-line" + (extraClass ? " " + extraClass : "");
    line.textContent = text;
    output.appendChild(line);
  }

  function emitLines(lines) {
    lines.forEach((line) => pushLine(line, "out"));
  }

  function runSpecial(command) {
    if (command === "sudo") return ["Nice try.", "But you are not root here."];
    if (command === "hack") return ["Initializing cyber attack...", "", "[####......] 40%", "[########..] 80%", "[##########] 100%", "", "Target hacked.", "Just kidding. I hack legally."];
    if (command === "rm -rf /") return ["Permission denied.", "", "This system is protected by Songul Security(TM)"];
    if (command === "passwords") return ["admin: admin123", "root: toor", "developer: password", "", "Just kidding.", "Use a password manager."];
    if (command === "self-destruct") return ["Self destruct sequence initiated...", "", "5", "4", "3", "2", "1", "", "System survived.", "Nice try."];
    if (command === "coffee") return ["Brewing coffee...", "", "Fuel for bug hunting."];
    if (command === "matrix") return ["Wake up Neo...", "The Matrix has you."];
    if (command === "aliens") return ["Scanning galaxy for vulnerabilities...", "", "No aliens found.", "", "But plenty of XSS."];
    if (command === "sudo hire songul") return ["Access granted.", "", "Welcome to the team.", "Recruiter bait."];
    if (command.startsWith("scan ")) return ["Scanning " + command.slice(5) + "...", "", "[..........]", "[#.........]", "[####......]", "[######....]", "[########..]", "[##########]", "", "Scan complete.", "No vulnerabilities found."];
    if (command === "recon") return ["Gathering intelligence...", "", "Subdomains found: 12", "Open ports: 4", "Interesting endpoints: /admin /api /debug", "", "Recon complete."];
    if (command.startsWith("bruteforce ")) return ["Trying passwords...", "", "admin123", "password", "letmein", "123456", "", "Success.", "", "Developers still reuse passwords."];
    if (command === "sleep") return ["Security researchers don't sleep.", "", "They wait for scans to finish."];
    if (command === "bug") return ["Searching for bugs...", "", "Bug found.", "", "It's called developer logic."];
    if (command === "404") return ["Error 404", "", "Sleep not found.", "Coffee required."];
    if (command === "debug") return ["Problem located.", "", "Between keyboard and chair."];
    if (command === "developer") return ["Developer detected.", "", "Security level decreased."];
    if (command.startsWith("nmap ")) return ["PORT     STATE SERVICE", "22/tcp   open  ssh", "80/tcp   open  http", "443/tcp  open  https", "", "Host looks secure."];
    return null;
  }

  function performCommandAction(command) {
    const action = commandActions[command];
    if (!action) return;
    window.setTimeout(() => {
      if (action.type === "hash") {
        window.location.hash = action.target;
      } else if (action.type === "same-tab" || action.type === "mailto") {
        window.location.href = action.target;
      } else if (action.type === "new-tab") {
        window.open(action.target, "_blank", "noopener");
      }
    }, 180);
  }

  function runCommand(value) {
    const command = value.trim().toLowerCase();
    if (!command) return;
    pushLine("songul@sec:~$ " + command);
    if (command === "clear") {
      output.innerHTML = "";
      return;
    }
    (commandMap[command] || ["Komut bulunamadı.", "Dene: help"]).forEach((line) => pushLine(line, "out"));
    output.scrollTop = output.scrollHeight;
    performCommandAction(command);
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    runCommand(input.value);
    input.value = "";
  });

  document.querySelectorAll(".o2").forEach((button) => {
    button.addEventListener("click", () => runCommand(button.dataset.command));
  });

  const track = document.getElementById("k6");
  const dots = document.querySelectorAll(".k5");
  const prev = document.getElementById("k7");
  const next = document.getElementById("k8");
  let currentSlide = 0;

  function setSlide(index) {
    currentSlide = (index + dots.length) % dots.length;
    track.style.transform = "translateX(-" + (currentSlide * 100) + "%)";
    dots.forEach((dot, dotIndex) => dot.classList.toggle("active", dotIndex === currentSlide));
  }

  prev.addEventListener("click", () => setSlide(currentSlide - 1));
  next.addEventListener("click", () => setSlide(currentSlide + 1));
  dots.forEach((dot) => dot.addEventListener("click", () => setSlide(Number(dot.dataset.slide))));
})();
