
Bmob.initialize("0e24ccb1d5f8ad62", "123456");

// //注册
// function reggister() {

// 	let params = {
// 		username: document.getElementById("username").value,
// 		password: document.getElementById("password").value,
		
// 	}

// 	Bmob.User.register(params).then(res => {
// 			console.log(res)
// 		}).catch(err => {
// 		console.log(err)
// 			})
// }

// //登录
// function loggin() {
// 	var objectId
// 	Bmob.User.login(document.getElementById("username").value, 
// 					document.getElementById("password").value).then(res => {
// 		console.log(res)
// 		//保存用户
// 		Bmob.User.updateStorage(res.objectId).then(res => {
// 			console.log(res)
// 			console.log('保存用户成功')
// 		  }).catch(err => {
// 		   console.log(err)
// 		 });
	
// 	  }).catch(err => {
// 	   console.log(err)
// 	 });	
// }

//新增一行记录
// function add() {
// 	var aa = document.getElementById("11").value;
// 	const query = Bmob.Query('test1');
// 	query.set("code_name","text")
// 	query.set("code",aa)

// 	query.save().then(res => {
//   		console.log(res)
// 			}).catch(err => {
//   		console.log(err)
// 	})

// }

// //获取一行记录
// function add2() {

// 	const query = Bmob.Query('test1');
// 	query.get('0975ea3fc5').then(res => {
// 		console.log(res.code)
// 		document.write(res.code)
// 		}).catch(err => {
// 			console.log(err)
// 				})
	
				
// }


// //修改记录
// function change() {

// 		const query = Bmob.Query('test1');
// 		query.set('id', '0975ea3fc5') //需要修改的objectId
// 		query.set('code', '这不是一段文本')
// 		query.save().then(res => {
// 				console.log(res)
// 				}).catch(err => {
// 				console.log(err)
// 		})
// }
	

// function test2() {

// 	const query = Bmob.Query('test1');
// 	query.get('0975ea3fc5').then(res => {
// 		console.log(res.code)
// 		var h = document.getElementById("a")
// 		h.getAttributeNode("style").value = res.code
// 		}).catch(err => {
// 			console.log(err)
// 				})
	
				
// }