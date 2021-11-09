Bmob.initialize("0e24ccb1d5f8ad62", "123456");

window.onload = function () {//进入网页即加载表中数据

	const query = Bmob.Query("ep")//获取ep表，加载ep
	query.find().then(res => {
		var epx = "";//记得加上这个否则会出现undefined
		var i;
		for (i = 0; i < res.length; i++) {
			epx = epx+res[i].code;
		}
		getul = document.getElementsByTagName("ul")//定位<ul>元素位置
		defineul = getul[0]
		defineul.innerHTML = defineul.innerHTML+epx//向<ul>中添加表中添加<li>即eptab数据
///分割线////
		const query = Bmob.Query("epcontent")//获取epcontent表，加载epcontent
		query.find().then(res => {
		var epp=""
		var j=""
		for (j=0; j<res.length; j++) {
			epp=epp+res[j].code
		}
		getcontent = document.getElementsByClassName('tab-content')//定位tab-content类位置
		definetabcon = getcontent[0]
		definetabcon.innerHTML = definetabcon.innerHTML+epp//向tab-content类中添加tabpane数据
/////////分割线////////////////////////////////
		const query = Bmob.Query("row")//获取row表，加载row
		query.find().then(res => {

			var rowcon=""
			var k
			for (k= 0; k < res.length; k++) {
				rowcon = rowcon+res[k].row_code
			}
			getrow = document.getElementsByClassName('tab-pane')
			definerow = getrow[0]
			definerow.innerHTML = rowcon+definerow.innerHTML

		})


		})
	})
	/////////分割线////////////////////////////////
	
}
/////点击播放音频
function playaudio(i) {
	getaudio=document.querySelectorAll("audio");
	getaudio[i].play();

}
		    btns = document.querySelector("#sign");
			btnl = document.querySelector("#log");
			btno = document.querySelector("#logout");
			btnlg = document.querySelector('#logorsign');
			btnact = document.querySelector('#account');
			btnaddep = document.querySelector('#addep');
			fieldset = document.querySelector('.fieldset');

			btns.addEventListener("click", sign);
			btnl.addEventListener("click", log);
			btno.addEventListener("click", logout);

			console.log(fieldset);
			
			let current = Bmob.User.current();//获取登录信息，判断是否登录
			if (current==null) {
				btnact.style.display = "none";
				btnaddep.style.display = "none";
				btno.style.display = "none";
				fieldset.style.display = "none";
			} else {

				btnlg.style.display = "none";
			}


/////////////////////////////添加一行/////////////////////////
function addrow(params) {
		
		const query = Bmob.Query("row");//获取表，
		query.find().then(res => {

			lastrowm = res.length;
			lastrow = res.length+1;
			getoritxt=document.getElementById("origin").value;//获取文本框里的内容
			rownumber = lastrow + ".";
			getoritrans=document.getElementById("translate").value;

			var md4 = "<div class = \"row\">"
			var md9 ="<div class=\"col-md-12\">"
			var md10 ="<audio class = \"audio\" src=\"audio/ep1/"
			var md5 = ".wav\" id=\"myaudio"
			var ad ="\" controls=\"controls\" hidden=\"true\"></audio>"
			var md11 ="<button type=\"button\" class=\"btn btn-outline-secondary collapse-button\" data-toggle=\"collapse\" href=\"#collapse"
			var md6 = "\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapse"
			var md7 = "\" onclick=\"playaudio("
			var ad2 = ")\">"
			var md12 ="</button><div class=\"collapse\" id=\"collapse"
			var md8 = "\">"
			var md13 = "<div class=\"card card-body\">"
			var md14 = "</div></div></div></div><br>"
			var rowmodel = md4+md9+md10+lastrow+md5+lastrow+ad+md11+lastrow+md6+lastrow+md7+lastrowm+ad2+rownumber+getoritxt+md12+lastrow+md8+md13+getoritrans+md14//row模板
	
			getepnum = document.getElementsByClassName('tab-pane').length//通过获取当前tab的数量设置行内容的epnumber,所以要完成1集再开始下一集
			epnum = "ep"+getepnum
			gettab=document.getElementById(epnum)//通过ep1定位tab-pane的位置
			gettab.innerHTML=rowmodel+gettab.innerHTML//向tab-pane写入数据

			query.set("row_code", rowmodel)
			query.set("epnum", getepnum)
			query.set("rown_umber", lastrow)

			query.save().then(res => {

			window.location.reload(true)

		}).catch(err => {
			console.log(err)
		})
	
		})
	
	
}


