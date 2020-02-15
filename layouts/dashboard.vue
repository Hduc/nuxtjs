<template>
  <div>
    <notifications></notifications>
    <div class="wrapper">
      <side-bar>
        <template slot="links">
          <sidebar-link to="/dashboard" name="Dashboard" icon="ti-panel" />
          <sidebar-link to="/dashboard/userProfile" name="User Profile" icon="ti-user" />
          <sidebar-link to="/dashboard/tablelist" name="Table List" icon="ti-view-list-alt" />
          <sidebar-link to="/dashboard/typography" name="Typography" icon="ti-text" />
          <sidebar-link to="/dashboard/icons" name="Icons" icon="ti-pencil-alt2" />
          <sidebar-link to="/dashboard/maps" name="Map" icon="ti-map" />
          <sidebar-link to="/dashboard/notifications" name="Notifications" icon="ti-bell" />
        </template>
        <mobile-menu>
          <li class="nav-item">
            <a class="nav-link">
              <i class="ti-panel"></i>
              <p>Stats</p>
            </a>
          </li>
          <drop-down
            class="nav-item"
            title="5 Notifications"
            title-classes="nav-link"
            icon="ti-bell"
          >
            <a class="dropdown-item">Notification 1</a>
            <a class="dropdown-item">Notification 2</a>
            <a class="dropdown-item">Notification 3</a>
            <a class="dropdown-item">Notification 4</a>
            <a class="dropdown-item">Another notification</a>
          </drop-down>
          <li class="nav-item">
            <a class="nav-link">
              <i class="ti-settings"></i>
              <p>Settings</p>
            </a>
          </li>
          <li class="divider"></li>
        </mobile-menu>
      </side-bar>
      <div class="main-panel">
        <top-navbar></top-navbar>
        <nuxt @click.native="toggleSidebar"></nuxt>
        <content-footer></content-footer>
      </div>
    </div>
  </div>
</template>
<script>
import TopNavbar from "@/components/dashboard/TopNavbar.vue";
import ContentFooter from "@/components/dashboard/ContentFooter.vue";
import DashboardContent from "@/components/dashboard/Content.vue";
import MobileMenu from "@/components/dashboard/MobileMenu";
export default {
  components: {
    TopNavbar,
    ContentFooter,
    DashboardContent,
    MobileMenu
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    }
  }
};
</script>
<style lang="scss">
.vue-notifyjs.notifications {
  .alert {
    z-index: 10000;
  }
  .list-move {
    transition: transform 0.3s, opacity 0.4s;
  }
  .list-item {
    display: inline-block;
    margin-right: 10px;
  }
  .list-enter-active {
    transition: transform 0.2s ease-in, opacity 0.4s ease-in;
  }
  .list-leave-active {
    transition: transform 1s ease-out, opacity 0.4s ease-out;
  }

  .list-enter {
    opacity: 0;
    transform: scale(1.1);
  }
  .list-leave-to {
    opacity: 0;
    transform: scale(1.2, 0.7);
  }
}
</style>

