import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        var data = [{
                "participantId": "1",
                "participantType": "Funder",
                "participantName": "Sweta Vahia",
                "regStatus": false
            },
            {
                "participantId": "2",
                "participantType": "Funder-Raiser",
                "participantName": "Rakesh Bharati",
                "regStatus": true
            },
            {
                "participantId": "3",
                "participantType": "Customer",
                "participantName": "Shraddha Kharat",
                "regStatus": false
            }
        ];

        return data;
    }
});