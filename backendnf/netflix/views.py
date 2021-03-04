from rest_framework import viewsets
from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import NfMovie, NfUser
from .serializers import NfUserSerializer, NfMovieSerializer
from rest_framework.permissions import IsAuthenticated


class NfMovieView(viewsets.ModelViewSet):
    queryset = NfMovie.objects.all()
    serializer_class = NfMovieSerializer
    # authentication_classes = [TokenAuthentication, ]
    permission_classes = [IsAuthenticated, ]


class NfUserView(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = NfUser.objects.all()
    serializer_class = NfUserSerializer


@api_view(['POST', ])
def registration_view(request):

    if request.method == 'POST':
        serializer = NfUserSerializer(data=request.data)
        data = {}
        if serializer.is_valid():
            netflix = serializer.save()
            data['response'] = "Successfully registered a new user."
            data['email'] = netflix.email
            token = Token.objects.get(user=netflix).key
            data['token'] = token
        else:
            data = serializer.errors
        return Response(data)
