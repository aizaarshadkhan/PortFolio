$(document).ready(function () {
    renderSkills();
    renderProjects();
    setupNavbar();
    renderEducation();

    $("#contactForm").on("submit", function (event) {

        event.preventDefault();

        let isValid = true;


        // Clear previous errors

        $("#nameError").text("");
        $("#emailError").text("");
        $("#messageError").text("");

        $("#formSuccess").hide();


        // Get values

        const name = $("#name").val().trim();
        const email = $("#email").val().trim();
        const message = $("#message").val().trim();


        // Name validation

        if (name === "") {

            $("#nameError").text(
                "Please enter your name."
            );

            isValid = false;
        }


        // Email validation

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === "") {

            $("#emailError").text(
                "Please enter your email."
            );

            isValid = false;

        } else if (!emailPattern.test(email)) {

            $("#emailError").text(
                "Please enter a valid email address."
            );

            isValid = false;
        }


        // Message validation

        if (message === "") {

            $("#messageError").text(
                "Please enter your message."
            );

            isValid = false;
        }


        // Form is valid

        if (isValid) {

            $("#formSuccess").fadeIn();

            $("#contactForm")[0].reset();

        }

    });
});


/* =========== RENDER SKILLS ======== */

function renderSkills() {

    const $skillsContainer = $("#skillsContainer");

    if ($skillsContainer.length === 0) {
        return;
    }

    const skillsHTML = portfolioData.skills.map(function (skill) {

        return `

            <div class="col-lg-4 col-md-6 mb-4">

                <div class="skill-card">

                    <div class="skill-icon">
                        <i class="${skill.icon}"></i>
                    </div>

                    <h4>
                        ${skill.name}
                    </h4>

                    <p>
                        ${skill.description}
                    </p>

                </div>

            </div>

        `;

    }).join("");

    $skillsContainer.html(skillsHTML);

}


/* ========= RENDER PROJECTS ========== */

function renderProjects() {

    const $projectsContainer = $("#projectsContainer");

    if ($projectsContainer.length === 0) {
        return;
    }

    const projectsHTML = portfolioData.projects.map(function (project) {

        let projectImage = `<img
                    src="${project.image}"
                    alt="${project.title}"
                    class="project-img"
                >`;

        const technologies = project.technologies.map(
            function (technology) {

                return `<span>
                        ${technology}
                        </span>`;

            }
        ).join("");


        return `

            <div class="col-lg-5 mx-auto">

                <div class="project-card">

                    <div class="project-image">

                        ${projectImage}

                    </div>


                    <div class="project-body">

                        <span class="project-category">
                            ${project.category}
                        </span>

                        <h3>
                            ${project.title}
                        </h3>

                        <p>
                            ${project.shortDescription}
                        </p>


                        <div class="tech-list">

                            ${technologies}

                        </div>


                        <a
                            href="#"
                            class="project-button"
                            data-project-id="${project.id}"
                        >

                            View Details

                            <i class="fas fa-arrow-right"></i>

                        </a>

                    </div>

                </div>

            </div>

        `;

    }).join("");


    $projectsContainer.html(projectsHTML);


    // Project details button
    $(".project-button").click(function (e) {

        e.preventDefault();

        const projectId = $(this).data("project-id");

        showProjectDetails(projectId);

    });


    // Image error handling
    $(".project-img").on("error", function () {

        showProjectPlaceholder(this);

    });


    createProjectModal();

}


/* ============ RENDER EDUCATION ============== */

function renderEducation() {

    const $educationContainer = $("#educationContainer");

    if ($educationContainer.length === 0) {
        return;
    }


    const educationHTML =
        portfolioData.education.map(function (item) {

            return `

                <div class="education-item">

                    <div class="education-icon">

                        <i class="${item.icon}"></i>

                    </div>


                    <div class="education-content">

                        <span class="education-type">
                            ${item.type}
                        </span>


                        <h3>
                            ${item.title}
                        </h3>


                        <h5>
                            ${item.institute}
                        </h5>


                        <span class="education-duration">

                            <i class="far fa-calendar-alt"></i>

                            ${item.duration}

                        </span>


                        <p>
                            ${item.description}
                        </p>

                    </div>

                </div>

            `;

        }).join("");


    $educationContainer.html(educationHTML);

}


/* ============ PROJECT MODAL =========== */

function createProjectModal() {

    if ($("#projectModal").length > 0) {
        return;
    }


    const modalHTML = `

        <div
            class="modal fade"
            id="projectModal"
            tabindex="-1"
            role="dialog"
            aria-hidden="true"
        >

            <div
                class="modal-dialog modal-lg modal-dialog-centered"
                role="document"
            >

                <div class="modal-content">

                    <div class="modal-header">

                        <h5
                            class="modal-title"
                            id="modalProjectTitle"
                        >
                            Project Details
                        </h5>


                        <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >

                            <span aria-hidden="true">
                                &times;
                            </span>

                        </button>

                    </div>


                    <div class="modal-body">

                        <div id="modalProjectContent"></div>

                    </div>


                    <div class="modal-footer">

                        <button
                            type="button"
                            class="btn btn-secondary"
                            data-dismiss="modal"
                        >
                            Close
                        </button>

                    </div>

                </div>

            </div>

        </div>

    `;


    $("body").append(modalHTML);

}


/* ============ SHOW PROJECT DETAILS ========== */

function showProjectDetails(projectId) {

    const project = portfolioData.projects.find(
        function (item) {

            return item.id == projectId;

        }
    );


    if (!project) {
        return;
    }


    $("#modalProjectTitle").text(project.title);


    const features = project.features.map(
        function (feature) {

            return `
                <li class="mb-2 ms-auto feature">
                    ${feature}
                </li>
            `;

        }
    ).join("");


    const technologies =
        project.technologies.map(
            function (technology) {

                return `
                    <span class="badge badge-primary mr-1 mb-1">
                        ${technology}
                    </span>
                `;

            }
        ).join("");


    const projectContent = `

        <div class="mb-4">

            <h5>
                About the Project
            </h5>

            <p>
                ${project.description}
            </p>

        </div>


        <div class="mb-4">

            <h5>
                Project Features
            </h5>

            <ul>
                ${features}
            </ul>

        </div>


        <div class="mb-4">

            <h5>
                Technologies Used
            </h5>

            <div>
                ${technologies}
            </div>

        </div>


        <div>

            <h5>
                Project Links
            </h5>


            <a
                href="${project.github}"
                target="_blank"
                class="btn btn-dark mr-2"
            >

                <i class="fab fa-github"></i>

                GitHub

            </a>


            <a
                href="${project.liveDemo}"
                target="_blank"
                class="btn btn-primary"
            >

                <i class="fas fa-external-link-alt"></i>

                Live Demo

            </a>

        </div>

    `;


    $("#modalProjectContent").html(projectContent);


    // Bootstrap jQuery modal
    $("#projectModal").modal("show");

}

// CLOSE MOBILE NAVBAR AFTER CLICKNG THE LINK 

function setupNavbar() {

    $(".navbar-nav .nav-link").click(function () {

        $(".navbar-collapse").collapse("hide");

    });

}