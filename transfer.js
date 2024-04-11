$(document).ready(function () {


  $("#closeButton").on("click", function () {
    $("#page").slideUp();
  });
});

$(document).ready(function () {
  $("#balanceInput").on("input", function () {
    const inputBalance = parseFloat($(this).val());
    const continueButton = $("#continueButton");
    const balanceMessage = $("#balanceMessage");

    if (!isNaN(inputBalance) && inputBalance >= 1000) {
      continueButton.prop("disabled", false);
      balanceMessage.show();
    } else {
      continueButton.prop("disabled", true);
      balanceMessage.hide();
    }
  });
});


// Dynamically load the Poppins font from Google Fonts
function loadFont() {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap';
  document.head.appendChild(link);
}

// Call the loadFont function to load the font
loadFont();

document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission

  // Perform form validation
  const name = document.getElementById("name").value.trim();
  const bank = document.getElementById("bank").value.trim();
  const number = document.getElementById("number").value.trim();

  if (name === '' || bank === '' || number === '') {
    // Show SweetAlert message if form fields are empty
    Swal.fire({
      title: 'Oops...',
      text: 'Please fill all the fields!',
    });
  } else if (!/^\d{10}$/.test(number)) {
    // Show SweetAlert message if account number is invalid
    Swal.fire({
      title: 'Oops...',
      text: 'Account number must be 10 digits!',
    });
  } else {
    // Redirect to enter-pin.html if all criteria are met
    $('#myForm').submit(function (event) {
      event.preventDefault();
      // Store user input in local storage
      localStorage.setItem('transferData', JSON.stringify({
        amount: $('#name').val(),
        phoneNumber: $('#bank').val(),
        network: $('#number').val()
      }));
      // Redirect user to enter-pin page
      window.location.href = 'confirmed-transfer.html';
    });
  }
});


// function fetchTransactions() {
//   var transactionType = document.getElementById("transactionType").value;
//   var transactionResults = document.getElementById("transactionResults");

//   // Clear previous results
//   transactionResults.innerHTML = "";

//   // Add a delay of 2 seconds before fetching transactions
//   setTimeout(function () {
//     // Fetch transactions based on selected type
//     if (transactionType === "data") {
//       // Fetch data transactions
//       transactionResults.innerHTML = "<p>No Data transactions.</p>";
//     } else if (transactionType === "Transaction") {
//       // Fetch airtime transactions
//       transactionResults.innerHTML = "<p>No Transactions History.</p>";
//     } else if (transactionType === "airtime") {
//       // Fetch airtime transactions
//       transactionResults.innerHTML = "<p>Airtime transactions found.</p>";
//     } else if (transactionType === "wallet") {
//       // Fetch wallet transactions
//       transactionResults.innerHTML = "<p>No Wallet transactions.</p>";
//     } else if (transactionType === "exam") {
//       // Fetch exam transactions
//       transactionResults.innerHTML = "<p>No Exam transactions.</p>";
//     } else {
//       // Handle other transaction types
//       transactionResults.innerHTML = "<p>No transactions History.</p>";
//     }
//   }, 2000); // 2 seconds delay
// }


function fetchTransactions() {
  var transactionType = document.getElementById("transactionType").value;
  var transactionResults = document.getElementById("transactionResults");

  // Clear previous results
  transactionResults.innerHTML = "";

  // Fetch transactions based on selected type
  if (transactionType === "data") {
    // Fetch data transactions
    transactionResults.innerHTML = "<p> No Data transactions.</p>";
  } else if (transactionType === "Transaction") {
    // Fetch airtime transactions
    transactionResults.innerHTML = "<p>No Transactions History.</p>";
  } else if (transactionType === "airtime") {
    // Fetch airtime transactions
    transactionResults.innerHTML = "<p>No Airtime transactions.</p>";
  } else if (transactionType === "wallet") {
    // Fetch airtime transactions
    transactionResults.innerHTML = "<p>No Wallet transactions.</p>";
  } else if (transactionType === "exam") {
    // Fetch airtime transactions
    transactionResults.innerHTML = "<p>No Exam transactions.</p>";
  } else {
    // Handle other transaction types
    transactionResults.innerHTML = "<p>No transactions History.</p>";
  }
}


document.addEventListener("DOMContentLoaded", function () {
  // Hide preloader after 1 seconds
  setTimeout(function () {
    document.getElementById('preloader').style.display = 'none';
    document.getElementById('content').style.display = 'block';
  }, 800);
});

function checkPasswords() {
  var newPassword = document.getElementById("newPassword").value;
  var confirmPassword = document.getElementById("confirmPassword").value;

  if (newPassword !== confirmPassword) {
    // Show SweetAlert if passwords don't match
    Swal.fire("Passwords do not match!", "Please make sure your passwords match.");
    return false;
  } else {
    // Show SweetAlert if passwords match
    Swal.fire("Passwords match!", "Redirecting you to Dashboard.", "success")
      .then(function () {
        // Redirect to Dashboard.html
        window.location.href = "Dashboard.html";
      });
    return true;
  }
}