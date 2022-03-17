// bài tập quản lý tuyển sinh
const ketquabai1 = document.getElementById("ketquabai1");
ketquabai1.onclick = function () {
  const khuvuc = document.querySelector('input[name="khuvuc"]:checked');
  const doiTuong = document.querySelector('input[name="doituong"]:checked');
  const diemmon1 = document.getElementById("diemmon1").value * 1;
  const diemmon2 = document.getElementById("diemmon2").value * 1;
  const diemmon3 = document.getElementById("diemmon3").value * 1;
  const diemchuan = document.getElementById("diemchuan").value * 1;
  const conten_ketqua = document.getElementById("conten_ketqua");
  let ketqua;
  let tongdiem;
  let khuvuc_diem;
  let doituong_diem;

  khuvuc ? (khuvuc_diem = khuvuc.value * 1) : alert("Vui lòng chọn khu vực!");
  doiTuong
    ? (doituong_diem = doiTuong.value * 1)
    : alert("Vui lòng chọn đối tượng!");
  if (diemmon1 >= 0 && diemmon2 >= 0 && diemmon3 >= 0) {
    tongdiem = diemmon1 + diemmon2 + diemmon3 + khuvuc_diem + doituong_diem;
  } else {
    alert("Vui lòng nhập điểm của bạn!");
  }
  console.log(tongdiem);
  if (diemchuan) {
    tongdiem >= diemchuan
      ? (ketqua = `Chúc mừng bạn đã đậu với số điểm ${tongdiem}`)
      : (ketqua = `Bạn đã rớt với số điểm ${tongdiem}`);
  }
  conten_ketqua.innerHTML = ketqua;
};

// bài tập tính tiền điện
const ketquabai2 = document.querySelector(".tinh_tien_dien .btn");
ketquabai2.onclick = function (e) {
  e.preventDefault();
  const yourname = document.querySelector("#yourname").value;
  const kw = document.querySelector("#kw").value * 1;
  const id_output = document.querySelector("#output");
  if (kw < 0) {
    alert("Số kw tiêu thụ không hợp lệ");
    return;
  }
  let tiendien;

  switch (true) {
    case kw <= 50:
      tiendien = tiendien1_50(kw);
      break;
    case kw <= 100:
      tiendien = tiendien1_50(kw) + tiendien50_100(kw);
      break;
    case kw <= 200:
      tiendien = tiendien1_50(kw) + tiendien50_100(kw) + tiendien100_200(kw);
      break;
    case kw <= 350:
      tiendien =
        tiendien1_50(kw) +
        tiendien50_100(kw) +
        tiendien100_200(kw) +
        tiendien200_350(kw);
      break;
    case kw > 350:
      tiendien =
        tiendien1_50(kw) +
        tiendien50_100(kw) +
        tiendien100_200(kw) +
        tiendien200_350(kw) +
        tiendien350_(kw);
      break;
    default:
      alert("Số kw tiêu thụ không hợp lệ");
  }
  id_output.innerHTML =
    "Quý khách " +
    yourname +
    " đã sử dụng " +
    tiendien.toLocaleString("vi") +
    "đ tiền điện.";
};

// tiền điện 50kw đầu tiên
function tiendien1_50(kw) {
  let tiendien1__50 = 0;
  kw > 50 ? (tiendien1__50 = 50 * 500) : (tiendien1__50 = kw * 500);
  return tiendien1__50;
}
// tiền điện từ 50 đến 100kw
function tiendien50_100(kw) {
  let tiendien50__100 = 0;
  kw > 100 ? (tiendien50__100 = 50 * 650) : (tiendien50__100 = (kw - 50) * 650);
  return tiendien50__100;
}
// tiền điện từ 100 đến 200kw
function tiendien100_200(kw) {
  let tiendien100_200 = 0;
  kw > 200
    ? (tiendien100_200 = 100 * 850)
    : (tiendien100_200 = (kw - 100) * 850);
  return tiendien100_200;
}
// tiền điện từ 200 đến 350kw
function tiendien200_350(kw) {
  let tiendien200_350 = 0;
  kw > 350
    ? (tiendien200_350 = 150 * 1100)
    : (tiendien200_350 = (kw - 200) * 1100);
  return tiendien200_350;
}
// tiền điện lớn hơn 350kw
function tiendien350_(kw) {
  let tiendien350_ = (kw - 350) * 1300;
  return tiendien350_;
}
