document.addEventListener("DOMContentLoaded", () => {
  // Load data from localStorage or use default
  const data = JSON.parse(localStorage.getItem("resumeData")) || resumeData;

  // Generate resume HTML
  const resume = document.getElementById("resume");
  resume.innerHTML = `
        <header class="header-section">
            ${generateHeader(data.profile)}
            ${generateLanguages(data.languages)}
        </header>
        <div class="main-content">
            <div class="left-column">
                ${generateExperience(data.experience)}
            </div>
            <div class="right-column">
                ${generateTools(data.tools)}
            </div>
        </div>
        <div class="footer-section">
            ${generateEducation(data.education)}
            <div class="right-footer-column">
                ${generateInterests(data.interests)}
                ${generateContacts(data.profile)}
            </div>
        </div>
    `;

  // Initialize edit functionality
  setupEditableElements();
  setupLanguageProgressBars(data.languages);
});


function generateHeader(profile) {
  return `
        <div class="photo-box">
            <img src="${profile.photo}" alt="${profile.name}" class="profile-photo">
        </div>
        <div class="profile-info-box">
            <span class="greeting editable">${profile.greeting}</span>
            <h1 class="editable">${profile.name}</h1>
            <h2 class="editable">${profile.title}</h2>
        </div>
    `;
}

function generateLanguages(languages) {
  return `
        <div class="languages-box">
            <h3 class="editable">LANGUAGES</h3>
            ${languages
              .map(
                (lang, index) => `
                <div class="language-item">
                    <div class="language-name editable">${lang.name}</div>
                    <div class="language-progress" data-index="${index}" style="--progress: ${lang.level}%"></div>
                </div>
            `
              )
              .join("")}
        </div>
    `;
}

function generateExperience(experience) {
  return `
        <div class="experience-box">
            <h3 class="editable">EXPERIENCE</h3>
            <div class="experience-items">
                ${experience
                  .map(
                    (exp, expIndex) => `
                    <div class="experience-item ${exp.recent ? "recent" : ""}">
    ${
      exp.recent ? '<span class="recent-badge editable">MOST RECENT</span>' : ""
    }
                        <div class="experience-info">
                            <div class="experience-date-title">
                                <div class="date editable">${exp.date}</div>
                                <h4 class="editable">${exp.title}</h4>
                                <h5 class="editable">${exp.company}</h5>
                            </div>
                            <div class="experience-details">
                                <ul>
                                    ${exp.description
                                      .map(
                                        (item, itemIndex) => `
                                        <li class="editable" data-exp="${expIndex}" data-item="${itemIndex}">${item}</li>
                                    `
                                      )
                                      .join("")}
                                </ul>
                            </div>
                        </div>
                    </div>
                `
                  )
                  .join("")}
            </div>
        </div>
    `;
}

function generateTools(tools) {
  return `
        <div class="tools-box">
            <h3 class="editable">TOOLS</h3>
            ${generateToolsCategory("Design", tools.design)}
            ${generateToolsCategory("no-code", tools.noCode)}
            ${generateToolsCategory("artifical intelligence", tools.ai)}
        </div>
    `;
}

function generateToolsCategory(title, tools) {
  return `
        <div class="tools-category">
            <h4 class="editable">${title}</h4>
            <div class="tools-list">
                ${createToolPairs(tools)}
            </div>
        </div>
    `;
}

function createToolPairs(tools) {
  let pairs = "";
  for (let i = 0; i < tools.length; i += 2) {
    const pair = tools.slice(i, i + 2);
    pairs += `
            <div class="icon-pair">
                ${pair
                  .map(
                    (tool) => `
                    <img src="${tool.icon}" class="tool-icon" alt="${tool.name}">
                `
                  )
                  .join("")}
            </div>
        `;
  }
  return pairs;
}

function generateEducation(education) {
  const mainEdu = education.find((e) => e.main);
  const secondaryEdu = education.filter((e) => !e.main);

  return `
        <div class="education-box">
            <h3 class="editable">EDUCATION</h3>
            <div class="education-cards">
                <div class="education-card main-card">
                    <h5 class="editable education-year">${mainEdu.type}</h5>
                    <h4 class="editable education-title">${mainEdu.field}</h4>
                    <div class="education-hashtags editable">${mainEdu.institution}</div>
                    <p class="editable education-source">${mainEdu.period}</p>
                </div>
                ${secondaryEdu
                  .map(
                    (edu, index) => `
                    <div class="education-card secondary-card">
                        <h5 class="editable education-year">${edu.type}</h5>
                        <h4 class="editable education-title">${edu.field}</h4>
                        <div class="education-hashtags editable">${edu.institution || ''}</div>
                        <p class="editable education-source">${edu.period}</p>
                    </div>
                `
                  )
                  .join("")}
            </div>
        </div>
    `;
}
function generateInterests(interests) {
  return `
        <div class="interests-box">
            <h3 class="editable">INTERESTS</h3>
            <div class="tags">
                ${interests
                  .map(
                    (interest, index) => `
                    <span class="editable" data-index="${index}">${interest}</span>
                `
                  )
                  .join("")}
            </div>
        </div>
    `;
}

function generateContacts(profile) {
  return `
        <div class="contacts-box">
            <div class="contact-content">
                <p class="contact-text editable">${profile.contactText}</p>
                <div class="contact-email">
                    <span class="editable">${profile.email}</span>
                    <a href="#" class="download-icon">
                        <i class="fas fa-download"></i>
                    </a>
                </div>
            </div>
        </div>
    `;
}

