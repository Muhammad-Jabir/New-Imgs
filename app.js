let btn = document.querySelector('button');
let img = document.querySelector('img');

let url = "https://dog.ceo/api/breeds/image/random";

btn.addEventListener('click', async ()=>{
    let facts = await dogImg();
    console.log(facts);
    img.setAttribute('src', facts);
});

async function dogImg() {
    try{
    let req = await axios.get(url);
    return req.data.message;
    }catch{
        return '404 Image not found..';
    }
}