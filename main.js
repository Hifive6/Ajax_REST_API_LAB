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
let replacePost = $('#addButton6');

replacePost.on('click', function(){
    $.ajax({
        method: 'PUT',
        url: 'https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/comments/12',
        data: {
            postID: 55,
            id: 15,
            title: 'Replace the post',
            body: 'This is the post where the post with an id of 12 is not 15. I think I am doing this right.'
        }, 
        complete: function(response){
            console.log(response);
            let postedOject = response.responseText;
            console.log(postedOject);
            $('.listOne').empty();
                
                let li = $('<br><li></li>');
                let postedID = li.append(postedOject);
                console.log(postedID)
                // li.append(postedID);
                $('.listOne').append(postedID);
            // Object.keys(response).forEach(function(post){
            //     console.log(response[post].responseText)

            // })
            
        }
    })
})

//task 7
let updateID = $('#addButton7');

updateID.on('click', function(){
    $.ajax({
        method: 'PATCH',
        url: 'https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/comments/12',
        data: {
            name: 'Bob Smith is now the New Name'
        },
        complete: function(response){
            // console.log(typeof response)
            console.log(response.responseJSON.name);
            $('.listOne').empty();
            let updateName = response.responseJSON.name;
            let li = $('<br><li></li>');
            let postedID = li.append(updateName);
            console.log(postedID)
            
            $('.listOne').append(postedID);
        }
    })
})

// task8

let delete12 = $('#addButton8');

delete12.on('click', function(){
    $.ajax({
        method: 'DELETE',
        url: 'https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/comments/12',
        complete: function(response){
            console.log(response.statusText)
        }
    })
})

// task 9

let listOfPost = $('#addButton9');

listOfPost.on('click', function(){
    $.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts?id=1', function(response){
        // console.log(response);
        $('.listOne').empty();
        response.forEach(function(post){
            let li = $('<br><li></li>');
        // let postLink = $('<a></a>')
            let eachPost = li.append(JSON.stringify(post));
            // console.log(eachPost);
            // eachPost.append($('.listOne'));
            $('.listOne').append(eachPost);

            $('li').on('click', function(){
                $.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/comments', function(response){
                    console.log(response)
                    console.log(response[1].name);
                    $('.listOne').empty();
                    let p = $('<br><p></p>');
                    let eachComment = p.append(response[1].body);
                    $('.listOne').append(eachComment);
                    // console.log(eachComment);
                })
            })
        })

    })
})
