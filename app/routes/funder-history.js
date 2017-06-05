import Ember from 'ember';

export default Ember.Route.extend({

    model(){
       
      //var data = [{"uid":uid,"fname":fname,"java":javascore,"language":languagescore,"fundamental":fundamentalscore}];

       var  data = [{"camp-name":"Pursuit of Happiness - Save Girl Child !!","contribution":"20000","status":"Received"},
       {"camp-name":"Gift a Dream Camp","contribution":"10000","status":"Received"},
       {"camp-name":"Help The CUPA","contribution":"30000","status":"Received"}
       ];
        return data;
    }

    

});
