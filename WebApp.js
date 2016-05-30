(function($) {
    
    var WebApp = {
        
        screen: {
            home: {
                animations:{
                    revelOptions:function() {                       
                        $(".app-logo").animate({"top":"30px"},1000);
                        $(".home-options-default").animate({"right":"15px"},1000);            
                        $(".home-welcome-text").animate({"bottom":"15px"},1000);
                    },
                    hideOptions:function() {
                        $(".app-logo").animate({"top":"-200px"},1000);
                        $(".home-options-default").animate({"right":"-300px"},1000);
                        $(".home-welcome-text").animate({"bottom":"-40px"},1000);
                    }
                },
                init: function() {
                    
                }
            },
            stage:{
                animations:{
                    revelPanel:function() {
                        $(".screen-stage").animate({"top":"0"},1000);
                    },
                    hidePanel:function() {
                        $(".screen-stage").animate({"top":"-560"},1000);
                    }
                }
            }
        },
        init: function () {
            $(".stage-item a").click(function() {
                WebApp.screen.home.animations.hideOptions();
                WebApp.screen.stage.animations.revelPanel();
            });
            $(".back-home").click(function() {
                
                WebApp.screen.stage.animations.hidePanel();
                WebApp.screen.home.animations.revelOptions();
            });
            $(".img-item").click(function() {
                var current = parseInt($(this).attr("alt"));
                if (current+1<7) {
                    $(this).attr("alt", current+1).attr("src", "assets/"+(current+1)+".jpg");
                } else {
                    $(this).attr("alt", 0).attr("src", "assets/0.jpg");
                }
            });
        }
    }
    
    window.WebApp = WebApp;
    
    WebApp.init();
            
}(jQuery));