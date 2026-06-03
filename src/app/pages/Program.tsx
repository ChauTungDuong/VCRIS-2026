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
                        <td className="p-4">Học viện Kỹ thuật mật mã</td>
                      </tr>
                      <tr className="hover:bg-paper/50 transition-colors">
                        <td className="p-4 font-semibold text-ink">08:00 - 08:15</td>
                        <td className="p-4">Phát biểu Chào mừng và Khai mạc hội thảo</td>
                        <td className="p-4">Lãnh đạo Ban Cơ yếu Chính phủ/ Học viện KTMM, Chủ tịch FISU VN</td>
                      </tr>
                      <tr className="hover:bg-paper/50 transition-colors">
                        <td className="p-4 font-semibold text-ink">08:15 - 08:35</td>
                        <td className="p-4">Báo cáo mời 1: Chính sách và định hướng chiến lược quốc gia về AI</td>
                        <td className="p-4">Đại diện Bộ Khoa học và Công nghệ</td>
                      </tr>
                      <tr className="hover:bg-paper/50 transition-colors">
                        <td className="p-4 font-semibold text-ink">08:35 - 09:00</td>
                        <td className="p-4">Báo cáo mời 2: Một số kết quả nghiên cứu nổi bật về AI trong ATTT của Học viện KTMM và định hướng hoặc AI trong bảo mật, mật mã quốc gia và định hướng phát triển</td>
                        <td className="p-4">Học viện Kỹ thuật mật mã</td>
                      </tr>
                      <tr className="hover:bg-paper/50 transition-colors">
                        <td className="p-4 font-semibold text-ink">09:00 - 09:25</td>
                        <td className="p-4">Báo cáo mời 3: AI và An ninh dữ liệu tại Trung tâm dữ liệu quốc gia</td>
                        <td className="p-4">Trung tâm Dữ liệu Quốc gia</td>
                      </tr>
                      <tr className="hover:bg-paper/50 transition-colors">
                        <td className="p-4 font-semibold text-ink">09:25 - 09:50</td>
                        <td className="p-4">Báo cáo mời 4: Ứng dụng AI trong chuyển đổi số của Bộ quốc phòng</td>
                        <td className="p-4">Bộ Tư lệnh 86</td>
                      </tr>
                      <tr className="bg-cipher/5 font-semibold text-cipher">
                        <td className="p-4">09:50 - 10:05</td>
                        <td className="p-4" colSpan={2}>Nghỉ giải lao</td>
                      </tr>
                      <tr className="hover:bg-paper/50 transition-colors">
                        <td className="p-4 font-semibold text-ink">10:05 - 10:30</td>
                        <td className="p-4">Báo cáo mời 5: AI cho hệ sinh thái thông tin tin cậy: Giải pháp chống thông tin sai lệch trong kỷ nguyên an ninh mạng.</td>
                        <td className="p-4">FISU Việt Nam</td>
                      </tr>
                      <tr className="hover:bg-paper/50 transition-colors">
                        <td className="p-4 font-semibold text-ink">10:30 - 10:55</td>
                        <td className="p-4">Báo cáo mời 6: Ứng dụng AI trong bảo vệ hạ tầng trọng yếu, chính phủ số</td>
                        <td className="p-4">Doanh nghiệp công nghệ lớn (Viettel/VNPT/BKAV/CMC/Mobilefone...)</td>
                      </tr>
                      <tr className="hover:bg-paper/50 transition-colors">
                        <td className="p-4 font-semibold text-ink align-top">10:55 - 11:40</td>
                        <td className="p-4">
                          <p className="font-bold text-ink mb-2">Phiên bàn tròn: Cơ hội và thách thức ứng dụng AI trong ATTT tại Việt Nam</p>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Nhà quản lý: Bộ Quốc phòng, Bộ Công an, Bộ Khoa học và Công nghệ, Ban Cơ yếu Chính phủ</li>
                            <li>Nhà khoa học (Viện, trường)</li>
                            <li>Doanh nghiệp</li>
                          </ul>
                        </td>
                        <td className="p-4 align-top">
                          <p className="mb-2"><span className="font-semibold">Điều phối:</span> Học viện Kỹ thuật mật mã</p>
                          <p><span className="font-semibold">Thành phần:</span> Đại diện Lãnh đạo FISU Việt Nam, Đại diện Lãnh đạo Học viện Báo chí và Tuyên truyền, Đại diện Lãnh đạo BTL 86, Đại diện Lãnh đạo Trung tâm Dữ liệu Quốc gia, Đại diện Viettel.</p>
                        </td>
                      </tr>
                      <tr className="bg-cipher/5 font-semibold text-cipher">
                        <td className="p-4">13:30 - 16:45</td>
                        <td className="p-4" colSpan={2}>Các phiên chuyên môn (Xem chi tiết bên dưới)</td>
                      </tr>
                      <tr className="hover:bg-paper/50 transition-colors">
                        <td className="p-4 font-semibold text-ink">16:45 - 17:00</td>
                        <td className="p-4">Bế mạc, tổng kết Hội thảo</td>
                        <td className="p-4">Lãnh đạo Ban Cơ yếu Chính phủ/ Học viện KTMM, Chủ tịch FISU VN</td>
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
                    <h3 className="text-[20px] font-bold text-ink mb-4">Phiên A (Địa điểm: Hội trường)</h3>
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
                              <p className="font-bold text-ink mb-1">Phiên 1: AI trong phát hiện mối đe dọa và ứng phó sự cố an ninh mạng</p>
                              <p className="italic text-cipher mb-3">(Chair: Học viện Kỹ thuật mật mã)</p>
                              <ul className="list-disc pl-5 space-y-1">
                                <li>AI trong phát hiện tấn công mạng &amp; malware</li>
                                <li>Phát hiện bất thường bằng ML/DL</li>
                                <li>Tự động hóa phản ứng sự cố</li>
                              </ul>
                            </td>
                            <td className="p-4 align-top">Đại học/Viện nghiên cứu/Doanh nghiệp an ninh mạng</td>
                          </tr>
                          <tr className="bg-cipher/5 font-semibold text-cipher">
                            <td className="p-4">15:00 - 15:15</td>
                            <td className="p-4" colSpan={2}>Nghỉ giải lao</td>
                          </tr>
                          <tr className="hover:bg-paper/50 transition-colors">
                            <td className="p-4 font-semibold text-ink align-top">15:15 - 16:45</td>
                            <td className="p-4">
                              <p className="font-bold text-ink mb-1">Phiên 2: AI cho bảo mật dữ liệu và an ninh hệ thống mạng</p>
                              <p className="italic text-cipher mb-3">(Chair: Fisu)</p>
                              <ul className="list-disc pl-5 space-y-1">
                                <li>AI trong giám sát mạng, IDS/IPS</li>
                                <li>AI phát hiện lừa đảo, gian lận tài chính</li>
                                <li>AI bảo vệ dữ liệu lớn, Cloud, IoT</li>
                              </ul>
                            </td>
                            <td className="p-4 align-top">Đại học/Doanh nghiệp FinTech &amp; Cloud</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Phiên B */}
                  <div>
                    <h3 className="text-[20px] font-bold text-ink mb-4">Phiên B (Địa điểm: Phòng đọc Tầng 2 Tòa TB2)</h3>
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
                              <p className="font-bold text-ink mb-1">Phiên 3: AI trong mật mã và bảo mật hậu lượng tử</p>
                              <p className="italic text-cipher mb-3">(Chair: Viện Khoa học và Công nghệ mật mã)</p>
                              <ul className="list-disc pl-5 space-y-1">
                                <li>Xu hướng PQC toàn cầu (NIST, ETSI)</li>
                                <li>Thách thức triển khai PQC tại Việt Nam</li>
                                <li>AI trong phân tích, kiểm thử mật mã</li>
                              </ul>
                            </td>
                            <td className="p-4 align-top">Viện nghiên cứu mật mã/Đại học/ Doanh nghiệp an ninh mạng</td>
                          </tr>
                          <tr className="bg-cipher/5 font-semibold text-cipher">
                            <td className="p-4">15:00 - 15:15</td>
                            <td className="p-4" colSpan={2}>Nghỉ giải lao</td>
                          </tr>
                          <tr className="hover:bg-paper/50 transition-colors">
                            <td className="p-4 font-semibold text-ink align-top">15:15 - 16:45</td>
                            <td className="p-4">
                              <p className="font-bold text-ink mb-1">Phiên 4: AI trong phòng, chống thông tin sai lệch và các thách thức an ninh trong tương lai</p>
                              <p className="italic text-cipher mb-3">(Chair: Học viện Báo chí &amp; Tuyên truyền)</p>
                              <ul className="list-disc pl-5 space-y-1">
                                <li>AI &amp; bảo vệ dữ liệu cá nhân</li>
                                <li>AI giải thích được (Explainable AI) trong An toàn thông tin</li>
                                <li>Rủi ro từ AI tạo sinh (Generative AI) (deepfake, lừa đảo, fakenews)</li>
                              </ul>
                            </td>
                            <td className="p-4 align-top">Nhà khoa học/Luật sư/Doanh nghiệp AI</td>
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
