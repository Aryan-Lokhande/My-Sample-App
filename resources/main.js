function getSystemInfo() {
    Neutralino.os.execCommand("uname -a").then((output) => {
        document.getElementById("output").textContent = output.stdOut;
    }).catch((error) => {
        document.getElementById("output").textContent = "Error fetching system info";
    });
}

Neutralino.init();
