# Install Rasa 

Documentation

https://rasa.com/docs/rasa/2.x/

**Windows**

Make a virtual environment with following command, I am using python 3.7.8 https://www.python.org/downloads/release/python-378/

```
python -m venv ./venv
```

On windows, activate environment with this command

```
.\venv\Scripts\activate
```

Update pip inside environment

```
pip3 install -U pip
```

Install requirements file (contains all dependencies) from root of project

```
pip3 install documentation\requirements.txt
```

You might have to update your pyenv file if rasa is incompatible with current python version you are using.
Head to venv\pyenv and update file to use different python version. Location of file on macbook
might look something like usr/local/bin/python.version or usr/bin/python.version. You will need to have python.version installed
on your computer for pyenv to be able to find it. Download is above.

```
home = C:\Users\Administrator\AppData\Local\Programs\Python\Python37
include-system-site-packages = false
version = 3.7.8
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
pip3 install -r documentation/requirements.txt
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

To run custom actions inside actions folder. Default is http://localhost:5055/

```
rasa run actions
```