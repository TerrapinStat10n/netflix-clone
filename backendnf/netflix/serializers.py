from rest_framework import serializers
from .models import NfMovie, NfUser
from rest_framework.authtoken.models import Token


class NfMovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = NfMovie
        fields = "__all__"


class NfUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = NfUser
        fields = "__all__"
        extra_kwargs = {'password': {'write_only': True, 'required': True}}
