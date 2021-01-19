<template>
  <l-map
    v-model="show"
    ref="myMapRef"
    :zoom="zoom"
    :center="center"
    :options="mapOptions"
    @update:center="centerUpdate"
    @update:zoom="zoomUpdate"
    style="min-height:calc(100vh - 51px);z-index:1;position:relative;"
  >
    <l-tile-layer :url="url" />
    <l-control position="bottomright">
      <div class="dtc-home" @click="goHome">HOME</div>
    </l-control>
    <l-marker @click="clickItem(item)" v-for="(item, i) in features.slice(0, 1)" :key="i" :lat-lng="item.latLng" :icon="houseMarker">
      <l-tooltip :options="{ permanent: true, interactive: false, direction: 'bottom' }">{{ item.name }}</l-tooltip>
    </l-marker>
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
    shuuffleArray(array) {
      // Create a copy of the original array to be randomized
      let shuffle = [...array];
      // Defining function returning random value from i to N
      const getRandomValue = (i, N) => Math.floor(Math.random() * (N - i) + i);
      // Shuffle a pair of two elements at random position j
      shuffle.forEach((elem, i, arr, j = getRandomValue(i, arr.length)) => ([arr[i], arr[j]] = [arr[j], arr[i]]));
      return shuffle;
    },
    clickItem(item) {
      this.selectedItem = item;
      this.$router.push("doclist");
    },
    addZoomControl() {
      if (this.mapObj.zoomControl) {
        this.mapObj.zoomControl.remove();
      }
      this.zoomControl = L.control.zoom({ position: "bottomleft" });
      this.mapObj.addControl(this.zoomControl);
    },
    async init(num) {
      this.features = [];
      let features = GISJSON.filter((s) => store.hotMapIds.find((s2) => s2 == +s.myID));
      features = this.shuuffleArray(features);
      features.forEach((s) => {
        s.latLng = latLng(s.lat, s.lon);
      });
      this.features = [...features];
      this.$root.$emit("show-gis-label", this.features[0]);
      requestAnimationFrame(() => {
        this.$refs.myMapRef.mapObject.setView([this.features[0].lat, this.features[0].lon], 12.4);
      });
      this.showMap = true;
      this.$nextTick(() => {
        this.mapObj = this.$refs.myMapRef.mapObject;
        this.addZoomControl();
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
    this.$nextTick(() => this.goHome());
    this.$root.$on("gis-name", (v) => {
      this.features = GISJSON.filter((s) => s.name == v);
      requestAnimationFrame(() => {
        this.$refs.myMapRef.mapObject.setView([this.features[0].lat, this.features[0].lon], 12.4);
      });
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

.dtc-home {
  width: 46px;
  padding: 3px 6px;
  background: linear-gradient(to right, #da5afa, #3570ec);
  color: white;
}
</style>

<style>
[href="https://leafletjs.com" ] {
  display: none;
}
.leaflet-top,
.leaflet-bottom {
  position: fixed !important;
  bottom: 3.9rem;
}
</style>
