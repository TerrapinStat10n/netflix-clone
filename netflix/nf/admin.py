from django.contrib import admin

# Register your models here.
from .models import NfMovie # , NetflixUser

# admin.site.register(NfUser)
admin.site.register(NfMovie)
# admin.site.register(NetflixUser)
