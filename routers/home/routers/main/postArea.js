const{ getWeather, aqiMap } = require('../../../../utils/home/main')

module.exports = async(req, res) => {
    let {code} = req.body
    // console.log(code)
    req.session.weatherCode = code
    let weatherObj = await getWeather(code)
    // console.log(weatherObj)
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
}