function Countdown(arg) {
    this.wait = arg;
}

Countdown.prototype.start = function() {
    setTimeout(
        function fn() {
            console.log(this.wait);
            this.wait--;
            if (this.wait >= 0) {
                setTimeout(fn.bind(this), 1000);
            }
        }.bind(this),
        0
    );
};

var countdown = new Countdown(15);
countdown.start();
