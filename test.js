Bmob.initialize("0e24ccb1d5f8ad62", "123456");

window.onload = function () {

};

function signup() {

    let params = {
        username: 'bmob2018',
        password: 'bmob2018',
        email: 'bmob2018@bmob.cn',
        phone: '13711166567',
    };
    Bmob.User.register(params).then(res => {
      console.log(res)
    }).catch(err => {
     console.log(err)
    });

};
btns=document.querySelector("#signup");
btns.addEventListener("click", signup);
console.log(btns);

