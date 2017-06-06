import Ember from 'ember';
var total = 0;
export default Ember.Controller.extend({
    isShowingHelp: false,
    isShowingModal: false,

    actions: {

         toggleModal: function() {

             this.toggleProperty('isShowingModal'); 
         },

         toggleModal1: function() {

             this.toggleProperty('isShowingModals'); 
         },
         toggleModal2: function() {

             this.toggleProperty('isShowingModalss'); 
         },
          toggleModal3: function() {

             this.toggleProperty('isShowingModalsss'); 
         },
          toggleModal4: function() {

             this.toggleProperty('isShowingModalssss'); 
         },
          toggleModal5: function() {

             this.toggleProperty('isShowingModalsssss'); 
         },
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
            console.log("display");

        },
        addtocart : function(){
            var quantity = this.get("quantity");
            var amt = 1000* quantity;
            total =total + amt;
            console.log(total);
            var jsonvariable =Ember.$.getJSON("reward.json");
            console.log( Ember.inspect(jsonvariable) )
            console.log("jsonvariable",JSON.stringify(jsonvariable));
                console.log("ResponseText: " + JSON.stringify(jsonvariable));
                
                //  console.log(str.reward[0].rewardamount);
                 // alert(object.toSource(jsonvariable));
        this.toggleProperty('isShowingModals'); 
        //var str =JSON.parse(jsonvariable);
        // console.log(str);
             var title="";
             var array2 = [];
             console.log("JSON2:before function  "+array2);
            Ember.$.getJSON( "reward.json", function(json) {
                var array = [];
                for (var key in json) {
                    if (json.hasOwnProperty(key)) {
                        var item = json[key];
                        array.push({
                            rewardtitle: item.rewardtitle,
                            rewardamount: item.rewardamount,
                            rewarddescription: item.rewarddescription
                        });   
                        console.log("rewardtitle"+JSON.stringify(array[0]));
                        /*var item2 =json[key];
                        array2.push({
                            rewardtitle: item.rewardtitle,
                            rewardamount: item.rewardamount,
                            rewarddescription: item.rewarddescription
                        })   */      
                    }
                }
                console.log("JSON: "+ JSON.stringify(array));
                title=  JSON.stringify(array[0].rewardtitle);
                console.log('title :'+title);
                 // alert("title :",title);
                  
             //  this.set('myrewardtitle',title);
               /* array2=array.slice();
                console.log("JSON2: "+ JSON.stringify(array2));*/

               // var array2 = array.concat();

               for(var i=0;i<array.length;i++){
                   console.log("1");
                   array2[i]=array[i];
                    console.log("2");
               }

            });

                this.set('myrewardtitle',title);

              /*    var array3=[];
                    array3=array.slice();
                    console.log("JSON3: "+ JSON.stringify(array3));*/
            
            console.log("JSON2: "+ JSON.stringify(array2));
          
           /*   var jsstr=JSON.parse(abc);
                console.log(abc.rewardamount);
                for(var i=0;i<JSONItems.length;i++){
                    console.log(JSONItems[i]);
          
         }*/
           /*           var JSONItems1 = [];
                        var strs=Ember.$.get( "reward.json", function( data){
                        JSONItems1 = JSON.parse(data);
                        console.log(JSONItems1);
            });
                    console.log(strs);*/
            //console.log(abc.reward[0]);
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