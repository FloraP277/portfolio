/**
 * Project listing for the home page.
 * Each project has a detail page under /projects, a repository link, and a
 * representative code snippet. The slideshow is rendered from this array so
 * that adding a project means adding one object here plus one HTML page,
 * with no other changes.
 */

const portfolioProjects = [
  {
    slug: "credit-risk-classification",
    title: "Credit Risk Classification Model",
    category: "Machine Learning",
    summary:
      "A model that classifies customers into good, standard, and poor credit risk profiles, built for a lending scenario where manual credit assessment was slow and inconsistent.",
    tools: ["Python", "pandas", "scikit-learn", "category_encoders", "seaborn"],
    repoUrl: "https://github.com/floraphiri/credit-risk-classification",
    snippet: {
      filename: "credit_risk_model.py",
      code: [
        "models = {",
        '    "Random Forest": RandomForestClassifier(),',
        '    "XGBoost": XGBClassifier()',
        "}",
        "",
        "grid_searches = {}",
        "for model_name, model in models.items():",
        "    grid_search = GridSearchCV(",
        "        model, params[model_name],",
        "        cv=3, scoring=f1_scorer,",
        "        n_jobs=-1, verbose=2,",
        "    )",
        "    grid_searches[model_name] = grid_search",
      ].join("\n"),
    },
  },
  {
    slug: "diabetes-prediction",
    title: "Diabetes Prediction with a Neural Network",
    category: "Machine Learning",
    summary:
      "A Keras neural network trained on the Pima Indians Diabetes dataset to predict whether a patient has diabetes from diagnostic measurements.",
    tools: ["Python", "Keras", "scikit-learn", "StandardScaler"],
    repoUrl: "https://github.com/floraphiri/diabetes-prediction",
    snippet: {
      filename: "diabetes_network.py",
      code: [
        "model = Sequential()",
        'model.add(Dense(5, input_dim=8, activation="relu"))',
        'model.add(Dense(5, activation="relu"))',
        "model.add(Dropout(rate=0.1))",
        'model.add(Dense(5, activation="relu"))',
        'model.add(Dense(1, activation="sigmoid"))',
      ].join("\n"),
    },
  },
  {
    slug: "housing-price-prediction",
    title: "Housing Price Prediction with Random Forest",
    category: "Machine Learning",
    summary:
      "A regression project on the Kaggle housing dataset, from missing-value handling and preprocessing through to a tuned Random Forest model.",
    tools: ["Python", "pandas", "Random Forest", "scikit-learn"],
    repoUrl: "https://github.com/floraphiri/housing-price-prediction",
    snippet: {
      filename: "grid_search.py",
      code: [
        "param_grid = {",
        '    "model__n_estimators": [500, 600, 700],',
        '    "model__max_features": ["auto", "sqrt", "log2"],',
        '    "model__max_depth": [5, 6, 7],',
        '    "model__criterion": ["squared_error", "absolute_error", "poisson"],',
        "}",
        "GridCV = GridSearchCV(my_pipeline, param_grid, n_jobs=-1)",
        "GridCV.fit(X_train, y_train)",
        "print(GridCV.best_params_)",
      ].join("\n"),
    },
  },
  {
    slug: "linear-regression-from-scratch",
    title: "Linear Regression from Scratch",
    category: "Machine Learning",
    summary:
      "Linear regression implemented with nothing but NumPy, solving the normal equation directly and building the feature matrix by hand to predict car prices.",
    tools: ["Python", "NumPy", "pandas"],
    repoUrl: "https://github.com/floraphiri/linear-regression-from-scratch",
    snippet: {
      filename: "linear_regression.py",
      code: [
        "def train_linear_regression(X, y):",
        "    ones = np.ones(X.shape[0])",
        "    X = np.column_stack([ones, X])",
        "    XTX = X.T.dot(X)",
        "    XTX_inv = np.linalg.inv(XTX)",
        "    w = XTX_inv.dot(X.T).dot(y)",
        "    return w[0], w[1:]",
      ].join("\n"),
    },
  },
  {
    slug: "data-preprocessing-toolkit",
    title: "Data Preprocessing Toolkit",
    category: "Machine Learning",
    summary:
      "A set of focused notebooks, each isolating one preprocessing technique on real data: imputation, outlier handling, one-hot encoding, binning, log transforms, and min-max scaling.",
    tools: ["Python", "pandas", "scikit-learn"],
    repoUrl: "https://github.com/floraphiri/data-preprocessing-toolkit",
    snippet: {
      filename: "imputation.py",
      code: [
        "import pandas as pd",
        "from sklearn.impute import SimpleImputer",
        "",
        'df = pd.read_csv("Titanic/test.csv")',
        "print(df.isnull().sum())",
        "",
        'columns_to_impute = ["Age"]',
      ].join("\n"),
    },
  },
  {
    slug: "classical-ml-survey",
    title: "Classical Machine Learning Survey",
    category: "Machine Learning",
    summary:
      "A survey of the classical machine learning toolkit, one notebook per algorithm: KNN, support vector machines, Naive Bayes, ridge and lasso, K-Means, hierarchical clustering, Gaussian mixtures, PCA, and more.",
    tools: ["Python", "scikit-learn", "NumPy", "matplotlib"],
    repoUrl: "https://github.com/floraphiri/classical-ml-survey",
    snippet: {
      filename: "svm_scaling.py",
      code: [
        "svc = SVC(gamma='auto').fit(X_train, y_train)",
        "print(svc.score(X_train, y_train))",
        "print(svc.score(X_test, y_test))",
        "",
        "min_on_training = X_train.min(axis=0)",
        "range_on_training = (X_train - min_on_training).max(axis=0)",
        "X_train_scaled = (X_train - min_on_training) / range_on_training",
        "X_test_scaled = (X_test - min_on_training) / range_on_training",
        "",
        "svc = SVC(gamma='auto').fit(X_train_scaled, y_train)",
        "print(svc.score(X_train_scaled, y_train))",
        "print(svc.score(X_test_scaled, y_test))",
      ].join("\n"),
    },
  },
  {
    slug: "big-data-databricks",
    title: "Big Data Analytics on Databricks",
    category: "Big Data",
    summary:
      "A collection of notebooks running SQL and machine learning on Apache Spark, including logistic regression, classification, and confusion matrix evaluation in a distributed environment.",
    tools: ["Databricks", "Apache Spark", "Spark SQL", "PySpark"],
    repoUrl: "https://github.com/floraphiri/databricks-notebooks",
    snippet: {
      filename: "spark_ingestion.py",
      code: [
        "data = (",
        '    spark.read.format("csv")',
        '    .option("inferSchema", "true")',
        '    .option("header", "true")',
        '    .option("sep", "\\t")',
        "    .load(file_location)",
        ")",
        "display(data)",
      ].join("\n"),
    },
  },
  {
    slug: "sms-spam-classification",
    title: "SMS Spam Classification with Spark ML",
    category: "Big Data",
    summary:
      "A spam filter for text messages built entirely in Spark ML on Databricks: a TF-IDF feature pipeline plus a message-length feature, feeding a logistic regression classifier.",
    tools: ["PySpark", "Spark ML", "Databricks", "TF-IDF"],
    repoUrl: "https://github.com/floraphiri/sms-spam-classification",
    snippet: {
      filename: "spam_pipeline.py",
      code: [
        'tokenizer = Tokenizer(inputCol="text", outputCol="token_text")',
        'stopremove = StopWordsRemover(inputCol="token_text", outputCol="stop_tokens")',
        'count_vec = CountVectorizer(inputCol="stop_tokens", outputCol="c_vec")',
        'idf = IDF(inputCol="c_vec", outputCol="tf_idf")',
        "",
        "data_prep_pipe = Pipeline(",
        "    stages=[ham_spam_to_num, tokenizer, stopremove, count_vec, idf, final_feature]",
        ")",
        "clean_data = data_prep_pipe.fit(data_renamed).transform(data_renamed)",
        "training, test = clean_data.randomSplit([0.8, 0.2], seed=12345)",
      ].join("\n"),
    },
  },
  {
    slug: "sql-analysis",
    title: "Relational Data Analysis in T-SQL",
    category: "SQL",
    summary:
      "A set of T-SQL solutions written in SQL Server Management Studio, covering joins, aggregations, filtering, and multi-step query problems.",
    tools: ["T-SQL", "SQL Server", "SSMS"],
    repoUrl: "https://github.com/floraphiri/sql-analysis",
    snippet: {
      filename: "top_orders_per_vendor.sql",
      code: [
        "SELECT VendorID, PurchaseOrderID, OrderDate, TotalDue",
        "FROM (",
        "    SELECT",
        "        VendorID, PurchaseOrderID, OrderDate, TotalDue,",
        "        ROW_NUMBER() OVER (",
        "            PARTITION BY VendorID ORDER BY TotalDue DESC",
        "        ) AS RowNum",
        "    FROM Purchasing.PurchaseOrderHeader",
        ") AS Subquery",
        "WHERE RowNum <= 3",
        "ORDER BY VendorID, TotalDue DESC;",
      ].join("\n"),
    },
  },
  {
    slug: "smart-dmv-digital-verification",
    title: "Smart-DMV Digital Verification System",
    category: "Systems Design",
    summary:
      "A graduate capstone built with my project team: a digital verification system for the DC DMV that moves identity-document checks ahead of the visit, pairing AI-assisted OCR intake with conditional appointment scheduling.",
    tools: ["Systems Analysis", "React", "Tailwind CSS", "AWS Textract"],
    repoUrl: "assets/docs/smart-dmv-digital-verification.pdf",
    snippet: {
      filename: "operational_workflow.txt",
      code: [
        "1.0 User Authentication",
        "      |",
        "      v",
        "2.0 AI Intake & Text Extraction",
        "      |",
        "      v",
        "3.0 Automated Validation Logic",
        "      |-- high confidence --> 4.0 Appointment Scheduling",
        "      '-- low confidence  --> DMV Admin manual review",
      ].join("\n"),
    },
  },
  {
    slug: "social-links-profile",
    title: "Social Links Profile Card",
    category: "Web Development",
    summary:
      "A responsive profile card built for a Frontend Mentor challenge with plain HTML and CSS. This portfolio's design grew out of it.",
    tools: ["HTML", "CSS", "Flexbox"],
    repoUrl: "https://github.com/floraphiri/social-links-profile",
    snippet: {
      filename: "main.css",
      code: [
        ".btnpress {",
        "  background-color: hsl(0, 0%, 20%);",
        "  padding: 10px;",
        "  width: 70%;",
        "  text-align: center;",
        "  border-radius: 10px;",
        "}",
        ".btnpress:hover {",
        "  color: hsl(210, 33%, 5%);",
        "  background-color: rgb(66, 138, 114);",
        "  cursor: pointer;",
        "}",
      ].join("\n"),
    },
  },
];

