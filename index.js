var title = "--- The fuck must be the ugliest page I have writen, but it works."
var json = null;
var str ='';
var obj = {
    challenges: []
};
function a() {
    json = JSON.parse(source.value);
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
        var cur = obj.challenges[k];
        json.challenges[k].description = cur;
    }
    console.log(json);
    source.value = JSON.stringify(json, null, 2);
}
