import requests


endpoint = "http://localhost:8000/api/products/" 

data = {
    'title': 'This Field is done',
    'price': 24.99
}
get_response = requests.post(endpoint, json=data) 
print(get_response.json())
