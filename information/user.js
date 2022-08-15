(function($){

  mtapp.sortDisabled();
  mtapp.fieldSort({
    sort: 'title,permalink,keywords,excerpt,tags,customfield_cf_thumbnail,customfield_ogimage,customfield_cf_mediaurl,customfield_cf_externallink,customfield_cf_sliderimages,text'
  });

  mtapp.multiField({
    debug: false,
    id: 'customfield_cf_sliderimages',
    label: 'スライダー画像',
    showAddFieldButton: true,
    showViewRawDataButton: false,
    fieldGroups: [
      [
        {
          "type" : "table", "label": "画像", "options": [
            { "type": "image", "label": "画像" },
            { "type": "text", "label": "キャプション" },
          ]
        }
      ]
    ]
  });

})(jQuery);
