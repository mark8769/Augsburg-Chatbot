# This files contains your custom actions which can be used to run
# custom Python code.
#
# See this guide on how to implement these action:
# https://rasa.com/docs/rasa/custom-actions


# This is a simple example for a custom action which utters "Hello World!"

from typing import Any, Text, Dict, List

from rasa_sdk import Action, Tracker
from rasa_sdk.executor import CollectingDispatcher
#https://www.geeksforgeeks.org/python-find-current-weather-of-any-city-using-openweathermap-api/
import requests
from bs4 import BeautifulSoup

#
#
# class ActionHelloWorld(Action):
#
#     def name(self) -> Text:
#         return "action_hello_world"
#
#     def run(self, dispatcher: CollectingDispatcher,
#             tracker: Tracker,
#             domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
#
#         dispatcher.utter_message(text="Hello World!")
#
#         return []


# Need an API key for weather library in python.....
# subclassing Action class from rasa_sdk library (have to do this)
class tell_weather(Action):
    def name(self) -> Text:
        # have to define name as action_custom_action_name
        return "action_tell_weather"
    
    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

        #header user agent is a string allows the server to identify the O.S and application
        headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'}

        city = "Minneapolis weather"
        # Replaces the space with + operator
        city=city.replace(" ","+")
        #requests and get function to get the information from the URL provided
        res = requests.get(f'https://www.google.com/search?q={city}&oq={city}&aqs=chrome.0.35i39l2j0l4j46j69i60.6128j1j7&sourceid=chrome&ie=UTF-8', headers=headers)
        #Navigates on that particular website ,extract and store the data in soup object
        soup = BeautifulSoup(res.text,'html.parser')
        #gets the information of location 
        location = soup.select('#wob_loc')[0].getText().strip()
        #gets the information of time
        time = soup.select('#wob_dts')[0].getText().strip()
        #gets the desired information
        info = soup.select('#wob_dc')[0].getText().strip()
        #gets the weather information
        weather = soup.select('#wob_tm')[0].getText().strip()

        # could make a big f string, but adding newlines doesn't work, this is the workaround
        dispatcher.utter_message(text=f"Location: {location}")
        dispatcher.utter_message(text=f"Time: {time}")
        dispatcher.utter_message(text=f"Info: {info}")
        dispatcher.utter_message(text=f"Temp: {weather}")

        # these are used for setting slots I believe
        return[]
    