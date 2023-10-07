import requests, os
import datetime as dt
from dotenv import load_dotenv
load_dotenv()

# Get today's date in a formatted way
today = dt.datetime.today().strftime('%Y-%m-%d')

#import fitbit auth info.
FITBIT_TOKEN = os.getenv('FITBIT_TOKEN')
fitbit_header = {"authorization": "Bearer {}".format(FITBIT_TOKEN)}
FITBIT_ENDPOINT = "https://api.fitbit.com"
# End import fitbit auth info.

# ---Api call
# response = requests.get(url=FITBIT_ENDPOINT+"/1/user/-/activities/date/"+today+".json", headers=fitbit_header)
# response.raise_for_status()
#
# data = response.json()
# steps = data["summary"]["steps"] #returns daily steps
# print(steps)
# ---End Api call
