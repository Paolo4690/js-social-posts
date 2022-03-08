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
        "created": "2021-06-25"
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
const idLikePosts = []

const container = document.getElementById('container');

invertData()


// CICLO CHE MI CREA TUTTI I POST IN BASE AGLI ELEMENTI DELL'ARRAY FRAMITE FUNZIONE
for (let i = 0; i < posts.length; i++) {
    createPost (posts[i].id, posts[i].content, posts[i].media, posts[i].author.name, posts[i].author.image, posts[i].likes, posts[i].created)
};

imgNull()
// CICLO CHE METTE IN ASCOLTO TUTTI GLI ELEMENTI CON UNA CLASSE SPECIFICA
const btnLike = document.querySelectorAll('.js-like-button')
for (i = 0; i < btnLike.length; i++) {
    btnLike[i].addEventListener('click', liked)
    
    
}







// FUNZIONE CHE MI METTE E RIMUOVE AD OGNI CLICK IL COLORE TRAMITE UNA CLASSE
function liked() {
    this.classList.toggle('like-button--liked');
    

    // console.log(data-postid)


    // let counterLikes = document.querySelector('.js-likes-counter')

    //     counterLikes.innerHTML = posts[i].likes++
    //     console.log(parseInt(posts[i].likes))
}

// FUNZIONE CHE MI CREA POST IN BASE AGLI ARGOMENTI INSERITI
function createPost(id, content, media, authorName, imageProfile, likes, date) {
    const post = `
    <div class="post">
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    <img class="profile-pic" src="${imageProfile}" alt="${authorName}">                    
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${authorName}</div>
                    <div class="post-meta__time">${date}</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">${content}</div>
        <div class="post__image">
            <img src="${media}" alt="">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" href="#post-${id}" data-postid="${id}">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-${id}" class="js-likes-counter">${likes}</b> persone
                </div>
            </div> 
        </div>            
    </div>
`;
container.innerHTML += post;
}

// FUNZIONE CHE INVERTE LE DATE DA (aaaa-mm-gg) A (gg-mm-aaaa)
function invertData () {
    for (i = 0;i < posts.length; i++) {
    let created = posts[i].created
    created = created[8] + created[9] + created[7] + created[5] + created[6] + created[4] + created[0] + created[1] + created[2] + created[3];
    posts[i].created = created
    }
}

function imgNull () {
    let eleImgAuthor = document.querySelectorAll('.post-meta__icon')
    for (i = 0; i < posts.length; i++) {
        
        if (posts[i].author.image == null){
            eleImgAuthor[i].innerHTML = posts[i].author.name[0] + posts[i].author.name[5]
        }
    }
}
