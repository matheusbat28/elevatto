from djoser.serializers import UserSerializer, UserCreateSerializer
from rest_framework import serializers
from .models import Users

class CustomUserSerializer(UserSerializer):
    class Meta(UserSerializer.Meta):
        model = Users
        fields = ('id', 'email', 'username', 'first_name', 'last_name', 'is_active', 'is_staff', 'is_superuser', 'last_login', 'date_joined')