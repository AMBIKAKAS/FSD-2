from flask import Blueprint, request, jsonify # type: ignore

student_bp = Blueprint("students", __name__)

# In-memory database
students = []
student_id_counter = 1


# 🔹 CREATE student
@student_bp.route("/students", methods=["POST"])
def create_student():
    global student_id_counter

    data = request.get_json()

    if not data or "name" not in data:
        return jsonify({"error": "Name is required"}), 400

    new_student = {
        "id": student_id_counter,
        "name": data["name"],
        "age": data.get("age")
    }

    students.append(new_student)
    student_id_counter += 1

    return jsonify(new_student), 201


# 🔹 GET all students
@student_bp.route("/students", methods=["GET"])
def get_students():
    return jsonify(students), 200


# 🔹 GET single student
@student_bp.route("/students/<int:student_id>", methods=["GET"])
def get_student(student_id):
    student = next((s for s in students if s["id"] == student_id), None)

    if not student:
        return jsonify({"error": "Student not found"}), 404

    return jsonify(student), 200


# 🔹 UPDATE student
@student_bp.route("/students/<int:student_id>", methods=["PUT"])
def update_student(student_id):
    student = next((s for s in students if s["id"] == student_id), None)

    if not student:
        return jsonify({"error": "Student not found"}), 404

    data = request.get_json()

    student["name"] = data.get("name", student["name"])
    student["age"] = data.get("age", student["age"])

    return jsonify(student), 200


# 🔹 DELETE student
@student_bp.route("/students/<int:student_id>", methods=["DELETE"])
def delete_student(student_id):
    global students

    student = next((s for s in students if s["id"] == student_id), None)

    if not student:
        return jsonify({"error": "Student not found"}), 404

    students = [s for s in students if s["id"] != student_id]

    return jsonify({"message": "Student deleted"}), 200