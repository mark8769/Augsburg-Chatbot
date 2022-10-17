#Install Rasa#

**Windows/Mac**

Quick Install Available here

https://rasa.com/docs/rasa/installation

Make a virtual environment with following command, I am using python 3.7.8 (old python version with installer)

```
python3 -m venv ./venv
```

On windows, activate environment with this command

```
.\venv\Scripts\activate
```

Update pip inside environment

```
pip3 install -U pip
```

Install Rasa, version I got to work

```
pip3 install rasa==2.3.4
```

'''
pip3 uninstall python-socketio
'''

```
pip3 install python-socket-io==4.6.1
```

Check to make sure python-engineio is version 3.13.2 with pip list command (gives you back list of libraries install in virtual env)


## Running Rasa

Start the rasa chatbot server (default is http://localhost:5005/ or http://0.0.0.0:5005/ ):

```
rasa run --enable-api --cors "*"
```

Host website on localhost:8080 or whatever you like (I'm using https://www.npmjs.com/package/http-server )

In root use following command (find on http://localhost:8080/ ) :

http-server

or Run Following command:

```
python -m http.server
```



