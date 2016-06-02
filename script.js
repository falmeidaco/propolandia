(function ($) {
    var current_stage;

    current_stage = stages.supermercado;
    current_stage.current_situation = 0;
    current_stage.item_values = [1,3];

    function updateContent(situation) {
        console.log(situation.title);
        //Atualiza titulo;
        $('.tarefa-titulo').html('<span>Tarefa '+(current_stage.current_situation+1)+'</span> ' + situation.title);
        $('.tarefa-descricao p').html(situation.description);
        
    }

    updateContent(current_stage.content.situations[current_stage.current_situation]);
    
    function updateValues() {
        var i;
        var html_content = "";
        $('.item-1').data('item_value', current_stage.item_values[0]);
        $('.item-1 .badge').html(current_stage.item_values[0]);
        $('.item-2').data('item_value', current_stage.item_values[1]);
        $('.item-2 .badge').html(current_stage.item_values[1]);
        
        for (i = 0; i<current_stage.item_values[0]; i++) {
            html_content = html_content + '<img src="stages/supermarket/files/pacote.png" alt="Pacote">';
        }
        html_content = html_content + "<br />"
        for (i = 0; i<current_stage.item_values[1]; i++) {
            html_content = html_content + '<img src="stages/supermarket/files/moeda.png" alt="Moeda">';
        }
        
        $('.canvas').html(html_content);
        
    }
    
    //Item 1
    $('.item-1 .add-item').click(function() {
        if (current_stage.item_values[0] < current_stage.content.situations[current_stage.current_situation].item_1.max_value) {
            current_stage.item_values[0] += 1;
            current_stage.item_values[1] = current_stage.item_values[0] * current_stage.content.situations[current_stage.current_situation].item_1.relation;
        }
        updateValues();
    });
    $('.item-1 .remove-item').click(function() {
        if (current_stage.item_values[0] > current_stage.content.situations[current_stage.current_situation].item_1.min_value) {
            current_stage.item_values[0] -= 1;
            current_stage.item_values[1] = current_stage.item_values[0] * current_stage.content.situations[current_stage.current_situation].item_1.relation;
        }
        updateValues();
    });
    
    //Item 2
    $('.item-2 .add-item').click(function() {
        if (current_stage.item_values[1] < current_stage.content.situations[current_stage.current_situation].item_2.max_value) {
            current_stage.item_values[1] += 1;
            current_stage.item_values[0] = Math.floor(current_stage.item_values[1]/3);
        }
        updateValues();
    });
    $('.item-2 .remove-item').click(function() {
        if (current_stage.item_values[1] > current_stage.content.situations[current_stage.current_situation].item_2.min_value) {
            current_stage.item_values[1] -= 1;
            current_stage.item_values[0] = Math.floor(current_stage.item_values[1]/3);
        }
        updateValues();
    });

    $("#veririca_respostas").click(function() {
        var item1_val, item2_val, resposta, n_linhas = $(".tabela tr").length, count_errors = 0;

        $('.tabela tbody tr').each(function(i,e) {

            item1_val = $(e).find('.valor').val();
            item2_val = $(e).find('.resposta').val();

            $(e).find(".form-group").removeClass("has-error").removeClass("has-success");
            $(e).find(".form-control-feedback").addClass("hidden");

            if (item2_val === "") {
                $(e).find(".form-group").addClass("has-error");
                $(e).find(".error").removeClass("hidden");
                count_errors += 1;
            } else {
                resposta = parseInt(item1_val) * current_stage.content.situations[0].item_2.start_value;
                if (parseInt(item2_val) === resposta) {
                    $(e).find(".form-group").addClass("has-success");
                    $(e).find(".success").removeClass("hidden");
                } else {
                    $(e).find(".form-group").addClass("has-error");
                    $(e).find(".error").removeClass("hidden");
                    count_errors += 1;
                }
            }

        });

        if (count_errors === 0) {
            window.alert("Parabéns! Você acertou todas as respostas!")
        }

    });


}(jQuery));