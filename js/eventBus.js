class Notifier {
    subcribers = [];

    subcribe(callback) {
        if (typeof callback !== "function" || this.subcribers.includes(callback)) {
            return;
        }

        this.subcribers.push(callback);
    }

    unsubscribe(callback) {
        if (!this.subcribers.includes(callback)) {
            return;
        }

        this.subcribers = this.subcribers.filter(v => v !== callback);
    }

    trigger(payload) {
        if (this.subcribers.length === 0) {
            return;
        }

        for (const callback of this.subcribers) {
            callback(payload);
        }
    }
}