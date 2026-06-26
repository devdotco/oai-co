export interface ResourceData {
  slug: string;
  name: string;
  tagline: string;
  category: "tool" | "guide" | "proof";
  icon: string;
  description: string;
  heroDescription: string;
  content: { heading: string; body: string }[];
  highlights: string[];
  faqs: { question: string; answer: string }[];
  seoTitle: string;
  seoDescription: string;
}

export const resources: ResourceData[] = [
  {
    slug: "ai-readiness-checklist",
    name: "AI Readiness Checklist",
    tagline: "Know exactly where you stand before you invest",
    category: "tool",
    icon: "✅",
    description: "A structured assessment tool for evaluating your organization's readiness to deploy AI across five dimensions: data, infrastructure, process, people, and governance.",
    heroDescription: "Most AI initiatives underdeliver because organizations aren't ready to support them. The AI Readiness Checklist gives you an honest picture of where your organization stands — and what needs to be in place before you invest.",
    content: [
      {
        heading: "Why AI Readiness Matters",
        body: "Deploying AI before your organization is ready creates expensive problems: poor data quality undermines agent performance, undefined processes can't be automated reliably, and teams without AI literacy resist adoption. The readiness assessment prevents these failures by identifying gaps before they become blockers.",
      },
      {
        heading: "The Five Readiness Dimensions",
        body: "Our AI Readiness Checklist evaluates five critical dimensions: Data Readiness (quality, accessibility, and governance of your business data), Infrastructure Readiness (your technology stack and integration capabilities), Process Readiness (how well-defined and documented your workflows are), People Readiness (AI literacy and change management capacity), and Governance Readiness (your policies and oversight frameworks for AI use).",
      },
      {
        heading: "How to Use This Assessment",
        body: "Work through the checklist with your leadership team — it takes approximately 2-3 hours to complete thoroughly. Score each dimension on a 1-5 scale. The output gives you a readiness score by dimension, identifies your highest-priority gaps, and informs the scope and sequence of your AI implementation roadmap.",
      },
      {
        heading: "What Comes Next",
        body: "Your AI Readiness Assessment results inform your AI Roadmap — the sequence of initiatives that builds on your strengths and addresses your gaps in the right order. Most organizations find 2-3 dimensions with clear improvement opportunities and 2-3 dimensions where they're ready to move immediately.",
      },
    ],
    highlights: [
      "50+ evaluation criteria across five readiness dimensions",
      "Scoring rubric with maturity-level descriptions",
      "Gap prioritization framework",
      "Implementation sequencing guidance",
      "Benchmark comparisons to middle market peers",
      "Recommended next steps for each readiness level",
    ],
    faqs: [
      { question: "How long does the AI Readiness Assessment take?", answer: "A thorough assessment takes 2-3 hours for a leadership team to complete. We recommend completing it in a structured session rather than individually." },
      { question: "Should we complete this before talking to OAI?", answer: "Yes. Completing the self-assessment before your initial consultation helps us understand your starting point and makes the conversation more productive." },
      { question: "What's a good readiness score to start deployment?", answer: "There's no minimum threshold — every organization starts somewhere. The assessment identifies your readiest dimensions and highest-impact opportunities to sequence your roadmap intelligently." },
      { question: "Is this the same as the AI Maturity Model?", answer: "Related but different. The Readiness Checklist evaluates your current state across five dimensions. The AI Maturity Model describes where you'll be after successful deployment across five stages." },
    ],
    seoTitle: "AI Readiness Checklist — Assess Your Organization | OAI.co",
    seoDescription: "Evaluate your organization's AI readiness across data, infrastructure, process, people, and governance dimensions before you invest.",
  },
  {
    slug: "ai-roi-calculator",
    name: "AI ROI Calculator",
    tagline: "Build the business case for your AI investment",
    category: "tool",
    icon: "🧮",
    description: "A structured ROI modeling tool for quantifying the financial impact of AI automation across business functions — with industry benchmarks and adjustable assumptions.",
    heroDescription: "AI investments require business cases. The AI ROI Calculator helps you build a defensible financial model for your highest-priority AI initiatives — with benchmarks from middle market deployments.",
    content: [
      {
        heading: "Building an Honest AI Business Case",
        body: "Most AI ROI estimates are either too optimistic (vendor projections) or too conservative (early skepticism). The AI ROI Calculator uses realistic input assumptions based on observed outcomes from middle market deployments — giving you a model your CFO and board will take seriously.",
      },
      {
        heading: "What the Calculator Measures",
        body: "The calculator models three categories of financial impact: labor cost reduction (hours eliminated or redeployed from operational tasks), revenue impact (faster sales cycles, higher win rates, improved retention), and error cost reduction (AP errors, compliance fines, customer service escalations). Each category uses industry-specific benchmarks with adjustable inputs.",
      },
      {
        heading: "Implementation Cost Modeling",
        body: "The business case includes full implementation and ongoing costs: platform fees, implementation services, internal IT and operations time, and ongoing management. Total cost of ownership over a 3-year horizon is compared to projected benefits to calculate payback period and ROI.",
      },
      {
        heading: "How to Present This to Your Board",
        body: "The calculator outputs a structured summary designed for board and investor presentation: projected benefits by category, implementation timeline and costs, sensitivity analysis on key assumptions, and phased ROI as deployments mature. Start with conservative assumptions and show upside scenarios separately.",
      },
    ],
    highlights: [
      "Pre-built models for 12 common AI use cases",
      "Industry-specific benchmarks for ROI assumptions",
      "3-year total cost of ownership modeling",
      "Sensitivity analysis on key variables",
      "Board-ready output summary",
      "Payback period and IRR calculations",
    ],
    faqs: [
      { question: "How accurate are the ROI projections?", answer: "The calculator uses conservative benchmarks from actual middle market deployments. Actual results vary based on your baseline process maturity, technology stack, and adoption quality." },
      { question: "Can we adjust the assumptions?", answer: "Yes. Every input is adjustable. We recommend starting with the default benchmarks and adjusting based on your current process metrics and cost data." },
      { question: "Does this account for implementation costs?", answer: "Yes. Implementation services, internal time, and ongoing platform costs are included in the cost model. The ROI is calculated on a net basis after all costs." },
      { question: "What if we want help building a custom business case?", answer: "We build custom ROI models for clients as part of our Executive AI Strategy engagement — with your specific data, cost structure, and strategic priorities." },
    ],
    seoTitle: "AI ROI Calculator — Build Your AI Business Case | OAI.co",
    seoDescription: "Model the financial impact of AI automation with industry benchmarks. Build a defensible business case for your AI investment.",
  },
  {
    slug: "agent-opportunity-scorecard",
    name: "Agent Opportunity Scorecard",
    tagline: "Rank your AI agent opportunities by impact",
    category: "tool",
    icon: "📋",
    description: "A structured evaluation framework for scoring and prioritizing AI agent deployment opportunities across your business — by ROI potential, implementation complexity, and strategic fit.",
    heroDescription: "Not all AI agent opportunities are created equal. The Agent Opportunity Scorecard helps you evaluate and rank every agent opportunity on your list — so you build in the right order and maximize early ROI.",
    content: [
      {
        heading: "Why Opportunity Prioritization Matters",
        body: "Companies that try to deploy AI everywhere at once rarely succeed anywhere. The Agent Opportunity Scorecard forces the discipline of evaluating each opportunity on consistent criteria — so your first deployments deliver visible ROI and build organizational confidence for the broader rollout.",
      },
      {
        heading: "The Scoring Framework",
        body: "Each agent opportunity is scored across four dimensions: Business Impact (hours saved, revenue impact, error cost reduction), Implementation Complexity (data availability, process definition, integration requirements), Adoption Likelihood (team readiness, change management requirements, executive sponsorship), and Strategic Fit (alignment with company priorities and competitive differentiation).",
      },
      {
        heading: "Using Your Scorecard Results",
        body: "Scored opportunities cluster naturally into four categories: Quick Wins (high impact, low complexity), Strategic Investments (high impact, higher complexity), Low Priority (low impact regardless of complexity), and Capability Builders (lower immediate impact but foundational for future agents). Sequence Quick Wins first, plan Strategic Investments in parallel, and park the rest.",
      },
      {
        heading: "From Scorecard to Roadmap",
        body: "The Opportunity Scorecard is the input to your AI Roadmap — a phased implementation plan that sequences agents for maximum early impact, builds foundational capabilities, and maps out the resource requirements for each phase. Most clients run the scorecard as part of their Executive AI Strategy engagement.",
      },
    ],
    highlights: [
      "40-point scoring rubric across four dimensions",
      "Opportunity clustering into action categories",
      "Implementation sequence recommendations",
      "Resource requirement estimation",
      "Dependency mapping between opportunities",
      "Template for leadership presentation",
    ],
    faqs: [
      { question: "How many opportunities should we evaluate?", answer: "Evaluate every meaningful AI opportunity you've identified — typically 10-30 for a middle market company. The scorecard is most valuable when it forces comparison across your full opportunity set." },
      { question: "Who should complete the scorecard?", answer: "The scorecard is most accurate when completed collaboratively by department leaders and operations — they know which processes are painful and which are well-defined." },
      { question: "What's the difference between this and the AI Readiness Checklist?", answer: "The Readiness Checklist evaluates your organization's overall capability to deploy AI. The Opportunity Scorecard evaluates each specific agent deployment opportunity. Use both together." },
      { question: "Can we use this for non-agent AI opportunities?", answer: "Yes. The framework works for any AI implementation opportunity — not just AI agents. Data analytics, reporting, content, and decision support use cases can all be scored." },
    ],
    seoTitle: "Agent Opportunity Scorecard — Prioritize AI Agent Deployments | OAI.co",
    seoDescription: "Score and prioritize your AI agent opportunities with a structured framework. Build in the right order for maximum ROI.",
  },
  {
    slug: "operational-os-guide",
    name: "Operational OS™ Guide",
    tagline: "The complete guide to building your AI operating system",
    category: "guide",
    icon: "📚",
    description: "A comprehensive guide to the Operational OS™ framework — how it works, how to implement it, and how middle market companies use it to build an AI-enabled business.",
    heroDescription: "Operational OS™ is more than a product — it's a way of thinking about how AI changes the way your company operates. This guide explains the framework, the architecture, and the implementation approach in plain language.",
    content: [
      {
        heading: "What Is an Operational OS?",
        body: "An operating system for your business is the layer that connects your people, workflows, data, tools, and decisions into one coherent, intelligent system. Just as a computer's OS manages hardware and software resources, your Operational OS manages your business's operational resources — with AI as the intelligence layer that learns, adapts, and improves over time.",
      },
      {
        heading: "The Five Layers of Operational OS™",
        body: "Operational OS™ is built on five interconnected layers: the Knowledge Layer (all your business information, structured and searchable), the Workflow Layer (your processes, automated and monitored), the Agent Layer (your AI workforce, executing repeatable work), the Data Layer (your systems, integrated and normalized), and the Decision Layer (intelligence surfaced to the right people at the right time).",
      },
      {
        heading: "How Agents Fit Into the OS",
        body: "Agents are the active components of the Operational OS. They're specialized programs that execute specific workflows, answer questions, generate content, process documents, and take action on your behalf. The power of the OS comes from connecting agents — so that the output of one agent becomes the input of another, and information flows automatically through your operation.",
      },
      {
        heading: "Implementation Approach",
        body: "Operational OS™ is built in phases, not deployed all at once. We typically start with 2-3 high-impact agents in one department, demonstrate value, and expand systematically across the organization. Each implementation begins with your AI Readiness Assessment, followed by an AI Roadmap, and executed through our 6-phase deployment methodology.",
      },
    ],
    highlights: [
      "Complete Operational OS™ architecture overview",
      "Five-layer framework explained with examples",
      "Agent deployment patterns for each department",
      "Implementation methodology overview",
      "Governance and security framework",
      "AI Maturity Model progression guide",
    ],
    faqs: [
      { question: "Is this guide technical or business-focused?", answer: "Both. The guide is written for business executives who want to understand what's happening technically without getting lost in implementation detail. We explain architecture in business terms." },
      { question: "How does the Operational OS™ differ from traditional automation?", answer: "Traditional automation executes fixed rules. Operational OS™ applies AI reasoning to variable situations — understanding context, handling exceptions, and improving over time. It's the difference between a script and an employee." },
      { question: "How long does it take to build a complete Operational OS?", answer: "Most middle market companies build their initial Operational OS over 12-18 months — starting with Quick Win deployments in months 1-4 and expanding systematically. The OS evolves as the business does." },
      { question: "Where can I learn more about specific components?", answer: "Each component of the Operational OS has dedicated documentation. Start with the AI Architecture page, then explore the specific agent and solution pages for the areas most relevant to your business." },
    ],
    seoTitle: "Operational OS™ Guide — Complete Implementation Guide | OAI.co",
    seoDescription: "The complete guide to building an AI operating system for your company. Architecture, implementation, agents, and governance explained.",
  },
  {
    slug: "executive-ai-playbook",
    name: "Executive AI Playbook",
    tagline: "Lead your company's AI transformation",
    category: "guide",
    icon: "🎯",
    description: "A practical guide for CEOs, COOs, and executive teams on leading AI transformation in middle market companies — covering strategy, governance, culture, and execution.",
    heroDescription: "AI transformation is a leadership challenge before it's a technology challenge. The Executive AI Playbook gives you the frameworks, questions, and approaches that distinguish successful AI leaders from those whose initiatives stall.",
    content: [
      {
        heading: "The Executive's Role in AI Transformation",
        body: "Most AI initiatives fail at the leadership level — not because of poor technology, but because executives underestimate their role in AI transformation. This playbook is built around the insight that your behavior, priorities, and decisions as a leader determine whether AI becomes a strategic advantage or an expensive experiment.",
      },
      {
        heading: "Setting AI Strategy That Sticks",
        body: "AI strategy that sticks connects AI investments directly to business outcomes your leadership team is accountable for. It names specific use cases, designates owners, sets measurable targets, and has a clear decision framework for prioritization. Vague AI vision doesn't move organizations — specific operational targets do.",
      },
      {
        heading: "Building AI Governance",
        body: "AI governance determines who approves AI use cases, who monitors agent performance, how errors and failures are handled, and how AI decisions are documented. Without governance, AI initiatives proliferate uncontrolled — creating technical debt, compliance risk, and organizational confusion. With governance, AI scales systematically.",
      },
      {
        heading: "Managing the Cultural Dimension",
        body: "People are more concerned about AI than their managers realize. The playbook covers how to communicate transparently about AI's role, how to position AI as augmentation rather than replacement, and how to build an organizational culture where people embrace AI as a tool that makes their work more meaningful.",
      },
    ],
    highlights: [
      "AI strategy framework for executive teams",
      "Governance design principles and templates",
      "Change management and communication guidance",
      "AI investment decision criteria",
      "Team structure for AI-enabled organizations",
      "Common executive mistakes and how to avoid them",
    ],
    faqs: [
      { question: "Is this guide for executives who know nothing about AI?", answer: "Yes. The playbook assumes business knowledge and strategic thinking, not technical AI expertise. We translate the technology into leadership terms." },
      { question: "What's the most common mistake executives make with AI?", answer: "Delegating AI strategy entirely to IT or a 'Chief AI Officer' without executive ownership of business outcomes. AI transformation requires executive accountability for results, not just technology investment." },
      { question: "How do I handle board questions about our AI strategy?", answer: "The playbook includes a board communication framework — how to explain your AI strategy, governance approach, investment rationale, and progress metrics to a board audience." },
      { question: "What should our first AI governance policy cover?", answer: "Start with three things: acceptable use guidelines, data privacy requirements for AI systems, and an approval process for new AI agent deployments. More comprehensive governance follows as deployments mature." },
    ],
    seoTitle: "Executive AI Playbook — Lead Your AI Transformation | OAI.co",
    seoDescription: "A practical guide for executives leading AI transformation. Strategy, governance, culture, and execution for middle market leaders.",
  },
  {
    slug: "ai-implementation-roadmap",
    name: "AI Implementation Roadmap",
    tagline: "Build your AI capability in the right sequence",
    category: "guide",
    icon: "🗺️",
    description: "A template and guide for building a phased AI implementation roadmap — sequencing initiatives for maximum early ROI while building the organizational capabilities needed for long-term transformation.",
    heroDescription: "The AI Implementation Roadmap is the bridge between your AI strategy and your first deployed agent. It sequences initiatives, defines phases, allocates resources, and sets the success metrics that keep your AI transformation on track.",
    content: [
      {
        heading: "Why Sequence Matters",
        body: "AI initiatives have dependencies. Data quality improvements unlock certain agent types. Process definition is prerequisite to process automation. Building in the wrong sequence creates expensive rework and organizational frustration. The roadmap ensures each phase builds on the one before it.",
      },
      {
        heading: "The Six Phases of Operational OS™ Implementation",
        body: "Our standard implementation follows six phases: Assess (AI Readiness Assessment and opportunity identification), Architect (Operational OS™ design and integration mapping), Build (agent development and integration), Adopt (rollout with training and change management), Operate (performance monitoring and optimization), and Optimize (continuous improvement and expansion).",
      },
      {
        heading: "Resource Planning for AI Implementation",
        body: "AI implementation requires four types of resources: technology (platform and integration infrastructure), external expertise (AI design, development, and change management), internal capacity (operations, IT, and functional leaders for requirements and testing), and ongoing management (monitoring, governance, and optimization). The roadmap template helps you plan all four.",
      },
      {
        heading: "Measuring AI Implementation Progress",
        body: "AI implementation success should be measured against business outcomes — not deployment milestones. The roadmap template includes a metrics framework: leading indicators (adoption, usage, data quality) and lagging indicators (cost savings, productivity improvements, error reduction) for each initiative.",
      },
    ],
    highlights: [
      "6-phase Operational OS™ implementation model",
      "Initiative sequencing framework",
      "Resource requirement estimation templates",
      "Success metrics by initiative type",
      "Risk and dependency management",
      "Stakeholder communication plan template",
    ],
    faqs: [
      { question: "How long should a typical AI roadmap span?", answer: "Most middle market AI roadmaps cover 12-18 months. Longer horizons lose specificity; shorter ones miss the build-up phases that make advanced deployments possible." },
      { question: "How do we handle roadmap changes as priorities shift?", answer: "The roadmap is a living document, not a contract. We recommend quarterly roadmap reviews to reprioritize based on outcomes delivered, business priority changes, and new opportunities." },
      { question: "Should we try to deploy multiple agents simultaneously?", answer: "Early in the journey, focused sequential deployment delivers better outcomes than parallel sprawl. Once your AI operations infrastructure is established, parallel deployments across departments become more feasible." },
      { question: "How does the roadmap connect to our annual planning cycle?", answer: "AI roadmap phases should align with fiscal year planning cycles. AI investments are included in annual budgets with quarterly OKRs tied to specific deployment milestones." },
    ],
    seoTitle: "AI Implementation Roadmap — Phase Your AI Deployment | OAI.co",
    seoDescription: "Build a phased AI implementation roadmap that sequences initiatives for maximum ROI and builds organizational AI capability systematically.",
  },
  {
    slug: "agentic-ai-buyers-guide",
    name: "Agentic AI Buyer's Guide",
    tagline: "Buy AI confidently — not on hype",
    category: "guide",
    icon: "🔍",
    description: "A practical guide for evaluating and selecting AI agent platforms, vendors, and implementation partners — with questions to ask, criteria to evaluate, and red flags to avoid.",
    heroDescription: "The AI market is full of noise. Every vendor claims transformative results. The Agentic AI Buyer's Guide gives you the framework to evaluate AI solutions on substance — separating genuine capability from impressive demos.",
    content: [
      {
        heading: "The State of the AI Agent Market",
        body: "The agentic AI market is maturing rapidly, but buyer sophistication lags vendor sophistication. Most companies are evaluating AI solutions for the first time without clear criteria. This guide gives you the evaluation framework that experienced AI buyers use to separate real capability from vendor theater.",
      },
      {
        heading: "What to Evaluate in an AI Agent Platform",
        body: "Evaluate AI agent platforms across six dimensions: integration capability (can it connect to your actual systems?), reasoning quality (does it handle exceptions and edge cases well?), governance tools (can you monitor, audit, and control agents?), security architecture (how is your data protected?), implementation support (who builds and maintains the agents?), and total cost of ownership (what does this actually cost over 3 years?).",
      },
      {
        heading: "Questions That Separate Good AI Vendors from Great Ones",
        body: "Ask every AI vendor these questions: What percentage of your customers are live in production vs. in pilot? Can you provide three customer references in our industry with similar use cases? What does your AI do when it's uncertain — how does it handle exceptions? Who maintains the agent after deployment? What is the SLA for when agents fail? The answers reveal operational maturity.",
      },
      {
        heading: "Red Flags to Watch For",
        body: "Watch for these red flags: demonstrations on vendor data only (not your data), pricing structures that escalate sharply with usage, proprietary data models that create vendor lock-in, no clear governance or monitoring tooling, implementation partners who aren't the same team that built the platform, and outcome guarantees that aren't backed by contractual accountability.",
      },
    ],
    highlights: [
      "Six-dimension evaluation framework",
      "40 questions to ask AI vendors",
      "Due diligence checklist for AI investments",
      "Contract negotiation considerations",
      "Implementation partner evaluation criteria",
      "Red flag identification guide",
    ],
    faqs: [
      { question: "Should we build or buy our AI agents?", answer: "For most middle market companies, buying an AI platform and customizing agents is more efficient than building from scratch. Building makes sense for proprietary processes where differentiation is critical and you have the engineering capacity." },
      { question: "How do we evaluate AI vendor financial stability?", answer: "Review funding history, customer retention, team depth, and contractual protections for data portability. AI vendor consolidation is ongoing — build contracts that protect you if your vendor is acquired." },
      { question: "What contractual protections should we require?", answer: "Require: data ownership and portability clauses, SLA with remedies for downtime, clear terms on AI model training (your data shouldn't train their public models), security audit rights, and termination assistance." },
      { question: "How do we evaluate an AI implementation partner?", answer: "Ask about their implementation methodology, the ratio of platform sales vs. implementation services, how they staff projects, reference projects with similar scope, and what happens when implementations run over budget or schedule." },
    ],
    seoTitle: "Agentic AI Buyer's Guide — Evaluate AI Solutions | OAI.co",
    seoDescription: "Evaluate AI agent platforms and vendors confidently. Questions to ask, criteria to use, and red flags to avoid in your AI investment.",
  },
  {
    slug: "case-studies",
    name: "Case Studies",
    tagline: "Operational OS™ in action",
    category: "proof",
    icon: "📈",
    description: "Real deployments. Measured outcomes. Operational OS™ in action across middle market companies in manufacturing, professional services, distribution, healthcare, and more.",
    heroDescription: "The strongest proof of Operational OS™ is what it does for companies like yours. These case studies document real deployments — the challenges faced, the solutions built, and the measurable outcomes achieved.",
    content: [
      {
        heading: "Manufacturing: Quoting and Supply Chain Intelligence",
        body: "A $45M custom manufacturer reduced quote turnaround from 5 days to 8 hours by connecting their estimating system, ERP, and material pricing feeds through an AI-powered quoting workflow. The Operations Agent now monitors supply chain exceptions and sends automated vendor communications — eliminating 12 hours of coordinator time per week.",
      },
      {
        heading: "Professional Services: Finance and Billing Transformation",
        body: "A 200-person consulting firm reduced their billing cycle from 18 days to 4 days by automating time entry review, WIP reporting, and invoice generation. The Finance Agent now processes AR collections automatically, improving DSO from 52 to 31 days within six months of deployment.",
      },
      {
        heading: "Distribution: Order Management and Customer Service",
        body: "A $60M distributor automated 85% of inbound order processing and reduced customer service headcount growth while handling 40% more order volume. The Operations Agent handles EDI order processing, the Customer Support Agent manages tracking inquiries, and the Reporting Agent delivers daily operational KPIs automatically.",
      },
      {
        heading: "Healthcare: Revenue Cycle and Administrative Automation",
        body: "A multi-specialty medical group deployed AI automation for prior authorization management, patient communication, and revenue cycle operations — reducing authorization denials by 28% and improving clean claim rate to 94%. Administrative staff time freed was redeployed to patient-facing care coordination.",
      },
    ],
    highlights: [
      "Manufacturing quoting and supply chain case study",
      "Professional services billing transformation case study",
      "Distribution operations automation case study",
      "Healthcare revenue cycle case study",
      "SaaS customer success scale case study",
      "Financial services compliance automation case study",
    ],
    faqs: [
      { question: "Can I speak with reference customers?", answer: "Yes. For qualified prospects, we arrange reference calls with customers in your industry and size range. Reference availability is coordinated through your sales conversation." },
      { question: "Are these case studies from real OAI customers?", answer: "Yes. All case studies document real deployments with actual results. Customer names may be anonymized at their request." },
      { question: "Do you have case studies in my specific industry?", answer: "We have deployments across all 12 industries covered in our industry pages. If we don't have a public case study in your industry, we can typically provide reference contacts." },
      { question: "What's the smallest company these results apply to?", answer: "Our case studies span companies from $15M to $500M in revenue. Results vary by deployment scope and baseline maturity, but the pattern of significant time savings and error reduction is consistent across sizes." },
    ],
    seoTitle: "Case Studies — Operational OS™ Results | OAI.co",
    seoDescription: "Real Operational OS™ deployments with measured outcomes across manufacturing, professional services, distribution, and healthcare.",
  },
  {
    slug: "use-cases",
    name: "Use Cases",
    tagline: "Concrete applications across every business function",
    category: "proof",
    icon: "🔍",
    description: "A library of AI agent use cases — specific, concrete applications organized by function, industry, and agent type — for middle market companies evaluating their AI opportunities.",
    heroDescription: "Abstract AI promises don't build business cases. This use case library documents specific, concrete AI agent applications across every business function — giving you the starting point for your own opportunity assessment.",
    content: [
      {
        heading: "Sales and Revenue Use Cases",
        body: "Lead scoring and routing from inbound form completions. CRM data capture from call recordings and meeting transcripts. Multi-touch follow-up sequence management by deal stage. Proposal generation from deal brief and product catalog. Win/loss analysis from CRM data and call recordings. Pipeline health reporting with probability-weighted forecast.",
      },
      {
        heading: "Finance and Operations Use Cases",
        body: "AP invoice processing from email and portal receipt. Three-way PO/invoice/receipt matching with exception routing. Month-end close management with task tracking and escalation. Expense report review against policy with automated approvals. Cash flow forecasting from AR aging and AP due dates. Vendor payment scheduling with early payment discount capture.",
      },
      {
        heading: "HR and People Operations Use Cases",
        body: "Job posting generation and multi-channel distribution. Resume screening against defined role criteria. Interview scheduling coordination with confirmation management. New hire onboarding workflow from offer acceptance to day 90. Employee policy Q&A from HR knowledge base. Headcount and turnover reporting from HRIS data.",
      },
      {
        heading: "Customer Service and Support Use Cases",
        body: "First-line inquiry handling from knowledge base. Intelligent ticket routing by issue type and severity. Knowledge base gap detection and draft article creation. CSAT trend reporting with theme analysis. Escalation management with SLA tracking. Multi-channel support unification across email, chat, and social.",
      },
    ],
    highlights: [
      "100+ documented AI use cases across all functions",
      "Organized by department, industry, and agent type",
      "Effort and impact estimates for each use case",
      "Implementation dependency mapping",
      "Quick Win identification framework",
      "Use case request form for custom needs",
    ],
    faqs: [
      { question: "Are all these use cases available today?", answer: "Yes. All use cases documented here are in production at OAI customer deployments. We don't document use cases we haven't actually built and deployed." },
      { question: "Can we request a use case that's not on this list?", answer: "Yes. Contact us with your use case description and we'll evaluate feasibility, typical implementation complexity, and expected outcomes." },
      { question: "Which use cases have the highest ROI?", answer: "The highest-ROI use cases are typically high-volume, well-defined operational tasks: AP invoice processing, first-line customer support, CRM data capture, and reporting automation. See the AI ROI Calculator for estimates by use case type." },
      { question: "How do we choose where to start?", answer: "Use the Agent Opportunity Scorecard to rank your use cases. Start with the highest-impact, lowest-complexity applications that your team is ready to support." },
    ],
    seoTitle: "AI Agent Use Cases — 100+ Applications for Middle Market | OAI.co",
    seoDescription: "Browse 100+ concrete AI agent use cases across sales, finance, HR, operations, and customer service for middle market companies.",
  },
  {
    slug: "integration-library",
    name: "Integration Library",
    tagline: "Connect your stack to Operational OS™",
    category: "proof",
    icon: "🔗",
    description: "A comprehensive library of Operational OS™ integrations — pre-built connectors and integration patterns for the systems your business already uses.",
    heroDescription: "Operational OS™ is only as powerful as its connections. The Integration Library documents every system we integrate with — and how those integrations enable the agent workflows your business depends on.",
    content: [
      {
        heading: "Integration Architecture",
        body: "Operational OS™ uses bidirectional API integrations to connect to your business systems. The platform maintains a secure integration layer that handles authentication, data mapping, error handling, and monitoring — so agents can read and write to your systems reliably without custom development for each connection.",
      },
      {
        heading: "CRM and Sales Integrations",
        body: "Salesforce, HubSpot, Microsoft Dynamics, Pipedrive, Zoho CRM. Bidirectional sync of contacts, accounts, opportunities, activities, and custom objects. Trigger-based automation from CRM events. Full read/write access to standard and custom fields. Support for complex org structures and territory configurations.",
      },
      {
        heading: "ERP and Financial Integrations",
        body: "NetSuite, SAP, Sage Intacct, QuickBooks Online, QuickBooks Enterprise, Xero, Microsoft Dynamics 365 Finance. Integrations cover AP/AR, GL, purchase orders, sales orders, inventory, and financial reporting. Multi-entity and multi-currency support available across ERP integrations.",
      },
      {
        heading: "HRIS and HR Technology Integrations",
        body: "Workday, BambooHR, Rippling, ADP Workforce Now, UKG Pro. Integrations cover employee records, org structure, compensation, benefits, and time tracking. ATS integrations include Greenhouse, Lever, Workday Recruiting, iCIMS, and LinkedIn Recruiter. DocuSign and PandaDoc for document execution.",
      },
    ],
    highlights: [
      "200+ pre-built integrations across all major business systems",
      "CRM, ERP, HRIS, support, marketing, and communication platforms",
      "Bidirectional real-time and batch sync options",
      "Custom integration development for proprietary systems",
      "Integration health monitoring and alerting",
      "Full API documentation for technical review",
    ],
    faqs: [
      { question: "What if a system we use isn't on the integration list?", answer: "We build custom integrations for systems not on our pre-built list. Custom integration development is included in implementation scoping. If the system has an API, we can integrate with it." },
      { question: "How are integrations secured?", answer: "All integrations use encrypted API connections with OAuth 2.0 or API key authentication. Credentials are stored in a secure secrets management system. Integrations operate with minimum-necessary permissions." },
      { question: "What's the difference between real-time and batch integrations?", answer: "Real-time integrations respond to events as they happen (new lead, invoice received). Batch integrations sync data on a schedule (hourly, daily). We configure each integration based on your workflow timing requirements." },
      { question: "Can integrations affect our system performance?", answer: "API integrations are designed to respect your systems' rate limits and peak usage patterns. High-volume integrations are scheduled for off-peak hours to minimize impact on system performance." },
    ],
    seoTitle: "Integration Library — 200+ System Integrations | OAI.co",
    seoDescription: "Connect Operational OS™ to your existing stack. Browse 200+ pre-built integrations for CRM, ERP, HRIS, and more.",
  },
];

export function getResourceBySlug(slug: string): ResourceData | undefined {
  return resources.find((r) => r.slug === slug);
}
