import Ember from 'ember';

export default Ember.Route.extend({
      model() {
        var data=[ {
            "campaignname": "Seed Funding",  "pledgeamount": "10000/-", "receivedamount": "10000/-","fundsreceived": "100%", "status": "Received",
        }
        , {
           "campaignname": "Hamari Ganga",  "pledgeamount": "15000/-", "receivedamount": "0","fundsreceived": "66.67%", "status": "Pending"
        }
        , {
            "campaignname": "Plant Tree",  "pledgeamount": "20000/-", "receivedamount": "20000/-","fundsreceived": "70%","status": "Not Received"
        }
        ];
        return data;
    }
});