const projectCategories = [
  "All",
  "Machine Learning",
  "Big Data",
  "SQL",
  "Systems Design",
  "Web Development",
];

let visibleProjects = portfolioProjects.slice();
let activeSlideIndex = 0;

function createSnippetFrame(snippet) {
  const snippetFrame = document.createElement("figure");
  snippetFrame.className = "snippet-frame";

  const snippetFilename = document.createElement("figcaption");
  snippetFilename.className = "snippet-filename";
  snippetFilename.textContent = snippet.filename;

  const snippetBody = document.createElement("pre");
  const snippetCode = document.createElement("code");
  // textContent, never innerHTML: snippets contain <, >, and & that must
  // render literally.
  snippetCode.textContent = snippet.code;
  snippetBody.appendChild(snippetCode);

  snippetFrame.appendChild(snippetFilename);
  snippetFrame.appendChild(snippetBody);
  return snippetFrame;
}

function createProjectSlide(project) {
  const projectSlide = document.createElement("article");
  projectSlide.className = "project-slide";

  const snippetColumn = document.createElement("div");
  snippetColumn.className = "slide-snippet-column";
  snippetColumn.appendChild(createSnippetFrame(project.snippet));

  const detailColumn = document.createElement("div");
  detailColumn.className = "slide-detail-column";

  const categoryLabel = document.createElement("span");
  categoryLabel.className = "project-category";
  categoryLabel.textContent = project.category;

  const projectTitle = document.createElement("h3");
  projectTitle.className = "project-title";
  const titleLink = document.createElement("a");
  titleLink.href = "projects/" + project.slug + ".html";
  titleLink.textContent = project.title;
  projectTitle.appendChild(titleLink);

  const projectSummary = document.createElement("p");
  projectSummary.className = "project-summary";
  projectSummary.textContent = project.summary;

  const writeUpLink = document.createElement("a");
  writeUpLink.className = "project-link";
  writeUpLink.href = "projects/" + project.slug + ".html";
  writeUpLink.textContent = "Read the write-up";

  detailColumn.appendChild(categoryLabel);
  detailColumn.appendChild(projectTitle);
  detailColumn.appendChild(projectSummary);

  projectSlide.appendChild(snippetColumn);
  projectSlide.appendChild(detailColumn);
  projectSlide.appendChild(writeUpLink);
  return projectSlide;
}

