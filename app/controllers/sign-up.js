import Ember from 'ember';

export default Ember.Controller.extend({
    showRegResponse: false,
    actions: {
        registerUser: function() {
            this.set('showRegResponse', true);
        },

        regOK: function() {
            var mycontroller = this;
            mycontroller.set('showRegResponse', false);
            mycontroller.transitionToRoute('home');
        }
    },

    dismissModal: function() {
        this.set('showRegResponse', false);
    }
});