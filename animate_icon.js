require("mo-js");

var AnimateIcon = function(el, _options) {
    var options = _options || {};
    this.el = el;
    this.icon = this.el.querySelector(".anim-icon");
    this.tween = options.tween; 
    this.set();

};

AnimateIcon.prototype.start = function() {
    this.timeline.start();
};

AnimateIcon.prototype.set = function() {
    this.timeline = new mojs.Timeline();

    var tweens = this.tweens[this.tween]({el: this.el, icon: this.icon});
    for (var i = 0; i < tweens.length; i++) {
        this.timeline.add(tweens[i]);
    }
};

AnimateIcon.prototype.tweens = {
    circle_1: function(_options){
        var options = _options || {},
            burst, transit, tween,
            el = options.el,
            icon = options.icon;
        
        // burst animation
        burst = new mojs.Burst({
            parent: el,
            duration: 1700,
            shape : 'circle',
            fill: '#fff',
            x: '50%',
            y: '50%',
            opacity: 0.6,
            childOptions: { radius: {15:0} },
            radius: {30:90},
            count: 6,
            isRunLess: true,
            easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
        });

        // ring animation
        transit = new mojs.Transit({
            parent: el,
            duration: 700,
            type: 'circle',
            radius: {0: 60},
            fill: 'transparent',
            stroke: '#fff',
            strokeWidth: {20:0},
            opacity: 0.6,
            x: '50%',     
            y: '50%',
            isRunLess: true,
            easing: mojs.easing.sin.out
        });

        // icon scale animation
        tween = new mojs.Tween({
            duration : 1200,
            onUpdate: function(progress) {
                if(progress > 0.3) {
                    var elasticOutProgress = mojs.easing.elastic.out(1.43*progress-0.43);
                    icon.style.WebkitTransform = icon.style.transform = 'scale3d(' + elasticOutProgress + ',' + elasticOutProgress + ',1)';
                }
                else {
                    icon.style.WebkitTransform = icon.style.transform = 'scale3d(0,0,1)';
                }
            }
        });

        return [burst, transit, tween];

    },
    circle_2: function(_options){
        var options = _options || {},
            burst, transit, tween,
            el = options.el,
            icon = options.icon;
        
        // burst animation
        burst =  new mojs.Burst({
            parent: el,
            duration: 1500,
            delay: 300,
            shape : 'circle',
            // fill : [ '#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE' ],
            fill: "#fff",
            x: '50%',
            y: '50%',
            opacity: 0.6,
            radius: {40:90},
            count: 6,
            isRunLess: true,
            easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
        });

        // ring animation
        transit = new mojs.Transit({
            parent: el,
            duration: 750,
            type: 'circle',
            radius: {0: 50},
            fill: 'transparent',
            stroke: '#fff',
            strokeWidth: {35:0},
            opacity: 0.6,
            x: '50%',     
            y: '50%',
            isRunLess: true,
            easing: mojs.easing.bezier(0, 1, 0.5, 1)
        });

        // icon scale animation
        tween = new mojs.Tween({
            duration : 1100,
            onUpdate: function(progress) {
                if(progress > 0.3) {
                    var elasticOutProgress = mojs.easing.elastic.out(1.43*progress-0.43);
                    icon.style.WebkitTransform = icon.style.transform = 'scale3d(' + elasticOutProgress + ',' + elasticOutProgress + ',1)';
                }
                else {
                    icon.style.WebkitTransform = icon.style.transform = 'scale3d(0,0,1)';
                }
            }
        });

        return [burst, transit, tween];

    },
    circle_3: function(_options){
        var options = _options || {},
            burst, transit, tween,
            el = options.el,
            icon = options.icon,
            scaleCur = mojs.easing.path('M0,100 L25,99.9999983 C26.2328835,75.0708847 19.7847843,0 100,0');

        
        // burst animation
        burst =  new mojs.Burst({
            parent: el,
            duration: 1700,
            shape : 'circle',
            fill : '#fff',
            x: '50%',
            y: '50%',
            childOptions: { 
                radius: {12:0},
                type: 'line',
                // stroke: '#988ADE',
                stroke: '#fff',
                strokeWidth: 2
            },
            radius: {40:110},
            count: 20,
            isRunLess: true,
            easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
        });

        // ring animation
        transit = new mojs.Transit({
            parent: el,
            duration: 800,
            type: 'circle',
            radius: {10: 60},
            fill: 'transparent',
            // stroke: '#988ADE',
            stroke: '#fff',
            strokeWidth: {30:0},
            x: '50%',     
            y: '50%',
            isRunLess: true,
            easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
        });

        // icon scale animation
        tween = new mojs.Tween({
            duration : 800,
            easing: mojs.easing.bezier(0.1, 1, 0.3, 1),
            onUpdate: function(progress) {
                var scaleProgress = scaleCur(progress);
                icon.style.WebkitTransform = icon.style.transform = 'scale3d(' + progress + ',' + progress + ',1)';
            }
        });

        return [burst, transit, tween];

    }

};

module.exports = AnimateIcon;