const textfieldKey=document.getElementById("input_key");
const imgSearch=document.getElementById("search-button");
const imgDisplay=document.getElementById("image-display");
access_key="uUFdZXkvrQDFak4-chDYhBhIdCEPVQhr_oG-509I3Kc"

let page=1;
let keyword="";
async function imageSearch()
{
    const keyword=textfieldKey.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${access_key}`;
    const response= await fetch(url);
    const data=await response.json();
    console.log(data)
}
    imgSearch.addEventListener("click",(e)=>{
        e.preventDefault();
        page=1;
        imageSearch();
    })
