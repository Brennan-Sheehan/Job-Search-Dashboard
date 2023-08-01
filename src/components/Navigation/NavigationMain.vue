<template>
  <nav class="side-nav">
    <aside>
      <div class="logo">
        <div class="logo-image">JS</div>
        <h2>Dashboard</h2>
      </div>
      <section class="sidebar">
        <router-link class="button" to="./">
          <span class="material-symbols-sharp"> grid_view </span>
          <span class="text">Dashboard</span>
        </router-link>
        <router-link class="button" to="./profile">
          <span class="material-symbols-sharp"> account_circle </span>
          <span class="text">Profile</span>
        </router-link>
        <router-link class="button" to="./email">
          <span class="material-symbols-sharp"> mail </span>
          <span class="text">Email</span>
        </router-link>
        <router-link class="button" to="./calendar">
          <span class="material-symbols-sharp"> calendar_month </span>
          <span class="text">Calendar</span>
        </router-link>
        <router-link class="button" to="./contacts">
          <span class="material-symbols-sharp"> contacts </span>
          <span class="text">Contacts</span>
        </router-link>
        <router-link class="button" to="./documents">
          <span class="material-symbols-sharp"> description </span>
          <span class="text">Documents</span>
        </router-link>
        <router-link class="button" to="./goals">
          <span class="material-symbols-sharp"> task_alt </span>
          <span class="text">Goals</span>
        </router-link>
        <router-link class="button" to="./job-board">
          <span class="material-symbols-sharp"> dashboard_customize </span>
          <span class="text">Job Board</span>
        </router-link>
      </section>
    </aside>
  </nav>
</template>

<script>
export default {
  name: "navigation-bar",
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
  background-color: rgba(252, 232, 58, 0.966);
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
  top: 1rem;
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
  content: '';
  height: 18px;
  width: 6px;
  background-color: var(--color-primary);
}

span:hover {
  color: var(--color-primary);
  margin-left: 0.3rem;
}


</style>
