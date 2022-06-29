let url = 'https://jsonplaceholder.typicode.com/photos'



fetch(url)
    .then(data => data.json())
    .then(data => {
        for(let i = 0; i<=20; i++){
            document.querySelector('.parent').innerHTML +=  `
                        <div>
                            <img src='${data[i].url}'>
                            <h1>${data[i].id}</h1>
                            <h2>${data[i].title}</h2>
                            <hr>
                        </div>` 
        }
        
    })
    .catch(err => console.log(err))
