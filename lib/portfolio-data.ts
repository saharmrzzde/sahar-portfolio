export type Locale = "en" | "ko"
export type Localized = Record<Locale, string>

export const profile = {
  name: "Sahar Mirzazadeh",
  links: {
    github: "https://github.com/saharmrzzde",
    linkedin: "https://www.linkedin.com/in/sahar-mirzazadeh-a6b281326/",
    email: "saharmirzazadeh2001@gmail.com",
  },
  location: {
    en: "Chuncheon, South Korea",
    ko: "강원특별자치도 춘천시",
  } satisfies Localized,
}

export const nav = {
  home: { en: "Home", ko: "홈" },
  about: { en: "About", ko: "소개" },
  projects: { en: "Projects", ko: "프로젝트" },
  skills: { en: "Skills", ko: "기술" },
  journey: { en: "Journey", ko: "경험" },
  contact: { en: "Contact", ko: "연락처" },
} satisfies Record<string, Localized>

export const hero = {
  eyebrow: {
    en: "Computer Science · Frontend · Data",
    ko: "컴퓨터공학 · 프론트엔드 · 데이터",
  },
  headline: {
    en: "Building practical, bilingual web experiences in Korea.",
    ko: "한국에서 실용적인 이중 언어 웹 경험을 만듭니다.",
  },
  subline: {
    en: "I combine frontend development, data structures, and multilingual communication to turn ideas into clear, usable products.",
    ko: "프론트엔드 개발, 자료구조, 다국어 소통 역량을 바탕으로 아이디어를 명확하고 사용하기 쉬운 결과물로 구현합니다.",
  },
  ctaProjects: { en: "Explore my work", ko: "프로젝트 보기" },
  ctaContact: { en: "Contact me", ko: "연락하기" },
  scroll: { en: "A little more about me", ko: "저를 더 알아보세요" },
} satisfies Record<string, Localized>

export const about = {
  kicker: { en: "About", ko: "소개" },
  title: {
    en: "Curious by nature. Persistent by choice.",
    ko: "호기심으로 시작해, 끈기로 완성합니다.",
  },
  paragraphs: {
    en: [
      "I am a fifth-semester Computer Science student at Kangwon National University. I enjoy taking a practical problem, understanding the people behind it, and building a clear digital solution.",
      "Moving from Iran to South Korea strengthened my adaptability and cross-cultural communication. That perspective shapes how I design: understandable, inclusive, and useful across languages.",
      "My work spans frontend development, data structures, and applied machine learning. I am currently deepening my React and TypeScript skills through hands-on projects.",
    ],
    ko: [
      "강원대학교 컴퓨터공학과 5학기 재학생입니다. 실생활의 문제를 발견하고, 사용자의 맥락을 이해한 뒤, 명확한 디지털 해결책으로 구현하는 과정을 좋아합니다.",
      "이란에서 한국으로 이주해 생활하고 공부하며 적응력과 다문화 소통 역량을 키웠습니다. 이러한 경험은 누구나 이해하기 쉽고 여러 언어에서 자연스럽게 사용할 수 있는 디자인을 만드는 데 영향을 주었습니다.",
      "프론트엔드 개발, 자료구조, 응용 머신러닝 프로젝트를 경험했으며, 현재는 실습 프로젝트를 통해 React와 TypeScript 역량을 더욱 깊이 쌓고 있습니다.",
    ],
  },
  stats: [
    { value: "5th", label: { en: "University semester", ko: "대학교 5학기" } },
    { value: "TOPIK 5", label: { en: "Korean proficiency", ko: "한국어 능력" } },
    { value: "6", label: { en: "Languages across cultures", ko: "구사 언어" } },
  ],
} as const

export type Project = {
  slug: "lxp" | "stocks" | "hash" | "portfolio"
  title: Localized
  description: Localized
  outcome: Localized
  tags: string[]
  github?: string
  demo?: string
  accent: "blue" | "pink" | "yellow" | "lavender"
}

