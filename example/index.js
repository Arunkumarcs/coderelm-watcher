let watcher = require('@arunkumarcoderelm/watcher') 
let watchObj = new watcher()

let p1 = { a: "sdfsef" }
let p2 = { d3: "23qw3"}

// Your Tracker function
watchObj.tracker = function(name, obj, pro, oldVal, newVal) {
    switch (name) {
        case "p1":
            console.log(`the property "${pro}" in p1 has been changed to new value "${newVal}"`)
            break;
        case "p2":
            console.log(`the property "${pro}" in p2 has been changed to new value "${newVal}"`)
            break;
        default:
            console.log(this)
            break;
    }
}

// Creating Proxy for Objects
p1 = watchObj.createProxy(p1, "p1")
p2 = watchObj.createProxy(p2, "p2")

// watchObj.tracker will emit on each update
p1.d3 = "sadfsdf"  
p2.d1 = "sadfsdf" 