(function () {
    "use strict";

    var modal = document.getElementById("more-info-modal");
    if (!modal) return;

    var modalTitle = modal.querySelector(".modal-title");
    var modalBody = modal.querySelector(".modal-body");

    // Collect app info from the cards.
    var apps = [];
    document.querySelectorAll(".app-card").forEach(function (card) {
        var titleEl = card.querySelector("h3");
        var infoEl = card.querySelector(".app-supervisor-body");
        if (!titleEl || !infoEl) return;
        apps.push({
            title: titleEl.textContent.trim(),
            body: infoEl.innerHTML.trim(),
        });
    });

    function openModal(app) {
        modalTitle.textContent = app.title;
        modalBody.innerHTML = app.body;
        modal.classList.add("open");
        modal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
    }

    function closeModal() {
        modal.classList.remove("open");
        modal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
    }

    // Wire up "More info" buttons.
    document.querySelectorAll(".btn-more-info").forEach(function (btn) {
        btn.addEventListener("click", function () {
            var title = btn.getAttribute("data-app-title");
            var app = apps.find(function (a) {
                return a.title === title;
            });
            if (app) openModal(app);
        });
    });

    // Close on overlay click or close button.
    modal.querySelectorAll("[data-modal-close]").forEach(function (el) {
        el.addEventListener("click", closeModal);
    });

    // Close on Escape.
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && modal.classList.contains("open")) {
            closeModal();
        }
    });
})();
