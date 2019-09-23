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
        $('#profile').html(`
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="">
                <div class="card-body">
                <h5 class="card-title">${user.name}</h5>
                <div class="row">
                    <div class="col-md-3">
                        <img style="width:15rem" src="${user.avatar_url}" class="thumbnail">
                    </div>
                    <div class="col-md-9">
                    
                    </div>
                </div>
                </div>
            </div>
        `);
       });
   })
});