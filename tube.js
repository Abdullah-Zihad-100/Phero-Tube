const  lordData= async (allCard=1000)=>{
    const res=await fetch(`https://openapi.programming-hero.com/api/videos/category/${allCard}`)
    const dataAll=await res.json();
    const data=dataAll.data;
    displayData(data)
}



 const displayData=(data)=>{
     const CardContainer=document.getElementById('card-container');
                 CardContainer.innerHTML="";

    data.forEach(card => {
        const verifiedBadge=card.authors[0].verified ? '<i class="ri-verified-badge-fill text-blue-500"></i>' :'';

const date = card.others.posted_date ? `${secondsToHms(card.others.posted_date)}` : '';



        const cardDiv=document.createElement('div');
        cardDiv.classList='card card-compact m-3';
        cardDiv.innerHTML=`<figure><img src="${card.thumbnail}" alt="Thumbnail" class="w-full h-48 object-cover">
        <div> <span id="date-span" class="absolute bg-gray-800 text-white text-[11px] py-1 px-2 rounded right-1 bottom-[117px]">
    ${date} </span></div>
            </figure>
            <div class="card-body">

               <div class="flex items-center gap-3 -ms-2">
            <div class="avatar">
                <div class="w-8 h-8 rounded-full">
                    <img src=${card.authors[0].profile_picture}/>
                </div>
            </div>
                <h4 class="text-[16px] font-bold">${card.title}</h4>
               </div>
              <div class="ms-10">
               <div class="grid grid-flow-col gap-2 justify-start items-center">
                <p>${card.authors[0].profile_name}</p>  ${verifiedBadge}
               </div>
                <p id="view-count">${card.others.views} views</p>
              </div>
            </div>`;

            if(!card.others.posted_date){
               const span= cardDiv.querySelector('#date-span');
               span.classList.remove('bg-gray-800')
            }
            CardContainer.appendChild(cardDiv);


    });
}





lordData()



const openBlog=()=>{
    window.open("blog.html")
}



const allBtnClick=()=>{
    const allCard=1000;
    lordData(allCard);


    const allBtn=document.getElementById('all-btn');
    allBtn.classList.add('bg-red-600');
    allBtn.classList.add('text-white');


    const musicBtn=document.getElementById('music-btn');
        musicBtn.classList.remove('bg-red-600');
    musicBtn.classList.remove('text-white');
    const comedyBtn=document.getElementById('comedy-btn');
        comedyBtn.classList.remove('bg-red-600');
    comedyBtn.classList.remove('text-white');

    const drawingBtn=document.getElementById('drawing-btn');
        drawingBtn.classList.remove('bg-red-600');
    drawingBtn.classList.remove('text-white');

}
const musicBtnClick=()=>{
    const allCard=1001;
    lordData(allCard);


    const musicBtn=document.getElementById('music-btn');
    musicBtn.classList.add('bg-red-600');
    musicBtn.classList.add('text-white');


    const allBtn=document.getElementById('all-btn');
        allBtn.classList.remove('bg-red-600');
    allBtn.classList.remove('text-white');
    const comedyBtn=document.getElementById('comedy-btn');
        comedyBtn.classList.remove('bg-red-600');
    comedyBtn.classList.remove('text-white');

    const drawingBtn=document.getElementById('drawing-btn');
        drawingBtn.classList.remove('bg-red-600');
    drawingBtn.classList.remove('text-white');
}


const comedyBtnClick=async()=>{
    const allCard=1002;
    const data=await lordData(allCard);
    console.log(data)

        const comedyBtn=document.getElementById('comedy-btn');
    comedyBtn.classList.add('bg-red-600');
    comedyBtn.classList.add('text-white');


    const musicBtn=document.getElementById('music-btn');
        musicBtn.classList.remove('bg-red-600');
    musicBtn.classList.remove('text-white');

    const allBtn=document.getElementById('all-btn');
        allBtn.classList.remove('bg-red-600');
    allBtn.classList.remove('text-white');

    const drawingBtn=document.getElementById('drawing-btn');
        drawingBtn.classList.remove('bg-red-600');
    drawingBtn.classList.remove('text-white');
}


const drawingBtnClick=()=>{


    
    const drawingBtn=document.getElementById('drawing-btn');
    drawingBtn.classList.add('bg-red-600');
    drawingBtn.classList.add('text-white');


    const allBtn=document.getElementById('all-btn');
        allBtn.classList.remove('bg-red-600');
    allBtn.classList.remove('text-white');


    const comedyBtn=document.getElementById('comedy-btn');
        comedyBtn.classList.remove('bg-red-600');
    comedyBtn.classList.remove('text-white');


    const musicBtn=document.getElementById('music-btn');
        musicBtn.classList.remove('bg-red-600');
    musicBtn.classList.remove('text-white');


    const allCard=1003;
    lordData(allCard);
}


function secondsToHms(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    // var s = Math.floor(d % 3600 % 60);

    var hDisplay = h > 0 ?    h + (h == 1 ? " hr, " : " hrs, ") : "";
    var mDisplay = m > 0 ?    m + (m == 1 ? " min, " : " min ") : "";
    // var sDisplay = s > 0 ?    s + (s == 1 ? " second" : " seconds") : "";
    return hDisplay + mDisplay + "ago"; 
}


const sortByView = () => {
  const cards = Array.from(document.querySelectorAll(".card"));
  cards.sort((a, b) => {
    const viewA = parseFloat(
      a.querySelector("#view-count").textContent
    );
    const viewB = parseFloat(
      b.querySelector("#view-count").textContent
    );
    return viewB - viewA;
  });

  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  cards.forEach((card) => {
    cardContainer.appendChild(card);
  });
};

document
  .getElementById("sort-by-view-btn")
  .addEventListener("click", function () {
    sortByView();
  });
