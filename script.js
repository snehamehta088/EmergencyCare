const form = document.getElementById("emergencyForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const patientName =
        document.getElementById("patientName").value.trim();

    const age =
        document.getElementById("age").value;

    const gender =
        document.getElementById("gender").value;

    const bloodGroup =
        document.getElementById("bloodGroup").value;

    const emergency =
        document.getElementById("emergencyType").value;

    const hospital =
        document.getElementById("hospital").value;

    const attendant =
        document.getElementById("attendantName").value.trim();

    const phone =
        document.getElementById("phone").value;

    const address =
        document.getElementById("address").value.trim();

    // Generate random emergency token
    const token =
        "EM-" +
        new Date().getFullYear() +
        "-" +
        Math.floor(1000 + Math.random() * 9000);

    // Create data for QR
    const qrData = encodeURIComponent(
        "Emergency Registration\n" +
        "Token: " + token +
        "\nPatient: " + patientName +
        "\nAge: " + age +
        "\nGender: " + gender +
        "\nBlood Group: " + bloodGroup +
        "\nEmergency: " + emergency +
        "\nHospital: " + hospital +
        "\nAttendant: " + attendant +
        "\nPhone: " + phone +
        "\nAddress: " + address
    );

    // QR Code generation
    const qrURL =
        "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data="
        + qrData;

    // Show result
    document.getElementById("token").textContent = token;

    document.getElementById("resultName").textContent =
        patientName;

    document.getElementById("resultEmergency").textContent =
        emergency;

    document.getElementById("resultHospital").textContent =
        hospital;

    document.getElementById("resultAttendant").textContent =
        attendant;

    document.getElementById("qrCode").src = qrURL;

    document.getElementById("result").style.display = "block";

    // Scroll to result
    document.getElementById("result").scrollIntoView({
        behavior: "smooth"
    });

});