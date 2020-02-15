import Vue from 'vue'
import Notify from "vue-notifyjs";
import SideBar from "~/components/SidebarPlugin";
import GlobalComponents from "./globalComponents";
import GlobalDriectivers from "./globalDriectivers";

//css scss assets
import "bootstrap/dist/css/bootstrap.css";
import "~/assets/scss/paper-dashboard.scss";
import "~/assets/css/themify-icons.css";

Vue.use(GlobalComponents);
Vue.use(GlobalDriectivers);
Vue.use(SideBar);
Vue.use(Notify);
