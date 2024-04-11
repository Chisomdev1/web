document.addEventListener("DOMContentLoaded", function () {
    const MtnFormText = document.getElementById("MtnForm");
    const AirtelFormText = document.getElementById("AirtelForm");
    const GloFormText = document.getElementById("GloForm");
    const MobileFormText = document.getElementById("MobileForm");


    const selectWelcomeText = document.getElementById("selectWelcome");
    const selectMenu = document.getElementById("exampleSelect");

    // Automatically select "Welcome" option when clicking the text
    MtnFormText.addEventListener("click", function () {
        // Loop through options to find the "Welcome" option and select it
        for (let i = 0; i < selectMenu.options.length; i++) {
            if (selectMenu.options[i].text === "Mtn") {
                selectMenu.selectedIndex = i;
                break;
            }
        }
    });
    AirtelFormText.addEventListener("click", function () {
        // Loop through options to find the "Welcome" option and select it
        for (let i = 0; i < selectMenu.options.length; i++) {
            if (selectMenu.options[i].text === "Airtel") {
                selectMenu.selectedIndex = i;
                break;
            }
        }
    });
    GloFormText.addEventListener("click", function () {
        // Loop through options to find the "Welcome" option and select it
        for (let i = 0; i < selectMenu.options.length; i++) {
            if (selectMenu.options[i].text === "Glo") {
                selectMenu.selectedIndex = i;
                break;
            }
        }
    });
    MobileFormText.addEventListener("click", function () {
        // Loop through options to find the "Welcome" option and select it
        for (let i = 0; i < selectMenu.options.length; i++) {
            if (selectMenu.options[i].text === "9Moblie") {
                selectMenu.selectedIndex = i;
                break;
            }
        }
    });
})

document.addEventListener("DOMContentLoaded", function () {
    const waecFormText = document.getElementById("waecForm");
    const necoFormText = document.getElementById("necoForm");



    const selectWelcomeText = document.getElementById("selectWelcome");
    const selectMenu = document.getElementById("exampleSelect");

    // Automatically select "Welcome" option when clicking the text
    waecFormText.addEventListener("click", function () {
        // Loop through options to find the "Welcome" option and select it
        for (let i = 0; i < selectMenu.options.length; i++) {
            if (selectMenu.options[i].text === "waec") {
                selectMenu.selectedIndex = i;
                break;
            }
        }
    });
    necoFormFormText.addEventListener("click", function () {
        // Loop through options to find the "Welcome" option and select it
        for (let i = 0; i < selectMenu.options.length; i++) {
            if (selectMenu.options[i].text === "neco") {
                selectMenu.selectedIndex = i;
                break;
            }
        }
    });
    GloFormText.addEventListener("click", function () {
        // Loop through options to find the "Welcome" option and select it
        for (let i = 0; i < selectMenu.options.length; i++) {
            if (selectMenu.options[i].text === "Glo") {
                selectMenu.selectedIndex = i;
                break;
            }
        }
    });
    MobileFormText.addEventListener("click", function () {
        // Loop through options to find the "Welcome" option and select it
        for (let i = 0; i < selectMenu.options.length; i++) {
            if (selectMenu.options[i].text === "9Moblie") {
                selectMenu.selectedIndex = i;
                break;
            }
        }
    });
})

document.addEventListener("DOMContentLoaded", function () {
    const welcomeText = document.getElementById("welcomeText");
    const copyButton = document.getElementById("copyButton");

    // Add click event listener to the copy button
    copyButton.addEventListener("click", function () {
        // Create a range object to select the text
        const range = document.createRange();
        range.selectNode(welcomeText);

        // Select the text inside the range
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);

        // Copy the selected text to the clipboard
        document.execCommand("copy");

        // Deselect the text
        window.getSelection().removeAllRanges();

        // Show success message using SweetAlert with Poppins font
        Swal.fire({
            title: 'Copy Successful',
            text: 'The text has been copied successfully!'
        });
    });
})

document.addEventListener("DOMContentLoaded", function () {
    const welcomeTexts = document.getElementById("welcomeTexts");
    const copyButtons = document.getElementById("copyButtons");

    // Add click event listener to the copy button
    copyButtons.addEventListener("click", function () {
        // Create a range object to select the text
        const range = document.createRange();
        range.selectNode(welcomeTexts);

        // Select the text inside the range
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);

        // Copy the selected text to the clipboard
        document.execCommand("copy");

        // Deselect the text
        window.getSelection().removeAllRanges();

        // Show success message using SweetAlert with Poppins font
        Swal.fire({
            title: 'Copy Successful',
            text: 'The text has been copied successfully!'
        });
    });
})



document.addEventListener("DOMContentLoaded", function () {
    var correctPin = "1234"; // Replace with your correct PIN
    var pinInput = document.getElementById("pin");

    document.getElementById("submit-btn").addEventListener("click", function (event) {
        event.preventDefault(); // Prevent form submission

        var enteredPin = pinInput.value;

        if (enteredPin === correctPin) {
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'PIN is correct. Redirecting...',
                timer: 2000, // Auto close after 2 seconds
                showConfirmButton: false
            }).then(function () {
                window.location.href = "change-password.html"; // Replace with the URL you want to redirect to
            });
        } else {
            Swal.fire({
                title: 'Error!',
                text: 'PIN is incorrect. Please try again.',
                showCancelButton: true,
                confirmButtonText: 'Retry',
                cancelButtonText: 'Didn\'t receive code'
            }).then(function (result) {
                if (result.value) {
                    // User clicked Retry button
                    // Reset the value of the input field
                    pinInput.value = "";
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                    // User clicked Didn't receive code button
                    // Redirect to another page
                    window.location.href = "forget-password.html"; // Replace with the URL you want to redirect to
                }
            });
        }
    });
});

