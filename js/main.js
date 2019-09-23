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
        // Show profile info
        $('#profile').html(`
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="">
                <div class="card-body">
                <h5 class="card-title">${user.name}</h5>
                <div class="row">
                    <div class="col-md-3">
                        <img style="width:15rem" src="${user.avatar_url}" class="thumbnail">
                        <a target="_blank" class="btn btn-primary" href="${user.html_url}">Show Profile<a/>
                    </div>
                    <div class="col-md-9">
                    <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                    <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                    <span class="badge badge-success">Followers: ${user.followers}</span>
                    <span class="badge badge-danger">Following: ${user.following}</span>
                    <br/><br/>
                    </div>
                </div>
                </div>
            </div>
        `);
       });
   })
});