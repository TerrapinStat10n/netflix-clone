from django.urls import include, path
from rest_framework import routers
from .views import NfMovieView, NfUserView, registration_view
from rest_framework.authtoken.views import obtain_auth_token
from django.conf import settings
from django.conf.urls.static import static


app_name = "netflix"


router = routers.DefaultRouter()
router.register('api/NfMovies', NfMovieView)
router.register('NfUsers', NfUserView)

urlpatterns = [
    path('', include(router.urls)),
    path('register', registration_view, name="register"),
    path('api/login', obtain_auth_token, name="login")
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
