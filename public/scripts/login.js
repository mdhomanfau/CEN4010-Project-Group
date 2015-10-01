function Login(){
    console.log("attempting to log in");
    var user = document.getElementById('login').value;
    var pass = document.getElementById('passwd').value;

    var data = {
        id: user,
        username: user,
        password: pass
    };

    xhrPut('api/users', data, function(){
        console.log('logged in: ', data);
    }, function(err){
        console.error(err);
    });
}