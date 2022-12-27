from django.shortcuts import render
from .models import VideoUploadModel
# Create your views here.
from django.http import HttpResponse


def index(request):
    vid = VideoUploadModel.objects.all()
    return render(request,"index.html",{"video":vid})