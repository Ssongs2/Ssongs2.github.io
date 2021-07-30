module.exports = {
  title: `singnsong.com`,
  description: ` 개발기록`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://Ssongs2.github.io`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: { // 블로그 댓글 설정
      repo: ``,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `ssongs2`,
    bio: {
      role: `개발자`,
      description: ['', '', ''],
      thumbnail: 'zoomkoding.gif', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/Ssongs2`,
      linkedIn: `https://www.linkedin.com/in/jinhyeok-jeong-800871192`,
      email: `sejeq1995@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2018.06 ~ 2019.01',
        activity: 'JAVA 프레임워크 개발자 과정',
        links: {
          github: ''
        },
      },
      {
        date: '2019.04 ~ ',
        activity: 'Douzone',
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        title: '',
        description:
          '구글 출신 분들이 창업한 스타트업에 인턴십을 하던 중 피버팅을 하게 되면서 저는 1인 개발자로 신규 사업에 참여하게 되었습니다. 5명의 경험이 많은 팀원들과 힘을 합쳐 Picky라는 앱을 개발하고 지속적으로 서비스를 확장해나갔습니다. 이 과정을 통해 실제 서비스의 시작과 성장하는 과정을 경험해볼 수 있었습니다.',
        techStack: ['flutter', 'nodejs'],
        thumbnailUrl: 'picky.jpeg',
        links: {
          post: '',
          googlePlay: '',
          appStore: '',
        },
      },
      
    ],
  },
};
