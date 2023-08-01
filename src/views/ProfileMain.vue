<template>
  <main class="main-profile">
    <header>
      <section class="candidate-pics">
        <div class="header-img" />
        <div class="profile-img" />
      </section>
      <section class="profile-info">
        <h1>Brennan Sheehan</h1>
        <p>Software Engineer</p>
        <p>Java student at Tech Elevator | Software Developer | PC Gamer</p>
        <p>Greenville, SC</p>
        <p>Contact Info</p>
        <section class="social-links">
          <a href="https://github.com/Brennan-Sheehan">
            <div class="github-image"></div>
          </a>
          <a href="https://www.linkedin.com/in/brennan-sheehan/">
            <div class="linkedIn-image"></div>
          </a>
        </section>
      </section>
    </header>
    <section class="profile-left">
      <section class="skills">
        <h3>Skills</h3>
        <section class="skill-box">
          <button>Java</button>
          <button>JavaScript</button>
          <button>Git</button>
          <button>Git Bash</button>
          <button>Integration Testing</button>
          <button>Unit Testing</button>
          <button>Eclipse</button>
          <button>IntelliJ IDEA</button>
          <button>Spring</button>
          <button>Spring Boot</button>
          <button>Spring Data</button>
          <button>Vue.js</button>
          <button>CSS</button>
          <button>HTML</button>
          <button>Production Development</button>
          <button>Rapid Prototyping</button>
          <button>Teamwork</button>
          <button>Collaboration</button>
          <button>Software Quality Control</button>
          <button>Linux Server</button>
          <button>SolidWorks</button>
          <button>Data Access Object (DAO)</button>
          <button>RESTful API's</button>
          <button>RESTful WebServices</button>
          <button>Spring Security</button>
          <button>Unit Testing (JUnit)</button>
          <button>Customer Satisfaction</button>
          <button>Time Management</button>
          <button>Process Quality Improvement</button>
          <button>Inventory Accuracy</button>
        </section>
        <section class="resume">
          <h3>Resume</h3>
        </section>
      </section>
    </section>
    <section class="profile-right">
      <section class="bio">
        <h3>Bio</h3>
        <p class="candidate-bio">
          With a lifelong curiosity for understanding how things work, I've
          always had the drive to take things apart and reassemble them,
          constantly seeking ways to enhance their functionality. Most notably,
          the story my parents love to tell of me attaching a snowblower to a
          lawnmower as a child so I would have a riding snowblower.
        </p>
        <p>
          You'll find me constantly researching and learning to improve my job
          skills because I enjoy expanding my knowledge in areas I'm passionate
          about. My curiosity about how things work has taken me far in my
          professional career, from learning how to code in bash, optimizing
          computer systems, and building and designing prototype electronics to
          pursuing a career in software development.
        </p>
        <p>
          I am thrilled to embark on a rewarding career in software development,
          where I can combine my passion for building things with my technical
          expertise. If you're seeking a dedicated professional to join your
          dynamic team and contribute to developing innovative software
          solutions, let's connect.
        </p>
        <p>
          Feel free to reach out, and let's embark on this exciting journey
          together!
        </p>
      </section>
      <section class="projects">
        <h3>Projects</h3>
        <section class="profile-job-cards">
          <section class="profile-job-card-1">
            <section class="pic-holder"></section>
            <section class="project-info">
              <p class="title">Digital Wallet</p>
              <p class="description">RESTful API backend</p>
              <section class="project-skills">
                <button>Data Access Object (DAO)</button>
                <button>RESTful API's</button>
                <button>RESTful WebServices</button>
                <button>Spring Security</button>
                <button>PostgreSQL</button>
                <button>Unit Testing (JUnit)</button>
              </section>
            </section>
          </section>
          <section class="profile-job-card-2">
            <section class="pic-holder"></section>
            <section class="project-info">
              <p class="title">Vending Machine</p>
              <p class="description">CLI Vending Machine Interface</p>
              <section class="project-skills">
                <button>Teamwork</button>
                <button>Collaboration</button>
                <button>Java</button>
                <button>Unit-Testing</button>
              </section>
            </section>
          </section>
        </section>
      </section>

      <section class="education">
        <h3>Education</h3>
        <section class="education-block">
          <section class="educaiton-title-block">
            <section class="education-logo">
              <div class="work-placeholder-logo" />
            </section>
            <section class="education-title">
              <p class="title">Tech Elevator</p>
              <p class="degree">Software Engineer</p>
              <p class="date">Aug, 2023 graduation</p>
            </section>
          </section>
          <section class="education-description">
            <p>
              Currently attending a 14-week full-stack coding bootcamp learning
              how to create dynamic web-based software systems using Java
              providing 800+ hours of development education and application.
            </p>
          </section>
        </section>
      </section>
      <section class="work-experience">
        <h3>Work Experience</h3>
        <section class="work-block">
          <section class="work-title-block">
            <section class="work-logo">
              <div class="work-placeholder-logo" />
            </section>
            <section class="work-title">
              <p class="Company">Goldfinger Inc.</p>
              <p class="employee-title">Lead Systems Integrator</p>
              <p class="date">Oct,2019 to May,2023</p>
            </section>
          </section>
          <section class="education-description">
            <p>
              {{ educationDescription }}
            </p>
          </section>
        </section>
      </section>
    </section>
  </main>
