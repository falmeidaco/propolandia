(function ($) {
    
    var i, current_stage = {};
    
    
    function updateInterface (situation) {
        
    }
    
    $.getJSON("stages/supermarket/settings.json", function(data, result, ajaxObject) {
       if (result === "success") {
           current_stage.settings = data;
           current_stage.situation = 0;
           current_stage.situation_status = [];
           for (i = 0; i < current_stage.settings.content.situations.length; i += 1) {
               current_stage.situation_status.push(false);
           }
           console.log(current_stage.settings.content.situations.length);
       }
    });
    
    
    
}(jQuery));