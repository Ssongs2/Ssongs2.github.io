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
      description: ['문제가 생기면 답을 찾는', '중심이 있는', '재밌게 하는'],
      thumbnail: 'ssongs2.gif', // Path to the image in the 'asset' folder
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
        date: '2021.11 ~ 2022.07',
        activity: '근로복지공단 - 스마트업무시스템 개발',
        links: {
          github: ''
        },
      },
      {
        date: '2019.04 ~ 2022.07',
        activity: 'ERP 서비스 - 팩스/문자 서비스 개발',
        links: {
          github: ''
        },
      },
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
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
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
          'BtoB서비스를 제공하는 회사에 처음 취직하게 되어 실무자에게 도움이 되는 서비스를 만들고 싶다고 생각하였습니다 그 이후 저는 효용있는 개발자가 되는 여정에 있습니다. 글로벌한 인재가 되는 것을 꿈꿉니다',
        techStack: ['java', 'reactjs'],
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
