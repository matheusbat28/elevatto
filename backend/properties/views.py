from django.http import Http404
from rest_framework import viewsets
from django.shortcuts import render
import logging
from .models import Properties, Foto
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .serializers import PropertiesSerializer, FotoSerializer

logger = logging.getLogger(__name__)

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
        logger.info(self.action)
        if self.action == 'list' or self.action == 'retrieve':
            self.permission_classes = []
        else:
            self.permission_classes = [IsAuthenticated]
        
        return super(self.__class__, self).get_permissions()

    def list(self, request, *args, **kwargs):
        ids = self.request.query_params.get('ids', None)
        logger.info(ids)
        
        if ids is not None:
            ids = [int(id) for id in ids.split(',')]
            queryset = Foto.objects.filter(id__in=ids)
            serializer = FotoSerializer(queryset, many=True)
            return Response(serializer.data)
        else:
            raise Http404