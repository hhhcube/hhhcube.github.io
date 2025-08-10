from datetime import datetime
from flask import Flask

app = Flask(__name__)


@app.get("/year")
def year():
    """Return the current year prefixed with a copyright symbol."""
    return f"&copy; {datetime.now().year}"


if __name__ == "__main__":
    app.run()
