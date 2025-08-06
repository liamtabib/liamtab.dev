---
title: "Historical Document Processor"
description: "Tool that takes pdf scans, validates the text quality, and builds clean datasets"
date: "Jan 2024"
repoURL: "https://github.com/liamtabib/historical-docs-processor"
license: "MIT"
---

During my work at KbLab, I built a tool that transforms raw PDF scans into structured NLP-ready datasets. This is useful for researchers working with print-first documents that want to curate structured data, but can also be used as a pre-processing step for a knowledge base in RAG projects.

## Architecture

The pipeline consists of several components:

1. **Document Ingestion** - Handles raw PDF scans and digitized documents from various sources
2. **OCR Processing** - Uses Tesseract for text extraction and document segmentation
3. **Quality Validation** - Applies confidence scoring and text quality metrics to filter out reliable extractions and highlight problematic sections
4. **Data Structuring** - Segments the OCR output into structured datasets using python libraries lxml and NLTK

## Notes

This project was created for historical document curation but can be adapted for any document processing workflows, including RAG pre-processing.