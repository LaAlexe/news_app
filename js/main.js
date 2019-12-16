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
btn.addEventListener('click', ()=>{
    popupWrapper.style.display = 'block';
});
close.addEventListener('click', ()=>{
    popupWrapper.style.display = 'none';
});


let newsList;




 function init() {

    if (!!(window.localStorage.getItem('allNews'))) {
      newsList = JSON.parse(window.localStorage.getItem('allNews'));
    } else {
      newsList= [];
    }
    add.addEventListener('click', saveNews);
    showList();
  }


function showList() {
    if(!!newsList.length){
        getLastNewsId();
        for(let item in newsList) {
            let news = newsList[item];
            addNewsToList(news);
        }
        syncEvents();
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
        <i class="fas fa-edit edit_news"></i>
        <i class="far fa-trash-alt delete"></i>
    </li>
`;
//    
//         
////         console.log(newsArray);
    list.innerHTML += html;
    
}

function syncNews() {
    window.localStorage.setItem('allNews', JSON.stringify(newsList));
    newsList = JSON.parse(window.localStorage.getItem('allNews'));
}

//function syncEvents() {
//    
//}

function getLastNewsId() {
    let lastNews = newsList[newsList.length - 1];
    lastId = lastNews.id + 1;
}



    list.addEventListener('click', updateNews);
    
//    saveBtn.addEventListener('click', updateNews);
    
    
      function updateNews(e) {
        e.preventDefault();
          if(e.target.classList.contains('edit_news')){
            const newsTag = e.target.parentElement;
            const newsUpdateId = newsTag.id;
    
            popupWrapper.style.display = 'block';
            add.style.display ='none';
            saveBtn.style.display = 'block';
            
          newsList.forEach(function(value, i) {
                
            if (value.id == newsUpdateId) {
                document.querySelector('[name="addTitle"]').value = newsList[i].title;
                document.querySelector('[name="addContent"]').value = newsList[i].content;
                document.querySelector('[name="id"]').value = newsList[i].id;
                
            }
                
              
        });
            
      
}
      };
    saveBtn.addEventListener('click', () => {
        const title = document.querySelector('[name="addTitle"]').value;
        const content = document.querySelector('[name="addContent"]').value;
        const id = document.querySelector('[name="id"]').value;
        
         newsList.forEach(function(value, i) {
                
            if (value.id == id) {
                newsList[i].title = title;
                newsList[i].content = content;
            }
             syncNews();
//             location.reload();
             
             list.innerHTML += html;
    });
    });
    
    
     function syncEvents() {

    updateIcon = document.getElementsByClassName("edit_news");
    removeIcon = document.getElementsByClassName("delete");
    if (!!removeIcon.length) {
      for (var i = 0; i < removeIcon.length; i++) {
        removeIcon[i].addEventListener('click', deleteNews);
      }
    }
    if (!!updateIcon.length) {
      for (var j = 0; j < updateIcon.length; j++) {
        updateIcon[j].addEventListener('click', updateNews);
      }
    }
  }
          
          
          
//          
//          const newsTag = event.target.parentElement;
//            const newsUpdateId = newsTag.id;
//    let news= {
//        id: newsUpdateId,
//        title: document.querySelector('[name="addTitle"]').value,
//        content: document.querySelector('[name="addContent"]').value
//    }
//    
//    deleteNews();
//    newsList.push(news);
//    syncNews();
//    addNewsToList(news);
    

    




//
//
//function deleteNews() {

        
    
        
        
list.addEventListener('click', updateNews);
function deleteNews(e) {
    if(e.target.classList.contains('delete')){
            const newsToRemove = e.target.parentElement;
            const newsId = newsToRemove.id;
            
            
         
            list.removeChild(newsToRemove);
            
            newsList.forEach(function(value, i) {

            if (value.id == newsId) {
            newsList.splice(i, 1);
      }
    })
    }
    syncNews();
}


//deleteNews();

init();
//localStorage.clear();

})();