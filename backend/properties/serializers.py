from rest_framework import serializers
from .models import Properties


class PropertiesSerializer(serializers.ModelSerializer):
    
    photos = serializers.StringRelatedField(many=True)
    class Meta:
        model = Properties
        fields = '__all__'