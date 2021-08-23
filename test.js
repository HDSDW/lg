// Bmob.initialize("0e24ccb1d5f8ad62", "123456");

var epc = "<div class=\"tab-pane fade show active\" id=\"ep2\" role=\"tabpanel\" aria-labelledby=\"eptab2\"><div class = \"row shangbianju\"><div class=\"col-md-12 d-flex\"><audio src=\"audio/2.wav\" id=\"myaudio\" controls=\"controls\" hidden=\"true\"></audio><button onclick=\"autoPlay()\" type=\"button\" class=\"btn btn-outline-secondary\" data-toggle=\"collapse\" href=\"#collapse2\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapse2\"></button><div class=\"collapse\" id=\"collapse2\"><div class=\"card card-body\"></div></div></div></div><br><fieldset><legend>添加内容</legend><textarea id=\"origin2\">原文</textarea><textarea id=\"translate2\">翻译/注释</textarea><br><button type=\"button\" class=\"btn btn-outline-secondary\" id=\"btn2\">添加</button></fieldset></div>"

var tabc = document.getElementsByClassName('tab-content')
var def = tabc[0];
function test(params) {

    getoritxt=document.getElementById("origin")
    getoritrans=document.getElementById("translate")

    getcontent = document.getElementsByClassName('collapse-button')//定位tab-content类位置
    definetabcon = getcontent[0]
    // definetabcon.innerHTML = definetabcon.innerHTML+epp//向tab-content类中数据
    // console.log(definetabcon.innerHTML);
    var te= "sssssssssssss"
    definetabcon.innerHTML= definetabcon.innerHTML+getoritxt.value

    getcontent2 = document.getElementsByClassName('collapse-body')
    definetabcon2 = getcontent2[0]
    
    definetabcon2.innerHTML= definetabcon2.innerHTML+getoritrans.value

    getoritxt=document.getElementById("origin").value
    getoritrans=document.getElementById("translate").value

    console.log(getoritxt);
    


    
}

function addcontent(params) {


        getoritxt=document.getElementById("origin")
        getoritrans=document.getElementById("translate")



}