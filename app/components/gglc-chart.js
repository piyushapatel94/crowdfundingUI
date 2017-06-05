import Ember from 'ember';

export default Ember.Component.extend({
    didInsertElement() {
        google.charts.load('upcoming', {
            'packages': ['geochart']
        });
        google.charts.setOnLoadCallback(drawRegions);

        function drawRegions() {

            var data = google.visualization.arrayToDataTable([
                ['Country', 'Fund Initiated', 'Fund Received'],
                ['Germany', 1000000, 150000],
                ['United States', 3000000, 200000],
                ['Brazil', 40000000, 600000],
                ['Canada', 50000000, 500000],
                ['France', 60000000, 520000],
                ['Russia', 70000000, 853020],
                ['India', 20000000, 965420],
                ['Australia', 80000000, 5332320],
                ['Pakistan', 50000000, 2862350],
                ['China', 90000000, 7500000],
                ['Greenland', 85000000, 4900000]

            ]);

            var options = {};

            var chart1 = new google.visualization.GeoChart(document.getElementById('regions_div1'));

            chart1.draw(data, options);
        }
    }
});