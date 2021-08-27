function addrow(params) {

        a=document.getElementById("origin").value
        b=document.getElementById("translate").value
	
        lastep = 2
        var md4 = "<div class = \"row shangbianju\"><div class=\"col-md-12 d-flex\">"
        var md5 = "<button onclick=\"autoPlay()\" type=\"button\" class=\"btn btn-outline-secondary collapse-button\" data-toggle=\"collapse\" href=\"#collapse"
        var md6 = "\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapse"
        var md7 = "\">"
        var md9="</button><div class=\"collapse\" id=\"collapse"
        var md8 = "\"><div class=\"card card-body\">"
        var md10="</div></div></div></div><br>"
        var rowmodel = md4+md5+lastep+md6+lastep+md7+a+md9+lastep+md8+b+md10//row模板


        getepnum = document.getElementsByClassName('tab-pane').length
        epnum = "ep"+getepnum
        gettab=document.getElementById(epnum)
        gettab.innerHTML=gettab.innerHTML+rowmodel

}

function test() {

        a=document.getElementById("origin").value
        b=document.getElementById("translate").value
        console.log(a+b);
        window.location.reload(true)
        
}

