from flask import Flask, render_template, request, jsonify
from flask_cors import CORS

app = Flask(__name__, template_folder=".")
CORS(app)  # allow frontend JS requests

# Serve HTML page
@app.route("/")
def home():
    return app.send_static_file("index.html")

# Login API
@app.route("/login", methods=["POST"])
def login():
    data = request.json
    name = data.get("name")
    email = data.get("email")
    password = data.get("password")

    # Simple check (you can connect DB here)
    if email and password:
        return jsonify({"success": True, "message": f"Welcome {name}"})
    else:
        return jsonify({"success": False, "message": "Invalid data"})

if __name__ == "__main__":
    app.run(debug=True)
