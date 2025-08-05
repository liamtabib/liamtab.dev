---
title: "GeoStreamline"
description: "Data pipeline for collecting and analyzing café/restaurant data across European cities"
date: "Aug 2025"
demoURL: "https://www.geostreamline.dev/"
repoURL: "https://github.com/liamtabib/geostreamline"
image: "/architecture.png"
license: "MIT"
---

A collection of data pipelines for analyzing café and restaurant metrics across North European cities. Built as a learning project to explore modern data engineering with Python, Dagster, and GCP.

## Architecture

The pipeline consists of 6 dagster orchestrated stages:

1. **Data Ingestion** - Fetches place counts from Google Places Aggregate API and stores timestamped JSON in GCS
2. **File Conversion** - Transforms JSON to Parquet with flattened columns for city, place_type (café or restaurant), rating_filter (> 4.5), and count
3. **BigQuery Load** - Ingests Parquet files into BQ table
4. **dbt Transformation** - Models raw data into metrics in another Bigquery table using dbt core.
5. **Dashboard Export** - Exports BigQuery data to local DuckDB file as a workaround for Evidence.dev plugin issue
6. **Dashboard Refresh** - Updates Evidence.dev dashboard with latest data

## Notes

The project structure has separate modules for ingestion, storage in GCS/BigQuery, dbt transformations, and dashboard module. We support manual execution of individual pipeline stages, and a dagster pipeline deployed on GitHub Actions in a monthly cron schedule.