/*タイムテーブルの連想配列*/ 
var timetable = {
    "radio": {
        "day1": [
            {
                "id": 1,
                "hour": 10,
                "start_minute": 00,
                "end_minute": 29,
                "name": "OP ~1日目~",
                "description": "THK2016ラジオパレードスタートです！！"
            },
            {
                "id": 2,
                "hour": 10,
                "start_minute": 40,
                "end_minute": 59,
                "name": "課題DJ4",
                "description": "新入生によるフレッシュなラジオをお楽しみください"
            },
            {
                "id": 3,
                "hour": 11,
                "start_minute": 00,
                "end_minute": 19,
                "name": "仮面ライダーITF.",
                "description": "今年もやってきた『仮面ライダーITF.』。2人のパーソナリティが仮面ライダーを熱く語ります！！ 「さぁ、ノーコンティニューで、実験を始めよう！！」"
            },
            {
                "id": 4,
                "hour": 11,
                "start_minute": 20,
                "end_minute": 39,
                "name": "外部DJ（Sheep）",
                "description": ""
            },
            {
                "id": 5,
                "hour": 11,
                "start_minute": 40,
                "end_minute": 59,
                "name": "ディズニーリゾートラジオ",
                "description": "ディズニーリゾートが好きな人！という名目で集まった3人が、初心者である虎取くんに手取り足取り色々教える番組です。聞いたらちょっと得する情報もあったり……？ランドやシーが好きな人も、全然わからない人も、ぜひ興味ありましたら聞いてください！"
            },
            {
                "id": 6,
                "hour": 12,
                "start_minute": 00,
                "end_minute": 19,
                "name": "女子校ラジオ2017",
                "description": "『本物』の女子校出身者が女子校についてあつーーく語ります。女子校の\"あんなこと\"や\"こんなこと\"知りたくありませんか？理想の女子校と真の女子校…果たしてどのくらい違うのでしょうか。"
            },
            {
                "id": 7,
                "hour": 12,
                "start_minute": 20,
                "end_minute": 39,
                "name": "課題DJ3",
                "description": "新入生によるフレッシュなラジオをお楽しみください"
            },
            {
                "id": 8,
                "hour": 12,
                "start_minute": 40,
                "end_minute": 59,
                "name": "THK縦女子会",
                "description": "THKとCOINSに所属する1,2,3年生が集まって色々とトークします。といっても他に共通点が無い3人なので、目標は共通点を見つけることです！"
            },
            {
                "id": 9,
                "hour": 13,
                "start_minute": 00,
                "end_minute": 19,
                "name": "比較ラジオ学類",
                "description": "「華の比文」なんて異名を持つパッと見キラキラ学類、比文。そろそろキラキラのメッキ、剥がしたくない？THK比文生3人が、割と容赦なく赤裸々に比文の実情を暴露します。"
            },
            {
                "id": 10,
                "hour": 13,
                "start_minute": 20,
                "end_minute": 39,
                "name": "外部DJ1（Guest: Viccさま）",
                "description": "ViCC-映画をつくる会-さんをゲストに迎え、学園祭での出展の話や日々の活動について詳しくお伺いしていきます！！"
            },
            {
                "id": 11,
                "hour": 13,
                "start_minute": 40,
                "end_minute": 59,
                "name": "とりかごラジオ",
                "description": "鳩と鷲、そして飼い主が繰り広げる筑波大学の鳥類たちのためのラジオ。当日は鳥たちの鳴き声を飼い主が翻訳してお送りします。"
            },
            {
                "id": 12,
                "hour": 14,
                "start_minute": 00,
                "end_minute": 19,
                "name": "スマブラジオ",
                "description": "新たな挑戦者が現れた！！1年生、トラトリ！！2年生、サウミン！！3年生、リカ！！彼らが繰り広げる大乱闘を見逃すな！！！ Battle Fight！！！"
            },
            {
                "id": 13,
                "hour": 14,
                "start_minute": 20,
                "end_minute": 39,
                "name": "Radio on Ice 2017",
                "description": "年季の入ったフィギュアスケートオタクがお送りする「Radio on Ice」！お題は約4ヶ月後にせまる冬季オリンピック。氷上で繰り広げられる熱き戦いに思いを馳せて。"
            },
            {
                "id": 14,
                "hour": 14,
                "start_minute": 40,
                "end_minute": 59,
                "name": "限界（）レディオ",
                "description": "世間に知られる恋愛通説から恋愛心理学といった学術的なものまで、恋愛にまつわるあれこれをカップルの視点で議論していきます"
            },
            {
                "id": 15,
                "hour": 15,
                "start_minute": 00,
                "end_minute": 19,
                "name": "女児の女児による女児のためのラジオ",
                "description": "女児(笑)の二人がみなさんの知らない女児コンテンツの魅力をお伝えします!"
            },
            {
                "id": 16,
                "hour": 15,
                "start_minute": 20,
                "end_minute": 39,
                "name": "DJタイム",
                "description": "名前は聞いたことのあるような有名アーティストのテレビやラジオでは中々知れないマイナー曲を次々紹介していきます。"
            },
            {
                "id": 17,
                "hour": 15,
                "start_minute": 40,
                "end_minute": 59,
                "name": "コミュニカっていう会誌で2年連続ベストコンビに選ばれた僕らだけど実際のところはどうなんだろう？ラジオ",
                "description": "コミュニカという会誌で２年連続ベストコンビに選ばれた二人ですが実際のところどうなのでしょう。本日それが明らかになります。"
            },
            {
                "id": 18,
                "hour": 16,
                "start_minute": 00,
                "end_minute": 19,
                "name": "Gトーク",
                "description": "皆さんは、どんな写真をインスタグラムに載せますか？木十、何らかのこだわりがあることでしょう。今回は、THK1年の野口君のこだわりについて言及します!!"
            },
            {
                "id": 19,
                "hour": 16,
                "start_minute": 20,
                "end_minute": 39,
                "name": "俺がお前で、お前が俺で",
                "description": "THK会員ですら見間違えるほどの2人が横に座ってラジオ！本当にお互い似てるのか！？「もしかして」「俺たち」「「入れ替わってる～～！？」」"
            },
            {
                "id": 20,
                "hour": 16,
                "start_minute": 40,
                "end_minute": 59,
                "name": "みんくさん！何が聞きたい！？",
                "description": "学類もサークルもバイトも同じ2人がラジオで話しま…あれ…！？話しすぎて話すことなくない？ということでみんくさんが聞きたい話をするラジオです"
            },
            {
                "id": 21,
                "hour": 17,
                "start_minute": 00,
                "end_minute": 19,
                "name": "みんなのうた",
                "description": "家族みんなで曲を聴く文化が無いと言われる現代、大学生3人が今あなたに聞いてほしい曲を紹介します。新たな世界を覗いてみませんか？"
            },
            {
                "id": 22,
                "hour": 17,
                "start_minute": 20,
                "end_minute": 39,
                "name": "ぷえ☆らじ",
                "description": "THK1年の巨畠とTHK2年の豊川でお送りする「ぷえ☆ラジ」。先輩後輩コンビの我々が、つくばのお店などについて語ります!!"
            },
            {
                "id": 23,
                "hour": 17,
                "start_minute": 40,
                "end_minute": 59,
                "name": "女子高ラジオ2017",
                "description": ""
            },
            {
                "id": 24,
                "hour": 18,
                "start_minute": 00,
                "end_minute": 19,
                "name": "課題DJ2",
                "description": "新入生によるフレッシュなラジオをお楽しみください"
            },
            {
                "id": 25,
                "hour": 18,
                "start_minute": 20,
                "end_minute": 39,
                "name": "らふあんどぴーす",
                "description": "声優・歌手、もといエンターテイナーとして活躍する宮野真守の公式FC「Laugh＆Peace」会員である2人が、ひたすらマモについて語り倒す番組です。"
            },
            {
                "id": 26,
                "hour": 18,
                "start_minute": 40,
                "end_minute": 59,
                "name": "外部DJ（Guest: 斬桐舞さん）",
                "description": ""
            },
            {
                "id": 27,
                "hour": 19,
                "start_minute": 00,
                "end_minute": 59,
                "name": "THKラジオ学類！",
                "description": "THKラジオ学類が雙峰祭でも...!?"
            },
/*            {
                "id": 28,
                "hour": 19,
                "start_minute": 00,
                "end_minute": 59,
                "name": "THKラジオ学類!",
                "description": "1日目のトリはラジ学生収録！お祭りの雰囲気を感じながらパーの2人が最後を締めくくります！「THKラジオ学類！」は、fm84.2MHzより毎週日曜22時30分放送！"
            },
*/
        ],
        "day2": [
            {
                "id": 1,
                "hour": 10,
                "start_minute": 00,
                "end_minute": 19,
                "name": "会長の捨て台詞",
                "description": "昨年一人語りをしたところ、お客さん皆さん帰られていきました。今年は何人が帰るのか。乞うご期待。(内容は会員から会長への尋問タイムです)"
            },
            {
                "id": 2,
                "hour": 10,
                "start_minute": 20,
                "end_minute": 39,
                "name": "内プロラジオ",
                "description": "THKは生ラジオだけじゃない！同時並行で行われてる室内企画「THK秋の番組発表会2017」の魅力を語ります！"
            },
            {
                "id": 3,
                "hour": 10,
                "start_minute": 40,
                "end_minute": 59,
                "name": "福岡弁いいなぁ、とよく言われるけど、その実態を確かめてもらうラジオ",
                "description": "故郷から遠く離れた筑波の地で偶然にも知り合った福岡出身4人組。福岡出身といえど実は少しずつ違いがあったりして…？福岡弁の魅力ば伝えられたらよかっち思っとっと！"
            },
            {
                "id": 4,
                "hour": 11,
                "start_minute": 00,
                "end_minute": 19,
                "name": "サイコロラジオ",
                "description": "サイコロジー(心理学)を学ぶ2人がサイコロ振って仲良くサイコロトークをします♪"
            },
            {
                "id": 5,
                "hour": 11,
                "start_minute": 20,
                "end_minute": 39,
                "name": "ITF.のらーめん好きが語るらーめんらぢお",
                "description": "筑波には皆がまだまだ知らない美味しいらーめん屋が存在する...!?THKでラーメン三昧な二人が筑波大学周辺のらーめんについて語ります。"
            },
            {
                "id": 6,
                "hour": 11,
                "start_minute": 40,
                "end_minute": 59,
                "name": "ゲス極のゲスくない世界",
                "description": "ゲスの極み乙女。の切ない曲たちを知っていますか？テレビで見ているだけでは知れない、ゲスの極み乙女。の1面を語ります。"
            },
            {
                "id": 7,
                "hour": 12,
                "start_minute": 00,
                "end_minute": 19,
                "name": "アイマスラジオ",
                "description": "アイマスについて語ります。765 AS, 765 MILLIONSTARS, 346, 315について話す予定です。"
            },
            {
                "id": 8,
                "hour": 12,
                "start_minute": 20,
                "end_minute": 39,
                "name": "ピンドラジオ！",
                "description": "皆さんは、アニメ｢輪るピングドラム｣をご存知ですか？独特の世界観を持つこの作品の魅力を、ご紹介していきます！"
            },
            {
                "id": 9,
                "hour": 12,
                "start_minute": 40,
                "end_minute": 59,
                "name": "この世の地獄ラジオ",
                "description": "あなたはこの世の地獄について考えたことはありますか？―僕はありましぇーん。期待のルーキー虎取が先輩２人とガチ討論！？テーマは未知数！ぜひ楽しんで聞いてくれＹｏ！"
            },
            {
                "id": 10,
                "hour": 13,
                "start_minute": 00,
                "end_minute": 19,
                "name": "おきなみ55",
                "description": "みなさんはEテレの「0655」と「2355 」という番組、ご存知ですか？「おきなみ55」ではTHK2年の“おきまゆ”と“あとなみ”コンビが溢れ出る0655,2355愛を語りつくします！本家に負けないくらいみなさんをほっこりさせちゃいます٩( 'ω' )و"
            },
            {
                "id": 11,
                "hour": 13,
                "start_minute": 20,
                "end_minute": 39,
                "name": "目指せ！フル単",
                "description": "大学生たるもの、落とせないものが一つある…。そう、単位！ そんな話です。"
            },
            {
                "id": 12,
                "hour": 13,
                "start_minute": 40,
                "end_minute": 59,
                "name": "一人語りっかり〜ラジオ",
                "description": "ラジオ制作局員だけどトークが苦手だった人が、最初で最後の一人パーソナリティラジオに挑戦します。今までの集大成となるのか、あるいは何か起こるのか、予測不可能です。"
            },
            {
                "id": 13,
                "hour": 14,
                "start_minute": 00,
                "end_minute": 19,
                "name": "でこぼころっく",
                "description": "背が高い低いコンビの2人でした。ある理由でそのアイデンティティーは消えました。もう何も残りません…どうなるのでしょうか。"
            },
            {
                "id": 14,
                "hour": 14,
                "start_minute": 20,
                "end_minute": 39,
                "name": "中国VS四国ラジオ",
                "description": "なぜかよく一括りにされる悲劇の地方、中四国。その悲劇に幕を下ろす時が来た。中四国民THK会員による中国VS四国のフリートークバトル！今宵、中四国の覇者が決まる。"
            },
            {
                "id": 15,
                "hour": 14,
                "start_minute": 40,
                "end_minute": 59,
                "name": "はとくまラジオ",
                "description": "以前のラジ学で話した2人で話します！どんなラジオになるのか！？是非聞きに来てください！！"
            },
            {
                "id": 16,
                "hour": 15,
                "start_minute": 00,
                "end_minute": 19,
                "name": "課題DJ5",
                "description": "新入生によるフレッシュなラジオをお楽しみください新入生によるフレッシュなラジオをお楽しみください"
            },
            {
                "id": 17,
                "hour": 15,
                "start_minute": 20,
                "end_minute": 39,
                "name": "ゆっきーのひとりしゃべり",
                "description": "初めて生ラジオひとりしゃべりにチャレンジします。好きなバンドの曲をかけながらのんびり好きな映画の話をしつづけますので、ゆるゆると聞いていただければ幸いです"
            },
            {
                "id": 18,
                "hour": 15,
                "start_minute": 40,
                "end_minute": 59,
                "name": "THKぬいぐるみ部！",
                "description": "\"もふもふは至高\" THKきってのぬいぐるみ好きたちが、その素晴らしさを語ります。大学生にこそ、ぬいぐるみは必要だ。 "
            },
            {
                "id": 19,
                "hour": 16,
                "start_minute": 00,
                "end_minute": 19,
                "name": "課題DJ1",
                "description": "新入生によるフレッシュなラジオをお楽しみください"
            },
            {
                "id": 20,
                "hour": 16,
                "start_minute": 20,
                "end_minute": 39,
                "name": "立つ鳥跡を濁す",
                "description": "あと2週間で引退する会長・副会長が、いろいろチョメチョメお話します。"
            },
            {
                "id": 21,
                "hour": 16,
                "start_minute": 40,
                "end_minute": 59,
                "name": "じゅじゅくんとあそぼう！",
                "description": "まったり話します。まったり聴いてください。"
            },
            {
                "id": 22,
                "hour": 17,
                "start_minute": 00,
                "end_minute": 19,
                "name": "dan・de・marian The Last Dance",
                "description": "ダンデマリアン最終章！最高にハッピーでクレイジーな時間を届けます！お楽しみあれ！"
            },
			{
				"id": 23,
				"hour": 17,
				"start_minute": 20,
				"end_minute": 39,
				"name": "ラジ執の本気",
				"description": ""
			},
			{
				"id": 23,
				"hour": 17,
			    "start_minute": 40,
				"end_minute": 59,
				"name": "エンディング",
				"description": ""
            },
        ]
    },
    /*シアターは幕の順番と幕の中身を別で作成*/ 
    "theater": {
        "day1": [
            {
                "id": 1,
                "program": 3,
                "hour": 10,
                "start_minute": 00,
                "end_minute": 50
            },
            {
                "id": 2,
                "hour": 11,
                "program": 2,
                "start_minute": 00,
                "end_minute": 50
            },
            {
                "id": 3,
                "hour": 12,
                "program": 5,
                "start_minute": 00,
                "end_minute": 50
            },
            {
                "id": 4,
                "hour": 13,
                "program": 6,
                "start_minute": 00,
                "end_minute": 50,
            },
            {
                "id": 5,
                "hour": 14,
                "program": 1,
                "start_minute": 00,
                "end_minute": 50,
            },
            {
                "id": 6,
                "hour": 15,
                "program": 4,
                "start_minute": 00,
                "end_minute": 50,
            },
            {
                "id": 7,
                "hour": 16,
                "program": 3,
                "start_minute": 00,
                "end_minute": 50,
            },
            {
                "id": 8,
                "hour": 17,
                "program": 2,
                "start_minute": 00,
                "end_minute": 50,
            },
            {
                "id": 9,
                "hour": 18,
                "program": 1,
                "start_minute": 00,
                "end_minute": 50,
            }
        ],
        "day2": [
            {
                "id": 1,
                "hour": 10,
                "program": 4,
                "start_minute": 00,
                "end_minute": 50,
            },
            {
                "id": 2,
                "hour": 11,
                "program": 2,
                "start_minute": 00,
                "end_minute": 50,

            },
            {
                "id": 3,
                "hour": 12,
                "program": 1,
                "start_minute": 00,
                "end_minute": 50,

            },
            {
                "id": 4,
                "hour": 13,
                "program": 5,
                "start_minute": 00,
                "end_minute": 50,
            },
            {
                "id": 5,
                "hour": 14,
                "program": 3,
                "start_minute": 00,
                "end_minute": 50,
            },
            {
                "id": 6,
                "hour": 15,
                "program": 6,
                "start_minute": 00,
                "end_minute": 50,
            },
            {
                "id": 7,
                "hour": 16,
                "program": 5,
                "start_minute": 00,
                "end_minute": 50,
            },
        ],
        "theater_program": [
            {
                "id" : 1,
                "content1" : "○○しないと出られない部屋",
                "type1" : "バラエティ",
                "img1" : "img/theater_img/ヒーロー_アンチヒーロー.jpg",
                "content2" : "HOPE",
                "type2" : "ラジオドラマ",
                "img2" : "img/theater_img/飴ちゃんは世界を救う.png",
                "content3" : "無垢",
                "type3" : "MV",
                "img3" : "img/theater_img/大きな光のそばで.png",
                "content4" : "オレンジが差し込むいつものカフェで",
                "type4" : "ラジオドラマ",
                "img4" : "img/theater_img/ダンディ課長の日常.png",
            },
            {
                "id": 2,
                "content1": "食卓一期一会",
                "type1": "朗読",
                "img1": "img/theater_img/建築バラエティ！『LEGOの匠』.jpg",
                "content2": "Miracle Worker",
                "type2": "MV",
                "img2": "img/theater_img/足元は暗く.jpg",
                "content3": "information coming soon!",
                "type3": "information coming soon!",
                "img3": "img/theater_img/ひとひら.jpg",
                "content4": "オタ恋ソーラン節",
                "type4": "MV",
                "img4": "img/theater_img/スナイパーな男.png",
            },
            {
                "id": 3,
                "content1": "金曜日のおはよう",
                "type1": "MV",
                "img1": "img/theater_img/耳の形.png",
                "content2": "現代童話『幸せの青い鳥』",
                "type2": "ラジオドラマ",
                "img2": "img/theater_img/ランドセル.jpg",
                "content3": "PERFECT BLUE",
                "type3": "MV",
                "img3": "img/theater_img/理由狐.png",
                "content4": "憧れのヒーロー",
                "type4": "ドラマ",
                "img4": "img/theater_img/また君に会える日.png",
            },
            {
                "id": 4,
                "content1": "アイノココロ",
                "type1": "ラジオドラマ",
                "img1": "img/theater_img/-FLASH-",
                "content2": "いつもの場所で待っています",
                "type2": "ドラマ",
                "img2": "img/theater_img/一億総アイドル社会.jpg",
                "content3": "筑波大生とぽきた！！魔剤ンゴ！？",
                "type3": "MV",
                "img3": "img/theater_img/MUTE.png",
            },
            ,{
                "id": 5,
                "content1": "THK昔ばなし ボル太郎",
                "type1": "ドラマ",
                "img1": "img/theater_img/閉ざされたドア.jpg",
                "content2": "苺のケーキ",
                "type2": "朗読",
                "img2": "img/theater_img/マイクノイズ、本をめくる音。台詞.png",
                "content3": "Lost Oneself",
                "type3": "MV",
                "img3": "img/theater_img/旬.jpg",
                "content4": "脇役ヒーロー",
                "type4": "ラジオドラマ",
                "img4": "img/theater_img/「わかる」の処方箋.png",
            },
            ,{
                "id": 6,
                "content1": "橋先端男の端を巡る話〜episode5 デキる男の10ケ条編〜",
                "type1": "ドラマ",
                "img1": "img/theater_img/-FLASH-",
                "content2": "前借り",
                "type2": "ドキュメント",
                "img2": "img/theater_img/一億総アイドル社会.jpg",
                "content3": "サボテン",
                "type3": "MV",
                "img3": "img/theater_img/MUTE.png",
                "content4": "君がいない間に",
                "type4": "ラジオドラマ",
                "img4": "img/theater_img/今、ここにいること.png",
            }
        ]
    }
}