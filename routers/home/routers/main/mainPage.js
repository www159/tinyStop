const {getWeather, getNews, aqiMap} = require('../../../../utils/home/main')

module.exports = async (req, res) => {//catch news
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
}