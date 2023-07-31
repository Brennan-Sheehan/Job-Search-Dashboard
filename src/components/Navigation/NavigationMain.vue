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
  display: flex;
  align-items: start;
  justify-content: start;
  padding: 0px;
  position: fixed;
  top: 0px;
  left: 0px;
  bottom: 0px;
  width: 210px;
  z-index: 3;
  flex-grow: 0;
  flex-shrink: 0;
  flex-direction: column;
  box-sizing: border-box;
}

aside {
  flex-grow: 1;
  overflow: auto;
  width: 96%;
  box-sizing: border-box;
  display: grid;
  grid-auto-flow: row;
  grid-auto-rows: max-content;
  grid-template-columns: 100%;
  gap: 0px;
  margin-left: 10px;
  background-color: var(--primary);
  box-shadow: 0 2rem 3rem rgba(132, 139, 200, 0.18);
  border-radius: 15px;
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
  background-color: var(--primary);
  box-shadow: 0 2rem 3rem rgba(132, 139, 200, 0.18);
  border-radius: 15px;
  height: 100vh;
  position: relative;
  top: 1rem;
  border-right: 1px solid rgb(87, 87, 87);
}

aside .sidebar a {
  display: flex;
  align-items: center;
  color: var(--text);
  height: 3.7rem;
  gap: 1rem;
  position: relative;
  top: 2rem;
}

aside .sidebar a span {
  padding-left: 1rem;
  font-size: 1.6rem;
  font-size: 22px;
}

.text {
  padding-left: 0px;
  margin-left: 0px;
}

aside .sidebar a.router-link-active {
  width: 100%;
  color: white;
  background-color: var(--secondary);
  border-radius: 15px;
}



aside .sidebar a.router-link-active span {
  color: var(--text);
}

aside .sidebar a:hover {
  background-color: var(--secondary);
  border-radius: 5px;
}

aside .sidebar a:hover span {
  margin-left: 0.3rem;
}
</style>
