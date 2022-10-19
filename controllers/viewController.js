const RESOURCE_PATH = '/fruits'

const viewController = {
    index(req, res, next){
        res.render('fruits/Index', res.locals.data)
    },
    newView(req, res, next){
        res.render('fruits/New')
    },
    edit(req, res, next){
        res.render('fruits/Edit', res.locals.data)
    },
    show(req, res, next){
        res.render('fruits/Show', res.locals.data)
    },
    redirectHome(req, res, next){
        res.redirect(RESOURCE_PATH)
    },
    redirectShow(req, res, next){
        const fruitID = req.params.id || res.locals.data.fruit._id //short curcuit 
        res.redirect(`${RESOURCE_PATH}/${fruitID}`)
    }

}

module.exports = viewController