<template>
  <l-map
    v-model="show"
    ref="myMapRef"
    :zoom="zoom"
    :center="center"
    :options="mapOptions"
    @update:center="centerUpdate"
    @update:zoom="zoomUpdate"
    v-if="showMap"
    style="min-height:calc(100vh - 51px);z-index:1;position:relative;"
  >
    <l-tile-layer :url="url" :attribution2="attribution" />
    <l-control position="topright">
      <van-button @click="goHome" size="mini" class="mr-2">HOME</van-button>
    </l-control>
    <l-marker @click="clickItem(item)" @mouseover="clickItem(item)" v-for="(item, i) in features" :key="i" :lat-lng="item.latLng" :icon="houseMarker">
      <l-tooltip :options="{ permanent: false, interactive: true }">{{ item.name }}</l-tooltip>
    </l-marker>
    <link
      rel="stylesheet"
      async
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
      integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA=="
      crossorigin="anonymous"
    />
  </l-map>
</template>

<script>
import { store, mutations, actions } from "@/store/global.js";
import { latLng } from "leaflet";
import GISJSON from "@/assets/gis.json";
import { LMap, LTileLayer, LMarker, LPopup, LTooltip, LGeoJson, LControl } from "vue2-leaflet";
var houseMarker = L.ExtraMarkers.icon({
  icon: "fa-warehouse",
  markerColor: "orange",
  //shape: "square",
  prefix: "fas",
});

const popOptions = {
  keepInView: true,
  // closeButton: false,
  maxWidth: 2600,
  // closeOnEscapeKey: false
};
export default {
  name: "Map1",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LTooltip,
    LGeoJson,
    LControl,
  },
  data() {
    return {
      showSidebar: false,
      showMakers: true,
      selectedItem: "",
      houseMarker,
      zoomControl: "",
      showSideBar: false,
      mapObj: "",
      features: [],
      popOptions,
      COUNTYNAME: "",
      clrIdx: 0,
      zoom: 7.4,
      center: latLng(23.5, 120.74739),
      url: "http://wmts.nlsc.gov.tw/wmts/EMAP6_OPENDATA/default/EPSG:3857/{z}/{y}/{x}",

      withPopup: latLng(23.6, 120.74739),
      withTooltip: latLng(23.6, 120.74739),
      currentZoom: 7.4,
      currentCenter: latLng(23.6, 120.74739),
      showParagraph: false,
      mapOptions: {
        // zoomSnap: 0.2,
        zoomDelta: 0.3,
      },
      showMap: true,
      mapOptions: {},
      show: true,
    };
  },
  computed: {
    myGeojsonList() {
      return this.geojson;
    },
  },
  methods: {
    clickItem(item) {
      this.selectedItem = item;
      this.$root.$emit("show-sidebar1", item);
    },
    addZoomControl() {
      if (this.mapObj.zoomControl) {
        this.mapObj.zoomControl.remove();
      }
      this.zoomControl = L.control.zoom({ position: "topright" });
      this.mapObj.addControl(this.zoomControl);
    },
    async init(num) {
      this.features = [];
      let features = GISJSON;
      features = features.filter((s) => !isNaN(s.lat) && s.name);
      features.forEach((s) => {
        s.latLng = latLng(s.lat, s.lon);
      });
      this.features = [...features];
      this.showMap = true;
      //alert(L.control.sidebar);
      this.$nextTick(() => {
        this.mapObj = this.$refs.myMapRef.mapObject;
        this.addZoomControl();
      });
      this.$root.$on("slidebar1-home", () => {
        this.title = "培育學校";
      });
      this.$root.$on("sidebar1-title-update", (title) => {
        if (title != "全部") {
          this.features.forEach((s) => (s.hidden = true));
          const ret = this.features.find((s) => title == s.properties.name);
          if (ret) {
            let Query = new TGOS.TGAttriQuery();
            Query.identify(TGOS.TGMapServiceId.SCHOOL, TGOS.TGMapId.SCHOOL, { county: "", town: "", keyword: title }, TGOS.TGCoordSys.EPSG3826, function(result, status) {
              ret.latLng = latLng(result.fieldAttr[0][17], result.fieldAttr[0][16]);
            });
            ret.hidden = false;
          }
        } else {
          this.features.forEach((s) => (s.hidden = false));
        }
        this.features = [...this.features];
        // console.log(this.features);
      });
    },
    goHome() {
      if (!this.$refs.myMapRef) return;
      this.$refs.myMapRef.mapObject.setView([23.5, 120.74739], 7.4);
    },

    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
      //alert(this.currentCenter);
    },
    showLongText() {
      this.showParagraph = !this.showParagraph;
    },
    innerClick() {
      alert("Click!");
    },
  },
  mounted() {
    this.init();
    const el = document.getElementById("big-dtx-map");
    this.$nextTick(() => this.goHome());
    this.$root.$on("show-sidebar1", () => {
      this.show = true;
      //this.title = item.properties.name;
    });
  },
};
</script>

<style lang="scss" scoped>
.dtx-map {
  width: 100vw;
  min-height: 100vh;
}
nav {
  width: 100vw;
  height: 50px;
  img {
    display: inline-block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
/deep/ .btn-success {
  border-color: #f4f4f4;
  background-color: #f4f4f4;
  color: #4b4b4b;
}
.expand-btn-dtx {
  cursor: pointer;
  top: 28px;
  left: 0px;
  width: 44px;
  height: 44px;
  background: #020202 0% 0% no-repeat padding-box;
  opacity: 0.33;
  transform: translateX(-20px);
  position: relative;
  &::after {
    position: absolute;
    content: "";
    width: 40%;
    height: 40%;
    color: white;
    margin-top: 13px;
    margin-left: 5px;
    transform: rotate(42deg);
    border-top: 2px solid white;
    border-right: 2px solid white;
  }
}

.sidebar-dtc {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: calc(100vh - 51px);
  z-index: 9999;
  background: var(--snap-blue);
  clip-path: circle(8.6% at 0 0);
  transition: 0.6s clip-path ease-in-out;
}

.sidebar-dtc-show {
  clip-path: circle(165.6% at 0 0);
}
</style>

<style>
[href="https://leafletjs.com" ] {
  display: none;
}
</style>
