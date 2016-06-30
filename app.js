(function() {
    var WebApp = function() {

        var $this = this;

        var loadImages = function () {

            var $loadImages = this;

            this.status = {
                "files_loaded":[],
                "files_to_load":[]
            }

            this.load = function (files) {

                var i, image;

                $loadImages.stauts.files_loaded = [];

                for (i = 0; i < files.length; i += 1) {
                    if (/image\/(jpg|jpeg|png|gif)/i.test(files[i].type)) {
                        $loadImages.stauts.files_to_load.push(files[i]);
                        image = new Image();
                        image.src = files[i].src;
                        image.onLoad = function () {
                            status.files_loaded.push(this.src);
                            $loadImages.onLoading();
                        }
                    }
                }
            };

            this.onLoading = function (fn) {
                fn($loadImages.stauts);
            }

        };

        this.init = function () {

            var files = [];

            module.preloader.loadfiles(files);
            module.preloader.onloading(function(loadingData) {

            });


        }

    }
}());
