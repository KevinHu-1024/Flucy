var title = "--- The fuck must be the ugliest page I have writen, but it works."
var json = null;
var str ='';
var obj = {
    challenges: []
};
function a() {
    try {
        json = JSON.parse(source.value);
    } catch (error) {
        alert("JSON格式有误，请检查控制台错误信息");
        console.log(error);
        return
    }
    for(var i = 0; i < json.challenges.length; i++) {
        var cur = json.challenges[i];
        str += "<h4 style='color:green;text-decoration:underline'>" + (i+1) + "." + cur.title +"</h4>"
        obj.challenges.push({
            dis:[]
        })
        for (var j = 0; j < cur.description.length; j ++) {
            str += "<textarea rows='5'>"+cur.description[j]+"</textarea>";
            obj.challenges[i].dis.push(cur.description[j]);
        }
    }
    console.log(json);
    console.log(obj);
    translate.innerHTML = "<h3 style='color:red'>" + json.name +"</h3>" + "<a href='https://github.com/KevinHu-1024' style='text-align:right;font-size:12px;color:grey;text-decoration:none'>" + title + "</a>" + str;
}
function b() {
    var collection = translate.getElementsByTagName("textarea");
    var i = 0;
    // console.log(collection);
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
        console.log(cur);
    }
    console.log(json);
    source.value = JSON.stringify(json, null, 2);
}
// 提取tests中某项的message：
// /(?:\'message\:)(.+)(?:\))/gi.exec("assert((function(){var testCar = new Car(3,1,2); return testCar.wheels === 3 && testCar.seats === 1 && testCar.engines === 2;})(), 'message: Calling <code>new Car(3,1,2)</code> should produce an object with a <code>wheels</code> property of <code>3</code>, a <code>seats</code> property of <code>1</code>, and an <code>engines</code> property of <code>2</code>.');")[1]
