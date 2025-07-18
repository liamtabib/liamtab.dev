---
title: "Historical Document Processor"
description: "Tool that takes pdf scans, validates the text quality, and builds clean datasets"
date: "Jan 2024"
repoURL: "https://github.com/liamtabib/historical-docs-processor"
---

During my work at KbLab, I built a tool that takes raw document scans, validates the text quality, and builds clean datasets. This work is now free to use and is useful for researchers working with historical print-first documents, but can also be modified to pre-process a knowledge base for LLM/RAG apps.

## Features

- **Raw Scan Processing**: Can handle raw pdf scans and digitized documents
- **Text Quality Validation**: Validates and ensures high-quality text extraction
- **Clean Dataset Creation**: Builds structured datasets from processed documents
- **LLM Training**: Suitable for pre-processing in-house documents for RAG apps. 
- **Open Source**: Free to use and publicly available under MIT license

## Tech Stack

- **Ingestion**: Supports ingestion from APIs using Python requests library
- **OCR**: Uses the open source OCR engine Tesseract for segmentation and text extraction
- **Data transformations**: Provides robust data cleaning and structuring pipelines, using *lxml* for parsing the OCR outputs and *NLTK* for extracting entities