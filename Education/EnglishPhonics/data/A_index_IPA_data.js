var mainData = {
  vowels: {
    monophthongs: {
      front: [
        { symbol: "iː", filename: "sound_i2" },
        { symbol: "ɪ", filename: "sound_I" },
        { symbol: "e", filename: "sound_e" },
        { symbol: "æ", filename: "sound_ae" }
      ],
      central: [
        { symbol: "ʌ", filename: "sound_a" },
        { symbol: "ɜː", filename: "sound_er" },
        { symbol: "ə", filename: "sound_e4" }
      ],
      back: [
        { symbol: "ɑː", filename: "sound_a2" },
        { symbol: "ɔː", filename: "sound_o2" },
        { symbol: "ɒ", filename: "sound_o" },
        { symbol: "uː", filename: "sound_u2" },
        { symbol: "ʊ", filename: "sound_u" }
      ]
    },
    diphthongs: {
      closing: [
        { symbol: "eɪ", filename: "sound_eɪ" },
        { symbol: "aɪ", filename: "sound_aɪ" },
        { symbol: "ɔɪ", filename: "sound_oɪ" },
        { symbol: "aʊ", filename: "sound_au" },
        { symbol: "əʊ", filename: "sound_eu" }
      ],
      centering: [
        { symbol: "ɪə", filename: "sound_Ir" },
        { symbol: "eə", filename: "sound_air" },
        { symbol: "ʊə", filename: "sound_ur" }
      ]
    }
  },
  consonants: {
    plosives: {
      voiceless: [
        { symbol: "p", filename: "sound_p" },
        { symbol: "t", filename: "sound_t" },
        { symbol: "k", filename: "sound_k" }
      ],
      voiced: [
        { symbol: "b", filename: "sound_b" },
        { symbol: "d", filename: "sound_d" },
        { symbol: "g", filename: "sound_g" }
      ]
    },
    fricatives: {
      voiceless: [
        { symbol: "f", filename: "sound_f" },
        { symbol: "s", filename: "sound_s" },
        { symbol: "ʃ", filename: "sound_xi" },
        { symbol: "θ", filename: "sound_si" },
        { symbol: "h", filename: "sound_h" }
      ],
      voiced: [
        { symbol: "v", filename: "sound_v" },
        { symbol: "z", filename: "sound_z" },
        { symbol: "ʒ", filename: "sound_n3" },
        { symbol: "ð", filename: "sound_the" },
        { symbol: "r", filename: "sound_r" }
      ]
    },
    affricates: {
      voiceless: [
        { symbol: "tʃ", filename: "sound_qi" },
        { symbol: "tr", filename: "sound_tr" },
        { symbol: "ts", filename: "sound_ts" }
      ],
      voiced: [
        { symbol: "dʒ", filename: "sound_d3" },
        { symbol: "dr", filename: "sound_dr" },
        { symbol: "dz", filename: "sound_dz" }
      ]
    },
    nasals: [
      { symbol: "m", filename: "sound_m" },
      { symbol: "n", filename: "sound_n" },
      { symbol: "ŋ", filename: "sound_ng" }
    ],
    lateral: [{ symbol: "l", filename: "sound_l" }],
    approximants: [
      { symbol: "j", filename: "sound_j" },
      { symbol: "w", filename: "sound_w" }
    ]
  }
};
