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
