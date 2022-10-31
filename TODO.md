# Information on adding new custom actions #

** Documentation on training **
https://rasa.com/docs/rasa/2.x/actions 

**Intents Defined on last merge (Add more you can think of?)**

-mood_neutral
-faq
-chitchat/ask_name
-chitchat/ask_weather
-chitchat/ask_hobbies
-... (Add more here)

**Define Intents under nlu.yml file, can be in domain.yml under nlu keyword but file will get long.**

-mood_neutral - Done
-faq - Done
-chitchat/ask_name - Done
-chitchat/ask_weather - Done
-chitchat/ask_hobbies - Done
-... (Define intents we want, and add as you go)


**Defining rules for our intents (Always do this custom_action when we see this intent):**

-mood_neutral -
-faq -
-chitchat/ask_name -
-chitchat/ask_weather -
-chitchat/ask_hobbies -
-... (Define rules for intents, and add as you go)


**Define stories for users under data/stories.yml. Can be in domain.yml under stories keyword but file will get long.**

There's more under tests/stories but have not looked at what it's for yet.

## TODO: 

Not an error, but warning coming from rasa server when interacting with frontend:

c:\users\administrator\desktop\rasa6\venv\lib\site-packages\rasa\shared\utils\io.py:93: UserWarning: Unable to fetch response templates for chitchat/ask_weather This means that there is likely an issue with the training data.Please make sure you have added response templates for this intent.

Above causes bot not to respond to "What is your name?", "what is your name". Will still respond to basic stuff.

