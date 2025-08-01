const resumeData = {
    profile: {
        name: "Karthik SR",
        title: "UX/UI Designer",
        greeting: "Hello 👋🏻 I'm",
        photo: "images/profile.png",
        email: "srkarthik.designscape@gmail.com",
        contactText: "Let's chat! I'm ready to work on exciting projects"
    },
    languages: [
        { name: "English", level: 100 },
        { name: "Malayalam", level: 100 },
        { name: "Hindi", level: 75 }
    ],
    experience: [
        {
            date: "Jun. 2023 - Present",
            title: "Marketing Manager",
            company: "Pankayam | Full-time",
            description: [
                "Strategy development and planning of campaigns that promote the business and generate genuine traffic",
                "SEO Content Creation for Blogs, Website, Social media"
            ],
            recent: true
        },
        {
            date: "2017 - Present",
            title: "Graphic / Web designer",
            company: "Freelance",
            description: [
                "Development of internal projects from scratch, product design of brands",
                "Landing page, webapps and hybrid apps",
                "Coordinating with outside agencies, art services, web designer, marketing, printers, and colleagues as necessary."
            ]
        },
        {
            date: "Sep. 2021 - Jun. 2023",
            title: "Legal Assistant",
            company: "Law Firm | Intern",
            description: [
                "Provide administrative support to lawyer and enhance office effectiveness",
                "Handle communication with clients, witnesses etc.",
                "Prepare case briefs and summarize depositions, interrogatories and testimony"
            ]
        }
    ],
    tools: {
        design: [
            { name: "Figma", icon: "images/logoFigma.svg" },
            { name: "Photoshop", icon: "images/adobe-photoshop.svg" },
            { name: "Illustrator", icon: "images/adobe-illustrator.svg" },
            { name: "Premiere", icon: "images/adobe-premiere.svg" },
            { name: "Notion", icon: "images/logoNotion.svg" },
            { name: "Meet", icon: "images/logoMeet.svg" }
        ],
        noCode: [
            { name: "Zapier", icon: "images/logoZapìer.svg" },
            { name: "Webflow", icon: "images/logoWebflow.svg" },
            { name: "Framer", icon: "images/logoFramer.svg" },
            { name: "Wordpress", icon: "images/logoWordpress.svg" }
        ],
        ai: [
            { name: "ChatGPT", icon: "images/logoChatGPT.svg" },
            { name: "Copilot", icon: "images/logoCopilot.svg" },
            { name: "Midjourney", icon: "images/logoMidjourney.svg" }
        ]
    },
    education: [
        {
            type: "2023",
            field: "UI/UX",
            institution: "#design #ux #ui #research #figma #adobexd",
            period: "Coursera",
            main: true
        },
        {
            type: "2021",
            field: "Law",
            institution: "#design #ux #ui #research #figma #adobexd",
            period: "University of Kerala",
            main: false
        },
        {
            type: "2017",
            field: "Graphic design",
            institution: "#design #ux #ui #research #figma #adobexd",
            period: "Coursera",
            main: false
        }
    ],
    interests: [
        "branding", "design", "photography", "AI", "illustration",
        "typography", "social networks", "research", "user experience",
        "web design", "mobile apps", "color theory", "interaction design",
        "user interface", "digital marketing", "content creation"
    ]
};

// Save to localStorage
localStorage.setItem('resumeData', JSON.stringify(resumeData));