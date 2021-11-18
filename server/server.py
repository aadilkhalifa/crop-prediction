from flask import Flask

app = Flask(__name__)

@app.route("/crop")
def members():
    return {"crop": "Jute"}

if __name__ == "__main__":
    app.run(debug=True)