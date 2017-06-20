var afs = function() {
    var fs = require('fs')
    fs.writeFile('./write-test.txt', 'write test', function (err) {
        if (err) {
            console.log(err)
        } else {
            console.log('success')
        }
    })
}


var nfs = function() {
    var fs = require('fs')
    try {
        fs.writeFileSync('./write-test.txt', 'write test1')
        console.log('success')
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
  afs: afs,
  nfs: nfs
}