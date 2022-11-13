$(function () {
    //プログラム主要部

    //変数宣言
    var vowels = ['a','i','u','e','o','y','ā','ī','ū','ē','ō'];
    var shortVowels = ['a','i','u','e','o','y'];
    var doubleVowels = ['ai','au','ie','io','ia','ei','eu','ea','ou','oi'];
    var doubleVowels_first = ['ai','au','ei','eu','ou'];
    var consonants = ['b','p','d','t','g','k','f','v','s','z','þ','ð','š','ž','l','r','x','h','n','m','c','ĉ'];
    var consonants_last = ['p','t','d','k','þ','w','f','s','š','l','r','n','m'];
    var doubleConsonants_first = ['št','šl','šp','sĉ','st','sl','sk','sm','sf','sv','sp','kl','kr','gl','gr','pl','bl','br','kv','gv','sc'];
    var doubleConsonants_last = ['nd','ns','nk','ng','nc','nt','nc',
                                'mp','ms',
                                'rn','rm','rs','rk','rg','rd','rt','rv','rž',
                                'ln','lm','ls','lš','lk','ll','ld','lt','lf','lp','lb','lc',
                                'ps','pt',
                                'kt','ks','fs',
                                'st','sp','sk','št','šp'];
    var tripleConsonants = ['spr','spl','str','skr'];
    //生成された単語の発音記号に変換するためのリスト
    var pronuncReplacer = [
                        ['iki','ɪː'],
                        ['ts','s'],
                        ['nc','ns'],
                        ['ai','ɑɪ'], 
                        ['ie','ɪː'],
                        ['io','ɪɔ'],
                        ['iu','ɪʊ'],
                        ['ia','ɪä'],
                        ['ei','ɛɪ'],
                        ['eu','ʲʊː'],
                        ['ew','ʲʊː'],
                        ['ou','ʊː'],
                        ['au','ɔː'],
                        ['ae','ə'],
                        ['ai','ɛː'],
                        ['oi','ɔɪ'],
                        ['geu','ʒʊː'],['ge','ʒɛ'],['gi','ʒi'],
                        ['keu','jʊ'],['ky','jʊ'],
                        ['iki','ɪː'],
                        ['he','çe'],['he','çi'],
                        ['nk','ŋk'],['ng','ŋg'],
                        ['kv','kʷ'],['gv','gʷ'],['sv','sʷ'],
                        ['sc','t͡s'],['sĉ','t͡ʃ'],
                        ['ah','äː'],['ah','iː'],['ah','ʊː'],['ah','ɛː'],['ah','ɔː'],
                        ['āh','äː'],['īh','iː'],['ūh','ʊː'],['ēh','ɛː'],['ōh','ɔː'],
                        ['ā','äː'],['ī','iː'],['ū','ʊː'],['ē','ɛː'],['ō','ɔː'],
                        ['c','t͡s'],['ĉ','t͡ʃ'],['x','χ'],
                        ['š','ʃ'], ['ž','ʒ'], 
                        ['o','ɒ'],['e','ɛ'],['u','ɯ'], ['a','ä'],
                        ['r','ɾ'],['þ','t'],['ð','d']
                        ];
    console.log("チェック通過");
    

    //関数の定義
    function erandom(type){
        var x = type[Math.floor(Math.random() * type.length)];
        return x;
    };

    //チェックボックスの択一化
    jQuery(function($){
        $(function(){ $('.typeNoun').on('click', function() {
            if ($(this).prop('checked')){
                // 一旦全てをクリアして再チェックする
                $('.typeNoun').prop('checked', false);
                $(this).prop('checked', true);
                }
            });
        });
    });

    //チェックボックスの択一化
    jQuery(function($){
        $(function(){ $('.profix').on('click', function() {
            if ($(this).prop('checked')){
                // 一旦全てをクリアして再チェックする
                $('.profix').prop('checked', false);
                $(this).prop('checked', true);
                }
            });
        });
    });

    //チェックボックスの択一化
    jQuery(function($){
        $(function(){ $('.prefix').on('click', function() {
            if ($(this).prop('checked')){
                // 一旦全てをクリアして再チェックする
                $('.prefix').prop('checked', false);
                $(this).prop('checked', true);
                }
            });
        });
    });

    //チェックボックスの択一化
    jQuery(function($){
            $(function(){ $('.option').on('click', function() {
                if ($(this).prop('checked')){
                    // 一旦全てをクリアして再チェックする
                    $('.option').prop('checked', false);
                    $(this).prop('checked', true);
                    }
                });
            });
    });

    //generateボタンが押されたときの処理
    $('#gen').click(function() {
        console.log("ボタン押された");
        var letters = document.getElementById("wordLength").value; // フォームの値から単語の文字数を指定
        Number(letters); //lettersの型をnumberに指定
        //音節リスト
        var V = erandom(shortVowels)
        var Vv = erandom(doubleVowels_first)
        //母音から始まり、子音で終わる音節
        var VC = erandom(vowels) + erandom(consonants_last);
        var VCC = erandom(shortVowels) + erandom(doubleConsonants_last);
        var VvC = erandom(doubleVowels_first) + erandom(consonants_last);
        var VvCC = erandom(doubleVowels_first) + erandom(doubleConsonants_last);
        //子音から始まり、母音で終わる音節
        var CV = erandom(consonants) + erandom(vowels);
        var CVv = erandom(consonants) + erandom(doubleVowels);
        var CV1 = erandom(consonants) + erandom(vowels);
        var CV2 = erandom(consonants) + erandom(vowels);
        var CCV = erandom(doubleConsonants_first) + erandom(vowels);
        var CCCV = erandom(tripleConsonants) + erandom(shortVowels);
        //子音から子音で終わる音節
        var CVC = erandom(consonants) + erandom(vowels) + erandom(consonants_last);
        var CVC1 = erandom(consonants) + erandom(vowels) + erandom(consonants_last);
        var CVC2 = erandom(consonants) + erandom(vowels) + erandom(consonants_last);
        //
        var CVCC = erandom(consonants) + erandom(shortVowels) + erandom(doubleConsonants_last);
        var CCVC = erandom(doubleConsonants_first) + erandom(vowels) + erandom(consonants_last);
        var CVvC = erandom(consonants) + erandom(doubleVowels) + erandom(consonants_last);
        var CVvCC = erandom(consonants) + erandom(doubleVowels) + erandom(doubleConsonants_last);
        var CCVCC = erandom(doubleConsonants_first) + erandom(shortVowels) + erandom(doubleConsonants_last);
        var CCVvC = erandom(doubleConsonants_first) + erandom(doubleVowels) + erandom(consonants_last);
        //ここに実装
        if($("#vowelOption").prop("checked")) {//先頭が母音のオプション
            switch (letters) {
                case "3"://文字数3の場合
                    switch(~~(2 * Math.random())) {
                        //VCC
                        case 0:
                            var wordGen = VCC;
                            break;
                        //VvC
                        case 1:
                            var wordGen = VvC;
                            break;
                    }
                    break;
                case "4"://文字数4の場合
                    switch(~~(2 * Math.random())) {
                        //V・CVC
                        case 0:
                            var wordGen = V + CVC;
                            break;
                        //VvCC
                        case 1:
                            var wordGen = VvCC;
                            break;
                    }
                    break;
                case "5"://文字数5の場合
                    switch(~~(2 * Math.random())) {
                        //V・CVCC
                        case 0:
                            var wordGen = V + CVCC;
                            break;
                        //V・CCVC
                        case 1:
                            var wordGen = V + CCVC;
                            break;
                    }
                    break;
                case "6"://文字数6の場合
                    switch(~~(3 * Math.random())) {
                        //V・CV・CVC
                        case 0:
                            var wordGen = V + CV + CVC;
                            break;
                        //V・CVvCC
                        case 1:
                            var wordGen = V + CVvCC;
                            break;
                        //VvC・VCC
                        case 2:
                            var wordGen = VvC + VCC;
                            break;
                    }
                    break;
                case "7"://文字数7の場合
                    switch(~~(3 * Math.random())) {
                        //V・CV・CCVC
                        case 0:
                            var wordGen = V + CV + CCVC;
                            break;
                        //V・CV・CVCC
                        case 1:
                            var wordGen = V + CV + CVCC;
                            break;
                        //V・CCVvC
                        case 2:
                            var wordGen = V + CCVvC;
                            break;
                    }
                    break;
                case "8"://文字数8の場合
                    switch(~~(3 * Math.random())) {
                        //V・CV・CV・CVC
                        case 0:
                            var wordGen = V + CV1 + CV2 + CVC;
                            break;
                        //V・CVCC・VvC
                        case 1:
                            var wordGen = V + CVCC + VvC;
                            break;
                        //V・CCVvC・VC
                        case 2:
                            var wordGen = V + CCVvC + VC;
                            break;
                    }
                    break;
                case "9"://文字数9の場合
                    switch(~~(3 * Math.random())) {
                        //V・CV・CV・CVCC
                        case 0:
                            var wordGen = V + CV1 + CV2 + CVCC;
                            break;
                        //V・CV・CV・CCVC
                        case 1:
                            var wordGen = V + CV1 + CV2 + CCVC;
                            break;
                        //V・CVC・CV・CVC
                        case 2:
                            var wordGen = V + CVC + CV + CVC;
                            break;
                    }
                    break;
                default: //未選択の場合
                    console.log("--文字");
                    alert('（3～9）の範囲で文字数を指定して下さい。');
                    break;
            } 
        } else if ($("#consonantsOption").prop("checked")){//先頭が子音のオプション
            switch (letters) {
                case "3"://文字数3の場合
                    //CVC
                    var wordGen = CVC;
                    break;
                case "4"://文字数4の場合
                    switch(~~(3 * Math.random())) {
                        //CVCC
                        case 0:
                            var wordGen = CVCC;
                            break;
                        //CCVC
                        case 1:
                            var wordGen = CCVC;
                            break;
                        //CVvC
                        case 2:
                            var wordGen = CVvC;
                            break;
                    }
                    break;
                case "5"://文字数5の場合
                    switch(~~(3 * Math.random())) {
                        //CV・CVC
                        case 0:
                            var wordGen = CV + CVC;
                            break;
                        //CVvCC
                        case 1:
                            var wordGen = CVvCC;
                            break;
                        //CCVvC
                        case 2:
                            var wordGen = CCVvC;
                            break;
                    }
                    break;
                case "6"://文字数6の場合
                    switch(~~(3 * Math.random())) {
                        //CV・CVCC
                        case 0:
                            var wordGen = CV + CVCC;
                            break;
                        //CV・CCVC
                        case 1:
                            var wordGen = CV + CCVC;
                            break;
                        //CCV・CVC
                        case 2:
                            var wordGen = CCV + CVC;
                            break;
                    }
                    break;
                case "7"://文字数7の場合
                    switch(~~(6 * Math.random())) {
                        //CV・CV・CVC
                        case 0:
                            var wordGen = CV1 + CV2 + CVC;
                            break;
                        //CV・CCVCC
                        case 1:
                            var wordGen = CV + CCVCC;
                            break;
                        //CV・CVvCC
                        case 2:
                            var wordGen = CV + CVvCC;
                            break;
                        //CCV・CVCC
                        case 3:
                            var wordGen = CCV + CVCC;
                            break;
                        //CCV・CCVC
                        case 4:
                            var wordGen = CCV + CVCC;
                            break;
                        //CCV・CVvC
                        case 5:
                            var wordGen = CCV + CVvC;
                            break;
                    }
                    break;
                case "8"://文字数8の場合
                    switch(~~(5 * Math.random())) {
                        //CV・CV・CVCC
                        case 0:
                            var wordGen = CV1 + CV2 + CVCC;
                            break;
                        //CV・CVC・VCC
                        case 1:
                            var wordGen = CV + CVC + VCC;
                            break;
                        //CCV・CVC・VC
                        case 2:
                            var wordGen = CCV + CVC + VC;
                            break;
                        //CCV・CVvCC
                        case 3:
                            var wordGen = CCV + CVvCC;
                            break;
                        //CCV・CCVvC
                        case 4:
                            var wordGen = CCV + CCVvC;
                            break;
                    }
                    break;
                case "9"://文字数9の場合
                    switch(~~(7 * Math.random())) {
                        //CV・CV・CV・CVC
                        case 1:
                            var wordGen = CV + CV1 + CV2 + CVC;
                            break;
                        //CV・CV・CCVvC
                        case 2:
                            var wordGen = CV1 + CV2 + CCVvC;
                            break;
                        //CV・CVv・CCVC
                        case 3:
                            var wordGen = CV + CVv + CCVC;
                            break;
                        //CCV・CV・CVCC
                        case 4:
                            var wordGen = CCV + CV + CVCC;
                            break;
                        //CCV・CCVC・VC
                        case 5:
                            var wordGen = CCV + CVCC + VC;
                            break;
                        //CCV・CVC + VC
                        case 6:
                            var wordGen = CCV + CVC + VC;
                            break;
                    }
                    break;
                default: //未選択の場合
                    console.log("--文字");
                    alert('（3～9）の範囲で文字数を指定して下さい。');
                    break;
            } 
        } else {//先頭文字指定なし
            console.log("文字の指定")
            switch (letters) {
                case "3"://文字数3の場合
                    switch(~~(3 * Math.random())) {
                        //VCC
                        case 0:
                            var wordGen = VCC;
                            break;
                        //VvC
                        case 1:
                            var wordGen = VvC;
                            break;
                        //CVC
                        case 2:
                            var wordGen = CVC;
                            break;
                    }
                    break;
                case "4"://文字数4の場合
                    switch(~~(5 * Math.random())) {
                        //V・CVC
                        case 0:
                            var wordGen = V + CVC;
                            break;
                        //VvCC
                        case 1:
                            var wordGen = VvCC;
                            break;
                        //CVCC
                        case 2:
                            var wordGen = CVCC;
                            break;
                        //CCVC
                        case 3:
                            var wordGen = CCVC;
                            break;
                        //CVvC
                        case 4:
                            var wordGen = CVvC;
                            break;
                    }
                    break;
                case "5"://文字数5の場合
                    switch(~~(5 * Math.random())) {
                        //V・CVCC
                        case 0:
                            var wordGen = V + CVCC;
                            break;
                        //V・CCVC
                        case 1:
                            var wordGen = V + CCVC;
                            break;
                        //CV・CVC
                        case 2:
                            var wordGen = CV + CVC;
                            break;
                        //CVvCC
                        case 3:
                            var wordGen = CVvCC;
                            break;
                        //CCVvC
                        case 4:
                            var wordGen = CCVvC;
                            break;
                    }
                    break;
                case "6"://文字数6の場合
                    switch(~~(6 * Math.random())) {
                        //V・CV・CVC
                        case 0:
                            var wordGen = V + CV + CVC;
                            break;
                        //V・CVvCC
                        case 1:
                            var wordGen = V + CVvCC;
                            break;
                        //VvC・VCC
                        case 2:
                            var wordGen = VvC + VCC;
                            break;
                        //CV・CVCC
                        case 3:
                            var wordGen = CV + CVCC;
                            break;
                        //CV・CCVC
                        case 4:
                            var wordGen = CV + CCVC;
                            break;
                        //CCV・CVC
                        case 5:
                            var wordGen = CCV + CVC;
                            break;
                    }
                    break;
                case "7"://文字数7の場合
                    switch(~~(10 * Math.random())) {
                        //V・CV・CCVC
                        case 0:
                            var wordGen = V + CV + CCVC;
                            break;
                        //V・CV・CVCC
                        case 1:
                            var wordGen = V + CV + CVCC;
                            break;
                        //V・CCVvC
                        case 2:
                            var wordGen = V + CCVvC;
                            break;
                        //CV・CV・CVC
                        case 3:
                            var wordGen = CV1 + CV2 + CVC;
                            break;
                        //CV・CCVCC
                        case 4:
                            var wordGen = CV + CCVCC;
                            break;
                        //CV・CVvCC
                        case 5:
                            var wordGen = CV + CVvCC;
                            break;
                        //CCV・CVCC
                        case 6:
                            var wordGen = CCV + CVCC;
                            break;
                        //CCV・CCVC
                        case 7:
                            var wordGen = CCV + CVCC;
                            break;
                        //CCV・CVvC
                        case 8:
                            var wordGen = CCV + CVvC;
                            break;
                        //CCCV・CVC
                        case 9:
                            var wordGen = CCCV + CVC;
                            break;
                    }
                    break;
                case "8"://文字数8の場合
                    switch(~~(9 * Math.random())) {
                        //V・CV・CV・CVC
                        case 0:
                            var wordGen = V + CV1 + CV2 + CVC;
                            break;
                        //V・CVCC・VvC
                        case 1:
                            var wordGen = V + CVCC + VvC;
                            break;
                        //V・CCVvC・VC
                        case 2:
                            var wordGen = V + CCVvC + VC;
                            break;
                        //CV・CV・CVCC
                        case 3:
                            var wordGen = CV1 + CV2 + CVCC;
                            break;
                        //CV・CVC・VCC
                        case 4:
                            var wordGen = CV + CVC + VCC;
                            break;
                        //CCV・CVC・VC
                        case 5:
                            var wordGen = CCV + CVC + VC;
                            break;
                        //CCV・CVvCC
                        case 6:
                            var wordGen = CCV + CVvCC;
                            break;
                        //CCV・CCVvC
                        case 7:
                            var wordGen = CCV + CCVvC;
                            break;
                        //CCCV・CVCC
                        case 8:
                            var wordGen = CCCV + CVCC;
                            break;
                        //CCCV・CVvC
                        case 8:
                            var wordGen = CCCV + CVvC;
                            break;
                    }
                    break;
                case "9"://文字数9の場合
                    switch(~~(11 * Math.random())) {
                        //V・CV・CV・CVCC
                        case 0:
                            var wordGen = V + CV1 + CV2 + CVCC;
                            break;
                        //V・CV・CV・CCVC
                        case 1:
                            var wordGen = V + CV1 + CV2 + CCVC;
                            break;
                        //V・CVC・CV・CVC
                        case 2:
                            var wordGen = V + CVC + CV + CVC;
                            break;
                        //CV・CV・CV・CVC
                        case 3:
                            var wordGen = CV + CV1 + CV2 + CVC;
                            break;
                        //CV・CV・CCVvC
                        case 4:
                            var wordGen = CV1 + CV2 + CCVvC;
                            break;
                        //CV・CVv・CCVC
                        case 5:
                            var wordGen = CV + CVv + CCVC;
                            break;
                        //CCV・CV・CVCC
                        case 6:
                            var wordGen = CCV + CV + CVCC;
                            break;
                        //CCV・CCVC・VC
                        case 7:
                            var wordGen = CCV + CVCC + VC;
                            break;
                        //CCV・CVC + VC
                        case 8:
                            var wordGen = CCV + CVC + VC;
                            break;
                        //CCCV + CCVvC
                        case 9:
                            var wordGen = CCCV + CCVvC;
                            break;
                        //CCCV + CVvCC
                        case 10:
                            var wordGen = CCCV + CVvCC;
                            break;
                    }
                    break;
                default: //未選択の場合
                    console.log("--文字");
                    alert('（3～9）の範囲で文字数を指定して下さい。');
                    break;
            } 
        }
        //禁則文字の処理
        var wordGen = wordGen.replaceAll(new RegExp(('vu'), "g"), 'va'); //wu
        var wordGen = wordGen.replaceAll(new RegExp(('vy'), "g"), 'va'); //wy
        var wordGen = wordGen.replaceAll(new RegExp(('veu'), "g"), 'vau'); //wy
        var wordGen = wordGen.replaceAll(new RegExp(('vou'), "g"), 'vai'); //wy
        var wordGen = wordGen.replaceAll(new RegExp(('iw'), "g"), 'ev'); //iw
        var wordGen = wordGen.replaceAll(new RegExp(('īw'), "g"), 'ev'); //iw
        //頻出しない文字の処理

        //品詞
        if ($("#verb").prop("checked")) {
            var wordGen = wordGen + "u";
        } else if ($("#adj").prop("checked")){
            var wordGen = wordGen + "iki";
        } else if ($("#adv").prop("checked")){
            var wordGen = wordGen + "ite";
        } else {
            console.log('男性形');
        }
        //男性形、女性形、中性形
        if ($("#fem").prop("checked")) {
            var wordGen = wordGen + "a";
        } else if ($("#neu").prop("checked")){
            var wordGen = wordGen + "e";
        } else {
            console.log('男性形');
        }
        //接頭辞
        if ($("#la").prop("checked")) {
            var wordGen = "la" + wordGen;
        } else if ($("#vi").prop("checked")){
            var wordGen = "vi" + wordGen;
        } else if ($("#de").prop("checked")){
            var wordGen = "de" + wordGen;
        } else {
            console.log("接頭辞");
        }
        //接尾辞
        if ($("#evar").prop("checked")) {
            var wordGen = wordGen + "evar";
        } else if ($("#ia").prop("checked")){
            var wordGen = wordGen + "ia";
        } else if ($("#burg").prop("checked")){
            var wordGen = wordGen + "burg";
        } else if ($("#stan").prop("checked")){
            var wordGen = wordGen + "stan";
        } else {
            console.log('接尾辞');
        }
        console.log(wordGen);
        //ブラウザ上に表示
        document.getElementById('displayWord').textContent = wordGen; 
        //発音記号に変換する処理//
        var pronunc = wordGen;
        console.log(pronunc);
        for (let i = 0; i < pronuncReplacer.length; i++) { //配列のデータ数まで繰り返し、変換規則を実行させる
            //wordGenを配列pronuncReplacerに従って発音記号に変換
            var pronunc = pronunc.replace(new RegExp(pronuncReplacer[i][0], "g"), pronuncReplacer[i][1]);
        };                
        document.getElementById('symbolPronun').textContent = "/" + pronunc + "/";//最後に発音記号をブラウザ上に表示
    });
});