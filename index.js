Bmob.initialize("0e24ccb1d5f8ad62", "123456");

window.onload = function () {


}

function addepisode () {

	const query = Bmob.Query('ep')
	query.set("text","id")
	query.set("zzz","ssssssss")

	query.save().then(res => {
  		console.log(res)
			}).catch(err => {
  		console.log(err)
	})


}