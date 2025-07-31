var mainData = {
  vowels: {
    long: [
      {
        symbol: "ɑː",
        chinese: "<u>阿</u>姨 <u>辣</u>椒",
        english: "<u>a</u>rt /<u>ɑː</u>t/ <br>c<u>la</u>ss /k<u>lɑː</u>s/",
        filename: "sound_a2"
      },
      {
        symbol: "ɔː",
        chinese: "<u>哦</u>哦 ",
        english: "<u>a</u>ll /<u>ɔː</u>l/ <br>t<u>a</u>lk /t<u>ɔː</u>k/",
        filename: "sound_o2"
      },
      {
        symbol: "ɜː",
        chinese: "<u>鹅</u>毛",
        english: "<u>ear</u>ly /<u>ˈɜː</u>.li/<br>n<u>ur</u>se /n<u>ɜː</u>s/",
        filename: "sound_er"
      },
      {
        symbol: "iː",
        chinese: "<u>医</u>生",
        english: "t<u>ea</u> /t<u>iː</u>/ <br>b<u>ee</u> /b<u>iː</u>/",
        filename: "sound_i2"
      },
      {
        symbol: "uː",
        chinese: "<u>乌</u>云",
        english: "<u>u</u>ber /<u>uː</u>bər/ <br>f<u>oo</u>d /f<u>uː</u>d/",
        filename: "sound_u2"
      },
      {
        symbol: "juː",
        chinese: "<u>优</u>选",
        english: "<u>u</u>se /<u>juː</u>z/ <br><u>u</u>nit /<u>juː</u>'nɪt/",
        filename: "sound_u2"
      }
    ],
    short: [
      {
        symbol: "ʌ",
        chinese: "<u>阿</u>妈",
        english: "c<u>u</u>p<br>/k<u>ʌ</u>p/",
        filename: "sound_a"
      },
      {
        symbol: "ɒ",
        chinese: "<u>喔</u>",
        english: "d<u>o</u>g<br>/d<u>ɒ</u>g/",
        filename: "sound_o"
      },
      {
        symbol: "ə",
        chinese: "<u>额</u>头",
        english: "<u>a</u>go<br>/<u>ə</u>ˈɡəʊ/",
        filename: "sound_e4"
      },
      {
        symbol: "ɪ",
        chinese: "<u>衣</u>",
        english: "b<u>i</u>g<br>/b<u>ɪ</u>ɡ/",
        filename: "sound_I"
      },
      {
        symbol: "ʊ",
        chinese: "<u>屋</u>",
        english: "p<u>u</u>t<br>/p<u>ʊ</u>t/",
        filename: "sound_u"
      },
      {
        symbol: "e",
        chinese: "<u>诶</u>",
        english: "<u>e</u>gg<br>/<u>e</u>ɡ/",
        filename: "sound_e"
      },
      {
        symbol: "æ",
        chinese: "<u>哎</u>",
        english: "<u>a</u>pple<br>/<u>ˈæ</u>pəl/",
        filename: "sound_ae"
      }
    ],
    closingDiphthongs: [
      {
        symbol: "aɪ",
        chinese: "<u>爱</u>你",
        english: "<u>eye</u>s /<u>aɪ</u>z/<br><u>i</u>ce /<u>aɪ</u>s/",
        filename: "sound_aɪ"
      },
      {
        symbol: "eɪ",
        chinese: "<u>诶 累</u>",
        english: "l<u>a</u>te /l<u>eɪ</u>t/<br><u>ei</u>ght /<u>eɪ</u>t/",
        filename: "sound_eɪ"
      },
      {
        symbol: "ɔɪ",
        chinese: "<u>喔依</u>",
        english: "b<u>oy</u> /b<u>ɔɪ</u>/<br>v<u>oi</u>ce /v<u>ɔɪ</u>s/",
        filename: "sound_oɪ"
      },
      {
        symbol: "aʊ",
        chinese: "<u>澳</u>门",
        english: "<u>ou</u>t /<u>aʊ</u>t/<br>h<u>ou</u>r /ˈ<u>aʊ</u>.ər/ ",
        filename: "sound_au"
      },
      {
        symbol: "əʊ",
        chinese: "<u>欧</u>洲",
        english: "<u>o</u>ld  /<u>oʊ</u>ld/<br><u>o</u>ver /ˈ<u>oʊ</u>.vər/",
        filename: "sound_eu"
      }
    ],
    centeringDiphthongs: [
      { symbol: "ɪə", chinese: "<u>亿耳</u>", filename: "sound_Ir" },
      { symbol: "eə", chinese: "<u>挨耳</u>", filename: "sound_air" },
      { symbol: "ʊə", chinese: "<u>悟耳</u>", filename: "sound_ur" }
    ]
  },
  consonants: {
    plosives: {
      voiceless: [
        { symbol: "p", chinese: "山<u>坡</u>", filename: "sound_p" },
        { symbol: "t", chinese: "<u>特</u>别", filename: "sound_t" },
        { symbol: "k", chinese: "<u>可</u>以", filename: "sound_k" }
      ],
      voiced: [
        { symbol: "b", chinese: "<u>波</u>浪", filename: "sound_b" },
        { symbol: "d", chinese: "<u>得</u>到", filename: "sound_d" },
        { symbol: "g", chinese: "<u>哥哥</u>", filename: "sound_g" }
      ]
    },
    fricatives: {
      voiceless: [
        { symbol: "f", chinese: "<u>辅</u>导", filename: "sound_f" },
        { symbol: "s", chinese: "<u>思</u>考", filename: "sound_s" },
        { symbol: "ʃ", chinese: "<u>西</u>瓜", filename: "sound_xi" },
        { symbol: "θ", chinese: "<u>撕</u>(咬舌)", filename: "sound_si" },
        { symbol: "h", chinese: "<u>喝</u>水", filename: "sound_h" }
      ],
      voiced: [
        { symbol: "v", chinese: "<u>物</u>", filename: "sound_v" },
        { symbol: "z", chinese: "<u>租</u>房", filename: "sound_z" },
        { symbol: "ʒ", chinese: "<u>日</u>", filename: "sound_n3" },
        { symbol: "ð", chinese: "<u>滋</u>(咬舌)", filename: "sound_the" },
        { symbol: "r", chinese: "<u>惹</u>祸", filename: "sound_r" }
      ]
    },
    affricates: {
      voiceless: [
        { symbol: "tʃ", chinese: "<u>起</u> 请 奇", filename: "sound_qi" },
        { symbol: "tr", chinese: "邮<u>戳</u>", filename: "sound_tr" },
        { symbol: "ts", chinese: "<u>早</u> 在", filename: "sound_ts" }
      ],
      voiced: [
        { symbol: "dʒ", chinese: "拥<u>挤</u>", filename: "sound_d3" },
        { symbol: "dr", chinese: "<u>啄</u>木鸟", filename: "sound_dr" },
        { symbol: "dz", chinese: "<u>子</u>", filename: "sound_dz" }
      ]
    },
    nasals: [
      { symbol: "m", chinese: "<u>木</u>", filename: "sound_m" },
      { symbol: "n", chinese: "<u>呢</u>", filename: "sound_n" },
      { symbol: "ŋ", chinese: "<u>嗯葛</u> eng", filename: "sound_ng" }
    ],
    lateral: [{ symbol: "l", chinese: "快<u>乐</u>", filename: "sound_l" }],
    approximants: [
      { symbol: "j", chinese: "<u>嘻</u>", filename: "sound_j" },
      { symbol: "w", chinese: "<u>我</u>", filename: "sound_w" }
    ]
  }
};
