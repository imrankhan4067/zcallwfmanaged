sap.ui.define(['sap/ui/core/mvc/Controller'],function(Controller){
    "use strict"
    return Controller.extend("wf.zcallwfmanapp.controller.View2",{
        onInit: function(){

        },

        onPress: function(oEvent){
            var oData = {
                message: "Button y successfully clicked"
              };
            
              // get the EventBus
              var oEventBus = this.getOwnerComponent().getEventBus();
            
              // get the onPress method out of the EventBus
              oEventBus.publish("onPress", "event1", oData);
        }
    });
});