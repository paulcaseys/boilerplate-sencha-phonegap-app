Ext.define('SenchaApp.view.Header', {
    extend: 'Ext.Container',
    xtype: 'header',
    alias: "widget.header",
    requires: [
    ],
    config: {
        height: 44,
        style: 'background-color:#e8e8e8',
        scrollable: null
    },
    initialize: function () { 
           
        var me = this;



        me.profileBtn = Ext.create("Ext.Container", {
                            html: '<div class="header-profile-btn">profile</div>',
                            listeners : {
                                element : 'element',
                                tap : function(e, t) {this.getParent().fireEvent('profileButtonTapped', this);}
                            }
                    });

        me.bodyHtml = Ext.XTemplate('<div class="header-title">Bartender</div>');

        me.aboutBtn = Ext.create("Ext.Container", {
                            html: '<div class="header-about-btn">ABOUT</div>',
                            listeners : {
                                element : 'element',
                                tap : function(e, t) {this.getParent().fireEvent('aboutButtonTapped', this);}
                            }
                    });

        me.contentBody = Ext.create("Ext.Container");        
        me.contentBody.setHtml(me.bodyHtml);
        
        me.add([me.contentBody, me.profileBtn, me.aboutBtn]);
        
    },
});
