import requests

#endpoint = "https://httpbin.org/status/200"
#endpoint = "https://httpbin.org/anything"
endpoint = "http://localhost:8000/api" #127.0.0.1:8000

get_response = requests.get(endpoint, params={"abc": 123}, json={"query":"hello,world"}) #HTTP Req

#print(get_response.json())
#print(get_response.status_code)
print(get_response.json())
#print(get_response.json()['message'])


#