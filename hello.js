var load = function(module) {
    var name = "global"
    var outStr = `Hello, ${name}`

    function greetNode() {
        name = "Node"
        outStr = `Hello, ${name}`
        console.log(outStr)
    }

    function greetJs() {
        name = "js"
        outStr = `Hello, ${name}`
        console.log(outStr)
    }

    module.exports = {
        node: greetNode,
        js: greetJs
    }

    return module.exports
}

module.exports = load(module)