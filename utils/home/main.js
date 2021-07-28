const superagent = require('superagent')
const cheerio = require('cheerio')
const jsonp = require('superagent-jsonp')

/**
 * get news list
 * @param {object} node 
 * @returns {[object]}
 */
 async function getNews(){//getTittle，img， herf
    let node
    try{
        node = await superagent.get('https://top.baidu.com/board')
    }
    catch(e){
        console.log(e)
    }
    let news = []
    let $ = cheerio.load(node.text)
    $('.item-wrap_2oCLZ').each(function(){
        if(news.length > 4){
            return
        }
        let subOne = $(this).find('.active-item_1Em2h')
        let tittle = subOne.find('.c-single-text-ellipsis').text()
        // let hot = subOne.find('.hot-score_1f2_w').text()
        let href = $(this).attr('href')
        let imgSrc = subOne.find('img').attr('src')
        news.push({
            tittle,
            // hot,
            href,
            imgSrc
        })
    })
    return news
}




/**
 * get weather async
 * @param {String} code area weather code
 * @returns a unpended promise
 */
async function getWeather(code) {
    let node
    try{
        node = await superagent.get('https://cdn.weather.hao.360.cn/sed_api_weather_info.php')
                               .use(jsonp({
                                    callbackName: `__jsonp${Math.floor(Math.random()*10+2)}__`
                                }))
                                .query({
                                    code: code,
                                    app: 'hao360'
                                })
    }
    catch(e){
        console.log(e)
    }
    return JSON.parse(node.text.slice(10, -2))
}

function aqiMap(aqi){
    if(aqi > 300) return {
        value: '严重污染',
        color: '#BBA344'
    }
    if(aqi > 200) return {
        value: '重度污染',
        color: '#7422AA'
    }

    if(aqi > 150) return{
        value: '中度污染',
        color: '#C60707'
    }
    if(aqi > 100) return{
        value: '轻度污染',
        color: '#FFA722'
    }
    if(aqi > 50) return{
        value: '良',
        color: '#FFFF22'
    }
    return {
        value: '优',
        color: '#4EFF22'
    }
}

module.exports = {getWeather, getNews, aqiMap}