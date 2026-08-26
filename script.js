/* MOBILE MENU */

    function toggleMenu() {

        const nav =
            document.getElementById("navigation");

        nav.classList.toggle("open");

    }


    /* CLOSE MOBILE MENU */

    document
        .querySelectorAll("nav a")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    document
                        .getElementById("navigation")
                        .classList.remove("open");

                }
            );

        });


    /* SCROLL REVEAL */

    const revealElements =
        document.querySelectorAll(".reveal");


    const revealObserver =
        new IntersectionObserver(

            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                    }

                });

            },

            {
                threshold: 0.12
            }

        );


    revealElements.forEach(element => {

        revealObserver.observe(element);

    });


    /* ACTIVE NAVIGATION */

    const sections =
        document.querySelectorAll(
            "section[id]"
        );


    const navItems =
        document.querySelectorAll(
            "nav a"
        );


    window.addEventListener(
        "scroll",
        () => {

            let current = "";


            sections.forEach(section => {

                const top =
                    section.offsetTop - 160;


                if (window.scrollY >= top) {

                    current =
                        section.id;

                }

            });


            navItems.forEach(item => {

                item.style.color =
                    "#8d909a";


                if (
                    item.getAttribute("href")
                    ===
                    "#" + current
                ) {

                    item.style.color =
                        "#ffffff";

                }

            });

        }
    );
