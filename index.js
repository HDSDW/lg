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
		defineul.innerHTML = defineul.innerHTML+epx//向<ul>中添加表中数据
///分割线////
		const query = Bmob.Query("epcontent")//获取ep_content表，加载ep_content
		query.find().then(res => {
		var epp=""
		var j=""
		for (j=0; j<res.length; j++) {
			epp=epp+res[j].code
		}
		getcontent = document.getElementsByClassName('tab-content')//定位tab-content类位置
		definetabcon = getcontent[0]
		definetabcon.innerHTML = definetabcon.innerHTML+epp//向tab-content类中数据
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
			// console.log(res)

		})


////分割线///
	// 	const query = Bmob.Query("txt")//获取第一集每行原文内容
	// 	query.find().then(res => {

	// 	getoritxt = document.getElementsByClassName('collapse-button')//获取原文字内容的位置
	// 	defineoritxt = getoritxt[0]
	// 	gettrans = document.getElementsByClassName('card')//获取翻译内容的位置
	// 	definetrans = gettrans[0]

	// 	var as = res[0].oritext
	// 	var bs = res[0].translation
	// 	var txtep = res[0].epnum
	// 	console.log(bs)
		
	// 	definetrans.innerHTML= definetrans.innerHTML+bs///写入内容
	// 	defineoritxt.innerHTML= defineoritxt.innerHTML+as

	// 	function addtxt(params) {

	// 		getoritxt=document.getElementById("origin").value
	// 		getoritrans=document.getElementById("translate").value
		
	// 		const query = Bmob.Query('txt');
	// 		query.set("translation",getoritrans)
	// 		query.set("oritext",getoritxt)
	// 		query.set("epnum",)
	// 		query.save().then(res => {
	// 			console.log(res)
	// 		}).catch(err => {
	// 			console.log(err)
	// 		})
		
		
			
	// 	}
		
		
	// })
		})
	})

	
}

function autoPlay() {
	var myAuto = document.getElementById('myaudio');
	myAuto.play();    
}
////添加一行
function addrow(params) {
		
		const query = Bmob.Query("row")//获取表，
		query.find().then(res => {

			lastep = res.length+1
			var md4 = "<div class = \"row shangbianju\"><div class=\"col-md-12 d-flex\"><audio src=\"audio/"
			var md5 = ".wav\" id=\"myaudio\" controls=\"controls\" hidden=\"true\"></audio><button onclick=\"autoPlay()\" type=\"button\" class=\"btn btn-outline-secondary collapse-button\" data-toggle=\"collapse\" href=\"#collapse"
			var md6 = "\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapse"
			var md7 = "\"></button><div class=\"collapse\" id=\"collapse"
			var md8 = "\"><div class=\"card card-body\"> </div></div></div></div><br>"
			var rowmodel = md4+lastep+md5+lastep+md6+lastep+md7+lastep+md8//row模板
	
			getepnum = document.getElementsByClassName('tab-pane').length//通过获取当前tab的数量设置行内容的epnumber,所以要完成1集再开始下一集
			epnum = "ep"+getepnum
			gettab=document.getElementById(epnum)
			gettab.innerHTML=rowmodel+gettab.innerHTML


			
			query.set("row_code", rowmodel)
			query.set("epnum", epnum)

			query.save().then(res => {
	
	
		}).catch(err => {
			console.log(err)
		})
	
		})
	
	
}
function test(params) {
	
	addrowbt=document.getElementsByClassName('tab-pane').length
	
	console.log(addrowbt);

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
		var md12 ="<button id=\"addrow"
		var md13 ="\" onclick = \"addrow()\" class=\"btn btn-outline-secondary mb-1\">添加一行</button>"
		var md8 = "<fieldset><legend>添加内容</legend><textarea id=\"origin"
		var md9 = "\">原文</textarea> <textarea id=\"translate"
		var md10 = "\">翻译/注释</textarea><br><button type=\"button\" class=\"btn btn-outline-secondary\" id=\"btn"
		var md11 = "\">添加</button></fieldset></div>"
		var contentmodel = md1+lastep+md2+lastep+md3+md12+lastep+md13+md8+lastep+md9+lastep+md10+lastep+md11//ep_content模板

		
		
		
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
				definetabcon.innerHTML = definetabcon.innerHTML+contentmodel// 向数据库ep_content添加一列数据
				
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