function updateSlideCounter() {
  const slideCounter = document.querySelector(".slide-counter");
  if (!slideCounter) {
    return;
  }
  slideCounter.textContent =
    activeSlideIndex + 1 + " / " + visibleProjects.length;
}

function renderSlide() {
  const slideViewport = document.querySelector(".slide-viewport");
  if (!slideViewport) {
    return;
  }
  slideViewport.textContent = "";
  const activeProject = visibleProjects[activeSlideIndex];
  if (activeProject) {
    slideViewport.appendChild(createProjectSlide(activeProject));
  }
  updateSlideCounter();
}

function showNextSlide() {
  activeSlideIndex = (activeSlideIndex + 1) % visibleProjects.length;
  renderSlide();
}

function showPreviousSlide() {
  activeSlideIndex =
    (activeSlideIndex - 1 + visibleProjects.length) % visibleProjects.length;
  renderSlide();
}

function renderFilterBar() {
  const filterBar = document.querySelector(".filter-bar");
  if (!filterBar) {
    return;
  }
  projectCategories.forEach(function (categoryName) {
    const filterButton = document.createElement("button");
    filterButton.type = "button";
    filterButton.className = "filter-button";
    filterButton.textContent = categoryName;
    filterButton.dataset.category = categoryName;
    if (categoryName === "All") {
      filterButton.classList.add("is-active");
    }
    filterButton.addEventListener("click", function () {
      applyCategoryFilter(categoryName);
    });
    filterBar.appendChild(filterButton);
  });
}

function applyCategoryFilter(activeCategory) {
  const filterButtons = document.querySelectorAll(".filter-button");
  filterButtons.forEach(function (filterButton) {
    filterButton.classList.toggle(
      "is-active",
      filterButton.dataset.category === activeCategory
    );
  });

  visibleProjects = portfolioProjects.filter(function (project) {
    return activeCategory === "All" || project.category === activeCategory;
  });
  activeSlideIndex = 0;
  renderSlide();
}

function initializeSlideshow() {
  const projectSlideshow = document.querySelector(".project-slideshow");
  if (!projectSlideshow) {
    return;
  }

  const previousButton = projectSlideshow.querySelector(
    ".slide-arrow-previous"
  );
  const nextButton = projectSlideshow.querySelector(".slide-arrow-next");
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);

  // Keyboard support while focus is within the slideshow.
  projectSlideshow.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      showPreviousSlide();
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      showNextSlide();
    }
  });

  renderSlide();
}

document.addEventListener("DOMContentLoaded", function () {
  renderFilterBar();
  initializeSlideshow();
});
