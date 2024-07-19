function confirmDonation() {
    if (confirm("Are you sure you want to donate $10?")) {
        document.getElementById("donation-form").submit();
    }
}