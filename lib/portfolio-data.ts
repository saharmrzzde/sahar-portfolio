// -----------------------------------------------------------------------------
// EDIT ME: All portfolio content lives here. Replace placeholders with your info.
// Every text field has an English (en) and Korean (ko) value.
// -----------------------------------------------------------------------------

export type Locale = "en" | "ko"

export type Localized = Record<Locale, string>

export const profile = {
  // TODO: replace with your name
 name: "Sahar Mirzazadeh",

links: {
  github: "https://github.com/saharmrzzde",
  linkedin: "https://www.linkedin.com/in/sahar-mirzazadeh-a6b281326/",
  email: "saharmirzazadeh2001@gmail.com",
  resume: "",
},
  location: {
    en: "Chuncheon, South Korea",
    ko: "대한민국 춘천",
  } satisfies Localized,
  role: {
    en: "CS Student & Frontend Developer",
    ko: "컴퓨터공학 전공생 · 프론트엔드 개발자",
  } satisfies Localized,
}

export const nav = {
  home: { en: "Home", ko: "홈" },
  about: { en: "About", ko: "소개" },
  skills: { en: "Skills", ko: "기술" },
  projects: { en: "Projects", ko: "프로젝트" },
  contact: { en: "Contact", ko: "연락처" },
} satisfies Record<string, Localized>

export const hero = {
  greeting: { en: "Hi, I'm", ko: "안녕하세요," },
  headline: {
    en: "I build delightful web experiences.",
    ko: "즐거운 웹 경험을 만듭니다.",
  },
  subline: {
    en: "A Computer Science student in Chuncheon crafting fast, accessible, and beautiful interfaces with React, Next.js, and TypeScript.",
    ko: "춘천에서 공부하는 컴퓨터공학 전공생으로, React · Next.js · TypeScript로 빠르고 접근성 높은 아름다운 인터페이스를 만듭니다.",
  },
  ctaProjects: { en: "View Projects", ko: "프로젝트 보기" },
  ctaContact: { en: "Get in Touch", ko: "연락하기" },
  scroll: { en: "Scroll to explore", ko: "스크롤하여 더 보기" },
} satisfies Record<string, Localized>

export const about = {
  title: { en: "About Me", ko: "소개" },
  kicker: { en: "Who I am", ko: "저는" },
  paragraphs: {
    en: [
      "I'm a Computer Science student based in Chuncheon, South Korea, with a passion for turning ideas into polished, performant products.",
      "I focus on the frontend — building accessible component systems, thoughtful animations, and clean UI — while staying comfortable across the full stack.",
      "When I'm not coding, I'm exploring design trends, contributing to open source, and learning something new.",
    ],
    ko: [
      "저는 대한민국 춘천에 거주하는 컴퓨터공학 전공생으로, 아이디어를 완성도 높고 빠른 제품으로 만드는 것을 좋아합니다.",
      "접근성 높은 컴포넌트 시스템, 섬세한 애니메이션, 깔끔한 UI 등 프론트엔드에 집중하면서도 풀스택 전반을 다룹니다.",
      "코딩을 하지 않을 때는 디자인 트렌드를 살피고, 오픈소스에 기여하며, 새로운 것을 배웁니다.",
    ],
  },
  stats: [
    { value: "3+", label: { en: "Years coding", ko: "코딩 경력" } },
    { value: "15+", label: { en: "Projects built", ko: "제작한 프로젝트" } },
    { value: "10+", label: { en: "Technologies", ko: "기술 스택" } },
  ],
} as const

export type SkillGroup = {
  title: Localized
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: { en: "Frontend", ko: "프론트엔드" },
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: { en: "Backend", ko: "백엔드" },
    items: ["Node.js", "Python", "PostgreSQL", "REST APIs", "GraphQL"],
  },
  {
    title: { en: "Tools & CS", ko: "도구 · CS" },
    items: ["Git", "Figma", "Data Structures", "Algorithms", "Linux"],
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
    title: { en: "Realtime Dashboard", ko: "실시간 대시보드" },
    description: {
      en: "An analytics dashboard with live charts, filtering, and a themeable design system.",
      ko: "실시간 차트, 필터링, 테마 가능한 디자인 시스템을 갖춘 분석 대시보드입니다.",
    },
    tags: ["Next.js", "TypeScript", "Charts"],
    image: "/projects/dashboard.png",
    github: "https://github.com/yourusername/dashboard",
    demo: "https://example.com",
    accent: "blue",
  },
  {
    title: { en: "Recipe Finder App", ko: "레시피 검색 앱" },
    description: {
      en: "A mobile-first app to search, save, and plan meals with a friendly, playful UI.",
      ko: "친근하고 경쾌한 UI로 식사를 검색·저장·계획하는 모바일 우선 앱입니다.",
    },
    tags: ["React", "Tailwind", "API"],
    image: "/projects/recipe.png",
    github: "https://github.com/yourusername/recipes",
    demo: "https://example.com",
    accent: "pink",
  },
  {
    title: { en: "Algorithm Visualizer", ko: "알고리즘 시각화" },
    description: {
      en: "Interactive visualizations of sorting and pathfinding algorithms for learning.",
      ko: "학습을 위한 정렬·경로 탐색 알고리즘의 인터랙티브 시각화 도구입니다.",
    },
    tags: ["React", "Canvas", "CS"],
    image: "/projects/visualizer.png",
    github: "https://github.com/yourusername/visualizer",
    demo: "https://example.com",
    accent: "lavender",
  },
  {
    title: { en: "Portfolio 3D", ko: "3D 포트폴리오" },
    description: {
      en: "This site — a 3D, bilingual portfolio built with React Three Fiber and Next.js.",
      ko: "이 사이트 — React Three Fiber와 Next.js로 만든 3D 이중 언어 포트폴리오입니다.",
    },
    tags: ["R3F", "Three.js", "Next.js"],
    image: "/projects/portfolio.png",
    github: "https://github.com/yourusername/portfolio",
    demo: "https://example.com",
    accent: "blue",
  },
]

export const contact = {
  title: { en: "Let's work together", ko: "함께 만들어요" },
  subtitle: {
    en: "Have a project in mind or just want to say hi? My inbox is always open.",
    ko: "진행 중인 프로젝트가 있거나 인사를 나누고 싶다면 언제든 메일 주세요.",
  },
  cta: { en: "Say hello", ko: "인사하기" },
  form: {
    name: { en: "Name", ko: "이름" },
    email: { en: "Email", ko: "이메일" },
    message: { en: "Message", ko: "메시지" },
    send: { en: "Send message", ko: "메시지 보내기" },
    sent: { en: "Thanks! I'll be in touch.", ko: "감사합니다! 곧 연락드릴게요." },
  },
} satisfies Record<string, Localized | Record<string, Localized>>

export const footer = {
  rights: {
    en: "Built with Next.js & React Three Fiber.",
    ko: "Next.js와 React Three Fiber로 제작되었습니다.",
  },
} satisfies Record<string, Localized>
