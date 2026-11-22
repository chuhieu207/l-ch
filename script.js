let today = new Date();
let month = today.getMonth();
let year = today.getFullYear();

function showCalendar() {

    // Hiển thị tháng và năm
    let title = document.getElementById("month-year");

    title.innerText = "Tháng " + (month + 1) + " " + year;

    // Tìm thứ của ngày đầu tháng
    let firstDay = new Date(year, month, 1).getDay();

    // Tìm ngày cuối tháng
    let lastDate = new Date(year, month + 1, 0).getDate();

    // Chuyển Chủ nhật về cuối tuần
    firstDay = (firstDay + 6) % 7;

    let days = document.getElementById("days");

    days.innerHTML = "";

    // Tạo các ô trống
    for (let i = 0; i < firstDay; i++) {
        days.innerHTML += "<div></div>";
    }

    // Hiển thị các ngày trong tháng
    for (let i = 1; i <= lastDate; i++) {

        let day = document.createElement("div");

        day.innerText = i;

        // Đánh dấu ngày hôm nay
        if (
            i == today.getDate() &&
            month == today.getMonth() &&
            year == today.getFullYear()
        ) {
            day.classList.add("today");
        }

        days.appendChild(day);
    }
}
// Chuyển tháng trước
document.getElementById("prev").onclick = function() {

    month--;

    if (month < 0) {
        month = 11;
        year--;
    }

    showCalendar();
};
// Chuyển tháng tiếp theo
document.getElementById("next").onclick = function() {

    month++;

    if (month > 11) {
        month = 0;
        year++;
    }

    showCalendar();
};
// Hiển thị lịch
showCalendar();