import Ember from 'ember';

import {
    validator,
    buildValidations
} from 'ember-cp-validations';

var Validations = buildValidations({

     password: [
      validator('presence', true),
      validator('length', {
        min: 6,
        max: 12
      }),
      validator('format', {
        regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,10}$/,
        message: '{description} must include at least one upper case letter, one lower case letter, and a number'
      }),
      validator('length', {
        isWarning: true,
        min: 6,
        message: 'What kind of weak password is that?'
      })
    ],
})

export default Ember.Controller.extend(Validations,{
    actions: {

        toggleModal:function(){
              this.toggleProperty('isShowingModal');
        },

        toggleModal1:function(){
              this.toggleProperty('isShowingModals');
        },
        reset:function(){
            window.location.reload(true);
        }
    }
});
