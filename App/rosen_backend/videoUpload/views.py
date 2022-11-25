from django.shortcuts import render
from .models import VideoUpload
# Create your views here.
from django.http import HttpResponse


def index(request):
    vid = VideoUpload.objects.all()
    return render(request,"index.html",{"video":vid})