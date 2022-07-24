// db mockup

const newsData = [
  // 1st
  {
    id: 1,
    title: 'Prime Media Report',
    description: 'A detail report about our company',
    amharic: {
      title: 'የፕራይም ሚድያ ዘገባ',
      description: 'ስለ ማእከላችን ዝርዝር ዘገባ',
      date: 'ሜይ 19,  2022',
    },
    imageLocation: '/pictures/news/prime-media.jpg',
    videoUrl: 'https://youtu.be/L-kzvgHDc5o',
    iframeUrl: 'https://www.youtube.com/embed/L-kzvgHDc5o',
    date: 'May 19, 2022',
  },

  // 2nd
  {
    id: 2,
    title: 'Kana TV Report',
    description:
      'Watch the trainigs, interviews on our stadium and learn more about us',
    amharic: {
      title: 'የቃና ቲቪ ዘገባ',
      description: 'በስታዲየማችን ላይ ስልጠናዎችን፣ ቃለመጠይቆችን ይመልከቱ፣ ስለእኛ የበለጠ ይወቁ',
      date: 'ፌብሩዋሪ 4, 2022',
    },
    imageLocation: '/pictures/news/kana.jpg',
    videoUrl: 'https://youtu.be/hbM9Y4VwWZk',
    iframeUrl: 'https://www.youtube.com/embed/hbM9Y4VwWZk',
    date: 'Feb 4, 2022',
  },

  // 3rd
  {
    id: 3,
    title: 'Nahoo TV Report',
    description: 'Featuring Bunna Star Abubeker Nasir',
    amharic: {
      title: 'የናሁ ቲቪ ዘገባ',
      description: 'የቡና ኮከብ አቡበከር ናስር ያለበት እና ሌሎችም ዝርዝሮች',
      date: 'ጁላይ 23, 2022',
    },
    imageLocation: '/pictures/news/nahoo.jpg',
    videoUrl: 'https://youtu.be/geh867cmrPY',
    iframeUrl: 'https://www.youtube.com/embed/geh867cmrPY',
    date: 'July 23 2022',
  },

  // 4th
  {
    id: 4,
    title: 'Fana TV Report',
    description: 'Watch the trainigs, interviews on our stadium',
    amharic: {
      title: 'የፋና ቲቪ ዘገባ',
      description: 'በስታዲየማችን ላይ ስልጠናዎችን፣ ቃለመጠይቆችን ይመልከቱ',
      date: 'ሜይ 16, 2022 ',
    },
    imageLocation: '/pictures/news/fana.jpg',
    videoUrl: 'https://youtu.be/LBzevHPDGag',
    iframeUrl: 'https://www.youtube.com/embed/LBzevHPDGag',
    date: 'May 16, 2022',
  },
];

export default newsData;
