# Install Rasa 

Documentation

https://rasa.com/docs/rasa/2.x/

**Windows**

Make a virtual environment with following command, I am using python 3.7.8 https://www.python.org/downloads/release/python-378/

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

```
pip3 uninstall python-socketio
```

```
pip3 install python-socketio==4.6.1
```

Check to make sure python-engineio is version 3.13.2 with pip list command (gives you back list of libraries install in virtual env)

**Macbook Intel Chips**

Make a virtual environment with following command, I am using python 3.7.8.

```
python3 -m virtualenv venv
```

Activate environement

```
source venv/bin/activate
```

Install Rasa, this is the version I got to work. Installing Rasa 3 with pip command still gave me issues on windows for some reason

```
pip3 install rasa==2.3.4
```

```
pip3 uninstall python-socketio
```

```
pip3 install python-socketio==4.6.1
```

## Running Rasa

Start the rasa chatbot server (default is http://localhost:5005/ or http://0.0.0.0:5005/ ):

```
rasa run --enable-api --cors "*"
```

Host website on localhost:8080 or any other port you like

In root directory run following command:

```
python -m http.server
```



