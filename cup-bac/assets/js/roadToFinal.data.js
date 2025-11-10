// Chỉnh sửa lại đường dẫn hình/video theo media đã có sẵn trong dự án.
// Mẫu timeline (giữ nguyên cấu trúc, sửa src cho phù hợp):
const ROAD_TO_FINAL = [
  {
    date: "26/10/2025",
    title: "Vòng 1 • Đụng độ nhà đương kim vô địch",
    media: [
      { type: "img", src: "assets/images/moments/a1.png" },
      { type: "img", src: "assets/images/moments/a2.png" },
      { type: "img", src: "assets/images/moments/a3.png" },
      { type: "img", src: "assets/images/moments/a4.png" },
      { type: "img", src: "assets/images/moments/a5.png" },
      { type: "yt",  src: "https://www.youtube.com/embed/oqXbnhlT46s?si=0Bz88Vrz0skseHrB" }
    ],
    note: "Ngày khai mạc: khởi đầu cho hành trình cảm xúc."
  },
  {
    date: "30/10/2025",
    title: "Vòng 2 • Chiến thắng thuyết phục",
    media: [
      { type: "img", src: "assets/images/moments/b1.png" },
      { type: "img", src: "assets/images/moments/b2.png" },
      { type: "img", src: "assets/images/moments/b3.png" },
      { type: "img", src: "assets/images/moments/b4.png" },
      { type: "img", src: "assets/images/moments/b5.png" },
      { type: "yt",  src: "https://www.youtube.com/embed/Q7Q5Chfi-pc?si=1TaOuSbTppdBU8gw" }
    ],
    note: "Tìm kiếm cơ hội để bước vào vòng trong."
  },
  {
    date: "02/11/2025",
    title: "Vòng 3 • Gục ngã trước hạt giống số 1",
    media: [
      { type: "img", src: "assets/images/moments/c1.png" },
      { type: "img", src: "assets/images/moments/c2.png" },
      { type: "img", src: "assets/images/moments/c3.png" },
      { type: "img", src: "assets/images/moments/c4.png" },
      { type: "img", src: "assets/images/moments/c5.png" },
      { type: "yt",  src: "https://www.youtube.com/embed/1qieFA-ji00?si=819dmF1vFQ7xv5v0" }
    ],
    note: "Đội hạt giống số 1 quá mạnh mẽ."
  },
  {
    date: "04/11/2025",
    title: "Vòng 4 • Cuộc tâm lý chiến với đối thủ trực tiếp",
    media: [
      { type: "img", src: "assets/images/moments/d1.png" },
      { type: "img", src: "assets/images/moments/d2.png" },
      { type: "img", src: "assets/images/moments/d3.png" },
      { type: "img", src: "assets/images/moments/d4.png" },
      { type: "img", src: "assets/images/moments/d5.png" },
      { type: "yt",  src: "https://www.youtube.com/embed/a_x2G9YV5No?si=6YLdBemJ9k1e9Ew9" }
    ],
    note: "Chỉ cần một trận hòa là đủ."
  },
  {
    date: "06/11/2025",
    title: "Bán kết • Nghẹt thở loạt sút luân lưu",
    media: [
      { type: "img", src: "assets/images/moments/e1.png" },
      { type: "img", src: "assets/images/moments/e2.png" },
      { type: "img", src: "assets/images/moments/e3.png" },
      { type: "img", src: "assets/images/moments/e4.png" },
      { type: "img", src: "assets/images/moments/e5.png" },
      { type: "yt",  src: "https://www.youtube.com/embed/CHANGE_ME" }
    ],
    note: "Bước qua thử thách để tiến vào chung kết."
  },
  {
    date: "09/11/2025",
    title: "Chung kết • Á quân Cúp Bạc",
    media: [
      { type: "img", src: "assets/images/moments/f1.png" },
      { type: "img", src: "assets/images/moments/f2.png" },
      { type: "img", src: "assets/images/moments/f3.png" },
      { type: "img", src: "assets/images/moments/f4.png" },
      { type: "img", src: "assets/images/moments/f5.png" },
      { type: "yt",  src: "https://www.youtube.com/embed/CHANGE_ME" }
    ],
    note: "Khép lại bằng vị thế Á quân — tự hào Hi FPT."
  }
];