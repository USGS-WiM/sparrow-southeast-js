/**
 * Created by bdraper on 4/27/2015.
 */

/**UPDATE impoartant! -- when updating to a new application, make sure that all visiblelayer Ids match the corresponding REST service layer.
    Also make sure that titles are appropriate
 **/
var allLayers;

require([
    "esri/geometry/Extent",
    "esri/layers/WMSLayerInfo",
    "esri/layers/FeatureLayer",
    "esri/layers/ImageParameters",
    "esri/layers/LayerDrawingOptions",
    "dojo/domReady!"
], function (Extent, WMSLayerInfo, FeatureLayer, ImageParameters, LayerDrawingOptions) {
    var sparrowOverlay;
    if ($("#radio1")[0].checked == true) {
        sparrowOverlay = 0;
    } else {
        sparrowOverlay = 1;
    }

    var layerOptions = new LayerDrawingOptions();
    layerOptions.scaleSymbols = true;

    allLayers = [
        {
            groupHeading: "SPARROW Model",
            showGroupHeading: true,
            includeInLayerList: true,
            layers: {
                "SPARROW Model Results": {
                    url: serviceBaseURL,
                    visibleLayers: [sparrowOverlay],
                    options: {
                        id: "SparrowRanking",
                        opacity: 0.75,
                        visible: true,
                        layerDrawingOptions: layerOptions
                    },
                    wimOptions: {
                        type: "layer",
                        layerType: "agisDynamic",
                        includeInLayerList: true,
                        hasOpacitySlider: true,
                        hasZoomto: false,
                        includeLegend: false
                    }
                }
            }
        },
        {
            groupHeading: "Model Calibration Sites",
            showGroupHeading: true,
            includeInLayerList: true,
            layers: {
                "Phosphorus Calibration Sites": {
                    url: serviceBaseURL,
                    visibleLayers: [36],
                    options: {
                        id: "phosCalibration",
                        opacity: 0.85,
                        visible: false
                    },
                    wimOptions: {
                        type: "layer",
                        layerType: "agisDynamic",
                        includeInLayerList: true,
                        zoomScale: 144448,
                        hasOpacitySlider: true,
                        hasZoomto: false,
                        includeLegend: true
                    }
                },
                "Nitrogen Calibration Sites": {
                    url: serviceBaseURL,
                    visibleLayers: [37],
                    options: {
                        id: "nitroCalibration",
                        visible: false,
                        opacity: 0.85
                    },
                    wimOptions: {
                        type: "layer",
                        layerType: "agisDynamic",
                        includeInLayerList: true,
                        hasOpacitySlider: true,
                        hasZoomto: false,
                        includeLegend: false
                    }
                },
                "Suspended Sediment Calibration Sites": {
                    url: serviceBaseURL,
                    visibleLayers: [39],
                    options: {
                        id: "sedimentCalibration",
                        visible: false,
                        opacity: 0.85
                    },
                    wimOptions: {
                        type: "layer",
                        layerType: "agisDynamic",
                        includeInLayerList: true,
                        hasOpacitySlider: true,
                        hasZoomto: false,
                        includeLegend: false
                    }
                },
                "Streamflow Calibration Sites": {
                    url: serviceBaseURL,
                    visibleLayers: [38],
                    options: {
                        id: "streamflowCalibration",
                        visible: false,
                        opacity: 0.85
                    },
                    wimOptions: {
                        type: "layer",
                        layerType: "agisDynamic",
                        includeInLayerList: true,
                        hasOpacitySlider: true,
                        hasZoomto: false,
                        includeLegend: false
                    }
                }
            }
        },
       /*  {
            groupHeading: "Auxiliary Layers",
            showGroupHeading: true,
            includeInLayerList: true,
            layers: {
                "Southeast Reaches - zoom in to view": {
                    url: serviceBaseURL,
                    visibleLayers: [42],
                    options: {
                        id: "streams",
                        visible: false,
                        minScale: 3155581.108577
                    },
                    wimOptions: {
                        type: "layer",
                        layerType: "agisDynamic",
                        includeInLayerList: true,
                        hasOpacitySlider: true,
                        hasZoomto: false,
                        zoomScale: 3155581.108577,
                        includeLegend: false
                    }
                },
                "Reaches > 150 cfs": {
                    url: serviceBaseURL,
                    visibleLayers: [41],
                    options: {
                        id: "gt150",
                        visible: false
                    },
                    wimOptions: {
                        type: "layer",
                        layerType: "agisDynamic",
                        includeInLayerList: true,
                        hasOpacitySlider: true,
                        hasZoomto: false,
                        includeLegend: false
                    }
                },
                "Mainstems": {
                    url: serviceBaseURL,
                    visibleLayers: [40],
                    options: {
                        id: "mainstem",
                        visible: false
                    },
                    wimOptions: {
                        type: "layer",
                        layerType: "agisDynamic",
                        includeInLayerList: true,
                        hasOpacitySlider: true,
                        hasZoomto: false,
                        includeLegend: false
                    }
                },
                "Land Use 2012": {
                    url: "https://gis.wim.usgs.gov/arcgis/rest/services/SWTrends/lu2012_100515_test/ImageServer",
                    options: {
                        id: "lu2012",
                        opacity: 0.5,
                        visible: false
                    },
                    wimOptions: {
                        type: "layer",
                        layerType: "agisImage",
                        includeInLayerList: true,
                        hasOpacitySlider: true,
                        hasZoomto: false,
                        includeLegend: false
                    }
                }
            }
        } */
    ];
});
