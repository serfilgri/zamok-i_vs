const services = [
  {
    icon: "language",
    title: "WEB ARCHITECTURE",
    description:
      "RAW PERFORMANCE AND SCALABLE CODE. WE DON'T JUST DESIGN; WE ENGINEER EXPERIENCES.",
  },

  {
    icon: "search",
    title: "SEARCH DOMINANCE",
    description:
      "DATA-DRIVEN VISIBILITY STRATEGIES. IF THEY CAN'T FIND YOU, YOU DON'T EXIST.",
  },

  {
    icon: "smartphone",
    title: "MOBILE SYSTEMS",
    description:
      "FUNCTIONAL APPLICATIONS FOR IOS AND ANDROID. NATIVE PERFORMANCE, ZERO FRICTION.",
  },

  {
    icon: "language",
    title: "WEB ARCHITECTURE",
    description:
      "RAW PERFORMANCE AND SCALABLE CODE. WE DON'T JUST DESIGN; WE ENGINEER EXPERIENCES.",
  },

  {
    icon: "language",
    title: "WEB ARCHITECTURE",
    description:
      "RAW PERFORMANCE AND SCALABLE CODE. WE DON'T JUST DESIGN; WE ENGINEER EXPERIENCES.",
  },

  {
    icon: "language",
    title: "WEB ARCHITECTURE",
    description:
      "RAW PERFORMANCE AND SCALABLE CODE. WE DON'T JUST DESIGN; WE ENGINEER EXPERIENCES.",
  },

  {
    icon: "language",
    title: "WEB ARCHITECTURE",
    description:
      "RAW PERFORMANCE AND SCALABLE CODE. WE DON'T JUST DESIGN; WE ENGINEER EXPERIENCES.",
  },

  {
    icon: "language",
    title: "WEB ARCHITECTURE",
    description:
      "RAW PERFORMANCE AND SCALABLE CODE. WE DON'T JUST DESIGN; WE ENGINEER EXPERIENCES.",
  },

  {
    icon: "language",
    title: "WEB ARCHITECTURE",
    description:
      "RAW PERFORMANCE AND SCALABLE CODE. WE DON'T JUST DESIGN; WE ENGINEER EXPERIENCES.",
  },
];

function renderServices() {
  const container = document.getElementById("services-container");
  if (!container) return;

  container.innerHTML = services
    .map(
      (service) => `
      <div class="p-12 agencyx-border hover:bg-black hover:text-white transition-colors">
        <span class="material-symbols-outlined mb-8 !text-6xl">${service.icon}</span>
        <h3 class="text-3xl font-black mb-4">${service.title}</h3>
        <p class="text-lg">${service.description}</p>
      </div>
    `,
    )
    .join("");
}

renderServices();
