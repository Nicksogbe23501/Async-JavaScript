//Async Code in Action
console.log(1);
console.log(2);

setTimeout(() => {
    console.log('callback function fired');
}, 2000);



//Making HTTP Requests (XHR) & Response Status

const requeat = new XMLHttpRequest();

requestAnimationFrame.addEventListener('readystatechanage', () => {
    if(requestAnimationFrame.readyState === 4){
        console.log(request, requst.responseText);
    } else if(request.readyState === 4){
        console.log('could not fetch the data');
    }
});

request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
request.send();


//Response Statusm - Chaining Promises
const getTodos = (callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        if(request.readyState === 4 && request.status === 200){
            const data = JSON.parse(request.responseText);
            callback(undefined, data);
         } else if(request.readyState === 4){
                callback('could not fetch data', undefined);
            }
        });
    request.open('GET', 'https//jsonplaceholder.typicode.com/todos/');
    request.send();
};

const getSomething = () => {

    return new Promise((resolve, reject) => {
        resolve('some data');
    });

};

getSomething().then((data) => {
    console.log(data);
}, (err) => {
    console.log(err);
});

getTodos('todos/luigi.json', (err,data) => {
    console.log('promise 1 resolved:', data);
    return getTodos('todos/mario.json');
}).then(data => {
    console.log('promise 2 resolved:', data);
    return getTodos('todos/shaun.json');
}).then(data ).catch(err => {
    console.log('promise rejected:', err);
});


// the fetch api


fetch('todos/lugi.json').then((respons) => {
    console.log('resolved', response);
    return response .json();
}).then(data => {
    console.log(data);
}).catch((err) => {
    console.log('rejected', err);
});


