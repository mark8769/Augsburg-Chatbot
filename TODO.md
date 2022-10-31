# Information on adding new custom actions #

** Documentation on training **
https://rasa.com/docs/rasa/2.x/actions 

**Intents Defined on last merge (Add more you can think of?)**

- mood_neutral
- faq
- chitchat/ask_name
- chitchat/ask_weather
- chitchat/ask_hobbies
- ... (Add more here)

- postGrad_location
- underGrad_location
- academicAdvising_location
- homePage_location

**Put new Intent in domain.yml file under intents section**

- mood_neutral - Done
- faq - Done
- chitchat/ask_name - Done
- chitchat/ask_weather - Done
- chitchat/ask_hobbies - Done
- ... (Define intents we want, and add as you go)

**Define Intents WITH EXAMPLES under nlu.yml file, can be in domain.yml under nlu keyword but file will get long.**

- mood_neutral - Done
- faq - Done
- chitchat/ask_name - Done
- chitchat/ask_weather - Done
- chitchat/ask_hobbies - Done
- ... (Define intents we want, and add as you go)

- postGrad_location
- underGrad_location
- academicAdvising_location - Done
- homePage_location

**Make an utter_intentName in domain.yml file under responses section, else during training bottom error happens during training**

- mood_neutral - Done
- faq - Done
- chitchat/ask_name - Done
- chitchat/ask_weather - Done
- chitchat/ask_hobbies - Done
- ... (Define intents we want, and add as you go)

- postGrad_location
- underGrad_location
- academicAdvising_location - Done
- homePage_location


**Define stories for users under data/stories.yml. Can be in domain.yml under stories keyword but file will get long.**

[stories](https://rasa.com/docs/rasa/2.x/stories)

Need more stories to guide AI in conversations.

- mood_neutral -
- faq - Done
- chitchat/ask_name -
- chitchat/ask_weather -
- chitchat/ask_hobbies -
- ... (Define rules for intents, and add as you go)

- postGrad_location
- underGrad_location
- academicAdvising_location
- homePage_location

**Define test_stories in tests/test_stories so AI has idea of how we want it to respond**

[TestStories](https://rasa.com/docs/rasa/2.x/testing-your-assistant)

**Defining rules for our intents (Always do this custom_action when we see this intent):**

[rules](https://rasa.com/docs/rasa/2.x/rules) (Apparently shouldn't be used often because takes away from responsiveness)

- mood_neutral -
- faq -
- chitchat/ask_name -
- chitchat/ask_weather -
- chitchat/ask_hobbies -
- ... (Define rules for intents, and add as you go)


## TODO: 

Not an error, but warning coming from rasa server when interacting with frontend:

c:\users\administrator\desktop\rasa6\venv\lib\site-packages\rasa\shared\utils\io.py:93: UserWarning: Unable to fetch response templates for chitchat/ask_weather This means that there is likely an issue with the training data.Please make sure you have added response templates for this intent.

Above causes bot not to respond to "What is your name?", "what is your name". Will still respond to basic stuff.

