const viewer = document.getElementById("viewer");

const presets = {
    iso: "45deg 60deg 120%",
    top: "0deg 0deg 120%",
    front: "0deg 90deg 120%",
    left: "-90deg 90deg 120%"
};

document.querySelectorAll("[data-view]").forEach(button => {

    button.addEventListener("click", () => {

        const preset = presets[button.dataset.view];

        viewer.setAttribute(
            "camera-orbit",
            preset
        );

        if (viewer.jumpCameraToGoal) {
            viewer.jumpCameraToGoal();
        }
    });

});

document.getElementById("resetBtn")
    .addEventListener("click", () => {

        viewer.setAttribute(
            "camera-orbit",
            presets.iso
        );

        viewer.setAttribute(
            "field-of-view",
            "30deg"
        );

        if (viewer.jumpCameraToGoal) {
            viewer.jumpCameraToGoal();
        }
    });