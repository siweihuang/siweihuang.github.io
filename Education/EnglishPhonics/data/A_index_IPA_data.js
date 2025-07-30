var mainData = {
  vowels: {
    long: [
      { symbol: "ɑː", chinese: "<u>阿</u>姨", filename: "sound_a2" },
      { symbol: "ɔː", chinese: "<u>哦</u>哦", filename: "sound_o2" },
      { symbol: "ɜː", chinese: "<u>鹅</u>毛", filename: "sound_er" },
      { symbol: "iː", chinese: "<u>医</u>生", filename: "sound_i2" },
      { symbol: "uː", chinese: "<u>乌</u>云", filename: "sound_u2" }
    ],
    short: [
      { symbol: "ʌ", chinese: "啊", filename: "sound_a" },
      { symbol: "ɒ", chinese: "哦", filename: "sound_o" },
      { symbol: "ə", chinese: "鹅", filename: "sound_e4" },
      { symbol: "ɪ", chinese: "医", filename: "sound_I" },
      { symbol: "ʊ", chinese: "乌", filename: "sound_u" },
      { symbol: "e", chinese: "唉", filename: "sound_e" },
      { symbol: "æ", chinese: "唉", filename: "sound_ae" }
    ],
    closingDiphthongs: [
      { symbol: "eɪ", chinese: "诶诶", filename: "sound_eɪ" },
      { symbol: "aɪ", chinese: "<u>爱</u>你", filename: "sound_aɪ" },
      { symbol: "ɔɪ", chinese: "哦已", filename: "sound_oɪ" },
      { symbol: "əʊ", chinese: "<u>欧</u>洲", filename: "sound_eu" },
      { symbol: "aʊ", chinese: "<u>澳</u>门", filename: "sound_au" }
    ],
    centeringDiphthongs: [
      { symbol: "ɪə", chinese: "亿耳", filename: "sound_Ir" },
      { symbol: "eə", chinese: "挨耳", filename: "sound_air" },
      { symbol: "ʊə", chinese: "悟耳", filename: "sound_ur" }
    ]
  },
  consonants: {
    plosives: {
      voiceless: [
        { symbol: "p", chinese: "山坡", filename: "sound_p" },
        { symbol: "t", chinese: "特别", filename: "sound_t" },
        { symbol: "k", chinese: "可以", filename: "sound_k" }
      ],
      voiced: [
        { symbol: "b", chinese: "波浪", filename: "sound_b" },
        { symbol: "d", chinese: "得到", filename: "sound_d" },
        { symbol: "g", chinese: "哥哥", filename: "sound_g" }
      ]
    },
    fricatives: {
      voiceless: [
        { symbol: "f", chinese: "扶持", filename: "sound_f" },
        { symbol: "s", chinese: "思考", filename: "sound_s" },
        { symbol: "ʃ", chinese: "<u>洗</u>澡", filename: "sound_xi" },
        { symbol: "θ", chinese: "思(咬舌)", filename: "sound_si" },
        { symbol: "h", chinese: "喝水", filename: "sound_h" }
      ],
      voiced: [
        { symbol: "v", chinese: "物", filename: "sound_v" },
        { symbol: "z", chinese: "资格", filename: "sound_z" },
        { symbol: "ʒ", chinese: "日", filename: "sound_n3" },
        { symbol: "ð", chinese: "滋(咬舌)", filename: "sound_the" },
        { symbol: "r", chinese: "惹", filename: "sound_r" }
      ]
    },
    affricates: {
      voiceless: [
        { symbol: "tʃ", chinese: "起床", filename: "sound_qi" },
        { symbol: "tr", chinese: "戳", filename: "sound_tr" },
        { symbol: "ts", chinese: "辞", filename: "sound_ts" }
      ],
      voiced: [
        { symbol: "dʒ", chinese: "挤兑", filename: "sound_d3" },
        { symbol: "dr", chinese: "啄木鸟", filename: "sound_dr" },
        { symbol: "dz", chinese: "子", filename: "sound_dz" }
      ]
    },
    nasals: [
      { symbol: "m", chinese: "木", filename: "sound_m" },
      { symbol: "n", chinese: "呢", filename: "sound_n" },
      { symbol: "ŋ", chinese: "eng", filename: "sound_ng" }
    ],
    lateral: [{ symbol: "l", chinese: "快乐", filename: "sound_l" }],
    approximants: [
      { symbol: "j", chinese: "嘻", filename: "sound_j" },
      { symbol: "w", chinese: "我", filename: "sound_w" }
    ]
  }
};
