import Ember from 'ember';
export default Ember.Controller.extend({
    columns: [{
            "propertyName": "campaignname",
            "title": "Campaign Name",
            "filterPlaceholder": "Enter Name"
        },
        {
            "propertyName": "startdate",
            "title": "Start Date",
            "filterPlaceholder": "Enter Start Date"
        },
        {
            "propertyName": "enddate",
            "title": "End date",
            "filterPlaceholder": "Enter End Date"
        },
        {
            "propertyName": "goalamount",
            "title": "Goal Amount",
            "filterPlaceholder": "Enter Goal Amount"
        },
        {
            "propertyName": "fundername",
            "title": "Funder Name",
            "filterPlaceholder": "Enter Funder Name"
        },
        {
            "propertyName": "fundercontribution",
            "title": "Funder Contribution",
            "filterPlaceholder": "Enter Funder Contribution"
        },
        {
            "propertyName": "fundstatus",
            "title": "Fund Status. Service Provider / FundRaiser",
            "filterPlaceholder": "Enter Status"
        },       
    ],
}); 