import Ember from 'ember';
export default Ember.Route.extend({
        model() {
            var data = [{
                "campaignname": "Plant Tree",
                "fundername": "Nikhil Gupta (4 outof 5)",
                "amountneeded": "30000",
                "bid": "1000",
                "status": true
            }, {
                "campaignname": "Gift a dream camp",
                "fundername": "Risabh Sharma (3 outof 5)",
                "amountneeded": "50000",
                "bid": "6000",
                "status": false
            }, {
                "campaignname": "Help baby fight cancer",
                "fundername": "Arun Hossamani (2 outof 5)",
                "amountneeded": "150000",
                "bid": "60000",
                "status": false
            }];
            return data;
        }
    }

);