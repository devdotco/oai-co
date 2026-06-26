export const navigation = {
  main: [
    { label: "Operational OS™", href: "/operational-os", hasMega: true, key: "os" },
    { label: "AI Agents", href: "/ai-agents", hasMega: true, key: "agents" },
    { label: "Solutions", href: "/solutions", hasMega: true, key: "solutions" },
    { label: "Industries", href: "/industries", hasMega: true, key: "industries" },
    { label: "Resources", href: "/resources", hasMega: true, key: "resources" },
    { label: "Company", href: "/company/about", hasMega: true, key: "company" },
  ],
  cta: { label: "Build Your AI OS", href: "/contact" },
};

export const megaMenus = {
  os: {
    intro: "Operational OS™ is the intelligent operating layer that connects your people, workflows, data, tools, and decisions into one AI-enabled business system.",
    columns: [
      {
        title: "Platform",
        links: [
          { label: "Operational OS™ Overview", href: "/operational-os" },
          { label: "AI Readiness Assessment", href: "/operational-os/ai-readiness-assessment" },
          { label: "AI Maturity Model", href: "/operational-os/ai-maturity-model" },
          { label: "Agentic Operating Layer", href: "/operational-os/architecture" },
          { label: "AI Governance", href: "/operational-os/governance" },
          { label: "AI Integrations", href: "/operational-os/integrations" },
        ],
      },
      {
        title: "Architecture",
        links: [
          { label: "Knowledge Layer", href: "/operational-os/architecture#knowledge" },
          { label: "Workflow Layer", href: "/operational-os/architecture#workflow" },
          { label: "Agent Layer", href: "/operational-os/architecture#agent" },
          { label: "Data Layer", href: "/operational-os/architecture#data" },
          { label: "Decision Layer", href: "/operational-os/architecture#decision" },
          { label: "Security Layer", href: "/operational-os/architecture#security" },
        ],
      },
      {
        title: "Implementation",
        links: [
          { label: "Strategy Workshop", href: "/methodology#workshop" },
          { label: "AI Roadmap", href: "/methodology#roadmap" },
          { label: "Prototype Sprint", href: "/methodology#sprint" },
          { label: "Department Rollout", href: "/methodology#rollout" },
          { label: "Enterprise Scaling", href: "/methodology#scaling" },
          { label: "Managed AI Operations", href: "/methodology#managed" },
        ],
      },
    ],
    featured: {
      title: "See the Operational OS™ Architecture",
      description: "Explore how agents, workflows, knowledge, and systems connect.",
      href: "/operational-os/architecture",
    },
  },
  agents: {
    intro: "Build a workforce of secure, specialized AI agents that execute repeatable work across departments.",
    columns: [
      {
        title: "Department Agents",
        links: [
          { label: "Executive Agent", href: "/ai-agents/executive-agent" },
          { label: "Sales Agent", href: "/ai-agents/sales-agent" },
          { label: "Marketing Agent", href: "/ai-agents/marketing-agent" },
          { label: "Customer Support Agent", href: "/ai-agents/customer-support-agent" },
          { label: "Operations Agent", href: "/ai-agents/operations-agent" },
          { label: "Finance Agent", href: "/ai-agents/finance-agent" },
          { label: "HR Agent", href: "/ai-agents/hr-agent" },
          { label: "IT Agent", href: "/ai-agents/it-agent" },
        ],
      },
      {
        title: "Workflow Agents",
        links: [
          { label: "Proposal Agent", href: "/ai-agents/proposal-agent" },
          { label: "Invoice Agent", href: "/ai-agents/invoice-agent" },
          { label: "Recruiting Agent", href: "/ai-agents/recruiting-agent" },
          { label: "Knowledge Agent", href: "/ai-agents/knowledge-agent" },
          { label: "Reporting Agent", href: "/ai-agents/reporting-agent" },
          { label: "Procurement Agent", href: "/ai-agents/procurement-agent" },
          { label: "Compliance Agent", href: "/ai-agents/compliance-agent" },
          { label: "Meeting Agent", href: "/ai-agents/meeting-agent" },
        ],
      },
      {
        title: "Agent Services",
        links: [
          { label: "Custom AI Agent Development", href: "/solutions/executive-ai-strategy" },
          { label: "Agent Governance", href: "/operational-os/governance" },
          { label: "Agent Monitoring", href: "/operational-os/governance#monitoring" },
          { label: "Human-in-the-Loop Systems", href: "/operational-os/governance#human-loop" },
          { label: "Multi-Agent Workflows", href: "/operational-os/architecture#multi-agent" },
          { label: "Agent Training", href: "/operational-os/governance#training" },
        ],
      },
    ],
    featured: {
      title: "Explore the AI Agent Library",
      description: "Reusable agent patterns for middle market companies.",
      href: "/ai-agents",
    },
  },
  solutions: {
    intro: "Practical AI implementation by business function.",
    columns: [
      {
        title: "Leadership",
        links: [
          { label: "AI Strategy", href: "/solutions/executive-ai-strategy" },
          { label: "Executive Intelligence", href: "/solutions/executive-ai-strategy#intelligence" },
          { label: "Decision Dashboards", href: "/solutions/decision-intelligence" },
          { label: "Board Reporting", href: "/solutions/decision-intelligence#board" },
        ],
      },
      {
        title: "Revenue",
        links: [
          { label: "Sales Automation", href: "/solutions/sales-automation" },
          { label: "Lead Qualification", href: "/solutions/sales-automation#qualification" },
          { label: "CRM Intelligence", href: "/solutions/crm-intelligence" },
          { label: "Proposal Generation", href: "/solutions/sales-automation#proposals" },
        ],
      },
      {
        title: "Operations",
        links: [
          { label: "Workflow Automation", href: "/solutions/workflow-automation" },
          { label: "SOP Execution", href: "/solutions/sop-execution" },
          { label: "Vendor Management", href: "/solutions/workflow-automation#vendors" },
          { label: "Inventory Intelligence", href: "/solutions/workflow-automation#inventory" },
        ],
      },
      {
        title: "Finance & Admin",
        links: [
          { label: "AP Automation", href: "/solutions/ap-automation" },
          { label: "AR Automation", href: "/solutions/finance-automation" },
          { label: "Forecasting", href: "/solutions/finance-automation#forecasting" },
          { label: "Document Processing", href: "/solutions/document-processing" },
        ],
      },
      {
        title: "People & Support",
        links: [
          { label: "HR Automation", href: "/solutions/hr-automation" },
          { label: "Recruiting", href: "/solutions/recruiting-automation" },
          { label: "Onboarding", href: "/solutions/hr-automation#onboarding" },
          { label: "Customer Support AI", href: "/solutions/customer-support-ai" },
        ],
      },
    ],
  },
  industries: {
    intro: "Operational AI systems built for the realities of middle market businesses.",
    links: [
      { label: "Manufacturing", href: "/industries/manufacturing" },
      { label: "Construction", href: "/industries/construction" },
      { label: "Logistics", href: "/industries/logistics" },
      { label: "Healthcare", href: "/industries/healthcare" },
      { label: "Professional Services", href: "/industries/professional-services" },
      { label: "Financial Services", href: "/industries/financial-services" },
      { label: "Real Estate", href: "/industries/real-estate" },
      { label: "Retail & Ecommerce", href: "/industries/retail-ecommerce" },
      { label: "Energy", href: "/industries/energy" },
      { label: "Field Services", href: "/industries/field-services" },
      { label: "Distribution", href: "/industries/distribution" },
      { label: "SaaS & Technology", href: "/industries/saas-technology" },
    ],
    featured: {
      title: "AI for Manufacturing Operations",
      description: "Connect quoting, production, supply chain, quality, and customer communication.",
      href: "/industries/manufacturing",
    },
  },
  resources: {
    intro: "Tools, guides, and proof to accelerate your AI transformation.",
    columns: [
      {
        title: "Tools",
        links: [
          { label: "AI Readiness Checklist", href: "/resources/ai-readiness-checklist" },
          { label: "AI ROI Calculator", href: "/resources/ai-roi-calculator" },
          { label: "AI Maturity Assessment", href: "/operational-os/ai-maturity-model" },
          { label: "Agent Opportunity Scorecard", href: "/resources/agent-opportunity-scorecard" },
        ],
      },
      {
        title: "Guides",
        links: [
          { label: "Operational OS™ Guide", href: "/resources/operational-os-guide" },
          { label: "Executive AI Playbook", href: "/resources/executive-ai-playbook" },
          { label: "AI Implementation Roadmap", href: "/resources/ai-implementation-roadmap" },
          { label: "Agentic AI Buyer's Guide", href: "/resources/agentic-ai-buyers-guide" },
        ],
      },
      {
        title: "Proof",
        links: [
          { label: "Case Studies", href: "/resources/case-studies" },
          { label: "Use Cases", href: "/resources/use-cases" },
          { label: "Frameworks", href: "/resources/operational-os-guide#frameworks" },
          { label: "Integration Library", href: "/resources/integration-library" },
        ],
      },
    ],
  },
  company: {
    links: [
      { label: "About", href: "/company/about" },
      { label: "Methodology", href: "/methodology" },
      { label: "Partners", href: "/company/partners" },
      { label: "Careers", href: "/company/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
};

export const footerLinks = {
  platform: {
    title: "Operational OS™",
    links: [
      { label: "Overview", href: "/operational-os" },
      { label: "AI Readiness", href: "/operational-os/ai-readiness-assessment" },
      { label: "Architecture", href: "/operational-os/architecture" },
      { label: "Governance", href: "/operational-os/governance" },
      { label: "Integrations", href: "/operational-os/integrations" },
    ],
  },
  agents: {
    title: "AI Agents",
    links: [
      { label: "All Agents", href: "/ai-agents" },
      { label: "Sales Agent", href: "/ai-agents/sales-agent" },
      { label: "Finance Agent", href: "/ai-agents/finance-agent" },
      { label: "Operations Agent", href: "/ai-agents/operations-agent" },
      { label: "HR Agent", href: "/ai-agents/hr-agent" },
    ],
  },
  solutions: {
    title: "Solutions",
    links: [
      { label: "Sales Automation", href: "/solutions/sales-automation" },
      { label: "Workflow Automation", href: "/solutions/workflow-automation" },
      { label: "Finance Automation", href: "/solutions/finance-automation" },
      { label: "Customer Support AI", href: "/solutions/customer-support-ai" },
      { label: "Document Processing", href: "/solutions/document-processing" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "About", href: "/company/about" },
      { label: "Methodology", href: "/methodology" },
      { label: "Industries", href: "/industries" },
      { label: "Resources", href: "/resources" },
    ],
  },
};
