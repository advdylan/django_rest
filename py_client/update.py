import requests


endpoint = "http://localhost:8000/api/products/1/" 

data = {
    'title' : 'Hello world my old friend',
    'price' : 142
}

get_response = requests.put(endpoint, json=data) 

print(get_response.json())
