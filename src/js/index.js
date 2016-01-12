// index.js

// Modules
    var math = require('./modules/math')
    var url = require('./modules/url')
    var router = require('./modules/router')
    var rConfig = require('./modules/router').config

// Logic
    console.log(url.path(), ' ', url.domain(), ' ', url.pageType())
    console.log(math.max(1,2,3,4))
    console.log(math.min(4,3,2,1))
    console.log(math.diff(50,202))
    
    router.applyRoutes([
        {
            route: '/',
            filename: 'index.html',
            query: '?token=0ao3jr8923hf'
        }
    ])