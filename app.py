from flask import Flask, jsonify, request, redirect, url_for
from flask_mysqldb import MySQL
from flask_cors import CORS
from flask_login import LoginManager, UserMixin, login_user, logout_user, login_required, current_user

app = Flask(__name__)
# CORS(app)
CORS(app, supports_credentials=True)
login_manager = LoginManager()
login_manager.init_app(app)
app.secret_key = 'supersecretkey'  # Replace with your own secret key

# MySQL configurations
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = None
app.config['MYSQL_DB'] = 'newdbmysql'

mysql = MySQL(app)

class User(UserMixin):
    def __init__(self, id, username, password):
        self.id = id
        self.username = username
        self.password = password

@login_manager.user_loader
def load_user(user_id):
    cur = mysql.connection.cursor()
    cur.execute("SELECT id, username, password FROM users WHERE id = %s", (user_id,))
    user = cur.fetchone()
    cur.close()
    if user:
        return User(id=user[0], username=user[1], password=user[2])
    return None

# Route to get all records from the 'flashcards' table
@app.route('/', methods=['GET'])
@login_required
def get_all_records():
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM flashcards")
    rows = cur.fetchall()
    cur.close()
    data = [{ "id": row[0], "text1": row[1], "text2": row[2], "description": row[3]} for row in rows]
    return jsonify(data)

# Route to get a single record by its ID from the 'flashcards' table
@app.route('/<int:id>', methods=['GET'])
@login_required
def get_record(id):
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM flashcards WHERE id = %s", (id,))
    row = cur.fetchone()
    cur.close()
    if row:
        data = { "id": row[0], "text1": row[1], "text2": row[2], "description": row[3]}
        return jsonify(data)
    else:
        return "Record not found", 404

# Route to insert a new record into the 'flashcards' table
@app.route('/', methods=['POST'])
@login_required
def insert_record():
    data = request.json
    cur = mysql.connection.cursor()
    cur.execute("INSERT INTO flashcards (text1, text2, description) VALUES (%s, %s, %s)", (data['text1'], data['text2'], data['description']))
    mysql.connection.commit()
    cur.close()
    return "Record inserted successfully"

# Route to update an existing record in the 'flashcards' table
@app.route('/<int:record_id>', methods=['PUT'])
@login_required
def update_record(record_id):
    data = request.json
    cur = mysql.connection.cursor()
    cur.execute("UPDATE flashcards SET text1 = %s, text2 = %s, description = %s WHERE id = %s", (data['text1'], data['text2'], data['description'], record_id))
    mysql.connection.commit()
    cur.close()
    return "Record updated successfully"

# Route to delete a record from the 'flashcards' table by its ID
@app.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_record(id):
    cur = mysql.connection.cursor()
    cur.execute("DELETE FROM flashcards WHERE id = %s", (id,))
    mysql.connection.commit()
    cur.close()
    return "Record deleted successfully"

# Route for user login
@app.route('/login', methods=['POST'])
def login():
    data = request.json
    username = data['username']
    password = data['password']
    
    cur = mysql.connection.cursor()
    cur.execute("SELECT id, username, password FROM users WHERE username = %s", (username,))
    user = cur.fetchone()
    cur.close()
    
    if user and user[2] == password:  # Compare the plain text password
        user_obj = User(id=user[0], username=user[1], password=user[2])
        login_user(user_obj)
        return jsonify({"message": "Logged in successfully"})
    return jsonify({"message": "Invalid credentials"}), 401
    # if user and user[2] == password:  # Compare the plain text password
    #     user_obj = User(id=user[0], username=user[1], password=user[2])
    #     login_user(user_obj)
    #     return "Logged in successfully"
    # return "Invalid credentials", 401

# Route for user logout
@app.route('/logout', methods=['POST'])
@login_required
def logout():
    logout_user()
    return "Logged out successfully"

@app.route('/register', methods=['POST'])
def register():
    data = request.json
    username = data['username']
    password = data['password']
    
    cur = mysql.connection.cursor()
    cur.execute("INSERT INTO users (username, password) VALUES (%s, %s)", (username, password))
    mysql.connection.commit()
    cur.close()
    return jsonify({"message": "User registered successfully"})


if __name__ == '__main__':
    app.run(debug=True)
