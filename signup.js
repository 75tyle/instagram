$(document).ready(function(){
var check_name = false
var check_email = false
var check_number = false
var check_pass = false

var email;
var fullname;
var number;
var password;

$('.input_fullname').keyup(function(){
    fullname = $('.input_fullname').val()
    console.log(fullname)
    if(fullname.length>4){
        check_name = true
        $('.input_fullname').css('border', '2px solid green')
    }else{
        $('.input_fullname').css('border', '2px solid red')  
    }
})

$('.input_number').keyup(function(){
    number = $('.input_number').val()
    
    if(number.length >=10 && number.length < 12){
        console.log(number)
        check_number =true
        $('.input_number').css('border', '2px solid green')
    }else{
        $('.input_number').css('border', '2px solid red')
    }
})

$('.input_email').keyup(function(){
    email = $('.input_email').val()

    if(IsEmail(email)){
    console.log(email)
    check_email = true
    $('.input_email').css('border', '2px solid green')
    }else{
        $('.input_email').css('border', '2px solid red')
    }
})

$('.input_pass').keyup(function(){
    password = $('.input_pass').val()

    if(password.length >=8){
     check_pass = true
     $('.input_pass').css('border', '2px solid green')
    }else{
        $('.input_pass').css('border', '2px solid red')
    }
})

function IsEmail(email) {
    var regex =
/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!regex.test(email)) {
        return false;
    }
    else {
        return true;
    }}
    
    
     

     $('.item_submit').click(function(event){
        event.preventDefault()
        var vali = valid()
        if(vali){
            var data = {
                fullname:fullname,
                email:email,
                number:number,
                password:password
            }

            var json = JSON.stringify(data)
            console.log(json)
            localStorage.setItem('user',json)

            window.location.href = "http://127.0.0.1:5500/login.html"
        }
    })
        function valid(){
            if(check_name && check_email && check_number && check_pass){
                return true;
    
            }else{
              return false;
            }
        
        }

   
})

