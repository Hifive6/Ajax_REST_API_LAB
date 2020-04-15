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
let getID = $('#addButton2');
// let hideID = $('#deleteList2');



getID.on('click', function(){
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

//task 4
let getID2 = $('#addButton4')

getID2.on('click', function(){
    $.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts?id=2', function(response){
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

//task 5
let createPost = $('#addButton5');

createPost.on('click', function(){
    $.post('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts', {
    // completed: false,
        userID: 15,
        id: 55,
        title: 'This is the Post',
        body: "This is the bestest post you have ever seen. I think this post may be my finest work. Wow what a thought. What a world, what a world, can't believe it"
    }, function(response){
        $('.listOne').empty();
        // console.log(response);
        let li = $('<br><li></li>');
        let postedID = li.append(JSON.stringify(response.id));
        console.log(postedID)
        // li.append(postedID);
        $('.listOne').append(postedID);

    })   
})

//task 6

