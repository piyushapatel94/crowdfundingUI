import Ember from 'ember';

export default Ember.Route.extend({
     model(){
         var userType = sessionStorage.getItem('userType');
        var showFunderModules = sessionStorage.getItem('showFunderModules');
        var showReward = sessionStorage.getItem('showReward');

        if (userType === undefined || userType === null) {
            alert("Please Login");
            sessionStorage.setItem('showcallRewards', true);
            this.transitionTo('login');
        } else if (userType === "Funder") {
            this.controllerFor('application').set('userType', userType);
            this.controllerFor('application').set('showUser', true);
            this.controllerFor('home').set('showFunder', true);
            this.controllerFor('application').set('showFunderModules', true);
            this.controllerFor('application').set('showReward', false);
        } else {
            this.controllerFor('application').set('userType', userType);
            this.controllerFor('application').set('showUser', true);
        }

    }
});
