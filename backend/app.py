from flask import Flask, jsonify, make_response, request, Response
import json
from mongoengine import *
from mongoengine import connect
import mongoengine as db
from api_constants import mongodb_password

app = Flask(__name__)

database_name = "Trombinoscoop"
DB_URI = "mongodb+srv://Hikuro:{}@cluster0.q1kcl.mongodb.net/{}?retryWrites=true&w=majority".format(
    mongodb_password, database_name
)
app.config["MONGODB_HOST"] = DB_URI
db.connect(host=DB_URI)
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

class Message(db.Document):
    post_id = db.StringField()
    fullName = db.StringField()
    content = db.StringField()
    date = db.StringField()

    def to_json(self):
        return {
            "post_id": self.post_id,
            "fullName": self.fullName,
            "content": self.content,
            "date": self.date
        }

@app.route('/add_user', methods=['POST'])
def addUser():
    data = request.get_json()
    username = User.objects(email=data['email']).first()
    if username is None:
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
    else:
        return make_response("USER IN DB", 404)

@app.route('/login', methods=['POST', 'GET'])
def verifyUser():
    data = request.get_json()
    username = User.objects(email=data['email']).first()
    if username is not None:
        if username.password == data['password']:
            return make_response(username.user_id, 200)
        else:
            return make_response("Password is wrong", 404)
    elif username is None:
        return make_response("", 404)

@app.route('/get_user/<emailLocal>', methods=['GET'])
def getUser(emailLocal):
    username = User.objects(email=emailLocal).first()
    if username is not None:
        return {'user': username.to_json()}
    else:
        return {'user': 'Utilisateur non trouve'}

@app.route('/update/<emailLocal>', methods=['POST'])
def updateUser(emailLocal):
    username = User.objects(email=emailLocal).first()
    data = request.get_json()
    if username is not None:
        fields = {
            'status': data['status'],
            'prenom': data['prenom'], 
            'nom': data['nom'],
            'email': data['email'], 
            'password': data['password'],
            'birthday': data['birthday'], 
            'tel': data['tel'],    
            'matricule': data['matricule'],
            'faculte': data['faculte'],        
            'cursus': data['cursus'],       
            'annee': data['annee'] 
        }
        username.update(**fields)
        return make_response("USER UPDATED", 200)
    else:
        print('404')
        return make_response("USER IN DB", 404)

@app.route('/delete_user/<emailLocal>', methods=['POST'])
def deleteUSer(emailLocal):
    username = User.objects(email=emailLocal).first()
    if username is not None:
        username.delete()
        return make_response('', 200)
    else: 
        return make_response('', 404)

@app.route('/add_post', methods=['POST'])
def addPost():
    data = request.get_json()
    if data is not None:
        post = Message(
            post_id = data['post_id'],
            fullName = data['fullName'],
            content = data['content'], 
            date = data['date'],
        )
        post.save()
        return make_response("POST CREATED", 200)
    else:
        return make_response("DATA IS EMPTY", 404)

@app.route('/get_post', methods=['GET'])
def getPosts():
    posts = []
    for post in Message.objects:
        posts.append(post.to_json())
    posts_json = json.dumps(posts)
    return posts_json 

    

if __name__ == '__main__':
    app.run(debug=True)
