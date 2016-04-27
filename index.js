var title = "--- The fuck must be the ugliest page I have writen, but it works."
var json = null;
var str ='';
var obj = {
    challenges: []
};
console.log("Flucy~ v0.1.4 @KevinHu-1024");
console.log("bug反馈地址：https://github.com/KevinHu-1024/Flucy/issues");
console.log("本工具来自FreeCodeCamp中文社区翻译组：https://github.com/huluoyang/freecodecamp.cn/wiki");
console.log("FreeCodeCamp中文社区:https://freecodecamp.cn");
function a() {
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
            dis:[]
        })
        for (var j = 0; j < cur.description.length; j ++) {
            var tex = document.createElement('textarea');
            tex.value = cur.description[j];
            tex.rows = 5;
            frg.appendChild(tex);
            tex = null;
            obj.challenges[i].dis.push(cur.description[j]);
        }
    }
    console.log(json);
    console.log(obj);
    translate.appendChild(frg);
}
function b() {
    var collection = translate.getElementsByTagName("textarea");
    var i = 0;
    for (var m = 0; m < obj.challenges.length; m++) {
        var tar = obj.challenges[m];
        for (var j = 0; j < tar.dis.length; j++) {
            tar.dis[j] = collection[i].value;
            i ++;
        }
    }
    console.log(obj);
    for (var k = 0; k < obj.challenges.length; k++) {
        json.challenges[k].description = obj.challenges[k].dis;
    }
    console.log(json);
    source.value = JSON.stringify(json, null, 2);
}
// 提取tests中某项的message：
// /(?:\'message\:)(.+)(?:\))/gi.exec("assert((function(){var testCar = new Car(3,1,2); return testCar.wheels === 3 && testCar.seats === 1 && testCar.engines === 2;})(), 'message: Calling <code>new Car(3,1,2)</code> should produce an object with a <code>wheels</code> property of <code>3</code>, a <code>seats</code> property of <code>1</code>, and an <code>engines</code> property of <code>2</code>.');")[1]
