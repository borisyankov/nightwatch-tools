var crypto = require('crypto');

exports.randomString = function (count, customChars) {

    var chars = customChars || 'abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUWXYZ0123456789',
        len = chars.length,
        rnd = crypto.pseudoRandomBytes(count),
        value = new Array(count);

    for (var i = 0; i < count; i++) {
        value[i] = chars[rnd[i] % len];
    }

    return value.join('');
};

exports.randomStringLowercase = function (count) {
    return randomString(count, 'abcdefghijklmnopqrstuwxyz');
};

exports.randomEmail = function () {
    return randomStringLowercase(10) + '@' + randomStringLowercase(10) + '.com';
};

exports.LOREM_IPSUM = {
    ORIGINAL: 'Lorem ipsum dolor sit amet, etiam sensibus senserit at eos, ut eam ludus sensibus dissentias, homero volumus consulatu pri ad. Iudicabit signiferumque an vel, ne est esse consul platonem. Et vel electram efficiendi, eu vel autem error graecis, ad perfecto postulant interesset duo. Consul essent repudiandae ad vix. Affert expetenda gubergren eum no, prima mollis ius an. Pro putant similique moderatius ut, ad quo postea vituperata. Paulo tractatos te eam.',
    CYRILLIC: 'Ад вэл квюод кашы аппэльлььантюр, ыт дуо алёа эуежмод, лебыр дольор адепйжкйнг кюм ут. Экз льюкяльиюч янтэрэсщэт векж. Дёко заэпы кюм эю, ут ютенам нощтыр партйэндо еюж. Аппэтырэ пэркёпитюр экз вяш, жэмпэр янжольэнж ад дуо, зыд попюльо омйттам ут. Квуй адхюк оффэндйт дигнижжим эю, пэр ты вёвындо оффэндйт. Ат факэр адмодум ыам, ыт эож ийжквюы модыратиюз, ючю йн эвэртё пожйдонёюм.',
    GREEK: 'Εαμ εραντ μεδιοσρεμ εα. Νεμωρε περτιναξ ευ φελ, εαμ κυωδ λυδυς ελεστραμ εα. Διαμ σινθ μαζιμ ηας αδ. Ορατιο εξερσι ιν εαμ, ατ πρινσιπες υλλαμσορπερ κυο. Ατ ταντας δισυντ φολυπθυα φιμ, ετ ελιτρ λαβωραμυς ρεπριμικυε εσθ.',
    HINDI: 'होगा चिदंश अमितकुमार विश्वव्यापि वर्णित प्राथमिक व्याख्यान करते विवरन चाहे कराना निरपेक्ष मुश्किले संपादक हुआआदी करेसाथ ध्येय हैं। लगती विकास खरिदने ब्रौशर निर्माण सुचना रखते हुएआदि आशाआपस व्यवहार कुशलता सभीकुछ पुष्टिकर्ता कार्य रखते',
    CHINESE: '材系去伊多著皇津住月公風。写旋物陸仕資捕北政比域渡意古順正来景。領健自米任罰秋授択歯会読藤住測供面窓。安都応杉化時中理連起場情五送聴誠計規説毛。任提冠舞自玲簿禁名白組題造南伊意著実際千。日後企式気流准署論山昇責。属投千須自読客暖難用生台疲品無値施国。給総投阪国記真星体道手亡。使起暖紙共注同被囲旬湾報録字博暑白止事明。',
    JAPANESE: '報ゆみン一前も神球エ菱禁ルニヒオ載明クヘナ女薬を開届7京マソ康屋し事紙んト安重治ーふべこ時年ミヤムク生主ロニ仙真イヨメ会伸換ざれく。善そじ観競コレルサ脱記表なね検公ぐちた兵都マアハ名7本で拡定みすな争問例サムイ慣読61陸憲弾漏がぐひ。月れ町姿9生がイべは京図だづゃ出本シケマ頼離ルケレ求立で面発滞村ヱラ本持ワケナヱ情71出ト治銭康らのご以添てや変界じ業名佐ぴおの。',
    ARABIC: 'ألمّ العالم، المزيفة أي قبل, يونيو لهيمنة كلّ ان. الى تم جنوب عسكرياً. بـ بلا ببعض أسابيع الحدود. فقد شمال رجوعهم والإتحاد أن. هو دنو وانهاء واعتلاء اقتصادية, أن فبعد التكاليف ذات.',
    HEBREW: 'של זכר פילוסופיה ארכיאולוגיה ביוטכנולוגיה. חשמל עזרה בשפות שמו או, כלל לערוך מונחונים אל. ומדעים שימושי אנציקלופדיה אם בקר, דת כתב יכול קולנוע. קודמות הספרות שיתופית מה שתי, שונה המלצת אל כלל.'
};