</template>

<script>
export default {
  name: "profile-view",
  // Add "skills" as data and iterate through to put them on the page
  data() {
    return {
      educationDescription:
        "- Promoted to system specialist and assumed responsibility for identifying and rectifying all manufacturing defects. This promotion included a 6-week trip to Vietnam to assess our quality during manufacturing.\n" +
        "- Co-designed Linux Based POS System. Built up the Linux server back-end to host the JAVA front-end created by another teammate. Became familiar with the JAVA language while on this team.\n" +
        "- Tested and Deployed POS System and Card Reader Software in a lab environment to ensure effective on-site implementation. Resulting in zero failures in the field with over 200 units deployed.\n" +
        "- Utilized my drive to learn new skills and continually improve to develop skills in CAD to design technical specifications and schematics for launching new product lines.\n" +
        "- Managed multiple customers with unique, complex problems and effectively used my technical talking skills to explain the situation to the customer and provide an effective solution.\n",
    };
  },
};
</script>

<style>
.main-profile {
  display: grid;
  grid-template-columns: 250px minmax(0px, 1fr);
  width: 95%;
  max-width: 900px;
  justify-self: center;
  gap: 20px 30px;
  padding: 3rem;
  border-radius: 10px;
  background-color: var(--color-white);
  margin-left: 220px;
}

.main-profile header {
  display: block;
  background-color: var(--color-white);
  border-radius: 4px;
  border: 1px solid var(--color-border);
  box-shadow: var(--box-shadow);
  box-sizing: border-box;
  position: relative;
  width: 700px;
  justify-self: center;
  grid-column: 1 / 3;
}

.candidate-pics {
  display: block;
  height: 220px;
}

.header-img {
  display: block;
  width: 100%;
  height: 175px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: 4px 4px 0px 0px;
  background-image: url(/src/assets/background-img.jpg);
}

.profile-img {
  position: absolute;
  top: 90px;
  left: 30px;
  width: 125px;
  height: 125px;
  border-radius: 65px;
  border: var(--color-border);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url(/src/assets/profile-img.png);
}

.profile-info {
  display: block;
  padding: 12px 35px 30px;
}

.profile-info h1 {
  font-size: 25px;
  letter-spacing: -1px;
  text-align: left;
  margin: 0px;
  font-weight: 600;
}

.profile-info p:first-of-type {
  margin-bottom: 5px;
  text-align: left;
  font-weight: 600;
  color: var(--color-dark-variant);
  font-size: 16px;
  line-height: 23px;
}

.profile-info p:nth-of-type(2) {
  text-align: left;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  color: var(--color-dark);
}

