from .models import Properties, Foto
from rest_framework import viewsets
from django.shortcuts import render
from .serializers import PropertiesSerializer, FotoSerializer
from rest_framework.permissions import IsAuthenticated

class PropertiesViewSet(viewsets.ModelViewSet):
    queryset = Properties.objects.all()
    serializer_class = PropertiesSerializer
    permission_classes = [IsAuthenticated]

    def get_permissions(self):
        if self.action == 'list' or self.action == 'retrieve':
            self.permission_classes = []
        else:
            self.permission_classes = [IsAuthenticated]
        
        return super(self.__class__, self).get_permissions()
    
class FotoViewSet(viewsets.ModelViewSet):
    queryset = Foto.objects.all()
    serializer_class = FotoSerializer
    permission_classes = [IsAuthenticated]

    def get_permissions(self):
        if self.action == 'list' or self.action == 'retrieve':
            self.permission_classes = []
        else:
            self.permission_classes = [IsAuthenticated]
        
        return super(self.__class__, self).get_permissions()