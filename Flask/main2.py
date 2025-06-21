from flask import Flask, jsonify, request

app=Flask(__name__)

students =[
    {"id":1,"name":"Vishnu"},
    {"id":2,"name":"Gowtham"},
    {"id":3,"name":"Kumar"}
]
@app.route('/students',methods=['GET'])
def get_students():
    return jsonify(students)
@app.route('/students',methods=['POST'])
def add_student():
    new_student=request.get_json()
    students.append(new_student)
    return jsonify({"message":"students added Successfully","students ":students})

@app.route('/students/<int:id>',methods=['PUT'])
def update_student(id):
    data=request.get_json()
    for student in students:
        
        if student['id']==id:
            student['name']=data['name']
            return jsonify({"message":"students updated Successfully","students ":students})
        
    return jsonify({"message":"student not found"})

@app.route('/students/<int:id>',methods=['DELETE'])
def remove_student(id):
    for student in students:
        if student['id']==id:
            students.remove(student)
            return jsonify({"message":"student removed Successfully","students ":students})
        
    return jsonify({"message":"student not found"})

if __name__== "__main__":
    app.run(debug=True,port=8000)