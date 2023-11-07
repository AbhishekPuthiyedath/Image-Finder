// const textfieldKey=document.getElementById("input_key");
// Save input value to local storage when input changes
const textfieldKey = document.getElementById('input_key');
textfieldKey.addEventListener('input', () => {
  localStorage.setItem('inputValue', textfieldKey.value);
});

// Retrieve and set the input value on page load
const savedValue = localStorage.getItem('inputValue');
if (savedValue) {
    textfieldKey.value = savedValue;
}

const imgSearch=document.getElementById("search-button");
const imgDisplay=document.getElementById("image-display");
const moreButton=document.getElementById("moreButton")
access_key="uUFdZXkvrQDFak4-chDYhBhIdCEPVQhr_oG-509I3Kc";
//////////////////
let page=1;
let keyword="";
async function imageSearch()
{
    const keyword=textfieldKey.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${access_key}&per_page=20`;
    const response= await fetch(url);
    const data=await response.json();
    localStorage.setItem("localData",JSON.stringify(data));
    displayImg();
}
////////////////
function displayImg()
{
    if(page===1)
    {
        document.getElementById("image-display").innerHTML="";
    }
    let localData = JSON.parse(localStorage.getItem("localData"));
    const results=localData.results;
    if(results&&results.length>0)
     {   
        document.getElementById("no-image-display").innerHTML ="";
        document.getElementById("no-image-display").style.paddingTop="0px";
     results.map((result)=>{
        console.log(result.id);
        const image=document.createElement("img");
        image.src=result.urls.small;
        image.classList.add("img-container");
        const imglink=document.createElement("a");
        imglink.href=result.links.html;
        imglink.target="_blank"
        imglink.appendChild(image);
        imgDisplay.appendChild(imglink);
     })
     document.getElementById("moreButton").style.display = "block";
    }
    else
    {
        document.getElementById("no-image-display").innerHTML = "No Related Images Found!";
        document.getElementById("no-image-display").style.paddingTop="100px";
        document.getElementById("moreButton").style.display = "none";
        
    }
}
/////////////////
    imgSearch.addEventListener("click",(e)=>{
        e.preventDefault();
        page=1;
        imageSearch();
    })
    moreButton.addEventListener("click",()=>{
        page++;
        imageSearch();
    })
//////////////////
window.addEventListener('load', function () {
    const localData = JSON.parse(localStorage.getItem("localData"));
    
    if (localData) {
        displayImg();
        
    }
});
window.onload = function() {
    var elementToClear = document.getElementById("no-image-display");

    // Clear the content by setting innerHTML or textContent to an empty string
    elementToClear.innerHTML = ""; // OR elementToClear.textContent = "";
};
