

## threatexchange.io Doc

- Steps to setup backend
1. Clone the project repo
2. Create virtual environment
        'python -m venv venv'
        'source venv/bin/activate'
        'pip install -r requirements.txt'
3. Download Postgres -> here
4. Setup and run below cmds in terminal
        'psql postgres'
        'CREATE DATABASE threatDB;'
        'CREATE USER threatDB WITH PASSWORD “threatDB”;'
        '\q'
        'psql threatDB'
        'CREATE ROLE “threatDB” superuser;'
        'ALTER ROLE “threatDB” WITH LOGIN;'
5. Run below cmds to run server
        'python manage.py makemigrations'
        'python manage.py migrate'
        'python	manage.py createsupeuser'
        'python manage.py runserver'
6. Application is now live at http://127.0.0.1:8000/
