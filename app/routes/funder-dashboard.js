import Ember from 'ember';

export default Ember.Route.extend({
    model() {
          this.controllerFor('funder-dashboard').set('isAll',true);
          
 
        var reportController = this.controllerFor('report');
        var campaignname = reportController.get('campaignname');
        var isSeedfunding = reportController.get('isSeedfunding');
        var isHamariganga = reportController.get('isHamariganga');
        var isPlanttree  =  reportController.get('isPlanttree');

        console.log('campaignname'+ campaignname);
       this.controllerFor('funder-dashboard').get('isSeedfunding');
     this.controllerFor('funder-dashboard').get('isHamariganga');
       this.controllerFor('funder-dashboard').get('isPlanttree');
        if (campaignname === 'Seed Funding') {
            isSeedfunding = false;
            this.controllerFor('funder-dashboard').set('isAll',false);
           this.controllerFor('funder-dashboard').set('isSeedfunding', true);
            this.controllerFor('funder-dashboard').set('isHamariganga', false);
            this.controllerFor('funder-dashboard').set('isPlanttree', false);
        } 
            else if (campaignname === 'Hamari Ganga') {
            isHamariganga = false;
            this.controllerFor('funder-dashboard').set('isAll',false);
            this.controllerFor('funder-dashboard').set('isSeedfunding', false);
            this.controllerFor('funder-dashboard').set('isHamariganga', true);
            this.controllerFor('funder-dashboard').set('isPlanttree', false);
            
            
        }
        
        else if (campaignname === 'Plant Tree') {
            isPlanttree = false;
            this.controllerFor('funder-dashboard').set('isAll',false);
             this.controllerFor('funder-dashboard').set('isSeedfunding', false);
              this.controllerFor('funder-dashboard').set('isHamariganga', false);
            this.controllerFor('funder-dashboard').set('isPlanttree', true);
            
        }
        
    }
        
});
