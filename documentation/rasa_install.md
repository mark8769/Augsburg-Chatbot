#Install Rasa#

**Windows/Mac**

Quick Install Available here

https://rasa.com/docs/rasa/installation


**Workaround for M1 Macs**

https://forum.rasa.com/t/an-unofficial-guide-to-installing-rasa-on-an-m1-macbook/51342

1. Run once, installs system dependencies
```
brew install libpq libxml2 libxmlsec1 pkg-config postgresql
```

2. Install anaconda

3. Create anaconda environment using the env.yml file inside repo

```
conda env create -v --name rasatest -f env.yml
```

4. Activate environment

```
conda activate rasatest
```

5. Install some rasa dependencies manually

```
pip install git+https://github.com/vpol/text.git --no-deps
pip install git+https://github.com/RasaHQ/rasa-sdk@3.0.2 --no-deps
pip install git+https://github.com/RasaHQ/rasa.git@3.0.4 --no-deps
```
