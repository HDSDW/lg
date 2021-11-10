    Bmob.initialize("0e24ccb1d5f8ad62", "123456");

    
    btns = document.querySelector("#sign");
    btnl = document.querySelector("#log");
    btno = document.querySelector("#logout");
    btnlg = document.querySelector('#logorsign');
    btnact = document.querySelector('#account');
    btnaddep = document.querySelector('#addep');
    fieldset = document.querySelector('#ep1');

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

