from django.http import JsonResponse

def api_home(request, *args, **kwargs):
    #request -> HTTPRequest -> Django
    #request.body
    print(dir(request))
    body = request.body # byte stringJSON data
    print(body)
    return JsonResponse({"message": "API Response for Django"})