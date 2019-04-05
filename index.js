class Watcher {
    constructor() {
        let self = this
        this._obj = {}
    }

    /**
     * Default Tracker
     * @param {*} name 
     * @param {*} obj 
     * @param {*} pro 
     * @param {*} oldVal 
     * @param {*} newVal 
     */
    _tracker(name, obj, pro, oldVal, newVal) {
        console.log(`the property "${pro}" in  ${name}" is being changed to new value.`)
    }

    /**
     * Proxy Object
     * @param {*} name 
     */
    _proxy(name) {
        let self = this
        return {
            // Setter
            set(obj, prop, value) {
                self._tracker(
                    name,
                    obj,
                    prop,
                    obj[prop],
                    value
                )
                obj[prop] = value
                return true
            },
            // Getter
            get(obj, prop) {
                return obj[prop]
            }
        }
    }

    /**
     * create proxy for objects
     * @param {*} element 
     * @param {*} name 
     */
    createProxy(element, name) {
        let self = this
        self[name] = element

        element.getObjectName = function () {
            return name
        }

        return new Proxy(element, self._proxy(name))
    }

    // setters
    set tracker(val) {
        this._tracker = val
    }
    set proxy(val) {
        this._proxy = val
    }
}

module.exports = Watcher