class Notifier {
    constructor(observerValue) {
        this.value = observerValue ?? null;
    }

    subcribers = new Map();

    subcribe(sub, callback) {
        if (typeof sub !== "object" || typeof callback !== "function" || this.subcribers.has(callback[[Scope]])) {
            return;
        }

        callback.call(sub, this.value);
        this.subcribers.set(sub, callback.bind(sub));
    }

    unsubscribe(sub) {
            this.subcribers = this.subcribers.has(sub) ? this.subcribers.filter(v => v !== sub) : this.subcribers;
    }

    trigger(payload) {
        this.subcribers.forEach((callback) => callback(payload));
    }
}