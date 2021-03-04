from rest_framework import viewsets
# from rest_framework.authentication import TokenAuthentication
# from rest_framework.permissions import IsAuthenticated
from .models import NfMovie # , NetflixUser  , NfUser
# from django.contrib.auth.models import User
from .serializers import NfMovieSerializer # , NfUserSerializer, NetflixUserSerializer


# class NfUserView(viewsets.ModelViewSet):
#     """
#     API endpoint that allows users to be viewed or edited.
#     """
#     queryset = NfUser.objects.all()
#     serializer_class = NfUserSerializer


class NfMovieView(viewsets.ModelViewSet):
    queryset = NfMovie.objects.all()
    serializer_class = NfMovieSerializer
    # authentication_classes = [TokenAuthentication, ]
    # permission_classes = [IsAuthenticated, ]

#
# class NetflixUserView(viewsets.ModelViewSet):
#     """
#     API endpoint that allows users to be viewed or edited.
#     """
#     queryset = NetflixUser.objects.all()
#     serializer_class = NetflixUserSerializer
