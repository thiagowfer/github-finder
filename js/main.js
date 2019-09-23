$().ready(function() {
   $('#searchUser').on('keyup', function(e){
       let username = e.target.value;

       // Make request to github
       $.ajax({
           url: 'https://api.github.com/users/' + username,
           data: {
               client_id: '34ea6e924809745ff2f9',
               client_secret: 'b56d8f2265dabc804c854cc73770ff43c769f32c'
           }
       }).done(function(user){
        console.log(user);
       });
   })
});