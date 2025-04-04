from flask import Flask, Blueprint
from dotenv import load_dotenv
import os
from extensions import db, migrate, login_manager, bcrypt

'''This is where we will create the actual app and define its configurations,
also register blueprints for routes we define in the routes folder
'''

#load environment variables
load_dotenv()


#create app + fetch configurations from config file
app = Flask(__name__,template_folder='templates',static_folder='static',static_url_path='/')

#app configurations
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')
#app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DTABASE_URL')
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://habit_tracker_user:T3%40Mdatabase%21@127.0.0.1:5555/teamprojectdb'
app.config['SQL_TRACK_MODIFICATIONS'] = False



#initialize entension objects with app
db.init_app(app)
migrate.init_app(app,db)
login_manager.init_app(app)
bcrypt.init_app(app)


#register blueprints from routes folder


with app.app_context():
    #db.drop_all()
    db.create_all()


#run app
if __name__ == '__main__':
    app.run(debug=True)