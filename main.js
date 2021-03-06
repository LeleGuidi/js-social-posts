const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25",
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];


const container = document.querySelector("#container")
//Con il ciclo si prende ogni dato di ogni oggetto inserendolo nel tag/attributo interessato
for (let i = 0; i < posts.length; i++) {
    //Creo la variabile che prende il marckup HTML all'interno del tag template
    const tplPost = document.querySelector("#post_template").content.cloneNode(true)
    if (posts[i].author.image != null) {
        tplPost.querySelector(".post-meta__icon img").src = posts[i].author.image
        tplPost.querySelector(".post-meta__icon img").alt = posts[i].author.name
    } else {
        var image = posts[i].author.name
        var matches = image.match(/\b(\w)/g);
        var icon = matches.join('');
        tplPost.querySelector(".post-meta__icon img").alt = icon
    }
    tplPost.querySelector(".post-meta__data .post-meta__author").innerHTML = posts[i].author.name
    tplPost.querySelector(".post-meta__data .post-meta__time").innerHTML = posts[i].created
    tplPost.querySelector(".post__text").innerHTML = posts[i].content
    tplPost.querySelector(".post__image img").src = posts[i].media
    tplPost.querySelector(".likes__counter #like-counter-1").innerHTML = posts[i].likes
    container.append(tplPost)
}


//Creo un'array per inserire gli oggetti piaciuti
const likedPosts = [];
//Creo una variabile per l'elemento che verr?? cliccato per il "mi piace"
const likeBtn = document.querySelectorAll(".like-button")
const likeCounter = document.querySelectorAll(".js-likes-counter")
//Per ogni elemento "mi piace" presente vado ad aggiungere la funzione che rimanga in ascolto 
for (let i = 0; i < likeBtn.length; i++){
    likeBtn[i].addEventListener(`click`,
    function() {
        //Se il tasto ?? gi?? stato precedentemente cliccato allora:
        if (likeBtn[i].classList.contains("like-button--liked")) {
            //Viene rimosso la classe che attribuisce il colore verde al tasto
            likeBtn[i].classList.remove("like-button--liked")
            //Il contatore dei like viene decrementato di 1 sia nell'array che nel DOM
            posts[i].likes -= 1
            likeCounter[i].innerHTML = posts[i].likes
        //Se precedentemente non era stato messo mi piace allora: 
        } else {
            // L'id del post verr?? aggiunto nell'array dedicato
            likedPosts.push(posts[i].id)
            // Il tasto diventer?? verde
            likeBtn[i].classList.add("like-button--liked")
            // Il contatore dei mi piace aumenter?? di uno 
            posts[i].likes += 1
            likeCounter[i].innerHTML = posts[i].likes
        }
        
        
    }
)
}