function setupEditableElements() {
  document.querySelectorAll(".editable").forEach((element) => {
    element.addEventListener("click", function (e) {
      // Не открываем форму, если клик был по кнопке или внутри формы
      if (
        e.target.classList.contains("edit-btn") ||
        e.target.closest(".edit-form") ||
        this.querySelector(".edit-form")
      ) {
        return;
      }

      const originalContent = this.textContent.trim();
      const isToolCategory =
        this.classList.contains("tools-category") ||
        this.parentElement.classList.contains("tools-category");

      const form = document.createElement("div");
      form.className = "edit-form active";
      if (isToolCategory) form.classList.add("tool-category-edit");

      const input = document.createElement("input");
      input.type = "text";
      input.className = "edit-input";
      input.value = originalContent;

      const buttons = document.createElement("div");
      buttons.className = "edit-buttons";

      const confirmBtn = document.createElement("button");
      confirmBtn.className = "edit-btn confirm";
      confirmBtn.innerHTML = '<i class="fas fa-check"></i>';
      confirmBtn.title = "Сохранить";

      const cancelBtn = document.createElement("button");
      cancelBtn.className = "edit-btn cancel";
      cancelBtn.innerHTML = '<i class="fas fa-times"></i>';
      cancelBtn.title = "Отменить";

      buttons.appendChild(confirmBtn);
      buttons.appendChild(cancelBtn);
      form.appendChild(input);
      form.appendChild(buttons);

      // Сохраняем оригинальное содержимое
      const originalHTML = this.innerHTML;
      this.innerHTML = "";
      this.appendChild(form);
      input.focus();

      const handleConfirm = () => {
        const newValue = input.value.trim();
        this.textContent = newValue || originalContent;
        saveDataToLocalStorage();
        cleanup();
      };

      const handleCancel = () => {
        this.innerHTML = originalHTML;
        cleanup();
      };

      const cleanup = () => {
        document.removeEventListener("keydown", handleKeyDown);
        document.removeEventListener("click", outsideClickHandler);
      };

      const handleKeyDown = (e) => {
        if (e.key === "Enter") handleConfirm();
        if (e.key === "Escape") handleCancel();
      };

      const outsideClickHandler = (e) => {
        if (!element.contains(e.target)) {
          handleCancel();
        }
      };

      confirmBtn.addEventListener("click", handleConfirm);
      cancelBtn.addEventListener("click", handleCancel);
      input.addEventListener("keydown", handleKeyDown);
      document.addEventListener("click", outsideClickHandler, { once: true });
    });
  });
}

function setupLanguageProgressBars(languages) {
  document.querySelectorAll(".language-progress").forEach((bar, index) => {
    bar.addEventListener("click", (e) => {
      if (e.target === bar) {
        const currentLevel = languages[index].level;
        const newLevel = prompt(
          "Enter language proficiency (0-100):",
          currentLevel
        );

        if (newLevel !== null && !isNaN(newLevel)) {
          const level = Math.min(100, Math.max(0, parseInt(newLevel)));
          bar.style.setProperty("--progress", `${level}%`);

          // Update data and save
          const data =
            JSON.parse(localStorage.getItem("resumeData")) || resumeData;
          data.languages[index].level = level;
          localStorage.setItem("resumeData", JSON.stringify(data));
        }
      }
    });
  });
}

function saveDataToLocalStorage() {
  const data = {
    profile: {
      name: document.querySelector(".profile-info-box h1").textContent,
      title: document.querySelector(".profile-info-box h2").textContent,
      greeting: document.querySelector(".greeting").textContent,
      photo: "/images/profile.png",
      email: document.querySelector(".contacts-box span").textContent,
      contactText: document.querySelector(".contact-text").textContent,
    },
    languages: Array.from(document.querySelectorAll(".language-item")).map(
      (item, index) => ({
        name: item.querySelector(".language-name").textContent,
        level: parseInt(
          document
            .querySelectorAll(".language-progress")
            [index].style.getPropertyValue("--progress")
        ),
      })
    ),
    experience: Array.from(document.querySelectorAll(".experience-item")).map(
      (item) => ({
        date: item.querySelector(".date").textContent,
        title: item.querySelector("h4").textContent,
        company: item.querySelector("h5").textContent,
        description: Array.from(item.querySelectorAll("li")).map(
          (li) => li.textContent
        ),
        recent: item.classList.contains("recent"),
      })
    ),
    education: [
      {
        type: document.querySelector(".education-card.main-card h5")
          .textContent,
        field: document.querySelector(
          ".education-card.main-card p:nth-of-type(1)"
        ).textContent,
        institution:
          document.querySelector(".education-card.main-card p:nth-of-type(2)")
            ?.textContent || "",
        period: document.querySelector(
          ".education-card.main-card p:last-of-type"
        ).textContent,
        main: true,
      },
      ...Array.from(
        document.querySelectorAll(".education-card.secondary-card")
      ).map((card) => ({
        type: card.querySelector("h5").textContent,
        field: card.querySelector("p:nth-of-type(1)").textContent,
        period: card.querySelector("p:last-of-type").textContent,
        main: false,
      })),
    ],
    interests: Array.from(document.querySelectorAll(".tags span")).map(
      (span) => span.textContent
    ),
  };

  localStorage.setItem("resumeData", JSON.stringify(data));
}
