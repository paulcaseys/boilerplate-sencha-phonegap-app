Ext.define('SenchaApp.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'SenchaApp.view.CategoryList',
    ],
    config: {
        
        fullscreen: true,
        layout: 'vbox'
    },
    initialize: function () {
        this.callParent(arguments);

        this.Header = Ext.create('SenchaApp.view.Header', {
            id: 'header'
        });
        this.CategoryList = Ext.create('SenchaApp.view.CategoryList', {
            id: 'categorylist'
        });
        this.Footer = Ext.create('SenchaApp.view.Footer', {
            id: 'footer'
        });
        
        this.add([this.Header, this.CategoryList, this.Footer]);


    }
});
