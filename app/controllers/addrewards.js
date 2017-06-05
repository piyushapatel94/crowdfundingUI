import Ember from 'ember';
import {
    validator,
    buildValidations
} from 'ember-cp-validations';

var Validations = buildValidations({
    rewardtitle: [
         validator('presence', true),
        validator('format', {
            regex: /^[A-Za-z/-/-_/ ]+$/
        })
    ],

    rewardamount: [
        validator('presence', true),
        validator('format', {
            regex:/^[0-9.]+$/,
            type: 'number'
        })
    ],

    rewarddescription: [
        validator('presence', true),
        validator('length', {
         max: 160,
    
        })
    ],
});


export default Ember.Controller.extend(Validations,{
    actions:{
     saveRewards: function() {
            var rewardtitle = this.get('rewardtitle');
            var rewardamount = this.get('rewardamount');
            var rewarddescription = this.get('rewarddescription');
            //var deliveryDate = this.get('deliveryDate');
            
            if (rewardtitle === null || rewardtitle === undefined || rewardtitle === "") {
                this.set('rewardtitleerrormessage', "field cannot be empty")
                //return;
            }

            if (rewardamount === null || rewardamount === undefined || rewardamount === "") {
                this.set('rewardamounterrormessage', "field cannot be empty")
                //return;
            }

            if (rewarddescription === null || rewarddescription === undefined || rewarddescription === "") {
                this.set('rewarddescriptionerrormessage', "field cannot be empty")
                return;
            }

            /*if (deliveryDate === null || deliveryDate === undefined || deliveryDate === "") {
                this.set('dateerrormessage', "Date field cannot be empty")
                return;
            }*/
            this.set('isAddReward', false);
            this.toggleProperty('isSaveReward');
           
        },
        home2:function(){
              this.transitionToRoute('start-campaign');
         },
    }
});
