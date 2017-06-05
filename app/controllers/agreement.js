import Ember from 'ember';

export default Ember.Controller.extend({
      isShowingHelp: false,
    isShowingModal: false,

    actions: {
        agreement: function() {
            this.transitionToRoute('agreement');
        },
        norewardSelection: function(arg, arg1) {
            var amount = this.get('amount');
            if (amount === null || amount === undefined || amount === "") {
                this.set('amounterrormessage', "field cannot be empty")
                return;
            }
            var amount = arg;
            var reward = arg1;
            console.log(amount);
            this.set('message', "You have not selected any rewards and you want to contribute Rs "+ amount +" and You will get "+ reward +" reward. Do you want to continue?");
           
        },

        rewardSelection: function(arg, arg1) {
            var amount = arg;
            var reward = arg1;
            this.set('message', "You have selected Rs. " + amount + " and You will get " + reward + " reward. Do you want to continue?");
            console.log('rahul')
        },
        
        
        payment: function() {
             alert("Do not Refresh the page....");
            window.location.replace("https://www.billdesk.com/savepgi/");
        },

        showHelp: function() {
            this.toggleProperty('isShowingHelp');
        }
    }
});
