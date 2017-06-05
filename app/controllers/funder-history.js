import Ember from 'ember';
export default Ember.Controller.extend({
        columns: [{
            "propertyName": "camp-name",
            "title": "Campaign Name",
            "filterPlaceholder": "Campaign Name"
        }, {
            "propertyName": "contribution",
            "title": "Contribution",
            "filterPlaceholder": "Contribution"
        }, {
            "propertyName": "status",
            "title": "Status",
            "filterPlaceholder": "Status"
        }, ]
    }

);