window.global = {
  view: {
    zoom: 11,
    center: [110.5, 31.58]
    // extent: [
    //   109.4873099667816,
    //   30.838872465791724,
    //   111.44228737676109,
    //   32.18745809150329
    // ]
  },
  layers: [
    {
      name: "矢量",
      icon: "",
      // isEarth: true,
      // iconEarth: "",
      // iconName: "三维-矢量",
      data: [
        {
          type: "xyz",
          url:
            "http://t{0-7}.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=d9160cdd3e165f779df0909d33be966d",
          projection: "EPSG:3857"
        },
        {
          type: "xyz",
          url:
            "http://t{0-7}.tianditu.com/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk=d9160cdd3e165f779df0909d33be966d",
          projection: "EPSG:3857"
        }
        // {
        //   type: "arcgis",
        //   url:
        //     "http://192.168.99.78:8081/serviceProxy/050400000013/050401000013/ImageServer?token="
        // },
        // {
        //   type: "arcgis",
        //   url:
        //     "http://192.168.99.78:8081/serviceProxy/050400000033/050400000034/MapServer?token="
        // }
      ]
    },
    {
      name: "栅格",
      icon: "",
      isEarth: true,
      iconEarth: "",
      iconName: "三维-栅格",
      data: [
        {
          type: "xyz",
          url:
            "http://t{0-7}.tianditu.com/DataServer?T=img_w&x={x}&y={y}&l={z}&tk=d9160cdd3e165f779df0909d33be966d",
          projection: "EPSG:3857"
        },
        {
          type: "ArcGIS",
          url:
            "http://192.168.99.56:6080/arcgis/rest/services/SNJ/sat_and_ano_map/MapServer"
        }
      ]
    }
  ],
  terrain: {
    url: "http://192.168.99.223:8590/hubei_terrain"
  },
  tileset: [
    {
      url: "http://192.168.99.223:8590/snj/3DTiles/3dtiles1/tileset.json",
      tx: 110.02590699999983,
      ty: 31.474583999999997,
      tz: 89
    },
    {
      url: "http://192.168.99.223:8590/snj/3DTiles/3dtiles2/tileset.json",
      tx: 110.0280069999999,
      ty: 31.469684000000008,
      tz: 89
    },
    {
      url: "http://192.168.99.223:8590/snj/3DTiles/3dtiles3/tileset.json",
      tx: 109.99179669999985,
      ty: 31.494563999999997,
      tz: 50
    },
    {
      url: "http://192.168.99.223:8590/snj/3DTiles/3dtiles4/tileset.json",
      tx: 110.13211899999983,
      ty: 31.453913999999994,
      tz: 75
    },
    {
      url: "http://192.168.99.223:8590/snj/3DTiles/3dtiles5/tileset.json",
      tx: 110.12679599999983,
      ty: 31.457233999999996,
      tz: 75
    },
    {
      url: "http://192.168.99.223:8590/snj/3DTiles/3dtiles6/tileset.json",
      tx: 110.38919199999985,
      ty: 31.470361,
      tz: 100
    }
    // {
    //   url: "http://192.168.99.223:8590/snj/3DTiles/3dtiles7/tileset.json",
    //   tx: 110.38919199999985,
    //   ty: 31.470361,
    //   tz: 100
    // },
    // {
    //   url: "http://192.168.99.223:8590/snj/3DTiles/3dtiles8/tileset.json",
    //   tx: 110.38919299999985,
    //   ty: 31.470491,
    //   tz: -10
    // }
  ],
  cities_mapServer: {
    url:
      "http://192.168.99.56:6080/arcgis/rest/services/common/cities/MapServer",
    id: 0,
    codeKey: "市代码",
    nameKey: "市",
    projection: "EPSG:4326"
  }
};
