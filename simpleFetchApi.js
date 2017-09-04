require("isomorphic-fetch");
fetch('http://localhost:8080/todos', {
    method: "GET",
    headers: new Headers({
        "Content-Type": "application/json",
        "Accept": "application/json"
    })
}).then(res => {
    return res.json();
}).then(data => {
    console.log('this is data: ', data)
});


fetch('http://localhost:8080/todos', {
    headers: new Headers({
        "Content-Type": "application/json",
        "Accept": "application/json"
    }),
    method: "POST",
    body: JSON.stringify({
        "text": "zhangpei",
        "status": 0,
        "id": 1000,
        "available": 0
    })
}).then(res => {
    return res.json();
}).then(data => {
    console.log('this is data: ', data);
});