;
(function ($) {

    /* Objeto Propolândia */
    var Propolandia = window.Propolandia = function () {
        
        var stages, current_stage, $this = this;
        
        this.setStages = function (stages_data) {
            stages = stages_data;
        }
        
        this.getStageAsset = function (stage_name, asset_name) {
            var i;
            for (i = 0; i < stages[stage_name].assets.length; i += 1) {
                if (stages[stage_name].assets[i].name === asset_name) return stages[stage_name].assets[i];
            }
            return null;
        }
        
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
                "src": "imagens/main-icon.png"
            },
            {
                "name": "situacao1_item1",
                "title": "Arroz",
                "type": "image/png",
                "src": "imagens/pacote.png"
            },
            {
                "name": "situacao1_item2",
                "title": "Valor",
                "type": "image/png",
                "src": "imagens/moeda.png"
            }
        ],
        "properties": {
            "name": "Supermercado",
            "nicename": "supermercado",
            "welcome_prefix": "Você está no ",
            "description": "",
            "icon_default": "icone_padrao",
            "icon_hover": "icone_padrao"
        },
        "situations": [
            {
                "name": "Arroz",
                "title": "Comprar 4kg de arroz",
                "description": "Você precisa comprar <strong>4kg de arroz</strong>. Cada pacote de arroz tem <strong>1kg</strong>. Cada kg de arroz custa <strong>R$ 3,00</strong>. Complete a tabela com o valor correspondente à quantidade de pacotes de arroz.",
                "table_size": 2,
                "item_1": {
                    "icon_default": "situacao1_icone1",
                    "name": "Arroz",
                    "unit": "kg",
                    "start_value": 1,
                    "min_value": 1,
                    "max_value": 10,
                    "relation": 3
                },
                "item_2": {
                    "icon_default": "situacao1_icone2",
                    "name": "Moeda",
                    "unit": "R$",
                    "start_value": 3,
                    "min_value": 1,
                    "max_value": 15,
                    "relation": 0.33
                },
                "stars": 1
            }
        ]
    };

}(jQuery))