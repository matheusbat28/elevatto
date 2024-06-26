from rest_framework import serializers
from .models import Properties, Foto


class PropertiesSerializer(serializers.ModelSerializer): 
    class Meta:
        model = Properties
        fields = '__all__'
        
class FotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Foto
        fields = '__all__'