const API_BASE = "http://localhost:4000/api/v1";

const pages = [
  {
    slug: "home",
    title: "VCRIS 2026",
    isSystem: true,
    content: {
      root: { props: {} },
      content: [
        {
          type: "HomeHero",
          props: {
            eyebrow: "VCRIS 2026",
            titlePart1: "The 3rd International Conference on",
            titlePart2: "Cryptography & Information Security",
            time: "October 29 - 30, 2026",
            venue: "Academy of Cryptography Techniques, Hanoi, Vietnam",
            bgImageUrl: "/images/lake.jpg"
          }
        },
        {
          type: "HomeImportantDates",
          props: {
            conferenceName: "VCRIS 2026",
            conferenceDateRaw: "October 29 - 30, 2026",
            conferenceLocation: "Academy of Cryptography Techniques, Hanoi",
            importantDatesTitle: "Important Dates",
            dates: [
              { date: "June 30, 2026", label: "Paper Submission Deadline", passed: false },
              { date: "July 31, 2026", label: "Notification of Acceptance", passed: false },
              { date: "September 25, 2026", label: "Camera-Ready Submission", passed: false },
              { date: "October 29 - 30, 2026", label: "Conference Dates", passed: false, highlight: true }
            ]
          }
        },
        {
          type: "HomeAbout",
          props: {
            eyebrow: "ABOUT THE CONFERENCE",
            title: "Building the Future of Cryptographic Science",
            paragraphs: [
              { text: "Following the success of VCRIS 2025, this event will continue to be held in Hanoi, the thousand-year-old capital of Vietnam, renowned for its rich history, cultural heritage, and vibrant historical landmarks." },
              { text: "The Academy of Cryptography Techniques, selected by the Vietnamese Government as a pivotal institution for nurturing information security expertise, will serve as the venue for the VCRIS 2026." }
            ],
            topics: [
              { topic: "Post-Quantum Cryptography" },
              { topic: "Blockchain & DLT" },
              { topic: "AI Security" },
              { topic: "Zero-Knowledge Proofs" },
              { topic: "Digital Forensics" }
            ],
            stats: [
              { number: "3rd", label: "Edition" },
              { number: "2024", label: "Since" },
              { number: "IEEE", label: "Indexed" }
            ]
          }
        },
        {
          type: "HomeCfa",
          props: {
            title: "Your Research Belongs Here",
            subtitle: "IEEE-indexed proceedings · Double-blind peer review · International audience",
            btnLabel: "Submit Paper via EasyChair",
            btnUrl: "https://easychair.org"
          }
        }
      ]
    }
  },
  {
    slug: "registration",
    title: "Registration",
    content: {
      root: { props: {} },
      content: [
        { type: "TopImageHeader", props: { title: "Registration", bgImageUrl: "/images/lake.jpg" } },
        { type: "RichText", props: { html: `
          <div style="background-color: #F7F8FA; padding: 64px 24px;">
            <div style="max-width: 1200px; margin: 0 auto;">
              <h2 style="font-size: 40px; font-weight: bold; font-style: italic; color: #0D1B2A; text-align: center; margin-bottom: 16px;">Registration Fees</h2>
              <p style="font-size: 16px; color: #64748B; text-align: center; margin-bottom: 48px;">Early bird rates available until September 30, 2025</p>
              <div style="margin-bottom: 48px; background-color: #EFF6FF; border: 1px solid #BFDBFE; border-radius: 8px; padding: 24px;">
                <p style="margin-bottom: 16px;"><strong>Registration is handled at:</strong> <a href="https://vcris2025.websitehoinghi.com/" style="color: #0EA5A0; font-weight: 600;">https://vcris2025.websitehoinghi.com/</a></p>
                <p><strong>After successful payment, please send proof to:</strong> <a href="mailto:vcris.act@gmail.com" style="color: #0EA5A0; font-weight: 600;">vcris.act@gmail.com</a></p>
              </div>
              <div style="overflow-x: auto;">
                <table style="width: 100%; border-collapse: collapse; background-color: white; font-size: 14px; border: 1px solid #E2E8F0;">
                  <thead>
                    <tr style="background-color: #EDF2F7;">
                      <th style="border: 1px solid #E2E8F0; padding: 12px; text-align: left;">Registration Type</th>
                      <th style="border: 1px solid #E2E8F0; padding: 12px; text-align: left;">Membership</th>
                      <th style="border: 1px solid #E2E8F0; padding: 12px; text-align: left;">Date</th>
                      <th style="border: 1px solid #E2E8F0; padding: 12px; text-align: center;">Registration Fee</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style="border: 1px solid #E2E8F0; padding: 12px; font-weight: bold;" rowspan="2">Regular Registration</td>
                      <td style="border: 1px solid #E2E8F0; padding: 12px;">IEEE Member</td>
                      <td style="border: 1px solid #E2E8F0; padding: 12px;">Before Sep 30, 2025</td>
                      <td style="border: 1px solid #E2E8F0; padding: 12px; text-align: center;">250 USD</td>
                    </tr>
                    <tr>
                      <td style="border: 1px solid #E2E8F0; padding: 12px;">Non-IEEE Member</td>
                      <td style="border: 1px solid #E2E8F0; padding: 12px;">Before Sep 30, 2025</td>
                      <td style="border: 1px solid #E2E8F0; padding: 12px; text-align: center;">300 USD</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ` } }
      ]
    }
  },
  {
    slug: "keynote-speakers",
    title: "Keynote Speakers",
    content: {
      root: { props: {} },
      content: [
        { type: "TopImageHeader", props: { title: "Keynote Speakers", bgImageUrl: "/images/lake.jpg" } },
        { type: "RichText", props: { html: `
          <div style="background-color: white; padding: 64px 24px;">
            <div style="max-width: 1200px; margin: 0 auto;">
              <p style="text-align: center; color: #64748B; font-size: 18px; margin-bottom: 48px;">World-renowned experts sharing cutting-edge research and insights</p>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 32px;">
                <div style="border: 1px solid #E4E8EE; border-radius: 16px; padding: 32px; text-align: center;">
                  <h3 style="font-size: 18px; font-weight: 600; color: #0D1B2A; margin-bottom: 4px;">PROF. TANAKA KIYOFUMI</h3>
                  <p style="font-size: 13px; color: #64748B; margin-bottom: 16px;">Dean of Information Science | JAIST</p>
                  <p style="font-size: 12px; font-weight: 500; color: #0EA5A0; background: #E6F3F3; padding: 8px; border-radius: 20px; margin-bottom: 16px;">Challenges in High-Performance Cryptographic Hardware Design</p>
                  <p style="font-size: 14px; color: #64748B; line-height: 1.6;">Prof. Tanaka is a leading expert in computer architecture and accelerator hardware.</p>
                </div>
                <div style="border: 1px solid #E4E8EE; border-radius: 16px; padding: 32px; text-align: center;">
                  <h3 style="font-size: 18px; font-weight: 600; color: #0D1B2A; margin-bottom: 4px;">DR. WOUTER CASTRYCK</h3>
                  <p style="font-size: 13px; color: #64748B; margin-bottom: 16px;">Research Expert | COSIC</p>
                  <p style="font-size: 12px; font-weight: 500; color: #0EA5A0; background: #E6F3F3; padding: 8px; border-radius: 20px; margin-bottom: 16px;">Isogeny-based cryptography: current landscape</p>
                  <p style="font-size: 14px; color: #64748B; line-height: 1.6;">Specialist in computational algebraic geometry and number theory.</p>
                </div>
              </div>
            </div>
          </div>
        ` } }
      ]
    }
  },
  {
    slug: "accommodation",
    title: "Accommodation",
    content: {
      root: { props: {} },
      content: [
        { type: "TopImageHeader", props: { title: "Accommodation", bgImageUrl: "/images/lake.jpg" } },
        { type: "RichText", props: { html: `
          <div style="background-color: white; padding: 64px 24px;">
            <div style="max-width: 1200px; margin: 0 auto;">
              <h2 style="font-size: 36px; font-weight: bold; font-style: italic; color: #0D1B2A; text-align: center; margin-bottom: 48px;">Recommended Hotels</h2>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 32px;">
                <div style="border: 1px solid #E4E8EE; border-radius: 16px; overflow: hidden;">
                  <div style="padding: 24px;">
                    <h3 style="font-size: 20px; font-weight: bold; color: #0D1B2A; margin-bottom: 8px;">Grand Plaza Hanoi Hotel</h3>
                    <p style="font-size: 14px; color: #64748B; margin-bottom: 16px;">117 Tran Duy Hung Street, Hanoi</p>
                    <a href="http://www.grandplazahanoi.com/kor/" target="_blank" style="color: #0EA5A0; font-weight: 600;">Visit Website</a>
                  </div>
                </div>
                <div style="border: 1px solid #E4E8EE; border-radius: 16px; overflow: hidden;">
                  <div style="padding: 24px;">
                    <h3 style="font-size: 20px; font-weight: bold; color: #0D1B2A; margin-bottom: 8px;">Intercontinental Hanoi Westlake</h3>
                    <p style="font-size: 14px; color: #64748B; margin-bottom: 16px;">5 Tu Hoa, Hà Nội</p>
                    <a href="https://hanoi.intercontinental.com/" target="_blank" style="color: #0EA5A0; font-weight: 600;">Visit Website</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ` } }
      ]
    }
  },
  {
    slug: "venue",
    title: "Venue & Travel",
    content: {
      root: { props: {} },
      content: [
        { type: "TopImageHeader", props: { title: "Venue & Travel", bgImageUrl: "/images/lake.jpg" } },
        { type: "RichText", props: { html: `
          <div style="background-color: white; padding: 64px 24px;">
            <div style="max-width: 1200px; margin: 0 auto;">
              <h2 style="font-size: 32px; font-weight: bold; color: #0D1B2A; margin-bottom: 24px;">Academy of Cryptography Techniques</h2>
              <p style="font-size: 16px; color: #64748B; margin-bottom: 32px;">141 Chien Thang Road, Thanh Liet, Ha Noi, Viet Nam</p>
              <div style="border-radius: 16px; overflow: hidden; border: 1px solid #E4E8EE; height: 500px;">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.195748202528!2d105.79383627503006!3d20.984786980650942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135acc6bd794301%3A0x57488c6bd794301!2zSOG7jWMgdmnhu4duIEvhu7kgdGh14bqtdCBN4bqtdCBtw6M!5e0!3m2!1svi!2s!4v1711440000000!5m2!1svi!2s" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
              </div>
            </div>
          </div>
        ` } }
      ]
    }
  },
  {
    slug: "call-for-papers",
    title: "Call for Papers",
    content: {
      root: { props: {} },
      content: [
        { type: "TopImageHeader", props: { title: "Call for Papers", bgImageUrl: "/images/lake.jpg" } },
        { type: "RichText", props: { html: `
          <div style="background-color: white; padding: 64px 24px;">
            <div style="max-width: 1200px; margin: 0 auto;">
              <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 48px;">
                <div>
                  <h2 style="font-size: 32px; font-weight: bold; font-style: italic; color: #0D1B2A; margin-bottom: 24px;">About the Conference</h2>
                  <p style="font-size: 16px; color: #64748B; line-height: 1.7; margin-bottom: 16px;">The 3rd International Conference on Cryptography and Information Security (VCRIS 2026) aims to bring together researchers, practitioners, and industry experts to discuss the latest advances in cryptography and information security.</p>
                  <p style="font-size: 16px; color: #64748B; line-height: 1.7; margin-bottom: 32px;">Following the success of previous VCRIS editions, this event provides a premier forum for presenting and discussing new research and developments in all areas of cryptography and security.</p>
                  
                  <h2 style="font-size: 32px; font-weight: bold; font-style: italic; color: #0D1B2A; margin-bottom: 24px;">Conference Tracks</h2>
                  <div style="space-y: 16px;">
                    <details style="background: #F7F8FA; padding: 16px; border-radius: 12px; margin-bottom: 12px;">
                      <summary style="font-weight: bold; cursor: pointer;">Track 1: Theoretical and Post-Quantum Cryptography</summary>
                      <ul style="padding-left: 20px; margin-top: 8px; color: #64748B;">
                        <li>Symmetric and asymmetric cryptography</li>
                        <li>Cryptographic protocols</li>
                        <li>Lattice-based cryptography</li>
                        <li>Quantum-safe algorithms</li>
                      </ul>
                    </details>
                    <details style="background: #F7F8FA; padding: 16px; border-radius: 12px; margin-bottom: 12px;">
                      <summary style="font-weight: bold; cursor: pointer;">Track 2: Applied Cryptography and Privacy</summary>
                      <ul style="padding-left: 20px; margin-top: 8px; color: #64748B;">
                        <li>Cryptographic engineering</li>
                        <li>Side-channel attacks</li>
                        <li>Privacy-enhancing technologies</li>
                        <li>Blockchain security</li>
                      </ul>
                    </details>
                    <details style="background: #F7F8FA; padding: 16px; border-radius: 12px;">
                      <summary style="font-weight: bold; cursor: pointer;">Track 3: Systems and Network Security</summary>
                      <ul style="padding-left: 20px; margin-top: 8px; color: #64748B;">
                        <li>Network security</li>
                        <li>IoT security</li>
                        <li>Cloud and edge security</li>
                        <li>AI for security</li>
                      </ul>
                    </details>
                  </div>
                </div>
                
                <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 20px; padding: 32px; height: fit-content;">
                  <h3 style="font-size: 20px; font-weight: bold; margin-bottom: 20px;">Paper Submission</h3>
                  <p style="font-size: 14px; color: #64748B; margin-bottom: 20px;">Submissions must be original and should use the IEEE conference templates (max 6 pages).</p>
                  <div style="background: #FFFBEB; padding: 16px; border-radius: 12px; margin-bottom: 24px;">
                    <p style="font-size: 13px; font-weight: 600; color: #92400E;">Post-conference Publication</p>
                    <p style="font-size: 12px; color: #92400E;">Select accepted papers will be invited to submit expanded versions to reputable journals.</p>
                  </div>
                  <a href="https://easychair.org" style="display: block; width: 100%; padding: 12px; background: #0EA5A0; color: white; text-align: center; border-radius: 12px; font-weight: 600; text-decoration: none;">Submit via EasyChair</a>
                </div>
              </div>
            </div>
          </div>
        ` } }
      ]
    }
  },
  {
    slug: "call-for-workshops",
    title: "Call for Workshops",
    content: {
      root: { props: {} },
      content: [
        { type: "TopImageHeader", props: { title: "Call for Workshops", bgImageUrl: "/images/lake.jpg" } },
        { type: "RichText", props: { html: `
          <div style="background-color: white; padding: 64px 24px;">
            <div style="max-width: 1200px; margin: 0 auto;">
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 48px;">
                <div>
                  <h2 style="font-size: 40px; font-weight: bold; font-style: italic; color: #0D1B2A; margin-bottom: 24px;">Workshop Proposals</h2>
                  <p style="font-size: 16px; color: #64748B; line-height: 1.7; margin-bottom: 32px;">VCRIS 2026 invites proposals for half-day or full-day workshops on specialized topics in information security. Workshops provide a space for focused discussion and emerging research topics.</p>
                  <div style="border: 1px solid #0EA5A0; padding: 24px; border-radius: 16px; background: #E6F3F3;">
                    <p style="font-weight: 600; color: #0EA5A0;">All proposals must be submitted via email to the workshop chairs for review.</p>
                  </div>
                </div>
                <div style="background: #F8FAFC; padding: 40px; border-radius: 24px;">
                  <h3 style="font-size: 24px; font-weight: bold; margin-bottom: 24px;">Contact Organizers</h3>
                  <div style="display: flex; gap: 16px; margin-bottom: 24px;">
                    <div style="font-weight: bold; color: #0EA5A0;">Email</div>
                    <div>vcris.act@gmail.com</div>
                  </div>
                  <p style="color: #64748B; font-size: 14px;">For questions regarding workshops, please reach out directly to the committee members.</p>
                </div>
              </div>
            </div>
          </div>
        ` } }
      ]
    }
  },
  {
    slug: "camera-ready-submission",
    title: "Camera Ready Submission",
    content: {
      root: { props: {} },
      content: [
        { type: "TopImageHeader", props: { title: "Camera Ready Submission", bgImageUrl: "/images/lake.jpg" } },
        { type: "RichText", props: { html: `
          <div style="background-color: white; padding: 64px 24px;">
            <div style="max-width: 1200px; margin: 0 auto;">
              <div style="background: #FFFBEB; border: 1px solid #FDE68A; padding: 24px; border-radius: 16px; text-align: center;">
                <p style="font-size: 18px; font-weight: 600; color: #92400E;">Camera-ready submission information will be updated later.</p>
              </div>
            </div>
          </div>
        ` } }
      ]
    }
  },
  {
    slug: "instructions-for-authors",
    title: "Instructions for Authors",
    content: {
      root: { props: {} },
      content: [
        { type: "TopImageHeader", props: { title: "Instructions for Authors", bgImageUrl: "/images/lake.jpg" } },
        { type: "RichText", props: { html: `
          <div style="background-color: white; padding: 64px 24px;">
            <div style="max-width: 1200px; margin: 0 auto;">
              <div style="space-y: 24px;">
                <div style="padding: 32px; border: 1px solid #E2E8F0; border-radius: 16px;">
                  <h2 style="font-size: 24px; font-weight: bold; margin-bottom: 16px;">Submission Process</h2>
                  <p style="color: #64748B;">Papers must be submitted via EasyChair before the deadline. Late submissions will not be considered.</p>
                </div>
                <div style="padding: 32px; border: 1px solid #E2E8F0; border-radius: 16px; margin-top: 24px;">
                  <h2 style="font-size: 24px; font-weight: bold; margin-bottom: 16px;">Formatting Requirements</h2>
                  <ul style="color: #64748B; space-y: 8px; padding-left: 20px;">
                    <li>PDF files must be between 4-6 pages.</li>
                    <li>Fonts must be embedded.</li>
                    <li>Must use IEEE double-column format.</li>
                  </ul>
                </div>
                <div style="padding: 32px; border: 1px solid #E2E8F0; border-radius: 16px; margin-top: 24px;">
                  <h2 style="font-size: 24px; font-weight: bold; margin-bottom: 16px;">Templates</h2>
                  <p style="color: #64748B;">Please download and follow the guidelines on the <a href="https://www.ieee.org/conferences/publishing/templates.html" style="color:#0EA5A0;">IEEE website</a>.</p>
                </div>
              </div>
            </div>
          </div>
        ` } }
      ]
    }
  },
  {
    slug: "organizing-committees",
    title: "Organizing Committees",
    content: {
      root: { props: {} },
      content: [
        { type: "TopImageHeader", props: { title: "Organizing Committees", bgImageUrl: "/images/lake.jpg" } },
        { type: "RichText", props: { html: `
          <div style="background-color: white; padding: 64px 24px;">
            <div style="max-width: 1200px; margin: 0 auto;">
              <h2 style="text-align: center; font-size: 36px; font-weight: bold; margin-bottom: 48px;">Organizing Bodies</h2>
              <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-bottom: 64px;">
                <div style="padding: 24px; border: 1px solid #E2E8F0; border-radius: 16px;">
                  <p style="font-size: 11px; font-weight: bold; color: #0EA5A0; text-transform: uppercase;">Organizer</p>
                  <p style="font-weight: bold; margin-top: 12px;">Academy of Cryptography Techniques (ACT)</p>
                </div>
                <div style="padding: 24px; border: 1px solid #E2E8F0; border-radius: 16px;">
                  <p style="font-size: 11px; font-weight: bold; color: #0EA5A0; text-transform: uppercase;">Co-Organizers</p>
                  <p style="margin-top: 12px;">Vietnam Information Security Association (VNISA)</p>
                </div>
                <div style="padding: 24px; border: 1px solid #E2E8F0; border-radius: 16px;">
                  <p style="font-size: 11px; font-weight: bold; color: #0EA5A0; text-transform: uppercase;">Endorsers</p>
                  <p style="margin-top: 12px;">IEEE Vietnam Section</p>
                </div>
              </div>
              
              <h2 style="text-align: center; font-size: 36px; font-weight: bold; margin-bottom: 48px;">Committee Members</h2>
              <div style="border: 1px solid #E2E8F0; border-radius: 20px; padding: 40px;">
                <h3 style="font-size: 24px; font-weight: bold; color: #0EA5A0; margin-bottom: 24px;">Honorary Chairs</h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 40px;">
                  <div style="padding: 20px; background: #F8FAFC; border-radius: 12px;">
                    <p style="font-weight: bold;">Nguyen Huu Hung</p>
                    <p style="font-size: 13px; color: #64748B;">Government Cipher Committee</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ` } }
      ]
    }
  },
  {
    slug: "paper-submission",
    title: "Paper Submission",
    content: {
      root: { props: {} },
      content: [
        { type: "TopImageHeader", props: { title: "Paper Submission", bgImageUrl: "/images/lake.jpg" } },
        { type: "RichText", props: { html: `
          <div style="background-color: white; padding: 64px 24px;">
            <div style="max-width: 1200px; margin: 0 auto;">
              <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 32px;">
                <div style="space-y: 24px;">
                  <div style="padding: 32px; border: 1px solid #E2E8F0; border-radius: 20px;">
                    <h2 style="font-size: 24px; font-weight: bold; margin-bottom: 16px;">Guidelines</h2>
                    <p style="color: #64748B;">All submitted papers must be original and not under review elsewhere. Max 6 pages inclusive of references.</p>
                  </div>
                  <div style="padding: 32px; border: 1px solid #E2E8F0; border-radius: 20px; margin-top: 24px;">
                    <h2 style="font-size: 24px; font-weight: bold; margin-bottom: 16px;">Peer Review</h2>
                    <p style="color: #64748B;">Each submission will undergo rigorous peer review by at least three experts in the field.</p>
                  </div>
                </div>
                <div style="padding: 32px; background: #F8FAFC; border-radius: 20px; height: fit-content;">
                  <h3 style="font-size: 24px; font-weight: bold; margin-bottom: 24px;">Important Dates</h3>
                  <div style="margin-bottom: 16px;">
                    <div style="font-weight: bold;">June 30, 2026</div>
                    <div style="font-size: 14px; color: #64748B;">Submission Deadline</div>
                  </div>
                  <div style="margin-bottom: 16px;">
                    <div style="font-weight: bold;">July 31, 2026</div>
                    <div style="font-size: 14px; color: #64748B;">Acceptance Notification</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ` } }
      ]
    }
  },
  {
    slug: "previous-conferences",
    title: "Previous Conferences",
    content: {
      root: { props: {} },
      content: [
        { type: "TopImageHeader", props: { title: "Previous Conferences", bgImageUrl: "/images/lake.jpg" } },
        { type: "RichText", props: { html: `
          <div style="background-color: white; padding: 64px 24px;">
            <div style="max-width: 1200px; margin: 0 auto;">
              <div style="space-y: 32px;">
                <div style="display: flex; justify-content: space-between; align-items: center; padding: 40px; border: 1px solid #E2E8F0; border-radius: 24px;">
                  <div>
                    <span style="padding: 4px 12px; background: #E6F3F3; color: #0EA5A0; font-size: 12px; font-weight: bold; border-radius: 20px;">2nd Edition</span>
                    <h2 style="font-size: 32px; font-weight: bold; margin-top: 12px;">VCRIS 2025</h2>
                    <p style="color: #64748B; margin-top: 8px;">Dalat, Vietnam | October 2025</p>
                  </div>
                  <a href="#" style="padding: 12px 24px; background: #0EA5A0; color: white; border-radius: 30px; font-weight: 600; text-decoration: none;">View Archive</a>
                </div>
              </div>
            </div>
          </div>
        ` } }
      ]
    }
  },
  {
    slug: "program",
    title: "Conference Program",
    content: {
      root: { props: {} },
      content: [
        { type: "TopImageHeader", props: { title: "Conference Program", bgImageUrl: "/images/lake.jpg" } },
        { type: "RichText", props: { html: `
          <div style="background-color: white; padding: 100px 24px; text-align: center;">
            <h2 style="font-size: 28px; font-weight: bold; font-style: italic;">The VCRIS 2026 program will be updated later.</h2>
          </div>
        ` } }
      ]
    }
  },
  {
    slug: "program-committees",
    title: "Program Committees",
    content: {
      root: { props: {} },
      content: [
        { type: "TopImageHeader", props: { title: "Program Committees", bgImageUrl: "/images/lake.jpg" } },
        { type: "RichText", props: { html: `
          <div style="background-color: #F7F8FA; padding: 64px 24px;">
            <div style="max-width: 1200px; margin: 0 auto;">
              <h2 style="text-align: center; font-size: 40px; font-weight: bold; margin-bottom: 48px;">Program Committee</h2>
              <div style="background: white; border-radius: 20px; overflow: hidden; border: 1px solid #E2E8F0;">
                <table style="width: 100%; border-collapse: collapse;">
                  <thead style="background: #F8FAFC;">
                    <tr>
                      <th style="padding: 16px; text-align: left; font-size: 12px; text-transform: uppercase; color: #64748B;">#</th>
                      <th style="padding: 16px; text-align: left; font-size: 12px; text-transform: uppercase; color: #64748B;">Name</th>
                      <th style="padding: 16px; text-align: left; font-size: 12px; text-transform: uppercase; color: #64748B;">Affiliation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style="border-top: 1px solid #E2E8F0;">
                      <td style="padding: 16px; color: #94A3B8;">1</td>
                      <td style="padding: 16px; font-weight: bold;">Tanaka Kiyofumi</td>
                      <td style="padding: 16px; color: #64748B;">JAIST, Japan</td>
                    </tr>
                    <tr style="border-top: 1px solid #E2E8F0;">
                      <td style="padding: 16px; color: #94A3B8;">2</td>
                      <td style="padding: 16px; font-weight: bold;">Wouter Castryck</td>
                      <td style="padding: 16px; color: #64748B;">KU Leuven, Belgium</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ` } }
      ]
    }
  }
];

