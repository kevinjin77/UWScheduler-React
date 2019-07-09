const suggestions = [
  {
    label: "ACC 604 - Statutory Interpretation"
  },
  {
    label: "ACC 605 - International Tax"
  },
  {
    label: "ACC 606 - Business Valuations"
  },
  {
    label: "ACC 607 - Tax Issues Integration"
  },
  {
    label: "ACC 609 - Financial Statement Analysis"
  },
  {
    label: "ACC 610 - Public Accounting Practice"
  },
  {
    label: "ACC 611 - External Reporting"
  },
  {
    label: "ACC 621 - System Reliability Principles and Criteria"
  },
  {
    label: "ACC 622 - Electronic Commerce"
  },
  {
    label: "ACC 623 - Business Technology Law"
  },
  {
    label: "ACC 626 - IT Assurance and Computer-Assisted Audit Techniques"
  },
  {
    label: "ACC 627 - Business Process Enablement and Project Management"
  },
  {
    label: "ACC 650 - Assurance and Governance"
  },
  {
    label: "ACC 652 - Forensic Accounting"
  },
  {
    label: "ACC 662 - Tax Policy"
  },
  {
    label: "ACC 680 - Performance Measurement and Control systems for Implementing Strategy"
  },
  {
    label: "ACC 681 - Understanding and Managing Organizational Change"
  },
  {
    label: "ACC 682 - Measuring and Managing the Value Creation Process"
  },
  {
    label: "ACC 683 - Emerging Issues in Management and Marketing"
  },
  {
    label: "ACC 684 - Strategy and Business Models"
  },
  {
    label: "ACC 685 - Performance Management"
  },
  {
    label: "ACC 690 - Topics in Accounting"
  },
  {
    label: "ACC 701 - Financial Accounting Research Seminar"
  },
  {
    label: "ACC 702 - Management Accounting Research Seminar"
  },
  {
    label: "ACC 750 - Auditing Research Seminar"
  },
  {
    label: "ACC 760 - Taxation Research Seminar"
  },
  {
    label: "ACC 770 - Finance 1"
  },
  {
    label: "ACC 771 - Finance 2"
  },
  {
    label: "ACC 772 - Finance 3"
  },
  {
    label: "ACC 781 - Introduction to Research 1"
  },
  {
    label: "ACC 784 - Selected Topics in Research Methodology"
  },
  {
    label: "ACTSC 221 - Introductory Financial Mathematics (Non-Specialist Level)"
  },
  {
    label: "ACTSC 231 - Introductory Financial Mathematics"
  },
  {
    label: "ACTSC 232 - Life Contingencies 1"
  },
  {
    label: "ACTSC 291 - Corporate Finance 1"
  },
  {
    label: "ACTSC 331 - Life Contingencies 2"
  },
  {
    label: "ACTSC 371 - Introduction to Investments"
  },
  {
    label: "ACTSC 372 - Corporate Finance"
  },
  {
    label: "ACTSC 391 - Corporate Finance 2"
  },
  {
    label: "ACTSC 431 - Loss Models 1"
  },
  {
    label: "ACTSC 432 - Loss Models 2"
  },
  {
    label: "ACTSC 433 - Analysis of Survival Data"
  },
  {
    label: "ACTSC 445 - Quantitative Enterprise Risk Management"
  },
  {
    label: "ACTSC 446 - Mathematics of Financial Markets"
  },
  {
    label: "ACTSC 453 - Basic Pension Mathematics"
  },
  {
    label: "ACTSC 455 - Advanced Life Insurance Practice"
  },
  {
    label: "ACTSC 462 - Introduction to Property and Casualty Pricing"
  },
  {
    label: "ACTSC 463 - Introduction to Property and Casualty Loss Reserving"
  },
  {
    label: "ACTSC 468 - Readings in Actuarial Science 1"
  },
  {
    label: "ACTSC 469 - Readings in Actuarial Science 2"
  },
  {
    label: "ACTSC 471 - Advanced Corporate Finance"
  },
  {
    label: "ACTSC 611 - Financial Mathematics I"
  },
  {
    label: "ACTSC 612 - Life Insurance Mathematics I"
  },
  {
    label: "ACTSC 613 - Statistics for Actuarial Science"
  },
  {
    label: "ACTSC 614 - Corporate Finance"
  },
  {
    label: "ACTSC 615 - Economics"
  },
  {
    label: "ACTSC 621 - Financial Mathematics II"
  },
  {
    label: "ACTSC 622 - Life Insurance Mathematics II"
  },
  {
    label: "ACTSC 623 - Applied Statistics"
  },
  {
    label: "ACTSC 624 - Stochastic Processes for Actuarial Science"
  },
  {
    label: "ACTSC 625 - Casualty and Health Insurance Mathematics"
  },
  {
    label: "ACTSC 631 - Financial Mathematics III"
  },
  {
    label: "ACTSC 632 - Life Insurance Mathematics III"
  },
  {
    label: "ACTSC 633 - Actuarial Risk Management"
  },
  {
    label: "ACTSC 634 - Quantitative Risk Management"
  },
  {
    label: "ACTSC 635 - Profession Communications in Actuarial Science"
  },
  {
    label: "ACTSC 690 - Literature & Research Studies"
  },
  {
    label: "ACTSC 831 - Loss Models 1"
  },
  {
    label: "ACTSC 832 - Loss Models 2"
  },
  {
    label: "ACTSC 833 - Analysis of Mortality Data"
  },
  {
    label: "ACTSC 845 - Quantitative Enterprise Risk Management"
  },
  {
    label: "ACTSC 846 - Mathematics of Financial Markets"
  },
  {
    label: "ACTSC 853 - Basic Pension Mathematics"
  },
  {
    label: "ACTSC 855 - Advanced Life Insurance Practice"
  },
  {
    label: "ACTSC 862 - Introduction to Property and Casualty Pricing"
  },
  {
    label: "ACTSC 863 - Introduction fo Property and Casuality Loss Reserving"
  },
  {
    label: "ACTSC 936 - Longitudinal Data Analysis"
  },
  {
    label: "ACTSC 961 - Mathematical Methods of Loss Reserving"
  },
  {
    label: "ACTSC 963 - Insurance Surplus Mathematics"
  },
  {
    label: "ACTSC 964 - Topics in Quantitative Risk Management"
  },
  {
    label: "ACTSC 965 - Extreme Value Theory"
  },
  {
    label: "ACTSC 966 - Aggregate Claims Models"
  },
  {
    label: "ACTSC 970 - Finance 1"
  },
  {
    label: "ACTSC 971 - Finance 2"
  },
  {
    label: "ACTSC 972 - Finance 3"
  },
  {
    label: "ACTSC 973 - Portfolio Optimization"
  },
  {
    label: "ACTSC 974 - Financial Econometrics"
  },
  {
    label: "ACTSC 980 - Social Insurance"
  },
  {
    label: "ACTSC 991 - Topics in Actuarial Science"
  },
  {
    label: "ADMGT 601 - Introduction to Financial and Managerial Accounting"
  },
  {
    label: "ACTSC 992 - Seminar in Actuarial Science"
  },
  {
    label: "AFM 101 - Introduction to Financial Accounting"
  },
  {
    label: "AFM 102 - Introduction to Managerial Accounting"
  },
  {
    label: "AFM 121 - Introduction to Global Financial Markets"
  },
  {
    label: "AFM 123 - Accounting Information for Managers"
  },
  {
    label: "AFM 131 - Introduction to Business in North America"
  },
  {
    label: "AFM 201 - Introduction to Professional Practice"
  },
  {
    label: "AFM 202 - Introduction to Public Practice"
  },
  {
    label: "AFM 203 - Introduction to Decision Support"
  },
  {
    label: "AFM 204 - Introduction to Applied Finance"
  },
  {
    label: "AFM 211 - Connections to Business Context"
  },
  {
    label: "AFM 231 - Business Law"
  },
  {
    label: "AFM 241 - Introduction to Business Information Technology"
  },
  {
    label: "AFM 271 - Managerial Finance 1"
  },
  {
    label: "AFM 272 - Corporate Finance 1"
  },
  {
    label: "AFM 432 - Legal Environment and Corporate Governance"
  },
  {
    label: "AFM 273 - Managerial Finance 1"
  },
  {
    label: "AFM 274 - Managerial Finance 2"
  },
  {
    label: "AFM 280 - Introduction to Organizational Behaviour"
  },
  {
    label: "AFM 291 - Intermediate Financial Accounting 1"
  },
  {
    label: "AFM 311 - Connections to Ethical Context"
  },
  {
    label: "AFM 321 - Personal Financial Planning"
  },
  {
    label: "AFM 322 - Derivative Securities"
  },
  {
    label: "AFM 323 - Quantitative Foundations for Finance"
  },
  {
    label: "AFM 328 - Investment Management - Junior Analyst"
  },
  {
    label: "AFM 329 - Investment Management - Senior Analyst"
  },
  {
    label: "AFM 331 - Business Strategy"
  },
  {
    label: "AFM 332 - Accounting, Assurance, and the Law"
  },
  {
    label: "AFM 333 - International Business"
  },
  {
    label: "AFM 341 - Accounting Information Systems"
  },
  {
    label: "AFM 351 - Audit Strategy"
  },
  {
    label: "AFM 352 - Comprehensive/Operational Auditing"
  },
  {
    label: "AFM 361 - Taxation 1"
  },
  {
    label: "AFM 362 - Taxation 1 - Foundations"
  },
  {
    label: "AFM 363 - Taxation 2 - Integration"
  },
  {
    label: "AFM 371 - Managerial Finance 2"
  },
  {
    label: "AFM 372 - Corporate Finance 2"
  },
  {
    label: "AFM 373 - Cases and Applications in Corporate Finance"
  },
  {
    label: "AFM 382 - Performance Measurement and Organization Control"
  },
  {
    label: "AFM 391 - Intermediate Financial Accounting 2"
  },
  {
    label: "AFM 401 - Accounting Theory"
  },
  {
    label: "AFM 411 - Connections Across Competencies for Accounting Professionals"
  },
  {
    label: "AFM 412 - Connections Across Competencies for Finance Professionals"
  },
  {
    label: "AFM 415 - Special Topics"
  },
  {
    label: "AFM 416 - Special Topics in Finance"
  },
  {
    label: "AFM 417 - Special Topics in Accounting"
  },
  {
    label: "AFM 418 - Special Topics in Finance or Accounting"
  },
  {
    label: "AFM 422 - Management of Financial Institutions"
  },
  {
    label: "AFM 423 - Topics in Financial Econometrics"
  },
  {
    label: "AFM 424 - Equity Investments"
  },
  {
    label: "AFM 425 - Fixed Income Securities"
  },
  {
    label: "AFM 428 - Investment Management - Junior Portfolio Manager"
  },
  {
    label: "AFM 429 - Investment Management - Senior Portfolio Manager"
  },
  {
    label: "AFM 431 - Professional Ethics for Financial Managers"
  },
  {
    label: "AFM 433 - Business Strategy"
  },
  {
    label: "AFM 434 - Governance and Enterprise Risk Management for Global Organizations"
  },
  {
    label: "AFM 442 - E-business: Enterprise Systems"
  },
  {
    label: "AFM 443 - E-business: Introduction to Electronic Commerce"
  },
  {
    label: "AFM 451 - Audit Strategy"
  },
  {
    label: "AFM 452 - Comprehensive/Operational Auditing"
  },
  {
    label: "AFM 461 - Taxation 2"
  },
  {
    label: "AFM 462 - Taxation 3 - Tax Planning Topics"
  },
  {
    label: "AFM 471 - Cases and Applications in Corporate Finance"
  },
  {
    label: "AFM 472 - Equity Investments"
  },
  {
    label: "AFM 473 - Advanced Topics in Corporate Finance"
  },
  {
    label: "AFM 474 - Derivative Securities"
  },
  {
    label: "AFM 475 - Fixed Income Securities"
  },
  {
    label: "AFM 476 - Advanced Corporate Finance"
  },
  {
    label: "AFM 477 - Mergers and Acquisitions"
  },
  {
    label: "AFM 478 - International Financial Management"
  },
  {
    label: "AFM 481 - Cost Management Systems"
  },
  {
    label: "AFM 482 - Performance Measurement and Organization Control"
  },
  {
    label: "AFM 483 - Applications of Analytics to Business"
  },
  {
    label: "AFM 484 - Advanced Management Control Systems"
  },
  {
    label: "AFM 491 - Advanced Financial Accounting"
  },
  {
    label: "AFM 492 - Financial Statement Analysis"
  },
  {
    label: "AFM 501 - Contemporary Issues in Assurance and Accounting"
  },
  {
    label: "AFM 502 - Control Systems in a Computer Environment"
  },
  {
    label: "AFM 503 - Issues and Problems in Accounting Practice"
  },
  {
    label: "AFM 504 - Issues and Problems in External Reporting"
  },
  {
    label: "AHS 150 - Foundations of Human Anatomy and Physiology"
  },
  {
    label: "AMATH 261 - Classical Mechanics and Special Relativity"
  },
  {
    label: "AHS 782 - Selected Topics in Applied Health Sciences"
  },
  {
    label: "AMATH 231 - Calculus 4"
  },
  {
    label: "AMATH 242 - Introduction to Computational Mathematics"
  },
  {
    label: "AMATH 250 - Introduction to Differential Equations"
  },
  {
    label: "AMATH 251 - Introduction to Differential Equations (Advanced level)"
  },
  {
    label: "AMATH 271 - Introduction to Theoretical Mechanics"
  },
  {
    label: "AMATH 310 - Environmental Informatics"
  },
  {
    label: "AMATH 331 - Applied Real Analysis"
  },
  {
    label: "AMATH 332 - Applied Complex Analysis"
  },
  {
    label: "AMATH 342 - Computational Methods for Differential Equations"
  },
  {
    label: "AMATH 343 - Discrete Models in Applied Mathematics"
  },
  {
    label: "AMATH 350 - Differential Equations for Business and Economics"
  },
  {
    label: "AMATH 351 - Ordinary Differential Equations 2"
  },
  {
    label: "AMATH 353 - Partial Differential Equations 1"
  },
  {
    label: "AMATH 361 - Continuum Mechanics"
  },
  {
    label: "AMATH 373 - Quantum Theory 1"
  },
  {
    label: "AMATH 382 - Computational Modelling of Cellular Systems"
  },
  {
    label: "AMATH 391 - From Fourier to Wavelets"
  },
  {
    label: "AMATH 442 - Computational Methods for Partial Differential Equations"
  },
  {
    label: "AMATH 444 - Applications of Computational Differential Equations"
  },
  {
    label: "AMATH 451 - Introduction to Dynamical Systems"
  },
  {
    label: "AMATH 453 - Partial Differential Equations 2"
  },
  {
    label: "AMATH 455 - Control Theory"
  },
  {
    label: "AMATH 456 - Calculus of Variations"
  },
  {
    label: "AMATH 463 - Fluid Mechanics"
  },
  {
    label: "AMATH 473 - Quantum Theory 2"
  },
  {
    label: "AMATH 475 - Introduction to General Relativity"
  },
  {
    label: "AMATH 495 - Reading Course"
  },
  {
    label: "AMATH 655 - Control Theory"
  },
  {
    label: "AMATH 663 - Fluid Mechanics"
  },
  {
    label: "AMATH 673 - Quantum Mechanics"
  },
  {
    label: "AMATH 675 - General Relativity"
  },
  {
    label: "AMATH 731 - Applied Functional Analysis"
  },
  {
    label: "AMATH 732 - Asymptotic Analysis and Perturbation Theory"
  },
  {
    label: "AMATH 740 - Numerical Analysis"
  },
  {
    label: "AMATH 741 - Numerical Solution of Partial Differential Equations"
  },
  {
    label: "AMATH 751 - Advanced Ordinary Differential Equations"
  },
  {
    label: "AMATH 753 - Advanced Partial Differential Equations"
  },
  {
    label: "AMATH 777 - Stochastic Processes in the Physical Sciences"
  },
  {
    label: "AMATH 851 - Stability Theory and Applications"
  },
  {
    label: "AMATH 855 - Advanced Systems Analysis and Control"
  },
  {
    label: "AMATH 863 - Hydrodynamic Stability and Turbulence"
  },
  {
    label: "AMATH 867 - Dispersive and Nonlinear Waves"
  },
  {
    label: "AMATH 871 - Quantum Information Processing"
  },
  {
    label: "AMATH 872 - Introduction to Quantum Field Theory for Cosmology"
  },
  {
    label: "AMATH 873 - Introduction to Quantum Field Theory"
  },
  {
    label: "AMATH 874 - Advanced techniques in General Relativity and Applications to Black Holes"
  },
  {
    label: "AMATH 875 - Introduction to General Relativity with Applications to Cosmology"
  },
  {
    label: "AMATH 876 - Open Quantum Systems"
  },
  {
    label: "AMATH 881 - Introduction to Mathematical Oncology"
  },
  {
    label: "AMATH 882 - Mathematical Cell Biology"
  },
  {
    label: "AMATH 900 - Topics in Applied Mathematics"
  },
  {
    label: "BET 606 - Entrepreneurial Applications of Digital Media"
  },
  {
    label: "ANTH 101 - Human and Cultural Evolution"
  },
  {
    label: "ANTH 102 - Introduction to Social and Cultural Anthropology"
  },
  {
    label: "ANTH 201 - Introduction to Archaeology"
  },
  {
    label: "ANTH 202 - Social and Cultural Anthropology"
  },
  {
    label: "ANTH 233 - Inuit Cultures"
  },
  {
    label: "ANTH 260 - Human Evolution"
  },
  {
    label: "ANTH 261 - Primate Behaviour"
  },
  {
    label: "ANTH 290 - Visual Anthropology"
  },
  {
    label: "ANTH 300 - Practicing Anthropology"
  },
  {
    label: "ANTH 302 - Anthropology of Violence: Political Conflict and Change"
  },
  {
    label: "ANTH 303 - Anthropology of Digital Media"
  },
  {
    label: "ANTH 305 - Paleopathology of Health and Disease"
  },
  {
    label: "ANTH 320 - Hunter-Gatherer Archaeology"
  },
  {
    label: "ANTH 321 - Archaeology of Complex Cultures"
  },
  {
    label: "ANTH 322 - The Archaeology of the Great Lakes Area"
  },
  {
    label: "ANTH 330 - Environmental Anthropology"
  },
  {
    label: "ANTH 345 - Directed Research in Anthropology"
  },
  {
    label: "ANTH 347 - Medical Anthropology"
  },
  {
    label: "ANTH 348 - Anthropology of Tourism"
  },
  {
    label: "ANTH 351 - Indigenous Practices & Relations: A Comparative Approach"
  },
  {
    label: "ANTH 352 - Anthropological Thought"
  },
  {
    label: "ANTH 355 - Human Osteology"
  },
  {
    label: "ANTH 361 - Biocultural Examination of Primate Conservation"
  },
  {
    label: "ANTH 365 - Human Evolution"
  },
  {
    label: "ANTH 370 - Issues in Contemporary Native Communities in Canada"
  },
  {
    label: "ANTH 371 - Anthropological Field Experience"
  },
  {
    label: "ANTH 390A - Reading in Anthropology"
  },
  {
    label: "ANTH 390B - Reading in Anthropology"
  },
  {
    label: "ANTH 391 - Reading in Anthropology"
  },
  {
    label: "ANTH 393 - Reading in Anthropology"
  },
  {
    label: "ANTH 395 - Anthropological Study Abroad"
  },
  {
    label: "ANTH 400 - Special Topics in Anthropology"
  },
  {
    label: "ANTH 402 - Palestine/Israel: Anthropological Perspectives"
  },
  {
    label: "ANTH 403 - Anthropological Inquiry into the Origin of Language and Cultural Behaviour"
  },
  {
    label: "ANTH 440 - Archaeological Analysis and Interpretation"
  },
  {
    label: "ANTH 455 - Skeletal Biology and Forensics"
  },
  {
    label: "ANTH 460 - Human Adaptation and Variation"
  },
  {
    label: "ANTH 470 - Archaeological Field Methods"
  },
  {
    label: "ANTH 492A - Reading in Anthropology"
  },
  {
    label: "ANTH 492B - Reading in Anthropology"
  },
  {
    label: "ANTH 495 - Reading in Anthropology"
  },
  {
    label: "ANTH 497 - Reading in Anthropology"
  },
  {
    label: "ANTH 499A - Honours Essay"
  },
  {
    label: "ANTH 499B - Honours Essay"
  },
  {
    label: "ANTH 600 - Public Issues Anthropology"
  },
  {
    label: "ANTH 604 - Human Development in a Cross-Cultural Perspective"
  },
  {
    label: "ANTH 605 - Selected Topics in Theory and Research"
  },
  {
    label: "ANTH 608 - Anthropological Theory"
  },
  {
    label: "ANTH 614 - Research Methods"
  },
  {
    label: "ANTH 655 - Skeletal Biology and Forensics"
  },
  {
    label: "ANTH 659 - Conservation, Communities and Globalization"
  },
  {
    label: "ANTH 660 - Reading Course"
  },
  {
    label: "ANTH 661 - Research Seminar in Public Issues Anthropology"
  },
  {
    label: "ANTH 662 - Human Adaptation and Evolution"
  },
  {
    label: "APPLS 205R - Second Language Acquisition"
  },
  {
    label: "APPLS 301 - Language, Culture, and Identity"
  },
  {
    label: "APPLS 304R - Second Language Teaching Methodology"
  },
  {
    label: "APPLS 306R - Second Language Assessment and Testing"
  },
  {
    label: "ARBUS 100 - Introduction to Arts and Business"
  },
  {
    label: "ARBUS 101 - Introduction to Business in North America"
  },
  {
    label: "ARBUS 102 - Accounting Information for Managers"
  },
  {
    label: "ARBUS 200 - Entrepreneurship Principles and Practices"
  },
  {
    label: "ARBUS 202 - Professional and Business Ethics"
  },
  {
    label: "ARBUS 300 - Practical Business Skills"
  },
  {
    label: "ARBUS 301 - International Business"
  },
  {
    label: "ARBUS 302 - Marketing 1: Principles of Marketing and Consumer Economics"
  },
  {
    label: "ARBUS 400 - Strategy and Program Integration"
  },
  {
    label: "ARCH 100 - An Introduction to Architecture"
  },
  {
    label: "ARCH 110 - Visual and Digital Media 1"
  },
  {
    label: "ARCH 113 - Visual and Digital Media 2"
  },
  {
    label: "ARCH 125 - Principles of Environmental Design"
  },
  {
    label: "ARCH 142 - Introduction to Cultural History"
  },
  {
    label: "ARCH 143 - The Ancient World and Foundations of Europe"
  },
  {
    label: "ARCH 172 - Building Construction 1"
  },
  {
    label: "SOC 431 - Science as Practice and Culture"
  },
  {
    label: "ARCH 173 - Building Construction 2"
  },
  {
    label: "ARCH 212 - Digital Fabrication"
  },
  {
    label: "ARCH 174 - Experimental Courses"
  },
  {
    label: "ARCH 175 - Experimental Courses"
  },
  {
    label: "ARCH 192 - Design Studio"
  },
  {
    label: "ARCH 193 - Design Studio"
  },
  {
    label: "ARCH 215 - Communication Design"
  },
  {
    label: "ARCH 226 - Environmental Building Design"
  },
  {
    label: "ARCH 246 - Pre-Renaissance to Reformation"
  },
  {
    label: "ARCH 247 - Cultural History 4: Renaissance to Revolution"
  },
  {
    label: "ARCH 252 - Creative Problem Solving"
  },
  {
    label: "ARCH 256 - Introduction to Photography"
  },
  {
    label: "ARCH 260 - Principles of Structures"
  },
  {
    label: "ARCH 272 - Interior Environments: Acoustics and Lighting"
  },
  {
    label: "ARCH 273 - Environmental Systems"
  },
  {
    label: "ARCH 274 - Experimental Course"
  },
  {
    label: "ARCH 275 - Experimental Courses"
  },
  {
    label: "ARCH 276 - Timber: Design, Structure and Construction"
  },
  {
    label: "ARCH 277 - Timber: Design, Structure and Construction for Engineers"
  },
  {
    label: "ARCH 284 - Architectural Research"
  },
  {
    label: "ARCH 285 - Architectural Research"
  },
  {
    label: "ARCH 292 - Design Studio"
  },
  {
    label: "ARCH 293 - Design Studio"
  },
  {
    label: "ARCH 314 - Digital Design"
  },
  {
    label: "ARCH 327 - Architecture of the Urban Environment"
  },
  {
    label: "ARCH 328 - Approaches to Architecture and Urbanism"
  },
  {
    label: "ARCH 331 - Working with Wood"
  },
  {
    label: "ARCH 332 - Design/Build Workshop"
  },
  {
    label: "ARCH 342 - Modernism to the 21st Century"
  },
  {
    label: "ARCH 343 - Enlightenment, Romanticism and the 19th Century"
  },
  {
    label: "ARCH 345 - Architectural Theory 1850-1990"
  },
  {
    label: "ARCH 346 - Competitions in Architecture"
  },
  {
    label: "ARCH 347 - Philosophy in Architecture"
  },
  {
    label: "ARCH 362 - Steel and Concrete: Design, Structure and Construction"
  },
  {
    label: "ARCH 364 - Building Science"
  },
  {
    label: "ARCH 365 - Structural Design Build Workshop"
  },
  {
    label: "ARCH 374 - Experimental Courses"
  },
  {
    label: "ARCH 375 - Experimental Courses"
  },
  {
    label: "ARCH 384 - Architectural Research"
  },
  {
    label: "ARCH 385 - Architectural Research"
  },
  {
    label: "ARCH 392 - Design Studio"
  },
  {
    label: "ARCH 393 - Option Design Studio"
  },
  {
    label: "ARCH 425 - Theory and Design of the Contemporary Landscape"
  },
  {
    label: "ARCH 442 - Contemporary Architectural Theory"
  },
  {
    label: "ARCH 443 - Architecture and Film"
  },
  {
    label: "ARCH 446 - Italian Urban History (Rome)"
  },
  {
    label: "ARCH 448 - Rome and the Campagna (Rome)"
  },
  {
    label: "ARCH 449 - The Development of Modern Italian Architecture (Rome)"
  },
  {
    label: "ARCH 473 - Technical Report"
  },
  {
    label: "ARCH 474 - Experimental Courses"
  },
  {
    label: "ARCH 475 - Experimental Courses"
  },
  {
    label: "ARCH 484 - Architectural Research"
  },
  {
    label: "ARCH 485 - Architectural Research"
  },
  {
    label: "ARCH 492 - Design Studio"
  },
  {
    label: "ARCH 493 - Design Studio/Comprehensive Building Design"
  },
  {
    label: "ARCH 611 - Drawing, Representation and Practice"
  },
  {
    label: "ARCH 612 - Originality and Invention in Architecture"
  },
  {
    label: "ARCH 613 - Light, Colour and Darkness"
  },
  {
    label: "ARCH 622 - Urban Revitalization & Design"
  },
  {
    label: "ARCH 623 - Ecosystem Design for Urban Landscapes"
  },
  {
    label: "ARCH 624 - The Social Ecology of the Urban Periphery"
  },
  {
    label: "ARCH 641 - The Inner Studio"
  },
  {
    label: "ARCH 642 - Modern Architecture"
  },
  {
    label: "ARCH 643 - The Study and Design of Cultural Sites"
  },
  {
    label: "ARCH 644 - Architecture, Memory and Commemoration"
  },
  {
    label: "ARCH 645 - Architecture and the State"
  },
  {
    label: "ARCH 646 - Architecture and Film"
  },
  {
    label: "ARCH 652 - Specifications"
  },
  {
    label: "ARCH 654 - Acts and Codes"
  },
  {
    label: "ARCH 655 - Architectural Professional Practice: Ethics, Business, Legal Issues, and Contract Administration"
  },
  {
    label: "ARCH 672 - Energy Effective Design"
  },
  {
    label: "ARCH 673 - The Science of the Building Envelope"
  },
  {
    label: "ARCH 675 - Sheltering Systems"
  },
  {
    label: "ARCH 676 - Lightweight Structures"
  },
  {
    label: "ARCH 677 - Survey of Digital Design Technologies for Architecture"
  },
  {
    label: "ARCH 678 - Digital Lighting Design for Architecture"
  },
  {
    label: "ARCH 684 - Special Topics in Architecture"
  },
  {
    label: "ARCH 685 - Readings and Seminars in Architecture"
  },
  {
    label: "ARCH 686 - Competitions in Architecture"
  },
  {
    label: "ARCH 692 - Thesis Research and Design Studio I"
  },
  {
    label: "AVIA 100 - Introduction to Aviation"
  },
  {
    label: "ARTS 101 - Foundations for Writing"
  },
  {
    label: "ARTS 111 - Career Development and Decision-Making"
  },
  {
    label: "ARTS 122 - Quest for Meaning in the Modern World"
  },
  {
    label: "ARTS 125 - Who are the Mennonites?"
  },
  {
    label: "ARTS 190 - First-Year Topics in Arts Disciplines"
  },
  {
    label: "ARTS 280 - Statistics for Arts Students"
  },
  {
    label: "ARTS 290 - Second-Year Topics in Arts Disciplines"
  },
  {
    label: "ARTS 301 - Studies in Ideas"
  },
  {
    label: "ARTS 365 - Arts Study Abroad"
  },
  {
    label: "ARTS 366 - Arts Study Abroad"
  },
  {
    label: "ARTS 367 - Arts Study Abroad"
  },
  {
    label: "ARTS 390 - Third-Year Topics in Arts Disciplines"
  },
  {
    label: "ARTS 490 - Fourth-Year Topics in Arts Disciplines"
  },
  {
    label: "ARTS 600 - Knowledge Mobilzation to Serve Society"
  },
  {
    label: "ARTS 601 - Building Community-University Research Alliances"
  },
  {
    label: "AVIA 101 - Professional Pilot Program Course I"
  },
  {
    label: "AVIA 102 - Professional Pilot Program Course II"
  },
  {
    label: "AVIA 203 - Professional Pilot Program Course III"
  },
  {
    label: "AVIA 204 - Professional Pilot Program Course IV"
  },
  {
    label: "AVIA 205 - Professional Pilot Program Course V"
  },
  {
    label: "AVIA 306 - Professional Pilot Program Course VI"
  },
  {
    label: "AVIA 307 - Professional Pilot Program Course VII"
  },
  {
    label: "AVIA 310 - Human Factors in Aviation"
  },
  {
    label: "AVIA 408 - Professional Pilot Program Course VIII"
  },
  {
    label: "AVIA 474 - Special Topics in Aviation"
  },
  {
    label: "AVIA 475 - Independent Studies of Selected Topics"
  },
  {
    label: "BE 600 - Management and Leadership"
  },
  {
    label: "BE 601 - Introduction to Financial and Managerial Accounting"
  },
  {
    label: "BE 602 - Data Analysis and Management"
  },
  {
    label: "BE 603 - Operations and Supply Chain Management"
  },
  {
    label: "BE 604 - Marketing Management"
  },
  {
    label: "BE 605 - Project Management"
  },
  {
    label: "BE 606 - Entrepreneurship and Innovation"
  },
  {
    label: "BE 610 - Special Topics in Business and Entrepreneurship"
  },
  {
    label: "BET 300 - Foundations of Venture Creation"
  },
  {
    label: "BET 400 - Marketing Foundations for Early-stage Ventures"
  },
  {
    label: "BET 600 - Applied Business Leadership Skills for Entrepreneurs"
  },
  {
    label: "BET 601 - Strategically Managing the Entrepreneurial Organization"
  },
  {
    label: "BET 602 - Marketing Strategies for New Technology-based Ventures"
  },
  {
    label: "BET 603 - Entrepreneurial Finance for the Technology-based Enterprise"
  },
  {
    label: "BET 604 - New Technology-based Venture Creation"
  },
  {
    label: "BET 605 - Essential Accounting for Entrepreneurs"
  },
  {
    label: "BET 607 - Managing Technological Innovation"
  },
  {
    label: "BET 608 - Entrepreneurial Application of Technology"
  },
  {
    label: "BET 620 - Social Entrepreneurship and Corporate Social Responsibility"
  },
  {
    label: "BET 700 - Topics in Business, Entrepreneurship and Technology"
  },
  {
    label: "BIOL 110 - Introductory Zoology"
  },
  {
    label: "BIOL 112 - Introductory Biology 2"
  },
  {
    label: "BIOL 120 - Introduction to Plant Structure and Function"
  },
  {
    label: "BIOL 130 - Introductory Cell Biology"
  },
  {
    label: "BIOL 130L - Cell Biology Laboratory"
  },
  {
    label: "BIOL 150 - Organismal and Evolutionary Ecology"
  },
  {
    label: "BIOL 165 - Diversity of Life"
  },
  {
    label: "BIOL 211 - Introductory Vertebrate Zoology"
  },
  {
    label: "BIOL 225 - Plants and Civilization"
  },
  {
    label: "BIOL 239 - Genetics"
  },
  {
    label: "BIOL 240 - Fundamentals of Microbiology"
  },
  {
    label: "BIOL 240L - Microbiology Laboratory"
  },
  {
    label: "BIOL 241 - Introduction to Applied Microbiology"
  },
  {
    label: "BIOL 273 - Principles of Human Physiology 1"
  },
  {
    label: "BIOL 273L - Human Physiology 1 Laboratory"
  },
  {
    label: "BIOL 280 - Introduction to Biophysics"
  },
  {
    label: "BIOL 301 - Human Anatomy"
  },
  {
    label: "BIOL 360 - Evolution 2: Fossil Record"
  },
  {
    label: "BIOL 302 - Functional Histology"
  },
  {
    label: "BIOL 303 - Introductory Developmental Biology and Embryology"
  },
  {
    label: "BIOL 308 - Principles of Molecular Biology"
  },
  {
    label: "BIOL 309 - Analytical Methods in Molecular Biology"
  },
  {
    label: "BIOL 310 - Invertebrate Zoology"
  },
  {
    label: "BIOL 321 - Plant Anatomy and Morphogenesis"
  },
  {
    label: "BIOL 323 - Plant Physiology"
  },
  {
    label: "BIOL 325 - Flowering Plants"
  },
  {
    label: "BIOL 331 - Advanced Cell Biology"
  },
  {
    label: "BIOL 335L - Molecular Biology Techniques"
  },
  {
    label: "BIOL 342 - Molecular Biotechnology 1"
  },
  {
    label: "BIOL 345 - Microorganisms in Foods"
  },
  {
    label: "BIOL 346 - Microbial Ecology and Diversity"
  },
  {
    label: "BIOL 348L - Laboratory Methods in Microbiology"
  },
  {
    label: "BIOL 349 - Synthetic Biology Project Design"
  },
  {
    label: "BIOL 350 - Ecosystem Ecology"
  },
  {
    label: "BIOL 351 - Aquatic Ecology"
  },
  {
    label: "BIOL 354 - Environmental Toxicology 1"
  },
  {
    label: "BIOL 355 - Biology of Human Aging"
  },
  {
    label: "BIOL 359 - Evolution 1: Mechanisms"
  },
  {
    label: "BIOL 361 - Biostatistics and Experimental Design"
  },
  {
    label: "BIOL 364 - Mathematical Modelling in Biology"
  },
  {
    label: "BIOL 365 - Methods in Bioinformatics"
  },
  {
    label: "BIOL 366 - Introduction to Bioinformatics"
  },
  {
    label: "BIOL 370 - Comparative Animal Physiology: Environmental Aspects"
  },
  {
    label: "BIOL 371 - Comparative Animal Physiology: Evolutionary Themes"
  },
  {
    label: "BIOL 373 - Principles of Human Physiology 2"
  },
  {
    label: "BIOL 373L - Human Physiology 2 Laboratory"
  },
  {
    label: "BIOL 376 - Cellular Neurophysiology"
  },
  {
    label: "BIOL 377 - Systems Neuroscience: From Neurons to Behaviour"
  },
  {
    label: "BIOL 382 - Computational Modelling of Cellular Systems"
  },
  {
    label: "BIOL 383 - Tropical Ecosystems"
  },
  {
    label: "BIOL 403 - Advanced Topics in Developmental Biology"
  },
  {
    label: "BIOL 412 - Arthropod Zoology"
  },
  {
    label: "BIOL 426 - Phycology"
  },
  {
    label: "BIOL 428 - Plant Molecular Genetics"
  },
  {
    label: "BIOL 431 - Bacterial Molecular Genetics"
  },
  {
    label: "BIOL 432 - Molecular Biotechnology 2"
  },
  {
    label: "BIOL 433 - Plant Biotechnology"
  },
  {
    label: "BIOL 434 - Human Molecular Genetics"
  },
  {
    label: "BIOL 438 - Molecular Biology of Animal Development"
  },
  {
    label: "BIOL 439 - Environmental and Natural Products Biochemistry"
  },
  {
    label: "BIOL 441 - Advances in Immunology"
  },
  {
    label: "BIOL 442 - Virology"
  },
  {
    label: "BIOL 443 - Fermentation Biotechnology"
  },
  {
    label: "BIOL 444 - Bacterial Pathogenesis"
  },
  {
    label: "BIOL 447 - Environmental Microbiology"
  },
  {
    label: "BIOL 448 - Microbial Physiology and Biochemistry"
  },
  {
    label: "BIOL 449 - Public Health Microbiology"
  },
  {
    label: "BIOL 450 - Marine Biology"
  },
  {
    label: "BIOL 452 - Quantitative Fisheries Biology"
  },
  {
    label: "BIOL 455 - Ecological Risk Assessment and Management"
  },
  {
    label: "BIOL 456 - Population Biology"
  },
  {
    label: "BIOL 457 - Analysis of Communities"
  },
  {
    label: "BIOL 458 - Quantitative Ecology"
  },
  {
    label: "BIOL 461 - Advanced Biostatistics"
  },
  {
    label: "BIOL 462 - Applied Wetland Science"
  },
  {
    label: "BIOL 465 - Structural Bioinformatics"
  },
  {
    label: "BIOL 466 - Biogeochemical Microbiology"
  },
  {
    label: "BIOL 467 - Plant-Bacterial Interactions"
  },
  {
    label: "BIOL 470 - Methods of Aquatic Ecology"
  },
  {
    label: "BIOL 472 - Cell Biology of Human Disease"
  },
  {
    label: "BIOL 473 - Mammalian Reproduction"
  },
  {
    label: "BIOL 474 - Bioprocessing"
  },
  {
    label: "BIOL 475 - Current Topics in Applied Microbiology"
  },
  {
    label: "BIOL 476 - Systems Neuroscience: From Neurons to Behaviour"
  },
  {
    label: "BME 399 - Directed Biomedical Research Project"
  },
  {
    label: "BIOL 477L - Techniques in Animal Physiology"
  },
  {
    label: "BIOL 479 - Population Genetics and Evolution"
  },
  {
    label: "BIOL 480 - Molecular Ecology"
  },
  {
    label: "BIOL 483 - Animal Cell Biotechnology"
  },
  {
    label: "BIOL 484 - Advanced Eukaryotic Genetics"
  },
  {
    label: "BIOL 485 - Conservation Biology"
  },
  {
    label: "BIOL 486 - Glycobiology"
  },
  {
    label: "BIOL 487 - Computational Neuroscience"
  },
  {
    label: "BIOL 488 - Ecotoxicology from a Watershed Perspective"
  },
  {
    label: "BIOL 489 - Arctic Ecology"
  },
  {
    label: "BIOL 490A - Biology Field Course I"
  },
  {
    label: "BIOL 490B - Biology Field Course II"
  },
  {
    label: "BIOL 491A - Aquatic Field Biology"
  },
  {
    label: "BIOL 490C - Biology Field Course III"
  },
  {
    label: "BIOL 490D - Biology Field Course IV"
  },
  {
    label: "BIOL 492 - Marine Mammals and Seabirds"
  },
  {
    label: "BIOL 496 - Neuroscience Research Seminar"
  },
  {
    label: "BIOL 498A - Short Biology Field Course 1"
  },
  {
    label: "BUS 121W - Functional Areas of the Organization (WLU)"
  },
  {
    label: "BIOL 498B - Short Biology Field Course 2"
  },
  {
    label: "BUS 111W - Introduction to Business Organization (WLU)"
  },
  {
    label: "BIOL 499A - Senior Honours Project"
  },
  {
    label: "BIOL 499B - Senior Honours Project"
  },
  {
    label: "BIOL 602 - Fisheries Biology"
  },
  {
    label: "BIOL 604 - Animal Cells in Culture"
  },
  {
    label: "BIOL 605 - Environmental Animal Physiology"
  },
  {
    label: "BIOL 606 - Advanced Aquatic Ecology"
  },
  {
    label: "BIOL 608 - Advanced Molecular Genetics"
  },
  {
    label: "BIOL 610 - Biosystematics and Evolution"
  },
  {
    label: "BIOL 611 - Plant Growth Regulation I"
  },
  {
    label: "BIOL 612 - Phylogenetic Reconstruction and Analysis"
  },
  {
    label: "BIOL 614 - Bioinformatics Tools and Techniques"
  },
  {
    label: "BIOL 617 - Advanced Topics in Environmental Toxicology"
  },
  {
    label: "BIOL 618 - Advanced Microbial Physiology"
  },
  {
    label: "BIOL 621 - Transport Phenomena in Plants"
  },
  {
    label: "BIOL 622 - Selected Topics in Plant Physiology"
  },
  {
    label: "BIOL 623 - Floral Morphology and Taxonomy"
  },
  {
    label: "BIOL 624 - Environmental Biogeochemistry"
  },
  {
    label: "BIOL 625 - Applied  Limnology"
  },
  {
    label: "BIOL 627 - Topics in Applied and Industrial Microbiology"
  },
  {
    label: "BIOL 628 - Morphogenesis"
  },
  {
    label: "BIOL 629 - Cell Growth and Differentiation"
  },
  {
    label: "BIOL 631 - Multivariate Methods in Ecology"
  },
  {
    label: "BIOL 636 - Advanced Immunology"
  },
  {
    label: "BIOL 642 - Current Topics in Biotechnology"
  },
  {
    label: "BIOL 645 - Recent  Advances in Microbial Ecology"
  },
  {
    label: "BIOL 646 - Paleolimnology"
  },
  {
    label: "BIOL 650 - Bio-Molecular Tools"
  },
  {
    label: "BIOL 651 - Hydroecology for Freshwater Ecosystem Management"
  },
  {
    label: "BIOL 652 - Advanced Ecology"
  },
  {
    label: "BIOL 667 - Animal Molecular Biology"
  },
  {
    label: "BIOL 669 - Plant Molecular Biology"
  },
  {
    label: "BIOL 670 - Photobiology"
  },
  {
    label: "BIOL 675 - Advanced Topics in Animal Behaviour"
  },
  {
    label: "BIOL 678 - Current Topics in Neurophysiology"
  },
  {
    label: "BIOL 680 - Specialized Studies of Selected Research Procedures, Strategies or Topics"
  },
  {
    label: "BIOL 681 - Specialized Studies of Selected Research Procedures, Strategies or Topics"
  },
  {
    label: "BIOL 690 - Scientific Communication"
  },
  {
    label: "BME 101 - Communications in Biomedical Engineering-Written and Oral"
  },
  {
    label: "BME 101L - Communications in Biomedical Engineering-Visualization"
  },
  {
    label: "BME 121 - Digital Computation"
  },
  {
    label: "BME 122 - Data Structures and Algorithms"
  },
  {
    label: "BME 161 - Introduction to Biomedical Design"
  },
  {
    label: "BME 162 - Human Factors in the Design of Biomedical and Health Systems"
  },
  {
    label: "BME 181 - Physics I - Statics"
  },
  {
    label: "BME 182 - Physics II - Dynamics"
  },
  {
    label: "CHE 100 - Chemical Engineering Concepts 1"
  },
  {
    label: "CHE 101 - Chemical Engineering Concepts 2"
  },
  {
    label: "CHE 102 - Chemistry for Engineers"
  },
  {
    label: "CHE 121 - Engineering Computation"
  },
  {
    label: "CHE 161 - Engineering Biology"
  },
  {
    label: "CHE 200 - Equilibrium Stage Operations"
  },
  {
    label: "CHE 201 - Seminar"
  },
  {
    label: "CHE 202 - Seminar"
  },
  {
    label: "CHE 211 - Fluid Mechanics"
  },
  {
    label: "CHE 220 - Process Data Analysis"
  },
  {
    label: "CHE 230 - Physical Chemistry 1"
  },
  {
    label: "CHE 231 - Physical Chemistry 2"
  },
  {
    label: "CHE 241 - Materials Science and Engineering"
  },
  {
    label: "CHE 290 - Chemical Engineering Lab 1"
  },
  {
    label: "CHE 291 - Chemical Engineering Lab 2"
  },
  {
    label: "CHE 298 - Directed Research Project"
  },
  {
    label: "CHE 299 - Directed Research Project"
  },
  {
    label: "CHE 301 - Seminar"
  },
  {
    label: "CHE 302 - Seminar"
  },
  {
    label: "CHE 311 - Chemical Reaction Engineering"
  },
  {
    label: "CHE 312 - Mathematics of Heat and Mass Transfer"
  },
  {
    label: "CHE 313 - Applications of Heat and Mass Transfer"
  },
  {
    label: "CHE 322 - Numerical Methods for Process Analysis and Design"
  },
  {
    label: "CHEM 140L - Introductory Scientific Calculations Laboratory"
  },
  {
    label: "CHE 325 - Strategies for Process Improvement and Product Development"
  },
  {
    label: "CHE 330 - Chemical Engineering Thermodynamics"
  },
  {
    label: "CHE 331 - Electrochemical Engineering"
  },
  {
    label: "CHE 360 - Bioprocess Engineering"
  },
  {
    label: "CHE 390 - Chemical Engineering Lab 3"
  },
  {
    label: "CHE 391 - Chemical Engineering Lab 4"
  },
  {
    label: "CHE 398 - Directed Research Project"
  },
  {
    label: "CHE 399 - Directed Research Project"
  },
  {
    label: "CHE 401 - Seminar"
  },
  {
    label: "CHE 402 - Seminar"
  },
  {
    label: "CHE 420 - Introduction to Process Control"
  },
  {
    label: "CHE 480 - Process Analysis and Design"
  },
  {
    label: "CHE 482 - Chemical Engineering Design Workshop"
  },
  {
    label: "CHE 483 - Group Design Project"
  },
  {
    label: "CHE 490 - Chemical Engineering Lab 5"
  },
  {
    label: "CHE 498 - Directed Research Project"
  },
  {
    label: "CHE 499 - Elective Research Project"
  },
  {
    label: "CHE 500 - Special Topics in Chemical Engineering"
  },
  {
    label: "CHE 514 - Fundamentals of Petroleum Production"
  },
  {
    label: "CHE 516 - Energy Systems Engineering"
  },
  {
    label: "CHE 522 - Advanced Process Dynamics and Control"
  },
  {
    label: "CHE 524 - Process Control Laboratory"
  },
  {
    label: "CHE 541 - Introduction to Polymer Science and Properties"
  },
  {
    label: "CHE 543 - Polymer Production: Polymer Reaction Engineering"
  },
  {
    label: "CHE 562 - Advanced Bioprocess Engineering"
  },
  {
    label: "CHE 564 - Food Process Engineering"
  },
  {
    label: "CHE 571 - Industrial Ecology"
  },
  {
    label: "CHE 572 - Air Pollution Control"
  },
  {
    label: "CHE 574 - Industrial Wastewater Pollution Control"
  },
  {
    label: "CHE 610 - Theory and Application of Transport Phenomena"
  },
  {
    label: "CHE 612 - Interfacial Phenomena"
  },
  {
    label: "CHE 614 - Capillary and Transport Phenomena in Porous Media"
  },
  {
    label: "CHE 620 - Applied Engineering Mathematics"
  },
  {
    label: "CHE 622 - Statistics in Engineering"
  },
  {
    label: "CHE 624 - Advanced Process Dynamics and Control"
  },
  {
    label: "CHE 630 - Chemical Reactor Analysis"
  },
  {
    label: "CHE 632 - Introduction to Catalysis"
  },
  {
    label: "CHE 640 - Principles of Polymer Science"
  },
  {
    label: "CHE 641 - Physical Properties of Polymers"
  },
  {
    label: "CHE 660 - Principles of Biochemical Engineering"
  },
  {
    label: "CHE 661 - Advances in Biochemical Engineering"
  },
  {
    label: "CHE 672 - Air Pollution Control"
  },
  {
    label: "CHE 674 - Industrial Waste Treatment"
  },
  {
    label: "CHE 710 - Special Topics in Transport Phenomena"
  },
  {
    label: "CHE 715 - Research Topics in Transport Phenomena"
  },
  {
    label: "CHE 720 - Special Topics in Analysis of Chemical Processes"
  },
  {
    label: "CHE 725 - Research Topics in Analysis of Chemical Processes"
  },
  {
    label: "CHE 730 - Special Topics in Chemical Kinetics,Catalysis and Advanced Reactor Engineering"
  },
  {
    label: "CHE 735 - Research Topics in Chemical Kinetics, Catalysis and Advanced Reactor Engineering"
  },
  {
    label: "CHE 740 - Special Topics in Polymer Science and Engineering"
  },
  {
    label: "CHE 745 - Research Topics in Polymer Science and Engineering"
  },
  {
    label: "CIVE 620 - Advanced Construction Engineering and Project Management"
  },
  {
    label: "CHE 750 - Special Topics in Electrochemical Engineering, Interfacial Engineering & Materials Science"
  },
  {
    label: "CHE 755 - Res Topics in Electrochemical Engineering, Interfacial Eng &  Material Science"
  },
  {
    label: "CHE 760 - Special Topics in Biochemical Engineering"
  },
  {
    label: "CHE 765 - Research Topics in Biochemical Engineering"
  },
  {
    label: "CHE 770 - Special Topics in Environmental Engineering and Pollution Control"
  },
  {
    label: "CHE 775 - Research Topics in Environmental Engineering and Pollution Control"
  },
  {
    label: "CHEM 1 - Pre-University Chemistry"
  },
  {
    label: "CHEM 100 - Introduction to Chemical Sciences"
  },
  {
    label: "CHEM 120 - Physical and Chemical Properties of Matter"
  },
  {
    label: "CHEM 120L - Chemical Reaction Laboratory 1"
  },
  {
    label: "CHEM 123 - Chemical Reactions, Equilibria and Kinetics"
  },
  {
    label: "CHEM 123L - Chemical Reaction Laboratory 2"
  },
  {
    label: "CHEM 140 - Introduction to Scientific Calculations"
  },
  {
    label: "CHEM 209 - Introductory Spectroscopy and Structure"
  },
  {
    label: "CHEM 212 - Structure and Bonding"
  },
  {
    label: "CHEM 217 - Chemical Bonding"
  },
  {
    label: "CHEM 220 - Intro Analytical Chemistry"
  },
  {
    label: "CHEM 220L - Analytical Chemistry Lab 1"
  },
  {
    label: "CHEM 221 - Multi-Component Analysis"
  },
  {
    label: "CHEM 224L - Analytical Chemistry Laboratory 2"
  },
  {
    label: "CHEM 228 - Chemical Analysis"
  },
  {
    label: "CHEM 228L - Analytical Chemistry Laboratory for Life Sciences"
  },
  {
    label: "CHEM 233 - Fundamentals of Biochemistry"
  },
  {
    label: "CHEM 237 - Introductory Biochemistry"
  },
  {
    label: "CHEM 237L - Introductory Biochemistry Laboratory"
  },
  {
    label: "CHEM 240 - Mathematical Methods for Chemistry"
  },
  {
    label: "CHEM 250L - Physical Chemistry Laboratory 1"
  },
  {
    label: "CHEM 254 - Introductory Chemical Thermodynamics"
  },
  {
    label: "CHEM 262 - Organic Chemistry for Engineering"
  },
  {
    label: "CHEM 262L - Organic Chemistry Laboratory for Engineering Students"
  },
  {
    label: "CHEM 264 - Organic Chemistry 1"
  },
  {
    label: "CHEM 265 - Organic Chemistry 2"
  },
  {
    label: "CHEM 265L - Organic Chemistry Laboratory 1"
  },
  {
    label: "CHEM 266 - Basic Organic Chemistry 1"
  },
  {
    label: "CHEM 266L - Organic Chemistry Laboratory"
  },
  {
    label: "CHEM 267 - Basic Organic Chemistry 2"
  },
  {
    label: "CHEM 267L - Organic Chemistry Laboratory"
  },
  {
    label: "CHEM 310 - Transition Element Compounds and Inorganic Materials"
  },
  {
    label: "CHEM 310L - Inorganic Chemistry Laboratory 2"
  },
  {
    label: "CHEM 313 - Main Group and Solid State Chemistry"
  },
  {
    label: "CHEM 313L - Inorganic Chemistry Laboratory 1"
  },
  {
    label: "CHEM 323 - Analytical Instrumentation"
  },
  {
    label: "CHEM 331 - Fundamentals of Metabolism 1"
  },
  {
    label: "CHEM 333 - Metabolism 1"
  },
  {
    label: "CHEM 335L - Advanced Biochemistry Laboratory"
  },
  {
    label: "CHEM 340 - Introductory Computational Chemistry"
  },
  {
    label: "CHEM 350 - Chemical Kinetics"
  },
  {
    label: "CHEM 350L - Physical Chemistry Laboratory 2"
  },
  {
    label: "CHEM 356 - Introductory Quantum Mechanics"
  },
  {
    label: "CHEM 357 - Physical Biochemistry"
  },
  {
    label: "CHEM 360 - Organic Chemistry 3"
  },
  {
    label: "CHEM 360L - Senior Organic Chemistry Laboratory"
  },
  {
    label: "CHEM 370 - Introduction to Polymer Science"
  },
  {
    label: "CHEM 381 - Bioorganic Chemistry"
  },
  {
    label: "CHEM 382L - Advanced Organic Synthesis Laboratory"
  },
  {
    label: "CHEM 392A - Research Project 1"
  },
  {
    label: "CHEM 392B - Research Project 2"
  },
  {
    label: "CHEM 404 - Physicochemical Aspects of Natural Waters"
  },
  {
    label: "CHEM 410 - Special Topics in Inorganic Chemistry"
  },
  {
    label: "CHEM 420 - Special Topics in Analytical Chem"
  },
  {
    label: "CHEM 430 - Special Topics in Biochemistry"
  },
  {
    label: "CHEM 432 - Metabolism 2"
  },
  {
    label: "CHEM 433 - Advanced Biochemistry"
  },
  {
    label: "CHEM 440 - Special Topics in Computational/Theoretical Chemistry"
  },
  {
    label: "CHEM 450 - Special Topics in Physical Chemistry"
  },
  {
    label: "CHEM 460 - Special Topics in Organic Chemistry"
  },
  {
    label: "CHEM 464 - Spectroscopy in Organic Chemistry"
  },
  {
    label: "CHEM 470 - Special Topics in Polymer Chemistry"
  },
  {
    label: "CHEM 481 - Rational Design of Potential Drug Candidates"
  },
  {
    label: "CHEM 482 - Advanced Topics in Medicinal Chemistry"
  },
  {
    label: "CHEM 491A - Biobased Chemistry Research Project 1"
  },
  {
    label: "CHEM 494A - Research Project"
  },
  {
    label: "CHEM 494B - Research Project"
  },
  {
    label: "CHEM 495 - Advanced Research Project"
  },
  {
    label: "CHEM 496 - Advanced Research Project"
  },
  {
    label: "CHEM 497 - Advanced Research Project"
  },
  {
    label: "CHEM 710 - Selected Topics in Inorganic Chemistry"
  },
  {
    label: "CHEM 712 - X-Ray Crystallography"
  },
  {
    label: "CHEM 713 - Chemistry of Inorganic Solid State Materials"
  },
  {
    label: "CHEM 715 - Structure & Bonding in Inorganic Chemistry"
  },
  {
    label: "CHEM 717 - Advanced Transition Metal Chemistry"
  },
  {
    label: "CHEM 718 - Advanced Organometallic Chemistry"
  },
  {
    label: "CHEM 720 - Selected Topics in Analytical Chemistry"
  },
  {
    label: "CHEM 724 - Chemical Instrumentation"
  },
  {
    label: "CHEM 726 - Topics in Analytical Spectroscopy"
  },
  {
    label: "CHEM 727 - Separations"
  },
  {
    label: "CHEM 728 - Electroanalytical Chemistry"
  },
  {
    label: "CHEM 729 - Surface Analysis"
  },
  {
    label: "CHEM 730 - Proteins and Nucleic Acids"
  },
  {
    label: "CHEM 731 - Selected Topics in Biochemistry"
  },
  {
    label: "CIVE 615 - Theories of Plates and Shells"
  },
  {
    label: "CHEM 736 - Regulations in Biological Systems"
  },
  {
    label: "CHEM 737 - Enzymes"
  },
  {
    label: "CHEM 738 - Cell Membranes and Cell Surfaces"
  },
  {
    label: "CHEM 740 - Selected Topics in Theoretical Chemistry"
  },
  {
    label: "CHEM 745 - Statistical Mechanics"
  },
  {
    label: "CHEM 746 - Quantum Chemistry"
  },
  {
    label: "CHEM 750 - Selected Topics in Physical Chemistry"
  },
  {
    label: "CHEM 755 - Kinetics - Dynamics"
  },
  {
    label: "CHEM 756 - Spectroscopy"
  },
  {
    label: "CHEM 760 - Selected Topics in Organic Chemistry"
  },
  {
    label: "CHEM 764 - Synthetic Organic Reactions"
  },
  {
    label: "CHEM 765 - Strategies in Organic Synthesis"
  },
  {
    label: "CHEM 766 - Organic Spectroscopy"
  },
  {
    label: "CHEM 769 - Physical Organic Chemistry"
  },
  {
    label: "CHEM 770 - Principles of Polymer Science"
  },
  {
    label: "CHEM 771 - Physical Properties of Polymers"
  },
  {
    label: "CHEM 772 - Polymerization and Polymer Reactions"
  },
  {
    label: "CHEM 773 - Selected Topics in Polymer Chemistry"
  },
  {
    label: "CIVE 613 - Structural Stability"
  },
  {
    label: "CHEM 794 - Master's Seminar"
  },
  {
    label: "CHINA 101R - First-Year Chinese 1"
  },
  {
    label: "CHINA 102R - First-Year Chinese 2"
  },
  {
    label: "CHINA 120R - Advanced First-Year Chinese"
  },
  {
    label: "CHINA 200R - Preliminary Second-Year Chinese"
  },
  {
    label: "CHINA 201R - Second-Year Chinese 1"
  },
  {
    label: "CHINA 202R - Second-Year Chinese 2"
  },
  {
    label: "CHINA 272R - Chinese Culture and Society"
  },
  {
    label: "CHINA 301R - Third-Year Chinese 1"
  },
  {
    label: "CHINA 302R - Third-Year Chinese 2"
  },
  {
    label: "CHINA 310R - Chinese for Business Settings"
  },
  {
    label: "CHINA 320R - Chinese in Mass Media"
  },
  {
    label: "CHINA 390R - Introduction to Professional Translation (Chinese to English)"
  },
  {
    label: "CIVE 121 - Computational Methods"
  },
  {
    label: "CIVE 125 - Civil Engineering Concepts 1"
  },
  {
    label: "CIVE 127 - Statics & Solid Mechanics 1"
  },
  {
    label: "CIVE 153 - Earth Engineering"
  },
  {
    label: "CIVE 199 - Seminar"
  },
  {
    label: "CIVE 204 - Solid Mechanics 1"
  },
  {
    label: "CIVE 205 - Solid Mechanics 2"
  },
  {
    label: "CIVE 221 - Advanced Calculus"
  },
  {
    label: "CIVE 222 - Differential Equations"
  },
  {
    label: "CIVE 224 - Probability and Statistics"
  },
  {
    label: "CIVE 240 - Engineering and Sustainable Development"
  },
  {
    label: "CIVE 265 - Structure and Properties of Materials"
  },
  {
    label: "CIVE 280 - Fluid Mechanics"
  },
  {
    label: "CIVE 291 - Survey Camp"
  },
  {
    label: "CIVE 292 - Engineering Economics"
  },
  {
    label: "CIVE 298 - Seminar"
  },
  {
    label: "CIVE 299 - Seminar"
  },
  {
    label: "CIVE 303 - Structural Analysis 1"
  },
  {
    label: "CIVE 306 - Mechanics of Solids 3"
  },
  {
    label: "CIVE 313 - Structural Concrete Design 1"
  },
  {
    label: "CIVE 331 - Advanced Mathematics for Civil Engineers"
  },
  {
    label: "CIVE 332 - Civil Systems and Project Management"
  },
  {
    label: "CIVE 342 - Transport Principles and Applications"
  },
  {
    label: "CIVE 343 - Traffic Simulation Modelling and Applications"
  },
  {
    label: "CLAS 123 - Classical Studies in Pop Culture"
  },
  {
    label: "CIVE 353 - Geotechnical Engineering 1"
  },
  {
    label: "CIVE 354 - Geotechnical Engineering 2"
  },
  {
    label: "CIVE 375 - Environmental Engineering Principles"
  },
  {
    label: "CIVE 781 - Principles of Hydrologic Modelling"
  },
  {
    label: "CIVE 381 - Hydraulics"
  },
  {
    label: "CIVE 398 - Seminar"
  },
  {
    label: "CIVE 399 - Seminar"
  },
  {
    label: "CIVE 400 - Civil Engineering Project 1"
  },
  {
    label: "CIVE 401 - Civil Engineering Project 2"
  },
  {
    label: "CIVE 403 - Structural Analysis 2"
  },
  {
    label: "CIVE 405 - Structural Dynamics"
  },
  {
    label: "CIVE 413 - Structural Steel Design"
  },
  {
    label: "CIVE 414 - Structural Concrete Design"
  },
  {
    label: "CIVE 415 - Structural Systems"
  },
  {
    label: "CIVE 422 - Finite Element Analysis"
  },
  {
    label: "CIVE 440 - Transit Planning and Operations"
  },
  {
    label: "CIVE 444 - Urban Transport Planning"
  },
  {
    label: "CIVE 460 - Engineering Biomechanics"
  },
  {
    label: "CIVE 486 - Hydrology"
  },
  {
    label: "CIVE 491 - Engineering Law and Ethics"
  },
  {
    label: "CIVE 497 - Special Topics in Civil Engineering"
  },
  {
    label: "CIVE 498 - Seminar"
  },
  {
    label: "CIVE 499 - Seminar"
  },
  {
    label: "CIVE 507 - Building Science and Technology"
  },
  {
    label: "CIVE 512 - Rehabilitation of Structures"
  },
  {
    label: "CIVE 542 - Pavement Structural Design"
  },
  {
    label: "CIVE 554 - Geotechnical Engineering 3"
  },
  {
    label: "CIVE 572 - Wastewater Treatment"
  },
  {
    label: "CIVE 583 - Design of Urban Water Systems"
  },
  {
    label: "CIVE 596 - Construction Engineering"
  },
  {
    label: "CIVE 601 - Engineering Risk and Reliability"
  },
  {
    label: "CIVE 602 - Prestressed Concrete"
  },
  {
    label: "CIVE 603 - Mechanics of Reinforced Concrete"
  },
  {
    label: "CIVE 604 - Advanced Structural Steel Design"
  },
  {
    label: "CIVE 605 - Computer-Aided Structural Design"
  },
  {
    label: "CIVE 610 - Elasticity"
  },
  {
    label: "CIVE 611 - Finite Element Analysis"
  },
  {
    label: "CIVE 614 - Structural Dynamics"
  },
  {
    label: "CIVE 640 - Urban Transportation Planning Models: Principles & Applications"
  },
  {
    label: "CIVE 641 - Advances in Public Transportation Planning, Operations & Control"
  },
  {
    label: "CIVE 642 - Pavement Design and Management I"
  },
  {
    label: "CIVE 643 - Fundamentals of Traffic Flow Theory"
  },
  {
    label: "CIVE 650 - Earth Structures Case Histories"
  },
  {
    label: "CIVE 653 - Numerical Methods in Geomechanics"
  },
  {
    label: "CIVE 670 - Physico-Chemical Processes of Water and Wastewater Treatment"
  },
  {
    label: "CIVE 671 - Aquatic Chemistry"
  },
  {
    label: "CIVE 673 - Mathematical Methods in Environmental Engineering"
  },
  {
    label: "CIVE 676 - Case Studies in Groundwater Management"
  },
  {
    label: "CIVE 680 - Water Management"
  },
  {
    label: "CIVE 681 - Surface Water: Theory and Modelling"
  },
  {
    label: "CIVE 682 - Free Surface Hydraulics"
  },
  {
    label: "CIVE 700 - Topics in Structural Engineering"
  },
  {
    label: "CIVE 701 - Topics in Mechanics"
  },
  {
    label: "CIVE 705 - Theories of Inelastic Structures"
  },
  {
    label: "CIVE 702 - Topics in Construction Engineering"
  },
  {
    label: "CIVE 703 - Cold Formed Steel Design"
  },
  {
    label: "CIVE 704 - Bridge Design"
  },
  {
    label: "CIVE 707 - Advanced Building Science"
  },
  {
    label: "CIVE 708 - Building Physics and Modelling"
  },
  {
    label: "CIVE 709 - Durability Design of New Concrete Infrastructure"
  },
  {
    label: "CIVE 710 - Advanced Project Management"
  },
  {
    label: "CIVE 711 - Computer-Aided Project Organization and Management"
  },
  {
    label: "CIVE 712 - Aspects of Structural Design"
  },
  {
    label: "CIVE 720 - Infrastructure Management"
  },
  {
    label: "CIVE 740 - Topics in Transportation Engineering"
  },
  {
    label: "CIVE 743 - Transport Risk Analysis"
  },
  {
    label: "CIVE 741 - Public Sector Economics and Finance"
  },
  {
    label: "CIVE 742 - Pavement Design and Management II"
  },
  {
    label: "CIVE 744 - Transportation Networks: Models, Algorithms and Computer Applications"
  },
  {
    label: "CIVE 745 - Intelligent Transportation Systems"
  },
  {
    label: "CIVE 746 - Contemporary Urban Travel Forecasting Methods"
  },
  {
    label: "CIVE 750 - Topics in Geotechnical Engineering"
  },
  {
    label: "CIVE 751 - Advanced Geotechnical Testing"
  },
  {
    label: "CIVE 752 - Trenchless Technologies"
  },
  {
    label: "CIVE 753 - Geotechnical Earthquake Engineering"
  },
  {
    label: "CIVE 770 - Topics in Environmental Engineering"
  },
  {
    label: "CIVE 772 - Environmental Health and Fate Engineering"
  },
  {
    label: "CIVE 771 - Biological Wastewater Treatment: Theory and Practice"
  },
  {
    label: "CIVE 774 - Advanced Numerical Methods for Environmental Applications"
  },
  {
    label: "CIVE 776 - Soil & Groundwater Remediation"
  },
  {
    label: "CIVE 777 - Biofilms in Engineered and Natural Systems"
  },
  {
    label: "CIVE 779 - Advanced Topics in Drinking Water Treatment"
  },
  {
    label: "CIVE 780 - Urban Water Systems"
  },
  {
    label: "CLAS 100 - An Introduction to Classical Studies"
  },
  {
    label: "CLAS 103 - Colossos - The Major Figures of Classical Antiquity"
  },
  {
    label: "CLAS 104 - Classical Mythology"
  },
  {
    label: "CLAS 105 - Introduction to Medieval Studies"
  },
  {
    label: "CLAS 201 - Ancient Greek Society"
  },
  {
    label: "CLAS 202 - Ancient Roman Society"
  },
  {
    label: "CLAS 205 - Medieval Society"
  },
  {
    label: "CLAS 210 - History of Ancient Law"
  },
  {
    label: "CLAS 221 - Introduction to Archaeology"
  },
  {
    label: "CLAS 230 - Classical Roots of English Vocabulary"
  },
  {
    label: "CLAS 231 - Studies in Ancient Greek Literature"
  },
  {
    label: "CLAS 232 - Studies in Ancient Roman Literature"
  },
  {
    label: "CLAS 237 - The Ancient Near East and Egypt"
  },
  {
    label: "CLAS 241 - Survey of Greek Art and Architecture"
  },
  {
    label: "CLAS 242 - Survey of Roman Art and Architecture"
  },
  {
    label: "CLAS 251 - Greek History"
  },
  {
    label: "CLAS 252 - Roman History"
  },
  {
    label: "CLAS 261 - Great Works: Ancient and Medieval"
  },
  {
    label: "CLAS 311 - Sex and Gender in the Ancient World"
  },
  {
    label: "CLAS 321 - Archaeology of Complex Cultures"
  },
  {
    label: "CLAS 325 - Greek and Roman Religion"
  },
  {
    label: "CLAS 327 - Astrology and Magic"
  },
  {
    label: "CLAS 331 - Advanced Studies in Ancient Literature"
  },
  {
    label: "CLAS 341 - Advanced Studies in Greek Art and Architecture"
  },
  {
    label: "CLAS 342 - Advanced Studies in Roman Art and Architecture"
  },
  {
    label: "CLAS 351 - Advanced Studies in Greek History"
  },
  {
    label: "CLAS 352 - Advanced Studies in Roman History"
  },
  {
    label: "CLAS 361 - History of Ancient Philosophy"
  },
  {
    label: "CLAS 362 - History of Ancient Philosophy 2"
  },
  {
    label: "CLAS 384 - Science and Technology of Ancient Greece and Rome"
  },
  {
    label: "CLAS 390 - Classical Studies Abroad"
  },
  {
    label: "CLAS 395 - Research Skills Training"
  },
  {
    label: "CLAS 461 - Studies in Ancient Philosophy"
  },
  {
    label: "CLAS 485 - Greco-Roman Civilization and History"
  },
  {
    label: "CLAS 486 - Senior Seminar"
  },
  {
    label: "CLAS 490A - Senior Honours Thesis"
  },
  {
    label: "CLAS 490B - Senior Honours Thesis"
  },
  {
    label: "CLAS 492 - Directed Study"
  },
  {
    label: "CLAS 600 - Research Methods in Classical Studies"
  },
  {
    label: "CLAS 601 - The Integration of the Ancient Mediterranean World"
  },
  {
    label: "CLAS 631 - Studies in Greek Literature"
  },
  {
    label: "CLAS 632 - Studies in Latin Literature"
  },
  {
    label: "CLAS 633 - Studies in Ancient Literature"
  },
  {
    label: "CLAS 641 - Studies in Greek Art and Architecture"
  },
  {
    label: "CLAS 642 - Studies in Roman Art in Architecture"
  },
  {
    label: "CLAS 643 - Studies in Ancient Art and Architecture"
  },
  {
    label: "CLAS 651 - Topics in Greek History"
  },
  {
    label: "CLAS 652 - Topics in Roman History"
  },
  {
    label: "CLAS 653 - Topics in Ancient History"
  },
  {
    label: "CLAS 695 - Classical Studies Abroad"
  },
  {
    label: "CM 361 - Computational Statistics and Data Analysis"
  },
  {
    label: "CM 375 - Computational Linear Algebra"
  },
  {
    label: "CM 670 - Numerical Analysis"
  },
  {
    label: "CM 730 - Introduction to Symbolic Computation"
  },
  {
    label: "CM 740 - Fundamentals of Optimization"
  },
  {
    label: "CM 750 - Numerical Solution of Partial Differential Equations"
  },
  {
    label: "CM 761 - Computational Inference"
  },
  {
    label: "CM 762 - Data Visualization"
  },
  {
    label: "CM 763 - Statistical Learning - Classification"
  },
  {
    label: "CM 764 - Statistical Learning - Function Estimation"
  },
  {
    label: "CMW 201 - Worship Practicum 1"
  },
  {
    label: "CMW 202 - Worship Practicum 2"
  },
  {
    label: "CMW 363 - The Christian Hymn"
  },
  {
    label: "CMW 364 - Worship and its Music"
  },
  {
    label: "CMW 390 - Special Topics in Church Music and Worship"
  },
  {
    label: "CO 227 - Introduction to Optimization (Non-Specialist Level)"
  },
  {
    label: "CO 250 - Introduction to Optimization"
  },
  {
    label: "CO 255 - Introduction to Optimization (Advanced Level)"
  },
  {
    label: "CO 327 - Deterministic OR Models (Non-Specialist Level)"
  },
  {
    label: "CO 330 - Combinatorial Enumeration"
  },
  {
    label: "CO 331 - Coding Theory"
  },
  {
    label: "CO 342 - Introduction to Graph Theory"
  },
  {
    label: "CO 351 - Network Flow Theory"
  },
  {
    label: "CO 353 - Computational Discrete Optimization"
  },
  {
    label: "CO 367 - Nonlinear Optimization"
  },
  {
    label: "CO 370 - Deterministic OR Models"
  },
  {
    label: "CO 372 - Portfolio Optimization Models"
  },
  {
    label: "CO 380 - Mathematical Discovery and Invention"
  },
  {
    label: "CO 430 - Algebraic Enumeration"
  },
  {
    label: "CO 434 - Combinatorial Designs"
  },
  {
    label: "CO 439 - Topics in Combinatorics"
  },
  {
    label: "CO 440 - Topics in Graph Theory"
  },
  {
    label: "CO 442 - Graph Theory"
  },
  {
    label: "CO 444 - Algebraic Graph Theory"
  },
  {
    label: "CO 446 - Matroid Theory"
  },
  {
    label: "CO 450 - Combinatorial Optimization"
  },
  {
    label: "CO 452 - Integer Programming"
  },
  {
    label: "CO 453 - Network Design"
  },
  {
    label: "CO 454 - Scheduling"
  },
  {
    label: "CO 456 - Introduction to Game Theory"
  },
  {
    label: "CO 459 - Topics in Optimization"
  },
  {
    label: "CO 463 - Convex Optimization and Analysis"
  },
  {
    label: "KPE 217W - Physical Activity, Sport and the Social Sciences (WLU)"
  },
  {
    label: "COGSCI 300 - Intelligence in Machines, Humans, and Other Animals"
  },
  {
    label: "CO 466 - Continuous Optimization"
  },
  {
    label: "CO 471 - Semidefinite Optimization"
  },
  {
    label: "CO 480 - History of Mathematics"
  },
  {
    label: "CO 481 - Introduction to Quantum Information Processing"
  },
  {
    label: "CO 485 - The Mathematics of Public-Key Cryptography"
  },
  {
    label: "CO 487 - Applied Cryptography"
  },
  {
    label: "CO 499 - Reading in Combinatorics and Optimization"
  },
  {
    label: "CO 601 - Fundamentals of Enumerative Combinatorics"
  },
  {
    label: "CO 602 - Fundamentals of Optimization"
  },
  {
    label: "CO 630 - Algebraic Enumeration"
  },
  {
    label: "CO 631 - Symmetric Functions"
  },
  {
    label: "CO 634 - Combinatorial Designs"
  },
  {
    label: "CO 639 - Topics in Combinatorics"
  },
  {
    label: "CO 640 - Topics in Graph Theory"
  },
  {
    label: "CO 642 - Graph Theory"
  },
  {
    label: "CO 644 - Algebraic Graph Theory"
  },
  {
    label: "CO 646 - Matroid Theory"
  },
  {
    label: "CO 650 - Combinatorial Optimization"
  },
  {
    label: "CO 652 - Integer Programming"
  },
  {
    label: "CO 663 - Convex Optimization and  Analysis"
  },
  {
    label: "CO 664 - Quadratic Programming"
  },
  {
    label: "CO 666 - Continuous Optimization"
  },
  {
    label: "CO 671 - Semidefinite Optimization"
  },
  {
    label: "CO 681 - Quantum Information Processing"
  },
  {
    label: "CO 685 - The Mathematics of Public-Key Cryptography"
  },
  {
    label: "CO 687 - Applied Cryptography"
  },
  {
    label: "CO 690 - Literature and Research Studies"
  },
  {
    label: "CO 730 - Asymptotic Enumeration"
  },
  {
    label: "CO 734 - Topics in Combinatorial Design"
  },
  {
    label: "CO 738 - Probabilistic Methods in Discrete Mathematics"
  },
  {
    label: "CO 739 - Topics in Combinatorics"
  },
  {
    label: "CO 743 - Directed Graphs and Applications"
  },
  {
    label: "CO 745 - Graph Theory Algorithms"
  },
  {
    label: "CO 749 - Topics in Graph Theory"
  },
  {
    label: "CO 750 - Topics in Combinatorial Optimization"
  },
  {
    label: "CO 751 - Topics in Matroid Theory"
  },
  {
    label: "CO 754 - Approximation Algorithms in Combinatorial Optimization"
  },
  {
    label: "CO 759 - Topics in Discrete Optimization"
  },
  {
    label: "CO 765 - Mathematical Programming"
  },
  {
    label: "CO 769 - Topics in Continuous Optimization"
  },
  {
    label: "CO 771 - Mathematical Operations Research"
  },
  {
    label: "CO 778 - Portfolio Optimization"
  },
  {
    label: "CO 779 - Topics in Operations Research"
  },
  {
    label: "CO 781 - Topics in Quantum Information"
  },
  {
    label: "CS 640 - Principles of Database Management and Use"
  },
  {
    label: "CO 785 - Algorithmic Number Theory"
  },
  {
    label: "CO 789 - Topics in Cryptography"
  },
  {
    label: "CO 839 - Seminar in Combinatorics"
  },
  {
    label: "CO 849 - Seminar in Graph Theory"
  },
  {
    label: "CO 859 - Seminar in Discrete Optimization"
  },
  {
    label: "CO 869 - Seminar in Continuous Optimization"
  },
  {
    label: "CO 879 - Seminar in Operations Research"
  },
  {
    label: "COGSCI 600 - Seminar in Cognitive Science"
  },
  {
    label: "COMM 101 - Introduction to Financial Markets"
  },
  {
    label: "COMM 102 - Introduction to Business 2"
  },
  {
    label: "COMM 103 - Principles of Economics"
  },
  {
    label: "COMM 231 - Commercial and Business Law for Mathematics Students"
  },
  {
    label: "COMM 321 - Intermediate Accounting for Finance"
  },
  {
    label: "COMM 400 - Entrepreneurship, Technology and the Emerging Information Economy"
  },
  {
    label: "COMM 421 - Financial Statement Analysis"
  },
  {
    label: "COMM 431 - Project Management"
  },
  {
    label: "COMM 432 - Electronic Business"
  },
  {
    label: "COOP 1 - Co-operative Work Term"
  },
  {
    label: "COOP 2 - Co-operative Work Term"
  },
  {
    label: "COOP 3 - Co-operative Work Term"
  },
  {
    label: "COOP 4 - Co-operative Work Term"
  },
  {
    label: "COOP 5 - Co-operative Work Term"
  },
  {
    label: "COOP 6 - Co-operative Work Term"
  },
  {
    label: "COOP 7 - Co-operative Work Term"
  },
  {
    label: "COOP 8 - Co-operative Work Term"
  },
  {
    label: "COOP 9 - Co-operative Work Term"
  },
  {
    label: "COOP 10 - Co-operative Work Term"
  },
  {
    label: "COOP 11 - Co-operative Work Term"
  },
  {
    label: "COOP 12 - Co-operative Work Term"
  },
  {
    label: "COOP 101 - Career Success Strategies"
  },
  {
    label: "COOP 1G - Graduate Studies Co-operative Work Term 1"
  },
  {
    label: "COOP 2G - Graduate Studies  Co-operative Work Term 2"
  },
  {
    label: "COOP 3G - Graduate Studies Co-operative Work Term 3"
  },
  {
    label: "COOP 601 - Career Success Strategies"
  },
  {
    label: "CROAT 101 - Elementary Croatian 1"
  },
  {
    label: "CROAT 102 - Elementary Croatian II"
  },
  {
    label: "CROAT 201 - Intermediate Croatian I"
  },
  {
    label: "CROAT 202 - Intermediate Croatian II"
  },
  {
    label: "CROAT 496 - Special Topics in Croatian Studies"
  },
  {
    label: "CS 100 - Introduction to Computing through Applications"
  },
  {
    label: "CS 115 - Introduction to Computer Science 1"
  },
  {
    label: "CS 116 - Introduction to Computer Science 2"
  },
  {
    label: "CS 135 - Designing Functional Programs"
  },
  {
    label: "CS 136 - Elementary Algorithm Design and Data Abstraction"
  },
  {
    label: "CS 137 - Programming Principles"
  },
  {
    label: "CS 138 - Introduction to Data Abstraction and Implementation"
  },
  {
    label: "CS 145 - Designing Functional Programs (Advanced Level)"
  },
  {
    label: "CS 146 - Elementary Algorithm Design and Data Abstraction (Advanced Level)"
  },
  {
    label: "CS 200 - Concepts for Advanced Computer Usage"
  },
  {
    label: "CS 230 - Introduction to Computers and Computer Systems"
  },
  {
    label: "CS 234 - Data Types and Structures"
  },
  {
    label: "CS 240 - Data Structures and Data Management"
  },
  {
    label: "CS 241 - Foundations of Sequential Programs"
  },
  {
    label: "CS 245 - Logic and Computation"
  },
  {
    label: "CS 246 - Object-Oriented Software Development"
  },
  {
    label: "CS 247 - Software Engineering Principles"
  },
  {
    label: "CS 251 - Computer Organization and Design"
  },
  {
    label: "CS 330 - Management Information Systems"
  },
  {
    label: "CS 335 - Computational Methods in Business and Finance"
  },
  {
    label: "CS 338 - Computer Applications in Business: Databases"
  },
  {
    label: "CS 341 - Algorithms"
  },
  {
    label: "CS 343 - Concurrent and Parallel Programming"
  },
  {
    label: "CS 348 - Introduction to Database Management"
  },
  {
    label: "CS 349 - User Interfaces"
  },
  {
    label: "CS 350 - Operating Systems"
  },
  {
    label: "CS 360 - Introduction to the Theory of Computing"
  },
  {
    label: "CS 365 - Models of Computation"
  },
  {
    label: "CS 370 - Numerical Computation"
  },
  {
    label: "CS 371 - Introduction to Computational Mathematics"
  },
  {
    label: "CS 431 - Data-Intensive Distributed Analytics"
  },
  {
    label: "CS 398 - Topics in Computer Science"
  },
  {
    label: "CS 399 - Readings in Computer Science"
  },
  {
    label: "CS 430 - Applications Software Engineering"
  },
  {
    label: "CS 432 - Business Systems Analysis"
  },
  {
    label: "CS 436 - Networks and Distributed Computer Systems"
  },
  {
    label: "CS 442 - Principles of Programming Languages"
  },
  {
    label: "CS 444 - Compiler Construction"
  },
  {
    label: "CS 445 - Software Requirements Specification and Analysis"
  },
  {
    label: "CS 446 - Software Design and Architectures"
  },
  {
    label: "CS 447 - Software Testing, Quality Assurance and Maintenance"
  },
  {
    label: "CS 448 - Database Systems Implementation"
  },
  {
    label: "CS 449 - Human-Computer Interaction"
  },
  {
    label: "CS 450 - Computer Architecture"
  },
  {
    label: "CS 452 - Real-time Programming"
  },
  {
    label: "CS 454 - Distributed Systems"
  },
  {
    label: "CS 456 - Computer Networks"
  },
  {
    label: "CS 457 - System Performance Evaluation"
  },
  {
    label: "CS 458 - Computer Security and Privacy"
  },
  {
    label: "CS 462 - Formal Languages and Parsing"
  },
  {
    label: "CS 466 - Algorithm Design and Analysis"
  },
  {
    label: "CS 467 - Introduction to Quantum Information Processing"
  },
  {
    label: "CS 473 - Medical Image Processing"
  },
  {
    label: "CS 475 - Computational Linear Algebra"
  },
  {
    label: "CS 476 - Numeric Computation for Financial Modeling"
  },
  {
    label: "CS 480 - Introduction to Machine Learning"
  },
  {
    label: "CS 482 - Computational Techniques in Biological Sequence Analysis"
  },
  {
    label: "CS 483 - Computational Techniques in Structural Bioinformatics"
  },
  {
    label: "CS 484 - Computational Vision"
  },
  {
    label: "CS 485 - Statistical and Computational Foundations of Machine Learning"
  },
  {
    label: "CS 486 - Introduction to Artificial Intelligence"
  },
  {
    label: "CS 487 - Introduction to Symbolic Computation"
  },
  {
    label: "CS 488 - Introduction to Computer Graphics"
  },
  {
    label: "CS 489 - Advanced Topics in Computer Science"
  },
  {
    label: "CS 490 - Information Systems Management"
  },
  {
    label: "CS 492 - The Social Implications of Computing"
  },
  {
    label: "CS 497 - Multidisciplinary Studies in Computer Science"
  },
  {
    label: "CS 499R - Readings in Computer Science"
  },
  {
    label: "CS 499T - Honours Thesis"
  },
  {
    label: "CS 642 - Principles of Programming Languages"
  },
  {
    label: "CS 644 - Compiler Construction"
  },
  {
    label: "CS 645 - Software Requirements Specification and Analysis"
  },
  {
    label: "CS 646 - Software Design and  Architectures"
  },
  {
    label: "CS 647 - Software Testing, Quality Assurance and Maintenance"
  },
  {
    label: "CS 648 - Database Systems Implementation"
  },
  {
    label: "CS 649 - Human-Computer Interaction"
  },
  {
    label: "CS 650 - Computer Architecture"
  },
  {
    label: "CS 652 - Real-Time Programming"
  },
  {
    label: "CS 654 - Distributed Systems"
  },
  {
    label: "CS 656 - Computer Networks"
  },
  {
    label: "CS 657 - System Performance Evaluation"
  },
  {
    label: "CS 658 - Computer Security and Privacy"
  },
  {
    label: "CS 662 - Formal Languages and Parsing"
  },
  {
    label: "CS 664 - Computational Complexity Theory"
  },
  {
    label: "CS 666 - Algorithm Design and Analysis"
  },
  {
    label: "CS 673 - Medical Image Processing"
  },
  {
    label: "CS 675 - Computational Linear Algebra"
  },
  {
    label: "CS 676 - Numeric Computation for Financial Modelling"
  },
  {
    label: "CS 682 - Computational Techniques in Biological Sequence Analysis"
  },
  {
    label: "CS 683 - Computational Techniques in Structural Bioinformatics"
  },
  {
    label: "CS 684 - Computational Vision"
  },
  {
    label: "CS 685 - Machine Learning: Statistical and Computational Foundations"
  },
  {
    label: "CS 686 - Introduction to Artificial Intelligence"
  },
  {
    label: "CS 687 - Introduction to Symbolic Computation"
  },
  {
    label: "CS 688 - Introduction to Computer Graphics"
  },
  {
    label: "CS 690A - Literature and Research Studies"
  },
  {
    label: "CS 690B - Literature and Research Studies"
  },
  {
    label: "CS 692 - The Social Implications of Computing"
  },
  {
    label: "CS 697 - Graduate Research Skills Seminar"
  },
  {
    label: "CS 698 - Introductory Research Topics"
  },
  {
    label: "CS 740 - Database Engineering"
  },
  {
    label: "CS 741 - Non-Traditional Databases"
  },
  {
    label: "CS 742 - Parallel and Distributed Database Systems"
  },
  {
    label: "CS 743 - Principles of Database Management and Use"
  },
  {
    label: "CS 744 - Advanced Compiler Design"
  },
  {
    label: "CS 745 - Computer-Aided Verification"
  },
  {
    label: "CS 746 - Software Architecture"
  },
  {
    label: "CS 755 - System and Network Architectures and Implementation"
  },
  {
    label: "CS 758 - Cryptography/Network Security"
  },
  {
    label: "CS 761 - Randomized Algorithms"
  },
  {
    label: "CS 762 - Graph-Theoretic Algorithms"
  },
  {
    label: "CS 763 - Computational Geometry"
  },
  {
    label: "CS 764 - Computational Complexity"
  },
  {
    label: "CS 765 - Algorithmic Number Theory"
  },
  {
    label: "CS 766 - Theory of Quantum Information"
  },
  {
    label: "CS 767 - Advanced Logic for Computer Science"
  },
  {
    label: "CS 768 - Quantum Information Processing"
  },
  {
    label: "CS 770 - Numerical Analysis"
  },
  {
    label: "CS 774 - Advanced Computational Finance"
  },
  {
    label: "CS 775 - Parallel Algorithm in Scientific Computing"
  },
  {
    label: "CS 778 - Numerical Solution of Partial Differential Equations"
  },
  {
    label: "CS 779 - Splines and Their Use in Computer Graphics"
  },
  {
    label: "CS 780 - Advanced Symbolic Computation"
  },
  {
    label: "CS 781 - Colour in Computer Graphics"
  },
  {
    label: "CS 782 - Pattern Discovery in Biomolecular Data"
  },
  {
    label: "CS 783 - Computer Modeling of Biophysical Phenomena"
  },
  {
    label: "CS 784 - Computational Linguistics"
  },
  {
    label: "CS 785 - Intelligent Computer Interfaces"
  },
  {
    label: "CS 786 - Probabilistic Inference and Machine Learning"
  },
  {
    label: "CS 787 - Computational Vision"
  },
  {
    label: "CS 788 - High-Performance Image Synthesis"
  },
  {
    label: "CS 789 - User Interface Tools"
  },
  {
    label: "CS 791 - Non-Photorealistic Rendering"
  },
  {
    label: "CS 792 - Data Structures and Standards in Health Informatics"
  },
  {
    label: "CS 793 - Health Informatics  - Applications Domains"
  },
  {
    label: "CS 798 - Advanced Research Topics"
  },
  {
    label: "CS 840 - Advanced Topics in Data Structures"
  },
  {
    label: "CS 842 - Advanced Topics in Language Design and Implementation"
  },
  {
    label: "CS 846 - Advanced Topics in Software Engineering"
  },
  {
    label: "ECE 629 - Computer Arithmetic"
  },
  {
    label: "CS 848 - Advanced Topics in Data Bases"
  },
  {
    label: "CS 850 - Advanced Topics  in Computer Architecture"
  },
  {
    label: "CS 854 - Advanced Topics in Computer Systems"
  },
  {
    label: "CS 856 - Advanced Topics  in Distributed Computing"
  },
  {
    label: "CS 858 - Advanced Topics in Cryptography, Security and Privacy"
  },
  {
    label: "CS 860 - Advanced Topics in Algorithms and Complexity"
  },
  {
    label: "CS 867 - Advanced Topics in Quantum Computing"
  },
  {
    label: "CS 869 - Advanced Topics in Logic Design"
  },
  {
    label: "CS 870 - Advanced Topics  in Scientific Computation"
  },
  {
    label: "CS 882 - Advanced Topics in Bioinformatics"
  },
  {
    label: "CS 886 - Advanced Topics in Artificial Intelligence"
  },
  {
    label: "CS 887 - Advanced Topics in Symbolic Computation"
  },
  {
    label: "CS 888 - Advanced Topics in Computer Graphics"
  },
  {
    label: "ECE 616 - Principles of Data Communication"
  },
  {
    label: "CS 889 - Advanced Topics in Human-Computer Interaction"
  },
  {
    label: "CS 898 - Advanced Special Topics in Computer Science"
  },
  {
    label: "CT 601 - The Books of Church"
  },
  {
    label: "CT 602 - The History of Catholicism"
  },
  {
    label: "CT 603 - Foundations of Theology"
  },
  {
    label: "CT 604 - Catholic Moral Life and Thought"
  },
  {
    label: "CT 605 - The Prayer of Church: Spirituality and Liturgy"
  },
  {
    label: "CT 606A - Catholic Thought Research Paper or Project - Part I"
  },
  {
    label: "CT 606B - Catholic Thought Research Paper or Project - Part II"
  },
  {
    label: "CT 610 - Catholic Sacramental Life"
  },
  {
    label: "CT 611 - Catholic Perspectives on Ecology"
  },
  {
    label: "CT 612 - Special Topics in Catholic Theology"
  },
  {
    label: "CT 613 - The Catholic Imagination in Art and Literature"
  },
  {
    label: "CT 614 - Catholicism and Education"
  },
  {
    label: "CT 615 - Catholic Social Ethics"
  },
  {
    label: "CT 616 - Gender Ethics in Roman Catholicism"
  },
  {
    label: "CT 617 - Contemporary Bioethics: Issues of Life and Death"
  },
  {
    label: "CT 618 - The Catholic Church in Canada"
  },
  {
    label: "DAC 201 - Designing Digital Images and Interaction"
  },
  {
    label: "DAC 202 - Designing Digital Video"
  },
  {
    label: "DAC 300 - Special Topics in Digital Design"
  },
  {
    label: "DAC 301 - Designing with Digital Sound"
  },
  {
    label: "DAC 302 - Digital Storytelling"
  },
  {
    label: "DAC 305 - Design and User Experience of Interactive Games"
  },
  {
    label: "DAC 307 - Digital Display Systems"
  },
  {
    label: "DAC 308 - Cinematic Art and Practice"
  },
  {
    label: "DAC 309 - User Experience Design"
  },
  {
    label: "DAC 329 - Digital Presentations"
  },
  {
    label: "DAC 403 - Special Topics in Speech Communication and Technology"
  },
  {
    label: "DEI 612 - Working in Teams"
  },
  {
    label: "DEI 613 - Digital Media Solutions 1: Design Principles and Practice"
  },
  {
    label: "DEI 614 - Principles of Marketing in a Globalized World: Leveraging Digital Technology"
  },
  {
    label: "DEI 615 - New Perspectives: Media History and Analysis"
  },
  {
    label: "DEI 622 - Working in Teams 2"
  },
  {
    label: "DEI 623 - Digital Media Solutions 2: Project Management"
  },
  {
    label: "DEI 624 - Understanding the Consumer Universe: Market Research in Digital Media"
  },
  {
    label: "DEI 625 - Media Innovation and Impact"
  },
  {
    label: "DEI 626 - User Experience (UX) Fundamentals and User Research (UER)"
  },
  {
    label: "EARTH 10 - Enhancing Communications Skills for Earth Sciences Students"
  },
  {
    label: "EARTH 336 - Evolution 2: Fossil Record"
  },
  {
    label: "DEI 631 - Projects"
  },
  {
    label: "DM 700 - Numerical Simulation of Sheet Metal Forming"
  },
  {
    label: "DM 701 - Metal Forming"
  },
  {
    label: "DM 702 - Surface Machining"
  },
  {
    label: "DM 712 - Automation and Intelligent Manufacturing"
  },
  {
    label: "DM 713 - Life Extension"
  },
  {
    label: "DM 714 - Industrial Noise Analysis and Control"
  },
  {
    label: "DM 720 - Design: Materials Selection"
  },
  {
    label: "DM 722 - Mechatronics Engineering"
  },
  {
    label: "DM 723 - Sensors, Actuators & Interfacing"
  },
  {
    label: "DM 730 - Welding"
  },
  {
    label: "DM 766 - Strategic Management of Technology"
  },
  {
    label: "DM 782 - Integrating Product Development and Manufacturing"
  },
  {
    label: "DM 784 - Product Development Planning and Execution"
  },
  {
    label: "DM 790 - Logistics and Supply Chain Management"
  },
  {
    label: "DM 791 - Management of Quality"
  },
  {
    label: "DRAMA 101A - Introduction to the Theatre 1"
  },
  {
    label: "DRAMA 101B - Introduction to the Theatre 2"
  },
  {
    label: "DRAMA 102 - Introduction to Performance"
  },
  {
    label: "DRAMA 200 - Theatre and Performance in Context"
  },
  {
    label: "DRAMA 220 - Performance Studies"
  },
  {
    label: "DRAMA 221 - Performing Text"
  },
  {
    label: "DRAMA 222 - Performing the Body"
  },
  {
    label: "DRAMA 243 - Technical Production 1"
  },
  {
    label: "DRAMA 244 - Technical Production 2"
  },
  {
    label: "DRAMA 301 - Performance Creation"
  },
  {
    label: "DRAMA 306 - Production Participation 3"
  },
  {
    label: "DRAMA 307 - Production Participation 4"
  },
  {
    label: "DRAMA 311 - English Drama to 1642"
  },
  {
    label: "DRAMA 314 - Survey of Dramatic Literature and Theory 5"
  },
  {
    label: "DRAMA 315 - Survey of Dramatic Literature and Theory 6"
  },
  {
    label: "DRAMA 318 - Musical Theatre and Musical Film"
  },
  {
    label: "DRAMA 319B - Tennessee Williams in Performance"
  },
  {
    label: "DRAMA 319E - Beckett in Performance"
  },
  {
    label: "DRAMA 321 - Approaches to Acting with Text"
  },
  {
    label: "DRAMA 322 - Approaches to Acting with the Body"
  },
  {
    label: "DRAMA 326 - Performing the Voice"
  },
  {
    label: "DRAMA 331 - Design Theory and Practice"
  },
  {
    label: "DRAMA 333 - Costume Design"
  },
  {
    label: "DRAMA 335 - History of Costume"
  },
  {
    label: "DRAMA 341 - Lighting Design for the Theatre 1"
  },
  {
    label: "DRAMA 343 - Stage Management"
  },
  {
    label: "DRAMA 366 - Writing for Performance"
  },
  {
    label: "DRAMA 351 - Central and East European Film"
  },
  {
    label: "DRAMA 359 - Film and Television 1"
  },
  {
    label: "DRAMA 360 - Film and Television 2"
  },
  {
    label: "DRAMA 361 - Approaches to Directing"
  },
  {
    label: "DRAMA 362 - Directing 2"
  },
  {
    label: "DRAMA 363 - Stage Combat"
  },
  {
    label: "DRAMA 371 - Theatre History 1"
  },
  {
    label: "DRAMA 372 - Theatre History 2"
  },
  {
    label: "DRAMA 380 - Canadian Drama"
  },
  {
    label: "DRAMA 381 - Russian Drama before 1905"
  },
  {
    label: "DRAMA 382 - Russian Drama after 1905"
  },
  {
    label: "DRAMA 386 - Shakespeare 1"
  },
  {
    label: "DRAMA 387 - Shakespeare 2"
  },
  {
    label: "DRAMA 392 - American Film"
  },
  {
    label: "DRAMA 394 - The New Hollywood"
  },
  {
    label: "DRAMA 396 - Film Noir"
  },
  {
    label: "DRAMA 397 - Women and Film"
  },
  {
    label: "DRAMA 401 - Acting Styles"
  },
  {
    label: "DRAMA 402 - Political Theatre"
  },
  {
    label: "DRAMA 403 - Theories of the Modern Theatre"
  },
  {
    label: "DRAMA 404 - Genre"
  },
  {
    label: "DRAMA 405 - Theatre and the New Media"
  },
  {
    label: "DRAMA 406 - Production Participation 7"
  },
  {
    label: "DRAMA 407 - Production Participation 8"
  },
  {
    label: "DRAMA 409 - Theatre Criticism"
  },
  {
    label: "DRAMA 443 - Theatre Technology and Management Apprenticeship 1"
  },
  {
    label: "DRAMA 421 - Advanced Acting Workshop 1"
  },
  {
    label: "DRAMA 422 - Advanced Acting Workshop 2"
  },
  {
    label: "DRAMA 425 - Audition Technique and Professional Orientation"
  },
  {
    label: "DRAMA 426 - Advanced Voice Technique"
  },
  {
    label: "DRAMA 440 - Performative Inquiry and Practice"
  },
  {
    label: "DRAMA 490 - Selected Seminars in Drama & Theatre Arts"
  },
  {
    label: "DRAMA 491 - Selected Seminars in Drama & Theatre Arts"
  },
  {
    label: "DRAMA 499A - Senior Seminar"
  },
  {
    label: "DRAMA 499B - Senior Seminar"
  },
  {
    label: "DUTCH 101 - Elementary Dutch I"
  },
  {
    label: "DUTCH 102 - Elementary Dutch II"
  },
  {
    label: "DUTCH 201 - Intermediate Dutch I"
  },
  {
    label: "DUTCH 202 - Intermediate Dutch II"
  },
  {
    label: "EARTH 121 - Introductory Earth Sciences"
  },
  {
    label: "EARTH 121L - Introductory Earth Sciences Laboratory"
  },
  {
    label: "EARTH 122 - Introductory Environmental Sciences"
  },
  {
    label: "EARTH 122L - Introductory Environmental Sciences Laboratory"
  },
  {
    label: "EARTH 123 - Introductory Hydrology"
  },
  {
    label: "EARTH 123L - Field Methods in Hydrology"
  },
  {
    label: "EARTH 153 - Earth Engineering"
  },
  {
    label: "EARTH 221 - Geochemistry 1"
  },
  {
    label: "EARTH 223 - Field Methods in Hydrology"
  },
  {
    label: "EARTH 231 - Mineralogy"
  },
  {
    label: "EARTH 232 - Petrography"
  },
  {
    label: "EARTH 235 - Stratigraphic Approaches to Understanding Earth's History"
  },
  {
    label: "EARTH 236 - Principles of Paleontology"
  },
  {
    label: "EARTH 238 - Introductory Structural Geology"
  },
  {
    label: "EARTH 260 - Applied Geophysics 1"
  },
  {
    label: "EARTH 270 - Disasters and Natural Hazards"
  },
  {
    label: "EARTH 281 - Geological Impacts on Human Health"
  },
  {
    label: "EARTH 310 - Environmental Informatics"
  },
  {
    label: "EARTH 331 - Volcanology and Igneous Petrology"
  },
  {
    label: "EARTH 332 - Metamorphic Petrology"
  },
  {
    label: "EARTH 333 - Introductory Sedimentology"
  },
  {
    label: "EARTH 342 - Geomorphology and GIS Applications"
  },
  {
    label: "EARTH 358 - Earth System Science"
  },
  {
    label: "EARTH 359 - Flow Through Porous Media"
  },
  {
    label: "EARTH 390 - Methods in Geological Mapping"
  },
  {
    label: "EARTH 421 - Geochemistry 2"
  },
  {
    label: "EARTH 435 - Advanced Structural Geology"
  },
  {
    label: "EARTH 436A - Honours Thesis"
  },
  {
    label: "EARTH 436B - Honours Thesis"
  },
  {
    label: "EARTH 437 - Rock Mechanics"
  },
  {
    label: "EARTH 438 - Engineering Geology"
  },
  {
    label: "EARTH 440 - Quaternary Geology"
  },
  {
    label: "EARTH 444 - Applied Wetland Science"
  },
  {
    label: "EARTH 456 - Numerical Methods in Hydrogeology"
  },
  {
    label: "ECE 126 - Introduction to Electrostatics, Magnetism and Electronics"
  },
  {
    label: "EARTH 458 - Physical Hydrogeology"
  },
  {
    label: "EARTH 458L - Field Methods in Hydrogeology"
  },
  {
    label: "EARTH 459 - Chemical Hydrogeology"
  },
  {
    label: "EARTH 460 - Applied Geophysics 2"
  },
  {
    label: "EARTH 461 - Applied Geophysics 3"
  },
  {
    label: "EARTH 461L - Field Methods in Applied Geophysics"
  },
  {
    label: "EARTH 471 - Mineral Deposits"
  },
  {
    label: "EARTH 490 - Field Course"
  },
  {
    label: "EARTH 491 - Special Topics in Earth and Environmental Sciences"
  },
  {
    label: "EARTH 499 - Research Project"
  },
  {
    label: "EARTH 601 - Stratigraphic Paleontology"
  },
  {
    label: "EARTH 602 - Paleontology"
  },
  {
    label: "EARTH 603 - Micropaleontology"
  },
  {
    label: "EARTH 606 - Principles of Palynology"
  },
  {
    label: "EARTH 610 - Sedimentology - Recent Sediments"
  },
  {
    label: "EARTH 611 - Sedimentology - Ancient Sediments"
  },
  {
    label: "EARTH 612 - Carbonate Sedimentology"
  },
  {
    label: "EARTH 620 - Metamorphic Tectonites"
  },
  {
    label: "EARTH 621 - Aqueous Geochemistry"
  },
  {
    label: "EARTH 622 - Environmental Isotope Hydrology and Geochemistry"
  },
  {
    label: "EARTH 623 - Geochemistry of Hydrothermal Ore Deposits"
  },
  {
    label: "EARTH 624 - Environmental Biogeochemistry"
  },
  {
    label: "EARTH 625 - Advanced Petrology"
  },
  {
    label: "EARTH 626 - Global Biogeochemical Cycles"
  },
  {
    label: "EARTH 630 - Genesis of Metalliferous Ore Deposits"
  },
  {
    label: "EARTH 631 - Field Methods in Soil and Rock Mechanics"
  },
  {
    label: "EARTH 632 - Geology of Industrial Minerals"
  },
  {
    label: "EARTH 634 - Geomechanics of In Situ Processes"
  },
  {
    label: "EARTH 635 - Clay Mineralogy"
  },
  {
    label: "EARTH 638 - Advanced Engineering Geology"
  },
  {
    label: "EARTH 640 - Quaternary Geology of North America"
  },
  {
    label: "EARTH 641 - Advanced Quaternary Ecology"
  },
  {
    label: "EARTH 642 - Geoliminology"
  },
  {
    label: "EARTH 643 - Nutrients in Watersheds"
  },
  {
    label: "EARTH 644 - Global Problems of Quaternary Geology"
  },
  {
    label: "EARTH 645 - Geology of the Great Lakes Region"
  },
  {
    label: "EARTH 646 - Paleolimnology"
  },
  {
    label: "EARTH 650 - Physical Processes in Groundwater Systems"
  },
  {
    label: "EARTH 651 - Advanced Groundwater Modelling"
  },
  {
    label: "EARTH 653 - Contaminant Hydrogeology"
  },
  {
    label: "EARTH 654 - Groundwater Research Management"
  },
  {
    label: "EARTH 656 - Groundwater Modelling"
  },
  {
    label: "EARTH 657 - Organic Contaminants in the Subsurface"
  },
  {
    label: "EARTH 658 - Flow and Transport in Fractured Rock"
  },
  {
    label: "EARTH 659 - Chemical Hydrogeology"
  },
  {
    label: "EARTH 661 - Analytical Methods in Mathematical Geology"
  },
  {
    label: "EARTH 668 - Advanced Applied Geophysics"
  },
  {
    label: "EARTH 671 - Field Methods in Hydrogeology"
  },
  {
    label: "EARTH 690 - Current Problems in Geology"
  },
  {
    label: "EARTH 691 - Special Studies for MSc Students"
  },
  {
    label: "EARTH 692 - Special Studies for PhD Students"
  },
  {
    label: "EASIA 201R - Introduction to East Asia"
  },
  {
    label: "EASIA 205R - Religions of East Asia"
  },
  {
    label: "EASIA 206R - Japanese Religions"
  },
  {
    label: "EASIA 207R - Chinese Religions"
  },
  {
    label: "EASIA 210R - Premodern Chinese Literature"
  },
  {
    label: "EASIA 220R - The History of East Asian Communities in Canada"
  },
  {
    label: "EASIA 250R - Study Abroad in East Asia"
  },
  {
    label: "EASIA 275R - Religion and Japanese Film"
  },
  {
    label: "EASIA 277R - International Relations of East Asia"
  },
  {
    label: "EASIA 300R - Politics and Diplomacy of Contemporary Japan"
  },
  {
    label: "EASIA 301R - The Political Economy of East Asia"
  },
  {
    label: "EASIA 330R - Pure Land Buddhism"
  },
  {
    label: "EASIA 375R - Special Topics in East Asian Studies"
  },
  {
    label: "ECE 100A - Electrical and Computer Engineering Practice"
  },
  {
    label: "ECE 100B - Electrical and Computer Engineering Practice"
  },
  {
    label: "ECE 103 - Discrete Mathematics"
  },
  {
    label: "ECE 105 - Classical Mechanics"
  },
  {
    label: "ECE 106 - Electricity and Magnetism"
  },
  {
    label: "ECE 124 - Digital Circuits and Systems"
  },
  {
    label: "ECE 140 - Linear Circuits"
  },
  {
    label: "ECE 150 - Fundamentals of Programming"
  },
  {
    label: "ECE 155 - Engineering Design with Embedded Systems"
  },
  {
    label: "ECE 200A - Electrical and Computer Engineering Practice"
  },
  {
    label: "ECE 200B - Electrical and Computer Engineering Practice"
  },
  {
    label: "ECE 205 - Advanced Calculus 1 for Electrical and Computer Engineers"
  },
  {
    label: "ECE 206 - Advanced Calculus 2 for Electrical Engineers"
  },
  {
    label: "ECE 207 - Signals and Systems"
  },
  {
    label: "ECE 209 - Electronic and Electrical Properties of Materials"
  },
  {
    label: "ECE 222 - Digital Computers"
  },
  {
    label: "ECE 224 - Embedded Microprocessor Systems"
  },
  {
    label: "ECE 231 - Electronic Devices"
  },
  {
    label: "ECE 240 - Electronic Circuits 1"
  },
  {
    label: "ECE 242 - Electronic Circuits 2"
  },
  {
    label: "ECE 250 - Algorithms and Data Structures"
  },
  {
    label: "ECE 254 - Operating Systems and Systems Programming"
  },
  {
    label: "ECE 290 - Engineering Profession, Ethics, and Law"
  },
  {
    label: "ECE 300A - Electrical and Computer Engineering Practice"
  },
  {
    label: "ECE 300B - Electrical and Computer Engineering Practice"
  },
  {
    label: "ECE 309 - Introduction to Thermodynamics and Heat Transfer"
  },
  {
    label: "ECE 316 - Probability Theory and Statistics"
  },
  {
    label: "ECE 318 - Analog and Digital Communications"
  },
  {
    label: "ECE 325 - Microprocessor Systems and Interfacing for Mechatronics Engineering"
  },
  {
    label: "ECE 327 - Digital Hardware Systems"
  },
  {
    label: "ECE 331 - Electronic Devices"
  },
  {
    label: "ECE 351 - Compilers"
  },
  {
    label: "ECE 354 - Real-time Operating Systems"
  },
  {
    label: "ECE 356 - Database Systems"
  },
  {
    label: "ECE 358 - Computer Networks"
  },
  {
    label: "ECE 362 - Modeling and Control of Electric Drives"
  },
  {
    label: "ECE 361 - Power Systems and Components"
  },
  {
    label: "ECE 375 - Electromagnetic Fields and Waves"
  },
  {
    label: "ECE 380 - Analog Control Systems"
  },
  {
    label: "ECE 390 - Engineering Design, Economics, and Impact on Society"
  },
  {
    label: "ECE 400A - Electrical and Computer Engineering Practice"
  },
  {
    label: "ECE 400B - Electrical and Computer Engineering Practice"
  },
  {
    label: "ECE 403 - Thermal Physics"
  },
  {
    label: "ECE 404 - Geometrical and Physical Optics"
  },
  {
    label: "ECE 405 - Introduction to Quantum Mechanics"
  },
  {
    label: "ECE 406 - Algorithm Design and Analysis"
  },
  {
    label: "ECE 409 - Cryptography and System Security"
  },
  {
    label: "ECE 411 - Digital Communications"
  },
  {
    label: "ECE 413 - Digital Signal Processing"
  },
  {
    label: "ECE 414 - Wireless Communications"
  },
  {
    label: "CHINA 391R - Special Topics"
  },
  {
    label: "ECE 415 - Multimedia Communications"
  },
  {
    label: "ECE 416 - Advanced Topics in Networking"
  },
  {
    label: "ECE 417 - Image Processing"
  },
  {
    label: "ECE 418 - Communications Networks"
  },
  {
    label: "ECE 419 - Communication System Security"
  },
  {
    label: "ECE 423 - Embedded Computer Systems"
  },
  {
    label: "ECE 429 - Computer Architecture"
  },
  {
    label: "ECE 432 - Radio Frequency Integrated Devices and Circuits"
  },
  {
    label: "ECE 433 - Fabrication Technologies for Micro and Nano Devices"
  },
  {
    label: "ECE 444 - Integrated Analog Electronics"
  },
  {
    label: "ECE 445 - Integrated Digital Electronics"
  },
  {
    label: "ECE 451 - Software Requirements Specification and Analysis"
  },
  {
    label: "ECE 452 - Software Design and Architectures"
  },
  {
    label: "ECE 453 - Software Testing, Quality Assurance and Maintenance"
  },
  {
    label: "ECE 454 - Distributed Computing"
  },
  {
    label: "ECE 456 - Database Systems"
  },
  {
    label: "ECE 455 - Embedded Software"
  },
  {
    label: "ECE 457A - Cooperative and Adaptive Algorithms"
  },
  {
    label: "ECE 457B - Fundamentals of Computational Intelligence"
  },
  {
    label: "ECE 458 - Computer Security"
  },
  {
    label: "ECE 459 - Programming for Performance"
  },
  {
    label: "ECE 462 - Electrical Distribution Systems"
  },
  {
    label: "ECE 463 - Design & Applications of Power Electronic Converters"
  },
  {
    label: "ECE 464 - High Voltage Engineering and Power System Protection"
  },
  {
    label: "ECE 467 - Power Systems Analysis, Operations and Markets"
  },
  {
    label: "ECE 473 - Radio Frequency and Microwave Circuits"
  },
  {
    label: "ECE 474 - Radio and Wireless Systems"
  },
  {
    label: "ECE 475 - Radio-Wave Systems"
  },
  {
    label: "ECE 477 - Photonic Devices and Systems"
  },
  {
    label: "ECE 481 - Digital Control Systems"
  },
  {
    label: "ECE 492A - Engineering Design Project"
  },
  {
    label: "ECE 484 - Digital Control Applications"
  },
  {
    label: "ECE 486 - Robot Dynamics and Control"
  },
  {
    label: "ECE 488 - Multivariable Control Systems"
  },
  {
    label: "ECE 493 - Special Topics in Electrical and Computer Engineering"
  },
  {
    label: "ECE 498A - Engineering Design Project"
  },
  {
    label: "ECE 498B - Engineering Design Project"
  },
  {
    label: "ECE 600 - Analytical Methods for Electrical and Computer Engineering"
  },
  {
    label: "ECE 499 - Engineering Project"
  },
  {
    label: "ECE 602 - Introduction to Optimization"
  },
  {
    label: "ECE 613 - Image Processing and Visual Communication"
  },
  {
    label: "ECE 603 - Statistical Signal Processing"
  },
  {
    label: "ECE 604 - Stochastic Processes"
  },
  {
    label: "ECE 605 - Queueing Systems"
  },
  {
    label: "ECE 606 - Algorithm Design and Analysis"
  },
  {
    label: "ECE 607 - Algebraic Fundamentals for Computation, Communication and Control"
  },
  {
    label: "ECE 610 - Broadband  Communication Networks"
  },
  {
    label: "ECE 611 - Digital Communications"
  },
  {
    label: "ECE 612 - Information Theory"
  },
  {
    label: "ECE 614 - Communications Over Fading Dispersive Channels"
  },
  {
    label: "ECE 617 - Data Compression with Applications to Speech and Image Coding"
  },
  {
    label: "ECE 621 - Computer Organization"
  },
  {
    label: "ECE 627 - Register-transfer-level Digital Systems"
  },
  {
    label: "ECE 628 - Computer Network Security"
  },
  {
    label: "ECE 630 - Physics and Models of Semiconductor Devices"
  },
  {
    label: "ECE 631 - Microelectronic Processing Technology"
  },
  {
    label: "ECE 632 - Photovoltaic Energy Conversion"
  },
  {
    label: "ECE 636 - Advanced Analog Integrated Circuits"
  },
  {
    label: "ECE 637 - Digital Integrated Circuits"
  },
  {
    label: "ECE 638 - Semiconductor Microtransducers"
  },
  {
    label: "ECE 639 - Characteristics & Applications of Amorphous Silicon"
  },
  {
    label: "ECE 644 - Computer Aided Circuit Analysis and Design"
  },
  {
    label: "ECE 647 - Algorithms for Physical Design of Digital Integrated Circuits"
  },
  {
    label: "ECE 685 - Stochastic Processes for Dynamical Systems"
  },
  {
    label: "ECE 651 - Foundations of Software Engineering"
  },
  {
    label: "ECE 652 - Methods and Principles of Safety-critical Embedded Software"
  },
  {
    label: "ECE 653 - Software Testing, Quality Assurance and Maintenance"
  },
  {
    label: "ECE 654 - Software Reliability Engineering"
  },
  {
    label: "ECE 655 - Protocols, Software and Issues in Mobile Systems"
  },
  {
    label: "ECE 656 - Database Systems"
  },
  {
    label: "ECE 657 - Tools of Intelligent Systems Design"
  },
  {
    label: "ECE 658 - Component Based Software"
  },
  {
    label: "ECE 661 - HVDC and FACTS"
  },
  {
    label: "ECE 662 - Power Systems Analysis and Control"
  },
  {
    label: "ECE 674 - Analysis and Computation of Electric and Magnetic Fields"
  },
  {
    label: "ECE 663 - Energy Processing"
  },
  {
    label: "ECE 664 - Power System Components and Modeling"
  },
  {
    label: "ECE 665 - High Voltage Engineering Applications"
  },
  {
    label: "ECE 666 - Power Systems Operation"
  },
  {
    label: "ECE 667 - Sustainable Distributed Power Generation"
  },
  {
    label: "ECE 668 - Distribution System Engineering"
  },
  {
    label: "ECE 669 - Dielectric Materials"
  },
  {
    label: "ECE 671 - Microwave and RF Engineering"
  },
  {
    label: "ECE 672 - Optoelectronic Devices"
  },
  {
    label: "ECE 675 - Radiation & Propagation of Electromagnetic Fields"
  },
  {
    label: "ECE 678 - Fourier Optics and Optical Signal Processing"
  },
  {
    label: "ECE 682 - Multivariable Control Systems"
  },
  {
    label: "ECE 683 - System Identification"
  },
  {
    label: "ECE 686 - Filtering and Control of Stochastic Linear Systems"
  },
  {
    label: "ECE 687 - Robot Dynamics and Control"
  },
  {
    label: "ECE 688 - Nonlinear Systems"
  },
  {
    label: "ECE 700 - Special Topics in Electrical and Computer Engineering"
  },
  {
    label: "ECE 710 - Special Topics in Communications and Information Theory"
  },
  {
    label: "ECE 711 - Special Topics in Digital Communications"
  },
  {
    label: "ECE 720 - Special Topics in Computers and Digital Systems Software"
  },
  {
    label: "ECE 725 - Computer-Aided Verification"
  },
  {
    label: "ECE 730 - Special Topics in Solid State Devices"
  },
  {
    label: "ECE 732 - Simulation of Semiconductor Microtransducers"
  },
  {
    label: "ECE 731 - CCD Image Sensors"
  },
  {
    label: "ECE 738 - Low Power VLSI Circuits for Wireless Communication"
  },
  {
    label: "ECE 740 - Special Topics in Electronic Circuits"
  },
  {
    label: "ECE 741 - AHDL Modeling of Circuits and Systems"
  },
  {
    label: "ECE 750 - Special Topics in Computer Software"
  },
  {
    label: "ECE 752 - Software Architecture & Design"
  },
  {
    label: "ECE 753 - Parallel and Distributed Systems"
  },
  {
    label: "ECE 754 - Software Bug Detection and Tolerance"
  },
  {
    label: "ECE 755 - Safety-critical Real-time Embedded Software"
  },
  {
    label: "ECE 761 - Applied Nonlinear Systems Theory"
  },
  {
    label: "ECE 760 - Special Topics in Power Systems and High Voltage Engineering"
  },
  {
    label: "ECE 768 - Power System Quality"
  },
  {
    label: "ECE 770 - Special Topics in Antenna and Microwave Theory"
  },
  {
    label: "ECON 622A - Applied Microeconometrics"
  },
  {
    label: "ECE 780 - Special Topics in Control"
  },
  {
    label: "ECE 781 - Adaptive Control"
  },
  {
    label: "ECE 784 - Introduction to Stochastic Calculus"
  },
  {
    label: "ECE 6601PD - Power System Components and Modeling"
  },
  {
    label: "ECE 6602PD - Power System Management & Electricity Markets"
  },
  {
    label: "ECE 6603PD - Electromagnetic Compatibility and Power Quality"
  },
  {
    label: "ECE 6604PD - Distributed Generation"
  },
  {
    label: "ECE 6605PD - Power System Protection"
  },
  {
    label: "ECE 6606PD - Distribution System Engineering"
  },
  {
    label: "ECE 6607PD - Operation and Control of Restructured Power Systems"
  },
  {
    label: "ECE 6608PD - Dielectrics and Electrical Insulation"
  },
  {
    label: "ECE 6609PD - High Voltage Engineering Applications"
  },
  {
    label: "ECE 6610PD - Power Electronic Converters"
  },
  {
    label: "ECE 6611PD - Electric Machines and Motor Drives"
  },
  {
    label: "ECE 6612PD - FACTS: Models, Controls and Applications"
  },
  {
    label: "ECE 6613PD - Power System Analysis"
  },
  {
    label: "ECE 6614PD - Industrial Utilization of Electrical Energy"
  },
  {
    label: "ECE 6615PD - Design and application of DC/DC Converters"
  },
  {
    label: "ECE 6616PD - Electric Safety and Grounding System Design"
  },
  {
    label: "ECE 6617PD - Asset Management and Risk Assessment of Power Systems"
  },
  {
    label: "ECE 6618PD - Medium and High Voltage Power Cables"
  },
  {
    label: "ECON 101 - Introduction to Microeconomics"
  },
  {
    label: "ECON 102 - Introduction to Macroeconomics"
  },
  {
    label: "ECON 201 - Microeconomic Theory for Business and Policy"
  },
  {
    label: "ECON 202 - Macroeconomic Theory 1"
  },
  {
    label: "ECON 211 - Introduction to Mathematical Economics"
  },
  {
    label: "ECON 220 - Entrepreneurship Principles and Practices"
  },
  {
    label: "ECON 221 - Statistics for Economists"
  },
  {
    label: "ECON 231 - Introduction to International Economics"
  },
  {
    label: "ECON 254 - Economics of Sport"
  },
  {
    label: "ECON 301 - Microeconomic Theory 2"
  },
  {
    label: "ECON 302 - Macroeconomic Theory 2"
  },
  {
    label: "ECON 304 - Monetary Economics"
  },
  {
    label: "ECON 311 - Mathematical Economics"
  },
  {
    label: "ECON 321 - Introduction to Econometrics"
  },
  {
    label: "ECON 332 - International Finance"
  },
  {
    label: "ECON 341 - Public Economics: Expenditure"
  },
  {
    label: "ECON 345 - Marketing 2"
  },
  {
    label: "ECON 342 - Public Economics: Taxation"
  },
  {
    label: "ECON 344 - Marketing 1: Principles of Marketing and Consumer Economics"
  },
  {
    label: "ECON 351 - Labour Economics"
  },
  {
    label: "ECON 355 - Economics of Energy and Natural Resources"
  },
  {
    label: "ECON 357 - Environmental Economics"
  },
  {
    label: "ECON 361 - Cost-Benefit Analysis and Project Evaluation"
  },
  {
    label: "ECON 363 - The Economics of Social Problems"
  },
  {
    label: "ECON 365 - Economic Development of Modern Europe"
  },
  {
    label: "ECON 371 - Business Finance 1"
  },
  {
    label: "ECON 383 - Special Topics"
  },
  {
    label: "ECON 372 - Business Finance 2"
  },
  {
    label: "ECON 381 - Special Topics"
  },
  {
    label: "ECON 382 - Special Topics"
  },
  {
    label: "ECON 401 - Microeconomic Theory 3"
  },
  {
    label: "ECON 402 - Macroeconomic Theory 3"
  },
  {
    label: "ECON 403 - Topics in Economic Forecasting"
  },
  {
    label: "ECON 404 - Topics in Money and Finance"
  },
  {
    label: "ECON 405 - Topics in Financial Econometrics"
  },
  {
    label: "ECON 410 - Economic Thought"
  },
  {
    label: "ECON 411 - Advanced Mathematical Economics"
  },
  {
    label: "ECON 421 - Econometric Theory"
  },
  {
    label: "ECON 422 - Microeconometric Analysis"
  },
  {
    label: "ECON 436 - International Trade"
  },
  {
    label: "ECON 442 - Economics of Taxation"
  },
  {
    label: "ECON 445 - Industrial Organization and Public Policy"
  },
  {
    label: "ECON 451 - Law and Economics"
  },
  {
    label: "ECON 452 - Topics in Labour Economics"
  },
  {
    label: "ECON 456 - Topics in Health Economics"
  },
  {
    label: "ECON 465 - Economics in History: Topics in European History 476-1800 AD"
  },
  {
    label: "ECON 471 - Computational Economics"
  },
  {
    label: "ECON 472 - Senior Honours Essay"
  },
  {
    label: "ECON 483 - Special Topics"
  },
  {
    label: "ECON 484 - Special Topics"
  },
  {
    label: "ECON 487 - Special Studies"
  },
  {
    label: "ECON 488 - Special Studies"
  },
  {
    label: "ECON 489 - Special Studies"
  },
  {
    label: "ECON 601 - Microeconomic Theory I"
  },
  {
    label: "ECON 602 - Macroeconomic Theory I"
  },
  {
    label: "ECON 604 - Monetary Theory and Banking"
  },
  {
    label: "ECON 605 - Computational  Economics"
  },
  {
    label: "ECON 606 - Research Methodology"
  },
  {
    label: "ECON 621 - Econometrics I"
  },
  {
    label: "ECON 622 - Applied Microeconometrics I"
  },
  {
    label: "ECON 623 - Applied Macroeconometrics I"
  },
  {
    label: "ECON 624 - Dynamic Optimization with Applications"
  },
  {
    label: "ECON 631 - International Trade"
  },
  {
    label: "ECON 635 - International Trade & Development"
  },
  {
    label: "ECON 637 - Economic Analysis and Global Governance"
  },
  {
    label: "ECON 641 - Public Economics: Expenditure"
  },
  {
    label: "ECON 642 - Public Economics: Taxation"
  },
  {
    label: "ECON 643 - Health Economics"
  },
  {
    label: "ECON 645 - Industrial Organization I"
  },
  {
    label: "ECON 648 - Industrial Organization II"
  },
  {
    label: "ECON 651 - Labour Economics"
  },
  {
    label: "ECON 655 - Resource Economics"
  },
  {
    label: "ECON 657 - Environmental Economics"
  },
  {
    label: "ECON 659 - Real Options and Investment under Uncertainty"
  },
  {
    label: "ECON 672 - Financial Economics"
  },
  {
    label: "ECON 673 - Special Topics in Economics"
  },
  {
    label: "ENBUS 631 - Stakeholder Engagement"
  },
  {
    label: "ECON 701 - Micro II"
  },
  {
    label: "ECON 702 - Macro II"
  },
  {
    label: "ECON 704 - Monetary Economics 2"
  },
  {
    label: "ECON 721 - Econometrics II"
  },
  {
    label: "ECON 722 - Applied Microeconometrics II"
  },
  {
    label: "ECON 723 - Applied Macroeconometrics II"
  },
  {
    label: "ECON 727 - Financial Econometrics"
  },
  {
    label: "ECON 743 - Topics in Health Economics"
  },
  {
    label: "ECON 773 - Special Topic in Economics"
  },
  {
    label: "EFAS 32 - Academic Skills"
  },
  {
    label: "EFAS 34 - Writing Skills"
  },
  {
    label: "EFAS 36 - Oral Skills"
  },
  {
    label: "EFAS 42 - Academic Skills"
  },
  {
    label: "EFAS 44 - Writing Skills"
  },
  {
    label: "EFAS 46 - Oral Skills"
  },
  {
    label: "ENBUS 102 - Introduction to Environment and Business"
  },
  {
    label: "ENBUS 202 - Environmental Management Systems"
  },
  {
    label: "ENBUS 203 - Green Entrepreneurship"
  },
  {
    label: "ENBUS 204 - Principles of Industrial Ecology"
  },
  {
    label: "ENBUS 302 - Strategies for Environment and Business"
  },
  {
    label: "ENBUS 306 - Research Design"
  },
  {
    label: "ENBUS 307 - Industrial Ecology: Life Cycle Assessment and Management in Business"
  },
  {
    label: "ENBUS 308 - Sustainability Management Standards and Auditing"
  },
  {
    label: "ENBUS 309 - Applied Social Marketing"
  },
  {
    label: "ENBUS 310 - Strategic Management for Sustainable Business"
  },
  {
    label: "ENBUS 311 - Green Marketing"
  },
  {
    label: "ENBUS 312 - Operationalizing Sustainable Development within Business"
  },
  {
    label: "ENBUS 402A - Environment and Business Project"
  },
  {
    label: "ENBUS 402B - Environment and Business Project"
  },
  {
    label: "ENBUS 407 - Corporate Sustainability Accounting and Reporting"
  },
  {
    label: "ENBUS 408 - Best Practices in Regulations"
  },
  {
    label: "ENBUS 409 - Special Topics in Environment and Business"
  },
  {
    label: "ENBUS 410 - Engaging Stakeholders"
  },
  {
    label: "ENBUS 411 - International Corporate Responsibility"
  },
  {
    label: "ENBUS 601 - Business and the Case for Sustainability"
  },
  {
    label: "ENBUS 602 - Introduction to Sustainability for Business"
  },
  {
    label: "ENBUS 620 - Business Operations and Sustainability"
  },
  {
    label: "ENBUS 621 - Enterprise Carbon Management"
  },
  {
    label: "ENBUS 622 - Product Life Cycle Assessment and Management"
  },
  {
    label: "ENBUS 630 - Enterprise Marketing and Social Accountability"
  },
  {
    label: "ENBUS 632 - Sustainability Reporting"
  },
  {
    label: "ENBUS 640 - Strategies for Sustainable Enterprises"
  },
  {
    label: "ENBUS 642 - Stakeholder Engagement, Collaborations and Partnerships"
  },
  {
    label: "ENBUS 690 - Enterprise Sustainability Project"
  },
  {
    label: "ENBUS 650 - Environmental Finance"
  },
  {
    label: "ENBUS 690A - Enterprise Sustainability Project"
  },
  {
    label: "ENBUS 690B - Enterprise Sustainability Project"
  },
  {
    label: "ENGL 51 - Pre-University English: Essentials of Composition"
  },
  {
    label: "ENGL 100A - Fiction"
  },
  {
    label: "ENGL 100B - Poetry"
  },
  {
    label: "ENGL 100C - Drama"
  },
  {
    label: "ENGL 101A - Introduction to Literary Studies"
  },
  {
    label: "ENGL 101B - Introduction to Rhetorical Studies"
  },
  {
    label: "ENGL 103B - Varieties of English"
  },
  {
    label: "ENGL 104 - Rhetoric in Popular Culture"
  },
  {
    label: "ENGL 108A - The Superhero"
  },
  {
    label: "ENGL 108B - Global English Literatures"
  },
  {
    label: "ENGL 108C - Literature and the Environment"
  },
  {
    label: "ENGL 108D - Digital Lives"
  },
  {
    label: "ENGL 108E - Gender and Representation"
  },
  {
    label: "ENGL 108F - The Rebel"
  },
  {
    label: "ENGL 108H - Isolation and Alienation"
  },
  {
    label: "ENGL 108M - Youth and Adolescence"
  },
  {
    label: "ENGL 109 - Introduction to Academic Writing"
  },
  {
    label: "ENGL 119 - Communications in Mathematics & Computer Science"
  },
  {
    label: "ENGL 129R - Written Academic English"
  },
  {
    label: "ENGL 140R - The Use of English"
  },
  {
    label: "ENGL 141R - The Use of English 2"
  },
  {
    label: "ENGL 190 - Shakespeare"
  },
  {
    label: "ENGL 200A - Survey of British Literature 1"
  },
  {
    label: "ENGL 200B - Survey of British Literature 2"
  },
  {
    label: "ENGL 201 - The Short Story"
  },
  {
    label: "ENGL 202A - The Bible and Literature 1"
  },
  {
    label: "ENGL 202B - The Bible and Literature 2"
  },
  {
    label: "ENGL 203 - Designing Digital Images and Interaction"
  },
  {
    label: "ENGL 204 - Designing Digital Video"
  },
  {
    label: "ENGL 205R - The Canadian Short Story"
  },
  {
    label: "ENGL 206 - Writing Lives"
  },
  {
    label: "ENGL 208A - Forms of Fantasy"
  },
  {
    label: "ENGL 208B - Science Fiction"
  },
  {
    label: "ENGL 208C - Studies in Children's Literature"
  },
  {
    label: "ENGL 208E - Women's Writing"
  },
  {
    label: "ENGL 208H - Arthurian Legend"
  },
  {
    label: "ENGL 208K - Detective Fiction"
  },
  {
    label: "ENGL 208L - Race and the Literary Tradition"
  },
  {
    label: "ENGL 208M - Travel Literature"
  },
  {
    label: "ENGL 208N - Sex and Marriage in Literature"
  },
  {
    label: "ENGL 210E - Genres of Technical Communication"
  },
  {
    label: "ENGL 210F - Genres of Business Communication"
  },
  {
    label: "ENGL 210H - Arts Writing"
  },
  {
    label: "ENGL 210I - Legal Writing"
  },
  {
    label: "ENGL 212 - Convict Literature"
  },
  {
    label: "ENGL 213 - Literature and the Law"
  },
  {
    label: "ENGL 214 - Themes in Canadian Literature"
  },
  {
    label: "ENGL 215 - Canadian Regional Literature"
  },
  {
    label: "ENGL 216 - Canadian Multicultural Literature"
  },
  {
    label: "ENGL 217 - Canadian Children's Literature"
  },
  {
    label: "ENGL 218 - Mennonite Literature"
  },
  {
    label: "ENGL 220A - Languages and Society I"
  },
  {
    label: "ENGL 220B - Languages and Society II"
  },
  {
    label: "ENGL 220C - Comparative Literature: Theory and Practice"
  },
  {
    label: "ENGL 233C - Survey of Dramatic Literature and Theory 5"
  },
  {
    label: "ENGL 233D - Survey of Dramatic Literature and Theory 6"
  },
  {
    label: "ENGL 247 - American Literature and Popular Culture"
  },
  {
    label: "ENGL 251A - Criticism 1"
  },
  {
    label: "ENGL 251B - Criticism 2"
  },
  {
    label: "ENGL 260 - Irish Literature and the \"Troubles\""
  },
  {
    label: "ENGL 290 - Global Shakespeare"
  },
  {
    label: "ENGL 308 - Race and Resistance"
  },
  {
    label: "ENGL 292 - Rhetorical Theory and Criticism"
  },
  {
    label: "ENGL 293 - Introduction to Digital Media Studies"
  },
  {
    label: "ENGL 301H - Honours Literary Studies"
  },
  {
    label: "ENGL 303 - Special Topics in Digital Design"
  },
  {
    label: "ENGL 304 - Designing with Digital Sound"
  },
  {
    label: "ENGL 305A - Old English 1"
  },
  {
    label: "ENGL 305B - Old English 2"
  },
  {
    label: "ENGL 306A - Introduction to Linguistics"
  },
  {
    label: "ENGL 306B - Modern English Grammar"
  },
  {
    label: "ENGL 306C - Historical Linguistics"
  },
  {
    label: "ENGL 306D - The History of English"
  },
  {
    label: "ENGL 306F - Introduction to Semiotics"
  },
  {
    label: "ENGL 306G - Critical Discourse Analysis"
  },
  {
    label: "ENGL 309A - Rhetoric, Classical to Enlightenment"
  },
  {
    label: "ENGL 309B - Medieval to Pre-Modern Rhetoric"
  },
  {
    label: "ENGL 309C - Contemporary Rhetoric"
  },
  {
    label: "ENGL 309E - Speech Writing"
  },
  {
    label: "ENGL 309G - The Discourse of Dissent"
  },
  {
    label: "ENGL 310A - Chaucer 1"
  },
  {
    label: "ENGL 310B - Chaucer 2"
  },
  {
    label: "ENGL 310C - Non-Chaucerian Middle English Literature"
  },
  {
    label: "ENGL 313 - Early Canadian Literatures"
  },
  {
    label: "ENGL 315 - Modern Canadian Literature"
  },
  {
    label: "ENGL 316 - Canadian Drama"
  },
  {
    label: "ENGL 318 - Contemporary Canadian Literature"
  },
  {
    label: "ENGL 319 - History and Theory of Media 1"
  },
  {
    label: "ENGL 320 - History and Theory of Media 2"
  },
  {
    label: "ENGL 322 - Postcolonial Literature of the Americas"
  },
  {
    label: "ENGL 325 - Austen"
  },
  {
    label: "ENGL 330A - Sixteenth-Century Literature 1"
  },
  {
    label: "ENGL 330B - Sixteenth-Century Literature 2"
  },
  {
    label: "ENGL 335 - Creative Writing 1"
  },
  {
    label: "ENGL 336 - Creative Writing 2"
  },
  {
    label: "ENGL 342 - American Literature to 1860"
  },
  {
    label: "ENGL 343 - American Literature 1860-1910"
  },
  {
    label: "ENGL 344 - Modern American Literature"
  },
  {
    label: "ENGL 345 - American Literature in a Global Context"
  },
  {
    label: "ENGL 346 - American Fiction"
  },
  {
    label: "ENGL 347 - American Literature Since 1945"
  },
  {
    label: "ENGL 348 - American Poetry Since 1850"
  },
  {
    label: "ENGL 350A - Seventeenth-Century Literature 1"
  },
  {
    label: "ENGL 350B - Seventeenth-Century Literature 2"
  },
  {
    label: "ENGL 361 - English Drama to 1642"
  },
  {
    label: "ENGL 362 - Shakespeare 1"
  },
  {
    label: "ENGL 363 - Shakespeare 2"
  },
  {
    label: "ENGL 364 - Shakespeare in Performance at The Stratford Festival"
  },
  {
    label: "ENGL 365 - Selected Studies"
  },
  {
    label: "ENGL 366 - Selected Studies"
  },
  {
    label: "ENGL 371 - Editing Literary Works"
  },
  {
    label: "ENGL 376R - Applied English Grammar 1"
  },
  {
    label: "ENGL 377R - Applied English Grammar 2"
  },
  {
    label: "ENGL 392A - Information Design"
  },
  {
    label: "ENGL 392B - Visual Rhetoric"
  },
  {
    label: "ENGL 403 - Digital Design Research Project"
  },
  {
    label: "ENGL 406 - Advanced Rhetorical Study"
  },
  {
    label: "ENGL 407 - Language and Politics"
  },
  {
    label: "ENGL 408A - Writing for the Media"
  },
  {
    label: "ENGL 408B - The Discourse of Advertising"
  },
  {
    label: "ENGL 408C - The Rhetoric of Digital Design: Theory and Practice"
  },
  {
    label: "ENGL 409A - Rhetoric of Argumentation"
  },
  {
    label: "ENGL 410A - Restoration Literature"
  },
  {
    label: "ENGL 410B - Eighteenth-Century Literature 1"
  },
  {
    label: "ENGL 410C - Eighteenth-Century Literature 2"
  },
  {
    label: "ENGL 410D - Eighteenth-Century Fiction I"
  },
  {
    label: "ENGL 410E - Eighteenth-Century Fiction II"
  },
  {
    label: "ENGL 410F - Eighteenth-Century Women Writers"
  },
  {
    label: "ENGL 430A - Literature of the Romantic Period 1"
  },
  {
    label: "ENGL 430B - Literature of the Romantic Period 2"
  },
  {
    label: "ENGL 451A - Literature of the Victorian Age 1"
  },
  {
    label: "ENGL 451B - Literature of the Victorian Age 2"
  },
  {
    label: "ENGL 460A - Early Literature of the Modernist Period in the United Kingdom and Ireland"
  },
  {
    label: "ENGL 460B - Literature of the Modernist Period in the United Kingdom and Ireland"
  },
  {
    label: "ENGL 487 - Topics in British Literature and Commonwealth Literature Since 1800"
  },
  {
    label: "ENGL 460C - Literature of the Postwar Period in the United Kingdom and Ireland"
  },
  {
    label: "ENGL 460D - Contemporary Literature of the United Kingdom and Ireland"
  },
  {
    label: "ENGL 463 - Postcolonial Literatures"
  },
  {
    label: "ENGL 470A - Contemporary Critical Theory"
  },
  {
    label: "ENGL 470B - History of Literary Criticism"
  },
  {
    label: "ENGL 470C - Literary Studies in Digital Forms"
  },
  {
    label: "ENGL 471 - Adapting Literary Works"
  },
  {
    label: "ENGL 481 - Topics in the History and Theory of Language"
  },
  {
    label: "ENGL 484 - Topics in Literatures Medieval to Romantic"
  },
  {
    label: "ENGL 485 - Topics in Literatures Romantic to Modern"
  },
  {
    label: "ENGL 486 - Topics in Literatures Modern to Contemporary"
  },
  {
    label: "ENGL 492 - Topics in the History and Theory of Rhetoric"
  },
  {
    label: "ENGL 493 - Topics in Professional Writing and Communication Design"
  },
  {
    label: "ENGL 494 - Topics in Forms of Media and Critical Analysis"
  },
  {
    label: "ENGL 495A - Supervision of Honours Essay"
  },
  {
    label: "ENGL 495B - Supervision of Honours Essay"
  },
  {
    label: "ENGL 700 - Rhetorical Studies"
  },
  {
    label: "ENGL 705 - Studies in Old and Middle English Literature"
  },
  {
    label: "ENGL 710 - Studies in Renaissance Drama"
  },
  {
    label: "ENGL 715 - Studies in Renaissance Prose and Poetry"
  },
  {
    label: "ENGL 720 - Studies in the Restoration and Eighteenth Century Literature"
  },
  {
    label: "ENGL 725 - Studies in Romanticism"
  },
  {
    label: "ENGL 730 - Studies in Victorian Literature"
  },
  {
    label: "ENGL 735 - Studies in Modern British Literature"
  },
  {
    label: "ENGL 750 - Studies in Early American Literature"
  },
  {
    label: "ENGL 755 - Studies in 19th Century American Literature"
  },
  {
    label: "ENGL 760 - Studies in 20th-Century American Literature"
  },
  {
    label: "ENGL 770 - Studies in Canadian Literature"
  },
  {
    label: "ERS 618 - Sustainable Energy Systems"
  },
  {
    label: "ENGL 775 - Studies in Commonwealth Literature"
  },
  {
    label: "ENGL 780 - Studies in Genre"
  },
  {
    label: "ENGL 785 - Studies in Literary Criticism"
  },
  {
    label: "ENGL 788 - Topics in Rhetorical Theory and Criticism"
  },
  {
    label: "ENGL 789 - Writing Studies"
  },
  {
    label: "ENGL 790 - Discourse Analysis"
  },
  {
    label: "ENGL 791 - Professional Writing"
  },
  {
    label: "ENGL 792 - Semiotics"
  },
  {
    label: "ENGL 793 - History of Rhetoric"
  },
  {
    label: "ENGL 794 - Digital Culture"
  },
  {
    label: "ENGL 795 - Studies in Selected Topics"
  },
  {
    label: "ERS 605 - Ecosystem Perspectives and Analysis"
  },
  {
    label: "ERS 610 - Public Administration of the Environment & Natural Resources"
  },
  {
    label: "ENGL 796 - Propaganda and Ideology"
  },
  {
    label: "ENGL 797 - Digital Media and Literature"
  },
  {
    label: "ENGL 799 - Media Theory and Critique"
  },
  {
    label: "ENVE 100 - Environmental and Geological Engineering Concepts"
  },
  {
    label: "ENVE 127 - Statics and Solid Mechanics"
  },
  {
    label: "ENVE 153 - Earth Engineering"
  },
  {
    label: "ENVE 214 - Fluid Mechanics and Thermal Sciences"
  },
  {
    label: "ENVE 221 - Advanced Calculus"
  },
  {
    label: "ENVE 223 - Differential Equations and Balance Laws"
  },
  {
    label: "ENVE 224 - Probability and Statistics"
  },
  {
    label: "ENVE 275 - Environmental Chemistry"
  },
  {
    label: "ENVE 276 - Environmental Biology and Biotechnology"
  },
  {
    label: "ENVE 292 - Economics for Environmental Engineering"
  },
  {
    label: "ENVE 298 - Seminar"
  },
  {
    label: "ENVE 299 - Seminar"
  },
  {
    label: "ENVE 320 - Environmental Resource Management"
  },
  {
    label: "ENVE 321 - Advanced Mathematics"
  },
  {
    label: "ENVE 330 - Lab Analysis and Field Sampling Techniques"
  },
  {
    label: "ENVE 335 - Decision Making for Environmental Engineers"
  },
  {
    label: "ENVE 375 - Physico-Chemical Processes"
  },
  {
    label: "ENVE 391 - Law and Ethics for Environmental Engineers"
  },
  {
    label: "ENVE 398 - Seminar"
  },
  {
    label: "ENVE 399 - Seminar"
  },
  {
    label: "ENVE 430 - Environmental Engineering Project 1"
  },
  {
    label: "ENVE 431 - Environmental Engineering Project 2"
  },
  {
    label: "ENVE 472 - Wastewater Treatment"
  },
  {
    label: "ENVE 498 - Seminar"
  },
  {
    label: "ENVE 499 - Seminar"
  },
  {
    label: "ENVE 573 - Contaminant Transport"
  },
  {
    label: "ENVE 577 - Engineering for Solid Waste Management"
  },
  {
    label: "ENVS 105 - Environmental Sustainability and Ethics"
  },
  {
    label: "ENVS 131 - Communications for Environmental Professions"
  },
  {
    label: "ENVS 178 - Environmental Applications of Data Management and Statistics"
  },
  {
    label: "ENVS 195 - Introduction to Environmental Studies"
  },
  {
    label: "ENVS 200 - Field Ecology"
  },
  {
    label: "ENVS 201 - Introduction to Canadian Environmental Law"
  },
  {
    label: "ENVS 220 - Ecological Economics"
  },
  {
    label: "ENVS 278 - Applied Statistics for Environmental Research"
  },
  {
    label: "ENVS 334 - Introduction to Park Management"
  },
  {
    label: "ENVS 395 - Study Abroad"
  },
  {
    label: "ENVS 401 - Aboriginal Law and Natural Resource Development"
  },
  {
    label: "ENVS 433 - Ecotourism and Communities"
  },
  {
    label: "ENVS 444 - Ecosystem and Resource Management in Parks/Natural Areas"
  },
  {
    label: "ERS 100 - Foundations: Environment, Resources and Sustainability"
  },
  {
    label: "ENVS 469 - Landscape Ecology, Restoration and Rehabilitation"
  },
  {
    label: "ENVS 474 - Special Topics in Environmental Studies"
  },
  {
    label: "ERS 110 - Environmental Analysis and Solutions I: Foundations"
  },
  {
    label: "ERS 111 - Environmental Analysis and Solutions II: Experiential Approaches"
  },
  {
    label: "ERS 210 - Environmental Analysis and Solutions III: Greening Communities"
  },
  {
    label: "ERS 211 - Environmental Analysis and Solutions IV: Restoration Ecology"
  },
  {
    label: "ERS 215 - Environmental and Sustainability Assessment I"
  },
  {
    label: "ERS 234 - Forest Ecosystems"
  },
  {
    label: "ERS 253 - Communities and Sustainability"
  },
  {
    label: "ERS 265 - Water: Environmental History and Change"
  },
  {
    label: "ERS 266 - Water: Environmental History and Change"
  },
  {
    label: "ERS 270 - Introduction to Sustainable Agriculture"
  },
  {
    label: "ERS 275 - Special Readings/Seminar on Select Topics"
  },
  {
    label: "ERS 283 - Ontario Natural History: Species and Patterns"
  },
  {
    label: "ERS 294 - The Sacred Earth: Religion and Ecology"
  },
  {
    label: "ERS 310 - Environmental Analysis and Solutions V: Environmental Thought"
  },
  {
    label: "ERS 311 - Environmental Research Project I: Systems Thinking for Interdisciplinary Research"
  },
  {
    label: "ERS 409 - Activism! Community Action for Environmental and Social Change"
  },
  {
    label: "ERS 315 - Environmental and Sustainability Assessment II"
  },
  {
    label: "ERS 316 - Urban Water and Wastewater Systems: Integrated Planning and Management"
  },
  {
    label: "ERS 373 - Special Topics in Environment, Resources and Sustainability"
  },
  {
    label: "ERS 317 - Waste Management"
  },
  {
    label: "ERS 330 - Environmental Journalism 1"
  },
  {
    label: "ERS 340 - Ecosystem Assessment"
  },
  {
    label: "ERS 341 - Professional Conservation and Restoration Practice I"
  },
  {
    label: "ERS 360 - Nature: Art, Myth and Folklore"
  },
  {
    label: "ERS 365 - Water Governance"
  },
  {
    label: "ERS 370 - Corporate Sustainability: Issues and Prospects"
  },
  {
    label: "ERS 371 - An Ecosystem Approach to Environment and Health"
  },
  {
    label: "ERS 372 - First Nations and the Environment"
  },
  {
    label: "ERS 375 - Special Readings/Seminar on Select Topics"
  },
  {
    label: "ERS 382 - Ecological Monitoring"
  },
  {
    label: "ERS 406 - Paths to Sustainability"
  },
  {
    label: "ERS 383 - Tropical Ecosystems"
  },
  {
    label: "ERS 404 - Global Environmental Governance"
  },
  {
    label: "ERS 410 - Environmental Analysis and Solutions VI: Ecosocial Systems"
  },
  {
    label: "ERS 411A - Environmental Research Project II"
  },
  {
    label: "ERS 411B - Environmental Research Project III"
  },
  {
    label: "ERS 412A - Environmental Research Project II"
  },
  {
    label: "ERS 412B - Environmental Research Project III"
  },
  {
    label: "ERS 413 - Senior Honours Research Seminar"
  },
  {
    label: "ERS 415 - Environmental and Sustainability Assessment III"
  },
  {
    label: "ERS 430 - Environmental Journalism 2"
  },
  {
    label: "ERS 461 - Food Systems and Sustainability"
  },
  {
    label: "ERS 462 - Global Food and Agricultural Politics"
  },
  {
    label: "ERS 464 - Economics and Sustainability"
  },
  {
    label: "ERS 474 - Special Topics in Environment, Resources and Sustainability"
  },
  {
    label: "ERS 475 - Special Readings/Seminar on Select Topics"
  },
  {
    label: "ERS 476 - Environmental Education"
  },
  {
    label: "ERS 484 - Soil Ecosystem Dynamics"
  },
  {
    label: "ERS 604 - Advanced Topics in Global Environmental Governance"
  },
  {
    label: "ERS 606 - Governing Global Food and Agriculture Systems"
  },
  {
    label: "ERS 615 - Community Economic Development"
  },
  {
    label: "ERS 619 - Energy Sustainability"
  },
  {
    label: "ERS 650 - Topics in Governance and Sustainable Communities"
  },
  {
    label: "ERS 660 - Perspectives in Resource and Environmental Management"
  },
  {
    label: "ERS 669 - Research and Design Methods"
  },
  {
    label: "ERS 670 - MES Research Development"
  },
  {
    label: "ERS 674 - Special Topics in Environment and Resource Studies"
  },
  {
    label: "ERS 675 - Special Readings and Seminars on Selected Topics in Environment and Resource Studies"
  },
  {
    label: "ERS 680 - Sustainability Foundations"
  },
  {
    label: "ERS 681 - Sustainability Applications"
  },
  {
    label: "ERS 701 - Sustainability in Complex Socio-Ecological Systems"
  },
  {
    label: "ERS 702 - Critical Analysis and Advance Research in Environmental Studies"
  },
  {
    label: "ESL 101R - Oral Communications for Academic Purposes"
  },
  {
    label: "ESL 102R - Error Correction in Academic Writing"
  },
  {
    label: "ESL 103R - Phonetics for Effective English Pronunciation"
  },
  {
    label: "ESL 110R - Canadian Academic Culture"
  },
  {
    label: "ESL 129R - Written Academic English"
  },
  {
    label: "ESL 601R - Speaking English for Professional Purposes"
  },
  {
    label: "ESL 602R - Scholarly Writing in English"
  },
  {
    label: "ESL 612R - Professional Writing for Engineers"
  },
  {
    label: "FINE 100 - Studio Fundamentals"
  },
  {
    label: "FINE 101 - Art History and Visual Culture"
  },
  {
    label: "FINE 102 - World Cinema and Visual Culture"
  },
  {
    label: "FINE 112 - Modern Art, 1874-1945"
  },
  {
    label: "FINE 130 - Introduction to Digital Imaging"
  },
  {
    label: "FINE 150 - Appreciation and Expression"
  },
  {
    label: "FINE 202 - Painting"
  },
  {
    label: "FINE 204 - Topics in Studio Practice"
  },
  {
    label: "FINE 205 - Topics in Art History"
  },
  {
    label: "FINE 206 - Topics in Film Studies"
  },
  {
    label: "FINE 209 - Modern Art, 1940-1970"
  },
  {
    label: "FINE 210 - Art, 1780-1875"
  },
  {
    label: "FINE 212 - Renaissance Art, 1300-1500"
  },
  {
    label: "FINE 213 - Art of the 16th Century in Europe"
  },
  {
    label: "FINE 214 - Visual Culture of Medieval Europe"
  },
  {
    label: "FINE 215 - Art of the 17th Century in Europe"
  },
  {
    label: "FINE 216 - Topics in First Nations' Visual Culture"
  },
  {
    label: "FINE 220 - Oil Painting"
  },
  {
    label: "FINE 221 - Acrylic and Mixed Media"
  },
  {
    label: "FINE 222 - Principles of Sculpture"
  },
  {
    label: "FINE 223 - Methods and Materials of Sculpture"
  },
  {
    label: "FINE 223A - Clay Studies"
  },
  {
    label: "FINE 224 - Expressive Drawing"
  },
  {
    label: "FINE 225 - Observational Drawing"
  },
  {
    label: "FINE 226A - Introduction to Printmaking A"
  },
  {
    label: "FINE 226 - Experimental Drawing"
  },
  {
    label: "FINE 227 - Photography"
  },
  {
    label: "FINE 228 - Digital Imaging"
  },
  {
    label: "FINE 229 - Hybrid Digital Media"
  },
  {
    label: "FINE 230 - Printmaking"
  },
  {
    label: "FINE 231 - Mixed Multiples"
  },
  {
    label: "FINE 232 - Video and Sound"
  },
  {
    label: "FINE 241 - Survey of Greek Art and Architecture"
  },
  {
    label: "FINE 242 - Survey of Roman Art and Architecture"
  },
  {
    label: "FINE 243 - Topics in Fine Arts Experiential Learning"
  },
  {
    label: "FINE 244 - History of Visual Media to 1910"
  },
  {
    label: "FINE 245 - History of Film and Visual Media from 1900 to Today"
  },
  {
    label: "FINE 252 - Religion in Popular Film"
  },
  {
    label: "FINE 253 - Special Topics in Religion and Film"
  },
  {
    label: "FINE 255R - Film as Social Criticism"
  },
  {
    label: "FINE 256 - Experimental Film"
  },
  {
    label: "FINE 257 - Video, New Media & the Digital Turn"
  },
  {
    label: "FINE 262 - Global Queer Cinema"
  },
  {
    label: "FINE 271 - Ceramics: Studies in Material Practice"
  },
  {
    label: "FINE 272 - Clay Studies"
  },
  {
    label: "FINE 274 - Figure and Anatomy"
  },
  {
    label: "FINE 281 - Art and Gender"
  },
  {
    label: "FINE 282 - Canadian Art from the 17th Century to 1940"
  },
  {
    label: "FINE 293 - Fine Arts Abroad"
  },
  {
    label: "FINE 294 - Fine Arts Abroad"
  },
  {
    label: "FINE 300 - Studio Practice"
  },
  {
    label: "FINE 301 - Advanced Studio Practice"
  },
  {
    label: "FINE 302 - Analysis and Research"
  },
  {
    label: "FINE 303 - Honours Art History Research"
  },
  {
    label: "FINE 304 - Topics in Studio Practice"
  },
  {
    label: "FINE 305 - Topics in Art History"
  },
  {
    label: "FINE 306 - Topics in Film Studies"
  },
  {
    label: "FINE 319 - Contemporary Art"
  },
  {
    label: "FINE 330 - Topics Course in Museums, Galleries, Curatorship"
  },
  {
    label: "FINE 331 - Art of the 18th Century in Europe"
  },
  {
    label: "FINE 332 - History of Art Academies"
  },
  {
    label: "FINE 333 - Costume Design"
  },
  {
    label: "FINE 335 - Design Theory and Practice"
  },
  {
    label: "FINE 337 - History of Costume"
  },
  {
    label: "FINE 338 - Philosophy of Art"
  },
  {
    label: "FINE 341 - Advanced Studies in Greek Art and Architecture"
  },
  {
    label: "FINE 342 - Advanced Studies in Roman Art and Architecture"
  },
  {
    label: "FINE 343 - Topics in Fine Arts Experiential Learning"
  },
  {
    label: "FINE 344 - Fine Arts Internship"
  },
  {
    label: "FINE 351 - Central and East European Film"
  },
  {
    label: "FINE 359 - Topics in German Film"
  },
  {
    label: "FINE 360 - Film and Television 1"
  },
  {
    label: "FINE 361 - Film and Television 2"
  },
  {
    label: "FINE 362 - German Film Classics"
  },
  {
    label: "FINE 363 - German Filmmakers in Hollywood"
  },
  {
    label: "FINE 364 - German and Russian Film Pioneers"
  },
  {
    label: "FINE 365 - Film Noir"
  },
  {
    label: "FINE 366 - Musical Theatre and Musical Film"
  },
  {
    label: "FINE 368 - International Comics and Animation Film"
  },
  {
    label: "FINE 376 - American Film"
  },
  {
    label: "FINE 377 - The New Hollywood"
  },
  {
    label: "FINE 378 - Women and Film"
  },
  {
    label: "FINE 393 - Fine Arts Abroad"
  },
  {
    label: "FINE 396 - Methods in the History of Art"
  },
  {
    label: "FINE 402 - Directed Study"
  },
  {
    label: "FINE 404 - Topics in Studio Practice"
  },
  {
    label: "FINE 405 - Topics in Art History"
  },
  {
    label: "FINE 406 - Topics in Film Studies"
  },
  {
    label: "FINE 470 - Senior Seminar in Film Concepts"
  },
  {
    label: "FINE 471 - Senior Seminar in Film Concepts 2"
  },
  {
    label: "FINE 472 - Intensive Studio Specialization 1"
  },
  {
    label: "FINE 473 - Intensive Studio Specialization 2"
  },
  {
    label: "FINE 474 - Honours Studio Practicum 1"
  },
  {
    label: "FINE 475 - Honours Studio Practicum 2"
  },
  {
    label: "FINE 490 - Honours Film Studies Thesis 1"
  },
  {
    label: "FINE 491 - Honours Film Studies Thesis 2"
  },
  {
    label: "FINE 492 - Senior General Film Studies Project"
  },
  {
    label: "FINE 493 - Senior General Art History Project"
  },
  {
    label: "FINE 496 - Honours Art History Thesis 1"
  },
  {
    label: "FINE 497 - Honours Art History Thesis 2"
  },
  {
    label: "FINE 670A - Graduate Studio 1 (Part-Time)"
  },
  {
    label: "FINE 670B - Graduate Studio 1 (Part-time)"
  },
  {
    label: "FINE 671 - Graduate Summer Studies 1 (Part-time)"
  },
  {
    label: "FINE 672A - Graduate Studio 2 (Part-Time)"
  },
  {
    label: "FINE 672B - Graduate Studio 2 (Part-Time)"
  },
  {
    label: "FINE 673 - Graduate Summer Studio 2 (Part-Time)"
  },
  {
    label: "FINE 674 - Graduate Studio 3 (Part-time)"
  },
  {
    label: "FINE 680 - Issues in Contemporary Art 1"
  },
  {
    label: "FINE 681 - Issues in Contemporary Art 2"
  },
  {
    label: "FINE 682 - Graduate Senior Seminar 1"
  },
  {
    label: "FINE 683 - Graduate Senior Seminar 2"
  },
  {
    label: "FINE 690 - Graduate Studio 1"
  },
  {
    label: "FINE 691 - Graduate Studio 2"
  },
  {
    label: "FINE 692 - Graduate Summer Studio"
  },
  {
    label: "FINE 694 - Special Topics in Art History and Criticism"
  },
  {
    label: "FINE 695 - Selected Subjects in Studio Art"
  },
  {
    label: "FR 101 - Beginner French"
  },
  {
    label: "FR 151 - Basic French 1"
  },
  {
    label: "FR 152 - Basic French 2"
  },
  {
    label: "FR 192A - French Language 1: Module 1"
  },
  {
    label: "FR 192B - French Language 1: Module 2"
  },
  {
    label: "FR 197 - French Culture & Literature: Origins to 1715"
  },
  {
    label: "FR 203 - Introduction to Phonetics of French"
  },
  {
    label: "FR 250A - Intermediate Spoken French"
  },
  {
    label: "FR 251 - French Language 2: Module 1"
  },
  {
    label: "FR 252 - French Language 2: Module 2"
  },
  {
    label: "FR 255 - Business French I"
  },
  {
    label: "FR 263 - Major Works 1 - France and la francophonie"
  },
  {
    label: "FR 276 - Introduction to Literature: Quebec and French Canada"
  },
  {
    label: "FR 291 - French Civilization 1"
  },
  {
    label: "FR 292 - French Civilization 2"
  },
  {
    label: "FR 297 - French Culture & Literature: 1715 to the Present"
  },
  {
    label: "FR 300A - Advanced Spoken French"
  },
  {
    label: "FR 303 - Introduction to Linguistics"
  },
  {
    label: "FR 332 - 17th-Century French Literature"
  },
  {
    label: "FR 332A - 17th-Century French Literature"
  },
  {
    label: "FR 332B - 17th-Century French Literature"
  },
  {
    label: "FR 343 - 18th-Century French Literature"
  },
  {
    label: "FR 343A - 18th-Century French Literature"
  },
  {
    label: "FR 343B - 18th-Century French Literature"
  },
  {
    label: "FR 351 - French Language 3"
  },
  {
    label: "FR 353 - Introduction to Translation"
  },
  {
    label: "FR 354 - 19th-Century French Literature"
  },
  {
    label: "FR 354A - 19th-Century French Literature"
  },
  {
    label: "FR 354B - 19th-Century French Literature"
  },
  {
    label: "FR 355 - Business French II"
  },
  {
    label: "FR 363 - 20th-Century French Literature"
  },
  {
    label: "FR 363A - 20th-Century French Literature"
  },
  {
    label: "FR 363B - 20th-Century French Literature"
  },
  {
    label: "FR 365 - French Theatre"
  },
  {
    label: "FR 367 - 21st-Century French Literature"
  },
  {
    label: "FR 373 - Languages in Contact: The History of French-English Bilingualism"
  },
  {
    label: "FR 375 - Quebec Literature"
  },
  {
    label: "FR 392A - French Language Practice"
  },
  {
    label: "FR 392B - French Language Practice"
  },
  {
    label: "FR 393A - French Civilization, 20th-Century French History"
  },
  {
    label: "FR 393B - French Civilization, 20th-Century French History"
  },
  {
    label: "FR 395A - French Thought"
  },
  {
    label: "FR 395B - French Thought"
  },
  {
    label: "FR 399A - Independent Cultural Study"
  },
  {
    label: "FR 400 - Advanced Translation"
  },
  {
    label: "FR 403 - Topics in Linguistics"
  },
  {
    label: "FR 409 - Medieval French Language"
  },
  {
    label: "FR 410 - Medieval French Literature"
  },
  {
    label: "FR 424 - 16th-Century French Literature"
  },
  {
    label: "FR 424A - 16th-Century French Literature"
  },
  {
    label: "FR 424B - 16th-Century French Literature"
  },
  {
    label: "FR 452 - Advanced French Language"
  },
  {
    label: "FR 471 - Francophone Literatures in Canada"
  },
  {
    label: "FR 473 - Aspects of French Canada"
  },
  {
    label: "FR 482 - Study of Individual Authors"
  },
  {
    label: "FR 483 - Introduction to Literary Theory"
  },
  {
    label: "FR 484 - Children's Literature in French"
  },
  {
    label: "FR 485 - French Women Writers"
  },
  {
    label: "FR 486 - Topics in French and Francophone Cultural Studies"
  },
  {
    label: "FR 487 - African and Caribbean French Literature"
  },
  {
    label: "FR 488 - Francophone Literature and Psychoanalytic Theory"
  },
  {
    label: "FR 490 - Senior Tutorials"
  },
  {
    label: "FR 491 - Senior Tutorials"
  },
  {
    label: "FR 492 - Senior Tutorials"
  },
  {
    label: "FR 493 - Senior Tutorials"
  },
  {
    label: "FR 494 - Senior Tutorials"
  },
  {
    label: "FR 600 - Research Methods and Professional Communication in French Studies"
  },
  {
    label: "FR 601 - Language"
  },
  {
    label: "FR 603 - Linguistics"
  },
  {
    label: "FR 611 - Old French Language & Literature"
  },
  {
    label: "FR 621 - Renaissance Literature"
  },
  {
    label: "FR 631 - 17th-Century Literature"
  },
  {
    label: "FR 641 - 18th-Century Literature"
  },
  {
    label: "FR 651 - 19th-Century Literature"
  },
  {
    label: "FR 661 - 20th-Century Literature"
  },
  {
    label: "FR 671 - French-Canadian Literature"
  },
  {
    label: "FR 681 - Critical Methods - Theory of Literature"
  },
  {
    label: "FR 685 - Studies in Selected Topics"
  },
  {
    label: "FR 687 - Topics in North African Literature"
  },
  {
    label: "GBDA 101 - Introduction to Digital Media Design"
  },
  {
    label: "GBDA 102 - International Business and Cross-Cultural Management"
  },
  {
    label: "GBDA 103 - User Experience Design"
  },
  {
    label: "GBDA 201 - Digital Media Project 1"
  },
  {
    label: "GBDA 202 - Digital Media Project 2"
  },
  {
    label: "GBDA 203 - Introduction to Digital Culture"
  },
  {
    label: "GBDA 204 - Working in Teams and Project Management"
  },
  {
    label: "GBDA 205 - Quantitative Methods"
  },
  {
    label: "GBDA 210 - Introduction to User Experience Design"
  },
  {
    label: "GBDA 228 - Digital Imaging for Online Applications"
  },
  {
    label: "GBDA 229 - Hybrid Digital Media"
  },
  {
    label: "GBDA 301 - Global Digital Project 1"
  },
  {
    label: "GBDA 302 - Global Digital Project 2"
  },
  {
    label: "GBDA 303 - Data and Society"
  },
  {
    label: "GBDA 410 - Seminar in User Experience Research"
  },
  {
    label: "GBDA 304 - Marketing in the Digital World"
  },
  {
    label: "GBDA 305 - Global Development and Business"
  },
  {
    label: "GBDA 311 - Introduction to Business Financials"
  },
  {
    label: "GBDA 306 - Ethics and Values in Design"
  },
  {
    label: "GBDA 310 - Advanced User Experience Design and Research"
  },
  {
    label: "GBDA 365 - Study Abroad"
  },
  {
    label: "GBDA 401 - Cross-Cultural Digital Business 1"
  },
  {
    label: "GBDA 402 - Capstone Course: Cross-Cultural Digital Business"
  },
  {
    label: "GBDA 403 - Extended E-portfolio 1"
  },
  {
    label: "GBDA 404 - Extended E-Portfolio 2"
  },
  {
    label: "GBDA 465 - Study Abroad"
  },
  {
    label: "GEMCC 601 - Climate Change: Physical Science Basis"
  },
  {
    label: "GEMCC 602 - Climate Change Vulnerability and Adaptation"
  },
  {
    label: "GEMCC 603 - Climate Change Mitigation"
  },
  {
    label: "GEMCC 610 - Climate Prediction, Modeling and Scenarios"
  },
  {
    label: "GEMCC 620 - Climate and Society"
  },
  {
    label: "GEMCC 621 - Advanced Climate Change Adaptation"
  },
  {
    label: "GEMCC 622 - Climate Change, Natural Hazards and Disaster Risk Reduction"
  },
  {
    label: "GEMCC 630 - Land Use and the Carbon Cycle"
  },
  {
    label: "GEMCC 640 - Climate Change Governance: From Global Treaties to Local Innovation"
  },
  {
    label: "GEMCC 642 - Climate Compatible Development"
  },
  {
    label: "GENE 21A - Topics for Technical Courses Taken on Exchange by Architecture Students"
  },
  {
    label: "GENE 21C - Topics for Technical Courses Taken on Exchange by Chemical Engineering Students"
  },
  {
    label: "GENE 21D - Topics for Technical Courses Taken on Exchange by Systems Design Engineering Students"
  },
  {
    label: "GENE 21E - Topics for Technical Courses Taken on Exchange by Electrical Engineering Students"
  },
  {
    label: "GENE 21I - Topics for Technical Courses Taken on Exchange by Environmental Engineering Students"
  },
  {
    label: "GENE 21K - Topics for Technical Courses Taken on Exchange by Civil Engineering Students"
  },
  {
    label: "GENE 21L - Topics for Technical Courses Taken on Exchange by Geological Engineering Students"
  },
  {
    label: "GENE 21M - Topics for Technical Courses Taken on Exchange by Mechanical Engineering Students"
  },
  {
    label: "GENE 21Q - Topics for Technical Courses Taken on Exchange by Computer Engineering Students"
  },
  {
    label: "GENE 21S - Topics for Technical Courses Taken on Exchange by Software Engineering Students"
  },
  {
    label: "GENE 21T - Topics for Technical Courses Taken on Exchange by Mechatronics Engineering Students"
  },
  {
    label: "GENE 22A - Topics for List A Complementary Studies Courses Taken on Exchange by Engineering Students"
  },
  {
    label: "GENE 22B - Topics for List B Complementary Studies Courses Taken on Exchange by Engineering Students"
  },
  {
    label: "GENE 22C - Topics for List C Complementary Studies Courses Taken on Exchange by Engineering Students"
  },
  {
    label: "GENE 22D - Topics for List D Complementary Studies Courses Taken on Exchange by Engineering Students"
  },
  {
    label: "GENE 101 - Strategies and Skills for Academic Success"
  },
  {
    label: "GENE 119 - Problems Seminar"
  },
  {
    label: "GENE 121 - Digital Computation"
  },
  {
    label: "GENE 123 - Electrical Circuits and Instrumentation"
  },
  {
    label: "GEOG 165 - Computer Cartography: Principles and Design"
  },
  {
    label: "GENE 199 - Special Topics in First Year Engineering"
  },
  {
    label: "GENE 299 - Special Topics in Second Year Engineering"
  },
  {
    label: "GENE 301 - Special Directed Studies"
  },
  {
    label: "GENE 302 - Special Directed Studies"
  },
  {
    label: "GENE 303 - International Studies In Engineering"
  },
  {
    label: "GENE 315 - Special Directed Non-Technical Studies"
  },
  {
    label: "GENE 395 - Engineering Study Abroad"
  },
  {
    label: "GENE 396 - Engineering Study Abroad"
  },
  {
    label: "GENE 397 - Engineering Study Abroad"
  },
  {
    label: "GENE 399 - Special Topics in Third Year Engineering"
  },
  {
    label: "GENE 401 - Special Directed Studies"
  },
  {
    label: "GENE 402 - Special Directed Studies"
  },
  {
    label: "GENE 403 - Interdisciplinary Design Project 1"
  },
  {
    label: "GENE 404 - Interdisciplinary Design Project 2"
  },
  {
    label: "GENE 411 - Engineering Law and Ethics"
  },
  {
    label: "GENE 412 - Ethics and The Engineering Profession"
  },
  {
    label: "GENE 415 - Special Directed Non-Technical Studies"
  },
  {
    label: "GENE 499 - Special Topics in Fourth Year Engineering"
  },
  {
    label: "GENE 501 - Directed Studies for Visiting Exchange Students"
  },
  {
    label: "GENE 502 - Directed Studies for Visiting Exchange Students"
  },
  {
    label: "GENE 503 - Directed Studies for Visiting Exchange Students"
  },
  {
    label: "GEOE 153 - Earth Engineering"
  },
  {
    label: "GEOE 298 - Seminar"
  },
  {
    label: "GEOE 299 - Seminar"
  },
  {
    label: "GEOE 398 - Seminar"
  },
  {
    label: "GEOE 399 - Seminar"
  },
  {
    label: "GEOE 400 - Geological Engineering Design Project 1"
  },
  {
    label: "GEOE 401 - Geological Engineering Design Project 2"
  },
  {
    label: "GEOE 498 - Seminar"
  },
  {
    label: "GEOE 499 - Seminar"
  },
  {
    label: "GEOG 100 - On Becoming a Geographer"
  },
  {
    label: "GEOG 101 - Human Geographies: People, Space and Change"
  },
  {
    label: "GEOG 102 - Global Environmental Systems: Processes and Change"
  },
  {
    label: "GEOG 181 - Designing Effective Maps"
  },
  {
    label: "GEOG 187 - Problem Solving in Geomatics"
  },
  {
    label: "GEOG 201 - Fluvial Geomorphology"
  },
  {
    label: "GEOG 202 - Geography of the Global Economy"
  },
  {
    label: "GEOG 203 - Environment and Development in a Global Perspective"
  },
  {
    label: "GEOG 209 - Hydroclimatology"
  },
  {
    label: "GEOG 212 - Japan and the Pacific Rim"
  },
  {
    label: "GEOG 215 - China: Diverse and Dynamic"
  },
  {
    label: "GEOG 222 - Geographical Study of Canada"
  },
  {
    label: "GEOG 233 - Geography of Tourism"
  },
  {
    label: "GEOG 250 - Urban and Economic Systems: Inter-City and Global Connections"
  },
  {
    label: "GEOG 271 - Earth from Space Using Remote Sensing"
  },
  {
    label: "GEOG 281 - Introduction to Geographic Information Systems (GIS)"
  },
  {
    label: "GEOG 293 - Approaches to Research in Human Geography"
  },
  {
    label: "GEOG 294 - Approaches to Research in Physical Geography"
  },
  {
    label: "GEOG 300 - Geomorphology and the Southern Ontario Environment"
  },
  {
    label: "GEOG 303 - Physical Hydrology"
  },
  {
    label: "GEOG 306 - Human Dimensions of Natural Hazards"
  },
  {
    label: "GEOG 308 - Human Dimensions of Global Climate Change"
  },
  {
    label: "GEOG 309 - Physical Climatology"
  },
  {
    label: "GEOG 310 - Geodesy and Surveying"
  },
  {
    label: "GEOG 311 - Local Development in a Global Context"
  },
  {
    label: "GEOG 316 - Multivariate Statistics"
  },
  {
    label: "GEOG 318 - Spatial Analysis"
  },
  {
    label: "GEOG 319 - Economic Analyses for Regional Planning"
  },
  {
    label: "GEOG 323 - Perspectives on International Tourism"
  },
  {
    label: "GEOG 333 - Recreation Geography"
  },
  {
    label: "GEOG 340 - Settlements of Rural Canada"
  },
  {
    label: "GEOG 349 - Urban Form and Internal Spatial Structure"
  },
  {
    label: "GEOG 351 - Geography of Transportation"
  },
  {
    label: "GEOG 356 - Resources Management"
  },
  {
    label: "GEOG 368 - Conservation/Resource Management of the Built Environment"
  },
  {
    label: "GEOG 371 - Advanced Remote Sensing Techniques"
  },
  {
    label: "GEOG 381 - Advanced Geographic Information Systems"
  },
  {
    label: "GEOG 387 - Spatial Databases"
  },
  {
    label: "GEOG 391 - Field Research"
  },
  {
    label: "GEOG 404 - Soil Ecosystem Dynamics"
  },
  {
    label: "GEOG 405 - Wetlands"
  },
  {
    label: "GEOG 407 - Environmental Hydrology"
  },
  {
    label: "GEOG 408 - Earth's Future Climates"
  },
  {
    label: "GEOG 409 - Energy Balance Climatology"
  },
  {
    label: "GEOG 410 - Global Navigation Satellite Systems"
  },
  {
    label: "GEOG 411 - Global and Local Dimensions of Industrial Restructuring"
  },
  {
    label: "GEOG 418 - Cold Region Climates"
  },
  {
    label: "GEOG 419 - The Cryosphere"
  },
  {
    label: "GEOG 423 - Sustainable Tourism"
  },
  {
    label: "GEOG 426 - Geographies of Development"
  },
  {
    label: "GEOG 430A - Field Research in Regional Geography"
  },
  {
    label: "GEOG 430B - Field Research in Regional Geography"
  },
  {
    label: "GEOG 430C - Field Research in Regional Geography"
  },
  {
    label: "GEOG 432 - Health, Environment, and Planning"
  },
  {
    label: "GEOG 450 - Changing Form and Structure of Metropolitan Canada"
  },
  {
    label: "GEOG 452 - Resource Management Project"
  },
  {
    label: "GEOG 453 - Urban Stormwater Management"
  },
  {
    label: "GEOG 454 - Retail Landscapes"
  },
  {
    label: "GEOG 459 - Energy and Sustainability"
  },
  {
    label: "GEOG 461 - Food Systems and Sustainability"
  },
  {
    label: "GEOG 462 - Global Food and Agricultural Politics"
  },
  {
    label: "GEOG 471 - Remote Sensing Project"
  },
  {
    label: "GEOG 474 - Special Topics in Geography"
  },
  {
    label: "GEOG 475 - Independent Study of Selected Topics"
  },
  {
    label: "GEOG 481 - Geographic Information Systems Project"
  },
  {
    label: "GEOG 483 - Geoweb and Location-Based Services"
  },
  {
    label: "GEOG 487 - Management Issues in Geographic Information Systems"
  },
  {
    label: "GEOG 490A - Honours Thesis Preparation"
  },
  {
    label: "GEOG 490B - Honours Thesis Completion"
  },
  {
    label: "GEOG 600 - Seminar in Spatial Data Handling"
  },
  {
    label: "GEOG 601 - Environmental Change and Remote"
  },
  {
    label: "GEOG 602 - Remote Sensing of Cold Regions"
  },
  {
    label: "GEOG 603 - Remote Sensing and Earth System Science"
  },
  {
    label: "GEOG 604 - Spatial Statistics"
  },
  {
    label: "GEOG 605 - Spatial Information Technology, Globalization and International Development"
  },
  {
    label: "GEOG 606 - Introduction to Geographic Information Systems"
  },
  {
    label: "GEOG 607 - Applications of Geographic Information Systems"
  },
  {
    label: "GEOG 608 - Urban Remote Sensing"
  },
  {
    label: "GEOG 609 - GIS and Spatial Decision Support for Planning  and Resource Management"
  },
  {
    label: "GEOG 611 - Industrial Location Theory and Concepts"
  },
  {
    label: "GEOG 613 - Innovation and Economic Development in Cities and Regions"
  },
  {
    label: "GEOG 615 - Community Economic Development"
  },
  {
    label: "GEOG 616 - Multivariate Statistics"
  },
  {
    label: "GEOG 619 - Analytical Tools for Economic Development"
  },
  {
    label: "GEOG 655 - Snow Hydrology"
  },
  {
    label: "GEOG 620 - Seminar in Human Geography"
  },
  {
    label: "GEOG 621 - Metropolitan Form and Structure in Canada"
  },
  {
    label: "GEOG 624 - Human Activity and Travel Behaviour"
  },
  {
    label: "GEOG 634 - Selected Topics in Regional Studies"
  },
  {
    label: "GEOG 625 - Qualitative Methods in Geography"
  },
  {
    label: "GEOG 635 - International Development: Theories and Practice"
  },
  {
    label: "GEOG 637 - Cultural Geography"
  },
  {
    label: "GEOG 638 - Sustainable Tourism"
  },
  {
    label: "GEOG 639 - Food Systems and Sustainability"
  },
  {
    label: "GEOG 640 - Seminar in Physical Geography"
  },
  {
    label: "GEOG 641 - Climate Change: Physical Science Basis"
  },
  {
    label: "GEOG 668 - Environmental Assessment"
  },
  {
    label: "GEOG 642 - Micrometeorology"
  },
  {
    label: "GEOG 643 - Dynamic Geomorphology"
  },
  {
    label: "GEOG 644 - Applied Geomorphology"
  },
  {
    label: "GEOG 645 - Fluvial & Glaciofluvial Sediment Transport"
  },
  {
    label: "GEOG 646 - Hydrology"
  },
  {
    label: "GEOG 647 - Recent Advances in Wetland Studies"
  },
  {
    label: "GEOG 648 - Paleolimnology"
  },
  {
    label: "GEOG 649 - Hydrology of Cold Regions"
  },
  {
    label: "GEOG 651 - Hydroecology for Freshwater Ecosystem Management"
  },
  {
    label: "GEOG 652 - Climate Prediction, Modeling and Scenarios"
  },
  {
    label: "GEOG 653 - Land Use and the Carbon Cycle"
  },
  {
    label: "GEOG 660 - Perspectives in Resource and Environmental Management"
  },
  {
    label: "GEOG 661A - Applied Studies in Hydrology and the Environment 1"
  },
  {
    label: "GEOG 661B - Applied Studies in Hydrology and the Environment 2"
  },
  {
    label: "GEOG 664 - Political Ecology: Nature, Society and Sustainability"
  },
  {
    label: "GEOG 665 - Environmental Planning Theory and Practice"
  },
  {
    label: "GEOG 666 - Ecosystem Approach to Park Planning"
  },
  {
    label: "GEOG 669 - Energy Sustainability"
  },
  {
    label: "GEOG 671 - Contemporary Perspectives on Tourism"
  },
  {
    label: "GEOG 672 - Human Ecology of Stressed Environments"
  },
  {
    label: "GEOG 673 - International Perspectives on Resource and Environmental Management"
  },
  {
    label: "GEOG 674 - Climate and Society"
  },
  {
    label: "GEOG 675 - Selected Topics in Geography"
  },
  {
    label: "GRK 632 - Local Cultures in Hellenistic Greek Poetry"
  },
  {
    label: "GRK 633 - Ancient Religions through Epigraphy"
  },
  {
    label: "GRK 651 - Senior Greek Composition, Grammar and Reading"
  },
  {
    label: "GEOG 676 - Climate Change Vulnerability and Adaptation"
  },
  {
    label: "GEOG 677 - Climate Change, Natural Hazards and Disaster Risk Reduction"
  },
  {
    label: "GEOG 678 - Climate Change Governance: From Global Treaties to Local Innovation"
  },
  {
    label: "GEOG 679 - Climate Change Mitigation"
  },
  {
    label: "GEOG 685 - Theory of Local Economic Development"
  },
  {
    label: "GEOG 690 - Geographic Thought and Methodology"
  },
  {
    label: "GEOG 691 - Graduate Student and Faculty Seminar in Geography"
  },
  {
    label: "GEOG 692 - International Study"
  },
  {
    label: "GER 100 - Zeitgeist and Popular Culture"
  },
  {
    label: "GER 101 - Elementary German I"
  },
  {
    label: "GER 102 - Elementary German II"
  },
  {
    label: "GER 180 - German and Russian Literary Masterpieces"
  },
  {
    label: "GER 201 - Intermediate German I"
  },
  {
    label: "GER 202 - Intermediate German II"
  },
  {
    label: "GER 211 - Integrative Language Seminar I"
  },
  {
    label: "GER 212 - Integrative Language Seminar II"
  },
  {
    label: "GER 220 - Once Upon a Fairy Tale: Fairy Tales, Then and Now"
  },
  {
    label: "GER 250 - Performance German I"
  },
  {
    label: "GER 261 - Languages and Society I"
  },
  {
    label: "GER 262 - Languages and Society II"
  },
  {
    label: "GER 271 - German Thought and Culture: Objects"
  },
  {
    label: "GER 272 - German Thought and Culture: People"
  },
  {
    label: "GER 280 - Comparative Literature: Theory and Practice"
  },
  {
    label: "GER 298 - Topics in Cultural Studies"
  },
  {
    label: "GER 299 - German Abroad"
  },
  {
    label: "GER 303 - Interactive German Language and Culture"
  },
  {
    label: "GER 304 - Reading and Translating"
  },
  {
    label: "GER 307 - German for Professional Purposes"
  },
  {
    label: "GER 308 - German through Comics"
  },
  {
    label: "GER 309 - The Structure of German"
  },
  {
    label: "GER 331 - Exploring the German Language"
  },
  {
    label: "GER 334 - Exploring German Literature"
  },
  {
    label: "GER 350 - Performance German II"
  },
  {
    label: "GER 353 - Intermediate Conversation and Composition on Topics in German \"Landeskunde\""
  },
  {
    label: "GER 354 - Intermediate Conversation and Composition on Topics in German \"Landeskunde\""
  },
  {
    label: "GER 359 - Topics in German Film"
  },
  {
    label: "GER 362 - German Film Classics"
  },
  {
    label: "GER 363 - German Filmmakers in Hollywood"
  },
  {
    label: "GER 364 - German and Russian Film Pioneers"
  },
  {
    label: "GER 383 - Culture in the Third Reich: Racism, Resistance, Legacy"
  },
  {
    label: "GER 385 - Culture Behind the Iron Curtain"
  },
  {
    label: "GER 395 - Waterloo in Germany Program"
  },
  {
    label: "GER 396 - Waterloo in Germany Program"
  },
  {
    label: "GER 397 - Waterloo in Germany Program"
  },
  {
    label: "GER 398 - Topics in Cultural Studies"
  },
  {
    label: "GER 399 - German Abroad"
  },
  {
    label: "GER 407 - Applied Apprenticeship"
  },
  {
    label: "GER 420 - Topics in Language Pedagogy"
  },
  {
    label: "GER 431 - Senior Seminar"
  },
  {
    label: "GER 490 - Senior Honours Project"
  },
  {
    label: "GER 495 - Reading Course in Approved Topics"
  },
  {
    label: "GER 600 - Methods of Research"
  },
  {
    label: "GER 601 - Approaches in Linguistics"
  },
  {
    label: "GER 602 - Approaches in Literary and Cultural Theory"
  },
  {
    label: "GER 603 - Approaches in Language Didactics"
  },
  {
    label: "GER 604 - Approaches in Film and Performance Theory"
  },
  {
    label: "GER 610 - Topics in German Linguistics"
  },
  {
    label: "GER 611 - Topics in Second Language Acquisition and Computer Assisted Language Learning"
  },
  {
    label: "GER 612 - Topics in Sociolinguistics"
  },
  {
    label: "GRK 631 - Oaths and Curses in Mediterranean Culture"
  },
  {
    label: "GER 613 - Topics in Discourse Analysis"
  },
  {
    label: "GER 614 - Topics in Linguistic Theory"
  },
  {
    label: "GER 615 - Topics in Language Education"
  },
  {
    label: "GER 620 - Topics in German Literature and Culture"
  },
  {
    label: "GER 621 - Topics in Comparative Literature and Culture"
  },
  {
    label: "GER 622 - Topics in Film and Electronic Media"
  },
  {
    label: "GER 623 - Topics in Literature and Cultural Theory"
  },
  {
    label: "GER 695 - Reading Courses in Approved Topics"
  },
  {
    label: "GER 700 - Methods of Research"
  },
  {
    label: "GER 701 - Approaches in Linguistics"
  },
  {
    label: "GER 702 - Approaches in Literary and Cultural Theory"
  },
  {
    label: "GER 703 - Approaches in Language Didactics"
  },
  {
    label: "GER 704 - Approaches in Film and Performance Theory"
  },
  {
    label: "GER 710 - Topics in German Linguistics"
  },
  {
    label: "GER 711 - Topics in Second Language Acquisition and Computer Assisted Language Learning"
  },
  {
    label: "GER 712 - Topics in Sociolinguistics"
  },
  {
    label: "GER 713 - Topics in Discourse Analysis"
  },
  {
    label: "GER 714 - Topics in Linguistic Theory"
  },
  {
    label: "GER 715 - Topics in Language Education"
  },
  {
    label: "GER 720 - Topics in German Literature and Culture"
  },
  {
    label: "GER 721 - Topics in Comparative Literature and Culture"
  },
  {
    label: "GER 722 - Topics in Film and Electronic Media"
  },
  {
    label: "GER 723 - Topics in Literature and Cultural Theory"
  },
  {
    label: "GER 751 - Topics in Linguistic Methodology"
  },
  {
    label: "GER 752 - Topics in Theories and Models of Applied Linguistics"
  },
  {
    label: "GER 753 - Topics in Theories and Methods of Cultural and Literary Studies"
  },
  {
    label: "GER 754 - Topics in Theories and Conceptions of Modernity"
  },
  {
    label: "GER 761 - Topics in Interaction and Text"
  },
  {
    label: "GER 762 - Topics in Research Directions in Language Acquisition and Multilingualism"
  },
  {
    label: "HIST 203 - Methods of Applied History"
  },
  {
    label: "GER 763 - Topics in Sociology of Language and Cultural Differentiation"
  },
  {
    label: "GER 764 - Topics in History of Language"
  },
  {
    label: "HIST 202 - Introduction to Applied History"
  },
  {
    label: "GER 765 - Topics in German Grammar"
  },
  {
    label: "GER 771 - Topics in Individual and Society in Historical Transformation"
  },
  {
    label: "Graduate Studie - Research"
  },
  {
    label: "GER 772 - Topics in Aesthetic Transformations and Theoretical Concepts"
  },
  {
    label: "GER 773 - Topics in Intercultural Perspectives, Post-colonial Constellations & Transnational Discourses"
  },
  {
    label: "GER 774 - Topics in German Literature and Culture Before 1700"
  },
  {
    label: "GER 774` - German Literature and Culture Before 1700"
  },
  {
    label: "GER 775 - Topics in Modern German Literature"
  },
  {
    label: "GER 780 - Topics in Media Studies"
  },
  {
    label: "GER 792 - Master's Thesis Colloquium"
  },
  {
    label: "GER 791 - Academic Writing"
  },
  {
    label: "GERON 201 - Aging and Health"
  },
  {
    label: "GERON 210 - Development, Aging and Health"
  },
  {
    label: "GERON 218 - Psychology of Death and Dying"
  },
  {
    label: "GERON 220 - Psychosocial Perspectives on Lifespan Development and Health"
  },
  {
    label: "GERON 245 - Canadian Health Systems"
  },
  {
    label: "GERON 255 - The Biology of Aging"
  },
  {
    label: "GERON 352 - Sociology of Aging"
  },
  {
    label: "GERON 355 - Biology of Human Aging"
  },
  {
    label: "GERON 400 - Interdisciplinary Perspectives on Aging"
  },
  {
    label: "GERON 401A - Independent Study in Aging"
  },
  {
    label: "GERON 401B - Independent Study in Aging"
  },
  {
    label: "GGOV 600 - Global Governance"
  },
  {
    label: "GGOV 610 - Governance of Global Economy"
  },
  {
    label: "GGOV 611 - Emerging Economies in Global Governance"
  },
  {
    label: "GGOV 612 - Theories of Globalization"
  },
  {
    label: "GGOV 613 - The Politics of National Innovation Systems"
  },
  {
    label: "GGOV 614 - Global Business and Development"
  },
  {
    label: "GGOV 622 - Complexity and Global Governance"
  },
  {
    label: "GGOV 615 - Global Poverty"
  },
  {
    label: "GGOV 618 - Special Topics in Global Political Economy"
  },
  {
    label: "GGOV 619 - Readings in Global Political Economy"
  },
  {
    label: "GLOBAL 327W - Tourists, Tourism & the Globe (WLU)"
  },
  {
    label: "GGOV 620 - Advanced Topics in Global Environmental Governance"
  },
  {
    label: "GGOV 621 - Governing Global Food and Agriculture Systems"
  },
  {
    label: "GGOV 628 - Topics in Global Environment"
  },
  {
    label: "GGOV 629 - Readings in Global Environment"
  },
  {
    label: "GGOV 630 - Security Ontology-Theory"
  },
  {
    label: "GGOV 631 - Security Governance: Actors, Institutions, and Issues"
  },
  {
    label: "GGOV 632 - Post-War Reconstruction and State Building"
  },
  {
    label: "GGOV 633 - Managing Nuclear Risk"
  },
  {
    label: "GGOV 634 - Gender and Global Politics"
  },
  {
    label: "GGOV 638 - Special Topics in Conflict and Security"
  },
  {
    label: "GGOV 639 - Readings in Conflict and Security"
  },
  {
    label: "GGOV 640 - Human Rights in the Globalized World"
  },
  {
    label: "GGOV 641 - International Human Rights"
  },
  {
    label: "GGOV 642 - Global Social Governance"
  },
  {
    label: "GGOV 643 - Global Health Governance"
  },
  {
    label: "GGOV 648 - Special Topics in Global Justice and Human Rights"
  },
  {
    label: "GGOV 649 - Readings in Global Justice"
  },
  {
    label: "GGOV 650 - International Organizations and Global Governance"
  },
  {
    label: "GRK 621 - Greek Epigraphy"
  },
  {
    label: "GGOV 651 - Unconventional Diplomacy"
  },
  {
    label: "GGOV 652 - Non-State Actors in Global Governance"
  },
  {
    label: "GGOV 653 - International Organizations and Public Policy"
  },
  {
    label: "GGOV 658 - Special Topics in Multilateral Institutions and Diplomacy"
  },
  {
    label: "GGOV 659 - Readings in Multilateral Institutions and Diplomacy"
  },
  {
    label: "GGOV 660 - Public International Law"
  },
  {
    label: "GGOV 661 - International Organizations Law"
  },
  {
    label: "GGOV 662 - Global Development Governance"
  },
  {
    label: "GGOV 663 - China and Global Governance"
  },
  {
    label: "GGOV 668 - Special Topics in Global Social Governance"
  },
  {
    label: "GGOV 669 - Readings in Global Social Governance"
  },
  {
    label: "GGOV 700 - Global Governance"
  },
  {
    label: "GGOV 701 - Research Methods"
  },
  {
    label: "GRK 101 - Introductory Ancient Greek 1"
  },
  {
    label: "GRK 102 - Introductory Ancient Greek 2"
  },
  {
    label: "GRK 105 - Introductory Modern Greek"
  },
  {
    label: "GRK 133 - New Testament Greek 1"
  },
  {
    label: "GRK 134 - New Testament Greek 2"
  },
  {
    label: "GRK 201 - Intermediate Greek"
  },
  {
    label: "GRK 202 - Selections from Greek Authors"
  },
  {
    label: "GRK 233 - Intermediate New Testament Greek"
  },
  {
    label: "GRK 234 - Hellenistic Greek"
  },
  {
    label: "GRK 331 - Advanced Studies in Greek: Prose"
  },
  {
    label: "GRK 332 - Advanced Studies in Greek: Poetry"
  },
  {
    label: "GRK 341 - Advanced Studies in Greek: Selected Topics"
  },
  {
    label: "GRK 351 - Greek Composition, Grammar and Reading"
  },
  {
    label: "GRK 421 - Greek Epigraphy"
  },
  {
    label: "GRK 451 - Senior Greek Composition, Grammar and Reading"
  },
  {
    label: "GRK 490 - Senior Studies in Greek: Selected Topics"
  },
  {
    label: "GRK 491 - Senior Studies in Greek: Independent Study"
  },
  {
    label: "GRK 600 - Topics in Greek Language"
  },
  {
    label: "GRK 601 - Topics in Greek Language"
  },
  {
    label: "operative Work - Term"
  },
  {
    label: "GS 901 - Preparing for University Teaching"
  },
  {
    label: "GS 902 - Preparing for an Academic Career"
  },
  {
    label: "GS 903 - Teaching Practicum"
  },
  {
    label: "HIST 102 - War and Society in Europe, 1914-1945"
  },
  {
    label: "HIST 103 - Canadian History Through Biography"
  },
  {
    label: "HIST 104 - An Introduction to Western Intellectual History Since the Renaissance"
  },
  {
    label: "HIST 105 - Rock 'n' Roll and US History"
  },
  {
    label: "HIST 106 - Canada at War"
  },
  {
    label: "ENGL 108P - Popular Potter"
  },
  {
    label: "HIST 109 - Ten Days That Shook the World"
  },
  {
    label: "HIST 110 - A History of the Western World I"
  },
  {
    label: "HIST 111 - A History of the Western World II"
  },
  {
    label: "HIST 113 - Canadian Business History: Innovators and Entrepreneurs"
  },
  {
    label: "HIST 115 - Crusading in the Middle Ages"
  },
  {
    label: "HIST 120 - The United States at War, 1861-1945"
  },
  {
    label: "HIST 191 - Special Topics in History"
  },
  {
    label: "HIST 200 - History and Film"
  },
  {
    label: "HIST 201 - Columbus and After: New Worlds in the Americas"
  },
  {
    label: "HIST 205 - History of Western Sport"
  },
  {
    label: "HIST 206 - The Victorian Age"
  },
  {
    label: "HIST 209 - Smallpox to Medicare: Canadian Medical History"
  },
  {
    label: "HIST 210 - History of Ancient Law"
  },
  {
    label: "HIST 211 - British History to 1485"
  },
  {
    label: "HIST 213 - A History of Popular Culture"
  },
  {
    label: "HIST 214 - History of Women in the Modern United States"
  },
  {
    label: "HIST 215 - Canadian Women in Historical Perspective"
  },
  {
    label: "HIST 220 - The Vietnam War"
  },
  {
    label: "HIST 221 - Racism and Response in Canadian History"
  },
  {
    label: "HIST 223 - The Holocaust in History"
  },
  {
    label: "HIST 224 - Food, Culture, and History"
  },
  {
    label: "HIST 225 - History of Education in Canada"
  },
  {
    label: "HIST 226 - Canada in World War II"
  },
  {
    label: "HIST 227 - The French Revolution and Napoleonic Europe"
  },
  {
    label: "HIST 230 - Introduction to the Modern Middle East"
  },
  {
    label: "HIST 231R - The History of East Asian Communities in Canada"
  },
  {
    label: "HIST 232 - A History of Peace Movements"
  },
  {
    label: "HIST 234 - The Catholic Church in Canada"
  },
  {
    label: "HIST 235 - History of Christianity"
  },
  {
    label: "HIST 236 - Law and Society in the Middle Ages"
  },
  {
    label: "HIST 237 - The Ancient Near East and Egypt"
  },
  {
    label: "HIST 239 - History of Modern China, 1911 to the Present"
  },
  {
    label: "HIST 242 - Greek History"
  },
  {
    label: "HIST 243 - European Business History: From Workshop to Factory and Beyond"
  },
  {
    label: "HIST 247 - Mennonite History: A Survey"
  },
  {
    label: "HIST 250 - What is History? An Introduction to Historical Thinking"
  },
  {
    label: "HIST 252 - Roman History"
  },
  {
    label: "HIST 253 - Canada: Cultures and Conflicts in the Colonial Era"
  },
  {
    label: "HIST 254 - Canada Since 1867: A New Nation"
  },
  {
    label: "HIST 255 - History of Childhood and Youth in Canada"
  },
  {
    label: "HIST 257 - America: From Slavery to Civil War"
  },
  {
    label: "HIST 258 - The United States: From World Power to the War on Terror"
  },
  {
    label: "HIST 260 - Europe: 410-1303"
  },
  {
    label: "HIST 262 - Early Modern Europe 1450-1700"
  },
  {
    label: "HIST 263 - The Age of Revolution: Europe in the 19th Century"
  },
  {
    label: "HIST 264 - Western Europe Since 1945"
  },
  {
    label: "HIST 265 - Eastern Europe Since 1945"
  },
  {
    label: "HIST 266 - The British Empire 1857-1956"
  },
  {
    label: "HIST 268 - A Global History of Empires"
  },
  {
    label: "HIST 269 - Aboriginal History of Canada"
  },
  {
    label: "HIST 271 - Global Indigenous Issues"
  },
  {
    label: "HIST 275 - The Modern World in Historical Perspective"
  },
  {
    label: "HIST 277 - Canadian Legal History"
  },
  {
    label: "HIST 278 - Red Star vs. Swastika: Russia and WWII"
  },
  {
    label: "HIST 282 - History of Modern South Asia 1750-2000"
  },
  {
    label: "HIST 291 - Special Topics in History"
  },
  {
    label: "HIST 300 - History and the Human Sciences"
  },
  {
    label: "HIST 302 - Applied History Project"
  },
  {
    label: "HIST 303 - History Gone Digital: An Introduction to History with the Web"
  },
  {
    label: "HIST 304 - Heresy and Religious Crises in Late Medieval Europe"
  },
  {
    label: "HIST 305 - Historical Memory and National Identity"
  },
  {
    label: "HIST 309 - The Discourse of Dissent"
  },
  {
    label: "HIST 310 - The American West: Legend and Reality"
  },
  {
    label: "HIST 311 - International Relations, 1890-1951"
  },
  {
    label: "HIST 313 - History of the Family in North America"
  },
  {
    label: "HIST 314 - The American Civil Rights Movement"
  },
  {
    label: "HIST 315 - U.S. and the World"
  },
  {
    label: "HIST 316 - The Russian Revolution"
  },
  {
    label: "HIST 317 - History of Sexuality: The Pre-Modern Period"
  },
  {
    label: "HIST 318 - History of Sexuality: The Modern Period"
  },
  {
    label: "HIST 321 - Human Rights in Historical Perspective"
  },
  {
    label: "HIST 329 - Origins of the Common Law"
  },
  {
    label: "HIST 340 - A Social History of Europe: 1789-1914"
  },
  {
    label: "HIST 341 - The Nazi Occupation of Europe"
  },
  {
    label: "HIST 347 - Witches, Wives, and Whores"
  },
  {
    label: "HIST 348 - The Radical Reformation"
  },
  {
    label: "HIST 350 - Canada and the Americas"
  },
  {
    label: "HIST 351 - Canada: The Immigrant Experience"
  },
  {
    label: "HIST 356 - Russia: From Tsars to Putin"
  },
  {
    label: "HIST 358 - Nazi Germany"
  },
  {
    label: "HIST 369 - The Politics of Decolonization"
  },
  {
    label: "HIST 371 - Ireland Before the Famine"
  },
  {
    label: "HIST 372 - Ireland After the Famine"
  },
  {
    label: "HIST 374 - Canada's Social History"
  },
  {
    label: "HIST 379 - Reformation History"
  },
  {
    label: "HIST 380 - History of the Canadian North: From Pre-contact to the Creation of Nunavut"
  },
  {
    label: "HIST 385 - From Macdonald to Laurier: Canada, 1841-1921"
  },
  {
    label: "HIST 388 - Modern Canada"
  },
  {
    label: "HIST 389 - Canada in World Affairs"
  },
  {
    label: "HIST 391 - Special Topics in History"
  },
  {
    label: "HIST 397 - Directed Studies in Special Topics"
  },
  {
    label: "HIST 398 - Directed Studies in Special Topics"
  },
  {
    label: "HIST 400A - Early Modern Europe"
  },
  {
    label: "HIST 400B - Early Modern Europe"
  },
  {
    label: "HIST 401A - European"
  },
  {
    label: "HIST 401B - European"
  },
  {
    label: "HIST 402A - Medieval Europe"
  },
  {
    label: "HIST 402B - Medieval Europe"
  },
  {
    label: "HIST 403A - Canadian"
  },
  {
    label: "HIST 403B - Canadian"
  },
  {
    label: "HIST 407A - Race in Modern History"
  },
  {
    label: "HIST 407B - Race in Modern History"
  },
  {
    label: "HIST 409A - American"
  },
  {
    label: "HIST 409B - American"
  },
  {
    label: "HIST 411A - Senior Seminar - International"
  },
  {
    label: "HIST 411B - Senior Seminar - International"
  },
  {
    label: "HIST 491 - Independent Study in Special Topics"
  },
  {
    label: "HIST 601 - Canadian History I"
  },
  {
    label: "HIST 602 - Canadian History II"
  },
  {
    label: "HIST 603 - Nationalism and Ethnic Policies of Multinational States"
  },
  {
    label: "HIST 604 - Theory and Practice of Insurgency and Counterinsurgency:  Historical and Contemporary Issues"
  },
  {
    label: "HIST 605 - Global Governance in Historical Perspective"
  },
  {
    label: "HIST 606 - International Development in Historical Perspective"
  },
  {
    label: "HIST 607 - Human Rights in Historical Perspective I"
  },
  {
    label: "HIST 608 - Human Rights in Historical Perspective II"
  },
  {
    label: "HIST 610 - War and Society in the Twentieth Century"
  },
  {
    label: "HIST 611 - War and Society in the Twentieth Century II"
  },
  {
    label: "HIST 612 - Indigenous Rights and Claims: A Global Perspective"
  },
  {
    label: "HIST 614 - Space, Identity and Culture: Reading in Canadian Social History"
  },
  {
    label: "HIST 620 - Early Modern History I"
  },
  {
    label: "HIST 621 - Early Modern History II"
  },
  {
    label: "HIST 622 - Microhistory and the Lost Peoples of Europe"
  },
  {
    label: "HIST 626 - Modern European History I"
  },
  {
    label: "HIST 627 - Modern European History II"
  },
  {
    label: "HIST 632 - History of the United States I"
  },
  {
    label: "HIST 633 - History of the United States II"
  },
  {
    label: "HIST 635 - Race in Modern History I"
  },
  {
    label: "HIST 636 - Race in Modern History II"
  },
  {
    label: "HIST 651 - Historians and Public Policy"
  },
  {
    label: "HIST 653 - Public History Interpretation"
  },
  {
    label: "HIST 691A - Directed Studies"
  },
  {
    label: "HIST 691B - Directed Studies"
  },
  {
    label: "HIST 691C - Directed Studies"
  },
  {
    label: "HIST 701 - Major Field Oral Qualifying Examination"
  },
  {
    label: "HIST 704 - Major Field Written Qualifying Examination"
  },
  {
    label: "HIST 705 - First Minor Area of Concentration"
  },
  {
    label: "HIST 706 - Second Minor Area of Concentration"
  },
  {
    label: "HIST 710 - Canadian History Major Field"
  },
  {
    label: "HIST 712 - Scottish History Major Field"
  },
  {
    label: "HIST 714 - Early Modern European History Major Field"
  },
  {
    label: "HIST 715 - Modern European History Major Field"
  },
  {
    label: "HIST 719 - War and Society Major Field"
  },
  {
    label: "HIST 725 - Cold War Era History Major Field"
  },
  {
    label: "HIST 726 - Medieval History Major Field"
  },
  {
    label: "HIST 727 - World History Major Field"
  },
  {
    label: "HIST 759 - War and Society Minor Area Seminar"
  },
  {
    label: "HIST 760 - Canadian History Minor Area Seminar"
  },
  {
    label: "HIST 761 - British History Minor Area Seminar"
  },
  {
    label: "HIST 762 - Scottish History Minor Area Seminar"
  },
  {
    label: "HIST 763 - Community Studies Minor Area Seminar"
  },
  {
    label: "HIST 764 - Early Modern European History Minor Area Seminar"
  },
  {
    label: "HIST 765 - Modern European History Minor Area Seminar"
  },
  {
    label: "HIST 766 - Gender, Women and Family Minor Area Seminar"
  },
  {
    label: "HIST 767 - Race, Class, Imperialism and Slavery Minor Area Seminar"
  },
  {
    label: "HIST 768 - United States Minor Area Seminar"
  },
  {
    label: "HIST 769 - International  Relations Minor Area Seminar"
  },
  {
    label: "HIST 770 - Science, Medicine and Technology Minor Area Seminar"
  },
  {
    label: "HIST 771 - Minor Area of Concentration"
  },
  {
    label: "HIST 775 - Cold War Era History Minor Area Seminar"
  },
  {
    label: "HIST 776 - Medieval History Minor Area Seminar"
  },
  {
    label: "HIST 777 - World History Minor Area Seminar"
  },
  {
    label: "HLTH 101 - Introduction to Health 1"
  },
  {
    label: "HLTH 102 - Introduction to Health 2"
  },
  {
    label: "HLTH 103 - Biological Determinants of Health"
  },
  {
    label: "HLTH 201 - Aging and Health"
  },
  {
    label: "HLTH 202 - Principles of Public and Population Health"
  },
  {
    label: "HLTH 203 - Systems Thinking for Health"
  },
  {
    label: "HLTH 210 - Development, Aging and Health"
  },
  {
    label: "HLTH 218 - Psychology of Death and Dying"
  },
  {
    label: "HLTH 220 - Psychosocial Perspectives on Lifespan Development and Health"
  },
  {
    label: "HLTH 245 - Canadian Health Systems"
  },
  {
    label: "HLTH 253 - Demographic Change in Canada"
  },
  {
    label: "HLTH 260 - Social Determinants of Health"
  },
  {
    label: "HLTH 302 - Cultural and Community Competency"
  },
  {
    label: "HLTH 303 - Program Planning and Evaluation"
  },
  {
    label: "HLTH 305 - Community Development and Engagement in Public Health"
  },
  {
    label: "HLTH 310 - Development, Aging and Health"
  },
  {
    label: "HLTH 330 - Health Informatics"
  },
  {
    label: "HLTH 333 - Principles of Epidemiology"
  },
  {
    label: "HLTH 340 - Environmental Toxicology and Public Health"
  },
  {
    label: "HLTH 341 - Principles of Pathobiology"
  },
  {
    label: "HLTH 344 - Qualitative Methods for Health Research"
  },
  {
    label: "HLTH 355 - Public Health Nutrition"
  },
  {
    label: "HLTH 348 - Social Psychology of Health Behaviour"
  },
  {
    label: "HLTH 346 - Human Nutrition"
  },
  {
    label: "HLTH 350 - Principles of Environmental & Occupational Health"
  },
  {
    label: "HLTH 352 - Sociology of Aging"
  },
  {
    label: "HLTH 360 - Psychological Determinants of Health"
  },
  {
    label: "HLTH 400 - Interdisciplinary Perspectives on Aging"
  },
  {
    label: "HLTH 405 - International Exchange"
  },
  {
    label: "HLTH 407 - Coronary Artery Disease - Prevention and Rehabilitation"
  },
  {
    label: "HLTH 410 - Health Policy"
  },
  {
    label: "HLTH 420 - Health, Environment, and Planning"
  },
  {
    label: "HLTH 421 - Nutritional Aspects of Chronic Disease"
  },
  {
    label: "HLTH 432A - Honours Thesis (A)"
  },
  {
    label: "HLTH 432B - Honours Thesis (B)"
  },
  {
    label: "HLTH 433 - Experimental Methods"
  },
  {
    label: "HLTH 435 - Knowledge Translation for Public Health and Health Care"
  },
  {
    label: "HLTH 442 - Epidemiology of Non-Communicable Diseases"
  },
  {
    label: "HLTH 443 - Epidemiology of Communicable Diseases"
  },
  {
    label: "HLTH 444 - Program Evaluation"
  },
  {
    label: "HLTH 445 - Seminar in Health Promotion"
  },
  {
    label: "HLTH 448 - Advanced Studies in Social Determinants of Health"
  },
  {
    label: "HLTH 449 - Alcohol and Drug Use and Abuse in Contemporary Society"
  },
  {
    label: "HLTH 451 - Analysis and Management of Health Information in Aging Populations"
  },
  {
    label: "HLTH 452 - Decision Making and Decision Support in Health Informatics"
  },
  {
    label: "HLTH 458 - Social Neuroscience and Health"
  },
  {
    label: "HLTH 461 - Psychoneuroimmunology"
  },
  {
    label: "HLTH 471 - Psychopharmacology"
  },
  {
    label: "HLTH 472 - Independent Study"
  },
  {
    label: "HLTH 473 - Contemporary Issues in Health 4"
  },
  {
    label: "HRM 200 - Basic Human Resources Management"
  },
  {
    label: "HRM 301 - Strategic Human Resources Management"
  },
  {
    label: "HRM 303 - Compensation"
  },
  {
    label: "HRM 305 - Health and Safety"
  },
  {
    label: "HRM 307 - Labour Relations"
  },
  {
    label: "HRM 400 - Honours Seminar in Human Resources Management - Special Topics"
  },
  {
    label: "HSG 601 - Lifespan Approaches to Disease Prevention and Health Promotion"
  },
  {
    label: "HSG 603 - Health Policy"
  },
  {
    label: "HSG 604 - Evaluation of Health and Human Service Programs"
  },
  {
    label: "HSG 605A - Survey Research Methods"
  },
  {
    label: "HSG 605B - Correlation and Regression"
  },
  {
    label: "HSG 605C - Logistic Regression and Its Application"
  },
  {
    label: "HSG 605D - Analysis of Variance I"
  },
  {
    label: "HSG 605E - Analysis of Variance II"
  },
  {
    label: "HSG 605F - Introduction to Statistics"
  },
  {
    label: "HSG 606 - Epidemiological Methods"
  },
  {
    label: "HSG 607 - Mechanisms of Disease Processes"
  },
  {
    label: "HSG 609 - Population Intervention Research for Chronic Disease Prevention"
  },
  {
    label: "HSG 610 - Program Development and Service Delivery for the Elderly"
  },
  {
    label: "HSG 611 - The Health Care System"
  },
  {
    label: "HSG 612 - Data Structures and Standards in Health Informatics"
  },
  {
    label: "HSG 620 - Selected Topics"
  },
  {
    label: "LAT 622 - Latin Palaeography"
  },
  {
    label: "LAT 633 - Greek and Roman Identities in the Lyric Poetry of Horace"
  },
  {
    label: "HSG 620Q - Health Communications"
  },
  {
    label: "HSG 641 - Practicum"
  },
  {
    label: "HSG 651 - Analysis and Management of Health Information in Aging Populations"
  },
  {
    label: "HSG 652 - Decision Making and Decision Support in Health"
  },
  {
    label: "HSG 654 - Knowledge Mobilzation to Serve Society"
  },
  {
    label: "HSG 655 - Building Community-University Research Alliances"
  },
  {
    label: "HSG 671 - Psychopharmacology"
  },
  {
    label: "HSG 672 - Epidemiologic Methods in Aging Research"
  },
  {
    label: "HSG 677 - Fundamentals of Behavioural Neuroscience"
  },
  {
    label: "HSG 720 - Advanced Topics"
  },
  {
    label: "KIN 707 - Integrative Physiology in Work"
  },
  {
    label: "HSG 730 - Fundamentals of Work and Health"
  },
  {
    label: "HSG 731 - Approaches to Research in Work and Health"
  },
  {
    label: "HSG 732A - Work and Health Research Seminar (I)"
  },
  {
    label: "HSG 732B - Work and Health Research Seminar (II)"
  },
  {
    label: "HSG 741 - Advanced Practicum"
  },
  {
    label: "HSG 750 - Fundamentals of Aging, Health and Well-being"
  },
  {
    label: "HSG 751 - Aging, Health and Well-being Research Seminar"
  },
  {
    label: "HUMSC 101 - Great Dialogues: Reflection and Action"
  },
  {
    label: "HUMSC 102 - Great Dialogues: Politics and Morality"
  },
  {
    label: "HUMSC 201 - Great Dialogues: Reason and Faith"
  },
  {
    label: "HUMSC 301 - Great Dialogues: The Sacred and the Profane"
  },
  {
    label: "HUMSC 401 - Great Dialogues: Athens, Jerusalem, and Technological Society"
  },
  {
    label: "HUMSC 490 - Great Dialogues: Medical Humanities on Health and Life"
  },
  {
    label: "INDEV 10 - International Development Seminar"
  },
  {
    label: "INDEV 100 - Introduction to International Development"
  },
  {
    label: "INDEV 101 - Issues in International Development"
  },
  {
    label: "INDEV 200 - The Political Economy of Development"
  },
  {
    label: "INDEV 202 - Accounting for Development Organizations"
  },
  {
    label: "INDEV 212 - Problem-solving for Development"
  },
  {
    label: "INDEV 404 - International Development Theory"
  },
  {
    label: "INDEV 275 - Special Topics in International Development"
  },
  {
    label: "INDEV 300 - Culture and Ethics"
  },
  {
    label: "INDEV 302 - Development Agents"
  },
  {
    label: "INDEV 303 - Marketing and Communication for Development Agents"
  },
  {
    label: "INDEV 304 - Language Conversation for Development Field Work"
  },
  {
    label: "INDEV 308 - Introduction to Social Entrepreneurship"
  },
  {
    label: "INDEV 375 - Special Topics in International Development"
  },
  {
    label: "INDEV 387 - Global Cities in Global Development"
  },
  {
    label: "INDEV 388 - Key Issues in Urban Development"
  },
  {
    label: "INDEV 401 - International Development Placement 1"
  },
  {
    label: "INDEV 402 - International Development Placement 2"
  },
  {
    label: "INDEV 403 - Advanced Marketing and Communication for Development Agents"
  },
  {
    label: "INDEV 474 - Special Topics in International Development"
  },
  {
    label: "INDEV 475 - Contemporary Development Issues"
  },
  {
    label: "INDEV 601 - Foundations of Sustainable Development Practice"
  },
  {
    label: "INDEV 602 - International Development: Theories and Practice"
  },
  {
    label: "INDEV 603 - Global Health"
  },
  {
    label: "INDEV 604 - Sustainable Cities"
  },
  {
    label: "INDEV 605 - Economics for Sustainable Development"
  },
  {
    label: "INDEV 606 - Energy Sustainability"
  },
  {
    label: "INDEV 607 - Methods for Sustainable Development Practice:  A Systems Approach"
  },
  {
    label: "INDEV 608 - Water and Security"
  },
  {
    label: "INDEV 609 - Sustainability Concepts, Applications and Key Debates"
  },
  {
    label: "INDEV 611 - Field Placement"
  },
  {
    label: "INDEV 612 - Introduction to Water Resources"
  },
  {
    label: "INDEV 613 - Water, Human Security and Development"
  },
  {
    label: "INDEV 614 - Integrated Water Resources Management"
  },
  {
    label: "INDEV 615 - Transboundary Water Governance"
  },
  {
    label: "INDEV 616 - Urban Food Security"
  },
  {
    label: "INTEG 10 - Knowledge Integration Seminar"
  },
  {
    label: "INTEG 120 - The Art and Science of Learning"
  },
  {
    label: "INTEG 121 - Collaboration, Design Thinking, and Problem Solving"
  },
  {
    label: "INTEG 220 - Nature of Scientific Knowledge"
  },
  {
    label: "INTEG 221 - The Social Nature of Knowledge"
  },
  {
    label: "INTTS 301 - Institutions of International Trade and Finance"
  },
  {
    label: "INTEG 230 - The Museum Course: Preparation and Field Trip"
  },
  {
    label: "INTEG 231 - The Museum Course: Field Trip Project"
  },
  {
    label: "INTEG 251 - Creative Thinking"
  },
  {
    label: "INTEG 275 - Special Topics in Knowledge Integration"
  },
  {
    label: "INTEG 320 - The Museum Course: Research and Design"
  },
  {
    label: "INTEG 321 - The Museum Course: Practicum and Presentation"
  },
  {
    label: "INTEG 375 - Special Topics in Knowledge Integration"
  },
  {
    label: "INTEG 420 - Senior Research Project A"
  },
  {
    label: "INTEG 421 - Senior Research Project B"
  },
  {
    label: "INTEG 475 - Special Topics in Knowledge Integration"
  },
  {
    label: "INTST 101 - Introduction to International Studies"
  },
  {
    label: "JS 236 - Paul: Life and Letters"
  },
  {
    label: "INTTS 400 - International Trade Seminar"
  },
  {
    label: "IS 100 - Introduction to Research Methods"
  },
  {
    label: "IS 101 - Introductory Independent Research"
  },
  {
    label: "IS 102 - Introductory Independent Research"
  },
  {
    label: "IS 103 - Introductory Independent Research"
  },
  {
    label: "IS 104 - Introductory Independent Research"
  },
  {
    label: "IS 105 - Introductory Independent Research"
  },
  {
    label: "IS 106 - Introductory Independent Research"
  },
  {
    label: "IS 107 - Introductory Independent Research"
  },
  {
    label: "IS 108 - Introductory Independent Research"
  },
  {
    label: "IS 109 - Introductory Independent Research"
  },
  {
    label: "IS 110 - Introductory Independent Research"
  },
  {
    label: "IS 200 - Interdisciplinary Research Design for Independent Studies"
  },
  {
    label: "IS 201 - Independent Research"
  },
  {
    label: "IS 202 - Independent Research"
  },
  {
    label: "IS 203 - Independent Research"
  },
  {
    label: "IS 204 - Independent Research"
  },
  {
    label: "IS 205 - Independent Research"
  },
  {
    label: "IS 206 - Independent Research"
  },
  {
    label: "IS 207 - Independent Research"
  },
  {
    label: "IS 208 - Independent Research"
  },
  {
    label: "IS 209 - Independent Research"
  },
  {
    label: "IS 210 - Independent Research"
  },
  {
    label: "IS 211 - Independent Research"
  },
  {
    label: "IS 212 - Independent Research"
  },
  {
    label: "IS 220 - Thesis Proposal Development"
  },
  {
    label: "IS 301 - Advanced Independent Research"
  },
  {
    label: "IS 302 - Advanced Independent Research"
  },
  {
    label: "IS 304 - Advanced Independent Research"
  },
  {
    label: "IS 305 - Advanced Independent Research"
  },
  {
    label: "IS 306 - Advanced Independent Research"
  },
  {
    label: "IS 307 - Advanced Independent Research"
  },
  {
    label: "IS 308 - Advanced Independent Research"
  },
  {
    label: "IS 309 - Advanced Independent Research"
  },
  {
    label: "IS 310 - Thesis Phase I"
  },
  {
    label: "IS 311 - Part-time Thesis Phase Stage I - Part 1"
  },
  {
    label: "IS 312 - Part-time Thesis Phase Stage I - Part 2"
  },
  {
    label: "IS 320 - Thesis Phase II"
  },
  {
    label: "IS 321 - Part-time Thesis Phase Stage II - Part 1"
  },
  {
    label: "IS 322 - Part-time Thesis Phase Stage II - Part 2"
  },
  {
    label: "IS 330 - Honours Thesis Proposal Development"
  },
  {
    label: "IS 401 - Honours Independent Research"
  },
  {
    label: "IS 402 - Honours Independent Research"
  },
  {
    label: "IS 403 - Honours Independent Research"
  },
  {
    label: "IS 404 - Honours Independent Research"
  },
  {
    label: "IS 405 - Honours Independent Research"
  },
  {
    label: "IS 410 - Honours Thesis Phase I"
  },
  {
    label: "IS 411 - Part-time Honours Thesis Phase Stage I - Part 1"
  },
  {
    label: "IS 412 - Part-time Honours Thesis Phase Stage I - Part 2"
  },
  {
    label: "IS 420 - Honours Thesis Phase II"
  },
  {
    label: "IS 421 - Part-time Honours Thesis Phase Stage II - Part 1"
  },
  {
    label: "IS 422 - Part-time Honours Thesis Phase Stage II - Part 2"
  },
  {
    label: "ITAL 101 - Introduction to Italian Language 1"
  },
  {
    label: "ITAL 102 - Introduction to Italian Language 2"
  },
  {
    label: "ITAL 155 - Intensive Introductory Italian Language"
  },
  {
    label: "ITAL 201 - Intermediate Italian 1"
  },
  {
    label: "ITAL 202 - Intermediate Italian 2"
  },
  {
    label: "ITAL 251 - Issues in Contemporary Italian Society"
  },
  {
    label: "ITAL 255 - Italian for Business and Technology"
  },
  {
    label: "ITAL 311 - Medieval Italian Literature"
  },
  {
    label: "ITAL 312 - Renaissance Italian Literature"
  },
  {
    label: "ITAL 370 - Women Writers of the Italian Renaissance"
  },
  {
    label: "ITAL 391 - The Italian Novel and Cinema"
  },
  {
    label: "ITAL 392 - Modern Italian Poetry and Theatre"
  },
  {
    label: "ITAL 394 - Italian Studies in Italy"
  },
  {
    label: "ITAL 396 - Special Topics/Directed Readings"
  },
  {
    label: "ITAL 397 - Special Topics/Directed Readings"
  },
  {
    label: "ITALST 111 - Women, Family, Sex and Tradition"
  },
  {
    label: "ITALST 260 - Great Works in Italian Literature"
  },
  {
    label: "ITALST 270 - Modern Italy"
  },
  {
    label: "ITALST 271 - Italian Canadian Experience"
  },
  {
    label: "ITALST 291 - Italian Culture and Civilization 1"
  },
  {
    label: "ITALST 292 - Italian Culture and Civilization 2"
  },
  {
    label: "ITALST 311 - Medieval Italian Literature"
  },
  {
    label: "ITALST 312 - Renaissance Italian Literature"
  },
  {
    label: "ITALST 360 - Dante's Divine Comedy"
  },
  {
    label: "ITALST 370 - Women Writers of the Italian Renaissance"
  },
  {
    label: "ITALST 391 - The Italian Novel and Cinema"
  },
  {
    label: "ITALST 392 - Modern Italian Poetry and Theatre"
  },
  {
    label: "ITALST 394 - Italian Studies in Italy"
  },
  {
    label: "ITALST 396 - Special Topics/Directed Readings"
  },
  {
    label: "ITALST 397 - Special Topics/Directed Readings"
  },
  {
    label: "JAPAN 101R - First-Year Japanese 1"
  },
  {
    label: "JAPAN 102R - First-Year Japanese 2"
  },
  {
    label: "JAPAN 111R - Japanese for Business 1"
  },
  {
    label: "JAPAN 112R - Japanese for Business 2"
  },
  {
    label: "JAPAN 201R - Second-Year Japanese 1"
  },
  {
    label: "JAPAN 202R - Second-Year Japanese 2"
  },
  {
    label: "JAPAN 272R - Japanese Culture and Society"
  },
  {
    label: "JAPAN 301R - Third-Year Japanese 1"
  },
  {
    label: "JAPAN 302R - Third-Year Japanese 2"
  },
  {
    label: "JS 105A - Classical Hebrew 1"
  },
  {
    label: "JS 105B - Classical Hebrew 2"
  },
  {
    label: "JS 120 - Relationships in the Bible (Old Testament)"
  },
  {
    label: "JS 125 - Great Texts in the Jewish Tradition"
  },
  {
    label: "JS 130 - Power and Corruption in the Bible (Old Testament)"
  },
  {
    label: "JS 150 - The Quest for Meaning in Modern Judaism"
  },
  {
    label: "JS 203 - Jewish Responses to the Holocaust"
  },
  {
    label: "JS 205 - The Hebrew Prophets"
  },
  {
    label: "JS 210 - Jewish Philosophy"
  },
  {
    label: "JS 211 - Kabbalah: Jewish Mysticism"
  },
  {
    label: "JS 215 - Visions of Israel in Judaism: From Biblical to Modern Times"
  },
  {
    label: "JS 217 - Judaism"
  },
  {
    label: "JS 233 - The Holocaust and Film"
  },
  {
    label: "JS 250 - Special Topics"
  },
  {
    label: "JS 301 - Canada and the Holocaust"
  },
  {
    label: "JS 306A - Intermediate Classical Hebrew"
  },
  {
    label: "JS 306B - Ancient Semitic Texts and Inscriptions"
  },
  {
    label: "JS 310 - Jews in the New World"
  },
  {
    label: "JS 313 - Moses Maimonides: Life and Thought"
  },
  {
    label: "JS 339 - The Bible (Old Testament) and Archaeology"
  },
  {
    label: "JS 341 - Jewish Contributions to Political Thought"
  },
  {
    label: "JS 350 - Special Topics in Jewish Studies"
  },
  {
    label: "JS 450 - Special Topics in Jewish Studies"
  },
  {
    label: "KIN 1 - Discussion of Behavioural Issues"
  },
  {
    label: "KIN 10 - Ergonomics Option Seminar"
  },
  {
    label: "KIN 100 - Human Anatomy: Limbs and Trunk"
  },
  {
    label: "KIN 100L - Human Anatomy Lab"
  },
  {
    label: "KIN 101 - Biophysical Evaluation Lab"
  },
  {
    label: "KIN 104 - Fundamentals of Kinesiology"
  },
  {
    label: "KIN 105 - Cardiovascular and Respiratory Responses to Exercise"
  },
  {
    label: "KIN 121 - Biomechanics of Human Activity"
  },
  {
    label: "KIN 140L - Sport Injury Management Lab"
  },
  {
    label: "KIN 204 - Movement Assessment and Exercise Prescription"
  },
  {
    label: "KIN 155 - Introduction to Neuroscience for Kinesiology"
  },
  {
    label: "KIN 205 - Muscle Physiology in Exercise and Work"
  },
  {
    label: "KIN 210 - Development, Aging and Health"
  },
  {
    label: "KIN 217 - Human Biochemistry"
  },
  {
    label: "KIN 221 - Advanced Biomechanics of Human Movement"
  },
  {
    label: "KIN 222 - Statistical Techniques Applied to Kinesiology"
  },
  {
    label: "KIN 242 - Introduction to Movement Disorders"
  },
  {
    label: "KIN 250 - Sociology of Physical Activity"
  },
  {
    label: "KIN 301 - Human Anatomy of the Central Nervous System"
  },
  {
    label: "KIN 307 - Methods in Physiological Research"
  },
  {
    label: "KIN 320 - Task Analysis"
  },
  {
    label: "KIN 330 - Research Design"
  },
  {
    label: "KIN 340 - Musculoskeletal Injuries in Work and Sport"
  },
  {
    label: "KIN 341 - Selected Topics in Sport and Work Injuries"
  },
  {
    label: "KIN 342 - Nutrition and Aging"
  },
  {
    label: "KIN 343 - Micronutrient Metabolism"
  },
  {
    label: "KIN 346 - Human Nutrition and Metabolism"
  },
  {
    label: "KIN 352 - Sociology of Aging"
  },
  {
    label: "KIN 354 - Psychology of Physical Activity"
  },
  {
    label: "KIN 356 - Information Processing in Human Perceptual Motor Performance"
  },
  {
    label: "KIN 357 - Motor Learning"
  },
  {
    label: "KIN 372 - International Exchange"
  },
  {
    label: "KIN 391 - Research Apprenticeship"
  },
  {
    label: "KIN 402 - Microgravity, Hypo- and Hyperbaric Physiology"
  },
  {
    label: "KIN 403 - Occupational and Environmental Physiology"
  },
  {
    label: "KIN 404 - Physiological Basis of Obesity and Type 2 Diabetes"
  },
  {
    label: "KIN 405 - Exercise Management"
  },
  {
    label: "KIN 406 - Physiology of Muscle Aging and Disease"
  },
  {
    label: "KIN 407 - Coronary Artery Disease - Prevention and Rehabilitation"
  },
  {
    label: "KIN 408 - Cardiovascular Physiology and Pathophysiology"
  },
  {
    label: "KIN 415 - Clinical Neurophysiology: Fundamentals for Rehabilitation of Human Movement"
  },
  {
    label: "KIN 416 - Neuromuscular Integration"
  },
  {
    label: "KIN 418 - Age-Related Physical and Mental Changes and Effect of Exercise on Improving Health in the Aged"
  },
  {
    label: "KIN 420 - Occupational Biomechanics"
  },
  {
    label: "KIN 422 - Human Gait, Posture, and Balance: Pathological and Aging Considerations"
  },
  {
    label: "KIN 425 - Biomechanical Modelling of Human Movement"
  },
  {
    label: "KIN 427 - Low Back Disorders"
  },
  {
    label: "KIN 428 - Upper Extremity Musculoskeletal Disorders: Prevention, Assessment, and Rehabilitation"
  },
  {
    label: "KIN 429 - Bone and Joint Health"
  },
  {
    label: "KIN 431 - Research Proposal"
  },
  {
    label: "KIN 432 - Research Project"
  },
  {
    label: "KIN 433 - Senior Essay"
  },
  {
    label: "KIN 440 - Sport Injury Management Seminar"
  },
  {
    label: "KIN 446 - Physiological and Biochemical Aspects of Nutrition and Health"
  },
  {
    label: "KIN 451 - Social Aspects of Injury in Work and Sport"
  },
  {
    label: "KIN 453 - Applied Sport Psychology"
  },
  {
    label: "LS 342 - Migration and Legality"
  },
  {
    label: "KIN 456 - Cognitive Dysfunction and Motor Skill"
  },
  {
    label: "KIN 457 - Cognitive, Perceptual and Motor Assessment"
  },
  {
    label: "KIN 458 - Social Neuroscience and Health"
  },
  {
    label: "KIN 470 - Seminar in Kinesiology"
  },
  {
    label: "KIN 470E - Seminar in Integrative Ergonomics"
  },
  {
    label: "KIN 471 - Contemporary Issues in Kinesiology"
  },
  {
    label: "KIN 472 - Directed Study in Special Topics"
  },
  {
    label: "KIN 491 - Clinical Kinesiology -- Sports Injuries Assessment"
  },
  {
    label: "KIN 492A - Clinical Kinesiology -- Cardiac Rehabilitation Practicum"
  },
  {
    label: "KIN 492B - Clinical Kinesiology -- Cardiac Rehabilitation Practicum"
  },
  {
    label: "KIN 493 - Clinical Kinesiology: Movement Assessment Practicum"
  },
  {
    label: "KIN 494 - Integrative Ergonomics Practicum"
  },
  {
    label: "KIN 601 - Muscle Physiology"
  },
  {
    label: "KIN 602 - Respiratory and Cardiovascular Physiology"
  },
  {
    label: "KIN 606 - Molecular Basis of Disease"
  },
  {
    label: "KIN 607 - Integrative Energy Metabolism in Health and Disease"
  },
  {
    label: "KIN 611 - Biomechanics of Human Motion"
  },
  {
    label: "KIN 612 - Instrumentation and Signal Processing in Biophysical Research"
  },
  {
    label: "KIN 613 - Modern Methods in Biomechanical Modeling, Kinematics, and Kinetics"
  },
  {
    label: "KIN 616 - Neural Control of Human Movement"
  },
  {
    label: "KIN 620 - Ergonomic Aspects of Occupational Musculoskeletal Injuries"
  },
  {
    label: "KIN 625 - Social Neuroscience of Exercise and Eating"
  },
  {
    label: "KIN 631A - Introduction to Statistics"
  },
  {
    label: "KIN 631C - Correlation and Regression"
  },
  {
    label: "KIN 631D - Logistic Regression and Its Application"
  },
  {
    label: "KIN 631E - Analysis of Variance I"
  },
  {
    label: "KIN 631F - Analysis of Variance II"
  },
  {
    label: "KIN 631G - Biological Deterministic Modelling and Signal Processing"
  },
  {
    label: "KIN 646 - Physiological and Biochemical Aspects of Nutrition and Health"
  },
  {
    label: "KIN 651 - Motor Learning"
  },
  {
    label: "KIN 652 - Movement Control and Learning"
  },
  {
    label: "KIN 653 - Human Neuroscience Theory"
  },
  {
    label: "KIN 654 - Instrumentation in Neuroscience Research"
  },
  {
    label: "KIN 656 - Neurobehavioural Analyses of  Perceptual and Motor Deficits"
  },
  {
    label: "KIN 670A - Neuroscience Seminar I"
  },
  {
    label: "KIN 670B - Neuroscience Seminar II"
  },
  {
    label: "KIN 670C - Seminar 1: Motor Learning"
  },
  {
    label: "KIN 670D - Seminar 1: Psychomotor Behavior"
  },
  {
    label: "KIN 670E - Biomechanics Seminar I"
  },
  {
    label: "KIN 670F - Biomechanics Seminar II"
  },
  {
    label: "KIN 670H - Physiology and Nutrition Seminar I"
  },
  {
    label: "KIN 670I - Physiology and Nutrition Seminar II"
  },
  {
    label: "KIN 680 - Selected Topics in Physiology and Nutrition"
  },
  {
    label: "KIN 682 - Selected Topics in Biomechanics"
  },
  {
    label: "KIN 700 - Muscle Metabolism in Work"
  },
  {
    label: "KIN 684 - Selected Topics in the Social Science of Sport"
  },
  {
    label: "KIN 686 - Selected Topics in Neuroscience I"
  },
  {
    label: "KIN 687 - Fundamentals of Behavioural Neuroscience"
  },
  {
    label: "KIN 702 - Cardiorespiratory Integration"
  },
  {
    label: "KIN 704 - Bioactive Lipids"
  },
  {
    label: "KIN 713 - Modelling of Human Musculoskeletal System during Movement"
  },
  {
    label: "KIN 714 - Advanced Electromyography"
  },
  {
    label: "KIN 715 - Assessment of Pathological Movement"
  },
  {
    label: "KIN 727 - Low Back Disorders: Optimizing Prevention, Rehabilitation and Performance"
  },
  {
    label: "KIN 730 - Fundamentals of Work and Health"
  },
  {
    label: "KIN 731 - Approaches to Research in Work and Health"
  },
  {
    label: "KIN 732A - Work and Health Research Seminar (I)"
  },
  {
    label: "KIN 732B - Work and Health Research Seminar (II)"
  },
  {
    label: "KIN 750 - Fundamentals of Aging, Health and Well-being"
  },
  {
    label: "KIN 751 - Aging, Health and Well-being Research Seminar"
  },
  {
    label: "KIN 760 - Selected Topics Neuroscience II"
  },
  {
    label: "KIN 775 - Key Issues and Concerns in Kinesiology"
  },
  {
    label: "KIN 780 - Selected Topics in Physiology and Nutrition"
  },
  {
    label: "KIN 782 - Selected Topics in Biomechanics"
  },
  {
    label: "LAT 621 - Latin Epigraphy"
  },
  {
    label: "KOREA 101R - First-Year Korean 1"
  },
  {
    label: "KOREA 102R - First-Year Korean 2"
  },
  {
    label: "KOREA 201R - Second-Year Korean 1"
  },
  {
    label: "KOREA 202R - Second-Year Korean 2"
  },
  {
    label: "KOREA 272R - Korean Culture and Society"
  },
  {
    label: "LAT 101 - Introductory Latin 1"
  },
  {
    label: "LAT 102 - Introductory Latin 2"
  },
  {
    label: "LAT 201 - Intermediate Latin"
  },
  {
    label: "LAT 202 - Selections from Latin Authors"
  },
  {
    label: "LAT 202W - Selections from Latin Authors"
  },
  {
    label: "LAT 331 - Advanced Readings in Latin: Prose"
  },
  {
    label: "LAT 332 - Advanced Readings in Latin: Poetry"
  },
  {
    label: "LAT 341 - Advanced Studies in Latin: Selected Topics"
  },
  {
    label: "LAT 351 - Latin Composition, Grammar and Reading"
  },
  {
    label: "LAT 381 - Medieval Latin"
  },
  {
    label: "LAT 421 - Latin Epigraphy"
  },
  {
    label: "LAT 422 - Latin Palaeography"
  },
  {
    label: "LAT 451 - Senior Latin Composition, Grammar and Reading"
  },
  {
    label: "LAT 490 - Senior Studies in Latin: Selected Topics"
  },
  {
    label: "LAT 491 - Senior Studies in Latin: Independent Study"
  },
  {
    label: "LAT 600 - Topics in Latin Language"
  },
  {
    label: "LAT 601 - Topics in Greek Language"
  },
  {
    label: "LED 611 - Industrial Location Theory and Concepts"
  },
  {
    label: "LED 612 - Land Development Planning"
  },
  {
    label: "LED 613 - Regional Development Principles and Practice"
  },
  {
    label: "LED 615 - Community Economic Development"
  },
  {
    label: "LED 619 - Regional Planning Economic and Investment Analysis"
  },
  {
    label: "LED 621 - Environment & Business"
  },
  {
    label: "LED 671 - Contemporary Perspectives on Tourism"
  },
  {
    label: "LED 685 - Theory of Local Economic Development"
  },
  {
    label: "LED 686 - Practice of Local Economic Development"
  },
  {
    label: "LED 687 - Communication, Market Research and Marketing for the Public Sector"
  },
  {
    label: "LED 688 - Entrepreneurship and Small Business Development"
  },
  {
    label: "LS 101 - Introduction to Legal Studies"
  },
  {
    label: "LS 102 - Introduction to Criminal Law"
  },
  {
    label: "LS 201 - Women and the Law"
  },
  {
    label: "LS 280 - Social Statistics"
  },
  {
    label: "LS 321 - Introduction to Research Methods"
  },
  {
    label: "LS 322 - Field Research Methods"
  },
  {
    label: "LS 401 - Law, Culture, and Rights"
  },
  {
    label: "LS 402 - Perspectives on Legal Authority and Subjectivity"
  },
  {
    label: "LS 403 - Socio-Legal Responses to Crime"
  },
  {
    label: "LS 496 - Special Topics in Legal Studies"
  },
  {
    label: "LS 498 - Directed Readings in Legal Studies"
  },
  {
    label: "MATBUS 470 - Derivatives"
  },
  {
    label: "MATBUS 471 - Fixed Income Securities"
  },
  {
    label: "MATBUS 472 - Risk Management"
  },
  {
    label: "MATH 51 - Pre-University Algebra and Geometry"
  },
  {
    label: "MATH 52 - Pre-University Calculus"
  },
  {
    label: "MATH 97 - Study Abroad"
  },
  {
    label: "MATH 103 - Introductory Algebra for Arts and Social Science"
  },
  {
    label: "MATH 104 - Introductory Calculus for Arts and Social Science"
  },
  {
    label: "MATH 106 - Applied Linear Algebra 1"
  },
  {
    label: "MATH 109 - Mathematics for Accounting"
  },
  {
    label: "MATH 114 - Linear Algebra for Science"
  },
  {
    label: "MATH 115 - Linear Algebra for Engineering"
  },
  {
    label: "MATH 116 - Calculus 1 for Engineering"
  },
  {
    label: "MATH 117 - Calculus 1 for Engineering"
  },
  {
    label: "MATH 118 - Calculus 2 for Engineering"
  },
  {
    label: "MATH 119 - Calculus 2 for Engineering"
  },
  {
    label: "MATH 124 - Calculus and Vector Algebra for Kinesiology"
  },
  {
    label: "MATH 127 - Calculus 1 for the Sciences"
  },
  {
    label: "MATH 128 - Calculus 2 for the Sciences"
  },
  {
    label: "MATH 135 - Algebra for Honours Mathematics"
  },
  {
    label: "MATH 136 - Linear Algebra 1 for Honours Mathematics"
  },
  {
    label: "MATH 137 - Calculus 1 for Honours Mathematics"
  },
  {
    label: "MATH 138 - Calculus 2 For Honours Mathematics"
  },
  {
    label: "MATH 661 - Problem Solving and Proof in Geometry"
  },
  {
    label: "MATH 145 - Algebra (Advanced Level)"
  },
  {
    label: "MATH 146 - Linear Algebra 1 (Advanced level)"
  },
  {
    label: "MATH 147 - Calculus 1 (Advanced Level)"
  },
  {
    label: "MATH 148 - Calculus 2 (Advanced Level)"
  },
  {
    label: "MATH 207 - Calculus 3 (Non-Specialist Level)"
  },
  {
    label: "MATH 211 - Advanced Calculus 1 for Electrical and Computer Engineers"
  },
  {
    label: "MATH 212 - Advanced Calculus 2 for Electrical Engineers"
  },
  {
    label: "MATH 213 - Advanced Mathematics for Software Engineers"
  },
  {
    label: "MATH 215 - Linear Algebra for Engineering"
  },
  {
    label: "MATH 217 - Calculus 3 for Chemical Engineering"
  },
  {
    label: "MATH 218 - Differential Equations for Engineers"
  },
  {
    label: "MATH 225 - Applied Linear Algebra 2"
  },
  {
    label: "MATH 227 - Calculus 3 for Honours Physics"
  },
  {
    label: "MATH 228 - Differential Equations for Physics and Chemistry"
  },
  {
    label: "MATH 229 - Introduction to Combinatorics (Non-Specialist Level)"
  },
  {
    label: "MATH 235 - Linear Algebra 2 for Honours Mathematics"
  },
  {
    label: "MATH 237 - Calculus 3 for Honours Mathematics"
  },
  {
    label: "MATH 455W - Partial Differential Equations (WLU)"
  },
  {
    label: "MATH 239 - Introduction to Combinatorics"
  },
  {
    label: "MATH 636 - Linear Algebra for Teachers"
  },
  {
    label: "MATH 245 - Linear Algebra 2 (Advanced Level)"
  },
  {
    label: "MATH 247 - Calculus 3 (Advanced Level)"
  },
  {
    label: "MATH 249 - Introduction to Combinatorics (Advanced Level)"
  },
  {
    label: "MATH 600 - Introduction to Mathematical Software for Teachers"
  },
  {
    label: "MATH 630 - Foundations of Probability"
  },
  {
    label: "MATH 631 - Statistics for Teachers"
  },
  {
    label: "MATH 640 - Number Theory for Teachers"
  },
  {
    label: "MATH 641 - Algorithm Design and Analysis"
  },
  {
    label: "MATH 647 - Foundations of Calculus I"
  },
  {
    label: "MATH 648 - Foundations of Calculus II"
  },
  {
    label: "MATH 650 - Mathematical Modeling with Differential Equations"
  },
  {
    label: "MATH 660 - Explorations in Geometry"
  },
  {
    label: "MATH 674 - Special Topics in Mathematical Connections"
  },
  {
    label: "MATH 680 - History of Mathematics"
  },
  {
    label: "MATH 681 - Problem Solving and Mathematical Discovery"
  },
  {
    label: "MATH 690 - Summer Conference for Teachers of Mathematics"
  },
  {
    label: "MATH 692 - Reading, Writing and Discovering Proofs"
  },
  {
    label: "MATH 698 - Reading Course in Mathematics for Teachers"
  },
  {
    label: "MATH 699 - Master of Mathematics for Teachers Capstone"
  },
  {
    label: "MATH 700 - Math for Teachers - OVGS Transfer Course"
  },
  {
    label: "ME 100 - Introduction to Mechanical Engineering Practice 1"
  },
  {
    label: "ME 100B - Seminar"
  },
  {
    label: "ME 101 - Introduction to Mechanical Engineering Practice 2"
  },
  {
    label: "ME 115 - Structure and Properties of Materials"
  },
  {
    label: "ME 200A - Seminar"
  },
  {
    label: "ME 200B - Seminar"
  },
  {
    label: "ME 201 - Advanced Calculus"
  },
  {
    label: "ME 202 - Statistics for Engineers"
  },
  {
    label: "ME 203 - Ordinary Differential Equations"
  },
  {
    label: "ME 212 - Dynamics"
  },
  {
    label: "ME 219 - Mechanics of Deformable Solids 1"
  },
  {
    label: "ME 220 - Mechanics of Deformable Solids 2"
  },
  {
    label: "ME 230 - Control of Properties of Materials"
  },
  {
    label: "ME 235 - Materials Science and Engineering"
  },
  {
    label: "ME 250 - Thermodynamics 1"
  },
  {
    label: "ME 262 - Introduction to Microprocessors and Digital Logic"
  },
  {
    label: "ME 269 - Electromechanical Devices and Power Processing"
  },
  {
    label: "ME 300A - Seminar"
  },
  {
    label: "ME 300B - Seminar"
  },
  {
    label: "ME 303 - Advanced Engineering Mathematics"
  },
  {
    label: "ME 321 - Kinematics and Dynamics of Machines"
  },
  {
    label: "ME 322 - Mechanical Design 1"
  },
  {
    label: "ME 340 - Manufacturing Processes"
  },
  {
    label: "ME 351 - Fluid Mechanics 1"
  },
  {
    label: "ME 353 - Heat Transfer 1"
  },
  {
    label: "ME 354 - Thermodynamics 2"
  },
  {
    label: "ME 360 - Introduction to Control Systems"
  },
  {
    label: "ME 362 - Fluid Mechanics 2"
  },
  {
    label: "ME 380 - Mechanical Engineering Design Workshop"
  },
  {
    label: "ME 400A - Seminar"
  },
  {
    label: "ME 400B - Seminar"
  },
  {
    label: "ME 401 - Law for the Professional Engineer"
  },
  {
    label: "ME 423 - Mechanical Design 2"
  },
  {
    label: "ME 435 - Industrial Metallurgy"
  },
  {
    label: "ME 436 - Welding and Joining Processes"
  },
  {
    label: "ME 452 - Energy Transfer in Buildings"
  },
  {
    label: "ME 456 - Heat Transfer 2"
  },
  {
    label: "ME 459 - Energy Conversion"
  },
  {
    label: "ME 481 - Mechanical Engineering Design Project 1"
  },
  {
    label: "ME 482 - Mechanical Engineering Design Project 2"
  },
  {
    label: "ME 524 - Advanced Dynamics and Vibrations"
  },
  {
    label: "ME 526 - Fatigue and Fracture Analysis"
  },
  {
    label: "ME 531 - Physical Metallurgy Applied to Manufacturing"
  },
  {
    label: "ME 533 - Non-metallic and Composite Materials"
  },
  {
    label: "ME 535 - Welding Metallurgy"
  },
  {
    label: "ME 538 - Welding Design, Fabrication and Quality Control"
  },
  {
    label: "ME 547 - Robot Manipulators: Kinematics, Dynamics, Control"
  },
  {
    label: "ME 548 - Numerical Control of Machine Tools 1"
  },
  {
    label: "ME 555 - Computer-Aided Design"
  },
  {
    label: "ME 557 - Combustion 1"
  },
  {
    label: "ME 559 - Finite Element Methods"
  },
  {
    label: "ME 561 - Fluid Power Control Systems"
  },
  {
    label: "ME 563 - Turbomachines"
  },
  {
    label: "ME 564 - Aerodynamics"
  },
  {
    label: "ME 566 - Computational Fluid Dynamics for Engineering Design"
  },
  {
    label: "ME 567 - Fire Safety Engineering"
  },
  {
    label: "ME 571 - Air Pollution"
  },
  {
    label: "ME 595 - Special Topics in Mechanical Engineering"
  },
  {
    label: "ME 596 - Special Topics in Mechanical Engineering"
  },
  {
    label: "ME 597 - Special Topics in Mechanical Engineering"
  },
  {
    label: "ME 598 - Special Topics in Mechanical Engineering"
  },
  {
    label: "ME 599 - Special Topics in Mechanical Engineering"
  },
  {
    label: "ME 610 - Analytical Methods in Vibrations"
  },
  {
    label: "ME 620 - Mechanics of Continua"
  },
  {
    label: "ME 621 - Advanced Finite Element Methods"
  },
  {
    label: "ME 627 - Fatigue Analysis and Design"
  },
  {
    label: "ME 628 - Fracture Mechanics"
  },
  {
    label: "ME 631 - Mechanical Metallurgy"
  },
  {
    label: "ME 632 - Experimental Methods in Materials Engineering"
  },
  {
    label: "ME 645 - Metallurgy and Plasticity in Metalworking"
  },
  {
    label: "ME 648 - Surface Modelling in Machining"
  },
  {
    label: "ME 649 - Control of Machines and Processes"
  },
  {
    label: "ME 651 - Heat Conduction"
  },
  {
    label: "ME 652 - Convective Heat Transfer"
  },
  {
    label: "ME 653 - Radiation Heat Transfer"
  },
  {
    label: "ME 662 - Advanced Fluid Mechanics"
  },
  {
    label: "ME 663 - Computational Fluid Dynamics"
  },
  {
    label: "ME 664 - Turbulent Flow"
  },
  {
    label: "ME 670 - Atmospheric Dynamics"
  },
  {
    label: "ME 705 - Special Topics in Tribology"
  },
  {
    label: "ME 706 - Advanced Tribology"
  },
  {
    label: "ME 707 - Machinery Noise and Vibration Analysis"
  },
  {
    label: "ME 709 - Control Engineering and Mechanical Systems"
  },
  {
    label: "ME 710 - Special Topics in Control Systems"
  },
  {
    label: "ME 711 - Non-Linear Vibrations"
  },
  {
    label: "ME 720 - Special Topics in Solid Mechanics"
  },
  {
    label: "ME 722 - Topics in Pressure Vessel Design"
  },
  {
    label: "ME 725 - Special Topics in Advanced Stress Analysis"
  },
  {
    label: "ME 729 - Special Topics in Advanced Machine Design Methods"
  },
  {
    label: "ME 731 - Corrosion and Oxidation"
  },
  {
    label: "ME 732 - Thermodynamics and Phase Transformations"
  },
  {
    label: "ME 734 - Composite Materials"
  },
  {
    label: "ME 735 - Special Topics - Welding and Joining"
  },
  {
    label: "ME 736 - Topics in Mechanical Metallurgy"
  },
  {
    label: "ME 737 - Microstructural Engineering Topics"
  },
  {
    label: "ME 738 - Special Topics in Materials"
  },
  {
    label: "ME 739 - Manufacturing Processes Topics"
  },
  {
    label: "ME 741 - Design of Intelligent Systems: Mechatronics"
  },
  {
    label: "ME 742 - Modelling and Control of Dynamic Systems"
  },
  {
    label: "ME 743 - Modal Analysis and Modelling"
  },
  {
    label: "ME 745 - Quality Assurance and Reliability in Manufacturing"
  },
  {
    label: "ME 747 - Topics in Manufacturing"
  },
  {
    label: "ME 748 - Topics in Surface Modelling"
  },
  {
    label: "ME 749 - Special Topics in Machining"
  },
  {
    label: "ME 750 - Advanced Engineering Thermodynamics"
  },
  {
    label: "ME 751 - Fuel Cell Technology"
  },
  {
    label: "ME 753 - Solar Energy"
  },
  {
    label: "ME 755 - Advanced Differential Equations and Special Functions"
  },
  {
    label: "ME 756 - Combustion 2"
  },
  {
    label: "ME 758 - Thermal Contact Resistance"
  },
  {
    label: "ME 759 - Advanced Experimental Methods in Thermal and Fluids Engineering"
  },
  {
    label: "ME 760 - Special Topics in Thermal Engineering"
  },
  {
    label: "ME 761 - Fluid Dynamic Design of Turbomachines"
  },
  {
    label: "ME 762 - Turbulent Diffusion in the Natural Environment"
  },
  {
    label: "ME 765 - Special Topics in Fluid Mechanics"
  },
  {
    label: "ME 770 - Special Topics in Numerical Methods, Fluid Flow and Heat Transfer"
  },
  {
    label: "ME 780 - Special Topics in Mechatronics"
  },
  {
    label: "MEDVL 105 - Introduction to Medieval Studies"
  },
  {
    label: "MEDVL 115 - Crusading in the Middle Ages"
  },
  {
    label: "MEDVL 205 - Medieval Society"
  },
  {
    label: "MEDVL 260 - Europe: 410-1303"
  },
  {
    label: "MEDVL 304 - Heresy and Religious Crises in Late Medieval Europe"
  },
  {
    label: "MNS 101 - Materials and Nanosciences in the Modern World"
  },
  {
    label: "MNS 102 - Techniques for Materials and Nanosciences"
  },
  {
    label: "MNS 201L - Materials and Nanosciences Laboratory"
  },
  {
    label: "MNS 211 - Chemistry and the Solid State"
  },
  {
    label: "MNS 221 - Physics and the Solid State"
  },
  {
    label: "MNS 321 - Electrical and Optical Properties of Materials"
  },
  {
    label: "MNS 322 - Polymer Materials"
  },
  {
    label: "MNS 331 - Biomaterials"
  },
  {
    label: "MSCI 100 - Management Engineering Concepts"
  },
  {
    label: "MSCI 100B - Seminar"
  },
  {
    label: "MSCI 121 - Introduction to Computer Programming"
  },
  {
    label: "MSCI 131 - Work Design and Facilities Planning"
  },
  {
    label: "MSCI 200A - Seminar"
  },
  {
    label: "MSCI 200B - Seminar"
  },
  {
    label: "MSCI 211 - Organizational Behaviour"
  },
  {
    label: "MSCI 240 - Algorithms and Data Structures"
  },
  {
    label: "MSCI 252 - Probability and Statistics for Engineers"
  },
  {
    label: "MSCI 261 - Engineering Economics: Financial Management for Engineers"
  },
  {
    label: "MSCI 262 - Managerial and Cost Accounting"
  },
  {
    label: "MSCI 263 - Managerial Economics"
  },
  {
    label: "MSCI 271 - Advanced Calculus and Numerical Methods"
  },
  {
    label: "MSCI 300A - Seminar"
  },
  {
    label: "MSCI 300B - Seminar"
  },
  {
    label: "MSCI 311 - Organizational Design and Technology"
  },
  {
    label: "MSCI 331 - Introduction to Optimization"
  },
  {
    label: "MSCI 332 - Deterministic Optimization Models and Methods"
  },
  {
    label: "MSCI 333 - Simulation Analysis and Design"
  },
  {
    label: "MSCI 334 - Operations Planning and Inventory Control"
  },
  {
    label: "MSCI 342 - Principles of Software Engineering"
  },
  {
    label: "MSCI 343 - Human-Computer Interaction"
  },
  {
    label: "MSCI 346 - Database Systems"
  },
  {
    label: "MSCI 400A - Seminar"
  },
  {
    label: "MSCI 400B - Seminar"
  },
  {
    label: "MSCI 401 - Management Engineering Design Project 1"
  },
  {
    label: "MSCI 402 - Management Engineering Design Project 2"
  },
  {
    label: "MSCI 411 - Leadership and Influence"
  },
  {
    label: "MSCI 421 - Strategic Management of Technology"
  },
  {
    label: "MSCI 422 - Economic Impact of Technological Change and Entrepreneurship"
  },
  {
    label: "MSCI 423 - Managing New Product and Process Innovation"
  },
  {
    label: "MSCI 431 - Stochastic Models and Methods"
  },
  {
    label: "MSCI 432 - Production and Service Operations Management"
  },
  {
    label: "MSCI 433 - Applications of Management Engineering"
  },
  {
    label: "MSCI 434 - Supply Chain Management"
  },
  {
    label: "MSCI 435 - Advanced Optimization Techniques"
  },
  {
    label: "MSCI 436 - Decision Support Systems"
  },
  {
    label: "MSCI 442 - Impact of Information Systems on Organizations and Society"
  },
  {
    label: "MSCI 444 - Information Systems Analysis and Design"
  },
  {
    label: "MSCI 445 - Telecommunication Systems: from protocols to applications"
  },
  {
    label: "MSCI 446 - Data Warehousing and Mining"
  },
  {
    label: "MSCI 453 - Business Processes and Information Technology"
  },
  {
    label: "MSCI 452 - Decision Making Under Uncertainty"
  },
  {
    label: "MSCI 454 - Technical Entrepreneurship"
  },
  {
    label: "MSCI 531 - Stochastic Processes and Decision Making"
  },
  {
    label: "MSCI 541 - Search Engines"
  },
  {
    label: "MSCI 551 - Quality Management and Control"
  },
  {
    label: "MSCI 555 - Scheduling: Theory and Practice"
  },
  {
    label: "MSCI 597 - Complementary Studies Topics in Management Sciences"
  },
  {
    label: "MSCI 598 - Special Topics in Management Engineering"
  },
  {
    label: "MSCI 599 - Special Topics in Management Engineering Design"
  },
  {
    label: "MSCI 601 - Research Methods in the Management Sciences"
  },
  {
    label: "MSCI 602 - Strategic Management of Technological Innovation"
  },
  {
    label: "MSCI 603 - Principles of Operations Research"
  },
  {
    label: "MSCI 605 - Organizational Theory & Behaviour"
  },
  {
    label: "MSCI 606 - Foundations of Senior Management"
  },
  {
    label: "MSCI 607 - Applied Economics for Management"
  },
  {
    label: "MSCI 609 - Quantitative Data Analysis for Management Sciences"
  },
  {
    label: "MSCI 620 - Organizations & Technical Systems"
  },
  {
    label: "MSCI 631 - Probabilistic  Models in Operations Research"
  },
  {
    label: "MSCI 632 - Discrete Event Simulation"
  },
  {
    label: "MSCI 633 - Production and Inventory Management"
  },
  {
    label: "MSCI 638 - Information Systems Analysis and Design"
  },
  {
    label: "MSCI 646 - Database Management Systems"
  },
  {
    label: "MSCI 651 - International Project Management"
  },
  {
    label: "MSCI 652 - International Business Management"
  },
  {
    label: "MSCI 700 - Topics in Operations Research and Management"
  },
  {
    label: "MSCI 702 - Linear Programming and Extensions"
  },
  {
    label: "MSCI 703 - Applied Optimization"
  },
  {
    label: "MSCI 709 - Logistics and Supply Chain Management"
  },
  {
    label: "MSCI 712 - Decision Analysis Under Uncertainty"
  },
  {
    label: "MSCI 720 - Topics in Information and Information Systems"
  },
  {
    label: "MSCI 721 - Knowledge Engineering for Management"
  },
  {
    label: "MSCI 730 - Human Computer Interaction"
  },
  {
    label: "MSCI 740 - Topics in Management of Technology"
  },
  {
    label: "MSCI 765 - Statistical Quality Control"
  },
  {
    label: "MSCI 767 - Management of Quality"
  },
  {
    label: "MSCI 741 - Economics of Technological Change"
  },
  {
    label: "MSCI 750 - Topics in Organizational Analysis and Behaviour"
  },
  {
    label: "MSCI 751 - Knowledge Management"
  },
  {
    label: "MSCI 753 - Entrepreneurship and Intrapreneurship: Managing New Technology-based Firms"
  },
  {
    label: "MSCI 760 - Topics in Other Areas of Management Sciences"
  },
  {
    label: "MSCI 770 - Special Directed Readings"
  },
  {
    label: "MTE 100 - Mechatronics Engineering"
  },
  {
    label: "MTE 100B - Seminar"
  },
  {
    label: "MTE 111 - Structure and Properties of Materials"
  },
  {
    label: "MTE 119 - Statics"
  },
  {
    label: "MTE 120 - Circuits"
  },
  {
    label: "MTE 140 - Algorithms and Data Structures"
  },
  {
    label: "MTE 200A - Seminar"
  },
  {
    label: "MTE 200B - Seminar"
  },
  {
    label: "MTE 201 - Experimental Measurement & Statistical Analysis"
  },
  {
    label: "MTE 202 - Ordinary Differential Equations"
  },
  {
    label: "MTE 203 - Advanced Calculus"
  },
  {
    label: "MTE 204 - Numerical Methods"
  },
  {
    label: "MTE 219 - Mechanics of Deformable Solids"
  },
  {
    label: "MTE 220 - Sensors and Instrumentation"
  },
  {
    label: "MTE 241 - Introduction to Computer Structures & Real-Time Systems"
  },
  {
    label: "MTE 262 - Introduction to Microprocessors and Digital Logic"
  },
  {
    label: "MTE 300A - Seminar"
  },
  {
    label: "MTE 300B - Seminar"
  },
  {
    label: "MTE 320 - Actuators & Power Electronics"
  },
  {
    label: "MTE 322 - Electromechanical Machine Design"
  },
  {
    label: "MTE 325 - Microprocessor Systems and Interfacing for Mechatronics Engineering"
  },
  {
    label: "MTE 360 - Automatic Control Systems"
  },
  {
    label: "MTE 380 - Mechatronics Engineering Design Workshop"
  },
  {
    label: "MTE 400A - Seminar"
  },
  {
    label: "MTE 400B - Seminar"
  },
  {
    label: "MTE 420 - Power Electronics and Motor Drives"
  },
  {
    label: "MTE 460 - Mechatronic System Integration"
  },
  {
    label: "MTE 481 - Mechatronics Engineering Design Project"
  },
  {
    label: "MTE 482 - Mechatronics Engineering Project"
  },
  {
    label: "MTE 545 - Introduction to MEMS Fabrication"
  },
  {
    label: "MTHEL 131 - Introduction to Actuarial Practice"
  },
  {
    label: "MTHEL 198 - Mathematics Elective Topics 1"
  },
  {
    label: "MTHEL 206A - Introduction to Mathematics Education"
  },
  {
    label: "MTHEL 298 - Mathematics Elective Topics 2"
  },
  {
    label: "MTHEL 398 - Mathematics Elective Topics 3"
  },
  {
    label: "MTHEL 498 - Mathematics Elective Topics 4"
  },
  {
    label: "MUSIC 100 - Understanding Music"
  },
  {
    label: "MUSIC 111 - Fundamentals of Music Theory"
  },
  {
    label: "MUSIC 116 - Music Ensemble"
  },
  {
    label: "MUSIC 117 - Music Ensemble"
  },
  {
    label: "MUSIC 140 - Popular Music and Culture"
  },
  {
    label: "MUSIC 216 - Music Ensemble"
  },
  {
    label: "MUSIC 217 - Music Ensemble"
  },
  {
    label: "MUSIC 222 - Conducting 1"
  },
  {
    label: "MUSIC 226 - Music Studio"
  },
  {
    label: "MUSIC 227 - Music Studio"
  },
  {
    label: "MUSIC 231 - Music Cognition"
  },
  {
    label: "MUSIC 240 - Introduction to Jazz"
  },
  {
    label: "MUSIC 245 - World Music"
  },
  {
    label: "MUSIC 246 - Soundtracks: Music in Film"
  },
  {
    label: "MUSIC 253 - Cathedral and Court: Music to 1600"
  },
  {
    label: "MUSIC 254 - Monteverdi to Mozart: Music from 1600-1800"
  },
  {
    label: "MUSIC 255 - The Romantic Century: Beethoven and Beyond"
  },
  {
    label: "MUSIC 256 - Music Since 1900"
  },
  {
    label: "MUSIC 260 - The Symphony"
  },
  {
    label: "MUSIC 261 - Opera"
  },
  {
    label: "MUSIC 270 - Music Theory 1"
  },
  {
    label: "MUSIC 271 - Music Theory 2"
  },
  {
    label: "MUSIC 275 - Music and Technology"
  },
  {
    label: "MUSIC 290 - Special Topics"
  },
  {
    label: "MUSIC 316 - Music Ensemble"
  },
  {
    label: "MUSIC 317 - Music Ensemble"
  },
  {
    label: "MUSIC 322 - Conducting 2"
  },
  {
    label: "MUSIC 326 - Music Studio"
  },
  {
    label: "MUSIC 327 - Music Studio"
  },
  {
    label: "MUSIC 332 - Aesthetics of Music"
  },
  {
    label: "MUSIC 334 - Women and Music"
  },
  {
    label: "MUSIC 355 - Music and Culture Travel Course"
  },
  {
    label: "MUSIC 361 - Art Song"
  },
  {
    label: "MUSIC 362 - Piano Literature"
  },
  {
    label: "MUSIC 363 - The Christian Hymn"
  },
  {
    label: "MUSIC 364 - Worship and its Music"
  },
  {
    label: "MUSIC 370 - Music Theory 3 (19th-Century)"
  },
  {
    label: "MUSIC 371 - Theory 4 (20th-Century)"
  },
  {
    label: "MUSIC 376 - Composition Seminar"
  },
  {
    label: "MUSIC 380 - Directed Study in Music"
  },
  {
    label: "MUSIC 381 - Directed Study in Music"
  },
  {
    label: "MUSIC 390 - Special Topics in Music"
  },
  {
    label: "MUSIC 391 - Special Topics in Music 2"
  },
  {
    label: "MUSIC 426 - Music Studio"
  },
  {
    label: "MUSIC 427 - Music Studio"
  },
  {
    label: "MUSIC 428 - Music Studio"
  },
  {
    label: "MUSIC 491 - Senior Research Seminar"
  },
  {
    label: "MUSIC 492 - Senior Honours Thesis"
  },
  {
    label: "NANO 701 - Fundamentals of Nanotechnology"
  },
  {
    label: "NANO 702 - Nanotechnology Tools"
  },
  {
    label: "NES 611 - Ancient Near Eastern Societies"
  },
  {
    label: "NATST 370 - Issues in Contemporary Native Communities in Canada"
  },
  {
    label: "NE 100 - Introduction to Nanotechnology Engineering"
  },
  {
    label: "NE 101 - Nanotechnology Engineering Practice"
  },
  {
    label: "NE 102 - Introduction to Nanomaterials Health Risk; Nanotechnology Engineering Practice"
  },
  {
    label: "NE 112 - Linear Algebra for Nanotechnology Engineers"
  },
  {
    label: "NE 113 - Introduction to Computational Methods"
  },
  {
    label: "NE 115 - Probability and Statistics"
  },
  {
    label: "NE 121 - Chemical Principles"
  },
  {
    label: "NE 140 - Linear Circuits"
  },
  {
    label: "NE 122 - Organic Chemistry for Nanotechnology Engineers"
  },
  {
    label: "NE 125 - Introduction to Materials Science and Engineering"
  },
  {
    label: "NE 131 - Physics for Nanotechnology Engineering"
  },
  {
    label: "NE 201 - Nanotoxicology; Nanotechnology Engineering Practice"
  },
  {
    label: "NE 202 - Nanomaterials and Environmental Impact; Nanotechnology Engineering Practice"
  },
  {
    label: "NE 216 - Advanced Calculus 1 for Nanotechnology Engineering"
  },
  {
    label: "NE 217 - Advanced Calculus 2 for Nanotechnology Engineering"
  },
  {
    label: "NE 220L - Materials Science and Engineering Laboratory"
  },
  {
    label: "NE 224 - Biochemistry for Nanotechnology Engineers"
  },
  {
    label: "NE 225 - Structure and Properties of Nanomaterials"
  },
  {
    label: "NE 226 - Characterization of Materials"
  },
  {
    label: "NE 226L - Laboratory Characterization Methods"
  },
  {
    label: "NE 232 - Quantum Mechanics"
  },
  {
    label: "NE 241 - Electromagnetism"
  },
  {
    label: "NE 242 - Semiconductor Physics and Devices"
  },
  {
    label: "NE 301 - Nanomaterials and Human Risks, Benefits; Nanotechnology Engineering Practice"
  },
  {
    label: "NE 302 - Nanotechnology Engineering Practice"
  },
  {
    label: "NE 453 - Special Topics in Nanotechnology Engineering"
  },
  {
    label: "NE 307 - Introduction to Nanosystems Design"
  },
  {
    label: "NE 318 - Continuum Mechanics for Nanotechnology Engineering"
  },
  {
    label: "NE 320L - Characterization of Materials Laboratory"
  },
  {
    label: "NE 330L - Macromolecular Science Laboratory"
  },
  {
    label: "NE 333 - Macromolecular Science"
  },
  {
    label: "NE 334 - Statistical Thermodynamics"
  },
  {
    label: "NE 335 - Soft Nanomaterials"
  },
  {
    label: "NE 336 - Micro and Nanosystem Computer-aided Design"
  },
  {
    label: "NE 340L - Microfabrication and Thin-film Technology Laboratory"
  },
  {
    label: "NE 343 - Microfabrication and Thin-film Technology"
  },
  {
    label: "NE 344 - Electronic Circuits"
  },
  {
    label: "NE 352 - Surfaces and Interfaces"
  },
  {
    label: "NE 353 - Nanoprobing and Lithography"
  },
  {
    label: "NE 401 - Nanotechnology Engineering Practice"
  },
  {
    label: "NE 402 - Nanotechnology Engineering Practice"
  },
  {
    label: "NE 408 - Nanosystems Design Project"
  },
  {
    label: "NE 409 - Nanosystems Design Project and Symposium"
  },
  {
    label: "NE 445 - Photonic Materials and Devices"
  },
  {
    label: "NE 450L - Nanoprobing and Lithography Laboratory"
  },
  {
    label: "NE 451 - Simulation Methods"
  },
  {
    label: "NE 452 - Special Topics in Nanoscale Simulations"
  },
  {
    label: "NE 454L - Nanotechnology Engineering Advanced Laboratory 1"
  },
  {
    label: "NE 455L - Nanotechnology Engineering Advanced Laboratory 2"
  },
  {
    label: "OPTOM 650 - Research Methodology for Vision Science"
  },
  {
    label: "PD 10 - Professional Responsibility in Computing"
  },
  {
    label: "NE 459 - Nanotechnology Engineering Research Project"
  },
  {
    label: "NE 461 - Micro and Nano-instrumentation"
  },
  {
    label: "NE 469 - Special Topics in Micro and Nano-instrumentation"
  },
  {
    label: "NE 471 - Nano-electronics"
  },
  {
    label: "NE 479 - Special Topics in Nanoelectronics"
  },
  {
    label: "NE 481 - Nanomedicine and Nanobiotechnology"
  },
  {
    label: "NES 625W - Myth and Burial Customs in the Ancient Near East"
  },
  {
    label: "NE 489 - Special Topics in Nanoscale Biosystems"
  },
  {
    label: "NE 491 - Nanostructured Materials"
  },
  {
    label: "NE 499 - Special Topics in Nanostructured Materials"
  },
  {
    label: "OPTOM 103 - Pathophysiology"
  },
  {
    label: "OPTOM 104 - Anatomy of the Eye 1"
  },
  {
    label: "OPTOM 105 - Medical Microbiology"
  },
  {
    label: "OPTOM 106 - Geometrical, Physical and Visual Optics"
  },
  {
    label: "OPTOM 108 - Histology of Tissues and Organs"
  },
  {
    label: "OPTOM 109 - Visual Perception 1: Perception of Light"
  },
  {
    label: "OPTOM 114 - Anatomy of the Eye 2"
  },
  {
    label: "OPTOM 124 - Human Gross Anatomy"
  },
  {
    label: "OPTOM 126 - Fundamentals of Visual Optics"
  },
  {
    label: "OPTOM 134 - Immunology"
  },
  {
    label: "OPTOM 143 - Physiology of the Eye"
  },
  {
    label: "OPTOM 152 - Clinical Techniques 1"
  },
  {
    label: "OPTOM 152L - Clinical Techniques 1 Laboratory"
  },
  {
    label: "OPTOM 215 - Systemic Disease"
  },
  {
    label: "OPTOM 216 - Ophthalmic Optics 1"
  },
  {
    label: "OPTOM 219 - Visual Perception 2: Monocular and Binocular Visual Processes"
  },
  {
    label: "OPTOM 231 - Introductory Clinical Pharmacology"
  },
  {
    label: "OPTOM 243 - Neurophysiology of Vision"
  },
  {
    label: "OPTOM 245 - Diseases of the Eye 1"
  },
  {
    label: "OPTOM 245L - Diseases of the Eye 1 Laboratory"
  },
  {
    label: "OPTOM 246 - Ophthalmic Optics 2"
  },
  {
    label: "OPTOM 250 - Optometric Jurisprudence"
  },
  {
    label: "OPTOM 252 - Clinical Techniques 2"
  },
  {
    label: "OPTOM 252L - Clinical Techniques 2 Laboratory"
  },
  {
    label: "OPTOM 255 - Diseases of the Eye 2"
  },
  {
    label: "OPTOM 255L - Diseases of the Eye 2 Laboratory"
  },
  {
    label: "OPTOM 261 - Clinical Ocular Pharmacology"
  },
  {
    label: "OPTOM 262 - Clinical Techniques 3"
  },
  {
    label: "OPTOM 270 - Public Health Optometry"
  },
  {
    label: "OPTOM 272 - Strabismus and Aniseikonia"
  },
  {
    label: "OPTOM 339 - Visual Perception 3:Colour Vision"
  },
  {
    label: "OPTOM 342A - Case Analysis and Optometric Therapies 1"
  },
  {
    label: "OPTOM 342B - Case Analysis and Optometric Therapies 2"
  },
  {
    label: "OPTOM 346 - Ophthalmic Optics 3"
  },
  {
    label: "OPTOM 347 - Contact Lenses 1"
  },
  {
    label: "OPTOM 347L - Contact Lenses 1 Laboratory"
  },
  {
    label: "OPTOM 348A - Optometry Clinics"
  },
  {
    label: "OPTOM 348B - Optometry Clinics"
  },
  {
    label: "OPTOM 360 - Professional Ethics and Optometric Communication"
  },
  {
    label: "OPTOM 365 - Ophthalmic Lasers and Refractive Surgery"
  },
  {
    label: "OPTOM 367 - Contact Lenses 2"
  },
  {
    label: "OPTOM 375 - Diseases of the Eye 3"
  },
  {
    label: "OPTOM 375L - Diseases of the Eye 3 Laboratory"
  },
  {
    label: "OPTOM 377 - Pediatric Optometry and Learning Disabilities"
  },
  {
    label: "OPTOM 380 - Practice Management"
  },
  {
    label: "OPTOM 385 - Clinical Medicine for Optometric Practice"
  },
  {
    label: "OPTOM 387 - Gerontology and Low Vision"
  },
  {
    label: "OPTOM 412 - Case Analysis 3"
  },
  {
    label: "OPTOM 441 - Optometry Research Proposal"
  },
  {
    label: "OPTOM 451 - Optometry Research Project"
  },
  {
    label: "OPTOM 458 - Clinical Clerkship 1"
  },
  {
    label: "OPTOM 460 - Advanced Study Topics"
  },
  {
    label: "OPTOM 461S - Optometry Seminar"
  },
  {
    label: "OPTOM 468 - Clinical Clerkship 2"
  },
  {
    label: "OPTOM 477 - Clinical Techniques 4"
  },
  {
    label: "OPTOM 478 - Clinical Clerkship 3"
  },
  {
    label: "OPTOM 488 - Exit Exam Remediation"
  },
  {
    label: "OPTOM 600 - Physiology of the Eye"
  },
  {
    label: "OPTOM 601 - Optical Characteristics of the Eye"
  },
  {
    label: "OPTOM 602 - Ocular Motility"
  },
  {
    label: "OPTOM 603 - Accommodation and Convergence"
  },
  {
    label: "OPTOM 604 - Visual Perception of Space"
  },
  {
    label: "OPTOM 605 - Psychophysics of Colour Vision"
  },
  {
    label: "OPTOM 606 - Radiation and the Visual Stimulus"
  },
  {
    label: "OPTOM 607 - Neurophysiology of Vision"
  },
  {
    label: "OPTOM 608 - Special Topics in Vision Science"
  },
  {
    label: "OPTOM 661 - Practical Advancement Data Analysis"
  },
  {
    label: "OPTOM 670 - Vision Science Part 1"
  },
  {
    label: "OPTOM 671 - Vision Science Part"
  },
  {
    label: "OPTOM 672 - Comparative Anatomy & Physiology of the Vertebrate Eye"
  },
  {
    label: "OPTOM 680 - Visual Development"
  },
  {
    label: "OPTOM 681 - Ageing and Vision"
  },
  {
    label: "PHYS 736 - Optical Properties of Semiconductors"
  },
  {
    label: "OPTOM 610 - The Comparative Anatomy and Physiology of the Vertbrate Eye"
  },
  {
    label: "OPTOM 611 - Epidemiology of Vision Anomalies"
  },
  {
    label: "OPTOM 613 - Visual Development"
  },
  {
    label: "OPTOM 614A - Clinical OptometryPart 1-MSc"
  },
  {
    label: "OPTOM 614B - Clinical Optometry Part 2 - MSc"
  },
  {
    label: "OPTOM 615 - Visual Psychophysics"
  },
  {
    label: "OPTOM 616 - Research Methodology for Vision Science"
  },
  {
    label: "OPTOM 620 - Data Analysis in Vision Science"
  },
  {
    label: "OPTOM 624A - Clinical Optometry Part 1 - PhD"
  },
  {
    label: "OPTOM 624B - Clinical Optometry Part 2-PhD"
  },
  {
    label: "OPTOM 628 - Special Topics in Vision Science"
  },
  {
    label: "OPTOM 651 - Data Analysis in Vision Science"
  },
  {
    label: "OPTOM 660 - Visual Psychophysics"
  },
  {
    label: "PHARM 601 - MSc Thesis Proposal"
  },
  {
    label: "OPTOM 630 - Principles of Clinical Instruction"
  },
  {
    label: "OPTOM 631 - Graduate Clinic"
  },
  {
    label: "OPTOM 690A - Vision Science Part 1"
  },
  {
    label: "OPTOM 690B - Vision Science Part II"
  },
  {
    label: "PACS 101 - Peace is Everybody's Business"
  },
  {
    label: "PACS 201 - Roots of Conflict, Violence, and Peace"
  },
  {
    label: "PACS 202 - Conflict Resolution"
  },
  {
    label: "PACS 203 - A History of Peace Movements"
  },
  {
    label: "PACS 301 - Special Topics in Peace and Conflict Studies 1"
  },
  {
    label: "PACS 302 - Special Topics in Peace and Conflict Studies 2"
  },
  {
    label: "PACS 311 - Doing Development: Issues of Justice and Peace"
  },
  {
    label: "PACS 312 - Quest for Peace in Literature and Film"
  },
  {
    label: "PACS 313 - Community Conflict Resolution"
  },
  {
    label: "PACS 314 - Conflict Resolution in the Schools"
  },
  {
    label: "PACS 316 - Violence, Non-violence, and War"
  },
  {
    label: "PACS 318 - Peacebuilding, Human Rights, and Civil Society"
  },
  {
    label: "PACS 320 - Christian Approaches to Peacemaking"
  },
  {
    label: "PACS 321 - Gender in War and Peace"
  },
  {
    label: "PACS 323 - Negotiation: Theories and Strategies"
  },
  {
    label: "PACS 324 - Human Rights, Peace, and Business"
  },
  {
    label: "PACS 326 - Religion and Peacebuilding"
  },
  {
    label: "PACS 327 - Cultural Approaches to Conflict Resolution"
  },
  {
    label: "PACS 328 - Fair Trade"
  },
  {
    label: "PACS 329 - Restorative Justice"
  },
  {
    label: "PACS 330 - War and Peace in Christian Theology"
  },
  {
    label: "PACS 331 - Trauma, Healing and Conflict Resolution"
  },
  {
    label: "PACS 390 - Internship"
  },
  {
    label: "PACS 391 - Conflict Resolution Skills"
  },
  {
    label: "PACS 395 - Peace and Conflict Studies Travel Course"
  },
  {
    label: "PACS 398 - Directed Readings in Peace and Conflict Studies"
  },
  {
    label: "PACS 399 - Directed Readings in Peace and Conflict Studies"
  },
  {
    label: "PACS 401 - Senior Research Seminar"
  },
  {
    label: "PACS 402 - Senior Research Seminar"
  },
  {
    label: "PACS 601 - Systems of Peace, Order, and Good Governance"
  },
  {
    label: "PACS 602 - The Practice of Peace"
  },
  {
    label: "PACS 603 - Building Civil Society"
  },
  {
    label: "PACS 604 - Conflict Analysis"
  },
  {
    label: "PACS 605 - Conflict Transformation and Peacebuilding"
  },
  {
    label: "PACS 610 - Contemporary Nonviolent Movements"
  },
  {
    label: "PACS 611 - Reconciliation"
  },
  {
    label: "PACS 612 - Culture, Religion, and Peacebuilding"
  },
  {
    label: "PACS 620 - Special Topics in Peace and Conflict Studies"
  },
  {
    label: "PACS 621 - Peace Research"
  },
  {
    label: "PACS 625 - Internship"
  },
  {
    label: "PACS 626 - Conflict Resolution Skills Training"
  },
  {
    label: "PACS 630 - Governance of Global Economy"
  },
  {
    label: "PACS 631 - Theories of Globalization"
  },
  {
    label: "PACS 632 - Post-War Reconstruction and State Building"
  },
  {
    label: "PACS 633 - Human Rights in the Globalized World"
  },
  {
    label: "PACS 634 - Security Ontology-Theory"
  },
  {
    label: "PACS 635 - Security Governance: Actors, Institutions, and Issues"
  },
  {
    label: "PACS 650 - Sustainable Cities"
  },
  {
    label: "PACS 651 - Economics for Sustainable Development"
  },
  {
    label: "PACS 652 - Water and Security"
  },
  {
    label: "PACS 660 - Justice and Gender"
  },
  {
    label: "PACS 661 - Ethnic Conflict and Conflict Resolution I"
  },
  {
    label: "PACS 662 - Conflict and Conflict Resolution"
  },
  {
    label: "PACS 670 - War and Peace in Christian Thought"
  },
  {
    label: "PACS 671 - The Bible and Peace"
  },
  {
    label: "PACS 672 - Christianity's Encounter with Other Faiths"
  },
  {
    label: "PD 1 - Career Fundamentals"
  },
  {
    label: "PD 2 - Critical Reflection and Report Writing"
  },
  {
    label: "PD 3 - Communication"
  },
  {
    label: "PD 4 - Teamwork"
  },
  {
    label: "PD 5 - Project Management"
  },
  {
    label: "PD 6 - Problem Solving"
  },
  {
    label: "PD 7 - Conflict Resolution"
  },
  {
    label: "PD 8 - Intercultural Skills"
  },
  {
    label: "PD 9 - Ethical Decision Making"
  },
  {
    label: "PD 20 - Engineering Workplace Skills I: Developing Reasoned Conclusions"
  },
  {
    label: "PD 21 - Engineering Workplace Skills II: Developing Effective Plans"
  },
  {
    label: "PD 22 - Professionalism and Ethics in Engineering Practice"
  },
  {
    label: "PDARCH 1 - Portfolio Development"
  },
  {
    label: "PDARCH 2 - Co-op Fundamentals for Architects"
  },
  {
    label: "PHARM 120 - Introduction to the Profession of Pharmacy"
  },
  {
    label: "PDARCH 3 - Electronic Communications and Web Design"
  },
  {
    label: "PDARCH 4 - Writing, Editing and Research"
  },
  {
    label: "PDPHRM 1 - Co-op Fundamentals"
  },
  {
    label: "PDPHRM 2 - Communication for Pharmacy"
  },
  {
    label: "PDPHRM 3 - Drug Distribution for Pharmacy"
  },
  {
    label: "PDPHRM 4 - Patient Safety for Pharmacy"
  },
  {
    label: "PDPHRM 5 - Patient Care for Pharmacy"
  },
  {
    label: "PDPHRM 6 - Drug Information for Pharmacy"
  },
  {
    label: "PDPHRM 7 - Interprofessional Relations"
  },
  {
    label: "PDPHRM 8 - Pharmacy Practice - Management and Leadership"
  },
  {
    label: "PHARM 110 - Systems Approach to the Study of the Human Body 1"
  },
  {
    label: "PHARM 111 - Systems Approach to the Study of the Human Body 2"
  },
  {
    label: "PHARM 120A - Introduction to the Profession of Pharmacy"
  },
  {
    label: "PHARM 120B - Introduction to the Profession of Pharmacy"
  },
  {
    label: "PHARM 124 - Pharmaceutics 1"
  },
  {
    label: "PHARM 125 - Pharmaceutics 2"
  },
  {
    label: "PHARM 126 - Pharmaceutical Calculations"
  },
  {
    label: "PHARM 127 - Professional Communication Skills in Pharmacy Practice"
  },
  {
    label: "PHARM 128 - Professional Communication Skills in Pharmacy Practice 2"
  },
  {
    label: "PHARM 129 - Professional Practice 1"
  },
  {
    label: "PHARM 130 - Professional Practice 2"
  },
  {
    label: "PHARM 151 - Foundation and Application of Health Informatics"
  },
  {
    label: "PHARM 131 - Professional Practice Laboratory 1"
  },
  {
    label: "PHARM 141 - Introduction to Medicinal Chemistry, Toxicology and Pharmacology"
  },
  {
    label: "PHARM 150 - Introduction to Applied Pharmaceutical Sciences"
  },
  {
    label: "PHARM 220 - Integrated Patient Focused Care 1"
  },
  {
    label: "PHARM 221 - Integrated Patient Focused Care 2"
  },
  {
    label: "PHARM 222 - Integrated Patient Focused Care 3"
  },
  {
    label: "PHARM 223 - Integrated Patient Focused Care 4"
  },
  {
    label: "PHARM 224 - Pharmacokinetic Fundamentals"
  },
  {
    label: "PHARM 227 - Health Systems in Society"
  },
  {
    label: "PHARM 228 - Professional Practice 3"
  },
  {
    label: "PHARM 229 - Professional Practice 4"
  },
  {
    label: "PHARM 232 - Medical Microbiology"
  },
  {
    label: "PHARM 232L - Medical Microbiology Laboratory 1"
  },
  {
    label: "PHARM 233L - Medical Microbiology Laboratory 2"
  },
  {
    label: "PHARM 237 - Applications of Analyses and Devices in Pharmacy and Medicine"
  },
  {
    label: "PHARM 252 - Institutional Pharmacy Practice"
  },
  {
    label: "PHARM 378 - Advanced Women's Health Pharmacotherapeutics"
  },
  {
    label: "PHARM 262 - Foundation and Application of Health Informatics"
  },
  {
    label: "PHARM 290 - Seminars in Pharmacy 1"
  },
  {
    label: "PHARM 320 - Integrated Patient Focused Care 5"
  },
  {
    label: "PHARM 321 - Integrated Patient Focused Care 6"
  },
  {
    label: "PHARM 322 - Clinical Application of Pharmaceutical Sciences"
  },
  {
    label: "PHARM 329 - Professional Practice 5"
  },
  {
    label: "PHARM 350 - Fundamentals of Business Administration and Management"
  },
  {
    label: "PHARM 391 - Seminars in Pharmacy 2"
  },
  {
    label: "PHARM 361 - Advanced Compounding"
  },
  {
    label: "PHARM 362 - Advanced Patient Self Care"
  },
  {
    label: "PHARM 363 - Global Infectious Disease Management"
  },
  {
    label: "PHARM 364 - The Pharmacist as Educator"
  },
  {
    label: "PHARM 365 - Biotech Pharma Business Strategy"
  },
  {
    label: "PHARM 366 - Concepts in Nutritional Sciences"
  },
  {
    label: "PHARM 367 - Pediatric Pharmacy"
  },
  {
    label: "PHARM 368 - Advanced Drug Information & Evidence-Based Medicine"
  },
  {
    label: "PHARM 369 - Global Medical Aid"
  },
  {
    label: "PHARM 370 - Personal & New Venture Financial Management"
  },
  {
    label: "PHARM 371 - Advanced Topics in Health Economics"
  },
  {
    label: "PHARM 372 - Strategic Global Health & Pharmacy Practice"
  },
  {
    label: "PHARM 373 - Healthcare Delivery in Rural and Underserved Populations"
  },
  {
    label: "PHARM 374 - Complementary and Alternate Medicine"
  },
  {
    label: "PHARM 375 - Substance Abuse & Chemical Dependency"
  },
  {
    label: "PHARM 376 - Practicing Pharmacy with Diverse Populations"
  },
  {
    label: "PHARM 377 - Drug-Induced Disease"
  },
  {
    label: "PHARM 400 - Independent Study 1"
  },
  {
    label: "PHARM 401 - Independent Study 2"
  },
  {
    label: "PHARM 415A - Clinical Rotation: Integrated Care"
  },
  {
    label: "PHARM 415B - Clinical Rotation: Integrated Care"
  },
  {
    label: "PHARM 420 - Integrated Patient Focused Care 7"
  },
  {
    label: "PHARM 421 - Integrated Patient Focused Care 8"
  },
  {
    label: "PHARM 422 - Integrated Patient Focused Care 9"
  },
  {
    label: "PHARM 428 - Professional Practice 4"
  },
  {
    label: "PHARM 460 - Leadership in Pharmacy"
  },
  {
    label: "PHARM 461 - Advanced Patient Safety"
  },
  {
    label: "PHARM 462 - Interprofessional Case Management"
  },
  {
    label: "PHARM 464 - Advanced Therapeutic Concepts in Oncology"
  },
  {
    label: "PHARM 465 - Critical Care & Emergency Medicine for Pharmacists"
  },
  {
    label: "PHARM 466 - Advanced Geriatric Care"
  },
  {
    label: "PHARM 467 - Management of Oral Anticoagulation Therapy"
  },
  {
    label: "PHARM 468 - Clinical Neurology in Family Practice"
  },
  {
    label: "PHARM 469 - Pharmacoepidemiology and Pharmacy Practice"
  },
  {
    label: "PHARM 470 - Advanced Medical Writing"
  },
  {
    label: "PHARM 471 - Selected Topics in Medicinal Chemistry"
  },
  {
    label: "PHARM 472 - Community Practice in a Changing Environment"
  },
  {
    label: "PHARM 490 - Seminars in Pharmacy 2"
  },
  {
    label: "PHARM 491 - Seminars in Pharmacy 3"
  },
  {
    label: "PHARM 495 - Advanced Topics in Patient Focused Care"
  },
  {
    label: "PHARM 602 - Grant Writing in the Sciences"
  },
  {
    label: "PHARM 603 - Selected Topics in Medicinal Chemistry"
  },
  {
    label: "PHARM 604 - Gene Therapy"
  },
  {
    label: "PHARM 605 - Physical Chemistry and Application of Surfactants"
  },
  {
    label: "PHARM 606 - Neuroscience in the 21st Century"
  },
  {
    label: "PHARM 607 - Advanced Pharmaceutical Analysis"
  },
  {
    label: "PHARM 608A - Selected Topics in Pharmaceutical Sciences 1"
  },
  {
    label: "PHARM 609 - Advanced Pharmacokinetics"
  },
  {
    label: "PHARM 610 - Topics in Drug Development"
  },
  {
    label: "PHARM 611 - Special Topics in Pharmacy Practice"
  },
  {
    label: "PHIL 100J - Introduction to Philosophy"
  },
  {
    label: "PHIL 110A - Introduction to Philosophy: Knowledge and Reality"
  },
  {
    label: "PHIL 110B - Introduction to Philosophy: Ethics and Values"
  },
  {
    label: "PHIL 118J - Virtue and the Good Life"
  },
  {
    label: "PHIL 120J - The Meaning of Life"
  },
  {
    label: "PHIL 145 - Critical Thinking"
  },
  {
    label: "PHIL 200J - Aristotelian Logic"
  },
  {
    label: "PHIL 201 - Philosophy of Sex and Love"
  },
  {
    label: "PHIL 202 - Gender Issues"
  },
  {
    label: "PHIL 204J - Philosophy and Culture"
  },
  {
    label: "PHIL 208 - Philosophy Through Science Fiction"
  },
  {
    label: "PHIL 209 - Philosophy in Literature"
  },
  {
    label: "PHIL 210J - Human Nature"
  },
  {
    label: "PHIL 215 - Professional and Business Ethics"
  },
  {
    label: "PHIL 216 - Probability and Decision Making"
  },
  {
    label: "PHIL 218J - Foundations of Ethics"
  },
  {
    label: "PHIL 219J - Practical Ethics"
  },
  {
    label: "PHIL 220 - Moral Issues"
  },
  {
    label: "PHIL 221 - Ethics"
  },
  {
    label: "PHIL 224 - Environmental Ethics"
  },
  {
    label: "PHIL 226 - Biomedical Ethics"
  },
  {
    label: "PHIL 227 - Culture and Ethics"
  },
  {
    label: "PHIL 230J - God and Philosophy"
  },
  {
    label: "PHIL 237 - Introduction to the Philosophy of Religion"
  },
  {
    label: "PHIL 240 - Introduction to Formal Logic"
  },
  {
    label: "PHIL 245 - Critical Thinking About Science"
  },
  {
    label: "PHIL 250A - Great Works: Ancient and Medieval"
  },
  {
    label: "PHIL 250B - Great Works: Modern"
  },
  {
    label: "PHIL 255 - Philosophy of Mind"
  },
  {
    label: "PHIL 256 - Introduction to Cognitive Science"
  },
  {
    label: "PHIL 258 - Introduction to the Philosophy of Science"
  },
  {
    label: "PHIL 259 - Philosophy of Technology"
  },
  {
    label: "PHIL 265 - The Existentialist Experience"
  },
  {
    label: "PHIL 271 - Special Topics"
  },
  {
    label: "PHIL 305J - Philosophy of Nature"
  },
  {
    label: "PHIL 306J - Philosophy of Science"
  },
  {
    label: "PHIL 311 - Philosophy of Education"
  },
  {
    label: "PHIL 315 - Ethics and The Engineering Profession"
  },
  {
    label: "PHIL 318J - Philosophy and the Family"
  },
  {
    label: "PHIL 319J - Ethics of End-of-Life Care"
  },
  {
    label: "PHIL 324 - Social and Political Philosophy"
  },
  {
    label: "PHIL 327 - Philosophy of Law"
  },
  {
    label: "PHIL 328 - Human Rights"
  },
  {
    label: "PHIL 329 - Violence, Non-violence, and War"
  },
  {
    label: "PHIL 331 - Philosophy of Art"
  },
  {
    label: "PHIL 341 - Intermediate Classical Logic"
  },
  {
    label: "PHIL 342 - Non-Standard Logics"
  },
  {
    label: "PHIL 350 - Topics in Epistemology"
  },
  {
    label: "PHIL 362 - Philosophy of the Social Sciences"
  },
  {
    label: "PHIL 355 - Topics in Metaphysics"
  },
  {
    label: "PHIL 359 - Philosophy of Mathematics"
  },
  {
    label: "PHIL 363 - Philosophy of Language"
  },
  {
    label: "PHIL 371 - Special Topics"
  },
  {
    label: "PHIL 378 - American Philosophy"
  },
  {
    label: "PHIL 380 - History of Ancient Philosophy"
  },
  {
    label: "PHIL 381 - History of Ancient Philosophy 2"
  },
  {
    label: "PHIL 382 - Medieval Philosophy"
  },
  {
    label: "PHIL 383 - Medieval Philosophy 2"
  },
  {
    label: "PHIL 384 - History of Modern Philosophy"
  },
  {
    label: "PHIL 385 - History of Modern Philosophy 2"
  },
  {
    label: "PHIL 386 - 19th- and 20th-Century Philosophy"
  },
  {
    label: "PHIL 402 - Studies in Feminist Philosophy/Philosophy of Sex"
  },
  {
    label: "PHIL 403 - Studies in Ancient Philosophy"
  },
  {
    label: "PHIL 404 - Studies in Medieval Philosophy"
  },
  {
    label: "PHIL 405 - Studies in Modern Philosophy"
  },
  {
    label: "PHIL 407 - Studies in 19th- and 20th-Century Philosophy"
  },
  {
    label: "PHIL 408 - Early 20th Century Philosophy"
  },
  {
    label: "PHIL 416 - Studies in Probability and Decision Theory"
  },
  {
    label: "PHIL 418J - Ethics and Society"
  },
  {
    label: "PHIL 420 - Studies in Ethics"
  },
  {
    label: "PHIL 422 - Studies in Political Philosophy"
  },
  {
    label: "PHIL 441 - Studies in Logic"
  },
  {
    label: "PHIL 447 - Seminar in Cognitive Science"
  },
  {
    label: "PHIL 450J - Being and Existence"
  },
  {
    label: "PHIL 451J - Thomas Aquinas"
  },
  {
    label: "PHIL 452 - Studies in Epistemology"
  },
  {
    label: "PHIL 455 - Studies in Metaphysics"
  },
  {
    label: "PHIL 458 - Studies in the Philosophy of Science"
  },
  {
    label: "PHIL 459 - Studies in the Philosophy of Physics"
  },
  {
    label: "PHIL 463 - Studies in the Philosophy of Language"
  },
  {
    label: "PHIL 471 - Special Topics"
  },
  {
    label: "PHIL 472 - Special Topics"
  },
  {
    label: "PHIL 481 - Special Topics"
  },
  {
    label: "PHIL 482 - Special Topics"
  },
  {
    label: "PHIL 498 - Directed Reading in Special Areas"
  },
  {
    label: "PHIL 670 - Fall Term Reading Course"
  },
  {
    label: "PHIL 671 - Winter Term Reading course"
  },
  {
    label: "PHIL 672 - Spring Term Reading Course"
  },
  {
    label: "PHIL 673 - Graduate Courses"
  },
  {
    label: "PHYS 735 - Photoconductivity and Luminescence"
  },
  {
    label: "PHIL 674 - Graduate Courses"
  },
  {
    label: "PHIL 680A - Departmental Graduate Seminar"
  },
  {
    label: "PHIL 680B - Departmental Graduate Seminar"
  },
  {
    label: "PHYS 191 - Electricity and Magnetism"
  },
  {
    label: "PHIL 696 - Directed Research for MA Candidates"
  },
  {
    label: "PHIL 698 - Research Area Tutorials for PhD"
  },
  {
    label: "PHS 601 - Foundations of Public Health"
  },
  {
    label: "PHS 602 - Capstone Integrative Seminar for Public Health"
  },
  {
    label: "PHS 603 - Health Policy in Public Health"
  },
  {
    label: "PHS 604 - Public Health and the Environment"
  },
  {
    label: "PHS 605 - Quantitative Methods and Analysis"
  },
  {
    label: "PHS 606 - Principles of Epidemiology for Public Health"
  },
  {
    label: "PHS 607 - Social, Cultural and Behavioural Aspects of Public Health I"
  },
  {
    label: "PHS 608 - Health and Risk Communication in Public Health"
  },
  {
    label: "PHS 609 - Management and Administration of Public Health Services"
  },
  {
    label: "PHS 611 - The Health Care System"
  },
  {
    label: "PHS 612 - Data Structures and Standards in Health Informatics"
  },
  {
    label: "PHS 613 - Information Technology for the Health Professional"
  },
  {
    label: "PHS 614 - Foundations of Program Evaluation"
  },
  {
    label: "PHS 615 - Requirements Specification and Analysis in Health Systems"
  },
  {
    label: "PHS 616 - Decision Making and Systems Thinking in Health Informatics"
  },
  {
    label: "PHS 617 - Population Intervention for Disease Prevention and Health Promotion"
  },
  {
    label: "PHS 623 - Risk and Exposure Assessment in Public Health"
  },
  {
    label: "PHS 624 - Environmental Toxicology in Public Health"
  },
  {
    label: "PHS 631 - Public Health Surveillance"
  },
  {
    label: "PHS 632 - Health Economics and Public Health"
  },
  {
    label: "PHS 633 - Water Quality and Public Health"
  },
  {
    label: "PHS 634 - Environmental Epidemiology for Public Health"
  },
  {
    label: "PHS 635 - Public Health, Environment and Planning"
  },
  {
    label: "PHS 636 - Applied Epidemiology: Advanced Concepts and Applications for Public Health"
  },
  {
    label: "PHS 637 - Public Health Informatics"
  },
  {
    label: "PHS 638 - Selected Topics in Public Health"
  },
  {
    label: "PHS 641 - Professional Experience Practicum"
  },
  {
    label: "PHYS 711 - Scattering Theory"
  },
  {
    label: "PHS 661 - Geographic Information  Systems and Public Health"
  },
  {
    label: "PHS 662 - Global Health"
  },
  {
    label: "PHS 663 - Human Development  and Health"
  },
  {
    label: "PHYS 1 - Pre-University Physics"
  },
  {
    label: "PHYS 10 - Physics Seminar"
  },
  {
    label: "PHYS 111 - Physics 1"
  },
  {
    label: "PHYS 111L - Physics 1 Laboratory"
  },
  {
    label: "PHYS 112 - Physics 2"
  },
  {
    label: "PHYS 112L - Physics 2 Laboratory"
  },
  {
    label: "PHYS 115 - Mechanics"
  },
  {
    label: "PHYS 121 - Mechanics"
  },
  {
    label: "PHYS 121L - Mechanics Laboratory"
  },
  {
    label: "PHYS 122 - Waves, Electricity and Magnetism"
  },
  {
    label: "PHYS 139 - Scientific Computer Programming"
  },
  {
    label: "PHYS 122L - Waves, Electricity and Magnetism Laboratory"
  },
  {
    label: "PHYS 124 - Modern Physics"
  },
  {
    label: "PHYS 125 - Physics for Engineers"
  },
  {
    label: "PHYS 131L - Mechanics Laboratory"
  },
  {
    label: "PHYS 132L - Waves, Electricity, Magnetism and Measurement Laboratory"
  },
  {
    label: "PHYS 175 - Introduction to the Universe"
  },
  {
    label: "PHYS 175L - Introduction to the Universe Laboratory"
  },
  {
    label: "PHYS 222 - Electricity and Magnetism 1"
  },
  {
    label: "PHYS 223 - Electricity and Magnetism 2"
  },
  {
    label: "PHYS 224 - Electricity and Magnetism for Life and Medical Physics"
  },
  {
    label: "PHYS 224L - Electricity and Magnetism Laboratory"
  },
  {
    label: "PHYS 225 - Modeling Life Physics"
  },
  {
    label: "PHYS 226 - Geometrical Optics"
  },
  {
    label: "PHYS 232L - Measurement Laboratory"
  },
  {
    label: "PHYS 233 - Introduction to Quantum Mechanics"
  },
  {
    label: "PHYS 234 - Quantum Physics 1"
  },
  {
    label: "PHYS 236 - Computational Physics 1"
  },
  {
    label: "PHYS 239 - Computational Physics 2"
  },
  {
    label: "PHYS 241 - Electricity and Magnetism"
  },
  {
    label: "PHYS 242 - Electricity and Magnetism 1"
  },
  {
    label: "PHYS 242L - Electricity and Magnetism Laboratory"
  },
  {
    label: "PHYS 246 - Physical Optics"
  },
  {
    label: "PHYS 256 - Geometrical and Physical Optics"
  },
  {
    label: "PHYS 256L - Optics Laboratory"
  },
  {
    label: "PHYS 260L - Intermediate Physics Laboratory"
  },
  {
    label: "PHYS 263 - Classical Mechanics and Special Relativity"
  },
  {
    label: "PHYS 270 - Astronomical Observations, Instrumentation and Data Analysis"
  },
  {
    label: "PHYS 270L - Astronomical Observations, Instrumentation and Data Analysis Laboratory"
  },
  {
    label: "PHYS 275 - Planets"
  },
  {
    label: "PHYS 280 - Introduction to Biophysics"
  },
  {
    label: "PHYS 334 - Quantum Physics 2"
  },
  {
    label: "PHYS 335 - Condensed Matter Physics"
  },
  {
    label: "PHYS 339 - Scientific Computation 2"
  },
  {
    label: "PHYS 342 - Electricity and Magnetism 2"
  },
  {
    label: "PHYS 358 - Thermal Physics"
  },
  {
    label: "PHYS 359 - Statistical Mechanics"
  },
  {
    label: "PHYS 360A - Modern Physics Laboratory 1"
  },
  {
    label: "PHYS 360B - Modern Physics Laboratory 2"
  },
  {
    label: "PHYS 363 - Intermediate Classical Mechanics"
  },
  {
    label: "PHYS 364 - Mathematical Physics 1"
  },
  {
    label: "PHYS 365 - Mathematical Physics 2"
  },
  {
    label: "PHYS 381 - Cellular Biophysics"
  },
  {
    label: "PHYS 370L - Astronomy Laboratory 1"
  },
  {
    label: "PHYS 375 - Stars"
  },
  {
    label: "PHYS 380 - Molecular and Cellular Biophysics"
  },
  {
    label: "PHYS 383 - Medical Physics"
  },
  {
    label: "PHYS 391 - Electronics"
  },
  {
    label: "PHYS 391L - Electronics Laboratory"
  },
  {
    label: "PHYS 392 - Scientific Measurement and Control"
  },
  {
    label: "PHYS 392L - Scientific Measurement and Control Laboratory"
  },
  {
    label: "PHYS 393 - Physical Optics"
  },
  {
    label: "PHYS 394 - Light-Matter Interactions"
  },
  {
    label: "PHYS 395 - Biophysics of Therapeutic Methods"
  },
  {
    label: "PHYS 396 - Biophysics of Imaging"
  },
  {
    label: "PHYS 434 - Quantum Physics 3"
  },
  {
    label: "PHYS 435 - Current Topics in Condensed Matter Physics"
  },
  {
    label: "PHYS 437A - Research Project"
  },
  {
    label: "PHYS 441A - Electromagnetic Theory"
  },
  {
    label: "PHYS 437B - Research Project (continued)"
  },
  {
    label: "PHYS 442 - Electricity and Magnetism 3"
  },
  {
    label: "PHYS 444 - Introduction to Particle Physics"
  },
  {
    label: "PHYS 454 - Quantum Theory 2"
  },
  {
    label: "PHYS 460A - Advanced Laboratory 1"
  },
  {
    label: "PHYS 460B - Advanced Laboratory 2"
  },
  {
    label: "PHYS 461 - Nanophysics"
  },
  {
    label: "PHYS 467 - Introduction to Quantum Information Processing"
  },
  {
    label: "PHYS 468 - Introduction to the Implementation of Quantum Information Processing"
  },
  {
    label: "PHYS 475 - Cosmology"
  },
  {
    label: "PHYS 480 - Radiation Biophysics"
  },
  {
    label: "PHYS 476 - Introduction to General Relativity"
  },
  {
    label: "PHYS 490 - Special topics in Physics"
  },
  {
    label: "PHYS 601 - Perimeter Scholars International Quantum Field Theory 1"
  },
  {
    label: "PHYS 602 - Perimeter Scholars International Statistical Physics"
  },
  {
    label: "PHYS 603 - Perimeter Scholars International Quantum Field Theory 2"
  },
  {
    label: "PHYS 604 - Perimeter Scholars International Relativity"
  },
  {
    label: "PHYS 605 - Perimeter Scholars International Quantum Theory"
  },
  {
    label: "PHYS 606 - Perimeter Scholars International Information and Data Analysis"
  },
  {
    label: "PHYS 607 - Perimeter Scholars International Dynamical Systems"
  },
  {
    label: "PHYS 608 - Perimeter Scholars International Computation"
  },
  {
    label: "PHYS 609 - Perimeter Scholars International Conformal Field Theory"
  },
  {
    label: "PHYS 610 - Perimeter Scholars International Mathematics Physics"
  },
  {
    label: "PHYS 611 - PSI Condensed Matter Physics"
  },
  {
    label: "PHYS 621 - Perimeter Scholars International Cosmology"
  },
  {
    label: "PHYS 622 - Perimeter Scholars International Standard Model"
  },
  {
    label: "PHYS 623 - Perimeter Scholars International String Theory"
  },
  {
    label: "PHYS 624 - Perimeter Scholars International Mathematical Physics Topics"
  },
  {
    label: "PHYS 625 - Perimeter Scholars International Supersymmetry"
  },
  {
    label: "PHYS 635 - Perimeter Scholars International Quantum Information Review"
  },
  {
    label: "PHYS 636 - Perimeter Scholars International Gravitational Physics Review"
  },
  {
    label: "PHYS 637 - Perimeter Scholars International Condensed Matter Theory"
  },
  {
    label: "PHYS 638 - Perimeter Scholars International Quantum Gravity"
  },
  {
    label: "PHYS 639 - Perimeter Scholars International Foundations of Quantum Theory"
  },
  {
    label: "PHYS 641 - Perimeter Scholars International Explorations in Quantum Information"
  },
  {
    label: "PHYS 642 - Perimeter Scholars International Explorations in Numerical Gravitational Physics"
  },
  {
    label: "PHYS 643 - Perimeter Scholars International Explorations in Condensed Matter Theory"
  },
  {
    label: "PHYS 644 - Perimeter Scholars International Explorations in Quantum Gravity"
  },
  {
    label: "PHYS 645 - Perimeter Scholars International Explorations in Foundations of Quantum Theory"
  },
  {
    label: "PHYS 646 - Perimeter Scholars International Explorations in Particle Physics"
  },
  {
    label: "PHYS 647 - Perimeter Scholars International Explorations in String Theory"
  },
  {
    label: "PHYS 648 - Perimeter Scholars International Explorations in Complex Systems"
  },
  {
    label: "PHYS 649 - Perimeter Scholars International Explorations in Cosmology"
  },
  {
    label: "PHYS 701 - Quantum Mechanics 1"
  },
  {
    label: "PHYS 702 - Quantum Mechanics 2"
  },
  {
    label: "PHYS 703 - Introduction to Quantum Field Theory"
  },
  {
    label: "PHYS 704 - Statistical Physics 1"
  },
  {
    label: "PHYS 705 - Statistical Physics 2"
  },
  {
    label: "PHYS 706 - Electromagnetic Theory"
  },
  {
    label: "PHYS 708 - Applications of Group Theory"
  },
  {
    label: "PHYS 709 - Green's Function Method"
  },
  {
    label: "PHYS 710 - Atomic Physics"
  },
  {
    label: "PHYS 712 - Special Topics in Theoretical Physics"
  },
  {
    label: "PHYS 713 - Molecular Physics"
  },
  {
    label: "PHYS 714 - Nonlinear Optics"
  },
  {
    label: "PHYS 715 - Nuclear Physics"
  },
  {
    label: "PHYS 716 - Special Topics in Subatomic and Nuclear Physcis"
  },
  {
    label: "PHYS 717 - Intermediate and High Energy Physics"
  },
  {
    label: "PHYS 718 - Special Topics in Subatomic and Nuclear Physics"
  },
  {
    label: "PHYS 730 - Liquid State Physics"
  },
  {
    label: "PHYS 731 - Solid State Physics 1"
  },
  {
    label: "PHYS 732 - Solid State Physics 2"
  },
  {
    label: "PHYS 733 - Special Topics in Theoretical Condensed Matter Physics"
  },
  {
    label: "PHYS 737 - Special Topics in Surface Physics"
  },
  {
    label: "PHYS 738 - Special Topics in Condensed Matter and Materials Physics"
  },
  {
    label: "PHYS 745 - Special Topics in Experimental Physics"
  },
  {
    label: "PHYS 748 - Microprocessors in the Physics Laboratory"
  },
  {
    label: "PHYS 747 - Optical Electronics"
  },
  {
    label: "PHYS 749 - Special Topics in Experimental Physics"
  },
  {
    label: "PHYS 751 - Clinical Applications of Physics in Medicine"
  },
  {
    label: "PHYS 752 - Molecular Biophysics"
  },
  {
    label: "PHYS 754 - Special Topics in Biophysics"
  },
  {
    label: "PHYS 757 - Special Topics in Biophysics"
  },
  {
    label: "PHYS 767 - Quantum Information Processing"
  },
  {
    label: "PHYS 768 - Special Topics in Quantum Information Processing"
  },
  {
    label: "PHYS 769 - Special Topics in quantum Information Processing"
  },
  {
    label: "PHYS 771 - Special Lecture and Reading Course"
  },
  {
    label: "PHYS 772 - Selected Seminar & Module Course"
  },
  {
    label: "PHYS 773 - Special Topics in Physics"
  },
  {
    label: "PHYS 775 - Inter-Institution Exchange"
  },
  {
    label: "PHYS 776 - Special Topics in Physics"
  },
  {
    label: "PHYS 777 - Special Topics in Physics"
  },
  {
    label: "PHYS 780 - Galactic Structure"
  },
  {
    label: "PHYS 781 - Fundamentals of Astrophysics"
  },
  {
    label: "PHYS 784 - Advanced techniques in General Relativity and Applications to Black Holes"
  },
  {
    label: "PHYS 785 - Introduction to Quantum Field Theory for Cosmology"
  },
  {
    label: "PHYS 786 - Introduction to General Relativity with Applications to Cosmology"
  },
  {
    label: "PHYS 787 - Cosmology"
  },
  {
    label: "PHYS 788 - Special Topics in Astrophysics"
  },
  {
    label: "PHYS 789 - Special Topics in Astrophysics"
  },
  {
    label: "PHYS 790 - Special Topics in Gravitation and Cosmology"
  },
  {
    label: "PHYS 890 - Inter-university Graduate Course in Biophysics"
  },
  {
    label: "PHYS 791 - Special Topics in Gravitation and Cosmology"
  },
  {
    label: "PLAN 100 - The Evolution of Planning"
  },
  {
    label: "PLAN 102 - Professional Communication"
  },
  {
    label: "PLAN 103 - Planning, Administration, and Finance"
  },
  {
    label: "PLAN 104 - Perspectives on Planning"
  },
  {
    label: "PLAN 105 - Introduction to Planning Analysis"
  },
  {
    label: "PLAN 110 - Visual Approaches to Design and Communication"
  },
  {
    label: "PLAN 203 - Transportation Planning and Analysis"
  },
  {
    label: "PLAN 210 - Urban Planning Design and the Environment"
  },
  {
    label: "PLAN 233 - People and Plans"
  },
  {
    label: "PLAN 261 - Urban and Metropolitan Planning and Development"
  },
  {
    label: "PLAN 281 - Introduction to Geographic Information Systems (GIS)"
  },
  {
    label: "PLAN 300 - Planning Theory"
  },
  {
    label: "PLAN 309 - Site Planning and Design Studio"
  },
  {
    label: "PLAN 313 - Community Design Studio"
  },
  {
    label: "PLAN 320 - Economic Analyses for Regional Planning"
  },
  {
    label: "PLAN 333 - Neighbourhood and Community Planning"
  },
  {
    label: "PLAN 340 - Canadian Environmental Policy and Politics"
  },
  {
    label: "PLAN 341 - Conservation/Resource Management of the Built Environment"
  },
  {
    label: "PLAN 346 - Advanced Tools for Planning: Public Participation and Mediation"
  },
  {
    label: "PLAN 349 - Urban Form and Internal Spatial Structure"
  },
  {
    label: "PLAN 350 - Research Methods for Planners"
  },
  {
    label: "PLAN 351 - Multivariate Statistics"
  },
  {
    label: "PLAN 353 - Spatial Analysis"
  },
  {
    label: "PLAN 362 - Regional Planning and Economic Development"
  },
  {
    label: "PLAN 381 - Advanced Geographic Information Systems"
  },
  {
    label: "PLAN 387 - Spatial Databases"
  },
  {
    label: "PLAN 401 - Planners and Planning Tribunals"
  },
  {
    label: "PLAN 403 - Professional Practice, Public and Private Administration"
  },
  {
    label: "PLAN 405 - Integrated Planning Project"
  },
  {
    label: "PLAN 408 - Urban Design Seminar"
  },
  {
    label: "PLAN 409 - Urban Design Studio"
  },
  {
    label: "PLAN 414 - Heritage Planning Workshop"
  },
  {
    label: "PLAN 416 - Modelling the City"
  },
  {
    label: "PLAN 418 - Spatial Demography"
  },
  {
    label: "PLAN 431 - Issues in Housing"
  },
  {
    label: "PLAN 432 - Health, Environment, and Planning"
  },
  {
    label: "PLAN 433 - Social Concepts in Planning"
  },
  {
    label: "PLAN 440 - Urban Services Planning"
  },
  {
    label: "PLAN 450 - Changing Form and Structure of Metropolitan Canada"
  },
  {
    label: "PLAN 451 - Tools for Sustainable Communities"
  },
  {
    label: "PLAN 452 - Policy Analysis and Program Evaluation"
  },
  {
    label: "PLAN 453 - Urban Stormwater Management"
  },
  {
    label: "PLAN 471 - Planning Law"
  },
  {
    label: "PLAN 474 - Special Topics in Planning"
  },
  {
    label: "PLAN 477 - Freight Planning and Policy"
  },
  {
    label: "PLAN 478 - Transit Planning and Operations"
  },
  {
    label: "PLAN 480 - Theory and Practice of Planning in the U.K."
  },
  {
    label: "PLAN 481 - Geographic Information Systems Project"
  },
  {
    label: "PMATH 345 - Polynomials, Rings and Finite Fields"
  },
  {
    label: "PLAN 483 - Land Development Planning"
  },
  {
    label: "PLAN 484 - Physical Infrastructure Planning"
  },
  {
    label: "PLAN 485 - Projects, Problems, and Readings in Planning"
  },
  {
    label: "PLAN 487 - Management Issues in Geographic Information Systems"
  },
  {
    label: "PLAN 490 - Senior Honours Essay"
  },
  {
    label: "PLAN 601 - Planning Tribunals"
  },
  {
    label: "PLAN 603 - Real Estate Finance and Investment"
  },
  {
    label: "PLAN 602 - Land Development Planning"
  },
  {
    label: "PLAN 611 - Industrial Location Theory and Concepts"
  },
  {
    label: "PLAN 613 - Innovation and Economic Development in Cities and Regions"
  },
  {
    label: "PLAN 614 - Issues in Housing"
  },
  {
    label: "PLAN 649 - Graduate Urban Design Planning Studio"
  },
  {
    label: "PLAN 615 - Community Economic Development"
  },
  {
    label: "PLAN 616 - Multivariate Statistics"
  },
  {
    label: "PLAN 619 - Analytical Tools for Economic Development"
  },
  {
    label: "PMATH 320 - Euclidean Geometry"
  },
  {
    label: "PLAN 621 - Metropolitan Form and Structure in Canada"
  },
  {
    label: "PLAN 622 - Contemporary Urban Planning and Governance"
  },
  {
    label: "PLAN 623 - Social Concepts in Planning"
  },
  {
    label: "PLAN 625 - Methods of Social Investigation for Planners"
  },
  {
    label: "PLAN 630 - Planning Law"
  },
  {
    label: "PLAN 639 - Health, Environment and Planning"
  },
  {
    label: "PLAN 641 - Heritage Planning Workshop"
  },
  {
    label: "PLAN 646 - Site Planning and Design Studio"
  },
  {
    label: "PLAN 647 - Community Design Studio"
  },
  {
    label: "PLAN 648 - Urban Design Seminar"
  },
  {
    label: "PLAN 676 - Special Topics in Planning"
  },
  {
    label: "PLAN 652 - Environmental Policy Analysis"
  },
  {
    label: "PLAN 654 - Spatial Information Technology, Globalization and International Development"
  },
  {
    label: "PLAN 657 - GIS and Spatial Decision Support for Planning  and Resource Management"
  },
  {
    label: "PLAN 660 - Perspectives in Resource and Environmental Management"
  },
  {
    label: "PLAN 661A - Applied Studies in Hydrology and the Environment 1"
  },
  {
    label: "PLAN 661B - Applied Studies in Hydrology and the Environment 2"
  },
  {
    label: "PLAN 665 - Environmental Planning Theory and Practice"
  },
  {
    label: "PLAN 666 - Ecosystem Approach to Park Planning"
  },
  {
    label: "PLAN 669 - Landscape Restoration"
  },
  {
    label: "PLAN 674 - Special Topics in Planning"
  },
  {
    label: "PLAN 675 - Special Readings on Selected Planning Topics"
  },
  {
    label: "PLAN 677 - Freight Planning and Policy"
  },
  {
    label: "PLAN 678 - Advances in Public Transportation Planning, Operations & Control"
  },
  {
    label: "PLAN 684 - Physical Infrastructure and Planning"
  },
  {
    label: "PLAN 700 - Planning Paradigms and Theory"
  },
  {
    label: "PLAN 701 - Land Use Planning Fundamentals"
  },
  {
    label: "PLAN 702 - Critical Assessment of Theories, Methods and Practices of Planning"
  },
  {
    label: "PLAN 703 - Planning Professional Practice"
  },
  {
    label: "PLAN 704 - Methods of Planning Analysis"
  },
  {
    label: "PLAN 710 - Research Design"
  },
  {
    label: "PLAN 720 - Introductory Planning Project Studio"
  },
  {
    label: "PLAN 721 - Advanced Planning Project Studio"
  },
  {
    label: "PLAN 801 - PhD Research Forum 1"
  },
  {
    label: "PLAN 802 - PhD Research Forum 2"
  },
  {
    label: "PMATH 330 - Introduction to Mathematical Logic"
  },
  {
    label: "PMATH 331 - Applied Real Analysis"
  },
  {
    label: "PMATH 332 - Applied Complex Analysis"
  },
  {
    label: "PMATH 334 - Introduction to Rings and Fields with Applications"
  },
  {
    label: "PMATH 336 - Introduction to Group Theory with Applications"
  },
  {
    label: "PMATH 340 - Elementary Number Theory"
  },
  {
    label: "PMATH 347 - Groups and Rings"
  },
  {
    label: "PMATH 348 - Fields and Galois Theory"
  },
  {
    label: "PMATH 351 - Real Analysis"
  },
  {
    label: "PMATH 352 - Complex Analysis"
  },
  {
    label: "PMATH 360 - Geometry"
  },
  {
    label: "PMATH 365 - Differential Geometry"
  },
  {
    label: "PMATH 367 - Set Theory & General Topology"
  },
  {
    label: "PMATH 370 - Chaos and Fractals"
  },
  {
    label: "PMATH 399 - Readings in Pure Mathematics"
  },
  {
    label: "PMATH 432 - First Order Logic and Computability"
  },
  {
    label: "PMATH 433 - Model Theory and Set Theory"
  },
  {
    label: "PMATH 440 - Analytic Number Theory"
  },
  {
    label: "PMATH 441 - Algebraic Number Theory"
  },
  {
    label: "PMATH 445 - Representations of Finite Groups"
  },
  {
    label: "PMATH 446 - Introduction to Commutative Algebra"
  },
  {
    label: "PMATH 450 - Lebesgue Integration and Fourier Analysis"
  },
  {
    label: "PMATH 451 - Measure and Integration"
  },
  {
    label: "PMATH 453 - Functional Analysis"
  },
  {
    label: "PMATH 464 - Introduction to Algebraic Geometry"
  },
  {
    label: "PSCI 214 - Quantitative Analysis"
  },
  {
    label: "PMATH 465 - Geometry of Manifolds"
  },
  {
    label: "PMATH 467 - Algebraic Topology"
  },
  {
    label: "PMATH 499 - Readings in Pure Mathematics"
  },
  {
    label: "PMATH 632 - First Order Logic and Computability"
  },
  {
    label: "PMATH 641 - Algebraic Number Theory"
  },
  {
    label: "PMATH 642 - Fields and Galois Theory"
  },
  {
    label: "PMATH 644 - Rings, Modules and Representations"
  },
  {
    label: "PMATH 646 - Introduction to Commutative Algebra"
  },
  {
    label: "PMATH 650 - Lebesgue Integration and Fourier Analysis"
  },
  {
    label: "PMATH 651 - Measure and Integration"
  },
  {
    label: "PMATH 652 - Topics in Complex Analysis"
  },
  {
    label: "PMATH 665 - Geometry of Manifolds"
  },
  {
    label: "PMATH 667 - Algebraic Topology"
  },
  {
    label: "PMATH 690 - Literature and Research Studies"
  },
  {
    label: "PMATH 701 - Graduate Algebra"
  },
  {
    label: "PMATH 702 - Graduate Analysis"
  },
  {
    label: "PMATH 733 - Model Theory and Set Theory"
  },
  {
    label: "PMATH 740 - Analytic Number Theory"
  },
  {
    label: "PMATH 745 - Representations of Finite Groups"
  },
  {
    label: "PMATH 753 - Functional Analysis"
  },
  {
    label: "PMATH 763 - Introduction to Lie Groups and Lie Algebras"
  },
  {
    label: "PMATH 764 - Introduction to Algebraic Geometry"
  },
  {
    label: "PMATH 800 - Topics in Real and Complex Analysis"
  },
  {
    label: "PMATH 810 - Banach Algebras and Operator Theory"
  },
  {
    label: "PMATH 811 - Topics in Functional Analysis"
  },
  {
    label: "PMATH 822 - Topics in Operator Theory"
  },
  {
    label: "PMATH 833 - Topics in Harmonic Analysis"
  },
  {
    label: "PMATH 844 - Topics in Functional Equations"
  },
  {
    label: "PMATH 900 - Topics in Algebra"
  },
  {
    label: "PSYCH 608A - Child Psychopathology & Psychotherapy"
  },
  {
    label: "PMATH 911 - Topics in Mathematical Logic"
  },
  {
    label: "PMATH 922 - Topics in Universal Algebra"
  },
  {
    label: "PMATH 933 - Topics in Group Theory"
  },
  {
    label: "PMATH 944 - Topics in Number Theory"
  },
  {
    label: "PMATH 955 - Topics in Geometry"
  },
  {
    label: "PMATH 966 - Topics in Topology"
  },
  {
    label: "POLSH 101 - Elementary Polish I"
  },
  {
    label: "POLSH 102 - Elementary Polish II"
  },
  {
    label: "POLSH 201 - Intermediate Polish I"
  },
  {
    label: "POLSH 202 - Intermediate Polish II"
  },
  {
    label: "PORT 101 - Introduction to Portuguese 1"
  },
  {
    label: "PORT 102 - Introduction to Portuguese 2"
  },
  {
    label: "PS 611 - Government, Politics and the Public Service"
  },
  {
    label: "PS 612 - Government Finance I:  Accounting and Accountability"
  },
  {
    label: "PS 613 - The Politics of Difference in Canada:  Challenges and Policy Responses"
  },
  {
    label: "PS 614 - Communicating with Diverse Audiences"
  },
  {
    label: "PSYCH 607S - Efficacy and Program Evaluation"
  },
  {
    label: "PS 615 - Effective Problem-Solving and Decision-Making"
  },
  {
    label: "PS 616 - Spoken French in Context"
  },
  {
    label: "PS 617 - Values and Ethics in Government"
  },
  {
    label: "PS 618 - Public Policy Development"
  },
  {
    label: "PS 619 - Government Finance II: Practices and Procedures"
  },
  {
    label: "PS 620 - Effective Leadership and Management"
  },
  {
    label: "PS 621 - Project Management in Government"
  },
  {
    label: "PSCI 601 - Research Applications in Political Science"
  },
  {
    label: "PS 622 - Major Team Project"
  },
  {
    label: "PS 623 - Government, Business and Civil Society"
  },
  {
    label: "PS 624 - Research Methods and Data Analysis"
  },
  {
    label: "PS 699 - Special Topics"
  },
  {
    label: "PSCI 100 - Introduction to Government"
  },
  {
    label: "PSCI 101 - Introduction to Political Ideas"
  },
  {
    label: "PSCI 110 - Introduction to Politics in the Contemporary World"
  },
  {
    label: "PSCI 150 - Introduction to Global Politics"
  },
  {
    label: "PSCI 190 - Special Studies"
  },
  {
    label: "PSCI 200 - Political Science Nuts and Bolts"
  },
  {
    label: "PSCI 225 - Classics in Political Thought"
  },
  {
    label: "PSCI 226 - Modern Political Thought"
  },
  {
    label: "PSCI 231 - Government and Business"
  },
  {
    label: "PSCI 244 - Irrational and Rational Choices in Politics"
  },
  {
    label: "PSCI 250 - The Comparative Politics of State and Nation"
  },
  {
    label: "PSCI 252 - Global South"
  },
  {
    label: "PSCI 299 - Political Science Beyond the Classroom"
  },
  {
    label: "PSCI 254 - The Political Documentary"
  },
  {
    label: "PSCI 255 - Comparative Political Economy of Advanced Industrial Democracies"
  },
  {
    label: "PSCI 291 - The Canadian Legal Process"
  },
  {
    label: "PSCI 257 - Introduction to the Modern Middle East"
  },
  {
    label: "PSCI 259 - Government and Politics of Asia"
  },
  {
    label: "PSCI 260 - Canadian Government & Politics"
  },
  {
    label: "PSCI 264 - American Government and Politics"
  },
  {
    label: "PSCI 281 - World Politics"
  },
  {
    label: "PSCI 282 - Foreign Policy"
  },
  {
    label: "PSCI 283 - International Political Economy"
  },
  {
    label: "PSCI 300 - Foundations of Political Economy"
  },
  {
    label: "PSCI 314 - Quantitative Analysis"
  },
  {
    label: "PSCI 315 - Research Design in Political Science"
  },
  {
    label: "PSCI 321 - Marxist Theory"
  },
  {
    label: "PSCI 324 - Issues in Contemporary Political Theory"
  },
  {
    label: "PSCI 331 - Public Administration"
  },
  {
    label: "PSCI 334 - Public Policy"
  },
  {
    label: "PSCI 350 - Political Economy of Development"
  },
  {
    label: "PSCI 351 - Power Sharing in Divided Societies"
  },
  {
    label: "PSCI 352 - Culture and Political Violence"
  },
  {
    label: "PSCI 353 - Politics in Russia"
  },
  {
    label: "PSCI 355 - Russia and its Neighbours"
  },
  {
    label: "PSCI 356 - Business and Politics of Japan"
  },
  {
    label: "PSCI 358 - Political Change in Greater China"
  },
  {
    label: "PSCI 360 - Topics in Canadian Government and Politics"
  },
  {
    label: "PSCI 362 - Cultural Politics and Indigenous Practices"
  },
  {
    label: "PSCI 363 - Canadian Constitutional Law"
  },
  {
    label: "PSCI 367 - Topics in American Government and Politics"
  },
  {
    label: "PSCI 368 - Russian Politics through Literature"
  },
  {
    label: "PSCI 369 - The Politics of Decolonization"
  },
  {
    label: "PSCI 370 - Women and Politics"
  },
  {
    label: "PSCI 373 - Political Parties, Elections, and Political Marketing"
  },
  {
    label: "PSCI 381 - Foreign Policies of South Asian States"
  },
  {
    label: "PSCI 375 - Transnational Migration"
  },
  {
    label: "PSCI 382 - Politics of Canadian Foreign Policy"
  },
  {
    label: "PSCI 383 - Transatlantic Relations"
  },
  {
    label: "PSCI 387 - Globalization"
  },
  {
    label: "PSCI 389 - Global Governance"
  },
  {
    label: "PSCI 390 - Special Studies"
  },
  {
    label: "PSCI 391 - Special Studies"
  },
  {
    label: "PSCI 401 - Projects in Political Science"
  },
  {
    label: "PSCI 402 - Politics of International Trade"
  },
  {
    label: "PSCI 403 - Topics in Politics and Business"
  },
  {
    label: "PSCI 404 - Globalization, International Business, and Development"
  },
  {
    label: "PSCI 405 - Chinese Political Economy"
  },
  {
    label: "PSCI 421 - Justice and Gender"
  },
  {
    label: "PSCI 423 - Democratic Theory and Practice"
  },
  {
    label: "PSCI 426 - Selected Subjects in Political Philosophy"
  },
  {
    label: "PSCI 428 - The State and Economic Life"
  },
  {
    label: "PSCI 429 - Genetics and Justice"
  },
  {
    label: "PSCI 431 - Canadian Public Policy"
  },
  {
    label: "PSCI 432 - Global Environmental Governance"
  },
  {
    label: "PSCI 433 - Topics in Canadian Public Administration"
  },
  {
    label: "PSCI 434 - Comparative Public Administration"
  },
  {
    label: "PSCI 435 - Comparative Public Policy"
  },
  {
    label: "PSCI 439 - Global Social Policy"
  },
  {
    label: "PSCI 451 - Comparative Political Systems: Eastern Europe"
  },
  {
    label: "PSCI 452 - Comparative Political Parties"
  },
  {
    label: "PSCI 454 - Topics in Politics in the Global South"
  },
  {
    label: "PSCI 455 - Comparative Political Economy"
  },
  {
    label: "PSCI 456 - Ethnic Conflict and Conflict Resolution"
  },
  {
    label: "PSCI 458 - Cultural Explanations of Politics"
  },
  {
    label: "PSCI 460 - The Cultural Politics of Israel/Palestine"
  },
  {
    label: "PSCI 461 - Canadian National Politics"
  },
  {
    label: "PSCI 462 - Government and Politics of Indigenous Peoples"
  },
  {
    label: "PSCI 463 - Rights and Public Policy"
  },
  {
    label: "PSCI 472 - Women and Public Policy"
  },
  {
    label: "PSCI 479 - International Political Economy of Asia"
  },
  {
    label: "PSCI 480 - China and Global Governance"
  },
  {
    label: "PSCI 481 - Interstate War"
  },
  {
    label: "PSCI 482 - Critical Security Studies"
  },
  {
    label: "PSCI 485 - Selected Topics in International Political Economy"
  },
  {
    label: "PSCI 486 - Special Topics in International Diplomacy"
  },
  {
    label: "PSCI 487 - International Relations Theory"
  },
  {
    label: "PSCI 488 - Global Food and Agricultural Politics"
  },
  {
    label: "PSCI 490 - Special Subjects"
  },
  {
    label: "PSCI 491 - Special Subjects"
  },
  {
    label: "PSCI 492 - Special Subjects"
  },
  {
    label: "PSCI 499A - Special Honours Essay"
  },
  {
    label: "PSCI 499B - Special Honours Essay"
  },
  {
    label: "PSCI 600 - Theories and Methods of Political Analysis"
  },
  {
    label: "PSCI 604 - Advanced Topics in Global Environmental Governance"
  },
  {
    label: "PSCI 606 - Governing Global Food and Agriculture Systems"
  },
  {
    label: "PSCI 612 - Theories of Globalization"
  },
  {
    label: "PSCI 613 - Directed Readings in Political Methodology"
  },
  {
    label: "PSCI 614 - Global Business and Development"
  },
  {
    label: "PSCI 666 - Rights and Public Policy"
  },
  {
    label: "PSCI 615 - Global Poverty"
  },
  {
    label: "PSCI 616 - Global Health Governance"
  },
  {
    label: "PSCI 617 - Unconventional Diplomacy"
  },
  {
    label: "PSCI 618 - Non-State Actors in Global Governance"
  },
  {
    label: "PSCI 619 - China and Global Governance"
  },
  {
    label: "PSCI 620 - Gender and Global Politics"
  },
  {
    label: "PSCI 621 - Political Theory 1"
  },
  {
    label: "PSCI 622 - Political Theory 2"
  },
  {
    label: "PSCI 623 - Democratic Theory and Practice"
  },
  {
    label: "PSCI 624 - Justice and Gender"
  },
  {
    label: "PSCI 625 - Directed Readings in Political Theory"
  },
  {
    label: "PSYCH 607R - Cognitive Behaviour Therapy Practicum"
  },
  {
    label: "PSCI 626 - Normative Political Theory"
  },
  {
    label: "PSCI 629 - Genetics and Justice"
  },
  {
    label: "PSCI 630A - Public Administration and Policy 1"
  },
  {
    label: "PSCI 630B - Public Administration and Policy 2"
  },
  {
    label: "PSCI 631 - The State and Economic Life"
  },
  {
    label: "PSCI 632 - The Politics of Canadian Resource Development"
  },
  {
    label: "PSCI 633 - Canadian Public Policy"
  },
  {
    label: "PSCI 634 - Comparative Public Administration"
  },
  {
    label: "PSCI 635 - Directed Readings in Public Policy and Administration"
  },
  {
    label: "PSCI 636 - Crime and Politics"
  },
  {
    label: "PSCI 639 - Global Social Governance"
  },
  {
    label: "PSCI 642 - Politics in Ontario"
  },
  {
    label: "PSCI 643 - Directed Readings in Provincial and Local Politics"
  },
  {
    label: "PSCI 650 - Approaches to the Study of Comparative Politics"
  },
  {
    label: "PSCI 651 - Democracy and Development"
  },
  {
    label: "PSCI 652 - Advanced Topics in Third World Politics and Development II"
  },
  {
    label: "PSCI 653 - Comparative Political Systems: Eastern Europe"
  },
  {
    label: "PSCI 654 - Post-War Reconstruction and State Building"
  },
  {
    label: "PSCI 655 - Ethnic Conflict and Conflict Resolution I"
  },
  {
    label: "PSCI 656 - Ethnic Conflict and  Conflict Resolution II"
  },
  {
    label: "PSCI 657 - International Organizations and Global Governance"
  },
  {
    label: "PSCI 658 - Human Rights in the Globalized World"
  },
  {
    label: "PSCI 659 - Conflict and Conflict Resolution"
  },
  {
    label: "PSCI 661 - Canadian Politics 1"
  },
  {
    label: "PSCI 662 - Canadian Politics 2"
  },
  {
    label: "PSCI 663 - Directed Readings in Canadian Politics"
  },
  {
    label: "PSCI 664 - Canada in the World: Foreign Policy"
  },
  {
    label: "PSCI 668 - The Politics of National Innovation Systems"
  },
  {
    label: "PSCI 671 - Women and Public Policy"
  },
  {
    label: "PSCI 673 - Directed Readings in Political Behaviour"
  },
  {
    label: "PSCI 678 - Security Ontology-Theory"
  },
  {
    label: "PSCI 679 - Security Governance: Actors, Institutions, and Issues"
  },
  {
    label: "PSCI 680 - Critical Security Studies"
  },
  {
    label: "PSCI 681 - Power Politics and World Order Studies"
  },
  {
    label: "PSCI 682 - Contemporary Strategy: Theories and Policies"
  },
  {
    label: "PSCI 683 - Topics in International Political Economy"
  },
  {
    label: "PSCI 684 - Special Topics in International Diplomacy"
  },
  {
    label: "PSCI 685 - Directed Readings in International Politics"
  },
  {
    label: "PSYCH 607P - Cognitive Behaviour Therapy"
  },
  {
    label: "PSCI 686 - Emerging Economies in Global Governance"
  },
  {
    label: "PSCI 687 - Explaining Interstate War"
  },
  {
    label: "PSCI 688 - Governance of Global Economy"
  },
  {
    label: "PSCI 689 - International Political Economy"
  },
  {
    label: "PSCI 692 - Graduate Research Seminars"
  },
  {
    label: "PSYCH 101 - Introductory Psychology"
  },
  {
    label: "PSYCH 101R - Introductory Psychology"
  },
  {
    label: "PSYCH 207 - Cognitive Processes"
  },
  {
    label: "PSYCH 211 - Developmental Psychology"
  },
  {
    label: "PSYCH 212 - Educational Psychology"
  },
  {
    label: "PSYCH 212R - Educational Psychology"
  },
  {
    label: "PSYCH 213R - Exceptional Children"
  },
  {
    label: "PSYCH 218 - Psychology of Death and Dying"
  },
  {
    label: "PSYCH 226R - Positive Psychology"
  },
  {
    label: "PSYCH 230 - Psychology and Law"
  },
  {
    label: "PSYCH 231 - The Psychology of Religious Experience"
  },
  {
    label: "PSYCH 232 - Psychology of Evil"
  },
  {
    label: "PSYCH 235 - Psychological Perspectives on Gender and Sex"
  },
  {
    label: "PSYCH 236 - A Psychological Analysis of Human Sexuality"
  },
  {
    label: "PSYCH 253 - Social Psychology"
  },
  {
    label: "PSYCH 253R - Social Psychology"
  },
  {
    label: "PSYCH 256 - Introduction to Cognitive Science"
  },
  {
    label: "PSYCH 257 - Psychopathology"
  },
  {
    label: "PSYCH 257R - Psychopathology"
  },
  {
    label: "PSYCH 261 - Physiological Psychology"
  },
  {
    label: "PSYCH 264 - Research Apprenticeship"
  },
  {
    label: "PSYCH 291 - Basic Research Methods"
  },
  {
    label: "PSYCH 292 - Basic Data Analysis"
  },
  {
    label: "PSYCH 304 - Thinking and Deciding"
  },
  {
    label: "PSYCH 306 - Perception"
  },
  {
    label: "PSYCH 307 - Human Neuropsychology"
  },
  {
    label: "PSYCH 308 - Psychology of Reading"
  },
  {
    label: "PSYCH 312 - Learning Disabilities"
  },
  {
    label: "PSYCH 312R - Learning Disabilities"
  },
  {
    label: "PSYCH 314 - Cognitive Development"
  },
  {
    label: "PSYCH 315 - Psychology of Adolescence and Emerging Adulthood"
  },
  {
    label: "PSYCH 317 - Child Psychopathology"
  },
  {
    label: "PSYCH 318 - Psychosexual Organization"
  },
  {
    label: "PSYCH 319 - Problem Behaviour in the Classroom"
  },
  {
    label: "PSYCH 320 - Language Development"
  },
  {
    label: "PSYCH 321 - Conceptual Development"
  },
  {
    label: "PSYCH 322R - Personality Theory"
  },
  {
    label: "PSYCH 330 - Criminal Profiling"
  },
  {
    label: "PSYCH 332 - Human Motivation and Emotion"
  },
  {
    label: "PSYCH 334R - Theories of Individual Counselling Psychology"
  },
  {
    label: "PSYCH 335 - Developmental Neuropsychology"
  },
  {
    label: "PSYCH 336 - Introduction to Clinical Psychology"
  },
  {
    label: "PSYCH 338 - Organizational Psychology"
  },
  {
    label: "PSYCH 339 - Personnel Psychology"
  },
  {
    label: "PSYCH 340 - Training and Development"
  },
  {
    label: "PSYCH 342 - The Psychology of Groups and Teams"
  },
  {
    label: "PSYCH 349R - Cross-Cultural Psychology"
  },
  {
    label: "PSYCH 350 - Political Psychology"
  },
  {
    label: "PSYCH 352 - Culture and Psychology"
  },
  {
    label: "PSYCH 353 - Social Cognition"
  },
  {
    label: "PSYCH 354 - Interpersonal Relations"
  },
  {
    label: "PSYCH 354R - Interpersonal Relations"
  },
  {
    label: "PSYCH 355 - Intergroup Relations"
  },
  {
    label: "PSYCH 356 - Personality"
  },
  {
    label: "PSYCH 356R - Personality"
  },
  {
    label: "PSYCH 361 - Evolutionary Psychology"
  },
  {
    label: "PSYCH 363 - Special Subjects"
  },
  {
    label: "PSYCH 372 - Environmental Psychology"
  },
  {
    label: "PSYCH 375R - Studies in Psychology"
  },
  {
    label: "PSYCH 380 - History of Psychology"
  },
  {
    label: "PSYCH 391 - Advanced Data Analysis"
  },
  {
    label: "PSYCH 392 - Research in Human Cognitive Neuroscience"
  },
  {
    label: "PSYCH 393 - Research in Developmental Psychology"
  },
  {
    label: "PSYCH 394 - Research in Cognition and Perception"
  },
  {
    label: "PSYCH 395 - Research in Social Psychology"
  },
  {
    label: "PSYCH 396 - Research in Behavioural Neuroscience"
  },
  {
    label: "PSYCH 397 - Research in Personality and Clinical Psychology"
  },
  {
    label: "PSYCH 398 - Research in Memory"
  },
  {
    label: "PSYCH 398R - Independent Study"
  },
  {
    label: "PSYCH 399 - Research in Industrial/Organizational Psychology"
  },
  {
    label: "PSYCH 399R - Independent Study"
  },
  {
    label: "PSYCH 420 - An Introduction to Computational Neuroscience Methods"
  },
  {
    label: "PSYCH 439 - Negotiation in the Workplace: Theory and Practice"
  },
  {
    label: "PSYCH 447 - Seminar in Cognitive Science"
  },
  {
    label: "PSYCH 448R - Close Relationships"
  },
  {
    label: "PSYCH 449R - Race and Gender Equality"
  },
  {
    label: "PSYCH 450R - Senior Seminar in Special Topics"
  },
  {
    label: "PSYCH 453 - Honours Seminar in Developmental Psychology"
  },
  {
    label: "PSYCH 454 - Honours Seminar in Educational Psychology"
  },
  {
    label: "PSYCH 455 - Honours Seminar in Social Psychology"
  },
  {
    label: "PSYCH 457 - Honours Seminar in Personality and Clinical Psychology"
  },
  {
    label: "PSYCH 458 - Honours Seminar in Cognition"
  },
  {
    label: "PSYCH 461 - Honours Seminar in Cognitive Neuroscience"
  },
  {
    label: "PSYCH 462 - Honours Seminar in Industrial/Organizational Psychology"
  },
  {
    label: "PSYCH 463 - Honours Seminar in Special Topics"
  },
  {
    label: "PSYCH 464 - Advanced Research Apprenticeship"
  },
  {
    label: "PSYCH 465 - Applied Apprenticeship"
  },
  {
    label: "PSYCH 467 - Human Resources Apprenticeship"
  },
  {
    label: "PSYCH 480 - Directed Studies - Elective"
  },
  {
    label: "PSYCH 481 - Directed Studies - Natural Science Advanced Psych"
  },
  {
    label: "PSYCH 482 - Directed Studies - Social Science Advanced Psych"
  },
  {
    label: "PSYCH 483 - Directed Studies - Natural Science Research"
  },
  {
    label: "PSYCH 484 - Directed Studies - Social Science Research"
  },
  {
    label: "PSYCH 485 - Directed Studies - Seminar"
  },
  {
    label: "PSYCH 486 - Directed Studies - Advanced Statistics"
  },
  {
    label: "PSYCH 490R - Special Studies"
  },
  {
    label: "PSYCH 492 - Psychological Measurement: Foundations of Research and Practice"
  },
  {
    label: "PSYCH 499A - Honours Thesis - Part 1"
  },
  {
    label: "PSYCH 499B - Honours Thesis - Part 2"
  },
  {
    label: "PSYCH 499C - Honours Thesis - Part 3"
  },
  {
    label: "PSYCH 605 - Special Topics in Clinical Psychology"
  },
  {
    label: "PSYCH 621 - Advanced Clinical Research"
  },
  {
    label: "PSYCH 630 - Advanced Analysis of Variance"
  },
  {
    label: "PSYCH 632 - Multiple Regression"
  },
  {
    label: "PSYCH 640 - Special Topics in Psychology"
  },
  {
    label: "PSYCH 650 - Special Topics in Cognition and Perception"
  },
  {
    label: "PSYCH 670 - Special Topics in Behavioural Neuroscience"
  },
  {
    label: "PSYCH 677A - Fundamentals of Behavioural Neuroscience"
  },
  {
    label: "PSYCH 680 - Special Topics in Child Behaviour and Development"
  },
  {
    label: "PSYCH 690 - Special Topics in Social and Personality"
  },
  {
    label: "PSYCH 707A - Behavioural Neuroscience Seminar I"
  },
  {
    label: "PSYCH 701 - Foundations in Cognitive/Social Development: Basic"
  },
  {
    label: "PSYCH 702 - Foundations in Cognitive/Social Development: Social Cognitive Development"
  },
  {
    label: "PSYCH 703 - Language Development"
  },
  {
    label: "PSYCH 704A - Social Psychology"
  },
  {
    label: "PSYCH 704B - Social Psychology"
  },
  {
    label: "PSYCH 705 - Foundations in Language Development: Basic Language Development"
  },
  {
    label: "PSYCH 706 - Foundations in Language Development: Pragmatics of Language"
  },
  {
    label: "PSYCH 877 - Work Motivation"
  },
  {
    label: "PSYCH 707 - Cognitive Neuroscience Seminar"
  },
  {
    label: "PSYCH 708 - Reasoning about Ownership of Property"
  },
  {
    label: "PSYCH 709 - Reasoning about Beliefs and Desires"
  },
  {
    label: "PSYCH 710 - Current Issues in Developmental Psych Seminar"
  },
  {
    label: "PSYCH 714A - Behavioural Neuroscience Seminar II"
  },
  {
    label: "PSYCH 711 - Seminar In Personality"
  },
  {
    label: "PSYCH 712 - Social Development"
  },
  {
    label: "PSYCH 713 - Theories of Pretence"
  },
  {
    label: "PSYCH 714 - Current Topics in Social Psych Seminar"
  },
  {
    label: "PSYCH 716 - Adult Psychopathology"
  },
  {
    label: "PSYCH 717 - Psychological Assessment I"
  },
  {
    label: "PSYCH 718 - Psychological Assessment II"
  },
  {
    label: "PSYCH 719 - Ethics, Diversity, and Professional Issues in Clinical Psychology"
  },
  {
    label: "PSYCH 720A - Practicum in Interviewing & Cognitive Assessment I"
  },
  {
    label: "PSYCH 720B - Practicum in Interviewing & Cognitive Assessment II"
  },
  {
    label: "PSYCH 721A - Diagnostic Assessment Practicum I"
  },
  {
    label: "PSYCH 721B - Diagnostic Assessment Practicum II"
  },
  {
    label: "PSYCH 722C - Clinical Fieldwork Placement I"
  },
  {
    label: "PSYCH 723 - Child Psychopathology and Psychotherapy"
  },
  {
    label: "PSYCH 724 - Personality & Measurement Theory"
  },
  {
    label: "PSYCH 725 - Cognitive Behaviour Therapy"
  },
  {
    label: "PSYCH 726A - Practicum in Integrated Assessment I"
  },
  {
    label: "PSYCH 726B - Practicum in Integrated Assessment II"
  },
  {
    label: "PSYCH 727 - Efficacy & Program Evaluation"
  },
  {
    label: "PSYCH 728 - Psychotherapy:  Classical Roots & Contemporary Developments"
  },
  {
    label: "PSYCH 729A - Child and Adolescent Psychotherapy Practicum I"
  },
  {
    label: "PSYCH 729B - Child and Adolescent Psychotherapy Practicum II"
  },
  {
    label: "PSYCH 729C - Child and Adolescent Psychotherapy Practicum III"
  },
  {
    label: "PSYCH 730A - Adult Psychotherapy Practicum I"
  },
  {
    label: "PSYCH 730B - Adult Psychotherapy Practicum II"
  },
  {
    label: "PSYCH 730C - Adult Psychotherapy Practicum III"
  },
  {
    label: "PSYCH 731 - Emotion-Focused Therapy"
  },
  {
    label: "PSYCH 747A - Behavioural Neuroscience Seminar IV"
  },
  {
    label: "PSYCH 747B - Behavioural Neuroscience Seminar IV"
  },
  {
    label: "PSYCH 732A - Child and Adolescent Psychotherapy Practicum I"
  },
  {
    label: "PSYCH 732B - Child and Adolescent Psychotherapy Practicum II"
  },
  {
    label: "PSYCH 732C - Child and Adolescent Psychotherapy Practicum III"
  },
  {
    label: "PSYCH 733A - Adult Psychotherapy Practicum I"
  },
  {
    label: "PSYCH 733B - Adult Psychotherapy Practicum II"
  },
  {
    label: "PSYCH 733C - Adult Psychotherapy Practicum III"
  },
  {
    label: "PSYCH 734A - Practicum in Supervision I"
  },
  {
    label: "PSYCH 734B - Practicum in Supervision II"
  },
  {
    label: "PSYCH 734C - Practicum in Supervision III"
  },
  {
    label: "PSYCH 735A - Child and Adolescent Psychotherapy Practicum I"
  },
  {
    label: "PSYCH 735B - Child and Adolescent Psychotherapy Practicum II"
  },
  {
    label: "PSYCH 735C - Child and Adolescent Psychotherapy Practicum III"
  },
  {
    label: "PSYCH 736A - Adult Psychotherapy Practicum I"
  },
  {
    label: "PSYCH 736B - Adult Psychotherapy Practicum II"
  },
  {
    label: "PSYCH 736C - Adult Psychotherapy Practicum III"
  },
  {
    label: "PSYCH 737A - Emotion-Focused Therapy Practicum"
  },
  {
    label: "PSYCH 737B - Emotion-Focused Therapy Practicum"
  },
  {
    label: "PSYCH 737C - Couples' Therapy Practicum"
  },
  {
    label: "PSYCH 738A - Clinical Fieldwork Placement II"
  },
  {
    label: "PSYCH 738B - Clinical Fieldwork Placement II"
  },
  {
    label: "PSYCH 738C - Clinical Fieldwork Placement II"
  },
  {
    label: "PSYCH 739A - Clinical Fieldwork Placement III"
  },
  {
    label: "PSYCH 739B - Clinical Fieldwork Placement III"
  },
  {
    label: "PSYCH 739C - Clinical Fieldwork Placement III"
  },
  {
    label: "PSYCH 740A - Senior Practicum I"
  },
  {
    label: "PSYCH 740B - Senior Practicum I"
  },
  {
    label: "PSYCH 740C - Senior Practicum I"
  },
  {
    label: "PSYCH 741A - Senior Practicum II"
  },
  {
    label: "PSYCH 741B - Senior Practicum II"
  },
  {
    label: "PSYCH 741C - Senior Practicum II"
  },
  {
    label: "PSYCH 742A - Senior Practicum III"
  },
  {
    label: "PSYCH 742B - Senior Practicum III"
  },
  {
    label: "PSYCH 742C - Senior Practicum III"
  },
  {
    label: "PSYCH 747 - C/P Research Seminar"
  },
  {
    label: "PSYCH 769 - Causal Reasoning"
  },
  {
    label: "PSYCH 770 - Basic Issues in Cognition"
  },
  {
    label: "PSYCH 771 - Basic Visual Processes"
  },
  {
    label: "PSYCH 772 - Auditory Processes and Speech Perception"
  },
  {
    label: "PSYCH 773 - Psychophysics and Measurement"
  },
  {
    label: "PSYCH 774 - Visual Cognition"
  },
  {
    label: "PSYCH 775 - Consciousness and Cognition"
  },
  {
    label: "PSYCH 776 - Problem Solving, Judgment and  Decision-Making"
  },
  {
    label: "PSYCH 777 - Human Memory"
  },
  {
    label: "PSYCH 778 - Attention"
  },
  {
    label: "PSYCH 779 - Language and Reading"
  },
  {
    label: "PSYCH 779A - Cognitive Neuropsychology I"
  },
  {
    label: "PSYCH 779B - Cognitive Neuropsychology II"
  },
  {
    label: "PSYCH 781 - Cognitive Neuroscience of Memory"
  },
  {
    label: "PSYCH 782 - Visual Neuroscience"
  },
  {
    label: "PSYCH 783 - Neuroimaging of Cognition"
  },
  {
    label: "PSYCH 784 - Human Neuroanatomy and Neuropathology"
  },
  {
    label: "PSYCH 785 - Attention and the Brain"
  },
  {
    label: "PSYCH 786 - Neuropsychological Assessment Practicum"
  },
  {
    label: "PSYCH 787 - Visual Perception"
  },
  {
    label: "PSYCH 788 - Epidemiologic Methods in Aging Research"
  },
  {
    label: "PSYCH 789 - Mind-wandering and Inattention"
  },
  {
    label: "PSYCH 790 - Case Studies in Neuropsychology"
  },
  {
    label: "PSYCH 791 - Real and Virtual Spaces"
  },
  {
    label: "PSYCH 792 - An Introduction to Methods in Computational Neuroscience"
  },
  {
    label: "PSYCH 793 - Electrophysiology Methodologies in Brain Research: from Basic Concepts to Lab Practice"
  },
  {
    label: "PSYCH 794 - Cognitive Neuroscience of Face Perception"
  },
  {
    label: "PSYCH 795 - Structure and Function in the Developing Brain"
  },
  {
    label: "PSYCH 800 - Psychometric Theory & Structural Equation Modeling"
  },
  {
    label: "PSYCH 801 - Advanced Structural Equation Modeling"
  },
  {
    label: "PSYCH 803 - Meta-Analysis"
  },
  {
    label: "PSYCH 804 - Multi-Level Modeling Applications in Psychology"
  },
  {
    label: "PSYCH 810 - Directed Studies"
  },
  {
    label: "PSYCH 820 - Community Practicum I"
  },
  {
    label: "PSYCH 821 - Community Practicum II"
  },
  {
    label: "PSYCH 822 - Community Practicum III"
  },
  {
    label: "PSYCH 836A - Advanced Practicum in Applied Psychology"
  },
  {
    label: "PSYCH 844 - Special Topics in Educational Psychology"
  },
  {
    label: "PSYCH 846 - Special Topics in Applied Psychology"
  },
  {
    label: "RUSS 614 - Topics in Linguistic Theory"
  },
  {
    label: "PSYCH 851 - Research Lab Internship I"
  },
  {
    label: "PSYCH 852 - Research Lab Internship II"
  },
  {
    label: "PSYCH 853 - Research Lab Internship III"
  },
  {
    label: "PSYCH 870 - Research Design & Methods"
  },
  {
    label: "PSYCH 880 - Industrial and Organizational Psychology"
  },
  {
    label: "PSYCH 881A - Personnel Psychology"
  },
  {
    label: "PSYCH 883 - Organizational Development"
  },
  {
    label: "PSYCH 884 - Special Topics in Industrial & Organizational Psychology"
  },
  {
    label: "PSYCH 885 - Industrial & Organizational Psychology Research Seminar"
  },
  {
    label: "PSYCH 886 - Psychology of Training"
  },
  {
    label: "PSYCH 887 - Research Methods in Industrial/Organizational"
  },
  {
    label: "PSYCH 888 - Negotiation: Theory and Practice"
  },
  {
    label: "QIC 710 - Quantum Information Processing"
  },
  {
    label: "QIC 750 - Quantum Information Processing Devices"
  },
  {
    label: "RS 123 - Monsters and Magic in Japanese Popular Culture"
  },
  {
    label: "QIC 820 - Theory of Quantum Information"
  },
  {
    label: "QIC 823 - Quantum Algorithms"
  },
  {
    label: "QIC 845 - Open Quantum Systems"
  },
  {
    label: "QIC 880 - Nanoelectronics for Quantum Information Processing"
  },
  {
    label: "QIC 885 - Quantum Electronics and Photonics"
  },
  {
    label: "QIC 890 - Topics in Quantum Information"
  },
  {
    label: "RUSS 612 - Topics in Sociolinguistics"
  },
  {
    label: "RUSS 613 - Topics in Discourse Analysis"
  },
  {
    label: "QIC 891 - Topics in Quantum Information"
  },
  {
    label: "QIC 895 - Topics in Quantum Information"
  },
  {
    label: "REC 100 - Introduction to the Study of Recreation and Leisure"
  },
  {
    label: "REC 101 - Introduction to Recreation and Leisure Services"
  },
  {
    label: "REC 151 - Foundations of Therapeutic Recreation Practice"
  },
  {
    label: "REC 200 - Play, Creativity and Child Development"
  },
  {
    label: "REC 202 - History of Western Sport"
  },
  {
    label: "REC 203 - Sociology of Sport"
  },
  {
    label: "REC 205 - Social Psychology of Leisure"
  },
  {
    label: "REC 215 - Marketing Recreation and Sport Services"
  },
  {
    label: "REC 220 - Program Management"
  },
  {
    label: "REC 230 - Outdoor Recreation Resources Management"
  },
  {
    label: "REC 251 - Therapeutic Recreation: Developmental and Emotional Disabilities"
  },
  {
    label: "REC 252 - Therapeutic Recreation: Physical Disabilities"
  },
  {
    label: "REC 253 - Practicum in Therapeutic Recreation"
  },
  {
    label: "REC 270 - Research Design Applicable to Leisure Studies"
  },
  {
    label: "REC 280 - Introduction to Tourism"
  },
  {
    label: "REC 301 - Sociology of Leisure"
  },
  {
    label: "REC 304 - Culture and Recreation"
  },
  {
    label: "REC 306 - Contemporary Health Issues for Women"
  },
  {
    label: "REC 309 - History and Philosophy of Leisure"
  },
  {
    label: "REC 311 - Event Management"
  },
  {
    label: "REC 312 - Practicum in Recreation, Sport, and Tourism"
  },
  {
    label: "REC 372 - Special Topics in Leisure Studies 3"
  },
  {
    label: "REC 314 - Quality Assurance in Recreation and Sport Services"
  },
  {
    label: "REC 316 - Financing Recreation and Sport Services"
  },
  {
    label: "REC 333 - Recreation Geography"
  },
  {
    label: "REC 334 - Introduction to Park Management"
  },
  {
    label: "REC 351 - Therapeutic Recreation Facilitation Techniques"
  },
  {
    label: "REC 354 - Leisure Education - Concepts and Practices"
  },
  {
    label: "REC 356 - Leisure and Community"
  },
  {
    label: "REC 357 - Theories and Evidence for Therapeutic Recreation Practice"
  },
  {
    label: "REC 361 - Aging and Leisure"
  },
  {
    label: "REC 362 - Sociology of Aging"
  },
  {
    label: "REC 371 - Quantitative Approaches to Leisure Research"
  },
  {
    label: "REC 375 - International Exchange"
  },
  {
    label: "REC 380 - Tourism Analysis"
  },
  {
    label: "REC 383 - Perspectives on International Tourism"
  },
  {
    label: "REC 401 - Advanced Seminar on the Socio-Cultural and Behavioural Dimensions of Leisure"
  },
  {
    label: "REC 405 - Leisure and Well-being"
  },
  {
    label: "REC 408 - Gender and Leisure"
  },
  {
    label: "REC 413 - Innovative Solutions in Recreation and Sport Business"
  },
  {
    label: "REC 415 - Consumer Research in Recreation and Sport Services"
  },
  {
    label: "REC 416 - Principles of Recreation Planning"
  },
  {
    label: "REC 420 - Advanced Program Evaluation in Leisure Services"
  },
  {
    label: "REC 422 - Urban Recreation"
  },
  {
    label: "REC 425 - Heritage Planning Workshop"
  },
  {
    label: "REC 433 - Ecotourism and Communities"
  },
  {
    label: "REC 437 - Ecosystem and Resource Management in Parks/Natural Areas"
  },
  {
    label: "REC 450A - Internship for Therapeutic Recreation"
  },
  {
    label: "REC 450B - Internship for Therapeutic Recreation"
  },
  {
    label: "REC 455 - Advanced Seminar in Therapeutic Recreation"
  },
  {
    label: "REC 471A - Honours Thesis"
  },
  {
    label: "REC 471B - Honours Thesis"
  },
  {
    label: "REC 472 - Special Topics in Recreation and Leisure Studies 4"
  },
  {
    label: "REC 475 - Directed Study in Special Topics"
  },
  {
    label: "REC 480 - Advanced Seminar in Tourism Development"
  },
  {
    label: "REC 600 - Integrative Seminar in Recreation and Leisure Studies"
  },
  {
    label: "REC 601 - Epistemological and Methodological Issues in Leisure Research"
  },
  {
    label: "REC 603 - Leisure and Social Policy"
  },
  {
    label: "REC 605 - Social and Psychological Analysis of Leisure"
  },
  {
    label: "REC 608 - Seminar in Gender and Leisure"
  },
  {
    label: "REC 609 - Internship in Recreation Service"
  },
  {
    label: "REC 610 - Administrative Practice in Recreational Service"
  },
  {
    label: "REC 615 - Consumer Research and Marketing Leisure Services"
  },
  {
    label: "REC 630 - Policy and Planning of Nature-based Recreation and Tourism"
  },
  {
    label: "REC 640 - Community Development, Capacity Building and Leisure"
  },
  {
    label: "REC 650 - Critical Reflections on Disability, Illness and Leisure"
  },
  {
    label: "REC 651 - Philosophical Foundations of Therapeutic Recreation"
  },
  {
    label: "REC 652 - Knowledge-Based Practice in Therapeutic Recreation"
  },
  {
    label: "REC 672 - Quantitative Research Data Analysis and Interpretation"
  },
  {
    label: "REC 673 - Qualitative Research Data Analysis and Interpretation"
  },
  {
    label: "REC 680 - The Dynamics of Tourism"
  },
  {
    label: "REC 685 - The Structure of Tourism"
  },
  {
    label: "RUSS 611 - Topics in Second Language Acquisition and Computer-Assisted Language Learning"
  },
  {
    label: "REC 695 - Selected Topics in Recreation and Leisure Studies"
  },
  {
    label: "RS 225 - Sacred Beauty: Religion and the Arts"
  },
  {
    label: "RS 229R - Christianity and Social Change in Canada"
  },
  {
    label: "RUSS 604 - Approaches to Film and Performance Theory"
  },
  {
    label: "REC 696 - Topics in Administration and Management for Services"
  },
  {
    label: "REC 697 - Selected Topics in Recreation and Leisure Resources"
  },
  {
    label: "REC 700 - Foundations of Knowledge in Leisure Studies"
  },
  {
    label: "REC 730 - Fundamentals of Work and Health"
  },
  {
    label: "REC 731 - Approaches to Research in Work and Health"
  },
  {
    label: "REC 732A - Work and Health Research Seminar (I)"
  },
  {
    label: "REC 732B - Work and Health Research Seminar (II)"
  },
  {
    label: "REC 750 - Fundamentals of Aging, Health and Well-being"
  },
  {
    label: "REC 751 - Aging, Health and Well-being Research Seminar"
  },
  {
    label: "REC 792 - Advanced Research Methods"
  },
  {
    label: "RUSS 601 - Approaches to Linguistics"
  },
  {
    label: "RUSS 602 - Approaches to Literary and Cultural Theory"
  },
  {
    label: "REC 798 - Advanced Topics in Leisure Studies"
  },
  {
    label: "REES 100 - Legendary Past: Russian Myths and Heroes"
  },
  {
    label: "REES 180 - German and Russian Literary Masterpieces"
  },
  {
    label: "REES 220 - Once Upon a Fairy Tale: Fairy Tales, Then and Now"
  },
  {
    label: "REES 230 - The Devil"
  },
  {
    label: "REES 260 - Special Topics"
  },
  {
    label: "REES 261 - Languages and Society I"
  },
  {
    label: "REES 262 - Languages and Society II"
  },
  {
    label: "REES 271 - Russian Thought and Culture"
  },
  {
    label: "REES 272 - Russian Thought and Culture"
  },
  {
    label: "REES 273 - Croatian Culture and Literature"
  },
  {
    label: "REES 274 - Croatian Culture and Literature"
  },
  {
    label: "REES 280 - Comparative Literature: Theory and Practice"
  },
  {
    label: "REES 281 - Women in Russia: The Conscience of a Nation"
  },
  {
    label: "REES 310 - Russian Folklore"
  },
  {
    label: "REES 320 - The Slavic Short Story"
  },
  {
    label: "REES 330 - Russian Politics through Literature"
  },
  {
    label: "REES 341 - Russian Drama before 1905"
  },
  {
    label: "REES 342 - Russian Drama after 1905"
  },
  {
    label: "REES 360 - Special Topics"
  },
  {
    label: "REES 364 - German and Russian Film Pioneers"
  },
  {
    label: "REES 385 - Culture Behind the Iron Curtain"
  },
  {
    label: "REES 420 - Topics in Language Pedagogy"
  },
  {
    label: "REES 460 - Special Topics"
  },
  {
    label: "REES 490 - Senior Honours Project"
  },
  {
    label: "REES 495 - Reading Course in Approved Topics"
  },
  {
    label: "REES 496 - Study Abroad"
  },
  {
    label: "RS 100 - Religions of Asia"
  },
  {
    label: "RS 110 - Religions of the West"
  },
  {
    label: "RS 111 - Relationships in the Bible (Old Testament)"
  },
  {
    label: "RS 112 - Power and Corruption in the Bible (Old Testament)"
  },
  {
    label: "RS 113 - The Quest for Meaning in Modern Judaism"
  },
  {
    label: "RS 121 - Evil"
  },
  {
    label: "RS 122 - Sacred Beauty: Religion and the Arts"
  },
  {
    label: "RS 125 - What is Religion?"
  },
  {
    label: "RS 130 - Big Ideas of the Bible"
  },
  {
    label: "RS 131 - Classical Hebrew 1"
  },
  {
    label: "RS 132 - Classical Hebrew 2"
  },
  {
    label: "RS 133 - New Testament Greek 1"
  },
  {
    label: "RS 134 - New Testament Greek 2"
  },
  {
    label: "RS 150 - Christian Ethics"
  },
  {
    label: "RS 151 - Roman Catholicism"
  },
  {
    label: "RS 152 - Introduction to Christian Theology"
  },
  {
    label: "RS 170 - Religion and Popular Culture"
  },
  {
    label: "RS 180 - Love and Friendship"
  },
  {
    label: "RS 201 - Religions of East Asia"
  },
  {
    label: "RS 202 - Sikhism"
  },
  {
    label: "RS 203 - Hinduism"
  },
  {
    label: "RS 204 - Buddhism"
  },
  {
    label: "RS 205 - Buddhism in Tibet"
  },
  {
    label: "RS 206 - Japanese Religions"
  },
  {
    label: "RS 207 - Chinese Religions"
  },
  {
    label: "RS 210 - Judaism"
  },
  {
    label: "RS 211 - Jewish Responses to the Holocaust"
  },
  {
    label: "RS 212 - Great Texts in the Jewish Tradition"
  },
  {
    label: "RS 213 - Kabbalah: Jewish Mysticism"
  },
  {
    label: "RS 214 - Jewish Philosophy"
  },
  {
    label: "RS 215 - Special Topics"
  },
  {
    label: "RS 216 - Islam"
  },
  {
    label: "RS 217 - Islam in North America"
  },
  {
    label: "RS 219 - Religion in America"
  },
  {
    label: "RS 220 - World Religions and Politics"
  },
  {
    label: "RS 221 - Global Religious Fundamentalism"
  },
  {
    label: "RS 222 - Sacred Places"
  },
  {
    label: "RS 223 - Sacred Words and Sacred Texts"
  },
  {
    label: "RS 230 - Visions of Israel in Judaism: From Biblical to Modern Times"
  },
  {
    label: "RS 232 - The Hebrew Prophets"
  },
  {
    label: "RS 233 - Intermediate New Testament Greek"
  },
  {
    label: "RS 234 - Hellenistic Greek"
  },
  {
    label: "RS 235 - Jesus: Life and Legacy"
  },
  {
    label: "RS 236 - Paul: Life and Letters"
  },
  {
    label: "RS 237 - Insiders and Outsiders in the Bible"
  },
  {
    label: "RS 240 - History of Christianity"
  },
  {
    label: "RS 245 - The Catholic Church in Canada"
  },
  {
    label: "RS 248 - The Anglican Tradition"
  },
  {
    label: "RS 250 - History of Christian Thought"
  },
  {
    label: "RS 251 - Catholic Social Thought"
  },
  {
    label: "RS 252 - Religious Responses to Political Oppression"
  },
  {
    label: "RS 253 - Women and the Church"
  },
  {
    label: "RS 254 - Christian Sexual Ethics"
  },
  {
    label: "RS 255 - Gospel and Liberation"
  },
  {
    label: "RS 256 - Christian Approaches to Peacemaking"
  },
  {
    label: "RS 257 - Eastern Christianity: Being God and Human"
  },
  {
    label: "RS 258 - God"
  },
  {
    label: "RS 260 - How to Study Religion"
  },
  {
    label: "RS 261 - Introduction to the Philosophy of Religion"
  },
  {
    label: "RS 262 - Religion in Sociological Perspective"
  },
  {
    label: "RS 270R - Religion in Popular Film"
  },
  {
    label: "RS 271R - Special Topics in Religion and Film"
  },
  {
    label: "RS 272 - The Holocaust and Film"
  },
  {
    label: "RS 273 - Religion and the Media"
  },
  {
    label: "RS 275 - Religion and Japanese Film"
  },
  {
    label: "RS 280 - Cults and New Religious Movements"
  },
  {
    label: "RS 281 - Millennialism & Violence"
  },
  {
    label: "RS 282 - Christian Fundamentalism"
  },
  {
    label: "RS 283 - Current Ethical Issues"
  },
  {
    label: "RS 284 - Women and the Great Religions"
  },
  {
    label: "RS 285 - The Sacred Earth: Religion and Ecology"
  },
  {
    label: "RS 286 - Spirit in Motion: Secular and Religious Spiritualities Today"
  },
  {
    label: "RS 291 - Special Topics"
  },
  {
    label: "RS 301 - Pure Land Buddhism"
  },
  {
    label: "RS 302 - Images of the Feminine: India"
  },
  {
    label: "RS 303 - Gender and Asian Religions"
  },
  {
    label: "RS 304 - Zen and Now: History and Influence of Zen"
  },
  {
    label: "RS 310 - Jews in the New World"
  },
  {
    label: "RS 313 - Moses Maimonides: Life and Thought"
  },
  {
    label: "RS 314 - Islam and Christianity"
  },
  {
    label: "RS 315 - Greek and Roman Religion"
  },
  {
    label: "RS 318 - Canadian Native Religious Traditions"
  },
  {
    label: "RS 319 - Religion in Canada"
  },
  {
    label: "RS 320 - East Comes West, West Turns East"
  },
  {
    label: "RS 321 - Women in Buddhism: A Global Perspective"
  },
  {
    label: "RS 322 - Interreligious Encounter and Dialogue"
  },
  {
    label: "RS 323 - Religious Ethics and Global Politics"
  },
  {
    label: "RS 324 - Religious Perspectives on Marriage and Family"
  },
  {
    label: "RS 325 - Sex and the World Religions"
  },
  {
    label: "RS 326 - Global Christianity"
  },
  {
    label: "RS 327 - The Body, Dress, and Religion"
  },
  {
    label: "RS 330 - Selected Topics in Biblical Studies"
  },
  {
    label: "RS 331 - Intermediate Classical Hebrew"
  },
  {
    label: "RS 332 - Ancient Semitic Texts and Inscriptions"
  },
  {
    label: "RS 337 - The Bible and Peace"
  },
  {
    label: "RS 338 - Seeking Wisdom in the Bible"
  },
  {
    label: "RS 339 - The Bible (Old Testament) and Archaeology"
  },
  {
    label: "RS 341 - Jewish Contributions to Political Thought"
  },
  {
    label: "RS 342 - Heresy and Religious Crises in Late Medieval Europe"
  },
  {
    label: "RS 343 - Reformation History"
  },
  {
    label: "RS 344 - The Radical Reformation"
  },
  {
    label: "RS 348 - Vatican II"
  },
  {
    label: "RS 350 - Modern Christian Thought"
  },
  {
    label: "RS 351 - Contemporary Christian Thought"
  },
  {
    label: "RS 353 - War and Peace in Christian Theology"
  },
  {
    label: "RS 354 - Shapers of the Roman Catholic Tradition"
  },
  {
    label: "RS 355 - Christian Feminist Thought"
  },
  {
    label: "RS 357 - The Christian Hymn"
  },
  {
    label: "RS 358 - Worship and its Music"
  },
  {
    label: "RS 370 - Atheism, Skepticism, and Free Thought"
  },
  {
    label: "RS 374 - Religious Quests"
  },
  {
    label: "RS 375 - Icons in Eastern Christianity: Windows to Heaven"
  },
  {
    label: "RS 380 - Religion and Peacebuilding"
  },
  {
    label: "RS 381 - Religious Perspectives on the Environmental Crisis"
  },
  {
    label: "RS 382 - Bioethics and Religious Values"
  },
  {
    label: "RS 383 - Justice, Peace, and Development"
  },
  {
    label: "RS 391 - Special Topics"
  },
  {
    label: "RS 395 - Study-Travel Seminar in Religion"
  },
  {
    label: "RS 398 - Directed Readings in Special Subjects"
  },
  {
    label: "RS 462 - Sociology of Religion"
  },
  {
    label: "RS 482 - Religion, Science, and Technology"
  },
  {
    label: "RS 491 - Special Topics"
  },
  {
    label: "RS 495 - Study Term Abroad"
  },
  {
    label: "RS 498 - Directed Readings in Special Subjects"
  },
  {
    label: "RS 499 - Senior Seminar"
  },
  {
    label: "RS 700 - Religious Diversity in North America"
  },
  {
    label: "RS 701 - Case Studies in Religion"
  },
  {
    label: "RS 703 - Directed Study"
  },
  {
    label: "RUSS 600 - Methods of Research"
  },
  {
    label: "RS 704 - Special Topics"
  },
  {
    label: "RS 705 - History of Religion in North America"
  },
  {
    label: "RS 710 - Approaches to the Study of Religion in North America"
  },
  {
    label: "RS 730 - Sociology of Religion"
  },
  {
    label: "RUSS 101 - Elementary Russian I"
  },
  {
    label: "RUSS 102 - Elementary Russian II"
  },
  {
    label: "RUSS 201 - Intermediate Russian I"
  },
  {
    label: "SCI 263 - Science and Society"
  },
  {
    label: "RUSS 202 - Intermediate Russian II"
  },
  {
    label: "RUSS 203 - Integrative Language Studies I"
  },
  {
    label: "RUSS 204 - Russian for Heritage Speakers"
  },
  {
    label: "RUSS 301 - Advanced Russian I"
  },
  {
    label: "RUSS 302 - Advanced Russian II"
  },
  {
    label: "RUSS 303 - Integrative Language Studies II"
  },
  {
    label: "RUSS 603 - Approaches to Language Didactics"
  },
  {
    label: "RUSS 622 - Topics in Soviet and Post-Soviet Literature"
  },
  {
    label: "SCBUS 122 - Management of Business Organizations"
  },
  {
    label: "SCBUS 123 - Workshop 1: Science and Business"
  },
  {
    label: "SCBUS 223 - Workshop 2: Strategies Behind Technological Innovation"
  },
  {
    label: "SCBUS 225 - Organizational Behaviour in Scientific and Technical Workplaces"
  },
  {
    label: "SCBUS 323 - Workshop 3: Technology Development"
  },
  {
    label: "SCBUS 423 - Workshop 4: Strategic Management of Science and Business"
  },
  {
    label: "SCBUS 424 - Workshop 5: Special Topics in Science and Business"
  },
  {
    label: "SCBUS 425 - Workshop 6: Challenges in Globalizing Science and Technology"
  },
  {
    label: "SCI 200 - Energy - Its Development, Use and Issues"
  },
  {
    label: "SCI 201 - Global Warming and Climate Change"
  },
  {
    label: "SCI 205 - Physics of High Fidelity Sound Reproduction"
  },
  {
    label: "SCI 206 - The Physics of How Things Work"
  },
  {
    label: "SCI 227 - Chemistry in Society: Yesterday, Today and Tomorrow"
  },
  {
    label: "SCI 237 - Exploring the Universe"
  },
  {
    label: "SCI 238 - Introductory Astronomy"
  },
  {
    label: "SCI 250 - Environmental Geology"
  },
  {
    label: "SCI 255 - The Biology of Aging"
  },
  {
    label: "SCI 267 - Introduction to the Philosophy of Science"
  },
  {
    label: "SCI 395 - Science Study Abroad Program"
  },
  {
    label: "SCI 396 - Science Study Abroad Program"
  },
  {
    label: "SCI 397 - Science Study Abroad Program"
  },
  {
    label: "SCI 455 - Human Impact on Aquatic Systems"
  },
  {
    label: "SCI 462 - Biology of Food Production"
  },
  {
    label: "SDS 131R - Social Ideas, Social Policy and Political Practice"
  },
  {
    label: "SDS 150R - Lifespan Processes"
  },
  {
    label: "SDS 205R - History of Education in Canada"
  },
  {
    label: "SDS 210R - Children's Rights in Canada"
  },
  {
    label: "SDS 215R - Education and Social Development from a Global Perspective"
  },
  {
    label: "SDS 220R - Changing Concepts of Childhood"
  },
  {
    label: "SDS 231R - Introduction to Social Policy Processes"
  },
  {
    label: "SDS 240R - Art and Society"
  },
  {
    label: "SDS 250R - Social Statistics"
  },
  {
    label: "SDS 251R - Social Research"
  },
  {
    label: "SDS 311R - Public Policy and Native Peoples in Canada"
  },
  {
    label: "SDS 312R - Homelessness & Public Policy"
  },
  {
    label: "SDS 331R - Social Inequality, Social Justice, and Public Policy"
  },
  {
    label: "SDS 350R - Adult Life Crises and Events"
  },
  {
    label: "SDS 351R - Qualitative Research in Social Development Studies"
  },
  {
    label: "SDS 353R - The Evolution of Family Law in Canadian Society"
  },
  {
    label: "SDS 354R - Values and the Contemporary Family"
  },
  {
    label: "SDS 355R - Resilience and Social Support"
  },
  {
    label: "SDS 370R - International Learning Experience"
  },
  {
    label: "SDS 375R - Studies in Interdisciplinary Social Science"
  },
  {
    label: "SDS 388R - Globalization and Social Development"
  },
  {
    label: "SDS 398R - Independent Study"
  },
  {
    label: "SDS 399R - Independent Study"
  },
  {
    label: "SDS 400R - Comparative Social Policy"
  },
  {
    label: "SDS 405R - Cosmopolitanism and Social Development"
  },
  {
    label: "SDS 415R - Gender Relations within Educational Institutions"
  },
  {
    label: "SDS 420R - Critical Encounter with Human Nature"
  },
  {
    label: "SDS 425R - Educational Equity in Canada"
  },
  {
    label: "SDS 431R - Radical Ideology and Social Policy"
  },
  {
    label: "SDS 440R - Optimal Living"
  },
  {
    label: "SDS 450R - Senior Seminar in Special Topics"
  },
  {
    label: "SDS 490R - Special Studies"
  },
  {
    label: "SDS 495R - Research Apprenticeship"
  },
  {
    label: "SDS 496R - Applied Apprenticeship in Social Development Studies"
  },
  {
    label: "SDS 499A - Senior Honours Essay/Thesis"
  },
  {
    label: "SDS 499B - Senior Honours Essay/Thesis"
  },
  {
    label: "SE 101 - Introduction to Methods of Software Engineering"
  },
  {
    label: "SE 102 - Seminar"
  },
  {
    label: "SE 201 - Seminar"
  },
  {
    label: "SE 202 - Seminar"
  },
  {
    label: "SE 212 - Logic and Computation"
  },
  {
    label: "SE 301 - Seminar"
  },
  {
    label: "SE 302 - Seminar"
  },
  {
    label: "SE 350 - Operating Systems"
  },
  {
    label: "SE 380 - Introduction to Feedback Control"
  },
  {
    label: "SE 382 - Human-computer Interaction"
  },
  {
    label: "SE 390 - Design Project Planning"
  },
  {
    label: "SE 401 - Seminar"
  },
  {
    label: "SE 402 - Seminar"
  },
  {
    label: "SE 463 - Software Requirements Specification and Analysis"
  },
  {
    label: "SE 464 - Software Design and Architectures"
  },
  {
    label: "SE 465 - Software Testing and Quality Assurance"
  },
  {
    label: "SE 490 - Design Project 1"
  },
  {
    label: "SE 491 - Design Project 2"
  },
  {
    label: "SE 498 - Advanced Topics in Software Engineering"
  },
  {
    label: "SE 499 - Project"
  },
  {
    label: "SI 101R - Introduction to Arabic 1"
  },
  {
    label: "SI 102R - Introduction to Arabic 2"
  },
  {
    label: "SI 121R - Islam in the World"
  },
  {
    label: "SI 201R - Intermediate Arabic 1"
  },
  {
    label: "SI 202R - Intermediate Arabic 2"
  },
  {
    label: "SI 221R - Islam, the West, and the Modern World"
  },
  {
    label: "SI 301R - Advanced Arabic 1"
  },
  {
    label: "SI 302R - Advanced Arabic 2"
  },
  {
    label: "SI 315R - Islam, Women, and the Modern World"
  },
  {
    label: "SI 375R - Special Topics in Islam"
  },
  {
    label: "SI 390R - Understanding Islam"
  },
  {
    label: "SMF 204 - Introduction to Human Sexuality"
  },
  {
    label: "SMF 205 - The Dark Side of Sexuality"
  },
  {
    label: "SMF 206 - Couples, Marriages, and Families"
  },
  {
    label: "SMF 207 - Parents, Children, and Family Relations"
  },
  {
    label: "SMF 208 - Introduction to Systemic Therapies and Anti-Oppressive Practices"
  },
  {
    label: "SMF 220 - Research Methods"
  },
  {
    label: "SMF 230 - Introduction to Statistics in Sexuality, Marriage, and Family Studies"
  },
  {
    label: "SMF 301 - Communication and Counselling Skills"
  },
  {
    label: "SMF 304 - Human Sexuality in Relationships"
  },
  {
    label: "SMF 305 - Social Issues and Controversies in Human Sexuality"
  },
  {
    label: "SMF 306 - The Formation and Maintenance of Close Relationships"
  },
  {
    label: "SMF 307 - Conflict, Crisis, and Dissolution in Close Relationships"
  },
  {
    label: "SMF 308 - Relational Therapy"
  },
  {
    label: "SMF 309 - Sex Therapy"
  },
  {
    label: "SMF 310 - Sexual and Relational Ethics"
  },
  {
    label: "SMF 317 - History of Sexuality: The Pre-Modern Period"
  },
  {
    label: "SMF 318 - History of Sexuality: The Modern Period"
  },
  {
    label: "SMF 319 - History of Sexuality: Special Topics"
  },
  {
    label: "SMF 365 - Special Topics in Human Sexuality"
  },
  {
    label: "SMF 366 - Special Topics in Couples, Marriages, and Family Studies"
  },
  {
    label: "SMF 367 - Special Topics in Sexuality, Marriage, and Family Studies"
  },
  {
    label: "SMF 404 - Independent Study in Sexuality, Relationships, and/or Families"
  },
  {
    label: "SMF 406 - Independent Study: Special Topics in Marriage and Family Studies"
  },
  {
    label: "SMF 408 - Independent Study: Special Topics in Couple and Family Therapy"
  },
  {
    label: "SMF 460 - Practicum and Professional Ethics"
  },
  {
    label: "SMF 461 - Practicum and Applied Theory"
  },
  {
    label: "SMF 462 - Research Thesis and Applied Theory"
  },
  {
    label: "SMF 490 - Practicum and Professional Ethics"
  },
  {
    label: "SMF 494 - Seminar in Sexuality"
  },
  {
    label: "SMF 496 - Seminar in Family Studies"
  },
  {
    label: "SMF 498 - Seminar in Therapy: Couple, Family, and Sex Therapy"
  },
  {
    label: "SOC 101 - Introduction to Sociology"
  },
  {
    label: "SOC 101R - Introduction to Sociology"
  },
  {
    label: "SOC 102 - Social Problems"
  },
  {
    label: "SOC 200 - Sociology of Marriage and Family"
  },
  {
    label: "SOC 201 - Victims and Society"
  },
  {
    label: "SOC 202 - Classical Sociological Theory"
  },
  {
    label: "SOC 204 - Sociology of Adolescence"
  },
  {
    label: "SOC 204R - Sociology of Adolescence"
  },
  {
    label: "SOC 206 - Gender Relations"
  },
  {
    label: "SOC 207 - Sociology of Education"
  },
  {
    label: "SOC 207R - Sociology of Education"
  },
  {
    label: "SOC 209 - Ancestry, History and Personal Identity"
  },
  {
    label: "SOC 210 - Sociology of Sport"
  },
  {
    label: "SOC 222 - Juvenile Delinquency"
  },
  {
    label: "SOC 223 - Deviance: Perspectives and Processes"
  },
  {
    label: "SOC 223R - Deviance: Perspectives and Processes"
  },
  {
    label: "SOC 224R - Poverty in Canada and its Social Consequences"
  },
  {
    label: "SOC 226 - Juvenile Justice"
  },
  {
    label: "SOC 227 - Criminology"
  },
  {
    label: "SOC 228 - Sociology of Criminal Justice"
  },
  {
    label: "SOC 229 - Selected Topics in Criminology"
  },
  {
    label: "SOC 232 - Technology and Social Change"
  },
  {
    label: "SOC 234 - Social Psychology and Everyday Life"
  },
  {
    label: "SOC 237 - Collective Behaviour"
  },
  {
    label: "SOC 241 - Sociology of Work and Occupations"
  },
  {
    label: "SOC 263 - Organized Crime"
  },
  {
    label: "SOC 243 - Occupational Sociology"
  },
  {
    label: "SOC 246 - Mass Communication"
  },
  {
    label: "SOC 248 - Health, Illness, and Society"
  },
  {
    label: "SOC 249 - Sociology of Mental Disorder"
  },
  {
    label: "SOC 250 - Contemporary Japanese Society"
  },
  {
    label: "SOC 253 - Demographic Change in Canada"
  },
  {
    label: "SOC 256 - Ethnic and Racial Relations"
  },
  {
    label: "SOC 258 - Millennialism & Violence"
  },
  {
    label: "SOC 260 - Religion in Sociological Perspective"
  },
  {
    label: "SOC 261 - Religion in America"
  },
  {
    label: "SOC 262 - Cults and New Religious Movements"
  },
  {
    label: "SOC 275 - Mennonites as a Sociological Community"
  },
  {
    label: "SOC 280 - Social Statistics"
  },
  {
    label: "SOC 286 - Environment and Behaviour"
  },
  {
    label: "SOC 302 - Contemporary Sociological Theory"
  },
  {
    label: "SOC 307 - Problems in Contemporary Education"
  },
  {
    label: "SOC 312 - Sociology of Science"
  },
  {
    label: "SOC 315 - Class, Status and Power"
  },
  {
    label: "SOC 321 - Introduction to Research Methods"
  },
  {
    label: "SOC 322 - Field Research Methods"
  },
  {
    label: "SOC 325 - Sexuality and the Law"
  },
  {
    label: "SOC 326 - Punishment and Society"
  },
  {
    label: "SOC 327 - Policing in a Democratic Society"
  },
  {
    label: "SOC 336 - Sociology of Professions"
  },
  {
    label: "SOC 339 - The Knowledge Society and Waterloo Region"
  },
  {
    label: "SOC 340 - Sociology of Organizations"
  },
  {
    label: "SOC 342 - Migration and Legality"
  },
  {
    label: "SOC 345 - Cyberspace and Social Life"
  },
  {
    label: "SOC 346 - Social Movements"
  },
  {
    label: "SOC 347 - Sociology of Leisure"
  },
  {
    label: "SOC 349 - Migration and Development"
  },
  {
    label: "SOC 352 - Sociology of Aging"
  },
  {
    label: "SOC 354 - Comparative Health Care Systems"
  },
  {
    label: "SOC 355J - Power and Parenting"
  },
  {
    label: "SOC 362 - Canadian Society: Special Topics"
  },
  {
    label: "SOC 365 - Urban Life and Culture"
  },
  {
    label: "SOC 366 - Entertainment Motifs: An Interactionist Analysis"
  },
  {
    label: "SOC 368 - Custodial and Rehabilitative Institutions"
  },
  {
    label: "SOC 369J - The Sociology of Community"
  },
  {
    label: "SOC 370 - Sociology of Law"
  },
  {
    label: "SOC 372 - Good and Evil in Social Relations"
  },
  {
    label: "SOC 375R - Studies in Sociology"
  },
  {
    label: "SOC 378 - Sociology of Women"
  },
  {
    label: "SOC 382 - Survey Methodology"
  },
  {
    label: "SOC 398R - Independent Study"
  },
  {
    label: "SOC 399R - Independent Study"
  },
  {
    label: "SOC 401 - Theoretical Perspectives on Gender"
  },
  {
    label: "SOC 402 - Sociology of Religion"
  },
  {
    label: "SOC 404 - Sociology of Knowledge"
  },
  {
    label: "SOC 405 - Seminar in Classical Sociological Theory"
  },
  {
    label: "SOC 406 - Seminar in Contemporary Sociological Theory"
  },
  {
    label: "SOC 407 - Canadian Social Thought"
  },
  {
    label: "SOC 408 - Contemporary Debates in Sociological Theory"
  },
  {
    label: "SOC 409 - Knowing and Acting: Social Theory from the Early Greeks to the Present"
  },
  {
    label: "SOC 410 - Symbolic Interaction and Ethnographic Research"
  },
  {
    label: "SOC 414 - Power, Persuasion, and Management"
  },
  {
    label: "SOC 415 - Social Networks"
  },
  {
    label: "SOC 416 - Educational Theory and Practice"
  },
  {
    label: "SOC 417 - Sociology of Higher Education"
  },
  {
    label: "SOC 434 - Sociology of At-Risk Youth"
  },
  {
    label: "SOC 418 - Social Theory and Popular Culture"
  },
  {
    label: "SOC 420 - Seminar in Social Inequality"
  },
  {
    label: "SOC 421 - Quantitative Methods"
  },
  {
    label: "SOC 424 - Seminar in Sociology of Health"
  },
  {
    label: "SOC 428 - Sentencing as a Social Process"
  },
  {
    label: "SOC 435 - Environmental Sociology"
  },
  {
    label: "SOC 450R - Senior Seminar in Special Topics"
  },
  {
    label: "SOC 451 - Global Development"
  },
  {
    label: "SOC 452 - Humanitarianism"
  },
  {
    label: "SOC 459 - Sociology of Work and Occupations"
  },
  {
    label: "SOC 490R - Special Studies"
  },
  {
    label: "SOC 497 - Honours Research Practicum"
  },
  {
    label: "SOC 498 - Directed Studies"
  },
  {
    label: "SOC 499A - Senior Honours Essay"
  },
  {
    label: "SOC 499B - Senior Honours Essay"
  },
  {
    label: "SOC 696 - Sociology of the Life Course"
  },
  {
    label: "SOC 697 - Practicum in Survey Administration"
  },
  {
    label: "SOC 700 - Sociological Theory"
  },
  {
    label: "SOC 703 - Social Theory and Enacted Realities: From the Early Greeks to the Present Time"
  },
  {
    label: "SOC 704 - Key Theoretical Debates"
  },
  {
    label: "SOC 705 - Theory and Research in Social Organization"
  },
  {
    label: "SOC 706 - Theory and Research in Social Psychology"
  },
  {
    label: "SOC 707 - Canadian Sociological Thought"
  },
  {
    label: "SOC 708 - Contemporary Debates in Sociological Theory"
  },
  {
    label: "SOC 709 - Selected Problems in Sociological Theory"
  },
  {
    label: "SOC 710 - Intermediate Social Statistics"
  },
  {
    label: "SOC 711 - Techniques in Longitudinal Analysis"
  },
  {
    label: "SOC 712 - Elements of Social Research"
  },
  {
    label: "SOC 785 - Cities and Security"
  },
  {
    label: "SOC 713 - Design and Data Analysis in Quantitative Research"
  },
  {
    label: "SOC 714 - Ethnographic Research in the Social Sciences"
  },
  {
    label: "SOC 715 - Mixed Methods Research"
  },
  {
    label: "SOC 716 - Qualitative Methods"
  },
  {
    label: "SOC 717 - Reflexive Research Methodologies: Contemporary Interpretive Traditions"
  },
  {
    label: "SOC 719 - Elements of Social Research Design"
  },
  {
    label: "SOC 720 - Social Inequality"
  },
  {
    label: "SOC 725 - Sociology of Health"
  },
  {
    label: "SOC 730 - Sociology of Religion"
  },
  {
    label: "SOC 735 - Environmental Sociology"
  },
  {
    label: "SOC 740 - Sociology of Deviance"
  },
  {
    label: "SOC 744 - Sociology of Crime and Justice"
  },
  {
    label: "SOC 745 - Deviance: An Interactionist Perspective"
  },
  {
    label: "SOC 750 - Sociology of Gender Roles"
  },
  {
    label: "SOC 751 - Theories of Gender Relations"
  },
  {
    label: "SOC 759 - Sociology of Work and Occupations"
  },
  {
    label: "SOC 760 - Social Networks"
  },
  {
    label: "SOC 765 - Political Sociology"
  },
  {
    label: "SOC 766 - Participatory Action Research"
  },
  {
    label: "SOC 768 - Community Engagement and Social Development"
  },
  {
    label: "SOC 770 - Comparative Social Structure"
  },
  {
    label: "SOC 774 - Family and Kinship"
  },
  {
    label: "SOC 776 - Sociology of Knowledge"
  },
  {
    label: "SOC 778 - Theorizing Discourses of Health, Illness and Disease in Everyday Life"
  },
  {
    label: "SOC 780 - Theories of Social Change"
  },
  {
    label: "SOC 781 - Global Development Governance"
  },
  {
    label: "SOC 782 - Law, Globalization and Women's Empowerment"
  },
  {
    label: "SOC 783 - Security and Regulation"
  },
  {
    label: "SOC 786 - Interdisciplinary Seminar in Aging"
  },
  {
    label: "SOC 789 - Graduate Readings in Sociology"
  },
  {
    label: "STAT 846 - Mathematical Models in Finance"
  },
  {
    label: "SOCIN 601 - Social Innovations in Complex Systems"
  },
  {
    label: "SOCIN 602 - Design Thinking for System Change"
  },
  {
    label: "SOCIN 603 - Team Process and Research Skills:  Communication, Facilitation, Collaboration, Problem Solving"
  },
  {
    label: "SOCIN 604 - Social Entrepreneurship and Scaling Social Innovation"
  },
  {
    label: "SOCIN 605 - Social Innovation Project"
  },
  {
    label: "SOCWK 120R - Introduction to Social Work"
  },
  {
    label: "SOCWK 220R - Social Work with Individuals - Theory and Practice 1"
  },
  {
    label: "SOCWK 221R - Social Group Work"
  },
  {
    label: "SOCWK 222R - Community Organization 1"
  },
  {
    label: "SOCWK 240R - Palliative Care"
  },
  {
    label: "SOCWK 300R - Canadian Social Welfare Policy"
  },
  {
    label: "SOCWK 301R - Understanding Diversity in Canada"
  },
  {
    label: "SOCWK 320R - Social Work with Individuals - Theory and Practice 2"
  },
  {
    label: "SOCWK 321R - Social Work with Families"
  },
  {
    label: "SOCWK 322R - International Perspectives in Community Organization"
  },
  {
    label: "SOCWK 326R - Philosophy and History of Social Welfare"
  },
  {
    label: "SOCWK 355R - Child Maltreatment: Identification and Prevention"
  },
  {
    label: "SOCWK 356R - Developmental Disabilities and the Family"
  },
  {
    label: "SOCWK 357R - Family Violence"
  },
  {
    label: "SOCWK 365R - Social Work in Health Care"
  },
  {
    label: "SOCWK 367R - Social Work with the Elderly"
  },
  {
    label: "SOCWK 375R - Studies in Social Work"
  },
  {
    label: "SOCWK 390A - Family Violence: An Advanced Seminar"
  },
  {
    label: "SOCWK 390B - Family Violence: An Advanced Seminar"
  },
  {
    label: "SOCWK 398R - Independent Study"
  },
  {
    label: "SOCWK 399R - Independent Study"
  },
  {
    label: "SOCWK 421R - Advanced Family Practices"
  },
  {
    label: "SOCWK 450R - Senior Seminar in Special Topics"
  },
  {
    label: "SOCWK 490R - Special Studies"
  },
  {
    label: "SPAN 101 - Introduction to Spanish 1"
  },
  {
    label: "SPAN 102 - Introduction to Spanish 2"
  },
  {
    label: "SPAN 223W - Early Spanish Literature (WLU)"
  },
  {
    label: "SPAN 150 - The Hispanic World Through Literature and the Arts"
  },
  {
    label: "SPAN 201A - Intermediate Spanish 1"
  },
  {
    label: "SPAN 201B - Intermediate Spanish 2"
  },
  {
    label: "SPAN 210 - Intermediate Spanish for Native Speakers"
  },
  {
    label: "SPAN 217 - First Nations, Native Americans, Pueblos Originarios"
  },
  {
    label: "SPAN 222W - Modern Spanish Literature (WLU)"
  },
  {
    label: "SPAN 218 - Parallel Revolutions in a Nascent Continent"
  },
  {
    label: "SPAN 220W - Topics in Spanish Culture(WLU)"
  },
  {
    label: "SPAN 227 - Introduction to Latin American Poetry and Drama"
  },
  {
    label: "SPAN 228 - Introduction to Latin American Literature"
  },
  {
    label: "SPAN 301A - Spanish in Context 1"
  },
  {
    label: "SPAN 301B - Spanish in Context 2"
  },
  {
    label: "SPAN 305W - The Hispanic Realist Novel (WLU)"
  },
  {
    label: "SPAN 326 - Theatre of the Spanish Golden Age: Texts and Cultural Contexts"
  },
  {
    label: "SPAN 327W - Cervantes & His Time (WLU)"
  },
  {
    label: "SPAN 334 - Narrating Place and Ethnicity in 19th Century Latin America"
  },
  {
    label: "SPAN 335W - Aesthetic Practices of Spanish and Latin American Filmmakers(WLU)"
  },
  {
    label: "SPAN 344 - Special Topics in Hispanic Studies"
  },
  {
    label: "SPAN 345 - Directed Studies"
  },
  {
    label: "SPAN 350 - Poetry of the Tango"
  },
  {
    label: "SPAN 366 - Aesthetics of Rupture: Latin American Avant-garde Movements"
  },
  {
    label: "SPAN 386 - Memory and Performance in Latin American Literature"
  },
  {
    label: "SPAN 387 - Gender, Power, and Representations in Latin America"
  },
  {
    label: "SPAN 390 - Introduction to Spanish Business Translation"
  },
  {
    label: "SPAN 400 - Memories and Representations: Constructive Truths and Competing Realities"
  },
  {
    label: "SPAN 401A - Advanced Composition and Conversation 1"
  },
  {
    label: "SPAN 401B - Advanced Composition and Conversation 2"
  },
  {
    label: "SPAN 410 - Visual Culture in the Contemporary Hispanic World"
  },
  {
    label: "SPAN 415 - The Hispanic Transatlantic"
  },
  {
    label: "SPAN 418 - Modernity and the Colonial Encounter in Latin America"
  },
  {
    label: "SPAN 430 - Literary Women in Early Modern Hispanic Culture"
  },
  {
    label: "SPAN 445 - History of the Spanish Language"
  },
  {
    label: "SPAN 450 - Theory and Practice of Translation"
  },
  {
    label: "SPAN 490 - Advanced Translation"
  },
  {
    label: "SPAN 497 - The Novel in Latin America"
  },
  {
    label: "SPCOM 100 - Interpersonal Communication"
  },
  {
    label: "SPCOM 101 - Theories of Communication"
  },
  {
    label: "SPCOM 102 - Introduction to Performance"
  },
  {
    label: "SPCOM 111 - Leadership, Communication, and Collaboration"
  },
  {
    label: "SPCOM 204 - Leadership, Teams, and Communication"
  },
  {
    label: "SPCOM 220 - Performance Studies"
  },
  {
    label: "SPCOM 223 - Public Speaking"
  },
  {
    label: "SPCOM 225 - Interviewing"
  },
  {
    label: "SPCOM 226 - Introduction to Intercultural Communication"
  },
  {
    label: "SPCOM 227 - Leadership"
  },
  {
    label: "SPCOM 228 - Public Communication"
  },
  {
    label: "SPCOM 300 - Special Topics in Digital Design"
  },
  {
    label: "SPCOM 323 - Speech Writing"
  },
  {
    label: "SPCOM 324 - Small Group Communication"
  },
  {
    label: "SPCOM 325 - Organizational Communication"
  },
  {
    label: "SPCOM 326 - Performing the Voice"
  },
  {
    label: "SPCOM 329 - Digital Presentations"
  },
  {
    label: "SPCOM 399 - Communication Inquiry"
  },
  {
    label: "SPCOM 401 - Gender, Communication, and Culture"
  },
  {
    label: "SPCOM 402 - Advanced Intercultural Communication"
  },
  {
    label: "SPCOM 404 - Communicating Across Differences: Spiritual Development in a Diverse World"
  },
  {
    label: "SPCOM 420 - Persuasion"
  },
  {
    label: "SPCOM 430 - Communication and Social Justice"
  },
  {
    label: "SPCOM 431 - Crisis Communication"
  },
  {
    label: "SPCOM 432 - Conflict Management"
  },
  {
    label: "SPCOM 433 - The Organizational Consultant"
  },
  {
    label: "SPCOM 434 - The Discourse of Dissent"
  },
  {
    label: "SPCOM 440 - Performative Inquiry and Practice"
  },
  {
    label: "SPCOM 475 - Communication Ethics"
  },
  {
    label: "SPCOM 490 - Selected Seminars in Speech Communication"
  },
  {
    label: "SPCOM 491 - Selected Seminars in Speech Communication"
  },
  {
    label: "SPCOM 499A - Senior Seminar"
  },
  {
    label: "SPCOM 499B - Senior Seminar"
  },
  {
    label: "STAT 202 - Introductory Statistics for Scientists"
  },
  {
    label: "STAT 206 - Statistics for Software Engineering"
  },
  {
    label: "STAT 211 - Introductory Statistics and Sampling for Accounting"
  },
  {
    label: "STAT 220 - Probability (Non-Specialist Level)"
  },
  {
    label: "STAT 221 - Statistics (Non-Specialist Level)"
  },
  {
    label: "STAT 230 - Probability"
  },
  {
    label: "STAT 231 - Statistics"
  },
  {
    label: "STAT 240 - Probability (Advanced Level)"
  },
  {
    label: "STAT 241 - Statistics (Advanced Level)"
  },
  {
    label: "STAT 316 - Introduction to Statistical Problem Solving by Computer"
  },
  {
    label: "STAT 321 - Regression and Forecasting (Non-Specialist Level)"
  },
  {
    label: "STAT 322 - Sampling and Experimental Design (Non-Specialist Level)"
  },
  {
    label: "STAT 330 - Mathematical Statistics"
  },
  {
    label: "STAT 446 - Mathematical Models in Finance"
  },
  {
    label: "STAT 331 - Applied Linear Models"
  },
  {
    label: "STAT 332 - Sampling and Experimental Design"
  },
  {
    label: "STAT 333 - Applied Probability"
  },
  {
    label: "STAT 334 - Probability Models for Business and Accounting"
  },
  {
    label: "STAT 337 - Introduction to Biostatistics"
  },
  {
    label: "STAT 340 - Computer Simulation of Complex Systems"
  },
  {
    label: "STAT 341 - Computational Statistics and Data Analysis"
  },
  {
    label: "STAT 371 - Applied Linear Models and Process Improvement for Business"
  },
  {
    label: "STAT 372 - Survey Sampling and Experimental Design Techniques for Business"
  },
  {
    label: "STAT 373 - Regression and Forecasting Methods in Finance"
  },
  {
    label: "STAT 430 - Experimental Design"
  },
  {
    label: "STAT 431 - Generalized Linear Models and their Applications"
  },
  {
    label: "STAT 433 - Stochastic Processes"
  },
  {
    label: "STAT 435 - Statistical Methods for Process Improvements"
  },
  {
    label: "STAT 436 - Introduction to the Analysis of Spatial Data in Health Research"
  },
  {
    label: "STAT 437 - Statistical Methods for Life History Analysis"
  },
  {
    label: "STAT 440 - Computational Inference"
  },
  {
    label: "STAT 441 - Statistical Learning - Classification"
  },
  {
    label: "STAT 442 - Data Visualization"
  },
  {
    label: "STAT 443 - Forecasting"
  },
  {
    label: "STAT 444 - Statistical Learning - Function Estimation"
  },
  {
    label: "STAT 450 - Estimation and Hypothesis Testing"
  },
  {
    label: "STAT 454 - Sampling Theory and Practice"
  },
  {
    label: "STAT 464 - Topics in Probability Theory"
  },
  {
    label: "STAT 466 - Topics in Statistics 1"
  },
  {
    label: "STAT 467 - Topics in Statistics 2"
  },
  {
    label: "STAT 468 - Readings in Statistics 1"
  },
  {
    label: "STAT 469 - Readings in Statistics 2"
  },
  {
    label: "STAT 631 - Introduction to Statistical Methods in Health Informatics"
  },
  {
    label: "STAT 690 - Literature and Research Studies"
  },
  {
    label: "STAT 830 - Experimental Design"
  },
  {
    label: "STAT 831 - Generalized  Linear Models and Applications"
  },
  {
    label: "STAT 833 - Stochastic Processes"
  },
  {
    label: "STAT 835 - Statistical Methods for Process Improvement"
  },
  {
    label: "STAT 836 - Introduction to the Analysis of Spatial Data in Health Research"
  },
  {
    label: "STAT 837 - Analysis of Longitudinal Data in Health Research"
  },
  {
    label: "STAT 840 - Computational Inference"
  },
  {
    label: "STAT 841 - Statistical Learning - Classification"
  },
  {
    label: "STAT 842 - Data Visualization"
  },
  {
    label: "STAT 844 - Statistical Learning - Function Estimation"
  },
  {
    label: "STAT 850 - Estimation and Hypothesis Testing"
  },
  {
    label: "STAT 854 - Sampling Theory and Practice"
  },
  {
    label: "STAT 890 - Topics in Statistics"
  },
  {
    label: "STAT 937 - Introduction  to Biostatistics and Epidemiology"
  },
  {
    label: "STAT 891 - Topics in Probability"
  },
  {
    label: "STAT 901 - Theory of Probability 1"
  },
  {
    label: "STAT 902 - Theory of Probability 2"
  },
  {
    label: "STAT 906 - Computer Intensive Methods for Stochastic Models in Finance"
  },
  {
    label: "STAT 908 - Statistical Inference"
  },
  {
    label: "STAT 923 - Multivariate Analysis"
  },
  {
    label: "STAT 929 - Time Series 1"
  },
  {
    label: "STAT 930 - Time Series 2"
  },
  {
    label: "STAT 931 - Statistical Methods for the Design and Analysis of Epidemiological Studies"
  },
  {
    label: "STAT 932 - Statistical Methods for the Design and Analysis of Randomized Intervention Trials"
  },
  {
    label: "STAT 935 - Analysis of Survival Data"
  },
  {
    label: "STAT 936 - Longitudinal Data Analysis"
  },
  {
    label: "STAT 938 - Statistical Consulting"
  },
  {
    label: "STAT 946 - Topics in Probability and Statistics"
  },
  {
    label: "SYDE 622 - Machine Intelligence"
  },
  {
    label: "STAT 947 - Topics in Biostatistics"
  },
  {
    label: "STAT 974 - Financial Econometrics"
  },
  {
    label: "STV 100 - Society, Technology and Values: Introduction"
  },
  {
    label: "STV 201 - Society, Technology and Values: Special Topics"
  },
  {
    label: "STV 202 - Design and Society"
  },
  {
    label: "STV 203 - Biotechnology and Society"
  },
  {
    label: "STV 205 - Cybernetics and Society"
  },
  {
    label: "STV 302 - Information Technology and Society"
  },
  {
    label: "STV 303 - Cross-Cultural Change, Technology and Society"
  },
  {
    label: "STV 400 - Society, Technology and Values: Senior Project"
  },
  {
    label: "STV 401 - Society, Technology & Values: Advanced Topics"
  },
  {
    label: "STV 404 - Technology in Canadian Society"
  },
  {
    label: "SUSM 601 - Foundations for Sustainability Management"
  },
  {
    label: "SUSM 602 - Theories and Concepts of Sustainability Management"
  },
  {
    label: "SUSM 603 - Research Methods for Sustainable Management"
  },
  {
    label: "SUSM 605 - Thesis Development"
  },
  {
    label: "SUSM 620 - Sustainable Operations"
  },
  {
    label: "SUSM 630 - Marketing for Sustainability"
  },
  {
    label: "SUSM 640 - Strategy for Sustainable Enterprises"
  },
  {
    label: "SUSM 650 - Sustainable Finance"
  },
  {
    label: "SUSM 675 - Reading Course"
  },
  {
    label: "SWK 600R - Diversity and Health"
  },
  {
    label: "SWK 601R - Health Policy"
  },
  {
    label: "SWK 602R - Social Work Practice in Health"
  },
  {
    label: "SWK 603R - Critical Exploration of Supervision and Leadership Roles for Social Worker"
  },
  {
    label: "SWK 604R - Evaluation of Health and Human Service Programs"
  },
  {
    label: "SWK 605R - Knowledge Mobilization and Evidence-Based Practice"
  },
  {
    label: "SWK 608R - Health Issues and Ethics"
  },
  {
    label: "SWK 609R - Social Work Practice in Mental Health"
  },
  {
    label: "SWK 650R - Interprofessional Psychosocial Oncology: Introduction to Theory and Practice"
  },
  {
    label: "SWK 651R - Relational Practice with Families"
  },
  {
    label: "SWK 652R - Sexual Health & Counseling in Cancer"
  },
  {
    label: "SWREN 120R - Introduction to Social Work"
  },
  {
    label: "SWREN 220R - Social Work with Individuals - Theory and Practice 1"
  },
  {
    label: "SWREN 221R - Social Group Work"
  },
  {
    label: "SWREN 222R - Community Organization 1"
  },
  {
    label: "SWREN 224R - Poverty in Canada and its Social Consequences"
  },
  {
    label: "SWREN 250R - Social Statistics"
  },
  {
    label: "SWREN 251R - Social Research"
  },
  {
    label: "SWREN 300R - Canadian Social Welfare Policy"
  },
  {
    label: "SWREN 301R - Understanding Diversity in Canada"
  },
  {
    label: "SWREN 311R - Public Policy and Native Peoples in Canada"
  },
  {
    label: "SWREN 312R - Homelessness & Public Policy"
  },
  {
    label: "SWREN 321R - Social Work with Families"
  },
  {
    label: "SWREN 349R - Cross-Cultural Psychology"
  },
  {
    label: "SWREN 411R - Integrative Practice: Aboriginal Perspectives and Social Work"
  },
  {
    label: "SWREN 414R - Interviewing and Assessment in Social Work Practice"
  },
  {
    label: "SWREN 422R - Advanced Macro Practice"
  },
  {
    label: "SWREN 423R - Advanced Social Group Work Practice"
  },
  {
    label: "SWREN 424R - Diversity and Empowerment"
  },
  {
    label: "SWREN 431R - Fields of Practice Research"
  },
  {
    label: "SWREN 434R - Selected Theories for Social Work Practice: Analysis and Application"
  },
  {
    label: "SWREN 441A - Practicum 1A"
  },
  {
    label: "SWREN 441B - Practicum 1B"
  },
  {
    label: "SWREN 441R - Practicum 1"
  },
  {
    label: "SWREN 442A - Practicum 2A"
  },
  {
    label: "SWREN 442B - Practicum 2B"
  },
  {
    label: "SWREN 442R - Practicum 2"
  },
  {
    label: "SWREN 443A - Practicum 3A"
  },
  {
    label: "SWREN 443B - Practicum 3B"
  },
  {
    label: "SWREN 443R - Practicum 3"
  },
  {
    label: "SWREN 470R - Mental Health and Addiction Issues: Social Work Responses"
  },
  {
    label: "SWREN 471R - Social Work with Older Adults: Critical Issues and Future Trends"
  },
  {
    label: "SWREN 472R - International Context of Practice: An Experiential Learning Opportunity"
  },
  {
    label: "SYDE 101 - Communications in Systems Design Engineering-Written and Oral"
  },
  {
    label: "SYDE 101L - Communications in Systems Design Engineering-Visualization"
  },
  {
    label: "SYDE 102 - Seminar"
  },
  {
    label: "SYDE 111 - Fundamental Engineering Math 1"
  },
  {
    label: "SYDE 112 - Fundamental Engineering Math 2"
  },
  {
    label: "SYDE 113 - Matrices and Linear Systems"
  },
  {
    label: "SYDE 281 - Mechanics of Deformable Solids"
  },
  {
    label: "SYDE 114 - Numerical and Applied Calculus"
  },
  {
    label: "SYDE 121 - Digital Computation"
  },
  {
    label: "SYDE 161 - Introduction to Design"
  },
  {
    label: "SYDE 162 - Human Factors in Design"
  },
  {
    label: "SYDE 181 - Physics 1 (Statics)"
  },
  {
    label: "SYDE 182 - Physics 2 (Dynamics)"
  },
  {
    label: "SYDE 192 - Digital Systems"
  },
  {
    label: "SYDE 192L - Digital Systems Laboratory"
  },
  {
    label: "SYDE 201 - Seminar"
  },
  {
    label: "SYDE 202 - Seminar"
  },
  {
    label: "SYDE 211 - Advanced Engineering Math 1"
  },
  {
    label: "SYDE 212 - Probability and Statistics"
  },
  {
    label: "SYDE 223 - Data Structures and Algorithms"
  },
  {
    label: "SYDE 252 - Linear Systems and Signals"
  },
  {
    label: "SYDE 261 - Design, Systems, and Society"
  },
  {
    label: "SYDE 262 - Engineering Economics of Design"
  },
  {
    label: "SYDE 283 - Physics 3 (Electricity, Magnetism and Optics)"
  },
  {
    label: "SYDE 285 - Materials Chemistry"
  },
  {
    label: "SYDE 286 - Mechanics of Deformable Solids"
  },
  {
    label: "SYDE 292 - Circuits, Instrumentation, and Measurements"
  },
  {
    label: "SYDE 292L - Circuits, Instrumentation, and Measurements Laboratory"
  },
  {
    label: "SYDE 301 - Seminar"
  },
  {
    label: "SYDE 302 - Seminar"
  },
  {
    label: "SYDE 311 - Advanced Engineering Math 2"
  },
  {
    label: "SYDE 312 - Applied Linear Algebra"
  },
  {
    label: "SYDE 322 - Software Design"
  },
  {
    label: "SYDE 332 - Introduction to Complex Systems"
  },
  {
    label: "SYDE 334 - Applied Statistics"
  },
  {
    label: "SYDE 348 - User Centred Design Methods"
  },
  {
    label: "SYDE 422 - Machine Intelligence"
  },
  {
    label: "SYDE 351 - Systems Models 1"
  },
  {
    label: "SYDE 352 - Introduction to Control Systems"
  },
  {
    label: "SYDE 352L - Control Systems Laboratory"
  },
  {
    label: "SYDE 361 - Engineering Design"
  },
  {
    label: "SYDE 362 - Systems Design Workshop 1"
  },
  {
    label: "SYDE 372 - Introduction to Pattern Recognition"
  },
  {
    label: "SYDE 381 - Thermodynamics"
  },
  {
    label: "SYDE 383 - Fluid Mechanics"
  },
  {
    label: "SYDE 384 - Biological and Human Systems"
  },
  {
    label: "SYDE 401 - Seminar"
  },
  {
    label: "SYDE 402 - Seminar"
  },
  {
    label: "SYDE 411 - Optimization and Numerical Methods"
  },
  {
    label: "SYDE 461 - Systems Design Workshop 2"
  },
  {
    label: "SYDE 462 - Systems Design Workshop 3"
  },
  {
    label: "SYDE 522 - Machine Intelligence"
  },
  {
    label: "SYDE 531 - Design Optimization Under Probabilistic Uncertainty"
  },
  {
    label: "SYDE 533 - Conflict Resolution"
  },
  {
    label: "SYDE 542 - Interface Design"
  },
  {
    label: "SYDE 543 - Cognitive Ergonomics"
  },
  {
    label: "SYDE 544 - Biomedical Measurement and Signal Processing"
  },
  {
    label: "SYDE 552 - Computational Neuroscience"
  },
  {
    label: "SYDE 553 - Advanced Dynamics"
  },
  {
    label: "SYDE 556 - Simulating Neurobiological Systems"
  },
  {
    label: "SYDE 575 - Image Processing"
  },
  {
    label: "SYDE 621 - Mathematics of Computation"
  },
  {
    label: "SYDE 625 - Tools of Intelligent Systems Design"
  },
  {
    label: "SYDE 631 - Time Series Modelling"
  },
  {
    label: "SYDE 632 - Optimization Methods"
  },
  {
    label: "SYDE 633 - Remote Sensing Systems"
  },
  {
    label: "SYDE 642 - Cognitive Engineering Methods"
  },
  {
    label: "SYDE 676 - Information Theory in Pattern Synthesis and Analysis"
  },
  {
    label: "SYDE 643 - Collaborative Systems Design"
  },
  {
    label: "SYDE 644 - Human Factors Testing"
  },
  {
    label: "SYDE 652 - Dynamics of Multibody  Systems"
  },
  {
    label: "SYDE 654 - Graphic Theoretic Models for Complex Systems"
  },
  {
    label: "SYDE 655 - Optimal Control"
  },
  {
    label: "SYDE 661 - Model-Based Robust Design"
  },
  {
    label: "SYDE 671 - Advanced Image Processing"
  },
  {
    label: "SYDE 672 - Statistical Image Processing"
  },
  {
    label: "SYDE 673 - Video Processing and Analysis"
  },
  {
    label: "SYDE 674 - 3D Computer Vision"
  },
  {
    label: "SYDE 675 - Pattern Recognition"
  },
  {
    label: "SYDE 677 - Medical Imaging"
  },
  {
    label: "SYDE 682 - Advanced MicroElectroMechanical Systems:  Principles, Design & Fabrication"
  },
  {
    label: "SYDE 683 - Modeling, Simulation and Design of MEMS and NEMS"
  },
  {
    label: "SYDE 684 - Materials Biocompatibility"
  },
  {
    label: "SYDE 710 - Topics in Mathematics"
  },
  {
    label: "SYDE 720 - Selected Topics in Computation"
  },
  {
    label: "SYDE 730 - Selected Topics in Societal-Environmental Systems"
  },
  {
    label: "SYDE 740 - Selected Topics in Human Systems"
  },
  {
    label: "SYDE 750 - Topics in Systems Modelling"
  },
  {
    label: "SYDE 760 - Topics in Engineering Design"
  },
  {
    label: "SYDE 770 - Selected Topics in Communication and Information Systems"
  },
  {
    label: "SYDE 780 - Selected Topics in Engineering Sciences"
  },
  {
    label: "TAX 600 - Introductory Tax and Accounting for MTax Students"
  },
  {
    label: "TAX 615 - Taxation and Finance"
  },
  {
    label: "TAX 616 - Tax Research and Statutory Interpretation"
  },
  {
    label: "TAX 617 - Integration of Tax/Audit/Accounting"
  },
  {
    label: "TAX 619 - Taxation of Corporations"
  },
  {
    label: "TAX 620 - Introduction to Business Structuring"
  },
  {
    label: "TAX 625 - Tax Policy"
  },
  {
    label: "TAX 626 - Business Structuring"
  },
  {
    label: "TAX 627 - International Tax I"
  },
  {
    label: "TAX 628 - Tax Planning for the Owner-Manager and Executive"
  },
  {
    label: "TAX 629 - Tax Risk Management"
  },
  {
    label: "TAX 635 - The Microeconomic Approach to Tax Planning"
  },
  {
    label: "TAX 636 - Estate & Retirement Planning"
  },
  {
    label: "TAX 637 - International Tax II"
  },
  {
    label: "TAX 638 - Research Paper"
  },
  {
    label: "TAX 690 - Topics in Taxation"
  },
  {
    label: "TN 700 - Theoretical Neuroscience Research Seminar"
  },
  {
    label: "TOUR 601 - Contemporary Perspectives on Tourism"
  },
  {
    label: "TOUR 602 - Seminar on Tourism Research"
  },
  {
    label: "TOUR 603 - Sustainable Tourism"
  },
  {
    label: "TOUR 604 - Social Planning for Tourism"
  },
  {
    label: "TOUR 609 - Practicum in Tourism"
  },
  {
    label: "TOUR 675 - Selected Topics in Tourism"
  },
  {
    label: "TS 600 - Thinking Theologically"
  },
  {
    label: "TS 601 - Special Topics in Theological Studies"
  },
  {
    label: "TS 603 - Intermediate Biblical Hebrew"
  },
  {
    label: "TS 607 - Intermediate Biblical Greek"
  },
  {
    label: "TS 610 - Reading and Teaching the Old Testament"
  },
  {
    label: "TS 611 - Reading and Teaching the New Testament"
  },
  {
    label: "TS 613 - Special Topics in Old Testament Themes"
  },
  {
    label: "TS 617 - Unity and Diversity in the New Testament"
  },
  {
    label: "TS 619 - The Bible and Peace"
  },
  {
    label: "TS 621 - Special Topics: Pastor's Theology Seminar"
  },
  {
    label: "TS 631 - Contemporary Christian Theology"
  },
  {
    label: "TS 632 - Modern Christian Thought"
  },
  {
    label: "TS 633 - Comtemporary Mennonite Theology"
  },
  {
    label: "TS 635 - Christian Ethics"
  },
  {
    label: "TS 636 - Christian Approaches to Peacemaking"
  },
  {
    label: "TS 637 - War and Peace in Christian Theology"
  },
  {
    label: "TS 638 - Doing Development: Issues of Justice and Peace"
  },
  {
    label: "TS 640 - The Mennonite Tradition in Historical Context"
  },
  {
    label: "TS 642 - The Radical Reformation"
  },
  {
    label: "TS 645 - Reformation History"
  },
  {
    label: "TS 647 - Global Christianity"
  },
  {
    label: "TS 651 - Christian Worship"
  },
  {
    label: "TS 652 - Christian Hymnody"
  },
  {
    label: "TS 653 - Worship and Music"
  },
  {
    label: "TS 662 - Dietrich Bonhoeffer: Life and Thought"
  },
  {
    label: "TS 670 - War and Peace in Christian Thought"
  },
  {
    label: "TS 674 - Church Mission"
  },
  {
    label: "TS 677 - Church and Ministry"
  },
  {
    label: "TS 678 - The Minister in the Church: Supervised Experience in Ministry I"
  },
  {
    label: "TS 679 - The Minister in the Church: Supervised Experience in Ministry II"
  },
  {
    label: "TS 681 - Personal Spirituality: Practices for Daily Living"
  },
  {
    label: "TS 684 - Pastoral Care"
  },
  {
    label: "TS 689 - Aging and the Spiritual Life"
  },
  {
    label: "TS 690 - Seminars in Theological Studies"
  },
  {
    label: "TS 691 - Selected Special Topics in Theological Studies"
  },
  {
    label: "CM 370 - Chaos and Fractals"
  },
  {
    label: "TS 692 - Workshops in Theological Studies"
  },
  {
    label: "TS 699 - Historical/Cultural Travel Courses"
  },
  {
    label: "TS 715 - Special Topics in Old Testament Exegesis"
  },
  {
    label: "TS 718 - Special Topics in New Testament Exegesis"
  },
  {
    label: "TS 724 - Biblical Foundations of Peace"
  },
  {
    label: "TS 731 - Christianity's Encounter with Other Faiths"
  },
  {
    label: "TS 735 - Theological Perspectives on Peace Issues"
  },
  {
    label: "TS 738 - Systematic Theology"
  },
  {
    label: "TS 746 - Anabaptist Spirituality in Historical Context"
  },
  {
    label: "TS 751 - Worship Ritual and Ministry"
  },
  {
    label: "TS 779 - Specialized Supervised Experience."
  },
  {
    label: "TS 783 - Integration Seminar"
  },
  {
    label: "TS 787 - Spiritual Guidance Seminar"
  },
  {
    label: "TS 792 - Special Topics Seminars"
  },
  {
    label: "TS 796 - Thesis Preparation"
  },
  {
    label: "TS 798 - Thesis Preparation"
  },
  {
    label: "UN 700 - Industrial Research Project in Nuclear Engineering"
  },
  {
    label: "UN 701 - Engineering Risk and Reliability Analysis"
  },
  {
    label: "UN 702 - Power Plant Thermodynamics"
  },
  {
    label: "UN 799 - Special Topics in Nuclear Engineering"
  },
  {
    label: "UN 801 - Nuclear Plant Systems and Operations Test"
  },
  {
    label: "UN 802 - Reactor Physics"
  },
  {
    label: "UNIV 101 - Strategies and Skills for Academic Success"
  },
  {
    label: "VCULT 100 - World Cinema and Visual Culture"
  },
  {
    label: "VCULT 101 - Art History and Visual Culture"
  },
  {
    label: "VCULT 200 - Visual Studies Across the Discipline"
  },
  {
    label: "VCULT 300 - Visual Culture in Theory"
  },
  {
    label: "WATER 601 - Integrated Water Management"
  },
  {
    label: "WATER 602 - Integrated Water Management Project"
  },
  {
    label: "WATER 620 - Sustainable Operations"
  },
  {
    label: "WKRPT 1 - Work-term Report"
  },
  {
    label: "WKRPT 2 - Work-term Report"
  },
  {
    label: "WKRPT 3 - Work-term Report"
  },
  {
    label: "WKRPT 4 - Work-term Report"
  },
  {
    label: "WKRPT 100 - Work-term Report"
  },
  {
    label: "WKRPT 101 - Work-term Report"
  },
  {
    label: "WKRPT 103 - Work-term Report"
  },
  {
    label: "WKRPT 200 - Work-term Report"
  },
  {
    label: "WKRPT 201 - Work-term Report"
  },
  {
    label: "WKRPT 203 - Work-term Report"
  },
  {
    label: "WKRPT 300 - Work-term Report"
  },
  {
    label: "WKRPT 301 - Work-term Report"
  },
  {
    label: "WKRPT 303 - Work-term Report"
  },
  {
    label: "WKRPT 400 - Work-term Report"
  },
  {
    label: "WKRPT 401 - Work-term Report"
  },
  {
    label: "WS 101 - An Introduction to Women's Studies"
  },
  {
    label: "WS 102 - Contemporary Women's Issues in Canada"
  },
  {
    label: "WS 108E - Gender and Representation"
  },
  {
    label: "WS 201 - Images of Women in Popular Culture"
  },
  {
    label: "WS 202 - Women Across Cultures: Canadian and Global Perspectives"
  },
  {
    label: "WS 205 - Gender, Culture and Technology"
  },
  {
    label: "WS 206 - Women and the Law"
  },
  {
    label: "WS 207 - Women and Entrepreneurship"
  },
  {
    label: "WS 208E - Women's Writing"
  },
  {
    label: "WS 209 - Gender Relations"
  },
  {
    label: "WS 222 - Gender Issues"
  },
  {
    label: "WS 261 - Women and the Great Religions"
  },
  {
    label: "WS 262 - Global Queer Cinema"
  },
  {
    label: "WS 281 - Women in Russia: The Conscience of a Nation"
  },
  {
    label: "WS 302 - Thinking Through Gender: Feminist Perspectives"
  },
  {
    label: "WS 306 - Contemporary Health Issues for Women"
  },
  {
    label: "WS 308 - Gender and Leisure"
  },
  {
    label: "WS 320 - Sex and the World Religions"
  },
  {
    label: "WS 321 - Women in Buddhism: A Global Perspective"
  },
  {
    label: "WS 322 - Images of the Feminine: India"
  },
  {
    label: "WS 323 - Gender and Asian Religions"
  },
  {
    label: "WS 325 - Austen"
  },
  {
    label: "WS 331 - Gender in War and Peace"
  },
  {
    label: "WS 334 - Women and Music"
  },
  {
    label: "WS 347 - Witches, Wives, and Whores"
  },
  {
    label: "WS 365 - Special Topics in Women's Studies"
  },
  {
    label: "WS 370 - Women Writers of the Italian Renaissance"
  },
  {
    label: "WS 409 - Theoretical Perspectives on Gender"
  },
  {
    label: "WS 410F - Eighteenth-Century Women Writers"
  },
  {
    label: "WS 422 - Studies in Feminist Philosophy/Philosophy of Sex"
  },
  {
    label: "WS 430 - Literary Women in Early Modern Hispanic Culture"
  },
  {
    label: "WS 475 - Advanced Research Project in Women's Studies"
  },
  {
    label: "WS 499A - Senior Honours Thesis"
  },
  {
    label: "WS 499B - Senior Honours Thesis"
  },
  {
    label: "WS 601 - Advanced Feminist Theory: Special Topics in Women's Issues"
  },
  {
    label: "WS 602 - Theories of Gender Relations"
  },
  {
    label: "WS 680 - Directed Readings in Selected Topics"
  },
  {
    label: "AFM 480 - Selected Problems and Cases in Managerial Accounting"
  },
  {
    label: "AMATH 333 - Elementary Differential Geometry"
  },
  {
    label: "AMATH 431 - Measure and Integration"
  },
  {
    label: "AMATH 432 - Functional Analysis"
  },
  {
    label: "AMATH 433 - Differential Geometry"
  },
  {
    label: "AMATH 447 - Introduction to Symbolic Computation"
  },
  {
    label: "AMATH 477 - Statistical Mechanics"
  },
  {
    label: "ANTH 103 - The Nature of Language"
  },
  {
    label: "ANTH 203 - The Archaeology of North America"
  },
  {
    label: "ANTH 210 - Anthropology Through Science Fiction"
  },
  {
    label: "ANTH 229 - Peoples of Africa"
  },
  {
    label: "ANTH 230 - Native Peoples of Canada"
  },
  {
    label: "ANTH 311 - Anthropology of Religion"
  },
  {
    label: "ANTH 335 - Arctic Archaeology"
  },
  {
    label: "ANTH 350 - Anthropology of Gender"
  },
  {
    label: "ANTH 380 - Matrilineal Societies in Aboriginal North America"
  },
  {
    label: "ANTH 404 - Human Development in a Cross-Cultural Perspective"
  },
  {
    label: "ANTH 411 - Symbolic Anthropology"
  },
  {
    label: "ANTH 420 - Social and Cultural Change"
  },
  {
    label: "ARBUS 204 - Leadership, Teams, and Communication"
  },
  {
    label: "ANTH 461 - Selected Topics in Primate Behaviour"
  },
  {
    label: "ARBUS 201 - The Principles of Entrepreneurship"
  },
  {
    label: "ARCH 114 - Visual Communication 3"
  },
  {
    label: "ARCHL 347W - Archaeology of Syria and Jordan"
  },
  {
    label: "ARTS 303 - Designing Learning Activities with Interactive Multimedia"
  },
  {
    label: "ARTS 304 - Designing Computer Simulations and Games for Learning"
  },
  {
    label: "BIOL 139 - Genetics"
  },
  {
    label: "BIOL 140 - Fundamentals of Microbiology"
  },
  {
    label: "BIOL 140L - Microbiology Laboratory"
  },
  {
    label: "BIOL 208 - Analytical Methods in Molecular Biology"
  },
  {
    label: "BIOL 250 - Organismal and Evolutionary Ecology"
  },
  {
    label: "BIOL 265 - Diversity of Life"
  },
  {
    label: "BIOL 358 - Quantitative Ecology"
  },
  {
    label: "BIOL 374L - Techniques in Animal Physiology"
  },
  {
    label: "BIOL 491B - Field Course in Terrestrial and Aquatic Biology"
  },
  {
    label: "CHEM 305 - Atmospheric Chemistry and Physics"
  },
  {
    label: "CHEM 305L - Atmospheric Modelling Laboratory"
  },
  {
    label: "CHEM 340L - Introductory Computational Chemistry Laboratory"
  },
  {
    label: "CHEM 406 - Environmental Organic Chemistry"
  },
  {
    label: "CM 271 - Introduction to Computational Mathematics"
  },
  {
    label: "CM 339 - Algorithms"
  },
  {
    label: "CM 340 - Introduction to Optimization"
  },
  {
    label: "CM 352 - Computational Methods for Differential Equations"
  },
  {
    label: "CM 353 - Computational Modeling of Cellular Systems"
  },
  {
    label: "CM 432 - Applied Cryptography"
  },
  {
    label: "CM 433 - Introduction to Symbolic Computation"
  },
  {
    label: "CM 434 - Techniques in Computational Number Theory"
  },
  {
    label: "CM 441 - Computational Discrete Optimization"
  },
  {
    label: "CM 442 - Nonlinear Optimization"
  },
  {
    label: "CM 443 - Deterministic OR Models"
  },
  {
    label: "CM 452 - Computational Methods for Partial Differential Equations"
  },
  {
    label: "CM 454 - Applications of Computational Differential Equations"
  },
  {
    label: "CM 461 - Computational Inference"
  },
  {
    label: "CM 462 - Data Visualization"
  },
  {
    label: "CM 463 - Statistical Learning - Classification"
  },
  {
    label: "CM 464 - Statistical Learning - Function Estimation"
  },
  {
    label: "CM 473 - Medical Image Processing"
  },
  {
    label: "CM 476 - Numeric Computation for Financial Modeling"
  },
  {
    label: "CM 498 - Advanced Topics in Computational Mathematics"
  },
  {
    label: "CO 352 - Computational Optimization"
  },
  {
    label: "CO 355 - Mathematical Optimization"
  },
  {
    label: "DAC 303 - Designing Learning Activities with Interactive Multimedia"
  },
  {
    label: "DAC 304 - Designing Computer Simulations and Games for Learning"
  },
  {
    label: "DAC 400 - Digital Design Research Project"
  },
  {
    label: "DRAMA 250 - Performance German I"
  },
  {
    label: "DRAMA 312 - Survey of Dramatic Literature and Theory 3"
  },
  {
    label: "DRAMA 313 - Survey of Dramatic Literature and Theory 4"
  },
  {
    label: "DRAMA 317 - Production Participation 6"
  },
  {
    label: "DRAMA 319A - William Shakespeare in Performance"
  },
  {
    label: "DRAMA 319C - Anton Chekhov in Performance"
  },
  {
    label: "DRAMA 319D - Stephen Sondheim in Performance"
  },
  {
    label: "DRAMA 332 - Design for the Theatre 2"
  },
  {
    label: "DRAMA 334 - Scenic Painting"
  },
  {
    label: "DRAMA 348 - Cultural Management 1"
  },
  {
    label: "DRAMA 349 - Cultural Management 2"
  },
  {
    label: "DRAMA 350 - Cultural Management 3"
  },
  {
    label: "DRAMA 352 - The Cinema of Science Fiction"
  },
  {
    label: "DRAMA 353 - Contemporary Italian Film"
  },
  {
    label: "DRAMA 354 - New Cinemas of East Asia (from 1985)"
  },
  {
    label: "DRAMA 355 - History of Animated Film"
  },
  {
    label: "DRAMA 356 - History of Film 1 (1895-1940)"
  },
  {
    label: "DRAMA 357 - History of Film 2 (after 1941)"
  },
  {
    label: "DRAMA 358 - French Film After 1945"
  },
  {
    label: "DRAMA 390 - Theatre for Young Audiences"
  },
  {
    label: "DRAMA 391 - Women in the Theatre"
  },
  {
    label: "DRAMA 393 - Plays on Film"
  },
  {
    label: "DRAMA 395 - Modern British Film"
  },
  {
    label: "EARTH 205 - Introduction to Atmospheric Science"
  },
  {
    label: "EARTH 305 - Atmospheric Chemistry and Physics"
  },
  {
    label: "EARTH 305L - Atmospheric Modelling Laboratory"
  },
  {
    label: "EARTH 361 - Atmospheric Motions and Physics"
  },
  {
    label: "ECE 202 - Information Session"
  },
  {
    label: "ECE 204 - Numerical Methods"
  },
  {
    label: "ECE 241 - Circuit Analysis and Design"
  },
  {
    label: "ECE 251 - Programming Languages and Translators"
  },
  {
    label: "ECE 261 - Energy Systems"
  },
  {
    label: "ECE 301 - Information Session"
  },
  {
    label: "ECE 302 - Information Session"
  },
  {
    label: "ECE 324 - Microprocessor Systems and Interfacing"
  },
  {
    label: "ECE 332 - Electronic Circuits"
  },
  {
    label: "ECE 342 - Signals and Systems"
  },
  {
    label: "ECE 355 - Software Engineering"
  },
  {
    label: "ECE 370 - Electromagnetic Fields"
  },
  {
    label: "ECE 391 - Engineering Design Concepts"
  },
  {
    label: "ECE 401 - Information Session"
  },
  {
    label: "ECE 402 - Information Session"
  },
  {
    label: "ECE 412 - Coded Digital Communications"
  },
  {
    label: "ECE 428 - Computer Networks and Security"
  },
  {
    label: "ECE 431 - Radio Frequency Microelectronics"
  },
  {
    label: "ECE 434 - Microsystems Technology"
  },
  {
    label: "ECE 437 - Integrated VLSI Systems"
  },
  {
    label: "ECE 438 - Digital Integrated Circuits"
  },
  {
    label: "ECE 439 - Analog Integrated Circuits"
  },
  {
    label: "ECE 443 - Circuit Analysis and Filter Design"
  },
  {
    label: "ECE 450 - Software Systems"
  },
  {
    label: "ECE 457 - Applied Artificial Intelligence"
  },
  {
    label: "ECE 471 - Electromagnetic Waves"
  },
  {
    label: "ECE 476 - Antennas and Wireless Systems"
  },
  {
    label: "ECE 492B - Engineering Design Symposium"
  },
  {
    label: "ECON 265 - Economic Development of Early Modern Europe, 1492-1780"
  },
  {
    label: "ECON 310 - History of Canadian Economic Development"
  },
  {
    label: "ECON 333 - Urban and Regional Economics"
  },
  {
    label: "ECON 334 - Institutions of International Trade and Finance"
  },
  {
    label: "ECON 335 - Economic Development"
  },
  {
    label: "ECON 384 - Special Topics"
  },
  {
    label: "ECON 385 - Special Topics"
  },
  {
    label: "ECON 386 - Special Topics"
  },
  {
    label: "ECON 387 - Special Topics"
  },
  {
    label: "ECON 388 - Special Topics"
  },
  {
    label: "ECON 389 - Special Topics"
  },
  {
    label: "ECON 461 - Comparative Economic Systems"
  },
  {
    label: "ECON 485 - Special Studies"
  },
  {
    label: "ECON 486 - Special Studies"
  },
  {
    label: "ENGL 102A - The Major Forms of Literature: Short Stories and Drama"
  },
  {
    label: "ENGL 102B - The Major Forms of Literature: Novels and Poetry"
  },
  {
    label: "ENGL 103A - The Nature and Structure of the English Language"
  },
  {
    label: "ENGL 105A - Literature in English, 1900 -1960"
  },
  {
    label: "ENGL 105B - Literature in English, 1960 to the present"
  },
  {
    label: "ENGL 107 - Issues in Canadian Literature"
  },
  {
    label: "ENGL 209 - Advanced Academic Writing"
  },
  {
    label: "ENGL 219 - Contemporary Usage"
  },
  {
    label: "ENGL 233A - Survey of Dramatic Literature and Theory 3"
  },
  {
    label: "ENGL 233B - Survey of Dramatic Literature and Theory 4"
  },
  {
    label: "ENGL 235 - Survey of Dramatic Literature and Theory 8"
  },
  {
    label: "ENGL 240R - Form and Function 1"
  },
  {
    label: "ENGL 241R - Form and Function 2"
  },
  {
    label: "ENGL 306E - Linguistics and Literature"
  },
  {
    label: "ENGL 490 - Topics in North American Literature"
  },
  {
    label: "ERS 203 - Environment and Development in a Global Perspective"
  },
  {
    label: "ERS 280 - Applied Field Studies"
  },
  {
    label: "ERS 413A - Environmental Research Project II"
  },
  {
    label: "ERS 413B - Environmental Research Project III"
  },
  {
    label: "ERS 489 - Global Food Systems"
  },
  {
    label: "ESL 100R - English Language in Canadian Contexts"
  },
  {
    label: "FINE 110 - Introduction to Art History"
  },
  {
    label: "FINE 120 - Fundamentals of Visual Art 1"
  },
  {
    label: "FINE 121 - Fundamentals of Visual Art 2"
  },
  {
    label: "FINE 200 - Appreciation and Expression"
  },
  {
    label: "FINE 226B - Intermediate Printmaking B"
  },
  {
    label: "FINE 226D - Special Topics in Printmaking"
  },
  {
    label: "FINE 228E - Photography for Artists"
  },
  {
    label: "FINE 248A - Art in Context"
  },
  {
    label: "FINE 248B - Art in Context"
  },
  {
    label: "FINE 249A - Art in Context"
  },
  {
    label: "FINE 249B - Art in Context"
  },
  {
    label: "FINE 250 - History of Film 1 (1895-1940)"
  },
  {
    label: "FINE 251 - History of Film 2 (after 1941)"
  },
  {
    label: "FINE 290 - Selected Subjects in Fine Arts"
  },
  {
    label: "FINE 313 - Special Topics in 18th- and 19th-Century Art"
  },
  {
    label: "FINE 316 - First Nations' Art in Canada"
  },
  {
    label: "FINE 319A - Special Topics in 20th-Century Art"
  },
  {
    label: "FINE 320 - Advanced Painting"
  },
  {
    label: "FINE 321 - Advanced Painting Studio"
  },
  {
    label: "FINE 322 - Advanced Sculpture"
  },
  {
    label: "FINE 323 - Advanced Sculpture Studio"
  },
  {
    label: "FINE 324 - Advanced Drawing"
  },
  {
    label: "FINE 325 - Advanced Drawing Studio"
  },
  {
    label: "FINE 326A - Advanced Image-Making Through Printmaking Processes"
  },
  {
    label: "FINE 326B - Advanced Printmaking Studio"
  },
  {
    label: "FINE 328 - Advanced Electronic Imaging"
  },
  {
    label: "FINE 329 - Electronic Imaging Studio"
  },
  {
    label: "FINE 334 - Scenic Painting"
  },
  {
    label: "FINE 336 - Design for the Theatre 2"
  },
  {
    label: "FINE 348A - Art in Context"
  },
  {
    label: "FINE 348B - Art in Context"
  },
  {
    label: "FINE 349A - Art in Context"
  },
  {
    label: "FINE 349B - Art in Context"
  },
  {
    label: "FINE 350 - French Film After 1945"
  },
  {
    label: "FINE 352 - The Cinema of Science Fiction"
  },
  {
    label: "FINE 353 - Contemporary Italian Film"
  },
  {
    label: "FINE 354 - New Cinemas of East Asia (from 1985)"
  },
  {
    label: "FINE 355 - History of Animated Film"
  },
  {
    label: "FINE 356R - Special Topics in Film"
  },
  {
    label: "FINE 357R - Special Topics in Film"
  },
  {
    label: "FINE 367 - Plays on Film"
  },
  {
    label: "FINE 371 - Advanced Ceramic Studio"
  },
  {
    label: "FINE 375 - Modern British Film"
  },
  {
    label: "FINE 380 - Film Studies Seminar"
  },
  {
    label: "FINE 381 - Film Studies Seminar"
  },
  {
    label: "FINE 390 - Selected Subjects in Fine Arts"
  },
  {
    label: "FINE 391 - Selected Subjects in Fine Arts"
  },
  {
    label: "FINE 392 - Selected Subjects in Fine Arts"
  },
  {
    label: "FINE 394 - Fine Arts Abroad"
  },
  {
    label: "FINE 460A - Senior Honours Seminar"
  },
  {
    label: "FINE 460B - Senior Honours Seminar"
  },
  {
    label: "FINE 461 - Senior Honours Seminar - Joint Honours and Arts and Business"
  },
  {
    label: "FINE 499 - Senior Studies in Art History"
  },
  {
    label: "FR 352 - French Language 3: Module 2"
  },
  {
    label: "FR 410A - Medieval French Literature"
  },
  {
    label: "FR 410B - Medieval French Literature"
  },
  {
    label: "FR 471A - French-Canadian Literature"
  },
  {
    label: "FR 471B - French-Canadian Literature"
  },
  {
    label: "FR 495 - Senior Tutorials"
  },
  {
    label: "FR 496 - Senior Tutorials"
  },
  {
    label: "FR 497 - Senior Tutorials"
  },
  {
    label: "FR 498 - Senior Tutorials"
  },
  {
    label: "GEOG 206 - Human Dimensions of Natural Hazards"
  },
  {
    label: "GEOG 208 - Human Dimensions of Global Climate Change"
  },
  {
    label: "GEOG 210 - Image Interpretation and Photogrammetry"
  },
  {
    label: "GEOG 221 - The United States"
  },
  {
    label: "GEOG 353 - Retail Location"
  },
  {
    label: "GEOG 360 - Environment and Behaviour"
  },
  {
    label: "GEOG 365 - Study Abroad"
  },
  {
    label: "GEOG 366 - Study Abroad"
  },
  {
    label: "GEOG 372 - Waterloo in Switzerland -- Lausanne"
  },
  {
    label: "GEOG 373 - Waterloo in Switzerland -- Lausanne"
  },
  {
    label: "GEOG 393 - Approaches to Research in Human Geography"
  },
  {
    label: "GEOG 394 - Approaches to Research in Physical Geography"
  },
  {
    label: "GEOG 429 - Global Food Systems"
  },
  {
    label: "GER 203 - Written Communication"
  },
  {
    label: "GER 204 - Integrative Language Seminar"
  },
  {
    label: "GER 291 - Survey of German Literature and Culture"
  },
  {
    label: "GER 292 - Survey of German Literature and Culture"
  },
  {
    label: "GER 305 - German for Professional Purposes I"
  },
  {
    label: "GER 306 - German for Professional Purposes II"
  },
  {
    label: "GER 332 - Studies in Genre (Prose and Poetry)"
  },
  {
    label: "GER 333 - Studies in Genre (Theatre and Film)"
  },
  {
    label: "HIST 108 - Family Ties in History"
  },
  {
    label: "HIST 114 - A Comparative History of Empires"
  },
  {
    label: "HIST 130 - The Modern World in Historical Perspective"
  },
  {
    label: "HIST 207 - The Beatles and the Sixties"
  },
  {
    label: "HIST 208 - Foreign Relations of the United States since 1900"
  },
  {
    label: "HIST 244 - The Medium and the Message: Canadian Media, a History"
  },
  {
    label: "HIST 245 - War, Ethnicity and Religion in East Central Europe, 1453-1739"
  },
  {
    label: "HIST 249 - The American Impact on Canada"
  },
  {
    label: "HIST 312 - The First World War"
  },
  {
    label: "HIST 339 - The History of France in the 19th Century"
  },
  {
    label: "HIST 363W - Jews in Modern Europe 1750-1938 (WLU)"
  },
  {
    label: "HIST 387 - Ontario History since Confederation"
  },
  {
    label: "HIST 390 - The Canadian City Since 1880"
  },
  {
    label: "HLTH 349 - Health Behaviour Change"
  },
  {
    label: "ISS 205R - History of Education in Canada"
  },
  {
    label: "ISS 131R - Social Ideas, Social Policy and Political Practice"
  },
  {
    label: "ISS 150R - Lifespan Processes: The Normal Events"
  },
  {
    label: "ISS 220R - Changing Concepts of Childhood"
  },
  {
    label: "ISS 240R - Art and Society"
  },
  {
    label: "ISS 250A - Social Statistics"
  },
  {
    label: "ISS 250B - Social Statistics"
  },
  {
    label: "ISS 250R - Social Statistics"
  },
  {
    label: "ISS 251R - Social Research"
  },
  {
    label: "ISS 311R - Public Policy and Native Peoples in Canada"
  },
  {
    label: "ISS 312R - Homelessness & Public Policy"
  },
  {
    label: "ISS 350D - Adult Life Crises and Events"
  },
  {
    label: "ISS 350E - Family Law and Public Policy"
  },
  {
    label: "ISS 350G - The Evolution of Family Law in Canadian Society"
  },
  {
    label: "ISS 350H - Values and the Contemporary Family"
  },
  {
    label: "ISS 370R - International Learning Experience"
  },
  {
    label: "ISS 375R - Studies in Interdisciplinary Social Science"
  },
  {
    label: "ISS 398R - Independent Study"
  },
  {
    label: "ISS 399R - Independent Study"
  },
  {
    label: "ISS 400R - Comparative Social Policy"
  },
  {
    label: "ISS 420R - Critical Encounter with Human Nature"
  },
  {
    label: "ISS 450R - Honours Seminar in Special Topics"
  },
  {
    label: "ISS 490R - Special Studies"
  },
  {
    label: "ISS 495R - Research Apprenticeship"
  },
  {
    label: "ISS 496R - Applied Apprenticeship in Social Development Studies"
  },
  {
    label: "ISS 499A - Senior Honours Essay"
  },
  {
    label: "ISS 499B - Senior Honours Essay"
  },
  {
    label: "KIN 255 - Fundamentals of Neuroscience"
  },
  {
    label: "KIN 348 - Social Psychology of Health Behaviour"
  },
  {
    label: "KIN 349 - Health Behaviour Change"
  },
  {
    label: "LS 250 - Introduction to Research Methods"
  },
  {
    label: "MATH 211N - Advanced Calculus 1 for Nanotechnology Engineering"
  },
  {
    label: "MATH 212N - Advanced Calculus 2 for Nanotechnology Engineering"
  },
  {
    label: "ME 123 - Electrical Engineering for Mechanical Engineers"
  },
  {
    label: "ME 135 - Materials Science and Engineering"
  },
  {
    label: "ME 215 - Structure and Properties of Materials"
  },
  {
    label: "MI 202W - Mediterranean Culture and Civilization II (WLU)"
  },
  {
    label: "MSCI 424 - Organizational Knowledge, Cognition and Communication"
  },
  {
    label: "MSCI 443 - Telecommunication Management"
  },
  {
    label: "MTHEL 100 - Commercial and Business Law for Mathematics Students"
  },
  {
    label: "MTHEL 400 - Entrepreneurship, Technology and the Emerging Information Economy"
  },
  {
    label: "PACS 325 - Conflict Management for Technical Professions"
  },
  {
    label: "PDENG 15 - Professional Development - Overview"
  },
  {
    label: "PDENG 25 - Professional Development - Critical Analysis"
  },
  {
    label: "PDENG 35 - Professional Development - Responsibility"
  },
  {
    label: "PDENG 45 - Professional Development - Leadership"
  },
  {
    label: "PDENG 55 - Professional Development - Integration"
  },
  {
    label: "PDENG 57 - Integrating Professional Skills for a Global Workplace"
  },
  {
    label: "PHARM 140 - Computing for Pharmacists - Fundamental Concepts"
  },
  {
    label: "PHARM 291 - Seminars in Pharmacy 2"
  },
  {
    label: "PHARM 390 - Seminars in Pharmacy 3"
  },
  {
    label: "PHARM 415 - Clinical Rotation: Integrated Care"
  },
  {
    label: "PHIL 100 - Introduction to Philosophy"
  },
  {
    label: "PHIL 105 - Introduction to Ethics and Values"
  },
  {
    label: "PHIL 200A - Great Works of Western Philosophy: Part 1"
  },
  {
    label: "PHIL 200B - Great Works of Western Philosophy: Part 2"
  },
  {
    label: "PHIL 236 - Religious and Paranormal Experience"
  },
  {
    label: "PHIL 238 - Modern Philosophical Challenges to Religious Belief"
  },
  {
    label: "PHIL 243 - Creative Thinking, Problem Solving and Decision Making"
  },
  {
    label: "PHIL 312 - Philosophy of Education 2"
  },
  {
    label: "PHIL 322 - Contemporary Ethical Theory"
  },
  {
    label: "PHIL 387 - 20th-Century Philosophy"
  },
  {
    label: "PHIL 406 - Studies in Kant"
  },
  {
    label: "PHIL 421 - Studies in Ethics"
  },
  {
    label: "PHIL 423 - Political Philosophy 2"
  },
  {
    label: "PHIL 435 - Studies in Philosophy of Religion"
  },
  {
    label: "PHIL 436 - Studies in Philosophy of Religion"
  },
  {
    label: "PHIL 440A - Logical Theory"
  },
  {
    label: "PHIL 440B - Logical Theory"
  },
  {
    label: "PHIL 442 - Studies in Logic"
  },
  {
    label: "PHIL 456 - Problems in Metaphysics"
  },
  {
    label: "PHIL 465 - Existential Philosophy"
  },
  {
    label: "PHIL 470 - Phenomenology"
  },
  {
    label: "PHIL 473 - Special Subjects"
  },
  {
    label: "PHIL 474 - Special Subjects"
  },
  {
    label: "PHIL 475 - Special Subjects"
  },
  {
    label: "PHIL 476 - Special Subjects"
  },
  {
    label: "PHIL 477 - Special Subjects"
  },
  {
    label: "PHIL 478 - Special Subjects"
  },
  {
    label: "PHIL 479 - Special Subjects"
  },
  {
    label: "PHIL 480 - Special Subjects"
  },
  {
    label: "PHIL 483 - Special Subjects"
  },
  {
    label: "PHIL 484 - Special Subjects"
  },
  {
    label: "PHYS 258 - Thermal Physics"
  },
  {
    label: "PHYS 260A - Intermediate Physics Laboratory 1"
  },
  {
    label: "PHYS 260B - Intermediate Physics Laboratory 2"
  },
  {
    label: "PHYS 260C - Intermediate Physics Laboratory 3"
  },
  {
    label: "PHYS 276 - Introduction to Gravitational Physics"
  },
  {
    label: "PHYS 352 - Analogue Electronics"
  },
  {
    label: "PHYS 352L - Analogue Electronics Laboratory"
  },
  {
    label: "PHYS 353 - Digital Electronics"
  },
  {
    label: "PHYS 353L - Digital Electronics Laboratory"
  },
  {
    label: "PHYS 356 - Introduction to Communication and Optical Communication Physics"
  },
  {
    label: "PHYS 356L - Introduction to Communication and Optical communication Physics Laboratory"
  },
  {
    label: "PHYS 432 - Physics of Solid State Devices"
  },
  {
    label: "PHYS 441B - Electromagnetic Theory"
  },
  {
    label: "PHYS 445 - Modern Optics"
  },
  {
    label: "PHYS 482 - Physics of Medical Imaging"
  },
  {
    label: "PMATH 346 - Group Theory"
  },
  {
    label: "PMATH 354 - Measure Theory and Fourier Analysis"
  },
  {
    label: "PMATH 434 - Techniques in Computational Number Theory"
  },
  {
    label: "PMATH 442 - Fields and Galois Theory"
  },
  {
    label: "PMATH 444 - Rings, Modules, and Representations"
  },
  {
    label: "PSCI 253 - Politics in Russia"
  },
  {
    label: "PSCI 292 - Issues in Canadian Criminal Law"
  },
  {
    label: "PSCI 323 - Issues and Concepts in Contemporary Political Philosophy"
  },
  {
    label: "PSCI 357 - International Organizations"
  },
  {
    label: "PSCI 364 - The Politics of Ethnicity in Canada"
  },
  {
    label: "PSCI 427 - Special Topics in Political Philosophy"
  },
  {
    label: "PSCI 438 - Comparative Public Policy"
  },
  {
    label: "PSCI 453 - Democracy and Development"
  },
  {
    label: "PSCI 457 - Ethnic Conflict and Conflict Resolution II"
  },
  {
    label: "PSCI 459 - Organized Crime and Politics"
  },
  {
    label: "PSCI 483 - Power Politics and World Order Studies"
  },
  {
    label: "PSCI 484 - Contemporary Strategies: Theories and Policies"
  },
  {
    label: "PSCI 489 - Global Food Systems"
  },
  {
    label: "PSYCH 121R - Introductory Psychology"
  },
  {
    label: "PSYCH 220R - Social Psychology"
  },
  {
    label: "PSYCH 221R - Interpersonal Relations"
  },
  {
    label: "PSYCH 222R - Cross-Cultural Psychology"
  },
  {
    label: "PSYCH 323R - Psychopathology"
  },
  {
    label: "PSYCH 334 - Theories of Individual Counselling Psychology"
  },
  {
    label: "REC 348 - Cultural Management 1"
  },
  {
    label: "REC 350 - Therapeutic Recreation Process and Program Management"
  },
  {
    label: "REC 450 - Internship for Therapeutic Recreation"
  },
  {
    label: "RS 100E - Biblical Studies 1"
  },
  {
    label: "RS 100F - Biblical Studies 2"
  },
  {
    label: "RS 224 - Death and Dying"
  },
  {
    label: "RS 263 - Psychology of Religion and Spirituality"
  },
  {
    label: "RS 264 - Personality and Religion"
  },
  {
    label: "RS 274 - Joan of Arc: Witch, Mystic, Martyr or Saint?"
  },
  {
    label: "RS 335 - The Violence of the Bible"
  },
  {
    label: "RS 336 - Feminist Approaches to the Bible"
  },
  {
    label: "RS 352 - Contemporary Mennonite Thought"
  },
  {
    label: "RS 361 - Anthropology of Religion"
  },
  {
    label: "RS 363 - Carl Jung's Theory of Religion"
  },
  {
    label: "RS 384 - Dreams in Religious Experience"
  },
  {
    label: "RS 385 - Aging as a Spiritual Journey"
  },
  {
    label: "RS 386 - Spirituality and Psychotherapy"
  },
  {
    label: "SE 240 - Algorithms and Data Structures"
  },
  {
    label: "SMF 311 - Communication and Counselling Skills"
  },
  {
    label: "SOC 120R - Fundamentals of Sociology"
  },
  {
    label: "SOC 235 - Individual and Society"
  },
  {
    label: "SOC 247 - Death and Society"
  },
  {
    label: "SOC 265 - Political Sociology"
  },
  {
    label: "SOC 371 - Philosophy of the Social Sciences"
  },
  {
    label: "SOC 377 - Studies in the Sociology of the Mennonites"
  },
  {
    label: "SOC 411 - Sociology of the Body"
  },
  {
    label: "SOC 412 - Social Identities in Canadian Society"
  },
  {
    label: "SPAN 261W - Spanish for Communication & Business 1 (WLU)"
  },
  {
    label: "SPAN 262W - Spanish for Communication and Business 2 (WLU)"
  },
  {
    label: "SPAN 322 - The Generation of '98: Fiction"
  },
  {
    label: "SPAN 324W - A Journey Through Multicultural Spain (WLU)"
  },
  {
    label: "SPAN 325W - Contemporary Spanish Literature and Culture (WLU)"
  },
  {
    label: "SPAN 328W - Contemporary Hispanic Theatre (WLU)"
  },
  {
    label: "SPAN 333 - Modern Latin American Poetry"
  },
  {
    label: "SPAN 365W - Spanish Identity Through Literature (WLU)"
  },
  {
    label: "SPAN 388 - Contemporary Latin American Theatre"
  },
  {
    label: "SPAN 438W - Special Topics (WLU)"
  },
  {
    label: "SPAN 446W - Love in Medieval Spanish Literature (WLU)"
  },
  {
    label: "SPAN 451W - Stylistics and Professional Writing(WLU)"
  },
  {
    label: "SPAN 461W - Hispanic Linguistics"
  },
  {
    label: "SPAN 465W - Literature and Journalism in the Hispanic World"
  },
  {
    label: "SPAN 466W - Subversive Narratives in the Hispanic World (WLU)"
  },
  {
    label: "SPAN 467W - Directed Studies (WLU)"
  },
  {
    label: "SPAN 498W - Literary Adaptation in Hispanic Cinema"
  },
  {
    label: "SPCOM 400 - Digital Design Research Project"
  },
  {
    label: "SPCOM 403 - Special Topics in Speech Communication and Technology"
  },
  {
    label: "SPCOM 426 - Advanced Voice Technique"
  },
  {
    label: "SPD 270 - Psychology of Religion and Spirituality"
  },
  {
    label: "SPD 271 - Personality and Religion"
  },
  {
    label: "SPD 302 - Selected Topics in Psychology and Religion"
  },
  {
    label: "SPD 378 - Aging as a Spiritual Journey"
  },
  {
    label: "SPD 379 - Spirituality and Psychotherapy"
  },
  {
    label: "SPD 380 - Carl Jung's Theory of Religion"
  },
  {
    label: "STAT 232 - Introduction to Medical Statistics"
  },
  {
    label: "SWREN 223R - Cross-Cultural Psychology"
  },
  {
    label: "SWREN 250A - Social Statistics"
  },
  {
    label: "SWREN 250B - Social Statistics"
  },
  {
    label: "SYDE 282 - Fluid Mechanics"
  },
  {
    label: "SYDE 284 - Materials Chemistry"
  },
  {
    label: "SYDE 431 - Design Optimization Under Probabilistic Uncertainty"
  },
  {
    label: "SYDE 433 - Conflict Resolution"
  },
  {
    label: "SYDE 444 - Biomedical Measurement and Signal Processing"
  },
  {
    label: "SYDE 475 - Image Processing"
  },
  {
    label: "SYDE 482 - Dynamic Modelling of Biomechanical Systems"
  },
  {
    label: "SYDE 558 - Fuzzy Logic and Neural Networks"
  },
  {
    label: "WS 350 - Culture and Sexuality"
  },
  {
    label: "ACC 608 - US GAAP"
  },
  {
    label: "ACC 620 - Enterprise IT Architecture and Configuration Management"
  },
  {
    label: "ACC 624 - IT Security"
  },
  {
    label: "ACC 625 - IT Strategic Planning"
  },
  {
    label: "ACC 644 - E-Business: Enterprise Systems"
  },
  {
    label: "ACC 646 - E-Business: Introduction  to Electronic Commerce"
  },
  {
    label: "ACC 782 - Introduction to Research 2"
  },
  {
    label: "ADMGT 602 - Data Analysis and Management"
  },
  {
    label: "ADMGT 603 - Operations and Supply Chain Management"
  },
  {
    label: "ADMGT 604 - Marketing Management"
  },
  {
    label: "ADMGT 605 - Project Management"
  },
  {
    label: "ADMGT 606 - Entrepreneurship and Innovation"
  },
  {
    label: "AMATH 690 - Literature & Research Studies"
  },
  {
    label: "CIVE 651 - Soil Engineering"
  },
  {
    label: "CIVE 652 - Experimental Study of Geomaterials"
  },
  {
    label: "CIVE 706 - Rehabilitation of Structural Concrete"
  },
  {
    label: "CIVE 754 - Wave Material Interaction and Applications"
  },
  {
    label: "CIVE 755 - Micromechanics of Soils"
  },
  {
    label: "CIVE 773 - Microbial Ecology of Aquatic and Engineered Systems"
  },
  {
    label: "CIVE 775 - Principles of Ecological Engineering"
  },
  {
    label: "CIVE 778 - Physical Hydrology"
  },
  {
    label: "CLAS 635 - Dining in the Greek and Roman World"
  },
  {
    label: "CLAS 636 - Judaeo-Christian Literature and the Classical Past"
  },
  {
    label: "CLAS 637 - The Underworld and Afterlife in Ancient Mediterranean Literature"
  },
  {
    label: "CLAS 640 - Eastern Mediterranean Trade and Cultural Exchange"
  },
  {
    label: "CLAS 644 - The Sacred Island of Delos: Cultural Crossroads"
  },
  {
    label: "CLAS 654 - Greeks and Egyptians in  Ptolemaic Egypt"
  },
  {
    label: "CLAS 655 - Roman Frontiers and Provinces"
  },
  {
    label: "CLAS 656 - Topics in the Principate of Augustus"
  },
  {
    label: "CLAS 657 - Roman Trade, Travel and Communication"
  },
  {
    label: "CLAS 659 - The Decline of the Roman Empire and its Conseqences for the Mediterranean"
  },
  {
    label: "CLAS 690 - Directed Studies"
  },
  {
    label: "CLAS 691 - Special Topics"
  },
  {
    label: "CM 770 - Numerical Analysis"
  },
  {
    label: "CS 655 - System and Network Architectures and Implementation"
  },
  {
    label: "CS 667 - Quantum Information Processing"
  },
  {
    label: "CS 670 - Numerical Analysis"
  },
  {
    label: "CS 672 - Numerical Solution of Large Sparse Systems of Equations"
  },
  {
    label: "ECE 633 - Nanoelectronics"
  },
  {
    label: "ECE 634 - Organic Electronics"
  },
  {
    label: "ECE 635 - Fabrication in the Nanoscale: Principles, Technology, & Applications"
  },
  {
    label: "ECE 645 - Analog Filter Design"
  },
  {
    label: "ECE 733 - Advanced Bipolar Devices"
  },
  {
    label: "ECE 762 - Optimization Techniques in Power Systems"
  },
  {
    label: "ECE 765 - Distribution Systems Engineering"
  },
  {
    label: "ECON 622B - Applied Macroeconometrics"
  },
  {
    label: "ERS 630 - Waste Management"
  },
  {
    label: "GRK 673 - Greek Comedy"
  },
  {
    label: "GRK 691 - Special Topics"
  },
  {
    label: "LAT 635 - Studies in Tacitus Annals I-VI"
  },
  {
    label: "LAT 651 - Senior Latin Composition, Grammar and Reading"
  },
  {
    label: "LAT 691 - Special Topics"
  },
  {
    label: "MATH 670 - Mathematical Connections:  Real World Problems in Mathematics I"
  },
  {
    label: "MATH 671 - Mathematical Connections: Real World Problems in Mathematics II"
  },
  {
    label: "MATH 672 - Mathematical Connections:  Real World Problems in Mathematics III"
  },
  {
    label: "MATH 673 - Mathematical Connections:  Real World Problems in Mathematics IV"
  },
  {
    label: "MSCI 600 - Modeling in the Management Sciences"
  },
  {
    label: "MSCI 726 - Telecommunications Management"
  },
  {
    label: "MSCI 732 - Mathematical Programming Models: Design and Implementation"
  },
  {
    label: "NES 615 - Ancient Near Eastern Philosophy and Spirituality"
  },
  {
    label: "NES 621 - Temples and Sanctuaries in the Eastern Mediterranean World"
  },
  {
    label: "NES 625 - Myth and Burial Customs in the Ancient Near East"
  },
  {
    label: "NES 631 - Old Babylonian Royal Inscriptions"
  },
  {
    label: "NES 632 - Old Babylonian Administrative Documents and Literature"
  },
  {
    label: "NES 690 - Directed Studies"
  },
  {
    label: "NES 691 - Special Topics"
  },
  {
    label: "PHYS 741 - Electron Microscopy and Electron Diffraction"
  },
  {
    label: "PHYS 742 - Basic Theory of Nuclear Magnetic Resonance"
  },
  {
    label: "PHYS 753 - Radiation Biophysics"
  },
  {
    label: "PHYS 755 - Biophysics of Organ Systems"
  },
  {
    label: "PLAN 610 - Public Administration of the Environment & Natural Resources"
  },
  {
    label: "PLAN 668 - Environmental Assessment"
  },
  {
    label: "PSYCH 608C - Child Psychopathology and Psychotherapy Practicum"
  },
  {
    label: "PSYCH 608B - Child Psychopathology & Psychotherapy Practicum"
  },
  {
    label: "PSYCH 609 - Practicum in Supervision"
  },
  {
    label: "PSYCH 610A - Practicum in Integrated Assessment 1"
  },
  {
    label: "PSYCH 610B - Practicum in Integrated Assessment 2"
  },
  {
    label: "PSYCH 611 - Ethics Diversity, & Professional Issues in Clinical Psychology"
  },
  {
    label: "PSYCH 614C - Practicum in Couples' Therapy"
  },
  {
    label: "PSYCH 614A - Theory and Application in Couples'  Therapy"
  },
  {
    label: "PSYCH 614B - Practicum in Couples' Therapy"
  },
  {
    label: "PSYCH 616 - Clinical Research Forum"
  },
  {
    label: "PSYCH 617 - Cross-Cultural Issues in Clinical Psychology"
  },
  {
    label: "PSYCH 618 - Practicum in Interviewing & Cognitive Assessment I"
  },
  {
    label: "PSYCH 619 - Practicum in Interviewing & Cognitive Assessment II"
  },
  {
    label: "PSYCH 620 - Diagnostic Assessment Practicum"
  },
  {
    label: "PSYCH 621A - Advanced Clinical Research Forum I"
  },
  {
    label: "PSYCH 621B - Advanced Clinical Research Forum I"
  },
  {
    label: "PSYCH 622A - Advanced Clnical Research Forum II"
  },
  {
    label: "PSYCH 622B - Advanced Clinical Research Forum II"
  },
  {
    label: "PSYCH 623A - Advanced Clinical Research Forum III"
  },
  {
    label: "PSYCH 623B - Advanced Clinical Research Forum III"
  },
  {
    label: "PSYCH 624A - Advanced Clinical Research Forum IV"
  },
  {
    label: "PSYCH 624B - Advanced Clinical Research Forum IV"
  },
  {
    label: "PSYCH 625B - Traditional and Contemporary Psychotherapies"
  },
  {
    label: "PSYCH 626A - Psychotherapy Practicum I"
  },
  {
    label: "PSYCH 626B - Psychotherapy Practicum I"
  },
  {
    label: "PSYCH 626C - Psychotherapy Practicum I"
  },
  {
    label: "PSYCH 627A - Psychotheraphy Practicum II"
  },
  {
    label: "PSYCH 627B - Psychotheraphy Practicum II"
  },
  {
    label: "PSYCH 627C - Psychotherapy Practicum II"
  },
  {
    label: "PSYCH 628A - Psychotherapy Practicum III"
  },
  {
    label: "PSYCH 628B - Psychotherapy Practicum III"
  },
  {
    label: "PSYCH 628C - Psychotherapy Practicum III"
  },
  {
    label: "PSYCH 629 - Psychopathology across the Lifespan"
  },
  {
    label: "PSYCH 633 - Observation, Interviewing and Cognitive Assessment"
  },
  {
    label: "PSYCH 633A - Observation, Interviewing and Cognitive Assessment"
  },
  {
    label: "PSYCH 633B - Observation, Interviewing and Cognitive Assessment"
  },
  {
    label: "PSYCH 634 - Laboratory Research in Clinical Psychology"
  },
  {
    label: "PSYCH 635 - Clinical Fieldwork Placement I"
  },
  {
    label: "PSYCH 636 - Clinical Fieldwork Placement II"
  },
  {
    label: "PSYCH 637 - SCID-I Administration"
  },
  {
    label: "PSYCH 638 - Personality"
  },
  {
    label: "PSYCH 639 - Psychopathology in Childhood and Adolescence"
  },
  {
    label: "PSYCH 707B - Behavioural Neuroscience Seminar I"
  },
  {
    label: "PSYCH 714B - Behavioural Neuroscience Seminar II"
  },
  {
    label: "PSYCH 727A - Behavioural Neuroscience Seminar III"
  },
  {
    label: "PSYCH 727B - Behavioural Neuroscience Seminar III"
  },
  {
    label: "RUSS 620 - Topics in Folklore, Early, and Petrine Literature"
  },
  {
    label: "RUSS 621 - Topics in the Literature of the Golden Age, Realism, and Modernism"
  },
  {
    label: "RUSS 623 - Themes in Russian Literature"
  },
  {
    label: "RUSS 670 - Topics in Russian Linguistics"
  },
  {
    label: "RUSS 671 - Topics in Slavic Linguistics"
  },
  {
    label: "RUSS 695 - Reading Courses in Approved Topics"
  },
  {
    label: "SYDE 624 - System Simulation: Advanced Topics"
  },
  {
    label: "COMST 202W - Nonverbal Communication (WLU)"
  },
  {
    label: "ENVS 295W - Ecotourism and the Environment (WLU)`"
  },
  {
    label: "GBDA 206 - Issues in Contemporary Global Ethics"
  },
  {
    label: "GBDA 307 - Workshop in Digital Media, Marketing and Management 1"
  },
  {
    label: "GBDA 308 - Workshop in Digital Media, Marketing and Management 2"
  },
  {
    label: "ISS 215R - Education and Social Development from a Global Perspective"
  },
  {
    label: "ISS 231R - Introduction to Social Policy Processes"
  },
  {
    label: "ISS 331R - Social Inequality, Social Justice, and Public Policy"
  },
  {
    label: "ISS 351R - Qualitative Research in Social Development Studies"
  },
  {
    label: "ISS 355R - Resilience and Social Support"
  },
  {
    label: "ISS 415R - Gender Relations within Educational Institutions"
  },
  {
    label: "ISS 425R - Educational Equity in Canada"
  },
  {
    label: "ISS 440R - Optimal Living"
  },
  {
    label: "PSCI 350W - Theories of Justice (WLU)"
  },
  {
    label: "PSYCH 609A - Practicum in Supervision"
  },
  {
    label: "PSYCH 609B - Practicum in Supervision"
  },
  {
    label: "PSYCH 609C - Practicum in Supervision"
  },
  {
    label: "PSYCH 612A - Private Practice Placement"
  },
  {
    label: "PSYCH 612B - Private Practice Placement"
  },
  {
    label: "PSYCH 612C - Private Practice Placement"
  },
  {
    label: "PSYCH 613A - Senior Practicum"
  },
  {
    label: "PSYCH 613B - Senior Practicum"
  },
  {
    label: "PSYCH 613C - Senior Practicum"
  },
  {
    label: "PSYCH 620A - Diagnostic Assessment Practicum"
  },
  {
    label: "PSYCH 620B - Diagnostic Assessment Practicum"
  },
  {
    label: "PSYCH 625A - Traditional and Contemporary Psychotherapies"
  },
  {
    label: "PSYCH 625C - Traditional and Contemporary Psychotherapies"
  },
  {
    label: "PSYCH 635A - Clinical Fieldwork Placement I"
  },
  {
    label: "PSYCH 635B - Clinical Fieldwork Placement I"
  },
  {
    label: "PSYCH 635C - Clinical Fieldwork Placement I"
  },
  {
    label: "PSYCH 636A - Clinical Fieldwork Placement II"
  },
  {
    label: "PSYCH 636B - Clin Fieldwork Placement II"
  },
  {
    label: "PSYCH 636C - Clinical Fieldwork Placement II"
  },
  {
    label: "PSYCH 637A - Clinical Fieldwork Placement III"
  },
  {
    label: "PSYCH 637B - Clinical Fieldwork Placement III"
  },
  {
    label: "PSYCH 637C - Clinical Fieldwork Placement III"
  },
  {
    label: "RELC 265W - Cults, Sects and New Religious Movements (WLU)"
  },
  {
    label: "SOCIN 63 - Team Process and Research Skills: Communication, Facilitation, Collaboration, Problem Solving"
  },
  {
    label: "HLTH 402 - Advanced Health Promotion"
  },
  {
    label: "PSYCH 608D - Child Psychopathology & Psychotherapy Practicum"
  },
  {
    label: "PSYCH 608E - Child Psychopathology & Psychotherapy Practicum"
  },
  {
    label: "PSYCH 608F - Child Psychopathology & PsychotherapyPracticum"
  },
  {
    label: "PSYCH 608G - Child Psychopathology & Psychotherapy Practicum"
  },
  {
    label: "PSYCH 608H - Child Psychopathology & Psychotherapy Practicum"
  },
  {
    label: "PSYCH 608I - Child Psychopathology & Psychotherapy Practicum"
  },
  {
    label: "PSYCH 608J - Child Psychopathology & Psychotherapy Practicum"
  },
  {
    label: "PSYCH 608K - Child Psychopathology & Psychotherapy Practicum"
  },
  {
    label: "PSYCH 608L - Child Psychopathology & Psychotherapy Practicum"
  },
  {
    label: "PSYCH 615A - Cognitive Behaviour Therapy"
  },
  {
    label: "PSYCH 615B - Cognitive Behaviour Therapy Practicum"
  },
  {
    label: "PSYCH 615C - Cognitivie Behaviour Theraphy Practicum"
  },
  {
    label: "PSYCH 615D - Cognitive Behaviour Therapy Practicum"
  },
  {
    label: "PSYCH 615E - Cognitive Behaviour Therapy Practicum"
  },
  {
    label: "PSYCH 615F - Cognitive Behaviour Therapy Practicum"
  },
  {
    label: "PSYCH 615G - Cognitive Behaviour Therapy Practicum"
  },
  {
    label: "PSYCH 615H - Cognitive Behaviour Therapy Practicum"
  },
  {
    label: "PSYCH 615I - Cognitive Behaviour Therapy Practicum"
  },
  {
    label: "PSYCH 615J - Cognitive Behaviour Therapy Practicum"
  },
  {
    label: "PSYCH 625D - Traditional and Contemporary Psychotherapies"
  },
  {
    label: "PSYCH 625E - Traditional and Contemporary Psychotherapies"
  },
  {
    label: "PSYCH 625F - Traditional and Contemporary Psychotherapies"
  },
  {
    label: "PSYCH 625G - Traditional and Contemporary Psychotherapies"
  },
  {
    label: "PSYCH 625H - Traditional and Contemporary Psychotherapies"
  },
  {
    label: "PSYCH 625I - Traditional and Contemporary Psychotherapies"
  },
  {
    label: "PSYCH 638B - Measurement and Test Theory"
  },
  {
    label: "PSYCH 645 - Structure and Function in the Developing Brain"
  },
  {
    label: "SWK 606R - Practicum 1"
  },
  {
    label: "SWK 607R - Practicum 2"
  },
  {
    label: "ACINTY 600 - Academic Integrity Module"
  },
  {
    label: "ACINTY 610 - Academic Integrity Module"
  },
  {
    label: "ACINTY 620 - Academic Integrity Module"
  },
  {
    label: "ACINTY 630 - Academic Integrity Module"
  },
  {
    label: "ACINTY 640 - Academic Integrity Module"
  },
  {
    label: "ACINTY 650 - Academic Integrity Module"
  },
  {
    label: "ACINTY 660 - Academic Integrity Module"
  },
  {
    label: "AFM 100 - Introduction to Experiential Learning"
  },
  {
    label: "AFM 479 - Cases and Applications in Finance II"
  },
  {
    label: "AMATH 390 - Mathematics and Music"
  },
  {
    label: "ANTH 100 - Introduction to Anthropology"
  },
  {
    label: "ANTH 204 - Biological Anthropology"
  },
  {
    label: "ANTH 372 - Archaeological Field School"
  },
  {
    label: "ANTH 381 - Anthropology of South Asia"
  },
  {
    label: "ANTH 382 - Anthropology of Contemporary China"
  },
  {
    label: "ANTH 430 - Science as Practice and Culture"
  },
  {
    label: "ANTH 447 - Seminar in Medical Anthropology"
  },
  {
    label: "ANTH 498 - Anthropology Capstone"
  },
  {
    label: "BASE 32 - Academic Skills"
  },
  {
    label: "BASE 34 - Writing Skills"
  },
  {
    label: "BASE 36 - Oral Skills"
  },
  {
    label: "BASE 42 - Academic Skills"
  },
  {
    label: "BASE 44 - Writing Skills"
  },
  {
    label: "BASE 46 - Oral Skills"
  },
  {
    label: "BET 100 - Foundations of Entrepreneurial Practice"
  },
  {
    label: "BET 310 - Enterprise Co-op Entrepreneurship Planning and Execution"
  },
  {
    label: "BET 320 - Entrepreneurial Strategy"
  },
  {
    label: "BET 410A - Capstone Entrepreneurship Planning and Execution Part 1"
  },
  {
    label: "BET 410B - Capstone Entrepreneurship Planning and Execution Part 2"
  },
  {
    label: "BIOL 101 - Biology in the Modern World"
  },
  {
    label: "BIOL 414 - Parasitology"
  },
  {
    label: "BME 102 - Seminar"
  },
  {
    label: "BME 184 - Engineering Biology"
  },
  {
    label: "BME 184L - Engineering Biology Laboratory"
  },
  {
    label: "BME 201 - Seminar"
  },
  {
    label: "BME 202 - Seminar"
  },
  {
    label: "BME 213 - Statistics and Experimental Design"
  },
  {
    label: "BME 261 - Prototyping, Simulation and Design"
  },
  {
    label: "BME 281 - Mechanics of Deformable Solids"
  },
  {
    label: "BME 281L - Mechanics of Deformable Solids Laboratory"
  },
  {
    label: "BME 282 - Materials Science for Biomedical Engineers"
  },
  {
    label: "BME 283 - Chemistry Principles"
  },
  {
    label: "BME 284 - Physiological and Biological Systems"
  },
  {
    label: "BME 284L - Physiology and Anatomy Laboratory"
  },
  {
    label: "BME 285 - Engineering Biology"
  },
  {
    label: "BME 286 - The Physics of Medical Imaging"
  },
  {
    label: "BME 292 - Digital Systems"
  },
  {
    label: "BME 292L - Digital Systems Laboratory"
  },
  {
    label: "BME 301 - Seminar"
  },
  {
    label: "BME 302 - Seminar"
  },
  {
    label: "BME 351 - Linear Signals and Systems"
  },
  {
    label: "BME 352 - Control Systems"
  },
  {
    label: "BME 352L - Control Systems Laboratory"
  },
  {
    label: "BME 354 - Anatomical Systems Modeling"
  },
  {
    label: "BME 361 - Biomedical Engineering Design"
  },
  {
    label: "BME 362 - Biomedical Engineering Design Workshop 1"
  },
  {
    label: "BME 364 - Engineering Biomedical Economics"
  },
  {
    label: "BME 381 - Biomedical Engineering Ethics"
  },
  {
    label: "BME 384 - Biomedical Transport: Biofluids and Mass Transfer"
  },
  {
    label: "BME 391 - Circuits, Instrumentation, and Measurements"
  },
  {
    label: "BME 391L - Circuits, Instrumentation, and Measurements Laboratory"
  },
  {
    label: "BME 401 - Seminar"
  },
  {
    label: "BME 402 - Seminar"
  },
  {
    label: "BME 411 - Optimization and Numerical Methods"
  },
  {
    label: "BME 461 - Biomedical Engineering Design Workshop 2"
  },
  {
    label: "BME 462 - Biomedical Engineering Design Workshop 3"
  },
  {
    label: "EARTH 439 - Flow and Transport Through Fractured Rocks"
  },
  {
    label: "EARTH 695 - Earth MSc Seminar Proposal"
  },
  {
    label: "EASIA 231R - Calligraphy to Conceptual Art: Text as an Image in Islamic and East Asian Visual Arts"
  },
  {
    label: "EASIA 260R - Modern Chinese Literature (1917 - present day)"
  },
  {
    label: "EASIA 377R - Cold War in East Asia"
  },
  {
    label: "ECE 650 - Methods and Tools for Software Engineering"
  },
  {
    label: "ECON 412 - Topics in Game Theory"
  },
  {
    label: "ECON 741 - Advanced Public Economics Expenditure"
  },
  {
    label: "ECON 742 - Advanced Public Economics: Taxation"
  },
  {
    label: "ECON 751 - Advanced Labour Economics"
  },
  {
    label: "ECON 757 - Advanced Environmental Economics"
  },
  {
    label: "EMLS 101R - Oral Communications for Academic Purposes"
  },
  {
    label: "EMLS 102R - Clear Communication in English Writing"
  },
  {
    label: "EMLS 103R - Effective English Pronunciation"
  },
  {
    label: "EMLS 104R - Reading and Listening for Academic Purposes"
  },
  {
    label: "EMLS 110R - Communicating in Canadian Academic Contexts"
  },
  {
    label: "EMLS 129R - Written Academic English"
  },
  {
    label: "ENGL 294 - Game Studies"
  },
  {
    label: "ENGL 295 - Social Media"
  },
  {
    label: "ERS 374 - Special Topics in Environment, Resources and Sustainability"
  },
  {
    label: "ERS 422 - Biosphere Reserves as Social-Ecological Systems"
  },
  {
    label: "ERS 454 - Parks and Protected Areas: Issues and Trends"
  },
  {
    label: "ERS 473 - Special Topics in Environment, Resources and Sustainability"
  },
  {
    label: "ERS 622 - Biosphere Reserves as Social-Ecological Systems"
  },
  {
    label: "ERS 654 - Parks and Protected Areas"
  },
  {
    label: "ERS 684 - Soil in the Environment"
  },
  {
    label: "EVSY 302W - Climate Chnge and Soc (WLU)"
  },
  {
    label: "FINE 258 - Aspects of the Cinemas of the Americas"
  },
  {
    label: "FINE 275 - Calligraphy to Conceptual Art: Text as an Image in Islamic and East Asian Visual Arts"
  },
  {
    label: "FINE 383 - Computational Digital Art Studio"
  },
  {
    label: "GENE 21N - Topics for Technical Courses Taken on Exchange by Nanotechnology Engineering Students"
  },
  {
    label: "GENE 21U - Topics for Technical Courses Taken on Exchange by Management Engineering Students"
  },
  {
    label: "GEOG 654 - Applied Biogeochemistry"
  },
  {
    label: "HIST 377R - Cold War in East Asia"
  },
  {
    label: "HIST 660 - Transnational and Global History: Old Problems and New Directions"
  },
  {
    label: "INDEV 476 - Contemporary Issues in Development Practice"
  },
  {
    label: "INDEV 490A - Honours Thesis: Project Preparation"
  },
  {
    label: "INDEV 490B - Honours Thesis: Project Completion"
  },
  {
    label: "INTEG 452A - Real World Problem Solving A"
  },
  {
    label: "INTEG 452B - Real world Problem Solving B"
  },
  {
    label: "JS 114 - Jews and Jewishness"
  },
  {
    label: "JS 131 - Big Ideas of the Bible"
  },
  {
    label: "JS 237 - Insiders and Outsiders in the Bible"
  },
  {
    label: "JS 338 - Seeking Wisdom in the Bible"
  },
  {
    label: "LS 240 - Terrorism"
  },
  {
    label: "LS 425 - Crossing Borders: Law and Global Deviance"
  },
  {
    label: "MATH 642 - Introduction to Computer Science: A Mathematical Perspective"
  },
  {
    label: "MATH 643 - Theory of Computation"
  },
  {
    label: "MSCI 723 - Big Data Analytics"
  },
  {
    label: "MSCI 724 - Design and Analysis of Information Procurement Mechanisms"
  },
  {
    label: "MSCI 731 - Matrix-Analytic Methods in Stochastic Models"
  },
  {
    label: "MSCI 734 - Network Models and Applications"
  },
  {
    label: "MSCI 744 - Science and Technology Policy"
  },
  {
    label: "NE 111 - Introduction to Programming for Engineers"
  },
  {
    label: "PHARM 155 - Introduction to Drug Information Fundamentals"
  },
  {
    label: "PHARM 379 - Ethical Decision-Making in Pharmacy Practice"
  },
  {
    label: "PHARM 425 - Symposium"
  },
  {
    label: "PHARM 430 - Clinical Rotation 1: Primary Care"
  },
  {
    label: "PHARM 440 - Clinical Rotation 2: Institutional"
  },
  {
    label: "PHARM 450 - Clinical Rotation 3: Elective"
  },
  {
    label: "PHARM 473 - Advanced Infectious Disease"
  },
  {
    label: "PHARM 474 - Advanced Pharmacotherapeutics in the Hospital Setting"
  },
  {
    label: "PHARM 475 - Advanced Pharmacotherapeutics in the Ambulatory Care Setting"
  },
  {
    label: "PHARM 476 - Advanced Skills in Patient Engagement"
  },
  {
    label: "PHARM 496 - Advanced Professional Practice"
  },
  {
    label: "PHARM 497 - Clinical Rotation 1: Direct Patient Care Fundamentals"
  },
  {
    label: "PHARM 498 - Clinical Rotation 2: Direct Patient Care"
  },
  {
    label: "PHARM 499 - Clinical Rotation 3: Elective"
  },
  {
    label: "PHARM 612 - Principles and Practices in Systemic Treatments for Cancer"
  },
  {
    label: "PHARM 613 - Principles and Practices in Systemic Treatments for Cancer"
  },
  {
    label: "PHIL 600 - Seminar in Cognitive Science"
  },
  {
    label: "PHYS 650 - Perimeter Scholars International Explorations in Quantum Gravity"
  },
  {
    label: "PS 625 - Economics and Public Policy I"
  },
  {
    label: "PS 626 - Economics and Public Policy II"
  },
  {
    label: "PSCI 497A - Study Abroad Experience"
  },
  {
    label: "PSCI 497B - Study Abroad Experience"
  },
  {
    label: "PSCI 498A - Current Issues in Political Science"
  },
  {
    label: "PSCI 498B - Research Apprenticeship Experience"
  },
  {
    label: "PSCI 498C - Civic Engagement Experience"
  },
  {
    label: "PSYCH 316 - Pragmatic Language Development"
  },
  {
    label: "PSYCH 878 - Job Performance"
  },
  {
    label: "PSYCH 879 - Personnel Selection"
  },
  {
    label: "RS 114 - Jews and Jewishness"
  },
  {
    label: "SI 230R - Islamic Visual Culture: Art, Architecture, and Aesthetics"
  },
  {
    label: "SI 231R - Calligraphy to Conceptual Art: Text as an Image in Islamic and East Asian Visual Arts"
  },
  {
    label: "SOC 240 - Terrorism"
  },
  {
    label: "SOC 270 - International Migration"
  },
  {
    label: "SOC 310 - Social Networks"
  },
  {
    label: "SOC 425 - Crossing Borders: Law and Global Deviance"
  },
  {
    label: "SOC 784 - International Migration:  Practice, Theory & Regulation"
  },
  {
    label: "SPAN 401 - Spanish in Motion"
  },
  {
    label: "SWK 672R - International Context of Practice (Mexico); Experimental Learning"
  },
  {
    label: "SWK 690R - Special Topics in Social Work"
  },
  {
    label: "ENGL 208G - Gothic Monsters"
  },
  {
    label: "ECE 601 - Foundations of Biology in Engineering"
  },
  {
    label: "EASIA 204R - Korean Culture and Society"
  },
  {
    label: "AHS 100 - Foundations of a Healthy Lifestyle"
  },
  {
    label: "AHS 600 - Foundations of Qualitative Research Methodologies"
  },
  {
    label: "AMATH 383 - Introduction to Mathematical Biology"
  },
  {
    label: "AMATH 877 - Foundations of Quantum Theory"
  },
  {
    label: "ANTH 272 - Issues in Contemporary Indigenous Communities in Canada"
  },
  {
    label: "EASIA 291R - Special Topics in East Asian Studies"
  },
  {
    label: "ARCH 126 - Environmental Building Design"
  },
  {
    label: "ARCH 225 - Theory and Design of the Contemporary Landscape"
  },
  {
    label: "ARCH 248 - Enlightenment, Romanticism and the 19th Century"
  },
  {
    label: "ARCH 263 - Integrated Environmental Systems"
  },
  {
    label: "ARCH 264 - Building Science"
  },
  {
    label: "EASIA 202R - Chinese Culture and Society"
  },
  {
    label: "ARCH 428 - Rome and the Campagna (Rome)"
  },
  {
    label: "ARCH 429 - Global Cities"
  },
  {
    label: "STAT 438 - Advanced Methods in Biostatistics"
  },
  {
    label: "ARCH 465 - Advanced Structures: Design and Analysis"
  },
  {
    label: "ARCH 510 - Visual and Digital Media Courses"
  },
  {
    label: "ARCH 520 - Urbanism and Landscape Courses"
  },
  {
    label: "ARCH 540 - Architectural History and Theory Courses"
  },
  {
    label: "ARCH 570 - Building Technology and Environmental Courses"
  },
  {
    label: "ARCH 610 - Architectural Research and Analysis"
  },
  {
    label: "ARCH 629 - Global Cities"
  },
  {
    label: "ARCH 640 - Contemporary Theory, Culture and Criticism"
  },
  {
    label: "ARCH 662 - Steel & Concrete: Design, Structure and Construction"
  },
  {
    label: "ARCH 690 - Design Studio"
  },
  {
    label: "ARCH 691 - Design Studio - Comprehensive Building Design"
  },
  {
    label: "ARCH 693 - Thesis Research & Design Studio II"
  },
  {
    label: "AVIA 374 - Special Topics in Aviation"
  },
  {
    label: "BET 411 - Capstone Entrepreneurship Planning and Execution"
  },
  {
    label: "BET 412 - Advanced Topics in Entrepreneurship"
  },
  {
    label: "BET 420 - Entrepreneurship for Social Impact"
  },
  {
    label: "BIOL 266 - Introduction to Computational Biology"
  },
  {
    label: "BIOL 341 - Fundamentals of Immunology"
  },
  {
    label: "EASIA 360R - Pre-modern Chinese Literature"
  },
  {
    label: "BIOL 469 - Genomics"
  },
  {
    label: "BME 252 - Linear Signals and Systems"
  },
  {
    label: "BME 353 - Control Systems"
  },
  {
    label: "BME 353L - Control Systems Laboratory"
  },
  {
    label: "BME 355 - Anatomical Systems Modelling"
  },
  {
    label: "BME 356 - Control Systems"
  },
  {
    label: "BME 386 - The Physics of Medical Imaging"
  },
  {
    label: "BME 392 - Circuits, Instrumentation, and Measurements"
  },
  {
    label: "BME 392L - Circuits, Instrumentation, and Measurements Laboratory"
  },
  {
    label: "BME 393 - Digital Systems"
  },
  {
    label: "CHE 314 - Chemical Reaction Engineering"
  },
  {
    label: "CHE 361 - Bioprocess Engineering"
  },
  {
    label: "CHE 425 - Strategies for Process Improvement and Product Development"
  },
  {
    label: "PD 12 - Reflection and Learning in the Workplace"
  },
  {
    label: "CHEM 101 - Introduction to Biochemical Sciences"
  },
  {
    label: "CHEM 201 - Environmental Impact and Management of Resources 1"
  },
  {
    label: "CHEM 239 - Introduction to Biological Systems"
  },
  {
    label: "CHEM 301 - Environmental Impact and Management of Resources 2"
  },
  {
    label: "CHEM 302 - Innovation and Project Management"
  },
  {
    label: "CHEM 339 - Methods and Tools for Biosyntheses"
  },
  {
    label: "CHEM 363 - Organic Process Chemistry"
  },
  {
    label: "PACS 335 - Perspectives in Music and Peace"
  },
  {
    label: "CHEM 479 - Preparation of Biobased Compounds and Materials"
  },
  {
    label: "CHEM 491B - Biobased Chemistry Research Project 2"
  },
  {
    label: "CIVE 100 - Civil Engineering Concepts"
  },
  {
    label: "CIVE 104 - Mechanics 1"
  },
  {
    label: "CIVE 105 - Mechanics 2"
  },
  {
    label: "CIVE 115 - Linear Algebra"
  },
  {
    label: "CIVE 241 - Transport Principles and Applications"
  },
  {
    label: "CIVE 310 - Introduction to Structural Design"
  },
  {
    label: "CIVE 341 - Transportation Engineering Applications"
  },
  {
    label: "CIVE 382 - Hydrology and Open Channel Flow"
  },
  {
    label: "CIVE 392 - Economics and Life Cycle Analysis"
  },
  {
    label: "CIVE 484 - Physical Infrastructure Planning"
  },
  {
    label: "CIVE 505 - Structural Dynamics"
  },
  {
    label: "CIVE 230 - Engineering and Sustainable Development"
  },
  {
    label: "CS 634 - Security and Privacy in Health Systems"
  },
  {
    label: "CS 636 - Introduction to Computer Networks and Distributed Computer Systems"
  },
  {
    label: "CS 638 - Principles of Data Management and Use"
  },
  {
    label: "DAC 203 - Designing with Digital Sound"
  },
  {
    label: "DRAMA 100 - Introduction to Theatre"
  },
  {
    label: "DRAMA 206 - Production Participation 1"
  },
  {
    label: "DRAMA 207 - Production Participation 2"
  },
  {
    label: "SI 240R - Migration, Diaspora, and Exile: Muslim Narratives"
  },
  {
    label: "DRAMA 246 - Design for Performance"
  },
  {
    label: "DRAMA 248 - Management for the Arts"
  },
  {
    label: "DRAMA 278 - Theatre and Technology"
  },
  {
    label: "DRAMA 280 - Theatre and Performance in Canada"
  },
  {
    label: "DRAMA 282 - Gender and Performance"
  },
  {
    label: "DRAMA 284 - Site-Specific Performance"
  },
  {
    label: "DRAMA 286 - Early English Theatre"
  },
  {
    label: "DRAMA 288 - Language, Theatre, and Performance"
  },
  {
    label: "DRAMA 300 - Theories of Theatre and Performance"
  },
  {
    label: "DRAMA 316 - Production Participation 5"
  },
  {
    label: "DRAMA 368 - Collaborative Creation"
  },
  {
    label: "DRAMA 374 - Sustainability in Performance"
  },
  {
    label: "DRAMA 376 - Political Theatre and Performance"
  },
  {
    label: "DRAMA 378 - Black Theatre and Performance"
  },
  {
    label: "DRAMA 379 - Virtual Theatre and Performance"
  },
  {
    label: "DRAMA 400 - Collaborative Performance Project"
  },
  {
    label: "SMF 400 - Capstone Seminar"
  },
  {
    label: "DRAMA 410 - Collaborative Performance Project"
  },
  {
    label: "DRAMA 416 - Production Participation 9"
  },
  {
    label: "DRAMA 417 - Production Participation 10"
  },
  {
    label: "EARTH 321 - Introduction to Geomicrobiology"
  },
  {
    label: "EASIA 302R - Chinese Foreign Policy since 1949"
  },
  {
    label: "EASIA 304R - Korean Law and Society"
  },
  {
    label: "EASIA 362R - Introduction to Pre-Modern Japanese Literature"
  },
  {
    label: "EASIA 363R - Introduction to Early Modern Japanese Literature"
  },
  {
    label: "ECE 204A - Numerical Methods 1"
  },
  {
    label: "ECE 204B - Numerical Methods 2"
  },
  {
    label: "PSYCH 238 - Organizational Psychology"
  },
  {
    label: "ECON 100 - Principles of Economics"
  },
  {
    label: "CS 106 - Introduction to Computer Programming 2"
  },
  {
    label: "EMLS 601R - Speaking English for Professional Purposes"
  },
  {
    label: "EMLS 602R - Scholarly Writing in English"
  },
  {
    label: "EMLS 612R - Professional Writing for Engineers"
  },
  {
    label: "ENBUS 112 - Operationalizing Sustainable Development within Business"
  },
  {
    label: "ENBUS 211 - Principles of Marketing for Sustainability Professionals"
  },
  {
    label: "ENBUS 406 - Industrial Ecology: Sustainable Materials"
  },
  {
    label: "EASIA 203R - Japanese Culture and Society"
  },
  {
    label: "ENBUS 412 - Advanced Strategic Management for Sustainable Business"
  },
  {
    label: "ENBUS 414 - Sustainability for Small and Medium Enterprises"
  },
  {
    label: "ENGL 210C - Genres of Creative Writing"
  },
  {
    label: "ENGL 210G - Grant Writing"
  },
  {
    label: "ENGL 210J - Technical Editing"
  },
  {
    label: "ENGL 211 - First Nations, Metis, and Inuit Literatures"
  },
  {
    label: "ENGL 275 - Fiction and Film"
  },
  {
    label: "ENGL 280 - Literatures of Migration"
  },
  {
    label: "ENGL 291 - Global Literatures"
  },
  {
    label: "ENGL 472 - Research Methods in Technical Communication"
  },
  {
    label: "ENVE 225 - Environmental Modelling"
  },
  {
    label: "ENVE 277 - Air Quality Engineering"
  },
  {
    label: "ENVE 279 - Energy and the Environment"
  },
  {
    label: "ENVE 280 - Fluid Mechanics"
  },
  {
    label: "ENVE 376 - Biological Processes"
  },
  {
    label: "ENVE 383 - Advanced Hydrology and Hydraulics"
  },
  {
    label: "ENGL 108T - Tolkien: From Book to Film"
  },
  {
    label: "ENVE 400 - Environmental Engineering Project 1"
  },
  {
    label: "ENVE 401 - Environmental Engineering Project 2"
  },
  {
    label: "ENVS 274 - Special Topics in Environment"
  },
  {
    label: "ENVS 374 - Special Topics in Environment"
  },
  {
    label: "ENVS 400 - First Peoples and Business Development"
  },
  {
    label: "ANTH 309 - The Archaeology of North America"
  },
  {
    label: "ERS 342 - Professional Conservation and Restoration Practice II"
  },
  {
    label: "ERS 346 - Wildlife Ecology"
  },
  {
    label: "ERS 443 - Ecosystem Field Research"
  },
  {
    label: "ERS 446 - Wildlife Management"
  },
  {
    label: "ARCH 313 - Advanced Visualization and Analysis"
  },
  {
    label: "GER 301 - Language, Culture, and Identity"
  },
  {
    label: "GER 790 - Topics in Intercultural Perspectives"
  },
  {
    label: "GGOV 644 - International Migration:  Practice, Theory & Regulation"
  },
  {
    label: "HIST 212 - The Computing Society"
  },
  {
    label: "HIST 289 - JFK: The Decision-Maker Behind the Myth"
  },
  {
    label: "PSCI 420 - Gender and Global Politics"
  },
  {
    label: "HLTH 107 - Sociology of Activity, Health, and Well-being"
  },
  {
    label: "HLTH 173 - Contemporary Issues in Health 1"
  },
  {
    label: "HLTH 273 - Contemporary Issues in Health 2"
  },
  {
    label: "HLTH 301 - Applied Health Promotion: Theory and Practice"
  },
  {
    label: "HLTH 373 - Contemporary Issues in Health 3"
  },
  {
    label: "HLTH 401 - Global Health"
  },
  {
    label: "HLTH 441 - Advanced Qualitative Methods"
  },
  {
    label: "HLTH 481 - Community Learning Project"
  },
  {
    label: "REC 313 - Mobilizing Resources for Recreation and Sport Delivery"
  },
  {
    label: "KIN 107 - Sociology of Activity, Health, and Well-being"
  },
  {
    label: "ANTH 465 - Borders, Boundaries, and Crossings"
  },
  {
    label: "RS 312 - Muslim Lives and Practices Worldwide"
  },
  {
    label: "LS 202 - Criminal Law"
  },
  {
    label: "LS 206 - Canadian Government & Politics"
  },
  {
    label: "LS 221 - Research Methods"
  },
  {
    label: "LS 222 - Juvenile Delinquency"
  },
  {
    label: "LS 223 - Deviance: Perspectives and Processes"
  },
  {
    label: "LS 224 - Victims and Society"
  },
  {
    label: "LS 226 - Sociology of Mental Disorder"
  },
  {
    label: "LS 227 - Criminology"
  },
  {
    label: "LS 228 - Sociology of Criminal Justice"
  },
  {
    label: "LS 229 - Selected Topics in Criminology"
  },
  {
    label: "LS 235 - History of Ancient Law"
  },
  {
    label: "LS 236 - Law and Society in the Middle Ages"
  },
  {
    label: "LS 237 - Canadian Legal History"
  },
  {
    label: "LS 249 - Mental Disorder and the Law"
  },
  {
    label: "LS 263 - Organized Crime"
  },
  {
    label: "LS 271 - Conflict Resolution"
  },
  {
    label: "LS 272 - Psychology and Law"
  },
  {
    label: "LS 273 - Children's Rights in Canada"
  },
  {
    label: "LS 283 - Business Law"
  },
  {
    label: "LS 286 - Law in Popular Culture"
  },
  {
    label: "LS 291 - Legal Writing"
  },
  {
    label: "LS 292 - Literature and the Law"
  },
  {
    label: "LS 300 - Sociology of Law"
  },
  {
    label: "LS 306 - Juvenile Justice"
  },
  {
    label: "LS 319 - Negotiation: Theories and Strategies"
  },
  {
    label: "LS 325 - Sexuality and the Law"
  },
  {
    label: "LS 326 - Punishment and Society"
  },
  {
    label: "LS 327 - Policing in a Democratic Society"
  },
  {
    label: "LS 331 - Human Rights in Historical Perspective"
  },
  {
    label: "LS 344 - Restorative Justice"
  },
  {
    label: "LS 351 - Philosophy of Law"
  },
  {
    label: "LS 352 - Human Rights"
  },
  {
    label: "LS 363 - Canadian Constitutional Law"
  },
  {
    label: "LS 365 - Transnational Migration"
  },
  {
    label: "LS 366 - Global Governance"
  },
  {
    label: "LS 372 - Criminal Profiling"
  },
  {
    label: "LS 373 - Public Policy and Native Peoples in Canada"
  },
  {
    label: "LS 374 - The Evolution of Family Law in Canadian Society"
  },
  {
    label: "LS 386 - Law and Violence"
  },
  {
    label: "INDEV 262 - Introduction to Global Emerging Cities"
  },
  {
    label: "MEDVL 251R - The History of Islamic Civilization from 1300-1800: The Islamic Gunpowder Empires"
  },
  {
    label: "LS 413 - Surveillance and Society"
  },
  {
    label: "LS 428 - Sentencing as a Social Process"
  },
  {
    label: "LS 434 - Sociology of At-Risk Youth"
  },
  {
    label: "LS 461 - Transnational Organized Crime"
  },
  {
    label: "LS 462 - Government and Politics of Indigenous Peoples"
  },
  {
    label: "LS 463 - Rights and Public Policy"
  },
  {
    label: "LS 464 - Justice and Gender"
  },
  {
    label: "LS 492 - Communication and Social Justice"
  },
  {
    label: "MNS 410 - Special Topics in Solid-State Materials"
  },
  {
    label: "MNS 431 - Special Topics in Nano-Biomaterials"
  },
  {
    label: "MTHEL 300 - Professional Communications in Statistics and Actuarial Science"
  },
  {
    label: "NATST 272 - Issues in Contemporary Native Communities in Canada"
  },
  {
    label: "NE 109 - Societal and Environmental Impacts of Nanotechnology"
  },
  {
    label: "NE 215 - Probability and Statistics"
  },
  {
    label: "OPTOM 682 - Visual Motor Neuroscience"
  },
  {
    label: "OPTOM 683 - Visual Sensory Neuroscience"
  },
  {
    label: "PACS 332 - Ethics of Peacebuilding"
  },
  {
    label: "PACS 333 - Advanced Mediation Practice"
  },
  {
    label: "PHARM 614 - Systematic Review and Meta-Analysis"
  },
  {
    label: "PHARM 615 - Strategic Management of Biopharmaceutical Technology"
  },
  {
    label: "PHARM 616 - PhD Thesis Proposal"
  },
  {
    label: "PHARM 617 - Formulations"
  },
  {
    label: "CS 105 - Introduction to Computer Programming 1"
  },
  {
    label: "PHS 651 - Theory and Applications in Program Evaluation"
  },
  {
    label: "PHS 652 - Qualitative and Mixed Methods and Analysis"
  },
  {
    label: "PHS 653 - Evaluation Practice and Management"
  },
  {
    label: "PHS 654 - Systems Thinking and Analysis in Health Program Planning and Evaluation"
  },
  {
    label: "PHS 655 - Survey Methods"
  },
  {
    label: "PHYS 474 - Galaxies"
  },
  {
    label: "PHYS 483 - Advanced Therapeutic Concepts in Oncology and Medical Physics"
  },
  {
    label: "PHYS 491 - Special Topics in Life, Medical and Biophysics"
  },
  {
    label: "ARTS 102 - Foundations for Writing"
  },
  {
    label: "PLAN 705 - Design in Planning"
  },
  {
    label: "PMATH 930 - Topics in Logic"
  },
  {
    label: "PMATH 940 - Topics in Number Theory"
  },
  {
    label: "PMATH 945 - Topics in Algebra"
  },
  {
    label: "PMATH 950 - Topics in Analysis"
  },
  {
    label: "PMATH 965 - Topics in Gemetry and Topology"
  },
  {
    label: "PMATH 990 - Topics in Pure Mathematics"
  },
  {
    label: "PSCI 359 - Politics of South Asia"
  },
  {
    label: "PSCI 370W - The Political Economy of Eastern Asia (WLU)"
  },
  {
    label: "EASIA 391R - Special Topics"
  },
  {
    label: "PSCI 450 - Politics of Authoritarianism"
  },
  {
    label: "PSYCH 444R - Psychological Interventions"
  },
  {
    label: "PSYCH 451 - Honours Seminar - Child and Adolescent Psychopathology"
  },
  {
    label: "PSYCH 459 - Honours Seminar - Close Relationships"
  },
  {
    label: "PSYCH 823 - Research Apprenticeship I"
  },
  {
    label: "PSYCH 824 - Research Apprenticeship II"
  },
  {
    label: "PSYCH 875 - Organizational Psychology"
  },
  {
    label: "PSYCH 876 - The Psychology of Justice in the Workplace"
  },
  {
    label: "ANTH 377 - Dental Anthropology"
  },
  {
    label: "REC 107 - Sociology of Activity, Health, and Well-being"
  },
  {
    label: "REC 172 - Special Topics in Leisure Studies 1"
  },
  {
    label: "REC 272 - Special Topics in Leisure Studies 2"
  },
  {
    label: "REC 373 - Qualitative Approaches to Leisure Research"
  },
  {
    label: "SPCOM 335 - Power, Agency, Community"
  },
  {
    label: "RS 115R - Sex, Politics, and Religion in the U.S. and Canada"
  },
  {
    label: "SPAN 395 - Cultural Dimensions in English/Spanish Literary Translation"
  },
  {
    label: "RS 227 - Buddhism in North America"
  },
  {
    label: "SCI 207 - Physics, the Universe, and Everything"
  },
  {
    label: "SI 320R - Introduction to Modern Arab and Muslim Drama"
  },
  {
    label: "SOC 205 - Social Problems"
  },
  {
    label: "SOC 221 - Research Methods"
  },
  {
    label: "SOC 225 - Games and Gamers"
  },
  {
    label: "SOC 306 - Juvenile Justice"
  },
  {
    label: "SOC 320 - Social Problems in a Global Context"
  },
  {
    label: "SOC 324 - Digital Cultures"
  },
  {
    label: "SOC 413 - Surveillance and Society"
  },
  {
    label: "SOC 461 - Transnational Organized Crime"
  },
  {
    label: "STAT 814 - Systematic Review and Meta-Analysis"
  },
  {
    label: "STV 210 - The Computing Society"
  },
  {
    label: "WKRPT 200M - Work-term Report"
  },
  {
    label: "WKRPT 300M - Work-term Report"
  },
  {
    label: "WKRPT 400M - Work-term Report"
  },
  {
    label: "ANTH 241 - Food as Culture"
  },
  {
    label: "PHARM 351 - Management Issues in Community Pharmacy Practice"
  },
  {
    label: "BME 285L - Engineering Biology Laboratory"
  },
  {
    label: "MEDVL 250R - The History of Islamic Civilization from Late Antiquity to 1300"
  },
  {
    label: "SI 241R - Sacred Spaces and Human Geographies: Literary Expressions"
  },
  {
    label: "ANTH 415 - Archaeologies of Landscape"
  },
  {
    label: "CS 383 - Computational Digital Art Studio"
  },
  {
    label: "JAPAN 391R - Special Topics"
  },
  {
    label: "KOREA 391R - Special Topics"
  },
  {
    label: "ARCH 671 - Technical Report"
  },
  {
    label: "AFM 344 - Introduction to Business Analytics"
  },
  {
    label: "MNS 10 - Materials and Nanosciences Seminar"
  },
  {
    label: "PHARM 324 - Integrated Patient Focused Care 8"
  },
  {
    label: "ACC 800 - Directed Readings in Accounting"
  },
  {
    label: "PD 11 - Processes for Technical Report Writing"
  },
  {
    label: "PHARM 330 - Professional Practice 6"
  },
  {
    label: "BME 186 - Chemistry Principles"
  },
  {
    label: "PHARM 323 - Integrated Patient Focused Care 7"
  },
  {
    label: "SI 250R - The History of Islamic Civilization from Late Antiquity to 1300"
  },
  {
    label: "SI 251R - The History of Islamic Civilization from 1300-1800: The Islamic Gunpowder Empires"
  },
  {
    label: "NE 250 - Work-term Report 1"
  },
  {
    label: "PHARM 352 - Management Issues in Pharmacy Practice in Organizations"
  },
  {
    label: "PHARM 353 - Entrepreneurship in Pharmacy"
  },
  {
    label: "ANTH 221 - Language and Society"
  },
  {
    label: "EASIA 361R - Modern Chinese Literature (1917 - present day)"
  },
  {
    label: "AHS 107 - Sociology of Activity, Health, and Well-being"
  },
  {
    label: "ECON 206 - Money and Banking 1"
  },
  {
    label: "ECON 207 - Economic Growth and Development 1"
  },
  {
    label: "ECON 212 - Introduction to Game Theory"
  },
  {
    label: "ECON 255 - Introduction to the Economics of Natural Resources"
  },
  {
    label: "ECON 256 - Introduction to Health Economics"
  },
  {
    label: "ECON 261 - Philosophy of Economics"
  },
  {
    label: "ECON 262 - History of Economic Thought"
  },
  {
    label: "ECON 290 - Models of Choice in Competitive Markets"
  },
  {
    label: "ECON 306 - Macroeconomics"
  },
  {
    label: "ECON 322 - Econometric Analysis 1"
  },
  {
    label: "ECON 323 - Econometric Analysis 2"
  },
  {
    label: "ECON 366 - Gender and Economics"
  },
  {
    label: "ECON 391 - Equilibrium in Market Economies"
  },
  {
    label: "ECON 392 - Strategic Situations and Welfare Economics"
  },
  {
    label: "ECON 393 - Market Failures"
  },
  {
    label: "ECON 406 - Money and Banking 2"
  },
  {
    label: "ECON 407 - Economic Growth and Development 2"
  },
  {
    label: "ECON 408 - Business Cycles"
  },
  {
    label: "ECON 409 - Workers, Jobs, and Wages"
  },
  {
    label: "ECON 423 - Time Series Econometrics"
  },
  {
    label: "ECON 474 - Numerical Methods for Economists"
  },
  {
    label: "ECON 491 - Advanced Microeconomics"
  },
  {
    label: "ECON 496 - Advanced Macroeconomics"
  },
  {
    label: "FINE 217 - Art of the 18th Century in Europe"
  },
  {
    label: "FINE 259 - Aspects of European Cinema"
  },
  {
    label: "FINE 307 - Advanced Topics in Studio"
  },
  {
    label: "FINE 308 - Honours Studio/Seminar"
  },
  {
    label: "FINE 403 - Honours Concept and Research"
  },
  {
    label: "FR 250 - Intermediate Spoken French"
  },
  {
    label: "FR 296 - French Culture & Literature: Origins to 1715"
  },
  {
    label: "GENE 23E - Topics for Natural Science Elective Courses Taken on Exchange by Electrical Engineering Students"
  },
  {
    label: "GENE 23K - Topics for Natural Science Elective Courses Taken on Exchange by Civil Engineering Students"
  },
  {
    label: "GENE 23Q - Topics for Natural Science Elective Courses Taken on Exchange by Computer Engineering Students"
  },
  {
    label: "GENE 23S - Topics for Natural Science Elective Courses Taken on Exchange by Software Engineering Students"
  },
  {
    label: "GEOG 325 - Geographies of Health"
  },
  {
    label: "HLTH 601 - Lifespan Approaches to Disease Prevention and Health Promotion"
  },
  {
    label: "GER 200 - Transcultural Studies"
  },
  {
    label: "GERON 310 - Development, Aging and Health"
  },
  {
    label: "GERON 320 - Psychosocial Perspectives on Lifespan Development and Health"
  },
  {
    label: "HIST 421 - Special Topics in History"
  },
  {
    label: "HIST 422 - Special Topics in History"
  },
  {
    label: "HIST 450 - The History Capstone"
  },
  {
    label: "HLTH 204 - Quantitative Approaches to Health Science"
  },
  {
    label: "HLTH 230 - Introduction to Health Informatics"
  },
  {
    label: "HLTH 280 - Applied Public Health Ethics"
  },
  {
    label: "HLTH 304 - Health Communication"
  },
  {
    label: "HLTH 320 - Psychosocial Perspectives on Lifespan Development and Health"
  },
  {
    label: "HLTH 370 - Ecological Determinants of Health"
  },
  {
    label: "HLTH 412 - Comparative Health Systems"
  },
  {
    label: "HLTH 603 - Health Policy"
  },
  {
    label: "INTEG 420A - Senior Research Project A"
  },
  {
    label: "INTEG 420B - Senior Research Project B"
  },
  {
    label: "KIN 310 - Development, Aging and Health"
  },
  {
    label: "KIN 332 - Research Design and Statistics in Kinesiology"
  },
  {
    label: "MSCI 391 - Work-term Report"
  },
  {
    label: "MSCI 392 - Work-term Report"
  },
  {
    label: "MSCI 491 - Work-term Report"
  },
  {
    label: "MTE 309 - Introduction to Thermodynamics and Heat Transfer"
  },
  {
    label: "MUSIC 110 - Music in Cultural Contexts"
  },
  {
    label: "MUSIC 232 - Music as a Global Phenomenon"
  },
  {
    label: "MUSIC 233 - Musical Rhythm in Global Perspective"
  },
  {
    label: "MUSIC 262 - Music for Vocal Ensemble"
  },
  {
    label: "MUSIC 333 - Music and Landscape"
  },
  {
    label: "MUSIC 335 - Perspectives in Music and Peace"
  },
  {
    label: "MUSIC 392 - Special Topics in Global Music"
  },
  {
    label: "NE 345 - Photonic Materials and Devices"
  },
  {
    label: "NE 350 - Work-term Report 2"
  },
  {
    label: "NE 381 - Introduction to Nanoscale Biosystems"
  },
  {
    label: "NE 450 - Work-term Report 3"
  },
  {
    label: "PACS 315 - Engineering and Peace"
  },
  {
    label: "NE 454A - Nano-instrumentation Laboratory 1"
  },
  {
    label: "NE 454B - Nano-electronics Laboratory 1"
  },
  {
    label: "NE 454C - Nanobiosystems Laboratory 1"
  },
  {
    label: "NE 454D - Nanostructured Materials Laboratory 1"
  },
  {
    label: "NE 455A - Nano-instrumentation Laboratory 2"
  },
  {
    label: "NE 455B - Nano-electronics Laboratory 2"
  },
  {
    label: "NE 455C - Nanobiosystems Laboratory 2"
  },
  {
    label: "NE 455D - Nanostructured Materials Laboratory 2"
  },
  {
    label: "PACS 623 - Directed Reading in Peace and Conflict Studies"
  },
  {
    label: "PHIL 205 - Philosophy of Economics"
  },
  {
    label: "PHIL 206 - Philosophy of Sport"
  },
  {
    label: "PHIL 251 - Metaphysics and Epistemology"
  },
  {
    label: "PHIL 283 - Great Works: Ancient and Medieval"
  },
  {
    label: "PHIL 284 - Great Works: Modern"
  },
  {
    label: "PHIL 356 - Intelligence in Machines, Humans, and Other Animals"
  },
  {
    label: "PMATH 333 - Introduction to Real Analysis"
  },
  {
    label: "PSYCH 389 - Social Science Advanced Research Methods Topics"
  },
  {
    label: "PSYCH 390 - Natural Science Advanced Research Methods Topics"
  },
  {
    label: "PSYCH 466 - Emergent Literacy"
  },
  {
    label: "PSYCH 470 - Special Topics in Applied Psychology"
  },
  {
    label: "REC 105 - Interdisciplinary Approaches to Leisure"
  },
  {
    label: "REC 120 - Program Management and Evaluation"
  },
  {
    label: "REC 201 - Diversity and Leisure"
  },
  {
    label: "REC 213 - Principles of High Performance Organizations in Recreation and Sport"
  },
  {
    label: "REC 218 - Social Entrepreneurship for Change"
  },
  {
    label: "SDS 449R - Race and Gender Equality"
  },
  {
    label: "SMF 101 - Introduction to Relationships and Families"
  },
  {
    label: "SMF 200 - Special Topics in Sexualities, Relationships, or Families"
  },
  {
    label: "SMF 211 - Dynamics of Dating"
  },
  {
    label: "SMF 212 - Navigating Sexuality and Relationships in Mid/Later Life"
  },
  {
    label: "SMF 213 - Sexual Health and Well-Being"
  },
  {
    label: "SMF 214 - Constructing Erotics"
  },
  {
    label: "SMF 215 - Sexuality and Popular Culture"
  },
  {
    label: "SMF 216 - Sexual Pleasure"
  },
  {
    label: "PSYCH 748 - Self-Regulation and Motivation"
  },
  {
    label: "SMF 491 - Practicum and Applied Theory"
  },
  {
    label: "SMF 499A - Thesis - Part 1"
  },
  {
    label: "SMF 499B - Thesis - Part 2"
  },
  {
    label: "SPCOM 339 - Media, Images, and Communication"
  },
  {
    label: "VCULT 400 - Visual Culture Seminar"
  },
  {
    label: "VCULT 401 - Advanced Visual Culture Seminar"
  },
  {
    label: "CHEM 383 - Medicinal Chemistry"
  },
  {
    label: "CLAS 326 - The Body, Dress, and Religion"
  },
  {
    label: "EARTH 627 - Radioactive Isotope Systems"
  },
  {
    label: "EASIA 120R - Monsters and Magic in Japanese Popular Culture"
  },
  {
    label: "ECE 608 - Quantitative Methods in Biomedical Engineering"
  },
  {
    label: "ECE 642 - Radio Frequency Integrated Circuit Design"
  },
  {
    label: "ECE 657A - Data & Knowledge Modelling & Analysis"
  },
  {
    label: "ECE 659 - Intelligent Sensors & Wireless Sensor Networks"
  },
  {
    label: "ECE 676 - Quantum Information Processing Devices"
  },
  {
    label: "ECE 677 - Quantum Electronics and Photonics"
  },
  {
    label: "EMLS 622R - Thesis Writing in English"
  },
  {
    label: "ENBUS 612 - Social Entrepreneurship and Scaling Social Innovation"
  },
  {
    label: "ENGL 248 - Literature for an Ailing Planet"
  },
  {
    label: "ENGL 378 - Professional Communications in Statistics and Actuarial Science"
  },
  {
    label: "FR 605 - Community Fieldwork in French"
  },
  {
    label: "FR 606 - Research or Professional Practicum in French"
  },
  {
    label: "GEOG 374 - Special Topics in Geography"
  },
  {
    label: "GEOG 693 - Human Geography Special Topics Course"
  },
  {
    label: "GEOG 694 - Environmental Management Special Topics Course"
  },
  {
    label: "GEOG 695 - Geomatics Special Topics Course"
  },
  {
    label: "GEOG 696 - Environmental Science Special Topics Course"
  },
  {
    label: "GER 230 - Vikings!"
  },
  {
    label: "GER 793 - Knowledge Transfer & Reflection"
  },
  {
    label: "HLTH 604 - Analysis and Management of Health Information for Aging Societies"
  },
  {
    label: "HLTH 605 - Regression Models"
  },
  {
    label: "HLTH 605A - Survey Research Methods"
  },
  {
    label: "HLTH 605E - Analysis of Variance II"
  },
  {
    label: "HLTH 606 - Epidemiological Methods"
  },
  {
    label: "HLTH 607 - Mechanisms of Disease Processes"
  },
  {
    label: "HLTH 610 - Program Development and Service Delivery for the Elderly"
  },
  {
    label: "HLTH 619 - Fundamental Research Methods in Health Informatics"
  },
  {
    label: "HLTH 620 - Selected Topics"
  },
  {
    label: "HLTH 621 - Decision Making and Decision Support in Health"
  },
  {
    label: "HLTH 622 - Nutritional Aspects of Chronic Disease"
  },
  {
    label: "HLTH 641 - Practicum"
  },
  {
    label: "HLTH 642 - Multidisciplinary Perspectives on Aging"
  },
  {
    label: "HLTH 671 - Psychopharmacology"
  },
  {
    label: "HLTH 672 - Epidemiologic Methods in Aging Research"
  },
  {
    label: "HLTH 701 - Interdisciplinary Seminar in Public Health and Health Systems"
  },
  {
    label: "HLTH 704 - Advanced Qualitative Methods for Health Research"
  },
  {
    label: "HLTH 705 - Advanced Statistical Methods for Analyzing Public Health and Health Systems Data"
  },
  {
    label: "HLTH 706 - Advanced Epidemiological Methods"
  },
  {
    label: "HLTH 719 - Advanced Research Methods in Health Informatics"
  },
  {
    label: "HLTH 720 - Advanced Topics"
  },
  {
    label: "HLTH 732B - Work and Health Research Seminar (II)"
  },
  {
    label: "HLTH 741 - Advanced Practicum"
  },
  {
    label: "HLTH 750 - Fundamentals of Aging, Health and Well-being"
  },
  {
    label: "HLTH 751 - Aging, Health and Well-being Research Seminar"
  },
  {
    label: "KOREA 301R - Third-Year Korean 1"
  },
  {
    label: "KOREA 302R - Third-Year Korean 2"
  },
  {
    label: "LS 387 - Criminal Justice Institutions"
  },
  {
    label: "ME 640 - Autonomous Mobile Robotics"
  },
  {
    label: "ME 659 - Energy and Environment"
  },
  {
    label: "ME 671 - Fundamental Fire Dynamics"
  },
  {
    label: "ME 672 - Advanced Fire Dynamics"
  },
  {
    label: "ME 673 - Fire Modelling"
  },
  {
    label: "ME 680 - Advanced Design Engineering"
  },
  {
    label: "ME 681 - Advanced Design Engineering- Design Project 1"
  },
  {
    label: "ME 682 - Advanced Design Engineering- Design Project 2"
  },
  {
    label: "MSCI 718 - Statistical Methods for Data Analytics"
  },
  {
    label: "MSCI 719 - Operations Analytics"
  },
  {
    label: "MTE 544 - Autonomous Mobile Robots"
  },
  {
    label: "MTE 546 - Multi-sensor Data Fusion"
  },
  {
    label: "PHIL 207J - Philosophy and J.R.R. Tolkien"
  },
  {
    label: "PHIL 675 - Graduate Courses in Applied Philosophy"
  },
  {
    label: "PHIL 676 - Graduate Courses in Applied Philosophy"
  },
  {
    label: "PHIL 699 - Applied Research Placement Tutorial"
  },
  {
    label: "PHS 656 - Quantitative Methods and Analysis for Program"
  },
  {
    label: "PLAN 475 - Special Topics in Planning"
  },
  {
    label: "PLAN 706 - Contemporary Issues in Planning"
  },
  {
    label: "PSCI 302 - Local Government"
  },
  {
    label: "PSCI 303 - Environmental Policy and Politics"
  },
  {
    label: "PSCI 493 - Field Course"
  },
  {
    label: "PSYCH 493 - Data Analysis and Graphing in R"
  },
  {
    label: "PSYCH 758 - Applied Practicum in Cognitive Psychology"
  },
  {
    label: "PSYCH 759 - Research Practicum in Cognitive Psychology"
  },
  {
    label: "RS 266 - Death and Dying"
  },
  {
    label: "RS 316 - Religion & War: The Language and Imagery of War within Islam, Christianity, and Judaism"
  },
  {
    label: "SCI 10 - Communication Skills for Science"
  },
  {
    label: "SCI 240 - Science of Forensics and Criminalistics"
  },
  {
    label: "SDS 322R - Community Engagement and Social Development"
  },
  {
    label: "SDS 451R - Community Based Research for Social Development"
  },
  {
    label: "SI 120R - Literary Arabic for Heritage Speakers"
  },
  {
    label: "SI 131R - Arab Culture"
  },
  {
    label: "SI 132R - Introduction to Modern Arab and Muslim Drama"
  },
  {
    label: "SI 316R - Religion & War: The Language and Imagery of War within Islam, Christianity, and Judaism"
  },
  {
    label: "SI 420R - Islamic Spirituality (Sufism) and Psychotherapy"
  },
  {
    label: "SI 450R - Reading and Interpreting the Qur'an (in translation)"
  },
  {
    label: "SOC 334 - Public Policy"
  },
  {
    label: "SOC 387 - Criminal Justice Institutions"
  },
  {
    label: "WKRPT 100M - Work-term Report"
  },
  {
    label: "GEOG 415 - Economic Geography Project"
  },
  {
    label: "SWK 610R - Substance Abuse & Chemical Dependency"
  },
  {
    label: "SWK 653R - Palliative Care"
  },
  {
    label: "SWREN 331R - Social Inequality, Social Justice, and Public Policy"
  },
  {
    label: "TAX 614 - An Introduction to Accounting for Income Taxes"
  },
  {
    label: "WKRPT 200A - Arts Work-term Report 2"
  },
  {
    label: "WKRPT 200E - Environment Work-term Report 2"
  },
  {
    label: "WKRPT 200H - Applied Health Sciences Work-term Report 2"
  },
  {
    label: "WKRPT 200S - Science Work-Term Report 2"
  },
  {
    label: "WKRPT 300A - Arts Work-term Report 3"
  },
  {
    label: "WKRPT 300E - Environment Work-term Report 3"
  },
  {
    label: "WKRPT 300H - Applied Health Sciences Work-term Report 3"
  },
  {
    label: "WKRPT 300S - Science Work-Term Report 3"
  },
  {
    label: "WKRPT 400A - Arts Work-term Report 4"
  },
  {
    label: "WKRPT 400E - Environment Work-term Report 4"
  },
  {
    label: "WKRPT 400H - Applied Health Sciences Work-term Report 4"
  },
  {
    label: "WKRPT 400S - Science Work-Term Report 4"
  },
  {
    label: "WKRPT 500A - Arts Work-term Report 5"
  },
  {
    label: "WKRPT 500H - Applied Health Sciences Work-term Report 5"
  },
  {
    label: "BME 294L - Circuits, Instrumentation, and Measurements Laboratory"
  },
  {
    label: "RS 420R - Critical Encounter with Human Nature"
  },
  {
    label: "BME 294 - Circuits, Instrumentation, and Measurements"
  },
  {
    label: "BET 430 - Sales Fundamentals"
  },
  {
    label: "AFM 444 - Intermediate Business Analytics"
  },
  {
    label: "AFM 463 - Introduction to U.S. Taxation"
  },
  {
    label: "ANTH 222 - Anthropologies of the Body"
  },
  {
    label: "ANTH 245 - Anthropology of Education"
  },
  {
    label: "ANTH 289 - Special Topics in Anthropology"
  },
  {
    label: "ANTH 389 - Special Topics in Anthropology"
  },
  {
    label: "GEOG 270 - Remotely Piloted Aircraft Systems (RPAS) Knowledge Requirements"
  },
  {
    label: "ANTH 489 - Special Topics in Anthropology"
  },
  {
    label: "ARBUS 303 - Marketing 2"
  },
  {
    label: "ARTS 130 - Inquiry and Communication"
  },
  {
    label: "ARTS 140 - Information and Analysis"
  },
  {
    label: "BET 340 - Essentials of Entrepreneurial Planning and Execution"
  },
  {
    label: "BET 350 - Customer Experience Design"
  },
  {
    label: "BET 450 - Leadership"
  },
  {
    label: "BME 356L - Control Systems Laboratory"
  },
  {
    label: "BME 393L - Digital Systems Laboratory"
  },
  {
    label: "CHE 341 - Introduction to Process Control"
  },
  {
    label: "CHE 383 - Chemical Engineering Design Workshop"
  },
  {
    label: "CHE 491 - Chemical Engineering Lab 5"
  },
  {
    label: "CHEM 200 - Introduction to Laboratory Techniques"
  },
  {
    label: "CHEM 400 - Special Topics in Chemistry"
  },
  {
    label: "CLAS 220 - Philosophy of Friendship"
  },
  {
    label: "COMM 433 - Income Tax for Finance students"
  },
  {
    label: "CS 231 - Algorithmic Problem Solving"
  },
  {
    label: "CS 240E - Data Structures and Data Management (Enriched)"
  },
  {
    label: "CS 241E - Foundations of Sequential Programs (Enriched)"
  },
  {
    label: "CS 245E - Logic and Computation (Enriched)"
  },
  {
    label: "CS 246E - Object-Oriented Software Development (Enriched)"
  },
  {
    label: "CS 451 - Data-Intensive Distributed Computing"
  },
  {
    label: "GEOG 456 - Transforming Canadian Resource Management"
  },
  {
    label: "DAC 204 - Introduction to Game Design"
  },
  {
    label: "EASIA 303R - Business Environment in East Asia"
  },
  {
    label: "EASIA 305R - Buddhism in East Asia Today"
  },
  {
    label: "EASIA 336R - Korean Pop Culture"
  },
  {
    label: "EASIA 346R - Global Asian Diasporas"
  },
  {
    label: "ECE 102 - Information Session"
  },
  {
    label: "ECE 108 - Discrete Mathematics and Logic 1"
  },
  {
    label: "ECE 190 - Engineering Profession and Practice"
  },
  {
    label: "ECE 201 - Information Session"
  },
  {
    label: "ECE 208 - Discrete Mathematics and Logic 2"
  },
  {
    label: "ECE 252 - Systems Programming and Concurrency"
  },
  {
    label: "ECE 260 - Electromechanical Energy Conversion"
  },
  {
    label: "ECE 298 - Instrumentation and Prototyping Laboratory"
  },
  {
    label: "ECE 306 - Probability Theory and Statistics"
  },
  {
    label: "ECE 320 - Computer Architecture"
  },
  {
    label: "ECE 340 - Electronic Circuits 2"
  },
  {
    label: "ECE 350 - Real-Time Operating Systems"
  },
  {
    label: "ECE 360 - Power Systems and Smart Grids"
  },
  {
    label: "ECE 373 - Radio Frequency and Microwave Circuits"
  },
  {
    label: "GEOG 320 - The Cryosphere"
  },
  {
    label: "ECON 241 - Introduction to Public Economics"
  },
  {
    label: "ECON 441 - Public Economics"
  },
  {
    label: "ECON 443 - Advanced Public Economics"
  },
  {
    label: "ENGL 108G - Horror"
  },
  {
    label: "ENGL 108X - Literature and Medicine"
  },
  {
    label: "ENGL 346R - Global Asian Diasporas"
  },
  {
    label: "ENGL 491 - Topics in Literature and Rhetoric"
  },
  {
    label: "ERS 101 - Approaches: Environment, Resources and Sustainability"
  },
  {
    label: "ERS 102 - Sustainability and the Really Long View"
  },
  {
    label: "ERS 201 - Environmental Policy, Politics and Governance"
  },
  {
    label: "ERS 202 - Natural Resources Ecology"
  },
  {
    label: "ERS 225 - Gendering Environmental Politics"
  },
  {
    label: "ERS 361 - Food Systems and Sustainability"
  },
  {
    label: "ERS 300 - Social Ecological Systems Analysis"
  },
  {
    label: "ERS 301 - Sustainability Thought, Practice and Prospects"
  },
  {
    label: "ERS 318 - Photography for Sustainability"
  },
  {
    label: "ERS 320 - Economics and Sustainability"
  },
  {
    label: "ERS 321 - Coastal Social-Ecological Systems"
  },
  {
    label: "ERS 328 - Environmental Politics and System Change"
  },
  {
    label: "ERS 335 - Restoration Ecology"
  },
  {
    label: "ERS 337 - ReWilding and Ecological Restoration"
  },
  {
    label: "ERS 400 - Social-Ecological Approaches to Sustainability"
  },
  {
    label: "ERS 401 - Sustainability Science and its Critiques"
  },
  {
    label: "ERS 402 - Senior Honours Research Seminar"
  },
  {
    label: "ERS 403A - Senior Honours Thesis"
  },
  {
    label: "ERS 403B - Senior Honours Thesis"
  },
  {
    label: "ERS 431 - Ecological Consequences of Climate Change"
  },
  {
    label: "GEOG 336 - Spaces of Citizenship: Identities and Inequality"
  },
  {
    label: "FINE 407 - Honours Concept and Research"
  },
  {
    label: "FINE 476 - Intensive Studio Specialization 1"
  },
  {
    label: "FINE 477 - Intensive Studio Specialization 2"
  },
  {
    label: "GENE 21B - Topics for Technical Courses Taken on Exchange by Biomedical Engineering Students"
  },
  {
    label: "GEOG 207 - Climate Change Fundamentals"
  },
  {
    label: "GEOG 307 - Societal Adaptation to Climate Change"
  },
  {
    label: "GEOG 428 - Spatial Demography"
  },
  {
    label: "GEOG 683 - Geoweb and Location-Based Services"
  },
  {
    label: "GER 286 - Great German Thinkers"
  },
  {
    label: "GEOG 225 - Global Environment and Health"
  },
  {
    label: "HIST 216 - From Gutenberg to Zuckerberg: A (Long) History of the Internet"
  },
  {
    label: "HIST 256 - Murder in Canadian History"
  },
  {
    label: "HLTH 290 - An Introduction to Health Neuroscience"
  },
  {
    label: "HLTH 605D - Analysis of Variance I"
  },
  {
    label: "HLTH 611 - The Health Care System"
  },
  {
    label: "GEOG 361 - Food Systems and Sustainability"
  },
  {
    label: "HLTH 730 - Fundamentals of Work and Health"
  },
  {
    label: "HLTH 731 - Approaches to Research in Work and Health"
  },
  {
    label: "HLTH 732A - Work and Health Research Seminar (I)"
  },
  {
    label: "HUMSC 289 - Special Topics in Human Sciences"
  },
  {
    label: "HUMSC 389 - Special Topics in Human Sciences"
  },
  {
    label: "HUMSC 489 - Special Topics in Human Sciences"
  },
  {
    label: "HUMSC 498 - Directed Studies in Human Sciences"
  },
  {
    label: "INTEG 210 - Making Collaboration Work"
  },
  {
    label: "INTEG 340 - Thinking Through Research Methods"
  },
  {
    label: "INTEG 440 - Computational Social Science"
  },
  {
    label: "INTEG 475A - Special Topics in Knowledge Integration"
  },
  {
    label: "INTEG 475B - Special Topics in Knowledge Integration"
  },
  {
    label: "ITALST 265 - Mafia Culture and the Power of Symbols, Rituals, and Myth"
  },
  {
    label: "KIN 104L - Fundamentals of Kinesiology Lab"
  },
  {
    label: "KIN 121L - Biomechanics of Human Activity Lab"
  },
  {
    label: "KIN 146 - Introduction to Human Nutrition"
  },
  {
    label: "KIN 202 - Physiological and Metabolic Responses and Adaptations to Exercise"
  },
  {
    label: "KIN 202L - Physiological and Metabolic Responses and Adaptations to Exercise Lab"
  },
  {
    label: "KIN 204L - Movement and Exercise Prescription Lab"
  },
  {
    label: "KIN 221L - Advanced Biomechanics of Human Movement Lab"
  },
  {
    label: "KIN 232 - Research Design and Statistics in Kinesiology"
  },
  {
    label: "KIN 255L - Fundamentals of Neuroscience Lab"
  },
  {
    label: "KIN 414 - Cases in Clinical Exercise Physiology"
  },
  {
    label: "GEOG 304 - Carbon in the Biosphere"
  },
  {
    label: "KIN 608 - Introduction to Genetics for the Biosciences"
  },
  {
    label: "KIN 609 - Introduction to Genetics for Biosciences Lab"
  },
  {
    label: "KIN 630 - Research Design and Statistical Analysis"
  },
  {
    label: "KIN 655 - Theory and Practice of Movement Assessment"
  },
  {
    label: "KIN 691 - Cardiorespiratory Assessment and Interpretation"
  },
  {
    label: "LS 203 - Special Topics in Legal Studies"
  },
  {
    label: "LS 328 - Trafficking and Financial Crime"
  },
  {
    label: "LS 330 - Special Topics in Legal Studies"
  },
  {
    label: "LS 419 - Police Systems and Practices"
  },
  {
    label: "LS 422 - Violent Extremism and Terrorism"
  },
  {
    label: "LS 423 - Peers and Crime"
  },
  {
    label: "ME 562 - Experimental Methods in Fluids"
  },
  {
    label: "PACS 310 - Peace and the Environment"
  },
  {
    label: "PHIL 101 - Challenging Ideas: An Introduction to Philosophy"
  },
  {
    label: "PHIL 121 - Moral Issues"
  },
  {
    label: "PHIL 211J - Death and the After-Life"
  },
  {
    label: "PHIL 220J - Philosophy of Friendship"
  },
  {
    label: "PHIL 252 - Quantum Mechanics for Everyone"
  },
  {
    label: "PHIL 257 - Philosophy of Mathematics"
  },
  {
    label: "PHIL 285J - Great Christian Thinkers"
  },
  {
    label: "PHIL 286J - Great German Thinkers"
  },
  {
    label: "PHIL 302 - Topics in Feminist Philosophy"
  },
  {
    label: "PHIL 320 - Topics in Value Theory"
  },
  {
    label: "PHIL 340 - Topics in Formal Philosophy"
  },
  {
    label: "PHIL 358 - Topics in Philosophy of Science"
  },
  {
    label: "FILM 246W - German Film (WLU)"
  },
  {
    label: "SOC 304 - Media and Crime"
  },
  {
    label: "PLAN 262 - Introduction to Global Emerging Cities"
  },
  {
    label: "PMATH 321 - Non-Euclidean Geometry"
  },
  {
    label: "PSCI 385 - Chinese Foreign Policy since 1949"
  },
  {
    label: "AFM 200 - Continuation of Experiential Learning"
  },
  {
    label: "PSYCH 357 - Psychology of Good"
  },
  {
    label: "GEOG 436 - Feminist Economic Geography: Gender, Identities and Social Change"
  },
  {
    label: "RS 242R - Religious Diversity and Social Development"
  },
  {
    label: "RS 259R - Gender, Sexuality, and Christianity"
  },
  {
    label: "RS 265R - Religion Online"
  },
  {
    label: "RS 301R - Engaged Buddhism"
  },
  {
    label: "RS 302R - Buddhism in East Asia Today"
  },
  {
    label: "SDS 242R - Religious Diversity and Social Development"
  },
  {
    label: "SDS 260R - Ecology, Society, and Justice: Social Development and the Environment"
  },
  {
    label: "SDS 288R - International Organizations"
  },
  {
    label: "SDS 357R - Family Violence"
  },
  {
    label: "SDS 358R - Child Maltreatment: Identification and Prevention"
  },
  {
    label: "SDS 367R - Aging and Social Development"
  },
  {
    label: "SDS 411R - Decolonization and Social Action"
  },
  {
    label: "FILM 257W - The Western (WLU)"
  },
  {
    label: "SOC 230 - Special Topics in Sociology"
  },
  {
    label: "SOC 328 - Trafficking and Financial Crime"
  },
  {
    label: "SOC 330 - Special Topics in Sociology"
  },
  {
    label: "SOC 419 - Police Systems and Practices"
  },
  {
    label: "SOC 422 - Violent Extremism and Terrorism"
  },
  {
    label: "SOC 423 - Peers and Crime"
  },
  {
    label: "SOC 430 - Special Topics in Sociology"
  },
  {
    label: "SUSM 674 - Special Topics in Sustainability Management"
  },
  {
    label: "HIST 285W - Ancient Art Beyond the West (WLU)"
  },
  {
    label: "PD 13 - Research in the Workplace"
  },
  {
    label: "GEOG 420 - Ice Sheets and Glaciers"
  },
  {
    label: "AVIA 320 - Aviation Safety"
  },
  {
    label: "ENVS 300 - Vascular Plants of Southern Ontario"
  },
  {
    label: "GBDA 312 - Internship"
  },
  {
    label: "STV 304 - Technology in Canadian Society"
  },
  {
    label: "KPE 472W - Athletic Injuries (WLU)"
  },
  {
    label: "AFM 377 - Private Equity and Venture Capital"
  },
  {
    label: "AVIA 270 - Remotely Piloted Aircraft Systems (RPAS) Knowledge Requirements"
  },
  {
    label: "BME 450 - Sports Engineering"
  },
  {
    label: "BME 451 - Biomechanics of Human Movement"
  },
  {
    label: "BME 487 - Special Topics in Biomedical Signals"
  },
  {
    label: "BME 488 - Special Topics in Biomechanics"
  },
  {
    label: "BME 489 - Special Topics in Biomedical Devices"
  },
  {
    label: "BME 499 - Elective Biomedical Research Project"
  },
  {
    label: "CDNST 201 - The Indigenous Experience in Canada"
  },
  {
    label: "CDNST 211 - Canada: Analysis of a Country"
  },
  {
    label: "CDNST 212 - Narratives of Canadian Identity"
  },
  {
    label: "DUTCH 271 - Dutch Culture and Society"
  },
  {
    label: "CHEM 233L - Fundamentals of Biochemistry Laboratory"
  },
  {
    label: "CS 493 - Team Project 1"
  },
  {
    label: "CS 494 - Team Project 2"
  },
  {
    label: "DAC 401 - The Digital Design Profession"
  },
  {
    label: "EASIA 100R - Introduction to East Asia"
  },
  {
    label: "EASIA 110R - Introduction to Modern China"
  },
  {
    label: "ECE 192 - Engineering Economics and Impact on Society"
  },
  {
    label: "ECE 203 - Probability Theory and Statistics 1"
  },
  {
    label: "ECE 307 - Probability Theory and Statistics 2"
  },
  {
    label: "ENGL 193 - Communication in the Sciences"
  },
  {
    label: "ENGL 251 - Literary Theory and Criticism"
  },
  {
    label: "ENGL 332 - Topics in Creative Writing"
  },
  {
    label: "ENVS 350 - Complexity in Nature and Society"
  },
  {
    label: "GBDA 211 - Introduction to Global Business"
  },
  {
    label: "GBDA 212 - Portfolio and Professional Communication"
  },
  {
    label: "GBDA 412 - Special Topics in Digital Cultures"
  },
  {
    label: "GBDA 413 - Special Topics in Design and Society"
  },
  {
    label: "GBDA 414 - Special Topics in Interaction Design"
  },
  {
    label: "GENE 191 - Communication in the Engineering Profession"
  },
  {
    label: "LS 431 - Corporate Governance"
  },
  {
    label: "HIST 359 - Fascism beyond Germany"
  },
  {
    label: "HIST 370 - Bond, Bowie, and Brexit: Britain from 1945 to the New Millennium"
  },
  {
    label: "HLTH 453 - Computing in Health Informatics"
  },
  {
    label: "HLTH 479 - Child Mental Health Epidemiology"
  },
  {
    label: "INTEG 441 - Hard Decisions and Wicked Problems"
  },
  {
    label: "MATH 199 - Mathematical Discovery and Invention"
  },
  {
    label: "MSCI 245 - Databases and Software Design"
  },
  {
    label: "MSCI 251 - Probability and Statistics 1"
  },
  {
    label: "MSCI 253 - Probability and Statistics 2"
  },
  {
    label: "KPE 435W - Exercise is Medicine (WLU)"
  },
  {
    label: "MSCI 543 - Analytics and User Experience"
  },
  {
    label: "NE 222 - Organic Chemistry for Nanotechnology Engineers"
  },
  {
    label: "PHIL 290 - Nature of Scientific Knowledge"
  },
  {
    label: "PHIL 291 - The Social Nature of Knowledge"
  },
  {
    label: "PHIL 326J - Philosophy of Social Justice"
  },
  {
    label: "SOC 383 - Ethnomethodology in Theory and Practice"
  },
  {
    label: "SOC 252 - The Culture of Cities"
  },
  {
    label: "SOC 440 - Computational Social Science"
  },
  {
    label: "SPCOM 193 - Communication in the Sciences"
  },
  {
    label: "STV 305 - Technology, Society and the Modern City"
  },
  {
    label: "STV 306 - Biotechnology and Society"
  },
  {
    label: "RS 387 - Aging and the Spiritual Life"
  },
  {
    label: "ECON 310EW - Macro Forecasting (WLU)"
  },
  {
    label: "EARTH 322 - Ecohydrology"
  },
  {
    label: "MATH 475W - Ring And Field Theory (WLU)"
  },
  {
    label: "SDS 330R - International Public Policy"
  },
  {
    label: "SDS 345R - Self-Development and Identity Formation: A Sociocultural Perspective"
  },
  {
    label: "SDS 435R - Restorative Approaches to Education"
  },
  {
    label: "SDS 441R - Popular Culture and Social Change in the Radical Imagination"
  },
  {
    label: "SDS 445R - Pedagogies of Democratic Education"
  },
  {
    label: "CHEM 212W - Physical Chemistry (WLU)"
  }
];

export { suggestions };