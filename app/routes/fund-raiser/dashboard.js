import Ember from 'ember';

export default Ember.Route.extend({
     model() {
          this.controllerFor('fund-raiser.dashboard').set('isAll',true);
        var reportController = this.controllerFor('fund-raiser.status-of-fund-transfer');
        var campaignname = reportController.get('campaignname');
        var isAvarice = reportController.get('isAvarice');
        var isSpin = reportController.get('isSpin');
        var isRhinos = reportController.get('isRhinos');

      this.controllerFor('fund-raiser.dashboard').get('isAvarice');
      this.controllerFor('fund-raiser.dashboard').get('isSpin');
      this.controllerFor('fund-raiser.dashboard').get('isRhinos');  
        console.log('campaignname'+ campaignname);

         if (campaignname === 'Avarice - A short film') {
            isAvarice = false;
            this.controllerFor('fund-raiser.dashboard').set('isAll',false);
           this.controllerFor('fund-raiser.dashboard').set('isAvarice', true);
            this.controllerFor('fund-raiser.dashboard').set('isSpin', false);
            this.controllerFor('fund-raiser.dashboard').set('isRhinos', false);
        } 
            else if (campaignname === 'Spin Be Fit') {
            isSpin = false;
            this.controllerFor('fund-raiser.dashboard').set('isAll', false);
           this.controllerFor('fund-raiser.dashboard').set('isAvarice', false);
            this.controllerFor('fund-raiser.dashboard').set('isSpin', true);
            this.controllerFor('fund-raiser.dashboard').set('isRhinos', false);
            
        }
        else if (campaignname === 'The Rhinos Need Help') {
            isRhinos = false;
            this.controllerFor('fund-raiser.dashboard').set('isAll', false);
           this.controllerFor('fund-raiser.dashboard').set('isAvarice', false);
            this.controllerFor('fund-raiser.dashboard').set('isSpin', false);
            this.controllerFor('fund-raiser.dashboard').set('isRhinos', true);
    }
     }
});