export const projects: Project[] = [
  {
    slug: "lxp",
    title: { en: "KNU StudySpot Intelligence", ko: "강원대 학습공간 인텔리전스" },
    description: {
      en: "A campus-focused web app that helps KNU students compare study spaces by noise, seating, power access, food access, and location.",
      ko: "강원대 학생들이 소음, 좌석, 콘센트, 식사 접근성, 위치를 기준으로 학습 공간을 비교할 수 있도록 만든 캠퍼스 웹 앱입니다.",
    },
    outcome: { en: "Designed and built as a complete web programming project.", ko: "웹 프로그래밍 과제로 기획부터 구현까지 완성했습니다." },
    tags: ["JavaScript", "HTML", "CSS", "Responsive UI"],
    github: "https://github.com/saharmrzzde/LXP",
    demo: "https://saharmrzzde.github.io/LXP/",
    accent: "blue",
  },
  {
    slug: "stocks",
    title: { en: "ML Stock Backtest", ko: "머신러닝 주가 백테스트" },
    description: {
      en: "A Python research project that collects Naver Finance data, engineers signals, trains a Random Forest model, and evaluates predictions through backtesting.",
      ko: "네이버 금융 데이터를 수집하고 특징을 생성한 뒤 Random Forest 모델을 학습하고 백테스트로 예측 결과를 평가한 Python 연구 프로젝트입니다.",
    },
    outcome: { en: "Connected data collection, modelling, and evaluation in one workflow.", ko: "데이터 수집, 모델링, 평가를 하나의 워크플로로 연결했습니다." },
    tags: ["Python", "pandas", "scikit-learn", "Jupyter"],
    github: "https://github.com/saharmrzzde/stock-ml-backtest",
    accent: "pink",
  },
  {
    slug: "hash",
    title: { en: "Dynamic Hash Table", ko: "동적 해시 테이블" },
    description: {
      en: "A C implementation that evolved from a fixed-size table into a dynamically resizing hash table with a 0.75 load-factor threshold.",
      ko: "고정 크기 버전에서 시작해 적재율 0.75를 기준으로 자동 확장되는 구조로 발전시킨 C 해시 테이블 구현입니다.",
    },
    outcome: { en: "Focused on collision handling, memory, and measurable performance.", ko: "충돌 처리, 메모리 관리, 성능 측정에 집중했습니다." },
    tags: ["C", "Data Structures", "Hashing", "Performance"],
    accent: "yellow",
  },
  {
    slug: "portfolio",
    title: { en: "This Bilingual 3D Portfolio", ko: "이중 언어 3D 포트폴리오" },
    description: {
      en: "A light, bilingual portfolio with an interactive WebGL room, accessible motion preferences, and a resilient non-WebGL fallback.",
      ko: "인터랙티브 WebGL 공간, 모션 접근성, WebGL 미지원 환경의 대체 화면을 갖춘 밝은 톤의 이중 언어 포트폴리오입니다.",
    },
    outcome: { en: "Built to turn my background and work into one coherent story.", ko: "저의 배경과 작업을 하나의 일관된 이야기로 전달하도록 제작했습니다." },
    tags: ["Next.js", "TypeScript", "React Three Fiber", "Tailwind CSS"],
    github: "https://github.com/saharmrzzde/sahar-portfolio",
    accent: "lavender",
  },
]

export const skillGroups = [
  {
    title: { en: "Frontend", ko: "프론트엔드" },
    note: { en: "Built with", ko: "프로젝트 활용" },
    items: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "TypeScript"],
  },
  {
    title: { en: "Programming & Data", ko: "프로그래밍 · 데이터" },
    note: { en: "Core coursework & projects", ko: "전공 수업 · 프로젝트" },
    items: ["Python", "C", "Java", "Data Structures", "pandas", "scikit-learn"],
  },
  {
    title: { en: "Tools & Systems", ko: "도구 · 시스템" },
    note: { en: "Daily workflow", ko: "작업 환경" },
    items: ["Git", "GitHub", "Linux", "VS Code", "Responsive Design", "Accessibility"],
  },
] as const

export const languages = [
  { name: { en: "Persian", ko: "페르시아어" }, level: { en: "Native", ko: "모국어" } },
  { name: { en: "Azerbaijani", ko: "아제르바이잔어" }, level: { en: "Native", ko: "모국어" } },
  { name: { en: "English", ko: "영어" }, level: { en: "Advanced", ko: "고급" } },
  { name: { en: "Korean", ko: "한국어" }, level: { en: "Advanced · TOPIK 5", ko: "고급 · TOPIK 5급" } },
  { name: { en: "Turkish", ko: "터키어" }, level: { en: "Advanced", ko: "고급" } },
  { name: { en: "Arabic", ko: "아랍어" }, level: { en: "Intermediate", ko: "중급" } },
] as const

export const journey = [
  {
    year: "2026",
    title: { en: "Samsung Dream Scholarship Scholar", ko: "삼성꿈장학재단 장학생" },
    detail: { en: "Selected for the Samsung Dream Scholarship Foundation program.", ko: "삼성꿈장학재단 장학생으로 선발되었습니다." },
  },
  {
    year: "2026",
    title: { en: "GDG on Campus Member", ko: "GDG on Campus 멤버" },
    detail: { en: "Learning and collaborating with the campus developer community.", ko: "교내 개발자 커뮤니티에서 학습하고 협업하고 있습니다." },
  },
  {
    year: "2022—Now",
    title: { en: "Computer Science at KNU", ko: "강원대학교 컴퓨터공학 전공" },
    detail: { en: "Fifth-semester student in Chuncheon, South Korea.", ko: "춘천에서 컴퓨터공학을 공부하는 5학기 재학생입니다." },
  },
  {
    year: "2019",
    title: { en: "International ICDL", ko: "국제 ICDL 자격" },
    detail: { en: "Completed the International Computer Driving Licence certification.", ko: "국제 컴퓨터 활용 능력 인증 과정을 이수했습니다." },
  },
] as const

export const contact = {
  kicker: { en: "Contact", ko: "연락처" },
  title: { en: "Have a project or opportunity in mind?", ko: "함께 이야기해 볼 기회가 있나요?" },
  subtitle: {
    en: "The fastest way to reach me is email. I am open to internships, part-time roles, and thoughtful collaborations in web development.",
    ko: "이메일로 가장 빠르게 연락하실 수 있습니다. 웹 개발 인턴십, 파트타임 포지션, 의미 있는 협업 기회에 열려 있습니다.",
  },
  email: { en: "Send me an email", ko: "이메일 보내기" },
  copy: { en: "Copy address", ko: "주소 복사" },
  copied: { en: "Copied", ko: "복사됨" },
} satisfies Record<string, Localized>

export const footer = {
  rights: { en: "Designed and built by Sahar.", ko: "Sahar가 직접 디자인하고 개발했습니다." },
} satisfies Record<string, Localized>
