;
(function ($) {

    /* Objeto Propolândia */
    var Propolandia = window.Propolandia = function () {
        
        var stages, current_stage, current_stage_step = 1, current_stage_situation = 1, $this = this;
        
        this.setStages = function (stages_data) {
            stages = stages_data;
        }
        
        this.getStages = function() {
            return stages;
        };
        
        this.getStageAsset = function (stage_name, asset_name, full_path) {
            var i, asset = null;
            for (i = 0; i < stages[stage_name].assets.length; i += 1) {
                if (stages[stage_name].assets[i].name === asset_name) {
                    if (full_path === true) {
                        asset = stages[stage_name].assets[i];
                        asset.src = stages[stage_name].path + asset.src;
                    } else {
                        return stages[stage_name].assets[i];    
                    }
                    break;
                }
            }
            return asset;
        };
        
        this.getAsset = function (asset_name) {
            var i, asset = null;
            for (i = 0; i < current_stage.assets.length; i += 1) {
                if (current_stage.assets[i].name === asset_name) {
                    asset = current_stage.assets[i];
                    break;
                }
            }
            return asset;
        };
        
        this.setCurrentStage = function (stage_name){
            current_stage = stages[stage_name];
        };
        
        this.getStageStep = function () {
            return current_stage_step; 
        };
        
        this.setStageStep = function(step) {
            current_stage_step = step;
        };
        
        this.getStageSituation = function () {
            return current_stage_situation; 
        };
        
        this.getCurrentStage = function () {
            return current_stage;  
        };
    }

    /* Configuração dos ambientes */
    var Ambientes = window.Ambientes = {};

    Ambientes.supermercado = {
        "name": "Supermercado",
        "path": "ambientes/supermercado/",
        "description": "Ambiente supermercado",
        "assets": [
            {
                "name": "icone_padrao",
                "title": "Ícone padrão",
                "type": "image/png",
                "src": "ambientes/supermercado/imagens/main-icon.png"
            },
            {
                "name": "situacao1_item1",
                "title": "Arroz",
                "type": "image/png",
                "src": "ambientes/supermercado/imagens/pacote.png"
            },
            {
                "name": "situacao1_item2",
                "title": "Valor",
                "type": "image/png",
                "src": "ambientes/supermercado/imagens/moeda.png"
            },
            {
                "name": "slide_1_2",
                "title": "Slide 1 - 2",
                "type": "image/png",
                "src": "ambientes/supermercado/imagens/slide_1_2.png"
            } 
        ],
        "properties": {
            "path": "ambientes/supermercado/",
            "name": "Mercadinho",
            "nicename": "supermercado",
            "welcome_prefix": "Você está no ",
            "description": "",
            "icon_default": "icone_padrao",
            "icon_hover": "icone_padrao"
        },
        "story_steps":[
            {
                "type":"slide",
                "content":[
                    {
                        "image_asset":"slide_1_2",
                        "text":"<span>DONA LUZIA</span> - Joãozinho meu filho, como vai você?<br><span>Joãozinho</span> - Estou bem Dona Luzia, e a senhora, indo para as compras?"
                    },
                    {
                        "image_asset":"slide_1_2",
                        "text":"<span>DONA LUZIA</span> - Sim sim meu querido, mas eu estou tão cansada... Poderia me ajudar a fazer umas contas? Você é bom em matemática né meu jovem?<br><span>Joãozinho</span> - Mas é claro Dona Luzia!"
                    },
                    {
                        "image_asset":"noimage",
                        "text":"Ajude Dona Luzia a fazer corretamente as contas."
                    }
                ]
            },
            {
                "type":"situation",
                "content":1
            },
            {
                "type":"slide",
                "content":[
                    {
                        "image_asset":"noimage",
                        "text":"Parabéns! Você acertou todas as questões!"
                    }
                ]
            },
            {
                "type":"end",
                "content":null
            }
        ],
        "situations": [
            {
                "name": "Arroz",
                "title": "Comprar Arroz",
                "description": "Cada pacote de arroz tem <strong>1kg</strong>. Cada kg de arroz custa <strong>R$ 3,00</strong>. Complete a tabela com o valor correspondente à quantidade de pacotes de arroz.",
                "table_values": [2, 3, 5, 10],
                "table_values_answers": [6, 9, 15, 30],
                "item_1": {
                    "icon_default": "situacao1_item1",
                    "name": "Arroz",
                    "unit": "kg",
                    "start_value": 1,
                    "min_value": 1,
                    "max_value": 10,
                    "relation": 3
                },
                "item_2": {
                    "icon_default": "situacao1_item2",
                    "name": "Moeda",
                    "unit": "R$",
                    "start_value": 3,
                    "min_value": 1,
                    "max_value": 15,
                    "relation": 0.3
                },
                "stars": 1
            }
        ]
    };

}(jQuery))