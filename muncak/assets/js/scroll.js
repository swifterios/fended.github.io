var app = {
    scrolled: 0,
    newPosition: 0,
    interval: null,
    speed: 0,

    scrollTo: function(el) {
        var link = el.getAttribute('href').replace('#', ''),
            anchor = document.getElementById(link);

        var location = 0;
        if (anchor.offsetParent) {
            do {
                location += anchor.offsetTop;
                anchor = anchor.offsetParent;
            } while (anchor);
        }
        location = location >= 0 ? location : 0;

        this.animateScroll(location);
        return false;
    },

    animateScroll: function(pos) {
        document.documentElement.scrollTop = 1;
        var element = (document.documentElement && document.documentElement.scrollTop) ? document.documentElement : document.body,
            start = element.scrollTop,
            change = pos - start,
            currentTime = 0,
            increment = 20,
            duration = 300;

        var animateScroll = function(){        
            currentTime += increment;
            var val = Math.easeInOutQuad(currentTime, start, change, duration);
            element.scrollTop = val;
            if(currentTime < duration) {
                setTimeout(animateScroll, increment);
            }
        };
        animateScroll();
    }
};

Math.easeInOutQuad = function (t, b, c, d) {
    t /= d/2;
    if (t < 1) return c/2*t*t + b;
    t--;
    return -c/2 * (t*(t-2) - 1) + b;
};