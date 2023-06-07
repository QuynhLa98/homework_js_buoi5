/**
 * Bài 1: Quản lý tuyển sinh
 */
// Lắng nghe sự kiện khi nhấn nút "Kiểm tra kết quả"
document.getElementById("checkResult").addEventListener("click", function () {
  // Lấy giá trị từ các input và select
  var diemChuan = parseFloat(document.getElementById("nhapDiemChuan").value);
  var diemMon1 = parseFloat(document.getElementById("diemMon1").value);
  var diemMon2 = parseFloat(document.getElementById("diemMon2").value);
  var diemMon3 = parseFloat(document.getElementById("diemMon3").value);
  var khuVuc = document.getElementById("chonKhuVuc").value;
  var doiTuong = parseInt(document.getElementById("chonDoiTuong").value);

  // Tính điểm ưu tiên khu vực
  var diemUuTienKhuVuc = 0;
  if (khuVuc === "a") {
    diemUuTienKhuVuc = 2;
  } else if (khuVuc === "b") {
    diemUuTienKhuVuc = 1;
  } else if (khuVuc === "c") {
    diemUuTienKhuVuc = 0.5;
  }

  // Tính điểm ưu tiên đối tượng
  var diemUuTienDoiTuong = 0;
  if (doiTuong === 1) {
    diemUuTienDoiTuong = 2.5;
  } else if (doiTuong === 2) {
    diemUuTienDoiTuong = 1.5;
  } else if (doiTuong === 3) {
    diemUuTienDoiTuong = 1;
  }

  // Tính tổng điểm
  var tongDiem =
    diemMon1 + diemMon2 + diemMon3 + diemUuTienKhuVuc + diemUuTienDoiTuong;

  // Kiểm tra kết quả
  if (tongDiem >= diemChuan && diemMon1 > 0 && diemMon2 > 0 && diemMon3 > 0) {
    document.getElementById("result").innerHTML =
      "Giỏi. Thi đậu rồi đó. Tổng điểm: " + tongDiem;
    document.getElementById("result").style.color = "green";
  } else {
    document.getElementById("result").innerHTML = "Rớt";
    document.getElementById("result").style.color = "red";
  }
});

/**
 * Bài 2: Tính tiền điện
 */
// Gán sự kiện "click" cho nút "Tính tiền điện"
document.getElementById("tinhTienDien").addEventListener("click", function () {
  // Lấy giá trị từ trường "Họ và tên"
  var hoTen = document.getElementById("hoTen").value;
  // Chuyển đổi giá trị từ trường "Số Kw" thành số thực
  var soKw = parseFloat(document.getElementById("soKw").value);
  // Biến để lưu trữ tiền điện
  var tienDien = 0;

  // Kiểm tra số Kw để tính tiền điện dựa trên quy tắc đã cho
  if (soKw <= 50) {
    tienDien = soKw * 500;
  } else if (soKw <= 100) {
    tienDien = 50 * 500 + (soKw - 50) * 650;
  } else if (soKw <= 150) {
    tienDien = 50 * 500 + 50 * 650 + (soKw - 100) * 850;
  } else {
    tienDien = 50 * 500 + 50 * 650 + 50 * 850 + (soKw - 150) * 1100;
  }

  // Sử dụng hàm toLocaleString() để thêm dấu phẩy ngăn cách hàng nghìn
  var formattedTienDien = tienDien.toLocaleString();

  // Tạo chuỗi kết quả để hiển thị
  var result = "Họ và tên: " + hoTen + "<br>";
  result += "Số Kw: " + soKw + "<br>";
  result += "Tiền điện: " + formattedTienDien + "đ";

  // Gán chuỗi kết quả vào phần tử "resultTienDien" để hiển thị
  document.getElementById("resultTienDien").innerHTML = result;
});

/**
 * Bài 3: Tính thuế thu nhập cá nhân
 */

