export default {
  /**
   * basic Information
   */
  title: `seokhun.com`,
  description: `개발자 석훈`,
  language: `ko`,
  siteUrl: `https://melodious-cendol-fa2589.netlify.app/`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder

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
      residence: "Seoul, South Korea",
      bachelorDegree:
        "Sogang Univ. Electronic & Economics & Computer Science (2018.03-Present)",
    },
    social: {
      github: `https://github.com/tommya98`,
      linkedIn: `https://www.linkedin.com/in/석훈-엄-956391259/`,
      email: `mailto:tommya98@naver.com`,
    },
  },

  /**
   * definition of featured posts
   */
  featured: [
    {
      title: "category1",
      category: "featured-category1",
    },
    {
      title: "category2",
      category: "featured-category2",
    },
  ],

  /**
   * metadata for About Page
   */
  timestamps: [
    {
      category: "Activity",
      date: "2023.07 - 2023.08",
      en: "Bootcamp",
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
