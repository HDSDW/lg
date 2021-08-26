function addrow(params) {
		
        lastep = 2
        var md4 = "<div class = \"row shangbianju\"><div class=\"col-md-12 d-flex\"><audio src=\"audio/"
        var md5 = ".wav\" id=\"myaudio\" controls=\"controls\" hidden=\"true\"></audio><button onclick=\"autoPlay()\" type=\"button\" class=\"btn btn-outline-secondary collapse-button\" data-toggle=\"collapse\" href=\"#collapse"
        var md6 = "\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapse"
        var md7 = "\">222</button><div class=\"collapse\" id=\"collapse"
        var md8 = "\"><div class=\"card card-body\">222</div></div></div></div><br>"
        var rowmodel = md4+lastep+md5+lastep+md6+lastep+md7+lastep+md8//row模板

        getepnum = document.getElementsByClassName('tab-pane').length
        epnum = "ep"+getepnum
        gettab=document.getElementById(epnum)
        gettab.innerHTML=gettab.innerHTML+rowmodel

}
