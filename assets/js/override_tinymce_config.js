ipTinyMceConfig = function() {
    return {
        inline: true,
        skin: 'impresspages',
        visual_table_class: 'ipTableManagement',
        //directionality : 'ltr', //TODO according to the current language
        plugins: "advlist, paste, link, table",
        entity_encoding: "raw",
        menubar: false,
        statusbar: false,
        toolbar1: 'bold italic alignleft aligncenter alignright styleselect removeformat table',
        toolbar2: 'link bullist numlist outdent indent subscript superscript undo redo',
        valid_elements: "@[class|style],table[border],tbody,tr[rowspan],td[colspan|rowspan],th[colspan],strong,em,br,sup,sub,p,span,b,u,i,a[name|href|target|title],ul,ol,li,h1,h2,h3,h4,h5,h6",
        paste_word_valid_elements: "table,tbody,tr,td,th,strong,em,br,sup,sub,p,span,b,u,i,a,ul,ol,li",
        forced_root_block: "p",
        document_base_url: ip.baseUrl,
        remove_script_host: false,
        relative_urls: false,

        file_browser_callback: function(field_name, url, type, win) {
            var $input = $('#' + field_name);
            var $dialog = $input.closest('.mce-window');
            $('#mce-modal-block, .mce-tinymce-inline').addClass('hidden');
            $dialog.addClass('hidden');

            ipBrowseLink(function(link) {
                $('#mce-modal-block, .mce-tinymce-inline').removeClass('hidden');
                $dialog.removeClass('hidden');
                $input.val(link);
            })
        },
        paste_preprocess: function(pl, o) {
            var validClasses = [];
            var allFormats = ipTinyMceConfig().style_formats;
            $.each(allFormats, function(key, value) {
                if (value.classes) {
                    validClasses.push(value.classes);
                }
            });
            ipTinyMceConfigPastePreprocess(pl, o, validClasses);
        },
        style_formats: [{
            title: 'Primary Button',
            inline: 'button',
            classes: 'radius'
        }, {
            title: "Headers",
            items: [{
                title: "Header 1",
                format: "h1"
            }, {
                title: "Header 2",
                format: "h2"
            }, {
                title: "Header 3",
                format: "h3"
            }, {
                title: "Header 4",
                format: "h4"
            }, {
                title: "Header 5",
                format: "h5"
            }, {
                title: "Header 6",
                format: "h6"
            }]
        }]
    };
};