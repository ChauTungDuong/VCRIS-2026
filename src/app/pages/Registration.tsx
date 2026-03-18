export default function Registration() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative h-[300px] bg-deep">
        <div className="max-w-[1200px] mx-auto px-6 h-full flex flex-col items-center justify-center text-center">
          <h1 className="text-[56px] font-bold italic text-white" style={{ fontFamily: 'var(--font-display)' }}>
            Registration
          </h1>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="bg-warm py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-[40px] font-bold italic text-ink mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              Registration Fees
            </h2>
            <p className="text-[16px] text-slate" style={{ fontFamily: 'var(--font-body)' }}>
              Early bird rates available until September 30, 2025
            </p>
          </div>

          {/* Registration Notice Section */}
          <div className="mb-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="space-y-4" style={{ fontFamily: 'var(--font-body)' }}>
              <div className="text-[15px]">
                <span className="font-bold text-ink">Registration is handled at: </span>
                <a href="https://vcris2025.websitehoinghi.com/" target="_blank" rel="noopener noreferrer" className="text-cipher font-semibold hover:underline">
                  https://vcris2025.websitehoinghi.com/
                </a>
              </div>
              <div className="text-[15px]">
                <span className="font-bold text-ink">After the registration and successful payment, please send proof to: </span>
                <a href="mailto:vcris.act@gmail.com" className="text-cipher font-semibold hover:underline">
                  vcris.act@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Responsive table wrapper */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white text-[14px]" style={{ fontFamily: 'var(--font-body)' }}>
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-ink">Registration Type</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-ink">Membership</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-ink">Date</th>
                  <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-ink">Code</th>
                  <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-ink">Registration Fee</th>
                  <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-ink">Number of Accepted Papers</th>
                </tr>
              </thead>
              <tbody>
                {/* REGULAR REGISTRATION - ROW 1 */}
                <tr>
                  <td rowSpan={12} className="border border-gray-300 px-4 py-3 text-center font-bold text-ink bg-white" style={{ verticalAlign: 'middle', fontSize: '18px' }}>Regular Registration</td>
                  <td rowSpan={6} className="border border-gray-300 px-4 py-3 text-center font-bold text-ink bg-gray-50" style={{ verticalAlign: 'middle', fontSize: '16px' }}>IEEE Member</td>
                  <td rowSpan={3} className="border border-gray-300 px-4 py-3 text-center text-slate bg-gray-50" style={{ verticalAlign: 'middle', fontSize: '15px' }}>Before Sep 30, 2025</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-ink">RM:B1</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-ink">250 USD</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-ink">01</td>
                </tr>
                {/* REGULAR REGISTRATION - ROW 2 */}
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-center text-ink">RM:B2</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-ink">400 USD</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-ink">02</td>
                </tr>
                {/* REGULAR REGISTRATION - ROW 3 */}
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-center text-ink">RM:B3</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-ink">500 USD</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-ink">03</td>
                </tr>
                {/* REGULAR REGISTRATION - ROW 4 */}
                <tr>
                  <td rowSpan={3} className="border border-gray-300 px-4 py-3 text-center text-slate bg-gray-50" style={{ verticalAlign: 'middle', fontSize: '15px' }}>After Sep 30, 2025</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-ink">RM:A1</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-ink">300 USD</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-ink">01</td>
                </tr>
                {/* REGULAR REGISTRATION - ROW 5 */}
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-center text-ink">RM:A2</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-ink">450 USD</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-ink">02</td>
                </tr>
                {/* REGULAR REGISTRATION - ROW 6 */}
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-center text-ink">RM:A3</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-ink">550 USD</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-ink">03</td>
                </tr>
                {/* REGULAR REGISTRATION - ROW 7 */}
                <tr>
                  <td rowSpan={6} className="border border-gray-300 px-4 py-3 text-center font-bold text-ink bg-gray-50" style={{ verticalAlign: 'middle', fontSize: '16px' }}>Non-IEEE Member</td>
                  <td rowSpan={3} className="border border-gray-300 px-4 py-3 text-center text-slate bg-gray-50" style={{ verticalAlign: 'middle', fontSize: '15px' }}>Before Sep 30, 2025</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-ink">RN:B1</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-ink">300 USD</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-ink">01</td>
                </tr>
                {/* REGULAR REGISTRATION - ROW 8 */}
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-center text-ink">RN:B2</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-ink">500 USD</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-ink">02</td>
                </tr>
                {/* REGULAR REGISTRATION - ROW 9 */}
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-center text-ink">RN:B3</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-ink">600 USD</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-ink">03</td>
                </tr>
                {/* REGULAR REGISTRATION - ROW 10 */}
                <tr>
                  <td rowSpan={3} className="border border-gray-300 px-4 py-3 text-center text-slate bg-gray-50" style={{ verticalAlign: 'middle', fontSize: '15px' }}>After Sep 30, 2025</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-ink">RN:A1</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-ink">350 USD</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-ink">01</td>
                </tr>
                {/* REGULAR REGISTRATION - ROW 11 */}
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-center text-ink">RN:A2</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-ink">550 USD</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-ink">02</td>
                </tr>
                {/* REGULAR REGISTRATION - ROW 12 */}
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-center text-ink">RN:A3</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-ink">650 USD</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-ink">03</td>
                </tr>

                {/* STUDENT CONFERENCE REGISTRATION - ROW 13 */}
                <tr>
                  <td rowSpan={12} className="border border-gray-300 px-4 py-3 text-center font-bold text-ink bg-white" style={{ verticalAlign: 'middle', fontSize: '18px' }}>Student Conference Registration</td>
                  <td rowSpan={6} className="border border-gray-300 px-4 py-3 text-center font-bold text-ink bg-gray-50" style={{ verticalAlign: 'middle', fontSize: '16px' }}>IEEE Member</td>
                  <td rowSpan={3} className="border border-gray-300 px-4 py-3 text-center text-slate bg-gray-50" style={{ verticalAlign: 'middle', fontSize: '15px' }}>Before Sep 30, 2025</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-ink">SM:B1</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-ink">150 USD</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-ink">01</td>
                </tr>
                {/* STUDENT CONFERENCE REGISTRATION - ROW 14 */}
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-center text-ink">SM:B2</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-ink">250 USD</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-ink">02</td>
                </tr>
                {/* STUDENT CONFERENCE REGISTRATION - ROW 15 */}
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-center text-ink">SM:B3</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-ink">350 USD</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-ink">03</td>
                </tr>
                {/* STUDENT CONFERENCE REGISTRATION - ROW 16 */}
                <tr>
                  <td rowSpan={3} className="border border-gray-300 px-4 py-3 text-center text-slate bg-gray-50" style={{ verticalAlign: 'middle', fontSize: '15px' }}>After Sep 30, 2025</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-ink">SM:A1</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-ink">200 USD</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-ink">01</td>
                </tr>
                {/* STUDENT CONFERENCE REGISTRATION - ROW 17 */}
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-center text-ink">SM:A2</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-ink">300 USD</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-ink">02</td>
                </tr>
                {/* STUDENT CONFERENCE REGISTRATION - ROW 18 */}
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-center text-ink">SM:A3</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-ink">400 USD</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-ink">03</td>
                </tr>
                {/* STUDENT CONFERENCE REGISTRATION - ROW 19 */}
                <tr>
                  <td rowSpan={6} className="border border-gray-300 px-4 py-3 text-center font-bold text-ink bg-gray-50" style={{ verticalAlign: 'middle', fontSize: '16px' }}>Non-IEEE Member</td>
                  <td rowSpan={3} className="border border-gray-300 px-4 py-3 text-center text-slate bg-gray-50" style={{ verticalAlign: 'middle', fontSize: '15px' }}>Before Sep 30, 2025</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-ink">SN:B1</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-ink">180 USD</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-ink">01</td>
                </tr>
                {/* STUDENT CONFERENCE REGISTRATION - ROW 20 */}
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-center text-ink">SN:B2</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-ink">300 USD</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-ink">02</td>
                </tr>
                {/* STUDENT CONFERENCE REGISTRATION - ROW 21 */}
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-center text-ink">SN:B3</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-ink">400 USD</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-ink">03</td>
                </tr>
                {/* STUDENT CONFERENCE REGISTRATION - ROW 22 */}
                <tr>
                  <td rowSpan={3} className="border border-gray-300 px-4 py-3 text-center text-slate bg-gray-50" style={{ verticalAlign: 'middle', fontSize: '15px' }}>After Sep 30, 2025</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-ink">SN:A1</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-ink">230 USD</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-ink">01</td>
                </tr>
                {/* STUDENT CONFERENCE REGISTRATION - ROW 23 */}
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-center text-ink">SN:A2</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-ink">350 USD</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-ink">02</td>
                </tr>
                {/* STUDENT CONFERENCE REGISTRATION - ROW 24 */}
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-center text-ink">SN:A3</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-ink">450 USD</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-ink">03</td>
                </tr>

                {/* EXTRA FEES - ROW 1 */}
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-left text-ink font-semibold">Non-authors / Co-authors</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-ink"></td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-ink"></td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-ink">NA/CA</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-ink">150 USD</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-ink"></td>
                </tr>

                {/* EXTRA FEES - ROW 2 */}
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-left text-ink font-semibold">Extra page Proceeding</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-ink"></td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-ink"></td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-ink">EP</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-ink">40 USD/page</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-ink"></td>
                </tr>

                {/* EXTRA FEES - ROW 3 */}
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-left text-ink font-semibold">Extra fee (Sightseeing tour fee)</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-ink"></td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-ink"></td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-ink">EF</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-ink">30 USD</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-ink"></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Payment Information Section */}
          <div className="mt-16 bg-white rounded-lg p-8">
            {/* Payment Detail */}
            <div className="mb-12">
              <h3 className="text-[24px] font-bold text-ink mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                Payment Detail
              </h3>
              <ul className="space-y-4 text-[15px] text-slate leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                <li className="flex gap-3">
                  <span className="text-cipher font-bold flex-shrink-0">•</span>
                  <span>The registration fee includes an IEEE publication (for the first author or the corresponding author), coffee breaks, lunch breaks, and other conference materials for two days of the conference.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cipher font-bold flex-shrink-0">•</span>
                  <span>The registration also covers an entrant to the Gala Dinner at a restaurant in Hanoi.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cipher font-bold flex-shrink-0">•</span>
                  <span>If the registrant has multiple papers in different special sessions including the regular session, the registrant must register for each paper.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cipher font-bold flex-shrink-0">•</span>
                  <span>Non-refundable registration fees must be paid prior to uploading the final IEEE formatted, publication-ready version of the paper.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cipher font-bold flex-shrink-0">•</span>
                  <span>The Extra fee includes coffee breaks, lunch breaks, tickets, and entertainment for visiting Vietnam's scenic.</span>
                </li>
              </ul>
            </div>

            {/* Further Inquiry */}
            <div>
              <h3 className="text-[24px] font-bold text-ink mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                Further Inquiry
              </h3>
              <p className="text-[15px] text-slate mb-6 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                For any other related information or inquiry regarding the payment, the transaction methods, or difficulties in the registration process, the authors should send an email as soon as possible to:
              </p>
              <div className="mb-6 text-[15px]" style={{ fontFamily: 'var(--font-body)' }}>
                <a href="mailto:VCRIS.ACT@gmail.com" className="font-bold text-cipher hover:underline text-[16px]">
                  VCRIS.ACT@gmail.com
                </a>
              </div>
              <p className="text-[14px] text-slate font-semibold mb-3" style={{ fontFamily: 'var(--font-body)' }}>
                Please include:
              </p>
              <ul className="space-y-3 text-[15px] text-slate leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                <li className="flex gap-3">
                  <span className="text-cipher font-bold flex-shrink-0">•</span>
                  <span>PaperID</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cipher font-bold flex-shrink-0">•</span>
                  <span>Paper Title</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cipher font-bold flex-shrink-0">•</span>
                  <span>Author(s)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cipher font-bold flex-shrink-0">•</span>
                  <span>Affiliation</span>
                </li>
              </ul>
            </div>
          </div>

          <p className="text-[13px] text-slate italic text-center mt-8" style={{ fontFamily: 'var(--font-body)' }}>
            Need an invitation letter for visa purposes?{' '}
            <a href="mailto:registration@vcris2025.org" className="text-cipher hover:underline">
              Contact us →
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
