// router module

module.exports = {
    config: [
        { 
            route : '/',
            filename : 'index.html'
        }
    ],
    acceptedFileExt: ['html'],
    applyRoutes: (appRoutes, queries) => {
        var pageHTML = document.body.innerHTML
        var queryStr = ""
        if (queries) {
            queryStr = "?"
            for (let i in queries) {
                queryStr += `${i}=${queries[i]}&`
            }
            queryStr = queryStr.substr(0,queryStr.length - 1)
        }
        for(let n in appRoutes) {
            pageHTML = pageHTML.replace(`href="${appRoutes[n].route}"`,`href="${appRoutes[n].filename+appRoutes[n].query}${queryStr}"`)
//             console.log(pageHTML,` href="${appRoutes[n].route}"`,`href="${appRoutes[n].filename}${queryStr}"`)   
        }
        return document.body.innerHTML = pageHTML
    }
}