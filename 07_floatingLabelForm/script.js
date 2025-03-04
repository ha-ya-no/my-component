document.addEventListener("DOMContentLoaded", () => {
    gsap.to(".form-container", {
        opacity: 1,
        duration: 1.2,
        ease: "power2.out"
    });

    document.querySelectorAll(".form-group__input, .form-group__textarea").forEach((input) => {
        input.addEventListener("mouseenter", () => {
            gsap.to(input, {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                duration: 0.3
            });
        });

        input.addEventListener("mouseleave", () => {
            gsap.to(input, {
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                duration: 0.3
            });
        });
    });

    document.querySelectorAll(".form-group__input, .form-group__textarea").forEach((input) => {
        let label = input.previousElementSibling;

        input.addEventListener("focus", () => {
            gsap.to(label, {
                y: -20,
                scale: 0.85,
                color: "#D81B60",
                duration: 0.3
            });
        });

        input.addEventListener("blur", () => {
            if (!input.value) {
                gsap.to(label, {
                    y: 0,
                    scale: 1,
                    color: "#fff",
                    duration: 0.3
                });
            } else {
                input.classList.add("completed");
            }
        });

        document.addEventListener("DOMContentLoaded", () => {
            const togglePasswordButton = document.getElementById("toggle-password");
            const passwordInput = document.getElementById("password");

            togglePasswordButton.addEventListener("click", () => {
                // パスワード表示・非表示の切り替え
                if (passwordInput.type === "password") {
                    passwordInput.type = "text";
                    togglePasswordButton.textContent = "Hide"; // ボタンのテキストを変更
                } else {
                    passwordInput.type = "password";
                    togglePasswordButton.textContent = "Show"; // ボタンのテキストを変更
                }
            });
        });

        input.addEventListener("input", () => {
            if (input.value) {
                gsap.to(label, {
                    y: -20,
                    scale: 0.85,
                    color: "#D81B60",
                    duration: 0.3
                });
                input.classList.add("completed");
            } else {
                gsap.to(label, {
                    y: 0,
                    scale: 1,
                    color: "#fff",
                    duration: 0.3
                });
                input.classList.remove("completed");
            }
        });
    });
});