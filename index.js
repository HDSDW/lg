Bmob.initialize("0e24ccb1d5f8ad62", "123456");

window.onload = function () {//进入网页即加载表中数据

	const query = Bmob.Query("ep3")//获取ep表，加载ep1,2,3
	query.find().then(res => {
		var epx = "";//记得加上这个否则会出现undefined
		var i;
		for (i = 0; i < res.length; i++) {
			epx = epx+res[i].code;
		}
		getul = document.getElementsByTagName("ul")//定位<ul>元素位置
		defineul = getul[0]
		defineul.innerHTML = defineul.innerHTML+epx//向<ul>中添加表中数据

		const query = Bmob.Query("ep_content3")
		query.find().then(res => {
			console.log(res);
			
			var epp=""
			var j=""
			for (j=0; j<res.length; j++) {
				epp=epp+res[j].code
			}
			getcontent = document.getElementsByClassName('tab-content')
			definetabcon = getcontent[0]
			definetabcon.innerHTML = definetabcon.innerHTML+epp
			
		})
	})
	

		

}

function autoPlay() {
	var myAuto = document.getElementById('myaudio');
	myAuto.play();    
}
function addepisode () {//向表中添加一行数据<li>
// 1. 获取ep表，通过.length获取最后一集的epnumber，
// 2. 建立<li>标签模板
// 3. 向表中添加数据
// 4. 将数据插入<ul>的标签中
	const query = Bmob.Query("ep3")//获取ep表，
	query.find().then(res => {
		lastep = res.length+1//通过.length获取最后一集的集数epnumber+1
		lastepch = NumberToChinese(res.length+1)
		qq = res[res.length-1]//获取最后一行数据
		getId = qq.objectId

		var mx0 = "<li class=\"nav-item\" role=\"presentation\">"
		var mx1 = "<a class=\"nav-link active\" id=\"eptab"
		var mx2 = "\" "
		var mx3 = "data-toggle=\"tab\" href=\"#ep"
		var mx4 = "role=\"tab\" "
		var mx5 ="aria-controls=\"ep"
		var mx6 = "aria-selected=\"true\">第"
		var mx7 = "集</a>"
		var mx8 = "</li>"
		var epmodel = mx0+mx1+lastep+mx2+mx3+lastep+mx2+mx4+mx5+lastep+mx2+mx6+lastepch+mx7+mx8//ep模板
		// console.log(epmodel);

	// 	<div class="tab-pane fade show active" id="ep1" role="tabpanel" aria-labelledby="eptab1">
    //     <!--一行内容-->
    //     <div class = "row shangbianju">
    //       <div class="col-md-12 d-flex">
    //         <!--用collapse创建折叠-->
    //         <audio src="audio/1.wav" id="myaudio" controls="controls" hidden="true"></audio>
    //         <button onclick="autoPlay()" type="button" class="btn btn-outline-secondary " 
    //                 data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">どうしたの　ゆうこ</button>
    //         <div class="collapse" id="collapseExample">
    //             <div class="card card-body">
    //               怎么了 佑子
    //             </div>
    //         </div>
    //     </div>
    //     </div>

    //     <br>
    //     <fieldset>
    //       <legend font-size="10em">添加内容</legend>
          
    //       <textarea name="origin" id="origin">原文</textarea>
    //       <textarea name="translate" id="translate">翻译/注释</textarea>
    //       <br>
    //       <buttontype="button" class="btn btn-outline-secondary">添加</button>
    //     </fieldset>
    //   </div>

		var md1 = "<div class=\"tab-pane fade show active\" id=\"ep"
		var md2 = "\" role=\"tabpanel\" aria-labelledby=\"eptab"
		var md3 = "\"><div class = \"row shangbianju\"><div class=\"col-md-12 d-flex\"><audio src=\"audio/"
		var md4 = ".wav\" id=\"myaudio\" controls=\"controls\" hidden=\"true\"></audio><button onclick=\"autoPlay()\" type=\"button\" class=\"btn btn-outline-secondary \" data-toggle=\"collapse\" href=\"#collapse"
		var md5 = "\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapse"
		var md6 = "\"></button><div class=\"collapse\" id=\"collapse"
		var md7 = "\"><div class=\"card card-body\"> </div></div></div></div><br><fieldset><legend>添加内容</legend><textarea id=\"origin"
		var md8 = "\">原文</textarea> <textarea id=\"translate"
		var md9 = "\">翻译/注释</textarea><br><button type=\"button\" class=\"btn btn-outline-secondary\" id=\"btn"
		var md10 = "\">添加</button></fieldset></div>"
		var contentmodel = md1+lastep+md2+lastep+md3+lastep+md4+lastep+md5+lastep+md6+lastep+md7+lastep+md8+lastep+md9+lastep+md10
		
		// 向数据库ep添加一列数据
		const query = Bmob.Query("ep3")
		query.set("code",epmodel)
		query.save().then(res => {
			
			getul = document.getElementsByTagName("ul")
			defineul = getul[0]
			// console.log(res)
			defineul.innerHTML = defineul.innerHTML + epmodel
				// 向数据库ep_content添加一列数据
				const query = Bmob.Query('ep_content2')
				query.set("code",contentmodel)
				query.save().then(res => {
					getcontent = document.getElementsByClassName('tab-content')
					definetabcon = getcontent[0]
					definetabcon.innerHTML = definetabcon.innerHTML+contentmodel
						}).catch(err => {
					console.log(err)
				})
					
		}).catch(err => {
			console.log(err)
		})
	})
	// 点击按钮向数据库添加一列数据
	// const query = Bmob.Query('ep')
	// query.set("code","tag_name")
	// query.set("zzz","ssssssss")

	// query.save().then(res => {
  	// 	console.log(res)
	// 		}).catch(err => {
  	// 	console.log(err)
	// })

	//获取一行记录


	// const query = Bmob.Query('ep');
	// query.get('Ip0h666n').then(res => {
	// 	console.log(res.code)
	// 	getul = document.getElementsByTagName("ul")
	// 	getli = document.getElementsByTagName("li")

	// 	console.log(getul.length);
	// 	console.log(getli.length);

	// 	defineul = getul[0]
	// 	console.log(defineul.innerHTML);
	// 	defineul.innerHTML = defineul.innerHTML + res.code

		

		
	// 	}).catch(err => {
	// 		console.log(err)
	// 			})
	
				


}

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

