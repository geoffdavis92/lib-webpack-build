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
    var now = new Date()
    now = now.toString().replace(/\s/g,'-').split(':')[0]
    router.applyRoutes([
        {
            route: '/',
            filename: 'index.html'
        },
        {
            route: '/about',
            filename: 'about.html',
            query: `?camp=educate&refer=${url.domain()}`
        },
        {
            route: '/contact',
            filename: 'contact.php',
            query: `?&camp=educate&refer=${url.domain()}&time=${now}`
        }
    ])