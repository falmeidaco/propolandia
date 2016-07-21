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
        
        this.setStageSituation = function (situation_id) {
            current_stage_situation = situation_id; 
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
                "name": "icon_iorgute",
                "title": "Iorgute",
                "type": "image/png",
                "src": "ambientes/supermercado/imagens/icon_iorgute.png"
            },
			{
                "name": "icon_arroz",
                "title": "Iorgute",
                "type": "image/png",
                "src": "ambientes/supermercado/imagens/icon_arroz.png"
            },
			{
                "name": "icon_moeda",
                "title": "Iorgute",
                "type": "image/png",
                "src": "ambientes/supermercado/imagens/icon_moeda.png"
            },
			{
                "name": "icon_suco",
                "title": "Suco",
                "type": "image/png",
                "src": "ambientes/supermercado/imagens/icon_suco.png"
            },
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
                        "text":"Parabéns! Você acertou todas as questões! <br />Agora vamos ver se você consegue resolver a próxima situação."
                    }
                ]
            },
			{
                "type":"situation",
                "content":2
            },
            {
                "type":"slide",
                "content":[
                    {
                        "image_asset":"noimage",
                        "text":"Parabéns! Você acertou todas as questões! <br />Agora vamos ver se você consegue resolver a próxima situação."
                    }
                ]
            },
			{
                "type":"situation",
                "content":3
            },
            {
                "type":"slide",
                "content":[
                    {
                        "image_asset":"noimage",
                        "text":"Parabéns! Você acertou todas as questões!"
                    }
                ]
            }
            ,
			{
                "type":"slide",
                "content":[
                     {
                        "image_asset":"slide_1_2",
                        "text":"<span>DONA LUZIA</span> - Muito obrigado Joãozinho! Você é muito esperto!"
                    },
                    {
                        "image_asset":"noimage",
                        "text":"Agora que você já aprender a calcular o valor das compras<br /> no mercadinho, explore os outros lugares da cidade!"
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
                "name": "Suco",
                "title": "Comprar Suco",
                "description": "Cada garrafa de suco tem 3 litros <strong>(l)</strong>. Cada garrafa custa <strong>R$ 5,00</strong>. Complete a tabela com o valor correspondente à quantidade de garrafas de suco.",
                "table_values": [1, 3, 7, 4],
                "table_values_answers": [5, 15, 35, 20],
                "item_1": {
                    "icon_default": "icon_suco",
                    "name": "Suco",
                    "unit": "l",
                    "start_value": 1,
                    "min_value": 1,
                    "max_value": 5,
                    "relation": 5
                },
                "item_2": {
                    "icon_default": "icon_moeda",
                    "name": "Moeda",
                    "unit": "R$",
                    "start_value": 5,
                    "min_value": 1,
                    "max_value": 30,
                    "relation": 0.2
                },
                "stars": 1
            },
            {
                "name": "Arroz",
                "title": "Comprar Arroz",
                "description": "Cada pacote de arroz tem <strong>1kg</strong>. Cada kg de arroz custa <strong>R$ 3,00</strong>. Complete a tabela com o valor correspondente à quantidade de pacotes de arroz.",
                "table_values": [2, 3, 5, 10],
                "table_values_answers": [6, 9, 15, 30],
                "item_1": {
                    "icon_default": "icon_arroz",
                    "name": "Arroz",
                    "unit": "kg",
                    "start_value": 1,
                    "min_value": 1,
                    "max_value": 10,
                    "relation": 3
                },
                "item_2": {
                    "icon_default": "icon_moeda",
                    "name": "Moeda",
                    "unit": "R$",
                    "start_value": 3,
                    "min_value": 1,
                    "max_value": 15,
                    "relation": 0.3
                },
                "stars": 1
            },
            {
                "name": "Iorgute",
                "title": "Comprar Iorgute",
                "description": "Cada iorgute custa <strong>R$ 2,00</strong>. Complete a tabela com o valor correspondente à quantidade iorgutes.",
                "table_values": [2, 4, 10, 14],
                "table_values_answers": [4, 8, 20, 28],
                "item_1": {
                    "icon_default": "icon_iorgute",
                    "name": "Iorgute",
                    "unit": "un",
                    "start_value": 1,
                    "min_value": 1,
                    "max_value": 20,
                    "relation": 2
                },
                "item_2": {
                    "icon_default": "icon_moeda",
                    "name": "Moeda",
                    "unit": "R$",
                    "start_value": 2,
                    "min_value": 1,
                    "max_value": 30,
                    "relation": 0.5
                },
                "stars": 1
            }
        ]
    };

}(jQuery))