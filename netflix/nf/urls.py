from django.urls import include, path
from rest_framework import routers
from .views import NfMovieView # NetflixUserView , NfUserView


router = routers.DefaultRouter()
# router.register('NfUsers', NfUserView)
router.register('NfMovies', NfMovieView)
# router.register('NetflixUsers', NetflixUserView)

urlpatterns = [
    path('', include(router.urls)),
]
