import datetime
import json
import os

from flask import Flask, request
from flask_cors import CORS
import jwt

SECRET_KEY = os.getenv('BBQ_SECRET_KEY', os.urandom(24))

app = Flask(__name__)
CORS(app)

def encode_auth_token(user_email):
    """
    Generates Auth token
    :return: string
    """
    try:
        payload = {
            'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=1),
            'iat': datetime.datetime.utcnow(),
            'sub': user_email
        }
        return jwt.encode(
            payload,
            SECRET_KEY,
            algorithm='HS256'
        )
    except Exception as e:
        return e

@app.route('/login', methods=['POST', 'GET'])
def login():
    if request.method == 'GET':
        rv = dict(
                token=encode_auth_token('test@email.com').decode('utf-8'),
                user="user1"
                )
        return json.dumps(rv)

@app.route('/signup', methods=['POST'])
def signup():
    if request.method == 'POST':
        #import pdb
        #pdb.set_trace()
        data = json.loads(request.data.decode('utf-8'))
        user_name = data['username']
        email = data['email']
        
        rv = {
            'token': encode_auth_token(email).decode('utf-8'),
            'user': user_name
        }

        return json.dumps(rv)