// Gán sự kiện "click" cho nút "Tính tiền thuế"
document.getElementById("tinhTienThue").addEventListener("click", function () {
  // Lấy giá trị họ và tên từ trường nhập liệu
  var hoVaTen = document.getElementById("hoVaTen").value;
  // Lấy giá trị tổng thu nhập năm từ trường nhập liệu và chuyển đổi sang kiểu số thực (float)
  var tongThuNhapNam = parseFloat(
    document.getElementById("tongThuNhapNam").value
  );
  // Lấy giá trị số người phụ thuộc từ trường nhập liệu và chuyển đổi sang kiểu số nguyên (integer)
  var nguoiPhuThuoc = parseInt(document.getElementById("nguoiPhuThuoc").value);

  // Kiểm tra số tiền thu nhập có hợp lệ hay không
  if (tongThuNhapNam < 60000000) {
    alert("Số tiền thu nhập không hợp lệ");
    return; // Dừng thực hiện tiếp các bước tính toán
  }

  // Tính thu nhập chịu thuế dựa trên tổng thu nhập, số người phụ thuộc và mức giảm trừ
  var thuNhapChiuThue = tongThuNhapNam - 4000000 - nguoiPhuThuoc * 1600000;
  var thueSuat = 0;
  var tienThue = 0;

  // Xác định thuế suất dựa trên mức thu nhập chịu thuế
  if (thuNhapChiuThue <= 60000000) {
    thueSuat = 0.05;
  } else if (thuNhapChiuThue <= 120000000) {
    thueSuat = 0.1;
  } else if (thuNhapChiuThue <= 210000000) {
    thueSuat = 0.15;
  } else if (thuNhapChiuThue <= 384000000) {
    thueSuat = 0.2;
  } else if (thuNhapChiuThue <= 624000000) {
    thueSuat = 0.25;
  } else if (thuNhapChiuThue <= 960000000) {
    thueSuat = 0.3;
  } else {
    thueSuat = 0.35;
  }

  // Tính số tiền thuế dựa trên thuế suất và thu nhập chịu thuế
  tienThue = thuNhapChiuThue * thueSuat;

  // Tạo đối tượng định dạng số tiền với đơn vị VND
  var formatter = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  // Hiển thị kết quả thuế thu nhập cá nhân lên trang web
  document.getElementById("resultTienThue").innerHTML =
    '<i class="fa-solid fa-money-bill"></i> Thuế thu nhập cá nhân của ' +
    hoVaTen +
    " là: " +
    formatter.format(tienThue);
});

/**
 * Bài 4: Tính tiền cáp
 */
// Xử lý sự kiện khi người dùng thay đổi loại khách hàng
document.getElementById("khachHang").onchange = function () {
  var loaiKhachHang = this.value; // Lấy giá trị của loại khách hàng được chọn
  var soKetNoiInput = document.getElementById("soKetNoi"); // Đối tượng input số kết nối
  var ketNoiDiv = document.querySelector(".ket__noi"); // Đối tượng div "ket__noi"

  // Ẩn hoặc hiển thị ô nhập số kết nối và div "ket__noi" dựa trên loại khách hàng
  if (loaiKhachHang === "3") {
    // Nếu là loại khách hàng "Doanh nghiệp"
    soKetNoiInput.disabled = false; // Bỏ chế độ chỉ đọc cho ô nhập số kết nối
    soKetNoiInput.style.display = "block"; // Hiển thị ô nhập số kết nối
    ketNoiDiv.style.display = "block"; // Hiển thị div "ket__noi"
  } else {
    // Nếu là loại khách hàng "Nhà dân"
    soKetNoiInput.disabled = true; // Đặt chế độ chỉ đọc cho ô nhập số kết nối
    soKetNoiInput.style.display = "none"; // Ẩn ô nhập số kết nối
    ketNoiDiv.style.display = "none"; // Ẩn div "ket__noi"
  }
};

// Xử lý sự kiện khi người dùng nhấn vào nút "Tính tiền cáp"
document.getElementById("tinhTienCap").onclick = function () {
  var loaiKhachHang = document.getElementById("khachHang").value; // Lấy giá trị của loại khách hàng được chọn
  var maKhachHang = document.getElementById("maKhachHang").value; // Lấy giá trị mã khách hàng
  var soKetNoi = parseInt(document.getElementById("soKetNoi").value); // Chuyển đổi giá trị số kết nối thành số nguyên
  var soKenhCaoCap = parseInt(document.getElementById("kenhCaoCap").value); // Chuyển đổi giá trị số kênh cao cấp thành số nguyên

  var phiXuLyHoaDon = 0;
  var phiDichVuCoBan = 0;
  var phiThueKenh = 0;

  // Tính toán các giá trị phí dựa trên loại khách hàng
  if (loaiKhachHang === "3") {
    // Nếu là loại khách hàng "Doanh nghiệp"
    phiXuLyHoaDon = 15;
    phiDichVuCoBan = 75;
    if (soKetNoi > 10) {
      phiDichVuCoBan += (soKetNoi - 10) * 5;
    }
    phiThueKenh = 50 * soKenhCaoCap;
  } else {
    // Nếu là loại khách hàng "Nhà dân"
    phiXuLyHoaDon = 4.5;
    phiDichVuCoBan = 20.5;
    phiThueKenh = 7.5 * soKenhCaoCap;
  }

  var tongTien = phiXuLyHoaDon + phiDichVuCoBan + phiThueKenh; // Tính tổng tiền cáp

  // Hiển thị kết quả
  document.getElementById("resultTienCap").innerHTML =
    "Mã khách hàng: " +
    maKhachHang +
    "<br>" +
    "Tổng tiền cáp: $" +
    tongTien.toFixed(2);
};
