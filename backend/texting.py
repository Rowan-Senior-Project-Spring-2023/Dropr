# Download the helper library from https://www.twilio.com/docs/python/install
import os
from twilio.rest import Client
# Set environment variables for your credentials
# Read more at http://twil.io/secure
account_sid = "AC2a94ab94e5568f8197afbea217660a72"

f = open("API-KEY-DO-NOT-GIT.txt", "r")
auth_token = f.read()

client = Client(account_sid, auth_token)

numbers = ["+18564174897","+18562980683","+18565000685","+18568123074" ]
for i in range(4):
    
  message = client.messages.create(
    body="DROPR ALERT: This is a test of the dropr sms system",
    from_="+18339172623",
    to=numbers[i]
  )
  print(message.sid)