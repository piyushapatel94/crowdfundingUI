import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        var data = [{
                "campaignId": "1",
                "campaignName": "Help",
                "campaignType": "Save Water Campaign",
                "regStatus": true,
                "campStatus": false
            },
            {
                "campaignId": "2",
                "campaignName": "Promote",
                "campaignType": "Animal exploitation",
                "regStatus": false,
                "campStatus": false
            },
            {
                "campaignId": "3",
                "campaignName": "Partner",
                "campaignType": "Orphans Campaign",
                "regStatus": true,
                "campStatus": true
            }
        ];

        return data;
    }
});