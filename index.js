var title = "--- The fuck must be the ugliest page I have writen, but it works."
var json = null;
var str ='';
var obj = {
    challenges: []
};

String.prototype.markdown2Html = function markdown2Html() {
    var parten = {
        strong: {
            exp: /(?:\*\*)(.+?)(?:\*\*)/gi,
            html: [" <strong>", "</strong> "]
        },
        code: {
            exp: /(?:\`)(.+?)(?:\`)/gi,
            html: [" <code>", "</code> "]
        }
    }
    var result = this.toString();
    for (currentParten in parten) {
        if (parten.hasOwnProperty(currentParten)) {
            result = result.replace(parten[currentParten].exp, function () {
                console.log(arguments);
                return parten[currentParten].html[0] + arguments[1] + parten[currentParten].html[1];
            })
        }
    }
    return result
}
console.log("Flucy~ v0.1.5 @KevinHu-1024");
console.log("bug反馈地址：https://github.com/KevinHu-1024/Flucy/issues");
console.log("本工具来自FreeCodeCamp中文社区翻译组：https://github.com/huluoyang/freecodecamp.cn/wiki");
console.log("FreeCodeCamp中文社区:https://freecodecamp.cn");
function a() {
    if (translate.innerHTML != '') {
        var con = confirm("导入时会重置右侧内容!");
        if (!con) {
            return
        }
    }
    source.disabled = 'disabled';
    translate.innerHTML = '';
    json = null;
    str ='';
    obj = {
        challenges: []
    };
    try {
        json = JSON.parse(source.value);
    } catch (error) {
        alert("JSON格式有误，请检查控制台错误信息");
        console.log(error);
        return
    }
    var main = document.createElement('h3');
    main.innerHTML = json.name;
    main.style = "color:red;";
    translate.appendChild(main);
    var link = document.createElement('a');
    link.innerHTML = title;
    link.href = "https://github.com/KevinHu-1024/Flucy/releases/";
    link.style = "text-align:right;font-size:12px;color:grey;text-decoration:none;";
    translate.appendChild(link);
    var frg = document.createDocumentFragment();
    for(var i = 0; i < json.challenges.length; i++) {
        var cur = json.challenges[i];
        var ti = document.createElement('h4');
        ti.style = "color:green;text-decoration:underline";
        ti.innerHTML = (i+1) + "." + cur.title;
        frg.appendChild(ti);
        obj.challenges.push({
            dis:[],
            tes:[]
        })
        for (var j = 0; j < cur.description.length; j ++) {
            var tex = document.createElement('textarea');
            tex.value = cur.description[j];
            tex.className = "mainText";
            tex.rows = 5;
            frg.appendChild(tex);
            tex = null;
            obj.challenges[i].dis.push(cur.description[j]);
        }
        for (var n = 0; n < cur.tests.length; n++) {
            var tesTex = document.createElement('textarea');
            // console.log(n, cur.tests[n]);
            tesTex.value = /(?:\'message\:)(.+)(?:\'\))/gi.exec(cur.tests[n])[1];
            tesTex.className = "testsText";
            tesTex.rows = 5;
            frg.appendChild(tesTex);
            tesTex = null;
            obj.challenges[i].tes.push(cur.tests[n]);
        }
    }
    console.log(json);
    console.log(obj);
    translate.appendChild(frg);
}
function b() {
    if (source.value != '') {
        var con = confirm("导出时会重置左侧内容!");
        if (!con) {
            return
        }
    }
    source.value = '';
    var mainTextCollection = translate.getElementsByClassName("mainText");
    var testsTextCollection = translate.getElementsByClassName("testsText");
    var i = 0;
    var h = 0;
    for (var m = 0; m < obj.challenges.length; m++) {
        var tar = obj.challenges[m];
        for (var j = 0; j < tar.dis.length; j++) {
            tar.dis[j] = mainTextCollection[i].value.markdown2Html();
            i ++;
        }
        for (var n = 0; n < tar.tes.length; n++) {
            tar.tes[n] = testsTextCollection[h].value.markdown2Html() + "');";
            h ++;
        }
    }
    console.log(obj);
    for (var k = 0; k < obj.challenges.length; k++) {
        json.challenges[k].description = obj.challenges[k].dis;
        for (var t = 0; t < obj.challenges[k].tes.length; t++) {
            obj.challenges[k].tes[t] = /^(assert)(.+)(?:'message:)/gi.exec(json.challenges[k].tests[t])[0] + obj.challenges[k].tes[t];
            json.challenges[k].tests[t] = obj.challenges[k].tes[t];
        }
    }
    console.log(json);
    source.value = JSON.stringify(json, null, 2) + "\n";
}