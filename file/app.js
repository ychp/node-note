var fsRead = require('./fs-read')
var fsWrite = require('./fs-write')
var fsState = require('./fs-state')

var fio = function() {
    console.log("start read nfs")
    fsRead.nfs()
    console.log("finish read nfs")
    console.log("start read afs")
    fsRead.afs()
    console.log("finish read afs")
}

var fioW = function() {
    console.log("start write nfs")
    fsWrite.nfs()
    console.log("finish write nfs")
    console.log("start write afs")
    fsWrite.afs()
    console.log("finish write afs")
}

fio()
fioW()
fsState.astate()
fsState.nstate()