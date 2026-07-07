// English locale data for the Legal AI Assistant demo.
// Mirrors the Ukrainian data objects in app.js (same keys, ids and order);
// only human-readable text is translated.
window.LEGAL_CONTENT_EN = {
    mainTilesConfig: {
        'legal-clients': {
            title: 'For Legal Service Clients',
            icon: 'fas fa-users',
            subTiles: [
                { id: 'ai-agent', title: 'Ask the AI Agent a Question', icon: 'fas fa-robot', desc: 'Get an answer from the AI assistant on legal questions', screen: 'aiAgentScreen' },
                { id: 'internal-docs', title: 'Search Internal Documents', icon: 'fas fa-folder-open', desc: 'Database of local regulatory documents', screen: 'internalDocsScreen' },
                { id: 'knowledge-base', title: 'Search the Legal Knowledge Base', icon: 'fas fa-book', desc: 'FAQ and reference materials on legal matters', screen: 'knowledgeBaseScreen' }
            ]
        },
        'lawyer-cabinet': {
            title: 'Lawyer Workspace',
            icon: 'fas fa-briefcase',
            subTiles: [
                { id: 'my-tickets', title: 'My Tickets', icon: 'fas fa-ticket-alt', desc: 'View and process client requests', screen: 'myTicketsScreen' },
                { id: 'dispatcher', title: 'Ticket Dispatcher', icon: 'fas fa-random', desc: 'Automatic classification and routing of requests', screen: 'dispatcherScreen' },
                { id: 'data-sources', title: 'Data Sources', icon: 'fas fa-database', desc: 'Manage data sources for the AI', screen: 'dataSourcesScreen' }
            ]
        },
        'other-departments': {
            title: 'Other Departments Workspaces',
            icon: 'fas fa-building',
            subTiles: [
                { id: 'hr-dashboard', title: 'HR and Recruiting', icon: 'fas fa-users', desc: 'Dashboard with personnel information', screen: 'hrDashboardScreen' },
                { id: 'finance', title: 'Finance', icon: 'fas fa-chart-line', desc: 'Financial analytics and reporting', screen: 'financeScreen' },
                { id: 'procurement', title: 'Procurement', icon: 'fas fa-shopping-cart', desc: 'Manage tenders and suppliers', screen: 'procurementScreen' }
            ]
        }
    },
    aiAnswers: {
        'salary-bank': {
            question: 'Can an employee freely choose the bank for receiving their salary?',
            answer: `
            <p>In accordance with the provisions of the Constitution of Ukraine, in particular Art. 19 and Art. 68, the legal order is based on the principle that no one may be compelled to do anything not provided for by law, and everyone is obliged to observe the Constitution and laws of Ukraine and not to encroach on the rights and freedoms of others.</p>

            <div class="legal-reference">
                <i class="fas fa-link"></i>
                <a href="https://zakon.rada.gov.ua/laws/show/254к/96-вр" target="_blank">Constitution of Ukraine</a>
            </div>

            <p>The Law of Ukraine "On Remuneration of Labour" establishes that:</p>
            <ul>
                <li>Pursuant to parts 4 and 5 of Art. 24, salary is paid at the place of work, but with the employee's written consent — through banking institutions or postal transfers to an account or address specified by the employee, with such services paid for by the employer.</li>
                <li>Pursuant to part 1 of Art. 25, it is prohibited to restrict an employee in any way in the right to freely dispose of their salary, except in cases directly provided for by law.</li>
                <li>Art. 22 of the same Law prohibits the employer from making unilateral decisions on remuneration if they worsen the conditions established by law or collective agreements.</li>
            </ul>

            <div class="legal-reference">
                <i class="fas fa-link"></i>
                <a href="https://zakon.rada.gov.ua/laws/show/108/95-вр" target="_blank">Law of Ukraine "On Remuneration of Labour"</a>
            </div>

            <p>The employee's right to independently choose the method and form of receiving salary, including the choice of a specific bank or postal operator ("Ukrposhta"), is confirmed by the official position of the State Labour Service of Ukraine.</p>

            <div class="legal-reference">
                <i class="fas fa-link"></i>
                <a href="https://dsp.gov.ua/" target="_blank">Official Position of the State Labour Service</a>
            </div>

            <p>Coercion to open an account at a specific bank or to conclude a contract under duress may be declared invalid.</p>

            <p>Court practice (decision of the Babushkinskyi District Court of Dnipro dated 07.03.2018 in case No. 200/5617/15-ц) also confirmed that payment of salary through a bank is possible only with the employee's personal written consent, and coercion to do so is a violation of their right to remuneration of labour.</p>

            <div class="legal-reference">
                <i class="fas fa-link"></i>
                <a href="https://reyestr.court.gov.ua/Review/72850892" target="_blank">Court Decision No. 200/5617/15-ц</a>
            </div>

            <p>In the event of a violation of this right, the employee may file a complaint with the trade union, the labour disputes commission, the State Labour Service of Ukraine, or a lawsuit with the court.</p>

            <div class="highlight">
                <strong>Employer's liability:</strong>
                <ol>
                    <li>Administrative liability under Art. 41 of the Code of Administrative Offences (fine from UAH 510 to UAH 1,700)</li>
                    <li>Trade union initiative to terminate the employment contract with the manager (Art. 45 of the Labour Code of Ukraine)</li>
                </ol>
            </div>

            <div class="legal-reference">
                <i class="fas fa-link"></i>
                <a href="https://zakon.rada.gov.ua/laws/show/80731-10" target="_blank">Code of Administrative Offences</a>
            </div>

            <div class="ai-conclusion">
                <i class="fas fa-gavel"></i>
                <strong>Conclusion:</strong> The employee has the full legal right to freely choose the banking institution for receiving their salary. Any coercion by the employer to open an account at a specific bank or any restriction in the choice of the method of receiving salary is unlawful and qualifies as a violation of labour legislation.
            </div>
        `
        },
        'credit-card': {
            question: 'Does a bank have the right to forcibly issue a credit card alongside an employee\'s salary?',
            answer: `
            <p>Considering the cited legal acts, court practice, and official clarifications of state authorities, it should be concluded that the forced issuance by a bank of a credit card alongside an employee's salary without their personal written consent is <strong>unlawful</strong>.</p>

            <p>Pursuant to Art. 21 of the Labour Code of Ukraine and parts 4, 5 of Art. 24, part 1 of Art. 25 of the Law of Ukraine "On Remuneration of Labour", payment of salary is carried out at the place of work or, with the employee's written consent, through banking institutions or postal transfers to the specified account (address), whereby the cost of such services is borne by the employer, not the employee. It is directly prohibited to restrict an employee in any way in disposing of their salary, except in cases provided for by law.</p>

            <div class="legal-reference">
                <i class="fas fa-link"></i>
                <a href="https://zakon.rada.gov.ua/laws/show/322-08" target="_blank">Labour Code of Ukraine</a>
            </div>

            <div class="legal-reference">
                <i class="fas fa-link"></i>
                <a href="https://zakon.rada.gov.ua/laws/show/108/95-вр" target="_blank">Law of Ukraine "On Remuneration of Labour"</a>
            </div>

            <p>Pursuant to parts 4 and 6 of Art. 19 of the Law of Ukraine "On Consumer Protection", aggressive business practice is recognised as coercion or undue influence that restricts the consumer's freedom of choice regarding the purchase of products. Transactions carried out using unfair business practice are invalid.</p>

            <div class="legal-reference">
                <i class="fas fa-link"></i>
                <a href="https://zakon.rada.gov.ua/laws/show/1023-12" target="_blank">Law of Ukraine "On Consumer Protection"</a>
            </div>

            <p>In relations with the bank, the employee acts as a consumer of financial services, and therefore imposing a credit card together with a salary card without free expression of will violates their rights.</p>

            <p>Court practice confirms that the employer has the right to pay salary through a bank exclusively with the employee's written consent:</p>
            <ul>
                <li>Decision of the Babushkinskyi District Court of Dnipro dated 07.03.2018 in case No. 200/5617/15-ц</li>
                <li>Decision of the Illichivskyi City Court of Odesa Oblast dated 20.03.2019 in case No. 501/3065/18</li>
            </ul>

            <div class="legal-reference">
                <i class="fas fa-link"></i>
                <a href="https://reyestr.court.gov.ua/" target="_blank">Unified State Register of Court Decisions</a>
            </div>

            <p>In addition, pursuant to the provisions of the Law of Ukraine "On Banks and Banking Activity", services for opening accounts and issuing payment cards, including credit cards, are provided exclusively on a contractual basis, with the client's consent.</p>

            <div class="legal-reference">
                <i class="fas fa-link"></i>
                <a href="https://zakon.rada.gov.ua/laws/show/2121-14" target="_blank">Law of Ukraine "On Banks and Banking Activity"</a>
            </div>

            <div class="ai-conclusion">
                <i class="fas fa-gavel"></i>
                <strong>Conclusion:</strong> A bank does not have the right to forcibly issue a credit card alongside an employee's salary without their written consent. Any imposition of such financial products without the employee's free expression of will is recognised as a violation of labour and consumer rights, and the relevant transactions may be declared invalid.
            </div>
        `
        },
        'bank-control': {
            question: 'Does a bank have the right to control how a client uses their funds?',
            answer: `
            <p>In accordance with the provisions of Article 55 of the Law of Ukraine "On Banks and Banking Activity", a bank <strong>does not have the right</strong> to control how a client uses their funds, except in cases directly provided for by law or by the agreement between the bank and the client.</p>

            <div class="legal-reference">
                <i class="fas fa-link"></i>
                <a href="https://zakon.rada.gov.ua/laws/show/2121-14" target="_blank">Law of Ukraine "On Banks and Banking Activity"</a>
            </div>

            <p>An exception is also the situations where control is exercised within the framework of fulfilling legal requirements on prevention and counteraction of the legalisation (laundering) of proceeds obtained through crime (ML) and the financing of terrorism (TF).</p>

            <p>Pursuant to Article 1066 of the Civil Code of Ukraine, a bank does not have the right to impose restrictions on the client's use of funds if such restrictions are not provided for by the agreement or by law.</p>

            <div class="legal-reference">
                <i class="fas fa-link"></i>
                <a href="https://zakon.rada.gov.ua/laws/show/435-15" target="_blank">Civil Code of Ukraine</a>
            </div>

            <div class="highlight">
                <strong>General rule:</strong> the client independently disposes of their funds, while the bank performs the function of storing and accounting for them.
            </div>

            <p>However, special legislative norms in the area of financial monitoring grant banks the right and even the obligation to check a client's financial transactions in order to identify suspicious transactions.</p>

            <p>In particular, Article 15 of the Law of Ukraine on the prevention of ML/TF obliges primary financial monitoring entities (PFMEs), including banks, to refuse to maintain business relations or to conduct financial transactions if the client fails to provide the necessary documents or in cases where they are suspicious.</p>

            <div class="legal-reference">
                <i class="fas fa-link"></i>
                <a href="https://zakon.rada.gov.ua/laws/show/361-20" target="_blank">Law of Ukraine "On Prevention and Counteraction of the Legalisation of Proceeds"</a>
            </div>

            <p><strong>Indicators of suspicious transactions:</strong></p>
            <ul>
                <li>A constant zero balance despite large turnover</li>
                <li>Financing of activity through aid</li>
                <li>Conducting transactions for unusually large amounts</li>
                <li>The client's refusal to provide information necessary for verification</li>
                <li>Cancellation of a transaction after the bank's request for supporting documents</li>
            </ul>

            <div class="ai-conclusion">
                <i class="fas fa-gavel"></i>
                <strong>Conclusion:</strong>
                <ul>
                    <li>As a general rule, a bank <strong>does not control</strong> how a client uses their funds.</li>
                    <li>In cases specifically defined by law (prevention of ML/TF, fulfilment of financial monitoring norms or contractual provisions), a bank <strong>has the right</strong> to exercise control, to collect and verify information, and even to refuse to conduct transactions or to provide service.</li>
                </ul>
                <p>The bank's right to control how a client uses their funds exists only within the limits of specific legislative or contractual grounds and does not extend to ordinary transactions that show no signs of suspicion or risk.</p>
            </div>
        `
        }
    },
    internalDocsResults: [
        {
            source: 'PDF Document "Business Requirements Template"',
            sourceIcon: 'fas fa-file-pdf',
            title: 'Business Requirements Document (BRD) Template',
            excerpt: 'Official template for preparing a business requirements document. Contains all mandatory sections and completion examples...',
            date: '1 November 2025',
            relevance: '99%'
        },
        {
            source: 'Spreadsheet "Matrix of Mandatory Parameters"',
            sourceIcon: 'fas fa-table',
            title: 'Matrix of Mandatory Parameters for the BRD',
            excerpt: 'A list of all mandatory fields and parameters that a business requirements document must contain to pass review...',
            date: '15 October 2025',
            relevance: '97%'
        },
        {
            source: 'Folder "Consolidated Requirements for CR Preparation"',
            sourceIcon: 'fas fa-folder',
            title: 'Requirements for Preparing a Change Request',
            excerpt: 'A complete set of requirements and standards for preparing change requests (CR). Includes checklists and examples...',
            date: '5 September 2025',
            relevance: '94%'
        }
    ],
    faqData: [
        {
            id: 1,
            category: 'labor',
            question: 'How to properly arrange an employee\'s leave?',
            answer: `<p>Leave is arranged on the basis of the employee's application, which is submitted no later than 2 weeks before the start of the leave (unless otherwise provided by the collective agreement).</p>
        <p><strong>Procedure for arrangement:</strong></p>
        <ul>
            <li>The employee submits a written application addressed to the manager, indicating the type of leave, the start date and the duration</li>
            <li>The head of the unit approves the application taking into account the leave schedule</li>
            <li>The HR department issues an order granting the leave (form P-3)</li>
            <li>The accounting department calculates the leave pay no later than 3 days before the start of the leave</li>
        </ul>
        <p><strong>Legal basis:</strong> Art. 79 of the Labour Code of Ukraine, Law of Ukraine "On Leave"</p>`
        },
        {
            id: 2,
            category: 'labor',
            question: 'What documents are required for resignation at one\'s own request?',
            answer: `<p>For resignation at one's own request (Art. 38 of the Labour Code), the following documents and actions are required:</p>
        <p><strong>From the employee:</strong></p>
        <ul>
            <li>A written application for resignation at one's own request (submitted 2 weeks before the desired date of dismissal)</li>
            <li>A clearance sheet (if the company has one)</li>
        </ul>
        <p><strong>From the employer:</strong></p>
        <ul>
            <li>A dismissal order (form P-4)</li>
            <li>An entry in the employment record book about the dismissal</li>
            <li>A payslip with the calculation of all payments</li>
            <li>An income statement (form 4DF) for the last year</li>
        </ul>
        <p><strong>On the day of dismissal</strong>, the employer is obliged to issue the employment record book and make a full settlement, including compensation for unused leave.</p>`
        },
        {
            id: 3,
            category: 'labor',
            question: 'How is compensation for unused leave calculated?',
            answer: `<p>Compensation for unused leave is calculated in accordance with the Procedure for Calculating the Average Salary (CMU Resolution No. 100).</p>
        <p><strong>Calculation formula:</strong></p>
        <p><code>Compensation = Average daily salary × Number of days of unused leave</code></p>
        <p><strong>Calculation of the average daily salary:</strong></p>
        <ul>
            <li>The earnings for the last 12 calendar months before dismissal are taken</li>
            <li>The total earnings are divided by the number of calendar days (less holidays and non-working days)</li>
            <li>Earnings include: base salary, bonuses, allowances, surcharges</li>
            <li>Not included: sick pay, leave pay, financial aid</li>
        </ul>
        <p><strong>Important:</strong> Compensation is paid for all unused days of annual leave, regardless of the limitation period.</p>`
        },
        {
            id: 4,
            category: 'labor',
            question: 'What are the grounds for dismissing an employee at the employer\'s initiative?',
            answer: `<p>Pursuant to Art. 40 of the Labour Code of Ukraine, the employer may terminate the employment contract in the following cases:</p>
        <ul>
            <li><strong>Cl. 1</strong> - Changes in the organisation of production and labour, staff reduction</li>
            <li><strong>Cl. 2</strong> - Established unsuitability of the employee for the position held due to insufficient qualification or state of health</li>
            <li><strong>Cl. 3</strong> - Systematic failure by the employee to perform duties without valid reasons (where there is a prior disciplinary penalty)</li>
            <li><strong>Cl. 4</strong> - Absenteeism without valid reasons (absence of more than 3 hours during the working day)</li>
            <li><strong>Cl. 5</strong> - Failure to appear at work for more than 4 months due to temporary incapacity</li>
            <li><strong>Cl. 7</strong> - Appearing at work in a state of intoxication</li>
            <li><strong>Cl. 8</strong> - Committing theft of the employer's property</li>
        </ul>
        <p><strong>Important:</strong> Dismissal of pregnant women, women with children under 3 years of age (under 6 years in certain cases), and single mothers is not permitted.</p>`
        },
        {
            id: 5,
            category: 'labor',
            question: 'How to arrange the transfer of an employee to another position?',
            answer: `<p>The transfer of an employee to another position is regulated by Art. 32-34 of the Labour Code of Ukraine and may be permanent or temporary.</p>
        <p><strong>Permanent transfer:</strong></p>
        <ul>
            <li>Requires the employee's written consent</li>
            <li>Arranged by the employee's application or the employer's proposal</li>
            <li>An order on the transfer is issued</li>
            <li>Changes are made to the employment record book and the personal card</li>
        </ul>
        <p><strong>Temporary transfer (up to 1 month):</strong></p>
        <ul>
            <li>Possible without the employee's consent in cases of downtime or replacement of an absent employee</li>
            <li>Remuneration - not lower than the average earnings</li>
        </ul>
        <p><strong>Prohibited:</strong> transferring an employee to work that is contraindicated for them on health grounds.</p>`
        },
        {
            id: 6,
            category: 'contracts',
            question: 'What mandatory details must a contract contain?',
            answer: `<p>Pursuant to Art. 638 of the Civil Code of Ukraine, a contract is deemed concluded if the parties have reached agreement on all essential terms:</p>
        <p><strong>Mandatory details:</strong></p>
        <ul>
            <li><strong>Preamble:</strong> the full names of the parties, their legal form, the full names of the authorised persons, and the documents on the basis of which they act</li>
            <li><strong>Subject of the contract:</strong> a specific description of the goods, works or services</li>
            <li><strong>Price and settlement procedure:</strong> cost, currency, terms and method of payment</li>
            <li><strong>Performance deadlines:</strong> specific dates or periods</li>
            <li><strong>Rights and obligations of the parties:</strong> a detailed list of mutual obligations</li>
            <li><strong>Liability:</strong> penalties for non-performance or improper performance</li>
            <li><strong>Force majeure:</strong> circumstances of insuperable force</li>
            <li><strong>Dispute resolution procedure:</strong> claims procedure, jurisdiction</li>
            <li><strong>Details of the parties:</strong> legal address, USREOU code, banking details</li>
            <li><strong>Signatures and seals</strong> of the authorised representatives</li>
        </ul>`
        },
        {
            id: 7,
            category: 'contracts',
            question: 'How to properly terminate a contract unilaterally?',
            answer: `<p>Unilateral termination of a contract is regulated by Art. 651-654 of the Civil Code of Ukraine and is possible in cases defined by law or by the contract.</p>
        <p><strong>Grounds for unilateral termination:</strong></p>
        <ul>
            <li>A material breach of the contract terms by the other party</li>
            <li>A material change of circumstances (Art. 652 of the Civil Code)</li>
            <li>Cases directly provided for by the contract or by law</li>
        </ul>
        <p><strong>Termination procedure:</strong></p>
        <ol>
            <li>Send a written notice to the other party by registered letter with a list of enclosures</li>
            <li>State the grounds for termination and a reference to the clause of the contract / norm of law</li>
            <li>Indicate the date from which the contract is deemed terminated</li>
            <li>Describe the procedure for mutual settlements</li>
            <li>Retain proof of sending the notice</li>
        </ol>
        <p><strong>Important:</strong> The contract is deemed terminated from the moment the other party receives the notice, unless otherwise provided by the contract.</p>`
        },
        {
            id: 8,
            category: 'contracts',
            question: 'How to conclude a contract with a non-resident?',
            answer: `<p>The conclusion of foreign economic contracts is regulated by the Law of Ukraine "On Foreign Economic Activity" and by currency legislation.</p>
        <p><strong>Features of foreign-economic-activity contracts:</strong></p>
        <ul>
            <li>Mandatory written form</li>
            <li>May be concluded in Ukrainian, a foreign language, or two languages</li>
            <li>Choice of applicable law and jurisdiction</li>
            <li>Currency of the price and currency of payment</li>
        </ul>
        <p><strong>Mandatory terms:</strong></p>
        <ul>
            <li>Delivery basis under the Incoterms rules (EXW, FOB, CIF, etc.)</li>
            <li>Customs clearance procedure</li>
            <li>Liability for breach of currency deadlines</li>
            <li>Arbitration clause (ICC or ICAC recommended)</li>
        </ul>
        <p><strong>Currency control:</strong> the maximum settlement period is 365 days. For a breach - a penalty of 0.3% for each day of delay.</p>`
        },
        {
            id: 9,
            category: 'contracts',
            question: 'How to draw up a supplementary agreement to a contract?',
            answer: `<p>A supplementary agreement is a document that amends, supplements, or terminates the operation of the main contract.</p>
        <p><strong>Requirements for preparation:</strong></p>
        <ul>
            <li>Concluded in the same form as the main contract</li>
            <li>Must contain a reference to the number and date of the main contract</li>
            <li>Clearly indicate which clauses are being amended and the new wording</li>
            <li>Signed by the authorised representatives of both parties</li>
        </ul>
        <p><strong>Structure of a supplementary agreement:</strong></p>
        <ol>
            <li>Preamble with a reference to the main contract</li>
            <li>List of amendments: "Clause X shall be set out in the following wording..."</li>
            <li>A provision that the other terms remain unchanged</li>
            <li>Date of entry into force</li>
            <li>Details and signatures of the parties</li>
        </ol>
        <p><strong>Important:</strong> A supplementary agreement is an integral part of the main contract.</p>`
        },
        {
            id: 10,
            category: 'corporate',
            question: 'How to hold a general meeting of shareholders?',
            answer: `<p>The procedure for holding a general meeting is regulated by the Law of Ukraine "On Joint-Stock Companies".</p>
        <p><strong>Stages of preparation:</strong></p>
        <ol>
            <li><strong>The decision to convene</strong> is taken by the supervisory board (60 days before the meeting)</li>
            <li><strong>Notification of shareholders</strong> - no later than 30 days before the date of the meeting</li>
            <li><strong>Registration of participants</strong> on the record date (10 business days before the meeting)</li>
        </ol>
        <p><strong>Mandatory documents:</strong></p>
        <ul>
            <li>Agenda and draft resolutions</li>
            <li>List of shareholders entitled to participate</li>
            <li>Rules of procedure for the meeting</li>
            <li>Voting ballots</li>
        </ul>
        <p><strong>Quorum:</strong> the meeting is competent if shareholders who collectively hold more than 50% of the voting shares have registered.</p>
        <p><strong>The minutes</strong> are signed by the chairperson and secretary of the meeting within 10 business days.</p>`
        },
        {
            id: 11,
            category: 'corporate',
            question: 'What documents are required to register amendments to the charter?',
            answer: `<p>For the state registration of amendments to the charter, the following package of documents must be submitted to the state registrar:</p>
        <p><strong>Mandatory documents:</strong></p>
        <ul>
            <li>An application for the state registration of amendments (form 3)</li>
            <li>A copy of the original or a notarised copy of the decision of the authorised body (minutes of the general meeting / decision of the founder)</li>
            <li>A new version of the charter or amendments to it (two copies)</li>
            <li>A document on payment of the administrative fee</li>
        </ul>
        <p><strong>Additionally (depending on the amendments):</strong></p>
        <ul>
            <li>When changing the manager - a copy of the new manager's passport</li>
            <li>When changing the location - a document confirming the right to the premises</li>
            <li>When changing the types of activity - an updated list of NACE codes</li>
        </ul>
        <p><strong>Deadlines:</strong> registration is carried out within 24 hours (excluding weekends) from the moment the full package of documents is submitted.</p>`
        },
        {
            id: 12,
            category: 'corporate',
            question: 'How to properly draw up a decision of the sole member of an LLC?',
            answer: `<p>In a company with a single member, decisions are taken individually and are drawn up in the form of a decision of the sole member.</p>
        <p><strong>Mandatory details:</strong></p>
        <ul>
            <li>Document title: "Decision of the Sole Member of [name] LLC"</li>
            <li>Date and place of the decision</li>
            <li>Full name (designation) of the member, size of the share</li>
            <li>Agenda</li>
            <li>The substance of the decisions taken, with a reference to the charter and the law</li>
            <li>Signature of the member (for a legal entity - of the authorised representative)</li>
        </ul>
        <p><strong>Matters requiring a decision of the sole member:</strong></p>
        <ul>
            <li>Approval of annual reporting</li>
            <li>Distribution of profit</li>
            <li>Appointment/dismissal of the director</li>
            <li>Amendments to the charter</li>
            <li>Increase/decrease of the authorised capital</li>
        </ul>`
        },
        {
            id: 13,
            category: 'compliance',
            question: 'How to conduct a counterparty check before concluding a contract?',
            answer: `<p>A comprehensive counterparty check (Due Diligence) includes an analysis of legal status, financial condition, and reputation.</p>
        <p><strong>1. Verification of registration data:</strong></p>
        <ul>
            <li>Unified State Register of Legal Entities (usr.minjust.gov.ua)</li>
            <li>Information on founders, manager, authorised capital</li>
            <li>Main types of activity (NACE codes)</li>
            <li>Presence of information on termination</li>
        </ul>
        <p><strong>2. Check against sanctions and restrictions:</strong></p>
        <ul>
            <li>NSDC of Ukraine sanctions lists</li>
            <li>OFAC (USA) and EU lists</li>
            <li>Checking beneficiaries for connections with sanctioned persons</li>
        </ul>
        <p><strong>3. Court cases and enforcement proceedings:</strong></p>
        <ul>
            <li>Unified Register of Court Decisions (reyestr.court.gov.ua)</li>
            <li>Register of Debtors (erb.minjust.gov.ua)</li>
        </ul>
        <p><strong>4. Financial condition:</strong></p>
        <ul>
            <li>Balance sheet and statement of financial results</li>
            <li>Absence of tax debt</li>
        </ul>`
        },
        {
            id: 14,
            category: 'compliance',
            question: 'What are the signs of a suspicious financial transaction?',
            answer: `<p>Pursuant to the Law of Ukraine "On Prevention and Counteraction of the Legalisation of Proceeds", transactions with the following signs are suspicious:</p>
        <p><strong>Indicators of suspicion:</strong></p>
        <ul>
            <li>Transactions for amounts significantly exceeding those usual for the client</li>
            <li>A complex or unusual structure of transactions without an obvious economic purpose</li>
            <li>Regular transactions with counterparties from higher-risk jurisdictions</li>
            <li>Splitting transactions to avoid threshold values</li>
            <li>Inconsistency of transactions with the client's declared activity</li>
            <li>Refusal to provide documents on the origin of funds</li>
            <li>Use of front persons or fictitious companies</li>
            <li>Cash transactions for large amounts without economic justification</li>
        </ul>
        <p><strong>Obligations upon detection:</strong></p>
        <ul>
            <li>Stop the transaction</li>
            <li>Notify the responsible officer</li>
            <li>Document the circumstances</li>
            <li>If necessary - notify the State Financial Monitoring Service</li>
        </ul>`
        },
        {
            id: 15,
            category: 'compliance',
            question: 'How to organise personal data protection in accordance with the GDPR?',
            answer: `<p>When working with the personal data of EU citizens, it is necessary to comply with the requirements of the GDPR.</p>
        <p><strong>Main principles of the GDPR:</strong></p>
        <ul>
            <li><strong>Lawfulness</strong> - processing on the basis of consent or legitimate interest</li>
            <li><strong>Purpose limitation</strong> - data is collected for specific purposes</li>
            <li><strong>Minimisation</strong> - collect only the necessary data</li>
            <li><strong>Accuracy</strong> - keep the data up to date</li>
            <li><strong>Storage limitation</strong> - delete after the purpose is achieved</li>
        </ul>
        <p><strong>Mandatory measures:</strong></p>
        <ul>
            <li>Appoint a Data Protection Officer (DPO) for large-scale processing</li>
            <li>Maintain a register of data processing operations</li>
            <li>Ensure technical protection (encryption, access control)</li>
            <li>Conclude a DPA (Data Processing Agreement) with contractors</li>
            <li>Have a data breach response procedure (72 hours to notify)</li>
        </ul>
        <p><strong>Fines:</strong> up to EUR 20 million or 4% of annual turnover.</p>`
        },
        {
            id: 16,
            category: 'compliance',
            question: 'What are the requirements for storing documents in a company?',
            answer: `<p>Document retention periods are defined by the List of Standard Documents approved by Order of the Ministry of Justice No. 578/5.</p>
        <p><strong>Retention periods:</strong></p>
        <ul>
            <li><strong>Permanently:</strong> constituent documents, minutes of meetings, annual reporting</li>
            <li><strong>75 years:</strong> employees' personal files, orders on personnel</li>
            <li><strong>10 years:</strong> contracts after the expiry of their term</li>
            <li><strong>5 years:</strong> accounting documents, tax reporting</li>
            <li><strong>3 years:</strong> primary documents, correspondence with counterparties</li>
        </ul>
        <p><strong>Storage requirements:</strong></p>
        <ul>
            <li>Documents are stored in an archive with restricted access</li>
            <li>Electronic documents - with an electronic signature and backup copies</li>
            <li>Ensuring protection against damage and unauthorised access</li>
        </ul>
        <p><strong>Destruction:</strong> carried out on the basis of an expert commission's act after the expiry of the retention period.</p>`
        }
    ],
    ticketsData: [
        { id: 'TK-2026-0092', title: 'Question regarding salary indexation', from: 'Mariia Sydorenko', department: 'Accounting', status: 'new', priority: 'high', date: '03.02.2026 10:15', category: 'labor' },
        { id: 'TK-2026-0091', title: 'Counterparty check of Budservis LLC', from: 'Petro Ivanenko', department: 'Procurement', status: 'new', priority: 'medium', date: '03.02.2026 09:30', category: 'compliance' },
        { id: 'TK-2026-0090', title: 'Approval of the premises lease agreement', from: 'Olena Kovalchuk', department: 'Administration', status: 'in-progress', priority: 'high', date: '02.02.2026 16:45', category: 'contracts' },
        { id: 'TK-2026-0089', title: 'Consultation on dismissing an employee', from: 'Ivan Kovalenko', department: 'HR', status: 'in-progress', priority: 'urgent', date: '02.02.2026 14:20', category: 'labor' },
        { id: 'TK-2026-0088', title: 'Lawsuit from a former employee', from: 'Nataliia Petrenko', department: 'HR', status: 'in-progress', priority: 'urgent', date: '02.02.2026 11:00', category: 'court' },
        { id: 'TK-2026-0087', title: 'Question about sick leave payments', from: 'Serhii Melnyk', department: 'Production', status: 'waiting', priority: 'medium', date: '01.02.2026 15:30', category: 'labor' },
        { id: 'TK-2026-0086', title: 'Registration of amendments to the charter', from: 'Director', department: 'Management', status: 'resolved', priority: 'high', date: '01.02.2026 10:00', category: 'corporate', resolvedDate: '02.02.2026 16:30', resolvedBy: 'Olena Petrenko', resolution: 'The amendments to the charter have been prepared and submitted to the state registrar. The registration has been completed and an extract from the USR has been obtained.' },
        { id: 'TK-2026-0085', title: 'Verification of the supplier\'s licence', from: 'Andrii Shevchenko', department: 'Procurement', status: 'resolved', priority: 'low', date: '31.01.2026 14:15', category: 'compliance', resolvedDate: '01.02.2026 11:45', resolvedBy: 'Olena Petrenko', resolution: 'The licence of the supplier SFERA-M LLC has been verified. The licence is valid until 31.12.2026. No issues were identified, and the counterparty has been admitted to participate in the tender.' }
    ],
    dispatcherCategories: [
        { id: 'compliance', name: 'Compliance checks', icon: 'fas fa-shield-alt', color: '#e31e24', count: 3 },
        { id: 'court', name: 'Court cases', icon: 'fas fa-gavel', color: '#4b5563', count: 2 },
        { id: 'labor', name: 'Labour relations', icon: 'fas fa-users', color: '#b3121d', count: 5 },
        { id: 'contracts', name: 'Contract work', icon: 'fas fa-file-contract', color: '#6b7280', count: 4 }
    ],
    dataSources: {
        internal: [
            { id: 1, name: 'SharePoint "Legal Documents"', url: '//sharepoint/legal', status: 'active', lastSync: '03.02.2026 08:00' },
            { id: 2, name: 'ITSM Database', url: '//itsm.company.ua', status: 'active', lastSync: '03.02.2026 07:45' },
            { id: 3, name: 'Insight Knowledge Base', url: '//insight.company.ua', status: 'active', lastSync: '03.02.2026 07:30' },
            { id: 4, name: 'Contracts Archive', url: '//sharepoint/contracts', status: 'active', lastSync: '02.02.2026 23:00' }
        ],
        external: [
            { id: 5, name: 'Unified State Register', url: 'https://usr.minjust.gov.ua', status: 'active', lastSync: '03.02.2026 06:00' },
            { id: 6, name: 'Court Decisions Register', url: 'https://reyestr.court.gov.ua', status: 'active', lastSync: '03.02.2026 05:00' },
            { id: 7, name: 'NSDC Sanctions Lists', url: 'https://sanctions.nsdc.gov.ua', status: 'active', lastSync: '03.02.2026 04:00' },
            { id: 8, name: 'Laws of Ukraine', url: 'https://zakon.rada.gov.ua', status: 'active', lastSync: '03.02.2026 03:00' }
        ]
    }
};
