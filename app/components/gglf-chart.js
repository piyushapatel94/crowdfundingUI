import Ember from 'ember';

export default Ember.Component.extend({
    didInsertElement() {
        google.charts.load('upcoming', {
            'packages': ['geochart']
        });
        google.charts.setOnLoadCallback(drawRegions);

        function drawRegions() {

            var data = google.visualization.arrayToDataTable([
                ['Country', 'Campaign Initiated', 'Campaign Closed'],
                ['Germany', 850, 700],
                ['United States', 1500, 1300],
                ['Brazil', 400, 365],
                ['Canada', 500, 450],
                ['France', 600, 590],
                ['Russia', 700, 654],
                ['India', 500, 450],
                ['Australia', 800, 650],
                ['Pakistan', 50, 20],
                ['China', 900, 700],
                ['Greenland', 1000, 800]

            ]);

            var options = {};

            var chart2 = new google.visualization.GeoChart(document.getElementById('regions_div2'));

            chart2.draw(data, options);
        }
    }
});