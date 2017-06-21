var fs = require('fs')

var astate = function() {
    fs.stat('./read-test.txt', function(err, state) {
        if(err) {
            console.log(err)
        } else {
            console.log(`isFile: ${state.isFile()}`)
            if(state.isFile()) {
                console.log(`size: ${state.size}`)
                console.log(`createdAt: ${state.birthtime}`)
                console.log(`lastModifyAt: ${state.mtime}`)
            }
        }
    })
}

var nstate = function() {
    try {
        var state = fs.statSync('./read-test.txt')
        console.log(`isFile: ${state.isFile()}`)
        if(state.isFile()) {
            console.log(`size: ${state.size}`)
            console.log(`createdAt: ${state.birthtime}`)
            console.log(`lastModifyAt: ${state.mtime}`)
        }
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
  astate: astate,
  nstate: nstate,
}