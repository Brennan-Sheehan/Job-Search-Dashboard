<template>
  <div
    class="contact-card"
    style="
      display: flex;
      flex-direction: column;
      min-width: 0px;
      width: 100% height 100%;
    "
  >
    <header
      style="
        display: flex;
        flex-direction: row;
        min-width: 0px;
        padding: 15px 15px 17px;
      "
    >
      <div>
        <span class="material-symbols-sharp" style="margin-right: 15px, margin-top: 3px"> account_circle </span>
      </div>
      <div style="margin-left: 15px">
        <p style="margin-bottom: 5px">
          {{ contacts.name }}
        </p>
        <p style="margin-bottom: 5px">
          {{ contacts.title }}
        </p>
        <p style="margin-bottom: 5px">
          {{ contacts.company }}
        </p>
      </div>
    </header>
    <main style="display: flex; flex-direction: column; flex-grow:1;">
      <div>
        <span class="material-symbols-sharp" style="margin-right: 10px"> location_on </span>
        <p>{{ contacts.location }}</p>
      </div>
      <div>
        <span class="material-symbols-sharp" style="margin-right: 10px"> mail </span>
        <p>{{ contacts.email }}</p>
      </div>
      <div>
        <span class="material-symbols-sharp" style="margin-right: 10px"> call </span>
        <p>
          {{ contacts.phone }}
        </p>
      </div>
    </main>
    <footer>
        <p>
            Created by Brennan Sheehan
        </p>
        
    </footer>
  </div>
</template>

<script>
export default {
  props: ["contacts"],
};
</script>

<style scoped>
.contact-card {
    background-color: var(--color-white);
    border: 1px solid var(--color-border);
    box-shadow: var(--box-shadow);
    border-radius: 15px;
}
header span {
    font-size: 60px;
}
main {
    border-top: 1px solid var(--color-border);
    padding: 15px;
}

main div {
    display: flex; 
    align-items: center; 
    height: 24px;
    margin-bottom: 10px;
}

footer {
    display: flex;
    min-width: 0px;
    padding: 7px 10px;
    border-top: 1px solid var(--color-border);
}

footer p {
    text-align: left;
    font-weight: 400;
    letter-spacing: 0px;
    font-size: 10px;
    line-height: 15px;
}
</style>
