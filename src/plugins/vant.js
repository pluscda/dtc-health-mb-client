import Vue from 'vue'
import Vant, { Locale } from 'vant'
import 'vant/lib/index.css'
import lang from 'vant/lib/locale/lang/zh-TW'

Vue.use(Vant);
Locale.use('zh-TW', lang)
