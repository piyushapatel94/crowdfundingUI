import Ember from 'ember';

import {
    validator,
    buildValidations
} from 'ember-cp-validations';

var Validations = buildValidations({
    otp:[
        validator('presence', true),
        validator('format', {
            regex:/^[0-9]+$/,
            type: 'number'
        })
    ],
})

export default Ember.Controller.extend(Validations,{

    actions: {

        toggleModal:function(){
            var email = this.get('email');
            if (email === null || email === undefined || email === "") {
                this.set('errormessage', "Please fill in at least one field")
                return;
            }
              this.toggleProperty('isShowingModal');
        },
        resetpassword:function(){
              this.transitionToRoute('reset-password');
        }
    }
});
