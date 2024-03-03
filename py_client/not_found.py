import requests


endpoint = "http://localhost:8000/api/products/1232413124123124512/" 

get_response = requests.get(endpoint) 

print(get_response.json())
