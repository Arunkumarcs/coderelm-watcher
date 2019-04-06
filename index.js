/**
 * Watcher Class
 */
class Watcher {
    constructor() {
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
    async _tracker(name, obj, pro, oldVal, newVal) {
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
            async set(obj, prop, value) {
                await self._tracker(
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
            async get(obj, prop) {
                return obj[prop]
            }
        }
    }

    /**
     * create proxy for objects
     * @param {*} element 
     * @param {*} name 
     */
    register(element, name) {
        let self = this
        self[name] = element

        element.getObjectName = function () {
            return name
        }

        return new Proxy(element, self._proxy(name))
    }

    createProxy(element, name) {
        return this.register(element, name)
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