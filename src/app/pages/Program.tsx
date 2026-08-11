import React from 'react';

export default function Program() {
  return (
    <div className="w-full">
      <h1
        className="text-[48px] font-bold italic text-ink leading-[1.15] mb-12 text-center"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Chương trình Hội thảo
      </h1>

      <div className="space-y-16" style={{ fontFamily: "var(--font-body)" }}>
              {/* Phiên toàn thể */}
              <section>
                <h2 className="text-[24px] font-bold text-ink mb-6 bg-paper px-4 py-3 rounded-lg border-l-4 border-cipher">
                  1. Phiên toàn thể và bàn tròn (Địa điểm: Hội trường)
                </h2>
                <div className="overflow-x-auto rounded-xl border border-rule shadow-sm">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-warm text-ink text-[17px]">
                        <th className="p-4 border-b border-rule w-[140px] whitespace-nowrap">Thời gian</th>
                        <th className="p-4 border-b border-rule">Nội dung</th>
                        <th className="p-4 border-b border-rule w-[300px]">Diễn giả/Đơn vị</th>
                      </tr>
                    </thead>
                    <tbody className="text-[16px] text-slate divide-y divide-rule">
                      <tr className="hover:bg-paper/50 transition-colors">
                        <td className="p-4 font-semibold text-ink align-top">07:30 - 08:00</td>
                        <td className="p-4">Đón tiếp, đăng ký đại biểu</td>
                        <td className="p-4 align-top">Học viện KTMM</td>
                      </tr>
                      <tr className="hover:bg-paper/50 transition-colors">
                        <td className="p-4 font-semibold text-ink align-top">08:00 - 08:10</td>
                        <td className="p-4">Phát biểu khai mạc Hội thảo</td>
                        <td className="p-4 align-top">
                          <p>Trung tướng Vũ Ngọc Thiềm</p>
                          <p>Trưởng ban Ban Cơ yếu Chính phủ</p>
                        </td>
                      </tr>
                      <tr className="hover:bg-paper/50 transition-colors">
                        <td className="p-4 font-semibold text-ink align-top">08:10 - 08:20</td>
                        <td className="p-4">Phát biểu chào mừng</td>
                        <td className="p-4 align-top">
                          <p>GS. TS. Nguyễn Thanh Thủy</p>
                          <p>Chủ tịch Hội đồng Giáo sư ngành Công nghệ thông tin</p>
                          <p>Chủ tịch Hội Tin học Việt Nam, Chủ tịch FISU Việt Nam</p>
                        </td>
                      </tr>
                      <tr className="hover:bg-paper/50 transition-colors">
                        <td className="p-4 font-semibold text-ink align-top">08:20 - 08:30</td>
                        <td className="p-4">Phát biểu của Đại diện Lãnh đạo cơ quan chủ quản đơn vị phối hợp</td>
                        <td className="p-4 align-top">
                          <p>PGS. TS. Lê Hải Bình,</p>
                          <p>Ủy viên Trung ương Đảng</p>
                          <p>Phó Giám đốc Thường trực Học viện Chính trị Quốc gia HCM</p>
                        </td>
                      </tr>
                      <tr className="hover:bg-paper/50 transition-colors">
                        <td className="p-4 font-semibold text-ink align-top">08:30 - 08:45</td>
                        <td className="p-4">Báo cáo chương trình hội thảo</td>
                        <td className="p-4 align-top">
                          <p>PGS.TS. Bùi Thu Lâm</p>
                          <p>Phó Chủ tịch kiêm Tổng Thư ký FISU Việt Nam</p>
                          <p>Trưởng ban Chương trình Hội thảo AI4CRIS</p>
                        </td>
                      </tr>
                      <tr className="hover:bg-paper/50 transition-colors">
                        <td className="p-4 font-semibold text-ink align-top">08:45 - 9:05</td>
                        <td className="p-4">Báo cáo mời 1: Chính sách và định hướng chiến lược quốc gia về AI</td>
                        <td className="p-4 align-top">
                          <p>TS. Trần Anh Tú - Phó Cục trưởng</p>
                          <p>Cục Công nghệ số và Trí tuệ nhân tạo,</p>
                          <p>Bộ Khoa học và Công nghệ</p>
                        </td>
                      </tr>
                      <tr className="hover:bg-paper/50 transition-colors">
                        <td className="p-4 font-semibold text-ink align-top">9:05 - 09:25</td>
                        <td className="p-4">Báo cáo mời 2: Một số kết quả nghiên cứu, đào tạo về trí tuệ nhân tạo trong an toàn thông tin và định hướng tại Học viện Kỹ thuật mật mã</td>
                        <td className="p-4 align-top">
                          <p>Đại tá, PGS. TS. Lương Thế Dũng</p>
                          <p>Phó Giám đốc Học viện KTMM</p>
                        </td>
                      </tr>
                      <tr className="hover:bg-paper/50 transition-colors">
                        <td className="p-4 font-semibold text-ink align-top">09:25 - 09:45</td>
                        <td className="p-4">Báo cáo mời 3: AI và An ninh dữ liệu tại Trung tâm dữ liệu quốc gia</td>
                        <td className="p-4 align-top">
                          <p>Thiếu tướng, TS. Nguyễn Ngọc Cương</p>
                          <p>Giám đốc Trung tâm Dữ liệu quốc gia</p>
                        </td>
                      </tr>
                      <tr className="hover:bg-paper/50 transition-colors">
                        <td className="p-4 font-semibold text-ink align-top">09:45 - 10:05</td>
                        <td className="p-4">Báo cáo mời 4: Ứng dụng AI trong công tác chuyển đổi số của Bộ quốc phòng</td>
                        <td className="p-4 align-top">
                          <p>Trung tá, TS. Nguyễn Thế Hùng</p>
                          <p>Trưởng phòng Phát triển phần mềm</p>
                          <p>Viện Nghiên cứu 486, Bộ Tư lệnh 86</p>
                        </td>
                      </tr>
                      <tr className="bg-cipher/5 font-semibold text-cipher">
                        <td className="p-4">10:05 - 10:20</td>
                        <td className="p-4 text-center" colSpan={2}>Nghỉ giải lao</td>
                      </tr>
                      <tr className="hover:bg-paper/50 transition-colors">
                        <td className="p-4 font-semibold text-ink align-top">10:20 - 10:40</td>
                        <td className="p-4">Báo cáo mời 5: Trí tuệ nhân tạo trong phòng, chống thông tin sai lệch trên không gian mạng: tiếp cận từ góc độ an toàn thông tin</td>
                        <td className="p-4 align-top">
                          <p>PGS.TS. Phạm Minh Sơn</p>
                          <p>Giám đốc HVBCTT</p>
                        </td>
                      </tr>
                      <tr className="hover:bg-paper/50 transition-colors">
                        <td className="p-4 font-semibold text-ink align-top">10:40 - 11:00</td>
                        <td className="p-4">Báo cáo mời 6: Ứng dụng AI trong bảo vệ hạ tầng trọng yếu, Chính phủ số</td>
                        <td className="p-4 align-top">
                          <p>Ông Ngô Tuấn Anh</p>
                          <p>Tổng giám đốc Công ty An ninh mạng SCS</p>
                        </td>
                      </tr>
                      <tr className="hover:bg-paper/50 transition-colors">
                        <td className="p-4 font-semibold text-ink align-top">11:00 - 11:45</td>
                        <td className="p-4">Phiên bàn tròn (Roundtable): Cơ hội và thách thức ứng dụng AI trong ATTT tại Việt Nam</td>
                        <td className="p-4 align-top">
                          <div className="flex flex-col gap-1">
                            <p>Điều phối: <i>PGS.TS. Nguyễn Thị Trường Giang</i></p>
                            <p>Khách mời:</p>
                            <p><i>GS. TS. Nguyễn Thanh Thủy</i></p>
                            <p><i>TS. Trần Anh Tú</i></p>
                            <p><i>Thiếu tướng, PGS.TS. Nguyễn Tùng Hưng</i></p>
                            <p><i>Thiếu tướng, TS. Nguyễn Ngọc Cương</i></p>
                            <p><i>PGS.TS. Phạm Minh Sơn</i></p>
                            <p><i>Đại tá, PGS. TS. Lương Thế Dũng</i></p>
                            <p><i>Ông Ngô Tuấn Anh</i></p>
                          </div>
                        </td>
                      </tr>
                      <tr className="bg-cipher/5 font-semibold text-cipher">
                        <td className="p-4">13:30 - 17:30</td>
                        <td className="p-4 text-center" colSpan={2}>Các phiên chuyên môn</td>
                      </tr>
                      <tr className="hover:bg-paper/50 transition-colors">
                        <td className="p-4 font-semibold text-ink align-top">17:30 - 17:45</td>
                        <td className="p-4">Bế mạc, tổng kết Hội thảo</td>
                        <td className="p-4 align-top">Đại diện Lãnh đạo Học viện Kỹ thuật mật mã, Chủ tịch FISU Việt Nam</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Các phiên chuyên môn */}
              <section>
                <h2 className="text-[24px] font-bold text-ink mb-6 bg-paper px-4 py-3 rounded-lg border-l-4 border-cipher">
                  2. Các phiên chuyên môn
                </h2>
                
                <div className="space-y-12">
                  {/* Phiên A */}
                  <div>
                    <h3 className="text-[20px] font-bold text-ink mb-4">Phiên A (địa điểm: Hội trường)</h3>
                    <div className="overflow-x-auto rounded-xl border border-rule shadow-sm">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="bg-warm text-ink text-[17px]">
                            <th className="p-4 border-b border-rule w-[140px] whitespace-nowrap">Thời gian</th>
                            <th className="p-4 border-b border-rule">Nội dung</th>
                          </tr>
                        </thead>
                        <tbody className="text-[16px] text-slate divide-y divide-rule">
                          <tr className="hover:bg-paper/50 transition-colors">
                            <td className="p-4 font-semibold text-ink align-top">13:30 - 15:10</td>
                            <td className="p-4">
                              <p className="font-bold text-ink mb-1">Session 1: AI trong phòng, chống thông tin sai lệch và các thách thức an ninh trong tương lai</p>
                              <p className="italic text-cipher mb-4">Chair: PGS.TS. Đinh Thị Thu Hằng, Viện trưởng Viện Báo chí - Truyền thông, Học viện Báo chí và Tuyên truyền</p>
                              <div className="overflow-x-auto rounded-lg border border-rule">
                                <table className="w-full text-left border-collapse text-[15px]">
                                  <thead>
                                    <tr className="bg-paper text-ink">
                                      <th className="p-3 border-b border-rule w-[250px]">Diễn giả</th>
                                      <th className="p-3 border-b border-rule">Tên bài trình bày</th>
                                    </tr>
                                  </thead>
                                  <tbody className="divide-y divide-rule bg-white">
                                    <tr>
                                      <td className="p-3 align-top">PGS. TS. Phạm Hương Trà, TS. Lê Nguyễn Phương Thảo</td>
                                      <td className="p-3 align-top">HƯỚNG GIẢI PHÁP TỪ AI CHO CÁC CƠ QUAN BÁO CHÍ VIỆT NAM TRƯỚC THÔNG TIN SAI LỆCH DO DEEPFAKE VÀ TRÍ TUỆ NHÂN TẠO TẠO SINH</td>
                                    </tr>
                                    <tr>
                                      <td className="p-3 align-top">TS. Đàm Thế Vinh</td>
                                      <td className="p-3 align-top">ỨNG DỤNG TRÍ TUỆ NHÂN TẠO TRONG NHẬN DIỆN VÀ PHÒNG, CHỐNG THAO TÚNG THÔNG TIN TRÊN KHÔNG GIAN TRUYỀN THÔNG QUỐC PHÒNG</td>
                                    </tr>
                                    <tr>
                                      <td className="p-3 align-top">Phạm Thành Công</td>
                                      <td className="p-3 align-top">ỨNG DỤNG TRÍ TUỆ NHÂN TẠO TRONG PHÒNG, CHỐNG TIN GIẢ TRÊN MÔI TRƯỜNG SỐ: THỰC TRẠNG VÀ GIẢI PHÁP</td>
                                    </tr>
                                    <tr>
                                      <td className="p-3 align-top">Trần Thu Quỳnh, Vũ Thị Ngọc Thuỳ, Trần Thị Mai Dung, Trần Thọ Xương</td>
                                      <td className="p-3 align-top">HOẠT ĐỘNG XUẤT BẢN TRONG BỐI CẢNH AI TẠO SINH: THÁCH THỨC ĐỐI VỚI AN TOÀN THÔNG TIN VÀ GIẢI PHÁP QUẢN TRỊ NỘI DUNG</td>
                                    </tr>
                                    <tr>
                                      <td className="p-3 align-top">TS. Trần Thị Phương Lan</td>
                                      <td className="p-3 align-top">KINH NGHIỆM QUỐC TẾ TRONG SỬ DỤNG AI PHÒNG, CHỐNG THÔNG TIN SAI LỆCH VỀ CHÍNH TRỊ VÀ MỘT SỐ BÀI HỌC ÁP DỤNG CHO VIỆT NAM</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </td>
                          </tr>
                          <tr className="bg-cipher/5 font-semibold text-cipher">
                            <td className="p-4">15:10 - 15:30</td>
                            <td className="p-4 text-center">Nghỉ giải lao</td>
                          </tr>
                          <tr className="hover:bg-paper/50 transition-colors">
                            <td className="p-4 font-semibold text-ink align-top">15:30 - 17:30</td>
                            <td className="p-4">
                              <p className="font-bold text-ink mb-1">Session 2: Mật mã và Mật mã hậu lượng tử</p>
                              <p className="italic text-cipher mb-4">Chair: TS. Nguyễn Bùi Cương, Viện Khoa học - Công nghệ mật mã/Ban Cơ yếu Chính phủ</p>
                              <div className="overflow-x-auto rounded-lg border border-rule">
                                <table className="w-full text-left border-collapse text-[15px]">
                                  <thead>
                                    <tr className="bg-paper text-ink">
                                      <th className="p-3 border-b border-rule w-[250px]">Diễn giả</th>
                                      <th className="p-3 border-b border-rule">Tên bài trình bày</th>
                                    </tr>
                                  </thead>
                                  <tbody className="divide-y divide-rule bg-white">
                                    <tr>
                                      <td className="p-3 align-top">TS. Nguyễn Quốc Hưng</td>
                                      <td className="p-3 align-top">TIẾN BỘ CỦA CÔNG NGHỆ LƯỢNG TỬ VÀ NGUY CƠ VỚI BẢO MẬT TRUYỀN THỐNG</td>
                                    </tr>
                                    <tr>
                                      <td className="p-3 align-top">TS Nguyễn Bùi Cương</td>
                                      <td className="p-3 align-top">KỶ NGUYÊN HẬU LƯỢNG TỬ VÀ BÀI TOÁN TỰ CHỦ CÔNG NGHỆ LÕI MẬT MÃ</td>
                                    </tr>
                                    <tr>
                                      <td className="p-3 align-top">TS. Hoàng Nguyên Vân</td>
                                      <td className="p-3 align-top">KINH NGHIỆM TRIỂN KHAI MẬT MÃ HẬU LƯỢNG TỬ PQC TRONG QUÁ TRÌNH CHUYỂN DỊCH LƯỢNG TỬ</td>
                                    </tr>
                                    <tr>
                                      <td className="p-3 align-top">Lê Hải Triều, Nguyễn Thị Quế Thu, Lê Thị Trang Linh, Đặng Ngọc Quân</td>
                                      <td className="p-3 align-top">MẬT MÃ HẬU LƯỢNG TỬ VÀ PHÂN PHỐI KHÓA LƯỢNG TỬ: VAI TRÒ CỦA TRÍ TUỆ NHÂN TẠO VÀ ĐỀ XUẤT LỘ TRÌNH CHO VIỆT NAM</td>
                                    </tr>
                                    <tr>
                                      <td className="p-3 align-top">TS. Hoàng Thị Bích Toàn</td>
                                      <td className="p-3 align-top">MẬT MÃ HẬU LƯỢNG TỬ TRONG BỐI CẢNH CHUYỂN ĐỔI SỐ TẠI VIỆT NAM: THỰC TRẠNG, THÁCH THỨC VÀ ĐỊNH HƯỚNG TRIỂN KHAI</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Phiên B */}
                  <div>
                    <h3 className="text-[20px] font-bold text-ink mb-4">Phiên B (địa điểm: Phòng họp 3 tầng 4)</h3>
                    <div className="overflow-x-auto rounded-xl border border-rule shadow-sm">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="bg-warm text-ink text-[17px]">
                            <th className="p-4 border-b border-rule w-[140px] whitespace-nowrap">Thời gian</th>
                            <th className="p-4 border-b border-rule">Nội dung</th>
                          </tr>
                        </thead>
                        <tbody className="text-[16px] text-slate divide-y divide-rule">
                          <tr className="hover:bg-paper/50 transition-colors">
                            <td className="p-4 font-semibold text-ink align-top">13:30 - 15:00</td>
                            <td className="p-4">
                              <p className="font-bold text-ink mb-1">Session 3: Trí tuệ nhân tạo trong phát hiện mối đe dọa và ứng phó sự cố an ninh mạng</p>
                              <p className="italic text-cipher mb-4">Chair: PGS. TS. Hoàng Xuân Dậu/Học viện Công nghệ Bưu chính Viễn thông/Bộ Khoa học và Công nghệ</p>
                              <div className="overflow-x-auto rounded-lg border border-rule">
                                <table className="w-full text-left border-collapse text-[15px]">
                                  <thead>
                                    <tr className="bg-paper text-ink">
                                      <th className="p-3 border-b border-rule w-[250px]">Diễn giả</th>
                                      <th className="p-3 border-b border-rule">Tên bài trình bày</th>
                                    </tr>
                                  </thead>
                                  <tbody className="divide-y divide-rule bg-white">
                                    <tr>
                                      <td className="p-3 align-top">Lê Hải Triều, Nguyễn Thị Quế Thu, Đặng Ngọc Quân, Lương Mạnh Hải</td>
                                      <td className="p-3 align-top">TẤN CÔNG MẠNG CÓ SỰ HỖ TRỢ CỦA TRÍ TUỆ NHÂN TẠO: XU HƯỚNG VÀ VẤN ĐỀ ĐẶT RA ĐỐI VỚI BẢO ĐẢM AN NINH MẠNG QUỐC GIA</td>
                                    </tr>
                                    <tr>
                                      <td className="p-3 align-top">Cao Hồng Lam, Hoàng Việt Long, Bùi Thu Lâm</td>
                                      <td className="p-3 align-top">BÀI TOÁN BẢO TOÀN KHẢ NĂNG PHÁT HIỆN LỚP TẤN CÔNG HIẾM TRONG HỌC LIÊN KẾT CHO IDS IoT DƯỚI DỮ LIỆU KHÔNG ĐỒNG NHẤT: TỔNG QUAN PHÂN TÍCH VÀ KHUNG NGHIÊN CỨU</td>
                                    </tr>
                                    <tr>
                                      <td className="p-3 align-top">Phạm Đức Phương</td>
                                      <td className="p-3 align-top">ĐÁNH GIÁ CÁC KỸ THUẬT NÉN MÔ HÌNH HỌC SÂU CHO PHÁT HIỆN XÂM NHẬP MẠNG HƯỚNG TỚI TRIỂN KHAI TẠI BIÊN</td>
                                    </tr>
                                    <tr>
                                      <td className="p-3 align-top">Vũ Xuân Trường, Tống Anh Tuấn, Phạm Duy Trung</td>
                                      <td className="p-3 align-top">XÂY DỰNG KHUNG ĐÁNH GIÁ VÀ PHÒNG THỦ TRƯỚC CÁC MỐI ĐE DỌA TRONG GIAI ĐOẠN HUẤN LUYỆN MÔ HÌNH NGÔN NGỮ LỚN</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </td>
                          </tr>
                          <tr className="bg-cipher/5 font-semibold text-cipher">
                            <td className="p-4">15:00 - 15:30</td>
                            <td className="p-4 text-center">Nghỉ giải lao</td>
                          </tr>
                          <tr className="hover:bg-paper/50 transition-colors">
                            <td className="p-4 font-semibold text-ink align-top">15:30 - 17:10</td>
                            <td className="p-4">
                              <p className="font-bold text-ink mb-1">Session 4: Trí tuệ nhân tạo cho bảo mật dữ liệu và an ninh hệ thống mạng</p>
                              <p className="italic text-cipher mb-4">Chair: TS. Phạm Duy Trung/Học viện Kỹ thuật mật mã/Ban Cơ yếu Chính phủ</p>
                              <div className="overflow-x-auto rounded-lg border border-rule">
                                <table className="w-full text-left border-collapse text-[15px]">
                                  <thead>
                                    <tr className="bg-paper text-ink">
                                      <th className="p-3 border-b border-rule w-[250px]">Diễn giả</th>
                                      <th className="p-3 border-b border-rule">Tên bài trình bày</th>
                                    </tr>
                                  </thead>
                                  <tbody className="divide-y divide-rule bg-white">
                                    <tr>
                                      <td className="p-3 align-top">Phạm Ngọc Minh, Phạm Duy Trung, Bùi Thu Lâm</td>
                                      <td className="p-3 align-top">DEEPSENTRY: NỀN TẢNG XAI CHO BÀI TOÁN PHÁT HIỆN THÔNG TIN SAI LỆCH</td>
                                    </tr>
                                    <tr>
                                      <td className="p-3 align-top">Phạm Trường Sơn, Nguyễn Việt Hùng, Đinh Đoàn Xuân Phương</td>
                                      <td className="p-3 align-top">TỪ SOAR DỰA TRÊN LUẬT ĐẾN SOC TỰ HÀNH CÓ KIỂM SOÁT: TIỀM NĂNG CỦA AGENTIC AI VÀ MÔ HÌNH NGÔN NGỮ LỚN CHO TỰ ĐỘNG HÓA PHẢN ỨNG SỰ CỐ</td>
                                    </tr>
                                    <tr>
                                      <td className="p-3 align-top">Nguyễn Đăng Bắc, Lê Hữu Tuấn, Nguyễn Văn Tự, Phạm Xuân Bình</td>
                                      <td className="p-3 align-top">PHÁT HIỆN GIAO DỊCH GIAN LẬN THẺ TÍN DỤNG BẰNG KIẾN TRÚC MÔ HÌNH LAI KẾT HỢP AUTOENCODER VÀ MẠNG NƠ-RON ĐA TẦNG TRÊN NỀN DỮ LIỆU MẤT CÂN BẰNG NGHIÊM TRỌNG</td>
                                    </tr>
                                    <tr>
                                      <td className="p-3 align-top">Trương Xuân Hùng, Trần Anh Tú, Võ Đình Quyết, Hoàng Thông, Nguyễn Anh Khôi, Đinh Lê Thanh Đạt, Minh Nhat Vo</td>
                                      <td className="p-3 align-top">PHÒNG CHỐNG THÔNG TIN SAI LỆCH TỪ GENERATIVE AI: GIẢI PHÁP XAI BỀN VỮNG HƯỚNG TỚI TUÂN THỦ PHÁP LÝ VÀ GIẢI QUYẾT THÁCH THỨC AN NINH TƯƠNG LAI</td>
                                    </tr>
                                    <tr>
                                      <td className="p-3 align-top">Nguyễn Như Chiến, Trần Ngọc Quý, Hoàng Văn Thành Long</td>
                                      <td className="p-3 align-top">ĐÁNH GIÁ ĐỘ AN TOÀN HỆ MẬT TỪ PHƯƠNG PHÁP TRUYỀN THỐNG ĐẾN TRÍ TUỆ NHÂN TẠO VÀ RÒ RỈ PHẦN CỨNG</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Phiên C */}
                  <div>
                    <h3 className="text-[20px] font-bold text-ink mb-4">Phiên C (địa điểm: Phòng họp 1 tầng 4)</h3>
                    <div className="overflow-x-auto rounded-xl border border-rule shadow-sm">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="bg-warm text-ink text-[17px]">
                            <th className="p-4 border-b border-rule w-[140px] whitespace-nowrap">Thời gian</th>
                            <th className="p-4 border-b border-rule">Nội dung</th>
                          </tr>
                        </thead>
                        <tbody className="text-[16px] text-slate divide-y divide-rule">
                          <tr className="hover:bg-paper/50 transition-colors">
                            <td className="p-4 font-semibold text-ink align-top">13:30 - 15:10</td>
                            <td className="p-4">
                              <p className="font-bold text-ink mb-1">Session 5: Chính sách và quản trị AI an toàn</p>
                              <p className="italic text-cipher mb-4">Chair: PGS. TS. Nguyễn Việt Hùng/Học viện Kỹ thuật quân sự/Bộ Quốc phòng</p>
                              <div className="overflow-x-auto rounded-lg border border-rule">
                                <table className="w-full text-left border-collapse text-[15px]">
                                  <thead>
                                    <tr className="bg-paper text-ink">
                                      <th className="p-3 border-b border-rule w-[250px]">Diễn giả</th>
                                      <th className="p-3 border-b border-rule">Tên bài trình bày</th>
                                    </tr>
                                  </thead>
                                  <tbody className="divide-y divide-rule bg-white">
                                    <tr>
                                      <td className="p-3 align-top">Giang Thị Khánh Linh</td>
                                      <td className="p-3 align-top">KHOẢNG TRỐNG QUẢN TRỊ TRONG XÁC THỰC SINH TRẮC HỌC NGÂN HÀNG TẠI VIỆT NAM: SỰ PHÁT TRIỂN CỦA KHUNG PHÁP LÝ GIAI ĐOẠN 2023 - 2026 TRƯỚC THÁCH THỨC TỪ CÁC CUỘC TẤN CÔNG TIÊM NHIỄM DEEPFAKE</td>
                                    </tr>
                                    <tr>
                                      <td className="p-3 align-top">TS. Cao Thị Dung</td>
                                      <td className="p-3 align-top">QUẢN TRỊ AN TOÀN THÔNG TIN TRONG THỜI ĐẠI AI TẠO SINH: THỰC TRẠNG VÀ HÀM Ý CHÍNH SÁCH</td>
                                    </tr>
                                    <tr>
                                      <td className="p-3 align-top">TS. Nguyễn Duy Long</td>
                                      <td className="p-3 align-top">KHUNG PHÁP LÝ ĐỐI VỚI ỨNG DỤNG TRÍ TUỆ NHÂN TẠO TRONG BẢO VỆ DỮ LIỆU VÀ AN TOÀN THÔNG TIN TẠI VIỆT NAM</td>
                                    </tr>
                                    <tr>
                                      <td className="p-3 align-top">PGS.TS. Nguyễn Thị Ngọc Hoa</td>
                                      <td className="p-3 align-top">CƠ SỞ CHÍNH TRỊ – PHÁP LÝ CỦA VIỆC XÂY DỰNG CÔNG DÂN SỐ Ở VIỆT NAM HIỆN NAY</td>
                                    </tr>
                                    <tr>
                                      <td className="p-3 align-top">PGS. TS. Trần Hải Minh</td>
                                      <td className="p-3 align-top">BÀN VỀ MỘT SỐ NGUYÊN TẮC CƠ BẢN TRONG XÁC ĐỊNH VIỆC SỬ DỤNG TRÍ TUỆ NHÂN TẠO (AI) AN TOÀN</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </td>
                          </tr>
                          <tr className="bg-cipher/5 font-semibold text-cipher">
                            <td className="p-4">15:10 - 15:30</td>
                            <td className="p-4 text-center">Nghỉ giải lao</td>
                          </tr>
                          <tr className="hover:bg-paper/50 transition-colors">
                            <td className="p-4 font-semibold text-ink align-top">15:30 - 17:10</td>
                            <td className="p-4">
                              <p className="font-bold text-ink mb-1">Session 6: AI an toàn và giáo dục đào tạo</p>
                              <p className="italic text-cipher mb-4">Chair: TS. Vũ Thị Đào/Học viện Kỹ thuật mật mã/Ban Cơ yếu Chính phủ</p>
                              <div className="overflow-x-auto rounded-lg border border-rule">
                                <table className="w-full text-left border-collapse text-[15px]">
                                  <thead>
                                    <tr className="bg-paper text-ink">
                                      <th className="p-3 border-b border-rule w-[250px]">Diễn giả</th>
                                      <th className="p-3 border-b border-rule">Tên bài trình bày</th>
                                    </tr>
                                  </thead>
                                  <tbody className="divide-y divide-rule bg-white">
                                    <tr>
                                      <td className="p-3 align-top">ThS. GVC. Nguyễn Thị Thu Hương</td>
                                      <td className="p-3 align-top">PHÁT HUY VAI TRÒ CỦA ĐỘI NGŨ GIẢNG VIÊN LÝ LUẬN CHÍNH TRỊ TRONG VIỆC NHẬN DIỆN CÁC NGUY CƠ MẤT AN TOÀN THÔNG TIN THỜI KỲ TRÍ TUỆ NHÂN TẠO</td>
                                    </tr>
                                    <tr>
                                      <td className="p-3 align-top">Lê Thị Yến Như, Hồ Thu Huyền, Trần Thị Hoài Nhi, Đỗ Thanh Kỳ</td>
                                      <td className="p-3 align-top">NGHIÊN CỨU CÁC GIẢI PHÁP PHÒNG, CHỐNG HÀNH VI “BẮT CÓC ONLINE” ĐỐI VỚI HỌC SINH, SINH VIÊN TỪ THỰC TIỄN THÀNH PHỐ HUẾ</td>
                                    </tr>
                                    <tr>
                                      <td className="p-3 align-top">ThS. Thân Văn Thanh</td>
                                      <td className="p-3 align-top">TÍCH HỢP GIÁO DỤC NHẬN THỨC VỀ AN TOÀN THÔNG TIN VÀ RỦI RO TỪ TRÍ TUỆ NHÂN TẠO TRONG CHƯƠNG TRÌNH ĐÀO TẠO CỬ NHÂN NGÀNH NGÔN NGỮ NHẰM BẢO VỆ KHÔNG GIAN SỐ GIÁO DỤC ĐẠI HỌC</td>
                                    </tr>
                                    <tr>
                                      <td className="p-3 align-top">Nguyễn Thị Thu Trang</td>
                                      <td className="p-3 align-top">QUẢN TRỊ THÔNG TIN CÁ NHÂN TRONG KỶ NGUYÊN TRÍ TUỆ NHÂN TẠO THÁCH THỨC VÀ GIẢI PHÁP BẢO ĐẢM AN TOÀN THÔNG TIN</td>
                                    </tr>
                                    <tr>
                                      <td className="p-3 align-top">TS. Nguyễn Thị Hà Thu, Đặng Huyền Linh</td>
                                      <td className="p-3 align-top">PHÁT HUY VAI TRÒ CỦA TRÍ TUỆ NHÂN TẠO TRONG XÂY DỰNG MÔI TRƯỜNG SỐ AN TOÀN</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </section>
      </div>
    </div>
  );
}
