const textfieldKey=document.getElementById("input_key");
const imgSearch=document.getElementById("search-button");
const imgDisplay=document.getElementById("image-display");
const moreButton=document.getElementById("moreButton")
access_key="uUFdZXkvrQDFak4-chDYhBhIdCEPVQhr_oG-509I3Kc";

let page=1;
let keyword="";
async function imageSearch()
{
    const keyword=textfieldKey.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${access_key}&per_page=20`;
    const response= await fetch(url);
    const data=await response.json();
    localStorage.setItem("localData",JSON.stringify(data));
    if(page===1)
    {
        document.getElementById("image-display").innerHTML="";
    }
    let localData = JSON.parse(localStorage.getItem("localData"));
    const results=localData.results;
     results.map((result)=>{
        const image=document.createElement("img");
        image.src=result.urls.small;
        image.classList.add("img-container");
        const imglink=document.createElement("a");
        imglink.href=result.links.html;
        imglink.target="_blank"
        imglink.appendChild(image);
        imgDisplay.appendChild(imglink);
        moreButton.style.display="block";
     })
}
    imgSearch.addEventListener("click",(e)=>{
        e.preventDefault();
        page=1;
        imageSearch();
    })
    moreButton.addEventListener("click",()=>{
        page++;
        console.log(page);
        imageSearch();
    })
//
window.addEventListener('load', function () {
    const localData = JSON.parse(localStorage.getItem("localData"));
    if (localData) {
        if(page===1)
        {
            document.getElementById("image-display").innerHTML="";
        }
        let localData = JSON.parse(localStorage.getItem("localData"));
        const results=localData.results;
         results.map((result)=>{
            const image=document.createElement("img");
            image.src=result.urls.small;
            image.classList.add("img-container");
            const imglink=document.createElement("a");
            imglink.href=result.links.html;
            imglink.target="_blank"
            imglink.appendChild(image);
            imgDisplay.appendChild(imglink);
            moreButton.style.display="block";
         })
    }
});