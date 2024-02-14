export default {
  /**
   * basic Information
   */
  title: `seokhun.dev`,
  description: `엄석훈의 개발 블로그입니다.`,
  language: `ko`,
  siteUrl: `https://seokhun.dev/`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  naverVertification: `d7906020c046764bbc6896d85454eff1e45f9915`,

  /**
   * comments setting
   */
  comments: {
    utterances: {
      repo: `tommya98/blog`,
    },
  },

  /**
   * introduce yourself
   */
  author: {
    name: `엄석훈`,
    nickname: `엄석훈`,
    stack: ["Frontend", "React", "Typescript"],
    bio: {
      email: `tommya98@naver.com`,
      residence: "대한민국, 서울",
      bachelorDegree:
        "서강대학교, 전자공학, 경제학, 컴퓨터공학 학사 (2018.03-재학중)",
    },
    social: {
      github: `https://github.com/tommya98`,
      portfolio: `https://ballistic-pangolin-89b.notion.site/f3cc3388e5e74594bd334bf40667e328`,
      email: `mailto:tommya98@naver.com`,
    },
  },

  /**
   * definition of featured posts
   */
  featured: [
    {
      title: "Project",
      category: "featured-Project",
    },
  ],

  /**
   * metadata for About Page
   */
  timestamps: [
    {
      category: "Activity",
      date: "2023.07 - 2023.08",
      en: "Softeer Bootcamp",
      kr: "부트캠프",
      info: "현대자동차 소프티어 부트캠프",
      link: "",
    },
  ],

  /**
   * metadata for Playground Page
   */
  projects: [
    {
      title: "SPANS",
      description:
        "드론의 버드 아이 뷰 기반 장애물 탐지 및 최적 경로 탐색 시스템 프로토타입",
      techStack: ["React", "JavaScript"],
      thumbnailUrl: "SPANS_thumbnail.jpg", // Path to your in the 'assets' folder
      links: {
        post: "",
        github: "https://github.com/tommya98/SPANS",
        demo: "",
        googlePlay: "",
        appStore: "",
      },
    },
    {
      title: "NewSnack",
      description:
        "유저의 관심사 기반으로 필터링 및 추천된 뉴스를 요약하여 제공 및 카카오톡 전송 서비스",
      techStack: ["React", "TypeScript"],
      thumbnailUrl: "NewSnack_thumbnail.jpg", // Path to your in the 'assets' folder
      links: {
        post: "",
        github: "https://github.com/tommya98/NewSnack",
        demo: "",
        googlePlay: "",
        appStore: "",
      },
    },
    {
      title: "CaArt",
      description:
        "사용자의 라이프스타일 및 카마스터 기반 차량 추천 및 커스텀 서비스",
      techStack: ["React", "TypeScript"],
      thumbnailUrl: "CaArt_thumbnail.jpg", // Path to your in the 'assets' folder
      links: {
        post: "",
        github: "https://github.com/tommya98/H6-CaArt",
        demo: "",
        googlePlay: "",
        appStore: "",
      },
    },
    {
      title: "UI-MUSEUM",
      description: "직접 만든 컴포넌트를 전시하는 전시대",
      techStack: ["React", "TypeScript"],
      thumbnailUrl: "UI-MUSEUM_thumbnail.jpg", // Path to your in the 'assets' folder
      links: {
        post: "",
        github: "https://github.com/tommya98/UI-MUSEUM",
        demo: "https://tommya98.github.io/UI-MUSEUM/",
        googlePlay: "",
        appStore: "",
      },
    },
  ],
};
