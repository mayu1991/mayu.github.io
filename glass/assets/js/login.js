$(".login-btn").click(function () {
    var username = $("#user-name").val();
    var password = $("#user-password").val();
    var storeId = $("#user-storeId").val();
    if (username != null && password != null && username == 'admin' && password == "123456") {
        location.href = "/glass/html/main.html";
    } else {

    }
});