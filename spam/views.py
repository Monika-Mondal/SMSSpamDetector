from django.shortcuts import render
from django.http import HttpResponse
import os
import joblib

model1=joblib.load(os.path.dirname(__file__)+"\\myModel4.pkl")
model2=joblib.load(os.path.dirname(__file__)+"\\mySVC4.pkl")

# Create your views here.

def index(request):
    #  HttpResponse("Hello Django")
    return render(request,'index.html')

def checkSpam(request):
    #  HttpResponse("Hello Django")
    if (request.method=="POST"):
        finalAns=None

        algo=request.POST.get("algo")
        rawData=request.POST.get("rawData")
        print(algo)
        print(rawData)
        if algo=="Algo-1":
            finalAns=model1.predict([rawData])[0]
            param={"answer":finalAns}
        elif algo=="Algo-2":
            finalAns=model2.predict([rawData])[0]
            param={"answer":finalAns}
        print(finalAns)
        return render(request,'output.html',param)
    else:
        return render(request,'index.html')


def mail_view(request):
    return render(request, 'mail.html')


