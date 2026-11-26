// =============================
// CHECK OUTAGE
// =============================

function checkOutage() {

    const location =
        document.getElementById("locationInput").value;

    const result =
        document.getElementById("outageResult");


    if (location.trim() === "") {

        result.style.display = "block";

        result.innerHTML = `
            <div class="alert alert-warning">
                <i class="bi bi-exclamation-circle"></i>
                Please enter your service location.
            </div>
        `;

        return;
    }


    result.style.display = "block";

    result.innerHTML = `
        <div class="alert alert-success">

            <h5>
                <i class="bi bi-check-circle-fill"></i>
                Verified outage
            </h5>

            <strong>Outage in your area</strong>

            <p class="mb-1">
                Location: ${location}
            </p>

            <p class="mb-1">
                Status: Response team assigned
            </p>

            <p class="mb-0">
                Estimated restoration:
                <strong>9:00 PM – 10:30 PM</strong>
            </p>

            <small>
                This estimate may change as the fault is assessed.
            </small>

        </div>
    `;
}



// =============================
// OUTAGE REPORT
// =============================

document
    .getElementById("outageForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();


        const hazard =
            document.getElementById("hazard").value;


        if (
            hazard ===
            "Yes, there is an electrical hazard"
        ) {

            alert(
                "Safety Warning: Stay away from damaged electrical equipment or fallen lines. Do not approach the hazard."
            );

        }


        // Generate random incident reference

        const reference =
            "OUT-2026-" +
            Math.floor(
                10000 + Math.random() * 90000
            );


        document.getElementById(
            "referenceNumber"
        ).innerText = reference;


        document.getElementById(
            "reportSuccess"
        ).classList.remove("d-none");


        document.getElementById(
            "reportSuccess"
        ).scrollIntoView({
            behavior: "smooth"
        });

    });



// =============================
// CONTACT FORM
// =============================

document
    .getElementById("contactForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();


        document
            .getElementById("contactSuccess")
            .classList.remove("d-none");


        this.reset();

    });



// =============================
// NAVBAR ACTIVE LINK
// =============================

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".nav-link");


window.addEventListener("scroll", () => {

    let currentSection = "";


    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if (
            window.scrollY >= sectionTop
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});