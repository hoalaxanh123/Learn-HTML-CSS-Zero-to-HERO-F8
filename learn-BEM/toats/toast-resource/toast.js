const toastTypes = {
    ERROR: "error",
    WARNING: "warning",
    SUCCESS: "success",
    INFO: "info"
}
const toastMapper = {
    [toastTypes.SUCCESS]: "fa-solid fa-circle-check",
    [toastTypes.WARNING]: "fa-solid fa-triangle-exclamation",
    [toastTypes.ERROR]: "fa-solid fa-ban",
    [toastTypes.INFO]: "fa-solid fa-circle-info",
}

const toastAnim = ""

const showMessage = (type = toastTypes.SUCCESS, title = "Success", mess = "Wow, Vuong Nguyen with love <3!", duration = 3, speed = 0.8) => {
    const toastContainer = document.getElementById("toast")
    if (toastContainer) {
        let toast = document.createElement("div")
        duration = duration
        toast.innerHTML = `
        <div class="toast toast--${type}" style="--duration:${duration}s;--speed:${speed - 0.2}s">
            <div class="toast__icon toast__icon--${type}">
                <i class="${toastMapper[type]}"></i>
            </div>
            <div class="toast__body">
                <div class="toast_heading">${title}</div>
                <div class="toast__message">${mess}</div>
                <div class="toast__line" style="--duration: ${duration - speed}s"></div>
            </div>
            <div class="toast__close"><i class="fa-solid fa-xmark"></i></div>
        </div>
        `
        toastContainer.appendChild(toast)

        let counter = 0
        toast.onanimationend = (function (e) {
            counter = counter + 1;
            if (counter === 3) {
                toastContainer.removeChild(toast)
            }
        });

        // const intervalId = setTimeout(() => {
        //     toastContainer.removeChild(toast)
        // }, duration * (1000 + ((speed * 1) * 1000)))
        toast.onclick = ((e) => {
            // if (e.target.closest('.toast__close')) {
            // clearInterval(intervalId)
            toastContainer.removeChild(toast)
            // }
        })

    }
}
showMessage()

