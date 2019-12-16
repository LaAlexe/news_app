const logOut = document.querySelector('.js-logout');
const list = document.querySelector('.news');

logOut.addEventListener('click', () => {
    window.location.href = 'login.html'
});

(function() {

const popupWrapper = document.querySelector('.popup-wrapper');
const add = document.querySelector('.add');
const addForm = document.querySelector('.addForm');
const list = document.querySelector('.news');
const close = document.querySelector('.popup-close');
const btn = document.querySelector('.add__news');
const saveBtn = document.querySelector(".save");
    
//    console.log(saveBtn);
    
const logOut = document.querySelector('.js-logout');

let lastId = 0;

logOut.addEventListener('click', () => {
    window.location.href = 'login.html'
});



//console.log(btn);
//btn.addEventListener('click', ()=>{
//    popupWrapper.style.display = 'block';
//});
//close.addEventListener('click', ()=>{
//    popupWrapper.style.display = 'none';
//});


let newsList;




 function init() {

    if (!!(window.localStorage.getItem('allNews'))) {
      newsList = JSON.parse(window.localStorage.getItem('allNews'));
    } else {
      newsList= [];
    }
//    add.addEventListener('click', saveNews);
    showList();
  }

//
function showList() {
    if(!!newsList.length){
        getLastNewsId();
        for(let item in newsList) {
            let news = newsList[item];
            addNewsToList(news);
        }
    }
}

function saveNews(event) {
    let news= {
        id: lastId,
        title: document.querySelector('[name="addTitle"]').value,
        content: document.querySelector('[name="addContent"]').value
    }
    newsList.push(news);
    syncNews();
    addNewsToList(news);
            syncEvents();
        lastId++;
    
}
    
  
    
    

function addNewsToList(news) {
     const html =`
    <li id=${news.id}>
        <h2 class="title">${news.title}</h2>
        <p class="content">${news.content}</p>
    </li>
`;

    list.innerHTML += html;
    
}

function syncNews() {
    window.localStorage.setItem('allNews', JSON.stringify(newsList));
    newsList = JSON.parse(window.localStorage.getItem('allNews'));
}



function getLastNewsId() {
    let lastNews = newsList[newsList.length - 1];
    lastId = lastNews.id + 1;
}
 


init();


})();