from django.contrib import admin
from nf import views
from django.urls import path, include, re_path


urlpatterns = [
    path('', include('nf.urls')),
    path('admin/', admin.site.urls),
]


#    re_path(r'^NfUsers/$', views.NfUserView), re_path(r'^NfUsers/$', views.NetflixUserView),
