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

            //Slider situação 1
            $('.slider-content').unslider().on('unslider.change', function(event, index, slide) {
                if (index === 2) {
                    $('.unslider-arrow ').hide();
                }
            });

        }
    }
    
    window.WebApp = WebApp;
    
    WebApp.init();
            
}(jQuery));
