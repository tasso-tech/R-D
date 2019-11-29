let activate1 = document.getElementById("activate1");
let activate2 = document.getElementById("activate2");
let activate3 = document.getElementById("activate3");
activate1.addEventListener("click", getWeather1);
activate2.addEventListener("click", getWeather2);
activate3.addEventListener("click", getWeather3);
let result = document.getElementById('result');

let apiAdress = "http://weerlive.nl/api/json-data-10min.php?key=";
let key = "demo";
let locatie = "&locatie=";
let geoLocation = "Amsterdam"

let url = apiAdress + key + locatie + geoLocation;

function getWeather1()
{
    console.log(url);
    makeAjaxCall(url, "GET"). then (showWeather1, errorHandler);
}
function showWeather1(JSONreponseFromAjax){
    result.innerHTML = JSONreponseFromAjax;
}

function getWeather2()
{
    console.log(url);
    makeAjaxCall(url, "GET"). then (showWeather2, errorHandler);
}
function showWeather2(JSONreponseFromAjax)
{
    let weatherObject = JSON.parse(JSONreponseFromAjax);
    let completeData = "";
    for(const [key, value] of Object.entries(weatherObject.liveweer[0]))
    {
        console.log(`${key}: ${value}`);
        completeData += key + " : " + value + "<br>";
        result.innerHTML = completeData;
    }
}

function getWeather3()
{
    makeAjaxCall(url, "GET"). then (showWeather3, errorHandler);
}
function showWeather3(JSONreponseFromAjax)
{
    let image = new Image();
    let weatherObject = JSON.parse(JSONreponseFromAjax);
    let dezeWeergave = "Uw locatie: " + weatherObject.liveweer[0].plaats + "<br>temperatuur: " + weatherObject.liveweer[0].temp + "<br>verwachting: "+ weatherObject.liveweer[0].verw + "<br>Samenvatting: " + weatherObject.liveweer[0].samenv;
    image.src = weatherObject.liveweer[0].image + ".png";
     

    result.innerHTML = dezeWeergave + " <img src="+image.src+">"; // schrijf naar html
}