Ext.define('SenchaApp.view.CategoryList', {
    extend: 'Ext.Container',
    xtype: 'categorylist',
    alias: "widget.categorylist",
    requires: [
    ],
    config: {
        style: 'background-color:#383838',
        scrollable: true,
        flex: 1,
    },
    initialize: function () {        

        var me = this;

        // feature
        me.contentFeature = Ext.create("Ext.Container");
        var featureHtml = Ext.XTemplate(  
                                        '<div class="category-feature">'+
                                        '   <div class="category-feature-image"></div>'+
                                        '   <div class="category-feature-text-container">'+
                                        '       <div class="category-feature-title">BARTENDER JENNY\'S TIP</div>'+
                                        '       <div class="category-feature-body">Order drinks more conveniently. This app orders drinks without leaving your seat.</div>'+
                                        '   </div>'+
                                        '</div>'
                                        );

        me.contentFeature.setHtml(featureHtml);

        // title
        me.contentTitle = Ext.create("Ext.Container");
        var listTitle = Ext.XTemplate(  
                                        '<div class="list-title"><div class="dropshadow">What would you like to order? </div></div>'
                                        );

        me.contentTitle.setHtml(listTitle);

        
        me.add(me.contentFeature);
        me.add(me.contentTitle);


        // list (should this be a config?)
        me.categoryArray = [
                            {
                                primaryTitle:'Snacks',
                                subTitle:'14 to choose from'
                            },
                            {
                                primaryTitle:'Mixed drinks',
                                subTitle:'11 to choose from'
                            },
                            {
                                primaryTitle:'Beers & ciders',
                                subTitle:'17 to choose from'
                            },
                            {
                                primaryTitle:'Wine',
                                subTitle:'54 to choose from'
                            },
                            {
                                primaryTitle:'Spirits',
                                subTitle:'32 to choose from'
                            },
                            {
                                primaryTitle:'Custom drink',
                                subTitle:'Make your own drink'
                            },
                            {
                                primaryTitle:'Your previous selections',
                                subTitle:'23 to choose from'
                            }
                            ];

        for (var i=0; i < me.categoryArray.length; i++) { 

            me.featureItem = Ext.create("Ext.Container", {
                                html: 
                                    '<div class="category-list-item">'+
                                    '   <div class="category-image"></div>'+
                                    '   <div class="category-text-container">'+
                                    '       <div class="category-title">'+me.categoryArray[i].primaryTitle+'</div>'+
                                    '       <div class="category-body">'+me.categoryArray[i].subTitle+'</div>'+
                                    '   </div>'+
                                    '</div>'
                                , 
                                listeners : {
                                    element : 'element',
                                    tap : function(e, t) {this.getParent().fireEvent('categoryListItemTapped', this);}
                                }
                        });
            me.add(me.featureItem);
        }
        
    },
});