.profile-info p:nth-of-type(3) {
  text-align: left;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: var(--color-dark);
}

.profile-info p:nth-of-type(4) {
  text-align: left;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: rgb(0, 112, 251);
  cursor: pointer;
}

.social-links {
  display: grid;
  margin-top: 15px;
  grid-template-columns: repeat(auto-fill, minmax(0px, auto));
  gap: 2px;
}

.linkedIn-image {
  transform: scale(1, 1);
  margin-right: 4px;
  width: 18px;
  height: 18px;
  background-image: url(/src/assets/LinkedIn-logo.svg);
}

.github-image {
  transform: scale(1, 1);
  margin-right: 4px;
  width: 18px;
  height: 18px;
  background-image: url(/src/assets/github-logo.svg);
}

.profile-left {
  display: grid;
  grid-template-columns: 100%;
  gap: 15px;
  height: fit-content;
}

.skills h3 {
  border-bottom: 1px solid var(--color-border);
  padding: 0px 5px;
  height: 35px;
  margin-bottom: 10px;
}

.skill-box {
  border-radius: 4px;
  border: 1px solid var(--color-border);
  box-shadow: var(--box-shadow);
  background-color: var(--color-white);
  box-sizing: border-box;
  padding: 10px 10px 10px;
  display: flex;
  max-width: 100%;
  flex-wrap: wrap;
}

.skill-box button {
  width: auto;
  max-width: 100%;
  margin: 0px 7px 7px 0px;
  box-sizing: border-box;
  font-weight: bold;
  cursor: pointer;
  font-size: 13px;
  display: inline-flex;
  align-items: center;
  color: var(--color-dark);
  background-color: var(--color-light);
  height: 21px;
  border-radius: 5px;
  padding: 0px 5px;
  border: 1px solid var(--color-border);
  transition: all 0.4s ease-out 0s;
  box-shadow: none;
}

.profile-right {
  display: grid;
  grid-template-columns: 100%;
  gap: 30px;
  height: fit-content;
}

.bio {
  display: block;
}

.bio h3 {
  border-bottom: 1px solid var(--color-border);
  padding: 0px;
  height: 40px;
  display: flex;
  margin-bottom: 15px;
  -webkit-box-align: center;
  align-items: center;
}

.bio p {
  margin: 20px;
  line-height: 22px;
}

.projects {
  display: block;
}

.projects h3 {
  border-bottom: 1px solid var(--color-border);
  padding: 0px;
  height: 40px;
  display: flex;
  margin-bottom: 15px;
  -webkit-box-align: center;
  align-items: center;
}

.profile-job-cards {
  margin-bottom: 20px;
  display: grid;
  grid-template-columns: repeat(2, minmax(50px, 290px));
  gap: 20px;
}

.profile-job-card-1 {
  border-radius: 4px;
  border: 1px solid var(--color-border);
  box-shadow: var(--box-shadow);
  background-color: var(--color-white);
  box-sizing: border-box;
  position: relative;
  display: grid;
  grid-template-rows: 190px minmax(0px, 1fr);
  grid-template-columns: 100%;
  min-height: 330px;
  color: var(--color-dark);
}

.profile-job-card-2 {
  border-radius: 4px;
  border: 1px solid var(--color-border);
  box-shadow: var(--box-shadow);
  background-color: var(--color-white);
  box-sizing: border-box;
  position: relative;
  display: grid;
  grid-template-rows: 190px minmax(0px, 1fr);
  grid-template-columns: 100%;
  min-height: 330px;
  color: var(--color-dark);
}

