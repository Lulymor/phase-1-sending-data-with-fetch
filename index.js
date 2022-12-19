function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
            body: JSON.stringify({
                'name': name
                ,
                'email': email
            })
    })        .then(response => response.json())
    .then(submitData => document.body.append(submitData.id))
    .catch(error => document.body.append(error))
}






