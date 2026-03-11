export const resumeData = {
  basics: {
    name: "Muhammad Anas Shakeel",
    title: "Data Analyst | BI Developer",
    summary:
      "Architecting scalable pipelines and translating complex data into strategic business intelligence. Dedicated to blending classical analytical rigor with next-generation machine learning techniques.",
    location: "Berlin, Germany",
    email: "anasshakeel9@gmail.com",
    phone: "+49 15753316338",
    links: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/anasshakeel9",
      },
      {
        name: "GitHub",
        url: "https://github.com/anasshakeel9",
      },
      {
        name: "Portfolio",
        url: "#",
      },
    ],
  },
  experience: [
    {
      company: "GE Vernova",
      role: "Working Student Data Analytics",
      dates: "November 2024 - Present",
      location: "Berlin, Germany",
      bullets: [
        "Developed Power BI and Tableau dashboards tracking 25+ KPIs across business and user datasets, directly informing strategic decisions for senior stakeholders.",
        "Automated data extraction and transformation pipelines in Python and SQL, cutting manual reporting time and enabling faster, more reliable performance analysis.",
        "Served as analytics liaison between business and technical teams, translating stakeholder requirements into actionable insights and documented reporting workflows.",
      ],
    },
    {
      company: "Agilosoft",
      role: "Software Quality Assurance Engineer",
      dates: "February 2023 - May 2023",
      location: "Karachi, Pakistan",
      bullets: [
        "Wrote and executed complex SQL queries to extract, validate, and reconcile data across 7+ databases, ensuring high data quality for business-critical systems.",
        "Supported data integrity, consistency, and reporting readiness for downstream analytics and management use.",
      ],
    },
    {
      company: "Gryphenix",
      role: "Business Development Intern",
      dates: "August 2022 - November 2022",
      location: "Karachi, Pakistan",
      bullets: [
        "Spearheaded data-driven market analysis, identifying 3 new market segments with high growth potential.",
      ],
    },
  ],
  achievements: [],
  projects: [
    {
      title: "End-to-End Analytics Engineering & Executive BI Dashboard",
      description:
        "Designed and built a multi-source ELT data pipeline integrating Xero, ActiveCampaign, and Karbon into BigQuery using APIs and Google Apps Script. Performed complex data transformation, normalization, and consolidation via a master SQL model to create a unified analytics layer — then delivered a multi-page Looker Studio dashboard surfacing executive-level KPIs and business insights across finance, operations, and client workflows.",
      outcomes: [
        "Integrated Xero, ActiveCampaign, and Karbon into a single BigQuery data warehouse via APIs and Google Apps Script",
        "Built a master SQL model for cross-source data normalization and consolidation",
        "Delivered a multi-page Looker Studio dashboard with executive-level KPIs",
        "Automated data refresh cycles, eliminating manual reporting overhead entirely",
      ],
      image: "/project-ete.png",
      video: "https://www.youtube.com/embed/fNPhyQnIUVo",
      bullets: [
        "Designed and built a multi-source ELT pipeline integrating Xero, ActiveCampaign, and Karbon into BigQuery; built a unified SQL analytics layer and multi-page Looker Studio executive dashboard.",
      ],
      technologies: ["BigQuery", "SQL", "Looker Studio", "REST APIs", "Google Apps Script", "Xero", "ActiveCampaign", "Karbon"],
    },
    {
      title: "Marketing Analytics Data Integration & BI Pipeline",
      description:
        "Developed a multi-source Marketing Analytics Dashboard in Looker Studio by blending data from Meta Ads, Google Ads, GA4, Jobber, and CallRail to provide a unified view of lead generation, financial outcomes, and channel performance. The dashboard visualizes critical KPIs such as revenue by channel, lead funnel conversion rates, and job distribution — leveraging data blending, custom calculated fields, and interactive filters to deliver actionable business intelligence and boost ROI tracking across all channels.",
      outcomes: [
        "Unified 5 data sources (Meta Ads, Google Ads, GA4, Jobber, CallRail) into a single Looker Studio dashboard",
        "Visualized revenue by channel, lead funnel conversion rates, and job distribution KPIs",
        "Implemented data blending and custom calculated fields for cross-source metrics",
        "Enabled data-driven optimization of marketing spend and ROI tracking across all channels",
      ],
      image: "/project-marketing.png",
      video: "https://www.youtube.com/embed/HI81fjidShE",
      bullets: [
        "Built a multi-source marketing analytics dashboard blending Meta Ads, Google Ads, GA4, Jobber, and CallRail data to track revenue, lead funnels, and channel ROI in Looker Studio.",
      ],
      technologies: ["Meta Ads", "Google Ads", "GA4", "Jobber API", "CallRail", "Looker Studio", "SQL", "Data Blending"],
    },
    {
      title: "Big Data Analytics with Apache Spark",
      description:
        "Built an end-to-end big data ML pipeline using Apache Spark and PySpark MLlib to predict diabetes outcomes from the Pima Indians Diabetes Dataset (768 records, 8 clinical features). The pipeline covers distributed data ingestion, exploratory data analysis, Pearson correlation analysis, feature engineering with VectorAssembler, and benchmarking of five classification algorithms — identifying Logistic Regression as the top performer at 80.77% accuracy.",
      outcomes: [
        "Benchmarked 5 ML models (Logistic Regression, Random Forest, Naive Bayes, Decision Tree, GBT) — Logistic Regression achieved best accuracy at 80.77%",
        "Identified Glucose, BMI, and DiabetesPedigreeFunction as the strongest predictors via LR feature coefficients",
        "Performed distributed EDA and Pearson correlation analysis using PySpark and Spark MLlib Statistics",
        "Built full ML pipeline: ingestion → EDA → feature engineering → model training → evaluation",
      ],
      image: "/project-spark.png",
      liveUrl: "https://colab.research.google.com/drive/1YJ_IvbhP3b4Y17PhlFUmGO_pD__GICy2?usp=sharing",
      bullets: [
        "Built a distributed ML pipeline in PySpark benchmarking 5 classifiers on the Pima Indians Diabetes Dataset — Logistic Regression achieved 80.77% accuracy, with Glucose and BMI identified as top predictors.",
      ],
      technologies: ["Apache Spark", "PySpark", "MLlib", "Python", "Big Data"],
    },
    {
      title: "Coffee Shop Sales Dashboard",
      description:
        "Replaced a manual, error-prone reporting process by building a fully automated SQL + Power BI solution for a multi-location coffee shop chain. The dashboard analyzes transactional sales data to surface trends in product performance, customer behavior, and store-level revenue — enabling data-driven decisions on staffing, inventory, and promotions.",
      outcomes: [
        "Identified peak sales periods and days, enabling optimized staffing and inventory management",
        "Ranked product performance across categories to inform assortment and promotional strategy",
        "Highlighted high-performing store locations as candidates for replication or expansion",
        "Replaced manual Excel reporting with an automated, always-on Power BI dashboard",
      ],
      image: "/project-coffee.png",
      video: "https://www.youtube.com/embed/Ewwt3lgWmmk",
      dashboardUrl: "https://drive.google.com/file/d/1FU6BKzhBtAZTYzon4aiokR6EpQt75pKf/view?usp=sharing",
      bullets: [
        "Replaced a manual process by writing SQL queries and a Power BI dashboard to verify and visualize sales data across multiple store locations.",
      ],
      technologies: ["SQL", "Power BI", "Excel", "DAX", "Power Query"],
    },
    {
      title: "Electric Vehicle Adoption Analysis",
      description:
        "Built a Tableau dashboard to help a company understand EV market trends across US states, manufacturers, and model years. The visualization provides a centralized view of the EV landscape, enabling data-driven decisions on marketing focus, product placement, and resource allocation.",
      outcomes: [
        "Revealed Tesla dominates with 50%+ of total vehicle registrations in the dataset",
        "Identified California as the top state with 15,002 EVs registered",
        "Showed 2023 as the peak adoption year with a sharp upward trend since 2021",
        "Enabled targeted marketing strategy recommendations for lower-adoption states",
      ],
      image: "/project-ev.png",
      video: "https://www.youtube.com/embed/4TRFasEtrL8",
      dashboardUrl: "https://drive.google.com/file/d/1XaeRtw9534JEH_y1qKIipuPnjL-53dHl/view",
      bullets: [
        "Created a Tableau dashboard fueled by Excel data, providing a unified view of EV adoption trends across states, manufacturers, and model years.",
      ],
      technologies: ["Tableau", "Excel", "Data Visualization", "Calculated Fields"],
    },
    {
      title: "Leads Analysis Dashboard",
      description:
        "Developed a real-time Looker Studio dashboard connected to live Google Sheets data, enabling a sales team to track won deals and lost leads across all acquisition channels. The solution provides granular visibility into conversion rates, deal sizes, and channel performance — directly informing sales tactics and marketing investment decisions.",
      outcomes: [
        "Identified product-based leads as the highest-converting channel at 100% conversion rate",
        "Pinpointed event channels as the largest source of lost deals by average deal size",
        "Tracked monthly win-loss ratio trends — peaked at 50% in June",
        "Enabled real-time lead tracking through live Google Sheets → Looker Studio connection",
      ],
      image: "/project-leads.png",
      video: "https://www.youtube.com/embed/6YBJSBY133Y",
      dashboardUrl: "https://drive.google.com/file/d/1jWc4FqwqahTjxKMhMoyTQoW7Cg0HKz2l/view",
      bullets: [
        "Developed a dynamic dashboard powered by Google Sheets data, providing in-depth insights into leads performance across acquisition channels.",
      ],
      technologies: ["Looker Studio", "Google Sheets", "Data Modeling", "SQL"],
    },
  ],
  skills: [
    {
      category: "Business Intelligence Tools",
      items: ["Power BI", "Tableau", "Looker Studio", "Advanced Excel"],
    },
    {
      category: "Programming Languages",
      items: ["Python", "SQL", "JavaScript", "DAX", "Power Query (M)"],
    },
    {
      category: "Database",
      items: ["MySQL", "BigQuery", "PostgreSQL", "MongoDB"],
    },
    {
      category: "Software",
      items: ["Primavera P6", "JIRA", "Asana", "Kanban Board"],
    },
    {
      category: "Core Competencies",
      items: ["Data Analysis and Manipulation", "Data Visualization"],
    },
    {
      category: "Languages",
      items: ["English (C1)", "German (A2)", "Urdu (Native)"],
    },
  ],
  education: [
    {
      institution: "Brandenburgische Technische Universität Cottbus",
      degree: "M.Sc., Artificial Intelligence",
      dates: "October 2023 - Present",
    },
    {
      institution: "Bahria University Karachi",
      degree: "B.Sc., Computer Science",
      dates: "February 2019 - February 2023",
    },
  ],
  certifications: [
    {
      name: "Microsoft Azure AI Fundamentals",
      code: "AI-900",
      issuer: "Microsoft",
      url: "https://www.credly.com/badges/0d14ae95-232d-4918-b05e-3c8a17362ff7/public_url",
    },
    {
      name: "Microsoft Azure Data Fundamentals",
      code: "DP-900",
      issuer: "Microsoft",
      url: "https://www.credly.com/badges/0d14ae95-232d-4918-b05e-3c8a17362ff7/public_url",
    },
    {
      name: "Microsoft Azure Fundamentals",
      code: "AZ-900",
      issuer: "Microsoft",
      url: "https://www.credly.com/badges/49b0af06-62fc-400f-a98c-32789639d4e8/public_url",
    },
    {
      name: "Security, Compliance & Identity Fundamentals",
      code: "SC-900",
      issuer: "Microsoft",
      url: "https://www.credly.com/badges/6761ce7f-bd58-4734-912f-b7321a26db6a/public_url",
    },
    {
      name: "SnowPro Core Certification",
      code: "Associate",
      issuer: "Snowflake",
      url: "https://achieve.snowflake.com/61df442b-f454-4c7b-8043-baf581f0f9c4#acc.a4NnqIVE",
    },
    {
      name: "Python Project for Data Science",
      code: "Course",
      issuer: "Coursera",
      url: "https://www.coursera.org/account/accomplishments/verify/6CAZ9NXZ7YKG",
    },
    {
      name: "Data Visualization with Excel and Cognos",
      code: "Course",
      issuer: "Coursera",
      url: "https://www.coursera.org/account/accomplishments/verify/N7JU3W7VADFC",
    },
  ],
  awards: [
    "Certificate Of Appreciation - Certificate for hard work and dedication to the semester project of Fall'2021 for the subject of Artificial Intelligence.",
  ],
  extra: [],
};
