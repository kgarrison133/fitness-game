from flask import Flask
import os

# importing environmental variables from .env
from dotenv import load_dotenv
load_dotenv()

def create_app():
    app = Flask(__name__)

    app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')

    from .views import views
    app.register_blueprint(views, url_prefix="/")

    return app