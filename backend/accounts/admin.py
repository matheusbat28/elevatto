from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import Users

@admin.register(Users)
class UsersAdmin(UserAdmin):
    list_display = ('id','username', 'email', 'first_name', 'last_name', 'is_staff')
    search_fields = ('username', 'first_name', 'last_name')
    list_filter = ('is_staff', 'is_superuser', 'is_active', 'groups')
    per_page = 10
    fieldsets = (
        (None, {
            'fields': ('username', 'password', 'first_name', 'last_name', 'email')
        }),
        ('Permissôes', {
            'fields': (
                'is_active', 'is_staff', 'is_superuser',
                'groups', 'user_permissions'
                )
        }),
        ('Datas Importantes', {
            'fields': ('last_login', 'date_joined',)
        }),
    )