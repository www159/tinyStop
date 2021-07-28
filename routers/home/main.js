const router = require('express').Router()
const {getWeather, getNews, aqiMap} = require('../../utils/home/main')



router.get('/', async (req, res) => {//catch news
    let news = await getNews()
    /**
     * 根据session判断code
     */
    let weatherObj
    if(req.session.weatherCode){
        weatherObj = await getWeather(req.session.weatherCode)
    }
    else{
        weatherObj = await getWeather('101210810')
    }
    // console.log(weatherObj)
    let {weather, wind} = weatherObj.realtime
    let aqimap = aqiMap(weatherObj.pm25.aqi[0])
    res.render('homeBody/main', {
        id: 'main',
        news: news,
        weather: {
            area: weatherObj.area[2][0],
            temperature: weather.temperature,
            cloud: weather.info,
            aqi: aqimap.value,
            aqiColor: aqimap.color,
            windDirection: wind.direct,
            windRank: wind.power
        }
    })
})





router.get('/area-btn', (req, res) => {//show select
    res.render('homeBody/main/area-select', {
        area: req.session.weatherArea
    })
})



router.post('/area', async(req, res) => {
    let {code} = req.body
    // console.log(code)
    req.session.weatherCode = code
    // let weatherObj = await getWeather(code)
    console.log(weatherObj)
    req.session.weather = {
        province: weatherObj.area[0][0],
        city: weatherObj.area[1][0],
        county: weatherObj.area[2][0]
    }
    
    let {weather, wind} = weatherObj.realtime
    let aqimap = aqiMap(weatherObj.pm25.aqi[0])
    res.json({
        area: weatherObj.area[2][0],
        temperature: weather.temperature,
        cloud: weather.info,
        aqi: aqimap.value,
        aqiColor: aqimap.color,
        windDirection: wind.direct,
        windRank: wind.power
    })
})





module.exports = router