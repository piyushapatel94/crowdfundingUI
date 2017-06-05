import Ember from 'ember';

export default Ember.Controller.extend({
    columns: [{
        "propertyName": "campaignId",
        "title": "Campaign Id",
        "filterPlaceholder": "Campaign Id"
    }, {
        "propertyName": "campaigndetails",
        "title": "Campaign Details",
        "filterPlaceholder": "Campaign Details"
    }, {
        "propertyName": "fundername",
        "title": "Funder Name",
        "filterPlaceholder": "Funder Name"
    }, {
        "propertyName": "donation",
        "title": "Donation",
        "filterPlaceholder": "Donation"
    }, {
        "propertyName": "eligible",
        "title": "Eligible",
        "filterPlaceholder": "Eligible"
    }, {
        "title": "Action",
        "template": "deliver-commitment-action-buttons"
    }, ],

    actions: {
        authorize: function(record) {
            this.set('isCommitAuthorize', true);
            this.set('eligible', record.eligible);
        },

        dismissModal: function() {
            this.set('isCommitAuthorize', false);
        }
    }
});