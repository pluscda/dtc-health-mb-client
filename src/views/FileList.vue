<template>
  <section class="dtc-upload">
    <van-uploader v-model="fileList" multiple :max-count="12" accept="*" :after-read="afterRead" />

    <b-button @click="upload">Submit</b-button>
  </section>
</template>

<script>
/*
 "attributes": {
    "name": {
      "type": "string"
    },
    "url": {
      "model": "file",
      "via": "related",
      "allowedTypes": [
        "images",
        "files",
        "videos"
      ],
      "plugin": "upload",
      "required": false
    },
    "uid": {
      "type": "string"
    }
  }

*/
import { store, mutations, actions } from '@/store/global.js';
export default {
  name: 'login',
  data() {
    return {
      name: '',
      url: '',
      uid: '5fd44ee2595e890fb41b11a9',
      file: '',
      fileList: [],
    };
  },
  methods: {
    afterRead(file) {
      alert(this.fileList.length);
      console.log(this.fileList);
    },
    async upload() {
      const obj = { name: this.name, uid: this.uid };
      const str = JSON.stringify(obj);
      const formData = new FormData();
      formData.append('data', str);
      formData.append(`files.url`, this.file, this.name);
      await axios.post('health-files', formData);
      //files.
    },
    updateFile(e) {
      this.file = e.target.files[0];
      this.name = this.file.name;
    },
  },
  mounted() {},
  watch: {},
};
</script>
<i18n>
{
  "zh-tw": {
    "title": "名醫會館"
    
  },
  "zh-cn": {
    "title": "名医会馆"
  }
}
</i18n>

<style lang="scss" scoped>
.dtc-upload {
  display: grid;
  grid-template-columns: max-content;
  grid-template-columns: 200px;
  gap: 10px;
}
</style>
