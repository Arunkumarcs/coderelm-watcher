let wObj  = require('../index')
wObj = new wObj()

// Your Tracker function this can also be a ordinary function
watchObj.tracker = async function(name, obj, pro, oldVal, newVal) {
wObj.register(
    'o1', 
    { asd: 4543}, 
    function(name, state, data, action) {
        switch (action) {
            default:
                return {
                    ...state,
                    ...data
                }
                break;
        }
    }
)

wObj.update('o1', {
    sda: {
        asd: 453245
    }
}, 'UPDATE')
console.log(wObj.getState('o1'))
console.log(wObj)