from django.contrib import admin
from .models import Properties

@admin.register(Properties)
class PropertiesAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'bedrooms', 'bathrooms', 'parking', 'area', 'price', 'created_at', 'updated_at')
    search_fields = ('title', 'description')
    list_filter = ('bedrooms', 'bathrooms', 'parking', 'price', 'created_at')
    per_page = 10
    fieldsets = (
        (None, {
            'fields': ('title', 'description', 'bedrooms', 'bathrooms', 'parking', 'area', 'photo', 'price')
        }),
        ('Datas Importantes', {
            'fields': ('created_at', 'updated_at')
        }),
    )
