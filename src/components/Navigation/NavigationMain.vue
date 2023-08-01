<template>
  <nav class="side-nav">
    <aside>
      <div class="logo">
        <div class="logo-image">JS</div>
        <h2>Dashboard</h2>
      </div>
      <section class="sidebar">
        <router-link class="button" :to="{name: 'dashboard'}">
          <div class="container">
            <span class="material-symbols-sharp"> grid_view </span>
            <span class="text">Dashboard</span>
          </div>
        </router-link>
        <router-link class="button" :to="{name: 'profile'}">
          <div class="container">
            <span class="material-symbols-sharp"> account_circle </span>
            <span class="text">Profile</span>
          </div>
        </router-link>
        <router-link class="button" to="./email">
          <div class="container">
            <span class="material-symbols-sharp"> mail </span>
            <span class="text">Email</span>
          </div>
        </router-link>
        <router-link class="button" to="./calendar">
          <div class="container">
            <span class="material-symbols-sharp"> calendar_month </span>
            <span class="text">Calendar</span>
          </div>
        </router-link>
        <router-link class="button" :to="{name: 'contacts'}">
          <div class="container">
            <span class="material-symbols-sharp"> contacts </span>
            <span class="text">Contacts</span>
          </div>
        </router-link>
        <router-link class="button" to="./documents">
          <div class="container">
            <span class="material-symbols-sharp"> description </span>
            <span class="text">Documents</span>
          </div>
        </router-link>
        <router-link class="button" to="./goals">
          <div class="container">
            <span class="material-symbols-sharp"> task_alt </span>
            <span class="text">Goals</span>
          </div>
        </router-link>
        <router-link class="button" :to="{name: 'job-board'}">
          <div class="container">
            <span class="material-symbols-sharp"> dashboard_customize </span>
            <span class="text">Job Board</span>
          </div>
        </router-link>
      </section>
    </aside>
  </nav>
</template>

<script>
export default {
  name: "navigation-bar",
  components: {},
};
</script>

<style scoped>
.side-nav {
  margin: 0 auto;
}

aside {
  height: 100vh;
}

aside .logo {
  display: flex;
  gap: 0.5rem;
  padding-top: 20px;
  justify-content: center;
}

.logo-image {
  width: 3rem;
  height: 2rem;
  background-color: rgba(255, 230, 0, 0.808);
  text-align: end;
  font-size: 26px;
  border-radius: 4px;
}

aside .logo h2 {
  font-size: 26px;
  color: var(--text);
}

aside .sidebar {
  display: flex;
  flex-direction: column;
  background-color: var(--color-white);
  box-shadow: var(--box-shadow);
  border-radius: 15px;
  height: 88vh;
  position: relative;
  top: 2rem;
}

aside .sidebar a {
  display: flex;
  align-items: center;
  color: var(--color-info-dark);
  height: 3.7rem;
  gap: 1rem;
  position: relative;
  top: 2rem;
}

aside .sidebar a span {
  padding-left: 0.5rem;
  font-size: 1.6rem;
  font-size: 22px;
}

.text {
  padding-left: 0px;
  margin-left: 0px;
}

.button.router-link-active {
  width: 100%;
  color: var(--color-primary);
  background-color: var(--color-light);
  margin-left: 0;
}

button.router-link-active::before {
  content: "";
  height: 18px;
  width: 6px;
  background-color: var(--color-primary);
}

.container:hover {
  color: var(--color-primary);
  margin-left: 0.6rem;
}
</style>
