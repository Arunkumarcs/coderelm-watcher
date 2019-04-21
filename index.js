/**
 * 
 * @param {*} name 
 * @param {*} state 
 * @param {*} data 
 * @param {*} action 
 */
let defaultTracker = function(name, state, data, action) {
    switch (action) {
        default:
            console.log(`${name}" is being changed to new value.`)
            if(typeof data === Object) {
                return {
                    ...state,
                    ...data
                }
            } else {
                return data
            }
            break;
    }
}

/**
 * 
 */
class Watcher {
    constructor() {
        this.getAll = this._getAll 
        this.update = this._update
        this.getState = this._getState
        this.register = this._register
        this.deRegister = this._deRegister
        this.updateTracker = this._updateTracker
    }

    /**
     * 
     */
    _getAll() {
        return this.instances
    }

    /**
     * 
     * @param {*} identifier 
     * @param {*} data 
     * @param {*} action 
     */
    _update(
        identifier,
        data,
        action = ""
    ) {
        let self = this
        let oldState = this.instances[identifier]
        
        this.instances[identifier] = self.tracker[identifier](
            identifier,
            oldState,
            data,
            action
        )
    }

    /**
     * 
     * @param {*} identifier 
     */
    _getState(identifier) {
        return this.instances[identifier]
    }

    /**
     * 
     * @param {*} obj 
     * @param {*} identifier 
     * @param {*} tracker 
     */
    _register(
        identifier,
        obj = {},
        tracker = defaultTracker
    ) {
        this.tracker[identifier] = tracker 
        this.instances[identifier] = obj
    }

    /**
     * 
     * @param {*} identifier 
     */
    _deRegister(identifier) {
        if(this.instances[identifier] !== undefined) {
            delete this.instances[identifier]
            delete this.tracker[identifier]
        }        
    }

    /**
     * 
     * @param {*} identifier 
     * @param {*} tracker 
     */
    _updateTracker(
        identifier,
        tracker = defaultTracker
    ) {
        this.tracker[identifier] = tracker
    }
}

/**
 * Protected Properties
 */
Watcher.prototype.instances = {}
Watcher.prototype.tracker = {}

// let wObj = new Watcher()
module.exports = Watcher