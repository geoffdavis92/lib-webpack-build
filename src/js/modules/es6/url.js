// url module

module.exports = {
    path: () => { return (window.location.href).toString() },
    domain: () => {
        if (window.location.href.indexOf('https') >= 0 ) {
            return window.location.href.split(/https:\/\//)[1].split('/')[1]
        } else {
            return window.location.href.split(/http:\/\//)[1].split('/')[1]
        }
    },
    pageType: () => { return window.location.href.split(/:\/\//)[1].split('/')[1].split('.')[1] },
    get: (url,ctx=true) => {
        if (ctx) {
            window.open(`${url}`,'_self')   
        } else {
            window.open(`http://${url}`,'_self')
        }
    }
}