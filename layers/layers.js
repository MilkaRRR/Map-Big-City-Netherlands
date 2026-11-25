var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_WorldBankOfficialBoundariesAdmin0_1 = new ol.format.GeoJSON();
var features_WorldBankOfficialBoundariesAdmin0_1 = format_WorldBankOfficialBoundariesAdmin0_1.readFeatures(json_WorldBankOfficialBoundariesAdmin0_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WorldBankOfficialBoundariesAdmin0_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WorldBankOfficialBoundariesAdmin0_1.addFeatures(features_WorldBankOfficialBoundariesAdmin0_1);
var lyr_WorldBankOfficialBoundariesAdmin0_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WorldBankOfficialBoundariesAdmin0_1, 
                style: style_WorldBankOfficialBoundariesAdmin0_1,
                popuplayertitle: 'World Bank Official Boundaries - Admin 0',
                interactive: false,
                title: '<img src="styles/legend/WorldBankOfficialBoundariesAdmin0_1.png" /> World Bank Official Boundaries - Admin 0'
            });
var format_BigcityNid_2 = new ol.format.GeoJSON();
var features_BigcityNid_2 = format_BigcityNid_2.readFeatures(json_BigcityNid_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BigcityNid_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BigcityNid_2.addFeatures(features_BigcityNid_2);
var lyr_BigcityNid_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BigcityNid_2, 
                style: style_BigcityNid_2,
                popuplayertitle: 'Big city Nid',
                interactive: true,
    title: 'Big city Nid<br />\
    <img src="styles/legend/BigcityNid_2_0.png" /> 70000 - 200000<br />\
    <img src="styles/legend/BigcityNid_2_1.png" /> 200000 - 300000<br />\
    <img src="styles/legend/BigcityNid_2_2.png" /> 300000 - 500000<br />\
    <img src="styles/legend/BigcityNid_2_3.png" /> 500000 - 700000<br />\
    <img src="styles/legend/BigcityNid_2_4.png" /> 700000 - 850000<br />\
    <img src="styles/legend/BigcityNid_2_5.png" /> 850000 - 1050000<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_WorldBankOfficialBoundariesAdmin0_1.setVisible(true);lyr_BigcityNid_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_WorldBankOfficialBoundariesAdmin0_1,lyr_BigcityNid_2];
lyr_WorldBankOfficialBoundariesAdmin0_1.set('fieldAliases', {'ISO_A3': 'ISO_A3', 'ISO_A2': 'ISO_A2', 'WB_A3': 'WB_A3', 'WB_STATUS': 'WB_STATUS', 'SOV_ISO_A3': 'SOV_ISO_A3', 'SOV_NAME': 'SOV_NAME', 'NAM_0': 'NAM_0', 'CONTINENT': 'CONTINENT', 'WB_REGION': 'WB_REGION', 'WB_INCOME': 'WB_INCOME', 'ADM0CD_c': 'ADM0CD_c', });
lyr_BigcityNid_2.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'X': 'X', 'Y': 'Y', 'Population': 'Population', 'Men': 'Men', 'Women': 'Women', });
lyr_WorldBankOfficialBoundariesAdmin0_1.set('fieldImages', {'ISO_A3': 'TextEdit', 'ISO_A2': 'TextEdit', 'WB_A3': 'TextEdit', 'WB_STATUS': 'TextEdit', 'SOV_ISO_A3': 'TextEdit', 'SOV_NAME': 'TextEdit', 'NAM_0': 'TextEdit', 'CONTINENT': 'TextEdit', 'WB_REGION': 'TextEdit', 'WB_INCOME': 'TextEdit', 'ADM0CD_c': 'TextEdit', });
lyr_BigcityNid_2.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Population': 'TextEdit', 'Men': 'TextEdit', 'Women': 'TextEdit', });
lyr_WorldBankOfficialBoundariesAdmin0_1.set('fieldLabels', {'ISO_A3': 'no label', 'ISO_A2': 'no label', 'WB_A3': 'no label', 'WB_STATUS': 'no label', 'SOV_ISO_A3': 'no label', 'SOV_NAME': 'no label', 'NAM_0': 'no label', 'CONTINENT': 'no label', 'WB_REGION': 'no label', 'WB_INCOME': 'no label', 'ADM0CD_c': 'no label', });
lyr_BigcityNid_2.set('fieldLabels', {'id': 'hidden field', 'Name': 'inline label - visible with data', 'X': 'hidden field', 'Y': 'hidden field', 'Population': 'inline label - visible with data', 'Men': 'inline label - visible with data', 'Women': 'inline label - visible with data', });
lyr_BigcityNid_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});