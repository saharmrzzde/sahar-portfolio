export type Locale = "en" | "ko"

export type Localized = Record<Locale, string>

export const profile = {
  name: "Sahar Mirzazadeh",

  links: {
    github: "https://github.com/saharmrzzde",
    linkedin:
      "https://www.linkedin.com/in/sahar-mirzazadeh-a6b281326/",
    email: "saharmirzazadeh2001@gmail.com",
    resume: "",
  },

  location: {
    en: "Chuncheon, South Korea",
    ko: "대한민국 춘천",
  } satisfies Localized,

  role: {
    en: "Computer Science Student & Aspiring Frontend Developer",
    ko: "컴퓨터공학 전공생 · 프론트엔드 개발자 지망생",
  } satisfies Localized,
}

export const nav = {
  home: { en: "Home", ko: "홈" },
  about: { en: "About", ko: "소개" },
  skills: { en: "Skills & Languages", ko: "기술 · 언어" },
  projects: { en: "Projects", ko: "프로젝트" },
  contact: { en: "Contact", ko: "연락처" },
} satisfies Record<string, Localized>

export const hero = {
  greeting: {
    en: "Hi, I'm",
    ko: "안녕하세요,",
  },

  headline: {
    en: "I am learning to build thoughtful web experiences.",
    ko: "사용자를 생각하는 웹 경험을 배우고 만들고 있습니다.",
  },

  subline: {
    en: "A fifth-semester Computer Science student at Kangwon National University, exploring frontend development and creating accessible, engaging interfaces.",
    ko: "강원대학교 컴퓨터공학과 5학기 재학생으로, 프론트엔드 개발을 배우며 접근성 높고 매력적인 인터페이스를 만들고 있습니다.",
  },

  ctaProjects: {
    en: "View Project",
    ko: "프로젝트 보기",
  },

  ctaContact: {
    en: "Get in Touch",
    ko: "연락하기",
  },

  scroll: {
    en: "Scroll to explore",
    ko: "스크롤하여 더 보기",
  },
} satisfies Record<string, Localized>

export const about = {
  title: {
    en: "About Me",
    ko: "소개",
  },

  kicker: {
    en: "Who I am",
    ko: "저는",
  },

  paragraphs: {
    en: [
      "I am a fifth-semester Computer Science student at Kangwon National University in Chuncheon, South Korea. I am especially interested in frontend development and user-friendly digital experiences.",

      "Living and studying in South Korea has strengthened my communication skills, adaptability, and cross-cultural perspective. I hold TOPIK Level 5 and communicate in Persian, Azerbaijani, English, Korean, Turkish, and Arabic.",

      "I completed an international ICDL certification in 2019. I am continuing to develop my technical skills through university coursework and hands-on projects, including this bilingual 3D portfolio.",
    ],

    ko: [
      "저는 대한민국 춘천에 있는 강원대학교 컴퓨터공학과 5학기 재학생입니다. 프론트엔드 개발과 사용자 친화적인 디지털 경험에 특히 관심이 있습니다.",

      "한국에서 생활하고 공부하며 의사소통 능력, 적응력, 다문화적 시각을 키웠습니다. TOPIK 5급을 보유하고 있으며 페르시아어, 아제르바이잔어, 영어, 한국어, 터키어, 아랍어로 소통할 수 있습니다.",

      "2019년에 국제 ICDL 과정을 이수했습니다. 대학 수업과 실습 프로젝트를 통해 기술 역량을 계속 키우고 있으며, 이 이중 언어 3D 포트폴리오도 그 과정의 하나입니다.",
    ],
  },

  stats: [
    {
      value: "5th",
      label: {
        en: "University semester",
        ko: "대학교 학기",
      },
    },
    {
      value: "TOPIK 5",
      label: {
        en: "Korean proficiency",
        ko: "한국어 능력",
      },
    },
    {
      value: "6",
      label: {
        en: "Languages",
        ko: "사용 언어",
      },
    },
  ],
} as const

export type SkillGroup = {
  title: Localized
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: {
      en: "Frontend Learning & Focus",
      ko: "프론트엔드 학습 · 관심 분야",
    },
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
      "TypeScript",
    ],
  },

  {
    title: {
      en: "Tools & Web",
      ko: "도구 · 웹",
    },
    items: [
      "Git",
      "GitHub",
      "Responsive Design",
      "Web Accessibility",
      "3D Web",
    ],
  },

  {
    title: {
      en: "Languages",
      ko: "언어",
    },
    items: [
      "Persian — Native",
      "Azerbaijani — Native",
      "English — Advanced",
      "Korean — Advanced (TOPIK 5)",
      "Turkish — Advanced",
      "Arabic — Intermediate",
    ],
  },

  {
    title: {
      en: "Certification",
      ko: "자격 · 교육",
    },
    items: ["International ICDL — Issued in 2019"],
  },
]

export type Project = {
  title: Localized
  description: Localized
  tags: string[]
  image: string
  github: string
  demo: string
  accent: "blue" | "pink" | "lavender"
}

export const projects: Project[] = [
  {
    title: {
      en: "Bilingual 3D Portfolio",
      ko: "이중 언어 3D 포트폴리오",
    },

    description: {
      en: "My personal English–Korean portfolio with responsive layouts, interactive 3D visuals, and information about my background, languages, and learning journey.",
      ko: "반응형 레이아웃과 인터랙티브 3D 비주얼을 활용해 저의 배경, 언어 능력, 학습 과정을 소개하는 영·한 개인 포트폴리오입니다.",
    },

    tags: [
      "Next.js",
      "TypeScript",
      "React Three Fiber",
      "Vercel",
    ],

    image: "/projects/portfolio.png",

    github:
      "https://github.com/saharmrzzde/sahar-portfolio",

    demo:
      "https://sahar-portfolio-taupe.vercel.app",

    accent: "blue",
  },
]

export const contact = {
  title: {
    en: "Let's connect",
    ko: "연락해 주세요",
  },

  subtitle: {
    en: "I am open to learning opportunities, internships, collaborations, and conversations about web development.",
    ko: "웹 개발 관련 학습 기회, 인턴십, 협업 및 다양한 대화에 열려 있습니다.",
  },

  cta: {
    en: "Send an email",
    ko: "이메일 보내기",
  },

  form: {
    name: {
      en: "Name",
      ko: "이름",
    },
    email: {
      en: "Email",
      ko: "이메일",
    },
    message: {
      en: "Message",
      ko: "메시지",
    },
    send: {
      en: "Send message",
      ko: "메시지 보내기",
    },
    sent: {
      en: "Thank you for your message.",
      ko: "메시지를 보내주셔서 감사합니다.",
    },
  },
} satisfies Record<
  string,
  Localized | Record<string, Localized>
>

export const footer = {
  rights: {
    en: "Built with Next.js & React Three Fiber.",
    ko: "Next.js와 React Three Fiber로 제작되었습니다.",
  },
} satisfies Record<string, Localized>
