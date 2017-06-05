import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
    location: config.locationType,
    rootURL: config.rootURL
});

Router.map(function() {
  this.route('home');
  this.route('login');
  this.route('sign-up');
  this.route('coming-soon');
  this.route('start-campaign');
  this.route('reward');
  this.route('fund-raiser');
  this.route('browse');
  this.route('funder-history');
  this.route('report');
  this.route('service-provider', function() {
      this.route('participants', {
          path: '/participants'
      });
      this.route('campaigns', {
          path: '/campaigns'
      });
      this.route('report', {
          path: '/report'
      }); 
      this.route('transaction-history',{
          path: '/transaction-history'
      });
      this.route('froala-editor',{
          path: '/froala-editor'
      });      
  });
  this.route('campaign-detail');
  this.route('fund-raiser', function() {
      this.route('list-approve-bids', {
          path: '/list-approve-bids'
      });
      this.route('dashboard', {
          path: '/dashboard'
      });
      this.route('status-of-fund-transfer', {
          path: '/status-of-fund-transfer'
      });
      this.route('execute-campaign', {
          path: '/execute-campaign'
      });
      this.route('deliver-commitments', {
          path: '/deliver-commitments'
      });
  });
  this.route('customer', function() {
      this.route('status-commitments', {
          path: '/status-commitments'
      });
  });
  this.route('education');
  this.route('children');
  this.route('animal-welfare');
  this.route('environment');
  this.route('film');
  this.route('dance');
  this.route('signup');
  this.route('help');
  this.route('funder_dashboard');
  this.route('addrewards');
  this.route('confirmemail');
  this.route('reset-password');
  this.route('about-fundraiser');
  this.route('AboutFundraiser');
  this.route('agreement');
  this.route('FAQs');
  this.route('introvideo');
});

export default Router;