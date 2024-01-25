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
      title: "Portfolio",
      description: "포트폴리오",
      techStack: ["React", "Typescript"],
      thumbnailUrl: "", // Path to your in the 'assets' folder
      links: {
        post: "",
        github: "",
        demo: "",
        googlePlay: "",
        appStore: "",
      },
    },
  ],
};
