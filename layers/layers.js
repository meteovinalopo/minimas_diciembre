var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'Stamen Terrain',
    'type': 'base',
    source: new ol.source.Stamen({
        layer: 'terrain'
    })
})
]
});
var lyr_Temperatura_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "Temperatura",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Temperatura_0.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-122677.984567, 4598707.791712, -54349.796701, 4689455.876309]
                            })
                        });var format_Lmitesmunicipales_1 = new ol.format.GeoJSON();
var features_Lmitesmunicipales_1 = format_Lmitesmunicipales_1.readFeatures(json_Lmitesmunicipales_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lmitesmunicipales_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Lmitesmunicipales_1.addFeatures(features_Lmitesmunicipales_1);var lyr_Lmitesmunicipales_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lmitesmunicipales_1, 
                style: style_Lmitesmunicipales_1,
                title: '<img src="styles/legend/Lmitesmunicipales_1.png" /> Límites municipales'
            });var format_Datos_2 = new ol.format.GeoJSON();
var features_Datos_2 = format_Datos_2.readFeatures(json_Datos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Datos_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Datos_2.addFeatures(features_Datos_2);var lyr_Datos_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Datos_2, 
                style: style_Datos_2,
                title: '<img src="styles/legend/Datos_2.png" /> Datos'
            });

lyr_Temperatura_0.setVisible(true);lyr_Lmitesmunicipales_1.setVisible(true);lyr_Datos_2.setVisible(true);
var layersList = [baseLayer,lyr_Temperatura_0,lyr_Lmitesmunicipales_1,lyr_Datos_2];
lyr_Lmitesmunicipales_1.set('fieldAliases', {'INSPIREID': 'INSPIREID', 'COUNTRY': 'COUNTRY', 'NATLEVEL': 'NATLEVEL', 'NATCODE': 'NATCODE', 'Municipio': 'Municipio', 'CODNUT1': 'CODNUT1', 'CODNUT2': 'CODNUT2', 'CODNUT3': 'CODNUT3', });
lyr_Datos_2.set('fieldAliases', {'ID': 'ID', 'FUENTE': 'FUENTE', 'COMARCA': 'COMARCA', 'ESTACION': 'ESTACION', 'Tmin_26 y': 'Tmin_26 y', 'x': 'x', 'y': 'y', });
lyr_Lmitesmunicipales_1.set('fieldImages', {'INSPIREID': 'Hidden', 'COUNTRY': 'Hidden', 'NATLEVEL': 'Hidden', 'NATCODE': 'Hidden', 'Municipio': 'Hidden', 'CODNUT1': 'Hidden', 'CODNUT2': 'Hidden', 'CODNUT3': 'Hidden', });
lyr_Datos_2.set('fieldImages', {'ID': 'Hidden', 'FUENTE': 'Hidden', 'COMARCA': 'Hidden', 'ESTACION': 'TextEdit', 'Tmin_26 y': 'TextEdit', 'x': 'Hidden', 'y': 'Hidden', });
lyr_Lmitesmunicipales_1.set('fieldLabels', {});
lyr_Datos_2.set('fieldLabels', {'ESTACION': 'no label', 'Tmin_26 y': 'no label', });
lyr_Datos_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});