
const conetent  = document.querySelector(".content");



const url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY"
const url2 = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=DEMO_KEY"
const url3 = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=DEMO_KEY"


window.addEventListener("load",async()=>{
 await api();
});
const  api=async()=>{
  const response = await fetch(url)
  const data = await response.json()
  const datag = data.photos;

 datag.filter((value) => {
  const camera=value.camera.full_name;
  const img=value.img_src;
  const date = value.earth_date;
  const box = document.createElement("div");
  box.setAttribute("class","box");
  box.innerHTML = `<img src=${img} alt="${camera}" id="img">
                    <p>Data: ${date}></p><p>  ${camera}</p>`;
  conetent.append(box) ;
  });    
};

const imgspace= document.querySelector("#img")



