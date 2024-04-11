$(document).ready(function () {
    var balance = 50; // Replace 100 with the actual balance


    $('#validationForm').submit(function (event) {
        event.preventDefault();
        var phoneNumber = $('#phoneNumber').val();
        var amount = parseFloat($('#amount').val());

        if (!isValidPhoneNumber(phoneNumber)) {
            $('#note').text("Phone number must be 11 digits and contain only digits");
            setTimeout(function () {
                $('#note').text(
                    "Note: To Buy Airtime Attracts A Charges Of N10 Only");
            }, 5000);
        } else if (amount > balance) {
            $('#submitButton').text("Insufficient Balance").prop('disabled', true);
            return; // Stop further execution
        } else {
            // Redirect to enter-pin.html if all criteria are met
            $('#validationForm').submit(function (event) {
                event.preventDefault();
                // Store user input in local storage
                localStorage.setItem('transferData', JSON.stringify({
                    amount: $('#amount').val(),
                    phoneNumber: $('#phoneNumber').val(),
                    network: $('#exampleSelect').val()
                }));
                // Redirect user to enter-pin page
                window.location.href = 'enter-pin2.html';
            });
        }
    });


    $('#amount').on('input', function () {
        var amount = parseFloat($(this).val());
        if (amount > balance) {
            $('#submitButton').text("Insufficient Balance");
        } else {
            $('#submitButton').text("Continue");
        }
    });

    function isValidPhoneNumber(phoneNumber) {
        return /^\d{11}$/.test(phoneNumber); // Check if phoneNumber contains exactly 11 digits
    }

    function showError(message) {
        $('#errorText').text(message).show();
        setTimeout(function () {
            $('#errorText').hide();
        }, 5000);
    }
})

