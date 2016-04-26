var title = "--- The fuck must be the ugliest page I have writen, but it works."
function a() {
    var json = JSON.parse(source.value);
    var str ='';
    var obj = {
        challenges: []
    };
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
    
}