//////////添加集数
function addepisode () {//向表中添加一行数据<li>
// 1. 获取ep表，通过.length获取最后一集的epnumber，
// 2. 建立<li>标签模板
// 3. 向表中添加数据
// 4. 将数据插入<ul>的标签中
	const query = Bmob.Query("ep")//获取ep表，
	query.find().then(res => {
		lastep = res.length+1//通过.length获取最后一集的集数epnumber+1
		lastepch = NumberToChinese(res.length+1)//数字转汉字

		var mx0 = "<li class=\"nav-item\" role=\"presentation\">"
		var mx1 = "<a class=\"nav-link\" id=\"eptab"
		var mx2 = "\" "
		var mx3 = "data-toggle=\"tab\" href=\"#ep"
		var mx4 = "role=\"tab\" "
		var mx5 ="aria-controls=\"ep"
		var mx6 = "aria-selected=\"true\">第"
		var mx7 = "集</a>"
		var mx8 = "</li>"
		var epmodel = mx0+mx1+lastep+mx2+mx3+lastep+mx2+mx4+mx5+lastep+mx2+mx6+lastepch+mx7+mx8//ep模板

		var md1 = "<div class=\"tab-pane fade\" id=\"ep"
		var md2 = "\" role=\"tabpanel\" aria-labelledby=\"eptab"
		var md3 = "\">"
		var md8 = "<fieldset class=\"fieldset\">"
		var md9 = "<legend>添加内容</legend>"
		var md10 = "<textarea id=\"origin\">原文</textarea> <textarea id=\"translate\">翻译/注释</textarea><br>"
		var md11 = "<button type=\"button\" class=\"btn btn-outline-secondary mb-2 mt-1\" onclick = \"addrow()\">添加一行</button>"
		var md12="</fieldset></div>"
		var contentmodel = md1+lastep+md2+lastep+md3+md8+md9+md10+md11+md12//epcontent模板

		
		
		
		const query = Bmob.Query("ep")
		query.set("code",epmodel)
		query.save().then(res => {
			
			getul = document.getElementsByTagName("ul")
			defineul = getul[0]
			defineul.innerHTML = defineul.innerHTML + epmodel// 向数据库ep添加一列数据
				
			const query = Bmob.Query('epcontent')
			query.set("code",contentmodel)
			query.save().then(res => {

				getcontent = document.getElementsByClassName('tab-content')
				definetabcon = getcontent[0]
				definetabcon.innerHTML = definetabcon.innerHTML+contentmodel// 向数据库epcontent添加一列数据
				
					}).catch(err => {
				console.log(err)
			})
					
		}).catch(err => {
			console.log(err)
		})
	})

}

//////////添加文本内容


		//阿拉伯数字转汉字
		var chnNumChar = ["零","一","二","三","四","五","六","七","八","九"];
		var chnUnitSection = ["","万","亿","万亿","亿亿"];
		var chnUnitChar = ["","十","百","千"];

		function SectionToChinese(section){
			var strIns = '', chnStr = '';
			var unitPos = 0;
			var zero = true;
			while(section > 0){
				var v = section % 10;
				if(v === 0){
					if(!zero){
						zero = true;
						chnStr = chnNumChar[v] + chnStr;
					}
				}else{
					zero = false;
					strIns = chnNumChar[v];
					strIns += chnUnitChar[unitPos];
					chnStr = strIns + chnStr;
				}
				unitPos++;
				section = Math.floor(section / 10);
			}
			return chnStr;
		}
		
		function NumberToChinese(num){  
			  var unitPos = 0;  
			  var strIns = '', chnStr = '';  
			  var needZero = false;     
			  if(num === 0){  
			    return chnNumChar[0];  
			  }     
			  while(num > 0){  
			    var section = num % 10000;  
			    if(needZero){  
			      chnStr = chnNumChar[0] + chnStr;  
			    }  
			    strIns = SectionToChinese(section);  
			    strIns += (section !== 0) ? chnUnitSection[unitPos] : chnUnitSection[0];  
			    chnStr = strIns + chnStr;  
			    needZero = (section < 1000) && (section > 0);  
			    num = Math.floor(num / 10000);  
			    unitPos++;  
			  }  
			  return chnStr;  
		}  
		// alert(NumberToChinese(123));

