from django.contrib import admin
from netflix import views
from django.urls import path, include, re_path


urlpatterns = [
    path('', include('netflix.urls')),
    path('admin/', admin.site.urls),
    re_path(r'^NfUsers/$', views.NfUserView),
    path('api/rest-auth/', include('rest_auth.urls')),
    path('api/rest-auth/registration/', include('rest_auth.registration.urls')),
    path('api-auth/', include('rest_framework.urls')),

]
