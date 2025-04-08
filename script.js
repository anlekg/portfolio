document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll(".nav-item");
  const content = document.querySelector(".channel-content");
  const header = document.querySelector(".channel-header");

  const pages = {
    "about-me": {
      title: "# 👨‍🦰 about-me",
      content: `
        <p>
        Hello, je m'appelle Alexandre Gallic !<br>
        Développeur web curieux et touche-à-tout, avec un background de 3 ans dans le support logiciel et le helpdesk. J’aime comprendre, créer, améliorer. <br>Passionné par les nouvelles technologies, je me forme en continu pour rester à la page et repousser mes limites. <br>Du bug tracking à la conception d’interfaces modernes, je combine esprit pratique et sens du détail pour construire des expériences web efficaces et humaines. Mon truc ? Rendre la tech accessible, agréable, et surtout utile.
        </p>
      `
    },
    "portfolio": {
      title: "# 📖 portfolio",
      content: `
        <p>
          Voici quelques projets récents :
          <div class="gallery">
            <div class="gallery-item">
                <a href="https://anlekg.github.io/project1-booki/">
                  <img src="images/booki.png" alt="Booki">
                  <div class="caption">Booki (OC Course)</div>
                </a>
            </div>
            <div class="gallery-item">
                <a href="">
                  <img src="images/sophie.png" alt="Sophie Bluel">
                  <div class="caption">Sophie Bluel (OC Course)</div>
                </a>
            </div>
            <div class="gallery-item">
                <a href="https://anlekg.github.io/Nina-Carducci-Dev/">
                  <img src="images/nina.png" alt="Nina Carducci">
                  <div class="caption">Nina Carducci (OC Course)</div>
                </a>
            </div>
            <div class="gallery-item">
                <a href="">
                  <img src="images/kasa.png" alt="Kasa">
                  <div class="caption">Kasa (OC Course)</div>
                </a>
            </div>
            <div class="gallery-item">
                <a href="">
                  <img src="images/mvg.png" alt="Mon Vieux Grimoire">
                  <div class="caption">Mon Vieux Grimoire (OC Course)</div>
                </a>
            </div>
            </div>
        </p>
      `
    },
    "resume": {
      title: "# 🗒️ resume",
      content: `
        <p>
          <strong>Expériences :</strong><br>
          - CMA CGM - Helpdesk<br>
          - TF1 - Helpdesk<br>
          - Talentia Software - Software Support<br>
          - The Key S.A. - Software Support<br>
          <br>
          <div class="resume-card">
          <div class="resume-body">
            <h3>Compétences</h3>

            <div class="resume-skill">
              <div class="resume-label">HTML / CSS</div>
              <div class="resume-bar"><div class="resume-fill fill-html"></div></div>
            </div>

            <div class="resume-skill">
              <div class="resume-label">JavaScript</div>
              <div class="resume-bar"><div class="resume-fill fill-js"></div></div>
            </div>

            <div class="resume-skill">
              <div class="resume-label">React</div>
              <div class="resume-bar"><div class="resume-fill fill-react"></div></div>
            </div>

            <div class="resume-skill">
              <div class="resume-label">Node.js</div>
              <div class="resume-bar"><div class="resume-fill fill-node"></div></div>
            </div>

            <div class="resume-skill">
              <div class="resume-label">Git / GitHub</div>
              <div class="resume-bar"><div class="resume-fill fill-git"></div></div>
            </div>
          </div>
        </div>
        </p>
      `
    },
    "contact": {
      title: "🔊 📲 contact",
      content: `
        <p>
          Tu veux discuter ou bosser ensemble ? Voici mon Linkedin, mon Github et un formulaire pour me contacter !<br><br>
          <div class="badge-base LI-profile-badge" data-locale="fr_FR" data-size="medium" data-theme="dark" data-type="VERTICAL" data-vanity="alexgallic" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://fr.linkedin.com/in/alexgallic?trk=profile-badge"></a></div>
          <div class="social-card github">
          <div class="card-header">
            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" />
            <span>GitHub</span>
          </div>
          <div class="card-body">
            <img class="avatar" src="https://avatars.githubusercontent.com/u/106981899?v=4" alt="Avatar GitHub" />
            <div class="info">
              <h3>Alexandre Gallic</h3>
              <p>Développeur Web</p>
              <p><small>@anlekg</small></p>
              <a href="https://github.com/anlekg" target="_blank">Voir le profil</a>
            </div>
          </div>
        </div>
          <form id="contact-form" class="contact-form">
          <label>Nom</label>
          <input type="text" name="name" required>

          <label>Email</label>
          <input type="email" name="email" required>

          <label>Sujet</label>
          <input type="text" name="title" required>

          <label>Message</label>
          <textarea name="message" required></textarea>

          <input type="submit" value="Envoyer">
        </form>
        </p>
        <script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>
      `
    }
  };

  function getFormattedDate() {
    const now = new Date();
    return now.toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "short",
      year: "numeric"
    });
  }

  function loadLinkedInScript() {
    if (!document.getElementById('linkedin-badge-script')) {
      const script = document.createElement('script');
      script.src = "https://platform.linkedin.com/badges/js/profile.js";
      script.async = true;
      script.defer = true;
      script.id = 'linkedin-badge-script';
      document.body.appendChild(script);
    }
  }

  navItems.forEach(item => {
    item.addEventListener("click", () => {
      navItems.forEach(i => i.classList.remove("active"));
      item.classList.add("active");
      window.location.hash = item.id;

      const key = item.id;
      const pageKey = key.replace(/[【】]/g, "");

      if (pages[pageKey]) {
        header.textContent = pages[pageKey].title;

        content.classList.remove("fade-in");
        void content.offsetWidth; // reset animation
        content.innerHTML = `
        <div class="message fade-in">
            <img class="avatar" src="images/avatar.jpeg" alt="avatar">
            <div class="message-content">
            <div class="message-header">
                <span class="username">Anlek</span>
                <span class="timestamp">${getFormattedDate()}</span>
            </div>
            ${pages[pageKey].content}
            </div>
        </div>
        `;
        content.classList.add("fade-in");
        if (key == "contact") {loadLinkedInScript();}
        else {
          if (document.getElementById('linkedin-badge-script')) {
            lnscript = document.getElementById('linkedin-badge-script');
            lnscript.remove();
          }
        };
      }
    });
  });

  function loadPageFromHash() {
    const hash = window.location.hash.replace("#", "");
    const target = document.getElementById(hash) || document.querySelector(".nav-item");
    target.click();
  }

  loadPageFromHash();
});