sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,MessageBox) {
        "use strict";

        return Controller.extend("wf.zcallwfmanapp.controller.View1", {
            onInit: function (oEvent) {

                // get the EventBus
                var oEventBus = this.getOwnerComponent().getEventBus();

                // put the onPress method into the EventBus
                oEventBus.subscribe("onPress","event1", this.onPress, this);

            },

            onNav: function(oEvent){
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RouteView2");
            },

            onPress: function(id,oEvent,oData){
                MessageBox.show(oData.message);
            },

            onCallWf: function(oEvent){
                var appId = this.getOwnerComponent().getManifestEntry("/sap.app/id");
                var appPath = appId.replaceAll(".", "/");
                var appModulePath = jQuery.sap.getModulePath(appPath);
    
               
                var workflowurl = appModulePath + "/workflow/rest/v1/workflow-instances";

                var oPayload  = {
                    "definitionId": "bpm_wf_001",
                    "context": {
                        "data": "From Ui Manged App"
                    }
                };
                
                $.ajax({
                    url: workflowurl,
                    type: "POST",
                    data: JSON.stringify(oPayload),
                    headers: {
                        // "X-CSRF-Token": token,
                        "Content-Type": "application/json"
                    },
                    async: false,
                    success: function (data) {
                        debugger;
                    },
                    error: function(oError){
                        debugger;
                    }
            });
        }
        });
    });



