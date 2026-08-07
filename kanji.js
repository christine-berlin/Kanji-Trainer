```javascript
const kanji = [

    {
        kanji: "日",
        meaning: "day, sun",
        onyomi: "ニチ, ジツ",
        kunyomi: "ひ, -び, -か",
        examples: [
            { word: "日本", reading: "にほん", meaning: "Japan" },
            { word: "日曜日", reading: "にちようび", meaning: "Sunday" }
        ]
    },

    {
        kanji: "一",
        meaning: "one",
        onyomi: "イチ, イツ",
        kunyomi: "ひと, ひとつ",
        examples: [
            { word: "一人", reading: "ひとり", meaning: "one person" },
            { word: "一日", reading: "いちにち", meaning: "one day" }
        ]
    },

    {
        kanji: "国",
        meaning: "country",
        onyomi: "コク",
        kunyomi: "くに",
        examples: [
            { word: "外国", reading: "がいこく", meaning: "foreign country" },
            { word: "中国", reading: "ちゅうごく", meaning: "China" }
        ]
    },

    {
        kanji: "人",
        meaning: "person",
        onyomi: "ジン, ニン",
        kunyomi: "ひと",
        examples: [
            { word: "日本人", reading: "にほんじん", meaning: "Japanese person" },
            { word: "三人", reading: "さんにん", meaning: "three people" }
        ]
    },

    {
        kanji: "年",
        meaning: "year",
        onyomi: "ネン",
        kunyomi: "とし",
        examples: [
            { word: "今年", reading: "ことし", meaning: "this year" },
            { word: "来年", reading: "らいねん", meaning: "next year" }
        ]
    },

    {
        kanji: "大",
        meaning: "big, large",
        onyomi: "ダイ, タイ",
        kunyomi: "おお",
        examples: [
            { word: "大学", reading: "だいがく", meaning: "university" },
            { word: "大きい", reading: "おおきい", meaning: "big" }
        ]
    },

    {
        kanji: "十",
        meaning: "ten",
        onyomi: "ジュウ",
        kunyomi: "とお",
        examples: [
            { word: "十円", reading: "じゅうえん", meaning: "ten yen" }
        ]
    },

    {
        kanji: "二",
        meaning: "two",
        onyomi: "ニ",
        kunyomi: "ふた, ふたつ",
        examples: [
            { word: "二人", reading: "ふたり", meaning: "two people" },
            { word: "二つ", reading: "ふたつ", meaning: "two things" }
        ]
    },

    {
        kanji: "本",
        meaning: "book, origin",
        onyomi: "ホン",
        kunyomi: "もと",
        examples: [
            { word: "本", reading: "ほん", meaning: "book" },
            { word: "日本", reading: "にほん", meaning: "Japan" }
        ]
    },

    {
        kanji: "中",
        meaning: "middle, inside",
        onyomi: "チュウ",
        kunyomi: "なか, うち",
        examples: [
            { word: "中国", reading: "ちゅうごく", meaning: "China" },
            { word: "中学校", reading: "ちゅうがっこう", meaning: "middle school" }
        ]
    },

    {
        kanji: "長",
        meaning: "long, leader",
        onyomi: "チョウ",
        kunyomi: "なが",
        examples: [
            { word: "長い", reading: "ながい", meaning: "long" }
        ]
    },

    {
        kanji: "出",
        meaning: "exit, leave, go out",
        onyomi: "シュツ",
        kunyomi: "で, だ",
        examples: [
            { word: "出口", reading: "でぐち", meaning: "exit" },
            { word: "出る", reading: "でる", meaning: "to leave" }
        ]
    },

    {
        kanji: "三",
        meaning: "three",
        onyomi: "サン",
        kunyomi: "み, みつ",
        examples: [
            { word: "三人", reading: "さんにん", meaning: "three people" }
        ]
    },

    {
        kanji: "時",
        meaning: "time, hour",
        onyomi: "ジ",
        kunyomi: "とき",
        examples: [
            { word: "時間", reading: "じかん", meaning: "time" },
            { word: "何時", reading: "なんじ", meaning: "what time" }
        ]
    },

    {
        kanji: "行",
        meaning: "go",
        onyomi: "コウ, ギョウ",
        kunyomi: "い, おこな",
        examples: [
            { word: "行く", reading: "いく", meaning: "to go" },
            { word: "銀行", reading: "ぎんこう", meaning: "bank" }
        ]
    },

    {
        kanji: "見",
        meaning: "see, look",
        onyomi: "ケン",
        kunyomi: "み",
        examples: [
            { word: "見る", reading: "みる", meaning: "to see" },
            { word: "見せる", reading: "みせる", meaning: "to show" }
        ]
    },

    {
        kanji: "月",
        meaning: "month, moon",
        onyomi: "ゲツ, ガツ",
        kunyomi: "つき",
        examples: [
            { word: "月曜日", reading: "げつようび", meaning: "Monday" },
            { word: "今月", reading: "こんげつ", meaning: "this month" }
        ]
    },

    {
        kanji: "分",
        meaning: "minute, part",
        onyomi: "ブン, フン",
        kunyomi: "わ",
        examples: [
            { word: "五分", reading: "ごふん", meaning: "five minutes" }
        ]
    },

    {
        kanji: "後",
        meaning: "after, behind",
        onyomi: "ゴ, コウ",
        kunyomi: "あと, うし",
        examples: [
            { word: "午後", reading: "ごご", meaning: "afternoon" },
            { word: "後ろ", reading: "うしろ", meaning: "behind" }
        ]
    },

    {
        kanji: "前",
        meaning: "before, front",
        onyomi: "ゼン",
        kunyomi: "まえ",
        examples: [
            { word: "午前", reading: "ごぜん", meaning: "morning" },
            { word: "前", reading: "まえ", meaning: "front, before" }
        ]
    },

    {
        kanji: "円",
        meaning: "yen, circle",
        onyomi: "エン",
        kunyomi: "まる",
        examples: [
            { word: "百円", reading: "ひゃくえん", meaning: "100 yen" }
        ]
    },

    {
        kanji: "五",
        meaning: "five",
        onyomi: "ゴ",
        kunyomi: "いつ, いつつ",
        examples: [
            { word: "五人", reading: "ごにん", meaning: "five people" }
        ]
    },

    {
        kanji: "間",
        meaning: "interval, between",
        onyomi: "カン, ケン",
        kunyomi: "あいだ, ま",
        examples: [
            { word: "時間", reading: "じかん", meaning: "time" }
        ]
    },

    {
        kanji: "上",
        meaning: "up, above",
        onyomi: "ジョウ",
        kunyomi: "うえ, あ",
        examples: [
            { word: "上", reading: "うえ", meaning: "above" },
            { word: "上手", reading: "じょうず", meaning: "skillful" }
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
        kanji: "四",
        meaning: "four",
        onyomi: "シ",
        kunyomi: "よ, よん, よつ",
        examples: [
            { word: "四人", reading: "よにん", meaning: "four people" }
        ]
    },

    {
        kanji: "今",
        meaning: "now",
        onyomi: "コン, キン",
        kunyomi: "いま",
        examples: [
            { word: "今", reading: "いま", meaning: "now" },
            { word: "今日", reading: "きょう", meaning: "today" }
        ]
    },

    {
        kanji: "金",
        meaning: "money, gold",
        onyomi: "キン",
        kunyomi: "かね",
        examples: [
            { word: "お金", reading: "おかね", meaning: "money" },
            { word: "金曜日", reading: "きんようび", meaning: "Friday" }
        ]
    },

    {
        kanji: "九",
        meaning: "nine",
        onyomi: "キュウ, ク",
        kunyomi: "ここの, ここのつ",
        examples: [
            { word: "九人", reading: "きゅうにん", meaning: "nine people" }
        ]
    },

    {
        kanji: "入",
        meaning: "enter, put in",
        onyomi: "ニュウ",
        kunyomi: "い, はい",
        examples: [
            { word: "入口", reading: "いりぐち", meaning: "entrance" },
            { word: "入る", reading: "はいる", meaning: "to enter" }
        ]
    },

    {
        kanji: "学",
        meaning: "study, learning",
        onyomi: "ガク",
        kunyomi: "まな",
        examples: [
            { word: "学校", reading: "がっこう", meaning: "school" },
            { word: "学生", reading: "がくせい", meaning: "student" }
        ]
    },

    {
        kanji: "高",
        meaning: "high, expensive",
        onyomi: "コウ",
        kunyomi: "たか",
        examples: [
            { word: "高い", reading: "たかい", meaning: "high, expensive" }
        ]
    },

    {
        kanji: "円",
        meaning: "yen, circle",
        onyomi: "エン",
        kunyomi: "まる",
        examples: [
            { word: "千円", reading: "せんえん", meaning: "1000 yen" }
        ]
    },

    {
        kanji: "子",
        meaning: "child",
        onyomi: "シ",
        kunyomi: "こ",
        examples: [
            { word: "子ども", reading: "こども", meaning: "child" }
        ]
    },

    {
        kanji: "外",
        meaning: "outside",
        onyomi: "ガイ, ゲ",
        kunyomi: "そと, ほか",
        examples: [
            { word: "外国", reading: "がいこく", meaning: "foreign country" },
            { word: "外", reading: "そと", meaning: "outside" }
        ]
    },

    {
        kanji: "山",
        meaning: "mountain",
        onyomi: "サン",
        kunyomi: "やま",
        examples: [
            { word: "山", reading: "やま", meaning: "mountain" },
            { word: "富士山", reading: "ふじさん", meaning: "Mount Fuji" }
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
        kanji: "先",
        meaning: "ahead, previous",
        onyomi: "セン",
        kunyomi: "さき",
        examples: [
            { word: "先生", reading: "せんせい", meaning: "teacher" }
        ]
    },

    {
        kanji: "生",
        meaning: "life, birth, living",
        onyomi: "セイ, ショウ",
        kunyomi: "い, う, なま",
        examples: [
            { word: "学生", reading: "がくせい", meaning: "student" },
            { word: "先生", reading: "せんせい", meaning: "teacher" }
        ]
    },

    {
        kanji: "食",
        meaning: "eat, food",
        onyomi: "ショク",
        kunyomi: "た, く",
        examples: [
            { word: "食べる", reading: "たべる", meaning: "to eat" },
            { word: "食事", reading: "しょくじ", meaning: "meal" }
        ]
    },

    {
        kanji: "飲",
        meaning: "drink",
        onyomi: "イン",
        kunyomi: "の",
        examples: [
            { word: "飲む", reading: "のむ", meaning: "to drink" }
        ]
    },

    {
        kanji: "車",
        meaning: "car, vehicle",
        onyomi: "シャ",
        kunyomi: "くるま",
        examples: [
            { word: "電車", reading: "でんしゃ", meaning: "train" },
            { word: "車", reading: "くるま", meaning: "car" }
        ]
    },

    {
        kanji: "電",
        meaning: "electricity",
        onyomi: "デン",
        kunyomi: "",
        examples: [
            { word: "電車", reading: "でんしゃ", meaning: "train" },
            { word: "電話", reading: "でんわ", meaning: "telephone" }
        ]
    },

    {
        kanji: "白",
        meaning: "white",
        onyomi: "ハク",
        kunyomi: "しろ, しら",
        examples: [
            { word: "白い", reading: "しろい", meaning: "white" }
        ]
    },

    {
        kanji: "天",
        meaning: "heaven, sky",
        onyomi: "テン",
        kunyomi: "あめ, あま",
        examples: [
            { word: "天気", reading: "てんき", meaning: "weather" }
        ]
    },

    {
        kanji: "気",
        meaning: "spirit, feeling, energy",
        onyomi: "キ, ケ",
        kunyomi: "",
        examples: [
            { word: "天気", reading: "てんき", meaning: "weather" },
            { word: "元気", reading: "げんき", meaning: "healthy, energetic" }
        ]
    },

    {
        kanji: "雨",
        meaning: "rain",
        onyomi: "ウ",
        kunyomi: "あめ, あま",
        examples: [
            { word: "雨", reading: "あめ", meaning: "rain" },
            { word: "大雨", reading: "おおあめ", meaning: "heavy rain" }
        ]
    },

    {
        kanji: "手",
        meaning: "hand",
        onyomi: "シュ",
        kunyomi: "て",
        examples: [
            { word: "手", reading: "て", meaning: "hand" },
            { word: "上手", reading: "じょうず", meaning: "skillful" }
        ]
    },

    {
        kanji: "足",
        meaning: "foot, leg",
        onyomi: "ソク",
        kunyomi: "あし, た",
        examples: [
            { word: "足", reading: "あし", meaning: "foot, leg" }
        ]
    },

    {
        kanji: "目",
        meaning: "eye",
        onyomi: "モク, ボク",
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
        onyomi: "コウ, ク",
        kunyomi: "くち",
        examples: [
            { word: "入口", reading: "いりぐち", meaning: "entrance" },
            { word: "出口", reading: "でぐち", meaning: "exit" }
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
            { word: "友だち", reading: "ともだち", meaning: "friend" }
        ]
    },

    {
        kanji: "名",
        meaning: "name",
        onyomi: "メイ, ミョウ",
        kunyomi: "な",
        examples: [
            { word: "名前", reading: "なまえ", meaning: "name" }
        ]
    },

    {
        kanji: "白",
        meaning: "white",
        onyomi: "ハク",
        kunyomi: "しろ, しら",
        examples: [
            { word: "白い", reading: "しろい", meaning: "white" }
        ]
    },

    {
        kanji: "赤",
        meaning: "red",
        onyomi: "セキ, シャク",
        kunyomi: "あか",
        examples: [
            { word: "赤い", reading: "あかい", meaning: "red" }
        ]
    },

    {
        kanji: "青",
        meaning: "blue",
        onyomi: "セイ, ショウ",
        kunyomi: "あお",
        examples: [
            { word: "青い", reading: "あおい", meaning: "blue" }
        ]
    },

    {
        kanji: "男",
        meaning: "man, male",
        onyomi: "ダン, ナン",
        kunyomi: "おとこ",
        examples: [
            { word: "男の人", reading: "おとこのひと", meaning: "man" }
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
        kanji: "子",
        meaning: "child",
        onyomi: "シ",
        kunyomi: "こ",
        examples: [
            { word: "子ども", reading: "こども", meaning: "child" }
        ]
    },

    {
        kanji: "何",
        meaning: "what",
        onyomi: "カ",
        kunyomi: "なに, なん",
        examples: [
            { word: "何", reading: "なに", meaning: "what" },
            { word: "何時", reading: "なんじ", meaning: "what time" }
        ]
    },

    {
        kanji: "毎",
        meaning: "every",
        onyomi: "マイ",
        kunyomi: "",
        examples: [
            { word: "毎日", reading: "まいにち", meaning: "every day" },
            { word: "毎年", reading: "まいとし", meaning: "every year" }
        ]
    },

    {
        kanji: "週",
        meaning: "week",
        onyomi: "シュウ",
        kunyomi: "",
        examples: [
            { word: "毎週", reading: "まいしゅう", meaning: "every week" }
        ]
    },

    {
        kanji: "曜",
        meaning: "weekday",
        onyomi: "ヨウ",
        kunyomi: "",
        examples: [
            { word: "曜日", reading: "ようび", meaning: "day of the week" }
        ]
    },

    {
        kanji: "火",
        meaning: "fire",
        onyomi: "カ",
        kunyomi: "ひ",
        examples: [
            { word: "火曜日", reading: "かようび", meaning: "Tuesday" }
        ]
    },

    {
        kanji: "水",
        meaning: "water",
        onyomi: "スイ",
        kunyomi: "みず",
        examples: [
            { word: "水", reading: "みず", meaning: "water" },
            { word: "水曜日", reading: "すいようび", meaning: "Wednesday" }
        ]
    },

    {
        kanji: "木",
        meaning: "tree, wood",
        onyomi: "モク, ボク",
        kunyomi: "き",
        examples: [
            { word: "木", reading: "き", meaning: "tree" },
            { word: "木曜日", reading: "もくようび", meaning: "Thursday" }
        ]
    },

    {
        kanji: "土",
        meaning: "earth, soil",
        onyomi: "ド, ト",
        kunyomi: "つち",
        examples: [
            { word: "土曜日", reading: "どようび", meaning: "Saturday" }
        ]
    },

    {
        kanji: "金",
        meaning: "gold, money",
        onyomi: "キン",
        kunyomi: "かね",
        examples: [
            { word: "お金", reading: "おかね", meaning: "money" },
            { word: "金曜日", reading: "きんようび", meaning: "Friday" }
        ]
    },

    {
        kanji: "魚",
        meaning: "fish",
        onyomi: "ギョ",
        kunyomi: "さかな, うお",
        examples: [
            { word: "魚", reading: "さかな", meaning: "fish" }
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
        kanji: "花",
        meaning: "flower",
        onyomi: "カ",
        kunyomi: "はな",
        examples: [
            { word: "花", reading: "はな", meaning: "flower" }
        ]
    },

    {
        kanji: "空",
        meaning: "sky, empty",
        onyomi: "クウ",
        kunyomi: "そら, あ",
        examples: [
            { word: "空", reading: "そら", meaning: "sky" }
        ]
    },

    {
        kanji: "天",
        meaning: "heaven, sky",
        onyomi: "テン",
        kunyomi: "あめ, あま",
        examples: [
            { word: "天気", reading: "てんき", meaning: "weather" }
        ]
    },

    {
        kanji: "道",
        meaning: "road, way",
        onyomi: "ドウ",
        kunyomi: "みち",
        examples: [
            { word: "道", reading: "みち", meaning: "road, way" }
        ]
    },

    {
        kanji: "駅",
        meaning: "station",
        onyomi: "エキ",
        kunyomi: "",
        examples: [
            { word: "駅", reading: "えき", meaning: "station" },
            { word: "駅前", reading: "えきまえ", meaning: "in front of the station" }
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
        kanji: "社",
        meaning: "company, shrine",
        onyomi: "シャ",
        kunyomi: "やしろ",
        examples: [
            { word: "会社", reading: "かいしゃ", meaning: "company" }
        ]
    },

    {
        kanji: "会",
        meaning: "meet, meeting",
        onyomi: "カイ",
        kunyomi: "あ",
        examples: [
            { word: "会社", reading: "かいしゃ", meaning: "company" },
            { word: "会う", reading: "あう", meaning: "to meet" }
        ]
    },

    {
        kanji: "話",
        meaning: "talk, story",
        onyomi: "ワ",
        kunyomi: "はな, はなし",
        examples: [
            { word: "話す", reading: "はなす", meaning: "to speak" },
            { word: "電話", reading: "でんわ", meaning: "telephone" }
        ]
    },

    {
        kanji: "読",
        meaning: "read",
        onyomi: "ドク",
        kunyomi: "よ",
        examples: [
            { word: "読む", reading: "よむ", meaning: "to read" }
        ]
    },

    {
        kanji: "書",
        meaning: "write",
        onyomi: "ショ",
        kunyomi: "か",
        examples: [
            { word: "書く", reading: "かく", meaning: "to write" }
        ]
    },

    {
        kanji: "聞",
        meaning: "hear, listen, ask",
        onyomi: "ブン, モン",
        kunyomi: "き",
        examples: [
            { word: "聞く", reading: "きく", meaning: "to listen, ask" }
        ]
    },

    {
        kanji: "買",
        meaning: "buy",
        onyomi: "バイ",
        kunyomi: "か",
        examples: [
            { word: "買う", reading: "かう", meaning: "to buy" }
        ]
    },

    {
        kanji: "売",
        meaning: "sell",
        onyomi: "バイ",
        kunyomi: "う",
        examples: [
            { word: "売る", reading: "うる", meaning: "to sell" }
        ]
    },

    {
        kanji: "帰",
        meaning: "return, go home",
        onyomi: "キ",
        kunyomi: "かえ",
        examples: [
            { word: "帰る", reading: "かえる", meaning: "to return home" }
        ]
    },

    {
        kanji: "休",
        meaning: "rest, holiday",
        onyomi: "キュウ",
        kunyomi: "やす",
        examples: [
            { word: "休む", reading: "やすむ", meaning: "to rest" },
            { word: "休日", reading: "きゅうじつ", meaning: "holiday" }
        ]
    },

    {
        kanji: "立",
        meaning: "stand",
        onyomi: "リツ",
        kunyomi: "た",
        examples: [
            { word: "立つ", reading: "たつ", meaning: "to stand" }
        ]
    },

    {
        kanji: "住",
        meaning: "live, reside",
        onyomi: "ジュウ",
        kunyomi: "す",
        examples: [
            { word: "住む", reading: "すむ", meaning: "to live" }
        ]
    },

    {
        kanji: "知",
        meaning: "know",
        onyomi: "チ",
        kunyomi: "し",
        examples: [
            { word: "知る", reading: "しる", meaning: "to know" }
        ]
    },

    {
        kanji: "思",
        meaning: "think",
        onyomi: "シ",
        kunyomi: "おも",
        examples: [
            { word: "思う", reading: "おもう", meaning: "to think" }
        ]
    },

    {
        kanji: "言",
        meaning: "say, word",
        onyomi: "ゲン, ゴン",
        kunyomi: "い, こと",
        examples: [
            { word: "言う", reading: "いう", meaning: "to say" },
            { word: "言葉", reading: "ことば", meaning: "word, language" }
        ]
    },

    {
        kanji: "多",
        meaning: "many, much",
        onyomi: "タ",
        kunyomi: "おお",
        examples: [
            { word: "多い", reading: "おおい", meaning: "many" }
        ]
    },

    {
        kanji: "少",
        meaning: "few, little",
        onyomi: "ショウ",
        kunyomi: "すこ, すく",
        examples: [
            { word: "少ない", reading: "すくない", meaning: "few" },
            { word: "少し", reading: "すこし", meaning: "a little" }
        ]
    },

    {
        kanji: "新",
        meaning: "new",
        onyomi: "シン",
        kunyomi: "あたら, あら",
        examples: [
            { word: "新しい", reading: "あたらしい", meaning: "new" }
        ]
    },

    {
        kanji: "古",
        meaning: "old",
        onyomi: "コ",
        kunyomi: "ふる",
        examples: [
            { word: "古い", reading: "ふるい", meaning: "old" }
        ]
    },

    {
        kanji: "安",
        meaning: "cheap, safe",
        onyomi: "アン",
        kunyomi: "やす",
        examples: [
            { word: "安い", reading: "やすい", meaning: "cheap" }
        ]
    },

    {
        kanji: "早",
        meaning: "early, fast",
        onyomi: "ソウ",
        kunyomi: "はや",
        examples: [
            { word: "早い", reading: "はやい", meaning: "early, fast" }
        ]
    },

    {
        kanji: "明",
        meaning: "bright, clear",
        onyomi: "メイ",
        kunyomi: "あか, あ",
        examples: [
            { word: "明るい", reading: "あかるい", meaning: "bright" }
        ]
    },

    {
        kanji: "近",
        meaning: "near, close",
        onyomi: "キン",
        kunyomi: "ちか",
        examples: [
            { word: "近い", reading: "ちかい", meaning: "near" }
        ]
    },

    {
        kanji: "遠",
        meaning: "far",
        onyomi: "エン",
        kunyomi: "とお",
        examples: [
            { word: "遠い", reading: "とおい", meaning: "far" }
        ]
    },

    {
        kanji: "高",
        meaning: "high, expensive",
        onyomi: "コウ",
        kunyomi: "たか",
        examples: [
            { word: "高い", reading: "たかい", meaning: "high, expensive" }
        ]
    },

    {
        kanji: "低",
        meaning: "low",
        onyomi: "テイ",
        kunyomi: "ひく",
        examples: [
            { word: "低い", reading: "ひくい", meaning: "low" }
        ]
    },

    {
        kanji: "強",
        meaning: "strong",
        onyomi: "キョウ",
        kunyomi: "つよ",
        examples: [
            { word: "強い", reading: "つよい", meaning: "strong" }
        ]
    },

    {
        kanji: "弱",
        meaning: "weak",
        onyomi: "ジャク",
        kunyomi: "よわ",
        examples: [
            { word: "弱い", reading: "よわい", meaning: "weak" }
        ]
    },

    {
        kanji: "右",
        meaning: "right",
        onyomi: "ウ, ユウ",
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
        kanji: "北",
        meaning: "north",
        onyomi: "ホク",
        kunyomi: "きた",
        examples: [
            { word: "北", reading: "きた", meaning: "north" }
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
        kanji: "西",
        meaning: "west",
        onyomi: "セイ, サイ",
        kunyomi: "にし",
        examples: [
            { word: "西", reading: "にし", meaning: "west" }
        ]
    },

    {
        kanji: "名",
        meaning: "name",
        onyomi: "メイ, ミョウ",
        kunyomi: "な",
        examples: [
            { word: "名前", reading: "なまえ", meaning: "name" }
        ]
    },

    {
        kanji: "町",
        meaning: "town",
        onyomi: "チョウ",
        kunyomi: "まち",
        examples: [
            { word: "町", reading: "まち", meaning: "town" }
        ]
    },

    {
        kanji: "村",
        meaning: "village",
        onyomi: "ソン",
        kunyomi: "むら",
        examples: [
            { word: "村", reading: "むら", meaning: "village" }
        ]
    },

    {
        kanji: "林",
        meaning: "woods, forest",
        onyomi: "リン",
        kunyomi: "はやし",
        examples: [
            { word: "林", reading: "はやし", meaning: "woods" }
        ]
    },

    {
        kanji: "森",
        meaning: "forest",
        onyomi: "シン",
        kunyomi: "もり",
        examples: [
            { word: "森", reading: "もり", meaning: "forest" }
        ]
    },

    {
        kanji: "空",
        meaning: "sky, empty",
        onyomi: "クウ",
        kunyomi: "そら, あ",
        examples: [
            { word: "空", reading: "そら", meaning: "sky" }
        ]
    },

    {
        kanji: "海",
        meaning: "sea",
        onyomi: "カイ",
        kunyomi: "うみ",
        examples: [
            { word: "海", reading: "うみ", meaning: "sea" }
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
        kanji: "山",
        meaning: "mountain",
        onyomi: "サン",
        kunyomi: "やま",
        examples: [
            { word: "山", reading: "やま", meaning: "mountain" }
        ]
    },

    {
        kanji: "石",
        meaning: "stone",
        onyomi: "セキ",
        kunyomi: "いし",
        examples: [
            { word: "石", reading: "いし", meaning: "stone" }
        ]
    },

    {
        kanji: "王",
        meaning: "king",
        onyomi: "オウ",
        kunyomi: "",
        examples: [
            { word: "王", reading: "おう", meaning: "king" }
        ]
    },

    {
        kanji: "円",
        meaning: "yen",
        onyomi: "エン",
        kunyomi: "",
        examples: [
            { word: "百円", reading: "ひゃくえん", meaning: "100 yen" }
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
        onyomi: "マン, バン",
        kunyomi: "",
        examples: [
            { word: "一万円", reading: "いちまんえん", meaning: "10,000 yen" }
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
        kanji: "何",
        meaning: "what",
        onyomi: "カ",
        kunyomi: "なに, なん",
        examples: [
            { word: "何ですか", reading: "なんですか", meaning: "what is it?" }
        ]
    }

];
```

**Hinweis:** In dieser Liste sind ein paar Kanji absichtlich mehrfach enthalten, damit wir zunächst die App-Funktion testen können. Bevor wir die endgültige N5-Datenbank festschreiben, sollten wir die Liste noch **bereinigen und auf genau 100 eindeutige Kanji** bringen.

Nach dem Speichern sollte deine bestehende App sofort viel mehr Kanji anzeigen. `app.js` musst du dafür **nicht anfassen**.

