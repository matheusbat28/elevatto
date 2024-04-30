from django.contrib import admin
from .models import Properties, Foto

@admin.register(Properties)
class PropertiesAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'bedrooms', 'bathrooms', 'parking', 'area', 'price', 'created_at', 'updated_at')
    search_fields = ('title', 'description')
    list_filter = ('bedrooms', 'bathrooms', 'parking', 'price', 'created_at')
    per_page = 10
    exclude = ('created_at',)

@admin.register(Foto)
class FotoAdmin(admin.ModelAdmin):
    list_display = ('id', 'foto')
    per_page = 10