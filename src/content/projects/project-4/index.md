---
title: "GeoStreamline"
description: "Data pipeline for collecting and analyzing café/restaurant data across European cities"
date: "Aug 2025"
demoURL: "https://www.geostreamline.dev/"
repoURL: "https://github.com/liamtabib/geostreamline"
---

GeoStreamline is a comprehensive data pipeline that collects and analyzes café and restaurant data across 6 European cities using Google Area Insights API, transforming raw location data into actionable time-series analytics.

## Features

- **Multi-City Data Collection**: Ingests place count data for Helsinki, Stockholm, Copenhagen, Berlin, London, and Amsterdam
- **Incremental Processing**: Supports efficient data updates with quality checks and validation
- **Real-time Analytics**: Creates time-series dashboard for cross-city comparative analysis
- **Cloud-Native Architecture**: Built on Google Cloud with BigQuery for scalable data warehousing
- **Automated Pipeline**: Orchestrated with Dagster for reliable, scheduled data processing

## Technology used

- **Data Processing**: Python 3.12+ with pandas and pyarrow for efficient data transformation
- **Cloud Infrastructure**: Google Cloud Storage, BigQuery, and Area Insights API
- **Pipeline Orchestration**: Dagster for workflow management and scheduling
- **Analytics Stack**: dbt for data modeling and Evidence.dev for dashboard visualization
- **Data Flow**: API → GCS (JSON) → GCS (Parquet) → BigQuery → Dashboard

## Impact

The pipeline enables data-driven insights into hospitality trends across major European cities, providing valuable analytics for market research and business intelligence. The automated, scalable architecture reduces manual data collection efforts while maintaining high data quality standards.