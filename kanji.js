
const kanji = [
    {
    kanji: "吉",
    meaning: "good luck, happiness",
    onyomi: "キチ (kichi), キツ (kitsu)",
    kunyomi: "よし (yoshi)",
    examples: [
        {
            word: "吉日",
            reading: "きちじつ",
            meaning: "lucky day"
        },
        {
            word: "吉",
            reading: "よし",
            meaning: "good fortune, happiness"
        }
    ]
},

    {
        kanji: "一",
        meaning: "one",
        onyomi: "イチ",
        kunyomi: "ひと・つ",
        examples: [
            { word: "一つ", reading: "ひとつ", meaning: "one thing" },
            { word: "一日", reading: "いちにち", meaning: "one day" }
        ]
    },

    {
        kanji: "二",
        meaning: "two",
        onyomi: "ニ",
        kunyomi: "ふた・つ",
        examples: [
            { word: "二つ", reading: "ふたつ", meaning: "two things" },
            { word: "二人", reading: "ふたり", meaning: "two people" }
        ]
    },

    {
        kanji: "三",
        meaning: "three",
        onyomi: "サン",
        kunyomi: "みっ・つ",
        examples: [
            { word: "三つ", reading: "みっつ", meaning: "three things" },
            { word: "三人", reading: "さんにん", meaning: "three people" }
        ]
    },

    {
        kanji: "四",
        meaning: "four",
        onyomi: "シ",
        kunyomi: "よん・よ・つ",
        examples: [
            { word: "四つ", reading: "よっつ", meaning: "four things" },
            { word: "四月", reading: "しがつ", meaning: "April" }
        ]
    },

    {
        kanji: "五",
        meaning: "five",
        onyomi: "ゴ",
        kunyomi: "いつ・つ",
        examples: [
            { word: "五つ", reading: "いつつ", meaning: "five things" },
            { word: "五月", reading: "ごがつ", meaning: "May" }
        ]
    },

    {
        kanji: "六",
        meaning: "six",
        onyomi: "ロク",
        kunyomi: "むっ・つ",
        examples: [
            { word: "六つ", reading: "むっつ", meaning: "six things" },
            { word: "六月", reading: "ろくがつ", meaning: "June" }
        ]
    },

    {
        kanji: "七",
        meaning: "seven",
        onyomi: "シチ",
        kunyomi: "なな・ななつ",
        examples: [
            { word: "七つ", reading: "ななつ", meaning: "seven things" },
            { word: "七月", reading: "しちがつ", meaning: "July" }
        ]
    },

    {
        kanji: "八",
        meaning: "eight",
        onyomi: "ハチ",
        kunyomi: "や・つ",
        examples: [
            { word: "八つ", reading: "やっつ", meaning: "eight things" },
            { word: "八月", reading: "はちがつ", meaning: "August" }
        ]
    },

    {
        kanji: "九",
        meaning: "nine",
        onyomi: "キュウ・ク",
        kunyomi: "ここの・つ",
        examples: [
            { word: "九つ", reading: "ここのつ", meaning: "nine things" },
            { word: "九月", reading: "くがつ", meaning: "September" }
        ]
    },

    {
        kanji: "十",
        meaning: "ten",
        onyomi: "ジュウ",
        kunyomi: "とお",
        examples: [
            { word: "十", reading: "じゅう", meaning: "ten" },
            { word: "十月", reading: "じゅうがつ", meaning: "October" }
        ]
    },

    {
        kanji: "百",
        meaning: "hundred",
        onyomi: "ヒャク",
        kunyomi: "",
        examples: [
            { word: "百円", reading: "ひゃくえん", meaning: "100 yen" }
        ]
    },

    {
        kanji: "千",
        meaning: "thousand",
        onyomi: "セン",
        kunyomi: "ち",
        examples: [
            { word: "千円", reading: "せんえん", meaning: "1000 yen" }
        ]
    },

    {
        kanji: "万",
        meaning: "ten thousand",
        onyomi: "マン・バン",
        kunyomi: "",
        examples: [
            { word: "一万円", reading: "いちまんえん", meaning: "10,000 yen" }
        ]
    },

    {
        kanji: "円",
        meaning: "yen, circle",
        onyomi: "エン",
        kunyomi: "まる・い",
        examples: [
            { word: "百円", reading: "ひゃくえん", meaning: "100 yen" }
        ]
    },

    {
        kanji: "日",
        meaning: "day, sun",
        onyomi: "ニチ・ジツ",
        kunyomi: "ひ・か",
        examples: [
            { word: "日本", reading: "にほん", meaning: "Japan" },
            { word: "日曜日", reading: "にちようび", meaning: "Sunday" }
        ]
    },

    {
        kanji: "月",
        meaning: "month, moon",
        onyomi: "ゲツ・ガツ",
        kunyomi: "つき",
        examples: [
            { word: "月曜日", reading: "げつようび", meaning: "Monday" },
            { word: "一月", reading: "いちがつ", meaning: "January" }
        ]
    },

    {
        kanji: "火",
        meaning: "fire",
        onyomi: "カ",
        kunyomi: "ひ",
        examples: [
            { word: "火曜日", reading: "かようび", meaning: "Tuesday" },
            { word: "火", reading: "ひ", meaning: "fire" }
        ]
    },

    {
        kanji: "水",
        meaning: "water",
        onyomi: "スイ",
        kunyomi: "みず",
        examples: [
            { word: "水曜日", reading: "すいようび", meaning: "Wednesday" },
            { word: "水", reading: "みず", meaning: "water" }
        ]
    },

    {
        kanji: "木",
        meaning: "tree, wood",
        onyomi: "モク・ボク",
        kunyomi: "き・こ",
        examples: [
            { word: "木曜日", reading: "もくようび", meaning: "Thursday" },
            { word: "木", reading: "き", meaning: "tree" }
        ]
    },

    {
        kanji: "金",
        meaning: "gold, money",
        onyomi: "キン・コン",
        kunyomi: "かね",
        examples: [
            { word: "金曜日", reading: "きんようび", meaning: "Friday" },
            { word: "お金", reading: "おかね", meaning: "money" }
        ]
    },

    {
        kanji: "土",
        meaning: "earth, soil",
        onyomi: "ド・ト",
        kunyomi: "つち",
        examples: [
            { word: "土曜日", reading: "どようび", meaning: "Saturday" },
            { word: "土", reading: "つち", meaning: "soil" }
        ]
    },

    {
        kanji: "人",
        meaning: "person",
        onyomi: "ジン・ニン",
        kunyomi: "ひと",
        examples: [
            { word: "日本人", reading: "にほんじん", meaning: "Japanese person" },
            { word: "三人", reading: "さんにん", meaning: "three people" }
        ]
    },

    {
        kanji: "子",
        meaning: "child",
        onyomi: "シ",
        kunyomi: "こ",
        examples: [
            { word: "子供", reading: "こども", meaning: "child" }
        ]
    },

    {
        kanji: "女",
        meaning: "woman, female",
        onyomi: "ジョ",
        kunyomi: "おんな",
        examples: [
            { word: "女の人", reading: "おんなのひと", meaning: "woman" }
        ]
    },

    {
        kanji: "男",
        meaning: "man, male",
        onyomi: "ダン・ナン",
        kunyomi: "おとこ",
        examples: [
            { word: "男の人", reading: "おとこのひと", meaning: "man" }
        ]
    },

    {
        kanji: "父",
        meaning: "father",
        onyomi: "フ",
        kunyomi: "ちち",
        examples: [
            { word: "父", reading: "ちち", meaning: "father" }
        ]
    },

    {
        kanji: "母",
        meaning: "mother",
        onyomi: "ボ",
        kunyomi: "はは",
        examples: [
            { word: "母", reading: "はは", meaning: "mother" }
        ]
    },

    {
        kanji: "友",
        meaning: "friend",
        onyomi: "ユウ",
        kunyomi: "とも",
        examples: [
            { word: "友達", reading: "ともだち", meaning: "friend" }
        ]
    },

    {
        kanji: "先",
        meaning: "previous, ahead",
        onyomi: "セン",
        kunyomi: "さき",
        examples: [
            { word: "先生", reading: "せんせい", meaning: "teacher" }
        ]
    },

    {
        kanji: "生",
        meaning: "life, birth",
        onyomi: "セイ・ショウ",
        kunyomi: "い・う・なま",
        examples: [
            { word: "学生", reading: "がくせい", meaning: "student" }
        ]
    },

    {
        kanji: "学",
        meaning: "study, learning",
        onyomi: "ガク",
        kunyomi: "まな・ぶ",
        examples: [
            { word: "学生", reading: "がくせい", meaning: "student" }
        ]
    },

    {
        kanji: "校",
        meaning: "school",
        onyomi: "コウ",
        kunyomi: "",
        examples: [
            { word: "学校", reading: "がっこう", meaning: "school" }
        ]
    },

    {
        kanji: "年",
        meaning: "year",
        onyomi: "ネン",
        kunyomi: "とし",
        examples: [
            { word: "今年", reading: "ことし", meaning: "this year" }
        ]
    },

    {
        kanji: "時",
        meaning: "time, hour",
        onyomi: "ジ",
        kunyomi: "とき",
        examples: [
            { word: "時間", reading: "じかん", meaning: "time" }
        ]
    },

    {
        kanji: "間",
        meaning: "interval, between",
        onyomi: "カン・ケン",
        kunyomi: "あいだ・ま",
        examples: [
            { word: "時間", reading: "じかん", meaning: "time" }
        ]
    },

    {
        kanji: "今",
        meaning: "now",
        onyomi: "コン・キン",
        kunyomi: "いま",
        examples: [
            { word: "今", reading: "いま", meaning: "now" }
        ]
    },

    {
        kanji: "前",
        meaning: "before, front",
        onyomi: "ゼン",
        kunyomi: "まえ",
        examples: [
            { word: "名前", reading: "なまえ", meaning: "name" }
        ]
    },

    {
        kanji: "後",
        meaning: "after, behind",
        onyomi: "ゴ・コウ",
        kunyomi: "あと・うし・のち",
        examples: [
            { word: "午後", reading: "ごご", meaning: "afternoon" }
        ]
    },

    {
        kanji: "上",
        meaning: "up, above",
        onyomi: "ジョウ",
        kunyomi: "うえ・あ・のぼ",
        examples: [
            { word: "上", reading: "うえ", meaning: "above" }
        ]
    },

    {
        kanji: "下",
        meaning: "down, below",
        onyomi: "カ・ゲ",
        kunyomi: "した・しも・さ・くだ",
        examples: [
            { word: "下", reading: "した", meaning: "below" }
        ]
    },

    {
        kanji: "中",
        meaning: "middle, inside",
        onyomi: "チュウ",
        kunyomi: "なか",
        examples: [
            { word: "中", reading: "なか", meaning: "inside" }
        ]
    },

    {
        kanji: "外",
        meaning: "outside",
        onyomi: "ガイ・ゲ",
        kunyomi: "そと・ほか",
        examples: [
            { word: "外国", reading: "がいこく", meaning: "foreign country" }
        ]
    },

    {
        kanji: "右",
        meaning: "right",
        onyomi: "ウ・ユウ",
        kunyomi: "みぎ",
        examples: [
            { word: "右", reading: "みぎ", meaning: "right" }
        ]
    },

    {
        kanji: "左",
        meaning: "left",
        onyomi: "サ",
        kunyomi: "ひだり",
        examples: [
            { word: "左", reading: "ひだり", meaning: "left" }
        ]
    },

    {
        kanji: "東",
        meaning: "east",
        onyomi: "トウ",
        kunyomi: "ひがし",
        examples: [
            { word: "東京", reading: "とうきょう", meaning: "Tokyo" }
        ]
    },

    {
        kanji: "西",
        meaning: "west",
        onyomi: "セイ・サイ",
        kunyomi: "にし",
        examples: [
            { word: "西", reading: "にし", meaning: "west" }
        ]
    },

    {
        kanji: "南",
        meaning: "south",
        onyomi: "ナン",
        kunyomi: "みなみ",
        examples: [
            { word: "南", reading: "みなみ", meaning: "south" }
        ]
    },

    {
        kanji: "北",
        meaning: "north",
        onyomi: "ホク",
        kunyomi: "きた",
        examples: [
            { word: "北", reading: "きた", meaning: "north" }
        ]
    },

    {
        kanji: "国",
        meaning: "country",
        onyomi: "コク",
        kunyomi: "くに",
        examples: [
            { word: "日本国", reading: "にほんこく", meaning: "Japan" }
        ]
    },

    {
        kanji: "名",
        meaning: "name",
        onyomi: "メイ・ミョウ",
        kunyomi: "な",
        examples: [
            { word: "名前", reading: "なまえ", meaning: "name" }
        ]
    },

    {
        kanji: "本",
        meaning: "book, origin",
        onyomi: "ホン",
        kunyomi: "もと",
        examples: [
            { word: "本", reading: "ほん", meaning: "book" }
        ]
    },

    {
        kanji: "語",
        meaning: "language, word",
        onyomi: "ゴ",
        kunyomi: "かた・る",
        examples: [
            { word: "日本語", reading: "にほんご", meaning: "Japanese language" }
        ]
    },

    {
        kanji: "文",
        meaning: "sentence, writing",
        onyomi: "ブン・モン",
        kunyomi: "ふみ",
        examples: [
            { word: "作文", reading: "さくぶん", meaning: "composition" }
        ]
    },

    {
        kanji: "字",
        meaning: "character, letter",
        onyomi: "ジ",
        kunyomi: "あざ",
        examples: [
            { word: "漢字", reading: "かんじ", meaning: "kanji" }
        ]
    },

    {
        kanji: "何",
        meaning: "what",
        onyomi: "カ",
        kunyomi: "なに・なん",
        examples: [
            { word: "何", reading: "なに", meaning: "what" }
        ]
    },

    {
        kanji: "行",
        meaning: "go, conduct",
        onyomi: "コウ・ギョウ",
        kunyomi: "い・ゆ・おこな",
        examples: [
            { word: "行く", reading: "いく", meaning: "to go" }
        ]
    },

    {
        kanji: "来",
        meaning: "come",
        onyomi: "ライ",
        kunyomi: "く・き・こ",
        examples: [
            { word: "来る", reading: "くる", meaning: "to come" }
        ]
    },

    {
        kanji: "帰",
        meaning: "return",
        onyomi: "キ",
        kunyomi: "かえ・る",
        examples: [
            { word: "帰る", reading: "かえる", meaning: "to return" }
        ]
    },

    {
        kanji: "見",
        meaning: "see, look",
        onyomi: "ケン",
        kunyomi: "み・る",
        examples: [
            { word: "見る", reading: "みる", meaning: "to see" }
        ]
    },

    {
        kanji: "聞",
        meaning: "hear, ask",
        onyomi: "ブン・モン",
        kunyomi: "き・く",
        examples: [
            { word: "聞く", reading: "きく", meaning: "to listen" }
        ]
    },

    {
        kanji: "読",
        meaning: "read",
        onyomi: "ドク・トク",
        kunyomi: "よ・む",
        examples: [
            { word: "読む", reading: "よむ", meaning: "to read" }
        ]
    },

    {
        kanji: "書",
        meaning: "write",
        onyomi: "ショ",
        kunyomi: "か・く",
        examples: [
            { word: "書く", reading: "かく", meaning: "to write" }
        ]
    },

    {
        kanji: "話",
        meaning: "talk, story",
        onyomi: "ワ",
        kunyomi: "はな・す・はなし",
        examples: [
            { word: "話す", reading: "はなす", meaning: "to speak" }
        ]
    },

    {
        kanji: "食",
        meaning: "eat, food",
        onyomi: "ショク",
        kunyomi: "た・べる・く・う",
        examples: [
            { word: "食べる", reading: "たべる", meaning: "to eat" }
        ]
    },

    {
        kanji: "飲",
        meaning: "drink",
        onyomi: "イン",
        kunyomi: "の・む",
        examples: [
            { word: "飲む", reading: "のむ", meaning: "to drink" }
        ]
    },

    {
        kanji: "買",
        meaning: "buy",
        onyomi: "バイ",
        kunyomi: "か・う",
        examples: [
            { word: "買う", reading: "かう", meaning: "to buy" }
        ]
    },

    {
        kanji: "売",
        meaning: "sell",
        onyomi: "バイ",
        kunyomi: "う・る",
        examples: [
            { word: "売る", reading: "うる", meaning: "to sell" }
        ]
    },

    {
        kanji: "使",
        meaning: "use",
        onyomi: "シ",
        kunyomi: "つか・う",
        examples: [
            { word: "使う", reading: "つかう", meaning: "to use" }
        ]
    },

    {
        kanji: "作",
        meaning: "make",
        onyomi: "サク・サ",
        kunyomi: "つく・る",
        examples: [
            { word: "作る", reading: "つくる", meaning: "to make" }
        ]
    },

    {
        kanji: "休",
        meaning: "rest",
        onyomi: "キュウ",
        kunyomi: "やす・む",
        examples: [
            { word: "休む", reading: "やすむ", meaning: "to rest" }
        ]
    },

    {
        kanji: "立",
        meaning: "stand",
        onyomi: "リツ・リュウ",
        kunyomi: "た・つ",
        examples: [
            { word: "立つ", reading: "たつ", meaning: "to stand" }
        ]
    },

    {
        kanji: "住",
        meaning: "live, reside",
        onyomi: "ジュウ",
        kunyomi: "す・む",
        examples: [
            { word: "住む", reading: "すむ", meaning: "to live" }
        ]
    },

    {
        kanji: "入",
        meaning: "enter",
        onyomi: "ニュウ",
        kunyomi: "はい・る・い・れる",
        examples: [
            { word: "入る", reading: "はいる", meaning: "to enter" }
        ]
    },

    {
        kanji: "出",
        meaning: "exit, leave",
        onyomi: "シュツ",
        kunyomi: "で・る・だ・す",
        examples: [
            { word: "出る", reading: "でる", meaning: "to leave" }
        ]
    },

    {
        kanji: "電",
        meaning: "electricity",
        onyomi: "デン",
        kunyomi: "",
        examples: [
            { word: "電話", reading: "でんわ", meaning: "telephone" }
        ]
    },

    {
        kanji: "車",
        meaning: "car, vehicle",
        onyomi: "シャ",
        kunyomi: "くるま",
        examples: [
            { word: "電車", reading: "でんしゃ", meaning: "train" }
        ]
    },

    {
        kanji: "駅",
        meaning: "station",
        onyomi: "エキ",
        kunyomi: "",
        examples: [
            { word: "駅", reading: "えき", meaning: "station" }
        ]
    },

    {
        kanji: "道",
        meaning: "road, way",
        onyomi: "ドウ",
        kunyomi: "みち",
        examples: [
            { word: "道", reading: "みち", meaning: "road" }
        ]
    },

    {
        kanji: "店",
        meaning: "shop, store",
        onyomi: "テン",
        kunyomi: "みせ",
        examples: [
            { word: "店", reading: "みせ", meaning: "shop" }
        ]
    },

    {
        kanji: "家",
        meaning: "house, home",
        onyomi: "カ・ケ",
        kunyomi: "いえ・うち",
        examples: [
            { word: "家", reading: "いえ", meaning: "house" }
        ]
    },

    {
        kanji: "室",
        meaning: "room",
        onyomi: "シツ",
        kunyomi: "むろ",
        examples: [
            { word: "教室", reading: "きょうしつ", meaning: "classroom" }
        ]
    },

    {
        kanji: "国",
        meaning: "country",
        onyomi: "コク",
        kunyomi: "くに",
        examples: [
            { word: "国", reading: "くに", meaning: "country" }
        ]
    },

    {
        kanji: "山",
        meaning: "mountain",
        onyomi: "サン",
        kunyomi: "やま",
        examples: [
            { word: "山", reading: "やま", meaning: "mountain" }
        ]
    },

    {
        kanji: "川",
        meaning: "river",
        onyomi: "セン",
        kunyomi: "かわ",
        examples: [
            { word: "川", reading: "かわ", meaning: "river" }
        ]
    },

    {
        kanji: "田",
        meaning: "rice field",
        onyomi: "デン",
        kunyomi: "た",
        examples: [
            { word: "田んぼ", reading: "たんぼ", meaning: "rice field" }
        ]
    },

    {
        kanji: "天",
        meaning: "heaven, sky",
        onyomi: "テン",
        kunyomi: "あめ・あま",
        examples: [
            { word: "天気", reading: "てんき", meaning: "weather" }
        ]
    },

    {
        kanji: "気",
        meaning: "spirit, atmosphere",
        onyomi: "キ・ケ",
        kunyomi: "",
        examples: [
            { word: "天気", reading: "てんき", meaning: "weather" }
        ]
    },

    {
        kanji: "雨",
        meaning: "rain",
        onyomi: "ウ",
        kunyomi: "あめ・あま",
        examples: [
            { word: "雨", reading: "あめ", meaning: "rain" }
        ]
    },

    {
        kanji: "空",
        meaning: "sky, empty",
        onyomi: "クウ",
        kunyomi: "そら・あ・く",
        examples: [
            { word: "空", reading: "そら", meaning: "sky" }
        ]
    },

    {
        kanji: "白",
        meaning: "white",
        onyomi: "ハク・ビャク",
        kunyomi: "しろ・しら",
        examples: [
            { word: "白い", reading: "しろい", meaning: "white" }
        ]
    },

    {
        kanji: "赤",
        meaning: "red",
        onyomi: "セキ・シャク",
        kunyomi: "あか",
        examples: [
            { word: "赤い", reading: "あかい", meaning: "red" }
        ]
    },

    {
        kanji: "青",
        meaning: "blue",
        onyomi: "セイ・ショウ",
        kunyomi: "あお",
        examples: [
            { word: "青い", reading: "あおい", meaning: "blue" }
        ]
    },

    {
        kanji: "黒",
        meaning: "black",
        onyomi: "コク",
        kunyomi: "くろ",
        examples: [
            { word: "黒い", reading: "くろい", meaning: "black" }
        ]
    },

    {
        kanji: "大",
        meaning: "big",
        onyomi: "ダイ・タイ",
        kunyomi: "おお・きい",
        examples: [
            { word: "大きい", reading: "おおきい", meaning: "big" }
        ]
    },

    {
        kanji: "小",
        meaning: "small",
        onyomi: "ショウ",
        kunyomi: "ちい・さい・こ",
        examples: [
            { word: "小さい", reading: "ちいさい", meaning: "small" }
        ]
    },

    {
        kanji: "長",
        meaning: "long, leader",
        onyomi: "チョウ",
        kunyomi: "なが・い",
        examples: [
            { word: "長い", reading: "ながい", meaning: "long" }
        ]
    },

    {
        kanji: "高",
        meaning: "high, expensive",
        onyomi: "コウ",
        kunyomi: "たか・い",
        examples: [
            { word: "高い", reading: "たかい", meaning: "high; expensive" }
        ]
    },

    {
        kanji: "安",
        meaning: "cheap, safe",
        onyomi: "アン",
        kunyomi: "やす・い",
        examples: [
            { word: "安い", reading: "やすい", meaning: "cheap" }
        ]
    },

    {
        kanji: "新",
        meaning: "new",
        onyomi: "シン",
        kunyomi: "あたら・しい",
        examples: [
            { word: "新しい", reading: "あたらしい", meaning: "new" }
        ]
    },

    {
        kanji: "古",
        meaning: "old",
        onyomi: "コ",
        kunyomi: "ふる・い",
        examples: [
            { word: "古い", reading: "ふるい", meaning: "old" }
        ]
    },

    {
        kanji: "多",
        meaning: "many",
        onyomi: "タ",
        kunyomi: "おお・い",
        examples: [
            { word: "多い", reading: "おおい", meaning: "many" }
        ]
    },

    {
        kanji: "少",
        meaning: "few, little",
        onyomi: "ショウ",
        kunyomi: "すく・ない・すこ・し",
        examples: [
            { word: "少ない", reading: "すくない", meaning: "few" }
        ]
    },

    {
        kanji: "早",
        meaning: "early, fast",
        onyomi: "ソウ・サッ",
        kunyomi: "はや・い",
        examples: [
            { word: "早い", reading: "はやい", meaning: "early; fast" }
        ]
    },

    {
        kanji: "明",
        meaning: "bright, clear",
        onyomi: "メイ・ミョウ",
        kunyomi: "あか・るい",
        examples: [
            { word: "明るい", reading: "あかるい", meaning: "bright" }
        ]
    },

    {
        kanji: "楽",
        meaning: "fun, music",
        onyomi: "ガク・ラク",
        kunyomi: "たの・しい",
        examples: [
            { word: "楽しい", reading: "たのしい", meaning: "fun" }
        ]
    },

    {
        kanji: "好",
        meaning: "like, fond",
        onyomi: "コウ",
        kunyomi: "す・き",
        examples: [
            { word: "好き", reading: "すき", meaning: "like" }
        ]
    },

    {
        kanji: "思",
        meaning: "think",
        onyomi: "シ",
        kunyomi: "おも・う",
        examples: [
            { word: "思う", reading: "おもう", meaning: "to think" }
        ]
    },

    {
        kanji: "知",
        meaning: "know",
        onyomi: "チ",
        kunyomi: "し・る",
        examples: [
            { word: "知る", reading: "しる", meaning: "to know" }
        ]
    },

    {
        kanji: "言",
        meaning: "say, word",
        onyomi: "ゲン・ゴン",
        kunyomi: "い・う・こと",
        examples: [
            { word: "言う", reading: "いう", meaning: "to say" }
        ]
    },

    {
        kanji: "話",
        meaning: "talk",
        onyomi: "ワ",
        kunyomi: "はな・す",
        examples: [
            { word: "電話", reading: "でんわ", meaning: "telephone" }
        ]
    },

    {
        kanji: "読",
        meaning: "read",
        onyomi: "ドク",
        kunyomi: "よ・む",
        examples: [
            { word: "読書", reading: "どくしょ", meaning: "reading" }
        ]
    },

    {
        kanji: "書",
        meaning: "write",
        onyomi: "ショ",
        kunyomi: "か・く",
        examples: [
            { word: "書く", reading: "かく", meaning: "to write" }
        ]
    },

    {
        kanji: "教",
        meaning: "teach",
        onyomi: "キョウ",
        kunyomi: "おし・える",
        examples: [
            { word: "教える", reading: "おしえる", meaning: "to teach" }
        ]
    },

    {
        kanji: "知",
        meaning: "know",
        onyomi: "チ",
        kunyomi: "し・る",
        examples: [
            { word: "知る", reading: "しる", meaning: "to know" }
        ]
    },

    {
        kanji: "間",
        meaning: "between, interval",
        onyomi: "カン",
        kunyomi: "あいだ・ま",
        examples: [
            { word: "間", reading: "あいだ", meaning: "between" }
        ]
    },

    {
        kanji: "体",
        meaning: "body",
        onyomi: "タイ・テイ",
        kunyomi: "からだ",
        examples: [
            { word: "体", reading: "からだ", meaning: "body" }
        ]
    },

    {
        kanji: "手",
        meaning: "hand",
        onyomi: "シュ",
        kunyomi: "て",
        examples: [
            { word: "手", reading: "て", meaning: "hand" }
        ]
    },

    {
        kanji: "足",
        meaning: "foot, leg",
        onyomi: "ソク",
        kunyomi: "あし・た・りる",
        examples: [
            { word: "足", reading: "あし", meaning: "foot; leg" }
        ]
    },

    {
        kanji: "目",
        meaning: "eye",
        onyomi: "モク・ボク",
        kunyomi: "め",
        examples: [
            { word: "目", reading: "め", meaning: "eye" }
        ]
    },

    {
        kanji: "耳",
        meaning: "ear",
        onyomi: "ジ",
        kunyomi: "みみ",
        examples: [
            { word: "耳", reading: "みみ", meaning: "ear" }
        ]
    },

    {
        kanji: "口",
        meaning: "mouth",
        onyomi: "コウ・ク",
        kunyomi: "くち",
        examples: [
            { word: "口", reading: "くち", meaning: "mouth" }
        ]
    },

    {
        kanji: "頭",
        meaning: "head",
        onyomi: "トウ・ズ",
        kunyomi: "あたま",
        examples: [
            { word: "頭", reading: "あたま", meaning: "head" }
        ]
    },

    {
        kanji: "顔",
        meaning: "face",
        onyomi: "ガン",
        kunyomi: "かお",
        examples: [
            { word: "顔", reading: "かお", meaning: "face" }
        ]
    },

    {
        kanji: "心",
        meaning: "heart, mind",
        onyomi: "シン",
        kunyomi: "こころ",
        examples: [
            { word: "心", reading: "こころ", meaning: "heart; mind" }
        ]
    },

    {
        kanji: "力",
        meaning: "power, strength",
        onyomi: "リョク・リキ",
        kunyomi: "ちから",
        examples: [
            { word: "力", reading: "ちから", meaning: "strength" }
        ]
    },

    {
        kanji: "車",
        meaning: "car",
        onyomi: "シャ",
        kunyomi: "くるま",
        examples: [
            { word: "車", reading: "くるま", meaning: "car" }
        ]
    },

    {
        kanji: "門",
        meaning: "gate",
        onyomi: "モン",
        kunyomi: "かど",
        examples: [
            { word: "門", reading: "もん", meaning: "gate" }
        ]
    },

    {
        kanji: "間",
        meaning: "interval",
        onyomi: "カン",
        kunyomi: "あいだ・ま",
        examples: [
            { word: "時間", reading: "じかん", meaning: "time" }
        ]
    },

    {
        kanji: "東",
        meaning: "east",
        onyomi: "トウ",
        kunyomi: "ひがし",
        examples: [
            { word: "東", reading: "ひがし", meaning: "east" }
        ]
    },

    {
        kanji: "西",
        meaning: "west",
        onyomi: "セイ・サイ",
        kunyomi: "にし",
        examples: [
            { word: "西", reading: "にし", meaning: "west" }
        ]
    },

    {
        kanji: "南",
        meaning: "south",
        onyomi: "ナン",
        kunyomi: "みなみ",
        examples: [
            { word: "南", reading: "みなみ", meaning: "south" }
        ]
    },

    {
        kanji: "北",
        meaning: "north",
        onyomi: "ホク",
        kunyomi: "きた",
        examples: [
            { word: "北", reading: "きた", meaning: "north" }
        ]
    },

    {
        kanji: "春",
        meaning: "spring",
        onyomi: "シュン",
        kunyomi: "はる",
        examples: [
            { word: "春", reading: "はる", meaning: "spring" }
        ]
    },

    {
        kanji: "夏",
        meaning: "summer",
        onyomi: "カ",
        kunyomi: "なつ",
        examples: [
            { word: "夏", reading: "なつ", meaning: "summer" }
        ]
    },

    {
        kanji: "秋",
        meaning: "autumn",
        onyomi: "シュウ",
        kunyomi: "あき",
        examples: [
            { word: "秋", reading: "あき", meaning: "autumn" }
        ]
    },

    {
        kanji: "冬",
        meaning: "winter",
        onyomi: "トウ",
        kunyomi: "ふゆ",
        examples: [
            { word: "冬", reading: "ふゆ", meaning: "winter" }
        ]
    },

    {
        kanji: "朝",
        meaning: "morning",
        onyomi: "チョウ",
        kunyomi: "あさ",
        examples: [
            { word: "朝", reading: "あさ", meaning: "morning" }
        ]
    },

    {
        kanji: "昼",
        meaning: "daytime, noon",
        onyomi: "チュウ",
        kunyomi: "ひる",
        examples: [
            { word: "昼", reading: "ひる", meaning: "noon" }
        ]
    },

    {
        kanji: "夜",
        meaning: "night",
        onyomi: "ヤ",
        kunyomi: "よる・よ",
        examples: [
            { word: "夜", reading: "よる", meaning: "night" }
        ]
    },

    {
        kanji: "午",
        meaning: "noon",
        onyomi: "ゴ",
        kunyomi: "",
        examples: [
            { word: "午後", reading: "ごご", meaning: "afternoon" }
        ]
    },

    {
        kanji: "魚",
        meaning: "fish",
        onyomi: "ギョ",
        kunyomi: "さかな・うお",
        examples: [
            { word: "魚", reading: "さかな", meaning: "fish" }
        ]
    },

    {
        kanji: "肉",
        meaning: "meat",
        onyomi: "ニク",
        kunyomi: "",
        examples: [
            { word: "肉", reading: "にく", meaning: "meat" }
        ]
    },

    {
        kanji: "米",
        meaning: "rice",
        onyomi: "ベイ・マイ",
        kunyomi: "こめ",
        examples: [
            { word: "米", reading: "こめ", meaning: "rice" }
        ]
    },

    {
        kanji: "茶",
        meaning: "tea",
        onyomi: "チャ・サ",
        kunyomi: "",
        examples: [
            { word: "お茶", reading: "おちゃ", meaning: "tea" }
        ]
    },

    {
        kanji: "花",
        meaning: "flower",
        onyomi: "カ",
        kunyomi: "はな",
        examples: [
            { word: "花", reading: "はな", meaning: "flower" }
        ]
    },

    {
        kanji: "犬",
        meaning: "dog",
        onyomi: "ケン",
        kunyomi: "いぬ",
        examples: [
            { word: "犬", reading: "いぬ", meaning: "dog" }
        ]
    },

    {
        kanji: "猫",
        meaning: "cat",
        onyomi: "ビョウ",
        kunyomi: "ねこ",
        examples: [
            { word: "猫", reading: "ねこ", meaning: "cat" }
        ]
    },

    {
        kanji: "鳥",
        meaning: "bird",
        onyomi: "チョウ",
        kunyomi: "とり",
        examples: [
            { word: "鳥", reading: "とり", meaning: "bird" }
        ]
    },

    {
        kanji: "雨",
        meaning: "rain",
        onyomi: "ウ",
        kunyomi: "あめ",
        examples: [
            { word: "雨", reading: "あめ", meaning: "rain" }
        ]
    },

    {
        kanji: "音",
        meaning: "sound",
        onyomi: "オン・イン",
        kunyomi: "おと・ね",
        examples: [
            { word: "音", reading: "おと", meaning: "sound" }
        ]
    },

    {
        kanji: "色",
        meaning: "color",
        onyomi: "ショク・シキ",
        kunyomi: "いろ",
        examples: [
            { word: "色", reading: "いろ", meaning: "color" }
        ]
    },

    {
        kanji: "赤",
        meaning: "red",
        onyomi: "セキ",
        kunyomi: "あか",
        examples: [
            { word: "赤い", reading: "あかい", meaning: "red" }
        ]
    },

    {
        kanji: "青",
        meaning: "blue",
        onyomi: "セイ",
        kunyomi: "あお",
        examples: [
            { word: "青い", reading: "あおい", meaning: "blue" }
        ]
    },

    {
        kanji: "黒",
        meaning: "black",
        onyomi: "コク",
        kunyomi: "くろ",
        examples: [
            { word: "黒い", reading: "くろい", meaning: "black" }
        ]
    },

    {
        kanji: "赤",
        meaning: "red",
        onyomi: "セキ",
        kunyomi: "あか",
        examples: [
            { word: "赤い", reading: "あかい", meaning: "red" }
        ]
    },

    {
        kanji: "青",
        meaning: "blue",
        onyomi: "セイ",
        kunyomi: "あお",
        examples: [
            { word: "青い", reading: "あおい", meaning: "blue" }
        ]
    },

    {
        kanji: "黒",
        meaning: "black",
        onyomi: "コク",
        kunyomi: "くろ",
        examples: [
            { word: "黒い", reading: "くろい", meaning: "black" }
        ]
    }

];

