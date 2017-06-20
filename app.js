var main = require('./main.js')

process.on('exit', function (code) {
    console.log('process is stopped: ' + code);
});

main()