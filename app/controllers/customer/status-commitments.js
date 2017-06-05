import Ember from 'ember';

export default Ember.Controller.extend({
    isPartAuthorize: false,

    columns: [{
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
            "propertyName": "commitmentName",
            "title": "Commitment Name",
            "filterPlaceholder": "Enter Name"
        },
        {
            "title": "Status",
            "template": "commitment-action-button"
        }
    ],

    actions: {
        received: function(record) {
            this.set('isCommitRecvd', true);
            this.set('commitmentName', record.commitmentName);
        },

        dismissModal: function() {
            this.set('isCommitRecvd', false);
        }
    }
});