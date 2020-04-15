//Excercise number 1

//Task 1
myList = $('#myButton');
deleteBtn = $('#deleteList');

deleteBtn.on('click', function(){
    $('.listOne').empty();
});

myList.on('click', function(){
    $.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts', function(response){
        $('.listOne').empty();
        response.forEach(function(post){
            // $('.listOne').val('');
            let li = $('<br><li></li>');
            let eachPost = li.append(JSON.stringify(post));
            // console.log(eachPost);
            // eachPost.append($('.listOne'));
            $('.listOne').append(eachPost);

        })
    })
});

//Task 2
let postID = $('#addButton2');
// let hideID = $('#deleteList2');



postID.on('click', function(){
    $.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts?id=10', function(response){
        $('.listOne').empty();
        // console.log(response);
        let li = $('<br><li></li>');
        let userID = li.append(JSON.stringify(response));
        // console.log(userID);
        $('.listOne').append(userID);
    })
})

//task 3
let commentID12 = $('#addButton3');

commentID12.on('click', function(){
    $.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/comments?id=12', function(response){
        $('.listOne').empty();
        response.forEach(function(post){
            // $('.listOne').val('');
            let li = $('<br><li></li>');
            let eachPost = li.append(JSON.stringify(post));
            // console.log(eachPost);
            // eachPost.append($('.listOne'));
            $('.listOne').append(eachPost);

        })
    })
})
