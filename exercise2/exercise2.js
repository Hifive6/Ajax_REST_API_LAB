function testNumber(number){
    promise = new Promise(function(resolve, reject){
        if(number > 50){
            resolve(number + ' is great than 50, success')
        } else {
            reject(number + ' error')
        }
    })
    return promise
}

testNumber(30)
.then(function(result){
    console.log(result);
})
.catch(function(error){
    console.log(error)
})