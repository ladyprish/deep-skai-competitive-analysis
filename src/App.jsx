import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const CompetitiveAnalysis = () => {
  const [selectedCompetitor, setSelectedCompetitor] = useState('');

  // Competitors from Gartner report + additional competitors
  const competitors = [
    'ACTICO',
    'Aera Technology',
    'Arbiter',
    'Auger',
    'CRIF',
    'Decisions',
    'Faculty',
    'FICO',
    'FlexRule',
    'GE HealthCare',
    'IBM',
    'InRule Technology',
    'Kinaxis Maestro',
    'o9 Solutions',
    'Oracle',
    'Pegasystems',
    'Quantexa',
    'RelationalAI',
    'Rulex',
    'Sapiens',
    'SAS',
    'Trax Technologies'
  ];

  // Competitor-specific execution details for each capability
  const competitorExecution = {
    'ACTICO': {
      'Decision Modeling': 'Low-code graphical interface (ACTICO Modeler) for rule creation, organization, and test case management with decision logic frameworks.',
      'Decision Execution': 'ACTICO Execution Server hosts decision services as scalable web services; ACTICO Engine embeds into Java applications via API.',
      'Decision Governance': 'Explainable AI targeted at business and technical personas with comprehensive DecisionOps for version control and traceability.',
      'Decision Service Composition': 'Decision services provide version control and traceability with dependency graphs showing relationships between services.',
      'Low-code Composable Architecture': 'Modular, autonomous, discoverable, and reusable components in composable architecture for flexibility and enhanced usability.',
      'Regulated Industry Focus': 'Specialized for regulated industries like financial services with precision, compliance, and trust as paramount requirements.'
    },
    'Aera Technology': {
      'Decision Modeling': 'Multiexperience UI optimizes analytics development for different decision-making processes with designing workspaces and recommendations.',
      'Machine Learning Techniques': 'Strong automated ML capabilities in supervised learning; supports low-code and code-first development via notebooks and code editor.',
      'Multimodal D&A Prep Techniques': 'Extracts and ingests data in-memory with extensive out-of-the-box connectors for diverse data sources across on-premises and cloud.',
      'Optimization/Simulation Techniques': 'Integrated optimization and simulation capabilities with human-in-the-loop decision recommendations.',
      'Supply Chain Domain Focus': 'Purpose-built for supply chain optimization with focus on operational decision intelligence at scale.',
      'API-first / Composable Architecture': 'Composite semantic layer and action framework expose decision data models as web services for external system integration.'
    },
    'Arbiter': {
      'Closed-loop Execution': 'Record-Action-Alignment model creates continuous engine from fragmentation to flow with automated next steps and outcome monitoring.',
      'Healthcare Care Orchestration': 'Unifies clinical, financial, and policy data into single longitudinal source of truth for patients, payers, and providers.',
      'Referral & Authorization Automation': 'Streamlines delegated and standard prior authorizations by structuring criteria and codifying policy documents.',
      'Provider Network Optimization': 'Routing intelligence optimizes referrals for cost, quality, and availability with dynamic validated directory of in-network providers.',
      'Patient Engagement & Scheduling': 'Multi-channel outreach with real-time scheduling, reminders, and follow-up to increase completion rates and reduce no-shows.',
      'Record-Action-Alignment Model': 'Agentic AI recommends and automates next best step in real-time, monitors outcomes, and continuously learns to improve performance.'
    },
    'Auger': {
      'Autonomous Supply Chain OS': 'Replaces consensus-driven planning with autonomous execution, collapsing gap between signal and execution.',
      'Agentic S&OE': 'Fuses S&OP and S&OE into single continuous decision loop where plans flow into execution and reality flows back in real-time.',
      'Messy Data Ingestion': 'Ingests raw operational streams (ERPs, spreadsheets, legacy APIs) exactly as they are without requiring pre-cleaning.',
      'Augentic Ontology': 'Encodes constraints, contractual rules, financial trade-offs, capacities, and hard limits across network for context-aware decisions.',
      'Signal-to-Execution Velocity': 'Signal connects directly to execution with micro-adjustments in real-time, eliminating coordination latency.',
      'Supply Chain Domain Focus': 'Built by team that deployed robotics, AI, and ML at unprecedented scale in one of world\'s most advanced supply chains.'
    },
    'CRIF': {
      'Decision Modeling': 'Decision-centric UI enables intuitive, no-code modeling for business users to rapidly define decision logic.',
      'Decision Service Composition': 'Robust capabilities to define, package, and reuse decision models as modular services across platform.',
      'Rule- and Logic-Based Techniques': 'Supports declarative rule expression with accessible formats like decision tables and trees for business users.',
      'Credit Life Cycle Focus': 'Specialized decision strategies across credit origination, risk-based pricing, portfolio management, fraud detection, and collections.',
      'No-code Platform': 'Low-code decision intelligence environment accessible for nontechnical users with easy development and deployment.',
      'Declarative Rule Expression': 'Enables business users to define and articulate rule logic in business-friendly formats.'
    },
    'Decisions': {
      'Decision Modeling': 'Low-code platform combines workflow and business rule engines with visual designers for flows, forms, dashboards, and reports.',
      'Real-Time Event Stream Techniques': 'Significant support for low-latency ingestion through Kafka, RabbitMQ with event stream listeners and temporal controls.',
      'Decision Execution': 'Runtime decision orchestration with features for scaling real-time decisions and DecisionOps for managing decision life cycle.',
      'Decision Collaboration': 'Enables agile collaboration with sprints, user stories, comment history, differential analysis, rollback, and built-in testing.',
      'Workflow & Business Rule Engine': 'Combined workflow automation and business rules engine for creating process-driven decision applications.',
      'Composite AI for Decision Flows': 'Strong in decision logic mapping and combined application of different AI techniques for composite AI.'
    },
    'Faculty': {
      'Optimization/Simulation Techniques': 'Optimization and simulation tools for what-if analyses and scenario planning to simulate environments and outcomes.',
      'Decision Monitoring': 'Visualizes decision points in context, shows how decisions affect metrics, and captures judgment from human feedback loops.',
      'Business Intelligence Techniques': 'Composite semantic layer provides consistent view of data, decisions, and processes for informed decision-making.',
      'Computational Twin Framework': 'Frontier\'s Computational Twin connects data and AI assets to power coherent optimizations and simulations.',
      'Scenario Modeling & What-if Analysis': 'Conduct what-if analyses and scenario planning to identify optimal decisions under constraints.',
      'Learning from Human Feedback': 'Captures human judgment and expertise through feedback loops to improve decision models over time.'
    },
    'FICO': {
      'Real-Time Event Stream Techniques': 'Advanced real-time event stream processing with low-latency ingestion using Kafka and native streaming technologies.',
      'Decision Modeling': 'Comprehensive library of decision blueprints and templates curated by FICO for industries and business functions.',
      'Optimization/Simulation Techniques': 'FICO Platform - Enterprise Optimization applies prescriptive analytics and advanced algorithms to solve complex problems.',
      'Decision Blueprints & Templates Library': 'Extensive templates via FICO Marketplace define decision flows, data connectivity, and personas across decision life cycle.',
      'Mathematical Optimization Engine': 'Enterprise Optimization engine maximizes or minimizes objectives under constraints for complex problem-solving.',
      'Banking & Investment Services Focus': 'Deep expertise in banking and investment services with industry-specific decision templates and workflows.'
    },
    'FlexRule': {
      'Decision Modeling': 'Decision-centric UI focuses on decision workflow with in-context switching between UIs during design-time modeling.',
      'Rule- and Logic-Based Techniques': 'Strong declarative rule expression with decision tables, FEEL boxed expressions, and multiple authoring languages.',
      'Decision Service Composition': 'API-first approach makes decision services easy to access, use, govern, and monitor for developers.',
      'API-first / Composable Architecture': 'Provides business software components consumable by other applications or composable within platform.',
      'Decision-centric UI': 'User interface designed around decision workflow allowing seamless switching between different views during modeling.',
      'DMN Standard Support': 'Supports Decision Model and Notation (DMN) standard with Decision Requirement Diagrams and Dynamic Decision Graph.'
    },
    'GE HealthCare': {
      'Medical Imaging AI': 'AI integrated across imaging devices for workflow optimization, automated protocoling, and critical condition detection.',
      'Clinical Decision Support': 'AI-powered tools provide clinical recommendations and actionable insights at point of care.',
      'Hospital Operations Optimization': 'Command Center uses AI for hospital workflow optimization, capacity management, and resource allocation.',
      'Device-embedded AI': 'FDA-authorized AI capabilities built directly into medical devices (100+ AI authorizations) for real-time analysis.',
      'Regulated Industry Focus': 'Purpose-built for healthcare with regulatory compliance and clinical validation at core of platform design.'
    },
    'IBM': {
      'Machine Learning Techniques': 'Advanced ML including supervised, unsupervised learning via IBM Cloud Pak for Data with comprehensive analytics capabilities.',
      'Natural Language Techniques': 'Strong NLP capabilities enable extraction of insights from unstructured data and natural language interaction.',
      'Decision Service Composition': 'Componentizes decision flows using modular, reusable assets deployed as decision services for flexible workflows.',
      'Cloud Pak for Data': 'Comprehensive data and AI platform for collecting, organizing, and analyzing data at enterprise scale.',
      'Cloud Pak for Business Automation': 'Platform for automating business operations and decision-making with integrated workflow capabilities.',
      'API-first / Composable Architecture': 'Well-documented API with SDKs and accessible platform objects supporting internal and external integration.'
    },
    'InRule Technology': {
      'Decision Governance': 'Interactive visibility into ML model factors with explainable AI including bias detection and mitigation capabilities.',
      'Decision Service Composition': 'Encapsulates decision rules, models, and data connections as modular services accessible via APIs.',
      'Decision Execution': 'Supports real-time, batch, and event-driven operations with DevOps integration and flexible deployment options.',
      'Explainable AI with Bias Detection': 'Provides interactive explainability for ML models with built-in bias detection and mitigation tools.',
      'Modular Decision Services': 'Packages decision logic as discrete, reusable services with API access for orchestration.',
      'Regulated Industry Focus': 'Strong focus on governance, compliance, and operational agility for regulated industries.'
    },
    'Kinaxis Maestro': {
      'Concurrent Planning & Execution': 'Unique ability to plan and execute simultaneously with instant synchronization across entire supply chain.',
      'Supply Chain Data Fabric': 'Connects and contextualizes internal and external data sources into single source of truth accessible throughout supply chain.',
      'Scenario Modeling & What-if Analysis': 'Create and run unlimited scenarios in seconds to determine impact of changes on plans and supply chain.',
      'Real-time Supply Chain Synchronization': 'End-to-end, always-on digital view keeps data, people, and processes continually in sync across ecosystem.',
      'AI-infused End-to-End Platform': 'Intelligence engine delivers real-time insights and adaptive solutions with speed and efficiency throughout platform.',
      'Supply Chain Domain Focus': '#1 supply chain orchestration platform with 10 consecutive years as Gartner Leader in Supply Chain Planning.'
    },
    'o9 Solutions': {
      'Machine Learning Techniques': 'ML techniques uncover actionable insights and predict scenarios for supply chain optimization and demand forecasting.',
      'Multimodal D&A Prep Techniques': 'Strong data source connectivity with user-friendly interface to create data pipelines and analytical models.',
      'Decision Monitoring': 'Allows users to view each decision, model, logic, and metadata across decision flow for transparency and traceability.',
      'Integrated Business Planning': 'AI-powered platform enables integrated planning across supply chain, commercial, and financial functions.',
      'Supply Chain & Commercial Planning': 'Optimizes performance aligning strategic objectives with operational execution across functions.',
      'Supply Chain Domain Focus': 'Purpose-built for large enterprises requiring integrated business planning and decision-making for supply chains.'
    },
    'Oracle': {
      'Multimodal D&A Prep Techniques': 'Comprehensive data source connectivity, preparation, and multistructured analytics with smart recommendations and auto-joins.',
      'Machine Learning Techniques': 'Supervised and unsupervised ML methods readily accessible and easy to use for predictive analytics.',
      'Decision Monitoring': 'Decision observability with state indicators, activity streams, dependency visualization, and business impact analysis.',
      'Decision Service Composition': 'Built on API-first approach with solid decision services capabilities for composable architecture.',
      'OCI Integration & Analytics Cloud': 'Oracle Cloud Infrastructure with integrated Analytics Cloud for autogenerated insights and ML recommendations.',
      'Decision Observability': 'Provides transparency, auditability, and explainability across decision flow with detailed monitoring.'
    },
    'Pegasystems': {
      'Decision Monitoring': 'Strong decision analytics via decision observability dashboard for identifying bottlenecks and optimizing workflows.',
      'Multimodal D&A Prep Techniques': 'Consistent capabilities across multistructured analytics, data preparation, and data source connectivity.',
      'Real-Time Event Stream Techniques': 'Low-latency ingestion and complex event detection with API-first composable architecture.',
      'Customer Decision Hub': 'Core platform for customer engagement at scale providing personalized next-best-action decisions.',
      'Process AI': 'AI capabilities designed for workflow decisions and process automation optimization.',
      'Agentic Process Fabric': 'Framework supporting autonomous agents that execute business processes with AI-driven automation.'
    },
    'Quantexa': {
      'Graph and Knowledge Techniques': 'Patented technology to build and use "ego" and knowledge graphs at scale for entity resolution.',
      'Decision Governance': 'Dedicated interface for decision stewards with real-time monitoring, policy enforcement, audit trails, and model versioning.',
      'Decision Modeling': 'Strong in decision modeling with real-time event stream techniques for contextual decision-making.',
      'Entity Resolution at Scale': 'Patented entity resolution technology identifies and links related entities across massive datasets.',
      'Contextual Fabric': 'Continuously integrates data from internal and external sources, resolving entities and materializing relationships at scale.',
      'Graph Analytics Core': 'Core platform built on graph database technology to identify connections and enable contextual insight.'
    },
    'RelationalAI': {
      'Graph and Knowledge Techniques': 'Graph data science and analytics via Python coding for relationship-based analysis.',
      'Machine Learning Techniques': 'ML via graph neural network (GNN) methods monitored through MLFlow with supervised and unsupervised learning.',
      'Code-first Development': 'Code-first approach via notebooks and "Rel" decision agent for developer-focused workflows.',
      'Snowflake Native': 'Operates fully and natively within Snowflake data cloud platform with native integration.',
      'Graph Neural Networks': 'Supports graph neural network methods for machine learning on graph-structured data.',
      'Python API Access': 'Seamless Python coding access enables developers to apply graph techniques within decision workflows.'
    },
    'Rulex': {
      'Machine Learning Techniques': 'Visual, no-code environment for training and deploying supervised and unsupervised models with automated parameter selection.',
      'Multimodal D&A Prep Techniques': 'Easy-to-use, no-code interface for preparing and visualizing data from diverse sources and file types.',
      'Decision Modeling': 'Customizable decision-centric UI with decision logic and composite AI capabilities.',
      'No-code Platform': 'Complete no-code decision intelligence platform with visual interface for business users.',
      'Explainable AI with Bias Detection': 'Provides visibility into decision formula though limited capabilities for AI risk mitigation.',
      'Mathematical Optimization Engine': 'Includes scenario simulation and mathematical optimization for decision analysis.'
    },
    'Sapiens': {
      'Rule- and Logic-Based Techniques': 'Enables discovery and automated rules generation from unstructured documents, structured environments, and source code.',
      'Decision Modeling': 'Patented TDM methodology enables graphical modeling of decision logic using decision tables and diagrams.',
      'Decision Governance': 'Central repository with role-based access, customizable governance workflows, and detailed audit trails.',
      'The Decision Model (TDM) Methodology': 'Patented graphical model shows and manages relationships between decisions with AI-driven optimization.',
      'AI-driven Logic Discovery': 'AI-driven tools for logic discovery and optimization from various sources including documents and code.',
      'Central Repository': 'Centralized decision logic repository using role-based access and governance workflows for decision management.'
    },
    'SAS': {
      'Multimodal D&A Prep Techniques': 'Strong foundation for decision intelligence with efficient data integration, cleansing, and transformation capabilities.',
      'Real-Time Event Stream Techniques': 'Low-latency ingestion, complex event detection, and continuous intelligence for time-sensitive operations.',
      'Machine Learning Techniques': 'Advanced ML capabilities provide powerful tools for predictive and prescriptive modeling and pattern recognition.',
      'SAS Viya Platform': 'End-to-end data, analytics, AI, and decision intelligence platform designed for enterprise-scale analytics.',
      'Comprehensive Analytics Suite': 'Full spectrum of analytics from data preparation through advanced ML and AI capabilities.',
      'API-first / Composable Architecture': 'Comprehensive architecture enabling developers to compose and operationalize decision services at scale.'
    },
    'Trax Technologies': {
      'AI-Native Freight Audit': 'Platform designed from ground up to leverage AI with automated anomaly detection and predictive cost optimization.',
      'Predictive Carrier Analytics': 'AI-powered analytics predict carrier performance and prevent disruptions before they occur.',
      'Automated Contract Compliance': 'Continuous monitoring of transportation contracts with instant alerts for compliance violations.',
      'Freight Cost Optimization': 'AI-driven optimization of transportation spend with real-time insights for strategic cost control.',
      'Normalized Supply Chain Data': 'Built on 25+ years of normalized transportation data creating single source of truth for supply chain actuals.',
      'Supply Chain Domain Focus': 'Purpose-built for freight audit and transportation spend management with deep logistics domain expertise.'
    }
  };

  // Deep-SKAI specific execution details for each capability
  const deepSKAIExecution = {
    // Mandatory Capabilities
    'Decision Modeling': 'Visual modeling with industry-specific templates and blueprints embedded in industry packs for healthcare, manufacturing, and supply chain contexts.',
    'Decision Collaboration': 'Three interaction modes (Briefing, Explore, Work) enable cross-functional teams to collaborate on decisions with natural language interface and role-based views.',
    'Decision Service Composition': 'Modular decision services packaged as reusable workflows that integrate with ERP, EHR, TMS, WMS through advanced data fabrics.',
    'Decision Execution': 'Closed-loop execution that coordinates multi-step actions across systems, verifies completion, and automatically re-plans when reality changes.',
    'Decision Monitoring': 'Live risk and readiness signals with ranked work queues, showing decision quality, performance outcomes, and "why" explanations for continuous improvement.',
    'Decision Governance': 'AI operates inside policies, financial constraints, and compliance rules with full audit trails, explainability, and human-in-the-loop approval workflows.',
    
    // Common Capabilities
    'Rule- and Logic-Based Techniques': 'Encodes policies, financial limits, and compliance rules as decision guardrails with configurable approval workflows and exception handling.',
    'Machine Learning Techniques': 'Predictive models for demand forecasting, risk detection, and constraint identification that feed into decision workflows with continuous learning from outcomes.',
    'Real-Time Event Stream Techniques': 'Continuously detects thousands of signals from connected systems to establish global context and identify constraints, risks, and opportunities in real-time.',
    'Business Intelligence Techniques': 'Experiential interface delivers live dashboards in Briefing Mode with drill-down capabilities in Explore Mode, moving beyond static reporting to action-oriented insights.',
    'Multimodal D&A Prep Techniques': 'Advanced data fabrics connect and normalize disparate data from ERP, supply chain, scheduling, finance creating a single operational model for decision-making.',
    'Natural Language Techniques': 'Natural language interface across all three modes (Briefing, Explore, Work) enables conversational interaction with decision models and data exploration.',
    'Graph and Knowledge Techniques': 'Maps relationships between entities (suppliers, items, locations, patients, orders) to understand constraint propagation and downstream impacts.',
    'Optimization/Simulation Techniques': 'Digital twin simulation models constraints and tests scenarios before execution, comparing options to choose the best plan with full cost/service/risk analysis.',
    'AI Agents for DI Techniques': 'Compliance agents and decision models run in governed layer, routing workflows consistently while maintaining human oversight for critical decisions.',
    
    // Deep-SKAI Differentiated Capabilities
    'Mission Control Layer': 'Orchestrates cross-platform data into coordinated actions across ERP, supply chain, scheduling, and finance systems without rip-and-replace.',
    'Closed-loop Execution': 'Coordinates approvals, triggers workflows, pushes changes to source systems, verifies completion, and feeds outcomes back as live signals for continuous improvement.',
    'Digital Twin Simulation': 'Models operational constraints and simulates "if we do X, what happens to cost/service/risk" before executing changes in live systems.',
    'Data Harmonization & Semantic Layer': 'Normalizes fragmented data so "the same thing" means the same everywhere (items, locations, cases, suppliers) with visibility into freshness and gaps.',
    'Policy-aware AI Coordination': 'AI coordination operates inside approved boundaries (risk limits, compliance rules, financial constraints) with explainability and human override paths.',
    'Operational Readiness & Time-windowing': 'Continuously checks what must be true by when (T-72 → T-0), identifies readiness breakers early, and quantifies urgency as windows close.',
    'Financial Coordination & Liquidity Guardrails': 'Connects operational decisions to budget, liquidity, covenants, and cost-to-serve to prevent "operational fixes" that create financial exposure.',
    'Industry Packs (Vertical Customization)': 'Pre-built use cases, workflows, decision guardrails, and readiness/risk models tailored to specific industries (starting with mid-tier hospitals).',
    'Experiential Interface (Briefing/Explore/Work Modes)': 'Three modes: Briefing (what matters now), Explore (what\'s changing and why), Work (what to do next) with natural language and evidence-backed answers.',
    'Continuous Learning Loop': 'Closed-loop feedback captures outcomes, learns what works, and continuously improves forecasts, prioritization, and actions as conditions change.',
    'Forecasting & Demand Planning': 'Predicts demand using historical patterns and live signals, translates into time-phased plans, and flags demand shifts early with operational/financial impact.',
    'Risk Detection, Prioritization, and Work Management': 'Detects signals that matter, clusters into coherent issues, ranks by urgency, and routes to right owners with context and suggested actions.',
    'Supply and Vendor Constraint Coordination': 'Tracks supplier limits, allocations, lead-time volatility, and critical SKU dependencies tied to demand windows for early substitution recommendations.',
    'Source–Order–Deliver Network Management': 'Unifies sourcing, ordering, and delivery through partner network connecting shippers, vendors, and logistics providers in shared execution layer.',
    'Multimodal Transportation Visibility and Tracking': 'Shipment tracking with predictive multi-modal visibility, SKU/consignment traceability, and global delay alerts integrated with ERP/TMS.',
    
    // For capabilities Deep-SKAI doesn't have
    'DEFAULT': 'Not a core Deep-SKAI capability'
  };

  // Capability descriptions
  const capabilityDescriptions = {
    // Mandatory Capabilities
    'Decision Modeling': 'Design explainable decision models using visual, low-code interfaces to frame decisions with defined inputs, flows, and outputs.',
    'Decision Collaboration': 'Improve human-AI delegation, minimizing friction between human and machine decision actors within teams and enterprises.',
    'Decision Service Composition': 'Componentize decision flows and encapsulate tasks using modular, reusable components packaged for discovery.',
    'Decision Execution': 'Orchestrate and execute decision flows with end-to-end life cycle management across development, testing, and production environments.',
    'Decision Monitoring': 'View each decision, its model, logic, and metadata with insights into the decision flow for continuous improvement.',
    'Decision Governance': 'Apply governance principles with logging, auditing, and accountability frameworks for secure, transparent, repeatable decisions.',
    
    // Common Capabilities
    'Rule- and Logic-Based Techniques': 'Capture organizational know-how, policies, and regulations as structured rules using formal directives and expert heuristics.',
    'Machine Learning Techniques': 'Extract insights and predict outcomes from high-dimensional datasets using statistical and AI models that learn patterns.',
    'Real-Time Event Stream Techniques': 'Ingest data from streams with low latency for fast analytics, complex event detection, and continuous intelligence.',
    'Business Intelligence Techniques': 'Model, analyze, and visualize data via dashboards and reports to uncover patterns and support informed decision-making.',
    'Multimodal D&A Prep Techniques': 'Unlock value from wide data in any format, sourced internally or externally, for context-enriched analysis.',
    'Natural Language Techniques': 'Enable intuitive human-system communication using generative AI and language processing to parse and generate language.',
    'Graph and Knowledge Techniques': 'Represent and analyze highly connected data, relationships between entities, using graph analytics and knowledge graphs.',
    'Optimization/Simulation Techniques': 'Maximize benefits and manage trade-offs by finding optimal resource combinations under constraints via operations research.',
    'AI Agents for DI Techniques': 'Use agentic AI to improve speed, quality, and adaptability of decision-making through semi-autonomous decision support.',
    
    // Deep-SKAI Differentiated Capabilities
    'Mission Control Layer': 'A decision and execution layer that orchestrates cross-platform data into coordinated actions that are closed-loop and explainable.',
    'Closed-loop Execution': 'Coordinates multi-step actions across systems and teams, tracks completion, and re-plans when reality changes.',
    'Digital Twin Simulation': 'Models how constraints propagate through networks to simulate options and test scenarios before executing in live systems.',
    'Data Harmonization & Semantic Layer': 'Connects source systems, normalizes data, and resolves identities so disparate data means the same thing everywhere.',
    'Policy-aware AI Coordination': 'AI operates inside policies, financial constraints, and compliance rules with explainability and human-in-the-loop approval.',
    'Operational Readiness & Time-windowing': 'Turns operations into a readiness clock, checking what must be true by when for work to succeed.',
    'Financial Coordination & Liquidity Guardrails': 'Connects operational decisions to financial reality including budget, liquidity, and cost-to-serve tradeoffs.',
    'Industry Packs (Vertical Customization)': 'Pre-built use cases, workflows, and decision guardrails tailored to specific industry operational realities.',
    'Experiential Interface (Briefing/Explore/Work Modes)': 'Natural language interface with Briefing Mode, Explore Mode, and Work Mode for action-oriented decision-making.',
    'Continuous Learning Loop': 'Closed-loop feedback captures outcomes and continuously improves forecasts and recommended actions as conditions change.',
    'Forecasting & Demand Planning': 'Predicts future demand using historical patterns and live signals, translating forecasts into time-phased operational plans.',
    'Risk Detection, Prioritization, and Work Management': 'Detects signals that matter, clusters them into issues, and ranks what to tackle first with context.',
    'Supply and Vendor Constraint Coordination': 'Tracks supplier limits, lead-time volatility, and critical dependencies tied to demand windows and service commitments.',
    'Source–Order–Deliver Network Management': 'Unifies sourcing, ordering, and delivery in one platform connecting shippers, vendors, and logistics providers.',
    'Multimodal Transportation Visibility and Tracking': 'Provides shipment tracking with predictive, multi-modal visibility and global delay alerts across transportation modes.',
    
    // Competitor-specific Differentiated Capabilities (consolidated)
    'Low-code Composable Architecture': 'Modular, flexible architecture enabling rapid development through low-code tools and reusable components.',
    'Regulated Industry Focus': 'Specialized features and compliance controls designed for highly regulated industries like financial services and healthcare.',
    'Version Control & Traceability': 'Comprehensive tracking of decision model versions with full audit trails and change history.',
    'Supply Chain Domain Focus': 'Deep expertise and pre-built capabilities specifically designed for supply chain planning and execution.',
    'Automated ML Capabilities': 'Automated machine learning features that enable non-experts to build and deploy predictive models.',
    'API-first / Composable Architecture': 'Platform designed with APIs as the primary interface and interchangeable components, enabling seamless integration and composability.',
    'Human-in-the-loop Recommendations': 'Decision recommendations that require human confirmation before execution, balancing automation with control.',
    'Credit Life Cycle Focus': 'Specialized capabilities for credit origination, risk-based pricing, and portfolio management workflows.',
    'No-code Platform': 'Complete platform functionality available without any coding required, with intuitive visual interfaces for business users.',
    'Declarative Rule Expression': 'Business-friendly formats like decision tables and trees for expressing business logic.',
    'Workflow & Business Rule Engine': 'Combined workflow automation and business rules engine for process-driven decision automation.',
    'Composite AI for Decision Flows': 'Integration of multiple AI techniques within decision workflows for comprehensive intelligence.',
    'Computational Twin Framework': 'Framework for creating digital representations that can be used for optimization and scenario testing.',
    'Scenario Modeling & What-if Analysis': 'Tools for creating unlimited scenarios, exploring multiple options, and understanding potential outcomes before committing to decisions.',
    'Learning from Human Feedback': 'Captures human judgment and expertise to improve decision models over time.',
    'Advanced Event Stream Processing': 'Sophisticated real-time data streaming capabilities with low-latency processing and complex event detection.',
    'Decision Blueprints & Templates Library': 'Extensive library of pre-built decision templates and industry-specific blueprints.',
    'Mathematical Optimization Engine': 'Advanced mathematical optimization capabilities for solving complex constraint-based problems and resource allocation.',
    'Banking & Investment Services Focus': 'Domain expertise and specialized features for banking and financial services industry.',
    'Decision-centric UI': 'User interface specifically designed around decision-making workflows and contexts.',
    'DMN Standard Support': 'Support for Decision Model and Notation (DMN) industry standard for decision modeling.',
    'Dynamic Decision Graph': 'Visual representation of decision dependencies and relationships that updates dynamically.',
    'Cloud Pak for Data': 'Comprehensive data and AI platform for collecting, organizing, and analyzing data.',
    'Cloud Pak for Business Automation': 'Platform for automating business operations and decision-making processes.',
    'NLP Capabilities': 'Natural language processing features for understanding and generating human language.',
    'Explainable AI with Bias Detection': 'AI models that provide clear explanations and actively detect and mitigate bias.',
    'Modular Decision Services': 'Decision logic packaged as discrete, reusable services that can be deployed independently.',
    'Flexible Deployment Options': 'Support for multiple deployment models including cloud, on-premises, and hybrid configurations.',
    'Integrated Business Planning': 'Unified planning across supply chain, commercial, and financial functions.',
    'Supply Chain & Commercial Planning': 'Combined capabilities for supply chain operations and commercial planning activities.',
    'Digital Brain Platform': 'AI-powered platform name for integrated planning and decision-making.',
    'OCI Integration & Analytics Cloud': 'Oracle Cloud Infrastructure integration with analytics capabilities.',
    'Autogenerated Insights': 'Automatically generated insights and recommendations from data analysis.',
    'Decision Observability': 'Comprehensive visibility into decision execution with performance metrics and impact analysis.',
    'Customer Decision Hub': 'Centralized platform for managing customer engagement and next-best-action decisions.',
    'Process AI': 'AI capabilities specifically designed for process automation and optimization.',
    'Agentic Process Fabric': 'Framework for autonomous agents that execute business processes.',
    'Decision Analytics Dashboard': 'Visualization and analytics specifically for monitoring decision performance.',
    'Entity Resolution at Scale': 'Ability to identify and link related entities across massive datasets.',
    'Contextual Fabric': 'Unified data layer that provides context by resolving entities and materializing relationships.',
    'Graph Analytics Core': 'Core platform capabilities built on graph database and analytics technologies.',
    'Real-time Policy Enforcement': 'Immediate application and monitoring of policy rules as decisions are made.',
    'Code-first Development': 'Platform designed primarily for developers using code rather than visual tools.',
    'Snowflake Native': 'Built to run natively within the Snowflake data cloud platform.',
    'Graph Neural Networks': 'Machine learning on graph-structured data for relationship-based predictions.',
    'Python API Access': 'Programmatic access to platform capabilities through Python programming language.',
    'AutoML': 'Automated machine learning that handles model selection, training, and optimization.',
    'The Decision Model (TDM) Methodology': 'Patented methodology for modeling and managing decision logic.',
    'AI-driven Logic Discovery': 'Automated discovery and generation of business rules from various sources.',
    'Patented Graphical Model': 'Proprietary visual modeling approach protected by patents.',
    'Central Repository': 'Centralized storage and management of decision logic and models.',
    'SAS Viya Platform': 'Comprehensive analytics and decision intelligence platform from SAS.',
    'Comprehensive Analytics Suite': 'Full range of analytics capabilities from descriptive to prescriptive.',
    'Advanced ML Capabilities': 'Sophisticated machine learning features including deep learning and ensemble methods.',
    'Enterprise-scale Analytics': 'Analytics platform designed to handle enterprise-level data volumes and complexity.',
    
    // Additional Competitor Differentiated Capabilities
    'Healthcare Care Orchestration': 'Platform specialized for coordinating care across patients, payers, and providers in healthcare.',
    'Referral & Authorization Automation': 'Automated workflows for managing referrals and prior authorizations in healthcare settings.',
    'Provider Network Optimization': 'Tools for optimizing provider networks based on cost, quality, and availability.',
    'Patient Engagement & Scheduling': 'Multi-channel patient outreach, scheduling, and follow-up capabilities.',
    'Record-Action-Alignment Model': 'Framework that unifies clinical, financial, and policy data for continuous care coordination.',
    'Autonomous Supply Chain OS': 'Operating system approach to supply chain that replaces consensus-driven planning with autonomous execution.',
    'Agentic S&OE': 'Agentic sales and operations execution that fuses planning and execution into continuous decision loops.',
    'Messy Data Ingestion': 'Accepts and normalizes raw operational data without requiring pre-cleaning or transformation.',
    'Augentic Ontology': 'Context-aware ontology encoding constraints, rules, and trade-offs across supply chain networks.',
    'Signal-to-Execution Velocity': 'Collapses the gap between detecting signals and executing responses in real-time.',
    'AI-Native Freight Audit': 'Freight audit platform built from the ground up with AI at its core, not bolted on.',
    'Predictive Carrier Analytics': 'AI-powered analytics for predicting carrier performance and preventing disruptions.',
    'Automated Contract Compliance': 'Continuous monitoring of transportation contracts with instant alerts for violations.',
    'Freight Cost Optimization': 'AI-driven optimization of transportation spend and routing decisions.',
    'Normalized Supply Chain Data': 'Platform built on 25+ years of normalized transportation and logistics data.',
    'Medical Imaging AI': 'Specialized AI for medical imaging including diagnostics, workflow optimization, and clinical decision support.',
    'Clinical Decision Support': 'AI-powered tools that provide clinical recommendations and insights at point of care.',
    'Hospital Operations Optimization': 'AI solutions for optimizing hospital workflows, capacity, and resource allocation.',
    'Device-embedded AI': 'AI capabilities built directly into medical devices for real-time analysis and support.',
    'Concurrent Planning & Execution': 'Unique ability to plan and execute simultaneously with instant synchronization across the supply chain.',
    'Supply Chain Data Fabric': 'Unified data layer connecting and contextualizing internal and external data sources.',
    'AI-infused End-to-End Platform': 'Comprehensive platform with AI capabilities integrated throughout planning and execution.',
    'Scenario Modeling at Scale': 'Ability to create and run unlimited scenarios instantly to evaluate decision impacts.',
    'Real-time Supply Chain Synchronization': 'Continuous synchronization of data, people, and processes across the entire supply chain network.'
  };

  // Capabilities mapped from Gartner framework, Deep-SKAI documents, and competitor websites
  const capabilityData = {
    'Arbiter': {
      mandatory: {
        'Decision Modeling': true,
        'Decision Collaboration': true,
        'Decision Service Composition': true,
        'Decision Execution': true,
        'Decision Monitoring': true,
        'Decision Governance': true
      },
      common: {
        'Rule- and Logic-Based Techniques': true,
        'Machine Learning Techniques': true,
        'Real-Time Event Stream Techniques': true,
        'Business Intelligence Techniques': true,
        'Multimodal D&A Prep Techniques': true,
        'Natural Language Techniques': true,
        'Graph and Knowledge Techniques': false,
        'Optimization/Simulation Techniques': true,
        'AI Agents for DI Techniques': true
      },
      differentiated: {
        'Healthcare Care Orchestration': true,
        'Referral & Authorization Automation': true,
        'Provider Network Optimization': true,
        'Patient Engagement & Scheduling': true,
        'Record-Action-Alignment Model': true,
        'Closed-loop Execution': true
      }
    },
    'Auger': {
      mandatory: {
        'Decision Modeling': true,
        'Decision Collaboration': true,
        'Decision Service Composition': true,
        'Decision Execution': true,
        'Decision Monitoring': true,
        'Decision Governance': true
      },
      common: {
        'Rule- and Logic-Based Techniques': true,
        'Machine Learning Techniques': true,
        'Real-Time Event Stream Techniques': true,
        'Business Intelligence Techniques': true,
        'Multimodal D&A Prep Techniques': true,
        'Natural Language Techniques': true,
        'Graph and Knowledge Techniques': false,
        'Optimization/Simulation Techniques': true,
        'AI Agents for DI Techniques': true
      },
      differentiated: {
        'Autonomous Supply Chain OS': true,
        'Agentic S&OE': true,
        'Messy Data Ingestion': true,
        'Augentic Ontology': true,
        'Signal-to-Execution Velocity': true,
        'Supply Chain Domain Focus': true
      }
    },
    'GE HealthCare': {
      mandatory: {
        'Decision Modeling': true,
        'Decision Collaboration': true,
        'Decision Service Composition': true,
        'Decision Execution': true,
        'Decision Monitoring': true,
        'Decision Governance': true
      },
      common: {
        'Rule- and Logic-Based Techniques': true,
        'Machine Learning Techniques': true,
        'Real-Time Event Stream Techniques': true,
        'Business Intelligence Techniques': true,
        'Multimodal D&A Prep Techniques': true,
        'Natural Language Techniques': true,
        'Graph and Knowledge Techniques': false,
        'Optimization/Simulation Techniques': false,
        'AI Agents for DI Techniques': true
      },
      differentiated: {
        'Medical Imaging AI': true,
        'Clinical Decision Support': true,
        'Hospital Operations Optimization': true,
        'Device-embedded AI': true,
        'Regulated Industry Focus': true
      }
    },
    'Kinaxis Maestro': {
      mandatory: {
        'Decision Modeling': true,
        'Decision Collaboration': true,
        'Decision Service Composition': true,
        'Decision Execution': true,
        'Decision Monitoring': true,
        'Decision Governance': true
      },
      common: {
        'Rule- and Logic-Based Techniques': true,
        'Machine Learning Techniques': true,
        'Real-Time Event Stream Techniques': true,
        'Business Intelligence Techniques': true,
        'Multimodal D&A Prep Techniques': true,
        'Natural Language Techniques': true,
        'Graph and Knowledge Techniques': false,
        'Optimization/Simulation Techniques': true,
        'AI Agents for DI Techniques': true
      },
      differentiated: {
        'Concurrent Planning & Execution': true,
        'Supply Chain Data Fabric': true,
        'AI-infused End-to-End Platform': true,
        'Scenario Modeling & What-if Analysis': true,
        'Real-time Supply Chain Synchronization': true,
        'Supply Chain Domain Focus': true
      }
    },
    'Trax Technologies': {
      mandatory: {
        'Decision Modeling': true,
        'Decision Collaboration': true,
        'Decision Service Composition': true,
        'Decision Execution': true,
        'Decision Monitoring': true,
        'Decision Governance': true
      },
      common: {
        'Rule- and Logic-Based Techniques': true,
        'Machine Learning Techniques': true,
        'Real-Time Event Stream Techniques': true,
        'Business Intelligence Techniques': true,
        'Multimodal D&A Prep Techniques': true,
        'Natural Language Techniques': true,
        'Graph and Knowledge Techniques': false,
        'Optimization/Simulation Techniques': true,
        'AI Agents for DI Techniques': true
      },
      differentiated: {
        'AI-Native Freight Audit': true,
        'Predictive Carrier Analytics': true,
        'Automated Contract Compliance': true,
        'Freight Cost Optimization': true,
        'Normalized Supply Chain Data': true,
        'Supply Chain Domain Focus': true
      }
    },
    'ACTICO': {
      mandatory: {
        'Decision Modeling': true,
        'Decision Collaboration': true,
        'Decision Service Composition': true,
        'Decision Execution': true,
        'Decision Monitoring': true,
        'Decision Governance': true
      },
      common: {
        'Rule- and Logic-Based Techniques': true,
        'Machine Learning Techniques': true,
        'Real-Time Event Stream Techniques': true,
        'Business Intelligence Techniques': true,
        'Multimodal D&A Prep Techniques': true,
        'Natural Language Techniques': true,
        'Graph and Knowledge Techniques': false,
        'Optimization/Simulation Techniques': false,
        'AI Agents for DI Techniques': true
      },
      differentiated: {
        'Low-code Composable Architecture': true,
        'Regulated Industry Focus': true,
        'Version Control & Traceability': true
      }
    },
    'Aera Technology': {
      mandatory: {
        'Decision Modeling': true,
        'Decision Collaboration': true,
        'Decision Service Composition': true,
        'Decision Execution': true,
        'Decision Monitoring': true,
        'Decision Governance': true
      },
      common: {
        'Rule- and Logic-Based Techniques': true,
        'Machine Learning Techniques': true,
        'Real-Time Event Stream Techniques': true,
        'Business Intelligence Techniques': true,
        'Multimodal D&A Prep Techniques': true,
        'Natural Language Techniques': true,
        'Graph and Knowledge Techniques': true,
        'Optimization/Simulation Techniques': true,
        'AI Agents for DI Techniques': false
      },
      differentiated: {
        'Supply Chain Domain Focus': true,
        'Automated ML Capabilities': true,
        'API-first / Composable Architecture': true,
        'Human-in-the-loop Recommendations': true
      }
    },
    'CRIF': {
      mandatory: {
        'Decision Modeling': true,
        'Decision Collaboration': true,
        'Decision Service Composition': true,
        'Decision Execution': true,
        'Decision Monitoring': true,
        'Decision Governance': true
      },
      common: {
        'Rule- and Logic-Based Techniques': true,
        'Machine Learning Techniques': false,
        'Real-Time Event Stream Techniques': false,
        'Business Intelligence Techniques': true,
        'Multimodal D&A Prep Techniques': false,
        'Natural Language Techniques': false,
        'Graph and Knowledge Techniques': false,
        'Optimization/Simulation Techniques': true,
        'AI Agents for DI Techniques': false
      },
      differentiated: {
        'Credit Life Cycle Focus': true,
        'No-code Platform': true,
        'Declarative Rule Expression': true
      }
    },
    'Decisions': {
      mandatory: {
        'Decision Modeling': true,
        'Decision Collaboration': true,
        'Decision Service Composition': true,
        'Decision Execution': true,
        'Decision Monitoring': true,
        'Decision Governance': true
      },
      common: {
        'Rule- and Logic-Based Techniques': true,
        'Machine Learning Techniques': true,
        'Real-Time Event Stream Techniques': true,
        'Business Intelligence Techniques': true,
        'Multimodal D&A Prep Techniques': true,
        'Natural Language Techniques': true,
        'Graph and Knowledge Techniques': false,
        'Optimization/Simulation Techniques': false,
        'AI Agents for DI Techniques': true
      },
      differentiated: {
        'Workflow & Business Rule Engine': true,
        'Low-code Visual Designers': true,
        'Composite AI for Decision Flows': true
      }
    },
    'Faculty': {
      mandatory: {
        'Decision Modeling': true,
        'Decision Collaboration': true,
        'Decision Service Composition': true,
        'Decision Execution': true,
        'Decision Monitoring': true,
        'Decision Governance': true
      },
      common: {
        'Rule- and Logic-Based Techniques': true,
        'Machine Learning Techniques': true,
        'Real-Time Event Stream Techniques': false,
        'Business Intelligence Techniques': true,
        'Multimodal D&A Prep Techniques': false,
        'Natural Language Techniques': true,
        'Graph and Knowledge Techniques': false,
        'Optimization/Simulation Techniques': true,
        'AI Agents for DI Techniques': false
      },
      differentiated: {
        'Computational Twin Framework': true,
        'Scenario Modeling & What-if Analysis': true,
        'Learning from Human Feedback': true
      }
    },
    'FICO': {
      mandatory: {
        'Decision Modeling': true,
        'Decision Collaboration': true,
        'Decision Service Composition': true,
        'Decision Execution': true,
        'Decision Monitoring': true,
        'Decision Governance': true
      },
      common: {
        'Rule- and Logic-Based Techniques': true,
        'Machine Learning Techniques': true,
        'Real-Time Event Stream Techniques': true,
        'Business Intelligence Techniques': true,
        'Multimodal D&A Prep Techniques': true,
        'Natural Language Techniques': false,
        'Graph and Knowledge Techniques': true,
        'Optimization/Simulation Techniques': true,
        'AI Agents for DI Techniques': false
      },
      differentiated: {
        'Advanced Event Stream Processing': true,
        'Decision Blueprints & Templates Library': true,
        'Mathematical Optimization Engine': true,
        'Banking & Investment Services Focus': true,
        'API-first / Composable Architecture': true
      }
    },
    'FlexRule': {
      mandatory: {
        'Decision Modeling': true,
        'Decision Collaboration': true,
        'Decision Service Composition': true,
        'Decision Execution': true,
        'Decision Monitoring': true,
        'Decision Governance': true
      },
      common: {
        'Rule- and Logic-Based Techniques': true,
        'Machine Learning Techniques': true,
        'Real-Time Event Stream Techniques': false,
        'Business Intelligence Techniques': true,
        'Multimodal D&A Prep Techniques': true,
        'Natural Language Techniques': false,
        'Graph and Knowledge Techniques': false,
        'Optimization/Simulation Techniques': true,
        'AI Agents for DI Techniques': false
      },
      differentiated: {
        'API-first / Composable Architecture': true,
        'Decision-centric UI': true,
        'DMN Standard Support': true,
        'Dynamic Decision Graph': true
      }
    },
    'IBM': {
      mandatory: {
        'Decision Modeling': true,
        'Decision Collaboration': true,
        'Decision Service Composition': true,
        'Decision Execution': true,
        'Decision Monitoring': true,
        'Decision Governance': true
      },
      common: {
        'Rule- and Logic-Based Techniques': true,
        'Machine Learning Techniques': true,
        'Real-Time Event Stream Techniques': false,
        'Business Intelligence Techniques': true,
        'Multimodal D&A Prep Techniques': true,
        'Natural Language Techniques': true,
        'Graph and Knowledge Techniques': false,
        'Optimization/Simulation Techniques': true,
        'AI Agents for DI Techniques': true
      },
      differentiated: {
        'Cloud Pak for Data': true,
        'Cloud Pak for Business Automation': true,
        'API-first / Composable Architecture': true,
        'NLP Capabilities': true
      }
    },
    'InRule Technology': {
      mandatory: {
        'Decision Modeling': true,
        'Decision Collaboration': true,
        'Decision Service Composition': true,
        'Decision Execution': true,
        'Decision Monitoring': true,
        'Decision Governance': true
      },
      common: {
        'Rule- and Logic-Based Techniques': true,
        'Machine Learning Techniques': true,
        'Real-Time Event Stream Techniques': true,
        'Business Intelligence Techniques': true,
        'Multimodal D&A Prep Techniques': true,
        'Natural Language Techniques': false,
        'Graph and Knowledge Techniques': false,
        'Optimization/Simulation Techniques': true,
        'AI Agents for DI Techniques': false
      },
      differentiated: {
        'Explainable AI with Bias Detection': true,
        'Modular Decision Services': true,
        'Flexible Deployment Options': true,
        'Regulated Industry Focus': true
      }
    },
    'o9 Solutions': {
      mandatory: {
        'Decision Modeling': true,
        'Decision Collaboration': true,
        'Decision Service Composition': true,
        'Decision Execution': true,
        'Decision Monitoring': true,
        'Decision Governance': true
      },
      common: {
        'Rule- and Logic-Based Techniques': true,
        'Machine Learning Techniques': true,
        'Real-Time Event Stream Techniques': true,
        'Business Intelligence Techniques': true,
        'Multimodal D&A Prep Techniques': true,
        'Natural Language Techniques': true,
        'Graph and Knowledge Techniques': false,
        'Optimization/Simulation Techniques': true,
        'AI Agents for DI Techniques': false
      },
      differentiated: {
        'Integrated Business Planning': true,
        'Supply Chain & Commercial Planning': true,
        'Digital Brain Platform': true,
        'Supply Chain Domain Focus': true
      }
    },
    'Oracle': {
      mandatory: {
        'Decision Modeling': true,
        'Decision Collaboration': true,
        'Decision Service Composition': true,
        'Decision Execution': true,
        'Decision Monitoring': true,
        'Decision Governance': true
      },
      common: {
        'Rule- and Logic-Based Techniques': true,
        'Machine Learning Techniques': true,
        'Real-Time Event Stream Techniques': true,
        'Business Intelligence Techniques': true,
        'Multimodal D&A Prep Techniques': true,
        'Natural Language Techniques': true,
        'Graph and Knowledge Techniques': true,
        'Optimization/Simulation Techniques': false,
        'AI Agents for DI Techniques': false
      },
      differentiated: {
        'OCI Integration & Analytics Cloud': true,
        'Autogenerated Insights': true,
        'Decision Observability': true
      }
    },
    'Pegasystems': {
      mandatory: {
        'Decision Modeling': true,
        'Decision Collaboration': true,
        'Decision Service Composition': true,
        'Decision Execution': true,
        'Decision Monitoring': true,
        'Decision Governance': true
      },
      common: {
        'Rule- and Logic-Based Techniques': true,
        'Machine Learning Techniques': true,
        'Real-Time Event Stream Techniques': true,
        'Business Intelligence Techniques': false,
        'Multimodal D&A Prep Techniques': true,
        'Natural Language Techniques': true,
        'Graph and Knowledge Techniques': false,
        'Optimization/Simulation Techniques': true,
        'AI Agents for DI Techniques': true
      },
      differentiated: {
        'Customer Decision Hub': true,
        'Process AI': true,
        'Agentic Process Fabric': true,
        'Decision Analytics Dashboard': true,
        'API-first / Composable Architecture': true
      }
    },
    'Quantexa': {
      mandatory: {
        'Decision Modeling': true,
        'Decision Collaboration': true,
        'Decision Service Composition': true,
        'Decision Execution': true,
        'Decision Monitoring': true,
        'Decision Governance': true
      },
      common: {
        'Rule- and Logic-Based Techniques': true,
        'Machine Learning Techniques': true,
        'Real-Time Event Stream Techniques': true,
        'Business Intelligence Techniques': true,
        'Multimodal D&A Prep Techniques': true,
        'Natural Language Techniques': true,
        'Graph and Knowledge Techniques': true,
        'Optimization/Simulation Techniques': false,
        'AI Agents for DI Techniques': false
      },
      differentiated: {
        'Entity Resolution at Scale': true,
        'Contextual Fabric': true,
        'Graph Analytics Core': true,
        'Real-time Policy Enforcement': true
      }
    },
    'RelationalAI': {
      mandatory: {
        'Decision Modeling': true,
        'Decision Collaboration': false,
        'Decision Service Composition': true,
        'Decision Execution': true,
        'Decision Monitoring': false,
        'Decision Governance': false
      },
      common: {
        'Rule- and Logic-Based Techniques': false,
        'Machine Learning Techniques': true,
        'Real-Time Event Stream Techniques': false,
        'Business Intelligence Techniques': false,
        'Multimodal D&A Prep Techniques': true,
        'Natural Language Techniques': false,
        'Graph and Knowledge Techniques': true,
        'Optimization/Simulation Techniques': false,
        'AI Agents for DI Techniques': false
      },
      differentiated: {
        'Code-first Development': true,
        'Snowflake Native': true,
        'Graph Neural Networks': true,
        'Python API Access': true
      }
    },
    'Rulex': {
      mandatory: {
        'Decision Modeling': true,
        'Decision Collaboration': true,
        'Decision Service Composition': true,
        'Decision Execution': true,
        'Decision Monitoring': true,
        'Decision Governance': true
      },
      common: {
        'Rule- and Logic-Based Techniques': true,
        'Machine Learning Techniques': true,
        'Real-Time Event Stream Techniques': false,
        'Business Intelligence Techniques': true,
        'Multimodal D&A Prep Techniques': true,
        'Natural Language Techniques': false,
        'Graph and Knowledge Techniques': false,
        'Optimization/Simulation Techniques': true,
        'AI Agents for DI Techniques': false
      },
      differentiated: {
        'No-code Platform': true,
        'Explainable AI with Bias Detection': true,
        'AutoML': true,
        'Mathematical Optimization Engine': true
      }
    },
    'Sapiens': {
      mandatory: {
        'Decision Modeling': true,
        'Decision Collaboration': true,
        'Decision Service Composition': true,
        'Decision Execution': true,
        'Decision Monitoring': true,
        'Decision Governance': true
      },
      common: {
        'Rule- and Logic-Based Techniques': true,
        'Machine Learning Techniques': true,
        'Real-Time Event Stream Techniques': true,
        'Business Intelligence Techniques': true,
        'Multimodal D&A Prep Techniques': true,
        'Natural Language Techniques': false,
        'Graph and Knowledge Techniques': false,
        'Optimization/Simulation Techniques': false,
        'AI Agents for DI Techniques': false
      },
      differentiated: {
        'The Decision Model (TDM) Methodology': true,
        'AI-driven Logic Discovery': true,
        'Patented Graphical Model': true,
        'Central Repository': true
      }
    },
    'SAS': {
      mandatory: {
        'Decision Modeling': true,
        'Decision Collaboration': true,
        'Decision Service Composition': true,
        'Decision Execution': true,
        'Decision Monitoring': true,
        'Decision Governance': true
      },
      common: {
        'Rule- and Logic-Based Techniques': true,
        'Machine Learning Techniques': true,
        'Real-Time Event Stream Techniques': true,
        'Business Intelligence Techniques': true,
        'Multimodal D&A Prep Techniques': true,
        'Natural Language Techniques': true,
        'Graph and Knowledge Techniques': true,
        'Optimization/Simulation Techniques': true,
        'AI Agents for DI Techniques': true
      },
      differentiated: {
        'SAS Viya Platform': true,
        'Comprehensive Analytics Suite': true,
        'Advanced ML Capabilities': true,
        'Enterprise-scale Analytics': true,
        'API-first / Composable Architecture': true
      }
    }
  };

  // Deep-SKAI capabilities
  const deepSKAI = {
    mandatory: {
      'Decision Modeling': true,
      'Decision Collaboration': true,
      'Decision Service Composition': true,
      'Decision Execution': true,
      'Decision Monitoring': true,
      'Decision Governance': true
    },
    common: {
      'Rule- and Logic-Based Techniques': true,
      'Machine Learning Techniques': true,
      'Real-Time Event Stream Techniques': true,
      'Business Intelligence Techniques': true,
      'Multimodal D&A Prep Techniques': true,
      'Natural Language Techniques': true,
      'Graph and Knowledge Techniques': true,
      'Optimization/Simulation Techniques': true,
      'AI Agents for DI Techniques': true
    },
    differentiated: {
      'Mission Control Layer': true,
      'Closed-loop Execution': true,
      'Digital Twin Simulation': true,
      'Data Harmonization & Semantic Layer': true,
      'Policy-aware AI Coordination': true,
      'Operational Readiness & Time-windowing': true,
      'Financial Coordination & Liquidity Guardrails': true,
      'Industry Packs (Vertical Customization)': true,
      'Experiential Interface (Briefing/Explore/Work Modes)': true,
      'Continuous Learning Loop': true,
      'Forecasting & Demand Planning': true,
      'Risk Detection, Prioritization, and Work Management': true,
      'Supply and Vendor Constraint Coordination': true,
      'Source–Order–Deliver Network Management': true,
      'Multimodal Transportation Visibility and Tracking': true
    }
  };

  const renderComparison = () => {
    if (!selectedCompetitor) return null;

    const competitorData = capabilityData[selectedCompetitor];

    return (
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Deep-SKAI vs {selectedCompetitor}
        </h2>

        {/* Mandatory Capabilities */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4 text-gray-700 border-b-2 border-blue-500 pb-2">
            Mandatory Capabilities
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 border-b-2 border-r border-gray-300">Capability</th>
                  <th className="text-center p-3 border-b-2 border-r border-gray-300 w-24">Deep-SKAI</th>
                  <th className="text-center p-3 border-b-2 border-r border-gray-300 w-24">{selectedCompetitor}</th>
                  <th className="text-left p-3 border-b-2 border-gray-300 w-96">How They Execute</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(deepSKAI.mandatory).map(([capability, hasCapability]) => {
                  const competitorHasCapability = competitorData.mandatory[capability];
                  const deepSKAIHow = deepSKAIExecution[capability] || 'Not available';
                  const competitorHow = (competitorExecution[selectedCompetitor] && competitorExecution[selectedCompetitor][capability]) || 'Not available';
                  
                  return (
                    <tr key={capability} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-3 border-r border-gray-200">
                        <div className="font-medium text-gray-900">{capability}</div>
                        <div className="text-sm text-gray-600 mt-1">{capabilityDescriptions[capability]}</div>
                      </td>
                      <td className="text-center p-3 border-r border-gray-200">
                        {hasCapability ? (
                          <span className="text-green-600 text-xl">✓</span>
                        ) : (
                          <span className="text-gray-300 text-xl">—</span>
                        )}
                      </td>
                      <td className="text-center p-3 border-r border-gray-200">
                        {competitorHasCapability ? (
                          <span className="text-green-600 text-xl">✓</span>
                        ) : (
                          <span className="text-gray-300 text-xl">—</span>
                        )}
                      </td>
                      <td className="p-3">
                        {hasCapability && (
                          <div className="mb-2">
                            <span className="font-semibold text-blue-700">Deep-SKAI:</span>
                            <span className="text-sm text-gray-700 ml-1">{deepSKAIHow}</span>
                          </div>
                        )}
                        {competitorHasCapability && (
                          <div>
                            <span className="font-semibold text-purple-700">{selectedCompetitor}:</span>
                            <span className="text-sm text-gray-700 ml-1">{competitorHow}</span>
                          </div>
                        )}
                        {!hasCapability && !competitorHasCapability && (
                          <span className="text-sm text-gray-400 italic">Neither platform has this capability</span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Common Capabilities */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4 text-gray-700 border-b-2 border-blue-500 pb-2">
            Common Capabilities
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 border-b-2 border-r border-gray-300">Capability</th>
                  <th className="text-center p-3 border-b-2 border-r border-gray-300 w-24">Deep-SKAI</th>
                  <th className="text-center p-3 border-b-2 border-r border-gray-300 w-24">{selectedCompetitor}</th>
                  <th className="text-left p-3 border-b-2 border-gray-300 w-96">How They Execute</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(deepSKAI.common).map(([capability, hasCapability]) => {
                  const competitorHasCapability = competitorData.common[capability];
                  const deepSKAIHow = deepSKAIExecution[capability] || 'Not available';
                  const competitorHow = (competitorExecution[selectedCompetitor] && competitorExecution[selectedCompetitor][capability]) || 'Not available';
                  
                  return (
                    <tr key={capability} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-3 border-r border-gray-200">
                        <div className="font-medium text-gray-900">{capability}</div>
                        <div className="text-sm text-gray-600 mt-1">{capabilityDescriptions[capability]}</div>
                      </td>
                      <td className="text-center p-3 border-r border-gray-200">
                        {hasCapability ? (
                          <span className="text-green-600 text-xl">✓</span>
                        ) : (
                          <span className="text-gray-300 text-xl">—</span>
                        )}
                      </td>
                      <td className="text-center p-3 border-r border-gray-200">
                        {competitorHasCapability ? (
                          <span className="text-green-600 text-xl">✓</span>
                        ) : (
                          <span className="text-gray-300 text-xl">—</span>
                        )}
                      </td>
                      <td className="p-3">
                        {hasCapability && (
                          <div className="mb-2">
                            <span className="font-semibold text-blue-700">Deep-SKAI:</span>
                            <span className="text-sm text-gray-700 ml-1">{deepSKAIHow}</span>
                          </div>
                        )}
                        {competitorHasCapability && (
                          <div>
                            <span className="font-semibold text-purple-700">{selectedCompetitor}:</span>
                            <span className="text-sm text-gray-700 ml-1">{competitorHow}</span>
                          </div>
                        )}
                        {!hasCapability && !competitorHasCapability && (
                          <span className="text-sm text-gray-400 italic">Neither platform has this capability</span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Differentiated Capabilities */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4 text-gray-700 border-b-2 border-blue-500 pb-2">
            Differentiated Capabilities
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 border-b-2 border-r border-gray-300">Capability</th>
                  <th className="text-center p-3 border-b-2 border-r border-gray-300 w-24">Deep-SKAI</th>
                  <th className="text-center p-3 border-b-2 border-r border-gray-300 w-24">{selectedCompetitor}</th>
                  <th className="text-left p-3 border-b-2 border-gray-300 w-96">How They Execute</th>
                </tr>
              </thead>
              <tbody>
                {/* Deep-SKAI unique capabilities */}
                {Object.entries(deepSKAI.differentiated).map(([capability]) => {
                  const competitorHasCapability = competitorData.differentiated && competitorData.differentiated[capability];
                  const deepSKAIHow = deepSKAIExecution[capability] || 'Not available';
                  const competitorHow = (competitorExecution[selectedCompetitor] && competitorExecution[selectedCompetitor][capability]) || 'Not available';
                  
                  return (
                    <tr key={capability} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-3 border-r border-gray-200">
                        <div className="font-medium text-gray-900">{capability}</div>
                        <div className="text-sm text-gray-600 mt-1">{capabilityDescriptions[capability]}</div>
                      </td>
                      <td className="text-center p-3 border-r border-gray-200">
                        <span className="text-green-600 text-xl">✓</span>
                      </td>
                      <td className="text-center p-3 border-r border-gray-200">
                        {competitorHasCapability ? (
                          <span className="text-green-600 text-xl">✓</span>
                        ) : (
                          <span className="text-gray-300 text-xl">—</span>
                        )}
                      </td>
                      <td className="p-3">
                        <div className="mb-2">
                          <span className="font-semibold text-blue-700">Deep-SKAI:</span>
                          <span className="text-sm text-gray-700 ml-1">{deepSKAIHow}</span>
                        </div>
                        {competitorHasCapability && (
                          <div>
                            <span className="font-semibold text-purple-700">{selectedCompetitor}:</span>
                            <span className="text-sm text-gray-700 ml-1">{competitorHow}</span>
                          </div>
                        )}
                      </td>
                    </tr>
                  );
                })}
                {/* Competitor unique capabilities */}
                {competitorData.differentiated && Object.entries(competitorData.differentiated).map(([capability]) => {
                  if (!deepSKAI.differentiated[capability]) {
                    const competitorHow = (competitorExecution[selectedCompetitor] && competitorExecution[selectedCompetitor][capability]) || 'Not available';
                    
                    return (
                      <tr key={capability} className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="p-3 border-r border-gray-200">
                          <div className="font-medium text-gray-900">{capability}</div>
                          <div className="text-sm text-gray-600 mt-1">{capabilityDescriptions[capability]}</div>
                        </td>
                        <td className="text-center p-3 border-r border-gray-200">
                          <span className="text-gray-300 text-xl">—</span>
                        </td>
                        <td className="text-center p-3 border-r border-gray-200">
                          <span className="text-green-600 text-xl">✓</span>
                        </td>
                        <td className="p-3">
                          <div className="mb-2">
                            <span className="font-semibold text-blue-700">Deep-SKAI:</span>
                            <span className="text-sm text-gray-700 ml-1">Not a core Deep-SKAI capability</span>
                          </div>
                          <div>
                            <span className="font-semibold text-purple-700">{selectedCompetitor}:</span>
                            <span className="text-sm text-gray-700 ml-1">{competitorHow}</span>
                          </div>
                        </td>
                      </tr>
                    );
                  }
                  return null;
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto p-8 bg-white">
      <h1 className="text-3xl font-bold mb-2 text-gray-900">
        Deep-SKAI Competitive Analysis
      </h1>
      <p className="text-gray-600 mb-8">
        Compare Deep-SKAI capabilities against Decision Intelligence Platform competitors
      </p>

      {/* Competitor Selection */}
      <div className="mb-8">
        <label className="block text-lg font-semibold mb-3 text-gray-700">
          Which competitor do you want to compare Deep-SKAI to?
        </label>
        <div className="relative">
          <select
            value={selectedCompetitor}
            onChange={(e) => setSelectedCompetitor(e.target.value)}
            className="w-full max-w-md p-3 pr-10 border-2 border-gray-300 rounded-lg appearance-none cursor-pointer hover:border-blue-500 focus:outline-none focus:border-blue-500 text-lg"
          >
            <option value="">Select a competitor...</option>
            {competitors.map((competitor) => (
              <option key={competitor} value={competitor}>
                {competitor}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={24} />
        </div>
      </div>

      {/* Comparison Table */}
      {renderComparison()}

      {!selectedCompetitor && (
        <div className="text-center py-12 text-gray-400">
          <p className="text-lg">Select a competitor from the dropdown above to view the comparison</p>
        </div>
      )}
    </div>
  );
};

export default CompetitiveAnalysis;
