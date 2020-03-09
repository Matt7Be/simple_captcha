function Captcha(){
    var alphanumeric  = new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
        'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
        '0','1','2','3','4','5','6','7','8','9');
    var i;
    for (i=0;i<5;i++){
        var a = alphanumeric [Math.floor(Math.random() * alphanumeric .length)];
        var b = alphanumeric [Math.floor(Math.random() * alphanumeric .length)];
        var c = alphanumeric [Math.floor(Math.random() * alphanumeric .length)];
        var d = alphanumeric [Math.floor(Math.random() * alphanumeric .length)];
        var e = alphanumeric [Math.floor(Math.random() * alphanumeric .length)];
        var f = alphanumeric [Math.floor(Math.random() * alphanumeric .length)];
    }
    var code = a + ' ' + b + ' ' + ' ' + c + ' ' + d + ' ' + e + ' '+ f ;
    document.getElementById("mainCaptcha").innerHTML = code
    document.getElementById("mainCaptcha").value = code
}


function ValidCaptcha(){
    var string1 = removeSpaces(document.getElementById('mainCaptcha').value);
    var string2 = removeSpaces(document.getElementById('txtInput').value);


    if (string1 === string2){
        window.location.href = "https://demo-v2.energylab.net/";
    }else{
        document.getElementById("wrongMessage").innerHTML = "Your code was does not match!!";
        Captcha();

    }
 }
function removeSpaces(string){
    return string.split(' ').join('');
}

