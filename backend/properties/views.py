from .models import Properties
from rest_framework import viewsets
from django.shortcuts import render
from .serializers import PropertiesSerializer
from rest_framework.permissions import IsAuthenticated

class PropertiesViewSet(viewsets.ModelViewSet):
    queryset = Properties.objects.all()
    serializer_class = PropertiesSerializer
    permission_classes = [IsAuthenticated]
