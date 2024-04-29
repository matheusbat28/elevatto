from .models import Properties
from rest_framework import viewsets
from django.shortcuts import render
from .serializers import PropertiesSerializer
from rest_framework.permissions import IsAuthenticated

class PropertiesViewSet(viewsets.ModelViewSet):
    queryset = Properties.objects.all()
    serializer_class = PropertiesSerializer
    permission_classes = [IsAuthenticated]

    def get_permissions(self):
        if self.action == 'list':
            self.permission_classes = []
        else:
            self.permission_classes = [IsAuthenticated]
        
        return super(self.__class__, self).get_permissions()