module.exports = (req, res) => {//show select
    res.render('homeBody/main/area-select', {
        area: req.session.weatherArea
    })
}