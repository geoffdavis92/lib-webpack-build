// math module

module.exports = {
    round: (n=0,c=1) => Math.round(n/c)*c,
    max: (...series) => {
        let max = 0
        for (let i=0;i<series.length;i++) {
            if (series[i] > max) {
                max = series[i]
            }
        }
        return max
    },
    min: (...series) => {
        let min
        for (let i=0;i<series.length;i++) {
            if (!min || series[i] < min) {
                min = series[i]
            }
        }
        return min
    },
    diff: (n1,n2,err) => {
        if (err) throw `diff() only takes two arguments; extra arg "${err}"`
        if (!err && n1 < n2) return n2 - n1
        else return n1 - n2
    }
}