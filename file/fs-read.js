var afs = function() {
    var fs = require('fs')
    fs.readFile('./read-test.txt', 'utf-8', function (err, data) {
        if (err) {
            console.log(err)
        } else {
            console.log(data)
        }
    })
}


var nfs = function() {
    var fs = require('fs')
    try {
        var fileContent = fs.readFileSync('./read-test.txt', 'utf-8')
        console.log(fileContent)
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
  afs: afs,
  nfs: nfs
}