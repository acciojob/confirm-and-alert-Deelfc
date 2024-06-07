//your JS code here. If required.
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Confirm and Alert</title>
</head>
<body>
    <button id="confirmButton">Click Me</button>

    <script>
        document.getElementById('confirmButton').onclick = function() {
            var userConfirmed = confirm("Do you want to proceed?");
            if (userConfirmed) {
                alert("You clicked OK. Proceeding...");
            } else {
                alert("You clicked Cancel. Exiting...");
            }
        }
    </script>
</body>
</html>
