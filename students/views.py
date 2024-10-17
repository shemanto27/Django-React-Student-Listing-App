from django.shortcuts import render

from rest_framework import viewsets
from .models import *
from .serializers import *

# Create your views here.
class StudentView(viewsets.ModelViewSet):
    serializer_class = StudentSerializers
    queryset = Student.objects.all()