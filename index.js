Bmob.initialize("0e24ccb1d5f8ad62", "123456");

window.onload = function () {
	//获取默认表

	// const query = Bmob.Query('default');
	// query.get('0975ea3fc5').then(res => {
	// 	console.log(res.code)
	// 	document.write(res.code)
	// 	}).catch(err => {
	// 		console.log(err)
	// 			})


	
        // <a class="nav-link active" id="eptab1" data-toggle="tab" href="#ep1" role="tab" aria-controls="ep1" aria-selected="true">第一集</a>
    
}

function addepisode () {

	
		
	
	

	const query = Bmob.Query("ep");//获取ep表，
	query.find().then(res => {
		lastep = res.length+1//通过.length获取最后一集的集数epnumber
		qq = res[0]
		console.log(qq)
		var mx1 = "<a class=\"nav-link active\" id=\"eptab"
		var mx2 = "\" "
		var mx3 = "data-toggle=\"tab\" href=\"#ep"
		var mx4 = "role=\"tab\" "
		var mx5 ="aria-controls=\"ep"
		var mx6 = "aria-selected=\"true\">第"
		var mx7 = "集</a>"
		console.log(mx1+lastep+mx2+mx3+lastep+mx2+mx4+mx5+lastep+mx2+mx6+lastep+mx7)




		
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