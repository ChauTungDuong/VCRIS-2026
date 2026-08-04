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
                        <th className="p-4 border-b border-rule w-[250px]">Diễn giả/Đơn vị</th>
                      </tr>
                    </thead>
                    <tbody className="text-[16px] text-slate divide-y divide-rule">
                      <tr className="hover:bg-paper/50 transition-colors">
                        <td className="p-4 font-semibold text-ink">07:30 - 08:00</td>
                        <td className="p-4">Đón tiếp, đăng ký đại biểu</td>
                        <td className="p-4">Học viện KTMM</td>
                      </tr>
                      <tr className="hover:bg-paper/50 transition-colors">
                        <td className="p-4 font-semibold text-ink">08:00 - 08:15</td>
                        <td className="p-4">
                          <p>Phát biểu khai mạc Hội thảo</p>
                          <p>Phát biểu chào mừng</p>
                        </td>
                        <td className="p-4">
                          <p>Lãnh đạo Ban Cơ yếu Chính phủ</p>
                          <p>GS. TS. Nguyễn Thanh Thủy, Chủ tịch FISU VN</p>
                        </td>
                      </tr>
                      <tr className="hover:bg-paper/50 transition-colors">
                        <td className="p-4 font-semibold text-ink">08:15 - 08:30</td>
                        <td className="p-4">Báo cáo chương trình hội thảo</td>
                        <td className="p-4">
                          <p>Trưởng ban Chương trình</p>
                          <p>Hội thảo AI4CRIS</p>
                        </td>
                      </tr>
                      <tr className="hover:bg-paper/50 transition-colors">
                        <td className="p-4 font-semibold text-ink">08:30 - 08:50</td>
                        <td className="p-4">Keynote 1: Chính sách và định hướng chiến lược quốc gia về AI</td>
                        <td className="p-4">Đại diện Bộ Khoa học và Công nghệ</td>
                      </tr>
                      <tr className="hover:bg-paper/50 transition-colors">
                        <td className="p-4 font-semibold text-ink">08:50 - 09:10</td>
                        <td className="p-4">Keynote 2: Một số kết quả nghiên cứu nổi bật về AI trong ATTT của Học viện KTMM và định hướng AI trong bảo mật và mật mã quốc gia</td>
                        <td className="p-4">Đại diện Lãnh đạo Học viện Kỹ thuật mật mã</td>
                      </tr>
                      <tr className="hover:bg-paper/50 transition-colors">
                        <td className="p-4 font-semibold text-ink">09:10 - 09:30</td>
                        <td className="p-4">Keynote 3: AI và An ninh dữ liệu tại Trung tâm dữ liệu quốc gia</td>
                        <td className="p-4">Trung tâm Dữ liệu Quốc gia</td>
                      </tr>
                      <tr className="hover:bg-paper/50 transition-colors">
                        <td className="p-4 font-semibold text-ink">09:30 - 09:50</td>
                        <td className="p-4">Keynote 4: Ứng dụng AI trong công tác chuyển đổi số của Bộ quốc phòng</td>
                        <td className="p-4">Bộ Tư lệnh 86</td>
                      </tr>
                      <tr className="bg-cipher/5 font-semibold text-cipher">
                        <td className="p-4">09:50 - 10:05</td>
                        <td className="p-4 text-center" colSpan={2}>Nghỉ giải lao</td>
                      </tr>
                      <tr className="hover:bg-paper/50 transition-colors">
                        <td className="p-4 font-semibold text-ink">10:05 - 10:25</td>
                        <td className="p-4">Keynote 5: Trí tuệ nhân tạo trong phòng, chống thông tin sai lệch trên không gian mạng: tiếp cận từ góc độ an toàn thông tin</td>
                        <td className="p-4">
                          <p>PGS.TS. Phạm Minh Sơn</p>
                          <p>Giám đốc HVBCTT</p>
                        </td>
                      </tr>
                      <tr className="hover:bg-paper/50 transition-colors">
                        <td className="p-4 font-semibold text-ink">10:25 - 10:50</td>
                        <td className="p-4">Keynote 6: Ứng dụng AI trong bảo vệ hạ tầng trọng yếu, chính phủ số</td>
                        <td className="p-4">
                          <p>Ông Ngô Tuấn Anh</p>
                          <p>Tổng giám đốc Công ty An ninh mạng SCS</p>
                        </td>
                      </tr>
                      <tr className="hover:bg-paper/50 transition-colors">
                        <td className="p-4 font-semibold text-ink align-top">10:50 - 11:35</td>
                        <td className="p-4">
                          <p className="font-bold text-ink mb-2">Phiên bàn tròn (Roundtable): Cơ hội và thách thức ứng dụng AI trong ATTT tại Việt Nam</p>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Nhà quản lý: Bộ QP, Bộ CA, Bộ KH&amp;CN, Ban CYCP</li>
                            <li>Nhà khoa học (Viện, trường)</li>
                            <li>Doanh nghiệp</li>
                          </ul>
                        </td>
                        <td className="p-4 align-top">
                          <p className="mb-2"><span className="font-semibold">Điều phối:</span> Học viện Kỹ thuật mật mã</p>
                          <p><span className="font-semibold">Thành phần:</span> Giáo sư Nguyễn Thanh Thủy, Đại diện Bộ KH&amp;CN, BTL 86, TT DL QG, Ông Ngô Tuấn Anh.</p>
                        </td>
                      </tr>
                      <tr className="bg-cipher/5 font-semibold text-cipher">
                        <td className="p-4">13:30 - 16:45</td>
                        <td className="p-4 text-center" colSpan={2}>Các phiên chuyên môn</td>
                      </tr>
                      <tr className="hover:bg-paper/50 transition-colors">
                        <td className="p-4 font-semibold text-ink">16:45 - 17:00</td>
                        <td className="p-4">Bế mạc, tổng kết Hội thảo</td>
                        <td className="p-4">
                          <p>Đại diện Lãnh đạo Học viện Kỹ thuật mật mã,</p>
                          <p>Chủ tịch FISU VN</p>
                        </td>
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
                            <th className="p-4 border-b border-rule w-[250px]">Diễn giả/Đơn vị</th>
                          </tr>
                        </thead>
                        <tbody className="text-[16px] text-slate divide-y divide-rule">
                          <tr className="hover:bg-paper/50 transition-colors">
                            <td className="p-4 font-semibold text-ink align-top">13:30 - 15:00</td>
                            <td className="p-4">
                              <p className="font-bold text-ink mb-1">Session 1: AI trong phòng, chống thông tin sai lệch và các thách thức an ninh trong tương lai</p>
                              <p className="italic text-cipher">Chair: PGS. TS. Nguyễn Thị Trường Giang, Học viện BCTT</p>
                            </td>
                            <td className="p-4 align-top">Viện nghiên cứu mật mã/ ĐH/ Doanh nghiệp an ninh mạng</td>
                          </tr>
                          <tr className="bg-cipher/5 font-semibold text-cipher">
                            <td className="p-4">15:00 - 15:15</td>
                            <td className="p-4 text-center" colSpan={2}>Nghỉ giải lao</td>
                          </tr>
                          <tr className="hover:bg-paper/50 transition-colors">
                            <td className="p-4 font-semibold text-ink align-top">15:15 - 16:45</td>
                            <td className="p-4">
                              <p className="font-bold text-ink mb-1">Session 2: Chính sách và quản trị AI an toàn</p>
                              <p className="italic text-cipher">Chair: PGS. TS. Nguyễn Việt Hùng/Học viện Kỹ thuật quân sự/Bộ Quốc phòng</p>
                            </td>
                            <td className="p-4 align-top">Nhà khoa học/ Luật sư/ Doanh nghiệp AI</td>
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
                            <th className="p-4 border-b border-rule w-[250px]">Diễn giả/Đơn vị</th>
                          </tr>
                        </thead>
                        <tbody className="text-[16px] text-slate divide-y divide-rule">
                          <tr className="hover:bg-paper/50 transition-colors">
                            <td className="p-4 font-semibold text-ink align-top">13:30 - 15:00</td>
                            <td className="p-4">
                              <p className="font-bold text-ink mb-1">Session 3: Trí tuệ nhân tạo trong phát hiện mối đe dọa và ứng phó sự cố an ninh mạng</p>
                              <p className="italic text-cipher">Chair: PGS. TS. Hoàng Xuân Dậu/Học viện CN BCVT/Bộ KHCN</p>
                            </td>
                            <td className="p-4 align-top">Đại học/ Viện nghiên cứu/ Doanh nghiệp an ninh mạng</td>
                          </tr>
                          <tr className="bg-cipher/5 font-semibold text-cipher">
                            <td className="p-4">15:00 - 15:15</td>
                            <td className="p-4 text-center" colSpan={2}>Nghỉ giải lao</td>
                          </tr>
                          <tr className="hover:bg-paper/50 transition-colors">
                            <td className="p-4 font-semibold text-ink align-top">15:15 - 16:45</td>
                            <td className="p-4">
                              <p className="font-bold text-ink mb-1">Session 4: Trí tuệ nhân tạo cho bảo mật dữ liệu và an ninh hệ thống mạng</p>
                              <p className="italic text-cipher">Chair: PGS. TS. Hoàng Việt Long/Học viện KH&amp;CN An ninh/Bộ Công An</p>
                            </td>
                            <td className="p-4 align-top">Đại học/ Doanh nghiệp FinTech &amp; Cloud</td>
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
                            <th className="p-4 border-b border-rule w-[250px]">Diễn giả/Đơn vị</th>
                          </tr>
                        </thead>
                        <tbody className="text-[16px] text-slate divide-y divide-rule">
                          <tr className="hover:bg-paper/50 transition-colors">
                            <td className="p-4 font-semibold text-ink align-top">13:30 - 15:00</td>
                            <td className="p-4">
                              <p className="font-bold text-ink mb-1">Session 5: Cryptography &amp; PQC</p>
                              <p className="italic text-cipher">Chair: TS. Nguyễn Bùi Cương, Viện KHCN mật mã/Ban CYCP</p>
                            </td>
                            <td className="p-4 align-top">Viện nghiên cứu mật mã/ ĐH/ Doanh nghiệp an ninh mạng</td>
                          </tr>
                          <tr className="bg-cipher/5 font-semibold text-cipher">
                            <td className="p-4">15:00 - 15:15</td>
                            <td className="p-4 text-center" colSpan={2}>Nghỉ giải lao</td>
                          </tr>
                          <tr className="hover:bg-paper/50 transition-colors">
                            <td className="p-4 font-semibold text-ink align-top">15:15 - 16:45</td>
                            <td className="p-4">
                              <p className="font-bold text-ink mb-1">Session 6: AI an toàn và giáo dục đào tạo</p>
                              <p className="italic text-cipher">Chair: TS. Vũ Thị Đào/Học viện Kỹ thuật mật mã/Ban CYCP</p>
                            </td>
                            <td className="p-4 align-top">Nhà khoa học/ Luật sư/ Doanh nghiệp AI</td>
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
