<template>
  <div class="side-nav">
      <aside>
          <div class="logo">
              <div class="logo-image"/>
              <h2>Dashboard</h2>
          </div>        
        <section class="sidebar">
          <a class="nav__link" href="./">
            <span class="material-symbols-sharp"> grid_view </span>
            <h3>Dashboard</h3>
          </a>
          <a class="nav__link" href="./profile">
            <span class="material-symbols-sharp"> account_circle </span>
            <h3>Profile</h3>
          </a>
          <a class="nav__link" href="email.html">
            <span class="material-symbols-sharp"> mail </span>
            <h3>Email</h3>
          </a>
          <a class="nav__link" href="calendar.html">
            <span class="material-symbols-sharp"> calendar_month </span>
            <h3>Calendar</h3>
          </a>
          <a class="nav__link" href="contacts.html">
            <span class="material-symbols-sharp"> contacts </span>
            <h3>Contacts</h3>
          </a>
          <a class="nav__link" href="documents.html">
            <span class="material-symbols-sharp"> description </span>
            <h3>Documents</h3>
          </a>
          <a class="nav__link" href="goals.html">
            <span class="material-symbols-sharp"> task_alt </span>
            <h3>Goals</h3>
          </a>
          <a class="nav__link" href="./job-board">
            <span class="material-symbols-sharp"> dashboard_customize </span>
            <h3>Job Board</h3>
          </a>
        </section>
      </aside>
  </div>
</template>

<script>
export default {
    name: 'navigation-bar',
}
</script>

<style scoped>
.side-nav{
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

  border-right: 1px solid rgba(25, 4, 69, 0.1);
  box-sizing: border-box;
}

aside {
  
  flex-grow: 1;
    overflow: auto;
    width: 100%;
    padding: 13px 5px 0px;
    box-sizing: border-box;
    display: grid;
    grid-auto-flow: row;
    grid-auto-rows: max-content;
    grid-template-columns: 100%;
    gap: 0px;
}



aside .logo {
  display: flex;
  gap: 0.5rem;
}

.logo-image {
  width: 3rem;
  height: 2rem;
  margin-left: 1rem;
  background-image: url(/src/assets/logo.png);
}

aside .logo h2 {
    font-size: 26px;
}


aside .sidebar {
  display: flex;
  flex-direction: column;
  background-color: rgba(39, 39, 39, 0.664);
  box-shadow: 0 2rem 3rem rgba(132, 139, 200, 0.18);
  border-radius: 15px;
  height: 88vh;
  position: relative;
  top: 1.5rem;
  border-right: 1px solid black;
}

aside .sidebar:hover {
  box-shadow: none;
}

aside .sidebar a {
  display: flex;
  align-items: flex-start;
  color: #7d8da1;
  height: 3.7rem;
  gap: 1rem;
  position: relative;
  margin-left: 2rem;
  top: 2rem;
}

aside .sidebar a span {
  font-size: 1.6rem;
}

aside .sidebar a.active {
  width: 100%;
  color: white;
  background-color: rgba(132, 139, 200, 0.18);
  margin-left: 0;
  border-radius: 15px;
}

aside .sidebar a.active::before {
  content: "";
  width: 6px;
  height: 18px;
  background-color: #6c9bcf;
  border-radius: 15px;
}

aside .sidebar a.active span {
  color: #6c9bcf;
  margin-left: calc(1rem - 3px);
}

aside .sidebar a:hover {
  color: #6c9bcf;
}

aside .sidebar a:hover span {
  margin-left: 0.6rem;
}
</style>