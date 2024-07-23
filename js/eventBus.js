class Observer {
    constructor(observerValue) {
        this.value = observerValue ?? null;
    }

    subcribers = [];

    subcribe(callback) {
        if (typeof callback !== "function" || this.subcribers.includes(callback)) {
            return null;
        }

        callback.call(this, this.value);
        this.subcribers.push(callback);

        const subscription = {
            unsubscribe: () => {
                this.subcribers = this.subcribers.filter(v => v !== callback);
            }
        };

        subscription.unsubscribe.bind(this);
        return subscription;
    }

    next(payload) {
        this.subcribers.forEach((callback) => callback(payload));
    }
}