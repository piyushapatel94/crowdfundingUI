import Ember from 'ember';

export default Ember.Route.extend({
disabled: true,

    model() {
       if( sessionStorage.getItem('userType'))
     {
       this.controllerFor('campaign-detail').set('disabled', false);
       
     } else {
       this.controllerFor('campaign-detail').set('disabled', true);
     }
        

        var message = sessionStorage.getItem('imgURL');
        console.log("message" + message);
        var message1 = sessionStorage.getItem('desc');
        console.log("message1" + message1);
        var message2 = sessionStorage.getItem('c_title');
        console.log("message2" + message2);
        var message3 = sessionStorage.getItem('createdby');
        console.log("message3" + message3);
        this.controllerFor('campaign-detail').set('imgURL', message);
        this.controllerFor('campaign-detail').set('desc', message1);
        this.controllerFor('campaign-detail').set('c_title', message2);
        this.controllerFor('campaign-detail').set('createdby', message3);
    }

});