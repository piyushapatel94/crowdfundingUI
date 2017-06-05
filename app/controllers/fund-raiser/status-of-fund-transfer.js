import Ember from 'ember';

export default Ember.Controller.extend({
    isCampAuthorize: false,
    isCampClosure: false,
    columns: [{
        "propertyName": "campaignname",
        "title": "Campaign Name",
        "filterPlaceholder": "Campaign Name"
    }, {
        "propertyName": "fundername",
        "title": "Funder Name",
        "filterPlaceholder": "Funder Name"
    }, {
        "propertyName": "pleageamount",
        "title": "Pleage Amount",
        "filterPlaceholder": "Pleage Amount"
    }, {
        "propertyName": "receivedamount",
        "title": "Received Fund",
        "filterPlaceholder": "Received Amount"
    }, {
        "propertyName": "rewards",
        "title": "Rewards",
        "filterPlaceholder": "Rewards"
    }, {
        "propertyName": "status",
        "title": "Status",
        "filterPlaceholder": "Status"
    }, {
        "propertyName": "submit",
        "title": "Check Status",
         "filterPlaceholder": "Check Status",
        "template": "submit1-button"
    }],
    actions: {

        click: function(record) {
            console.log(record.campaignname);
            this.set('campaignname',record.campaignname);
              this.transitionToRoute('fund-raiser.dashboard');
        },
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
});