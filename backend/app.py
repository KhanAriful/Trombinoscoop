from flask import Flask, request, make_response, jsonify
from flask_mongoengine import MongoEngine
from api_constants import mongodb_password

app = Flask(__name__)

database_name = "Trombinoscoop"
DB_URI = "mongodb+srv://Hikuro:{}@cluster0.q1kcl.mongodb.net/{}?retryWrites=true&w=majority".format(
    mongodb_password, database_name
)
app.config["MONGODB_HOST"] = DB_URI

db = MongoEngine()
db.init_app(app)


class User(db.Document):
    user_id = db.StringField()
    status = db.StringField()
    prenom = db.StringField()
    nom = db.StringField()
    email = db.StringField()
    password = db.StringField()
    birthday = db.StringField()
    tel = db.StringField()
    matricule = db.StringField()
    faculte = db.StringField()
    cursus = db.StringField()
    annee = db.StringField()

    def to_json(self):
        return {
            "user_id": self.user_id,
            "status": self.status,
            "prenom": self.prenom,
            "nom": self.nom,
            "email": self.email,
            "password": self.password,
            "birthday": self.birthday,
            "tel": self.tel,
            "matricule": self.matricule,
            "faculte": self.faculte,
            "cursus": self.cursus,
            "annee": self.annee
        }

@app.route('/add_user', methods=['POST'])
def addUser():
    data = request.get_json()
    user = User(
        user_id = data['user_id'],
        status = data['status'],
        prenom = data['prenom'], 
        nom = data['nom'],
        email = data['email'], 
        password = data['password'],
        birthday = data['birthday'], 
        tel = data['tel'],    
        matricule = data['matricule'],
        faculte = data['faculte'],        
        cursus = data['cursus'],       
        annee = data['annee'] 
    )
    user.save()

    return make_response("USER CREATED", 200)

@app.route('/login', methods=['POST', 'GET'])
def verifyUser():
    data = request.get_json()
    user = User
    if data['email'] == user.email:
        if data['password'] == user.password:
            return make_response("LOG IN", 200)
    else:
        return "ERROR"

if __name__ == '__main__':
    app.run(debug=True)

    """  """