import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        campaignDetails: function(arg, arg1, arg2, arg3) {
            var imgURL = arg;
            var desc = arg1;
            var c_title = arg2;
            var createdby = arg3;
            sessionStorage.setItem('imgURL', arg);
            sessionStorage.setItem('desc', arg1);
            sessionStorage.setItem('c_title', arg2);
            sessionStorage.setItem('createdby', arg3);
            this.transitionToRoute('campaign-detail');
        },
    }
});