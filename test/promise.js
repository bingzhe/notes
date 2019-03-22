const PENDING = "pending";
const RESOLVED = "resolved";
const REJECTED = "rejected";

function MyPromise(fn) {
    const _this = this;
    _this.state = PENDING;
    _this.value = null;
    _this.resolvedCallbacks = [];
    _this.rejectedCallbacks = [];

    function resolve(value) {
        if (_this.state === PENDING) {
            _this.state = RESOLVED;
            _this.value = value;
            _this.rejectedCallbacks.map(cb => cb(_this.value));
        }
    }

    function reject(value) {
        if (_this.state === PENDING) {
            _this.state = REJECTED;
            _this.value = value;
            _this.rejectedCallbacks.map(cb => cb(_this.value));
        }
    }

    try {
        fn(resolve, reject)
    } catch (e) {
        reject(e)
    }
}

MyPromise.prototype.then = function (onFulfilled, onRejected) {
    const _this = this;

    onFulfilled = typeof onFulfilled === "function" ? onFulfilled : v => v;
    onRejectd = typeof onRejected === "function" ? onRejected : v => { throw v };

    if (_this.state === PENDING) {
        // _this.resolvedCallbacks.push(onFulfilled);
        // _this.rejectedCallbacks.push(onRejected);

        return (promise2 = new MyPromise((resolve, reject) => {
            _this.resolvedCallbacks.push(() => {
                try {
                    const x = onFulfilled(_this.value)
                    resolutionProcedure(promise2, x, resolve, reject)
                } catch (r) {
                    reject(r)
                }
            })

            _this.rejectedCallbacks.push(() => {
                try {
                    const x = onRejected(_this.value)
                    resolutionProcedure(promise2, x, resolve, reject)
                } catch (r) {
                    reject(r)
                }
            })
        }))
    }

    if (_this.state === RESOLVED) {
        onFulfilled(_this.value);
    }

    if (_this.state === REJECTED) {
        onRejected(_this.value);
    }
}
