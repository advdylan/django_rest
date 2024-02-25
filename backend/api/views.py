from django.http import JsonResponse
import json

def api_home(request, *args, **kwargs):
    #request -> HTTPRequest -> Django
    #request.body
    #print(dir(request))
    print(request.GET) #URL query params
    print(request.POST)
    body = request.body # byte stringJSON data
    data = {}
    try:
        data = json.loads(body) #string of JSON data -> Python dict
    except:
        pass

    print(data)
    
    #print(request.headers)
    data['params'] = dict(request.GET)
    data['headers'] = dict(request.headers)
    data['content_type'] = request.content_type
    return JsonResponse(data)