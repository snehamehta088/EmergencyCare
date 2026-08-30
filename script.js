const form = document.getElementById("emergencyForm");


form.addEventListener("submit", function (event) {

    event.preventDefault();


    /* BASIC DETAILS */

    const patientName =
        document.getElementById("patientName").value.trim();

    const age =
        document.getElementById("age").value;

    const gender =
        document.getElementById("gender").value || "Not Available";

    const bloodGroup =
        document.getElementById("bloodGroup").value || "Not Available";

    const emergency =
        document.getElementById("emergencyType").value;

    const mechanism =
        document.getElementById("mechanism").value.trim()
        || "Not Available";

    const injuryTime =
        document.getElementById("injuryTime").value.trim()
        || "Not Available";

    const hospital =
        document.getElementById("hospital").value
        || "Not Available";


    /* ATTENDANT */

    const attendant =
        document.getElementById("attendantName").value.trim();

    const phone =
        document.getElementById("phone").value;


    /* CLINICAL INFORMATION */

    const consciousness =
        document.getElementById("consciousness").value
        || "Not Available";

    const gcs =
        document.getElementById("gcs").value
        || "Not Available";

    const bp =
        document.getElementById("bp").value.trim()
        || "Not Available";

    const spo2 =
        document.getElementById("spo2").value.trim()
        || "Not Available";


    /* OTHER INFORMATION */

    const injuries =
        document.getElementById("injuries").value.trim();

    const redFlags =
        document.getElementById("redFlags").value.trim();

    const imagingHistory =
        document.getElementById("imagingHistory").value.trim()
        || "Not Available";


    /* GENERATE PATIENT ID */

    const patientId =
        Math.floor(10000 + Math.random() * 90000);


    /* DISPLAY BASIC INFORMATION */

    document.getElementById("patientId").textContent =
        patientId;

    document.getElementById("resultName").textContent =
        patientName;

    document.getElementById("resultAge").textContent =
        age + " Years";

    document.getElementById("resultGender").textContent =
        gender;

    document.getElementById("resultBlood").textContent =
        bloodGroup;

    document.getElementById("resultEmergency").textContent =
        emergency;

    document.getElementById("resultMechanism").textContent =
        mechanism;

    document.getElementById("resultTime").textContent =
        injuryTime;

    document.getElementById("resultHospital").textContent =
        hospital;


    /* DISPLAY CLINICAL INFORMATION */

    document.getElementById("resultConsciousness").textContent =
        consciousness;

    document.getElementById("resultGCS").textContent =
        gcs;

    document.getElementById("resultBP").textContent =
        bp;

    document.getElementById("resultSpO2").textContent =
        spo2;


    /* INJURIES */

    const injuryBox =
        document.getElementById("resultInjuries");

    injuryBox.innerHTML = "";

    if (injuries !== "") {

        const injuryList =
            injuries.split(",");

        injuryList.forEach(function (injury) {

            const p =
                document.createElement("p");

            p.textContent =
                "🔴 " + injury.trim();

            injuryBox.appendChild(p);

        });

    } else {

        injuryBox.innerHTML =
            "<p>Not Available</p>";

    }


    /* RED FLAGS */

    const redFlagBox =
        document.getElementById("resultRedFlags");

    redFlagBox.innerHTML = "";

    if (redFlags !== "") {

        const flags =
            redFlags.split(",");

        flags.forEach(function (flag) {

            const p =
                document.createElement("p");

            p.textContent =
                "⚠️ " + flag.trim();

            redFlagBox.appendChild(p);

        });

    } else {

        redFlagBox.innerHTML =
            "<p>No safety alerts reported</p>";

    }


    /* IMAGING */

    document.getElementById("resultImaging").textContent =
        imagingHistory;


    /* CREATE QR */

    const currentURL =
        window.location.href.split("#")[0];

    const qrText =
        currentURL +
        "?patient=" +
        encodeURIComponent(patientId);


    const qrURL =
        "https://api.qrserver.com/v1/create-qr-code/" +
        "?size=200x200&data=" +
        encodeURIComponent(qrText);


    document.getElementById("qrCode").src =
        qrURL;


    /* SHOW RESULT */

    document.getElementById("result").style.display =
        "block";


    document.getElementById("result").scrollIntoView({
        behavior: "smooth"
    });

});