.pic-holder {
  border-radius: 4px 4px 0px 0px;
  border-bottom: 1px solid var(--color-border);
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background-image: url(/src/assets/image-placeholder.svg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

.project-info {
  padding: 15px 20px;
}

.project-info title {
  text-align: left;
  transition: all 0.2s ease-out 0s;
  color: var(--color-dark);
  font-family: lato;
  letter-spacing: 0px;
  margin: 0px;
  font-weight: 600;
  font-size: 16px;
  line-height: 23px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.project-info p:first-of-type {
  text-align: left;
  transition: all 0.2s ease-out 0s;
  color: var(--color-dark);
  font-family: lato;
  letter-spacing: 0px;
  margin: 0px;
  font-weight: 600;
  font-size: 16px;
  line-height: 23px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.project-info project-skills {
  margin-top: 15px;
  display: flex;
  max-width: 100%;
  flex-wrap: wrap;
}

.project-skills button {
  width: auto;
  max-width: 100%;
  margin: 0px 7px 10px 0px;
  box-sizing: border-box;
  font-weight: bold;
  font-family: Lato;
  cursor: pointer;
  font-size: 13px;
  display: inline-flex;
  align-items: center;
  color: var(--color-dark);
  background-color: var(--color-light);
  height: 21px;
  border-radius: 5px;
  padding: 0px 5px;
  border: 1px solid transparent;
  transition: all 0.4s ease-out 0s;
  box-shadow: none;
}

.education h3 {
  border-bottom: 1px solid var(--color-border);
  padding: 0px;
  height: 40px;
  display: flex;
  margin-bottom: 15px;
  -webkit-box-align: center;
  align-items: center;
}

.education-block {
  display: block;
  border-radius: 4px;
  border: 1px solid var(--color-border);
  box-shadow: var(--box-shadow);
  background-color: var(--color-white);
  box-sizing: border-box;
  position: relative;
}

.educaiton-title-block {
  display: grid;
  grid-template-columns: auto minmax(0px, 1fr);
  column-gap: 17px;
  padding: 15px 15px 20px;
}

.education-logo {
  display: block;
}

.tech-elevator-logo {
  border-radius: 4px;
  display: flex;
  align-items: center;
  flex-grow: 0;
  flex-shrink: 0;
  justify-content: center;
  box-shadow: var(--box-shadow);
  width: 64px;
  height: 64px;
  border-radius: 8px;
  overflow: hidden;
  background-color: var(--color-light);
  background-size: 102%;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url(/src/assets/tech-elevator-logo.png);
}

.education-title {
  display: block;
  max-width: 320px;
  margin-bottom: 15px;
}

.education-title p:first-of-type {
  display: block;
  margin-bottom: 3px;
  text-align: left;
  transition: all 0.2s ease-out 0s;
  color: var(--color-dark);
  letter-spacing: 0px;
  margin: 0px 0px 3px;
  font-weight: 600;
  font-size: 16px;
  line-height: 23px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.education-description {
  display: block;
  padding: 15px;
  border-top: 1px solid var(--color-border);
}

.work-experience h3 {
  border-bottom: 1px solid var(--color-border);
  padding: 0px;
  height: 40px;
  display: flex;
  margin-bottom: 15px;
  -webkit-box-align: center;
  align-items: center;
}

.work-block {
  display: block;
  border-radius: 4px;
  border: 1px solid var(--color-border);
  box-shadow: var(--box-shadow);
  background-color: var(--color-white);
  box-sizing: border-box;
  position: relative;
}

.work-title-block {
  display: grid;
  grid-template-columns: auto minmax(0px, 1fr);
  column-gap: 17px;
  padding: 15px 15px 20px;
}

.work-logo {
  display: block;
}

.work-placeholder-logo {
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--box-shadow);
  width: 64px;
  height: 64px;
  border-radius: 8px;
  overflow: hidden;
  background-size: 102%;
  background-position: center center;
  background-image: url(/src/assets/tech-elevator-logo.png);
}

.work-title {
  display: block;
  max-width: 320px;
  margin-bottom: 15px;
}

.work-title p:first-of-type {
  display: block;
  margin-bottom: 3px;
  text-align: left;
  transition: all 0.2s ease-out 0s;
  color: var(--color-dark);
  letter-spacing: 0px;
  margin: 0px 0px 3px;
  font-weight: 600;
  font-size: 16px;
  line-height: 23px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.work-description {
  display: block;
  padding: 15px;
  border-top: 1px solid var(--color-border);
}
</style>
