from flask import Flask, request, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy
app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///mydatabase.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db = SQLAlchemy(app)
# User Model
class User(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(100), nullable=False)
  email = db.Column(db.String(100), nullable=False, unique=True)
  def __repr__(self):
    return f"User('{self.name}', '{self.email}')"
# Create DB Tables if not exist
with app.app_context():
  db.create_all()
# Routes
@app.route("/")
def index():
  return render_template("index.html")
@app.route("/users", methods=["GET"])
def get_users():
  users = User.query.all()
  result = []
  for user in users:
    result.append({"id": user.id, "name": user.name, "email": user.email})
  return jsonify(result)
@app.route("/users", methods=["POST"])
def create_user():
  data = request.get_json()
  if "name" not in data or "email" not in data:
    return jsonify({"message": "Invalid data"}), 400
  new_user = User(name=data["name"], email=data["email"])
  db.session.add(new_user)
  db.session.commit()
  return jsonify({"message": "User created successfully"})
if __name__ == "__main__":
  app.run(debug=True)