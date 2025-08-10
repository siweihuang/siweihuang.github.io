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
        chinese: "<u>医</u>生 <u>衣</u>服",
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
        chinese: "<u>阿</u>华田",
        english: "<u>u</u>p /<u>ʌ</u>p/<br>c<u>u</u>p /k<u>ʌ</u>p/",
        filename: "sound_a"
      },
      {
        symbol: "ɒ",
        chinese: "<u>窝窝</u>头",
        english: "d<u>o</u>g /d<u>ɒ</u>g/<br>h<u>o</u>t /h<u>ɒ</u>t/",
        filename: "sound_o"
      },
      {
        symbol: "ə",
        chinese: "<u>额</u>头",
        english: "<u>a</u>go /<u>ə</u>ˈɡəʊ/<br><u>a</u>gree /<u>ə</u>ˈɡriː/ ",
        filename: "sound_e4"
      },
      {
        symbol: "ɪ",
        chinese: "唯<u>一</u>",
        english: "b<u>i</u>g /b<u>ɪ</u>ɡ/<br>c<u>i</u>ty /ˈs<u>ɪ</u>t<u>i</u>/",
        filename: "sound_I"
      },
      {
        symbol: "ʊ",
        chinese: "<u>屋</u>顶",
        english: "p<u>u</u>t /p<u>ʊ</u>t/<br>w<u>oo</u>d /w<u>ʊ</u>d/",
        filename: "sound_u"
      },
      {
        symbol: "e",
        chinese: "<u>诶</u>",
        english: "<u>e</u>gg /<u>e</u>ɡ/<br><u>e</u>nemy /ˈ<u>e</u>nəmi/",
        filename: "sound_e"
      },
      {
        symbol: "æ",
        chinese: "<u>哎</u>",
        english: "c<u>a</u>t /k<u>æ</u>t/<br><u>a</u>pple /<u>ˈæ</u>pəl/",
        filename: "sound_ae"
      }
    ],
    closingDiphthongs: [
      {
        symbol: "aɪ",
        chinese: "<u>爱 卖 凯</u>",
        english:
          "<u>i</u>ce /<u>aɪ</u>s/<br>m<u>y</u> /m<u>aɪ</u>/<br>k<u>i</u>te /k<u>aɪ</u>t/",
        filename: "sound_aɪ"
      },
      {
        symbol: "eɪ",
        chinese: "<u>诶 累 妹</u>",
        english:
          "<u>ei</u>ght /<u>eɪ</u>t/<br>l<u>a</u>te /l<u>eɪ</u>t/<br>m<u>a</u>te /m<u>eɪ</u>t/",
        filename: "sound_eɪ"
      },
      {
        symbol: "ɔɪ",
        chinese: "<u>喔依</u>",
        english:
          "t<u>oy</u> /t<u>ɔɪ</u>/<br>b<u>oy</u> /b<u>ɔɪ</u>/<br>v<u>oi</u>ce /v<u>ɔɪ</u>s/",
        filename: "sound_oɪ"
      },
      {
        symbol: "aʊ",
        chinese: "<u>澳 绕 消 耗</u>",
        english:
          "<u>ou</u>t /<u>aʊ</u>t/<br>sh<u>ou</u>t /ʃ<u>aʊ</u>t/<br>h<u>ou</u>se /h<u>aʊ</u>s/",
        filename: "sound_au"
      },
      {
        symbol: "əʊ",
        chinese: "<u>欧</u>洲",
        english:
          "<u>o</u>ld  /<u>əʊ</u>ld/<br><u>o</u>pen /ˈ<u>əʊ</u>pən/<br>c<u>oa</u>t /k<u>əʊ</u>t/",
        filename: "sound_eu"
      }
    ],
    centeringDiphthongs: [
      {
        symbol: "ɪə",
        chinese: "<u>亿耳</u>",
        english: "<u>ear</u> /<u>ɪə</u>/<br>n<u>ear</u> /n<u>ɪə</u>/",
        filename: "sound_Ir"
      },
      {
        symbol: "eə",
        chinese: "<u>挨耳</u>",
        english: "<u>air</u> /<u>eə</u>/<br>h<u>air</u> /h<u>eə</u>/",
        filename: "sound_air"
      },
      {
        symbol: "ʊə",
        chinese: "<u>悟耳</u>",
        english: "s<u>ure</u> /ʃ<u>ʊə</u>/<br>t<u>our</u> /t<u>ʊə</u>/",
        filename: "sound_ur"
      }
    ]
  },
  consonants: {
    plosives: {
      voiceless: [
        {
          symbol: "p",
          chinese: "山<u>坡</u>",
          english:
            "<u>p</u>ork /<u>p</u>ɔːk/ <br><u>p</u>a<u>p</u>er /ˈ<u>p</u>eɪ<u>p</u>ə/",
          filename: "sound_p"
        },
        {
          symbol: "t",
          chinese: "<u>特</u>别",
          english: "<u>t</u>en /<u>t</u>en/ <br><u>t</u>able /ˈ<u>t</u>eɪbl/",
          filename: "sound_t"
        },
        {
          symbol: "k",
          chinese: "口<u>渴</u> <u>可</u>以",
          english:
            "<u>c</u>a<u>k</u>e /<u>k</u>eɪ<u>k</u>/<br><u>k</u>ite /<u>k</u>aɪt/",
          filename: "sound_k"
        }
      ],
      voiced: [
        {
          symbol: "b",
          chinese: "<u>波</u>浪",
          english: "<u>b</u>ig /<u>b</u>ɪɡ/<br><u>b</u>oss /<u>b</u>ɒs/",
          filename: "sound_b"
        },
        {
          symbol: "d",
          chinese: "<u>得</u>到 <u>得</u>分",
          english:
            "<u>d</u>ea<u>d</u> /<u>d</u>e<u>d</u>/<br><u>d</u>esk /<u>d</u>esk/",
          filename: "sound_d"
        },
        {
          symbol: "g",
          chinese: "<u>哥哥</u>",
          english: "<u>g</u>et /<u>g</u>et/<br><u>g</u>uess /<u>g</u>es/",
          filename: "sound_g"
        }
      ]
    },
    fricatives: {
      voiceless: [
        {
          symbol: "f",
          chinese: "<u>辅</u>导 <u>富</u>有",
          english:
            "<u>f</u>ood /<u>f</u>uːd/<br><u>f</u>oolish /ˈ<u>f</u>uːlɪʃ/",
          filename: "sound_f"
        },
        {
          symbol: "s",
          chinese: "<u>思</u>考",
          english: "<u>s</u>it /<u>s</u>ɪt/<br><u>s</u>eason /ˈ<u>s</u>iːzn/",
          filename: "sound_s"
        },
        {
          symbol: "ʃ",
          chinese: "<u>西</u>瓜 <u>嘻</u>哈",
          english: "<u>sh</u>e /<u>ʃ</u>iː/<br><u>sh</u>ort /ˈ<u>ʃ</u>ɔːt/",
          filename: "sound_xi"
        },
        {
          symbol: "θ",
          chinese: "<u>撕</u>(咬舌)",
          english: "<u>th</u>ink /<u>θ</u>ɪŋk/<br><u>th</u>ree /<u>θ</u>riː/",
          filename: "sound_si"
        },
        {
          symbol: "h",
          chinese: "<u>喝</u>水",
          english: "<u>h</u>ello /<u>h</u>əˈləʊ/<br><u>h</u>ope /<u>h</u>əʊp/",
          filename: "sound_h"
        }
      ],
      voiced: [
        {
          symbol: "v",
          chinese: "<u>维</u>瑞",
          english:
            "<u>v</u>isit /ˈ<u>v</u>ɪzɪt/<br><u>v</u>alue /ˈ<u>v</u>æljuː/",
          filename: "sound_v"
        },
        {
          symbol: "z",
          chinese: "小<u>组</u>",
          english: "<u>z</u>oo /<u>z</u>uː/<br><u>z</u>ebra /ˈ<u>z</u>iːbrə/",
          filename: "sound_z"
        },
        {
          symbol: "ʒ",
          chinese: "<u>热若</u> <u>日额</u>",
          english: "mea<u>s</u>ure <br>/ˈme<u>ʒ</u>ər/",
          filename: "sound_n3"
        },
        {
          symbol: "ð",
          chinese: "<u>滋</u>(咬舌)",
          english: "wea<u>th</u>er <br>/ˈwe<u>ð</u>ər/",
          filename: "sound_the"
        },
        {
          symbol: "r",
          chinese: "<u>惹</u>祸",
          english: "<u>r</u>ed /<u>r</u>ed/<br><u>r</u>abbit /ˈ<u>r</u>æbɪt/",
          filename: "sound_r"
        }
      ]
    },
    affricates: {
      voiceless: [
        {
          symbol: "tʃ",
          chinese: "<u>起</u> 请 奇",
          english:
            "<u>ch</u>eap /<u>tʃ</u>iːp/<br><u>ch</u>ild /<u>tʃ</u>aɪld/",
          filename: "sound_qi"
        },
        {
          symbol: "tr",
          chinese: "邮<u>戳</u>",
          english: "<u>tr</u>y /<u>tr</u>aɪ/<br><u>tr</u>uck /<u>tr</u>ʌk/",
          filename: "sound_tr"
        },
        {
          symbol: "ts",
          chinese: "<u>次 此</u>",
          english:
            "no<u>tes</u> /nəʊ<u>ts</u>/<br>frui<u>ts</u> /fruː<u>ts</u>/",
          filename: "sound_ts"
        }
      ],
      voiced: [
        {
          symbol: "dʒ",
          chinese: "<u>吉</u> 拥<u>挤</u>",
          english:
            "<u>j</u>uice /<u>dʒ</u>uːs/<br>bri<u>dge</u> /brɪ<u>dʒ</u>/",
          filename: "sound_d3"
        },
        {
          symbol: "dr",
          chinese: "<u>啄</u>木鸟",
          english: "<u>dr</u>y /<u>dr</u>aɪ/<br><u>dr</u>ess /<u>dr</u>es/",
          filename: "sound_dr"
        },
        {
          symbol: "dz",
          chinese: "<u>子 资</u>",
          english:
            "ki<u>ds</u> /kɪ<u>dz</u>/<br>frien<u>ds</u> /fren<u>dz</u>/",
          filename: "sound_dz"
        }
      ]
    },
    nasals: [
      {
        symbol: "m",
        chinese: "<u>米 木 妈</u>",
        english:
          "<u>m</u>ilk /ˈ<u>m</u>ɪlk/<br><u>m</u>ove /<u>m</u>uːv/<br><u>m</u>other /ˈ<u>m</u>ʌðər/",
        filename: "sound_m"
      },
      {
        symbol: "n",
        chinese: "<u>那 呢</u>",
        english:
          "<u>n</u>ight /<u>n</u>aɪt/<br><u>n</u>ice /<u>n</u>aɪs/<br><u>n</u>eed /<u>n</u>iːd/",
        filename: "sound_n"
      },
      {
        symbol: "ŋ",
        chinese: "<u>嗯葛</u> eng",
        english:
          "ri<u>ng</u> /rɪ<u>ŋ</u>/<br>bri<u>ng</u> /brɪ<u>ŋ</u>/<br>runni<u>ng</u> /ˈrʌnɪ<u>ŋ</u>/",
        filename: "sound_ng"
      }
    ],
    lateral: [
      {
        symbol: "l",
        chinese: "<u>拉</u> 快<u>乐</u>",
        english: "<u>l</u>ove /<u>l</u>ʌv/<br><u>l</u>ife /<u>l</u>aɪf/",
        filename: "sound_l"
      }
    ],
    approximants: [
      {
        symbol: "j",
        chinese: "<u>衣 / 耶</u>",
        english: "<u>y</u>ear /<u>j</u>ɪr/<br><u>y</u>ellow /ˈ<u>j</u>eləʊ/",
        filename: "sound_j"
      },
      {
        symbol: "w",
        chinese: "<u>我 窝</u>",
        english: "<u>w</u>hite /<u>w</u>aɪt/<br><u>w</u>ater /ˈ<u>w</u>ɔːtər/",
        filename: "sound_w"
      }
    ]
  }
};
