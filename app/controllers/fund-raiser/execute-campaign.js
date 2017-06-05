import Ember from 'ember';
export default Ember.Controller.extend({
        isCampAuthorize: false,
        isCampClosure: false,
        columns: [{
            "propertyName": "Id",
            "title": "Id",
            "filterPlaceholder": "Id"
        }, {
            "propertyName": "campaignname",
            "title": "Campaign Name",
            "filterPlaceholder": "Campaign Name"
        }, {
            "propertyName": "fundtransfer",
            "title": "Fund transfer",
            "filterPlaceholder": "Fund transfer"
        }, {
            "title": "Action",
            "template": "executecampaign-action-buttons"
        }, ],
        actions: {
            authorize: function(record) {
                if (record.regStatus) {
                    this.send('complete', record);
                } else {
                    this.set('isCampAuthorize', true);
                    this.set('isCampClosure', false);
                    this.set('campaignname', record.campaignname);
                }
            },
            dismissModal: function() {
                this.set('isCampAuthorize', false);
                this.set('isCampClosure', false);
            },
            complete: function(record) {
                this.set('isCampClosure', true);
                this.set('isCampAuthorize', false);
                this.set('campaignname', record.campaignname);
            }
        }
    }

);