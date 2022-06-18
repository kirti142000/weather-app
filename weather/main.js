let form = document.querySelector("form");
let input = document.querySelector("input");
let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");
let img = document.querySelector("img");
let p =document.querySelector("p");
let weatherget = document.querySelector(".container");



form.addEventListener("submit" , searchdata)

 async function searchdata(e){
    e.preventDefault()
    let res= await fetch(`https://api.weatherapi.com/v1/current.json?key=cbe27d4fe369465498e81703221606&q=${input.value}&aqi=`);
    let data=await res.json()
   
      
      if(!data.error===false)
      {
        window.alert("Enter the correct city name")
      }
      else{
        let temperature = data.current.temp_c;
        let cityname = data.location.name;
        let weatherdescription =  data.current.condition.text;
        let icons = data.current.condition.icon;
        


        h1.innerText = `${temperature}°C`;
        h2.innerText = cityname;
        p.innerText = weatherdescription;
        img.setAttribute("src" , icons);
      
 

     if(temperature > 30){
          weatherget.style.background = "linear-gradient(to right, #355c7d, #6c5b7b, #c06c84)"
      }else if(temperature > 20){
          weatherget.style.background = "linear-gradient(to right, #3c3b3f, #605c3c)"
      }else{
        weatherget.style.background = "linear-gradient(to right, #200122, #6f0000)"
      }

      console.log(weatherget)
      form.reset();
    }  
  }