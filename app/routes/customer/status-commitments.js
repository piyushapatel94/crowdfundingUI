import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        var data = [{
                "campaignId": "1",
                "campaignName": "Help",
                "campaignType": "Campaign1",
                "commitmentName": "Rs. 250500",
                "commitmentStatus": "Not Received",
                "rcveStatus": false
            },
            {
                "campaignId": "2",
                "campaignName": "Promote",
                "campaignType": "Campaign2",
                "commitmentName": "Rs. 250000",
                "commitmentStatus": "Not Received",
                "rcveStatus": false
            },
            {
                "campaignId": "3",
                "campaignName": "Partner",
                "campaignType": "Campaign3",
                "commitmentName": "T-Shirts",
                "commitmentStatus": "Received",
                "rcveStatus": true
            }
        ];

        return data;
    }
});