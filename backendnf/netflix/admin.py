from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .forms import NfUserRegistrationForm, NfUserChangeForm
from .models import NfMovie, NfUser


class CustomUserAdmin(UserAdmin):
    add_form = NfUserRegistrationForm
    form = NfUserChangeForm
    model = NfUser
    list_display = ['email', 'is_staff', 'is_active', ]
    list_filter = ('email', 'is_staff', 'is_active',)
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Permissions', {'fields': ('is_staff', 'is_active')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2', 'is_staff', 'is_active')}
         ),
    )
    search_fields = ('email',)
    ordering = ('email',)


admin.site.register(NfMovie)
admin.site.register(NfUser, CustomUserAdmin)
