Ext.define("SenchaApp.controller.PrimaryController", {
    extend: "Ext.app.Controller",
    requires: [],
    config: {
        refs: {
            header: "header",
            categorylist: "categorylist",
            footer: "footer"
        },
        control: {
            header: {
                profileButtonTapped: "onProfileButtonTapped",
                aboutButtonTapped: "onAboutButtonTapped"
            },
            footer: {
                orderButtonTapped: "onOrderButtonTapped"
            },
            categorylist: {
                categoryListItemTapped: "onCategoryListItemTapped"
            }
        }
    },
   
    onProfileButtonTapped: function () {
        console.log("onProfileButtonTapped");
    },

    onAboutButtonTapped: function () {
        console.log("onAboutTapped");
    },   
   
    onOrderButtonTapped: function () {
        console.log("onOrderButtonTapped");
    },   
   
    onCategoryListItemTapped: function () {
        console.log("onCategoryListItemTapped");
    }
});