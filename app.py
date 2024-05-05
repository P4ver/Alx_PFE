from flask import Flask, jsonify, request
from flask_mysqldb import MySQL
from flask_cors import CORS

app = Flask(__name__)
CORS(app) 
# MySQL configurations
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = None
app.config['MYSQL_DB'] = 'newdbmysql'

mysql = MySQL(app)

@app.route('/', methods=['GET'])
def get_all_records():
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM flashcards")
    rows = cur.fetchall()
    cur.close()
    data = [{ "id": row[0], "text1": row[1], "text2": row[2], "description": row[3]} for row in rows]
    return jsonify(data)

@app.route('/<int:id>', methods=['GET'])
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

@app.route('/', methods=['POST'])
def insert_record():
    data = request.json
    cur = mysql.connection.cursor()
    cur.execute("INSERT INTO flashcards (text1, text2, description) VALUES (%s, %s, %s)", (data['text1'], data['text2'], data['description']))
    mysql.connection.commit()
    cur.close()
    return "Record inserted successfully"

@app.route('/', methods=['PUT'])
def update_record():
    data = request.json
    cur = mysql.connection.cursor()
    cur.execute("UPDATE flashcards SET text1 = %s, text2 = %s, description = %s WHERE id = %s", (data['text1'], data['text2'], data['description'], data['id']))
    mysql.connection.commit()
    cur.close()
    return "Record updated successfully"

@app.route('/<int:id>', methods=['DELETE'])
def delete_record(id):
    cur = mysql.connection.cursor()
    cur.execute("DELETE FROM flashcards WHERE id = %s", (id,))
    mysql.connection.commit()
    cur.close()
    return "Record deleted successfully"

if __name__ == '__main__':
    app.run(debug=True)
