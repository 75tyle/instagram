$(document).ready(function(){
    var datauser =localStorage.getItem('user')
     var d =$.parseJSON(datauser);
     console.log(d)
     $('.item_submit').click(function(event){
        event.preventDefault()
        var num = $('.input_user').val()
        var pass = $('.input_pass').val()
        console.log(d)
        if(num == d.number && pass == d.password){
            console.log('succes')
            window.location.href = "http://127.0.0.1:5500/dashboard.html?"
        }else{
            console.log("unsucces")
        }

     })
})