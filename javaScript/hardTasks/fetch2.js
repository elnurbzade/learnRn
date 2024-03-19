async function greetWeather(cityName) {}
try{
    const response =await fetch('https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=YOUR_API_KEY&units=metric');
    const data = await response.json();
        console.log(`Şehir: ${data.name}`);
        console.log(`Sıcaklık: ${data.main.temp}°C`);
        console.log(`Hava Durumu: ${data.weather[0].description}`);
    } catch (error) {
        console.log("Hava durumu bilgileri alınamadı.", error);
    }
const cityName = console.log("Lütfen bir şehir adı giriniz:");
getWeather(cityName);