async function seed() {
  console.log("Logging in as admin...");
  try {
    const loginRes = await fetch(`${API_BASE}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "admin@vcris.org", password: "vcris2026admin" })
    });

    if (!loginRes.ok) {
      console.error("Login failed:", await loginRes.text());
      process.exit(1);
    }

    const { token } = await loginRes.json();
    const headers = { 
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    };

    for (const page of pages) {
      console.log(`Updating ${page.slug}...`);
      
      // We use PUT which should replace existing content
      const res = await fetch(`${API_BASE}/pages/${page.slug}`, {
        method: "PUT",
        headers,
        body: JSON.stringify({
          title: page.title,
          locale: "en",
          content: page.content,
          isPublished: true,
          isSystem: page.isSystem || false
        })
      });

      if (!res.ok) {
        // If 404, try creating
        if (res.status === 404) {
          console.log(`${page.slug} not found, creating...`);
          const createRes = await fetch(`${API_BASE}/pages`, {
            method: "POST",
            headers,
            body: JSON.stringify({
              slug: page.slug,
              title: page.title,
              locale: "en",
              content: page.content,
              isPublished: true,
              isSystem: page.isSystem || false
            })
          });
          if (!createRes.ok) console.error(`Failed to create ${page.slug}:`, await createRes.text());
          else console.log(`Successfully created ${page.slug}`);
        } else {
          console.error(`Failed to update ${page.slug}:`, await res.text());
        }
      } else {
        console.log(`Successfully updated ${page.slug}`);
      }
    }
    console.log("Full Migration Done!");
  } catch (error) {
    console.error("Seeding error:", error);
  }
}

seed();
