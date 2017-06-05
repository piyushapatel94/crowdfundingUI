import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        var userType = sessionStorage.getItem('userType');
        var adminHeader = sessionStorage.getItem('showAdminHeaderModules');
        var goToStartCampaign = sessionStorage.getItem('goToStartCampaign');
        var showFunderModules = sessionStorage.getItem('showFunderModules');
        var showStartCampaign = sessionStorage.getItem('showStartCampaign');

        if (userType === null || userType === undefined) {
            this.controllerFor('application').set('userType', "Login");
            this.controllerFor('application').set('showUser', false);
            this.controllerFor('application').set('showAdminHeaderModules', true);
            this.controllerFor('application').set('showFunderModules', false);
            this.controllerFor('application').set('showStartCampaign', true);
        } else {
            this.controllerFor('application').set('userType', userType);
            this.controllerFor('application').set('showUser', true);
            this.controllerFor('application').set('showAdminHeaderModules', adminHeader);
            this.controllerFor('application').set('showFunderModules', showFunderModules);
            this.controllerFor('application').set('showStartCampaign', showStartCampaign);
        }

        var listItem = [{
                "name": "Pricing",
                "description": "It is free to launch your fundraiser. Pay less as you " +
                               "grow your funder base and make your campaign more popular on Facebook!"
            }, {
                "name": "What we offer",
                "description": "Competitive fees to maximize social impact. " + 
                               "No penalties for missing goal. " + 
                               "Fees linked to no. of Facebook shares. " +
                               "No setup or hidden costs. " +
                               "80G tax exemption for Indian citizens. " +
                               "Complete transparency. "
            }, {
                "name": "Transaction Fees",
                "description": "5% and/or An international wire fee US$ 40 per remittance will" +
                               " apply per fundraiser if foreign currency has been collected. " +
                               "Additional currency exchange fees may also apply. Service taxes " +
                               "(if applicable) will be charged on aggregate transaction and platform fees."
        }];

        this.controllerFor('application').set('listItem', listItem);
        this.controllerFor('reward').set('listItem', listItem);

        if (!goToStartCampaign) {
           this.transitionTo('home');
        }
    }
});