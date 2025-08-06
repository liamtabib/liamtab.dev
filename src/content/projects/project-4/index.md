---
title: "GeoStreamline"
description: "Data pipelines with Python, Dagster, and GCP"
date: "Aug 2025"
demoURL: "https://www.geostreamline.dev/"
repoURL: "https://github.com/liamtabib/geostreamline"
image: "/architecture.png"
license: "MIT"
---
A collection of data pipelines for analyzing café and restaurant metrics in a few cities. Built as a learning project to explore end-to-end data pipelines with Python, Dagster, and GCP.

## Architecture

The pipeline consists of dagster orchestrated components:

1. **Data Ingestion** - Fetches place counts from Google Places Aggregate API and stores timestamped JSON in GCS
2. **File Conversion** - Converts JSON to Parquet with flattened fields, again storing in GCS
3. **BigQuery Load** - Ingests Parquet files into BQ table
4. **dbt Transformation** - Models those raw data into aggregate metrics and stores in another Bigquery table
5. **Dashboard Export** - Exports BigQuery data to local DuckDB file due to Evidence.dev BigQuery plugin issue
6. **Dashboard Refresh** - Updates Evidence.dev dashboard with fresh data


## Notes

The project has separate modules for ingestion, storage in GCS/BigQuery, dbt transformations, and dashboard module. You can run each individual pipeline manually. Currently, the project is deployed on GitHub Actions running the dagster pipeline in a monthly cron basis.