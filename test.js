// Bmob.initialize("0e24ccb1d5f8ad62", "123456");

var epc = "<div class=\"tab-pane fade show active\" id=\"ep2\" role=\"tabpanel\" aria-labelledby=\"eptab2\"><div class = \"row shangbianju\"><div class=\"col-md-12 d-flex\"><audio src=\"audio/2.wav\" id=\"myaudio\" controls=\"controls\" hidden=\"true\"></audio><button onclick=\"autoPlay()\" type=\"button\" class=\"btn btn-outline-secondary\" data-toggle=\"collapse\" href=\"#collapse2\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapse2\"></button><div class=\"collapse\" id=\"collapse2\"><div class=\"card card-body\"></div></div></div></div><br><fieldset><legend>添加内容</legend><textarea id=\"origin2\">原文</textarea><textarea id=\"translate2\">翻译/注释</textarea><br><button type=\"button\" class=\"btn btn-outline-secondary\" id=\"btn2\">添加</button></fieldset></div>"

var tabc = document.getElementsByClassName('tab-content')
var def = tabc[0];
function test() {
    
console.log(def.innerHTML);
def.innerHTML= def.innerHTML+epc
    
}