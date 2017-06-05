import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        var data=[ {
            "Id": "125", "campaignname": "xyz", "fundtransfer": "80%", "regStatus": true, "campStatus": false
        }
        , {
            "Id": "126", "campaignname": "abc", "fundtransfer": "40%", "regStatus": false, "campStatus": false
        }
        , {
            "Id": "127", "campaignname": "rtu", "fundtransfer": "100%", "regStatus": true, "campStatus": true
        }
        ];
        return data;
    }
});
