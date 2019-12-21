require([
    "esri/Map",
    "esri/views/MapView",
    "esri/layers/FeatureLayer",
    "esri/Graphic",
    "esri/layers/GraphicsLayer",
    "esri/geometry/Point",
    "esri/widgets/Legend"
  ], function(Map, MapView,FeatureLayer,Graphic,GraphicsLayer,Point,Legend) {

    var map = new Map({
      basemap: "dark-gray",
    });

    var view = new MapView({
      container: "viewDiv",
      map: map,
      center: [27,44.8],
      zoom: 5,
      scale:2341162
      //2341162
    });

    var layer = new FeatureLayer({
        url: "https://services7.arcgis.com/96WiU7O7nBMDhJ4y/arcgis/rest/services/regiunea_muntenia/FeatureServer",
       
    });
    map.add(layer);

    

    // -----
    var coordsWidget = document.createElement('div');
    coordsWidget.id = "coordsWidget";
    coordsWidget.className="esri-widget esri-component";
    coordsWidget.style.padding="7px 15px 5px";

    view.ui.add(coordsWidget,"bottom-right");

    function showCoordinates(pt) {
        var coords = "Lat/Lon " + pt.latitude.toFixed(3) + " " + pt.longitude.toFixed(3) +
        " | Scale 1:" + Math.round(view.scale * 1) / 1 +
        " | Zoom " + view.zoom;

        coordsWidget.innerHTML = coords;
        // console.log(coords);
    }



    
    // -----------------------------------------------------------------------------------------------------------------------------------
    let k = 0;
    let pointsZ2 = [];
    function showCoordinatess(pt) {
        var coords = "" +  pt.longitude.toFixed(3)+ " " +  pt.latitude.toFixed(3);

        // coordsWidget.innerHTML = coords;
        pointsZ2[k] = {
            long: pt.longitude.toFixed(3),
            lat: pt.latitude.toFixed(3)
        };
        drawPoint(pointsZ2,k);
        k++;
        console.log(coords);
    }

    // -------------------------------------------------------------------------------------------------------------------------------------




    view.watch("stationary",function(isStationary) {
        showCoordinates(view.center);
    });

    view.on("pointer-move",function(evt) {
        showCoordinates(view.toMap({x: evt.x,y: evt.y}));
    })
    view.on("click",function(evt) {
        showCoordinatess(view.toMap({x: evt.x,y: evt.y}));
        // console.log(evt.x + " " + evt.y);
    })

    // -----------------------------------------------------------------------------------------------


    // /// -------------------- ADD A POINT GRAPHIC 
    var graphicsLayer = new GraphicsLayer();
    map.add(graphicsLayer);

    

    let soilNutrientColorCodes = ["#ED4F4F","#4CF07A","#1A0CBB","#FF21C1","#756767","#C1DA28"];


    
    function drawPoint(arr,pos) {
        var point = {
            type: "point",
            longitude: arr[pos].long,
            latitude: arr[pos].lat 
        };
        
        
        let idx = Math.floor(Math.random() * 6);
        // console.log("idx is " + idx);

        
        var simpleMarkerSymbol = {
            type: "simple-marker",
            color: soilNutrientColorCodes[idx], // orange
            // outline: {
            //     color: [255,255,255], // white
            //     width: 1
            // },
            size: 7
        };
    
        // create attributes
        // var attributes = {
        //     Name: "My point",
        //     Location: " Point somewhere in Muntenia"
        // };
    
        // create popup template
        // var popupTemplate = {
        //     title: "{Name}",
        //     content: "I am located at <b>{Location}</b>."
        // };
    
        var pointGraphic = new Graphic({
            geometry: point,
            symbol: simpleMarkerSymbol,
            // attributes: attributes,
            // popupTemplate: popupTemplate
        });
        
        graphicsLayer.add(pointGraphic);
    
    }

  

    for (let i  = 1 ;i < coordsObj.length; i++) {
        drawPoint(coordsObj,i);
    }
    for (let i = 1; i < coordsObj2.length; i++) {
        drawPoint(coordsObj2,i);
    }
    for (let i = 1; i < coordsObj3.length; i++) {
        drawPoint(coordsObj3,i);
    }
    for (let i = 1; i < coordsObj4.length; i++) {
        drawPoint(coordsObj4,i);
    }
    for (let i = 1; i < coordsObj5.length; i++) {
        drawPoint(coordsObj5,i);
    }

    function drawZone1() {
        var graphicsLayer = new GraphicsLayer();
        map.add(graphicsLayer);
        var zone1 = {
            type: "polygon",
            rings: [
                [24.413,45.076],
                [23.771,44.128],
                [24.835,44.103],
                [24.949,44.138],
                [25.081,44.270],
                [25.204,44.449],
                [25.111,44.687],
                [24.874,44.803],
                [24.602,45.008],
                [24.413,45.076]
            ]
        };

        var simpleFillSymbol = {
            type: "simple-fill",
            color: [0,139,79,0.1], // orange opacity 80%
            outline: {
                color: [255,255,255],
                width: 1
            },
            // style: "backward-diagonal"
        };

        var polygonGraphic = new Graphic({
            geometry: zone1,
            symbol: simpleFillSymbol
        });
        
        graphicsLayer.add(polygonGraphic);
    }

    function drawZone2() {
        var graphicsLayer = new GraphicsLayer();
        map.add(graphicsLayer);
        var zone2 = {
            type: "polygon",
            rings: [
                // [26.019,44.835],
                [25.304,44.748],
                [25.646,44.844],
                [25.730,45.047],
                [25.761,45.273],
                [25.638,45.483],
                [25.849,45.643],
                [25.800,45.759],
                [25.475,45.802],
                [24.425,45.133],
                [24.398,45.081],
                [24.596,45.012],
                [24.860,44.807],
                [25.102,44.698]
            ]
        };

        var simpleFillSymbol = {
            type: "simple-fill",
            color: [50,240,79,0.2], // orange opacity 80%
            outline: {
                color: [255,255,255],
                width: 1
            },
            // style: "backward-diagonal"
        };

        var polygonGraphic = new Graphic({
            geometry: zone2,
            symbol: simpleFillSymbol
        });

        graphicsLayer.add(polygonGraphic);
    }

    function drawZone3() {
        var graphicsLayer = new GraphicsLayer();
        map.add(graphicsLayer);
        var zone3 = {
            type: "polygon",
            rings: [
                // [26.019,44.835],
                [25.695,44.932],
                [25.783,44.923],
                [25.774,44.830],
                [25.822,44.805],
                [25.875,44.826],
                [25.937,44.724],
                [26.279,44.745],
                [26.593,44.848],
                [26.663,44.814],
                [26.945,44.795],
                [27.002,44.829],
                [27.186,44.782],
                [27.270,45.000],
                [27.129,45.162],
                [27.173,45.233],
                [27.344,45.211],
                [27.494,45.465],
                [25.806,45.760],
                [25.841,45.646],
                [25.631,45.486],
                [25.758,45.276],
                [25.732,45.069],
                [25.695,44.932]
            ]
        };

        var simpleFillSymbol = {
            type: "simple-fill",
            color: [123,240,43,0.2], // orange opacity 80%
            outline: {
                color: [255,255,255],
                width: 1
            },
            // style: "backward-diagonal"
        };

        var polygonGraphic = new Graphic({
            geometry: zone3,
            symbol: simpleFillSymbol
        });

        graphicsLayer.add(polygonGraphic);
    }

    function drawZone4() {
        var graphicsLayer = new GraphicsLayer();
        map.add(graphicsLayer);
        var zone4 = {
            type: "polygon",
            rings: [
                // [26.019,44.835],
                [26.662,44.812],
                [26.938,44.790],
                [27.009,44.827],
                [27.176,44.777],
                [27.268,45.005],
                [27.132,45.160],
                [27.180,45.228],
                [27.343,45.212],
                [27.497,45.472],
                [27.976,45.389],
                [27.549,44.005],
                [26.354,44.049],
                [26.662,44.812]
            ]
        };

        var simpleFillSymbol = {
            type: "simple-fill",
            color: [50,240,179,0.2], // orange opacity 80%
            outline: {
                color: [255,255,255],
                width: 1
            },
            // style: "backward-diagonal"
        };

        var polygonGraphic = new Graphic({
            geometry: zone4,
            symbol: simpleFillSymbol
        });

        graphicsLayer.add(polygonGraphic);
    }

    function drawZone5() {
        var graphicsLayer = new GraphicsLayer();
        map.add(graphicsLayer);
        var zone5 = {
            type: "polygon",
            rings: [
                // [26.019,44.835],
                [24.832,44.104],
                [24.955,44.141],
                [25.202,44.459],
                [25.109,44.694],
                [25.650,44.847],
                [25.694,44.937],
                [25.777,44.921],
                [25.773,44.828],
                [25.817,44.800],
                [25.874,44.828],
                [25.931,44.725],
                [26.287,44.750],
                [26.590,44.844],
                [26.661,44.812],
                [26.335,44.034],
                [24.832,44.072],
                [24.832,44.104]
            ]
        };

        var simpleFillSymbol = {
            type: "simple-fill",
            color: [1,1,179,0.2], // orange opacity 80%
            outline: {
                color: [255,255,255],
                width: 1
            },
            // style: "backward-diagonal"
        };

        var polygonGraphic = new Graphic({
            geometry: zone5,
            symbol: simpleFillSymbol
        });

        graphicsLayer.add(polygonGraphic);
    }

    drawZone1();
    drawZone2();
    drawZone3();
    drawZone4();
    drawZone5();


    
  });


  