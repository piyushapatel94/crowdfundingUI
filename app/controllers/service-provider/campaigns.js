import Ember from 'ember';

export default Ember.Controller.extend({
    isCampAuthorize: false,
    isCampClosure: false,

    columns: [{
            "propertyName": "campaignId",
            "title": "ID",
            "filterPlaceholder": "Enter Id"
        },
        {
            "propertyName": "campaignName",
            "title": "Name",
            "filterPlaceholder": "Enter Name"
        },
        {
            "propertyName": "campaignType",
            "title": "Type",
            "filterPlaceholder": "Enter Type"
        },
        {
            "title": "Action",
            "template": "campaign-action-button"
        }
    ],

    actions: {
        
        authorize: function(record) {
            this.set('isCampAuthorize', true);
            this.set('campaignName', record.campaignName);
            this.set('message', record.campaignName + " campaign has been Block");
        },

        /*
            if (record.regStatus) {
                this.send('closecampaign', record);
            } else {
                this.toggleProperty('isCampAuthorize');
                this.set('isCampClosure', false);
                this.set('campaignName', record.campaignName);
            }
        },*/

        dismissModal: function() {
            this.set('isCampAuthorize', false);
            this.set('isCampClosure', false);
        },

        closecampaign: function(record) {
            this.set('isCampClosure', true);
            this.set('campaignName', record.campaignName);
            this.set('message1', record.campaignName + " campaign has been closed");
            /*
            this.toggleProperty('isCampClosure');
            this.set('isCampAuthorize', false);
            this.set('campaignName', record.campaignName);
            */
        },

        authorizeCampaign: function() {
            alert(this.get('message'));
             this.toggleProperty('isCampAuthorize');
        },

        closeCampaign: function() {
            alert(this.get('message1'));
            this.toggleProperty('isCampClosure');
        },

         toggleModal: function() {
           this.toggleProperty('isCampAuthorize');
       } ,
         toggleModal1: function() {
           this.toggleProperty('isCampClosure');
       } 
       

    }
});