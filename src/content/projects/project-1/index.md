---
title: "SubSnap"
description: "App that curates subreddits posts and delivers via email with AI summaries"
date: "May 2025"
repoURL: "https://github.com/liamtabib/SubSnap"
image: "/demo.gif"
license: "MIT"
---
Automated Reddit curation service that filters top posts from specified subreddits and delivers AI-generated summaries via email. Built to explore Reddit API integration and AI-powered content processing.

## Architecture

The main components are, in the order:

1. **Reddit API** - Fetches top posts from specified subreddits using Reddit's great API
2. **Content Filtering** - Applies rule-based selection based on upvotes, post age, and other metrics to filter only relevant posts
3. **Summarization with AI** - Processes post content and comments using OpenAI vision-language models to generate summaries, also capable of handling images in the posts
4. **Context Augmentation** - Uses web search to provide additional background information on each post. Especially useful for posts referencing external sites and products
5. **Email Generation** - Formats summaries (using SMTP) into HTML emails with beatiful structured layout and automatically sends on schedule

## Demo

