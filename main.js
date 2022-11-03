$(document).ready(function(){

    const wghtmax = 700;
    const colormax = 255;

    $('body').mousemove(function(event) {
        //TEXT VARIATION ON CURSOR
        let cursorX = event.pageX / $('body').width();
        let cursorXinverse = 1 - event.pageX / $('body').width();
        let cursorY = 1 - event.pageY / $('body').height();
        let cursorYinverse = event.pageY / $('body').height();
        // console.log(cursorX, cursorY);

        let settingX = Math.floor(cursorX * wghtmax) + 300;
        let settingXinverse = Math.floor(cursorXinverse * wghtmax) + 300;
        
        let settingRGB = Math.floor(cursorX * colormax);
        let settingRGBinverse = Math.floor(cursorXinverse * colormax);

        console.log(settingRGB);

        
        $(".text-left").css({
			"--wght": settingX,
            "--CASL": cursorY,
            "--rgbvalue": settingRGB
		});
        $(".text-right").css({
			"--wght2": settingXinverse,
            "--CASL2": cursorYinverse,
            "--rgbvalueinverse": settingRGBinverse
		});
        $(".container-left").css({
            "--rgbvalueinverse": settingRGBinverse
        });
        $(".container-right").css({
            "--rgbvalue": settingRGB
        });

    });

});