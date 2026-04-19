# ⚖️ AI Lawyer Fullstack Platform

A professional legal assistant with a **Backend Cloud Spine** and an **Intelligence Frontend Layer**.

## 🏗️ Technical Architecture

- **Frontend**: Single-page application using Tailwind CSS and Vanilla JavaScript (located in `/static`).
- **Backend API**: Python FastAPI server for persistent SQLite data management ([server.py](server.py)).
- **Intelligence Tier**: Integrated directly with OpenAI GPT-4o via the browser's fetch API for real-time legal reasoning.
- **Persistence Tier**: SQLite database stored locally in the `data/` directory.

## 🚀 Deployment Instructions

1.  **Dependencies**:
    ```bash
    pip install -r requirements.txt
    ```

2.  **Run with Backend Service**:
    ```bash
    python server.py
    ```
    - The server will be accessible at: `http://localhost:8000`

## ⚖️ Features

- **User Profiles**: Persistent user identity linked to case history.
- **Case Repository**: Professional history of all analyzed cases stored in the backend database.
- **Enterprise UI**: A dedicated, high-performance interface for legal professionals.


