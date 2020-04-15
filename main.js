myList = $('#myButton');


myList.on('click', function(){
    $.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts', function(response){
        response.forEach(function(post){
            $('.listOne').val('');
            let li = $('<li></li>');
            let eachPost = li.append(JSON.stringify(post));
            console.log(eachPost);
            // eachPost.append($('.listOne'));
            $('.listOne').append(eachPost);

        })
    })
})