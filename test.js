Bmob.initialize("0e24ccb1d5f8ad62", "123456");

window.onload = function() {

    btns = document.querySelector("#sign");
    btnl = document.querySelector("#log");
    btno = document.querySelector("#logout");
    btnlg = document.querySelector('#logorsign');
    btnact = document.querySelector('#account');

    btns.addEventListener("click", sign);
    btnl.addEventListener("click", log);
    btno.addEventListener("click", logout);

    let current = Bmob.User.current();//获取登录信息，判断是否登录
    if (current==null) {
        btnact.style.display = "none";
    } else {

        btnlg.style.display = "none";
    }
};

function sign() {//注册

    namevalue = document.querySelector("#name").value;
    passvalue = document.querySelector("#password").value;


    let params = {
        username: namevalue,
        password: passvalue,
    };
    Bmob.User.register(params).then(res => {
        console.log(res);
        alert("注册成功，点击登录即可")
    }).catch(err => {
        console.log(err)
    });

};

function log(params) {//登录
    
    namevalue = document.querySelector("#name").value;
    passvalue = document.querySelector("#password").value;

    Bmob.User.login(namevalue,passvalue).then(res => {
        console.log(res)
        window.location.reload(true);
    }).catch(err => {
        console.log(err)
    });

}

function logout(){//退出登录
    
    Bmob.User.logout();
    window.location.reload(true);
};