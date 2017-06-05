import Ember from 'ember';

export default Ember.Controller.extend({
        education : true, 
        
actions: {
    all:function(){
       this.set('isAll',true);{
         this.set('isEducationAuthorize', true);
            this.set('isChildrenAuthorize', true);
            this.set('isAnimalwelfareAuthorize', true);
            this.set('isEnvironmentAuthorize', true);
            this.set('isFlimAuthorize', true);
            this.set('isDanceAuthorize', true);
            console.log('0');
       }
        
    },

    registereducation: function() {
            //alert("Called");
            this.set('isAll',false);
            this.set('isEducationAuthorize', true);
            this.set('isChildrenAuthorize', false);
            this.set('isAnimalwelfareAuthorize', false);
            this.set('isEnvironmentAuthorize', false);
            this.set('isFlimAuthorize', false);
            this.set('isDanceAuthorize', false);
            this.set('isAll',false);
            console.log('1');
        },

     registerchildren: function(){
         this.set('isAll',false);
            this.set('isEducationAuthorize', false);
            this.set('isChildrenAuthorize', true);
            this.set('isAnimalwelfareAuthorize', false);
            this.set('isEnvironmentAuthorize', false);
            this.set('isFlimAuthorize', false);
            this.set('isDanceAuthorize', false);
            this.set('isAll',false);
           console.log('2');
        },  

          registeranimalwelfare: function(){
              this.set('isAll',false);
            this.set('isEducationAuthorize', false);
            this.set('isChildrenAuthorize', false);
            this.set('isAnimalwelfareAuthorize', true);
            this.set('isEnvironmentAuthorize', false);
            this.set('isFlimAuthorize', false);
            this.set('isDanceAuthorize', false);
            this.set('isNull',false)
           console.log('3');
    },
          registerenvironment: function(){
             this.set('isAll',false);
            this.set('isEducationAuthorize', false);
            this.set('isChildrenAuthorize', false);
            this.set('isAnimalwelfareAuthorize', false);
            this.set('isEnvironmentAuthorize', true);
            this.set('isFlimAuthorize', false);
            this.set('isDanceAuthorize', false);
            console.log('4');
          },
            registerflim: function(){
             this.set('isAll',false);
            this.set('isEducationAuthorize', false);
            this.set('isChildrenAuthorize', false);
            this.set('isAnimalwelfareAuthorize', false);
            this.set('isEnvironmentAuthorize', false);
            this.set('isFlimAuthorize', true);
            this.set('isDanceAuthorize', false);
            console.log('5');
        },
          registerdance: function(){
            this.set('isAll',false);
            this.set('isEducationAuthorize', false);
            this.set('isChildrenAuthorize', false);
            this.set('isAnimalwelfareAuthorize', false);
            this.set('isEnvironmentAuthorize', false);
            this.set('isFlimAuthorize', false);
            this.set('isDanceAuthorize', true);
            console.log('6');
          },
    

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

        goTo: function(arg) {
            if (arg === "education")
                this.transitionToRoute('education');
            else if (arg === 'children')
                this.transitionToRoute('children');
            else if (arg === 'animal-welfare')
                this.transitionToRoute('animal-welfare');
            else if (arg === 'environment')
                this.transitionToRoute('environment');
            else if (arg === 'film')
                this.transitionToRoute('film');
            else if (arg === 'dance')
                this.transitionToRoute('dance');
        }  ,

        truncateText:function(text, maxLength) {
            var ret = text;
            var retLen=ret.length;
            if (retLen > maxLength)
            {
            ret = (ret.substr(0,maxLength)) + "...";
            }
            return ret;
        },
},


});