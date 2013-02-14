Ext.define('SenchaApp.view.Footer', {
    extend: 'Ext.Container',
    xtype: 'footer',
    alias: "widget.footer",
    requires: [
    ],
    config: {
        height: 50,
        style: 'background-color:#d7d7d7',
        scrollable: null
    },
    initialize: function () { 

        var me = this;


        me.contentBody = Ext.create("Ext.Container");
        var bodyHtml = Ext.XTemplate(   '<div class="items-count">0 ITEMS</div>'+
                                        '<div class="items-price">$0.00</div>'                                        
                                        );

        me.submitBtn = Ext.create("Ext.Container", {
                            html: '<div class="items-submit-order-btn">Send order to bartender</div>',
                            listeners : {
                                element : 'element',
                                tap : function(e, t) {this.getParent().fireEvent('orderButtonTapped', this);}
                            }
                    });


        me.contentBody.setHtml(bodyHtml);
        
        me.add([me.contentBody, me.submitBtn]);
        
    },
});
