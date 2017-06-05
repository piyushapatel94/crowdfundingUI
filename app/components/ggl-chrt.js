import Ember from 'ember';

export default Ember.Component.extend({
    didInsertElement() {
        google.charts.load('upcoming', {
            'packages': ['geochart']
        });
        google.charts.setOnLoadCallback(drawRegionsMap);

        function drawRegionsMap() {

            var data = google.visualization.arrayToDataTable([
                ['Country', 'Campaigns', 'Percentage of Funder'],
                ['Germany', 100, 65],
                ['United States', 300, 20],
                ['Brazil', 400, 86],
                ['Canada', 500, 50],
                ['France', 600, 60],
                ['Russia', 700, 80],
                ['India', 200, 90],
                ['Australia', 800, 80],
                ['Pakistan', 50, 40],
                ['China', 900, 70],
                ['Greenland', 1000, 49]

            ]);

            var options = {};

            var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

            chart.draw(data, options);
        }
    }
});