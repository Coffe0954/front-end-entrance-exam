(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();const v={profile:{name:"Karthik SR",title:"UX/UI Designer",greeting:"Hello 👋🏻 I'm",photo:"/images/profile.png",email:"srkarthik.designscape@gmail.com",contactText:"Let's chat! I'm ready to work on exciting projects"},languages:[{name:"English",level:100},{name:"Malayalam",level:100},{name:"Hindi",level:75}],experience:[{date:"Jun. 2023 - Present",title:"Marketing Manager",company:"Pankayam | Full-time",description:["Strategy development and planning of campaigns that promote the business and generate genuine traffic","SEO Content Creation for Blogs, Website, Social media"],recent:!0},{date:"2017 - Present",title:"Graphic / Web designer",company:"Freelance",description:["Development of internal projects from scratch, product design of brands","Landing page, webapps and hybrid apps","Coordinating with outside agencies, art services, web designer, marketing, printers, and colleagues as necessary."]},{date:"Sep. 2021 - Jun. 2023",title:"Legal Assistant",company:"Law Firm | Intern",description:["Provide administrative support to lawyer and enhance office effectiveness","Handle communication with clients, witnesses etc.","Prepare case briefs and summarize depositions, interrogatories and testimony"]}],tools:{design:[{name:"Figma",icon:"/images/logoFigma.svg"},{name:"Photoshop",icon:"/images/adobe-photoshop.svg"},{name:"Illustrator",icon:"/images/adobe-illustrator.svg"},{name:"Premiere",icon:"/images/adobe-premiere.svg"},{name:"Notion",icon:"/images/logoNotion.svg"},{name:"Meet",icon:"/images/logoMeet.svg"}],noCode:[{name:"Zapier",icon:"/images/logoZapìer.svg"},{name:"Webflow",icon:"/images/logoWebflow.svg"},{name:"Framer",icon:"/images/logoFramer.svg"},{name:"Wordpress",icon:"/images/logoWordpress.svg"}],ai:[{name:"ChatGPT",icon:"/images/logoChatGPT.svg"},{name:"Copilot",icon:"/images/logoCopilot.svg"},{name:"Midjourney",icon:"/images/logoMidjourney.svg"}]},education:[{type:"2023",field:"UI/UX",institution:"#design #ux #ui #research #figma #adobexd",period:"Coursera",main:!0},{type:"2021",field:"Law",institution:"#design #ux #ui #research #figma #adobexd",period:"University of Kerala",main:!1},{type:"2017",field:"Graphic design",institution:"#design #ux #ui #research #figma #adobexd",period:"Coursera",main:!1}],interests:["branding","design","photography","AI","illustration","typography","social networks","research","user experience","web design","mobile apps","color theory","interaction design","user interface","digital marketing","content creation"]};localStorage.setItem("resumeData",JSON.stringify(v));document.addEventListener("DOMContentLoaded",()=>{const e=JSON.parse(localStorage.getItem("resumeData"))||resumeData,t=document.getElementById("resume");t.innerHTML=`
        <header class="header-section">
            ${y(e.profile)}
            ${b(e.languages)}
        </header>
        <div class="main-content">
            <div class="left-column">
                ${x(e.experience)}
            </div>
            <div class="right-column">
                ${S(e.tools)}
            </div>
        </div>
        <div class="footer-section">
            ${$(e.education)}
            <div class="right-footer-column">
                ${L(e.interests)}
                ${E(e.profile)}
            </div>
        </div>
    `,q(),w(e.languages)});function y(e){return`
        <div class="photo-box">
            <img src="${e.photo}" alt="${e.name}" class="profile-photo">
        </div>
        <div class="profile-info-box">
            <span class="greeting editable">${e.greeting}</span>
            <h1 class="editable">${e.name}</h1>
            <h2 class="editable">${e.title}</h2>
        </div>
    `}function b(e){return`
        <div class="languages-box">
            <h3 class="editable">LANGUAGES</h3>
            ${e.map((t,n)=>`
                <div class="language-item">
                    <div class="language-name editable">${t.name}</div>
                    <div class="language-progress" data-index="${n}" style="--progress: ${t.level}%"></div>
                </div>
            `).join("")}
        </div>
    `}function x(e){return`
        <div class="experience-box">
            <h3 class="editable">EXPERIENCE</h3>
            <div class="experience-items">
                ${e.map((t,n)=>`
                    <div class="experience-item ${t.recent?"recent":""}">
    ${t.recent?'<span class="recent-badge editable">MOST RECENT</span>':""}
                        <div class="experience-info">
                            <div class="experience-date-title">
                                <div class="date editable">${t.date}</div>
                                <h4 class="editable">${t.title}</h4>
                                <h5 class="editable">${t.company}</h5>
                            </div>
                            <div class="experience-details">
                                <ul>
                                    ${t.description.map((o,i)=>`
                                        <li class="editable" data-exp="${n}" data-item="${i}">${o}</li>
                                    `).join("")}
                                </ul>
                            </div>
                        </div>
                    </div>
                `).join("")}
            </div>
        </div>
    `}function S(e){return`
        <div class="tools-box">
            <h3 class="editable">TOOLS</h3>
            ${g("Design",e.design)}
            ${g("no-code",e.noCode)}
            ${g("artifical intelligence",e.ai)}
        </div>
    `}function g(e,t){return`
        <div class="tools-category">
            <h4 class="editable">${e}</h4>
            <div class="tools-list">
                ${C(t)}
            </div>
        </div>
    `}function C(e){let t="";for(let n=0;n<e.length;n+=2){const o=e.slice(n,n+2);t+=`
            <div class="icon-pair">
                ${o.map(i=>`
                    <img src="${i.icon}" class="tool-icon" alt="${i.name}">
                `).join("")}
            </div>
        `}return t}function $(e){const t=e.find(o=>o.main),n=e.filter(o=>!o.main);return`
        <div class="education-box">
            <h3 class="editable">EDUCATION</h3>
            <div class="education-cards">
                <div class="education-card main-card">
                    <h5 class="editable education-year">${t.type}</h5>
                    <h4 class="editable education-title">${t.field}</h4>
                    <div class="education-hashtags editable">${t.institution}</div>
                    <p class="editable education-source">${t.period}</p>
                </div>
                ${n.map((o,i)=>`
                    <div class="education-card secondary-card">
                        <h5 class="editable education-year">${o.type}</h5>
                        <h4 class="editable education-title">${o.field}</h4>
                        <div class="education-hashtags editable">${o.institution||""}</div>
                        <p class="editable education-source">${o.period}</p>
                    </div>
                `).join("")}
            </div>
        </div>
    `}function L(e){return`
        <div class="interests-box">
            <h3 class="editable">INTERESTS</h3>
            <div class="tags">
                ${e.map((t,n)=>`
                    <span class="editable" data-index="${n}">${t}</span>
                `).join("")}
            </div>
        </div>
    `}function E(e){return`
        <div class="contacts-box">
            <div class="contact-content">
                <p class="contact-text editable">${e.contactText}</p>
                <div class="contact-email">
                    <span class="editable">${e.email}</span>
                    <a href="#" class="download-icon">
                        <i class="fas fa-download"></i>
                    </a>
                </div>
            </div>
        </div>
    `}function q(){document.querySelectorAll(".editable").forEach(e=>{e.addEventListener("click",function(t){if(t.target.classList.contains("edit-btn")||t.target.closest(".edit-form")||this.querySelector(".edit-form"))return;const n=this.textContent.trim(),o=this.classList.contains("tools-category")||this.parentElement.classList.contains("tools-category"),i=document.createElement("div");i.className="edit-form active",o&&i.classList.add("tool-category-edit");const a=document.createElement("input");a.type="text",a.className="edit-input",a.value=n;const s=document.createElement("div");s.className="edit-buttons";const r=document.createElement("button");r.className="edit-btn confirm",r.innerHTML='<i class="fas fa-check"></i>',r.title="Сохранить";const c=document.createElement("button");c.className="edit-btn cancel",c.innerHTML='<i class="fas fa-times"></i>',c.title="Отменить",s.appendChild(r),s.appendChild(c),i.appendChild(a),i.appendChild(s);const d=this.innerHTML;this.innerHTML="",this.appendChild(i),a.focus();const u=()=>{const l=a.value.trim();this.textContent=l||n,N(),p()},m=()=>{this.innerHTML=d,p()},p=()=>{document.removeEventListener("keydown",f),document.removeEventListener("click",h)},f=l=>{l.key==="Enter"&&u(),l.key==="Escape"&&m()},h=l=>{e.contains(l.target)||m()};r.addEventListener("click",u),c.addEventListener("click",m),a.addEventListener("keydown",f),document.addEventListener("click",h,{once:!0})})})}function w(e){document.querySelectorAll(".language-progress").forEach((t,n)=>{t.addEventListener("click",o=>{if(o.target===t){const i=e[n].level,a=prompt("Enter language proficiency (0-100):",i);if(a!==null&&!isNaN(a)){const s=Math.min(100,Math.max(0,parseInt(a)));t.style.setProperty("--progress",`${s}%`);const r=JSON.parse(localStorage.getItem("resumeData"))||resumeData;r.languages[n].level=s,localStorage.setItem("resumeData",JSON.stringify(r))}}})})}function N(){var t;const e={profile:{name:document.querySelector(".profile-info-box h1").textContent,title:document.querySelector(".profile-info-box h2").textContent,greeting:document.querySelector(".greeting").textContent,photo:"/images/profile.png",email:document.querySelector(".contacts-box span").textContent,contactText:document.querySelector(".contact-text").textContent},languages:Array.from(document.querySelectorAll(".language-item")).map((n,o)=>({name:n.querySelector(".language-name").textContent,level:parseInt(document.querySelectorAll(".language-progress")[o].style.getPropertyValue("--progress"))})),experience:Array.from(document.querySelectorAll(".experience-item")).map(n=>({date:n.querySelector(".date").textContent,title:n.querySelector("h4").textContent,company:n.querySelector("h5").textContent,description:Array.from(n.querySelectorAll("li")).map(o=>o.textContent),recent:n.classList.contains("recent")})),education:[{type:document.querySelector(".education-card.main-card h5").textContent,field:document.querySelector(".education-card.main-card p:nth-of-type(1)").textContent,institution:((t=document.querySelector(".education-card.main-card p:nth-of-type(2)"))==null?void 0:t.textContent)||"",period:document.querySelector(".education-card.main-card p:last-of-type").textContent,main:!0},...Array.from(document.querySelectorAll(".education-card.secondary-card")).map(n=>({type:n.querySelector("h5").textContent,field:n.querySelector("p:nth-of-type(1)").textContent,period:n.querySelector("p:last-of-type").textContent,main:!1}))],interests:Array.from(document.querySelectorAll(".tags span")).map(n=>n.textContent)};localStorage.setItem("resumeData",JSON.stringify(e))}document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".download-icon");e&&e.addEventListener("click",function(t){t.preventDefault();const n=this.querySelector("i"),o=n.className;n.className="fas fa-spinner fa-spin";const i={scale:2,useCORS:!0,backgroundColor:"#ffffff",scrollX:0,scrollY:0,logging:!1,allowTaint:!0,letterRendering:!0,ignoreElements:a=>a.classList.contains("edit-form")||a.classList.contains("download-icon")};document.body.classList.add("printing"),setTimeout(()=>{html2canvas(document.querySelector(".resume"),i).then(a=>{const{jsPDF:s}=window.jspdf,r=new s("p","mm","a4"),c=r.internal.pageSize.getWidth()-25;r.internal.pageSize.getHeight()-35;const d=c,u=a.height*d/a.width;r.addImage(a,"PNG",10,10,d,u),r.save("Resume.pdf"),n.className=o,document.body.classList.remove("printing")}).catch(a=>{console.error("Error generating PDF:",a),n.className=o,document.body.classList.remove("printing")})},300)})});
//# sourceMappingURL=index-B6K7PxGd.js.map
